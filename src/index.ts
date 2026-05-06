import "dotenv/config";
import { getConfig } from "./config";
import { AnkiClient } from "./anki/ankiClient";
import { buildNoteForMode } from "./anki/noteBuilder";
import { findNotesByTag } from "./anki/duplicate";
import { vocabItems } from "./data";
import { validateVocabItem } from "./vocab/validator";
import { SUPPORTED_CARD_MODES } from "./vocab/types";
import type { CardMode, VocabItem } from "./vocab/types";
import { logger } from "./utils/logger";
import { buildModeTag } from "./utils/tags";

type ModeStats = Record<CardMode, { added: number; skipped: number; updated: number }>;

interface SyncStats {
  totalItemsRead: number;
  validItems: number;
  invalidItems: number;
  notesAdded: number;
  notesUpdated: number;
  notesSkipped: number;
  errors: number;
  modeStats: ModeStats;
}

async function main(): Promise<void> {
  const config = getConfig();
  const client = new AnkiClient(config.ankiConnectUrl);
  const stats: SyncStats = {
    totalItemsRead: 0,
    validItems: 0,
    invalidItems: 0,
    notesAdded: 0,
    notesUpdated: 0,
    notesSkipped: 0,
    errors: 0,
    modeStats: createModeStats()
  };

  try {
    stats.totalItemsRead = vocabItems.length;

    for (const [index, rawItem] of vocabItems.entries()) {
      const validation = validateVocabItem(rawItem);

      if (!validation.valid) {
        stats.invalidItems += 1;
        stats.errors += 1;
        logger.error(`Item ${index + 1}: ${validation.error}`);
        continue;
      }

      stats.validItems += 1;

      await syncItemNotes(client, config, validation.item, index + 1, stats);
    }
  } catch (error) {
    stats.errors += 1;
    const message = error instanceof Error ? error.message : "Unknown error";
    logger.error(message);
    process.exitCode = 1;
  } finally {
    printSummary(stats);

    if (stats.errors > 0 && !process.exitCode) {
      process.exitCode = 1;
    }
  }
}

async function syncItemNotes(
  client: AnkiClient,
  config: ReturnType<typeof getConfig>,
  item: VocabItem,
  lineNumber: number,
  stats: SyncStats
): Promise<void> {
  for (const mode of item.cardModes) {
    try {
      await syncModeNote(client, config, item, lineNumber, mode, stats);
    } catch (error) {
      recordNoteError(`Line ${lineNumber}: failed to sync ${mode} for ${item.uid}`, error, stats);
    }
  }
}

async function syncModeNote(
  client: AnkiClient,
  config: ReturnType<typeof getConfig>,
  item: VocabItem,
  lineNumber: number,
  mode: CardMode,
  stats: SyncStats
): Promise<void> {
  const noteBuild = buildNoteForMode(item, config, mode);

  if (!noteBuild.ok) {
    incrementSkipped(stats, mode);
    logger.warn(`Line ${lineNumber}: ${mode} skipped for ${item.uid} because ${noteBuild.reason}`);
    return;
  }

  const noteTag = buildModeTag(item.uid, mode);
  const noteIds = await findNotesByTag(client, noteTag);

  if (noteIds.length === 0) {
    await client.createDeck(noteBuild.note.deckName);
    await client.addNote(noteBuild.note);
    incrementAdded(stats, mode);
    logger.info(`Added ${mode} for ${item.uid}`);
    return;
  }

  if (!shouldUpsertMode(item, mode)) {
    await moveNotesToDeck(client, noteIds, noteBuild.note.deckName);
    incrementSkipped(stats, mode);
    logger.info(`Skipped ${mode} for ${item.uid} because it already exists`);
    return;
  }

  const noteId = noteIds[0];

  if (noteIds.length > 1) {
    logger.warn(`Found multiple notes for ${item.uid} ${mode}; updating the first note only`);
  }

  await client.updateNoteFields(noteId, noteBuild.note.fields);
  await client.addTags([noteId], noteBuild.note.tags);
  await moveNotesToDeck(client, noteIds, noteBuild.note.deckName);
  incrementUpdated(stats, mode);
  logger.info(`Updated ${mode} for ${item.uid}`);
}

function recordNoteError(prefix: string, error: unknown, stats: SyncStats): void {
  stats.errors += 1;
  const message = error instanceof Error ? error.message : "Unknown error";
  logger.error(`${prefix} (${message})`);
}

function createModeStats(): ModeStats {
  return {
    recognition: { added: 0, skipped: 0, updated: 0 },
    cloze: { added: 0, skipped: 0, updated: 0 },
    production: { added: 0, skipped: 0, updated: 0 },
    type_answer: { added: 0, skipped: 0, updated: 0 },
    mistake_fix: { added: 0, skipped: 0, updated: 0 }
  };
}

function incrementAdded(stats: SyncStats, mode: CardMode): void {
  stats.notesAdded += 1;
  stats.modeStats[mode].added += 1;
}

function incrementUpdated(stats: SyncStats, mode: CardMode): void {
  stats.notesUpdated += 1;
  stats.modeStats[mode].updated += 1;
}

function incrementSkipped(stats: SyncStats, mode: CardMode): void {
  stats.notesSkipped += 1;
  stats.modeStats[mode].skipped += 1;
}

function shouldUpsertMode(item: VocabItem, mode: CardMode): boolean {
  return item.upsertModes.includes(mode);
}

async function moveNotesToDeck(client: AnkiClient, noteIds: number[], deckName: string): Promise<void> {
  const allCardIds: number[] = [];

  for (const noteId of noteIds) {
    const cardIds = await client.findCards(`nid:${noteId}`);
    allCardIds.push(...cardIds);
  }

  await client.changeDeck(allCardIds, deckName);
}

function printSummary(stats: SyncStats): void {
  logger.info("");
  logger.info("Sync summary");
  logger.info(`total items read: ${stats.totalItemsRead}`);
  logger.info(`valid items: ${stats.validItems}`);
  logger.info(`invalid items: ${stats.invalidItems}`);
  logger.info(`notes added: ${stats.notesAdded}`);
  logger.info(`notes updated: ${stats.notesUpdated}`);
  logger.info(`notes skipped: ${stats.notesSkipped}`);
  logger.info(`errors: ${stats.errors}`);
  logger.info("cards by mode:");

  for (const mode of SUPPORTED_CARD_MODES) {
    const modeStats = stats.modeStats[mode];
    logger.info(`${mode}: added=${modeStats.added}, updated=${modeStats.updated}, skipped=${modeStats.skipped}`);
  }
}

void main();

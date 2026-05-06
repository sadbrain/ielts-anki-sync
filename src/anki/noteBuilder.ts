import type { AppConfig } from "../config";
import type { AnkiNotePayload } from "./ankiClient";
import type { CardMode, VocabItem } from "../vocab/types";
import { buildNoteTags } from "../utils/tags";

type NoteBuildSuccess = {
  ok: true;
  note: AnkiNotePayload;
};

type NoteBuildFailure = {
  ok: false;
  reason: string;
};

export type NoteBuildResult = NoteBuildSuccess | NoteBuildFailure;

export function hasValidCloze(cloze?: string): boolean {
  return Boolean(cloze && /\{\{c1::.+?\}\}/.test(cloze));
}

export function buildNoteForMode(item: VocabItem, config: AppConfig, mode: CardMode): NoteBuildResult {
  switch (mode) {
    case "recognition":
      return buildRecognitionNote(item, config);
    case "cloze":
      return buildClozeNote(item, config);
    case "production":
      return buildProductionNote(item, config);
    case "type_answer":
      return buildTypeAnswerNote(item, config);
    case "mistake_fix":
      return buildMistakeFixNote(item, config);
  }

  return {
    ok: false,
    reason: `unsupported card mode: ${mode}`
  };
}

function buildRecognitionNote(item: VocabItem, config: AppConfig): NoteBuildResult {
  if (!item.expression || !item.meaningVN) {
    return {
      ok: false,
      reason: "recognition requires expression and meaningVN"
    };
  }

  return {
    ok: true,
    note: {
      deckName: buildDeckName(config, item),
      modelName: "Basic",
      fields: {
        Front: escapeHtml(item.expression),
        Back: buildHtmlBlock([
          ["Meaning VN", item.meaningVN],
          ["Chunk", item.chunk],
          ["Example", item.example],
          ["My sentence", item.mySentence],
          ["Mistake", item.mistake],
          ["Source", item.source]
        ])
      },
      tags: buildNoteTags(item, "recognition"),
      options: {
        allowDuplicate: false
      }
    }
  };
}

function buildClozeNote(item: VocabItem, config: AppConfig): NoteBuildResult {
  if (!item.cloze || !hasValidCloze(item.cloze)) {
    return {
      ok: false,
      reason: "cloze requires a valid {{c1::...}} pattern"
    };
  }

  return {
    ok: true,
    note: {
      deckName: buildDeckName(config, item),
      modelName: "Cloze",
      fields: {
        Text: item.cloze,
        "Back Extra": buildHtmlBlock([
          ["Meaning VN", item.meaningVN],
          ["English meaning", item.englishMeaning],
          ["Chunk", item.chunk],
          ["Example", item.example],
          ["My sentence", item.mySentence],
          ["Mistake", item.mistake],
          ["Source", item.source]
        ])
      },
      tags: buildNoteTags(item, "cloze"),
      options: {
        allowDuplicate: false
      }
    }
  };
}

function buildProductionNote(item: VocabItem, config: AppConfig): NoteBuildResult {
  if (!item.expression || !item.meaningVN) {
    return {
      ok: false,
      reason: "production requires expression and meaningVN"
    };
  }

  return {
    ok: true,
    note: {
      deckName: buildDeckName(config, item),
      modelName: "Basic",
      fields: {
        Front: buildStackedText(item.meaningVN, item.englishMeaning),
        Back: buildHtmlBlock([
          ["Expression", item.expression],
          ["Chunk", item.chunk],
          ["Example", item.example],
          ["My sentence", item.mySentence]
        ])
      },
      tags: buildNoteTags(item, "production"),
      options: {
        allowDuplicate: false
      }
    }
  };
}

function buildTypeAnswerNote(item: VocabItem, config: AppConfig): NoteBuildResult {
  if (!item.typePrompt || !item.typeAnswer) {
    return {
      ok: false,
      reason: "type_answer requires typePrompt and typeAnswer"
    };
  }

  return {
    ok: true,
    note: {
      deckName: buildDeckName(config, item),
      modelName: "Basic (type in the answer)",
      fields: {
        Front: escapeHtml(item.typePrompt),
        Back: escapeHtml(item.typeAnswer)
      },
      tags: buildNoteTags(item, "type_answer"),
      options: {
        allowDuplicate: false
      }
    }
  };
}

function buildMistakeFixNote(item: VocabItem, config: AppConfig): NoteBuildResult {
  if (!item.mistake) {
    return {
      ok: false,
      reason: "mistake_fix requires mistake"
    };
  }

  if (!item.expression && !item.chunk) {
    return {
      ok: false,
      reason: "mistake_fix requires expression or chunk for the correction"
    };
  }

  return {
    ok: true,
    note: {
      deckName: buildDeckName(config, item),
      modelName: "Basic",
      fields: {
        Front: escapeHtml(item.mistakePrompt || `Fix this mistake: ${item.mistake}`),
        Back: buildHtmlBlock([
          ["Correct expression", item.expression],
          ["Correct chunk", item.chunk],
          ["Mistake note", item.mistake]
        ])
      },
      tags: buildNoteTags(item, "mistake_fix"),
      options: {
        allowDuplicate: false
      }
    }
  };
}

function buildHtmlBlock(entries: Array<[string, string | undefined]>): string {
  return entries
    .filter(([, value]) => Boolean(value))
    .map(([label, value]) => `<div><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value || "")}</div>`)
    .join("");
}

function buildStackedText(primary: string, secondary?: string): string {
  const lines = [`<div>${escapeHtml(primary)}</div>`];

  if (secondary) {
    lines.push(`<div>${escapeHtml(secondary)}</div>`);
  }

  return lines.join("");
}

function buildDeckName(config: AppConfig, item: VocabItem): string {
  const topic = item.topic?.trim();
  return topic ? `${config.deckName}::${topic}` : config.deckName;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

import type { VocabItem } from "../vocab/types";
import type { CardMode } from "../vocab/types";

export function buildUidTag(uid: string): string {
  return `uid_${sanitizeTagValue(uid)}`;
}

export function buildModeTag(uid: string, mode: CardMode): string {
  return `${buildUidTag(uid)}_mode_${mode}`;
}

export function buildNoteTags(item: VocabItem, mode: CardMode): string[] {
  const tags = [
    buildUidTag(item.uid),
    buildModeTag(item.uid, mode),
    `card_mode_${mode}`
  ];

  if (item.topic) {
    tags.push(`topic__${sanitizeTagValue(item.topic)}`);
  }

  if (item.skill) {
    tags.push(`skill__${sanitizeTagValue(item.skill)}`);
  }

  if (item.priority) {
    tags.push(`priority__${sanitizeTagValue(item.priority)}`);
  }

  if (item.source) {
    tags.push(`source__${sanitizeTagValue(item.source)}`);
  }

  return tags;
}

function sanitizeTagValue(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .replace(/_+/g, "_") || "item";
}

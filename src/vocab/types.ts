export const SUPPORTED_CARD_MODES = [
  "recognition",
  "cloze",
  "production",
  "type_answer",
  "mistake_fix"
] as const;

export type CardMode = (typeof SUPPORTED_CARD_MODES)[number];

export interface VocabSourceItem {
  uid: string;
  expression?: string;
  meaningVN?: string;
  englishMeaning?: string;
  chunk?: string;
  example?: string;
  cloze?: string;
  mySentence?: string;
  mistake?: string;
  typePrompt?: string;
  typeAnswer?: string;
  mistakePrompt?: string;
  topic?: string;
  skill?: string;
  priority?: string;
  source?: string;
  cardModes?: CardMode[];
  upsertModes?: CardMode[];
}

export interface VocabItem extends Omit<VocabSourceItem, "cardModes" | "upsertModes"> {
  cardModes: CardMode[];
  upsertModes: CardMode[];
}

export interface ParsedLine {
  lineNumber: number;
  raw: unknown;
}

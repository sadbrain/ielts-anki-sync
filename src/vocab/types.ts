export const SUPPORTED_CARD_MODES = [
  "recognition",
  "cloze",
  "production",
  "type_answer",
  "mistake_fix"
] as const;

export type CardMode = (typeof SUPPORTED_CARD_MODES)[number];
export type TextListValue = string | string[];

export interface VocabSourceItem {
  uid: string;
  expression?: string;
  partOfSpeech?: string;
  wordStress?: string;
  googleTranslateUrl?: string;
  meaningVN?: string;
  englishMeaning?: string;
  semantics?: string;
  collocations?: TextListValue;
  synonyms?: TextListValue;
  antonyms?: TextListValue;
  wordFamily?: TextListValue;
  soundNote?: string;
  grammarPattern?: string;
  register?: string;
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

export interface VocabItem extends Omit<
  VocabSourceItem,
  "cardModes" | "upsertModes" | "collocations" | "synonyms" | "antonyms" | "wordFamily"
> {
  collocations?: string[];
  synonyms?: string[];
  antonyms?: string[];
  wordFamily?: string[];
  cardModes: CardMode[];
  upsertModes: CardMode[];
}

export interface ParsedLine {
  lineNumber: number;
  raw: unknown;
}

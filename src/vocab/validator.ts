import type { CardMode, VocabItem } from "./types";
import { SUPPORTED_CARD_MODES } from "./types";

type ValidationSuccess = {
  valid: true;
  item: VocabItem;
};

type ValidationFailure = {
  valid: false;
  error: string;
};

export type ValidationResult = ValidationSuccess | ValidationFailure;

export function validateVocabItem(raw: unknown): ValidationResult {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return { valid: false, error: "Item must be a JSON object" };
  }

  const record = raw as Record<string, unknown>;
  const uid = readRequiredString(record.uid, "uid");
  const cardModes = readCardModes(record.cardModes, "cardModes");
  const upsertModes = readCardModes(record.upsertModes, "upsertModes", []);

  if (!uid.valid) {
    return uid;
  }

  if (!cardModes.valid) {
    return cardModes;
  }

  if (!upsertModes.valid) {
    return upsertModes;
  }

  return {
    valid: true,
    item: {
      uid: uid.value,
      expression: readOptionalString(record.expression) ?? readOptionalString(record.word),
      meaningVN: readOptionalString(record.meaningVN) ?? readOptionalString(record.meaning),
      englishMeaning: readOptionalString(record.englishMeaning),
      chunk: readOptionalString(record.chunk),
      example: readOptionalString(record.example),
      cloze: readOptionalString(record.cloze),
      mySentence: readOptionalString(record.mySentence),
      mistake: readOptionalString(record.mistake),
      typePrompt: readOptionalString(record.typePrompt),
      typeAnswer: readOptionalString(record.typeAnswer),
      mistakePrompt: readOptionalString(record.mistakePrompt),
      topic: readOptionalString(record.topic),
      skill: readOptionalString(record.skill),
      priority: readOptionalString(record.priority),
      source: readOptionalString(record.source),
      cardModes: cardModes.value,
      upsertModes: upsertModes.value
    }
  };
}

function readRequiredString(value: unknown, fieldName: string):
  | { valid: true; value: string }
  | { valid: false; error: string } {
  if (typeof value !== "string" || value.trim() === "") {
    return { valid: false, error: `${fieldName} is required and must be a non-empty string` };
  }

  return { valid: true, value: value.trim() };
}

function readOptionalString(value: unknown): string | undefined {
  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed === "" ? undefined : trimmed;
}

function readCardModes(
  value: unknown,
  fieldName: string,
  defaultModes: CardMode[] = ["recognition"]
):
  | { valid: true; value: CardMode[] }
  | { valid: false; error: string } {
  if (value === undefined) {
    return { valid: true, value: [...defaultModes] };
  }

  if (!Array.isArray(value)) {
    return { valid: false, error: `${fieldName} must be an array of supported strings` };
  }

  if (value.length === 0) {
    return { valid: true, value: [...defaultModes] };
  }

  const modes: CardMode[] = [];

  for (const entry of value) {
    if (typeof entry !== "string") {
      return { valid: false, error: `${fieldName} must contain only strings` };
    }

    const normalized = entry.trim() as CardMode;

    if (!SUPPORTED_CARD_MODES.includes(normalized)) {
      return {
        valid: false,
        error: `Unsupported card mode: ${entry}`
      };
    }

    if (!modes.includes(normalized)) {
      modes.push(normalized);
    }
  }

  return {
    valid: true,
    value: modes.length > 0 ? modes : [...defaultModes]
  };
}

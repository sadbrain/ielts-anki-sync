# ielts-anki-sync

Small TypeScript CLI that reads IELTS vocabulary items from a JSONL file and creates Anki notes through AnkiConnect.

## Requirements

- Node.js 18+
- Anki Desktop installed
- AnkiConnect add-on installed in Anki
- Anki Desktop open while the sync runs

## Setup

1. Install dependencies:

   ```bash
   npm install  
   ```

2. Create `.env` from `.env.example`.

3. Put your data in `data/vocab.jsonl`.
   A starter file is already included, and `data/vocab.sample.jsonl` shows the same format.

## Input format

Each line in `data/vocab.jsonl` must be a JSON object.
`cardModes` controls which note types will be created for the item.
`upsertModes` controls which existing note modes should be updated instead of skipped.

Supported `cardModes`:

- `recognition`
- `cloze`
- `production`
- `type_answer`
- `mistake_fix`

If `cardModes` is missing or an empty array, the tool defaults to `["recognition"]`.
If `upsertModes` is missing or empty, the tool defaults to `[]`.

Example:

```json
{
  "uid": "ielts_rely_on",
  "expression": "rely on",
  "meaningVN": "phu thuoc vao",
  "englishMeaning": "to need or depend on someone or something",
  "chunk": "rely heavily on technology",
  "example": "Many students rely on online resources.",
  "cloze": "Many students {{c1::rely on}} online resources.",
  "mySentence": "I rely on Anki to review IELTS vocabulary.",
  "mistake": "rely on, not rely to",
  "typePrompt": "rely ___ technology",
  "typeAnswer": "on",
  "mistakePrompt": "Many people rely ___ their phones.",
  "topic": "technology",
  "skill": "writing",
  "priority": "active",
  "source": "Cambridge Reading",
  "cardModes": ["recognition", "cloze", "production", "type_answer", "mistake_fix"],
  "upsertModes": ["recognition", "production"]
}
```

## Commands

- `npm run dev`
- `npm run build`
- `npm start`

## Run the sync

```bash
npm run dev
```

The tool will:

- read `data/vocab.jsonl`
- validate each line
- create one or more notes per vocab item based on `cardModes`
- default to `recognition` when `cardModes` is missing or empty
- default to no upsert when `upsertModes` is missing or empty
- update only the existing note modes listed in `upsertModes`
- skip a requested card mode when its required fields are missing
- skip notes that already exist based on stable uid + mode tags
- never delete notes from Anki

## Anki notes

- Deck: `IELTS::Vocabulary`
- Note types used:
  - `Basic`
  - `Cloze`
  - `Basic (type in the answer)`

## After import

Sync Anki Desktop to AnkiWeb manually after importing.

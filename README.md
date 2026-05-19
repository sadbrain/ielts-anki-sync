# ielts-anki-sync

Small TypeScript CLI for syncing IELTS vocabulary data into Anki through AnkiConnect.

## Requirements

- Node.js 18+
- Anki Desktop
- AnkiConnect add-on
- Anki must be open when running sync

## Install

```bash
npm install
```

Create `.env` from `.env.example`, then choose what to sync in [src/data/index.ts](./src/data/index.ts).

## Current Architecture

The project uses TypeScript source data.

- [src/data/index.ts](./src/data/index.ts): chooses the data list to sync.
- [src/data/topics](./src/data/topics): topic-based vocabulary files.
- [src/data/scenes](./src/data/scenes): scene-based vocabulary files.
- [src/data/examples/custom-examples.ts](./src/data/examples/custom-examples.ts): examples for supported fields and card modes.
- [src/vocab/types.ts](./src/vocab/types.ts): vocabulary item schema.
- [src/vocab/validator.ts](./src/vocab/validator.ts): validates and normalizes raw items.
- [src/anki/noteBuilder.ts](./src/anki/noteBuilder.ts): builds Anki notes for each card mode.
- [src/anki/ankiClient.ts](./src/anki/ankiClient.ts): calls AnkiConnect.

The old `data/vocab.jsonl` is not the active source for normal syncing.

## Choosing Data To Sync

Edit [src/data/index.ts](./src/data/index.ts):

```ts
export const vocabItems: VocabSourceItem[] = [
  ...environmentTopic
];
```

You can sync by topic, by scene, or by a mixed list.

## Topic Subdecks

If an item has `topic`, notes are placed under that subdeck:

- root deck: `IELTS::Vocabulary`
- `topic: "Environment"` -> `IELTS::Vocabulary::Environment`
- `topic: "Writing::Task 2"` -> `IELTS::Vocabulary::Writing::Task 2`

If `topic` is missing, notes go to the root deck.

## Vocabulary Item Shape

Minimal item:

```ts
export const item: VocabSourceItem = {
  uid: "ielts_deforestation",
  expression: "deforestation",
  partOfSpeech: "n.",
  wordStress: "/diːˌfɔːrəˈsteɪʃən/",
  meaningVN: "phá rừng",
  topic: "Environment",
  skill: "vocabulary",
  source: "Self Study"
};
```

Enriched item:

```ts
export const item: VocabSourceItem = {
  uid: "ielts_environmental_degradation",
  expression: "environmental degradation",
  partOfSpeech: "n. phrase",
  wordStress: "/ɪnˌvaɪrənˈmentl ˌdeɡrəˈdeɪʃən/",
  meaningVN: "suy thoái môi trường",
  englishMeaning:
    "the process in which the environment becomes damaged or worse - quá trình môi trường bị tổn hại hoặc trở nên tệ hơn",
  synonyms: ["environmental damage (n phrase) - tổn hại môi trường"],
  antonyms: ["environmental restoration (n phrase) - phục hồi môi trường"],
  wordFamily: [
    "degrade (v) - làm suy thoái",
    "degradation (n) - sự suy thoái",
    "environment (n) - môi trường",
    "environmental (adj) - thuộc về môi trường",
    "environmentally (adv) - một cách liên quan đến môi trường"
  ],
  grammarPattern: "tackle + problem/issue - giải quyết + vấn đề",
  chunk: "tackle environmental degradation - giải quyết suy thoái môi trường",
  example: "Governments need to tackle environmental degradation.",
  cloze:
    "Governments need to {{c1::tackle environmental degradation}}. (Các chính phủ cần giải quyết suy thoái môi trường.)",
  typePrompt: "tackle ___ degradation",
  typeAnswer: "environmental",
  cardModes: ["recognition", "production", "cloze", "type_answer"],
  upsertModes: ["recognition", "production", "cloze", "type_answer"]
};
```

## Field Guide

- `uid`: required stable unique ID. Do not change after importing unless you want Anki to treat it as a new item.
- `expression`: English word or phrase.
- `partOfSpeech`: main part of speech for `expression`, such as `n.`, `v.`, `adj.`, `adv.`, `n. phrase`, `v. phrase`, `prep. phrase`, `sentence frame`.
- `wordStress`: IPA or pronunciation/stress note.
- `googleTranslateUrl`: optional listen link. If missing, the tool creates a Google Translate link from `expression`.
- `meaningVN`: Vietnamese meaning.
- `englishMeaning`: concise English meaning, optionally with Vietnamese after ` - `.
- `semantics`: usage note or nuance.
- `collocations`: useful collocations.
- `synonyms`: useful synonyms. Prefer entries with POS labels, e.g. `environmental damage (n phrase) - tổn hại môi trường`.
- `antonyms`: useful opposites. Prefer entries with POS labels.
- `wordFamily`: useful related forms. Always include POS labels when possible, e.g. `pollute (v) - gây ô nhiễm`.
- `soundNote`: pronunciation note.
- `grammarPattern`: grammar pattern for the expression.
- `register`: style/register, such as `formal`, `neutral`, `academic`.
- `chunk`: useful phrase or collocation.
- `example`: example sentence.
- `mySentence`: personal sentence.
- `cloze`: must contain `{{c1::...}}` when using `cloze` mode.
- `mistake`: common mistake note.
- `typePrompt`: prompt for `type_answer`.
- `typeAnswer`: answer for `type_answer`.
- `mistakePrompt`: front side for `mistake_fix`.
- `topic`: subdeck and tag source.
- `skill`: tag, such as `writing`, `speaking`, `vocabulary`.
- `priority`: tag, such as `active`, `review`, `later`.
- `source`: source label.
- `cardModes`: cards to create. Defaults to `["recognition"]`.
- `upsertModes`: existing note modes to update. Defaults to `[]`.

## Card Modes

- `recognition`
  - Note type: `Basic`
  - Front: `expression`
  - Back: meaning, English meaning, part of speech, word stress, listen link, semantics, collocations, synonyms, antonyms, word family, grammar, example, etc.

- `production`
  - Note type: `Basic`
  - Front: `meaningVN` plus `englishMeaning` if present
  - Back: `expression` plus learning details.

- `cloze`
  - Note type: `Cloze`
  - Text: `cloze`
  - Back Extra: learning details.

- `type_answer`
  - Note type: `Basic (type in the answer)`
  - Front: `typePrompt`
  - Back: `typeAnswer`

- `mistake_fix`
  - Note type: `Basic`
  - Front: `mistakePrompt` or generated prompt from `mistake`
  - Back: corrected expression/chunk and learning details.

## Data Style For Topic Work

When adding or enriching a topic:

- Keep each vocabulary entry as one item.
- Do not create separate items only for synonym, antonym, or word family explanations.
- Put useful synonyms, antonyms, and word family inside the main item.
- Add POS labels inside list entries:
  - `environment (n) - môi trường`
  - `environmental (adj) - thuộc về môi trường`
  - `environmentally (adv) - một cách liên quan đến môi trường`
  - `threaten (v) - đe dọa`
  - `pressing environmental problem (n phrase) - vấn đề môi trường cấp bách`
- Keep details useful but not overwhelming.
- Add `type_answer` only for patterns worth drilling, usually prepositions or fixed frames.
- Use natural IELTS Writing Task 2 examples.
- Avoid duplicate UIDs.

## Commands

```bash
npm run build
npm run dev
npm start
```

On Windows PowerShell, use `npm.cmd` if script execution blocks `npm`:

```powershell
npm.cmd run build
npm.cmd run dev
```

## Sync Behavior

Running sync:

```bash
npm run dev
```

The tool:

- reads data from `src/data/index.ts`
- validates each item
- creates notes for every requested `cardModes`
- uses `recognition` if `cardModes` is missing or empty
- skips a card mode if required fields are missing
- checks existing notes by UID/mode tags
- updates only modes listed in `upsertModes`
- skips existing notes for modes not listed in `upsertModes`
- never deletes notes from Anki

## Anki Setup

- Root deck: `IELTS::Vocabulary`
- Note types:
  - `Basic`
  - `Cloze`
  - `Basic (type in the answer)`

After importing, sync Anki Desktop with AnkiWeb manually if you want cloud sync.


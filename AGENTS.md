# Agent Notes

This repo is a personal IELTS vocabulary-to-Anki project. When the user asks to add or enrich words in a topic, treat the request as data work, not as a general refactor.

## User Expectations

- The user often adds new base items first, then asks the agent to fill in useful learning details.
- Read nearby existing items in the same topic before editing. Match the local style and density.
- Do not overload the learner. Add high-value details only:
  - `partOfSpeech`
  - `wordStress`
  - `meaningVN`
  - `englishMeaning` when it helps
  - `grammarPattern` for grammar/collocation patterns
  - `chunk`, `example`, `cloze`
  - `typePrompt`/`typeAnswer` only for useful preposition or structure drills
  - `wordFamily`, `synonyms`, `antonyms` only when useful for IELTS
- Do not create separate items just to explain synonyms, antonyms, or word family. Those belong inside the current vocabulary item.
- Put part-of-speech labels directly in list entries:
  - `environment (n) - môi trường`
  - `environmental (adj) - thuộc về môi trường`
  - `environmentally (adv) - một cách liên quan đến môi trường`
  - `threaten (v) - đe dọa`
  - `environmental damage (n phrase) - tổn hại môi trường`
- Also set `partOfSpeech` for the main `expression`.
- Prefer common short labels:
  - `n.`
  - `v.`
  - `adj.`
  - `adv.`
  - `n. phrase`
  - `v. phrase`
  - `prep. phrase`
  - `sentence frame`
  - `passive v. phrase`
- For phrases, mark the phrase type and, when useful, clarify the key word in list entries.
- Keep examples IELTS-like and natural, especially for Writing Task 2 environment/education/technology topics.
- Fix obvious typos in the user's base examples if they affect learning, such as `preper` -> `proper`.
- Preserve user work. The repo may already have dirty changes; do not revert unrelated edits.

## Topic Editing Workflow

1. Open the target topic file under `src/data/topics`.
2. Identify the starting UID or expression the user mentions.
3. Compare with previous items in the same topic.
4. Enrich the new items directly inside their objects.
5. Ensure each item has a stable unique `uid`.
6. Avoid duplicate UIDs because note tags are based on UID and mode.
7. Run `npm.cmd run build` on Windows PowerShell.
8. If possible, validate that topic data has no invalid items or duplicate UIDs.

## Data Style

Use this shape for enriched vocabulary items:

```ts
{
  ...environmentDefaults,
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
    "environmental (adj) - thuộc về môi trường"
  ],
  chunk: "tackle environmental degradation - giải quyết suy thoái môi trường",
  example: "Environmental degradation could put an end to life on Earth if nothing is done to tackle this issue.",
  cloze:
    "{{c1::Environmental degradation}} could put an end to life on Earth. (Suy thoái môi trường có thể chấm dứt sự sống trên Trái Đất.)",
  cardModes: ["recognition", "production", "cloze"]
}
```

## Architecture Notes

- Source data lives in TypeScript files, not JSONL.
- Main entry point for sync data: `src/data/index.ts`.
- Topic files live in `src/data/topics`.
- Types live in `src/vocab/types.ts`.
- Validation lives in `src/vocab/validator.ts`.
- Anki note construction lives in `src/anki/noteBuilder.ts`.
- `partOfSpeech` is a first-class field and is shown in generated Anki card backs.
- `wordStress` is IPA or pronunciation/stress guidance and is shown in generated Anki card backs.
- Google Translate listen links are generated automatically from `expression` unless `googleTranslateUrl` is set.


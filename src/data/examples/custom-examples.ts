import type { VocabSourceItem } from "../../vocab/types";

// Smallest useful card: if you only want front/back, this is enough.
// Front = expression, Back = meaningVN
export const minimalRecognitionExample: VocabSourceItem = {
  uid: "example_minimal_recognition",
  expression: "substantial",
  wordStress: "/səbˈstænʃl/",
  googleTranslateUrl: "https://translate.google.com/?sl=en&tl=vi&text=substantial&op=translate",
  meaningVN: "dang ke"
};

// Explicit recognition card with per-mode upsert enabled.
export const recognitionWithUpsertExample: VocabSourceItem = {
  uid: "example_recognition_upsert",
  expression: "feasible",
  meaningVN: "kha thi",
  englishMeaning: "possible and practical to do",
  example: "The proposal is financially feasible.",
  topic: "Work",
  cardModes: ["recognition"],
  upsertModes: ["recognition"]
};

// Cloze only: useful when you care about context sentence recall.
export const clozeOnlyExample: VocabSourceItem = {
  uid: "example_cloze_only",
  expression: "play a vital role",
  meaningVN: "dong vai tro quan trong",
  cloze: "Teachers {{c1::play a vital role}} in shaping children's habits.",
  topic: "Education",
  cardModes: ["cloze"]
};

// Production only: Front = meaningVN + optional englishMeaning, Back = expression.
export const productionOnlyExample: VocabSourceItem = {
  uid: "example_production_only",
  expression: "deteriorate",
  meaningVN: "xau di, suy giam",
  englishMeaning: "to become worse",
  example: "Air quality may deteriorate in large cities.",
  topic: "Environment",
  cardModes: ["production"]
};

// Type-answer only: best for particles, prepositions, collocations, spelling drills.
export const typeAnswerOnlyExample: VocabSourceItem = {
  uid: "example_type_answer_only",
  expression: "result in",
  meaningVN: "dan den",
  typePrompt: "result ___ higher costs",
  typeAnswer: "in",
  topic: "Economy",
  cardModes: ["type_answer"]
};

// Mistake-fix only: good when you often make the same grammar or collocation mistake.
export const mistakeFixOnlyExample: VocabSourceItem = {
  uid: "example_mistake_fix_only",
  expression: "discuss",
  meaningVN: "thao luan",
  chunk: "discuss a problem",
  mistake: "discuss about is incorrect; use discuss directly",
  mistakePrompt: "We need to discuss about this issue.",
  topic: "Grammar",
  cardModes: ["mistake_fix"]
};

// Full example: one item can create many notes.
export const fullMultiModeExample: VocabSourceItem = {
  uid: "example_full_multi_mode",
  expression: "cope with",
  meaningVN: "doi pho voi",
  englishMeaning: "to deal successfully with a difficult situation",
  semantics: "Use for managing a difficult situation, not simply solving it completely.",
  collocations: ["cope with stress", "cope with pressure", "cope with change"],
  synonyms: ["deal with", "manage", "handle"],
  antonyms: ["give in", "collapse under pressure"],
  wordFamily: ["coping"],
  soundNote: "The final /p/ links smoothly into with in connected speech.",
  grammarPattern: "cope with + noun",
  register: "neutral",
  chunk: "cope with academic pressure",
  example: "University students must learn to cope with deadlines.",
  cloze: "University students must learn to {{c1::cope with}} deadlines.",
  mySentence: "I am learning to cope with a heavy study schedule.",
  mistake: "cope with, not cope to",
  typePrompt: "cope ___ pressure",
  typeAnswer: "with",
  mistakePrompt: "Students cannot cope ___ stress.",
  topic: "Education",
  skill: "speaking",
  priority: "active",
  source: "Personal Notes",
  cardModes: ["recognition", "cloze", "production", "type_answer", "mistake_fix"],
  upsertModes: ["recognition", "production"]
};

// Nested topic creates deeper subdecks:
// IELTS::Vocabulary::Writing::Task 2
export const nestedTopicExample: VocabSourceItem = {
  uid: "example_nested_topic",
  expression: "it is often argued that",
  meaningVN: "nguoi ta thuong tranh luan rang",
  topic: "Writing::Task 2"
};

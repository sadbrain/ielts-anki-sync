import type { VocabSourceItem } from "../../vocab/types";

export const relyOnItem: VocabSourceItem = {
  uid: "ielts_rely_on",
  expression: "rely on",
  meaningVN: "phu thuoc vao",
  englishMeaning: "to need or depend on someone or something",
  chunk: "rely heavily on technology",
  example: "Many students rely on online resources.",
  cloze: "Many students {{c1::rely on}} online resources.",
  mySentence: "I rely on Anki to review IELTS vocabulary.",
  mistake: "rely on, not rely to",
  typePrompt: "rely ___ technology",
  typeAnswer: "on",
  mistakePrompt: "Many people rely ___ their phones.",
  topic: "Technology",
  skill: "writing",
  priority: "active",
  source: "Cambridge Reading",
  cardModes: ["recognition", "cloze", "production", "type_answer", "mistake_fix"],
  upsertModes: ["recognition", "production"]
};

export const ubiquitousItem: VocabSourceItem = {
  uid: "ielts_ubiquitous",
  expression: "ubiquitous",
  meaningVN: "pho bien, xuat hien o khap noi",
  englishMeaning: "present or found everywhere",
  chunk: "ubiquitous in daily life",
  example: "Smartphones are ubiquitous these days.",
  cloze: "Smartphones are {{c1::ubiquitous}} these days.",
  topic: "Technology",
  skill: "speaking",
  source: "Self Study",
  cardModes: ["recognition", "cloze", "production"]
};

export const technologyTopic: VocabSourceItem[] = [
  relyOnItem,
  ubiquitousItem
];

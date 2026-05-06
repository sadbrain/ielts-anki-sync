import type { VocabSourceItem } from "../../vocab/types";

export const allocateItem: VocabSourceItem = {
  uid: "ielts_allocate",
  expression: "allocate",
  meaningVN: "phan bo, cap phat",
  englishMeaning: "to distribute something for a particular purpose",
  example: "Schools should allocate more resources to reading programs.",
  topic: "Education",
  skill: "writing",
  priority: "active",
  source: "Cambridge Writing",
  cardModes: ["recognition", "production"]
};

export const curriculumItem: VocabSourceItem = {
  uid: "ielts_curriculum",
  expression: "curriculum",
  meaningVN: "chuong trinh hoc",
  englishMeaning: "the subjects included in a course of study",
  example: "The national curriculum should include digital skills.",
  mistake: "use curriculum for the whole program, not a single lesson",
  topic: "Education",
  skill: "writing",
  source: "Self Study"
};

export const availableItem: VocabSourceItem = {
  uid: "ielts_available",
  expression: "available",
  wordStress: "/əˈveɪləbl/",
  googleTranslateUrl: "https://translate.google.com/?sl=en&tl=vi&text=available&op=translate",
  meaningVN: "co san, san co",
  englishMeaning: "able to be used or obtained",
  semantics: "Use for something that can be used, bought, accessed, or reached.",
  collocations: ["readily available", "widely available", "available online", "available resources"],
  synonyms: ["accessible", "obtainable"],
  antonyms: ["unavailable", "inaccessible"],
  wordFamily: ["availability", "unavailable"],
  soundNote: "Stress is on the second syllable: a-VAIL-a-ble.",
  grammarPattern: "available to someone; available for something",
  register: "neutral",
  chunk: "readily available",
  example: "Online resources are widely available to IELTS learners.",
  topic: "Education",
  skill: "writing",
  priority: "active",
  source: "Self Study",
  cardModes: ["recognition", "production"],
  upsertModes: ["recognition", "production"]
};

export const educationTopic: VocabSourceItem[] = [
  allocateItem,
  curriculumItem,
  availableItem
];

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

export const educationTopic: VocabSourceItem[] = [
  allocateItem,
  curriculumItem
];

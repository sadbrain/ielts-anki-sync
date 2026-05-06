import type { VocabSourceItem } from "../vocab/types";
import { writingTechnologyScene } from "./scenes/writing-technology";
import { educationTopic } from "./topics/education";
import { technologyTopic } from "./topics/technology";

// This is the single place where you choose what to sync.
// Pick one style:
// 1. Sync by topic:
export const vocabItems: VocabSourceItem[] = [
  ...technologyTopic,
  ...educationTopic
];

// 2. Sync by scene instead:
// export const vocabItems: VocabSourceItem[] = [...writingTechnologyScene];

// 3. Sync a custom mixed list:
// export const vocabItems: VocabSourceItem[] = [
//   ...technologyTopic,
//   ...writingTechnologyScene
// ];

void writingTechnologyScene;

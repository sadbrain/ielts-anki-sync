import type { VocabSourceItem } from "../../vocab/types";

const environmentDefaults: Pick<
  VocabSourceItem,
  "topic" | "skill" | "source" | "upsertModes" | "cardModes"
> = {
  topic: "Environment",
  skill: "vocabulary",
  source: "Self Study",
  upsertModes: ["recognition", "production"],
  cardModes: ["recognition", "production"]
};

export const environmentTopic: VocabSourceItem[] = [
  {
    ...environmentDefaults,
    uid: "ielts_frequent_occurrence_of",
    expression: "the frequent occurrence of ...",
    meaningVN: "sự xuất hiện thường xuyên của ...",
    englishMeaning: "the fact that something happens often - việc một điều gì đó xảy ra thường xuyên",
    grammarPattern: "the frequent occurrence of + noun - sự xuất hiện thường xuyên của + danh từ",
    example:
      "The frequent occurrence of extreme weather events, such as prolonged droughts and severe heatwaves, is a clear sign of climate change.",
    cloze:
      "The {{c1::frequent occurrence of}} extreme weather events is a clear sign of climate change. (Sự xuất hiện thường xuyên của các hiện tượng thời tiết cực đoan là một dấu hiệu rõ ràng của biến đổi khí hậu.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_extreme_weather_events",
    expression: "extreme weather events",
    meaningVN: "những hiện tượng thời tiết cực đoan",
    englishMeaning:
      "unusually dangerous or severe weather conditions - những hiện tượng thời tiết nguy hiểm hoặc khắc nghiệt bất thường",
    chunk: "extreme weather events such as floods and droughts - các hiện tượng thời tiết cực đoan như lũ lụt và hạn hán",
    example:
      "The frequent occurrence of extreme weather events, such as prolonged droughts and severe heatwaves, is a clear sign of climate change."
  },
  {
    ...environmentDefaults,
    uid: "ielts_prolonged_droughts",
    expression: "prolonged droughts",
    meaningVN: "những đợt hạn hán kéo dài",
    englishMeaning: "long periods with little or no rain - những giai đoạn dài có rất ít hoặc không có mưa",
    chunk: "prolonged droughts in rural areas - những đợt hạn hán kéo dài ở vùng nông thôn",
    example: "Prolonged droughts have affected agriculture in many regions."
  },
  {
    ...environmentDefaults,
    uid: "ielts_severe_heatwaves",
    expression: "severe heatwaves",
    meaningVN: "những đợt nắng nóng cực đoan",
    englishMeaning: "periods of extremely hot weather - những giai đoạn thời tiết cực kỳ nóng",
    chunk: "severe heatwaves in urban areas - những đợt nắng nóng cực đoan ở khu vực đô thị",
    example: "Severe heatwaves have caused health issues in many urban areas."
  },
  {
    ...environmentDefaults,
    uid: "ielts_put_those_living_in_these_areas_in_greater_danger",
    expression: "put those living in these areas in greater danger",
    meaningVN: "đặt những người sống ở những khu vực này vào nguy hiểm lớn hơn",
    semantics:
      "Useful for describing how climate or environmental problems increase human risk. - Dùng để diễn tả việc các vấn đề khí hậu hoặc môi trường làm tăng rủi ro cho con người.",
    example:
      "The frequent occurrence of extreme weather events puts those living in these areas in greater danger.",
    cloze:
      "Extreme weather events can {{c1::put those living in these areas in greater danger}}. (Các hiện tượng thời tiết cực đoan có thể khiến những người sống ở các khu vực này gặp nguy hiểm lớn hơn.)",
    cardModes: ["recognition", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_pose_a_serious_threat_to_somebody_something",
    expression: "pose a serious threat to somebody/something",
    meaningVN: "gây ra mối đe dọa nghiêm trọng cho ai đó hoặc điều gì đó",
    englishMeaning: "to cause major danger to someone or something - gây nguy hiểm lớn cho ai hoặc điều gì đó",
    grammarPattern: "pose a serious threat to + noun - gây ra mối đe dọa nghiêm trọng cho + danh từ",
    chunk: "pose a serious threat to biodiversity - gây ra mối đe dọa nghiêm trọng cho đa dạng sinh học",
    example: "Climate change poses a serious threat to the planet and all its inhabitants.",
    cloze:
      "Climate change {{c1::poses a serious threat to}} the planet. (Biến đổi khí hậu gây ra một mối đe dọa nghiêm trọng cho hành tinh.)",
    typePrompt: "pose a serious threat ___ biodiversity (gây ra mối đe dọa nghiêm trọng cho ___ đa dạng sinh học)",
    typeAnswer: "to",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_pressing_environmental_problem",
    expression: "pressing environmental problem",
    meaningVN: "vấn đề môi trường cấp bách",
    englishMeaning:
      "an urgent environmental issue that needs immediate attention - một vấn đề môi trường cấp bách cần được xử lý ngay",
    synonyms: [
      "urgent environmental issue - vấn đề môi trường khẩn cấp",
      "critical environmental challenge - thách thức môi trường nghiêm trọng"
    ],
    wordFamily: [
      "environment - môi trường",
      "environmental - thuộc về môi trường",
      "environmentally - một cách liên quan đến môi trường"
    ],
    example: "Climate change is one of the most pressing environmental problems facing the world today.",
    cloze:
      "Air pollution is a {{c1::pressing environmental problem}} in many cities. (Ô nhiễm không khí là một vấn đề môi trường cấp bách ở nhiều thành phố.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_on_the_verge_of_extinction",
    expression: "on the verge of extinction",
    meaningVN: "đang trên bờ vực tuyệt chủng",
    grammarPattern: "on the verge of + noun/gerund - ở bên bờ của + danh từ/danh động từ",
    chunk: "species on the verge of extinction - các loài đang trên bờ vực tuyệt chủng",
    example: "Many species are on the verge of extinction due to habitat loss and climate change.",
    cloze:
      "Many species are {{c1::on the verge of extinction}} because of habitat loss. (Nhiều loài đang trên bờ vực tuyệt chủng vì mất môi trường sống.)",
    typePrompt: "on the verge ___ extinction (ở bên bờ vực ___ tuyệt chủng)",
    typeAnswer: "of",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_be_cut_down",
    expression: "be cut down",
    meaningVN: "bị chặt hạ",
    grammarPattern: "trees / forests are cut down - cây cối / rừng bị chặt hạ",
    chunk: "forests are cut down for agriculture - rừng bị chặt hạ để phục vụ nông nghiệp",
    example: "Large areas of forest are cut down every year for farming.",
    cloze:
      "Large areas of forest are {{c1::cut down}} every year. (Những khu vực rừng rộng lớn bị chặt hạ mỗi năm.)",
    typePrompt: "Forests are cut ___ for farming. (Rừng bị chặt ___ để phục vụ canh tác.)",
    typeAnswer: "down",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_annually",
    expression: "annually",
    meaningVN: "hàng năm",
    englishMeaning: "every year - mỗi năm",
    synonyms: [
      "yearly - hàng năm",
      "every year - mỗi năm"
    ],
    wordFamily: [
      "annual - hằng năm",
      "annually - hằng năm"
    ],
    example: "Deforestation leads to the loss of millions of hectares of forest annually."
  },
  {
    ...environmentDefaults,
    uid: "ielts_due_to_habitat_loss",
    expression: "due to habitat loss",
    meaningVN: "do sự mất môi trường sống",
    grammarPattern: "due to + noun / noun phrase - do / bởi vì + danh từ / cụm danh từ",
    example: "Many species are disappearing due to habitat loss.",
    typePrompt: "Many species are disappearing due ___ habitat loss. (Nhiều loài đang biến mất do ___ mất môi trường sống.)",
    typeAnswer: "to",
    cardModes: ["recognition", "production", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_hazardous_gas_emissions",
    expression: "hazardous gas emissions",
    meaningVN: "khí thải độc hại",
    englishMeaning: "the release of dangerous gases into the air - việc thải các loại khí nguy hiểm vào không khí",
    chunk: "reduce hazardous gas emissions - cắt giảm khí thải độc hại",
    example: "Hazardous gas emissions are a major contributor to climate change."
  },
  {
    ...environmentDefaults,
    uid: "ielts_millions_of_tonnes",
    expression: "millions of tonnes",
    meaningVN: "hàng triệu tấn",
    example: "Renewable energy sources can help reduce millions of tonnes of carbon emissions.",
    cardModes: ["recognition"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_being_released_into_the_atmosphere",
    expression: "being released into the atmosphere",
    meaningVN: "đang được thải vào khí quyển",
    grammarPattern: "be released into the atmosphere - được thải vào khí quyển",
    example: "Hazardous gas emissions are being released into the atmosphere at an alarming rate.",
    cloze:
      "Hazardous gases are {{c1::being released into the atmosphere}} at an alarming rate. (Các khí độc hại đang được thải vào khí quyển với tốc độ đáng báo động.)",
    cardModes: ["recognition", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_worsen_something",
    expression: "worsen something",
    meaningVN: "làm cho điều gì đó trở nên tồi tệ hơn",
    grammarPattern: "worsen + noun - làm cho + danh từ trở nên tệ hơn",
    synonyms: [
      "exacerbate - làm trầm trọng thêm",
      "aggravate - làm nghiêm trọng hơn"
    ],
    wordFamily: [
      "worsen - làm xấu đi, làm tệ hơn",
      "worsening - sự trở nên tệ hơn"
    ],
    example: "Pollution can worsen the effects of climate change.",
    cloze:
      "Pollution can {{c1::worsen}} the effects of climate change. (Ô nhiễm có thể làm cho tác động của biến đổi khí hậu trở nên tồi tệ hơn.)",
    cardModes: ["recognition", "production", "cloze"]
  }
];

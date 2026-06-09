import type { VocabSourceItem } from "../../vocab/types";

const environmentDefaults: Pick<
  VocabSourceItem,
  "topic" | "skill" | "source" | "cardModes"
> = {
  topic: "Environment",
  skill: "vocabulary",
  source: "Self Study",
  cardModes: ["recognition", "production"]
};

export const environmentTopic: VocabSourceItem[] = [
  {
    ...environmentDefaults,
    uid: "ielts_frequent_occurrence_of",
    expression: "the frequent occurrence of ...",
    partOfSpeech: "n. phrase",
    wordStress: "/ðə ˈfriːkwənt əˈkɜːrəns əv/",
    meaningVN: "sự xuất hiện thường xuyên của ...",
    englishMeaning: "the fact that something happens often - việc một điều gì đó xảy ra thường xuyên",
    synonyms: ["regular occurrence (n phrase) - sự xuất hiện thường xuyên"],
    antonyms: ["rare occurrence (n phrase) - sự xuất hiện hiếm hoi"],
    wordFamily: [
      "occur (v) - xảy ra / xuất hiện",
      "occurrence (n) - sự xuất hiện",
      "frequent (adj) - thường xuyên",
      "frequently (adv) - một cách thường xuyên"
    ],
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
    partOfSpeech: "n. phrase",
    wordStress: "/ɪkˈstriːm ˈweðər ɪˈvents/",
    meaningVN: "những hiện tượng thời tiết cực đoan",
    englishMeaning:
      "unusually dangerous or severe weather conditions - những hiện tượng thời tiết nguy hiểm hoặc khắc nghiệt bất thường",
    synonyms: ["severe weather events (n phrase) - các hiện tượng thời tiết nghiêm trọng"],
    antonyms: ["mild weather conditions (n phrase) - điều kiện thời tiết ôn hòa"],
    wordFamily: [
      "extreme (adj) - cực đoan / nghiêm trọng",
      "extremely (adv) - cực kỳ",
      "weather (n) - thời tiết",
      "event (n) - sự kiện / hiện tượng"
    ],
    chunk: "extreme weather events such as floods and droughts - các hiện tượng thời tiết cực đoan như lũ lụt và hạn hán",
    example:
      "The frequent occurrence of extreme weather events, such as prolonged droughts and severe heatwaves, is a clear sign of climate change."
  },
  {
    ...environmentDefaults,
    uid: "ielts_prolonged_droughts",
    expression: "prolonged droughts",
    partOfSpeech: "n. phrase",
    wordStress: "/prəˈlɔːŋd draʊts/",
    meaningVN: "những đợt hạn hán kéo dài",
    englishMeaning: "long periods with little or no rain - những giai đoạn dài có rất ít hoặc không có mưa",
    synonyms: ["long-lasting droughts (n phrase) - các đợt hạn hán kéo dài"],
    wordFamily: [
      "prolong (v) - kéo dài",
      "prolonged (adj) - kéo dài",
      "drought (n) - hạn hán"
    ],
    chunk: "prolonged droughts in rural areas - những đợt hạn hán kéo dài ở vùng nông thôn",
    example: "Prolonged droughts have affected agriculture in many regions."
  },
  {
    ...environmentDefaults,
    uid: "ielts_severe_heatwaves",
    expression: "severe heatwaves",
    partOfSpeech: "n. phrase",
    wordStress: "/səˈvɪr ˈhiːtweɪvz/",
    meaningVN: "những đợt nắng nóng cực đoan",
    englishMeaning: "periods of extremely hot weather - những giai đoạn thời tiết cực kỳ nóng",
    synonyms: ["intense heatwaves (n phrase) - các đợt nắng nóng dữ dội"],
    wordFamily: [
      "severe (adj) - nghiêm trọng / dữ dội",
      "severely (adv) - một cách nghiêm trọng",
      "heatwave (n) - đợt nắng nóng"
    ],
    chunk: "severe heatwaves in urban areas - những đợt nắng nóng cực đoan ở khu vực đô thị",
    example: "Severe heatwaves have caused health issues in many urban areas."
  },
  {
    ...environmentDefaults,
    uid: "ielts_put_those_living_in_these_areas_in_greater_danger",
    expression: "put those living in these areas in greater danger",
    partOfSpeech: "v. phrase",
    wordStress: "/pʊt ðoʊz ˈlɪvɪŋ ɪn ðiːz ˈeriəz ɪn ˈɡreɪtər ˈdeɪndʒər/",
    meaningVN: "đặt những người sống ở những khu vực này vào nguy hiểm lớn hơn",
    synonyms: ["place local residents at greater risk (v phrase) - đặt cư dân địa phương vào rủi ro lớn hơn"],
    antonyms: ["protect local residents (v phrase) - bảo vệ cư dân địa phương"],
    wordFamily: [
      "danger (n) - sự nguy hiểm",
      "dangerous (adj) - nguy hiểm",
      "endanger (v) - gây nguy hiểm cho"
    ],
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
    partOfSpeech: "v. phrase",
    wordStress: "/poʊz ə ˈsɪriəs θret tə/",
    meaningVN: "gây ra mối đe dọa nghiêm trọng cho ai đó hoặc điều gì đó",
    englishMeaning: "to cause major danger to someone or something - gây nguy hiểm lớn cho ai hoặc điều gì đó",
    synonyms: [
      "threaten (v) - đe dọa",
      "endanger (v) - gây nguy hiểm cho"
    ],
    antonyms: [
      "protect (v) - bảo vệ",
      "safeguard (v) - bảo vệ"
    ],
    wordFamily: [
      "threat (n) - mối đe dọa",
      "threaten (v) - đe dọa",
      "threatening (adj) - mang tính đe dọa",
      "serious (adj) - nghiêm trọng",
      "seriously (adv) - một cách nghiêm trọng"
    ],
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
    partOfSpeech: "n. phrase",
    wordStress: "/ˈpresɪŋ ɪnˌvaɪrənˈmentl ˈprɑːbləm/",
    meaningVN: "vấn đề môi trường cấp bách",
    englishMeaning:
      "an urgent environmental issue that needs immediate attention - một vấn đề môi trường cấp bách cần được xử lý ngay",
    synonyms: [
      "urgent environmental issue (n phrase) - vấn đề môi trường khẩn cấp",
      "critical environmental challenge (n phrase) - thách thức môi trường nghiêm trọng"
    ],
    antonyms: [
      "minor environmental issue (n phrase) - vấn đề môi trường nhỏ"
    ],
    wordFamily: [
      "environment (n) - môi trường",
      "environmental (adj) - thuộc về môi trường",
      "environmentally (adv) - một cách liên quan đến môi trường"
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
    partOfSpeech: "prep. phrase",
    wordStress: "/ɑːn ðə vɜːrdʒ əv ɪkˈstɪŋkʃən/",
    meaningVN: "đang trên bờ vực tuyệt chủng",
    synonyms: ["close to extinction (adj phrase) - gần tuyệt chủng"],
    antonyms: ["safe from extinction (adj phrase) - không có nguy cơ tuyệt chủng"],
    wordFamily: [
      "extinct (adj) - tuyệt chủng",
      "extinction (n) - sự tuyệt chủng",
      "verge (n) - bờ vực"
    ],
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
    partOfSpeech: "passive phrasal v.",
    wordStress: "/bi kʌt daʊn/",
    meaningVN: "bị chặt hạ",
    synonyms: [
      "be chopped down (passive phrasal v.) - bị chặt hạ",
      "be felled (passive v.) - bị đốn hạ"
    ],
    wordFamily: [
      "cut (v) - cắt / chặt",
      "cutting (n) - việc cắt / chặt"
    ],
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
    partOfSpeech: "adv.",
    wordStress: "/ˈænjuəli/",
    meaningVN: "hàng năm",
    englishMeaning: "every year - mỗi năm",
    synonyms: [
      "yearly (adv) - hàng năm",
      "every year (adv phrase) - mỗi năm"
    ],
    antonyms: [
      "rarely (adv) - hiếm khi"
    ],
    wordFamily: [
      "annual (adj) - hằng năm",
      "annually (adv) - hằng năm"
    ],
    example: "Deforestation leads to the loss of millions of hectares of forest annually."
  },
  {
    ...environmentDefaults,
    uid: "ielts_due_to_habitat_loss",
    expression: "due to habitat loss",
    partOfSpeech: "prep. phrase",
    wordStress: "/duː tə ˈhæbɪtæt lɔːs/",
    meaningVN: "do sự mất môi trường sống",
    synonyms: ["because of habitat destruction (prep. phrase) - vì sự phá hủy môi trường sống"],
    antonyms: ["due to habitat restoration (prep. phrase) - nhờ phục hồi môi trường sống"],
    wordFamily: [
      "habitat (n) - môi trường sống",
      "lose (v) - mất",
      "loss (n) - sự mất mát",
      "lost (adj) - bị mất"
    ],
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
    partOfSpeech: "n. phrase",
    wordStress: "/ˈhæzərdəs ɡæs ɪˈmɪʃənz/",
    meaningVN: "khí thải độc hại",
    englishMeaning: "the release of dangerous gases into the air - việc thải các loại khí nguy hiểm vào không khí",
    synonyms: [
      "toxic gas emissions (n phrase) - khí thải độc hại",
      "harmful emissions (n phrase) - khí thải có hại"
    ],
    antonyms: ["low emissions (n phrase) - lượng phát thải thấp"],
    wordFamily: [
      "hazard (n) - mối nguy",
      "hazardous (adj) - độc hại / nguy hiểm",
      "emit (v) - thải ra",
      "emission (n) - khí thải / sự phát thải"
    ],
    chunk: "reduce hazardous gas emissions - cắt giảm khí thải độc hại",
    example: "Hazardous gas emissions are a major contributor to climate change."
  },
  {
    ...environmentDefaults,
    uid: "ielts_millions_of_tonnes",
    expression: "millions of tonnes",
    partOfSpeech: "quantity phrase",
    wordStress: "/ˈmɪljənz əv tʌnz/",
    meaningVN: "hàng triệu tấn",
    synonyms: ["huge quantities of (quantity phrase) - lượng rất lớn"],
    wordFamily: [
      "million (n) - triệu",
      "tonne (n) - tấn"
    ],
    example: "Renewable energy sources can help reduce millions of tonnes of carbon emissions.",
    cardModes: ["recognition"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_being_released_into_the_atmosphere",
    expression: "being released into the atmosphere",
    partOfSpeech: "passive v. phrase",
    wordStress: "/ˈbiːɪŋ rɪˈliːst ˈɪntu ði ˈætməsfɪr/",
    meaningVN: "đang được thải vào khí quyển",
    synonyms: ["being emitted into the air (passive v. phrase) - đang được thải vào không khí"],
    antonyms: ["being captured before release (passive v. phrase) - được thu giữ trước khi thải ra"],
    wordFamily: [
      "release (v) - thải ra / phóng thích",
      "emission (n) - sự phát thải / khí thải",
      "emit (v) - phát thải",
      "atmosphere (n) - khí quyển",
      "atmospheric (adj) - thuộc về khí quyển"
    ],
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
    partOfSpeech: "v. phrase",
    wordStress: "/ˈwɜːrsən ˈsʌmθɪŋ/",
    meaningVN: "làm cho điều gì đó trở nên tồi tệ hơn",
    grammarPattern: "worsen + noun - làm cho + danh từ trở nên tệ hơn",
    synonyms: [
      "exacerbate (v) - làm trầm trọng thêm",
      "aggravate (v) - làm nghiêm trọng hơn"
    ],
    antonyms: [
      "improve (v) - cải thiện",
      "alleviate (v) - làm giảm bớt"
    ],
    wordFamily: [
      "worse (adj/adv) - tệ hơn",
      "worsen (v) - làm xấu đi / làm tệ hơn",
      "worsening (n/adj) - sự trở nên tệ hơn / đang tệ hơn"
    ],
    example: "Pollution can worsen the effects of climate change.",
    cloze:
      "Pollution can {{c1::worsen}} the effects of climate change. (Ô nhiễm có thể làm cho tác động của biến đổi khí hậu trở nên tồi tệ hơn.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_rising_sea_levels",
    expression: "rising sea levels",
    partOfSpeech: "n. phrase",
    wordStress: "/ˈraɪzɪŋ siː ˈlevəlz/",
    meaningVN: "mực nước biển dâng cao",
    englishMeaning: "an increase in the average level of the sea - sự gia tăng mực nước biển trung bình",
    synonyms: ["sea-level rise (n phrase) - sự dâng mực nước biển"],
    antonyms: ["falling sea levels (n phrase) - mực nước biển hạ xuống"],
    wordFamily: [
      "rise (v/n) - tăng lên / sự tăng",
      "rising (adj) - đang tăng",
      "sea (n) - biển",
      "level (n) - mức"
    ],
    grammarPattern: "rising + plural noun - sự gia tăng của + danh từ số nhiều",
    chunk: "rising sea levels caused by climate change - mực nước biển dâng cao do biến đổi khí hậu",
    example:
      "Some effects of climate change include rising sea levels, more intense heatwaves and more frequent wildfires.",
    cloze:
      "Climate change can lead to {{c1::rising sea levels}}. (Biến đổi khí hậu có thể dẫn đến mực nước biển dâng cao.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_more_intense_heatwaves",
    expression: "more intense heatwaves",
    partOfSpeech: "n. phrase",
    wordStress: "/mɔːr ɪnˈtens ˈhiːtweɪvz/",
    meaningVN: "những đợt nắng nóng nghiêm trọng hơn",
    englishMeaning: "heatwaves that become stronger or more severe - các đợt nắng nóng trở nên mạnh hơn hoặc nghiêm trọng hơn",
    synonyms: [
      "severe heatwaves (n phrase) - các đợt nắng nóng nghiêm trọng",
      "extreme heatwaves (n phrase) - các đợt nắng nóng cực đoan"
    ],
    antonyms: [
      "less intense heatwaves (n phrase) - các đợt nắng nóng ít nghiêm trọng hơn"
    ],
    wordFamily: [
      "intense (adj) - dữ dội / mạnh",
      "intensely (adv) - một cách dữ dội",
      "intensity (n) - cường độ",
      "heatwave (n) - đợt nắng nóng"
    ],
    chunk: "more intense heatwaves in many parts of the world - các đợt nắng nóng nghiêm trọng hơn ở nhiều nơi trên thế giới",
    example: "More intense heatwaves have been observed in many parts of the world.",
    cloze:
      "Many countries are experiencing {{c1::more intense heatwaves}}. (Nhiều quốc gia đang trải qua các đợt nắng nóng nghiêm trọng hơn.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_more_frequent_wildfires",
    expression: "more frequent wildfires",
    partOfSpeech: "n. phrase",
    wordStress: "/mɔːr ˈfriːkwənt ˈwaɪldfaɪərz/",
    meaningVN: "các vụ cháy rừng thường xuyên hơn",
    englishMeaning: "wildfires that happen more often - các vụ cháy rừng xảy ra thường xuyên hơn",
    synonyms: [
      "frequent wildfires (n phrase) - các vụ cháy rừng thường xuyên",
      "regular wildfires (n phrase) - các vụ cháy rừng xảy ra đều đặn"
    ],
    antonyms: [
      "less frequent wildfires (n phrase) - các vụ cháy rừng ít xảy ra hơn"
    ],
    wordFamily: [
      "frequent (adj) - thường xuyên",
      "frequently (adv) - thường xuyên",
      "frequency (n) - tần suất",
      "wildfire (n) - cháy rừng"
    ],
    chunk: "more frequent wildfires during dry seasons - các vụ cháy rừng thường xuyên hơn trong mùa khô",
    example: "More frequent wildfires have been observed in many parts of the world.",
    cloze:
      "Long droughts can result in {{c1::more frequent wildfires}}. (Hạn hán kéo dài có thể dẫn đến các vụ cháy rừng thường xuyên hơn.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_natural_resources",
    expression: "natural resources",
    partOfSpeech: "n. phrase",
    wordStress: "/ˈnætʃərəl rɪˈsɔːrsɪz/",
    meaningVN: "tài nguyên thiên nhiên",
    englishMeaning:
      "materials or substances that exist in nature and can be used by people - vật liệu hoặc chất có sẵn trong tự nhiên và con người có thể sử dụng",
    synonyms: ["raw materials (n phrase) - nguyên liệu thô"],
    antonyms: ["man-made resources (n phrase) - tài nguyên nhân tạo"],
    wordFamily: [
      "nature (n) - thiên nhiên",
      "natural (adj) - tự nhiên",
      "naturally (adv) - một cách tự nhiên",
      "resource (n) - tài nguyên"
    ],
    collocations: [
      "exploit natural resources - khai thác tài nguyên thiên nhiên",
      "conserve natural resources - bảo tồn tài nguyên thiên nhiên",
      "scarce natural resources - tài nguyên thiên nhiên khan hiếm"
    ],
    example: "Life would be much more difficult if natural resources, such as fossil fuels, became scarce."
  },
  {
    ...environmentDefaults,
    uid: "ielts_fossil_fuels",
    expression: "fossil fuels",
    partOfSpeech: "n. phrase",
    wordStress: "/ˈfɑːsəl ˈfjuːəlz/",
    meaningVN: "nhiên liệu hóa thạch",
    englishMeaning:
      "fuels made from ancient plants and animals - nhiên liệu được tạo ra từ thực vật và động vật cổ xưa",
    synonyms: ["coal, oil and gas (n phrase) - than, dầu và khí đốt"],
    antonyms: ["renewable energy (n phrase) - năng lượng tái tạo"],
    collocations: [
      "burn fossil fuels - đốt nhiên liệu hóa thạch",
      "depend on fossil fuels - phụ thuộc vào nhiên liệu hóa thạch",
      "replace fossil fuels - thay thế nhiên liệu hóa thạch"
    ],
    wordFamily: [
      "fossil (n/adj) - hóa thạch",
      "fuel (n/v) - nhiên liệu / cung cấp nhiên liệu"
    ],
    example: "If natural resources, such as fossil fuels, become scarce, the world will face a major challenge."
  },
  {
    ...environmentDefaults,
    uid: "ielts_become_scarce",
    expression: "become scarce",
    partOfSpeech: "v. phrase",
    wordStress: "/bɪˈkʌm skers/",
    meaningVN: "trở nên khan hiếm",
    englishMeaning: "to become difficult to find or obtain - trở nên khó tìm hoặc khó có được",
    grammarPattern: "become scarce - trở nên khan hiếm",
    synonyms: [
      "run short (v phrase) - trở nên thiếu hụt",
      "be in short supply (v phrase) - trong tình trạng thiếu nguồn cung"
    ],
    antonyms: [
      "become abundant (v phrase) - trở nên dồi dào"
    ],
    wordFamily: [
      "scarce (adj) - khan hiếm",
      "scarcity (n) - sự khan hiếm",
      "scarcely (adv) - hầu như không"
    ],
    example: "If natural resources become scarce, the world will face a major challenge.",
    cloze:
      "Natural resources may {{c1::become scarce}} in the future. (Tài nguyên thiên nhiên có thể trở nên khan hiếm trong tương lai.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_in_recent_decades",
    expression: "in recent decades",
    partOfSpeech: "adv. phrase",
    wordStress: "/ɪn ˈriːsənt ˈdekeɪdz/",
    meaningVN: "trong những thập kỷ gần đây",
    grammarPattern: "in recent decades - trong những thập kỷ gần đây",
    synonyms: [
      "in recent years (adv phrase) - trong những năm gần đây",
      "in recent times (adv phrase) - trong thời gian gần đây"
    ],
    wordFamily: [
      "recent (adj) - gần đây",
      "recently (adv) - gần đây",
      "decade (n) - thập kỷ"
    ],
    example: "In recent decades, the world has faced a major challenge from climate change.",
    cloze:
      "{{c1::In recent decades}}, climate change has become a more serious issue. (Trong những thập kỷ gần đây, biến đổi khí hậu đã trở thành một vấn đề nghiêm trọng hơn.)",
    typePrompt: "___ recent decades, climate change has become more serious. (___ những thập kỷ gần đây, biến đổi khí hậu đã trở nên nghiêm trọng hơn.)",
    typeAnswer: "In",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_more_and_more_unpredictable",
    expression: "more and more unpredictable",
    partOfSpeech: "adj. phrase",
    wordStress: "/mɔːr ənd mɔːr ˌʌnprɪˈdɪktəbl/",
    meaningVN: "ngày càng trở nên khó dự đoán",
    englishMeaning: "increasingly difficult to predict - ngày càng khó dự đoán",
    synonyms: ["increasingly unpredictable (adj phrase) - ngày càng khó dự đoán"],
    antonyms: [
      "predictable (adj) - có thể dự đoán được",
      "stable (adj) - ổn định"
    ],
    wordFamily: [
      "predict (v) - dự đoán",
      "prediction (n) - sự dự đoán",
      "predictable (adj) - có thể dự đoán được",
      "unpredictable (adj) - khó dự đoán"
    ],
    example: "The weather in this area is becoming more and more unpredictable.",
    cloze:
      "The weather is becoming {{c1::more and more unpredictable}}. (Thời tiết đang ngày càng trở nên khó dự đoán.)",
    cardModes: ["recognition", "production", "cloze"]
  },
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
  },
  {
    ...environmentDefaults,
    uid: "ielts_put_an_end_to_something",
    expression: "put an end to something",
    partOfSpeech: "v. phrase",
    wordStress: "/pʊt ən end tə ˈsʌmθɪŋ/",
    meaningVN: "chấm dứt điều gì đó",
    grammarPattern: "put an end to + noun - chấm dứt + danh từ",
    synonyms: [
      "end something (v phrase) - chấm dứt điều gì đó",
      "bring something to an end (v phrase) - đưa điều gì đó đến hồi kết"
    ],
    antonyms: [
      "continue something (v phrase) - tiếp tục điều gì đó"
    ],
    wordFamily: [
      "end (n/v) - kết thúc / chấm dứt",
      "ending (n) - phần kết"
    ],
    example: "Environmental degradation could put an end to life on Earth.",
    cloze:
      "Environmental degradation could {{c1::put an end to}} life on Earth. (Suy thoái môi trường có thể chấm dứt sự sống trên Trái Đất.)",
    typePrompt: "put an end ___ something (chấm dứt ___ điều gì đó)",
    typeAnswer: "to",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_tackle_something",
    expression: "tackle something",
    partOfSpeech: "v. phrase",
    wordStress: "/ˈtækl ˈsʌmθɪŋ/",
    meaningVN: "giải quyết / xử lý điều gì đó",
    englishMeaning: "to make an effort to deal with a problem - nỗ lực xử lý một vấn đề",
    synonyms: [
      "address something (v phrase) - giải quyết một vấn đề",
      "deal with something (v phrase) - xử lý điều gì đó",
      "mitigate something (v phrase) - giảm thiểu điều gì đó"
    ],
    antonyms: [
      "ignore something (v phrase) - phớt lờ điều gì đó"
    ],
    wordFamily: [
      "tackle (v/n) - xử lý / cách xử lý"
    ],
    grammarPattern: "tackle + problem/issue/challenge - giải quyết + vấn đề/thách thức",
    example: "We need to tackle the issue of environmental degradation.",
    cloze:
      "Governments need to {{c1::tackle}} environmental degradation. (Các chính phủ cần giải quyết tình trạng suy thoái môi trường.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_nothing_is_done_to_tackle_something",
    expression: "nothing is done to tackle something",
    partOfSpeech: "passive clause",
    wordStress: "/ˈnʌθɪŋ ɪz dʌn tə ˈtækl ˈsʌmθɪŋ/",
    meaningVN: "không có hành động nào được thực hiện để giải quyết điều gì đó",
    synonyms: ["no action is taken to address something (passive clause) - không có hành động nào để xử lý điều gì"],
    antonyms: ["action is taken to address something (passive clause) - có hành động để xử lý điều gì"],
    grammarPattern:
      "nothing is done to tackle + noun - không có hành động nào được thực hiện để giải quyết + danh từ",
    example: "If nothing is done to tackle environmental degradation, the consequences will be severe.",
    cloze:
      "If {{c1::nothing is done to tackle}} environmental degradation, the consequences will be severe. (Nếu không có hành động nào được thực hiện để giải quyết suy thoái môi trường, hậu quả sẽ nghiêm trọng.)",
    cardModes: ["recognition", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_fossil_fuel_power_plants",
    expression: "fossil fuel power plants",
    partOfSpeech: "n. phrase",
    wordStress: "/ˈfɑːsəl ˈfjuːəl ˈpaʊər plænts/",
    meaningVN: "các nhà máy điện sử dụng nhiên liệu hóa thạch",
    englishMeaning:
      "power stations that generate electricity by burning fossil fuels - nhà máy tạo ra điện bằng cách đốt nhiên liệu hóa thạch",
    synonyms: ["coal- or gas-fired power stations (n phrase) - nhà máy điện chạy bằng than hoặc khí đốt"],
    antonyms: ["renewable energy facilities (n phrase) - cơ sở năng lượng tái tạo"],
    wordFamily: [
      "fossil (n/adj) - hóa thạch",
      "fuel (n/v) - nhiên liệu / cung cấp nhiên liệu",
      "power (n/v) - điện năng / cung cấp năng lượng",
      "plant (n) - nhà máy"
    ],
    chunk: "emissions from fossil fuel power plants - khí thải từ các nhà máy điện sử dụng nhiên liệu hóa thạch",
    example:
      "The amount of greenhouse gas emissions released from fossil fuel power plants has dramatically increased in recent decades.",
    cloze:
      "{{c1::Fossil fuel power plants}} are a major source of greenhouse gas emissions. (Các nhà máy điện sử dụng nhiên liệu hóa thạch là nguồn phát thải khí nhà kính lớn.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_be_released_from",
    expression: "be released from ...",
    partOfSpeech: "passive v. phrase",
    wordStress: "/bi rɪˈliːst frəm/",
    meaningVN: "được thải ra từ ...",
    synonyms: ["be emitted from (passive v. phrase) - được phát thải từ"],
    antonyms: ["be captured by (passive v. phrase) - được thu giữ bởi"],
    wordFamily: [
      "release (v/n) - thải ra / sự thải ra",
      "emit (v) - phát thải",
      "emission (n) - sự phát thải / khí thải"
    ],
    grammarPattern: "be released from + source - được thải ra từ + nguồn phát thải",
    chunk: "emissions released from factories - khí thải được thải ra từ các nhà máy",
    example: "Greenhouse gas emissions are released from fossil fuel power plants.",
    cloze:
      "Greenhouse gas emissions are {{c1::released from}} fossil fuel power plants. (Khí nhà kính được thải ra từ các nhà máy điện sử dụng nhiên liệu hóa thạch.)",
    typePrompt: "emissions are released ___ fossil fuel power plants (khí thải được thải ra ___ các nhà máy điện dùng nhiên liệu hóa thạch)",
    typeAnswer: "from",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_be_released_into_the_atmosphere",
    expression: "be released into the atmosphere",
    partOfSpeech: "passive v. phrase",
    wordStress: "/bi rɪˈliːst ˈɪntu ði ˈætməsfɪr/",
    meaningVN: "được thải vào khí quyển",
    synonyms: ["be emitted into the atmosphere (passive v. phrase) - được thải vào khí quyển"],
    antonyms: ["be stored underground (passive v. phrase) - được lưu trữ dưới lòng đất"],
    wordFamily: [
      "release (v/n) - thải ra / sự thải ra",
      "emit (v) - phát thải",
      "emission (n) - sự phát thải / khí thải",
      "atmosphere (n) - khí quyển",
      "atmospheric (adj) - thuộc về khí quyển"
    ],
    grammarPattern: "be released into + place - được thải vào + nơi/chỗ",
    chunk: "carbon dioxide released into the atmosphere - khí CO2 được thải vào khí quyển",
    example: "Large amounts of carbon dioxide are released into the atmosphere every year.",
    cloze:
      "Large amounts of carbon dioxide are {{c1::released into the atmosphere}} every year. (Một lượng lớn CO2 được thải vào khí quyển mỗi năm.)",
    typePrompt: "carbon dioxide is released ___ the atmosphere (CO2 được thải ___ khí quyển)",
    typeAnswer: "into",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_contribute_to_something",
    expression: "contribute to something",
    partOfSpeech: "v. phrase",
    wordStress: "/kənˈtrɪbjuːt tə ˈsʌmθɪŋ/",
    meaningVN: "góp phần gây ra / đóng góp vào điều gì đó",
    englishMeaning: "to be one of the causes of something - là một trong những nguyên nhân gây ra điều gì đó",
    antonyms: [
      "prevent something (v phrase) - ngăn điều gì đó",
      "reduce something (v phrase) - giảm điều gì đó"
    ],
    wordFamily: [
      "contribute (v) - đóng góp / góp phần",
      "contribution (n) - sự đóng góp",
      "contributor (n) - yếu tố góp phần / người đóng góp",
      "contributory (adj) - góp phần gây ra"
    ],
    grammarPattern: "contribute to + noun/gerund - góp phần vào + danh từ/danh động từ",
    chunk: "contribute to climate change - góp phần gây ra biến đổi khí hậu",
    example:
      "Greenhouse gas emissions contribute to climate change, air pollution and global warming.",
    cloze:
      "Greenhouse gas emissions {{c1::contribute to}} climate change. (Khí nhà kính góp phần gây ra biến đổi khí hậu.)",
    typePrompt: "contribute ___ climate change (góp phần gây ra ___ biến đổi khí hậu)",
    typeAnswer: "to",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_amount_of_greenhouse_gas_emissions",
    expression: "the amount of greenhouse gas emissions",
    partOfSpeech: "n. phrase",
    wordStress: "/ði əˈmaʊnt əv ˈɡriːnhaʊs ɡæs ɪˈmɪʃənz/",
    meaningVN: "lượng khí thải nhà kính",
    englishMeaning: "the quantity of gases that trap heat in the atmosphere - lượng khí giữ nhiệt trong khí quyển",
    synonyms: ["the volume of greenhouse gas emissions (n phrase) - lượng khí thải nhà kính"],
    antonyms: ["low greenhouse gas emissions (n phrase) - lượng khí nhà kính thấp"],
    wordFamily: [
      "amount (n) - lượng",
      "emit (v) - phát thải",
      "emission (n) - khí thải / sự phát thải",
      "greenhouse gas (n) - khí nhà kính"
    ],
    chunk: "reduce the amount of greenhouse gas emissions - giảm lượng khí thải nhà kính",
    example:
      "The amount of greenhouse gas emissions released from fossil fuel power plants has dramatically increased in recent decades.",
    cloze:
      "The {{c1::amount of greenhouse gas emissions}} has increased in recent decades. (Lượng khí thải nhà kính đã tăng trong những thập kỷ gần đây.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_dramatically_increase_in_recent_decades",
    expression: "dramatically increase in recent decades",
    partOfSpeech: "v. phrase",
    wordStress: "/drəˈmætɪkli ɪnˈkriːs ɪn ˈriːsənt ˈdekeɪdz/",
    meaningVN: "tăng mạnh trong những thập kỷ gần đây",
    englishMeaning: "to rise very sharply in recent decades - tăng lên rất mạnh trong những thập kỷ gần đây",
    grammarPattern: "dramatically increase in + time period - tăng mạnh trong + khoảng thời gian",
    synonyms: [
      "rise sharply (v phrase) - tăng mạnh",
      "increase significantly (v phrase) - tăng đáng kể"
    ],
    antonyms: [
      "decrease sharply (v phrase) - giảm mạnh",
      "fall significantly (v phrase) - giảm đáng kể"
    ],
    wordFamily: [
      "dramatic (adj) - mạnh / đáng kể",
      "dramatically (adv) - một cách mạnh mẽ / đáng kể",
      "increase (v/n) - tăng / sự gia tăng"
    ],
    example: "Greenhouse gas emissions have dramatically increased in recent decades.",
    cloze:
      "Greenhouse gas emissions have {{c1::dramatically increased in recent decades}}. (Khí thải nhà kính đã tăng mạnh trong những thập kỷ gần đây.)",
    typePrompt: "dramatically increase ___ recent decades (tăng mạnh ___ những thập kỷ gần đây)",
    typeAnswer: "in",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_air_pollution_and_global_warming",
    expression: "air pollution and global warming",
    partOfSpeech: "n. phrase",
    wordStress: "/er pəˈluːʃən ənd ˈɡloʊbl ˈwɔːrmɪŋ/",
    meaningVN: "ô nhiễm không khí và sự nóng lên toàn cầu",
    englishMeaning:
      "dirty air and the long-term rise in the Earth's temperature - không khí bị ô nhiễm và sự tăng nhiệt độ dài hạn của Trái Đất",
    synonyms: ["dirty air and climate warming (n phrase) - không khí ô nhiễm và khí hậu nóng lên"],
    antonyms: ["clean air and climate stability (n phrase) - không khí sạch và khí hậu ổn định"],
    wordFamily: [
      "pollute (v) - gây ô nhiễm",
      "pollution (n) - sự ô nhiễm",
      "pollutant (n) - chất gây ô nhiễm",
      "global (adj) - toàn cầu",
      "warming (n) - sự nóng lên"
    ],
    chunk: "contribute to air pollution and global warming - góp phần gây ô nhiễm không khí và nóng lên toàn cầu",
    example:
      "Greenhouse gas emissions contribute to climate change, air pollution and global warming.",
  },
  {
    ...environmentDefaults,
    uid: "ielts_proper_waste_disposal_systems",
    expression: "proper waste disposal systems",
    partOfSpeech: "n. phrase",
    wordStress: "/ˈprɑːpər weɪst dɪˈspoʊzəl ˈsɪstəmz/",
    meaningVN: "hệ thống xử lý rác thải đúng cách",
    englishMeaning: "systems used to collect, treat, and dispose of waste safely - các hệ thống thu gom, xử lý và loại bỏ rác thải một cách an toàn",
    synonyms: ["safe waste disposal systems (n phrase) - hệ thống xử lý rác thải an toàn"],
    antonyms: ["improper waste disposal systems (n phrase) - hệ thống xử lý rác thải không đúng cách"],
    wordFamily: [
      "dispose (v) - xử lý / loại bỏ",
      "disposal (n) - sự xử lý / loại bỏ",
      "waste (n) - rác thải",
      "proper (adj) - đúng cách / phù hợp",
      "properly (adv) - một cách đúng đắn"
    ],
    chunk: "install proper waste disposal systems - lắp đặt hệ thống xử lý rác thải đúng cách",
    example: "Factories should install proper waste disposal systems to reduce pollution.",
    cloze:
      "Factories should install {{c1::proper waste disposal systems}} to reduce pollution. (Các nhà máy nên lắp đặt hệ thống xử lý rác thải đúng cách để giảm ô nhiễm.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_install_proper_waste_disposal_systems",
    expression: "install proper waste disposal systems",
    partOfSpeech: "v. phrase",
    wordStress: "/ɪnˈstɔːl ˈprɑːpər weɪst dɪˈspoʊzəl ˈsɪstəmz/",
    meaningVN: "lắp đặt hệ thống xử lý rác thải đúng cách",
    synonyms: ["set up safe waste disposal systems (v phrase) - thiết lập hệ thống xử lý rác thải an toàn"],
    wordFamily: [
      "install (v) - lắp đặt",
      "installation (n) - sự lắp đặt",
      "disposal (n) - sự xử lý / loại bỏ",
      "system (n) - hệ thống"
    ],
    grammarPattern: "install + system/equipment - lắp đặt + hệ thống/thiết bị",
    example:
      "One solution would be to require these factories to install proper waste disposal systems.",
    cloze:
      "The government should require factories to {{c1::install proper waste disposal systems}}. (Chính phủ nên yêu cầu các nhà máy lắp đặt hệ thống xử lý rác thải đúng cách.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_one_solution_would_be_to",
    expression: "one solution would be to ...",
    partOfSpeech: "sentence frame",
    wordStress: "/wʌn səˈluːʃən wʊd bi tə/",
    meaningVN: "một giải pháp sẽ là ...",
    wordFamily: [
      "solve (v) - giải quyết",
      "solution (n) - giải pháp"
    ],
    grammarPattern: "one solution would be to + verb - một giải pháp sẽ là + động từ",
    example:
      "One solution would be to require these factories to install proper waste disposal systems.",
    cloze:
      "{{c1::One solution would be to}} impose stricter punishments on polluting factories. (Một giải pháp sẽ là áp đặt hình phạt nghiêm khắc hơn đối với các nhà máy gây ô nhiễm.)",
    typePrompt: "one solution would be ___ require factories to follow the rules",
    typeAnswer: "to",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_require_somebody_to_do_something",
    expression: "require somebody/something to do something",
    partOfSpeech: "v. phrase",
    wordStress: "/rɪˈkwaɪər ˈsʌmbɑːdi tə duː ˈsʌmθɪŋ/",
    meaningVN: "yêu cầu ai đó/cái gì đó làm điều gì đó",
    synonyms: [
      "force somebody to do something (v phrase) - buộc ai làm gì",
      "oblige somebody to do something (v phrase) - bắt buộc ai làm gì"
    ],
    antonyms: ["allow somebody to do something (v phrase) - cho phép ai làm gì"],
    wordFamily: [
      "require (v) - yêu cầu",
      "requirement (n) - yêu cầu / điều kiện cần",
      "required (adj) - bắt buộc"
    ],
    grammarPattern: "require + somebody/something + to + verb - yêu cầu ai/cái gì làm gì",
    example: "The law requires these factories to install proper waste disposal systems.",
    cloze:
      "The law {{c1::requires these factories to install}} proper waste disposal systems. (Luật yêu cầu các nhà máy này lắp đặt hệ thống xử lý rác thải đúng cách.)",
    typePrompt: "require factories ___ install proper waste disposal systems",
    typeAnswer: "to",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_impose_stricter_punishments_on",
    expression: "impose stricter punishments on",
    partOfSpeech: "v. phrase",
    wordStress: "/ɪmˈpoʊz ˈstrɪktər ˈpʌnɪʃmənts ɑːn/",
    meaningVN: "áp đặt hình phạt nghiêm khắc hơn đối với",
    synonyms: ["enforce tougher penalties on (v phrase) - áp dụng mức phạt nặng hơn đối với"],
    antonyms: ["relax punishments for (v phrase) - nới lỏng hình phạt đối với"],
    wordFamily: [
      "impose (v) - áp đặt",
      "strict (adj) - nghiêm khắc",
      "strictly (adv) - một cách nghiêm khắc",
      "punish (v) - trừng phạt",
      "punishment (n) - hình phạt"
    ],
    grammarPattern: "impose stricter punishments on + somebody - áp đặt hình phạt nghiêm khắc hơn đối với + ai",
    example: "impose stricter punishments on those that fail to follow safe waste management practices",
    cloze:
      "Governments should {{c1::impose stricter punishments on}} factories that pollute rivers. (Chính phủ nên áp đặt hình phạt nghiêm khắc hơn đối với các nhà máy gây ô nhiễm sông.)",
    typePrompt: "impose stricter punishments ___ polluting factories",
    typeAnswer: "on",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_fail_to_do_something",
    expression: "fail to do something",
    partOfSpeech: "v. phrase",
    wordStress: "/feɪl tə duː ˈsʌmθɪŋ/",
    meaningVN: "không làm điều gì đó / thất bại trong việc làm gì đó",
    synonyms: ["neglect to do something (v phrase) - không / chểnh mảng làm gì"],
    antonyms: [
      "manage to do something (v phrase) - xoay xở làm được gì",
      "succeed in doing something (v phrase) - thành công trong việc làm gì"
    ],
    wordFamily: [
      "fail (v) - thất bại / không làm được",
      "failure (n) - sự thất bại",
      "failed (adj) - thất bại"
    ],
    grammarPattern: "fail to + verb - không làm / thất bại trong việc làm gì",
    example: "Some factories fail to follow safe waste management practices.",
    cloze:
      "Some companies {{c1::fail to follow}} safe waste management practices. (Một số công ty không tuân thủ các cách quản lý rác thải an toàn.)",
    typePrompt: "fail ___ follow safe waste management practices",
    typeAnswer: "to",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_follow_safe_waste_management_practices",
    expression: "follow safe waste management practices",
    partOfSpeech: "v. phrase",
    wordStress: "/ˈfɑːloʊ seɪf weɪst ˈmænɪdʒmənt ˈpræktɪsɪz/",
    meaningVN: "tuân thủ các quy tắc quản lý rác thải an toàn",
    englishMeaning: "to obey safe ways of handling and disposing of waste - tuân thủ các cách xử lý và loại bỏ rác thải an toàn",
    synonyms: ["comply with safe waste management practices (v phrase) - tuân thủ cách quản lý rác thải an toàn"],
    antonyms: ["violate safe waste management practices (v phrase) - vi phạm cách quản lý rác thải an toàn"],
    wordFamily: [
      "follow (v) - tuân theo",
      "safe (adj) - an toàn",
      "safely (adv) - một cách an toàn",
      "manage (v) - quản lý",
      "management (n) - sự quản lý",
      "practice (n) - quy tắc / cách làm"
    ],
    chunk: "factories that follow safe waste management practices - các nhà máy tuân thủ cách quản lý rác thải an toàn",
    example: "All factories should follow safe waste management practices.",
    cloze:
      "Factories must {{c1::follow safe waste management practices}}. (Các nhà máy phải tuân thủ các cách quản lý rác thải an toàn.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_illegal_logging_and_forest_clearance",
    expression: "illegal logging and forest clearance",
    partOfSpeech: "n. phrase",
    wordStress: "/ɪˈliːɡəl ˈlɔːɡɪŋ ənd ˈfɔːrəst ˈklɪrəns/",
    meaningVN: "khai thác gỗ trái phép và phá rừng",
    englishMeaning: "cutting down trees unlawfully and removing forests - khai thác cây trái luật và xóa bỏ rừng",
    synonyms: ["unlawful logging and deforestation (n phrase) - khai thác gỗ trái phép và phá rừng"],
    antonyms: ["legal forestry and reforestation (n phrase) - lâm nghiệp hợp pháp và tái trồng rừng"],
    wordFamily: [
      "illegal (adj) - bất hợp pháp",
      "illegally (adv) - một cách bất hợp pháp",
      "log (v) - khai thác gỗ",
      "logging (n) - việc khai thác gỗ",
      "clear (v) - dọn sạch / phát quang",
      "clearance (n) - sự phát quang / dọn sạch"
    ],
    example:
      "Illegal logging and forest clearance have a destructive impact on the ecosystem and the economy as a whole.",
    cloze:
      "{{c1::Illegal logging and forest clearance}} can damage both nature and local economies. (Khai thác gỗ trái phép và phá rừng có thể gây hại cho cả thiên nhiên và kinh tế địa phương.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_have_a_destructive_impact_on",
    expression: "have a destructive impact on ...",
    partOfSpeech: "v. phrase",
    wordStress: "/hæv ə dɪˈstrʌktɪv ˈɪmpækt ɑːn/",
    meaningVN: "có tác động phá hủy đến ...",
    synonyms: [
      "damage (v) - gây hại",
      "harm (v) - gây hại"
    ],
    antonyms: ["have a positive impact on (v phrase) - có tác động tích cực đến"],
    wordFamily: [
      "destroy (v) - phá hủy",
      "destruction (n) - sự phá hủy",
      "destructive (adj) - có tính phá hủy",
      "impact (n/v) - tác động / tác động đến"
    ],
    grammarPattern: "have a destructive impact on + noun - có tác động phá hủy đến + danh từ",
    example: "Illegal logging has a destructive impact on the ecosystem.",
    cloze:
      "Illegal logging can {{c1::have a destructive impact on}} the ecosystem. (Khai thác gỗ trái phép có thể có tác động phá hủy đến hệ sinh thái.)",
    typePrompt: "have a destructive impact ___ the ecosystem",
    typeAnswer: "on",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_the_ecosystem_and_the_economy_as_a_whole",
    expression: "the ecosystem and the economy as a whole",
    partOfSpeech: "n. phrase",
    wordStress: "/ði ˈiːkoʊsɪstəm ənd ði ɪˈkɑːnəmi æz ə hoʊl/",
    meaningVN: "lên toàn bộ hệ sinh thái và nền kinh tế",
    wordFamily: [
      "ecosystem (n) - hệ sinh thái",
      "ecology (n) - sinh thái học",
      "ecological (adj) - thuộc về sinh thái",
      "economy (n) - nền kinh tế",
      "economic (adj) - thuộc về kinh tế",
      "economically (adv) - về mặt kinh tế"
    ],
    chunk: "damage the ecosystem and the economy as a whole - gây hại cho toàn bộ hệ sinh thái và nền kinh tế",
    example:
      "Illegal logging can harm the ecosystem and the economy as a whole.",
    cloze:
      "Forest clearance can damage {{c1::the ecosystem and the economy as a whole}}. (Phá rừng có thể gây hại cho toàn bộ hệ sinh thái và nền kinh tế.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_combustion_of_fossil_fuels",
    expression: "the combustion of fossil fuels",
    partOfSpeech: "n. phrase",
    wordStress: "/ðə kəmˈbʌstʃən əv ˈfɑːsəl ˈfjuːəlz/",
    meaningVN: "sự đốt cháy nhiên liệu hóa thạch",
    englishMeaning: "the burning of coal, oil, or gas - việc đốt than đá, dầu hoặc khí đốt",
    synonyms: ["the burning of fossil fuels (n phrase) - việc đốt nhiên liệu hóa thạch"],
    antonyms: ["the use of renewable energy (n phrase) - việc sử dụng năng lượng tái tạo"],
    wordFamily: [
      "combust (v) - đốt cháy",
      "combustion (n) - sự đốt cháy",
      "fossil (n/adj) - hóa thạch",
      "fuel (n/v) - nhiên liệu / cung cấp nhiên liệu"
    ],
    example:
      "There are various factors leading to global warming, including deforestation, the combustion of fossil fuels, intensive farming and improper waste management.",
    cloze:
      "{{c1::The combustion of fossil fuels}} is a major cause of global warming. (Việc đốt nhiên liệu hóa thạch là một nguyên nhân lớn gây nóng lên toàn cầu.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_deforestation",
    expression: "deforestation",
    partOfSpeech: "n.",
    wordStress: "/diːˌfɔːrəˈsteɪʃən/",
    meaningVN: "phá rừng",
    englishMeaning: "the large-scale removal of forests - việc chặt phá rừng trên diện rộng",
    synonyms: ["forest clearance (n phrase) - phá rừng"],
    antonyms: [
      "reforestation (n) - tái trồng rừng",
      "afforestation (n) - trồng rừng mới"
    ],
    wordFamily: [
      "forest (n) - rừng",
      "deforest (v) - phá rừng",
      "deforestation (n) - sự phá rừng",
      "reforestation (n) - sự tái trồng rừng"
    ],
    example: "Deforestation is one of the factors leading to global warming.",
    cloze:
      "{{c1::Deforestation}} can destroy natural habitats. (Phá rừng có thể phá hủy môi trường sống tự nhiên.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_intensive_farming",
    expression: "intensive farming",
    partOfSpeech: "n. phrase",
    wordStress: "/ɪnˈtensɪv ˈfɑːrmɪŋ/",
    meaningVN: "canh tác nông nghiệp thâm canh",
    englishMeaning: "farming that uses a lot of land, chemicals, labour, or equipment to produce more - phương thức canh tác dùng nhiều tài nguyên để tăng sản lượng",
    synonyms: ["industrial agriculture (n phrase) - nông nghiệp công nghiệp"],
    antonyms: ["sustainable farming (n phrase) - canh tác bền vững"],
    wordFamily: [
      "intense (adj) - mạnh / dữ dội",
      "intensive (adj) - thâm canh / chuyên sâu",
      "intensively (adv) - một cách chuyên sâu",
      "farm (n/v) - nông trại / canh tác",
      "farming (n) - việc canh tác",
      "farmer (n) - nông dân"
    ],
    example: "Intensive farming can contribute to soil degradation and water pollution.",
    cloze:
      "{{c1::Intensive farming}} can put pressure on land and water resources. (Canh tác thâm canh có thể gây áp lực lên đất và nguồn nước.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_improper_waste_management",
    expression: "improper waste management",
    partOfSpeech: "n. phrase",
    wordStress: "/ɪmˈprɑːpər weɪst ˈmænɪdʒmənt/",
    meaningVN: "quản lý rác thải không đúng cách",
    englishMeaning: "unsafe or unsuitable handling of waste - việc xử lý rác thải không an toàn hoặc không phù hợp",
    synonyms: ["poor waste management (n phrase) - quản lý rác thải kém"],
    antonyms: ["proper waste management (n phrase) - quản lý rác thải đúng cách"],
    wordFamily: [
      "improper (adj) - không đúng cách",
      "improperly (adv) - một cách không đúng",
      "manage (v) - quản lý",
      "management (n) - sự quản lý",
      "waste (n) - rác thải"
    ],
    example: "Improper waste management can pollute rivers and soil.",
    cloze:
      "{{c1::Improper waste management}} is a common cause of pollution. (Quản lý rác thải không đúng cách là một nguyên nhân phổ biến gây ô nhiễm.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_various_factors_leading_to",
    expression: "various factors leading to ...",
    partOfSpeech: "n. phrase",
    wordStress: "/ˈveriəs ˈfæktərz ˈliːdɪŋ tə/",
    meaningVN: "các nhân tố dẫn đến ...",
    synonyms: ["a range of causes of (n phrase) - nhiều nguyên nhân gây ra"],
    antonyms: ["a single cause of (n phrase) - một nguyên nhân duy nhất của"],
    wordFamily: [
      "vary (v) - thay đổi / khác nhau",
      "various (adj) - nhiều / đa dạng",
      "factor (n) - yếu tố",
      "lead (v) - dẫn đến",
      "leading (adj) - dẫn đầu / chủ yếu"
    ],
    grammarPattern: "various factors leading to + noun - nhiều yếu tố dẫn đến + danh từ",
    example:
      "There are various factors leading to global warming, including deforestation and the combustion of fossil fuels.",
    cloze:
      "There are {{c1::various factors leading to}} global warming. (Có nhiều yếu tố dẫn đến hiện tượng nóng lên toàn cầu.)",
    typePrompt: "various factors leading ___ global warming",
    typeAnswer: "to",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    expression: "rapid changes in weather patterns",
    uid: "ielts_rapid_changes_in_weather_patterns",
    partOfSpeech: "n. phrase",
    wordStress: "/ˈræpɪd ˈtʃeɪndʒɪz ɪn ˈweðər ˈpætərnz/",
    meaningVN: "những thay đổi nhanh chóng trong các kiểu hình thời tiết",
    englishMeaning:
      "quick shifts in usual weather conditions over time - những sự thay đổi nhanh trong điều kiện thời tiết thường thấy theo thời gian",
    synonyms: ["unstable weather patterns (n phrase) - các kiểu hình thời tiết không ổn định"],
    antonyms: ["stable weather patterns (n phrase) - các kiểu hình thời tiết ổn định"],
    wordFamily: [
      "rapid (adj) - nhanh chóng",
      "rapidly (adv) - một cách nhanh chóng",
      "change (n/v) - sự thay đổi / thay đổi",
      "weather (n) - thời tiết",
      "pattern (n) - kiểu hình / quy luật"
    ],
    grammarPattern: "changes in + noun - những thay đổi trong + danh từ",
    chunk: "rapid changes in weather patterns - những thay đổi nhanh chóng trong các kiểu hình thời tiết",
    example:
      "Rapid changes in weather patterns are posing a serious threat to humans and putting many animal species in danger of extinction.",
    cloze:
      "{{c1::Rapid changes in weather patterns}} can put many animal species in danger of extinction. (Những thay đổi nhanh chóng trong các kiểu hình thời tiết có thể đẩy nhiều loài động vật vào nguy cơ tuyệt chủng.)",
    typePrompt: "changes ___ weather patterns (những thay đổi ___ các kiểu hình thời tiết)",
    typeAnswer: "in",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_put_in_danger_of_extinction",
    expression: "put ... in danger of extinction",
    partOfSpeech: "v. phrase",
    wordStress: "/pʊt ɪn ˈdeɪndʒər əv ɪkˈstɪŋkʃən/",
    meaningVN: "đẩy ... vào nguy cơ tuyệt chủng",
    englishMeaning:
      "to make a species more likely to disappear completely - khiến một loài có nguy cơ biến mất hoàn toàn cao hơn",
    synonyms: ["endanger a species (v phrase) - gây nguy hiểm cho một loài"],
    antonyms: ["protect a species from extinction (v phrase) - bảo vệ một loài khỏi nguy cơ tuyệt chủng"],
    wordFamily: [
      "danger (n) - sự nguy hiểm",
      "endanger (v) - gây nguy hiểm cho",
      "extinct (adj) - tuyệt chủng",
      "extinction (n) - sự tuyệt chủng"
    ],
    grammarPattern: "put + noun + in danger of extinction - đẩy + danh từ + vào nguy cơ tuyệt chủng",
    example:
      "Rapid changes in weather patterns can put many animal species in danger of extinction.",
    cloze:
      "Climate change can {{c1::put many animal species in danger of extinction}}. (Biến đổi khí hậu có thể đẩy nhiều loài động vật vào nguy cơ tuyệt chủng.)",
    typePrompt: "put many animal species ___ danger of extinction",
    typeAnswer: "in",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_environmental_protection_programmes",
    expression: "environmental protection programmes",
    partOfSpeech: "n. phrase",
    wordStress: "/ɪnˌvaɪrənˈmentl prəˈtekʃən ˈprəʊɡræmz/",
    meaningVN: "các chương trình bảo vệ môi trường",
    englishMeaning:
      "organised activities designed to protect nature and reduce environmental damage - các hoạt động có tổ chức nhằm bảo vệ thiên nhiên và giảm tổn hại môi trường",
    synonyms: ["conservation programmes (n phrase) - các chương trình bảo tồn"],
    wordFamily: [
      "environment (n) - môi trường",
      "environmental (adj) - thuộc về môi trường",
      "protect (v) - bảo vệ",
      "protection (n) - sự bảo vệ",
      "programme (n) - chương trình"
    ],
    chunk: "engage in environmental protection programmes - tham gia các chương trình bảo vệ môi trường",
    example:
      "Another solution would be to engage in environmental protection programmes, such as community planting or energy conservation.",
    cloze:
      "Students should engage in {{c1::environmental protection programmes}}. (Học sinh nên tham gia các chương trình bảo vệ môi trường.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_engage_in_something",
    expression: "engage in something",
    partOfSpeech: "v. phrase",
    wordStress: "/ɪnˈɡeɪdʒ ɪn ˈsʌmθɪŋ/",
    meaningVN: "tham gia vào điều gì đó",
    synonyms: [
      "take part in something (v phrase) - tham gia vào điều gì đó",
      "participate in something (v phrase) - tham gia vào điều gì đó"
    ],
    wordFamily: [
      "engage (v) - tham gia / thu hút",
      "engagement (n) - sự tham gia",
      "participant (n) - người tham gia"
    ],
    grammarPattern: "engage in + activity - tham gia vào + hoạt động",
    example: "Local residents can engage in community planting to improve their neighbourhood.",
    cloze:
      "Local residents can {{c1::engage in}} community planting. (Người dân địa phương có thể tham gia trồng cây cộng đồng.)",
    typePrompt: "engage ___ environmental protection programmes",
    typeAnswer: "in",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_community_planting",
    expression: "community planting",
    partOfSpeech: "n. phrase",
    wordStress: "/kəˈmjuːnəti ˈplɑːntɪŋ/",
    meaningVN: "hoạt động trồng cây cộng đồng",
    englishMeaning:
      "tree-planting activities carried out by local people - hoạt động trồng cây do người dân địa phương cùng thực hiện",
    wordFamily: [
      "community (n) - cộng đồng",
      "plant (v/n) - trồng / cây",
      "planting (n) - việc trồng cây"
    ],
    chunk: "community planting in urban areas - hoạt động trồng cây cộng đồng ở khu vực đô thị",
    example: "Community planting can make cities greener and improve local air quality.",
    cloze:
      "{{c1::Community planting}} can make cities greener. (Hoạt động trồng cây cộng đồng có thể làm cho thành phố xanh hơn.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_energy_conservation",
    expression: "energy conservation",
    partOfSpeech: "n. phrase",
    wordStress: "/ˈenədʒi ˌkɒnsəˈveɪʃən/",
    meaningVN: "tiết kiệm / bảo tồn năng lượng",
    englishMeaning:
      "the practice of using less energy and avoiding waste - việc sử dụng ít năng lượng hơn và tránh lãng phí",
    synonyms: ["energy saving (n phrase) - tiết kiệm năng lượng"],
    antonyms: ["energy waste (n phrase) - lãng phí năng lượng"],
    wordFamily: [
      "energy (n) - năng lượng",
      "conserve (v) - bảo tồn / tiết kiệm",
      "conservation (n) - sự bảo tồn / tiết kiệm"
    ],
    chunk: "promote energy conservation - thúc đẩy tiết kiệm năng lượng",
    example: "Energy conservation can reduce household bills and lower greenhouse gas emissions.",
    cloze:
      "{{c1::Energy conservation}} can lower greenhouse gas emissions. (Tiết kiệm năng lượng có thể giảm khí thải nhà kính.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_environmentally_friendly_energy_sources",
    expression: "environmentally friendly energy sources",
    partOfSpeech: "n. phrase",
    wordStress: "/ɪnˌvaɪrənˈmentəli ˈfrendli ˈenədʒi ˈsɔːsɪz/",
    meaningVN: "các nguồn năng lượng thân thiện với môi trường",
    englishMeaning:
      "energy sources that cause little harm to the environment - các nguồn năng lượng gây ít tổn hại cho môi trường",
    synonyms: ["clean energy sources (n phrase) - các nguồn năng lượng sạch"],
    antonyms: ["polluting energy sources (n phrase) - các nguồn năng lượng gây ô nhiễm"],
    wordFamily: [
      "environment (n) - môi trường",
      "environmental (adj) - thuộc về môi trường",
      "environmentally (adv) - theo cách thân thiện/liên quan đến môi trường",
      "energy (n) - năng lượng",
      "source (n) - nguồn"
    ],
    chunk: "use environmentally friendly energy sources - sử dụng các nguồn năng lượng thân thiện với môi trường",
    example:
      "Governments should encourage the use of environmentally friendly energy sources, such as nuclear or renewable power, in order to reduce our reliance on fossil fuels and decrease greenhouse gas emissions.",
    cloze:
      "Governments should encourage the use of {{c1::environmentally friendly energy sources}}. (Các chính phủ nên khuyến khích sử dụng các nguồn năng lượng thân thiện với môi trường.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_nuclear_or_renewable_power",
    expression: "nuclear or renewable power",
    partOfSpeech: "n. phrase",
    wordStress: "/ˈnjuːkliər ɔːr rɪˈnjuːəbl ˈpaʊər/",
    meaningVN: "năng lượng hạt nhân hoặc năng lượng tái tạo",
    englishMeaning:
      "energy produced from nuclear reactions or naturally replenished sources - năng lượng được tạo ra từ phản ứng hạt nhân hoặc các nguồn tự nhiên có thể tái tạo",
    wordFamily: [
      "nuclear (adj) - thuộc về hạt nhân",
      "renew (v) - làm mới / tái tạo",
      "renewable (adj) - có thể tái tạo",
      "power (n) - năng lượng / điện năng"
    ],
    chunk: "invest in nuclear or renewable power - đầu tư vào năng lượng hạt nhân hoặc năng lượng tái tạo",
    example: "Some countries invest in nuclear or renewable power to reduce their dependence on fossil fuels.",
    cloze:
      "Some countries invest in {{c1::nuclear or renewable power}}. (Một số quốc gia đầu tư vào năng lượng hạt nhân hoặc năng lượng tái tạo.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_encourage_the_use_of_something",
    expression: "encourage the use of something",
    partOfSpeech: "v. phrase",
    wordStress: "/ɪnˈkʌrɪdʒ ðə juːs əv ˈsʌmθɪŋ/",
    meaningVN: "khuyến khích việc sử dụng điều gì đó",
    grammarPattern: "encourage the use of + noun - khuyến khích việc sử dụng + danh từ",
    synonyms: ["promote the use of something (v phrase) - thúc đẩy việc sử dụng điều gì đó"],
    antonyms: ["discourage the use of something (v phrase) - không khuyến khích việc sử dụng điều gì đó"],
    wordFamily: [
      "encourage (v) - khuyến khích",
      "encouragement (n) - sự khuyến khích",
      "use (n/v) - việc sử dụng / sử dụng"
    ],
    example: "Governments should encourage the use of environmentally friendly energy sources.",
    cloze:
      "Governments should {{c1::encourage the use of}} renewable energy. (Các chính phủ nên khuyến khích việc sử dụng năng lượng tái tạo.)",
    typePrompt: "encourage the use ___ renewable energy",
    typeAnswer: "of",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_reduce_our_reliance_on_fossil_fuels",
    expression: "reduce our reliance on fossil fuels",
    partOfSpeech: "v. phrase",
    wordStress: "/rɪˈduːs aʊər rɪˈlaɪəns ɒn ˈfɒsəl ˈfjuːəlz/",
    meaningVN: "giảm sự phụ thuộc của chúng ta vào nhiên liệu hóa thạch",
    grammarPattern: "reduce reliance on + noun - giảm sự phụ thuộc vào + danh từ",
    synonyms: ["reduce dependence on fossil fuels (v phrase) - giảm sự phụ thuộc vào nhiên liệu hóa thạch"],
    antonyms: ["increase reliance on fossil fuels (v phrase) - tăng sự phụ thuộc vào nhiên liệu hóa thạch"],
    wordFamily: [
      "reduce (v) - giảm",
      "reduction (n) - sự giảm",
      "rely on (v phrase) - phụ thuộc vào",
      "reliance (n) - sự phụ thuộc",
      "fossil fuel (n) - nhiên liệu hóa thạch"
    ],
    example:
      "Countries should invest in clean energy in order to reduce their reliance on fossil fuels.",
    cloze:
      "Clean energy can help countries {{c1::reduce their reliance on fossil fuels}}. (Năng lượng sạch có thể giúp các quốc gia giảm sự phụ thuộc vào nhiên liệu hóa thạch.)",
    typePrompt: "reduce our reliance ___ fossil fuels",
    typeAnswer: "on",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_wipe_out_life_on_earth",
    expression: "to wipe out life on Earth",
    partOfSpeech: "v. phrase",
    wordStress: "/waɪp aʊt laɪf ɑːn ɝːθ/",
    meaningVN: "xóa sổ sự sống trên Trái Đất",
    englishMeaning:
      "to completely destroy all life on Earth - phá hủy hoàn toàn sự sống trên Trái Đất",
    grammarPattern:
      "wipe out + noun / be wiped out - xóa sổ + danh từ / bị xóa sổ",
    synonyms: [
      "destroy life on Earth (v phrase) - phá hủy sự sống trên Trái Đất",
      "eradicate life on Earth (v phrase) - xóa bỏ hoàn toàn sự sống trên Trái Đất"
    ],
    antonyms: [
      "preserve life on Earth (v phrase) - bảo tồn sự sống trên Trái Đất"
    ],
    wordFamily: [
      "wipe out (v phrase) - xóa sổ / tiêu diệt hoàn toàn",
      "be wiped out (passive v. phrase) - bị xóa sổ",
      "life (n) - sự sống",
      "Earth (n) - Trái Đất"
    ],
    chunk: "wipe out life on Earth - xóa sổ sự sống trên Trái Đất",
    example:
      "Unchecked environmental degradation could wipe out life on Earth in the long run.",
    cloze:
      "Unchecked environmental degradation could {{c1::wipe out life on Earth}} in the long run. (Suy thoái môi trường không được kiểm soát có thể xóa sổ sự sống trên Trái Đất về lâu dài.)",
    typePrompt: "wipe ___ life on Earth (xóa sổ sự sống trên Trái Đất)",
    typeAnswer: "out",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_do_nothing_to_tackle_serious_environmental_issues",
    expression: "do nothing to tackle these serious environmental issues",
    partOfSpeech: "v. phrase",
    wordStress: "/duː ˈnʌθɪŋ tə ˈtækl ðiːz ˈsɪəriəs ɪnˌvaɪrənˈmentl ˈɪʃuːz/",
    meaningVN: "không có gì để giải quyết những vấn đề môi trường nghiêm trọng này",
    englishMeaning:
      "to take no action to deal with major environmental problems - không hành động để xử lý các vấn đề môi trường lớn",
    grammarPattern:
      "do nothing to tackle + problem/issue - không làm gì để giải quyết + vấn đề",
    synonyms: [
      "fail to address serious environmental issues (v phrase) - không giải quyết các vấn đề môi trường nghiêm trọng"
    ],
    antonyms: [
      "take action to address serious environmental issues (v phrase) - hành động để xử lý các vấn đề môi trường nghiêm trọng"
    ],
    wordFamily: [
      "tackle (v) - giải quyết / xử lý",
      "issue (n) - vấn đề",
      "serious (adj) - nghiêm trọng",
      "environmental (adj) - thuộc về môi trường"
    ],
    chunk:
      "do nothing to tackle serious environmental issues - không làm gì để giải quyết các vấn đề môi trường nghiêm trọng",
    example:
      "If governments do nothing to tackle these serious environmental issues, life on Earth could be put at serious risk.",
    cloze:
      "If governments {{c1::do nothing to tackle these serious environmental issues}}, life on Earth could be put at serious risk. (Nếu các chính phủ không làm gì để giải quyết những vấn đề môi trường nghiêm trọng này, sự sống trên Trái Đất có thể gặp rủi ro lớn.)",
    typePrompt:
      "do nothing ___ tackle these serious environmental issues",
    typeAnswer: "to",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_raise_public_awareness_of",
    expression: "to raise public awareness of",
    partOfSpeech: "v. phrase",
    wordStress: "/reɪz ˈpʌblɪk əˈweənəs əv/",
    meaningVN: "nâng cao nhận thức cộng đồng về",
    englishMeaning:
      "to help more people understand and care about an issue - giúp nhiều người hiểu và quan tâm hơn đến một vấn đề",
    grammarPattern:
      "raise public awareness of/about + noun - nâng cao nhận thức cộng đồng về + danh từ",
    synonyms: [
      "increase public understanding of something (v phrase) - tăng hiểu biết của công chúng về điều gì đó"
    ],
    wordFamily: [
      "raise (v) - nâng cao",
      "public (adj/n) - công cộng / công chúng",
      "aware (adj) - nhận thức được",
      "awareness (n) - nhận thức"
    ],
    chunk:
      "raise public awareness of environmental degradation - nâng cao nhận thức cộng đồng về suy thoái môi trường",
    example:
      "It is necessary to raise public awareness of the serious consequences of environmental degradation.",
    cloze:
      "It is necessary to {{c1::raise public awareness of}} environmental degradation. (Cần nâng cao nhận thức cộng đồng về suy thoái môi trường.)",
    typePrompt: "raise public awareness ___ environmental degradation",
    typeAnswer: "of",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_serious_consequences_of_environmental_degradation",
    expression: "the serious consequences of environmental degradation",
    partOfSpeech: "n. phrase",
    wordStress:
      "/ðə ˈsɪəriəs ˈkɑːnsəkwensɪz əv ɪnˌvaɪrənˈmentl ˌdeɡrəˈdeɪʃən/",
    meaningVN: "những hậu quả nghiêm trọng của sự suy thoái môi trường",
    englishMeaning:
      "the severe negative results caused by environmental damage - những kết quả tiêu cực nghiêm trọng do tổn hại môi trường gây ra",
    synonyms: [
      "severe effects of environmental degradation (n phrase) - các tác động nghiêm trọng của suy thoái môi trường"
    ],
    wordFamily: [
      "consequence (n) - hậu quả",
      "serious (adj) - nghiêm trọng",
      "environmental (adj) - thuộc về môi trường",
      "degradation (n) - sự suy thoái"
    ],
    grammarPattern:
      "the consequences of + noun - hậu quả của + danh từ",
    chunk:
      "raise awareness of the serious consequences of environmental degradation - nâng cao nhận thức về hậu quả nghiêm trọng của suy thoái môi trường",
    example:
      "It is necessary to raise public awareness of the serious consequences of environmental degradation.",
    cloze:
      "People should understand {{c1::the serious consequences of environmental degradation}}. (Mọi người nên hiểu những hậu quả nghiêm trọng của suy thoái môi trường.)",
    typePrompt: "the serious consequences ___ environmental degradation",
    typeAnswer: "of",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_it_is_necessary_to_do_something",
    expression: "it is necessary to do something",
    partOfSpeech: "sentence frame",
    wordStress: "/ɪt ɪz ˈnesəseri tə duː ˈsʌmθɪŋ/",
    meaningVN: "cần thiết phải làm điều gì đó",
    grammarPattern:
      "It is necessary to + verb - cần thiết phải + động từ",
    synonyms: [
      "it is essential to do something (sentence frame) - điều gì đó là thiết yếu",
      "there is a need to do something (sentence frame) - có nhu cầu cần làm điều gì đó"
    ],
    antonyms: [
      "it is unnecessary to do something (sentence frame) - không cần thiết phải làm điều gì đó"
    ],
    chunk:
      "it is necessary to raise public awareness - cần thiết phải nâng cao nhận thức cộng đồng",
    example:
      "It is necessary to raise public awareness of the serious consequences of environmental degradation.",
    cloze:
      "{{c1::It is necessary to}} raise public awareness of environmental degradation. (Cần thiết phải nâng cao nhận thức cộng đồng về suy thoái môi trường.)",
    typePrompt: "It is necessary ___ raise public awareness.",
    typeAnswer: "to",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_put_heavy_pressure_on",
    expression: "put heavy pressure on",
    partOfSpeech: "v. phrase",
    wordStress: "/pʊt ˈhevi ˈpreʃər ɑːn/",
    meaningVN: "gây áp lực nặng nề lên",
    englishMeaning:
      "to create a lot of stress or strain for someone or something - gây nhiều áp lực hoặc gánh nặng lên ai/cái gì",
    grammarPattern:
      "put heavy pressure on + noun - gây áp lực nặng nề lên + danh từ",
    synonyms: [
      "place considerable strain on something (v phrase) - tạo áp lực lớn lên điều gì đó"
    ],
    antonyms: [
      "relieve pressure on something (v phrase) - giảm áp lực lên điều gì đó"
    ],
    wordFamily: [
      "pressure (n/v) - áp lực / gây áp lực",
      "pressing (adj) - cấp bách",
      "heavy (adj) - nặng nề",
      "heavily (adv) - một cách nặng nề"
    ],
    chunk:
      "put heavy pressure on marine ecosystems - gây áp lực nặng nề lên các hệ sinh thái biển",
    example: 
      "Overfishing and water pollution are putting heavy pressure on marine ecosystems, posing a serious threat to thousands of marine creatures.",
    cloze:
      "Overfishing and water pollution are {{c1::putting heavy pressure on}} marine ecosystems. (Khai thác cá quá mức và ô nhiễm nước đang gây áp lực nặng nề lên các hệ sinh thái biển.)",
    typePrompt: "put heavy pressure ___ marine ecosystems",
    typeAnswer: "on",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_marine_ecosystems",
    expression: "marine ecosystems",
    partOfSpeech: "n. phrase",
    wordStress: "/məˈriːn ˈiːkoʊsɪstəmz/",
    meaningVN: "các hệ sinh thái biển",
    englishMeaning:
      "communities of living things and their environment in the ocean - các cộng đồng sinh vật và môi trường của chúng trong đại dương",
    synonyms: [
      "ocean ecosystems (n phrase) - các hệ sinh thái đại dương"
    ],
    wordFamily: [
      "marine (adj) - thuộc về biển",
      "ecosystem (n) - hệ sinh thái",
      "ecology (n) - sinh thái học",
      "ecological (adj) - thuộc về sinh thái"
    ],
    chunk:
      "protect marine ecosystems - bảo vệ các hệ sinh thái biển",
    example:
      "Protecting marine ecosystems is essential for maintaining biodiversity and food security.",
    cloze:
      "Pollution can damage {{c1::marine ecosystems}}. (Ô nhiễm có thể phá hủy các hệ sinh thái biển.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_overfishing",
    expression: "overfishing",
    partOfSpeech: "n.",
    wordStress: "/ˌoʊvərˈfɪʃɪŋ/",
    meaningVN: "khai thác cá quá mức",
    englishMeaning:
      "the practice of catching too many fish, so fish populations cannot recover - việc đánh bắt quá nhiều cá khiến quần thể cá không thể phục hồi",
    synonyms: [
      "excessive fishing (n phrase) - đánh bắt cá quá mức"
    ],
    antonyms: [
      "sustainable fishing (n phrase) - đánh bắt cá bền vững"
    ],
    wordFamily: [
      "fish (n/v) - cá / đánh bắt cá",
      "fishing (n) - hoạt động đánh bắt cá",
      "overfish (v) - đánh bắt quá mức"
    ],
    chunk:
      "overfishing in coastal areas - khai thác cá quá mức ở các khu vực ven biển",
    example:
      "Overfishing can reduce fish stocks and damage the balance of marine ecosystems.",
    cloze:
      "{{c1::Overfishing}} can damage the balance of marine ecosystems. (Khai thác cá quá mức có thể phá vỡ sự cân bằng của các hệ sinh thái biển.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_thousands_of_marine_creatures",
    expression: "thousands of marine creatures",
    partOfSpeech: "n. phrase",
    wordStress: "/ˈθaʊzəndz əv məˈriːn ˈkriːtʃərz/",
    meaningVN: "hàng ngàn sinh vật biển",
    englishMeaning:
      "a very large number of animals that live in the sea - một số lượng rất lớn các loài sống ở biển",
    synonyms: [
      "many marine animals (n phrase) - nhiều loài động vật biển"
    ],
    wordFamily: [
      "thousand (n) - một nghìn",
      "marine (adj) - thuộc về biển",
      "creature (n) - sinh vật"
    ],
    chunk:
      "pose a serious threat to thousands of marine creatures - đe dọa nghiêm trọng hàng ngàn sinh vật biển",
    example:
      "Plastic waste poses a serious threat to thousands of marine creatures every year.",
    cloze:
      "Plastic waste threatens {{c1::thousands of marine creatures}}. (Rác thải nhựa đe dọa hàng ngàn sinh vật biển.)",
    cardModes: ["recognition", "production", "cloze"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_in_the_war_against",
    expression: "in the war against",
    partOfSpeech: "prep. phrase",
    wordStress: "/ɪn ðə wɔːr əˈɡenst/",
    meaningVN: "trong cuộc chiến chống lại",
    englishMeaning:
      "as part of a strong effort to fight a major problem - như một phần của nỗ lực mạnh mẽ để chống lại một vấn đề lớn",
    grammarPattern:
      "in the war against + noun - trong cuộc chiến chống lại + danh từ",
    register:
      "Dramatic; use for serious global problems such as climate change or pollution.",
    synonyms: [
      "in the fight against something (prep. phrase) - trong cuộc chiến chống lại điều gì đó"
    ],
    wordFamily: [
      "war (n) - cuộc chiến",
      "fight (n/v) - cuộc đấu tranh / chống lại",
      "against (prep) - chống lại"
    ],
    chunk:
      "in the war against climate change - trong cuộc chiến chống biến đổi khí hậu",
    example: 
      "Both governments and individuals need to try their very best in the war against climate change and environmental degradation.",
    cloze:
      "Both governments and individuals have a role {{c1::in the war against}} climate change. (Cả chính phủ và cá nhân đều có vai trò trong cuộc chiến chống biến đổi khí hậu.)",
    typePrompt: "in the war ___ climate change",
    typeAnswer: "against",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_both_a_and_b_need_to_do_something",
    expression: "both A and B need to do something",
    partOfSpeech: "sentence frame",
    wordStress: "/boʊθ eɪ ænd biː niːd tə duː ˈsʌmθɪŋ/",
    meaningVN: "cả A và B đều cần phải làm điều gì đó",
    grammarPattern:
      "both A and B need to + verb - cả A và B đều cần + động từ",
    synonyms: [
      "A and B should both do something (sentence frame) - A và B đều nên làm điều gì đó"
    ],
    chunk:
      "both governments and individuals need to act - cả chính phủ và cá nhân đều cần hành động",
    example:
      "Both governments and individuals need to try their very best in the war against climate change.",
    cloze:
      "{{c1::Both governments and individuals need to}} reduce their environmental impact. (Cả chính phủ và cá nhân đều cần giảm tác động môi trường của mình.)",
    typePrompt: "Both governments ___ individuals need to act.",
    typeAnswer: "and",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_try_your_very_best_to_do_something",
    expression: "try one's very best (to do something)",
    partOfSpeech: "v. phrase",
    wordStress: "/traɪ wʌnz ˈveri best tə duː ˈsʌmθɪŋ/",
    meaningVN: "cố gắng hết sức (để làm điều gì đó)",
    grammarPattern:
      "try one's very best to + verb - cố gắng hết sức để + động từ",
    synonyms: [
      "make every effort to do something (v phrase) - nỗ lực hết sức để làm điều gì đó"
    ],
    wordFamily: [
      "try (v/n) - cố gắng / nỗ lực",
      "best (n/adj) - điều tốt nhất / tốt nhất",
      "effort (n) - nỗ lực"
    ],
    chunk:
      "try their very best to reduce pollution - cố gắng hết sức để giảm ô nhiễm",
    example:
      "Both governments and individuals should try their very best to reduce pollution.",
    cloze:
      "Individuals should {{c1::try their very best to}} reduce pollution. (Các cá nhân nên cố gắng hết sức để giảm ô nhiễm.)",
    typePrompt: "try their very best ___ reduce pollution",
    typeAnswer: "to",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_make_every_possible_effort_to_do_something",
    expression: "make every possible effort to do something",
    partOfSpeech: "v. phrase",
    wordStress: "/meɪk ˈevri ˈpɑːsəbl ˈefərt tə duː ˈsʌmθɪŋ/",
    meaningVN: "thực hiện mọi nỗ lực có thể để làm điều gì đó",
    grammarPattern:
      "make every possible effort to + verb - thực hiện mọi nỗ lực có thể để + động từ",
    synonyms: [
      "make every effort to do something (v phrase) - nỗ lực hết sức để làm điều gì đó",
      "do everything possible to do something (v phrase) - làm mọi điều có thể để làm điều gì đó"
    ],
    antonyms: [
      "make little effort to do something (v phrase) - ít nỗ lực để làm điều gì đó"
    ],
    wordFamily: [
      "make (v) - thực hiện / tạo ra",
      "possible (adj) - có thể",
      "possibly (adv) - có thể",
      "effort (n) - nỗ lực"
    ],
    chunk:
      "make every possible effort to tackle environmental pollution - thực hiện mọi nỗ lực có thể để giải quyết ô nhiễm môi trường",
    example: 
      "International governments and environmental groups need to make every possible effort to tackle environmental pollution, which is putting life on Earth in great danger.",
    cloze:
      "Governments need to {{c1::make every possible effort to}} tackle environmental pollution. (Các chính phủ cần thực hiện mọi nỗ lực có thể để giải quyết ô nhiễm môi trường.)",
    typePrompt: "make every possible effort ___ tackle pollution",
    typeAnswer: "to",
    cardModes: ["recognition", "production", "cloze", "type_answer"]
  },
  {
    ...environmentDefaults,
    uid: "ielts_international_governments_and_environmental_groups",
    expression: "international governments and environmental groups",
    partOfSpeech: "n. phrase",
    wordStress:
      "/ˌɪntərˈnæʃənl ˈɡʌvərnmənts ænd ɪnˌvaɪrənˈmentl ɡruːps/",
    meaningVN: "các chính phủ quốc tế và các nhóm bảo vệ môi trường",
    englishMeaning:
      "national governments working internationally and organisations focused on environmental protection - các chính phủ hợp tác ở cấp quốc tế và các tổ chức tập trung vào bảo vệ môi trường",
    synonyms: [
      "governments and environmental organisations (n phrase) - các chính phủ và tổ chức môi trường"
    ],
    wordFamily: [
      "international (adj) - quốc tế",
      "government (n) - chính phủ",
      "environmental (adj) - thuộc về môi trường",
      "group (n) - nhóm / tổ chức"
    ],
    chunk:
      "international governments and environmental groups need to cooperate - các chính phủ quốc tế và các nhóm môi trường cần hợp tác",
    example:
      "International governments and environmental groups need to cooperate to tackle environmental pollution.",
    cloze:
      "{{c1::International governments and environmental groups}} need to cooperate. (Các chính phủ quốc tế và các nhóm môi trường cần hợp tác.)",
    cardModes: ["recognition", "production", "cloze"]
  },
];

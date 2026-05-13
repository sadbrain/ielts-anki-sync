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
  },
  {
    ...environmentDefaults,
    uid: "ielts_rising_sea_levels",
    expression: "rising sea levels",
    meaningVN: "mực nước biển dâng cao",
    englishMeaning: "an increase in the average level of the sea - sự gia tăng mực nước biển trung bình",
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
    meaningVN: "những đợt nắng nóng nghiêm trọng hơn",
    englishMeaning: "heatwaves that become stronger or more severe - các đợt nắng nóng trở nên mạnh hơn hoặc nghiêm trọng hơn",
    synonyms: [
      "severe heatwaves - các đợt nắng nóng nghiêm trọng",
      "extreme heatwaves - các đợt nắng nóng cực đoan"
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
    meaningVN: "các vụ cháy rừng thường xuyên hơn",
    englishMeaning: "wildfires that happen more often - các vụ cháy rừng xảy ra thường xuyên hơn",
    synonyms: [
      "frequent wildfires - các vụ cháy rừng thường xuyên",
      "regular wildfires - các vụ cháy rừng xảy ra đều đặn"
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
    meaningVN: "tài nguyên thiên nhiên",
    englishMeaning:
      "materials or substances that exist in nature and can be used by people - vật liệu hoặc chất có sẵn trong tự nhiên và con người có thể sử dụng",
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
    meaningVN: "nhiên liệu hóa thạch",
    englishMeaning:
      "fuels made from ancient plants and animals - nhiên liệu được tạo ra từ thực vật và động vật cổ xưa",
    collocations: [
      "burn fossil fuels - đốt nhiên liệu hóa thạch",
      "depend on fossil fuels - phụ thuộc vào nhiên liệu hóa thạch",
      "replace fossil fuels - thay thế nhiên liệu hóa thạch"
    ],
    wordFamily: [
      "fossil - hóa thạch",
      "fuel - nhiên liệu"
    ],
    example: "If natural resources, such as fossil fuels, become scarce, the world will face a major challenge."
  },
  {
    ...environmentDefaults,
    uid: "ielts_become_scarce",
    expression: "become scarce",
    meaningVN: "trở nên khan hiếm",
    englishMeaning: "to become difficult to find or obtain - trở nên khó tìm hoặc khó có được",
    grammarPattern: "become scarce - trở nên khan hiếm",
    synonyms: [
      "run short - trở nên thiếu hụt",
      "be in short supply - trong tình trạng thiếu nguồn cung"
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
    meaningVN: "trong những thập kỷ gần đây",
    grammarPattern: "in recent decades - trong những thập kỷ gần đây",
    synonyms: [
      "in recent years - trong những năm gần đây",
      "in recent times - trong thời gian gần đây"
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
    meaningVN: "ngày càng trở nên khó dự đoán",
    englishMeaning: "increasingly difficult to predict - ngày càng khó dự đoán",
    wordFamily: [
      "predict - dự đoán",
      "predictable - có thể dự đoán được",
      "unpredictable - khó dự đoán"
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
    meaningVN: "suy thoái môi trường",
    englishMeaning:
      "the process in which the environment becomes damaged or worse - quá trình môi trường bị tổn hại hoặc trở nên tệ hơn",
    wordFamily: [
      "degrade - làm suy thoái",
      "degradation - sự suy thoái",
      "environmental - thuộc về môi trường"
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
    meaningVN: "chấm dứt điều gì đó",
    grammarPattern: "put an end to + noun - chấm dứt + danh từ",
    synonyms: [
      "end something - chấm dứt điều gì đó",
      "bring something to an end - đưa điều gì đó đến hồi kết"
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
    meaningVN: "giải quyết / xử lý điều gì đó",
    englishMeaning: "to make an effort to deal with a problem - nỗ lực xử lý một vấn đề",
    synonyms: [
      "address something - giải quyết một vấn đề",
      "deal with something - xử lý điều gì đó",
      "mitigate something - giảm thiểu điều gì đó"
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
    meaningVN: "không có hành động nào được thực hiện để giải quyết điều gì đó",
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
    meaningVN: "các nhà máy điện sử dụng nhiên liệu hóa thạch",
    englishMeaning:
      "power stations that generate electricity by burning fossil fuels - nhà máy tạo ra điện bằng cách đốt nhiên liệu hóa thạch",
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
    meaningVN: "được thải ra từ ...",
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
    meaningVN: "được thải vào khí quyển",
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
    meaningVN: "góp phần gây ra / đóng góp vào điều gì đó",
    englishMeaning: "to be one of the causes of something - là một trong những nguyên nhân gây ra điều gì đó",
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
    meaningVN: "lượng khí thải nhà kính",
    englishMeaning: "the quantity of gases that trap heat in the atmosphere - lượng khí giữ nhiệt trong khí quyển",
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
    meaningVN: "tăng mạnh trong những thập kỷ gần đây",
    englishMeaning: "to rise very sharply in recent decades - tăng lên rất mạnh trong những thập kỷ gần đây",
    grammarPattern: "dramatically increase in + time period - tăng mạnh trong + khoảng thời gian",
    synonyms: [
      "rise sharply - tăng mạnh",
      "increase significantly - tăng đáng kể"
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
    meaningVN: "ô nhiễm không khí và sự nóng lên toàn cầu",
    englishMeaning:
      "dirty air and the long-term rise in the Earth's temperature - không khí bị ô nhiễm và sự tăng nhiệt độ dài hạn của Trái Đất",
    chunk: "contribute to air pollution and global warming - góp phần gây ô nhiễm không khí và nóng lên toàn cầu",
    example:
      "Greenhouse gas emissions contribute to climate change, air pollution and global warming.",
    cardModes: ["recognition", "production"]
  }
];

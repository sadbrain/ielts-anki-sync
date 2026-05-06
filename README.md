# ielts-anki-sync

CLI TypeScript nhỏ để đồng bộ từ vựng IELTS vào Anki qua AnkiConnect.

## Yêu cầu

- Node.js 18+
- Đã cài Anki Desktop
- Đã cài add-on AnkiConnect trong Anki
- Phải mở Anki khi chạy lệnh sync

## Cài đặt

1. Cài dependency:

   ```bash
   npm install
   ```

2. Tạo file `.env` từ `.env.example`.

3. Chỉnh [src/data/index.ts](./src/data/index.ts) để chọn danh sách từ muốn sync.
4. Thêm hoặc sửa dữ liệu ở:
   - [src/data/topics](./src/data/topics)
   - [src/data/scenes](./src/data/scenes)
   - [src/data/examples/custom-examples.ts](./src/data/examples/custom-examples.ts)

## Khai báo dữ liệu ở đâu

Tool hiện đọc dữ liệu từ file TypeScript, không dùng JSONL nữa.

File đầu vào chính:

- [src/data/index.ts](./src/data/index.ts)

Thông thường bạn chỉ cần sửa file đó để chọn:

- sync theo topic
- sync theo scene
- sync một danh sách tự ghép

## Subdeck theo topic

Nếu item có `topic`, note sẽ vào subdeck tương ứng:

- deck gốc: `IELTS::Vocabulary`
- `topic: "Technology"` -> `IELTS::Vocabulary::Technology`
- `topic: "Writing::Task 2"` -> `IELTS::Vocabulary::Writing::Task 2`

Nếu không có `topic`, note sẽ vào deck gốc.

## Ví dụ tối giản nhất

Nếu bạn chỉ muốn một card trước/sau đơn giản thì chỉ cần như này:

```ts
import type { VocabSourceItem } from "../vocab/types";

export const item: VocabSourceItem = {
  uid: "word_substantial",
  expression: "substantial",
  wordStress: "/səbˈstænʃl/",
  googleTranslateUrl: "https://translate.google.com/?sl=en&tl=vi&text=substantial&op=translate",
  meaningVN: "dang ke"
};
```

Lý do:

- `cardModes` mặc định là `["recognition"]`
- `upsertModes` mặc định là `[]`
- mode `recognition` sẽ tạo:
  - Front = `expression`
  - Back = `meaningVN`

## Ví dụ khai báo

Bạn có thể xem bộ ví dụ sẵn ở [src/data/examples/custom-examples.ts](./src/data/examples/custom-examples.ts).

### 1. Chỉ tạo recognition

```ts
export const item = {
  uid: "word_feasible",
  expression: "feasible",
  meaningVN: "kha thi",
  cardModes: ["recognition"]
};
```

### 2. Recognition có upsert

```ts
export const item = {
  uid: "word_feasible",
  expression: "feasible",
  meaningVN: "kha thi",
  cardModes: ["recognition"],
  upsertModes: ["recognition"]
};
```

### 3. Chỉ tạo cloze

```ts
export const item = {
  uid: "word_vital_role",
  expression: "play a vital role",
  meaningVN: "dong vai tro quan trong",
  cloze: "Teachers {{c1::play a vital role}} in shaping children's habits.",
  cardModes: ["cloze"]
};
```

### 4. Chỉ tạo production

```ts
export const item = {
  uid: "word_deteriorate",
  expression: "deteriorate",
  meaningVN: "xau di, suy giam",
  englishMeaning: "to become worse",
  cardModes: ["production"]
};
```

### 5. Chỉ tạo type_answer

```ts
export const item = {
  uid: "word_result_in",
  expression: "result in",
  meaningVN: "dan den",
  typePrompt: "result ___ higher costs",
  typeAnswer: "in",
  cardModes: ["type_answer"]
};
```

### 6. Chỉ tạo mistake_fix

```ts
export const item = {
  uid: "word_discuss",
  expression: "discuss",
  meaningVN: "thao luan",
  chunk: "discuss a problem",
  mistake: "discuss about is incorrect; use discuss directly",
  mistakePrompt: "We need to discuss about this issue.",
  cardModes: ["mistake_fix"]
};
```

### 7. Một item tạo nhiều mode

```ts
export const item = {
  uid: "ielts_rely_on",
  expression: "rely on",
  googleTranslateUrl: "https://translate.google.com/?sl=en&tl=vi&text=rely%20on&op=translate",
  meaningVN: "phu thuoc vao",
  englishMeaning: "to need or depend on someone or something",
  semantics: "Use when something depends on another thing to work well.",
  collocations: ["rely heavily on", "rely mainly on", "rely on technology"],
  synonyms: ["depend on", "count on"],
  antonyms: ["be independent of"],
  wordFamily: ["reliance", "reliable", "unreliable"],
  soundNote: "Link rely + on smoothly when speaking.",
  grammarPattern: "rely on + noun/person/thing",
  register: "neutral",
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
```

## Giải thích các field

Mỗi object từ vựng có thể có các key sau:

- `uid`
  - bắt buộc
  - là ID ổn định, duy nhất cho item
  - không nên đổi sau khi đã import vào Anki, nếu không tool sẽ coi là item mới

- `expression`
  - từ hoặc cụm từ tiếng Anh
  - dùng ở mặt trước của `recognition`
  - dùng ở mặt sau của `production`

- `wordStress`
  - phiên âm hoặc trọng âm của từ, không bắt buộc
  - ví dụ: `/əˈveɪləbl/`
  - hiển thị ở mặt sau của các card học từ

- `googleTranslateUrl`
  - link Google Translate để bấm nghe phát âm, không bắt buộc
  - nếu không khai báo, tool sẽ tự tạo link từ `expression`
  - ví dụ: `https://translate.google.com/?sl=en&tl=vi&text=available&op=translate`

- `meaningVN`
  - nghĩa tiếng Việt
  - dùng ở mặt sau của `recognition`
  - dùng ở mặt trước của `production`

- `englishMeaning`
  - nghĩa tiếng Anh, không bắt buộc
  - dùng thêm trong `production` và `cloze`

- `semantics`
  - ghi chú về sắc thái nghĩa/cách dùng, không bắt buộc
  - ví dụ: khi nào nên dùng từ này, khác gì với từ gần nghĩa

- `collocations`
  - các cụm hay đi với từ, không bắt buộc
  - có thể khai báo string hoặc array string
  - ví dụ: `["readily available", "widely available"]`

- `synonyms`
  - từ/cụm đồng nghĩa, không bắt buộc
  - có thể khai báo string hoặc array string

- `antonyms`
  - từ/cụm trái nghĩa, không bắt buộc
  - có thể khai báo string hoặc array string

- `wordFamily`
  - họ từ, không bắt buộc
  - có thể khai báo string hoặc array string
  - ví dụ: `["availability", "unavailable"]`

- `soundNote`
  - ghi chú phát âm, nối âm, âm dễ sai, không bắt buộc
  - ví dụ: `Stress is on the second syllable.`

- `grammarPattern`
  - pattern ngữ pháp/cấu trúc đi với từ, không bắt buộc
  - ví dụ: `available to someone; available for something`

- `register`
  - sắc thái văn phong, không bắt buộc
  - ví dụ: `formal`, `neutral`, `informal`, `academic`
  - tool cũng tạo tag từ field này

- `chunk`
  - cụm hoặc collocation, không bắt buộc
  - hiển thị ở mặt sau của card

- `example`
  - câu ví dụ, không bắt buộc
  - hiển thị ở mặt sau của card

- `mySentence`
  - câu tự đặt, không bắt buộc
  - hiển thị ở back của `recognition`, `cloze`, `production`

- `cloze`
  - câu cloze, không bắt buộc
  - phải chứa mẫu `{{c1::...}}`
  - bắt buộc nếu dùng mode `cloze`

- `mistake`
  - ghi chú lỗi hay nhầm, không bắt buộc
  - dùng trong `recognition`, `cloze`, `mistake_fix`

- `typePrompt`
  - câu hỏi cho mode `type_answer`
  - ví dụ: `rely ___ technology`

- `typeAnswer`
  - đáp án cho mode `type_answer`
  - ví dụ: `on`

- `mistakePrompt`
  - mặt trước tùy chỉnh cho mode `mistake_fix`
  - nếu không có, tool sẽ tự tạo prompt đơn giản từ `mistake`

- `topic`
  - nhãn nhóm deck, không bắt buộc
  - dùng để tạo subdeck
  - có thể lồng nhiều cấp bằng `::`
  - tool cũng tạo tag từ field này

- `skill`
  - tag, không bắt buộc
  - ví dụ: `writing`, `speaking`

- `priority`
  - tag, không bắt buộc
  - ví dụ: `active`, `review`, `later`

- `source`
  - tag và text hiển thị ở một số card back
  - ví dụ: `Cambridge Reading`

- `cardModes`
  - mảng mode, không bắt buộc
  - các giá trị hỗ trợ:
    - `recognition`
    - `cloze`
    - `production`
    - `type_answer`
    - `mistake_fix`
  - mặc định: `["recognition"]`

- `upsertModes`
  - mảng mode, không bắt buộc
  - mode nào nằm trong đây thì khi note đã tồn tại, tool sẽ update
  - mode nào không có trong đây thì nếu đã tồn tại sẽ skip
  - mặc định: `[]`

## Mỗi mode tạo gì

- `recognition`
  - note type: `Basic`
  - Front = `expression`
  - Back = `meaningVN`, `wordStress`, link Google Translate, `semantics`, `collocations`, `synonyms`, `antonyms`, `wordFamily`, `soundNote`, `grammarPattern`, `register`, `chunk`, `example`, `mySentence`, `mistake`, `source`

- `cloze`
  - note type: `Cloze`
  - Text = `cloze`
  - Back Extra = `meaningVN`, `wordStress`, link Google Translate, `englishMeaning`, `semantics`, `collocations`, `synonyms`, `antonyms`, `wordFamily`, `soundNote`, `grammarPattern`, `register`, `chunk`, `example`, `mySentence`, `mistake`, `source`

- `production`
  - note type: `Basic`
  - Front = `meaningVN` + `englishMeaning` nếu có
  - Back = `expression`, `wordStress`, link Google Translate, `semantics`, `collocations`, `synonyms`, `antonyms`, `wordFamily`, `soundNote`, `grammarPattern`, `register`, `chunk`, `example`, `mySentence`

- `type_answer`
  - note type: `Basic (type in the answer)`
  - Front = `typePrompt`
  - Back = `typeAnswer`

- `mistake_fix`
  - note type: `Basic`
  - Front = `mistakePrompt`, hoặc prompt tự sinh từ `mistake`
  - Back = `expression` hoặc `chunk` đúng, `wordStress`, link Google Translate, `grammarPattern`, `register`, và ghi chú `mistake`

## Commands

- `npm run dev`
- `npm run build`
- `npm start`

## Chạy sync

```bash
npm run dev
```

Tool sẽ:

- đọc dữ liệu từ `src/data/index.ts`
- validate từng item
- tạo một hoặc nhiều note theo `cardModes`
- mặc định dùng `recognition` nếu `cardModes` thiếu hoặc rỗng
- mặc định không upsert nếu `upsertModes` thiếu hoặc rỗng
- chỉ update những mode có trong `upsertModes`
- bỏ qua mode nếu thiếu field cần thiết
- bỏ qua note đã tồn tại nếu mode đó không được upsert
- không bao giờ xóa note khỏi Anki

## Cấu hình Anki

- deck gốc: `IELTS::Vocabulary`
- note type đang dùng:
  - `Basic`
  - `Cloze`
  - `Basic (type in the answer)`

## Sau khi import

Bạn cần tự bấm sync Anki Desktop với AnkiWeb nếu muốn đẩy dữ liệu lên cloud.

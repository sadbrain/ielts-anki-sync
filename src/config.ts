export interface AppConfig {
  ankiConnectUrl: string;
  deckName: string;
}

export function getConfig(): AppConfig {
  return {
    ankiConnectUrl: process.env.ANKI_CONNECT_URL || "http://127.0.0.1:8765",
    deckName: process.env.ANKI_DECK_NAME || "IELTS::Vocabulary"
  };
}

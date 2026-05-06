export interface AnkiNotePayload {
  deckName: string;
  modelName: string;
  fields: Record<string, string>;
  tags: string[];
  options?: {
    allowDuplicate?: boolean;
  };
}

export interface AnkiNoteInfo {
  noteId: number;
  modelName: string;
  tags: string[];
  fields: Record<string, { value: string; order: number }>;
}

interface AnkiResponse<T> {
  error: string | null;
  result: T;
}

export class AnkiClient {
  constructor(private readonly baseUrl: string) {}

  async findNotes(query: string): Promise<number[]> {
    return this.request<number[]>("findNotes", { query });
  }

  async findCards(query: string): Promise<number[]> {
    return this.request<number[]>("findCards", { query });
  }

  async addNote(note: AnkiNotePayload): Promise<number> {
    return this.request<number>("addNote", { note });
  }

  async createDeck(deck: string): Promise<number> {
    return this.request<number>("createDeck", { deck });
  }

  async updateNoteFields(noteId: number, fields: Record<string, string>): Promise<void> {
    await this.request<null>("updateNoteFields", {
      note: {
        id: noteId,
        fields
      }
    });
  }

  async addTags(noteIds: number[], tags: string[]): Promise<void> {
    if (noteIds.length === 0 || tags.length === 0) {
      return;
    }

    await this.request<null>("addTags", {
      notes: noteIds,
      tags: tags.join(" ")
    });
  }

  async notesInfo(noteIds: number[]): Promise<AnkiNoteInfo[]> {
    if (noteIds.length === 0) {
      return [];
    }

    return this.request<AnkiNoteInfo[]>("notesInfo", { notes: noteIds });
  }

  async changeDeck(cardIds: number[], deck: string): Promise<void> {
    if (cardIds.length === 0) {
      return;
    }

    await this.request<null>("changeDeck", {
      cards: cardIds,
      deck
    });
  }

  private async request<T>(action: string, params: Record<string, unknown>): Promise<T> {
    const response = await fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        action,
        version: 6,
        params
      })
    });

    if (!response.ok) {
      throw new Error(`AnkiConnect HTTP ${response.status} ${response.statusText}`);
    }

    const payload = (await response.json()) as AnkiResponse<T>;

    if (payload.error) {
      throw new Error(`AnkiConnect error: ${payload.error}`);
    }

    return payload.result;
  }
}

import type { AnkiClient } from "./ankiClient";

export async function noteExistsByTag(client: AnkiClient, tag: string): Promise<boolean> {
  const noteIds = await client.findNotes(`tag:${tag}`);
  return noteIds.length > 0;
}

export async function findNotesByTag(client: AnkiClient, tag: string): Promise<number[]> {
  return client.findNotes(`tag:${tag}`);
}

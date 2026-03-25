import { json, fail } from '@sveltejs/kit';
import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

export async function POST({ request }) {
  const data = await request.formData();
  const files = data.getAll('files') as File[];

  if (!files.length || !files[0].name) return json({ error: 'No file' }, { status: 400 });

  const dir = 'static/uploads';
  await mkdir(dir, { recursive: true });

  const uploaded: string[] = [];

  for (const file of files) {
    const bytes = new Uint8Array(await file.arrayBuffer());
    const name = `${Date.now()}-${file.name}`;
    await writeFile(join(dir, name), bytes);
    uploaded.push(`/uploads/${name}`);
  }

  return json({ success: true, urls: uploaded });
}

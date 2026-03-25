import { json } from '@sveltejs/kit';
import { getPresignedUploadUrl } from '$lib/server/r2';
import { R2_PUBLIC_URL } from '$env/static/private';

export async function POST({ request }) {
  const { fileName, contentType } = await request.json();
  const key = `${Date.now()}-${fileName}`;
  const presignedUrl = await getPresignedUploadUrl(key, contentType);
  const publicUrl = `${R2_PUBLIC_URL}/${key}`;

  return json({ presignedUrl, publicUrl, key });
}

import { PUBLIC_BACKEND_URL } from "$env/static/public"
import type { Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
  const session = await fetch(`${PUBLIC_BACKEND_URL}/api/auth/get-session`, {
    headers: { cookie: event.request.headers.get("cookie") ?? "" }
  }).then(r => r.json()).catch(() => null)

  event.locals.session = session?.session ?? null
  event.locals.user = session?.user ?? null

  return resolve(event)
}

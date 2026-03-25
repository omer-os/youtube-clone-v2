import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "./db";
import { BETTER_AUTH_SECERET, BETTER_AUTH_URL } from "$env/static/private";


export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },

  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  baseURL: BETTER_AUTH_URL,
  secret: BETTER_AUTH_SECERET
});

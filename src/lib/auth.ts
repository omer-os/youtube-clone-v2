import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "./db";

import { env } from "$env/dynamic/private";


export const auth = betterAuth({
  emailAndPassword: {
    enabled: true
  },
  database: prismaAdapter(db, {
    provider: "sqlite",
  }),
  baseURL: env.BETTER_AUTH_URL
});

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../prisma/generated/client";
import { env } from "$env/dynamic/private";

const adapter = new PrismaPg({
  connectionString: env.DATABASE_URL
});


export const db = new PrismaClient({ adapter });

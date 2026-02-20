// Imports
import { PrismaClient } from "@/generated/prisma";

// Global
const gloablPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Exports
export const prisma = gloablPrisma.prisma || new PrismaClient({
  datasourceUrl: process.env.POSTGRES_PRISMA_URL,
});

if (process.env.NODE_ENV !== "production") gloablPrisma.prisma = prisma;

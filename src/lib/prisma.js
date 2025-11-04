import { PrismaClient } from '@prisma/client'

// Use globalThis to store the prisma instance in development to prevent
// exhausting database connections when modules are reloaded/hot-reloaded.
const globalForPrisma = globalThis

const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma

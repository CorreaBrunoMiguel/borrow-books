import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log('✅ Conectado ao banco PostgreSQL via Prisma.');
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco:', error);
  }
}

testConnection();

export default prisma;

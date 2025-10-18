import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

if (process.env.NODE_ENV === 'development') {
  prisma
    .$connect()
    .then(() => console.log('✅ Conectado ao banco PostgreSQL via Prisma.'))
    .catch((err) => console.error('❌ Erro ao conectar ao banco:', err));
}

export default prisma;

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('123456', 10);

  await prisma.user.createMany({
    data: [
      {
        name: 'Admin Master',
        email: 'admin@biblioteca.com',
        password: passwordHash,
        role: 'ADMIN',
      },
      {
        name: 'Bibliotecária Clara',
        email: 'clara@biblioteca.com',
        password: passwordHash,
        role: 'BIBLIOTECARIO',
      },
      {
        name: 'Usuário João',
        email: 'joao@biblioteca.com',
        password: passwordHash,
        role: 'USER',
      },
    ],
  });

  await prisma.book.createMany({
    data: [
      {
        title: 'Dom Casmurro',
        author: 'Machado de Assis',
        isbn: '9788572328450',
        totalCopies: 10,
        available: 10,
        category: 'Romance',
      },
      {
        title: '1984',
        author: 'George Orwell',
        isbn: '9780451524935',
        totalCopies: 5,
        available: 5,
        category: 'Distopia',
      },
      {
        title: 'A Revolução dos Bichos',
        author: 'George Orwell',
        isbn: '9788535914849',
        totalCopies: 7,
        available: 7,
        category: 'Sátira política',
      },
    ],
  });
}

main()
  .then(async () => {
    console.log('✅ Seed executado com sucesso.');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Erro no seed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });

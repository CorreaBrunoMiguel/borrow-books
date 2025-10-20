// loan.controller.js
import prisma from '../config/prisma.js';

// Criar empréstimo
export async function createLoan(req, res) {
  try {
    const { userId, bookId } = req.body;

    const book = await prisma.book.findUnique({ where: { id: bookId } });
    if (!book || book.available <= 0)
      return res.status(400).json({ message: 'Livro indisponível.' });

    const loan = await prisma.loan.create({
      data: {
        userId,
        bookId,
        borrowedAt: new Date(),
        status: 'BORROWED',
      },
    });

    await prisma.book.update({
      where: { id: bookId },
      data: { available: { decrement: 1 } },
    });

    res.status(201).json({ message: 'Empréstimo criado com sucesso.', loan });
  } catch (error) {
    console.error('Erro ao criar empréstimo:', error);
    res.status(500).json({ message: 'Erro ao criar empréstimo.' });
  }
}

// Listar todos os empréstimos
export async function getLoans(req, res) {
  try {
    const loans = await prisma.loan.findMany({
      include: { user: true, book: true },
    });
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar empréstimos.' });
  }
}

// Atualizar (ex: devolução)
export async function updateLoan(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const loan = await prisma.loan.findUnique({ where: { id: Number(id) } });
    if (!loan)
      return res.status(404).json({ message: 'Empréstimo não encontrado.' });

    const updatedLoan = await prisma.loan.update({
      where: { id: Number(id) },
      data: { status },
    });

    // Se devolvido, repõe cópia
    if (status === 'RETURNED') {
      await prisma.book.update({
        where: { id: loan.bookId },
        data: { available: { increment: 1 } },
      });
    }

    res.status(200).json({ message: 'Empréstimo atualizado.', updatedLoan });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar empréstimo.' });
  }
}

// Deletar (somente admin/bibliotecário)
export async function deleteLoan(req, res) {
  try {
    const { id } = req.params;

    const loan = await prisma.loan.findUnique({ where: { id: Number(id) } });
    if (!loan)
      return res.status(404).json({ message: 'Empréstimo não encontrado.' });

    await prisma.loan.delete({ where: { id: Number(id) } });

    res.status(200).json({ message: 'Empréstimo removido com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover empréstimo.' });
  }
}

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

// controllers/loan.controller.js
export async function getLoans(req, res) {
  try {
    const loans = await prisma.loan.findMany({
      include: {
        book: { select: { id: true, title: true, author: true } },
        user: { select: { id: true, name: true, email: true } },
      },
      orderBy: { borrowedAt: 'desc' },
    });

    return res.status(200).json({
      message: 'Lista de empréstimos recuperada com sucesso.',
      total: loans.length,
      loans,
    });
  } catch (error) {
    console.error('Erro ao listar empréstimos:', error);
    return res.status(500).json({ message: 'Erro ao listar empréstimos.' });
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

// Empréstimo por usuário
export async function getLoanByUser(req, res) {
  try {
    const { id } = req.params;

    const requester = req.user;
    if (requester.role === 'USER' && requester.id !== parseInt(id)) {
      return res
        .status(403)
        .json({ message: 'Acesso negado ao histórico de outro usuário' });
    }

    const loans = await prisma.loan.findMany({
      where: { userId: parseInt(id) },
      include: {
        book: { select: { title: true, author: true } },
      },
      orderBy: { borrowedAt: 'desc' },
    });

    return res.status(200).json({
      message: 'Histórico de empréstimo recuperado com sucesso.',
      total: loans.length,
      loans,
    });
  } catch (error) {
    console.error('Erro ao buscar histórico de empréstimos:', error);
    return res
      .status(500)
      .json({ message: 'Erro ao buscar histórico de empréstimos.' });
  }
}

// Empréstimos por Livro
export async function getLoansByBook(req, res) {
  try {
    const { id } = req.params;

    const loans = await prisma.loan.findMany({
      where: { bookId: parseInt(id) },
      include: {
        user: { select: { id: true, name: true, email: true } },
      },
      orderBy: { borrowedAt: 'desc' },
    });

    if (loans.length === 0) {
      return res
        .status(404)
        .json({ message: 'Nenhum empréstimo encontrado para este livro.' });
    }

    return res.status(200).json({
      message: 'Histórico de empréstimos do livro recuperado com sucesso.',
      total: loans.length,
      loans,
    });
  } catch (error) {
    console.error('Erro ao buscar histórico de empréstimos por livro:', error);
    return res.status(500).json({
      message: 'Erro ao buscar histórico de empréstimos por livro.',
    });
  }
}

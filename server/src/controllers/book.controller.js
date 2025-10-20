import prisma from '../config/prisma.js';

export async function createBook(req, res) {
  try {
    const { title, author, isbn, totalCopies, category } = req.body;

    if (!title || !author || !isbn || !totalCopies) {
      return res.status(400).json({
        message: 'Campos obrigatórios ausentes no cadastro',
      });
    }

    const existing = await prisma.book.findUnique({ where: { isbn } });
    if (existing)
      return res.status(409).json({ message: 'ISBN já cadastrado' });

    const newBook = await prisma.book.create({
      data: {
        title,
        author,
        isbn,
        totalCopies,
        available: totalCopies,
        category,
      },
    });

    return res.status(201).json({
      message: 'Livro cadastrado com sucesso.',
      book: newBook,
    });
  } catch (error) {
    console.error('Erro ao criar livro:', error);
    return res.status(500).json({ message: 'Erro interno ao criar livro.' });
  }
}

export async function getBooks(req, res) {
  try {
    const books = await prisma.book.findMany();
    return res
      .status(200)
      .json({ message: 'Livros listados com sucesso.', books });
  } catch (error) {
    console.error('Erro ao listar livros:', error);
    return res.status(500).json({ message: 'Erro ao listar livros.' });
  }
}

export async function getBookById(req, res) {
  try {
    const { id } = req.params;

    const book = await prisma.book.findUnique({ where: { id: Number(id) } });
    if (!book)
      return res.status(404).json({ message: 'Livro não encontrado.' });

    return res.status(200).json({ message: 'Livro encontrado.', book });
  } catch (error) {
    console.error('Erro ao buscar livro:', error);
    return res.status(500).json({ message: 'Erro interno ao buscar liro.' });
  }
}

export async function updateBook(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    const existing = await prisma.book.findUnique({
      where: { id: Number(id) },
    });
    if (!existing)
      return res.status(404).json({ message: 'Livro não encontrado.' });

    const updatedBook = await prisma.book.update({
      where: { id: Number(id) },
      data,
    });

    return res
      .status(200)
      .json({ message: 'Livro atualizado com sucesso.', book: updatedBook });
  } catch (error) {
    console.error('Erro ao atualizar livro:', error);
    return res
      .status(500)
      .json({ message: 'Erro interno ao atualizar livro.' });
  }
}

export async function deleteBook(req, res) {
  try {
    const { id } = req.params;

    const existing = prisma.book.findUnique({ where: { id: Number(id) } });
    if (!existing)
      return res.status(404).json({ message: 'Livro não encontrado.' });

    await prisma.book.delete({ where: { id: Number(id) } });

    return res.status(200).json({ message: 'Livro removido com sucesso.' });
  } catch (error) {
    console.error('Erro ao deletar livro:', error);
    return res.status(500).json({ message: 'Erro interno ao deletar livro.' });
  }
}

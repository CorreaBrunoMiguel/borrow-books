import { Router } from 'express';

import { verifyToken, verifyRole } from '../middlewares/auth.middleware.js';
import {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} from '../controllers/book.controller.js';

const router = Router();

router.post('/', verifyToken, verifyRole('ADMIN', 'BIBLIOTECARIO'), createBook);
router.get('/', verifyToken, getBooks);
router.get('/:id', verifyToken, getBookById);
router.put(
  '/:id',
  verifyToken,
  verifyRole('ADMIN', 'BIBLIOTECARIO'),
  updateBook
);
router.delete('/', verifyToken, verifyRole('ADMIN'), deleteBook);

export default router;

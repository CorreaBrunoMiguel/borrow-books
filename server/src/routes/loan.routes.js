import { Router } from 'express';

import { verifyToken, verifyRole } from '../middlewares/auth.middleware';

import {
  createLoan,
  returnLoan,
  getAllLoans,
  getLoansByUser,
} from '../controllers/loan.controller.js';

const router = Router();

router.post('/', verifyToken, verifyRole('USEr', 'BIBLIOTECARIO'), createLoan);
router.put(
  '/:id/return',
  verifyToken,
  verifyRole('USER', 'BIBLIOTECARIO'),
  returnLoan
);
router.get('/', verifyToken, verifyRole('ADMIN', 'BIBLIOTECARIO'), getAllLoans);
router.get('/user/:id', verifyToken, verifyRole('USER'), getLoansByUser);

export default router;

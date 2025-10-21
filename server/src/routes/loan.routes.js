// loan.routes.js
import { Router } from 'express';
import { verifyToken, verifyRole } from '../middlewares/auth.middleware.js';
import {
  createLoan,
  getLoans,
  updateLoan,
  deleteLoan,
  getLoanByUser,
} from '../controllers/loan.controller.js';

const router = Router();

router.use(verifyToken);

// Rotas
router.post('/', verifyRole('ADMIN', 'BIBLIOTECARIO'), createLoan);
router.get('/', verifyRole('ADMIN', 'BIBLIOTECARIO', 'USER'), getLoans);
router.get(
  '/user/:id',
  verifyToken,
  verifyRole('ADMIN', 'BIBLIOTECARIO', 'USER'),
  getLoanByUser
);
router.put('/:id', verifyRole('ADMIN', 'BIBLIOTECARIO'), updateLoan);
router.delete('/:id', verifyRole('ADMIN'), deleteLoan);

export default router;

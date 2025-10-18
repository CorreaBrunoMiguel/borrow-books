import { Router } from 'express';
import { register, login } from '../controllers/auth.controller.js';

const router = Router();

// Rotas públicas de autenticação
router.post('/register', register);
router.post('/login', login);

export default router;

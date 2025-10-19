import { Router } from 'express';

import { verifyRole, verifyToken } from '../middlewares/auth.middleware.js';

const router = Router();

/*
Rota protegida exclusiva para ADMIN
Testa o middleware verifyToken + verifyRole
*/

router.get('/admin', verifyToken, verifyRole('ADMIN'), (req, res) => {
  return res.status(200).json({
    message: 'Acesso autorizado: rota exclusiva para ADMIN',
    user: req.user,
    timestamp: new Date().toISOString(),
  });
});

/*
Rota protegida para ADMIN e BIBLIOTECARIO
*/
router.get(
  '/staff',
  verifyToken,
  verifyRole('ADMIN', 'BIBLIOTECARIO'),
  (req, res) => {
    return res.status(200).json({
      message: 'Acesso autorizado: rota para equipe administrativa',
      user: req.user,
      timestamp: new Date().toISOString(),
    });
  }
);

/*
Rota acessível para qualquer usuário autenticado
*/
router.get('/user', verifyToken, (req, res) => {
  return res.status(200).json({
    message: 'Acesso autorizado: rota para qualquer usuário autenticado',
    user: req.user,
    timestamp: new Date().toISOString(),
  });
});

export default router;

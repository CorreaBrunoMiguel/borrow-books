import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';

import prisma from './config/prisma.js';

import authRoutes from './routes/auth.routes.js';
import testRoutes from './routes/test.routes.js';
import bookRoutes from './routes/book.routes.js';
import loanRoutes from './routes/loan.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get('/', (_, res) => res.send('Servidor ativo 🚀'));

// Rotas principais
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/loan', loanRoutes);
app.use('/test', testRoutes);

// Middleware global de erro
app.use((err, req, res, next) => {
  console.error('Erro inesperado:', err);
  res.status(500).json({ error: 'Erro interno do servidor.' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  try {
    await prisma.$connect();
    console.log(`✅ Servidor rodando na porta ${PORT}`);
  } catch (error) {
    console.error('❌ Falha ao conectar ao banco:', error);
    process.exit(1);
  }
});

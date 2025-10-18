import express from 'express';
import cors from 'cors';

import 'dotenv/config.js';

import './config/prisma.js';

import authRoutes from './routes/auth.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => res.send('Servidor ativo 🚀'));

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

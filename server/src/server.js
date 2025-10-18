import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => res.send('Servidor ativo 🚀'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

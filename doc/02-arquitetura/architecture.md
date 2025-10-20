---
Orion-Doc: architecture
Categoria: Estrutura Técnica
Versão: vE1.3
Última atualização: { { DATA_ATUAL } }
Atualização: sempre que houver mudança estrutural
---

# 🧩 Arquitetura — Projeto Borrow Books

## Stack Técnica

- Node.js + Express + Prisma + PostgreSQL
- Autenticação: JWT + bcrypt
- Formatação: Prettier
- Frontend (planejado): React

## Estrutura

server/src
├── config/prisma.js
├── controllers/
│ ├── auth.controller.js
│ ├── book.controller.js
│ └── loan.controller.js
├── middlewares/auth.middleware.js
├── routes/
│ ├── auth.routes.js
│ ├── book.routes.js
│ └── loan.routes.js
└── server.js

## Convenções e Padrões

- Arquitetura em camadas.
- Padrão RESTful.
- Respostas JSON padronizadas.
- RBAC por middleware `verifyRole`.

## Evoluções Planejadas

- Auditoria de logs.
- Transações Prisma em empréstimos.
- Frontend React na Sprint 3.

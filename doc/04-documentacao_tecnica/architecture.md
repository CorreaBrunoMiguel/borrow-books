---
Orion-Doc: architecture
Categoria: Documentação Técnica
Versão: vE1.2
Data: { { DATA_ATUAL } }
Atualização: obrigatória antes de merge
Descrição: Documento de referência arquitetural. Define stack, camadas, convenções REST e políticas de governança técnica do sistema.
Responsável: Bruno (Engenheiro Fullstack)
Fiscal: IA Orion (Diretor Técnico Virtual)
Fonte de verdade: Sim
---

# 🧩 Arquitetura — Projeto Biblioteca Pública

**Versão:** vE1.2  
**Última atualização:** {{DATA_ATUAL}}

---

## ⚙️ Stack Técnica

**Backend:** Node.js + Express  
**Banco de Dados:** PostgreSQL  
**ORM:** Prisma  
**Autenticação:** JWT + bcrypt  
**Formatação:** Prettier (`.prettierrc` configurado)

**Frontend (previsto):** React (para Sprint futura)

**Arquitetura geral:** PERN — PostgreSQL, Express, React, Node.

---

## 🧱 Estrutura de Diretórios — Padrão Orion vE1.2

```tree
/server
├── /src
│ ├── /controllers
│ │ └── auth.controller.js
│ ├── /routes
│ │ └── auth.routes.js
│ ├── /middlewares
│ │ └── auth.middleware.js
│ ├── /config
│ │ └── prisma.js
│ └── server.js
├── /prisma
│ ├── schema.prisma
│ └── seed.js
├── .env
├── package.json
├── .prettierrc
└── /doc
├── methodology.md
├── tasks.md
└── architecture.md

```

**Padrão de organização:**
Arquitetura **por camadas (Layered Architecture)**.
Cada camada é responsável por uma função específica do backend.
Estrutura validada e consolidada na **Sprint 1 – Tarefa 4**, conforme nota de arquitetura vE1.2.

---

## 🧭 Decisões Arquiteturais

### 1. **Organização e Estrutura**

- Padrão por camadas adotado oficialmente na versão **vE1.2**.
- Cada domínio funcional é dividido em controladores, rotas e middlewares, mantendo a coerência da arquitetura.
- Pastas dedicadas a `/controllers`, `/routes`, `/middlewares`, `/config` e `/prisma`.

### 2. **Banco de Dados e ORM**

- Banco de dados: PostgreSQL (conexão local via `.env`).
- ORM: Prisma — escolhido por sua clareza declarativa e facilidade de manutenção.
- Migrations e seeds versionados e executáveis via scripts NPM.

**Models principais definidos:**

- `User` (campos: name, email, password, role, isActive, createdAt)
- `Book` (campos: title, author, isbn, totalCopies, available, category, createdAt)
- `Loan` (campos: userId, bookId, loanDate, returnDate, status)

**Enums:**

- `Role`: ADMIN, BIBLIOTECARIO, USER
- `LoanStatus`: BORROWED, RETURNED

---

### 3. **Autenticação e Segurança**

- Sistema JWT + bcrypt implementado na **Tarefa 4**.
- Tokens expiram em 8 horas.
- Middleware `verifyToken` garante autenticação.
- Middleware `verifyRole` implementa RBAC (controle de acesso baseado em papéis).
- Secret key armazenada em `.env`.
- Padrão de resposta consistente para falhas (`401`, `403`, `500`).

---

### 4. **Formatação, Logging e Boas Práticas**

- `.prettierrc` ativo na raiz do servidor, garantindo consistência visual do código.
- Estrutura de commits e branches segue o **Protocolo Git Orion vE1.1**.
- Mensagens de log uniformes e sem exposição de dados sensíveis.
- Uso de `try/catch` e mensagens padronizadas para todas as rotas.

---

### 5. **Convenções de API (REST)**

- Padrão RESTful adotado.
- Endpoints agrupados por domínio:
  - `/auth/register`
  - `/auth/login`
- Respostas JSON padronizadas:

  ```json
  {
    "message": "Login bem-sucedido",
    "token": "...",
    "user": { "id": 1, "name": "Admin", "role": "ADMIN" }
  }
  ```

- Códigos HTTP respeitados (`200`, `201`, `400`, `401`, `403`, `404`, `500`).

---

### 6. **Migrações e Seeds**

- Migrations controladas via `npx prisma migrate dev --name <desc>`.
- Seeds automatizados (`npm run seed`) populam usuários e livros padrão.
- Execuções idempotentes, com validação de unicidade para evitar duplicações.

---

### 7. **Evoluções Planejadas**

- CRUD completo de livros e empréstimos (Sprint 2).
- Middleware adicional de auditoria.
- Estrutura de logs avançada (Winston).
- Sistema de notificação para prazos de devolução.
- Integração do frontend React (Sprint 3).

---

### 8. **Referências Metodológicas**

- **Metodologia Orion** — vE1.1
- **Protocolo Git Orion** — rastreabilidade e versionamento de tarefas
- **Arquitetura Orion vE1.2** — estrutura em camadas

---

## 🧾 Regras de Governança Arquitetural Orion

### 1. Propósito

O documento `architecture.md` é a **fonte única da verdade estrutural** do projeto.  
Toda mudança que altere a organização, dependências, padrões de API ou camadas do sistema deve obrigatoriamente ser registrada aqui.

### 2. Política de Atualização

- **Mudanças estruturais** (ex.: criação de novas pastas, adoção de camadas, trocas de bibliotecas base, novas convenções REST) requerem atualização imediata deste arquivo.
- Cada atualização gera uma **nova versão incremental** (`vE1.3`, `vE1.4`, …) registrada no topo do documento.
- A atualização deve ocorrer **antes do merge** da branch que introduz a modificação.

### 3. Controle de Versão

- O versionamento segue o padrão:  
  `docs(architecture): atualiza arquitetura para vE1.X — <descrição curta>`
- Nenhuma sprint pode ser encerrada se a versão local do `architecture.md` estiver desatualizada.

### 4. Protocolo de Sincronização Git

Para garantir consistência entre branches e histórico limpo, a configuração de merge padrão deve ser mantida:

```bash
git config pull.rebase false
```

Essa política evita rebase automático e preserva a rastreabilidade temporal do projeto, assegurando que merges sempre reflitam o fluxo real de desenvolvimento.

### 5. Responsabilidade

- **Bruno (Engenheiro Fullstack)** é o mantenedor da versão local e executor dos commits.
- **IA Orion (Diretor Técnico Virtual)** é responsável por identificar, propor e exigir atualizações sempre que alterações estruturais forem detectadas.

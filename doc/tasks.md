# 📘 Histórico de Tarefas — Projeto Biblioteca Pública (Metodologia Orion)

---

## 🪐 Sprint 0 — Estrutura e Fundamentos

**Objetivo:** Estabelecer a fundação organizacional e metodológica do projeto.

### 🧩 Tarefa 0.1 — Estrutura Inicial do Projeto

**Descrição:**  
Criação da estrutura de pastas raiz, diretório `/doc`, e primeiros arquivos de configuração (`package.json`, `README.md`, etc.).

**Resultado:**  
Ambiente inicial criado com organização Orion, servidor básico Node.js funcional.

**Status:** ✅ Concluída  
**Branch:** `feature/00-setup-estrutura`  
**Commit Final:**  
`docs: inicializa estrutura base do projeto e documentação Orion`

---

### 🧩 Tarefa 0.2 — Configuração de Metodologia e Diretórios Fixos

**Descrição:**  
Definição de metodologia de trabalho Orion e criação do padrão `/doc` (com `methodology.md`, `tasks.md`, `architecture.md`).

**Resultado:**  
Documentação técnica e gerencial padronizada, fluxos de trabalho definidos.

**Status:** ✅ Concluída  
**Branch:** `feature/00-metodologia-docs`  
**Commit Final:**  
`docs(methodology): adiciona documentação inicial da metodologia Orion`

---

## 🚀 Sprint 1 — Backend Base

**Objetivo:** Estruturar o núcleo técnico do servidor backend com Node.js, Express e Prisma (PostgreSQL).

---

### 🧩 Tarefa 1 — Setup Inicial do Servidor

**Descrição:**  
Configuração do servidor Express, estruturação da pasta `/src`, e inicialização do projeto Node.js.  
Inclusão do Prettier (`.prettierrc`) para padronização de código.

**Resultado:**  
Servidor funcional, configuração base validada e formatação padronizada.

**Status:** ✅ Concluída  
**Branch:** `feature/01-server-setup`  
**Commit Final:**  
`feat(server): configura servidor Express e padrões de formatação`

---

### 🧩 Tarefa 2 — Integração Prisma e Banco PostgreSQL

**Descrição:**  
Instalação e configuração do Prisma ORM, criação do arquivo `.env` e teste de conexão com PostgreSQL.  
Migração inicial criada.

**Resultado:**  
Banco de dados operacional e integrado ao servidor via Prisma.  
Conexão validada em execução com log no terminal.

**Status:** ✅ Concluída  
**Branch:** `feature/02-prisma-init`  
**Commit Final:**  
`feat(prisma): integra Prisma ORM e conecta ao banco PostgreSQL`

---

### 🧩 Tarefa 3 — Modelagem e Seeds

**Descrição:**  
Definição do modelo relacional principal (User, Book, Loan) e criação do script de seed inicial.  
Estrutura Prisma ajustada com enums `Role` e `LoanStatus`.  
Banco populado com dados de teste (usuários e livros).

**Resultado:**  
Migrations e seeds aplicados com sucesso.  
Banco inicializado com dados consistentes.  
Validação feita via Prisma Studio.

**Status:** ✅ Concluída  
**Branch:** `feature/03-prisma-modelagem-seed`  
**Commit Final:**  
`feat(prisma): implementa modelagem e seed iniciais (User, Book, Loan)`

---

## 📊 Status Geral da Sprint

| Sprint   | Progresso | Status          |
| :------- | :-------- | :-------------- |
| Sprint 0 | 100%      | ✅ Concluída    |
| Sprint 1 | 60%       | 🟡 Em andamento |
| Sprint 2 | 0%        | ⏳ Planejada    |

---

## 🔁 Próximos Passos

- **Tarefa 4:** Autenticação (JWT + bcrypt)
- **Tarefa 5:** Middleware de autorização e controle de roles
- **Tarefa 6:** CRUD completo de livros e empréstimos

---

**Última atualização:** `{{DATA_ATUAL}}`  
**Atualizado por:** IA Orion (Diretor Técnico Virtual)  
**Revisado e validado por:** Bruno (Engenheiro Fullstack)

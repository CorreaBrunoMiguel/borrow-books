---
Orion-Doc: tasks
Categoria: Planejamento Operacional
Versão: vE1.2
Data: { { DATA_ATUAL } }
Atualização: obrigatória a cada sprint
Descrição: Documento de rastreamento operacional. Registra histórico de tarefas, progresso de sprints e rastreabilidade entre branches, commits e entregas.
Responsável: Bruno (Engenheiro Fullstack)
Fiscal: IA Orion (Diretor Técnico Virtual)
Fonte de verdade: Sim
---

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

- **Tarefa 5:** Middleware de autorização e controle de roles
- **Tarefa 6:** CRUD completo de livros e empréstimos

---

**Última atualização:** `{{DATA_ATUAL}}`  
**Atualizado por:** IA Orion (Diretor Técnico Virtual)  
**Revisado e validado por:** Bruno (Engenheiro Fullstack)

### 🧩 Tarefa 5 — Middleware de Autorização e Controle de Roles

**Descrição:**
Implementação e integração do middleware de autorização (`verifyRole`) ao sistema existente.
Visa consolidar o controle de acesso por papéis (`ADMIN`, `BIBLIOTECARIO`, `USER`), garantindo coerência entre autenticação (identidade) e autorização (permissão).
Inclui revisão do middleware, criação de rotas de teste e atualização documental.

**Resultados Esperados:**

- Middleware revisado e funcional.
- Rotas protegidas por papel com respostas HTTP coerentes (`401`, `403`).
- Integração com `verifyToken` validada.
- Documentação (`architecture.md` e `tasks.md`) sincronizada.

**Status:** 🚧 Em execução
**Branch:** `feature/05-authorization-middleware`
**Commit Final (planejado):**
`feat(auth): integra middleware de autorização por roles e atualiza arquitetura Orion vE1.3`

---

**Subtarefas:**

| Nº  | Tipo     | Descrição                                    | Resultado esperado     |
| --- | -------- | -------------------------------------------- | ---------------------- |
| 5.1 | refactor | Revisar `verifyRole` e padronizar respostas  | Middleware robusto     |
| 5.2 | feature  | Integrar middleware a rotas de exemplo       | Rotas protegidas       |
| 5.3 | docs     | Atualizar `architecture.md` e `tasks.md`     | Docs sincronizadas     |
| 5.4 | test     | Testar fluxos com tokens válidos e inválidos | Autorização confirmada |

---

**Critérios de Sucesso:**

- RBAC operacional.
- Fluxo ponta a ponta testado (login → token → rota protegida).
- Nenhuma rota sensível acessível sem token válido.
- Documentação Orion atualizada.

---

**Riscos e Observações:**

- Falta de `JWT_SECRET` no `.env` impede validação.
- Roles hardcoded devem ser evitadas.
- Commit sem atualização de doc invalida a verificação leve.

---

**Lição Esperada:**
Compreensão prática da diferença entre autenticação e autorização.
Capacidade de expandir o sistema com segurança e rastreabilidade.

---

**Registro Orion**
ACO-005 | Versão vE1.3 | Sprint 1
Status: ✅ Aprovada para execução

---

Perfeito — aqui está o bloco pronto da **Tarefa 6**, seguindo o formato oficial Orion vE1.3 para inserção direta em `tasks.md`.

---

### 🧩 **Tarefa 6 — CRUD de Livros e Empréstimos**

**Descrição:**
Implementação dos controladores e rotas para **Books** e **Loans**, consolidando a lógica de negócio da biblioteca pública.
Esta tarefa conecta autenticação, autorização e persistência de dados, permitindo registrar empréstimos e devoluções com regras reais de disponibilidade.

**Resultados Esperados:**

- CRUD completo de Livros (`create`, `read`, `update`, `delete`) — acessível a `ADMIN` e `BIBLIOTECARIO`.
- CRUD funcional de Empréstimos:
  - **Create:** registrar empréstimo se livro disponível.
  - **Update:** marcar devolução e atualizar status.
  - **Read:** histórico por usuário e por livro.

- Integração total com `verifyToken` e `verifyRole`.
- Regras de disponibilidade funcionando conforme seeds.

**Status:** 🚧 Em execução
**Branch:** `feature/06-crud-books-loans`
**Commit Final (planejado):**
`feat(core): implementa CRUDs de livros e empréstimos com regras de disponibilidade Orion vE1.3`

---

**Subtarefas:**

| Nº  | Tipo    | Descrição                                                   | Resultado esperado               |
| --- | ------- | ----------------------------------------------------------- | -------------------------------- |
| 6.1 | feature | Criar `book.controller.js` e `book.routes.js`               | CRUD de livros funcional         |
| 6.2 | feature | Criar `loan.controller.js` e `loan.routes.js`               | CRUD de empréstimos funcional    |
| 6.3 | logic   | Implementar regra de disponibilidade de livros              | Controle de cópias ativo         |
| 6.4 | logic   | Limitar número de empréstimos por usuário                   | Regra de limite aplicada         |
| 6.5 | docs    | Atualizar `architecture.md` e `tasks.md` com implementações | Documentação sincronizada        |
| 6.6 | test    | Testar fluxos ponta a ponta (empréstimo e devolução)        | Fluxo validado com tokens e RBAC |

---

**Critérios de Sucesso:**

- CRUDs acessíveis e protegidos via RBAC.
- Regras de empréstimo funcionais (sem sobreposição).
- Histórico de operações acessível por ID de usuário/livro.
- Documentação Orion atualizada.

---

**Riscos e Observações:**

- Cuidado com transações simultâneas (empréstimos concorrentes).
- Garantir rollback no Prisma se operação falhar.
- Validar roles no backend (não confiar apenas no front).

---

**Lição Esperada:**
Compreensão completa do ciclo **dados → regras → papéis**.
Capacidade de expandir o domínio do sistema mantendo rastreabilidade e consistência.

---

**Registro Orion**
ACO-006 | Versão vE1.3 | Sprint 1
Status: ✅ Aprovada para execução

---

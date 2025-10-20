# ACO -

---

## 🧩 **Tarefa 6 — CRUD de Livros e Empréstimos**

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

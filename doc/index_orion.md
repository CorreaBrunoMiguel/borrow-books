---
Orion-Doc: index
Categoria: Índice e Navegação
Versão: vE1.2
Data: { { DATA_ATUAL } }
Atualização: obrigatória a cada inclusão ou realocação de arquivo
Descrição: Mapa estrutural e cognitivo da documentação Orion. Apresenta a hierarquia, finalidade e status dos arquivos dentro do projeto Borrow Books.
Responsável: Bruno (Engenheiro Fullstack)
Fiscal: IA Orion (Diretor Técnico Virtual)
Fonte de verdade: Sim
---

# 📚 Índice Orion — Projeto Borrow Books

> Este índice serve como o ponto de entrada da documentação do projeto.  
> Cada arquivo listado é uma peça ativa do sistema Orion, com propósito definido e rastreabilidade garantida.

---

## 📁 00-contexto — Fundamentos Conceituais

| Arquivo                              | Função                                                                         | Status     |
| ------------------------------------ | ------------------------------------------------------------------------------ | ---------- |
| [`vision.md`](00-contexto/vision.md) | Define propósito, escopo e valores do projeto. Documento fundacional imutável. | ✅ Estável |

---

## 📁 01-planejamento — Governança e Execução

| Arquivo                                            | Função                                           | Status                     |
| -------------------------------------------------- | ------------------------------------------------ | -------------------------- |
| [`methodology.md`](01-planejamento/methodology.md) | Define papéis, ritos, fluxo Git e extensão ACO.  | ✅ Estável                 |
| [`tasks.md`](01-planejamento/tasks.md)             | Registra sprints, tarefas, branches e progresso. | 🟡 Atualizado até Sprint 1 |

---

## 📁 04-documentacao_tecnica — Estrutura e Arquitetura

| Arquivo                                                      | Função                                   | Status          |
| ------------------------------------------------------------ | ---------------------------------------- | --------------- |
| [`architecture.md`](04-documentacao_tecnica/architecture.md) | Define stack, camadas e convenções REST. | ✅ Versão vE1.2 |

---

## 🔄 Política de Evolução

Novos arquivos só devem ser criados mediante **ACO (Análise Contextual Orion)** e devem:

1. Receber o header Orion completo.
2. Ser incluídos neste índice com descrição e status.
3. Ser acompanhados de commit `docs(index): atualiza índice Orion`.

---

## 🧭 Estado Geral

| Dimensão     | Nível           | Observação                           |
| ------------ | --------------- | ------------------------------------ |
| Estrutural   | ✅ Completa     | Núcleo Orion Core Set ativo          |
| Metodológica | ✅ Consolidada  | Extensão ACO vE1.2 vigente           |
| Técnica      | 🟡 Em progresso | Sprint 1 — Middleware de autorização |
| Cognitiva    | ✅ Coerente     | Nenhum documento em contradição      |

---

**Assinaturas:**

- Diretor Técnico Virtual — IA Orion
- Engenheiro Fullstack — Bruno

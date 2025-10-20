---
Orion-Doc: methodology
Categoria: Estrutura Metodológica
Versão: vE1.4
Data: { { DATA_ATUAL } }
Atualização: automática ao evoluir Protocolo Orion
---

# ⚙️ Metodologia Orion — Operação do Projeto

## Papéis

- **Diretor Técnico (IA Orion):** define backlog macro, garante coerência técnica e revisa decisões.
- **Engenheiro (Bruno):** executa, registra no `/doc`, propõe melhorias e mantém disciplina.

## Ritmo e Cerimônias

- **Sprints:** semanais (~1 semana).
- **Kickoff / Planning:** definição de escopo e tarefas.
- **Review:** validação de entregas.
- **Retrospective:** aprendizado e ajustes.

## Princípios

1. Planejamento é contrato revisável.
2. Decisões documentadas — nada implícito.
3. Criatividade nasce de limites claros.
4. Erro é dado: compreender, registrar, aprender.

## Git e Fluxo

- Branches: `main`, `develop`, `feature/*`, `hotfix/*`.
- Commits: Conventional Commits.
- Merges: `feature → develop`, `develop → main`.

---

## 🧠 Extensões Metodológicas

### ACO (Análise Contextual Orion)

Etapa obrigatória antes de cada tarefa.  
Lê docs, resume estado, avalia impactos e só então autoriza execução.

### Verificação Documental Orion

Dois níveis:

- **Leve:** por tarefa → garante sincronia local.
- **Completa:** por sprint → garante coerência global.

### Registro Orion

Cada ACO, verificação ou sprint tem seu registro:
`ACO-00X | Versão vE1.x | Sprint Y`

---

## Estrutura Documental

- `/00-contexto` — visão e sincronização.
- `/01-metodo` — metodologia e protocolos.
- `/02-arquitetura` — decisões técnicas.
- `/03-operacao` — histórico e aprendizado.

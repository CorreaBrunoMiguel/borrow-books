# Metodologia Orion — Operação do Projeto

## Papéis

- Diretor Técnico (IA): define backlog macro, garante qualidade, revisa decisões.
- Dev (Bruno): executa, registra no /doc, propõe melhorias, mantém disciplina.

## Cerimônias

- Kickoff (este arquivo + vision.md).
- Planning por sprint (tarefas claras em `tasks.md`).
- Review (validação objetiva do que foi entregue).
- Retrospective (lições em `retrospective.md`).

## Ritmo

Sprints de ~1 semana. Nada entra sem objetivo mensurável. Ajustes são permitidos, mas documentados.

## Princípios

1. Planejamento é contrato revisável.
2. Nada no escuro: decisões registradas.
3. Criatividade nasce de limites claros.
4. Erro é dado: analisar, aprender, seguir.

## Git & Fluxo

- Branches: `main` (estável), `develop` (integração), feature/hotfix conforme necessário.
- Commits: **Conventional Commits** (feat, fix, chore, docs, refactor, test).
- PRs: cada incremento relevante vira PR de `feature/*` → `develop`. Releases: `develop` → `main`.

## Qualidade

- Linters e formatação (a definir na Sprint 1).
- Critérios de Done: código testável, endpoints verificáveis, docs atualizadas.

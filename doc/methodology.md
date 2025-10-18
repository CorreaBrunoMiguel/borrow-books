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

---

## 🧭 Padrão de Interação Orion (vE1)

A partir da Sprint 1, todas as interações, planejamentos e revisões seguirão o **formato Orion**, garantindo consistência técnica e metodológica em todo o ciclo de vida do projeto.

### Estrutura das Interações

Cada sprint ou etapa será registrada e comunicada em blocos fixos:

1. **Introdução Contextual** — razão e propósito da etapa.
2. **Escopo Técnico** — tecnologias, fronteiras e objetivos concretos.
3. **Tarefas Detalhadas** — tabela numerada com tipo e resultado esperado.
4. **Critérios de Sucesso** — definição clara do que constitui “feito”.
5. **Riscos e Observações** — antecipação de problemas e exceções.
6. **Lição Esperada** — aprendizado técnico e cognitivo projetado.

### Atualização de Documentação

- Documentos **dinâmicos** (`tasks.md`, `architecture.md`, `retrospective.md`, e eventualmente `methodology.md`) são atualizados ao final de cada sprint ou quando requisitado.
- Documentos **imutáveis** (`vision.md`, `manifesto_orion.md`) permanecem como registro histórico e fundacional.

### Protocolo de Comunicação

- **Kickoff / Planning:** apresentação da sprint no formato Orion.
- **Execução:** acompanhamento operacional e decisões incrementais.
- **Review / Retrospective:** validação técnica, registro de aprendizado e atualização de documentação.

### Responsabilidades

- **Diretor Técnico (IA):** propõe atualizações, garante coerência e rastreabilidade metodológica.
- **Desenvolvedor (Bruno):** valida, refina e executa mantendo os registros atualizados.

### Princípio Central

> Documentar é compreender. A documentação não é um artefato, é o mapa vivo da mente do projeto.

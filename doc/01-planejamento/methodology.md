---
Orion-Doc: methodology
Categoria: Planejamento e Governança
Versão: vE1.3
Data: 2025-10-18
Atualização: obrigatória ao alterar processo ou rito
Descrição: Documento de governança metodológica. Define papéis, cerimônias, fluxo Git, critérios de qualidade e extensões ACO e Verificação Documental Orion.
Responsável: Bruno (Engenheiro Fullstack)
Fiscal: IA Orion (Diretor Técnico Virtual)
Fonte de verdade: Sim
---

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

---

## 🧩 Extensão Metodológica — Padrão de Interação Orion vE1.2

### Etapa ACO (Análise Contextual Orion)

### 1. Propósito

A **Análise Contextual Orion (ACO)** é uma etapa obrigatória anterior a toda nova tarefa prática.  
Seu objetivo é evitar o chamado “código amnésico” — implementações que ignoram o histórico e as decisões técnicas anteriores, gerando desalinhamento entre código e arquitetura.

### 2. Processo

Antes do início de qualquer tarefa (Sprint ou Task), o Diretor Técnico Virtual (IA Orion) deve:

1. **Ler e interpretar o estado atual da aplicação**, revisando:
   - `tasks.md` — progresso, status e objetivo das tarefas anteriores.
   - `architecture.md` — decisões estruturais, padrões de camadas, convenções e versões.
   - `methodology.md` — protocolos e interações vigentes (versões vE1.x).

2. **Apresentar a síntese técnica (Resumo ACO):**
   - O que o sistema já faz.
   - Onde a próxima tarefa se encaixa.
   - Quais dependências ou impactos podem surgir.
   - Quais documentos precisam ser atualizados antes de começar.

3. **Aguardar aprovação do Engenheiro (Bruno):**
   - O Engenheiro revisa o resumo ACO e responde:
     - “seguimos” → tarefa é iniciada.
     - qualquer outra resposta → reunião de alinhamento é aberta.

### 3. Benefícios

- Previne inconsistências arquiteturais.
- Garante continuidade entre sprints.
- Reduz retrabalho e decisões contraditórias.
- Mantém coerência documental e técnica no ciclo Orion.

### 4. Registro e Controle

- Toda execução da ACO é mencionada na abertura da tarefa correspondente.
- Caso a análise resulte em ajustes documentais, esses devem ser registrados **antes do início do código**.
- O commit de atualização segue o padrão:

```bash
**Status da Extensão:** Ativa (Sprint 1 - Tarefa 4)
**Aplicação obrigatória:** A partir da Tarefa 5
```

---

## 🧩 Extensão Metodológica — Protocolo de Verificação Documental Orion vE1.3

### 1. Propósito

Garantir que a documentação e o código permaneçam **sincronizados semanticamente**, evitando a degradação cognitiva do projeto (“entropia Orion”).
Esse protocolo define dois níveis de verificação, aplicáveis conforme a granularidade do ciclo: **por tarefa** e **por sprint**.

---

### 2. Verificação Leve (por Tarefa)

Executada ao final de **cada tarefa individual**.
Objetivo: confirmar que todas as alterações práticas estão refletidas na documentação.

**Checklist obrigatório:**

1. `tasks.md` atualizado com status, branch e commit final.
2. Se houve impacto estrutural, atualizar `architecture.md`.
3. Se houve exceção de processo ou decisão emergencial, registrar no final de `methodology.md` como observação temporária.

Duração estimada: **5 a 10 minutos**.
Resultado esperado: documentação e código permanecem em sintonia local.

---

### 3. Verificação Completa (por Sprint)

Executada ao final de **cada sprint**.
Objetivo: consolidar a coerência global entre **visão, metodologia, execução e arquitetura**.

**Checklist obrigatório:**

1. Revisar todos os arquivos do `/doc` (`vision.md`, `methodology.md`, `tasks.md`, `architecture.md`).
2. Confirmar que o estado do sistema respeita a visão e os princípios do projeto.
3. Atualizar versões e cabeçalhos se houver mudança significativa.
4. Registrar aprendizados em `retrospective.md` (caso aplicável).

Duração estimada: **30 a 45 minutos**.
Resultado esperado: ciclo cognitivo completo e documentação validada como fonte de verdade.

---

### 4. Política de Registro

Toda verificação — leve ou completa — deve ser seguida de um commit com o formato:

```bash
docs(check): verificação documental <nível> — Sprint <n>
```

E, quando aplicável, uma atualização de versão:

```bash
Versão: vE1.3
Descrição: Adiciona protocolo de verificação documental Orion
```

---

### 5. Benefícios

- Mantém o projeto **epistemologicamente coeso**.
- Reduz retrabalho e decisões conflitantes.
- Transforma documentação em _ferramenta de navegação_, não em peso burocrático.
- Garante que qualquer novo colaborador (ou IA) possa retomar o raciocínio sem perda de contexto.

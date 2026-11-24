# Avaliação do Grupo +1 — Grupo 01 (Microsoft Teams) — Etapa 8 (Inspeção da Verificação dos Artefatos)

## Tabela de Contribuição e Transparência de IA Generativa

A **Tabela 1** apresenta a distribuição de responsabilidades, papéis e ferramentas utilizadas pelos discentes do Grupo 08 na condução desta inspeção específica sobre os artefatos de **Verificação dos Artefatos (Etapa 8)** produzidos pelo Grupo 01 na branch `main` (`commit d5da014`).

**Tabela 1** — Matriz de Contribuição da Inspeção da Verificação dos Artefatos do Grupo 01 (Etapa 8)

| Integrante | Atribuição no Artefato | Data | Horário | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :---: | :---: | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Auditor Principal**: Coleta da `main` atualizada (`d5da014`), auditoria dos artefatos de verificação do Grupo 01 frente a `E8-01..12`, `VVR-01..13` e `PG-01`, cálculo das métricas e redação técnica | 23/11/2026 | 22:10 - 22:45 | Google Gemini (LLM) | Apoio na formatação sintática das matrizes Markdown e conferência ABNT |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Auditor Técnico e Revisor**: Conferência cruzada dos checklists (`verificacao_etapa_1..7.md` e `lista-verificacao-etapa6.md`), validação do `mkdocs.yml` do Grupo 01 e revisão por pares | 23/11/2026 | 22:10 - 22:45 | — | Revisão humana por pares e conferência das evidências na branch `main` (`d5da014`) |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Auditor Técnico (Lista 15 — V&V/Fagan)**: Validação dos critérios `VVR-01..13` (Fagan, 1976) e revisão da seção de Agradecimentos e referências ABNT | 23/11/2026 | 22:10 - 22:45 | — | Conferência metodológica de V&V e validação de consistência |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 1. Introdução e Contextualização Metodológica

Este documento registra a **inspeção formal da Etapa 8 (Verificação dos Artefatos)** realizada pelo **Grupo 08** sobre o trabalho de verificação que o **Grupo +1 (Grupo 01 — Microsoft Teams)** publicou dentro de seu próprio repositório oficial (`Interacao-Humano-Computador/2026.2-Grupo01`, branch `main` @ `d5da014`).

Diferentemente da [Auditoria Global dos 414 Itens](etapa8.md) (que avaliou todo o projeto do Grupo 01 no commit `1d3c8f7`), o foco desta inspeção é **auditar especificamente a entrega de Verificação dos Artefatos do Grupo 01**, verificando:

1. **Autoinspeção e Checklists do Próprio Grupo 01:** qualidade, preenchimento, fundamentação e rastreabilidade das listas de verificação e da página da Entrega 8;
2. **Inspeção do Grupo +1 do Grupo 01 (Grupo 02 — NoFluxo):** existência e rigor metodológico das inspeções realizadas pelo Grupo 01 sobre o seu sucessor na escala cíclica;
3. **Inspeção do Grupo -1 do Grupo 01 (Grupo 08 — Diolinux Plus):** verificação de eventuais registros de inspeção ou retorno sobre o Grupo 08 na `main` do Grupo 01.

Para conduzir esta auditoria sem viés de complacência, aplicaram-se os instrumentos normativos oficiais do Grupo 08: o **Checklist da Entrega 8 (`E8-01` a `E8-12`, [`lista-verificacao.md`](../lista-verificacao.md) `v3.1`)**, a **Lista 15 — Fundamentos de V&V e Inspeção de Fagan (`VVR-01` a `VVR-13`, [`15-fundamentos-vv-fagan.md`](../listas/15-fundamentos-vv-fagan.md) `v1.0`)** e o critério crítico de proteção de dados da **Lista 00 (`PG-01`, [`00-plano-ensino-geral.md`](../listas/00-plano-ensino-geral.md) `v1.0`)**.

_Autor do Item Teórico: [Vinicius Silva Araruna](https://github.com/ViniciusA05)_  
*(Fundamentação teórica em Fagan, 1976, Sales, 2026 e Barbosa et al., 2021).*

---

## 2. Identificação do Alvo Auditado, Listas Utilizadas e Registro Audiovisual

A **Tabela 2** identifica o repositório, o commit exato auditado e os 8 arquivos de inspeção encontrados na `main` do Grupo 01, enquanto a **Tabela 2A** registra as versões das listas do Grupo 08 utilizadas.

**Tabela 2** — Dados de identificação do Grupo 01 e escopo de verificação auditado na Etapa 8

| Atributo | Detalhamento Institucional |
| :--- | :--- |
| **Grupo Avaliado** | Grupo 01 (Grupo +1 na escala cíclica da disciplina) |
| **Objeto de Reprojeto (Sistema)** | Microsoft Teams ([microsoft.com/microsoft-teams](https://www.microsoft.com/pt-br/microsoft-teams/group-chat-software)) |
| **Escopo Auditado Nesta Página** | **Etapa 8 — Verificação dos Artefatos** (Autoinspeção G01, Inspeção G02 [+1 deles] e Inspeção G08 [-1 deles]) |
| **Repositório Oficial no GitHub** | [Interacao-Humano-Computador/2026.2-Grupo01](https://github.com/Interacao-Humano-Computador/2026.2-Grupo01) |
| **Documentação no GitPages** | [interacao-humano-computador.github.io/2026.2-Grupo01](https://interacao-humano-computador.github.io/2026.2-Grupo01/) |
| **Branch e Commit Auditados** | Branch `main` — Commit `d5da014` (22/11/2026 às 21:20:36 `-03:00`) |
| **Arquivos de Verificação Encontrados no G01** | `docs/inspecoes/inspecao.md` (159L), `docs/inspecoes/lista-verificacao-etapa6.md` (333L — órfã fora do `mkdocs.yml`), `verificacao_etapa_1.md` (120L), `verificacao_etapa_2.md` (110L + 6 PDFs), `verificacao_etapa_3.md` (138L + 4 figuras), `verificacao_etapa_4.md` (88L), `verificacao_etapa_5.md` (117L) e `verificacao_etapa_7.md` (102L) |
| **Data e Horário da Avaliação** | 23 de Novembro de 2026 — 22:15 (Horário de Brasília) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

**Tabela 2A** — Versão das Listas de Verificação do Grupo 08 aplicadas nesta auditoria

| Instrumento Normativo (`2026.2-Grupo08`) | Versão Usada | Itens Aplicados | Commit Base | Data / Hora da Avaliação |
| :--- | :---: | :---: | :---: | :---: |
| [Checklist Entrega 8 (`lista-verificacao.md` — Seção 11)](../lista-verificacao.md#11-checklists-da-entrega-8-verificacao-e-validacao-dos-artefatos-auditoria-global) | **`v3.1`** | 12 (`E8-01..12`) | `518de7c` | `23/11/2026 — 22:15` |
| [Lista 15 — Fundamentos de V&V e Fagan (`15-fundamentos-vv-fagan.md`)](../listas/15-fundamentos-vv-fagan.md) | **`v1.0`** | 13 (`VVR-01..13`) | `518de7c` | `23/11/2026 — 22:15` |
| [Lista 00 — Plano de Ensino / LGPD (`00-plano-ensino-geral.md`)](../listas/00-plano-ensino-geral.md) | **`v1.0`** | 1 (`PG-01`) | `518de7c` | `23/11/2026 — 22:15` |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

### 2.1 Registro Audiovisual da Inspeção e PDF Oficial

[:material-file-pdf-box: **Baixar Relatório em PDF: Grupo08InspecaoVerificacaoGrupo01Etapa8MicrosoftTeams.pdf**](../../assets/relatorios/Grupo08InspecaoVerificacaoGrupo01Etapa8MicrosoftTeams.pdf){ .md-button .md-button--primary }
[:material-youtube: **Assistir no YouTube (Não Listado — `SqrczfjgLPU`)**](https://youtu.be/SqrczfjgLPU){ .md-button }

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 8px; margin: 1rem 0;">
  <iframe src="https://www.youtube.com/embed/SqrczfjgLPU" title="Inspeção da Verificação dos Artefatos do Grupo 01 (Etapa 8)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

---

## 3. Quadro-Síntese Comparativo e Diagnóstico Executivo (`main` @ `d5da014`)

A **Tabela 3** consolida os resultados objetivos obtidos pela inspeção nos três escopos avaliados (`26` critérios totais: `E8-01..12`, `VVR-01..13` e `PG-01`).

**Tabela 3** — Síntese estatística da inspeção sobre a Verificação dos Artefatos do Grupo 01 (`d5da014`)

| Escopo Auditado (`Grupo 01` @ `d5da014`) | Total | Aplicáveis | ✅ Conforme | ⚠️ Incompleto | ❌ Não Conforme | ➖ N/A | Taxa Estrita (`Sim / Aplic.`) | Taxa Ponderada (`(Sim + 0,5×Inc) / Aplic.`) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Bloco A — Autoinspeção e Checklists do Próprio Grupo 01** | 26 | 24 | **0** | 12 | 12 | 2 | **0,0%** | **25,0%** |
| **Bloco B — Inspeção do Grupo +1 deles (Grupo 02 — NoFluxo)** | 26 | 14 | **0** | 10 | 4 | 12 | **0,0%** | **35,7%** |
| **Bloco C — Inspeção do Grupo -1 deles (Grupo 08 — Diolinux Plus)** | 26 | 13 | **0** | 0 | 13 | 13 | **0,0%** | **0,0%** |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

### Principais Achados Críticos Identificados no Commit `d5da014`

1. **Ausência Total de Artefato de Autoinspeção e de Página da Entrega 8 (`E8-02`, `E8-12`):** No `mkdocs.yml` (linhas 118–133), a seção `Inspeções dos grupos` contém apenas `Inspeção etapa 1: inspecoes/inspecao.md` (de 13/09/2026). Não existe relatório de inspeção da Etapa 8 nem para o Grupo 01, nem para o Grupo 02 (+1 deles), nem para o Grupo 08 (-1 deles).
2. **Listas de Verificação 100% em Branco (`verificacao_etapa_1..5, 7.md`):** Embora o Grupo 01 tenha adicionado páginas de listas de verificação para as Etapas 1, 2, 3, 4, 5 e 7 em `22/11/2026`, **todas as tabelas de avaliação estão completamente vazias** (sem respostas, sem datas e sem evidências registradas). Além disso, **não existe lista de verificação para a Etapa 8**, e a `lista-verificacao-etapa6.md` (333 linhas) ficou **órfã fora do `mkdocs.yml`**.
3. **Erros Graves de Copy-Paste Não Higienizados (`E8-03`):**
   - `verificacao_etapa_2.md` (L29), `verificacao_etapa_5.md` (L33) e `verificacao_etapa_7.md` (L33) declaram no texto introdutório que visam criar *"uma lista de verificação para a etapa 1"*;
   - `verificacao_etapa_7.md` (L8) informa na Tabela de Contribuição: *"Definição do processo de inspeção e lista de verificação da etapa 5"*;
   - `verificacao_etapa_5.md` (L117) possui texto solto (`Evellyn Rocha`) fora da tabela do Histórico de Versão;
   - `verificacao_etapa_2.md` (L78–88) aponta para 6 PDFs com erro ortográfico no nome (`Verifacação`).
4. **Exposição Persistente de Matrícula Estudantil na Etapa 8 (`PG-01` — LGPD):** Os novos arquivos `verificacao_etapa_3.md` (L8) e `verificacao_etapa_4.md` (L8), além de `lista-verificacao-etapa6.md` (L8), expõem explicitamente o número de matrícula **`241025784`**.
5. **Ausência de Revisão por Pares e Falhas de Governança (`E8-05`, `E8-06`, `E8-09`):** `verificacao_etapa_1.md` e `2.md` trazem `Revisor(es): A definir`; `verificacao_etapa_3.md` e `4.md` não têm Histórico de Versão; `verificacao_etapa_7.md` não tem seção de Agradecimentos/IA; `cronograma_executado.md` permanece congelado na Etapa 2 (`"A ser realizada"` nas Etapas 3 e 4); e `atas/reunioes.md` parou em `16/09/2026`.

---

## 4. Matriz Detalhada de Inspeção — Checklist Entrega 8 (`E8-01` a `E8-12` + `PG-01`)

A **Tabela 4** avalia cada critério da Seção 11 de [`lista-verificacao.md`](../lista-verificacao.md) (`v3.1`) e o critério `PG-01` (`Lista 00 v1.0`) sobre os artefatos de verificação do Grupo 01 (`main` @ `d5da014`).

**Tabela 4** — Avaliação detalhada pelos critérios `E8-01` a `E8-12` e `PG-01`

| ID | Critério Normativo | Versão / Data | Bloco A (G01) | Bloco B (G02) | Bloco C (G08) | Evidências Concretas Observadas na `main` (`d5da014`) |
| :---: | :--- | :---: | :---: | :---: | :---: | :--- |
| **PG-01** | Página da equipe e artefatos apresentam nome completo e **sem matrícula** (LGPD)? | `Lista 00 v1.0`<br>23/11/2026 | ❌ **Não Conforme** | ➖ **N/A** | ➖ **N/A** | `verificacao_etapa_3.md` (L8), `verificacao_etapa_4.md` (L8) e `lista-verificacao-etapa6.md` (L8) expõem a matrícula `241025784`. |
| **E8-01** | Checklists normativos em branco cobrindo Entregas 1 a 8, desacoplados dos relatos? | `v3.1`<br>23/11/2026 | ⚠️ **Incompleto** | ➖ **N/A** | ➖ **N/A** | Existem checklists em branco para E1–E5 e E7 no `mkdocs.yml`, mas falta o checklist da **Etapa 8**, E6 (`lista-verificacao-etapa6.md`) está fora do menu e E2 só linka PDFs externos. |
| **E8-02** | Autoavaliação rigorosa Pré-Retrabalho vs. Pós-Retrabalho cobrindo todas as 8 entregas? | `v3.1`<br>23/11/2026 | ❌ **Não Conforme** | ➖ **N/A** | ➖ **N/A** | Todos os checklists (`verificacao_etapa_1..5, 7.md`) estão com as colunas de resposta 100% vazias; não há autoavaliação da Etapa 8 na `main`. |
| **E8-03** | Integridade de mídia e zero *placeholders*, `"a definir"` ou erros de copy-paste? | `v3.1`<br>23/11/2026 | ❌ **Não Conforme** | ❌ **Não Conforme** | ➖ **N/A** | `A definir` em `1.md`/`2.md`; `Autor: ___` em `3.md`/`4.md`; copy-paste `"etapa 1"` em `2.md`, `5.md`, `7.md`; `"etapa 5"` em `7.md`; texto solto `Evellyn Rocha` em `5.md` (L117). |
| **E8-04** | Tabela de contribuição no início com nome de todos os integrantes e hiperligação? | `v3.1`<br>23/11/2026 | ⚠️ **Incompleto** | ➖ **N/A** | ➖ **N/A** | Presente nos checklists, mas sem hiperligações para atividades/gravações e com `Revisor(es): A definir` em `1.md` e `2.md`. |
| **E8-05** | Declaração ética de IA Generativa (Código SBC) em todos os artefatos? | `v3.1`<br>23/11/2026 | ⚠️ **Incompleto** | ➖ **N/A** | ➖ **N/A** | Presente em `1.md`, `2.md`, `3.md`, `4.md`, `5.md` e `6.md`, mas **ausente** em `verificacao_etapa_7.md` e sem Matriz Consolidada de IA da Etapa 8. |
| **E8-06** | Histórico de Versão padronizado com autor(es) e revisor(es) distintos? | `v3.1`<br>23/11/2026 | ❌ **Não Conforme** | ➖ **N/A** | ➖ **N/A** | `verificacao_etapa_3.md` e `4.md` não têm Histórico de Versão; `1.md`, `2.md` e `7.md` deixam a coluna `Revisor(es)` em branco. |
| **E8-07** | Formatação, introdução, legendas, fontes nominais e referências ABNT? | `v3.1`<br>23/11/2026 | ⚠️ **Incompleto** | ➖ **N/A** | ➖ **N/A** | Há introdução e referências, mas figuras de `1.md`, `2.md`, `5.md` e `7.md` usam legenda sem fonte nominal completa e `3.md`/`4.md` têm campos incompletos. |
| **E8-08** | Itens teóricos / listas de conteúdo com citação, foto legível da referência e autor? | `v3.1`<br>23/11/2026 | ⚠️ **Incompleto** | ➖ **N/A** | ➖ **N/A** | `1.md`, `2.md`, `5.md` e `7.md` trazem figuras de Fagan (1976); `3.md` traz apenas 4 fotos (`G18–G21`) e omite C10–C17 (`Autor: ___`); `4.md` não tem nenhuma foto em C02–C13. |
| **E8-09** | Cronograma executado e atas (1 a 8) atualizados até a Etapa 8 com gravações? | `v3.1`<br>23/11/2026 | ❌ **Não Conforme** | ➖ **N/A** | ➖ **N/A** | `cronograma_executado.md` parou na Etapa 2 (`"A ser realizada"` nas E3–E4); `atas/reunioes.md` só tem atas de 09/09 e 16/09/2026. |
| **E8-10** | Matriz Consolidada de Contribuição por integrante em todas as etapas? | `v3.1`<br>23/11/2026 | ❌ **Não Conforme** | ➖ **N/A** | ➖ **N/A** | Inexistente na branch `main` (`d5da014`). |
| **E8-11** | Heteroavaliações dos grupos pares (Grupo +1 e Grupo -1) publicadas com relato e vídeo? | `v3.1`<br>23/11/2026 | ❌ **Não Conforme** | ⚠️ **Incompleto** | ❌ **Não Conforme** | **G02 (+1 deles):** apenas E1 (`inspecao.md`) e E6 (`lista-verificacao-etapa6.md`, fora do menu), sem inspeção das E2–E5, E7 e **Etapa 8**. **G08 (-1 deles):** zero inspeções registradas na `main`. |
| **E8-12** | Página da Entrega 8 no menu, vídeo (20–30 min, Não Listado) e plano de retrabalho? | `v3.1`<br>23/11/2026 | ❌ **Não Conforme** | ❌ **Não Conforme** | ❌ **Não Conforme** | Não há página da Entrega 8, vídeo da Etapa 8 nem plano de retrabalho consolidado no repositório do Grupo 01. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 5. Matriz Detalhada de Inspeção — Lista 15: V&V e Método de Fagan (`VVR-01` a `VVR-13`)

A **Tabela 5** avalia a aderência metodológica das verificações do Grupo 01 aos 13 critérios de [`15-fundamentos-vv-fagan.md`](../listas/15-fundamentos-vv-fagan.md) (`v1.0`).

**Tabela 5** — Avaliação detalhada pelos critérios `VVR-01` a `VVR-13` (Fagan, 1976; UNIVESP; Sales, 2026)

| ID | Critério de V&V / Fagan (`Lista 15 v1.0`) | Bloco A (G01) | Bloco B (G02) | Bloco C (G08) | Evidências e Diagnóstico Técnico |
| :---: | :--- | :---: | :---: | :---: | :--- |
| **VVR-01** | Delimitação explícita dos produtos de trabalho sujeitos à V&V? | ⚠️ **Incompleto** | ⚠️ **Incompleto** | ❌ **Não Conforme** | Delimita entregáveis em E1–E5 e E7, mas omite E6 do menu e E8 por completo; sobre G08 não há registro. |
| **VVR-02** | Distinção formal entre análise estática (documentação) e dinâmica (software em execução)? | ⚠️ **Incompleto** | ⚠️ **Incompleto** | ❌ **Não Conforme** | Fundamenta análise estática via Fagan nos checklists, mas não executa a inspeção estática na Etapa 8. |
| **VVR-03** | Verificação orientada a averiguar aderência às especificações ("produto da forma correta")? | ⚠️ **Incompleto** | ⚠️ **Incompleto** | ❌ **Não Conforme** | Critérios listados em `verificacao_etapa_1..7.md`, porém sem verificação preenchida na `main`. |
| **VVR-04** | Seleção e emprego de métodos formais de verificação (inspeção, revisão técnica)? | ⚠️ **Incompleto** | ⚠️ **Incompleto** | ❌ **Não Conforme** | Declara o método de Fagan na teoria, mas sem revisão por pares efetivada nos próprios artefatos de inspeção. |
| **VVR-05** | Escopo dos itens verificáveis estende-se a todos os artefatos produzidos? | ❌ **Não Conforme** | ❌ **Não Conforme** | ❌ **Não Conforme** | Falta checklist da Etapa 8; E6 fora do menu; nenhuma etapa completa inspecionada na Etapa 8 para G01, G02 ou G08. |
| **VVR-06** | Validação definida e executada para conferir atendimento às necessidades reais dos usuários? | ➖ **N/A** | ➖ **N/A** | ➖ **N/A** | Coberta nos relatos de Nível 3 (Etapa 7), fora do escopo específico de meta-inspeção documental. |
| **VVR-07** | Revisão definida como processo colaborativo estruturado para detectar defeitos precocemente? | ⚠️ **Incompleto** | ⚠️ **Incompleto** | ❌ **Não Conforme** | Nas listas de E1, E2, E3, E4 e E7 há apenas 1 autor sem revisor registrado (`A definir` ou vazio). |
| **VVR-08** | Aplicação equilibrada de modalidades estáticas e dinâmicas no projeto? | ⚠️ **Incompleto** | ⚠️ **Incompleto** | ❌ **Não Conforme** | Checklists estáticos sem execução preenchida na Etapa 8. |
| **VVR-09** | Classificação formal das revisões (Revisão Formal, Inspeção, *Walkthrough*)? | ⚠️ **Incompleto** | ⚠️ **Incompleto** | ❌ **Não Conforme** | Cita *walk-through* vs. inspeção de Fagan na introdução de `1.md`, `2.md`, `5.md` e `7.md`, sem distinguir no processo da E8. |
| **VVR-10** | Inspeção segue procedimento estruturado com papéis delineados e catálogo de falhas antes da próxima versão? | ❌ **Não Conforme** | ❌ **Não Conforme** | ❌ **Não Conforme** | Não há definição de moderador, leitor, inspetor ou registrador nas inspeções da Etapa 8, nem catálogo de falhas preenchido. |
| **VVR-11** | Evidencia as 5 características de Fagan (papéis, fases, checklists, foco em defeitos, métricas)? | ❌ **Não Conforme** | ⚠️ **Incompleto** | ❌ **Não Conforme** | Possui apenas os checklists em branco; faltam papéis, fases executadas, lista de defeitos e métricas de conformidade na Etapa 8. |
| **VVR-12** | Executa os 6 passos de Fagan (Planejamento, Visão Geral, Preparação, Reunião, Retrabalho, Acompanhamento)? | ❌ **Não Conforme** | ⚠️ **Incompleto** | ❌ **Não Conforme** | Apenas `inspecao.md` (E1) e `lista-verificacao-etapa6.md` (E6) registraram reunião; nenhuma etapa evidencia ciclo completo de **Retrabalho + Acompanhamento** na Etapa 8. |
| **VVR-13** | Estratégias complementares de validação com *stakeholders* (prototipação, comprovação)? | ➖ **N/A** | ➖ **N/A** | ➖ **N/A** | Aplicável à validação com usuários finais nas Etapas 5–7, não à meta-inspeção da Etapa 8. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 6. Plano de Ação Corretiva em 7 Passos para o Grupo 01

Para sanar os defeitos antes da entrega do Projeto Final (`30/11/2026`), recomenda-se ao Grupo 01:

1. **Higienização LGPD Imediata (`PG-01`):** Remover a matrícula `241025784` de `verificacao_etapa_3.md` (L8), `verificacao_etapa_4.md` (L8) e `lista-verificacao-etapa6.md` (L8).
2. **Saneamento de Copy-Paste (`E8-03`):** Corrigir os títulos/textos que citam `"etapa 1"`/`"etapa 5"` em `verificacao_etapa_2.md`, `5.md` e `7.md`, remover o nome solto na linha 117 de `verificacao_etapa_5.md` e corrigir `Verifacação` nos nomes dos PDFs da Etapa 2.
3. **Inclusão da Etapa 6 no Menu e Criação da Lista da Etapa 8 (`E8-01`):** Vincular `lista-verificacao-etapa6.md` no `mkdocs.yml` e criar a lista de verificação própria da Entrega 8.
4. **Preenchimento Efetivo das Listas e Ciclo de Fagan (`E8-02`, `VVR-10..12`):** Preencher todas as tabelas em branco (G01, G02 e G08), definindo papéis de Fagan, registrando defeitos, executando o Retrabalho e documentando o Acompanhamento (*Follow-up*).
5. **Complemento das Fotos de Referência (`E8-08`):** Inserir autor e foto legível das fontes nos campos `C10–C17` de `verificacao_etapa_3.md` e `C02–C13` de `verificacao_etapa_4.md`.
6. **Fechamento da Governança Editorial (`E8-05`, `E8-06`, `E8-09`, `E8-10`):** Adicionar Histórico de Versão em `3.md` e `4.md`, preencher revisores distintos em todas as páginas, incluir IA em `7.md`, atualizar `cronograma_executado.md` e `atas/reunioes.md` até a Etapa 8 e publicar a Matriz Consolidada de Contribuição.
7. **Publicação da Página e Vídeo da Entrega 8 (`E8-11`, `E8-12`):** Criar a página executiva da Entrega 8 no `mkdocs.yml`, gravar o vídeo de apresentação (20–30 min, Não Listado) e disponibilizar os PDFs finais.

---

## 7. Validação desta Página (`LVT-01..08` e `DG-01..11`)

- **Critérios da Técnica de Fagan (`LVT-01` a `LVT-08`):** ✅ Atendidos (`Lista v3.1`, `Lista 15 v1.0`, `Lista 00 v1.0` identificadas; commit `d5da014` explicitado; escopos Bloco A, B e C separados; taxas estrita e ponderada calculadas; plano em 7 passos incluído).
- **Governança Editorial (`DG-01` a `DG-11`):** `DG-01` a `DG-11` ✅ Conformes (gravação da apresentação publicada no YouTube em modo Não Listado: [`SqrczfjgLPU`](https://youtu.be/SqrczfjgLPU), incorporada na Seção 2.1).

---

## 8. Histórico de Versão

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 23/11/2026 | Elaboração da inspeção específica sobre a Verificação dos Artefatos (Etapa 8) do Grupo 01 (`main` @ `d5da014`), aplicando `E8-01..12`, `VVR-01..13` e `PG-01` sobre os blocos G01, G02 (+1 deles) e G08 (-1 deles). | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant), [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 9. Referências Bibliográficas (ABNT NBR 6023)

[1] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.

[2] FAGAN, Michael E. Design and code inspections to reduce errors in program development. *IBM Systems Journal*, v. 15, n. 3, p. 182–211, 1976.

[3] SALES, André Barros de. *Plano de Ensino FIHC 022026 — Turma 01*. Brasília: FCTE/UnB, 2026.

[4] SOCIEDADE BRASILEIRA DE COMPUTAÇÃO (SBC). *Código de Conduta para Pessoas Autoras de Publicações da SBC — Parte II, Art. 2º, §III (Uso de IA Generativa)*. Porto Alegre: SBC, 2023.

---

## 10. Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Em conformidade com o Código de Conduta da Sociedade Brasileira de Computação (SBC, 2023) e com o Plano de Ensino da disciplina (*Sales, 2026*), declara-se que a Inteligência Artificial Generativa (Google Gemini) foi utilizada exclusivamente como apoio na formatação sintática das matrizes Markdown e conferência ABNT. Toda a inspeção técnica dos arquivos da branch `main` (`d5da014`) do Grupo 01 foi conduzida e validada integralmente pelos integrantes do Grupo 08.

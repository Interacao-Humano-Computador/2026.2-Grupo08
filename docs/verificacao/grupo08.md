# Relatório de Inspeção e Autoavaliação — Grupo 08

## Tabela de Contribuição e Transparência de IA Generativa

A **Tabela 0** apresenta a distribuição nominal de responsabilidades, hiperligações e declaração de uso de Inteligência Artificial Generativa na auditoria global e consolidação deste relatório, em conformidade com o Plano de Ensino (*Sales, 2026, p. 3, 9 — Item 10*) e o Código de Conduta da SBC.

**Tabela 0** — Matriz de Contribuição da Autoavaliação do Grupo 08

| Integrante | Contribuição no Artefato | Data | Horário | Ferramenta de IA e Propósito de Uso | Hiperligação |
| :--- | :--- | :---: | :---: | :--- | :---: |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | Auditoria rigorosa dos 87 arquivos Markdown (134 critérios nas Entregas 1 a 8), levantamento factual de defeitos pré e pós-retrabalho, sanitização integral de seus artefatos individuais (`RW-01` a `RW-12`), elaboração da Matriz de Contribuição e Transparência de IA | 19/11/2026 | 14:00 - 18:00 | Google Gemini / LLM: apoio na varredura sintática, diagramação de tabelas Markdown e barras de progresso HTML/CSS; aferição e julgamento de critérios feitos pelo autor. | [Seção 9](#9-plano-de-retrabalho-rework-e-pendencias-abertas-metodo-de-fagan-1976) / [Seção 11](#11-matriz-consolidada-de-contribuicao-e-transparencia-de-ia-generativa) |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Desacoplamento arquitetural do relatório de inspeção frente aos templates de checklist (Issue #30), elaboração das matrizes iniciais da E2 a E5 e revisão cruzada por pares | 19/11/2026 | 18:30 - 19:30 | Google Gemini: suporte na formatação Markdown sob supervisão discente. | [Seções 2 a 5](#2-verificacao-da-entrega-2-perfil-do-usuario-aspectos-eticos-e-analise-de-tarefas) |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Verificação inicial dos artefatos da E2, revisão da matriz da E3 e checagem metodológica da Etapa 8 | 19/11/2026 | 19:30 - 20:15 | OpenAI Codex / ChatGPT: suporte na estruturação sintática e revisão textual. | [Histórico](#12-historico-de-versao) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## Introdução

Este artefato documenta o **Relatório de Inspeção, Autoavaliação Formal e Plano de Retrabalho do Grupo 08**, consolidando os achados empíricos obtidos na aplicação rigorosa dos instrumentos normativos definidos em [Listas de Verificação](lista-verificacao.md) e no [Catálogo de Listas de Verificação por Artefato](listas/index.md) sobre **todos os 87 arquivos Markdown e 8 entregas do projeto** no repositório oficial.

Diferente de uma verificação meramente formal ou complacente, esta auditoria adotou o princípio de **tolerância zero a lacunas ocultas**: um critério recebe `✅ Sim` somente quando **100% dos artefatos abrangidos** cumprem integralmente a exigência do Plano de Ensino (*Sales, 2026*). Havendo falhas parciais (como fontes genéricas residuais em arquivos de terceiros ou ausência de governança em anexos) ou falhas críticas (como URLs `placeholder` em vídeos de entrevista, ata ou teste-piloto), o critério é registrado fielmente como `⚠️ Incompleto` ou `❌ Não`, acompanhado do caminho exato do artefato para correção.

A inspeção abrange **134 critérios totais** distribuídos ao longo do semestre letivo (FGA0173 — Prof. Dr. André Barros de Sales):
- **Entrega 1:** Planejamento Geral, Desenvolvimento e Conteúdo Teórico (22 critérios);
- **Entrega 2:** Perfil de Usuário, Aspectos Éticos, Personas, Cenários, Análise de Tarefas e Gravação (30 critérios);
- **Entrega 3:** Características da Plataforma, Princípios Gerais, Metas de Usabilidade/UX e Guia de Estilo (18 critérios);
- **Entrega 4:** Planejamento da Avaliação e Relatos de Nível 1 — Storyboards e Análise de Tarefas (13 critérios);
- **Entrega 5:** Relatos de Nível 1 e Planejamento do Protótipo de Papel — Nível 2 (15 critérios);
- **Entrega 6:** Relato do Protótipo de Papel (Nível 2) e Planejamento de Alta Fidelidade — Nível 3 (12 critérios);
- **Entrega 7:** Relato dos Resultados da Avaliação do Protótipo de Alta Fidelidade — Nível 3 (12 critérios);
- **Entrega 8:** Verificação Global dos Artefatos, Sanitização, Matrizes e Inspeções por Pares (12 critérios).

Em consonância com **Michael E. Fagan (1976)**, este relatório registra a **Detecção de Defeitos**, o **Retrabalho (*Rework*) executado sobre todos os artefatos sob responsabilidade de Gustavo Antonio Rodrigues e Silva**, e a **Lista Transparente de Pendências Abertas** para fechamento pelos demais integrantes antes do Projeto Final (`30/11/2026`).

---

## 1. Verificação da Entrega 1 — Planejamento do Projeto

### Itens de Planejamento Geral do Projeto (Entrega 1)

A **Tabela 1** apresenta os resultados da auditoria dos 9 itens de planejamento geral da Entrega 1.

**Tabela 1** — Verificação dos itens de planejamento geral do Grupo 08

| ID | Questão da Rubrica Oficial (*Sales, 2026, p. 8*) | Resposta | Evidência Factual / Defeito Detectado |
| :---: | :--- | :---: | :--- |
| **1** | Uma página apresentando os integrantes da equipe (com foto) com nome e sem matrícula? | ✅ Sim | [Equipe](../planejamento/equipe.md) apresenta fotos, nomes completos e perfis GitHub sem número de matrícula. |
| **2** | O cronograma do planejamento apresenta todas as atividades de todas as etapas (1 a 8) com datas de início/fim e período de revisão? | ✅ Sim | [Cronograma Planejado](../planejamento/cronograma-planejado.md) detalha as 8 etapas com autores, revisores e janelas de revisão. |
| **3** | O cronograma do planejamento apresenta um período de gravação da apresentação de cada etapa? | ✅ Sim | Linha específica "Gravação da Apresentação" presente nas Tabelas 1 a 8 do cronograma. |
| **4** | O cronograma prevê um período de revisão/ajustes nos artefatos devidos às considerações dos monitores/professor? | ✅ Sim | Linha "Ajustes e Correções pós-feedback" prevista em todas as 8 etapas. |
| **5** | A motivação e os critérios para a escolha do site? | ✅ Sim | [Site Selecionado](../planejamento/site-selecionado.md) documenta a justificativa do *pivot* para o Fórum Diolinux Plus. |
| **6** | O planejamento e avaliação dos sites selecionados? | ✅ Sim | [Sites Avaliados](../planejamento/sites-avaliados.md) apresenta matriz decisória com critérios C1–C4 para 5 portais. |
| **7** | Possui opção de contraste de cores? | ✅ Sim | Alternância nativa de tema claro/escuro e suporte a contraste configurados em `mkdocs.yml`. |
| **8** | Os artefatos: Planejamento, equipe, sites avaliados, site selecionado, ferramentas, processo de design e cronograma? | ✅ Sim | Todos os artefatos previstos constam publicados e navegáveis no menu lateral. |
| **9** | Uma página com as atas de reunião com o acesso à gravação (vídeo), quando houver? | ⚠️ Incompleto | [Ata 1](../atas/ata1.md) (`e9UGmkfeYXU`) e [Ata 4](../atas/ata4.md) (`OANTQ0KYoYk`) possuem vídeos reais; porém a [Ata 3](../atas/ata3.md) (linha 102) contém URL fictícia (`placeholder_ata3_grupo08`). |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

### Itens de Desenvolvimento e Documentação (Entrega 1)

A **Tabela 2** audita rigorosamente os 11 itens de desenvolvimento da Entrega 1 conforme o Plano de Ensino (*Sales, 2026, pp. 8–9*).

**Tabela 2** — Verificação dos aspectos de documentação e conformidade técnica (11 itens)

| ID | Critério de Desenvolvimento (*Sales, 2026, pp. 8–9*) | Resposta | Evidência Factual / Defeito Detectado |
| :---: | :--- | :---: | :--- |
| **1** | O histórico de versão padronizado? | ✅ Sim | Presente em todos os artefatos de planejamento e atas com versão, data e descrição. |
| **2** | O(s) autor(es) e o(s) revisor(es) para cada artefato? | ✅ Sim | Colunas de Autor(es) e Revisor(es) preenchidas com distinção de papéis nos artefatos de E1. |
| **3** | Referências bibliográficas e/ou bibliografia em todos os artefatos? | ✅ Sim | Todos os artefatos da Etapa 1 (incluindo `heatmap.md` e `entrega1.md` pós-rework) contêm bibliografia ABNT. |
| **4** | As tabelas e imagens possuem legenda e fonte e são chamadas dentro do texto? | ⚠️ Incompleto | Artefatos de Gustavo (`heatmap.md`, `site-selecionado.md`, `cronograma-planejado.md`, `cronograma-executado.md`, `entrega1.md`) sanados com fontes nominais; porém `equipe.md`, `ferramentas.md`, `sites-avaliados.md` e `atas/ata3–7` mantêm `"Elaborada pelos autores"`. |
| **5** | Um texto fazendo uma introdução dos artefatos? | ✅ Sim | Todos os documentos da E1 iniciam com seção introdutória contextualizada. |
| **6** | O cronograma executado com quem realizou cada artefato/atividade e as datas reais? | ✅ Sim | [Cronograma Executado](../planejamento/cronograma-executado.md) atualizado com datas reais e revisores da E1 à E8. |
| **7** | Ata(s) da(s) reuniões com data, horário, participantes, objetivo e atividades definidas? | ✅ Sim | Atas 1 a 8 indexadas em [atas/index.md](../atas/index.md) com pauta, horários e decisões numeradas. |
| **8** | A gravação da reunião do grupo? | ⚠️ Incompleto | Gravação real disponível na Ata 1 (`e9UGmkfeYXU`) e Ata 4 (`OANTQ0KYoYk`), porém pendente de substituição na [Ata 3](../atas/ata3.md) (`placeholder_ata3_grupo08`). |
| **9** | Vídeo de apresentação na categoria "não listado" no YouTube? | ✅ Sim | Apresentação da Etapa 1 publicada no YouTube e incorporada em [entrega1.md](../entregas/entrega1.md). |
| **10** | Tabela de contribuição no início do artefato com o nome de todos os integrantes e hiperligação? | ✅ Sim | Presente no início dos documentos da E1 com links funcionais para seções e perfis GitHub. |
| **11** | A seção de agradecimentos apresentando o uso de IA Generativa no artefato? | ✅ Sim | Declaração ética alinhada ao Código de Conduta da SBC presente em todos os artefatos da E1. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

### Itens de Conteúdo da Disciplina (Entrega 1)

A **Tabela 3** verifica os itens teóricos e o Processo de Design da Entrega 1.

**Tabela 3** — Verificação do Processo de Design e conteúdo teórico

| Requisito de Conteúdo Teórico | Resposta | Evidência / Observação Factual |
| :--- | :---: | :--- |
| Justificativa da escolha do Processo de Design, com referência bibliográfica, foto do texto e autor? | ✅ Sim | [Processo de Design](../planejamento/processo-de-design.md) justifica o Ciclo de Mayhew (1999) com citação, foto comprobatória e autoria nominal. |
| Todos os integrantes elaboram itens de conteúdo da disciplina com referência, foto do texto e nome do autor? | ✅ Sim | [Conteúdo Teórico](../conteudo-teorico/index.md) e [Conteúdo da Disciplina](../analise-requisitos/conteudo-disciplina.md) apresentam itens com fotos de páginas e autoria individual. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 2. Verificação da Entrega 2 — Perfil do Usuário, Aspectos Éticos e Análise de Tarefas

### Perfil do Usuário e Aspectos Éticos (TCLE)

A **Tabela 4** documenta a auditoria dos critérios `E2-01` a `E2-08`.

**Tabela 4** — Verificação dos artefatos de Perfil do Usuário e Aspectos Éticos

| ID | Critério da Rubrica / Literatura Canônica | Resposta | Evidência Factual / Defeito Detectado |
| :---: | :--- | :---: | :--- |
| **E2-01** | O Perfil do Usuário foi elaborado com base em dados empíricos (entrevistas gravadas) e literatura canônica (*Barbosa & Silva, 2021, Cap. 8*)? | ⚠️ Incompleto | [perfil-usuario.md](../analise-requisitos/perfil-usuario.md) fundamenta-se em Hackos & Redish (1998) e IBGE/Cetic.br; porém o lastro empírico em [entrevistas.md](../analise-requisitos/entrevistas.md) carece dos links reais de vídeo de P1 e P2. |
| **E2-02** | O Perfil do Usuário contempla caracterização demográfica, escolaridade, experiência e atitudes? | ✅ Sim | Tabelas 1, 2 e 3 de [perfil-usuario.md](../analise-requisitos/perfil-usuario.md) cobrem os 3 perfis funcionais completos. |
| **E2-03** | O Perfil do Usuário mapeia objetivos, tarefas primárias e pontos de dor? | ✅ Sim | Seção 4 e Matriz Comparativa (Tabela 4) detalham objetivos, tarefas e gargalos no Discourse. |
| **E2-04** | O documento de Aspectos Éticos fundamenta-se nas normativas brasileiras (Resolução CNS nº 510/2016 e LGPD)? | ✅ Sim | [aspectos-eticos.md](../analise-requisitos/aspectos-eticos.md) referencia a Resolução CNS nº 510/2016 e a Lei nº 13.709/2018. |
| **E2-05** | São apresentados os 4 princípios bioéticos (Autonomia, Beneficência, Não-Maleficência e Justiça)? | ✅ Sim | Tabela 1 de [aspectos-eticos.md](../analise-requisitos/aspectos-eticos.md) aplica os princípios de Beauchamp & Childress (2013). |
| **E2-06** | É disponibilizada a minuta textual completa do Termo de Consentimento Livre e Esclarecido (TCLE)? | ✅ Sim | Tabela 2 de [aspectos-eticos.md](../analise-requisitos/aspectos-eticos.md) documenta a minuta integral e o script oral. |
| **E2-07** | O artefato estabelece a norma mandatória de solicitação prévia e gravada de permissão? | ✅ Sim | Seção 4 de `aspectos-eticos.md` e Bloco A de `entrevistas.md` normatizam a solicitação prévia nos primeiros 60 segundos. |
| **E2-08** | São garantidos anonimato, sigilo, voluntariedade e revogação sem penalidades? | ✅ Sim | Garantido em todas as fichas demográficas com codificação neutra (`P1`, `P2`, `P3`). |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

### Personas, Elenco de Personas e Cenários

A **Tabela 5** audita os critérios `E2-09` a `E2-17`.

**Tabela 5** — Verificação dos artefatos de Personas, Elenco e Cenários de Interação

| ID | Critério da Rubrica / Literatura Canônica | Resposta | Evidência Factual / Defeito Detectado |
| :---: | :--- | :---: | :--- |
| **E2-09** | O elenco de personas possui dimensão apropriada (entre 3 e 12 personas) e antipersona? | ✅ Sim | [personas.md](../analise-requisitos/personas.md) define 3 personas (Lucas, Carlos Eduardo, Mariana) e 1 antipersona. |
| **E2-10** | Há identificação clara e justificada de ao menos uma Persona Primária? | ✅ Sim | Persona 1 (Lucas Mendonça) formalmente designada como Persona Primária. |
| **E2-11** | As personas apresentam perfil socioeconômico, ocupação e grau de instrução completos? | ✅ Sim | Tabelas 2, 3 (Gustavo Antonio) e 4 de `personas.md` integralmente preenchidas. |
| **E2-12** | São discriminados os 3 níveis de objetivos da persona (visceral, comportamental e comunitário)? | ✅ Sim | Objetivos detalhados nas 3 dimensões em cada ficha de persona. |
| **E2-13** | As personas incluem citação em primeira pessoa e enumeração de dores/frustrações? | ✅ Sim | Todas as personas incluem citação representativa e lista de frustrações reais. |
| **E2-14** | As personas foram construídas com lastro no Perfil do Usuário (sem 'usuário elástico')? | ✅ Sim | Vinculação direta registrada na Tabela 1 de `personas.md`. |
| **E2-15** | Os Cenários descrevem narrativas contextuais consistentes e validadas para cada persona? | ⚠️ Incompleto | Cenário 1 (Vinicius) e Cenário 2 (Gustavo — saneado `*A ser definido pelo autor*` na Tabela 2) estão completos; contudo, em [cenarios.md](../analise-requisitos/cenarios.md) (linha 62 e linha 154), o **Cenário 3** ainda figura como `"hipótese a validar"` vinculado a `"perfil pendente"`. |
| **E2-16** | Cada Cenário apresenta os 7 elementos constitutivos de Carroll / Barbosa & Silva? | ✅ Sim | Tabelas 3, 4 e 5 detalham contexto, ator, objetivos, planejamento, ações, eventos e resultados. |
| **E2-17** | Há alinhamento e rastreabilidade direta entre Cenários, Personas e Tarefas? | ✅ Sim | Matriz de rastreabilidade na Tabela 2 de `cenarios.md` atualizada com link direto para o Cenário 2 na versão `1.3`. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

### Análise de Tarefas (HTA, GOMS e CTT)

A **Tabela 6** audita os critérios `E2-18` a `E2-24`.

**Tabela 6** — Verificação dos artefatos de Análise de Tarefas

| ID | Critério da Rubrica / Literatura Canônica | Resposta | Evidência Factual / Defeito Detectado |
| :---: | :--- | :---: | :--- |
| **E2-18** | Foram utilizadas ao menos duas técnicas formais de Análise de Tarefas? | ✅ Sim | [analise-tarefas.md](../analise-requisitos/analise-tarefas.md) aplica HTA e modelos GOMS/KLM e CTT. |
| **E2-19** | A HTA apresenta o objetivo de alto nível (nível 0) orientado ao estado final desejado? | ✅ Sim | Decomposições das Tarefas 1 (Vinicius), 2 (Gustavo) e 3 (Edvaldo) partem do nível 0 bem definido. |
| **E2-20** | A HTA apresenta tanto o Diagrama Gráfico em árvore quanto a Tabela Analítica equivalente? | ✅ Sim | Todas as tarefas possuem diagrama Mermaid hierárquico e tabela completa de subobjetivos e planos. |
| **E2-21** | Os planos em HTA especificam as condições lógicas usando operadores canônicos (`>`, `/`, `+`)? | ✅ Sim | Planos descritos formalmente nas tabelas de decomposição das três tarefas. |
| **E2-22** | Foi explicitado o critério formal de parada da decomposição HTA (`p × c` de Annett e Duncan)? | ✅ Sim | Critério `p × c` documentado na metodologia e justificativas de parada de cada fluxo. |
| **E2-23** | A modelagem GOMS/KLM especifica os operadores (`K, P, H, D, M, R`) e calcula o tempo total estimado? | ✅ Sim | Tabelas KLM e CMN-GOMS com tempos individuais somados (ex.: baseline de `135,3 s` na T1 e cronometragem formal na T2). |
| **E2-24** | Cada discente ativo é autor principal de ao menos uma modelagem de tarefa completa e distinta? | ✅ Sim | Tarefa 1 (Vinicius), Tarefa 2 (`CF02` Eventos Presenciais — Gustavo Antonio) e Tarefa 3 (Edvaldo Soares). |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

### Requisitos Globais de Documentação e Gravação (Entrega 2)

A **Tabela 7** audita os critérios `E2-25` a `E2-30`.

**Tabela 7** — Verificação de padronização e gravação da Entrega 2

| ID | Requisito de Governança | Resposta | Evidência Factual / Defeito Detectado |
| :---: | :--- | :---: | :--- |
| **E2-25** | Todos os artefatos da Entrega 2 possuem Tabela de Contribuição no início com hiperligação e IA? | ✅ Sim | Presente nos artefatos de E2 (sanada coluna de IA e hiperligação em `entrevistas.md` e `cenarios.md`). |
| **E2-26** | Todos os artefatos possuem Histórico de Versão com autor(es) e revisor(es) distintos (zero 'Pendente')? | ⚠️ Incompleto | Históricos de `perfil-usuario.md`, `personas.md` e `entrevistas.md` completos; porém em `cenarios.md` linha 193 (versão `1.1`, Cenário 3) o revisor consta como `Pendente`. |
| **E2-27** | As tabelas/imagens possuem legenda, fonte nominal (zero 'Elaborada pelos autores') e mídias funcionais sem placeholders? | ❌ Não | **Defeitos reais em aberto:** (1) [entrevistas.md](../analise-requisitos/entrevistas.md) não possui os vídeos reais no YouTube para P1 (player placeholder removido e marcado como Não Conforme na v2.1) nem para P2 (`placeholder-entrevista-p2`); (2) `analise-documental.md` (7x), `aspectos-eticos.md` (6x) e `brainstorming.md` (4x) mantêm `"Elaborada pelos autores"`. |
| **E2-28** | Todos os artefatos contêm seção de Referências Bibliográficas em formato ABNT? | ✅ Sim | Todos os 8 artefatos de Análise de Requisitos da E2 possuem referências ABNT completas. |
| **E2-29** | O vídeo de gravação da Apresentação Oficial da Entrega 2 está publicado como 'Não Listado' no YouTube? | ✅ Sim | Gravação oficial ([wyh15MvU-3c](https://youtu.be/wyh15MvU-3c)) incorporada em [entrega2.md](../entregas/entrega2.md). |
| **E2-30** | A gravação da Reunião de Alinhamento da etapa (Ata 4) está disponibilizada no YouTube? | ✅ Sim | Vídeo publicado ([OANTQ0KYoYk](https://youtu.be/OANTQ0KYoYk)) em [ata4.md](../atas/ata4.md) e [atas/index.md](../atas/index.md). |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 3. Verificação da Entrega 3 — Análise de Requisitos

A **Tabela 8** apresenta a autoavaliação rigorosa dos 18 itens da **Entrega 3**, distinguindo os artefatos de Gustavo Antonio (sanados no retrabalho) dos pontos pendentes em arquivos de terceiros.

**Tabela 8** — Verificação dos Itens da Entrega 3 (18 Itens Auditados)

| ID | Item de Verificação | Avaliação Atual | Evidência Factual / Pendência Detectada |
| :---: | :--- | :---: | :--- |
| **01** | **Características da Plataforma** | ✅ Sim | [caracteristicas-da-plataforma.md](../analise-requisitos/caracteristicas-da-plataforma.md) sanado (`RW-03`): Figura 0 (p. 105), autoria de Gustavo Antonio e Tabelas 1–4 numeradas. |
| **02** | **Princípios Gerais: Teoria e Fotos** | ✅ Sim | [principios-gerais-de-projeto.md](../analise-requisitos/principios-gerais-de-projeto.md) sanado (`RW-04`): recortes Figuras 1–7b, autoria nominal e Tabela 2 numerada. |
| **03** | **Princípios Gerais: 8 Tópicos Canônicos** | ✅ Sim | Inclui integralmente o tópico *8. Projeto para Erros (Nielsen H5 e H9)* com Figura 7b (`crop_projeto_erros.png`). |
| **04** | **Metas de Usabilidade e UX: Teoria e Foto** | ✅ Sim | [metas-de-usabilidade.md](../analise-requisitos/metas-de-usabilidade.md) sanado (`RW-05`) com linha explícita `_Autor do Item Teórico: Vinicius Silva Araruna_`. |
| **05** | **Metas de Usabilidade e UX: Justificativa** | ✅ Sim | Níveis inaceitáveis, aceitáveis e ideais definidos nas Tabelas 1 e 2 cruzando personas e HTA. |
| **06** | **Guia de Estilo: Teoria e Foto do Livro** | ✅ Sim | [guia-de-estilo.md](../analise-requisitos/guia-de-estilo.md) apresenta Figuras 1 e 2 de Mayhew (1999) e Barbosa & Silva (2010). |
| **07** | **Guia de Estilo: 6 Seções de Mayhew** | ✅ Sim | Documenta as 6 seções canônicas completas do Guia de Estilo. |
| **08** | **Guia de Estilo: Imagens e Fontes Nominais** | ⚠️ Incompleto | Figuras numeradas com PDF consolidado, porém [guia-de-estilo.md](../analise-requisitos/guia-de-estilo.md) ainda apresenta **9 ocorrências** de `_Fonte: Elaborada pelos autores_` em suas tabelas. |
| **09** | **Itens Teóricos Individuais (3 Membros Ativos)** | ✅ Sim | Autoria explícita e fotos do livro presentes nos blocos de Vinicius, Gustavo e Edvaldo. |
| **10** | **Tabela de Contribuição no Topo dos Artefatos** | ✅ Sim | Todos os artefatos da Entrega 3 possuem Tabela de Contribuição no início. |
| **11** | **Histórico de Versão e Revisão por Pares** | ✅ Sim | Eliminados revisores `"Pendente"` em Características e Princípios Gerais; histórico completo. |
| **12** | **Introdução nos Artefatos da E3** | ✅ Sim | Seção introdutória presente em todos os documentos da etapa. |
| **13** | **Chamadas e Fontes Nominais em Todas as Tabelas da E3** | ⚠️ Incompleto | Tabelas de Características, Princípios e `entrega3.md` 100% nominais; porém `metas-de-usabilidade.md` (2x) e `guia-de-estilo.md` (9x) mantêm fonte genérica `"Elaborada pelos autores"`. |
| **14** | **Cronograma Executado da Entrega 3** | ✅ Sim | Tabela 4 em [cronograma-executado.md](../planejamento/cronograma-executado.md) completa com datas e responsáveis. |
| **15** | **Ata da Reunião 5** | ✅ Sim | [Ata 5](../atas/ata5.md) documenta pauta, participantes e deliberações. |
| **16** | **Registro de Modalidade da Reunião 5** | ✅ Sim | Registrada como reunião presencial de alinhamento em `atas/index.md` e `ata5.md`. |
| **17** | **Vídeo de Apresentação da Entrega 3** | ✅ Sim | Vídeo publicado no YouTube ([MIRdtPGGHmM](https://youtu.be/MIRdtPGGHmM)) com minutagem consolidada em [entrega3.md](../entregas/entrega3.md). |
| **18** | **Agradecimentos e Uso de IA Generativa** | ✅ Sim | Presente em todos os artefatos da Entrega 3. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 4. Verificação da Entrega 4 — Planejamento da Avaliação e Relato (Nível 1)

A **Tabela 9** documenta a auditoria dos 13 critérios da **Entrega 4** (Planejamento de Storyboard e Análise de Tarefas).

**Tabela 9** — Verificação dos Itens da Entrega 4 (Grupo 08)

| ID | Item de Verificação / Rubrica Oficial | Origem / Fonte Normativa | Aferição | Evidência Factual / Defeito Detectado |
| :---: | :--- | :--- | :---: | :--- |
| **E4-01** | O planejamento da avaliação segue integralmente o Framework DECIDE? | Preece et al. (2002); Barbosa et al. (2021) | ✅ Sim | Planejamentos de Storyboard e Análise de Tarefas seguem as 6 etapas do Framework DECIDE. |
| **E4-02** | São descritos os objetivos da avaliação fundamentados no Ciclo de Mayhew? | Mayhew (1999); Barbosa et al. (2021) | ✅ Sim | Seção 1 de ambos os planejamentos contextualiza a avaliação formativa pré-código. |
| **E4-03** | Os métodos de avaliação são definidos com citação, referência ABNT, autor e foto do livro? | Barbosa & Silva (2021); Sales (2026) | ✅ Sim | Itens teóricos publicados em [item-teorico-metodos-avaliacao.md](../design-avaliacao-desenvolvimento/item-teorico-metodos-avaliacao.md) (Edvaldo) e [item-teorico-storyboard.md](../conteudo-teorico/item-teorico-storyboard.md) (Gustavo). |
| **E4-04** | As questões práticas detalham recrutamento, perfil, ambiente e orçamento zero? | Barbosa & Silva (2021, p. 273) | ✅ Sim | Documentado em [questoes-praticas-cronograma.md](../design-avaliacao-desenvolvimento/nivel-1/questoes-praticas-cronograma.md) (Gustavo Antonio) com fontes nominais. |
| **E4-05** | As questões éticas prescrevem script oral do TCLE nos primeiros 60s? | Res. CNS 510/2016; LGPD | ✅ Sim | Seção 7 dos planejamentos normatiza o Script Oral literal do TCLE. |
| **E4-06** | O planejamento do relato estrutura objetivos, métodos, participantes, severidade (0–4) e referências? | Barbosa et al. (2021, p. 303); Nielsen (1994) | ⚠️ Incompleto | Planejamentos individuais de Nível 1 (`storyboard/planejamento-relato-resultados.md` de Gustavo e `analise-tarefas/planejamento-relato-resultados.md`) estão completos; porém o documento geral [planejamento-relato-tarefas.md](../design-avaliacao-desenvolvimento/planejamento-relato-tarefas.md) **não possui seção de Referências Bibliográficas** e utiliza fonte genérica. |
| **E4-07** | O cronograma prevê datas, horários e locais para o teste-piloto e sessões oficiais? | Barbosa & Silva (2021); Sales (2026) | ✅ Sim | Datas presenciais na FGA/UnB previstas na Tabela 4 de `entrega4.md` e em `cronograma-executado.md`. |
| **E4-08** | Cada Storyboard está vinculado formalmente a um fluxo de tarefa modelado no HTA/CTT? | Klemmer (2012); Barbosa & Silva (2021) | ✅ Sim | Mapeamento 1:1 explícito entre Storyboards 1–3 e Tarefas 1–3 (`CF01`–`CF03`). |
| **E4-09** | A quantidade de Storyboards e tarefas avaliadas é igual à de integrantes ativos? | Plano de Ensino (*Sales, 2026*) | ✅ Sim | 3 Storyboards físicos (300 DPI) produzidos por Vinicius, Gustavo e Edvaldo. |
| **E4-10** | O teste-piloto está definido com protocolo prévio, vídeos e declaração de IA? | Barbosa & Silva (2021, p. 276); Sales (2026) | ✅ Sim | [teste-piloto.md (Nível 1)](../design-avaliacao-desenvolvimento/nivel-1/teste-piloto.md) sanado (`RW-10`) com correção do cabeçalho da Tabela 5 e inclusão da Seção 12 (Agradecimentos e IA). |
| **E4-11** | Consta Cláusula Metodológica Obrigatória isolando os dados do teste-piloto? | Barbosa & Silva (2021, p. 276) | ✅ Sim | Caixa de alerta `warning` na Seção 3 de `teste-piloto.md` e nos relatos finais. |
| **E4-12** | O roteiro/ficha do observador e demais anexos da E4 atendem aos 11 critérios de desenvolvimento (contribuição, histórico, referências e fontes)? | Plano de Ensino (*Sales, 2026, pp. 8–9*) | ❌ Não | **Defeito detectado:** o anexo [observacao-avaliador.md](../design-avaliacao-desenvolvimento/observacao-avaliador.md) publicado no site **não possui Tabela de Contribuição, Histórico de Versão, Declaração de IA nem Referências Bibliográficas**; ademais, `nivel-1/analise-tarefas/planejamento-avaliacao.md` (7x) e `entrega4.md` (5x) mantêm fonte genérica. |
| **E4-13** | A gravação em vídeo da apresentação da Entrega 4 está no YouTube ("Não Listado")? | Diretrizes da Disciplina (*Sales, 2026*) | ✅ Sim | Vídeo oficial ([0kXHOEfO6cc](https://youtu.be/0kXHOEfO6cc)) incorporado em [entrega4.md](../entregas/entrega4.md). |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 5. Verificação da Entrega 5 — Relatos de Resultados de Nível 1 e Protótipo de Papel (Nível 2)

A **Tabela 10** documenta a auditoria rigorosa dos 15 critérios da **Entrega 5**.

**Tabela 10** — Autoavaliação da Entrega 5 do Grupo 08

| ID | Questão / Critério da Rubrica Oficial | Resposta | Evidência Factual / Defeito Detectado |
| :---: | :--- | :---: | :--- |
| **E5-01** | O arquivo PDF padronizado da entrega foi gerado no formato estipulado? | ✅ Sim | Arquivo `PlajRelatoStoryBoarProtPapeldDiolinuxPlus.pdf` publicado em `docs/assets/relatorios/`. |
| **E5-02** | O PDF e a página da entrega contêm URL funcional do vídeo de apresentação e GitPages? | ✅ Sim | Vídeos ([KO4E0UjvhOw](https://youtu.be/KO4E0UjvhOw) e [cRSrm-Zc2no](https://youtu.be/cRSrm-Zc2no)) e links integrados em [entrega5.md](../entregas/entrega5.md). |
| **E5-03** | O relato do Storyboard documenta a avaliação empírica com discentes voluntários? | ✅ Sim | Sessões presenciais registradas com vídeos no YouTube em [storyboard/relato-resultados.md](../design-avaliacao-desenvolvimento/nivel-1/storyboard/relato-resultados.md) e [storyboard-eventos-presenciais.md](../design-avaliacao-desenvolvimento/nivel-1/storyboard/storyboard-eventos-presenciais.md). |
| **E5-04** | O consentimento livre e esclarecido (TCLE) foi gravado com script oral nos primeiros 60s? | ✅ Sim | Todas as gravações empíricas de Nível 1 iniciam com leitura literal do Script Oral do TCLE. |
| **E5-05** | O relato da Análise de Tarefas valida objetivos, planos HTA e CMN-GOMS/CTT com usuários? | ✅ Sim | Documentado em [analise-tarefas/relato-resultados.md](../design-avaliacao-desenvolvimento/nivel-1/analise-tarefas/relato-resultados.md). |
| **E5-06** | Os problemas identificados são classificados pela escala de severidade de Nielsen (0 a 4)? | ✅ Sim | Matrizes `PROB-ST` e `PROB-AT` categorizadas de 0 a 4 com ações de reprojeto. |
| **E5-07** | O planejamento da avaliação do Protótipo de Papel segue integralmente o framework DECIDE? | ✅ Sim | Artefato [nivel-2/prototipo-papel/planejamento-avaliacao.md](../design-avaliacao-desenvolvimento/nivel-2/prototipo-papel/planejamento-avaliacao.md) completo nas 6 etapas. |
| **E5-08** | Há delimitação estrita dos papéis de Facilitador e 'Computador Humano'? | ✅ Sim | Fundamentado em Snyder (2003) e Rettig (1994) em toda a documentação de Nível 2. |
| **E5-09** | O teste-piloto do protótipo de papel foi planejado e executado? | ✅ Sim | Protocolo em [nivel-2/prototipo-papel/teste-piloto.md](../design-avaliacao-desenvolvimento/nivel-2/prototipo-papel/teste-piloto.md). |
| **E5-10** | Há declaração explícita de isolamento total dos dados do teste-piloto de Nível 2? | ✅ Sim | Cláusula mandatória explícita em `teste-piloto.md` e nos relatos de resultados. |
| **E5-11** | O planejamento do relato do protótipo de papel define métricas e taxonomia de erros? | ✅ Sim | Estruturado em [nivel-2/prototipo-papel/planejamento-relato-resultados.md](../design-avaliacao-desenvolvimento/nivel-2/prototipo-papel/planejamento-relato-resultados.md). |
| **E5-12** | O menu de navegação está livre de páginas placeholder ('Nada a ver aqui por enquanto')? | ✅ Sim | Navegação lateral livre de páginas vazias ou em construção. |
| **E5-13** | Todas as tabelas/figuras possuem títulos, fontes nominais e chamadas explícitas no texto? | ⚠️ Incompleto | [storyboard-eventos-presenciais.md](../design-avaliacao-desenvolvimento/nivel-1/storyboard/storyboard-eventos-presenciais.md) sanado (`RW-11`); porém [entrega5.md](../entregas/entrega5.md) (7x), `prototipo-papel-tarefa1.md` (9x) e `planejamento-avaliacao-agendamento.md` (5x) mantêm `"Elaborada pelos autores"`. |
| **E5-14** | As tabelas de contribuição e históricos de versão possuem autor e revisor com links funcionais? | ✅ Sim | Todas as páginas principais da E5 possuem tabelas de contribuição e históricos com links GitHub. |
| **E5-15** | Há seção de agradecimentos declarando uso de IA Generativa (SBC)? | ✅ Sim | Presente nos artefatos e relatos da Entrega 5. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 6. Verificação da Entrega 6 — Relato do Protótipo de Papel (Nível 2) e Planejamento de Alta Fidelidade (Nível 3)

A **Tabela 11** audita os 12 critérios da **Entrega 6** (`E6-01` a `E6-12`).

**Tabela 11** — Autoavaliação da Entrega 6 do Grupo 08

| ID | Questão / Critério da Rubrica Oficial | Resposta | Evidência Factual / Defeito Detectado |
| :---: | :--- | :---: | :--- |
| **E6-01** | O relato do Protótipo de Papel documenta as pranchas físicas base e os componentes móveis? | ✅ Sim | Documentado com fotos 300 DPI em `prototipo-papel-tarefa1.md`, [prototipo-papel-tarefa2.md](../design-avaliacao-desenvolvimento/nivel-2/prototipo-papel/prototipo-papel-tarefa2.md) (Gustavo) e `relato-resultados-agendamento.md`. |
| **E6-02** | Foi executado e gravado o Teste-Piloto do Protótipo de Papel com isolamento de dados? | ✅ Sim | Pilotos gravados para T1 (`I1CNO_EkCfE`), T2 (`bEn3f5wqhvc` — Gustavo) e T3 (`EJp9UOi7vvo`), com cláusula de isolamento. |
| **E6-03** | A sessão de avaliação respeitou a separação de papéis entre Facilitador e 'Computador Humano'? | ✅ Sim | Comprovado nas gravações de bancada física com manipulação de pranchas (`< 1s`). |
| **E6-04** | O consentimento (TCLE) foi gravado com leitura do Script Oral nos primeiros 60s? | ✅ Sim | Evidenciado nos primeiros 60s de todas as 8 sessões empíricas de Nível 2 (3 na T1, 2 na T2 e 3 na T3). |
| **E6-05** | O relato analisa as perguntas investigativas, severidade (0–4) e cumpre formatação nominal? | ⚠️ Incompleto | Conteúdo analítico e severidades (`PROB-PP-01`–`05`, `PROB-PP-T2-01`–`05`) completos — com 100% das fontes nominais no relato de Gustavo (`relato-resultados-tarefa2.md`); contudo, `relato-resultados-agendamento.md` (5x) e `entrega6.md` (1x) ainda contêm fonte genérica `"Elaborada pelos autores"`. |
| **E6-06** | O relato especifica diretrizes concretas de reprojeto para o Nível 3? | ✅ Sim | Recomendações mapeadas em todos os relatos (ex.: remoção do PIX e seletor 24h na T2). |
| **E6-07** | O Planejamento da Avaliação de Alta Fidelidade (Nível 3) aplica integralmente o DECIDE? | ✅ Sim | Estruturado integralmente em [nivel-3/planejamento-avaliacao.md](../design-avaliacao-desenvolvimento/nivel-3/planejamento-avaliacao.md). |
| **E6-08** | O Planejamento de Alta Fidelidade define métricas vinculadas às Metas de Usabilidade? | ✅ Sim | Confronta tempo com KLM (`135,3 s`), taxa de conclusão, erros, SEQ e SUS (`≥ 80,0`). |
| **E6-09** | O Planejamento de Nível 3 prevê Teste-Piloto, custo zero e Script Oral do TCLE? | ✅ Sim | Documentado nas Seções 5–7 de `nivel-3/planejamento-avaliacao.md` e em `nivel-3/teste-piloto.md`. |
| **E6-10** | O Planejamento do Relato de Alta Fidelidade define os 9 tópicos canônicos? | ✅ Sim | Documentado em [nivel-3/planejamento-relato-resultados.md](../design-avaliacao-desenvolvimento/nivel-3/planejamento-relato-resultados.md). |
| **E6-11** | Os artefatos metodológicos possuem Lista de Verificação da Técnica (6 a 8 itens)? | ✅ Sim | Presente nas especificações e relatos de Nível 2 e 3. |
| **E6-12** | As gravações de Teste-Piloto, Avaliação em Papel e Apresentação da E6 estão em "Não Listado"? | ✅ Sim | Apresentação oficial ([5JwaiFc_dxs](https://youtu.be/5JwaiFc_dxs)) e todos os vídeos empíricos incorporados em `entrega6.md`. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 7. Verificação da Entrega 7 — Relato dos Resultados da Avaliação da Alta Fidelidade (Nível 3)

A **Tabela 12** audita os 12 critérios da **Entrega 7** (`E7-01` a `E7-12`).

**Tabela 12** — Autoavaliação da Entrega 7 do Grupo 08

| ID | Questão / Critério da Rubrica Oficial | Resposta | Evidência Factual / Defeito Detectado |
| :---: | :--- | :---: | :--- |
| **E7-01** | O protótipo de alta fidelidade foi construído em conformidade com o Guia de Estilo e possui telas acessíveis? | ✅ Sim | [prototipo-alta-fidelidade.md (T1)](../design-avaliacao-desenvolvimento/nivel-3/prototipo-alta-fidelidade.md), [prototipo-alta-fidelidade-tarefa2.md (T2 + Web App HTML5/JS)](../design-avaliacao-desenvolvimento/nivel-3/prototipo-alta-fidelidade-tarefa2.md) e [prototipo-alta-fidelidade-tarefa3.md (T3)](../design-avaliacao-desenvolvimento/nivel-3/prototipo-alta-fidelidade-tarefa3.md). |
| **E7-02** | Há rastreabilidade explícita demonstrando como os problemas do Nível 2 foram resolvidos no Nível 3? | ✅ Sim | Tabelas comparativas Nível 2 → Nível 3 presentes nas três tarefas (ex.: relógio 24h concêntrico e quórum prioritário na T2). |
| **E7-03** | Foi executado e gravado o Teste-Piloto de Alta Fidelidade antes das sessões empíricas em 100% das tarefas? | ⚠️ Incompleto | Gravado e publicado com vídeo real para a Tarefa 1 ([r7vN1XWerE4](https://youtu.be/r7vN1XWerE4)) e Tarefa 2 ([SzvR4D9lKaw](https://youtu.be/SzvR4D9lKaw) — Gustavo); contudo, em [relato-resultados-tarefa3.md](../design-avaliacao-desenvolvimento/nivel-3/relato-resultados-tarefa3.md) o vídeo piloto da Tarefa 3 não foi vinculado. |
| **E7-04** | Consta declaração explícita de isolamento total dos dados do Teste-Piloto? | ✅ Sim | Cláusula destacada em `teste-piloto.md` e na Seção 9/2.1 dos relatos das três tarefas. |
| **E7-05** | O método e o tamanho da amostra (`n = 3` participantes por tarefa) estão justificados? | ✅ Sim | Fundamentado em Nielsen & Landauer (1993 — `67,15%` com `n = 3`), Krug (2014) e Rubin & Chisnell (2008). |
| **E7-06** | O TCLE foi gravado nos primeiros 60 segundos, garantindo anonimização LGPD? | ✅ Sim | Consentimento oral gravado em todas as 9 sessões empíricas (`P1`, `P2`, `P3`). |
| **E7-07** | As sessões empíricas com usuários reais aderentes ao perfil foram disponibilizadas em vídeo? | ✅ Sim | 9 sessões empíricas reais publicadas: T1 (`GNMJ7WGaaDE`, `-9L9zKd19d0`, `32IMt6ExSoE`), T2 (`Lwa7sELcy0o`, `W8rWj6q8bT8`, `6H0K1DV6WRE` — Gustavo) e T3 (`oq8vuAjaCUM`, `5T8QY_QbhzA`, `byOn3DBegCE`). |
| **E7-08** | O relato apresenta estrutura íntegra e página livre de placeholders/URLs fictícias? | ❌ Não | **Defeito crítico detectado:** os relatos T1 (`relato-resultados.md`) e T2 (`relato-resultados-tarefa2.md` — Gustavo) estão 100% íntegros; porém [relato-resultados-tarefa3.md](../design-avaliacao-desenvolvimento/nivel-3/relato-resultados-tarefa3.md) (linhas 62, 77 e 81) contém URLs fictícias explícitas (`https://youtu.be/PILOTO_TAREFA3_PLACEHOLDER`). |
| **E7-09** | Foram coletadas métricas de desempenho (tempo vs. KLM) e satisfação (SUS / SEQ)? | ✅ Sim | T1: `91,3 s` vs. `135,3 s` (`-32,5%`) e SUS `82,5`; T2 (Gustavo): `101,0 s` (`≤ 120 s`), SEQ `6,7/7,0` e SUS `90,8` (Grau A+); T3: `45,0 s` e SUS `87,5`. |
| **E7-10** | Os problemas detectados foram classificados na escala de severidade de Nielsen (0 a 4)? | ✅ Sim | Matrizes `PROB-AF-01–05`, `PROB-AF-T2-01–04` e `PROB-AF3-01` classificadas com heurísticas violadas. |
| **E7-11** | Foram definidas diretrizes de reprojeto e executada a Lista de Verificação da Técnica? | ✅ Sim | Diretrizes e listas de verificação presentes nos três relatos de alta fidelidade. |
| **E7-12** | Vídeos da apresentação oficial (Não Listado) e PDF da Entrega 7 foram entregues? | ✅ Sim | Apresentações de T1 (`kZtajVn5fIQ`) e T2 (`5bei648S9VE`) incorporadas em `entrega7.md` e PDF publicado. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 8. Verificação da Entrega 8 — Verificação e Validação dos Artefatos (Auditoria Global)

A **Tabela 13** aplica os **12 critérios normativos rigorosos (`E8-01` a `E8-12`)** definidos na Seção 11 de [lista-verificacao.md](lista-verificacao.md) em consonância com o Plano de Ensino (*Sales, 2026*).

**Tabela 13** — Autoavaliação Rigorosa da Entrega 8 do Grupo 08

| ID | Critério Normativo (*Sales, 2026 / Fagan, 1976*) | Resposta | Evidência Factual / Pendência Global Detectada |
| :---: | :--- | :---: | :--- |
| **E8-01** | Checklists normativos em branco cobrindo Entregas 1 a 8 desacoplados dos relatórios empíricos? | ✅ Sim | [lista-verificacao.md](lista-verificacao.md) disponibiliza os checklists neutros de todas as 8 etapas alinhados aos blocos do Plano de Ensino. |
| **E8-02** | Autoavaliação rigorosa Pré-Retrabalho vs. Pós-Retrabalho sem mascarar falhas reais? | ✅ Sim | Este relatório apresenta métricas fidedignas (**70,1% Pré → 84,3% Pós-Saneamento de Gustavo**), mantendo 17 pendências parciais e 4 defeitos críticos visíveis. |
| **E8-03** | Integridade de mídia e zero placeholders em todo o repositório (87 arquivos)? | ❌ Não | **Defeito global em aberto:** persistem 3 links placeholder de vídeo em artefatos não saneados (`ata3.md`: `placeholder_ata3_grupo08`, `entrevistas.md` P2: `placeholder-entrevista-p2` e `relato-resultados-tarefa3.md`: `PILOTO_TAREFA3_PLACEHOLDER`), além da pendência de gravação real da Entrevista P1 em `entrevistas.md`. |
| **E8-04** | Tabela de Contribuição no início de 100% dos artefatos com hiperligação (Item 10)? | ⚠️ Incompleto | Todos os artefatos de Gustavo Antonio e páginas de entregas possuem tabela de contribuição com hiperligações; porém [observacao-avaliador.md](../design-avaliacao-desenvolvimento/observacao-avaliador.md) carece desta tabela. |
| **E8-05** | Declaração ética de IA Generativa (Item 11 / SBC) e Matriz Consolidada com vantagens/desvantagens? | ✅ Sim | Declarações individuais presentes e **Matriz Consolidada de Transparência de IA** preenchida na Seção 11 deste documento e na Seção 4 de [entrega8.md](../entregas/entrega8.md). |
| **E8-06** | Governança e Revisão por Pares (Histórico completo, autor distinto do revisor — Itens 1 e 2)? | ⚠️ Incompleto | Sanados nos artefatos de Gustavo; pendente apenas em `observacao-avaliador.md` (sem histórico) e `cenarios.md` v1.1 (Cenário 3 de terceiro com revisor `"Pendente"`). |
| **E8-07** | Formatação, fontes nominais explícitas (zero `"Elaborada pelos autores"`) e referências ABNT em 100% dos arquivos? | ⚠️ Incompleto | **100% sanado nos artefatos de Gustavo Antonio** (`RW-01` a `RW-12`); todavia, permanecem fontes genéricas em 24 arquivos mantidos pelos demais colegas e ausência de referências ABNT em `observacao-avaliador.md` e `planejamento-relato-tarefas.md`. |
| **E8-08** | Conteúdo da Disciplina com citação, foto legível da referência e autor do item? | ✅ Sim | Validado em `conteudo-teorico/index.md`, `item-teorico-storyboard.md`, `analise-requisitos/conteudo-disciplina.md` e nas páginas teóricas da E3. |
| **E8-09** | Cronograma executado até Etapa 8 e Atas de Reunião 1 a 8 registradas com gravação quando houver? | ⚠️ Incompleto | [cronograma-executado.md](../planejamento/cronograma-executado.md) atualizado até E8 e [Ata 8](../atas/ata8.md) publicada; pendente apenas o link da Ata 3 (`placeholder_ata3_grupo08`). |
| **E8-10** | Matriz Consolidada de Contribuição por Integrante (modelo Tabela 1 do Plano de Ensino, p. 7)? | ✅ Sim | Preenchida integralmente cobrindo E1–E8 na Seção 11 deste relatório e na Seção 3 de [entrega8.md](../entregas/entrega8.md). |
| **E8-11** | Heteroavaliações de Grupos Pares (G07 nas Etapas 2, 4, 6; G01 nas Etapas 3, 5, 7) documentadas? | ✅ Sim | Hubs completos e auditáveis em [Grupo 07](grupo07/index.md) e [Grupo 01](grupo01/index.md). |
| **E8-12** | Página da Entrega 8 publicada no menu, sem placeholders e pronta para gravação (20–30 min)? | ⚠️ Incompleto | Página [entrega8.md](../entregas/entrega8.md) concluída e publicada no menu (`mkdocs.yml`); gravação do vídeo oficial da Etapa 8 agendada para a janela de entrega (`20/11–22/11`). |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 9. Plano de Retrabalho (*Rework*) e Pendências Abertas — Método de Fagan (1976)

Em estrita observância às Fases 5 (*Rework*) e 6 (*Follow-up*) de **Fagan (1976)**, a **Tabela 14A** documenta o **Retrabalho efetivamente executado** sobre as páginas de síntese e sobre **todos os artefatos de autoria de Gustavo Antonio Rodrigues e Silva**. Em seguida, a **Tabela 14B** expõe com absoluta transparência os **defeitos reais remanescentes** que dependem de atuação dos respectivos autores responsáveis ou de gravações externas pendentes.

### 9.1 Retrabalhos Executados (Saneamento de Entrega 8 e Artefatos de Gustavo Antonio)

**Tabela 14A** — Registro de Retrabalho (*Rework*) executado e verificado

| ID | Etapa / Artefato Afetado | Não Conformidade Detectada na Auditoria | Ação de Retrabalho (*Rework*) Executada | Responsável | Auditor de *Follow-up* | Status |
| :---: | :--- | :--- | :--- | :--- | :--- | :---: |
| **RW-01** | **Entrega 1**<br>[entrega1.md](../entregas/entrega1.md) | Página enxuta (18 linhas), sem Tabela de Contribuição, sem link de vídeo (`e9UGmkfeYXU`) e sem Histórico. | Reestruturação completa (`v2.0`) com Matriz de Contribuição/IA, Rastreabilidade, links de vídeo e Atas 1–3, Histórico e ABNT. | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | ✅ **Sanado** |
| **RW-02** | **Entrega 2**<br>[entrega2.md](../entregas/entrega2.md) | Página enxuta (17 linhas), sem Tabela de Contribuição, autoria das tarefas ou Histórico. | Reestruturação completa (`v2.0`) detalhando Tarefas 1, 2 (`CF02`) e 3, vídeo (`wyh15MvU-3c`), PDF G07 e Histórico. | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | ✅ **Sanado** |
| **RW-03** | **Entrega 3**<br>[caracteristicas-da-plataforma.md](../analise-requisitos/caracteristicas-da-plataforma.md) | Falta de foto do livro (p. 105), autoria teórica, numeração de tabelas, revisor `"Pendente"` e seção de IA. | Inclusão da Figura 0 (`foto-plataforma-barbosa-p105.png`), autoria nominal, Tabelas 1–4, revisor e seção de IA (`v2.1`). | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | ✅ **Sanado** |
| **RW-04** | **Entrega 3**<br>[principios-gerais-de-projeto.md](../analise-requisitos/principios-gerais-de-projeto.md) | Omissão do 8º princípio (*Projeto para Erros*), matriz sem numeração, revisor `"Pendente"` e falta de IA. | Inclusão do tópico 8 com Figura 7b (`crop_projeto_erros.png`), autoria nominal, Tabelas 1–3, revisor e IA (`v2.2`). | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | ✅ **Sanado** |
| **RW-05** | **Entrega 3**<br>[metas-de-usabilidade.md](../analise-requisitos/metas-de-usabilidade.md) e [entrega3.md](../entregas/entrega3.md) | Falta de autoria nominal abaixo da Figura 1 em `metas-de-usabilidade.md` e placeholder `"A consolidar pós-gravação"` em `entrega3.md`. | Adicionada linha de autoria de Vinicius e consolidada a minutagem executada (`00:00–09:20`) de `MIRdtPGGHmM` em `entrega3.md`. | [Gustavo Antonio](https://github.com/gus-ant) | [Edvaldo Soares](https://github.com/PajeMurici-dev) | ✅ **Sanado** |
| **RW-06** | **Planejamento**<br>[cronograma-planejado.md](../planejamento/cronograma-planejado.md) e [cronograma-executado.md](../planejamento/cronograma-executado.md) | E6 constava "Em andamento", faltavam tabelas executadas E7/E8 e havia fontes `"Elaborada pelos autores"`. | Atualizada Tabela 7 (E6), adicionadas Tabelas 8 (E7) e 9 (E8), e substituídas **100% das fontes genéricas** por nomes completos. | [Gustavo Antonio](https://github.com/gus-ant) | [Edvaldo Soares](https://github.com/PajeMurici-dev) | ✅ **Sanado** |
| **RW-07** | **Planejamento (Gustavo)**<br>[heatmap.md](../planejamento/heatmap.md) e [site-selecionado.md](../planejamento/site-selecionado.md) | `heatmap.md` sem coluna de IA e com `(Fonte: Autores)`; `site-selecionado.md` com `"Elaborada pelos autores"` nas Tabelas 1 e 2. | Adicionada coluna de IA em `heatmap.md` (`v1.2`) e substituídas todas as fontes genéricas pelas identificações nominais (`v1.6`). | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | ✅ **Sanado** |
| **RW-08** | **Entrega 2 (Gustavo)**<br>[cenarios.md](../analise-requisitos/cenarios.md) | Tabela 2 com `*A ser definido pelo autor*` para Cenário 2; Tabela de Contribuição de Gustavo com placeholder de branch; fontes genéricas e falta de v1.2. | Preenchido título/link do Cenário 2, declaração de IA de Gustavo, fontes nominais e histórico `v1.2` e `v1.3`. | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | ✅ **Sanado** |
| **RW-09** | **Entrega 2 (Gustavo)**<br>[perfil-usuario.md](../analise-requisitos/perfil-usuario.md) e [personas.md](../analise-requisitos/personas.md) | Cabeçalho da Tabela 5 de `perfil-usuario.md` com 4 colunas (para 5 nas linhas); fontes genéricas `"Elaborada pelos autores"` em ambos os arquivos. | Corrigido cabeçalho da Tabela 5, substituídas fontes genéricas por nominais em `perfil-usuario.md` (`v2.2`) e `personas.md` (`v1.3`). | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | ✅ **Sanado** |
| **RW-10** | **Entrega 2 (Gustavo P1)**<br>[entrevistas.md](../analise-requisitos/entrevistas.md) | Link fictício `placeholder-entrevista-p1` marcado enganosamente como `Sim` na Tabela 4 (Item 7); falta de coluna de IA na Tabela 1 e fontes genéricas. | Removida URL placeholder de P1 com aviso transparente de pendência audiovisual; Tabela 4 Item 7 alterada para `Não`; fontes nominais e coluna IA adicionadas (`v2.1`). | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | ⚠️ **Saneado c/ Pendência Real de Vídeo** |
| **RW-11** | **Níveis 1 e 3 (Gustavo)**<br>[teste-piloto.md (N1)](../design-avaliacao-desenvolvimento/nivel-1/teste-piloto.md), [storyboard-eventos-presenciais.md](../design-avaliacao-desenvolvimento/nivel-1/storyboard/storyboard-eventos-presenciais.md) e [prototipo-alta-fidelidade-tarefa2.md](../design-avaliacao-desenvolvimento/nivel-3/prototipo-alta-fidelidade-tarefa2.md) | `teste-piloto.md` sem Seção 12 (IA) e com cabeçalho quebrado na Tabela 5; `storyboard-eventos-presenciais.md` com Tabela de Contribuição só de 1 membro; `prototipo-alta-fidelidade-tarefa2.md` sem coluna de hiperligação na Tabela 1. | Adicionada Seção 12 (IA SBC) e corrigido cabeçalho em `teste-piloto.md` (`v1.5`); completada Tabela de Contribuição/hiperligações em `storyboard-eventos-presenciais.md` (`v1.2`) e `prototipo-alta-fidelidade-tarefa2.md`. | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | ✅ **Sanado** |
| **RW-12** | **Entrega 8 e Atas**<br>[lista-verificacao.md](lista-verificacao.md), [grupo08.md](grupo08.md), [entrega8.md](../entregas/entrega8.md) e [ata8.md](../atas/ata8.md) | Falta de checklists de E8, autoavaliação incompleta (parada na E5) ou artificialmente otimista (100%). | Reescrita integral da Entrega 8 aderente ao Plano de Ensino (*Sales, 2026*), com auditoria fidedigna pré/pós-retrabalho e matrizes completas de contribuição e IA. | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | ✅ **Sanado** |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

### 9.2 Defeitos Abertos e Pendências Remanescentes (Não Mascarados — Ação até 30/11)

A **Tabela 14B** registra explicitamente as **4 não conformidades críticas (`❌ Não`)** e as **pendências documentais (`⚠️ Incompleto`)** remanescentes em artefatos que exigem gravação externa ou ação dos demais responsáveis antes da apresentação do Projeto Final (`30/11/2026`).

**Tabela 14B** — Registro transparente de defeitos abertos pós-auditoria

| ID | Severidade | Artefato(s) Afetado(s) | Defeito Real Constatado | Encaminhamento / Responsável |
| :---: | :---: | :--- | :--- | :--- |
| **DEF-01** | 🔴 **Crítico** | [entrevistas.md](../analise-requisitos/entrevistas.md) (Quadros 1 e 2) | Ausência dos vídeos reais das entrevistas com P1 (Gustavo — player placeholder removido) e P2 (Edvaldo — ainda aponta para `placeholder-entrevista-p2`). | Upload das gravações no YouTube (Não Listado) ou registro formal de reposição empírica por Gustavo Antonio e Edvaldo Soares. |
| **DEF-02** | 🔴 **Crítico** | [relato-resultados-tarefa3.md](../design-avaliacao-desenvolvimento/nivel-3/relato-resultados-tarefa3.md) (L62, L77, L81) | Link e iframe do Teste-Piloto de Alta Fidelidade da Tarefa 3 apontando para `PILOTO_TAREFA3_PLACEHOLDER`. | Inserir URL real do teste-piloto no YouTube — Edvaldo Soares Brasileiro Filho. |
| **DEF-03** | 🔴 **Crítico** | [ata3.md](../atas/ata3.md) (L102) | Link de gravação da Reunião Extraordinária (Ata 3) aponta para `placeholder_ata3_grupo08`. | Inserir link real da gravação de 14/09/2026 ou registrar oficialmente que a deliberação foi presencial/sem gravação — Vinicius / Edvaldo. |
| **DEF-04** | 🔴 **Crítico** | [observacao-avaliador.md](../design-avaliacao-desenvolvimento/observacao-avaliador.md) e [planejamento-relato-tarefas.md](../design-avaliacao-desenvolvimento/planejamento-relato-tarefas.md) | `observacao-avaliador.md` não possui Tabela de Contribuição, Histórico de Versão, IA ou Referências ABNT; `planejamento-relato-tarefas.md` não possui Referências ABNT. | Adicionar blocos completos de governança e ABNT — Vinicius / Edvaldo. |
| **DEF-05** | 🟠 **Médio** | 24 arquivos mantidos pelos demais colegas (`equipe.md`, `ferramentas.md`, `sites-avaliados.md`, `analise-documental.md`, `aspectos-eticos.md`, `brainstorming.md`, `guia-de-estilo.md`, `metas-de-usabilidade.md`, `entrega4.md`, `entrega5.md`, `entrega6.md`, atas 3–7 e Nível 1/2 T1/T3) | Permanência de legendas genéricas `_Fonte: Elaborada pelos autores, 2026._` em contradição à norma nominal da disciplina. | Substituir por créditos nominais individuais pelos respectivos autores antes de `30/11`. |
| **DEF-06** | 🟠 **Médio** | [cenarios.md](../analise-requisitos/cenarios.md) (L62, L154, L193) | Cenário 3 (Tarefa 3) mantém rótulo `"hipótese a validar"`, `"perfil pendente"` e revisor `"Pendente"` na versão `1.1`. | Atualizar revisão por pares e status pós-testes da Tarefa 3 — Edvaldo Soares / Vinicius Araruna. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 10. Resumo Gráfico e Consolidado Realista de Conformidade (Entregas 1 a 8)

Os painéis a seguir refletem fielmente a situação **atual pós-retrabalho de Gustavo Antonio** nos **134 critérios auditados** (sem inflação artificial para 100%).

### Resumo da Entrega 1 (22 itens)

<div class="dp-checklist-summary">
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">✅ Atendido</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-ok" style="width:86.4%">19 / 22 (86,4%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">⚠️ Incompleto</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-warn" style="width:13.6%">3 / 22 (13,6%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">❌ Não Atendido</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-fail" style="width:0%">0 / 22 (0,0%)</div></div>
  </div>
</div>

### Resumo da Entrega 2 (30 itens)

<div class="dp-checklist-summary">
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">✅ Atendido</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-ok" style="width:86.7%">26 / 30 (86,7%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">⚠️ Incompleto</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-warn" style="width:10.0%">3 / 30 (10,0%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">❌ Não Atendido</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-fail" style="width:3.3%">1 / 30 (3,3%)</div></div>
  </div>
</div>

### Resumo da Entrega 3 (18 itens)

<div class="dp-checklist-summary">
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">✅ Atendido</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-ok" style="width:88.9%">16 / 18 (88,9%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">⚠️ Incompleto</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-warn" style="width:11.1%">2 / 18 (11,1%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">❌ Não Atendido</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-fail" style="width:0%">0 / 18 (0,0%)</div></div>
  </div>
</div>

### Resumo da Entrega 4 (13 itens)

<div class="dp-checklist-summary">
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">✅ Atendido</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-ok" style="width:84.6%">11 / 13 (84,6%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">⚠️ Incompleto</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-warn" style="width:7.7%">1 / 13 (7,7%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">❌ Não Atendido</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-fail" style="width:7.7%">1 / 13 (7,7%)</div></div>
  </div>
</div>

### Resumo da Entrega 5 (15 itens)

<div class="dp-checklist-summary">
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">✅ Atendido</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-ok" style="width:93.3%">14 / 15 (93,3%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">⚠️ Incompleto</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-warn" style="width:6.7%">1 / 15 (6,7%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">❌ Não Atendido</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-fail" style="width:0%">0 / 15 (0,0%)</div></div>
  </div>
</div>

### Resumo da Entrega 6 (12 itens)

<div class="dp-checklist-summary">
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">✅ Atendido</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-ok" style="width:91.7%">11 / 12 (91,7%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">⚠️ Incompleto</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-warn" style="width:8.3%">1 / 12 (8,3%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">❌ Não Atendido</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-fail" style="width:0%">0 / 12 (0,0%)</div></div>
  </div>
</div>

### Resumo da Entrega 7 (12 itens)

<div class="dp-checklist-summary">
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">✅ Atendido</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-ok" style="width:83.3%">10 / 12 (83,3%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">⚠️ Incompleto</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-warn" style="width:8.3%">1 / 12 (8,3%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">❌ Não Atendido</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-fail" style="width:8.3%">1 / 12 (8,3%)</div></div>
  </div>
</div>

### Resumo da Entrega 8 (12 itens)

<div class="dp-checklist-summary">
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">✅ Atendido</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-ok" style="width:50.0%">6 / 12 (50,0%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">⚠️ Incompleto</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-warn" style="width:41.7%">5 / 12 (41,7%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">❌ Não Atendido</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-fail" style="width:8.3%">1 / 12 (8,3%)</div></div>
  </div>
</div>

### Resumo Geral Consolidado (134 itens — Entregas 1 a 8)

<div class="dp-checklist-summary">
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">✅ Total Atendido</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-ok" style="width:84.3%">113 / 134 (84,3%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">⚠️ Total Incompleto</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-warn" style="width:12.7%">17 / 134 (12,7%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">❌ Total Não Atendido</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-fail" style="width:3.0%">4 / 134 (3,0%)</div></div>
  </div>
</div>

**Evolução da Conformidade Global:** de **70,1% (94/134)** na inspeção inicial pré-retrabalho para **84,3% (113/134)** após o saneamento completo dos artefatos de Gustavo Antonio e páginas executivas, restando **12,7% (17 itens)** incompletos e **3,0% (4 itens)** não conformes devidamente rastreados na Tabela 14B.

---

## 11. Matriz Consolidada de Contribuição e Transparência de IA Generativa

Em cumprimento às exigências do Plano de Ensino (*Sales, 2026, pp. 3, 7, 9*) e ao Código de Conduta da SBC, a **Tabela 15** consolida a contribuição quantitativa por integrante ativo ao longo das Entregas 1 a 8 e a transparência no uso de ferramentas de IA Generativa (detalhada integralmente por artefato na página executiva [Entrega 8](../entregas/entrega8.md)).

**Tabela 15** — Síntese consolidada de participação e uso de IA Generativa no Grupo 08

| Integrante | Papel e Principais Frentes no Projeto | Ferramentas de IA Utilizadas | Finalidade, Vantagens e Limitações Observadas | Hiperligação da Matriz Completa |
| :--- | :--- | :--- | :--- | :---: |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | Infraestrutura MkDocs inicial, Cronogramas, Heat Map, Site Selecionado, Perfil 2, Persona 2, Cenário 2, Tarefa 2 (`CF02`), Características da Plataforma, Princípios Gerais, Storyboard/Protótipos Papel & Web Alta Fidelidade T2, Auditoria Global e Retrabalho E8 | Google Gemini / LLM, Antigravity | **Onde:** Formatação Markdown, diagramação de tabelas, prototipação auxiliar HTML/CSS/JS da T2, verificação sintática.<br>**Limitações:** Exigiu auditoria humana manual para corrigir links relativos, detectar placeholders omitidos e validar citações dos livros-texto. | [Entrega 8 — Seções 3 e 4](../entregas/entrega8.md#matriz-contribuicao-integrantes) |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Coordenação de entregas, Processo de Design (Mayhew), Aspectos Éticos/TCLE, Perfil 1, Persona 1, Cenário 1, Tarefa 1 (`CF01`), Metas de Usabilidade, Planejamentos DECIDE/Piloto/Relatos T1, Desacoplamento de Checklists e Inspeções G01/G07 | Google Gemini / LLM | **Onde:** Estruturação de templates em Markdown, padronização de listas de verificação e geração de diagramas Mermaid.<br>**Limitações:** Necessidade de conferência rigorosa de numeração ABNT e revisão manual dos tempos de KLM/SUS empíricos. | [Entrega 8 — Seções 3 e 4](../entregas/entrega8.md#matriz-contribuicao-integrantes) |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Sites Avaliados, Ferramentas, Análise Documental, Brainstorming, Perfil 3, Persona 3, Cenário 3, Tarefa 3 (`CF03` Agendamento), Guia de Estilo, Métodos de Avaliação, Relatos N1/N2/N3 T3 e Inspeções G01/G07 | OpenAI Codex / ChatGPT, Google Gemini | **Onde:** Revisão textual, estruturação de tabelas de Guia de Estilo e apoio na organização do protótipo da T3.<br>**Limitações:** Necessidade de validação na instância real do fórum para evitar inferências hipotéticas e conferência de fontes nominais. | [Entrega 8 — Seções 3 e 4](../entregas/entrega8.md#matriz-contribuicao-integrantes) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

### 11.1 Validação deste Relatório pela Lista de Governança do Prof. Dr. André Barros de Sales (`DG-01` a `DG-11`)

Em estrito atendimento ao Plano de Ensino (*Sales, 2026, pp. 8–9*), a **Tabela 16** aplica os 11 itens oficiais de governança do Prof. Dr. André Barros de Sales para validar este próprio relatório (`docs/verificacao/grupo08.md`).

**Tabela 16** — Autoavaliação de Governança de `docs/verificacao/grupo08.md` (`DG-01` a `DG-11`)

| ID | Critério de Governança do Plano de Ensino | Autor do Item | Resposta | Versão, Data e Hora da Avaliação | Evidência de Conformidade nesta Página |
| :---: | :--- | :--- | :---: | :---: | :--- |
| **DG-01** | O histórico de versão padronizado? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v6.0` — 22/11/2026 às 23:32 | Histórico de versão padronizado registrando `v6.0` (**Tabela 17**). |
| **DG-02** | O(s) autor(es) e o(s) revisor(es) para cada artefato? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v6.0` — 22/11/2026 às 23:32 | Autores e revisores linkados na **Tabela 0** e no Histórico de Versão (**Tabela 17**). |
| **DG-03** | Referências bibliográficas e/ou bibliografia em todos os artefatos? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v6.0` — 22/11/2026 às 23:32 | Seção 13 completa em formato ABNT NBR 6023. |
| **DG-04** | As tabelas e imagens possuem legenda e fonte e são chamadas dentro do texto? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v6.0` — 22/11/2026 às 23:32 | 100% das tabelas (`Tabela 0` a `Tabela 17`) possuem numeração, legenda, fonte nominal e chamadas no texto. |
| **DG-05** | Um texto fazendo uma introdução dos artefatos? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v6.0` — 22/11/2026 às 23:32 | Introdução formal contextualizando o artefato no método de Fagan (1976) e nas 8 entregas. |
| **DG-06** | O cronograma executado com quem realizou cada artefato/atividade e as datas de início e fim da construção/realização? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v6.0` — 22/11/2026 às 23:32 | Vínculo rastreável ao [Cronograma Executado](../planejamento/cronograma-executado.md). |
| **DG-07** | Ata(s) da(s) reuniões (com data, horário de início e do final, participantes, objetivo, atividades definidas etc.)? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v6.0` — 22/11/2026 às 23:32 | Registro de alinhamentos disponível na [Ata 8](../atas/ata8.md) e no [Índice de Atas](../atas/index.md). |
| **DG-08** | A gravação da reunião do grupo? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v6.0` — 22/11/2026 às 23:32 | Gravações das reuniões linkadas em [Atas de Reunião](../atas/index.md) e auditadas na Seção 1. |
| **DG-09** | Vídeo de apresentação na categoria 'Não Listado' no YouTube (duração entre 20 e 30 minutos)? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ⚠️ **Em preparação (Etapa 8)** | `v6.0` — 22/11/2026 às 23:32 | Vídeos das Entregas 1–7 publicados; vídeo oficial da [Entrega 8](../entregas/entrega8.md) (20–30 min, Não Listado) agendado na janela 20–22/11. |
| **DG-10** | Tabela de contribuição no início do artefato com o nome de todos os integrantes, contribuição com hiperligação da atividade e da gravação? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v6.0` — 22/11/2026 às 23:32 | **Tabela 0** no topo do artefato e **Tabela 15** na Seção 11. |
| **DG-11** | A seção de agradecimentos apresentando o uso de Inteligência Artificial (IA) Generativa no artefato? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v6.0` — 22/11/2026 às 23:32 | Seção 14 de **Agradecimentos e Uso de IA Generativa** conforme Código da SBC e Sales (2026). |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna com base no Plano de Ensino (Prof. Dr. André Barros de Sales, 2026, pp. 8–9), 2026._

---

## 12. Histórico de Versão

A **Tabela 17** documenta o histórico de versões deste artefato.

**Tabela 17** — Histórico de versão do documento

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 13/09/2026 | Criação da lista de verificação inicial do Grupo 08 referente à Entrega 1 | [Gustavo Antonio](https://github.com/gus-ant) | [Pedro Paulo](https://github.com/Pedrop06) |
| `2.0` | 27/09/2026 | Atualização completa integrando os 30 critérios formais de autoavaliação da Entrega 2 | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) |
| `3.0` | 06/10/2026 | Inclusão da autoavaliação da Entrega 3 (18 itens) e vídeo de apresentação | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) |
| `3.1` | 12/10/2026 | Desacoplamento arquitetural frente aos checklists em branco em `lista-verificacao.md` (Issue #30) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev), [Gustavo Antonio](https://github.com/gus-ant) |
| `4.0` | 27/10/2026 | Expansão da autoavaliação para Entregas 4 e 5 (97 itens) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| `5.0` | 19/11/2026 | Consolidação global da Entrega 8 e inclusão inicial das Entregas 6 a 8 (`RW-01` a `RW-07`) | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| `5.1` | 19/11/2026 | Reavaliação rigorosa e realista dos 87 arquivos (134 critérios no padrão do Plano de Ensino), substituindo 100% artificial pela aferição factual pré/pós-retrabalho (`70,1%` → `84,3%`), separação da Tabela 14A (retrabalhos executados `RW-01` a `RW-12`) e Tabela 14B (defeitos abertos `DEF-01` a `DEF-06`) e inclusão da matriz consolidada de IA (Seção 11). | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) |
| `5.2` | 20/11/2026 | Integração com o Catálogo de Listas de Verificação por Artefato (`listas/index.md`) e adição da autovalidação pela lista de governança `DG-01` a `DG-11` (Seção 11.1, Tabela 16). | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant), [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) |
| `6.0` | 22/11/2026 | Incorporação da Auditoria Multi-Escopo pelas 16 Listas de Verificação por Artefato (`v1.0` a `v2.2`, Catálogo `v1.2/v1.3` @ commit `a4d176d` — 414 itens), avaliando separadamente o Bloco Geral (`92,8%` / `96,2%`), Tarefa 1 — Vinicius (`93,1%` / `96,4%`), Tarefa 2 — Gustavo (`92,2%` / `96,0%`) e Tarefa 3 — Edvaldo (`89,2%` / `93,9%`), e publicação do PDF oficial `Grupo08VerificacaoArtefatosEtapa8DiolinuxPlus.pdf`. | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._  
_\*Nota histórica: O discente Pedro Paulo constava como integrante ativo na versão 1.0 de setembro/2026, sendo preservado seu registro fático documental da época._

---

## 13. Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier, 2010.

[2] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[3] FAGAN, Michael E. *Design and code inspections to reduce errors in program development*. IBM Systems Journal, v. 15, n. 3, p. 182-211, 1976.

[4] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[5] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1994.

[6] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador (FGA0173)*. Brasília: Universidade de Brasília, Faculdade UnB Gama (FGA), 2026.

[7] SOCIEDADE BRASILEIRA DE COMPUTAÇÃO (SBC). *Código de Conduta para Pessoas Autoras de Publicações da SBC — Parte II, Art. 2º, §III (Uso de IA Generativa)*. Porto Alegre: SBC, 2023.

---

## 14. Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Em estrita observância ao Código de Conduta da Sociedade Brasileira de Computação (SBC, Art. 2º, §III) e às normas do Plano de Ensino (Sales, 2026), declara-se que durante a auditoria dos arquivos, formatação de tabelas Markdown e construção das barras de síntese HTML/CSS utilizou-se apoio computacional de Inteligência Artificial Generativa (Google Gemini / LLM). A definição dos critérios rigorosos, o exame fático de cada artefato, a execução do retrabalho nos artefatos de Gustavo Antonio e a aprovação integral das métricas e defeitos abertos são de inteira responsabilidade dos autores humanos identificados neste relatório.

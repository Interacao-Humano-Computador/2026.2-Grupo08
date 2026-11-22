# Lista de Verificação — Verificação e Validação: Fundamentos (Edvaldo)

## Tabela de Contribuição e Transparência de IA Generativa

A **Tabela 1** sintetiza as atribuições de cada membro da equipe na elaboração desta lista e as ferramentas de apoio utilizadas.

**Tabela 1** — Matriz de Contribuição e Apoio Tecnológico

| Integrante | Atribuição no Artefato | Data | Horário | Ferramenta de IA | Propósito do Uso de IA | Hiperligação / Gravação |
| :--- | :--- | :---: | :---: | :--- | :--- | :---: |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Formulação dos 13 itens normativos (`VVR-01` a `VVR-13`) em 3 blocos, fundamentação bibliográfica ABNT e autovalidação `DG-01..11` | 22/11/2026 | 13:30 - 15:00 | Google Gemini (Antigravity) | Suporte na organização da sintaxe Markdown e formatação das tabelas; conteúdo técnico concebido e auditado pelo discente | — |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | Revisão de conformidade estrutural e checagem bibliográfica | 22/11/2026 | 15:00 - 15:30 | — | Revisão por pares e validação editorial | — |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho e Gustavo Antonio Rodrigues e Silva, 2026._

---

## 1. Introdução

Esta lista de verificação concentra **13 itens normativos** para verificação dos fundamentos de **Verificação e Validação (V&V)** e das **técnicas de revisão e inspeção** de software aplicadas ao projeto do Grupo 08. Os itens estão organizados em três blocos temáticos:

- **Bloco 1** (`VVR-01` a `VVR-06`): Conceitos canônicos de V&V baseados em UNIVESP, Aula 05;
- **Bloco 2** (`VVR-07` a `VVR-11`): Técnicas de revisão estática e dinâmica baseadas em UNIVESP, Aula 06;
- **Bloco 3** (`VVR-12` a `VVR-13`): Método de Fagan (1976) e estratégias de validação baseados nos Slides da Aula 23 (Sales, 2026).

---

## 2. Critérios Normativos — V&V e Fundamentos (`VVR-01` a `VVR-13`)

### 2.1 Bloco 1 — Conceitos de Verificação e Validação (UNIVESP, Aula 05)

A **Tabela 2** apresenta os itens `VVR-01` a `VVR-06`, referentes aos conceitos canônicos de V&V.

**Tabela 2** — Itens `VVR-01` a `VVR-06`: Conceitos de Verificação e Validação

| ID | Critério / Pergunta de Verificação | Autor do Item | Fundamentação Canônica | Evidência Visual | Resposta | Versão, Data e Hora da Avaliação |
| :---: | :--- | :--- | :--- | :---: | :--- | :---: |
| **VVR-01** | O planejamento de V&V do projeto delimita explicitamente os produtos sujeitos à verificação e validação, incluindo código-fonte, diagramas de modelo de análise e de arquitetura? | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | *"Os produtos que podem ser analisados pela Verificação e Validação: código fonte, diagramas do modelo de análise e de arquitetura do projeto."* (UNIVESP. Gerência e Qualidade de Software — Aula 05 — Verificação e Validação. 1:12 min.) | — | `[ ] Sim (Conforme)`<br>`[ ] Não (Não Conforme)`<br>`[ ] Incompleto`<br>`[ ] N/A` | — |
| **VVR-02** | O projeto distingue e aplica corretamente a análise estática (artefatos não em execução, como código-fonte) e a análise dinâmica (software em execução), empregando cada modalidade no contexto adequado? | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | *"Análise estática se aplica para artefatos que não estão sendo executados, o código-fonte por exemplo. Análise dinâmica é feita quando o software está em execução."* (UNIVESP. Gerência e Qualidade de Software — Aula 05 — Verificação e Validação. 1:21 min.) | — | `[ ] Sim (Conforme)`<br>`[ ] Não (Não Conforme)`<br>`[ ] Incompleto`<br>`[ ] N/A` | — |
| **VVR-03** | A atividade de verificação do projeto é definida com base no objetivo canônico de analisar se os requisitos e especificações do software estão sendo implementados corretamente ("estamos construindo o produto da forma correta?")? | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | *"Verificação é a análise dos requerimentos e especificações do software para analisar se estamos montando o produto da forma correta."* (UNIVESP. Gerência e Qualidade de Software — Aula 05 — Verificação e Validação. 5:15 min.) | — | `[ ] Sim (Conforme)`<br>`[ ] Não (Não Conforme)`<br>`[ ] Incompleto`<br>`[ ] N/A` | — |
| **VVR-04** | O projeto seleciona e aplica métodos de verificação formais, incluindo inspeção de código, revisão da documentação e code review? | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | *"Exemplos de verificação: inspeção, code review do código-fonte, revisão da documentação."* (UNIVESP. Gerência e Qualidade de Software — Aula 05 — Verificação e Validação. 2:32 min.) | — | `[ ] Sim (Conforme)`<br>`[ ] Não (Não Conforme)`<br>`[ ] Incompleto`<br>`[ ] N/A` | — |
| **VVR-05** | O escopo da verificação abrange todos os tipos de artefatos pertinentes, como artefatos de requisitos, casos de teste, código-fonte e esquemas de banco de dados? | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | *"O que pode ser verificado: artefatos de requisitos, testes, o código-fonte, tabelas de bancos de dados, etc."* (UNIVESP. Gerência e Qualidade de Software — Aula 05 — Verificação e Validação. 2:14 min.) | — | `[ ] Sim (Conforme)`<br>`[ ] Não (Não Conforme)`<br>`[ ] Incompleto`<br>`[ ] N/A` | — |
| **VVR-06** | A atividade de validação do projeto é definida com o objetivo canônico de avaliar se o produto construído atende às necessidades reais impostas pelo cliente/usuário ("estamos construindo o produto certo?")? | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | *"Validação seria uma avaliação do software para conferir se o produto atende as necessidades impostas."* (UNIVESP. Gerência e Qualidade de Software — Aula 05 — Verificação e Validação. 3:50 min.) | — | `[ ] Sim (Conforme)`<br>`[ ] Não (Não Conforme)`<br>`[ ] Incompleto`<br>`[ ] N/A` | — |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, 2026._

---

### 2.2 Bloco 2 — Técnicas de Revisão Estática e Dinâmica (UNIVESP, Aula 06)

A **Tabela 3** apresenta os itens `VVR-07` a `VVR-11`, referentes às técnicas de revisão.

**Tabela 3** — Itens `VVR-07` a `VVR-11`: Técnicas de Revisão Estática e Dinâmica

| ID | Critério / Pergunta de Verificação | Autor do Item | Fundamentação Canônica | Evidência Visual | Resposta | Versão, Data e Hora da Avaliação |
| :---: | :--- | :--- | :--- | :---: | :--- | :---: |
| **VVR-07** | O projeto define formalmente a atividade de revisão como um processo realizado por uma ou várias pessoas sobre um artefato de software, com o objetivo declarado de encontrar erros e falhas? | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | *"Revisão é um processo realizado por uma ou várias pessoas em um artefato de software que tem o objetivo de achar erros e falhas."* (UNIVESP. Gerência e Qualidade de Software — Aula 06 — Técnica de Revisão. 0:58 min.) | — | `[ ] Sim (Conforme)`<br>`[ ] Não (Não Conforme)`<br>`[ ] Incompleto`<br>`[ ] N/A` | — |
| **VVR-08** | O projeto emprega de forma equilibrada tanto modalidades estáticas (revisão de documentação e code review) quanto modalidades dinâmicas (testes unitários, de segurança e de carga), justificando a seleção de cada uma? | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | *"Revisão estática: revisão de documentação e code review. Revisão dinâmica: testes no geral, sejam unitários, de segurança ou de carga."* (UNIVESP. Gerência e Qualidade de Software — Aula 06 — Técnica de Revisão. 1:16 min.) | — | `[ ] Sim (Conforme)`<br>`[ ] Não (Não Conforme)`<br>`[ ] Incompleto`<br>`[ ] N/A` | — |
| **VVR-09** | O projeto classifica formalmente as técnicas de revisão em suas três categorias canônicas: Revisão Formal, Inspeção e Walkthrough? | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | *"Tipos de revisão formais: revisão formal, inspeção e walkthrough."* (UNIVESP. Gerência e Qualidade de Software — Aula 06 — Técnica de Revisão. 13:56 min.) | — | `[ ] Sim (Conforme)`<br>`[ ] Não (Não Conforme)`<br>`[ ] Incompleto`<br>`[ ] N/A` | — |
| **VVR-10** | As inspeções realizadas no projeto demonstram rigor metodológico, sendo descritas como técnicas de revisão estruturada que separam sistematicamente a detecção de falhas com papéis definidos antes que o artefato prossiga para a próxima versão? | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | *"Inspeção é uma técnica de revisão estruturada que segue papéis definidos e separa cada falha sistematicamente antes que o artefato possa seguir para sua próxima versão."* (UNIVESP. Gerência e Qualidade de Software — Aula 06 — Técnica de Revisão. 14:32 min.) | — | `[ ] Sim (Conforme)`<br>`[ ] Não (Não Conforme)`<br>`[ ] Incompleto`<br>`[ ] N/A` | — |
| **VVR-11** | As inspeções apresentam os cinco elementos canônicos de Fagan (1976): (1) papéis bem definidos, (2) fases estruturadas, (3) uso de listas de verificação (*checklists*), (4) foco estrito na detecção de defeitos e (5) coleta de métricas do processo? | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | *"Características principais da inspeção: uso de papéis bem definidos; existência de fases estruturadas; uso de listas de verificação para orientar o processo; foco estrito na detecção de defeitos; coleta de métricas do processo de inspeção."* (FAGAN, 1976, pp. 182–211; UNIVESP. Aula 06. 14:32 min.) | — | `[ ] Sim (Conforme)`<br>`[ ] Não (Não Conforme)`<br>`[ ] Incompleto`<br>`[ ] N/A` | — |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, 2026._

---

### 2.3 Bloco 3 — Método de Fagan e Estratégias de Validação (Slides Aula 23 — Sales, 2026)

A **Tabela 4** apresenta os itens `VVR-12` a `VVR-13`, referentes ao método de Fagan e às estratégias complementares de validação.

**Tabela 4** — Itens `VVR-12` a `VVR-13`: Método de Fagan e Estratégias de Validação

| ID | Critério / Pergunta de Verificação | Autor do Item | Fundamentação Canônica | Evidência Visual | Resposta | Versão, Data e Hora da Avaliação |
| :---: | :--- | :--- | :--- | :---: | :--- | :---: |
| **VVR-12** | O processo de inspeção do projeto executa os seis passos canônicos do método de Fagan na ordem correta: (1) Planejamento, (2) Visão Geral/Apresentação, (3) Preparação Individual, (4) Reunião de Inspeção, (5) Retrabalho/Correção e (6) Acompanhamento/Seguimento? | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | *"Os seis passos do método de inspeção proposto por Fagan: 1. Planejamento; 2. Visão Geral / Apresentação; 3. Preparação Individual; 4. Reunião de Inspeção; 5. Retrabalho / Correção; 6. Acompanhamento / Seguimento."* (SALES, André Barros de. Requisitos — Aula 23. Brasília: UnB, 2026.) | — | `[ ] Sim (Conforme)`<br>`[ ] Não (Não Conforme)`<br>`[ ] Incompleto`<br>`[ ] N/A` | — |
| **VVR-13** | O projeto adota pelo menos uma estratégia complementar de validação de software além da inspeção, podendo incluir comprovação informal, prototipação ou análise de pontos de vista? | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | *"Estratégias de validação de software: comprovação informal, prototipação e análise de pontos de vista."* (SALES, André Barros de. Requisitos — Aula 23. Brasília: UnB, 2026.) | — | `[ ] Sim (Conforme)`<br>`[ ] Não (Não Conforme)`<br>`[ ] Incompleto`<br>`[ ] N/A` | — |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, 2026._

---

## 3. Autovalidação de Governança (`DG-01` a `DG-11`)

Em estrito cumprimento às diretrizes de qualidade do Plano de Ensino (*Sales, 2026, pp. 8–9*), a **Tabela 5** submete esta própria lista à rubrica oficial do Prof. Dr. André Barros de Sales.

**Tabela 5** — Autoavaliação desta lista frente aos critérios `DG-01` a `DG-11`

| ID | Critério de Governança do Plano de Ensino | Autor do Item | Resposta | Versão, Data e Hora da Avaliação | Evidência de Conformidade nesta Lista |
| :---: | :--- | :--- | :---: | :---: | :--- |
| **DG-01** | O histórico de versão padronizado? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v1.0` — 22/11/2026 | Seção **Histórico de Versão** (**Tabela 6**) padronizada ao final do documento. |
| **DG-02** | O(s) autor(es) e o(s) revisor(es) para cada artefato? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v1.0` — 22/11/2026 | Coluna **Autor do Item** em 100% dos critérios e **Tabela 1** com papéis discriminados; Histórico de Versão com autor e revisor distintos. |
| **DG-03** | Referências bibliográficas e/ou bibliografia em todos os artefatos? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v1.0` — 22/11/2026 | Seção **Referências Bibliográficas** com ABNT NBR 6023 ao final. |
| **DG-04** | As tabelas e imagens possuem legenda e fonte e são chamadas dentro do texto? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v1.0` — 22/11/2026 | Todas as tabelas (**Tabela 1** a **Tabela 6**) possuem numeração, legenda, fonte nominal e chamada textual prévia. |
| **DG-05** | Um texto fazendo uma introdução dos artefatos? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v1.0` — 22/11/2026 | Seção **1. Introdução** situa o instrumento e explica a divisão em 3 blocos temáticos. |
| **DG-06** | O cronograma executado com quem realizou cada artefato/atividade e as datas de início e fim? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v1.0` — 22/11/2026 | **Tabela 1** com datas e horários de elaboração e revisão. |
| **DG-07** | Ata(s) da(s) reuniões (com data, horário de início e do final, participantes, objetivo, atividades definidas etc.)? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v1.0` — 22/11/2026 | Deliberações documentadas nas [Atas de Reunião](../../atas/index.md). |
| **DG-08** | A gravação da reunião do grupo? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v1.0` — 22/11/2026 | Gravações indexadas nas [Atas de Reunião](../../atas/index.md). |
| **DG-09** | Vídeo de apresentação na categoria 'Não Listado' no YouTube (duração entre 20 e 30 minutos)? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ⚠️ **Em preparação (Etapa 8)** | `v1.0` — 22/11/2026 | Vídeo da Entrega 8 agendado após consolidação das inspeções da equipe. |
| **DG-10** | Tabela de contribuição no início do artefato com o nome de todos os integrantes com a contribuição de cada integrante com hiperligação atividade e da gravação? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v1.0` — 22/11/2026 | **Tabela 1** no topo do documento com nomes completos, links GitHub e escopo de atuação. |
| **DG-11** | A seção de agradecimentos apresentando o uso de Inteligência Artificial (IA) Generativa no artefato? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v1.0` — 22/11/2026 | Seção **Agradecimentos e Declaração de Uso de IA Generativa** em conformidade com o Código SBC e Sales (2026). |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho com base na rubrica oficial de Prof. Dr. André Barros de Sales (Plano de Ensino, 2026, pp. 8–9)._

---

## 4. Histórico de Versão

A **Tabela 6** documenta o histórico de modificações e revisões deste artefato.

**Tabela 6** — Histórico de Versão do Documento

| Versão | Data | Descrição Detalhada da Alteração | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 22/11/2026 | Criação da lista de verificação dos fundamentos de Verificação e Validação com 13 itens normativos (`VVR-01` a `VVR-13`) em 3 blocos: Conceitos de V&V (UNIVESP Aula 05), Técnicas de Revisão (UNIVESP Aula 06) e Método de Fagan + Estratégias de Validação (Sales, 2026, Aula 23). | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho e Gustavo Antonio Rodrigues e Silva, 2026._

---

## 5. Referências Bibliográficas (ABNT NBR 6023)

[1] FAGAN, Michael E. Design and code inspections to reduce errors in program development. *IBM Systems Journal*, v. 15, n. 3, p. 182–211, 1976.

[2] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999. ISBN 978-1-55860-561-9.

[3] SALES, André Barros de. *Requisitos — Aula 23*. Brasília: Universidade de Brasília, Faculdade UnB Gama (FGA), 2026. (Slides de aula.)

[4] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador (FGA0173 — 02/2026)*. Brasília: Universidade de Brasília, Faculdade UnB Gama (FGA), 2026.

[5] SOCIEDADE BRASILEIRA DE COMPUTAÇÃO (SBC). *Código de Conduta da Sociedade Brasileira de Computação*. Porto Alegre: SBC, 2023.

[6] SOMMERVILLE, Ian. *Engenharia de Software*. 10. ed. São Paulo: Pearson, 2019. ISBN 978-85-430-1769-6.

[7] UNIVESP. *Gerência e Qualidade de Software — Aula 05 — Verificação e Validação*. São Paulo: UNIVESP, [s.d.]. Disponível em: YouTube. Acesso em: nov. 2026.

[8] UNIVESP. *Gerência e Qualidade de Software — Aula 06 — Técnica de Revisão*. São Paulo: UNIVESP, [s.d.]. Disponível em: YouTube. Acesso em: nov. 2026.

---

## 6. Agradecimentos e Declaração de Uso de Inteligência Artificial (IA) Generativa

Em cumprimento às diretrizes éticas da Sociedade Brasileira de Computação (SBC) e às normas do Plano de Ensino da disciplina (*Sales, 2026*), declara-se que durante a elaboração deste artefato foi utilizado o recurso de Inteligência Artificial Generativa **Google Gemini (Antigravity Agentic Assistant)** para apoio na organização da sintaxe Markdown, formatação das tabelas e estruturação dos itens de verificação. Todo o embasamento teórico, formulação dos critérios normativos, citações bibliográficas e análises críticas foram concebidos, auditados e validados integralmente pelo discente [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev), autor responsável por este artefato.

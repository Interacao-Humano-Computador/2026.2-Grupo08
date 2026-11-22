# Lista de Verificação — Árvores de Tarefas Concorrentes (CTT) (Edvaldo)

## Tabela de Contribuição e Transparência de IA Generativa

A **Tabela 1** sintetiza as atribuições de cada membro da equipe na elaboração desta lista e as ferramentas de apoio utilizadas.

**Tabela 1** — Matriz de Contribuição e Apoio Tecnológico

| Integrante | Atribuição no Artefato | Data | Horário | Ferramenta de IA | Propósito do Uso de IA | Hiperligação / Gravação |
| :--- | :--- | :---: | :---: | :--- | :--- | :---: |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Formulação dos 8 itens normativos (`CTT-E01` a `CTT-E08`), fundamentação bibliográfica ABNT e autovalidação `DG-01..11` | 22/11/2026 | 17:30 - 18:30 | Google Gemini (Antigravity) | Suporte na organização da sintaxe Markdown e formatação das tabelas; conteúdo técnico concebido e auditado pelo discente | — |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | Revisão de conformidade estrutural e checagem bibliográfica | 22/11/2026 | 18:30 - 19:00 | — | Revisão por pares e validação editorial | — |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho e Gustavo Antonio Rodrigues e Silva, 2026._

---

## 1. Introdução

Esta lista de verificação contempla **8 itens normativos** para a inspeção formal de modelos de **Árvores de Tarefas Concorrentes (CTT — ConcurTaskTrees)**, baseados estritamente na obra de Barbosa e Silva (2010), Capítulo 6 (seção 6.4.3, pp. 203–204).

O modelo CTT permite representar de maneira formal e hierárquica as tarefas dos usuários, as tarefas do sistema e as interações, bem como as relações temporais entre elas por meio de operadores formais (ativação, escolha, desativação etc.).

---

## 2. Critérios Normativos — Modelo CTT (`CTT-E01` a `CTT-E08`)

A **Tabela 2** apresenta os 8 critérios normativos para verificação de diagramas e modelos CTT.

**Tabela 2** — Lista de verificação normativa do modelo CTT

| ID | Critério / Pergunta de Verificação | Autor do Item | Fundamentação Canônica | Evidência Visual | Resposta | Versão, Data e Hora da Avaliação |
| :---: | :--- | :--- | :--- | :---: | :--- | :---: |
| **CTT-E01** | O diagrama identifica corretamente as "tarefas do usuário", que são realizadas inteiramente fora do sistema, sem interação com o software? | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | *"Tarefas do usuário são realizadas inteiramente pelo usuário, sem intervenção do sistema."* (BARBOSA; SILVA, 2010, p. 203) | — | `[ ] Sim (Conforme)`<br>`[ ] Não (Não Conforme)`<br>`[ ] Incompleto`<br>`[ ] N/A` | — |
| **CTT-E02** | O diagrama identifica corretamente as "tarefas do sistema", em que o sistema realiza um processamento internamente sem interagir de forma direta com o usuário? | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | *"Tarefas do sistema são processamentos realizados internamente pelo computador sem diálogo direto com o usuário."* (BARBOSA; SILVA, 2010, p. 203) | — | `[ ] Sim (Conforme)`<br>`[ ] Não (Não Conforme)`<br>`[ ] Incompleto`<br>`[ ] N/A` | — |
| **CTT-E03** | O diagrama classifica adequadamente as "tarefas interativas", caracterizadas por momentos em que efetivamente ocorrem os diálogos entre o usuário e o sistema? | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | *"Tarefas interativas envolvem diálogo entre o usuário e o sistema computacional."* (BARBOSA; SILVA, 2010, p. 203) | — | `[ ] Sim (Conforme)`<br>`[ ] Não (Não Conforme)`<br>`[ ] Incompleto`<br>`[ ] N/A` | — |
| **CTT-E04** | O modelo utiliza "tarefas abstratas", que não são tarefas em si, mas sim representações de uma composição conceitual de tarefas menores, servindo para auxiliar a decomposição hierárquica do modelo? | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | *"Tarefas abstratas são tarefas complexas compostas por outras tarefas, servindo para estruturar a árvore hierárquica."* (BARBOSA; SILVA, 2010, p. 203) | — | `[ ] Sim (Conforme)`<br>`[ ] Não (Não Conforme)`<br>`[ ] Incompleto`<br>`[ ] N/A` | — |
| **CTT-E05** | A estrutura do modelo CTT respeita a regra de leitura hierárquica, na qual uma tarefa de nível superior só é considerada como realizada caso todas as suas subtarefas filhas tenham sido efetivamente concluídas? | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | *"A hierarquia de tarefas segue a decomposição onde uma tarefa pai é satisfeita apenas quando suas tarefas filhas são realizadas conforme os operadores temporais."* (BARBOSA; SILVA, 2010, p. 203) | — | `[ ] Sim (Conforme)`<br>`[ ] Não (Não Conforme)`<br>`[ ] Incompleto`<br>`[ ] N/A` | — |
| **CTT-E06** | O modelo aplica corretamente o operador de "ativação" (`>>`), indicando especificamente que a segunda tarefa da relação só pode ser iniciada após a primeira tarefa ter chegado ao fim? | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | *"Ativação (T1 >> T2): a tarefa T2 só pode ser iniciada após o término da tarefa T1."* (BARBOSA; SILVA, 2010, p. 203) | — | `[ ] Sim (Conforme)`<br>`[ ] Não (Não Conforme)`<br>`[ ] Incompleto`<br>`[ ] N/A` | — |
| **CTT-E07** | O modelo aplica corretamente o operador de "escolha" (`[]`) entre tarefas alternativas, definindo que ambas estão habilitadas em um momento, mas ao iniciar uma delas, a outra é imediatamente desabilitada? | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | *"Escolha (T1 [] T2): ambas as tarefas estão disponíveis, mas a escolha e início de uma desabilita imediatamente a outra."* (BARBOSA; SILVA, 2010, p. 203) | — | `[ ] Sim (Conforme)`<br>`[ ] Não (Não Conforme)`<br>`[ ] Incompleto`<br>`[ ] N/A` | — |
| **CTT-E08** | O diagrama aplica corretamente o operador de "desativação" (`[>`), que especifica cenários onde uma tarefa primária é completamente interrompida pelo início de uma segunda tarefa? | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | *"Desativação (T1 [> T2): a realização da tarefa T2 interrompe e cancela a execução da tarefa T1."* (BARBOSA; SILVA, 2010, p. 204) | — | `[ ] Sim (Conforme)`<br>`[ ] Não (Não Conforme)`<br>`[ ] Incompleto`<br>`[ ] N/A` | — |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, 2026._

---

## 3. Autovalidação de Governança (`DG-01` a `DG-11`)

Em estrito cumprimento às diretrizes de qualidade do Plano de Ensino (*Sales, 2026, pp. 8–9*), a **Tabela 3** submete esta própria lista à rubrica oficial do Prof. Dr. André Barros de Sales.

**Tabela 3** — Autoavaliação desta lista frente aos critérios `DG-01` a `DG-11`

| ID | Critério de Governança do Plano de Ensino | Autor do Item | Resposta | Versão, Data e Hora da Avaliação | Evidência de Conformidade nesta Lista |
| :---: | :--- | :--- | :---: | :---: | :--- |
| **DG-01** | O histórico de versão padronizado? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v1.0` — 22/11/2026 | Seção **Histórico de Versão** (**Tabela 4**) padronizada ao final do documento. |
| **DG-02** | O(s) autor(es) e o(s) revisor(es) para cada artefato? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v1.0` — 22/11/2026 | Coluna **Autor do Item** em 100% dos critérios e **Tabela 1** com papéis discriminados; Histórico de Versão com autor e revisor distintos. |
| **DG-03** | Referências bibliográficas e/ou bibliografia em todos os artefatos? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v1.0` — 22/11/2026 | Seção **Referências Bibliográficas** com ABNT NBR 6023 ao final. |
| **DG-04** | As tabelas e imagens possuem legenda e fonte e são chamadas dentro do texto? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v1.0` — 22/11/2026 | Todas as tabelas (**Tabela 1** a **Tabela 4**) possuem numeração, legenda, fonte nominal e chamada textual prévia. |
| **DG-05** | Um texto fazendo uma introdução dos artefatos? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v1.0` — 22/11/2026 | Seção **1. Introdução** situa o instrumento e explica o escopo dos 8 itens. |
| **DG-06** | O cronograma executado com quem realizou cada artefato/atividade e as datas de início e fim? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v1.0` — 22/11/2026 | **Tabela 1** com datas e horários de elaboração e revisão. |
| **DG-07** | Ata(s) da(s) reuniões (com data, horário de início e do final, participantes, objetivo, atividades definidas etc.)? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v1.0` — 22/11/2026 | Deliberações documentadas nas [Atas de Reunião](../../atas/index.md). |
| **DG-08** | A gravação da reunião do grupo? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v1.0` — 22/11/2026 | Gravações indexadas nas [Atas de Reunião](../../atas/index.md). |
| **DG-09** | Vídeo de apresentação na categoria 'Não Listado' no YouTube (duração entre 20 e 30 minutos)? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ⚠️ **Em preparação (Etapa 8)** | `v1.0` — 22/11/2026 | Vídeo da Entrega 8 agendado após consolidação das inspeções da equipe. |
| **DG-10** | Tabela de contribuição no início do artefato com o nome de todos os integrantes com a contribuição de cada integrante com hiperligação atividade e da gravação? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v1.0` — 22/11/2026 | **Tabela 1** no topo do documento com nomes completos, links GitHub e escopo de atuação. |
| **DG-11** | A seção de agradecimentos apresentando o uso de Inteligência Artificial (IA) Generativa no artefato? | **Prof. Dr. André Barros de Sales** *(Plano de Ensino FGA0173, 2026)* | ✅ **Sim (Conforme)** | `v1.0` — 22/11/2026 | Seção **Agradecimentos e Declaração de Uso de IA Generativa** em conformidade com o Código SBC e Sales (2026). |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho com base na rubrica oficial de Prof. Dr. André Barros de Sales (Plano de Ensino, 2026, pp. 8–9)._

---

## 4. Histórico de Versão

A **Tabela 4** documenta o histórico de modificações e revisões deste artefato.

**Tabela 4** — Histórico de Versão do Documento

| Versão | Data | Descrição Detalhada da Alteração | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 22/11/2026 | Criação da lista de verificação do artefato CTT com 8 itens normativos (`CTT-E01` a `CTT-E08`) baseados em Barbosa e Silva (2010), Cap. 6, Seção 6.4.3, pp. 203–204, abordando classificação das tarefas (usuário, sistema, interativa, abstrata), hierarquia e operadores temporais (`>>`, `[]`, `[>`). | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho e Gustavo Antonio Rodrigues e Silva, 2026._

---

## 5. Referências Bibliográficas (ABNT NBR 6023)

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier / Campus, 2010. ISBN 978-85-352-3418-3. Cap. 6 (*Organização do Espaço de Problema*), Seção 6.4.3 (*Árvores de Tarefas Concorrentes*), pp. 203–204.

[2] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999. ISBN 978-1-55860-561-9.

[3] PATERNÒ, Fabio. *Model-Based Design and Evaluation of Human-Computer Interfaces*. London: Springer, 1999.

[4] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador (FGA0173 — 02/2026)*. Brasília: Universidade de Brasília, Faculdade UnB Gama (FGA), 2026.

[5] SOCIEDADE BRASILEIRA DE COMPUTAÇÃO (SBC). *Código de Conduta da Sociedade Brasileira de Computação*. Porto Alegre: SBC, 2023.

---

## 6. Agradecimentos e Declaração de Uso de Inteligência Artificial (IA) Generativa

Em cumprimento às diretrizes éticas da Sociedade Brasileira de Computação (SBC) e às normas do Plano de Ensino da disciplina (*Sales, 2026*), declara-se que durante a elaboração deste artefato foi utilizado o recurso de Inteligência Artificial Generativa **Google Gemini (Antigravity Agentic Assistant)** para apoio na organização da sintaxe Markdown, formatação das tabelas e estruturação dos itens de verificação. Todo o embasamento teórico, formulação dos critérios normativos, citações bibliográficas e análises críticas foram concebidos, auditados e validados integralmente pelo discente [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev), autor responsável por este artefato.

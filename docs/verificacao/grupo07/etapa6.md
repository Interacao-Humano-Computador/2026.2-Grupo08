# Avaliação do Grupo -1 — Grupo 07 (PCI Concursos) — Etapa 6

<div class="dp-page-nav" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin: 1.2rem 0 1.8rem 0; padding: 0.8rem 1rem; background: var(--dp-card); border: 1px solid var(--dp-border); border-radius: 8px;" markdown="1">

[:material-hub: **Hub Central (Visão Geral)**](index.md){ .md-button }
[:material-rocket-launch: **Etapa 6 (Relato do Protótipo de Papel e Alta Fidelidade)**](etapa6.md){ .md-button .md-button--primary }
[:material-clipboard-check: **Etapa 4 (Planejamento de Nível 1)**](etapa4.md){ .md-button }
[:material-checkbox-marked-outline: **Etapa 2 (Perfil e Tarefas)**](etapa2.md){ .md-button }

</div>

## Tabela de Contribuição e Transparência de IA Generativa

A Tabela 1 apresenta a distribuição de responsabilidades, papéis e ferramentas utilizadas pelos discentes do Grupo 08 na concepção, condução empírica e consolidação desta avaliação formal.

**Tabela 1** — Matriz de Contribuição da Avaliação da Etapa 6 do Grupo 07

| Integrante | Atribuição no Artefato | Data | Horário | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :---: | :---: | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Tech Lead / Auditor Principal**: Concepção metodológica da inspeção de Fagan, auditoria dos itens de desenvolvimento geral (DG-01 a DG-11), análise do planejamento de alta fidelidade (Nível 3), elaboração da matriz estatística, redação técnica e apresentação em vídeo | 04/11/2026 | 20:30 - 22:45 | Google Gemini (LLM) | Apoio na estruturação Markdown, padronização visual de tabelas e conferência de citações ABNT |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Auditor Técnico**: Auditoria dos artefatos de Protótipo de Papel e testes com usuários reais (Daniel Batista e Pedro Rocha), conferência dos testes-piloto e co-apresentador em vídeo | 04/11/2026 | 20:30 - 22:30 | Google Gemini (LLM) | Apoio na formatação visual das tabelas de métricas e verificação de hiperlinks |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Auditor Técnico e Revisor por Pares**: Auditoria das peças físicas de papel e da simulação do Computador Humano (Arthur Carvalho e Leonardo Lopes), validação dos aspectos éticos (TCLE) e revisão técnica por pares | 04/11/2026 | 20:30 - 22:15 | — | Revisão humana por pares, conferência de conformidade normativa e auditoria cruzada |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 1. Introdução e Contextualização Metodológica

Este documento consolida o **relatório formal de inspeção e avaliação técnica, ergonômica e acadêmica do Grupo -1 (Grupo 07)** referente à **Entrega 6** do projeto de Interação Humano-Computador (FGA0173 — Turma 01, 2026.2), ministrada pelo Prof. Dr. André Barros de Sales na Faculdade de Ciências e Tecnologias em Engenharia (FCTE/FGA) da Universidade de Brasília (UnB).

A sistemática pedagógica da disciplina estabelece um modelo de heteroavaliação cíclica contínua entre pares (Grupo N avalia Grupo N − 1). Nessa cadeia de garantia da qualidade, cabe ao **Grupo 08** (cujo objeto de estudo é o Fórum Diolinux Plus) realizar a auditoria exaustiva dos produtos de trabalho desenvolvidos pelo **Grupo 07**, focado no reprojeto do sítio [Portal PCI Concursos](https://www.pciconcursos.com.br/).

A avaliação adota como fundamento o consagrado **Método de Inspeção Formal de Software de Michael E. Fagan (1976)**, aplicando listas de verificação estruturadas (*checklists*) para assegurar imparcialidade, rastreabilidade e rigor científico (*Barbosa & Silva, 2021; Fagan, 1976*). No **Ciclo de Vida de Deborah Mayhew (1999)**, a Entrega 6 representa uma fronteira crítica de transição projetual:

1. **Fechamento e Relato do Nível 2 (Prototipação em Papel):** Análise dos experimentos formativos conduzidos com artefatos físicos de papel e a técnica do "Computador Humano" (*Snyder, 2003; Rettig, 1994*), avaliando o cumprimento dos testes-piloto (*Barbosa & Silva, 2021, p. 276*), termos de consentimento (TCLE) e a catalogação de falhas pela Escala de Severidade de Jakob Nielsen (1994);
2. **Projeção e Planejamento do Nível 3 (Alta Fidelidade Interativa):** Formulação dos planos de avaliação e de relato para os protótipos computacionais navegáveis no Figma, estruturados pelas seis fases do Framework DECIDE (*Preece, Rogers & Sharp, 2002; Barbosa & Silva, 2021*).

O objetivo desta auditoria é fornecer um diagnóstico transparente, construtivo e estritamente fundamentado nos requisitos do Plano de Ensino (*Sales, 2026*), auxiliando o Grupo 07 a aprimorar suas práticas metodológicas antes do fechamento do ciclo de alta fidelidade.

_Autor do Item Teórico: [Vinicius Silva Araruna](https://github.com/ViniciusA05)_  
*(Fundamentação teórica de inspeção formal em Fagan, 1976, Barbosa & Silva, 2021, Mayhew, 1999 e Snyder, 2003).*

---

## 2. Identificação do Projeto Avaliado

A Tabela 2 detalha as informações cadastrais, o ambiente de versionamento inspecionado e os acessos diretos aos artefatos submetidos pelo Grupo 07.

**Tabela 2** — Dados de identificação do Grupo 07 e ambiente documental auditado

| Atributo | Detalhamento Institucional |
| :--- | :--- |
| **Grupo Avaliado** | Grupo 07 (Grupo -1 na escala cíclica da disciplina) |
| **Objeto de Reprojeto (Sistema)** | Portal PCI Concursos ([pciconcursos.com.br](https://www.pciconcursos.com.br/)) |
| **Etapa do Projeto Avaliada** | Entrega 6: Relato dos Resultados do Protótipo de Papel (Nível 2) e Planejamento da Avaliação e do Relato do Protótipo de Alta Fidelidade (Nível 3) |
| **Integrantes do Grupo 07** | Arthur Sismene Carvalho, Daniel da Silva Batista, Leonardo da Silva Lopes Júnior, Pedro Rocha Ferreira Lima |
| **Repositório Oficial no GitHub** | [Interacao-Humano-Computador/2026.2-Grupo07](https://github.com/Interacao-Humano-Computador/2026.2-Grupo07) |
| **Documentação no GitPages** | [interacao-humano-computador.github.io/2026.2-Grupo07](https://interacao-humano-computador.github.io/2026.2-Grupo07/) |
| **Branch e Commit Auditados** | Branch `main` — Commit `8cc5c90` (04/11/2026) |
| **Data e Horário da Avaliação** | 04 de Novembro de 2026 — 20:30 (Horário de Brasília) |
| **Documento Balizador** | Plano de Ensino da disciplina (FIHC 022026 Turma 01 v1.pdf, pp. 4-6, 8-9 e 12-13) |
| **Vídeo da Avaliação Realizada pelo Grupo 08** | [Assistir Avaliação do Grupo 08 no YouTube (Gravação da Inspeção)](https://youtu.be/I8WZ7egMrCA) |
| **Relatório Oficial em PDF (Grupo 08)** | [Baixar Relatório Oficial da Inspeção: Grupo08InspecaoGrupo07Etapa6.pdf](../../assets/relatorios/Grupo08InspecaoGrupo07Etapa6.pdf) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

!!! info "Relatório em PDF Padronizado da Avaliação (Grupo 08)"
    Em estrito cumprimento às exigências de documentação formal do Plano de Ensino (*Sales, 2026*), o relatório analítico integral desta inspeção formal — estruturado em 5 páginas com cabeçalho institucional UnB/FGA, matrizes tabulares completas, diagnósticos individuais e recomendações corretivas — encontra-se disponível para download direto:
    
    [:material-file-pdf-box: **Baixar Relatório Oficial da Inspeção: Grupo08InspecaoGrupo07Etapa6.pdf**](../../assets/relatorios/Grupo08InspecaoGrupo07Etapa6.pdf){ .md-button .md-button--primary }

---

## 3. Registro Audiovisual da Avaliação (Grupo 08)

O Vídeo 1 a seguir registra a sessão de inspeção formal e auditoria técnica da Entrega 6 do Grupo 07, conduzida conjuntamente pelos discentes do Grupo 08:

<div style="text-align: center; margin: 1.5rem 0;">
  <iframe width="100%" height="450" src="https://www.youtube-nocookie.com/embed/I8WZ7egMrCA" title="Avaliação da Entrega 6 do Grupo -1 (Grupo 07 — PCI Concursos) | Grupo 08 — IHC 2026.2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 8px; max-width: 800px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"></iframe>
  <p style="font-size: 0.85rem; color: var(--dp-muted); margin-top: 0.5rem;"><strong>Vídeo 1</strong> — Registro audiovisual da auditoria formal da Entrega 6 do Grupo 07 (PCI Concursos). <em>Fonte: Registro audiovisual gravado por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026.</em></p>
  <p style="font-size: 0.9rem; margin-top: 0.25rem;"><a href="https://youtu.be/I8WZ7egMrCA" target="_blank" rel="noopener noreferrer">Assistir diretamente no YouTube (Não Listado): https://youtu.be/I8WZ7egMrCA</a></p>
</div>

---

## 4. Avaliação dos Itens de Desenvolvimento Geral do Projeto (Plano pp. 8-9)

A conformidade com os requisitos gerais de governança, rastreabilidade, padronização editorial e gestão do projeto foi verificada frente aos 11 critérios estipulados no Plano de Ensino da disciplina (*Sales, 2026, pp. 8-9*). A Tabela 3 detalha a situação observada para cada critério geral.

**Tabela 3** — Auditoria dos critérios gerais de desenvolvimento e governança (DG-01 a DG-11)

| ID | Critério Normativo do Plano de Ensino | Avaliação | Versão / Data | Evidência Objetiva no Repositório do Grupo 07 | Diagnóstico Técnico e Justificativa Metodológica |
| :---: | :--- | :---: | :---: | :--- | :--- |
| **DG-01** | O histórico de versão padronizado? | ✅ **Conforme** | v1.0 a v1.4<br>*(03/11/2026)* | Tabelas de Histórico de Versões em todos os artefatos de Nível 2 e Nível 3. | Todos os artefatos da Etapa 6 contam com histórico de versões padronizado em tabela ao final da página, especificando versão semântica, data, descrição da alteração e autores/revisores. |
| **DG-02** | O(s) autor(es) e o(s) revisor(es) para cada artefato? | ✅ **Conforme** | v1.0<br>*(03/11/2026)* | Tabelas de Contribuição e cabeçalhos de histórico de versão. | Cada documento individual e de planejamento define explicitamente os integrantes responsáveis pela concepção/condução e os respectivos revisores por pares (*peer review*). |
| **DG-03** | Referências bibliográficas e/ou bibliografia em todos os artefatos? | ✅ **Conforme** | v1.0<br>*(03/11/2026)* | Seções de Referências Bibliográficas (norma ABNT) em cada documento. | Todos os artefatos sob inspeção contêm seção formal de referências bibliográficas referenciando Simone Barbosa et al. (2021), Carolyn Snyder (2003), Deborah Mayhew (1999) e Jakob Nielsen (1993/1994). |
| **DG-04** | As tabelas e imagens possuem legenda e fonte e elas são chamadas dentro do texto? | ✅ **Conforme** | v1.0<br>*(03/11/2026)* | Tabelas de parâmetros, fichas de teste e figuras das peças de papel. | As tabelas e fotografias dos protótipos de papel apresentam numeração padronizada, legendas contextuais, indicação formal da fonte com ano (2026) e chamada explícita ao longo do texto. |
| **DG-05** | Um texto fazendo uma introdução dos artefatos? | ✅ **Conforme** | v1.0<br>*(03/11/2026)* | Seção 1 (Introdução / Identificação) de todos os artefatos. | Cada artefato possui uma seção introdutória contextualizando seu papel no Ciclo de Vida de Mayhew (níveis 2 e 3) e vinculando com as tarefas e personas elicitadas. |
| **DG-06** | O cronograma executado com quem realizou cada artefato/atividade com as datas de início e fim da construção/realização? | ✅ **Conforme** | v1.5<br>*(03/11/2026)* | `docs/planejamento/cronograma.md` — Seção 6.2 (Tabela 12). | A equipe registrou formalmente a Tabela 12 no cronograma da Etapa 6, contendo o cronograma executado com as datas reais de início e término, atividades de prototipação, teste-piloto e relatos. |
| **DG-07** | Ata(s) da(s) reuniões (com data, horário de início e fim, participantes, objetivo, atividades definidas etc)? | ❌ **Não Conforme** | v1.0<br>*(03/09/2026)* | `docs/planejamento/ata-reuniao.md` | O repositório mantém exclusivamente a ata da 1ª reunião (03/09/2026). Não foi disponibilizada ata formal referente às deliberações e planejamento das atividades da Etapa 6. |
| **DG-08** | A gravação da reunião do grupo? | ❌ **Não Conforme** | v1.0<br>*(03/09/2026)* | `docs/planejamento/ata-reuniao.md` | Inexistência de gravação em vídeo das reuniões de trabalho e alinhamento do grupo para a Etapa 6. |
| **DG-09** | Vídeo de apresentação na categoria 'não listado' no YouTube? | ⚠️ **Incompleto** | v1.0<br>*(03/11/2026)* | `docs/apresentacao/apresentacao-6/daniel-batista.md` | Existe apenas o vídeo de apresentação individual de Daniel da Silva Batista (YouTube 'Não Listado'). Faltam as gravações de apresentação oficial dos integrantes Arthur Carvalho, Leonardo Lopes e Pedro Rocha para a Etapa 6. |
| **DG-10** | Tabela de contribuição no início do artefato com o nome de todos os integrantes com a contribuição de cada integrante com hiperligação à atividade e gravação? | ✅ **Conforme** | v1.0<br>*(03/11/2026)* | Tabelas de contribuição nos cabeçalhos de todos os artefatos. | Todos os artefatos trazem tabela de contribuição detalhada com hiperlinks para as seções e registros pertinentes. |
| **DG-11** | A seção de agradecimentos apresentando o uso de Inteligência Artificial (IA) Generativa no artefato? | ✅ **Conforme** | v1.0<br>*(03/11/2026)* | Declarações nas tabelas de contribuição de todos os documentos. | O grupo detalha transparentemente o uso de LLMs (Gemini e Claude) para auxílio na formatação Markdown e estruturação de tabelas, em conformidade com as diretrizes da disciplina. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna com base na inspeção de Fagan e no Plano de Ensino da disciplina (Sales, 2026), 2026._

---

## 5. Avaliação dos Itens de Conteúdo da Disciplina — Entrega 6

A conformidade técnica dos produtos de trabalho entregues pelo Grupo 07 foi auditada frente aos 12 critérios programáticos da Entrega 6 ([`Listas de Verificação`](../lista-verificacao.md)). A Tabela 4 apresenta a situação observada, as evidências no repositório e o parecer analítico para cada item de conteúdo.

**Tabela 4** — Auditoria dos critérios de conteúdo curricular da Entrega 6 (C6-01 a C6-12)

| ID | Critério Normativo da Entrega 6 | Origem / Fonte Normativa | Avaliação | Versão / Data | Evidência Objetiva no Repositório do Grupo 07 | Diagnóstico Técnico e Justificativa de Engenharia |
| :---: | :--- | :--- | :---: | :---: | :--- | :--- |
| **C6-01** | Documentação e detalhamento das peças físicas do Protótipo de Papel (telas base e componentes móveis/sobrepostos)? | Snyder (2003); Rettig (1994); Barbosa & Silva (2021) | ✅ **Conforme** | v1.0 a v1.4<br>*(03/11/2026)* | Artefatos individuais de Protótipo de Papel (Arthur, Daniel, Leonardo e Pedro). | As peças de papel, telas base e componentes móveis (janelas modais, menus suspensos, gabaritos e filtros sobrepostos) foram fotografadas e detalhadas com riqueza analítica. |
| **C6-02** | Execução e gravação do Teste-Piloto do Protótipo de Papel antes das sessões de avaliação com usuários reais? | Barbosa & Silva (2021, p. 276); Mayhew (1999) | ⚠️ **Incompleto** | v1.0<br>*(01/11 a 03/11/2026)* | `daniel-batista-prototipo-papel.md`, `pedro-rocha-prototipo-papel.md` e `leonardo-lopes-prototipo-papel.md`. | Daniel Batista e Pedro Rocha executaram e incorporaram vídeos de testes-piloto prévios. Arthur Carvalho relata teste-piloto, mas Leonardo Lopes deixou a seção de teste-piloto pendente (*"Em elaboração pelo integrante"*). |
| **C6-03** | Declaração explícita de que os dados do Teste-Piloto não serão incorporados nos resultados da avaliação (Item 12 do Plano)? | Plano de Ensino (*Sales, 2026*); Barbosa & Silva (2021) | ✅ **Conforme** | v1.0<br>*(03/11/2026)* | Seções de Teste-Piloto de Daniel Batista, Pedro Rocha e documento `teste-piloto.md`. | Há cláusula explícita assegurando que os dados obtidos durante os pilotos têm caráter estritamente de calibração instrumental e mecânica, sem integração às estatísticas oficiais de usabilidade. |
| **C6-04** | Sessões de avaliação com usuários reais conduzidas com separação de papéis (Facilitador/Avaliador e Computador Humano)? | Snyder (2003); Rettig (1994) | ✅ **Conforme** | v1.0<br>*(03/11/2026)* | Sessões documentadas por Daniel Batista, Arthur Carvalho e Pedro Rocha. | As sessões empíricas respeitaram com precisão a técnica do "Computador Humano" (*Snyder, 2003*), com membros atuando na troca mecânica das folhas e outros na moderação e observação. |
| **C6-05** | Termo de Consentimento Livre e Esclarecido (TCLE) gravado ou assinado pelos participantes antes do início do teste? | Resolução CNS nº 510/2016; Beauchamp & Childress (2013) | ✅ **Conforme** | v1.0<br>*(03/11/2026)* | Protocolo ético e vídeos gravados das entrevistas. | Os participantes registraram anuência formal e verbal nos vídeos, autorizando a captura de áudio e imagem para fins acadêmicos estritos conforme as resoluções éticas vigentes. |
| **C6-06** | Estrutura do relatório do resultado da avaliação (objetivos, método, número/perfil de participantes e lista de problemas)? | Barbosa & Silva (2021, p. 309); Mayhew (1999) | ✅ **Conforme** | v1.0 a v1.4<br>*(03/11/2026)* | Relatos de Daniel Batista, Pedro Rocha e Arthur Carvalho. | Os relatos individuais seguem com fidelidade a estrutura canônica proposta por Barbosa e Silva (2021, p. 309), consolidando perfil dos participantes, tarefas e tabulação de problemas. |
| **C6-07** | Classificação da gravidade dos problemas identificados na avaliação conforme escala de severidade (Nielsen)? | Nielsen (1994); Barbosa & Silva (2021) | ⚠️ **Incompleto** | v1.0<br>*(03/11/2026)* | Tabelas de problemas de Daniel, Arthur, Pedro e Leonardo. | Daniel, Arthur e Pedro classificaram minuciosamente as barreiras encontradas segundo a severidade de Nielsen (0 a 4). Entretanto, o artefato de Leonardo Lopes não possui a consolidação de severidade devido à pendência dos testes empíricos. |
| **C6-08** | Diretrizes e oportunidades concretas de reprojeto explicitadas para guiar a construção do Protótipo de Alta Fidelidade? | Mayhew (1999); Snyder (2003) | ✅ **Conforme** | v1.0<br>*(03/11/2026)* | Seções de reprojeto em todos os artefatos de protótipo de papel. | Os relatos listam recomendações práticas de redesenho e aprimoramento de fluxo para implementação imediata nas interfaces computacionais de Nível 3 no Figma. |
| **C6-09** | Planejamento da Avaliação do Protótipo de Alta Fidelidade estruturado e fundamentado segundo o Framework DECIDE? | Preece et al. (2002); Barbosa & Silva (2021) | ✅ **Conforme** | v1.0<br>*(03/11/2026)* | `docs/design-avaliacao-desenvolvimento/etapa-5/planejamento-avaliacao-alta-fidelidade.md`. | O artefato detalha expressamente todas as 6 etapas do framework DECIDE (D-E-C-I-D-E), estabelecendo objetivos, perguntas norteadoras, perfil de recrutamento e logística. |
| **C6-10** | Definição de métricas quantitativas e qualitativas (tempo, eficácia, erros, SUS) vinculadas às Metas de Usabilidade? | Mayhew (1999); Nielsen (1994) | ✅ **Conforme** | v1.0<br>*(03/11/2026)* | Seções 4 e 5 do Planejamento da Avaliação de Alta Fidelidade. | O plano estabelece critérios objetivos de medição de desempenho operacional e satisfação subjetiva, integrando-se aos princípios e metas de usabilidade definidas na Etapa 3. |
| **C6-11** | Planejamento do Relato dos Resultados do Protótipo de Alta Fidelidade com modelo de relatório e matriz de problemas? | Barbosa & Silva (2021, p. 280-282) | ✅ **Conforme** | v1.0<br>*(03/11/2026)* | `docs/design-avaliacao-desenvolvimento/etapa-5/planejamento-relato-alta-fidelidade.md`. | O documento fixa previamente o template canônico de 9 tópicos para consolidar os futuros dados dos testes de alta fidelidade, incluindo matriz de severidade e cronograma de reprojeto. |
| **C6-12** | Presença de Lista de Verificação da Técnica (checklist metodológico) para os artefatos construídos na etapa? | Diretrizes Pedagógicas FGA/UnB (*Sales, 2026*) | ⚠️ **Incompleto** | v1.0<br>*(03/11/2026)* | Artefatos de Daniel, Arthur, Pedro vs. Leonardo e Planejamentos. | Os artefatos de Daniel, Arthur e Pedro incluem checklist da técnica de prototipação em papel. Todavia, a página de Leonardo Lopes e os planejamentos de Alta Fidelidade não incorporaram tabela própria de autoinspeção da técnica. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna com base nas Listas de Verificação da disciplina e na literatura canônica de IHC, 2026._

---

## 6. Auditoria Individual de Participação e Entregas dos Membros

Em estrito atendimento às diretrizes do Plano de Ensino da disciplina (*Sales, 2026, p. 2*), que determina que *"Cada integrante da equipe deve elaborar itens de conteúdo com referência bibliográfica da fonte e o autor deve apresentar o artefato produzido por ele"*, a Tabela 5 examina detalhadamente a execução e o desempenho individual de cada discente do Grupo 07 na Entrega 6.

**Tabela 5** — Auditoria individual de responsabilidades, produtos e apresentações dos membros do Grupo 07

| Integrante | Tarefas e Escopo | Protótipo de Papel | Teste-Piloto e Sessões Reais | Apresentação Gravada | Diagnóstico Técnico e Avaliação de Engenharia |
| :--- | :--- | :---: | :--- | :---: | :--- |
| **Daniel da Silva Batista** | TAR-01 (Busca Avançada) e TAR-02 (Comparar Concursos) | ✅ Completo e Conforme | • **Piloto:** Executado e gravado (YouTube: `dmLr099zT0Y`)<br>• **Testes:** 3 Sessões gravadas (YouTube: `QzVX9Hed4OU`, `C8vyfMWISsY`, `AErfSvTkVGA`) | ✅ Individual gravada (YouTube: `-BFBxEuaQnM`) | **Desempenho Exemplar**. Trabalho de excelente qualidade metodológica. Documentou telas base, peças móveis/post-its, realizou piloto isolado, conduziu testes com usuários reais e publicou sua apresentação individual pontualmente. |
| **Arthur Sismene Carvalho** | TAR-05 (Realizar Simulado Online com Gabarito Comentado) | ✅ Completo e Conforme | • **Piloto:** Relatado com detalhes metodológicos<br>• **Testes:** Sessão empírica S03 gravada (YouTube: `4fV01RN8s9o`, `RgzF8ngqAzc`) | ❌ Não disponibilizada em página dedicada na Wiki | **Qualidade Técnica com Pendência de Vídeo**. Rico detalhamento dos componentes de papel e da simulação com Computador Humano (Leonardo Lopes atuou como operador). Falta disponibilizar a gravação da apresentação oficial da Etapa 6 na aba correspondente. |
| **Pedro Rocha Ferreira Lima** | TAR-04 (Montar Cronograma Semanal de Estudos) | ✅ Completo e Conforme | • **Piloto:** Executado e gravado (YouTube: `ZLIZi7D4Nek`)<br>• **Testes:** 2 Sessões gravadas (YouTube: `qrxfHdDRekc`, `vkxE8JK84CM`) | ❌ Não disponibilizada em página dedicada na Wiki | **Excelente Execução Prática com Pendência de Vídeo**. Excelente documentação fotográfica com 10 pranchas/recortes, teste-piloto gravado e entrevistas com usuários reais levantando 5 oportunidades de reprojeto. Falta a gravação da apresentação da Etapa 6. |
| **Leonardo da Silva Lopes Júnior** | TAR-08 (Gerenciar Calendário Pessoal e Concursos Salvos) | ⚠️ Parcial / Incompleto | • **Piloto:** Pendente (*"Em elaboração pelo integrante"* )<br>• **Testes:** Pendente (*"Aguardando realização das sessões"* ) | ❌ Não disponibilizada em página dedicada na Wiki | **Ciclo Incompleto de Avaliação**. Elaborou os desenhos manuais das Telas 1 e 2 com peças móveis e atuou como Computador Humano na sessão de Arthur. No entanto, não realizou o teste-piloto nem as avaliações empíricas com usuários de sua própria tarefa. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna com base nos artefatos do repositório 2026.2-Grupo07, 2026._

---

## 7. Síntese Quantitativa e Métricas Estatísticas de Conformidade

A Tabela 6 consolida quantitativamente o resultado da inspeção formal de software (Fagan, 1976) realizada sobre a Entrega 6 do Grupo 07, discriminando os índices por dimensão avaliada.

**Tabela 6** — Síntese estatística dos resultados da inspeção da Entrega 6 (Grupo 07)

| Dimensão Inspecionada | Total de Itens | Conformes (✅) | Incompletos (⚠️) | Não Conformes (❌) | Índice de Conformidade Plena | Taxa Ponderada de Conformidade\* |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Itens de Desenvolvimento Geral (DG)** | 11 | 8 | 1 | 2 | 72,7% | 77,3% |
| **Itens de Conteúdo da Disciplina (C6)** | 12 | 9 | 3 | 0 | 75,0% | 87,5% |
| **TOTAL CONSOLIDADO DA ENTREGA 6** | **23** | **17** | **4** | **2** | **73,9%** | **82,6%** |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._  
*\*Nota Metodológica de Ponderação: Conforme = 1,0 ponto; Incompleto = 0,5 ponto; Não Conforme = 0,0 ponto.*

Para propiciar uma visualização gerencial imediata do grau de maturidade da Entrega 6 do Grupo 07, o gráfico em blocos a seguir sintetiza a distribuição das avaliações:

<div style="background: var(--dp-card); border: 1px solid var(--dp-border); border-radius: 8px; padding: 1.2rem; margin: 1.5rem 0;">
  <div style="margin-bottom: 0.8rem;">
    <div style="display: flex; justify-content: space-between; font-size: 0.9rem; font-weight: 600; margin-bottom: 0.3rem;">
      <span>Conformidade Plena dos Critérios (17 de 23 itens)</span>
      <span style="color: #10B981;">73,9%</span>
    </div>
    <div style="background: rgba(255,255,255,0.08); border-radius: 4px; height: 12px; overflow: hidden;">
      <div style="background: #10B981; width: 73.9%; height: 100%;"></div>
    </div>
  </div>
  <div style="margin-bottom: 0.8rem;">
    <div style="display: flex; justify-content: space-between; font-size: 0.9rem; font-weight: 600; margin-bottom: 0.3rem;">
      <span>Atendimento Parcial / Incompleto (4 de 23 itens)</span>
      <span style="color: #F59E0B;">17,4%</span>
    </div>
    <div style="background: rgba(255,255,255,0.08); border-radius: 4px; height: 12px; overflow: hidden;">
      <div style="background: #F59E0B; width: 17.4%; height: 100%;"></div>
    </div>
  </div>
  <div>
    <div style="display: flex; justify-content: space-between; font-size: 0.9rem; font-weight: 600; margin-bottom: 0.3rem;">
      <span>Não Conformes / Omissões (2 de 23 itens)</span>
      <span style="color: #EF4444;">8,7%</span>
    </div>
    <div style="background: rgba(255,255,255,0.08); border-radius: 4px; height: 12px; overflow: hidden;">
      <div style="background: #EF4444; width: 8.7%; height: 100%;"></div>
    </div>
  </div>
</div>

---

## 8. Análise Aprofundada dos Problemas Críticos Encontrados

Conforme preconizado pelo método formal de Michael Fagan (1976), a identificação cirúrgica dos defeitos de especificação e governança tem o objetivo de viabilizar a correção rápida pela equipe auditada. A seguir, destacam-se os principais pontos de atenção da Entrega 6 do Grupo 07:

### 8.1 Incompletude nas Apresentações Oficiais em Vídeo (Critério DG-09)
O Plano de Ensino da disciplina (*Sales, 2026, p. 2 e p. 8*) estipula que cada integrante deve apresentar o artefato sob sua autoria em gravação hospedada no YouTube na modalidade Não Listado. Na Wiki do Grupo 07, apenas o discente Daniel da Silva Batista disponibilizou seu vídeo oficial individual (`docs/apresentacao/apresentacao-6/daniel-batista.md`). Os discentes Arthur Carvalho, Leonardo Lopes e Pedro Rocha não publicaram suas gravações de apresentação da Etapa 6 (ou uma gravação coletiva unificada), configurando descumprimento parcial da exigência pedagógica de avaliação audiovisual.

### 8.2 Inexistência de Atas Formais e Gravações de Reunião da Etapa 6 (Critérios DG-07 e DG-08)
A página de atas do repositório (`docs/planejamento/ata-reuniao.md`) continua documentando exclusivamente o encontro inicial do grupo ocorrido em 03/09/2026. A equipe não registrou ata de alinhamento, pauta ou divisão de tarefas para a execução do Protótipo de Papel e Planejamento de Alta Fidelidade da Etapa 6, tampouco disponibilizou gravação de reunião síncrona, repetindo a fragilidade já apontada na inspeção da Etapa 4.

### 8.3 Pendência Metodológica nas Sessões de Teste da Tarefa 8 (Critérios C6-02, C6-07 e Tabela 5)
O artefato individual do discente Leonardo da Silva Lopes Júnior (`TAR-08: Gerenciar Calendário Pessoal e Concursos Salvos`) apresenta os desenhos manuais das telas e recortes de componentes móveis, além de ter colaborado ativamente como operador do Computador Humano no teste de Arthur Carvalho. No entanto, as seções de teste-piloto e sessões com participantes reais encontram-se pendentes (*"Em elaboração"* e *"Aguardando realização das sessões"*). Como consequência direta, a catalogação dos problemas de usabilidade da TAR-08 pela Escala de Severidade de Nielsen (1994) não foi concluída.

### 8.4 Ausência da Lista de Verificação da Técnica nos Artefatos de Alta Fidelidade (Critério C6-12)
Embora os documentos de protótipo de papel de Daniel, Arthur e Pedro tragam tabelas de autoinspeção da técnica, os artefatos de **Planejamento da Avaliação de Alta Fidelidade** e **Planejamento do Relato de Alta Fidelidade** não incorporaram a Lista de Verificação da Técnica (checklist normativo de 6 a 8 itens). Essa ausência reduz a blindagem metodológica preconizada pelo Prof. Dr. André Barros de Sales para validação prévia dos instrumentos de teste.

---

## 9. Pontos Fortes e Destaques Metodológicos da Entrega

Apesar das inconformidades formais de governança e cronograma de gravação, a Entrega 6 do Grupo 07 apresenta expressiva evolução qualitativa e elevado rigor em suas práticas empíricas:

1. **Riqueza de Engenharia nos Protótipos Físicos de Papel:** Excelente qualidade dos recortes de componentes de papel (janelas modais, menus suspensos e gabaritos móveis), com destaque para as 10 pranchas analíticas de Pedro Rocha e os post-its funcionais de Daniel Batista;
2. **Separação Rigorosa de Papéis no "Computador Humano":** Cumprimento exemplar da dinâmica clássica de Carolyn Snyder (2003), com segregação real entre Facilitador (que interage verbalmente e observa) e Computador Humano (que apenas movimenta silenciosamente as folhas de papel);
3. **Cláusula Exemplar de Isolamento do Teste-Piloto:** Todos os integrantes que conduziram testes-piloto formalizaram no texto que os dados coletados nos pilotos têm função estritamente instrumental de ajuste do roteiro, sendo categoricamente descartados da amostra final de resultados;
4. **Respeito aos Aspectos Éticos e TCLE:** Coleta consistente de anuência verbal gravada em vídeo antes de qualquer intervenção com os usuários, resguardando a privacidade e autonomia dos voluntários;
5. **Estruturação Exemplar do Framework DECIDE no Nível 3:** O Planejamento da Avaliação de Alta Fidelidade detalha com profundidade todas as 6 fases metodológicas (D-E-C-I-D-E), correlacionando objetivos, métricas psicométricas (SUS) e tempos de execução operacional (KLM).

---

## 10. Recomendações de Ação Corretiva para o Grupo 07

Com o intuito de apoiar o Grupo 07 no saneamento das pendências antes da consolidação final da nota e na preparação para o relato do Protótipo de Alta Fidelidade (Entrega 7), a Tabela 7 sintetiza o plano de ação prioritário recomendado:

**Tabela 7** — Recomendações prioritárias de ação corretiva para o Grupo 07

| Item / Foco de Ação | Recomendações Técnicas e Metodológicas para o Grupo 07 |
| :--- | :--- |
| **Gravação das Apresentações Faltantes da Etapa 6** | Disponibilizar os vídeos e páginas de apresentação individual para Arthur Sismene, Leonardo Lopes e Pedro Rocha (ou gravação coletiva integral com todos os integrantes), conforme exigido no Plano de Ensino (*Sales, 2026, p. 2*). |
| **Conclusão do Ciclo de Avaliação de Leonardo Lopes** | Conduzir o teste-piloto gravado e as sessões empíricas com usuários para a TAR-08 (Calendário Pessoal), preenchendo as seções 3 e 4 do documento de relato de Leonardo com a matriz de severidade de Nielsen (0 a 4). |
| **Atas e Gravações de Reunião da Etapa 6** | Registrar na Wiki a ata formal com os horários de início/fim, objetivos e participantes da reunião da Etapa 6, acompanhada do link da respectiva gravação em vídeo. |
| **Checklists da Técnica nos Planejamentos de Nível 3** | Incorporar tabela de autoinspeção com a Lista de Verificação da Técnica nos artefatos de planejamento de Alta Fidelidade (Avaliação e Relato) e no relato individual de Leonardo. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna com base na inspeção de Fagan da Entrega 6, 2026._

---

## 11. Lista de Verificação da Técnica (Inspeção Formal de Software)

A Tabela 8 apresenta a autoavaliação da técnica metodológica de **Inspeção Formal de Software de Michael Fagan (1976)** empregada pelos discentes do Grupo 08 na elaboração deste relatório de auditoria, assegurando a aderência aos princípios canônicos de verificação de IHC e Engenharia de Software.

**Tabela 8** — Lista de Verificação da Técnica de Inspeção Formal de Software (Fagan, 1976)

| ID | Questão / Critério Metodológico Avaliado | Origem / Fonte Normativa | Conforme? | Resposta Autoexplicativa e Evidência no Documento |
| :---: | :--- | :--- | :---: | :--- |
| **LVT-01** | A inspeção foi orientada por lista de verificação (*checklist*) previamente definida e desacoplada dos achados empíricos? | Fagan (1976); Sommerville (2011) | ✅ **Sim** | Os critérios normativos foram extraídos diretamente do Plano de Ensino da disciplina (*Sales, 2026*) e das Listas de Verificação consolidadas do repositório ([`docs/verificacao/lista-verificacao.md`](../lista-verificacao.md)). |
| **LVT-02** | O relatório identifica formalmente a versão, data, commit exato e ambiente documental do sistema inspecionado? | Fagan (1976); Pressman (2014) | ✅ **Sim** | A Tabela 2 explicita o commit auditado (`8cc5c90`), a branch (`main`), a data (04/11/2026), a URL do repositório e o link para a documentação publicada no GitPages. |
| **LVT-03** | A inspeção discrimina de forma independente os critérios gerais de governança dos critérios de conteúdo de IHC? | Sales (2026); Mayhew (1999) | ✅ **Sim** | O documento divide a auditoria na Tabela 3 (critérios gerais DG-01 a DG-11) e na Tabela 4 (critérios de conteúdo programático C6-01 a C6-12). |
| **LVT-04** | A auditoria individual avalia a participação e entregas de cada membro da equipe auditada? | Plano de Ensino da Disciplina (*Sales, 2026, p. 2*) | ✅ **Sim** | A Tabela 5 avalia individualmente o escopo, protótipo de papel, testes empíricos, apresentação e diagnóstico de cada um dos quatro integrantes do Grupo 07. |
| **LVT-05** | O relatório quantifica os resultados por meio de métricas estatísticas objetivas e índices de conformidade? | Fagan (1976); Nielsen (1994) | ✅ **Sim** | A Tabela 6 apresenta o total de itens conformes, incompletos e não conformes, calculando os percentuais absolutos e as taxas ponderadas de conformidade. |
| **LVT-06** | A inspeção prescreve recomendações concretas de ação corretiva para orientar o retrabalho da equipe? | Fagan (1976); Barbosa & Silva (2021) | ✅ **Sim** | A Tabela 7 estabelece quatro eixos de intervenção prática prioritária (apresentações, testes da TAR-08, atas e listas de verificação). |
| **LVT-07** | A sessão de inspeção foi gravada em vídeo e disponibilizada com link acessível e reprodutor incorporado? | Diretrizes Pedagógicas FGA/UnB (*Sales, 2026*) | ✅ **Sim** | A Seção 3 e a Tabela 2 incorporam o vídeo da inspeção formal hospedado no YouTube na categoria Não Listado (`https://youtu.be/I8WZ7egMrCA`). |
| **LVT-08** | Foi disponibilizado relatório formal consolidado em formato PDF padronizado para download? | Instruções Oficiais de Entrega (*Sales, 2026*) | ✅ **Sim** | O arquivo `Grupo08InspecaoGrupo07Etapa6.pdf` encontra-se disponível na pasta de relatórios e com link para download na Seção 2. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna com base nos preceitos de Inspeção Formal de Software (Fagan, 1976), 2026._

---

## 12. Histórico de Versão

A Tabela 9 documenta o histórico de versões e modificações deste relatório de inspeção da Entrega 6.

**Tabela 9** — Histórico de versão do documento

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 04/11/2026 | Elaboração do relatório formal de inspeção da Entrega 6 do Grupo 07 com base no checklist normativo de Fagan (1976), consolidação das Tabelas 1 a 7, incorporação do vídeo gravado e link do PDF institucional | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) | [Edvaldo Soares](https://github.com/PajeMurici-dev), [Vinicius Silva Araruna](https://github.com/ViniciusA05) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 13. Referências Bibliográficas (ABNT NBR 6023)

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. *Interação Humano-Computador e Experiência do Usuário*. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.

[2] BEAUCHAMP, Tom L.; CHILDRESS, James F. *Principles of Biomedical Ethics*. 7. ed. New York: Oxford University Press, 2013.

[3] BRASIL. Ministério da Saúde. Conselho Nacional de Saúde. *Resolução nº 510, de 7 de abril de 2016*. Diretrizes éticas para pesquisas em ciências humanas e sociais. Brasília: Diário Oficial da União, 2016.

[4] BRASIL. *Lei nº 13.709, de 14 de agosto de 2018*. Lei Geral de Proteção de Dados Pessoais (LGPD). Brasília: Diário Oficial da União, 2018.

[5] FAGAN, Michael E. Design and code inspections to reduce errors in program development. *IBM Systems Journal*, v. 15, n. 3, p. 182-211, 1976.

[6] KRUG, Steve. *Não me faça pensar (revisitado): uma abordagem de bom senso à usabilidade na web e no celular*. 3. ed. Rio de Janeiro: Alta Books, 2014.

[7] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[8] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann Publishers, 1994.

[9] NIELSEN, Jakob; LANDAUER, Thomas K. A mathematical model of the finding of usability problems. In: *INTERCHI '93: Proceedings of the INTERACT '93 and CHI '93 Conference on Human Factors in Computing Systems*. Amsterdam: ACM, 1993. p. 206-213.

[10] PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. *Interaction Design: Beyond Human-Computer Interaction*. New York: John Wiley & Sons, 2002.

[11] PRESSMAN, Roger S. *Engenharia de Software: Uma Abordagem Profissional*. 7. ed. Porto Alegre: AMGH, 2014.

[12] RETTIG, Marc. Prototyping for tiny fingers. *Communications of the ACM*, v. 37, n. 4, p. 21-27, 1994.

[13] SALES, André Barros de. *Plano de Ensino FIHC 022026 — Turma 01*. Brasília: Faculdade de Ciências e Tecnologias em Engenharia (FCTE), Universidade de Brasília (UnB), 2026.

[14] SNYDER, Carolyn. *Paper Prototyping: The Fast and Easy Way to Design and Refine User Interfaces*. San Francisco: Morgan Kaufmann Publishers, 2003.

[15] SOMMERVILLE, Ian. *Engenharia de Software*. 9. ed. São Paulo: Pearson Prentice Hall, 2011.

---

## 14. Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Em conformidade com os princípios éticos da Sociedade Brasileira de Computação (SBC, 2023) e as diretrizes do Plano de Ensino da disciplina (*Sales, 2026*), registra-se que foi utilizado suporte de Inteligência Artificial Generativa (Google Gemini) estritamente para assistência na formatação sintática das matrizes tabulares em Markdown e adequação ao padrão formal ABNT. Toda a inspeção analítica dos artefatos, cruzamento com as evidências do repositório do Grupo 07, análise dos vídeos empíricos e julgamento técnico de engenharia de usabilidade foram conduzidos direta, crítica e integralmente pelos discentes autores deste artefato.

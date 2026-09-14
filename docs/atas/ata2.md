# Ata 2 — Avaliação do Grupo +1 (Etapa 1)

## Tabela de Contribuição

| Integrante | Contribuição | Data |
| :--- | :--- | :---: |
| Edvaldo Soares Brasileiro Filho | [Participação na reunião e revisão dos itens de planejamento geral](#avaliacao-dos-itens-de-planejamento-geral-do-projeto) | 07/09/2026 |
| Gustavo Antonio Rodrigues e Silva | [Coordenação da avaliação, elaboração do relatório e identificação das inconsistências](#inconsistencia-relevante-identificada) | 07/09/2026 |
| Jonathan Lourenço Carpaneda | [Verificação dos itens de desenvolvimento e padronização da documentação](#avaliacao-dos-itens-de-desenvolvimento-do-projeto) | 07/09/2026 |
| Pedro Paulo Almeida Araujo | [Verificação dos itens de conteúdo da disciplina e recomendações](#avaliacao-dos-itens-de-conteudo-da-disciplina) | 07/09/2026 |
| Vinicius Silva Araruna | [Verificação dos artefatos e identificação das inconsistências técnicas](#inconsistencia-relevante-identificada) | 07/09/2026 |

---

## Introdução

Este documento registra a **reunião presencial do Grupo 08** realizada em 07/09/2026, cujo objetivo foi a condução da avaliação dos artefatos do **Grupo +1 (Grupo 01)** referente à Etapa 1 da disciplina de Interação Humano-Computador (IHC), conforme determinação do Prof. Dr. André Barros de Sales.

---

## Informações da Reunião

| Tópico | Detalhe |
| :--- | :--- |
| **Data:** | 07/09/2026 |
| **Modalidade:** | Presencial |
| **Objetivo:** | Avaliação dos artefatos da Etapa 1 do Grupo 01 (Grupo +1) |
| **Disciplina:** | Interação Humano-Computador (2026.2 — Turma 01) |
| **Professor:** | André Barros de Sales |

---

## Participantes Presentes

- Edvaldo Soares Brasileiro Filho
- Gustavo Antonio Rodrigues e Silva
- Jonathan Lourenço Carpaneda
- Pedro Paulo Almeida Araujo
- Vinicius Silva Araruna

---

## Identificação do Projeto Avaliado

| Campo | Informação |
| :--- | :--- |
| **Grupo Avaliado** | Grupo 01 |
| **Sítio avaliado** | Oppia |
| **Versão avaliada** | v1.3 / commit `d59a009` |
| **Data da Avaliação** | 07/09/2026 |
| **Repositório GitHub** | [github.com/Interacao-Humano-Computador/2026.2-Grupo01](https://github.com/Interacao-Humano-Computador/2026.2-Grupo01) |
| **Documentação (GitPages)** | [interacao-humano-computador.github.io/2026.2-Grupo01](https://interacao-humano-computador.github.io/2026.2-Grupo01/) |

---

## Visão Geral da Avaliação

Este relatório apresenta a auditoria técnica da Etapa 1 do Grupo 01 (plataforma Oppia), conduzida pelo Grupo 08 como Grupo +1 na disciplina de Interação Humano-Computador (UnB Gama, 2026.2). A avaliação analisa a conformidade dos artefatos em relação aos critérios oficiais da disciplina.

O Grupo 01 implementou a estrutura básica no MkDocs com suporte a contraste e fotos da equipe. Contudo, foram identificadas inconsistências metodológicas: o cronograma planejado abrange somente as etapas 1 a 4 (omitindo a segunda metade do semestre); o cronograma executado não foi elaborado; o conteúdo teórico individual da disciplina não foi desenvolvido; os links audiovisuais estão com marcações genéricas; e a avaliação do Oppia está sem link de visualização.

---

## Avaliação dos Itens de Planejamento Geral do Projeto

**Tabela 1** — Verificação dos itens de planejamento geral do Grupo 01

| ID | Questão da Rubrica Oficial | Resposta | Evidência / Justificativa Técnica |
| :---: | :--- | :---: | :--- |
| 1 | Uma página apresentando os integrantes da equipe (com foto) com nome e sem matrícula? | ✅ Sim | Na página inicial (index.md), a Tabela 1 apresenta as fotos dos seis integrantes, com nomes completos e perfis do GitHub, sem exibição de matrículas. |
| 2 | O cronograma do planejamento apresenta todas as atividades de todas as etapas (1 a 8) para cada integrante com as datas de início e fim das entregas e o período de revisão? | ❌ Não | O artefato intitula-se "4 Etapas" e omitiu as etapas 5, 6, 7 e 8. Nas etapas 2 a 4, os campos de responsáveis e revisores constam como "A definir". Na atividade 1.1 o autor e o revisor são o mesmo integrante (Igor Alves). |
| 3 | O cronograma do planejamento apresenta um período de gravação da apresentação de cada etapa? | ⚠️ Incompleto | Há previsão de gravação de apresentação nas etapas 1 a 4 (atividades 1.9, 2.8, 3.6 e 4.6), contudo não há previsão para as etapas 5 a 8. |
| 4 | O cronograma prevê um período de revisão/ajustes nos artefatos devidos às considerações dos monitores/professor? | ❌ Não | Nenhuma etapa contempla períodos de ajustes pós-feedback da banca, não havendo planejamento temporal para as revisões das entregas. |
| 5 | A motivação e os critérios para a escolha do site? | ⚠️ Incompleto | A página `site_escolhido.md` contém 20 linhas de texto sucinto, afirmando de forma geral que o Oppia possui "mais funcionalidades e maiores problemas", sem dados ou métricas. Apresenta erro de digitação ("apresentaodo"). |
| 6 | O planejamento e avaliação dos sites selecionados? | ⚠️ Incompleto | O grupo listou seis sítios em PDF. Todavia, para o sistema escolhido (Oppia), o campo de link da avaliação está em branco. Não há matriz de decisão comparando os candidatos. |
| 7 | Possui opção de contraste de cores? | ✅ Sim | Configurado no `mkdocs.yml` com suporte à alternância de tema claro e escuro (alto contraste) nativo do Material for MkDocs. |
| 8 | Os artefatos: Planejamento, equipe, sites avaliados, site selecionado, ferramentas, processo de design e cronograma? | ⚠️ Incompleto | Os artefatos constam no menu, contudo o cronograma cobre apenas 4 etapas, o cronograma executado inexiste e a avaliação do Oppia está sem conteúdo. |
| 9 | Uma página com as atas de reunião com o acesso à gravação (vídeo), quando houver? | ❌ Não | Na página de reuniões, os links apontam para a raiz do Google Drive (`drive.google.com`) e as datas estão incompletas ("-/09/2026"). O link da apresentação aponta para a raiz do YouTube. |

_Fonte: Grupo 08, 2026._

---

## Avaliação dos Itens de Desenvolvimento do Projeto

**Tabela 2** — Verificação dos aspectos de documentação, governança e conformidade técnica

| ID | Critério de Desenvolvimento | Resposta | Evidência / Justificativa Técnica |
| :---: | :--- | :---: | :--- |
| 1 | O histórico de versão padronizado? | ⚠️ Incompleto | Algumas páginas possuem a coluna de revisores em branco (como `site_escolhido.md`, `cronograma_planejado.md` e `contribuicao.md`). |
| 2 | O(s) autor(es) e o(s) revisor(es) para cada artefato? | ❌ Não | Em `site_escolhido.md`, o campo de Revisor está vazio. Em `cronograma_planejado.md`, as versões 1.0 e 1.1 não contêm revisor. Em `heatmap.md`, o revisor consta apenas como "-". |
| 3 | Referências bibliográficas e/ou bibliografia em todos os artefatos? | ❌ Não | O arquivo `cronograma_planejado.md` tem a seção de referências inteiramente vazia. As páginas `site_escolhido.md` e `sites_avaliados.md` não possuem seção bibliográfica. |
| 4 | As tabelas e imagens possuem legenda e fonte e elas são chamadas dentro do texto? | ⚠️ Incompleto | Em `heatmap.md`, a imagem foi referenciada como `../../assets/heatmap.png`, resultando em imagem quebrada. Em `site_escolhido.md`, não há nenhuma imagem ou captura do Oppia. |
| 5 | Um texto fazendo uma introdução dos artefatos? | ✅ Sim | A maioria dos artefatos apresenta seção de introdução contextualizando o documento. |
| 6 | O cronograma executado com quem realizou cada artefato/atividade com as datas de início e fim reais? | ❌ Não | O cronograma executado não foi elaborado. Não consta no repositório nem na documentação qualquer registro das atividades realizadas e datas efetivas da Etapa 1. |
| 7 | Ata(s) da(s) reuniões (com data, horário de início e do final, participantes, objetivo, atividades definidas etc)? | ⚠️ Incompleto | As reuniões constam com datas incompletas ("-/09/2026"), não havendo separação formal das atas nem detalhamento aprofundado das decisões e atribuições. |
| 8 | A gravação da reunião do grupo? | ❌ Não | Constam apenas links para a página inicial do Google Drive, sem acesso a arquivos de vídeo compartilhados. |
| 9 | Vídeo de apresentação na categoria "não listado" no YouTube? | ❌ Não | O link indicado aponta para a raiz do YouTube acompanhado da observação explícita "*(Adicionar o link do vídeo)*". |
| 10 | Tabela de contribuição no início do artefato com o nome de todos os integrantes com a contribuição de cada um com hiperligação? | ❌ Não | Os artefatos não contêm a tabela de contribuição no topo. O grupo agrupou em uma página isolada (`contribuicao.md`), não atendendo à regra de inserção no início de cada documento. |
| 11 | A seção de agradecimentos apresentando o uso de Inteligência Artificial (IA) Generativa no artefato? | ✅ Sim | Presente na página inicial e em ferramentas, baseada no Código de Conduta da Sociedade Brasileira de Computação (SBC). |

_Fonte: Grupo 08, 2026._

---

## Avaliação dos Itens de Conteúdo da Disciplina

**Tabela 3** — Verificação do Processo de Design e produção individual de conteúdo teórico

| Requisito de Conteúdo Teórico | Resposta | Evidência / Justificativa Técnica |
| :--- | :---: | :--- |
| Justificativa da escolha do Processo de Design? (referência bibliográfica, foto do texto e autor) | ⚠️ Incompleto | O grupo selecionou a Engenharia de Usabilidade de Mayhew em `processo_de_design.md`. Contudo: (1) não adicionaram a fotografia do texto da referência; (2) não informaram o número da página citada; (3) não elaboraram comparação analítica com os demais ciclos de design para justificar a escolha. |
| Todos os integrantes elaboram itens de conteúdo da disciplina com referência bibliográfica, foto do texto e nome do autor? | ❌ Não | Nenhum integrante elaborou tópicos de conteúdo teórico. No arquivo `contribuicao.md` (linhas 23-30), a seção foi deixada comentada em HTML (`<!-- ... -->`), sem nenhuma página ou seção publicada sobre o assunto. |

_Fonte: Grupo 08, 2026._

---

## Inconsistência Relevante Identificada

Durante a verificação detalhada do artefato `cronograma_planejado.md`, identificou-se na atividade 3.1 a seguinte descrição:

> *"Características da Plataforma: Mapeamento técnico das propriedades físicas e lógicas que envolvem o uso do sistema administrativo do IBGE."*

Além disso, nos comentários do código-fonte (linhas 44 e 45), consta:

> *"descrevendo as jornadas administrativas típicas mapeadas no SDA."*

Constata-se que a estrutura da tabela foi reaproveitada de projeto de semestre anterior (relativo ao Sistema de Dados Administrativos do IBGE — SDA) sem a devida revisão textual, mantendo referências que não correspondem à plataforma Oppia.

---

## Recomendações para Ajustes Pós-Feedback

Com o intuito de apoiar o Grupo 01 na adequação de seus artefatos, o Grupo 08 recomenda as seguintes correções prioritárias:

1. **Complementar o cronograma planejado** com as etapas 5, 6, 7 e 8, detalhando nominalmente os autores e revisores, além de prever os períodos de gravação e os prazos de ajustes pós-feedback.
2. **Elaborar o cronograma executado** da Etapa 1, registrando as datas reais de desenvolvimento e revisão de cada documento.
3. **Desenvolver os itens teóricos individuais** de conteúdo da disciplina por todos os integrantes, anexando a citação bibliográfica, o número da página e a fotografia do livro de referência.
4. **Disponibilizar os vídeos** da apresentação da Etapa 1 e das reuniões no YouTube sob a modalidade Não Listado, substituindo os links genéricos.
5. **Adicionar a avaliação heurística preliminar** do Oppia na página de sites avaliados, preenchendo o link atualmente em branco.
6. **Ajustar a referência da imagem** do mapa de calor em `heatmap.md` para `../assets/heatmap.png` e incluir a tabela de contribuição no início de cada documento.
7. **Corrigir a inconsistência** do IBGE/SDA no cronograma planejado, revisando o texto da atividade 3.1 para referir-se ao Oppia.

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 07/09/2026 | Criação da ata 2 e relatório de avaliação do Grupo 01 (Grupo +1) | [Gustavo Antonio](https://github.com/gus-ant) | [Pedro Paulo](https://github.com/Pedrop06) |

---

## Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Autopublicação, 2021.

[2] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[3] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1994.

[4] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama, 2026.

---

## Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Durante a formatação e padronização deste relatório em Markdown, foi utilizado apoio de Inteligência Artificial Generativa (LLM). Todo o conteúdo técnico, análises, evidências e recomendações foram elaborados e validados pelos integrantes do Grupo 08.

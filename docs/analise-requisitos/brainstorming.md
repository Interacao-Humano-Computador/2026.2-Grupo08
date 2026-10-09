# Brainstorming

## Tabela de Contribuição

A Tabela 1 detalha as contribuições de cada integrante na elaboração e revisão deste artefato.

**Tabela 1** — Matriz de Contribuição dos Integrantes no Brainstorming

| Integrante | Contribuição | Data | Horário |
| :--- | :--- | :---: | :---: |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Participação ativa na ideação presencial, discussão de dores de busca e revisão técnica | 17/09/2026 | 14:00 - 15:30 |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | Participação ativa na ideação presencial, levantamento de dores de onboarding e revisão por pares | 17/09/2026 | 14:00 - 15:30 |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Mediação da dinâmica presencial, sistematização das ideias em clusters, redação do artefato e rastreabilidade | 17/09/2026 | 14:00 - 15:30 |

_Fonte: Elaborada pelos autores, 2026._

---

## 1. Introdução

A fase de Análise de Requisitos do Ciclo de Vida de Mayhew (1999) preconiza a investigação das reais necessidades, expectativas e restrições dos usuários antes de qualquer intervenção ou decisão de design. No projeto de Interação Humano-Computador do Grupo 08, que tem como objeto de estudo o **Fórum Diolinux Plus** (plataforma colaborativa baseada no Discourse), o brainstorming constitui a primeira técnica de elicitação direta empregada pela equipe.

Como insumo preparatório para a sessão, a equipe utilizou a **análise documental e observação preliminar da plataforma Discourse** — examinando a estrutura de tags, as diretrizes da comunidade e a página `/about` do fórum. Essa análise documental prévia permitiu que os integrantes levassem para a dinâmica presencial um panorama concreto das dinâmicas do fórum, subsidiando o levantamento de hipóteses focado na realidade de estudantes universitários que buscam solucionar problemas técnicos e aprender comandos no ecossistema Linux.

---

## 2. Fundamentação Teórica

Conforme ensinam Barbosa e Silva (2021, p. 152), o brainstorming é uma técnica em grupo amplamente consagrada no design de interação e na engenharia de requisitos, destinada a incentivar a geração livre de ideias sem censura prévia. Criado originalmente por Alex Osborn em 1953, o método apoia-se em quatro preceitos operacionais inegociáveis:

1. **Adiar o julgamento:** Nenhuma ideia deve ser criticada, descartada ou ridicularizada durante a fase divergente da sessão;
2. **Estimular ideias ousadas:** Ideias inusitadas ou aparentemente inviáveis são encorajadas, pois frequentemente abrem caminhos para soluções inovadoras;
3. **Buscar quantidade:** Quanto maior o volume bruto de proposições geradas, maior a probabilidade de identificar requisitos de alto impacto;
4. **Combinar e aprimorar (efeito carona):** Os participantes são incentivados a construir sobre as ideias dos colegas, combinando conceitos divergentes em propostas mais sólidas.

_Autor do Item Teórico: [Vinicius Silva Araruna](https://github.com/ViniciusA05)_  
*(Referencial teórico canônico fundamentado em Barbosa e Silva, 2021, p. 152).*

---

## 3. Metodologia da Sessão Presencial em Sala de Aula

A dinâmica de brainstorming foi realizada presencialmente pela equipe, respeitando o seguinte enquadramento operacional:

- **Data da Realização:** 17 de setembro de 2026;
- **Horário:** 14:00 às 15:30 (duração total: 90 minutos, divididos em 45 minutos de geração divergente e 45 minutos de agrupamento e refinamento);
- **Ambiente Físico:** Sala de aula da Faculdade UnB Gama (FGA/UnB), durante o horário acadêmico da disciplina;
- **Participantes Ativos:** Vinicius Silva Araruna (mediador), Gustavo Antonio Rodrigues e Silva e Edvaldo Soares Brasileiro Filho;
- **Insumos Utilizados:** Anotações em bloco de papel, dispositivos móveis consultando o fórum real e síntese documental prévia da estrutura do Discourse.

> **Nota Metodológica sobre o Registro:** Por ter sido conduzida presencialmente no ambiente de sala de aula universitária, a sessão não contou com captação audiovisual em vídeo. As ideias, queixas e impressões expressas pelos membros foram registradas em notas manuscritas e digitadas imediatamente após o término da aula, sendo sistematizadas na Tabela 2 a seguir.

---

## 4. Resultados: Ideias e Dores Elicitadas

Após a fase de geração livre, a equipe realizou a convergência e categorização das ideias em três *clusters* funcionais, alinhados diretamente às três tarefas principais modeladas no projeto e aos perfis de usuários (com destaque para o estudante universitário aprendiz).

A Tabela 2 apresenta as ideias e dores elicitadas, seu impacto sobre a experiência do estudante e a respectiva rastreabilidade no projeto.

**Tabela 2** — Ideias e Dores Elicitadas no Brainstorming

| ID | Cluster Temático | Ideia / Dor Elicitada | Impacto no Estudante | Rastreabilidade de Tarefa / Persona |
| :---: | :--- | :--- | :--- | :--- |
| **BR-01** | Publicação de Dúvidas | Dificuldade e receio de quebrar a formatação de código e logs ao colar comandos de terminal em Markdown | Insegurança na postagem, postagens mal formatadas que demoram a receber resposta | Tarefa 1 (Publicação com Markdown) / Persona 1 (Lucas) |
| **BR-02** | Publicação de Dúvidas | Hesitação na escolha das tags corretas diante de um número elevado de opções | O estudante não sabe qual tag define seu problema (ex: kernel vs. hardware), gerando tópicos sem visibilidade | Tarefa 1 (Publicação com Tags) / Persona 1 (Lucas) |
| **BR-03** | Publicação de Dúvidas | Falta de um template ou modelo prévio orientando quais dados de hardware/sistema devem ser informados | O usuário esquece de informar versão da distribuição e comandos executados, atrasando o diagnóstico | Tarefa 1 (Publicação de Dúvidas) / Persona 2 (Carlos) |
| **BR-04** | Cadastro e Onboarding | Desconhecimento do papel do bot interativo (Discobot) e receio de interagir com mensagens automatizadas | O estudante ignora o tutorial inicial e deixa de aprender atalhos e boas práticas de convivência | Tarefa 2 (Onboarding Discobot) / Persona 2 (Carlos) |
| **BR-05** | Cadastro e Onboarding | Frustração com as limitações de novo usuário (*Trust Level 0*), como bloqueio de postagens seguidas ou links | O estudante tenta postar prints do terminal e tem o conteúdo travado pelo sistema antispam sem entender a razão | Tarefa 2 (Progressão TL0 -> TL1) / Persona 2 (Carlos) |
| **BR-06** | Cadastro e Onboarding | Falta de clareza visual nas regras da comunidade para novos membros recém-migrados do Windows | Ansiedade de ser repreendido por moderadores devido a regras implícitas de etiqueta | Tarefa 2 (Onboarding e Regras) / Persona 2 (Carlos) |
| **BR-07** | Busca e Recuperação | Dificuldade de filtrar resultados especificamente pela distribuição utilizada (ex: Linux Mint vs. Ubuntu) | Resultados misturados com comandos incompatíveis com a interface Cinnamon do usuário | Tarefa 3 (Busca Avançada) / Persona 3 (Pesquisador) |
| **BR-08** | Busca e Recuperação | Sobrecarga de tópicos antigos (3 a 5 anos atrás) com comandos desatualizados aparecendo no topo | Risco de o estudante executar instruções obsoletas que danificam o gerenciador de pacotes do sistema | Tarefa 3 (Filtros de Categoria/Data) / Persona 3 (Pesquisador) |
| **BR-09** | Busca e Recuperação | Desconhecimento da sintaxe de busca avançada do Discourse (operadores `in:title`, `tags:`, `order:views`) | O estudante utiliza apenas termos genéricos e abandona a busca ao não encontrar respostas imediatas | Tarefa 3 (Busca de Tópicos) / Persona 3 (Pesquisador) |

_Fonte: Elaborada pelos autores, 2026._

Conforme demonstrado na Tabela 2, os achados do brainstorming estabelecem a base empírica inicial para o refinamento das personas e para a identificação dos pontos críticos de interação na Análise Hierárquica de Tarefas (HTA).

---

## 5. Lista de Verificação da Técnica

Para assegurar a conformidade metodológica da técnica aplicada com as exigências pedagógicas da disciplina, a Tabela 3 apresenta a lista de verificação preenchida pela equipe.

**Tabela 3** — Lista de Verificação da Técnica de Brainstorming

| Item / Questão Avaliada | Origem / Fonte Normativa | Conforme? | Resposta Autoexplicativa |
| :---: | :--- | :---: | :--- |
| **1** | A técnica de brainstorming possui fundamentação teórica baseada na literatura canônica de IHC? | Barbosa & Silva (2021); Mayhew (1999) | **Sim** | A Seção 2 fundamenta o conceito e as quatro regras clássicas de Osborn, com indicação expressa do autor do item teórico. |
| **2** | O contexto, data, horário, local e participantes da sessão foram explicitados formalmente? | Diretrizes Gerais da Disciplina | **Sim** | A Seção 3 documenta a realização presencial em 17/09/2026 na FGA/UnB com os três discentes ativos e justificativa metodológica sobre o registro. |
| **3** | As regras clássicas da técnica (adiar julgamento, quantidade, ideias ousadas) foram operacionalizadas? | Osborn (1953); Barbosa & Silva (2021) | **Sim** | A dinâmica dividiu 45 minutos para geração divergente livre e 45 minutos para agrupamento analítico. |
| **4** | As ideias e dores levantadas foram categorizadas em clusters estruturados? | Preece, Rogers & Sharp (2013) | **Sim** | A Tabela 2 organiza 9 achados em 3 clusters temáticos correspondentes às três tarefas centrais do sistema. |
| **5** | Há rastreabilidade explícita entre as ideias elicitadas, as tarefas de IHC e o elenco de personas? | Mayhew (1999); Barbosa & Silva (2021) | **Sim** | A última coluna da Tabela 2 mapeia diretamente cada dor às Tarefas 1, 2 e 3 e às Personas 1, 2 e 3 do projeto. |
| **6** | Todas as tabelas possuem numeração formal, legenda, fonte e chamada antecedente no corpo do texto? | Normas de Formatação da Disciplina | **Sim** | As Tabelas 1, 2 e 3 possuem chamadas textuais explícitas, títulos padronizados e indicação de fonte. |

_Fonte: Elaborada pelos autores, 2026._

---

## 6. Histórico de Versão

A Tabela 4 documenta o histórico de versões deste artefato, registrando as modificações, datas, autores e revisores.

**Tabela 4** — Histórico de Versões do Artefato de Brainstorming

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 09/10/2026 | Elaboração inicial do documento de Brainstorming com fundamentação teórica de Osborn, metodologia de sala de aula e clusters de tarefas | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |

_Fonte: Elaborada pelos autores, 2026._

---

## 7. Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Durante a elaboração deste artefato, foi utilizado apoio de Inteligência Artificial Generativa (Antigravity LLM) exclusivamente como suporte instrumental para auxílio na estruturação de tabelas Markdown e checagem de consistência contra a rubrica acadêmica. O planejamento da dinâmica, a mediação presencial em sala de aula, o levantamento das ideias empíricas e a validação do conteúdo foram realizados integralmente pelos discentes do Grupo 08.

---

## 8. Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier / Campus, 2021.

[2] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[3] OSBORN, Alex F. *Applied Imagination: Principles and Procedures of Creative Problem-Solving*. New York: Charles Scribner's Sons, 1953.

[4] ROGERS, Yvonne; SHARP, Helen; PREECE, Jennifer. *Design de Interação: Além da Interação Humano-Computador*. 3. ed. Porto Alegre: Bookman, 2013.

# Listas de Verificação (Checklists Normativos de IHC)

## Tabela de Contribuição

A distribuição de responsabilidades na elaboração, estruturação e curadoria dos instrumentos normativos de inspeção deste artefato encontra-se sintetizada na Tabela 1.

**Tabela 1** — Matriz de Contribuição e Transparência de IA Generativa

| Integrante | Atribuição no Artefato | Data | Horário | Ferramenta de IA | Propósito do Uso de IA |
| :--- | :--- | :---: | :---: | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Concepção metodológica, fundamentação da inspeção formal (Fagan, 1976), compilação dos checklists normativos das Etapas 1, 2 e 3 e template de heteroavaliação | 12/10/2026 | 00:30 - 02:00 | Claude / Gemini | Apoio na estruturação Markdown e padronização visual das matrizes tabulares. |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Revisão técnica dos critérios de Elicitação, Busca e Análise de Tarefas frente às rubricas | 12/10/2026 | 02:00 - 02:30 | Nenhuma | Auditoria humana cruzada dos itens e consistência de links normativos. |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | Revisão dos critérios de Planejamento, Onboarding e Governança do repositório | 12/10/2026 | 02:30 - 03:00 | Nenhuma | Verificação da completude dos critérios de Entrega 1 e Entrega 2. |

_Fonte: Elaborada pelos autores, 2026._

---

## 1. Introdução

Na Engenharia de Usabilidade e na Garantia da Qualidade de Software, as atividades de **Verificação e Validação (V&V)** asseguram que os artefatos produzidos estejam em estrita conformidade com as diretrizes pedagógicas, requisitos de especificação e padrões ergonômicos canônicos (*Barbosa & Silva, 2021; Fagan, 1976; Sommerville, 2011*).

Este artefato formaliza as **Listas de Verificação (Checklists Normativos)** adotadas pelo Grupo 08 para a inspeção analítica dos produtos de trabalho desenvolvidos na disciplina de Interação Humano-Computador (FGA0173), sob docência do Prof. Dr. André Barros de Sales (Faculdade UnB Gama — FGA/UnB).

Em atendimento ao princípio de separação de responsabilidades e sanando o apontamento metodológico pós-Entrega 2 (apontamento M0-01), este documento atua como **instrumento neutro, normativo e reutilizável** de auditoria, disponibilizando os templates em branco com seus respectivos critérios objetivos e origens normativas. A aplicação empírica desses instrumentos, com o registro de achados, evidências e estatísticas de conformidade do grupo, é documentada separadamente no [Relatório de Inspeção e Autoavaliação do Grupo 08](grupo08.md).

---

## 2. Fundamentação Teórica: O Processo de Inspeção Formal de Software

A inspeção sistemática de artefatos é um dos métodos analíticos mais consolidados da Engenharia de Software e de IHC para detecção precoce de defeitos, inconsistências e desvios de especificação (*Fagan, 1976; Nielsen, 1994; Barbosa & Silva, 2021*).

### O Método de Inspeção de Michael Fagan (1976)

Proposto originalmente por Michael E. Fagan em seu trabalho clássico na IBM (*"Design and code inspections to reduce errors in program development"*), o processo formal de inspeção estrutura-se em seis etapas sequenciais rigorosas:

1. **Planejamento (*Planning*)**: Seleção dos artefatos a inspecionar, atribuição de papéis (moderador, autor, inspetores) e disponibilização dos instrumentos normativos;
2. **Visão Geral (*Overview*)**: Apresentação inicial do contexto e dos objetivos do artefato aos membros da equipe de inspeção;
3. **Preparação Individual (*Preparation*)**: Fase crítica e independente na qual cada inspetor estuda o documento aplicando **Listas de Verificação (*Checklists*)** pré-definidas para identificar potenciais não conformidades sem interrupções de terceiros;
4. **Reunião de Inspeção (*Inspection Meeting*)**: Sessão colaborativa liderada pelo moderador na qual os inspetores debatem os apontamentos da fase de preparação, registram oficialmente os defeitos consensuais e determinam o status do artefato;
5. **Retrabalho (*Rework*)**: O autor do artefato revisa e corrige todos os defeitos documentados na reunião de inspeção;
6. **Acompanhamento (*Follow-up*)**: O moderador ou auditor verifica se todas as correções foram implementadas adequadamente antes da liberação final do produto de trabalho.

Em Interação Humano-Computador, o emprego de checklists estruturados reduz drasticamente o viés cognitivo do avaliador, assegura que nenhum critério ergonômico ou regulatório seja negligenciado e garante reprodutibilidade ao processo de auditoria de qualidade (*Barbosa & Silva, 2021, p. 286*).

_Autor do Item Teórico: [Vinicius Silva Araruna](https://github.com/ViniciusA05)_  
*(Referencial teórico canônico fundamentado em Fagan, 1976 e Barbosa & Silva, 2021, p. 286).*

---

## 3. Metodologia de Preenchimento dos Checklists

Para assegurar consistência metodológica entre diferentes avaliadores, a aplicação das listas de verificação deste artefato obedece à escala de conformidade padronizada:

- **[ ] Sim (Conforme)**: O artefato atende plenamente ao critério exigido na literatura e no plano de ensino;
- **[ ] Não (Não Conforme)**: O critério foi completamente omitido ou desatendido;
- **[ ] Incompleto / Parcial**: O requisito foi abordado, porém apresenta pendências, inconsistências ou lacunas documentais;
- **[ ] Não Aplicável (N/A)**: O critério não incide sobre o escopo do documento sob inspeção.

Toda avaliação deve ser obrigatoriamente justificada na coluna correspondente, indicando o local exato da evidência no texto (link, seção, tabela ou figura) ou o detalhamento do defeito identificado para orientar a fase de retrabalho.

---

## 4. Checklists da Entrega 1 — Planejamento do Projeto

Os instrumentos de verificação da Entrega 1 estão estruturados nas Tabelas 2, 3 e 4, cobrindo o planejamento geral, a governança técnica e os conteúdos da disciplina.

### 4.1 Planejamento Geral do Projeto

A Tabela 2 apresenta o checklist normativo para os aspectos de planejamento e seleção do objeto de estudo da Entrega 1.

**Tabela 2** — Checklist normativo de planejamento geral do projeto (Entrega 1)

| ID | Questão / Critério da Rubrica Oficial | Origem / Fonte Normativa | Avaliação | Justificativa e Local da Evidência |
| :---: | :--- | :--- | :---: | :--- |
| **E1-01** | O projeto apresenta uma página de equipe com foto, nome completo e link dos integrantes (sem matrícula)? | Plano de Ensino da Disciplina (*Sales, 2026*) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E1-02** | O cronograma planejado apresenta todas as atividades das etapas 1 a 8 com datas de início/fim e autores/revisores? | Plano de Ensino da Disciplina (*Sales, 2026*) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E1-03** | O cronograma planejado contempla explicitamente o período de gravação das apresentações de cada etapa? | Plano de Ensino da Disciplina (*Sales, 2026*) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E1-04** | O cronograma prevê período de revisão e retrabalho pós-feedback dos monitores e do professor? | Fagan (1976); Sales (2026) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E1-05** | São documentados os critérios de escolha e a motivação para a seleção do site objeto de estudo? | Diretrizes de IHC (*Barbosa & Silva, 2021*) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E1-06** | Foi realizado planejamento e avaliação comparativa de múltiplos sites candidatos antes da escolha final? | Diretrizes de IHC (*Barbosa & Silva, 2021*) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E1-07** | O ambiente de documentação oferece alternância de contraste de cores (modo claro, escuro e alto contraste)? | Diretrizes de Acessibilidade WCAG 2.1 | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E1-08** | Todos os artefatos previstos (Planejamento, Equipe, Sites, Ferramentas, Processo de Design) estão publicados? | Plano de Ensino da Disciplina (*Sales, 2026*) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E1-09** | Há página com registro das atas de reuniões da equipe com links funcionais para as gravações em vídeo? | Diretrizes de Governança (*Sales, 2026*) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |

_Fonte: Elaborada pelos autores com base em Sales (2026), 2026._

---

### 4.2 Governança Técnica e Padrão Editorial

A Tabela 3 estabelece o checklist de governança técnica e conformidade editorial exigido para todos os artefatos.

**Tabela 3** — Checklist normativo de governança técnica e padrão editorial (Entrega 1)

| ID | Critério Editorial / Técnico | Origem / Fonte Normativa | Avaliação | Justificativa e Local da Evidência |
| :---: | :--- | :--- | :---: | :--- |
| **E1-10** | O artefato apresenta histórico de versão padronizado com versão, data, descrição, autor(es) e revisor(es)? | Padrão Editorial FGA/UnB | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E1-11** | Há indicação clara de autor(es) e revisor(es) com links funcionais para os respectivos perfis no GitHub? | Governança da Disciplina | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E1-12** | Todas as referências bibliográficas estão em conformidade com as normas ABNT NBR 6023? | Normas ABNT NBR 6023:2018 | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E1-13** | Todas as tabelas e imagens possuem numeração, legenda, indicação de fonte e chamadas obrigatórias no texto? | Padrão Editorial da Disciplina | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E1-14** | O artefato possui introdução formal contextualizando o seu objetivo e a disciplina de IHC? | Rigor Acadêmico FGA/UnB | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E1-15** | O cronograma executado registra as datas reais, atividades desenvolvidas e respectivos responsáveis? | Governança da Disciplina | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E1-16** | As atas de reunião registram data, horário, participantes, pauta, deliberações e tarefas atribuídas? | Rigor Metodológico | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E1-17** | As gravações de reuniões e apresentações estão hospedadas no YouTube na modalidade 'Não Listado'? | Diretrizes da Disciplina (*Sales, 2026*) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E1-18** | Há Tabela de Contribuição no topo do documento com a participação de todos os membros ativos? | Diretrizes de Avaliação Contínua | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E1-19** | Há seção de agradecimentos e transparência declarando o uso ético e supervisionado de IA Generativa? | Diretrizes Éticas FGA/UnB | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |

_Fonte: Elaborada pelos autores com base em Sales (2026), 2026._

---

### 4.3 Processo de Design e Conteúdo da Disciplina

A Tabela 4 sintetiza o checklist normativo para o Processo de Design e conteúdo teórico da Entrega 1.

**Tabela 4** — Checklist normativo de processo de design e conteúdo teórico (Entrega 1)

| ID | Requisito Teórico | Origem / Fonte Normativa | Avaliação | Justificativa e Local da Evidência |
| :---: | :--- | :--- | :---: | :--- |
| **E1-20** | A escolha do Processo de Design está fundamentada com citação, referência ABNT, justificativa e foto do livro? | Barbosa & Silva (2021); Sales (2026) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E1-21** | Todos os discentes ativos elaboraram itens de conteúdo teórico individual com referência, autor e print do livro? | Diretrizes Pedagógicas FGA/UnB | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |

_Fonte: Elaborada pelos autores com base em Barbosa e Silva (2021) e Sales (2026), 2026._

---

## 5. Checklists da Entrega 2 — Elicitação, Perfil e Tarefas

Os instrumentos de inspeção da Entrega 2 estão dispostos nas Tabelas 5, 6 e 7, abrangendo Aspectos Éticos, Perfil do Usuário, Personas, Cenários e Análise de Tarefas.

### 5.1 Perfil do Usuário e Aspectos Éticos

A Tabela 5 detalha os critérios normativos para o Perfil do Usuário e Aspectos Éticos (TCLE).

**Tabela 5** — Checklist normativo de perfil do usuário e aspectos éticos (Entrega 2)

| ID | Critério Normativo / Canônico | Origem / Fonte Normativa | Avaliação | Justificativa e Local da Evidência |
| :---: | :--- | :--- | :---: | :--- |
| **E2-01** | O Perfil do Usuário fundamenta-se em dados empíricos e literatura canônica de IHC? | Barbosa & Silva (2021, Cap. 8) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-02** | O perfil contempla caracterização demográfica, faixa etária, escolaridade e alfabetismo tecnológico? | Hackos & Redish (1998); Courage & Baxter (2005) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-03** | O perfil mapeia os objetivos centrais, tarefas rotineiras e hábitos de uso do público-alvo? | Barbosa & Silva (2021) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-04** | O artefato de Aspectos Éticos ancora-se na Resolução CNS nº 510/2016 e na LGPD (Lei nº 13.709/2018)? | Resolução CNS nº 510/2016; Lei nº 13.709/2018 | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-05** | São apresentados e operacionalizados os 4 princípios bioéticos (Autonomia, Beneficência, Não-Maleficência e Justiça)? | Beauchamp & Childress (2013) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-06** | É disponibilizada a minuta textual completa do Termo de Consentimento Livre e Esclarecido (TCLE)? | Resolução CNS nº 510/2016 | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-07** | O artefato prescreve o procedimento mandatório de leitura prévia e consentimento gravado do TCLE? | Diretrizes Éticas em IHC (*Sales, 2026*) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-08** | São garantidos formalmente o anonimato dos participantes, sigilo de dados e voluntariedade da pesquisa? | Lei nº 13.709/2018 (LGPD) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |

_Fonte: Elaborada pelos autores com base em Barbosa e Silva (2021) e CNS 510/2016, 2026._

---

### 5.2 Personas, Elenco e Cenários de Interação

A Tabela 6 estabelece os critérios para construção do elenco de personas e redação dos cenários.

**Tabela 6** — Checklist normativo de personas, elenco e cenários (Entrega 2)

| ID | Critério Normativo / Canônico | Origem / Fonte Normativa | Avaliação | Justificativa e Local da Evidência |
| :---: | :--- | :--- | :---: | :--- |
| **E2-09** | O elenco de personas possui dimensão apropriada (3 a 12 personas) representando os papéis centrais mapeados? | Cooper (1999); Barbosa & Silva (2021) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-10** | Há a identificação nítida e justificada de ao menos uma Persona Primária para nortear as decisões de design? | Cooper (1999) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-11** | As personas apresentam fotografia realista, nome, perfil socioeconômico, ocupação e grau de instrução? | Nielsen (1994); Cooper (1999) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-12** | São discriminados os três níveis de objetivos da persona (pessoais, práticos/finais e corporativos)? | Cooper (1999); Barbosa & Silva (2021) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-13** | As personas incluem citação em primeira pessoa (voz do usuário) e detalhamento de dores e frustrações? | Courage & Baxter (2005) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-14** | As personas possuem lastro empírico rastreável ao Perfil do Usuário (evitando 'personas elásticas')? | Cooper (1999) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-15** | Os Cenários descrevem narrativas contextuais de uso em prosa rica para cada persona do elenco? | Carroll (2000); Barbosa & Silva (2021) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-16** | Cada cenário explicita contexto inicial, objetivo, episódios de ação, restrições e resultado final alcançado? | Carroll (2000) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-17** | Há rastreabilidade formal conectando Cenários, Personas e as Tarefas modeladas em HTA/GOMS? | Barbosa & Silva (2021) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |

_Fonte: Elaborada pelos autores com base em Cooper (1999) e Carroll (2000), 2026._

---

### 5.3 Análise de Tarefas (HTA, GOMS e CTT)

A Tabela 7 sistematiza os requisitos formais de engenharia de tarefas da Entrega 2.

**Tabela 7** — Checklist normativo de análise de tarefas (Entrega 2)

| ID | Critério Normativo / Canônico | Origem / Fonte Normativa | Avaliação | Justificativa e Local da Evidência |
| :---: | :--- | :--- | :---: | :--- |
| **E2-18** | Foram empregadas ao menos duas técnicas formais complementares de Análise de Tarefas (ex.: HTA e GOMS/CTT)? | Barbosa & Silva (2021, p. 177) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-19** | A HTA apresenta o objetivo de alto nível (Objetivo 0) orientado ao estado final desejado pelo usuário? | Annett & Duncan (1967) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-20** | A HTA apresenta tanto o Diagrama Gráfico em árvore quanto a Tabela Analítica de decomposição equivalente? | Barbosa & Silva (2021, p. 180) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-21** | Os planos em HTA especificam condições lógicas e temporais com operadores canônicos (sequência, seleção, repetição)? | Annett & Duncan (1967) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-22** | O encerramento da decomposição em HTA é justificado formalmente pela regra heurística p × c? | Annett & Duncan (1967); Barbosa & Silva (2021) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-23** | A modelagem GOMS estrutura os Objetivos (Goals), Operadores (Operators), Métodos (Methods) e Regras de Seleção? | Card, Moran & Newell (1983) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-24** | Cada integrante ativo é autor principal de ao menos uma modelagem de tarefa completa e distinta? | Plano de Ensino da Disciplina (*Sales, 2026*) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E2-25** | A gravação oficial da apresentação da Entrega 2 está hospedada no YouTube na modalidade 'Não Listado'? | Diretrizes da Disciplina (*Sales, 2026*) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |

_Fonte: Elaborada pelos autores com base em Annett & Duncan (1967) e Card et al. (1983), 2026._

---

## 6. Checklists da Entrega 3 — Análise de Requisitos

A Tabela 8 apresenta o checklist normativo de Análise de Requisitos, englobando Características da Plataforma, Princípios Gerais, Metas de Usabilidade e UX e Guia de Estilo.

**Tabela 8** — Checklist normativo de análise de requisitos (Entrega 3)

| ID | Item de Verificação / Rubrica Oficial | Origem / Fonte Normativa | Avaliação | Justificativa e Local da Evidência |
| :---: | :--- | :--- | :---: | :--- |
| **E3-01** | As Características da Plataforma documentam arquitetura tecnológica, limitações de hardware/software e navegadores? | Barbosa & Silva (2021, p. 105) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E3-02** | O artefato de Características apresenta fundamentação teórica com citação do livro, autor do item e foto da página? | Barbosa & Silva (2021, p. 105) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E3-03** | Os Princípios Gerais de Projeto apresentam fundamentação teórica de Barbosa et al. (2021) com foto para cada princípio? | Barbosa & Silva (2021, p. 111) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E3-04** | Todos os 8 princípios canônicos de projeto foram analisados com evidências na interface do Fórum Diolinux Plus? | Barbosa & Silva (2021); Norman (1988) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E3-05** | As Metas de Usabilidade (Nielsen) e UX (Rogers et al.) foram fundamentadas com foto do livro e autor do item? | Nielsen (1994); Rogers et al. (2013) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E3-06** | As metas foram justificadas frente às personas, tarefas HTA e papéis de usuário, com indicadores mensuráveis em UTF-8? | Barbosa & Silva (2021, p. 106) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E3-07** | O Guia de Estilo apresenta fundamentação teórica com base no Ciclo de Mayhew (1999) com autor e foto do livro? | Mayhew (1999, p. 192) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E3-08** | O Guia de Estilo contempla as 6 seções canônicas de Mayhew (Visão Geral, Ambiente, Telas, Interação, Ações, Diálogos)? | Mayhew (1999) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E3-09** | As diretrizes do Guia de Estilo possuem evidências visuais capturadas diretamente da interface do sistema? | Mayhew (1999); Sales (2026) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E3-10** | Os 3 membros ativos dividiram a autoria dos itens teóricos da Entrega 3 (Metas, Características/Princípios e Guia)? | Diretrizes da Disciplina (*Sales, 2026*) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E3-11** | Todos os artefatos possuem histórico de versão com datas reais, autores e revisores com links funcionais? | Governança da Disciplina | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E3-12** | O cronograma executado da etapa registra as atividades reais, datas e autores da Entrega 3? | Governança da Disciplina | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E3-13** | A Ata da Reunião de planejamento da etapa foi publicada com pauta, deliberações e membros ativos? | Diretrizes de Governança | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E3-14** | A gravação da reunião e o vídeo da apresentação oficial da Entrega 3 estão disponíveis no YouTube em "Não Listado"? | Diretrizes da Disciplina (*Sales, 2026*) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |

_Fonte: Elaborada pelos autores com base em Mayhew (1999) e Barbosa & Silva (2021), 2026._

---

## 7. Checklists da Entrega 4 — Planejamento de Nível 1 (Storyboards e Tarefas)

A Entrega 4 estabelece a esteira preliminar de avaliação formativa no Nível 1 de Mayhew (1999). A Tabela 9 apresenta o checklist normativo para os planejamentos de avaliação e relato de Storyboard e Análise de Tarefas.

**Tabela 9** — Checklist normativo de planejamento da avaliação de Nível 1 (Entrega 4)

| ID | Questão / Critério da Rubrica Oficial | Origem / Fonte Normativa | Avaliação | Justificativa e Local da Evidência |
| :---: | :--- | :--- | :---: | :--- |
| **E4-01** | O planejamento da avaliação segue rigorosamente as 6 fases do framework DECIDE? | Preece et al. (2002); Barbosa et al. (2021) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E4-02** | Os objetivos da avaliação estão explicitados e categorizados nas metas de IHC? | Barbosa & Silva (2021, pp. 261-262) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E4-03** | Os métodos de avaliação a serem utilizados estão fundamentados com citação canônica e autoria? | Barbosa & Silva (2021); Mayhew (1999) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E4-04** | São detalhadas as questões práticas (recrutamento, perfil de usuário, prazos e custos zero)? | Plano de Ensino (*Sales, 2026*) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E4-05** | As questões éticas contemplam o TCLE com Script Oral Literal nos primeiros 60 segundos gravados? | Resolução CNS nº 510/2016; Beauchamp & Childress | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E4-06** | Cada desenho do Storyboard está diretamente mapeado a um objetivo da Análise de Tarefas? | Klemmer (Coursera); Barbosa & Silva (2021) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E4-07** | A quantidade de storyboards é igual à quantidade de integrantes ativos da equipe? | Diretrizes da Disciplina (*Sales, 2026*) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E4-08** | Há definição e protocolo do teste-piloto a ser executado antes da avaliação com usuários? | Barbosa & Silva (2021, p. 300) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E4-09** | Há declaração explícita de que os dados do teste-piloto jamais serão computados nos resultados? | Rigor Metodológico de IHC (*Sales, 2026*) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E4-10** | O planejamento do relato prevê catálogo de problemas com escala de severidade de Nielsen? | Nielsen (1994); Barbosa et al. (2021) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E4-11** | O cronograma executado da Etapa 4 registra as datas reais e os integrantes responsáveis? | Diretrizes de Governança | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E4-12** | O vídeo de apresentação oficial da equipe foi publicado como "Não Listado" no YouTube? | Plano de Ensino da Disciplina | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |

_Fonte: Elaborada pelos autores com base em Preece et al. (2002) e Sales (2026), 2026._

---

## 8. Checklists da Entrega 5 — Relatos de Nível 1 e Planejamento de Nível 2 (Protótipo de Papel)

A Entrega 5 cumpre o papel de encerramento formativo da modelagem conceitual e projeção dos testes em papel. A Tabela 10 reúne os 15 critérios objetivos exigidos na inspeção normativa da etapa.

**Tabela 10** — Checklist normativo da Entrega 5 (Relatos de Nível 1 e Protótipo de Papel de Nível 2)

| ID | Questão / Critério da Rubrica Oficial | Origem / Fonte Normativa | Avaliação | Justificativa e Local da Evidência |
| :---: | :--- | :--- | :---: | :--- |
| **E5-01** | O arquivo PDF padronizado da entrega foi gerado no formato estipulado (*PlajRelatoStoryBoarProtPapeldNomedoSite.pdf*)? | Instruções da Tarefa no Teams (*Sales, 2026*) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E5-02** | O PDF e a página da entrega contêm a URL funcional do vídeo de apresentação e link do GitPages? | Diretrizes de Entrega no Aprender 3 | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E5-03** | O relato do Storyboard documenta a avaliação empírica com discentes voluntários sem condução viciada? | Klemmer; Barbosa & Silva (2021, p. 275) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E5-04** | O consentimento livre e esclarecido (TCLE) foi gravado em áudio e vídeo com script oral lido nos primeiros 60s? | Resolução CNS nº 510/2016; Bioética | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E5-05** | O relato da Análise de Tarefas valida objetivos, planos lógicos HTA e regras CMN-GOMS com usuários? | Annett (2003); Barbosa & Silva (2021) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E5-06** | Os problemas identificados são classificados pela escala de severidade de Nielsen (0 a 4) com plano de reprojeto? | Nielsen (1994); Barbosa & Silva (2021) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E5-07** | O planejamento da avaliação do Protótipo de Papel segue integralmente o framework DECIDE? | Preece et al. (2002); Mayhew (1999) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E5-08** | Há delimitação operacional estrita dos papéis de Facilitador e 'Computador Humano' nos testes em papel? | Snyder (2003); Rettig (1994) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E5-09** | O teste-piloto do protótipo de papel foi gravado integralmente simulando a troca de cartões e tempo de resposta? | Snyder (2003); Barbosa & Silva (2021) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E5-10** | Há declaração explícita de isolamento total dos dados do teste-piloto de Nível 2? | Metodologia Canônica de IHC | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E5-11** | O planejamento do relato do protótipo de papel define métricas, taxonomia de erros e estrutura coesa de síntese? | Barbosa & Silva (2021, Cap. 11) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E5-12** | O menu de navegação está livre de páginas placeholder ('Nada a ver aqui por enquanto' ou rascunhos)? | Padrão Editorial e Docs as Code | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E5-13** | Todas as tabelas e figuras possuem títulos, legendas, fontes ABNT e chamadas explícitas no texto? | Padrão Editorial FGA/UnB | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E5-14** | As tabelas de contribuição e históricos de versão possuem indicação de autores e revisores com links funcionais? | Fagan (1976); Governança da Disciplina | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E5-15** | Há seção de agradecimentos declarando com transparência e supervisão humana o escopo do uso de IA Generativa? | Diretrizes da SBC (2023); Sales (2026) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |

_Fonte: Elaborada pelos autores com base em Snyder (2003), Nielsen (1994) e Sales (2026), 2026._

---

## 9. Checklists da Entrega 6 — Relato do Protótipo de Papel (Nível 2) e Planejamento de Alta Fidelidade (Nível 3)

A Entrega 6 consolida a avaliação empírica dos Protótipos de Papel (Nível 2 de Mayhew) e estrutura o Planejamento da Avaliação e do Relato dos Protótipos de Alta Fidelidade (Nível 3). A Tabela 11 reúne os 12 critérios normativos em branco para inspeção da etapa.

**Tabela 11** — Checklist normativo da Entrega 6 (Relato do Protótipo de Papel e Planejamento de Alta Fidelidade)

| ID | Questão / Critério da Rubrica Oficial | Origem / Fonte Normativa | Avaliação | Justificativa e Local da Evidência |
| :---: | :--- | :--- | :---: | :--- |
| **E6-01** | O relato do Protótipo de Papel documenta as pranchas físicas base e os componentes móveis recortados (modais, menus e alertas)? | Snyder (2003); Rettig (1994); Barbosa & Silva (2021, p. 248) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E6-02** | Foi executado e gravado o Teste-Piloto do Protótipo de Papel antes da sessão oficial, com cláusula explícita de isolamento de seus dados? | Barbosa & Silva (2021, p. 276); Mayhew (1999) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E6-03** | A sessão de avaliação do Protótipo de Papel respeitou a separação de papéis entre Facilitador e 'Computador Humano'? | Snyder (2003); Rettig (1994) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E6-04** | O consentimento livre e esclarecido (TCLE) foi gravado com leitura literal do Script Oral nos primeiros 60 segundos do vídeo? | Resolução CNS nº 510/2016; Beauchamp & Childress (2013) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E6-05** | O relato do Protótipo de Papel analisa as perguntas investigativas (PP01 a PP08) e classifica os problemas na escala de severidade de Nielsen (0 a 4)? | Nielsen (1994); Barbosa & Silva (2021, p. 280) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E6-06** | O relato especifica diretrizes concretas de reprojeto para a construção do Protótipo de Alta Fidelidade (Nível 3)? | Mayhew (1999); Snyder (2003) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E6-07** | O Planejamento da Avaliação do Protótipo de Alta Fidelidade (Nível 3) aplica integralmente as 6 etapas do Framework DECIDE? | Preece et al. (2002); Barbosa & Silva (2021, p. 280) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E6-08** | O Planejamento de Alta Fidelidade define métricas quantitativas e qualitativas vinculadas às Metas de Usabilidade e ao Guia de Estilo? | Mayhew (1999); Nielsen (1994) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E6-09** | O Planejamento de Alta Fidelidade prevê protocolo de Teste-Piloto (com isolamento de dados), orçamento de custo zero e Script Oral do TCLE? | Barbosa & Silva (2021, p. 276); Sales (2026) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E6-10** | O Planejamento do Relato dos Resultados de Alta Fidelidade define a estrutura canônica do futuro relatório e matriz de severidade? | Barbosa & Silva (2021, p. 280–282) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E6-11** | Todos os artefatos de Storyboard, HTA, Protótipo de Papel e Alta Fidelidade possuem Lista de Verificação da Técnica (mínimo de 6 a 8 itens)? | Diretrizes Pedagógicas FGA/UnB (*Sales, 2026*) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |
| **E6-12** | As gravações de Teste-Piloto, Avaliação em Papel e Apresentação da Entrega 6 estão hospedadas no YouTube como 'Não Listado'? | Plano de Ensino da Disciplina (*Sales, 2026*) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | |

_Fonte: Elaborada por [Vinicius Silva Araruna](https://github.com/ViniciusA05) com base em Snyder (2003), Mayhew (1999), Barbosa e Silva (2021) e Sales (2026), 2026._

---

## 10. Template para Heteroavaliação de Grupos Pares

A Tabela 12 fornece o modelo padronizado neutro utilizado pela equipe nas sessões de heteroavaliação dos grupos pares (Grupo -1 e Grupo +1).

**Tabela 12** — Template normativo de heteroavaliação para grupos pares

| ID | Critério Avaliado | Fonte Normativa | Conforme? | Evidências / Problemas Identificados | Sugestão de Correção para a Equipe |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **HET-01** | O artefato sob inspeção cumpre a estrutura formal requerida no Plano de Ensino? | Sales (2026) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | | |
| **HET-02** | Há fundamentação teórica sólida com citações de autores canônicos de IHC (ABNT)? | Barbosa & Silva (2021) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | | |
| **HET-03** | Todas as tabelas e figuras possuem legendas, fontes e chamadas formais no texto? | Padrão Editorial FGA/UnB | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | | |
| **HET-04** | O artefato apresenta histórico de versão completo e tabela de contribuição dos autores? | Governança de Software | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | | |
| **HET-05** | As tarefas e modelagens refletem o uso real do público-alvo frente ao sistema analisado? | Mayhew (1999) | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | | |
| **HET-06** | O documento respeita acessibilidade visual de contraste e tipografia limpa em UTF-8? | WCAG 2.1 AA | [ ] Sim<br>[ ] Não<br>[ ] Incompleto | | |

_Fonte: Elaborada pelos autores, 2026._

---

## 11. Lista de Verificação da Técnica (Elaboração de Checklists)

A Tabela 13 apresenta a autoavaliação da conformidade metodológica do artefato de listas de verificação frente aos critérios científicos de inspeção de software (*Fagan, 1976; Gilb & Graham, 1993; Barbosa & Silva, 2021*).

**Tabela 13** — Lista de verificação da técnica de elaboração de checklists

| ID | Questão Avaliada | Origem / Fonte Normativa | Conforme? | Resposta Autoexplicativa e Evidência no Artefato |
| :---: | :--- | :--- | :---: | :--- |
| **CHK-01** | O artefato está estruturado estritamente como template normativo em branco (desacoplado de inspeções)? | Fagan (1976); Gilb & Graham (1993) | ✅ Sim | O documento disponibiliza os instrumentos neutros em branco; as avaliações empíricas residem em [grupo08.md](grupo08.md). |
| **CHK-02** | Há fundamentação teórica formal sobre o método de inspeção de software e suas 6 fases canônicas? | Fagan (1976); Barbosa & Silva (2021, p. 286) | ✅ Sim | A Seção 2 detalha as etapas de Fagan (Planejamento a Acompanhamento) com linha formal de autoria de Vinicius Silva Araruna. |
| **CHK-03** | Os checklists abrangem todas as etapas desenvolvidas até o momento (Entregas 1 a 6)? | Plano de Ensino da Disciplina (*Sales, 2026*) | ✅ Sim | As Seções 4 a 9 cobrem exaustivamente as rubricas das Entregas 1 a 6 da disciplina de IHC. |
| **CHK-04** | Cada critério de verificação possui identificador único (ID) e referência explícita à fonte normativa canônica? | Gilb & Graham (1993) | ✅ Sim | Todas as tabelas contêm as colunas 'ID' e 'Origem / Fonte Normativa' indicando a literatura ou rubrica. |
| **CHK-05** | Todas as tabelas possuem chamadas formais explícitas antes ou junto de sua apresentação no texto? | Padrão Editorial FGA/UnB | ✅ Sim | 100% das 14 tabelas do documento possuem chamadas textuais prévias (zero tabelas órfãs). |
| **CHK-06** | A documentação está 100% livre de delimitadores matemáticos LaTeX crus, utilizando tipografia UTF-8 nativa? | Diretrizes de Renderização MkDocs Material | ✅ Sim | Todos os operadores e símbolos utilizam caracteres UTF-8 nativos (`×`, `+`, `−`, `—`, `≥`, `≤`). |

_Fonte: Elaborada pelos autores com base em Fagan (1976) e Sales (2026), 2026._

---

## 12. Histórico de Versão

A Tabela 14 documenta o histórico evolutivo deste artefato normativo.

**Tabela 14** — Histórico de versão do documento

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 12/10/2026 | Elaboração inicial das Listas de Verificação em branco (checklists normativos), estabelecendo o desacoplamento formal em relação ao relatório de autoavaliação (Issue #30), com fundamentação do método de Fagan (1976), templates das Entregas 1 a 3, modelo de heteroavaliação e checklist da técnica. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev), [Gustavo Antonio](https://github.com/gus-ant) |
| `2.0` | 27/10/2026 | Expansão dos instrumentos normativos de inspeção: incorporação dos checklists em branco da Entrega 4 (Tabela 9 - 12 critérios) e da Entrega 5 (Tabela 10 - 15 critérios), renumerando matrizes e alinhando com a heteroavaliação. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| `2.1` | 29/10/2026 | Inclusão da Seção 9 com o Checklist Normativo da Entrega 6 (Tabela 11 — 12 critérios para Relato do Protótipo de Papel e Planejamento de Alta Fidelidade) e correção da numeração sequencial das Tabelas 9 a 14 (#118). | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant) |

_Fonte: Elaborada pelos autores, 2026._

---

## 13. Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier / Campus, 2010.

[2] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[3] BEAUCHAMP, Tom L.; CHILDRESS, James F. *Principles of Biomedical Ethics*. 7. ed. New York: Oxford University Press, 2013.

[4] BRASIL. *Resolução nº 510, de 7 de abril de 2016*. Dispõe sobre as normas aplicáveis a pesquisas em Ciências Humanas e Sociais. Conselho Nacional de Saúde, Brasília, DF, 2016.

[5] BRASIL. *Lei nº 13.709, de 14 de agosto de 2018*. Lei Geral de Proteção de Dados Pessoais (LGPD). Diário Oficial da União, Brasília, DF, 2018.

[6] CARROLL, John M. *Making Use: Scenario-Based Design of Human-Computer Interactions*. Cambridge: MIT Press, 2000.

[7] COOPER, Alan. *The Inmates Are Running the Asylum: Why High Tech Products Drive Us Crazy and How to Restore the Sanity*. Indianapolis: Sams Publishing, 1999.

[8] FAGAN, Michael E. *Design and code inspections to reduce errors in program development*. IBM Systems Journal, v. 15, n. 3, p. 182-211, 1976.

[9] GILB, Tom; GRAHAM, Dorothy. *Software Inspection*. Wokingham: Addison-Wesley, 1993.

[10] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[11] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1994.

[12] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama (FGA), 2026.

[13] SOMMERVILLE, Ian. *Engenharia de Software*. 9. ed. São Paulo: Pearson Prentice Hall, 2011.

---

## Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Durante a organização textual das matrizes em Markdown e padronização visual das tabelas deste artefato, contou-se com o auxílio supervisionado de Inteligência Artificial Generativa (LLM). Toda a fundamentação teórica de inspeção de software, compilação de critérios normativos, referências bibliográficas ABNT e garantia de separação arquitetural foram concebidas, estruturadas e auditadas pelos discentes autores do Grupo 08.

# Design, Avaliação e Desenvolvimento (Nível 3 — Alta Fidelidade)

## Tabela de Contribuição e Transparência no Uso de Inteligência Artificial Generativa

A Tabela 1 apresenta a matriz de governança, responsabilidade autoral e declaração ética de uso de ferramentas de inteligência artificial generativa na concepção e estruturação do módulo de Design, Avaliação e Desenvolvimento de Nível 3 (Prototipação de Alta Fidelidade no Figma).

**Tabela 1** — Matriz de Contribuição do Hub de Nível 3 (Alta Fidelidade)

| Integrante | Atribuição no Artefato | Data | Horário | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :---: | :---: | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Autor Principal / Tech Lead**: Concepção metodológica do Nível 3 de Mayhew, estruturação do hub, fundamentação teórica de prototipagem em alta fidelidade no Figma, definição da tripartição funcional e rastreabilidade com os Níveis 1 e 2. | 31/10/2026 | 20:30 - 21:15 | Google Gemini (LLM) | Apoio na estruturação sintática de Markdown, conferência de hiperligações relativas e formatação de referências ABNT. |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Revisor por Par e Coautor**: Revisão da arquitetura de informação do hub, parametrização da Funcionalidade 2 (Eventos Presenciais) e verificação de alinhamento com o cronograma planejado. | 31/10/2026 | 21:00 - 21:20 | Google Gemini (LLM) | Apoio na validação de diagramas Mermaid e consistência com o Guia de Estilo. |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Revisor Metodológico**: Checagem de conformidade com os critérios do Plano de Ensino da disciplina e auditoria cruzada por pares. | 31/10/2026 | 21:10 - 21:25 | — | Revisão humana por pares e conferência de consistência. |

_Fonte: Elaborada por Vinicius Silva Araruna, Gustavo Antonio Rodrigues e Silva e Edvaldo Soares Brasileiro Filho, 2026._

---

## 1. Introdução ao Nível 3 de Deborah Mayhew (1999)

No **Ciclo de Vida da Engenharia de Usabilidade de Deborah Mayhew (1999)**, o processo de design centrado no usuário estrutura-se em três níveis iterativos e progressivos de refinamento:

1. **Nível 1 (Análise de Requisitos e Modelagem Conceitual):** Validação dos fluxos de trabalho e modelos mentais por meio de Análise de Tarefas (HTA e CMN-GOMS/KLM) e Storyboards;
2. **Nível 2 (Padrões de Design e Prototipação em Papel):** Experimentação da hierarquia visual, vocabulário de botões e navegação tátil por meio de protótipos físicos de baixa fidelidade manipulados com auxílio de um "Computador Humano" (*Snyder, 2003; Rettig, 1994*);
3. **Nível 3 (Design Detalhado e Prototipação Computacional de Alta Fidelidade):** Construção da interface digital interativa em conformidade com o Guia de Estilo, viabilizando ensaios empíricos de alta fidelidade com tempos de resposta de sistema, paleta cromática oficial, tipografia de produção e coleta de métricas psicométricas padronizadas (*Mayhew, 1999; Barbosa & Silva, 2021, Cap. 10 e 11; Rubin & Chisnell, 2008*).

Este espaço constitui o **Portal Central de Nível 3 do Grupo 08** na disciplina de Interação Humano-Computador (FGA0173 — Turma 01), ministrada pelo Prof. Dr. André Barros de Sales na Faculdade de Ciências e Tecnologias em Engenharia (FCTE/FGA) da Universidade de Brasília (UnB).

O foco analítico do projeto é o [Fórum Diolinux Plus](https://plus.diolinux.com.br), uma das maiores comunidades colaborativas de sistemas operacionais livres e código aberto no Brasil, implementada sobre a plataforma Discourse.

---

## 2. Fundamentação Teórica Canônica e Transição de Fidelidade

_Autor do Item Teórico: [Vinicius Silva Araruna](https://github.com/ViniciusA05)_

A evolução do Nível 2 para o Nível 3 marca uma mudança qualitativa profunda na dinâmica experimental de avaliação:

> *"O protótipo de alta fidelidade assemelha-se de forma próxima ao produto final em aparência visual, interatividade e comportamento. Ele permite que os usuários testem a interface operando componentes clicáveis em telas digitais, permitindo aferir a eficiência temporal real, respostas cognitivas e a satisfação do usuário em um ambiente que reproduz fielmente as condições operacionais do sistema."*  
> — **RUBIN, Jeffrey; CHISNELL, Dana.** *Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests*. 2. ed. Indianapolis: Wiley, 2008.

Segundo Barbosa e Silva (2021, p. 252-255), essa transição é caracterizada por dois fatores primordiais:
1. **Extinção do "Computador Humano":** Na avaliação de papel (Nível 2), um integrante da equipe manipula mecanicamente cartões e folhas sulfite em resposta aos toques do voluntário. No Nível 3, o protótipo digital construído no **Figma** assume autonomia interativa total: os disparos de clique, rolagem (*scroll*), estados de foco (*hover* e *focus*), janelas modais (*overlays*) e transições de tela (*Smart Animate*) são gerenciados pelo próprio motor da plataforma de design. O avaliador atua estritamente como **Facilitador e Observador**;
2. **Materialidade Visual e Conformidade com o Guia de Estilo:** Enquanto o protótipo de baixa fidelidade opera em traços manuais e papel monocromático para priorizar a arquitetura da informação, o protótipo de alta fidelidade implementa os tokens visuais consolidados no [Guia de Estilo](../../analise-requisitos/guia-de-estilo.md), incluindo contraste de cores no Dark Mode Diolinux Plus, espaçamentos em grid de 8px e tipografia em produção (`Inter` e `IBM Plex Mono`).

---

## 3. Tripartição Funcional da Equipe no Figma

Para garantir a cobertura equilibrada dos papéis de usuários e o isolamento de escopo sem sobreposição técnica, a equipe do Grupo 08 adotou a tripartição modular em três funcionalidades complementares, vinculadas diretamente às personas mapeadas no projeto. A Tabela 2 apresenta o mapeamento dessas funcionalidades para a prototipação interativa no Figma.

**Tabela 2** — Matriz de Funcionalidades e Atribuições de Alta Fidelidade no Figma

| Identificador | Funcionalidade Focada | Responsável Principal | Papel Funcional e Persona Primária | Ambiente e Ferramenta |
| :---: | :--- | :--- | :--- | :--- |
| **`CF01` / Tarefa 1** | *Criação e Publicação de Tópico de Dúvida com Tags, Formatação Markdown e Integração de IA Semântica de Pré-Envio* | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Estudante / Usuário Aprendiz em Linux** (*Lucas Mendonça*) | Claude Design (Anthropic) com assistência de Claude (Componentes interativos de Composer Split-View, Tags e Modal de IA) |
| **`CF02` / Tarefa 2** | *Criação e Gestão de Eventos Presenciais da Comunidade (Hub de Eventos, Mapa Interativo com Pin e Emissão de Ingressos)* | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Desenvolvedor / Organizador de Comunidade** (*Carlos Eduardo*) | Figma Education (Componentes de Mapa, Timepicker e Modais de Lotes) |
| **`CF03` / Tarefa 3** | *Grade de Disponibilidade e Agendamento de Dúvidas / Mentorias em Tempo Real* | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Estudante / Usuária Iniciante** (*Mariana Costa*) | Figma Education (Componentes de Grade Semanal e Confirmação de Mentorias) |

_Fonte: Elaborada por Vinicius Silva Araruna, Gustavo Antonio Rodrigues e Silva e Edvaldo Soares Brasileiro Filho, 2026._

---

## 4. Rastreabilidade Metodológica: Nível 1 → Nível 2 → Nível 3

A concepção dos artefatos de Nível 3 responde a uma cadeia rigorosa de rastreabilidade, onde as falhas de usabilidade diagnosticadas nos ensaios com o Protótipo de Papel da Entrega 6 foram convertidas em diretrizes ergonômicas de reprojeto incorporadas aos componentes do Figma. 

A Tabela 3 sintetiza a transição dos problemas identificados no Protótipo de Papel da Tarefa 1 para as soluções interativas do Nível 3.

**Tabela 3** — Rastreabilidade entre os Problemas do Protótipo de Papel e o Design de Alta Fidelidade

| ID do Problema no Papel | Evidência Diagnosticada na Avaliação Tátil (Nível 2) | Diretriz de Reprojeto para o Nível 3 (Figma) | Componente / Variante do Figma Afetada |
| :---: | :--- | :--- | :--- |
| **`PROB-PP-01`** | Usuário hesitou se deveria preencher as tags antes ou depois de redigir o texto da dúvida no formulário. | Estruturação de formulário aberto não-modal com hierarquia visual explícita e estados claros de foco (`outline: 2px solid #0084FF`). | *Composer Container* / Variante com campo ativo em foco |
| **`PROB-PP-02`** | Dúvida sobre a obrigatoriedade e fechamento de blocos de terminal com crases triplas no editor Markdown. | Inclusão de botão dedicado `</> Bash` com *tooltip* contextual interativo exibindo a sintaxe e inserção com um clique, refletida no painel de pré-visualização em tempo real (*live preview*). | *Toolbar Header* / Botão de Bloco de Código com Tooltip |
| **`PROB-PP-03`** | Insegurança com o rótulo secundário *"Publicar como está"* no modal móvel da IA de pré-envio, temendo descarte acidental. | Reformulação semântica do botão secundário para: ***"Ignorar sugestões e publicar imediatamente"*** (fundo `#2D2F36`), contrastando com a ação primária ***"Aplicar sugestões e publicar"*** (`#0084FF`). | *Modal AI Pre-flight* / Ações Primária e Secundária |
| **`PROB-PP-04`** | Desejo de adicionar de uma só vez todas as tags sugeridas pelo assistente inteligente sem cliques individuais. | Criação do botão de ação rápida em lote: ***"Adicionar todas as tags sugeridas (+3 tags)"***, otimizando o modelo KLM de interação motora. | *Modal AI Pre-flight* / Seletor de Tags em Lote |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

## 5. Estrutura e Navegação dos Artefatos de Nível 3

Os artefatos que compõem o Nível 3 estão organizados nas seguintes páginas de trabalho:

- **[Planejamento da Avaliação do Protótipo de Alta Fidelidade](planejamento-avaliacao.md):** Estruturado integralmente segundo as seis etapas do **Framework DECIDE** (*Preece et al., 2002; Barbosa & Silva, 2021*), detalhando objetivos formativos e somativos, perguntas investigativas (`PAF01` a `PAF08`), justificativa científica do método, matemática da amostra (`n` participantes baseada em *Nielsen & Landauer, 1993*), arquitetura de telas no Figma, métricas quantitativas vinculadas às Metas de Usabilidade e ao KLM, orçamento de custo zero (`R$ 0,00`), cronogramas alinhados com o planejamento da disciplina, instrumento psicométrico SUS (10 itens), aspectos éticos com Script Oral Literal do TCLE (< 60s), protocolo de teste-piloto e lista de verificação da técnica com 15 itens normativos.
- **[Planejamento do Relato dos Resultados da Alta Fidelidade](planejamento-relato-resultados.md):** Estabelece a estrutura analítica dos 9 tópicos normativos de *Barbosa & Silva (2021, p. 280–282)* que consolidará os achados empíricos dos testes da **Etapa 7**, contendo modelos de tabelas para cômputo do escore global SUS (`0 a 100`), matriz de problemas na **Escala de Severidade de Jakob Nielsen (0 a 4)**, hierarquia de priorização de reprojeto e lista de verificação com 9 critérios normativos.

---

## 6. Histórico de Versão

A Tabela 4 documenta o histórico de versões deste artefato, registrando modificações, datas, autores e revisores designados.

**Tabela 4** — Histórico de Versão do Hub de Nível 3

| Versão | Data | Descrição da Alteração | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 31/10/2026 | Concepção inicial do Hub de Nível 3 (Alta Fidelidade no Figma): fundamentação teórica de Mayhew e Rubin & Chisnell, extinção do Computador Humano, tripartição funcional e rastreabilidade Nível 1 → Nível 2 → Nível 3. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

## 7. Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier, 2010.

[2] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[3] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1994.

[4] RETTIG, Marc. Prototyping for tiny fingers. *Communications of the ACM*, v. 37, n. 4, p. 21–27, 1994.

[5] RUBIN, Jeffrey; CHISNELL, Dana. *Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests*. 2. ed. Indianapolis: Wiley, 2008.

[6] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama, 2026.

[7] SNYDER, Carolyn. *Paper Prototyping: The Fast and Easy Way to Design and Refine User Interfaces*. San Francisco: Morgan Kaufmann, 2003.

---

## 8. Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Em observância às diretrizes pedagógicas da disciplina e aos padrões de transparência na produção acadêmica, registra-se que este artefato contou com o auxílio da ferramenta de inteligência artificial generativa **Google Gemini** (modelo Gemini 1.5 Pro / Advanced). A ferramenta foi utilizada exclusivamente para acelerar a estruturação de tabelas na sintaxe Markdown, revisão da consistência de hiperligações relativas entre diretórios e formatação de referências segundo a ABNT NBR 6023:2018. Toda a conceituação teórica, parametrização dos fluxos no Figma, decisões metodológicas de tripartição e curadoria técnica foram integralmente concebidas, redigidas e validadas pelos discentes integrantes do Grupo 08.

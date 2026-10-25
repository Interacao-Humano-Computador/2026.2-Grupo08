# Metodologia de Pesquisa em Interação Humano-Computador

## Tabela de Contribuição

| Integrante | Contribuição no Artefato | Data | Ferramenta de IA e Contribuição |
| :--- | :--- | :---: | :--- |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Revisão metodológica, validação da triangulação e conferência da amostragem | 11/10/2026 | Suporte na formatação Markdown e padronização tabular sob supervisão dos discentes |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | Apoio na caracterização da Tríade de métodos e validação das limitações do estudo | 11/10/2026 | Suporte na formatação Markdown e padronização tabular sob supervisão dos discentes |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Elaboração integral do documento, fundamentação epistemológica e redação da matriz metodológica | 11/10/2026 | Suporte na formatação Markdown e padronização tabular sob supervisão dos discentes |

---

## 1. Introdução

A pesquisa em Interação Humano-Computador (IHC) exige métodos sistemáticos de investigação empírica para que as decisões de design de interface e engenharia de usabilidade sejam orientadas por evidências verificáveis sobre os usuários, seus modelos mentais e seus contextos de uso. Este artefato documenta a fundamentação metodológica formal que rege todas as atividades de elicitação de requisitos, modelagem comportamental e avaliações conduzidas pelo Grupo 08 no projeto sobre o **Fórum Diolinux Plus** (Discourse), na disciplina de Interação Humano-Computador (FGA0173 — Turma 01 / 2026.2), ministrada pelo Prof. Dr. André Barros de Sales na Faculdade UnB Gama da Universidade de Brasília (FGA/UnB).

A abordagem investigativa da equipe foi concebida para responder rigorosamente às exigências pedagógicas do Plano de Ensino da disciplina (*Sales, 2026*), que demanda o emprego coordenado de no mínimo três técnicas distintas de levantamento de dados na fase de Análise de Requisitos.

---

## 2. Fundamentação Epistemológica da Triangulação Multimétodo

_Autor do Item Teórico: [Vinicius Silva Araruna](https://github.com/ViniciusA05)_

A metodologia adotada fundamenta-se no princípio da **triangulação metodológica**, amplamente consolidado nas obras de Creswell (2014) e Barbosa e Silva (2021, p. 132-138). Em investigações científicas de sistemas interativos complexos, nenhum método isolado de coleta é autossuficiente para capturar com fidelidade a totalidade da experiência do usuário:

1. **Técnicas Verbais e Introspectivas:** Revelam intenções, percepções subjetivas e vocabulário espontâneo, mas podem apresentar vieses de recordação ou racionalização retrospectiva do participante;
2. **Registros Documentais e Operacionais:** Evidenciam o comportamento agregado real em escala censitária, mas não explicam as motivações cognitivas, barreiras emocionais ou confusões subjacentes que levaram àquele comportamento;
3. **Dinâmicas Criativas de Grupo:** Aceleram a geração e o debate de hipóteses de design, mas refletem preponderantemente a visão preliminar interna da equipe de desenvolvimento.

A triangulação consiste na convergência de dados obtidos por diferentes fontes, perspectivas e instrumentos para corroborar as mesmas conclusões. Ao cruzar múltiplas abordagens sobre o mesmo objeto de estudo, as forças de um método compensam as limitações intrínsecas dos outros, elevando a validade interna e a robustez dos requisitos de IHC derivados (*Creswell, 2014*).

---

## 3. Caracterização da Abordagem de Pesquisa

A investigação conduzida pelo Grupo 08 classifica-se sob três dimensões metodológicas complementares:

1. **Quanto à Natureza dos Dados:** Pesquisa **predominantemente qualitativa**, voltada à compreensão detalhada dos modelos mentais, dificuldades operacionais e estratégias de recuperação de erros empregadas por estudantes novatos no Fórum Diolinux Plus;
2. **Quanto aos Objetivos:** Pesquisa **exploratória e descritiva**, orientada a mapear os fluxos de tarefas mais críticos e formular diretrizes de redesign ergonômico fundamentadas em metas quantificáveis de usabilidade;
3. **Quanto aos Procedimentos Técnicos:** Abordagem **multimétodo convergente**, combinando técnicas diretas (interativas com usuários) e indiretas (análise de artefatos e métricas públicas pré-existentes do ecossistema Discourse).

---

## 4. A Tríade Metodológica Oficial do Grupo 08

Para assegurar total auditabilidade empírica e conformidade com as diretrizes da disciplina sem recorrer a coletas artificiais ou dados não auditáveis, o Grupo 08 estruturou a sua investigação sobre a **Tríade Oficial de Elicitação de Requisitos**. A Tabela 1 apresenta a matriz comparativa e o papel funcional de cada técnica no projeto.

**Tabela 1** — Matriz comparativa da Tríade Metodológica de Elicitação de Requisitos (Grupo 08)

| Técnica de Elicitação | Natureza do Método | Fonte de Dados Primária | Papel Metodológico no Projeto | Vantagens Centrais | Limitações Mitigadas pela Triangulação | Artefato Vinculado no MkDocs |
| :--- | :---: | :--- | :--- | :--- | :--- | :--- |
| **1. Brainstorming da Equipe** | Qualitativa / Criativa | Conhecimento tácito e observações dos integrantes do Grupo 08 | Geração inicial e divergente de hipóteses sobre dores de usabilidade, barreiras de terminal e requisitos preliminares da plataforma | Rapidez na geração de ideias, identificação rápida de pontos de atrito no onboarding e consenso da equipe | Visão interna da equipe; mitigada pela checagem contra usuários reais nas entrevistas | [Brainstorming](brainstorming.md) |
| **2. Análise Documental** | Quantitativa e Qualitativa / Não-Intrusiva | Instância Discourse oficial do Diolinux Plus (página `/about`, regras da comunidade e tópicos públicos) | Mapeamento censitário da realidade da comunidade: 38.500+ usuários cadastrados, 463.000+ mensagens, mecânica antispam de Trust Levels (TL0 a TL4) e amostragem de tópicos reais | Dados empíricos em escala real, ausência de interferência do pesquisador no comportamento do usuário e estabilidade histórica | Não permite arguir o usuário sobre suas motivações emocionais; mitigada pelas entrevistas semiestruturadas | Incorporada no [Perfil do Usuário](perfil-usuario.md) e [Tarefas](analise-tarefas.md) |
| **3. Entrevistas Semiestruturadas** | Qualitativa em Profundidade / Empírica Direta | Estudantes universitários representativos do público novato/aprendiz em Linux (P1 e P2) | Investigação direta e detalhada da experiência do usuário, atitudes frente a erros de linha de comando, hábitos de busca e uso do Discobot, com TCLE gravado nos primeiros 60 s | Riqueza de detalhes contextuais, flexibilidade para aprofundar dores reais e validação empírica presencial dos modelos mentais | Amostra qualitativa reduzida; mitigada pela corroboração estatística dos dados secundários do IBGE/Cetic.br e métricas do Discourse | [Entrevistas](entrevistas.md) |

_Fonte: Elaborada pelos autores com base em Barbosa e Silva (2021) e Creswell (2014), 2026._

Conforme demonstrado na Tabela 1, cada técnica desempenha uma função bem delimitada no ciclo de vida da engenharia de usabilidade, evitando redundâncias e garantindo a solidez dos requisitos consolidados.

---

## 5. Perfil Amostral e Critérios de Recrutamento

Em perfeita consonância com o foco analítico delimitado na governança do projeto, as investigações empíricas diretas priorizam estritamente o papel funcional central: **Estudante / Usuário Aprendiz** (iniciante ou intermediário em Linux). A Tabela 2 sintetiza os critérios de inclusão e a caracterização amostral dos participantes recrutados para as sessões qualitativas de entrevista.

**Tabela 2** — Critérios de seleção e caracterização amostral dos participantes das entrevistas

| Critério de Amostragem | Especificação Metodológica | Justificativa Teórica em IHC |
| :--- | :--- | :--- |
| **Perfil Acadêmico** | Estudantes de graduação de cursos de tecnologia e engenharia da UnB (Engenharia de Software / FGA e Ciência da Computação / Darcy Ribeiro) | Representam o público universitário que utiliza distribuições Linux para desenvolvimento acadêmico e busca auxílio em comunidades técnicas. |
| **Nível de Familiaridade** | Usuários iniciantes a intermediários em distribuições Linux baseadas em Debian/Ubuntu/Fedora | Público prioritário da comunidade Diolinux Plus e persona primária do projeto; grupo que mais sofre com barreiras de terminal e jargões. |
| **Histórico de Dúvidas** | Usuários que já precisaram recorrer a fóruns, Google ou documentações para resolver falhas de configuração de software no Linux | Garante que os participantes possuam experiências reais prévias com busca de soluções e publicação de problemas técnicos. |
| **Tamanho da Amostra (N = 2)** | Amostragem intencional por tipicidade com dois participantes em profundidade (P1 e P2) | Em pesquisa qualitativa semiestruturada em IHC, pequenas amostras de usuários típicos são altamente eficazes para revelar os principais problemas de usabilidade e modelos mentais (*Nielsen, 1994; Barbosa & Silva, 2021*). |

_Fonte: Elaborada pelos autores, 2026._

Conforme apresentado na Tabela 2, os critérios amostrais garantem que os perfis recrutados reflitam as reais demandas de suporte no Fórum Diolinux Plus.

!!! note "Nota de Governança e Transparência Empírica"
    A equipe mantém estrito compromisso ético e acadêmico de não apresentar dados simulados ou fictícios. A consolidação das transcrições integrais e o upload definitivo das gravações audiovisuais estão sob custódia dos pesquisadores executores responsáveis (Gustavo Antonio e Edvaldo Soares), sendo devidamente integrados conforme os registros brutos forem formalmente homologados.

---

## 6. Rigor Ético e Proteção aos Participantes

Toda interação com participantes humanos subordina-se estritamente às diretrizes da **Resolução CNS nº 510/2016** (pesquisas em Ciências Humanas e Sociais) e da **Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018)**. Conforme detalhado no artefato de [Aspectos Éticos e TCLE](aspectos-eticos.md):

1. **Consentimento Prévio Gravado:** É obrigatória a leitura do script oral do TCLE e a obtenção de consentimento verbal registrado em áudio e vídeo nos primeiros 60 segundos de cada chamada síncrona;
2. **Anonimização Estrita:** Os participantes são identificados por códigos neutros (`P1`, `P2`), sem divulgação de nomes civis, e-mails ou dados sensíveis;
3. **Voluntariedade e Custódia:** A participação é gratuita e facultativa, com direito a revogação a qualquer momento sem penalidades, com gravações hospedadas em modo Não Listado no YouTube para avaliação exclusiva do corpo docente.

---

## 7. Limitações do Estudo e Mitigações Adotadas

A Tabela 3 documenta com transparência científica as ameaças à validade e limitações operacionais da pesquisa, indicando as respectivas estratégias de mitigação implementadas pela equipe.

**Tabela 3** — Limitações metodológicas identificadas e estratégias de mitigação em IHC

| Limitação / Ameaça à Validade | Descrição do Desafio | Estratégia de Mitigação Implementada pelo Grupo 08 |
| :--- | :--- | :--- |
| **Tamanho Amostral Qualitativo Reduzido** | A realização de entrevistas em profundidade com N = 2 participantes limita a generalização estatística dos achados para a totalidade da população usuária. | Triangulação com dados demográficos secundários oficiais do **IBGE (PNAD Contínua)** e **Cetic.br (TIC Domicílios)** no artefato de Perfil de Usuário, somados às métricas censitárias de 38.500+ usuários na Análise Documental. |
| **Viés de Desejabilidade Social** | O participante de uma entrevista pode omitir dificuldades para não parecer inexperiente perante o entrevistador. | Aplicação de script oral desarmante esclarecendo enfaticamente que *"estamos avaliando a plataforma, e não os seus conhecimentos ou habilidades pessoais"*. |
| **Restrição Temporal do Semestre Acadêmico** | Prazos condensados do calendário letivo da UnB (2026.2) inviabilizam estudos longitudinais com usuários ao longo de vários meses. | Foco analítico restrito às 3 tarefas de maior impacto operacional e priorização das barreiras enfrentadas no nível de entrada (Trust Level 0 e 1 do Discourse). |

_Fonte: Elaborada pelos autores, 2026._

A Tabela 3 evidencia o compromisso com o rigor científico, mapeando os limites de inferência da pesquisa e estabelecendo contrapartidas que sustentam a validade dos requisitos elicitados.

---

## 8. Lista de Verificação da Técnica (Metodologia de Pesquisa)

A Tabela 4 apresenta a autoavaliação da conformidade metodológica deste artefato frente às exigências do Plano de Ensino da disciplina de IHC (*Sales, 2026*) e da literatura científica canônica (*Creswell, 2014; Barbosa & Silva, 2021*).

**Tabela 4** — Lista de verificação da metodologia de pesquisa

| ID | Questão Avaliada | Origem / Fonte Normativa | Conforme? | Resposta Autoexplicativa e Evidência no Artefato |
| :---: | :--- | :--- | :---: | :--- |
| **MET-01** | O documento fundamenta a abordagem de pesquisa na literatura científica canônica de IHC e Ciências Sociais? | Creswell (2014); Barbosa & Silva (2021) | ✅ Sim | As Seções 2 e 3 conceituam e justificam a abordagem qualitativa, exploratória e a triangulação metodológica. |
| **MET-02** | São apresentadas e coordenadas no mínimo 3 técnicas de elicitação na Análise de Requisitos? | Plano de Ensino de IHC (Sales, 2026, Entrega 2, Item 8) | ✅ Sim | A Tabela 1 detalha a Tríade Metodológica: Brainstorming presencial, Análise Documental do Discourse e Entrevistas Semiestruturadas. |
| **MET-03** | A seleção das técnicas justifica como as fraquezas de um método são compensadas pelas forças dos demais? | Princípio da Triangulação (Creswell, 2014) | ✅ Sim | A Tabela 1 explicita as limitações mitigadas e a complementariedade entre dados censitários e percepções em profundidade. |
| **MET-04** | O tamanho amostral e os critérios de recrutamento dos participantes estão explicitados e fundamentados? | Nielsen (1994); Barbosa & Silva (2021) | ✅ Sim | A Tabela 2 documenta os 4 critérios de seleção da amostragem intencional focada no Estudante / Aprendiz em Linux. |
| **MET-05** | O artefato explicita os procedimentos éticos e de proteção à privacidade aplicados aos participantes? | Resolução CNS nº 510/2016; LGPD | ✅ Sim | A Seção 6 resume as garantias éticas, o script oral literal de 60 s e a custódia segura vinculada a `aspectos-eticos.md`. |
| **MET-06** | São declaradas com transparência as limitações do estudo e ameaças à validade científica dos resultados? | Critérios de Rigor Científico em IHC | ✅ Sim | A Tabela 3 identifica 3 limitações operacionais reais e as respectivas estratégias de mitigação adotadas pela equipe. |

_Fonte: Elaborada pelos autores com base nas rubricas de IHC (Sales, 2026) e Creswell (2014), 2026._

---

## 9. Histórico de Versão

A Tabela 5 documenta o histórico de versões deste artefato.

**Tabela 5** — Histórico de versão do documento

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :--- |
| `1.0` | 11/10/2026 | Criação do artefato de Metodologia de Pesquisa, fundamentação científica da triangulação multimétodo (Creswell, 2014; Barbosa & Silva, 2021), estruturação da Tríade de Métodos e checklist de conformidade (Issue #40) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |

_Fonte: Elaborada pelos autores, 2026._

---

## 10. Referências Bibliográficas

[1] BABBIE, Earl. *The Practice of Social Research*. 13. ed. Belmont: Wadsworth Cengage Learning, 2012.

[2] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[3] CRESWELL, John W. *Research Design: Qualitative, Quantitative, and Mixed Methods Approaches*. 4. ed. Thousand Oaks: SAGE Publications, 2014.

[4] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[5] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1994.

[6] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama (FGA), 2026.

---

## 11. Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Durante a estruturação do layout em Markdown e formatação das tabelas deste artefato, foi utilizado suporte supervisionado de Inteligência Artificial Generativa (LLM). Toda a fundamentação epistemológica, análise metodológica, critérios de triangulação e definições amostrais foram concebidas, revisadas e validadas integralmente pelos autores.

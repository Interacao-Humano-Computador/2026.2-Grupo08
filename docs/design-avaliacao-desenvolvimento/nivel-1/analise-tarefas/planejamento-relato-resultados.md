# Planejamento do Relato dos Resultados da Avaliação da Análise de Tarefas

## Tabela de Contribuição

A Tabela 1 apresenta a atribuição de responsabilidades na elaboração e revisão da estrutura do relato de resultados da Análise de Tarefas (HTA e GOMS).

**Tabela 1** — Matriz de Contribuição do Planejamento do Relato da Análise de Tarefas

| Integrante | Atribuição | Data | Horário | Ferramenta de IA e Contribuição |
| :--- | :--- | :---: | :---: | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Autor Principal**: Estruturação formal do relatório de resultados de tarefas, definição dos tópicos normativos, matriz de registro de discrepâncias de modelo mental com gravidade de Nielsen e diretrizes de refatoração do HTA (Issue #61). | 13/10/2026 | 21:30 - 22:45 | LLM (Antigravity): apoio na estruturação das matrizes Markdown e checagem de rigor normativo. |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Revisor Metodológico e Autor de Tarefa**: Alinhamento da Tarefa 2 (Criação de Eventos Presenciais — CF02) e conformidade DECIDE (#104). | 22/10/2026 | 22:45 - 23:15 | Nenhuma ferramenta utilizada (revisão humana por pares). |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Revisor Designado**: Auditoria de compatibilidade com os nós folha da árvore de HTA e critérios do Plano de Ensino. | 13/10/2026 | 23:15 - 23:45 | Nenhuma ferramenta utilizada (revisão humana por pares). |

_Fonte: Vinicius Silva Araruna, Gustavo Antonio Rodrigues e Silva e Edvaldo Soares Brasileiro Filho, 2026._

---

## 1. Introdução e Objetivo do Artefato

No desenvolvimento de sistemas centrado no usuário e na Engenharia de Usabilidade (Barbosa & Silva, 2021; Mayhew, 1999), a análise de tarefas desempenha papel fundacional na modelagem do comportamento humano e na definição das estruturas operacionais da interface. Avaliar esses modelos no Nível 1 permite diagnosticar inconsistências entre o modelo conceitual formulado pelos projetistas e o modelo mental real dos usuários, antes do desenvolvimento de telas e protótipos interativos.

Este artefato estabelece a estrutura formal, os campos analíticos e as matrizes tabulares que consolidarão os resultados da futura **avaliação formativa da Análise de Tarefas (HTA e GOMS/KLM) do Fórum Diolinux Plus**, atendendo integralmente ao **Item 7 da Apresentação da Etapa 4** do Plano de Ensino da disciplina (Prof. Dr. André Barros de Sales, 2026).

---

## 2. Estrutura Canônica do Relatório de Resultados da Análise de Tarefas

Conforme preconizado pela literatura clássica de IHC (Barbosa & Silva, 2021, p. 280-282; Mayhew, 1999), o relatório que consolidará os dados colhidos em campo conterá obrigatoriamente as seguintes seções estruturais:

1. **Objetivos da Avaliação:** Síntese dos objetivos de usabilidade e metas de investigação cognitiva pactuadas para os modelos de tarefas;
2. **Metodologia de Avaliação Empregada:** Descrição da abordagem de investigação empírica qualitativa por meio de entrevistas semiestruturadas com inspeção mediada dos diagramas HTA e tabelas de objetivos/planos;
3. **Número e Perfil de Avaliadores e Participantes:** Dados demográficos consolidados dos voluntários recrutados (alinhados ao Perfil 1: Estudante Aprendiz de Linux) e identificação da dupla de avaliadores (entrevistador e observador);
4. **Tarefas Investigadas e Cenários de Uso:** Contextualização das três tarefas canônicas analisadas com os participantes:
   - **Tarefa 1:** Criação e publicação de tópico de dúvida técnica com formatação Markdown e seleção de tags (Vinicius Silva Araruna);
   - **Tarefa 2:** Criação de Eventos Presenciais da Comunidade — CF02 (Gustavo Antonio);
   - **Tarefa 3:** Busca avançada com filtros facetados e identificação de solução aceita (Edvaldo Soares).
5. **Síntese dos Dados Coletados e Análise de Discrepâncias:** Consolidação qualitativa das respostas às perguntas investigativas do framework DECIDE;
6. **Tabela Estruturada de Problemas e Discrepâncias de Modelo Mental:** Registro tabular minucioso das falhas de fluxo, subobjetivos omitidos e inadequações de planos lógicos, classificados pela **Escala de Severidade de Nielsen (0 a 4)**;
7. **Propostas e Recomendações de Refatoração:** Sugestões práticas de alteração dos diagramas HTA e insumos de requisitos para os protótipos de baixa fidelidade (Nível 2);
8. **Gravações em Vídeo das Sessões e Consentimento (TCLE):** Links para os registros audiovisuais das sessões no YouTube (modo Não Listado) com evidência da leitura literal do Script Oral do TCLE;
9. **Cláusula de Isolamento dos Resultados do Teste-Piloto:** Declaração formal comprovando que os dados do ensaio piloto não foram computados nos resultados definitivos.

---

## 3. Detalhamento dos Tópicos Normativos do Relatório

### 3.1 Objetivos da Avaliação

O relatório final deverá iniciar declarando explicitamente quais objetivos foram confrontados em campo:
- **Adequação do Modelo Mental:** Verificar se a decomposição em subobjetivos reflete a ordem natural e a lógica cognitiva adotada pelo usuário para atingir seus fins;
- **Clareza dos Planos de Execução:** Avaliar se os planos lógicos (1 > 2, 1 / 2, laços e paralelismos) são intuitivos ou se induzem a comportamentos de erro;
- **Completude Operacional:** Mapear operações intermediárias ou passos essenciais que tenham sido omitidos na modelagem preliminar;
- **Eficácia dos Feedbacks:** Confirmar se as condições de término e sinais visuais de sucesso identificados no HTA são suficientes para gerar convicção de conclusão no utilizador.

### 3.2 Método de Avaliação Empregado

O método adotado é a **investigação empírica qualitativa com usuários reais por meio de Entrevistas Semiestruturadas** (Barbosa & Silva, 2021). A entrevista apoia-se no compartilhamento de tela com visualização assistida dos diagramas HTA e tabelas textuais de tarefas. O avaliador conduz o participante pelo fluxo passo a passo utilizando o protocolo de verbalização concomitante (*think-aloud*), permitindo que o participante aponte discordâncias na sequência de ações.

A avaliação da Análise de Tarefas é conduzida **imediatamente após a avaliação do Storyboard** na mesma sessão, aproveitando o contexto narrativo recém-validado para aprofundar na análise operacional.

### 3.3 Número e Perfil dos Avaliadores e Participantes

A Tabela 2 apresenta o modelo de síntese demográfica que será preenchido no relatório final de resultados.

**Tabela 2** — Modelo de Caracterização dos Participantes da Avaliação de Tarefas *(A preencher pós-sessões)*

| Código | Nome Social / Iniciais | Idade | Curso / Ocupação | Nível no Linux | Tarefa(s) Avaliada(s) | Data da Sessão | Duração |
| :---: | :--- | :---: | :--- | :---: | :--- | :---: | :---: |
| **P1** | *[Nome do Participante 1]* | *[Anos]* | Graduando UnB | Iniciante | Tarefa 1 (Markdown e Tags) | 19/10/2026 | *[Min]* |
| **P2** | *[Nome do Participante 2]* | *[Anos]* | Graduando UnB | Intermediário | Tarefa 2 (Criação de Eventos Presenciais) | 20/10/2026 | *[Min]* |
| **P3** | *[Nome do Participante 3]* | *[Anos]* | Graduando UnB | Iniciante | Tarefa 3 (Busca Avançada) | 21/10/2026 | *[Min]* |
| **P4** | *[Nome do Participante 4]* | *[Anos]* | Graduando UnB | Intermediário | Tarefas 1 e 3 (Reserva / Validação Cruzada) | 22/10/2026 | *[Min]* |

_Fonte: Vinicius Silva Araruna, 2026._

---

## 4. Matriz Tabular de Registro de Problemas e Discrepâncias de Tarefa

A Tabela 3 apresenta o modelo formal padronizado para catalogação de problemas estruturais de tarefas, vinculando cada ocorrência à severidade heurística de Nielsen (1994).

**Tabela 3** — Modelo de Registro de Problemas na Análise de Tarefas *(A preencher pós-sessões)*

| ID do Problema | Tarefa / Nó HTA Afetado | Descrição da Discrepância / Erro de Modelo Mental | Tipo de Inconsistência Estrutural | Severidade (Nielsen) | Recomendação de Refatoração no HTA |
| :---: | :--- | :--- | :---: | :---: | :--- |
| **PROB-HTA-01** | *[Ex: Tarefa 1 — Subobjetivo 1.2]* | *[Descrição do relato do usuário indicando atrito ou incompreensão]* | *[Subobjetivo Omitido / Ordem Incorreta / Feedback Insuficiente]* | *[0 a 4]* | *[Ação concreta de alteração na árvore HTA ou tabela analítica]* |
| **PROB-HTA-02** | *[Ex: Tarefa 2 — Plano 2]* | *[Exemplo: Participante considerou o fluxo de comandos com bot desnecessário]* | *[Plano Lógico Desajustado]* | *[0 a 4]* | *[Inserir plano de seleção condicional permitindo ignorar o bot]* |
| **PROB-HTA-03** | *[Ex: Tarefa 3 — Subobjetivo 2.1]* | *[Exemplo: Participante não localizou o filtro por status de resolução]* | *[Operação Faltante]* | *[0 a 4]* | *[Modelar nó explícito para acionamento de filtro facetado de solução]* |

_Fonte: Vinicius Silva Araruna com base em Barbosa e Silva (2021) e Nielsen (1994), 2026._

---

## 5. Diretrizes para Refatoração do HTA e Insumos para Prototipação

Os problemas registrados na Tabela 3 subsidiarão duas frentes de atuação de engenharia de IHC:

1. **Refatoração dos Modelos HTA (Nível 1):** Atualização dos diagramas em árvore e das tabelas textuais de tarefas para espelhar as correções pactuadas com os usuários (ex: inversão de precedência em planos 1 > 2, acréscimo de alternativas de seleção 1 / 2 e revisão dos critérios de parada p × c);
2. **Insumos para a Prototipação em Papel (Nível 2):** Conversão imediata dos nós de ação elementar validados no HTA em botões, campos de texto e caixas de diálogo na confecção dos protótipos de papel para a Entrega 5 (27/10/2026).

---

## 6. Cláusula Metodológica Obrigatória: Isolamento do Teste-Piloto

Em cumprimento estrito ao **Item 12 da Apresentação da Etapa 4** do Plano de Ensino da disciplina, declara-se solenemente:

> ⚠️ **CLÁUSULA METODOLÓGICA DE BLINDAGEM DO TESTE-PILOTO:**  
> Os dados, verbalizações, comportamentos e respostas coletados durante a execução do **Teste-Piloto de Nível 1** (agendado para 17/10/2026) **NÃO SERÃO COMPUTADOS NEM INTEGRADOS AOS RESULTADOS FINAIS DA AVALIAÇÃO DA ANÁLISE DE TAREFAS**. O ensaio piloto serve estritamente para avaliar a instrumentação da equipe (clareza das perguntas do roteiro, tempos de resposta, estabilidade de rede e leitura prévia do TCLE).

---

## 7. Modelo de Registros Audiovisuais das Sessões

A Tabela 4 apresenta o modelo para documentar as gravações oficiais das sessões de tarefas conduzidas via Google Meet e hospedadas no YouTube (modo Não Listado).

**Tabela 4** — Modelo de Registro Audiovisual das Sessões de Tarefas *(A preencher pós-sessões)*

| Sessão | Participante | Entrevistador | Data e Horário | Duração da Gravação | Link do Vídeo (YouTube — Não Listado) |
| :---: | :---: | :--- | :---: | :---: | :--- |
| **ST01** | P1 | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | 19/10/2026 14:00 | *[Minutos]* | [Acessar Gravação da Sessão ST01](https://youtu.be/placeholder-st01) |
| **ST02** | P2 | [Gustavo Antonio](https://github.com/gus-ant) | 20/10/2026 15:00 | *[Minutos]* | [Acessar Gravação da Sessão ST02](https://youtu.be/placeholder-st02) |
| **ST03** | P3 | [Edvaldo Soares](https://github.com/PajeMurici-dev) | 21/10/2026 16:00 | *[Minutos]* | [Acessar Gravação da Sessão ST03](https://youtu.be/placeholder-st03) |
| **ST04** | P4 | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | 22/10/2026 14:00 | *[Minutos]* | [Acessar Gravação da Sessão ST04](https://youtu.be/placeholder-st04) |

_Fonte: Vinicius Silva Araruna, 2026._

---

## 8. Lista de Verificação da Técnica (Planejamento do Relato de Tarefas)

A Tabela 5 apresenta o checklist de autoavaliação da estrutura do relatório de resultados frente aos critérios normativos.

**Tabela 5** — Lista de Verificação do Planejamento do Relato de Resultados da Análise de Tarefas

| Item / Critério Avaliado | Fonte Normativa | Conforme? | Resposta Autoexplicativa e Evidência no Documento |
| :---: | :--- | :---: | :--- |
| **1** | A estrutura do relatório define os objetivos gerais e formativos da avaliação de tarefas? | Plano de Ensino (Item 7); Barbosa & Silva (2021) | ✅ Sim | A Seção 3.1 explicita as metas de conformidade de modelo mental, clareza de planos e completude. |
| **2** | Há descrição detalhada do método de entrevista semiestruturada e inspeção mediada do HTA? | Plano de Ensino (Item 7) | ✅ Sim | A Seção 3.2 define o método de condução assistida com verbalização concomitante (*think-aloud*). |
| **3** | A estrutura contempla o número, papéis e perfil demográfico dos participantes? | Plano de Ensino (Item 7) | ✅ Sim | A Seção 3.3 e a Tabela 2 preparam a caracterização demográfica no Perfil 1 (Estudante/Linux). |
| **4** | As tarefas avaliadas pelos participantes estão descritas e contextualizadas? | Plano de Ensino (Item 7) | ✅ Sim | A Seção 2 discrimina formalmente as três tarefas (Markdown, Criação de Eventos Presenciais e Busca). |
| **5** | Há modelo estruturado para consolidação dos problemas com severidade heurística de Nielsen? | Plano de Ensino (Item 7 e 13); Nielsen (1994) | ✅ Sim | A Tabela 3 vincula cada problema à escala de severidade (0 a 4) e tipo de inconsistência estrutural. |
| **6** | O documento prevê recomendações práticas de refatoração para os modelos de tarefas? | Plano de Ensino (Item 7); Barbosa & Silva (2021) | ✅ Sim | A Seção 5 detalha as diretrizes de atualização do HTA e transferência de requisitos para protótipos de papel. |
| **7** | Há cláusula explícita assegurando que os resultados do teste-piloto não serão computados? | Plano de Ensino (Item 12) | ✅ Sim | A Seção 6 inclui a cláusula formal obrigatória de isolamento total dos dados do ensaio piloto. |
| **8** | O planejamento prevê a publicação dos registros audiovisuais (YouTube Não Listado) com TCLE? | Plano de Ensino (Item 6 e 7); CNS 510/2016 | ✅ Sim | A Seção 7 e a Tabela 4 preveem links de gravação em 1080p com consentimento verbal nos primeiros 60s. |
| **9** | A estrutura contempla o registro do cronograma executado das sessões com datas e duração real? | Plano de Ensino (Item 7 e 8) | ✅ Sim | A Tabela 4 contempla campos de data, horário e duração real de cada entrevista conduzida. |
| **10** | O modelo de consolidação prevê a priorização na resolução dos gargalos operacionais? | Plano de Ensino (Item 13); Nielsen (1994) | ✅ Sim | A Tabela 3 garante que problemas de alta severidade (3 e 4) sejam priorizados no redesign do HTA. |

_Fonte: Vinicius Silva Araruna com base em Barbosa e Silva (2021) e Sales (2026), 2026._

---

## 9. Histórico de Versão

A Tabela 6 documenta o histórico evolutivo deste artefato.

**Tabela 6** — Histórico de Versão

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 13/10/2026 | Elaboração inicial do planejamento do relato dos resultados da avaliação da Análise de Tarefas (Issue #61), com objetivos de tarefas, caracterização de participantes (Tabela 2), matriz de problemas com severidade de Nielsen (Tabela 3), diretrizes de refatoração, cláusula de isolamento do piloto e lista de verificação com 10 itens normativos. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| `1.1` | 22/10/2026 | Atualização das seções 2, 3.3 e 3.4 alinhando a Tarefa 2 à Criação de Eventos Presenciais (CF02). | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |

_Fonte: Vinicius Silva Araruna, 2026._

---

## 10. Referências Bibliográficas (ABNT)

- ANNETT, John; DUNCAN, Keith D. *Task analysis and training design*. Occupational Psychology, v. 41, pp. 211–221, 1967.
- BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. *Interação Humano-Computador e Experiência do Usuário*. Rio de Janeiro: Autopublicação, 2021.
- MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.
- NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann Publishers, 1994.
- SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama (FGA), 2026.

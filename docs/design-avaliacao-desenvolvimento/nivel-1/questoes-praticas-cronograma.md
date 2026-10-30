# Questões Práticas e Cronograma da Avaliação de Nível 1

## Tabela de Contribuição

A Tabela 1 apresenta as responsabilidades de autoria e revisão deste planejamento prático e operacional.

**Tabela 1** — Matriz de Contribuição do Planejamento Prático

| Integrante | Atribuição | Data | Horário | Ferramenta de IA e Contribuição |
| :--- | :--- | :---: | :---: | :--- |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Autor Principal**: Detalhamento do recrutamento, dimensionamento e consolidação das tabelas de cronograma, atualizado com alinhamento da Tarefa/Storyboard 2 à Criação de Eventos Presenciais — CF02 (Issue #104). | 22/10/2026 | 19:30 - 21:00 | Google Gemini (LLM): apoio na estruturação das matrizes Markdown e checagem de referências. |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Revisor Designado**: Conferência da compatibilidade com o cronograma de Análise de Tarefas e revisão cruzada por pares. | 13/10/2026 | 21:00 - 21:30 | Nenhuma ferramenta utilizada (revisão humana por pares). |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Revisor Metodológico**: Validação do alinhamento com a etapa "I" do Framework DECIDE e verificação da rubrica do Plano de Ensino. | 13/10/2026 | 21:30 - 22:00 | Nenhuma ferramenta utilizada (revisão humana por pares). |

_Fonte: Gustavo Antonio Rodrigues e Silva, Edvaldo Soares Brasileiro Filho e Vinicius Silva Araruna, 2026._

---

## 1. Introdução e Contextualização Metodológica

No âmbito da Engenharia de Usabilidade e do Design de Interação (Mayhew, 1999; Barbosa & Silva, 2021), a etapa **I** do Framework DECIDE (*Identify the practical issues / Identificar e administrar as questões práticas*) exige um planejamento operacional minucioso para assegurar a viabilidade e o rigor empírico das avaliações formativas de **Nível 1 (Storyboards e Análise de Tarefas)**.

Este artefato atende estritamente às determinações do **Plano de Ensino da disciplina de Interação Humano-Computador** (Prof. Dr. André Barros de Sales, 2026), cobrindo de forma exaustiva os **Itens 5 e 8 da Apresentação da Etapa 4**:
- **Item 5:** Questões práticas da avaliação (recrutamento de participantes, perfil, justificativa da quantidade, modalidade, equipamentos, prazos, orçamento e recursos humanos);
- **Item 8:** Cronograma detalhado de sessões (datas, horários e locais) para realização da avaliação dos Storyboards e da Análise de Tarefas.

---

## 2. Recrutamento e Perfil dos Participantes

### 2.1 Onde e Como os Usuários Serão Recrutados

O recrutamento dos voluntários será conduzido nos ambientes acadêmicos da **Universidade de Brasília (UnB)**, contemplando o campus UnB Gama (FGA) e o campus Darcy Ribeiro:
1. **Comunidades e Grupos Universitários:** Divulgação em canais institucionais e grupos de mensagens de cursos de exatas e tecnologia (Engenharia de Software, Ciência da Computação, Engenharia Eletrônica e Engenharia Automotiva);
2. **Abordagem Direta:** Convite formal a discentes que cursam disciplinas com laboratórios de sistemas operacionais baseados em Linux;
3. **Imparcialidade:** É critério mandatório que nenhum dos participantes convidados tenha qualquer participação no desenvolvimento do projeto de IHC do Grupo 08 ou nas decisões prévias de design da equipe.

#### Script Literal de Abordagem e Convite aos Participantes

Para assegurar transparência, padronização e respeito à autonomia discente, a equipe utiliza a seguinte mensagem padronizada nos contatos de recrutamento:

> *"Olá! Somos discentes da Universidade de Brasília (FGA/UnB) conduzindo uma investigação acadêmica de Interação Humano-Computador sob orientação do Prof. Dr. André Barros de Sales, focada na avaliação formativa da experiência de uso do **Fórum Diolinux Plus** (Discourse) por estudantes que utilizam sistemas Linux.*  
> *Gostaríamos de convidá-lo(a) a participar de uma sessão presencial rápida (cerca de 35 a 40 minutos) em ambiente silencioso nas salas de estudo da FGA/UnB no dia 22 de outubro de 2026. A atividade é voluntária e divide-se em dois blocos contínuos: (1) leitura e manuseio tátil de uma prancha física de história em quadrinhos (storyboard) impressa em alta resolução e (2) percurso guiado em notebook avaliando tarefas procedurais da interface, sem testes de capacidade individual ou pegadinhas.*  
> *A sessão contará com gravação audiovisual simples posicionada sobre a mesa exclusivamente para fins de análise acadêmica e preservará seu total anonimato (identificação neutra P1, P2 ou P3), mediante leitura prévia do Termo de Consentimento Livre e Esclarecido (TCLE) nos primeiros 60 segundos gravados e assinatura da via física. Caso possa colaborar com a nossa pesquisa, por gentileza nos informe seu melhor horário no dia 22/10."*

### 2.2 Perfil dos Participantes

O perfil dos voluntários está estritamente alinhado ao **Perfil 1: Estudante / Usuário Comum em Busca de Suporte** e à persona primária **Lucas Mendonça**, elicitados no projeto:
- **Faixa Etária:** 18 a 28 anos;
- **Escolaridade:** Ensino Superior em andamento;
- **Experiência com Linux:** Usuários iniciantes a intermediários (com tempo de uso entre alguns meses e 2 anos), que utilizam o sistema para estudos, programação ou navegação;
- **Hábito em Fóruns:** Pessoas que já recorreram a fóruns técnicos (como Diolinux Plus, Viva o Linux, Stack Overflow ou fóruns de distribuições) para buscar soluções de erros ou comandos de terminal.

### 2.3 Justificativa Teórica da Quantidade de Participantes

Para as avaliações formativas de Nível 1, a equipe estabeleceu uma amostragem de **3 participantes para a avaliação de Storyboards** e **3 participantes para a avaliação de Análise de Tarefas**, totalizando até 6 sessões empíricas independentes.

Essa quantidade está rigorosamente amparada pela literatura canônica de Usabilidade:

1. **Modelo de Nielsen e Landauer (1993) e Nielsen (2000):** Em testes qualitativos de usabilidade, a curva de descoberta de problemas segue uma função assintótica expressa por `ProblemsFound(i) = N × [1 - (1 - λ)^i]`. Conforme demonstrado por Jakob Nielsen, **3 a 5 participantes são suficientes para revelar cerca de 80% a 85% dos problemas de usabilidade mais relevantes** de uma interface ou modelo conceitual. A inclusão de um número superior a 5 participantes em ciclos formativos rápidos gera retornos decrescentes de novas informações, aumentando o esforço operacional sem ganhos proporcionais de diagnóstico;
2. **Recomendações de Steve Krug (2010):** Em testes rápidos de baixa fidelidade, testar com 3 a 4 usuários em ciclos iterativos curtos (*"testar cedo e com frequência"*) é muito mais eficaz do que conduzir uma avaliação única com dezenas de voluntários ao final do projeto;
3. **Barbosa e Silva (2021, p. 280):** Enfatizam que, na prototipação de baixa fidelidade, o propósito reside em coletar impressões e identificar falhas estruturais de raciocínio, não sendo necessária uma amostra probabilística volumosa.

---

## 3. Modalidade da Avaliação: Presencial no Campus FGA/UnB

Em estrita consonância com as diretrizes pedagógicas da disciplina (determinação em sala de aula de 20/10/2026), a equipe adotou a **modalidade estritamente presencial** no campus da **Faculdade UnB Gama (FGA/UnB)** para a condução das avaliações formativas de Nível 1 (Storyboards e Análise de Tarefas).

A transição da modalidade remota para a presencial fundamenta-se nos seguintes pilares ergonômicos e metodológicos da literatura canônica de IHC (Barbosa & Silva, 2021, p. 270–280; Mayhew, 1999):

- **Validade Ecológica no Manuseio de Baixa Fidelidade:** A prototipação em papel e os storyboards ganham máxima expressividade ecológica quando o interagente manuseia fisicamente as pranchas impressas sobre a mesa, permitindo folhear, ordenar sequências, apontar detalhes dos quadrinhos com os dedos e registrar impressões táteis espontâneas;
- **Captura Multimodal de Hesitações e Expressões Faciais:** A observação presencial direta capta microexpressões, linguagem corporal (cinésica), hesitações motoras e mudanças posturais que são frequentemente atenuadas ou mascaradas em chamadas virtuais;
- **Condução Autônoma e Concentrada:** Cada discente avaliador da equipe conduz e grava sua própria sessão de avaliação de forma individual com 1 único participante por tarefa, garantindo um ambiente tranquilo, acolhedor e focado na concentração do voluntário;
- **Sessão Única Integrada Contínua:** Permite articular a avaliação em dois blocos sequenciais encadeados com o mesmo participante (Bloco 1: Storyboard Físico em Papel → Bloco 2: Percurso Procedural de HTA no Discourse em notebook), otimizando a rotina do voluntário universitário em um único encontro de aproximadamente 35 a 40 minutos.

---

## 4. Equipamentos e Infraestrutura Necessária

A realização das sessões presenciais demandará uma infraestrutura prática, direta e eficiente:

- **Ambiente Físico Silencioso:** Salas de estudo individuais ou mesas reservadas no Prédio UAC / Biblioteca da FGA/UnB, garantindo ausência de ruídos externos, privacidade e concentração integral do participante;
- **Dispositivo de Gravação Audiovisual:** Smartphone ou notebook com câmera e microfone integrados, posicionado de forma estável sobre a mesa de trabalho, garantindo enquadramento nítido do participante, da mesa e da tela sem necessidade de tripés complexos ou microfones dedicados;
- **Materiais Físicos de Interação (Papel):**
  - Pranchas de Storyboard impressas individualmente em folhas A4 com alta resolução gráfica (300 DPI) para manuseio direto do voluntário;
  - Duas vias impressas do Termo de Consentimento Livre e Esclarecido (TCLE) para assinatura física a caneta (uma via retida pelo participante e uma arquivada pelo grupo);
  - Caneta esferográfica e bloco de notas para anotações do participante ou do avaliador;
- **Equipamentos e Softwares de Apoio:**
  - Notebook pessoal do avaliador conectado à internet (Wi-Fi eduroam), executando a interface do Fórum Diolinux Plus em navegador web para o percurso guiado;
  - Planilha padronizada de anotações (`observacao-avaliador.csv`) para consolidação dos tempos e atritos identificados.

---

## 5. Orçamento e Declaração de Custo Zero

A Tabela 2 apresenta o demonstrativo orçamentário formal do projeto de avaliação.

**Tabela 2** — Demonstrativo Financeiro e Orçamento da Avaliação

| Item / Recurso | Tipo | Custo Unitário | Custo Total | Justificativa |
| :--- | :---: | :---: | :---: | :--- |
| **Salas de Estudo / Laboratório** | Espaço físico | R$ 0,00 | R$ 0,00 | Uso de salas públicas de estudo do UAC / Biblioteca da FGA/UnB com agendamento acadêmico. |
| **Smartphone / Notebook e Câmera** | Equipamento pessoal | R$ 0,00 | R$ 0,00 | Smartphone e notebook pessoais já pertencentes aos discentes, posicionados de forma estável sobre a mesa. |
| **Impressão das Pranchas A4 (300 DPI)** | Material físico | R$ 1,50 | R$ 15,00 | Impressão colorida de alta resolução dos storyboards e vias do TCLE, custeada com recursos próprios da equipe. |
| **Pranchetas, Canetas e Post-its** | Material de escritório | R$ 0,00 | R$ 0,00 | Materiais de escritório previamente possuídos pelos estudantes integrantes do grupo. |
| **Armazenamento e Pós-Processamento** | Infraestrutura | R$ 0,00 | R$ 0,00 | Armazenamento de vídeos e planilhas na nuvem institucional educacional da UnB (Google Drive / YouTube Não Listado). |
| **Mão de Obra e Participantes** | Recurso Humano | R$ 0,00 | R$ 0,00 | Condução acadêmica e participação voluntária sem contrapartida financeira (Resolução CNS nº 510/2016). |
| **TOTAL GERAL DO PROJETO** | — | — | **R$ 0,00** | **Execução acadêmica autossustentada com custo zero para a Universidade de Brasília.** |

_Fonte: Gustavo Antonio Rodrigues e Silva, 2026._

---

## 6. Recursos Humanos e Condução Individual das Avaliações

Para assegurar naturalidade, discrição e foco na concentração do participante, **cada integrante da equipe conduz e grava sua respectiva sessão de avaliação de forma autônoma e individual** (Barbosa & Silva, 2021):

- **Avaliador Responsável pela Sessão (Condução e Registro Solo):**
  - O discente autor da respectiva tarefa recepciona o participante (1 único voluntário por sessão: P1 com Vinicius, P2 com Gustavo, P3 com Edvaldo);
  - Posiciona a câmera/smartphone sobre a mesa e inicia a gravação audiovisual em ambiente silencioso;
  - Lê literalmente o **Script Oral do TCLE nos primeiros 60 segundos gravados** e colhe o consentimento verbal e a assinatura física;
  - Conduz o Bloco 1 (apresentação da prancha impressa de Storyboard) estimulando a verbalização em voz alta (*Think-Aloud*);
  - Conduz o Bloco 2 (percurso procedural de HTA na interface do fórum no notebook);
  - Anota os atritos, tempos e comentários espontâneos diretamente na planilha padronizada logo após o encerramento da sessão.

---

## 7. Atividades do Método e Operacionalização das Tarefas (Tabela 12.9 Adaptada)

Conforme orientação direta do Prof. Dr. André Barros de Sales (aula de 13/10/2026), as atividades metodológicas foram estruturadas com base na **Tabela 12.9 de Barbosa e Silva (2021, p. 304)**, adaptada formalmente para incluir uma **terceira coluna** discriminando a operacionalização prática das tarefas e funcionalidades sob responsabilidade de cada integrante da equipe.

A Tabela 3 detalha a operacionalização das atividades de avaliação de Nível 1.

**Tabela 3** — Atividades do método de avaliação adaptadas de Barbosa e Silva (2021, p. 304) com operacionalização das tarefas da equipe

| Etapa do Método | Atividade Prevista (Barbosa & Silva, 2021) | Operacionalização no Projeto / Tarefas da Equipe |
| :--- | :--- | :--- |
| **Preparação** | Definir as tarefas para os participantes executarem | **Vinicius:** Tarefa 1 (Markdown e Tags); **Gustavo:** Tarefa 2 (Criação de Eventos Presenciais); **Edvaldo:** Tarefa 3 (Grade de Disponibilidade e Agendamento). |
| | Definir o perfil dos participantes e recrutá-los | Recrutamento de 3 discentes voluntários da UnB com vivência em Linux (Perfil 1 — Estudante Aprendiz). |
| | Criar cenários e storyboards de baixa fidelidade | Confecção de Storyboards manuais em alta definição (300 DPI) entre 13/10 e 16/10/2026 por cada autor. |
| | Executar um teste-piloto | Ensaio solo presencial em 21/10/2026 das 14:00 às 14:45 na FGA/UnB para calibração de microfone, imagem, ambiente silencioso e TCLE (dados isolados e não computados). |
| **Coleta de Dados** | Apresentar o TCLE e solicitar consentimento verbal | Leitura literal obrigatória do script oral nos primeiros 60 segundos gravados de cada sessão presencial. |
| | Observar o participante explorando os storyboards | Avaliação formativa da clareza narrativa, sequência e satisfação (Storyboards avaliados primeiro). |
| | Conduzir o percurso de tarefas com o participante | Validação dos passos operacionais do HTA e CTT logo após a narrativa dos storyboards na mesma sessão. |
| **Consolidação** | Tabular os problemas e sugestões coletados | Consolidação dos problemas de usabilidade com atribuição de severidade heurística de 0 a 4 (Nielsen). |
| | Gerar relatório de resultados e propostas de reprojeto | Elaboração do documento do relato final da avaliação com recomendações concretas de redesign até 23/10/2026 (submissão oficial em 25/10/2026). |

_Fonte: Vinicius Silva Araruna e Gustavo Antonio Rodrigues e Silva com base em Barbosa e Silva (2021, p. 304) e Sales (2026), 2026._

---

## 8. Cronograma Integrado de Sessões de Avaliação

A execução empírica foi dividida em duas etapas consecutivas: a realização obrigatória do **Teste-Piloto** e as **Sessões Oficiais de Avaliação com Usuários**.

### 8.1 Cronograma do Teste-Piloto

Conforme exigido pelo Plano de Ensino da disciplina (Itens 11 e 12), o teste-piloto será realizado previamente para validar os equipamentos, a temporização do TCLE e a clareza do roteiro. A Tabela 4 apresenta o cronograma detalhado para a execução do Teste-Piloto de Nível 1.

**Tabela 4** — Cronograma do Teste-Piloto de Nível 1

| Tipo de Avaliação | Data | Horário | Entrevistador | Observador | Participante (Piloto) | Local / Espaço Físico |
| :--- | :---: | :---: | :--- | :--- | :--- | :--- |
| **Ensaio Presencial do Teste-Piloto** | 21/10/2026 | 14:00 - 14:45 | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) | Discente voluntário de TI (UnB) | [Gravação no YouTube](https://youtu.be/e4annKBJd3I) / FGA |
| **Teste-Piloto da Tarefa 3 (Edvaldo)** | 17/10/2026 | 14:00 - 15:00 | [Edvaldo Soares](https://github.com/PajeMurici-dev) | [Gustavo Antonio](https://github.com/gus-ant) | Discente voluntário de TI (UnB) | [Gravação no YouTube](https://youtu.be/1F409M-E850) |

_Fonte: Vinicius Silva Araruna, Gustavo Antonio Rodrigues e Silva e Edvaldo Soares Brasileiro Filho, 2026._

> ⚠️ **Cláusula Metodológica Obrigatória:** O teste-piloto tem como função exclusiva avaliar o planejamento e o protocolo. **Os dados coletados no teste-piloto JAMAIS serão computados ou apresentados nos resultados finais da avaliação dos usuários.**

---

### 8.2 Cronograma das Sessões Oficiais de Avaliação do Storyboard

A Tabela 5 detalha as 3 sessões planejadas para a avaliação formativa dos Storyboards com usuários reais.

**Tabela 5** — Cronograma das Sessões de Avaliação do Storyboard (Conduzidas Individualmente)

| Sessão | Data | Horário | Storyboard Avaliado | Avaliador Responsável | Participante Convidado | Local Físico / Link |
| :---: | :---: | :---: | :--- | :--- | :--- | :--- |
| **S01** | 22/10/2026 | 14:00 - 14:40 | Storyboard 1 (Markdown e Tags com IA) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Participante 1 (P1 — Graduando CIC/UnB) | [Gravação no YouTube](https://youtu.be/_4nQ50nN7b8) / Residência de P1 |
| **S02** | 22/10/2026 | 15:00 - 15:40 | Storyboard 2 (Criação de Eventos Presenciais) | [Gustavo Antonio](https://github.com/gus-ant) | Participante 2 (P2 — Graduando UnB) | Presencial — FGA/UnB (Salas de Estudo UAC) |
| **S03** | 22/10/2026 | 16:00 - 16:40 | Storyboard 3 (Grade de Disponibilidade e Agendamento) | [Edvaldo Soares](https://github.com/PajeMurici-dev) | Participante 3 (P3 — Graduando UnB) | [Gravação no YouTube](https://youtu.be/gqZ3yJ3ZYUc) / FGA |

_Fonte: Vinicius Silva Araruna, Gustavo Antonio Rodrigues e Silva e Edvaldo Soares Brasileiro Filho, 2026._

---

### 8.3 Cronograma das Sessões Oficiais de Avaliação da Análise de Tarefas

A Tabela 6 detalha as 3 sessões planejadas para a avaliação formativa dos modelos de Análise de Tarefas (HTA e CMN-GOMS), conduzidas imediatamente após a avaliação do Storyboard com o mesmo participante.

**Tabela 6** — Cronograma das Sessões de Avaliação da Análise de Tarefas (Sessão Única Contínua com Storyboard)

| Sessão | Data | Horário | Tarefa Investigada | Avaliador Responsável | Participante Convidado | Local Físico / Link |
| :---: | :---: | :---: | :--- | :--- | :--- | :--- |
| **T01** | 22/10/2026 | 14:20 - 14:40 | Tarefa 1 (Publicação com Tags e IA) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Participante 1 (P1 — Graduando CIC/UnB) | [Gravação no YouTube](https://youtu.be/_4nQ50nN7b8) / Residência de P1 |
| **T02** | 22/10/2026 | 15:20 - 15:40 | Tarefa 2 (Criação de Eventos Presenciais) | [Gustavo Antonio](https://github.com/gus-ant) | Participante 2 (P2 — Graduando UnB) | Presencial — FGA/UnB (Salas de Estudo UAC) |
| **T03** | 22/10/2026 | 16:20 - 16:40 | Tarefa 3 (Grade de Disponibilidade e Agendamento) | [Edvaldo Soares](https://github.com/PajeMurici-dev) | Participante 3 (P3 — Graduando UnB) | [Gravação no YouTube](https://youtu.be/gqZ3yJ3ZYUc) / FGA |

_Fonte: Vinicius Silva Araruna, Gustavo Antonio Rodrigues e Silva e Edvaldo Soares Brasileiro Filho, 2026._

---

### 8.4 Cronograma Executado e Esteira de Pós-Processamento da Avaliação

Para garantir o rigor no encadeamento das atividades e atender à diretriz pedagógica da disciplina (aula de 15/10/2026), a Tabela 7 documenta a esteira integrada de execução, pós-processamento de dados e elaboração dos relatos de resultados até o prazo fatal de 25 de outubro de 2026.

**Tabela 7** — Cronograma Executado e Esteira de Pós-Processamento e Relatos (21/10 a 25/10)

| Fase / Atividade | Período / Data | Horário | Responsável(is) | Entregável / Registro Formal | Status |
| :--- | :---: | :---: | :--- | :--- | :---: |
| **Ensaio Presencial do Teste-Piloto** | 21/10/2026 | 14:00 - 14:45 | [Vinicius Silva Araruna](https://github.com/ViniciusA05) (Avaliador Solo) | Ensaio individual testando microfone, imagem sobre a mesa em ambiente silencioso, leitura do TCLE (< 60s) e manuseio de pranchas (dados isolados e não computados). | 🟡 Agendado |
| **Sessão Presencial Oficial 01 (S01 / T01)** | 22/10/2026 | 14:00 - 14:40 | [Vinicius Silva Araruna](https://github.com/ViniciusA05) (Avaliador Responsável) | Gravação em ambiente domiciliar silencioso na residência do participante P1 (estudante de Ciência da Computação - CIC/UnB), TCLE nos primeiros 60s, Storyboard 1 impresso e percurso da Tarefa 1. | 🟡 Agendado |
| **Sessão Presencial Oficial 02 (S02 / T02)** | 22/10/2026 | 15:00 - 15:40 | [Gustavo Antonio](https://github.com/gus-ant) (Avaliador Responsável) | Gravação em ambiente silencioso, TCLE nos primeiros 60s, Storyboard 2 impresso e percurso da Tarefa 2 (Criação de Eventos Presenciais) com Participante 2 (P2). | 🟡 Agendado |
| **Sessão Presencial Oficial 03 (S03 / T03)** | 22/10/2026 | 16:00 - 16:40 | [Edvaldo Soares](https://github.com/PajeMurici-dev) (Avaliador Responsável) | Gravação em ambiente silencioso, TCLE nos primeiros 60s, Storyboard 3 impresso e percurso da Tarefa 3 (Grade de Disponibilidade e Agendamento) com Participante 3 (P3). | 🟡 Agendado |
| **Tabulação e Pós-Processamento** | 23/10/2026 | 09:00 - 13:00 | Todos os integrantes | Consolidação dos dados comportamentais na planilha `observacao-avaliador.csv` e síntese de discrepâncias de HTA. | ⚪ Planejado |
| **Análise de Severidade (Nielsen)** | 23/10/2026 | 14:00 - 18:00 | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) | Classificação heurística da gravidade dos problemas encontrados na escala de 0 a 4 de Nielsen (1994) e proposição de redesigns. | ⚪ Planejado |
| **Redação dos Relatos e Homologação** | 23/10/2026 | 18:00 - 23:59 | Todos os integrantes | Redação completa e homologação técnica de `storyboard/relato-resultados.md` e `analise-tarefas/relato-resultados.md`. | ⚪ Planejado |
| **Gravação Oficial da Equipe em Vídeo** | 24/10/2026 | 09:00 - 11:30 | Todos os integrantes | Gravação audiovisual conjunta da apresentação oficial da Entrega 5, upload no YouTube (Não Listado) e inserção na página síntese. | ⚪ Planejado |
| **Margem de Segurança e Submissão** | 25/10/2026 | Até 23:59 | Vinicius Silva Araruna (PO) | Janela de tolerância operacional de 24 horas e submissão formal no Aprender 3. | ⚪ Planejado |

_Fonte: Vinicius Silva Araruna, Gustavo Antonio Rodrigues e Silva e Edvaldo Soares Brasileiro Filho, 2026._

---

## 9. Lista de Verificação da Técnica (Questões Práticas e Cronograma)

A Tabela 8 apresenta o checklist de conformidade frente aos critérios avaliativos da disciplina.

**Tabela 8** — Lista de Verificação das Questões Práticas e Cronograma

| Item / Critério Avaliado | Fonte Normativa | Conforme? | Resposta Autoexplicativa e Evidência no Documento |
| :---: | :--- | :---: | :--- |
| **1** | O perfil dos usuários recrutados está definido e fundamentado na pesquisa de perfil? | Plano de Ensino (Item 5); Barbosa & Silva (2021) | ✅ Sim | A Seção 2.2 restringe os participantes ao Perfil 1 (Estudantes universitários usuários de Linux). |
| **2** | A quantidade de participantes está declarada e justificada teoricamente? | Plano de Ensino (Item 5); Nielsen (2000) | ✅ Sim | A Seção 2.3 fundamenta a amostra de 3 a 5 participantes na fórmula assintótica de Nielsen e Landauer (1993). |
| **3** | A modalidade (presencial ou remota) está explícita com justificativa de viabilidade? | Plano de Ensino (Item 5) | ✅ Sim | A Seção 3 detalha a opção pela modalidade estritamente presencial no campus da FGA/UnB, amparada na validade ecológica do manuseio físico de pranchas impressas e observação multimodal de reações espontâneas (Barbosa & Silva, 2021). |
| **4** | Foram especificados todos os equipamentos e recursos necessários para os testes? | Plano de Ensino (Item 5) | ✅ Sim | A Seção 4 discrimina computadores, conexões, softwares e plataformas de registro. |
| **5** | Há declaração orçamentária demonstrando os custos envolvidos? | Plano de Ensino (Item 5) | ✅ Sim | A Tabela 2 apresenta o demonstrativo orçamentário formal comprovando Custo Zero (R$ 0,00). |
| **6** | Os papéis de mão de obra da equipe de avaliação foram claramente divididos? | Barbosa & Silva (2021); DECIDE | ✅ Sim | A Seção 6 estabelece a divisão por tarefas e a condução individual de cada sessão, eliminando intimidação e garantindo foco na concentração do participante. |
| **7** | A Tabela 12.9 de Barbosa & Silva foi adaptada contendo a 3ª coluna de tarefas da equipe? | Diretriz do Professor (Aula 13/10); Barbosa & Silva (2021) | ✅ Sim | A Tabela 3 inclui a terceira coluna detalhando a operacionalização prática da equipe em cada atividade. |
| **8** | Há cronograma detalhado de datas, horários e locais para Storyboard e Análise de Tarefas? | Plano de Ensino (Item 8) | ✅ Sim | As Tabelas 5, 6 e 7 especificam as sessões completas S01 a S03, T01 a T03 e a esteira de relatos. |

_Fonte: Vinicius Silva Araruna e Gustavo Antonio Rodrigues e Silva com base em Barbosa e Silva (2021) e Sales (2026), 2026._

---

## 10. Histórico de Versão

A Tabela 9 documenta as versões deste artefato.

**Tabela 9** — Histórico de Versão

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 13/10/2026 | Elaboração inicial das questões práticas e cronograma consolidado da avaliação de Nível 1 (Issue #62), com perfil de recrutamento, justificativa teórica amostral (Nielsen, 2000), orçamento zero, divisão de papéis e tabelas de cronograma para Storyboard e Análise de Tarefas. | [Gustavo Antonio](https://github.com/gus-ant), [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| `1.1` | 13/10/2026 | Incorporação da Tabela 12.9 adaptada de Barbosa e Silva (2021, p. 304) com 3ª coluna de operacionalização das tarefas, saneamento de tipografia UTF-8 nativa e alinhamento do cronograma integrado com piloto em 17/10 e campo de 19/10 a 23/10. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| `1.2` | 15/10/2026 | Refinamento pós-auditoria de 15/10 (#93): inclusão do script literal de abordagem discente, estruturação formal da Seção 8.4 (Cronograma Executado e Esteira de Pós-Processamento até 25/10) e sincronização de tabelas. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant) |
| `1.3` | 20/10/2026 | Adequação formal para modalidade estritamente presencial no campus da FGA/UnB (Issue #100): condução autônoma individual em ambiente silencioso favorável à concentração, gravação com smartphone/notebook sobre a mesa, manuseio de pranchas impressas (300 DPI), script de abordagem presencial, realização de sessões contínuas integradas em 22/10 e esteira executiva com gravação em 24/10. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant) |
| `1.4` | 22/10/2026 | Atualização das Tabelas 3, 5, 6 e 7 alinhando formalmente a Tarefa 2 e Storyboard 2 à Criação de Eventos Presenciais (CF02) (#104). | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| `1.5` | 24/10/2026 | Atualização dos links de gravação da avaliação oficial e do teste-piloto da Tarefa 3 (Grade de Disponibilidade e Agendamento) no YouTube, sob condução de Edvaldo Soares. | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |

| `1.6` | 25/10/2026 | Atualização dos links definitivos das gravações no YouTube do Teste-Piloto e da Avaliação Presencial (S01/T01) de Vinicius Silva Araruna. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant) |
_Fonte: Vinicius Silva Araruna e Gustavo Antonio Rodrigues e Silva, 2026._

---

## 11. Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier / Campus, 2010.

[2] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[3] KRUG, Steve. *Não me faça pensar: uma abordagem de bom senso à usabilidade na web*. 2. ed. Rio de Janeiro: Alta Books, 2010.

[4] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[5] NIELSEN, Jakob; LANDAUER, Thomas K. A mathematical model of the finding of usability problems. In: *Proceedings of the INTERACT'93 and CHI'93 Conference on Human Factors in Computing Systems*. Amsterdam: ACM, 1993. p. 206–213.

[6] NIELSEN, Jakob. *Why You Only Need to Test with 5 Users*. Nielsen Norman Group, 2000. Disponível em: <https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/>. Acesso em: 13 out. 2026.

[7] ROGERS, Yvonne; SHARP, Helen; PREECE, Jennifer. *Design de Interação: além da interação humano-computador*. 3. ed. Porto Alegre: Bookman, 2013.

[8] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano-Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama, 2026.

---

## Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Durante a formatação deste documento, foram utilizados recursos de Inteligência Artificial Generativa (Google Gemini) exclusivamente para o apoio sintático na diagramação das matrizes tabulares em Markdown. A concepção dos critérios de recrutamento, o cálculo da justificativa amostral, a definição das datas das sessões e as diretrizes operacionais foram idealizadas, estruturadas e auditadas pelos membros da equipe.

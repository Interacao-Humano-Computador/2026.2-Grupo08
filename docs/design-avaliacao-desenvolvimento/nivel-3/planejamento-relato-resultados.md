# Planejamento do Relato dos Resultados da Alta Fidelidade (Nível 3)

## Tabela de Contribuição e Transparência no Uso de Inteligência Artificial Generativa

A Tabela 1 apresenta a matriz de governança, divisão de atribuições e declaração de uso de ferramentas de inteligência artificial generativa na estruturação deste planejamento do relato de resultados da avaliação de alta fidelidade no Figma (Nível 3).

**Tabela 1** — Matriz de Contribuição do Planejamento do Relato de Alta Fidelidade

| Integrante | Atribuição no Artefato | Data | Horário | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :---: | :---: | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Autor Principal / Tech Lead**: Estruturação formal do modelo de relatório segundo os 9 tópicos canônicos de Barbosa & Silva (2021), concepção das matrizes de consolidação de métricas e escore SUS, parametrização da taxonomia de problemas e severidade de Nielsen (0 a 4) e lista de verificação de 9 itens. | 31/10/2026 | 21:50 - 22:30 | Google Gemini (LLM) | Apoio na estruturação sintática de matrizes Markdown, validação de referências ABNT e checagem de consistência terminológica. |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Revisor por Par e Coautor**: Revisão da adequação aos critérios de priorização de reprojeto, conferência da escala SUS e parametrização modular para acolhimento do relato da Tarefa 2. | 31/10/2026 | 22:00 - 22:35 | Google Gemini (LLM) | Apoio na padronização tabular e verificação cruzada de datas com o cronograma planejado. |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Revisor Metodológico**: Checagem de conformidade com os critérios do Plano de Ensino da disciplina e auditoria cruzada por pares. | 31/10/2026 | 22:15 - 22:40 | — | Revisão humana por pares e conferência de consistência. |

_Fonte: Elaborada por Vinicius Silva Araruna, Gustavo Antonio Rodrigues e Silva e Edvaldo Soares Brasileiro Filho, 2026._

---

## 1. Introdução e Objetivo do Artefato

No desenvolvimento de sistemas centrado no usuário (*Mayhew, 1999; Barbosa & Silva, 2021*), planejar previamente o relato dos resultados da avaliação de alta fidelidade é um requisito metodológico indispensável para assegurar a confiabilidade e o rigor analítico da pesquisa empírica. Essa antecipação estrutural define com precisão quais variáveis dependentes e independentes, métricas quantitativas de desempenho e respostas qualitativas devem ser tabuladas pelo avaliador logo após a conclusão dos testes de usabilidade.

Este documento formaliza a arquitetura analítica, os campos normativos e os modelos de tabelas que consolidarão os achados empíricos da **avaliação formativa e somativa de alta fidelidade no Figma (Nível 3)** durante a **Etapa 7** do projeto (período planejado de `12/11/2026 a 14/11/2026`).

O escopo cobre as três tarefas da equipe sobre o [Fórum Diolinux Plus](https://plus.diolinux.com.br), apresentando a esteira detalhada para a **Tarefa 1 (`CF01` — Criação e Publicação de Tópico de Dúvida com Tags, Markdown e IA Semântica de Pré-Envio)**, conduzida por Vinicius Silva Araruna, e preparando os modelos para integração das Tarefas 2 e 3.

O artefato cumpre integralmente os requisitos da disciplina ministrada pelo Prof. Dr. André Barros de Sales (Universidade de Brasília — Faculdade UnB Gama, 2026.2), preparando o grupo para a apresentação oficial da Etapa 7 e para o direcionamento das alterações finais de reprojeto no Figma.

---

## 2. Estrutura Canônica do Relatório de Resultados da Alta Fidelidade

_Autor do Item Teórico: [Vinicius Silva Araruna](https://github.com/ViniciusA05)_

Conforme preconizado pela literatura clássica de Engenharia de Usabilidade (*Barbosa & Silva, 2021, p. 280-282; Rubin & Chisnell, 2008*), o documento oficial de resultados que será preenchido após as sessões de teste no Figma conterá obrigatoriamente as seguintes 9 seções estruturais:

1. **Objetivos da Avaliação e Alinhamento com as Metas de Usabilidade:** Síntese dos objetivos do teste de alta fidelidade, confrontando os achados com as Metas de Usabilidade (eficácia na conclusão, eficiência temporal frente ao baseline KLM de `135,3 segundos`, assistência com syntax highlighting e segurança no salvamento automático de rascunhos);
2. **Metodologia de Teste de Usabilidade no Figma e Protocolo Experimental:** Descrição do ambiente de teste, periféricos operados pelo voluntário, gravação simultânea via OBS Studio, aplicação do protocolo de verbalização concomitante (*Think-Aloud Protocol* — Ericsson & Simon, 1993) e ausência de intervenção externa devido à automatização do motor do Figma;
3. **Caracterização e Perfil dos Participantes:** Apresentação dos dados demográficos e formação acadêmica dos participantes recrutados (Perfil 1: Estudantes de Tecnologia da Informação da UnB — Usuários Aprendizes em Linux), preservando o anonimato em conformidade com a LGPD (identificadores neutros: *P1*, *P2*, *P3*);
4. **Cenário de Uso, Telas Interativas e Fluxo no Figma:** Descrição detalhada do cenário autêntico executado (erro de permissão de terminal `dpkg lock-frontend`), sequência de 4 frames e 3 overlays operados pelo usuário e comportamento de microinterações (*Smart Animate*);
5. **Consolidação das Métricas Quantitativas de Desempenho e Escore SUS:** Consolidação numérica dos tempos de execução da tarefa completa, tempo de decisão no modal de IA, contagem de desvios de cliques, taxa de sucesso de publicação e apuração do escore global final da **Escala de Usabilidade do Sistema (SUS — Brooke, 1996)** em escala de 0 a 100 pontos;
6. **Análise Qualitativa das Perguntas Investigativas e Verbalizações:** Síntese das percepções expressas em voz alta pelos voluntários durante o teste, analisando individualmente as perguntas investigativas (`PAF01` a `PAF08`);
7. **Matriz Estruturada de Problemas de Usabilidade e Severidade de Nielsen (0 a 4):** Catalogação detalhada de cada inconsistência ou hesitação observada no protótipo do Figma, classificada formalmente na escala de quatro níveis de Jakob Nielsen (1994);
8. **Diretrizes de Reprojeto e Especificação de Ajustes no Figma:** Proposição de intervenções concretas de design visual e refinamento de fluxos interativos no Figma para sanar os problemas detectados, programadas para execução entre `13/11/2026 e 15/11/2026`;
9. **Registros Audiovisuais no YouTube, Comprovação do TCLE e Cláusula de Isolamento:** Links incorporados dos vídeos das sessões experimentais no YouTube em modo "Não Listado", comprovação da gravação do consentimento verbal nos primeiros 60 segundos com o Script Oral literal do TCLE e declaração formal de isolamento dos dados do Teste-Piloto.

---

## 3. Modelos de Matrizes Tabulares Padronizadas para a Etapa 7

### 3.1 Modelo de Consolidação de Métricas Quantitativas e Escore SUS (Tarefa 1)

A Tabela 2 apresenta o modelo tabular padronizado que será preenchido após a sessão empírica com o Participante 1 (P1) para registrar o desempenho objetivo e o índice psicométrico SUS da Tarefa 1 no Figma.

**Tabela 2** — Modelo de Consolidação de Métricas Quantitativas e Escore SUS da Tarefa 1 *(Template para a Etapa 7)*

| ID | Participante / Perfil | Tempo Total na Tarefa (s) | Meta de Tempo (≤ 90s) / Baseline KLM (135,3s) | Tempo no Modal de IA (s) | Taxa de Conclusão (%) | Uso Correto do Botão `&lt;/&gt; Bash` | Escore SUS Global (0–100) | Classificação Adjetiva SUS (Bangor et al., 2009) |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **P1** | Discente de Engenharia de Software (UnB) — Aprendiz Linux | *[A preencher]* | *[Meta Atingida?]* | *[A preencher]* | *[A preencher]* | *[Sim / Não]* | *[A preencher]* | *[Grau A / B / C / D / F]* |

_Fonte: Elaborada por Vinicius Silva Araruna com base em Brooke (1996) e Bangor, Kortum e Miller (2009), 2026._

Como exemplificado na Tabela 2, os dados mensurados permitirão verificar com precisão se a otimização de fluxo no Figma superou o tempo preditivo do modelo KLM (`135,3 segundos`) e se o índice SUS atinge a meta de excelência de **≥ 80,0 pontos**.

### 3.2 Modelo de Consolidação de Métricas Quantitativas e Escore SUS (Tarefa 2)

A Tabela 2b apresenta o modelo tabular padronizado que registrará o desempenho operacional objetivo e a avaliação psicométrica SUS da Tarefa 2 (Criação de Eventos Presenciais com Mapa e Ingressos) no protótipo interativo web durante a Etapa 7.

**Tabela 2b** — Modelo de Consolidação de Métricas Quantitativas e Escore SUS da Tarefa 2 *(Template para a Etapa 7)*

| ID | Participante / Perfil | Tempo Total no Percurso (s) | Meta de Tempo (≤ 120s) | Tempo na Definição de Quórum / Ingressos (s) | Interação Fluida com Mapa e Pin | Taxa de Conclusão do Evento (%) | Escore SUS Global (0–100) | Classificação Adjetiva SUS (Bangor et al., 2009) |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **P2** | Discente de Engenharia (UnB) — Perfil Carlos Eduardo | *[A preencher]* | *[Meta Atingida?]* | *[A preencher]* | *[Sim / Não]* | *[A preencher]* | *[A preencher]* | *[Grau A / B / C / D / F]* |

_Fonte: Elaborada por Gustavo Antonio Rodrigues e Silva com base em Brooke (1996) e Bangor, Kortum e Miller (2009), 2026._

### 3.3 Modelo Estruturado de Registro de Problemas de Usabilidade da Tarefa 2 (Severidade de Nielsen)

A Tabela 3b formaliza a matriz de catalogação de falhas ergonômicas, hesitações e desvios de navegação observados durante o percurso interativo da Tarefa 2 no protótipo interativo web.

**Tabela 3b** — Modelo de Registro de Problemas de Usabilidade de Alta Fidelidade (Tarefa 2 — Eventos Presenciais Web)

| ID | Componente / View Web Afetada | Descrição da Hesitação / Dificuldade no Teste | Dimensão Ergonômica / Token Impactado | Severidade de Nielsen (0 a 4) | Diretriz de Refinamento no Código Web (Etapa 7) |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **`PROB-AF-T2-01`** | *Hub de Eventos (View PB-01 / #view-hub)* | Usuário hesita em localizar o gatilho `+ Criar Novo Evento` na interface com múltiplos cartões. | *Affordance* e Destaque Visual | **1 (Cosmético)** | Elevar o contraste do botão primário e reforçar a sombra de elevação (`elevation-2`). |
| **`PROB-AF-T2-02`** | *Seletor 24h (#modal-timepicker)* | Dificuldade em alternar entre hora e minuto no timepicker digital. | Flexibilidade e Eficiência de Uso | **2 (Menor)** | Incorporar máscara de digitação direta via teclado alternativa ao clique no ponteiro. |
| **`PROB-AF-T2-03`** | *Painel de Quórum / Ingressos (#view-wizard)* | Dúvida sobre a obrigatoriedade do campo de quórum mínimo para publicação. | Ajuda Contextual e Prevenção de Erros | **2 (Menor)** | Adicionar ícone de ajuda `(?)` com tooltip autoexplicativo sobre sustentabilidade do evento. |
| **`PROB-AF-T2-04`** | *Mapa do Campus FGA (#modal-map-picker)* | Lentidão no arraste do marcador (*pin*) sobre as referências da UnB Gama. | Manipulação Direta e Precisão | **2 (Menor)** | Habilitar busca por texto de pontos de referência do campus com posicionamento automático do pin. |
| **`PROB-AF-T2-05`** | *Página do Evento Publicado (View PB-03)* | Usuário não identifica imediatamente a opção de salvar o ingresso com QR Code. | Visibilidade do Estado / Fechamento | **1 (Cosmético)** | Posicionar botão `[ Baixar Ingresso / QR Code ]` em destaque logo abaixo do banner de confirmação. |

_Fonte: Elaborada por Gustavo Antonio Rodrigues e Silva com base em Nielsen (1994), 2026._

### 3.4 Modelo Estruturado de Registro de Problemas de Usabilidade e Severidade (Nielsen - Tarefa 1)

A Tabela 3 apresenta o modelo formal que receberá as evidências de dificuldades, hesitações e barreiras ergonômicas diagnosticadas nas telas do Figma durante os testes da Tarefa 1.

**Tabela 3** — Modelo de Registro de Problemas de Usabilidade de Alta Fidelidade *(Exemplos Parametrizados para Calibração)*

| ID | Frame / Overlay do Figma Afetado | Descrição da Evidência Observada no Teste | Dimensão de IHC / Token Impactado | Severidade de Nielsen (0 a 4) | Diretriz Específica de Reprojeto no Figma (Etapa 7) |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **`PROB-AF-01`** | *Frame 01 — Home* | Voluntário demorou mais de 5 segundos para identificar o botão `+ Novo Tópico` na barra superior. | Visibilidade do Status / Contraste | **1 (Cosmético)** | Ajustar o padding e a saturação da cor primária `--tertiary` (`#0084FF`) para elevar o contraste. |
| **`PROB-AF-02`** | *Frame 02 — Composer* | Usuário clicou no editor de código mas hesitou em como fechar o painel de *split-view*. | Controle e Liberdade do Usuário | **2 (Menor)** | Adicionar botão explícito de minimizar/fechar com ícone chevron no canto superior do editor. |
| **`PROB-AF-03`** | *Overlay 01 — Modal IA* | Dúvida se a opção de adicionar tags em lote substituiria as tags já escolhidas manualmente. | Prevenção de Erros / Rótulos | **2 (Menor)** | Ajustar o texto do botão para: *"Acrescentar tags sugeridas mantendo as atuais"*. |
| **`PROB-AF-04`** | *Frame 03 — Confirmação* | Usuário não percebeu de imediato que seu post já estava visível na listagem principal. | Feedback do Sistema | **1 (Cosmético)** | Adicionar microinteração de rolagem automática (*auto-scroll*) centralizando o tópico recém-criado. |

_Fonte: Elaborada por Vinicius Silva Araruna com base em Nielsen (1994), 2026._

---

## 4. Critérios de Priorização de Reprojeto no Figma

Para orientar a esteira de correção e refinamento dos componentes no Figma após a consolidação do relato na Etapa 7 (`13/11/2026 a 15/11/2026`), adota-se a matriz de priorização hierárquica baseada na gravidade dos problemas:

1. **Severidade 4 (Problema Catastrófico):** Intervenção imediata e obrigatória. Impede a conclusão da tarefa de publicação ou causa perda de dados do usuário. Deve ser corrigido no Figma antes da gravação do vídeo final da disciplina;
2. **Severidade 3 (Problema Maior):** Alta prioridade. Provoca desvios severos de tempo ou desorientação na interface (ex: não compreensão do modal de IA). Exige revisão de fluxos de telas e componentes;
3. **Severidade 2 (Problema Menor):** Média prioridade. Gera pequena hesitação ou atrito cognitivo que o usuário contorna por conta própria (ex: refinamento de rótulos de botões ou tooltips contextuais);
4. **Severidade 1 (Problema Cosmético):** Baixa prioridade. Não afeta a operacionalidade da tarefa (ex: ajuste milimétrico de espaçamento ou contraste sutil de borda no Dark Mode).

---

## 5. Lista de Verificação da Técnica (Planejamento do Relato de Alta Fidelidade)

A Tabela 4 apresenta a lista de verificação formal para auditar a conformidade metodológica da estrutura deste planejamento de relato perante os critérios da literatura e as diretrizes do Prof. Dr. André Barros de Sales.

**Tabela 4** — Lista de Verificação da Técnica (Planejamento do Relato de Alta Fidelidade)

| ID | Critério Normativo Avaliado | Origem / Fonte Normativa | Conforme? | Justificativa e Local da Evidência no Documento |
| :---: | :--- | :--- | :---: | :--- |
| **01** | O documento define a estrutura do relatório baseando-se nos 9 tópicos normativos canônicos? | Barbosa & Silva (2021, p. 280-282) | **Sim** | Seção 2 enumera e detalha os 9 tópicos obrigatórios que comporão o relato da Etapa 7. |
| **02** | Contém modelo de consolidação de métricas quantitativas e escore global do questionário SUS? | Brooke (1996); Bangor, Kortum & Miller (2009) | **Sim** | Tabela 2 apresenta o modelo tabular relacionando tempos, taxas e pontuação SUS. |
| **03** | Confronta os tempos de tarefa com as Metas de Usabilidade e o baseline preditivo do KLM? | Metas de Usabilidade da Equipe; KLM (Etapa 2) | **Sim** | Previsto na Seção 2 e na Tabela 2, com meta de conclusão em ≤ 90s vs baseline de `135,3s`. |
| **04** | Apresenta modelo estruturado de registro de problemas com a Escala de Severidade de Nielsen? | Nielsen (1994); Barbosa & Silva (2021) | **Sim** | Tabela 3 estabelece colunas formais para tela, problema, token impactado, severidade (0 a 4) e solução. |
| **05** | Estabelece critérios objetivos de priorização de reprojeto baseados na severidade? | Rubin & Chisnell (2008); Nielsen (1994) | **Sim** | Seção 4 define a hierarquia de intervenção no Figma para as severidades de 4 a 1. |
| **06** | Exige a comprovação do TCLE oral nos primeiros 60 segundos das gravações? | Resolução CNS nº 510/2016; Beauchamp & Childress (2013) | **Sim** | Seção 2 (item 9) exige a verificação literal do consentimento gravado em vídeo. |
| **07** | Determina a cláusula formal de isolamento dos dados do Teste-Piloto de alta fidelidade? | Barbosa & Silva (2021, p. 276); Mayhew (1999) | **Sim** | Seção 2 (item 9) formaliza o descarte absoluto dos dados coletados no ensaio piloto. |
| **08** | Todas as tabelas do artefato possuem chamadas explícitas no parágrafo antecedente? | Diretrizes Pedagógicas FGA/UnB (*Sales, 2026*) | **Sim** | Todas as Tabelas (1 a 5) são explicitamente referenciadas no corpo do texto antes de sua exibição. |
| **09** | Contém linha formal de autoria do item teórico com hiperligação funcional? | Diretrizes Pedagógicas FGA/UnB (*Sales, 2026*) | **Sim** | Presente na abertura da Seção 2 com link para o perfil do autor no GitHub. |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

## 6. Histórico de Versão

A Tabela 5 documenta o histórico de versões e atualizações deste artefato de planejamento de relato.

**Tabela 5** — Histórico de Versão do Planejamento do Relato de Alta Fidelidade

| Versão | Data | Descrição da Alteração | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.2` | 11/11/2026 | Adequação da esteira da Tarefa 2 ao modelo de Protótipo Interativo Web (HTML5/CSS3/JS Vanilla): atualização dos componentes avaliados na Tabela 3b (Views PB-01 a PB-03 e modais interativos) e diretrizes de reprojeto no código-fonte (#125). | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| `1.1` | 07/11/2026 | Integração dos modelos analíticos da Tarefa 2 (Criação de Eventos Presenciais): template de métricas de desempenho e escore SUS (Tabela 2b) e matriz estruturada de problemas na escala de severidade de Nielsen (Tabela 3b - PROB-AF-T2-01 a 05) (#125). | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| `1.0` | 31/10/2026 | Estruturação inicial do Planejamento do Relato da Alta Fidelidade (Nível 3): consolidação dos 9 tópicos normativos de Barbosa & Silva (2021), template tabular de métricas e SUS (Brooke, 1996), matriz estruturada de problemas na escala de severidade de Nielsen (0 a 4), critérios de priorização de reprojeto no Figma e lista de verificação de 9 itens normativos. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 7. Referências Bibliográficas

[1] BANGOR, Aaron; KORTUM, Philip; MILLER, James. Determining what individual SUS scores mean: Adding an adjective rating scale. *Journal of Usability Studies*, v. 4, n. 3, p. 114–123, 2009.

[2] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier, 2010.

[3] BEAUCHAMP, Tom L.; CHILDRESS, James F. *Principles of Biomedical Ethics*. 7. ed. New York: Oxford University Press, 2013.

[4] BROOKE, John. SUS: A 'quick and dirty' usability scale. In: JORDAN, P. W. et al. (Ed.). *Usability Evaluation in Industry*. London: Taylor & Francis, 1996. p. 189–194.

[5] ERICSSON, K. Anders; SIMON, Herbert A. *Protocol Analysis: Verbal Reports as Data*. Cambridge: MIT Press, 1993.

[6] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[7] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1994.

[8] RUBIN, Jeffrey; CHISNELL, Dana. *Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests*. 2. ed. Indianapolis: Wiley, 2008.

[9] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama, 2026.

---

## 8. Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Em conformidade com os princípios de ética acadêmica preconizados pela Universidade de Brasília e pelo Prof. Dr. André Barros de Sales, registra-se que este artefato utilizou a assistência do modelo de inteligência artificial generativa **Google Gemini** (Gemini 1.5 Pro). A ferramenta atuou de maneira estritamente instrumental, auxiliando na formatação tabular em linguagem Markdown, verificação de padronização das referências segundo a ABNT NBR 6023:2018 e consistência da estrutura textual. Todas as análises metodológicas, modelos conceituais de registro de dados, escalas psicométricas e critérios de priorização foram integralmente definidos, elaborados e validados pelos integrantes discentes do Grupo 08.

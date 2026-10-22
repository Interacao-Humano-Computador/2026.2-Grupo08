# Análise de Tarefas: HTA e GOMS/KLM

## Tabela de Contribuição

| Integrante | Contribuição no Artefato | Data | Ferramenta de IA e Contribuição |
| :--- | :--- | :---: | :--- |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Modelagem e especificação integral da Tarefa 2: Criação de Eventos Presenciais (HTA e CTT) com Enquete e Quórum Mínimo](#tarefa-2-criacao-de-eventos-presenciais-gustavo-antonio) | 22/10/2026 | Gemini: suporte na estruturação das tabelas e sintaxe dos diagramas Mermaid |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | [Modelagem da Tarefa 3 com HTA e GOMS/KLM](#tarefa-3-busca-avancada-e-filtros-de-categoria-edvaldo-soares) com apoio de IA generativa; validação empírica pendente. | 26/09/2026 | LLM: apoio na estruturação HTA/GOMS/KLM; revisar e validar com usuários |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Estruturação metodológica, fundamentação e autoria integral da Tarefa 1 (Criação de Tópico com Tags e Markdown: HTA e KLM)](#tarefa-1-criacao-e-publicacao-de-topico-com-tags-e-markdown-vinicius-silva-araruna) | 26/09/2026 | Suporte na estruturação Markdown e tabelas |

---

## Introdução

Este artefato documenta a **Análise de Tarefas** realizada sobre as principais interações do **Fórum Diolinux Plus**, desenvolvida no âmbito da disciplina de Interação Humano-Computador (FGA0173), sob docência do Prof. Dr. André Barros de Sales (Faculdade UnB Gama — FGA/UnB).

A análise de tarefas é uma das abordagens mais tradicionais e rigorosas de IHC para compreender em profundidade o trabalho dos usuários, as operações mentais e físicas necessárias e os gargalos de usabilidade existentes em um sistema interativo (*Barbosa & Silva, 2021, p. 177*). Segundo Annett e Duncan (1967) e Card, Moran e Newell (1983), analisar tarefas não significa apenas inventariar as funções oferecidas pelo software, mas decompor sistematicamente o que as pessoas realmente fazem para atingir seus objetivos de alto nível, identificando os conhecimentos requeridos, as decisões operacionais e as condições contextuais sob as quais as ações se desenrolam.

---

## Metodologia e Técnicas Canônicas Adotadas

Em consonância com as exigências pedagógicas do Tópico 11 do Plano de Ensino da disciplina (que estabelece a modelagem de pelo menos uma tarefa individual para cada integrante empregando no mínimo duas técnicas formais distintas), a equipe selecionou métodos canônicos amplamente consolidados na literatura científica de IHC:

1. **Análise Hierárquica de Tarefas (HTA — *Hierarchical Task Analysis*)**: Proposta originalmente por Annett e Duncan (1967) e aprofundada por Barbosa e Silva (2021, p. 178-185), a HTA decompõe um objetivo de alto nível em subobjetivos, planos de execução e operações físicas/cognitivas elementares. A técnica destaca-se por evidenciar a lógica de ordenação e dependência temporal entre ações e por identificar pontos críticos onde ocorrem falhas operacionais e custos de aprendizado.
2. **GOMS e Modelo de Nível de Teclas (KLM — *Keystroke-Level Model*)**: Formulado por Card, Moran e Newell (1983) e detalhado por Barbosa e Silva (2021, p. 185-188), o GOMS (*Goals, Operators, Methods, Selection Rules*) modela o conhecimento procedural do usuário. Sua variante quantitativa, o KLM, permite prever com precisão matemática o tempo de execução que um usuário especialista sem erros levará para concluir uma tarefa computacional, decompondo-a em operadores motores ($K, P, B, H$) e cognitivos ($M$).
3. **Árvores de Tarefas Concorrentes (CTT — *Concurrent Task Trees*)**: Introduzida por Paternò (2000), a notação CTT enriquece a modelagem hierárquica ao categorizar as tarefas conforme seus agentes de execução (tarefas do usuário, do sistema, interativas ou abstratas) e formalizar operadores temporais avançados (escolha, concorrência, desativação e sincronização).

A Figura 1 e a Figura 2 ilustram a definição destas técnicas (HTA e GOMS, respectivamente) extraídas diretamente da bibliografia base.

![Print do livro de IHC de Barbosa e Silva detalhando a técnica HTA](../assets/referencias/analise_tarefas_hta_pg170.png)

**Figura 1** — Trecho do livro de Barbosa e Silva detalhando a técnica HTA (Análise Hierárquica de Tarefas).

![Print do livro de IHC de Barbosa e Silva detalhando a técnica GOMS](../assets/referencias/analise_tarefas_goms_pg180.png)

**Figura 2** — Trecho do livro de Barbosa e Silva detalhando a técnica GOMS e o KLM.


---

## Mapeamento Geral das Tarefas Analisadas

A Tabela 1 apresenta a visão sistêmica da divisão das tarefas prioritárias do Fórum Diolinux Plus entre os membros da equipe, garantindo cobertura das principais jornadas da plataforma.

**Tabela 1** — Mapeamento de atribuição das tarefas e técnicas adotadas

| **Tarefa Analisada** | **Técnicas Empregadas** | **Autor Responsável** | **Revisor** |
| :--- | :--- | :--- | :--- |
| **Tarefa 1**: Criação e Publicação de Tópico de Dúvida com Tags e Formatação Markdown | HTA (Diagrama + Tabela) + GOMS/KLM | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant) |
| **Tarefa 2**: Criação de Eventos Presenciais (Sondagem, Quórum e Agendamento) | HTA (Diagrama + Tabela) + CTT | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| **Tarefa 3**: Busca Avançada e Filtros de Categoria | HTA (Diagrama + Tabela) + GOMS/CMN-GOMS | [Edvaldo Soares](https://github.com/PajeMurici-dev) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |

_Fonte: Elaborada pelos autores, 2026._

A Tabela 1 assegura que cada integrante assume a responsabilidade direta pela modelagem aprofundada de um fluxo crítico do fórum.

---

## Tarefa 1: Criação e Publicação de Tópico com Tags e Markdown (Vinicius Silva Araruna)

- **Autor Principal**: [Vinicius Silva Araruna](https://github.com/ViniciusA05)
- **Revisor**: [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant)
- **Objeto de Análise**: Fluxo de composição, categorização taxonômica, inserção de blocos de código com sintaxe Markdown e submissão de nova postagem de dúvida na plataforma Discourse do Fórum Diolinux Plus.

### 1. Modelagem HTA (Análise Hierárquica de Tarefas)

A Figura 1 apresenta o diagrama hierárquico da Tarefa 1 elaborado na notação canônica de Annett e Duncan (1967) e Barbosa e Silva (2021).

```mermaid
graph TD
    classDef goal fill:#1E293B,stroke:#0EA5E9,stroke-width:2px,color:#F8FAFC;
    classDef sub fill:#334155,stroke:#94A3B8,stroke-width:1.5px,color:#F8FAFC;
    classDef op fill:#0F172A,stroke:#38BDF8,stroke-width:1px,color:#E2E8F0;
    classDef plan fill:#475569,stroke:#F59E0B,stroke-width:1.5px,color:#FEF3C7;

    G0["0. Publicar Tópico de Dúvida Técnica no Fórum Diolinux Plus"]:::goal
    P0["Plano 0: Realizar 1 depois 2 depois 3 depois 4 e finalmente 5"]:::plan

    G0 --> P0
    P0 --> G1["1. Acionar Mecanismo de Criação de Tópico"]:::sub
    P0 --> G2["2. Definir Título e Avaliar Desduplicação"]:::sub
    P0 --> G3["3. Categorizar e Classificar por Tags"]:::sub
    P0 --> G4["4. Redigir e Formatar Conteúdo da Mensagem"]:::sub
    P0 --> G5["5. Revisar e Confirmar Publicação"]:::sub

    P1["Plano 1: 1.1 ou 1.2"]:::plan
    G1 --> P1
    P1 --> O11["1.1 Clicar no botão '+ Novo Tópico'"]:::op
    P1 --> O12["1.2 Pressionar tecla de atalho 'c'"]:::op

    P2["Plano 2: 2.1 depois 2.2 e opcionalmente 2.3"]:::plan
    G2 --> P2
    P2 --> O21["2.1 Clicar no campo de título e digitar descrição"]:::op
    P2 --> O22["2.2 Inspecionar painel lateral de tópicos semelhantes"]:::op
    P2 --> O23["2.3 Ajustar termos do título se houver tópico correlato"]:::op

    P3["Plano 3: 3.1 depois 3.2"]:::plan
    G3 --> P3
    P3 --> O31["3.1 Selecionar categoria adequada no dropdown"]:::op
    P3 --> O32["3.2 Inserir uma ou mais tags representativas"]:::op

    P4["Plano 4: 4.1 depois 4.2 e iterativamente 4.3"]:::plan
    G4 --> P4
    P4 --> O41["4.1 Redigir texto explicativo do problema"]:::op
    P4 --> O42["4.2 Inserir blocos de código/logs com Markdown (três crases)"]:::op
    P4 --> O43["4.3 Monitorar renderizador em tempo real na aba dividida"]:::op

    P5["Plano 5: 5.1 depois 5.2"]:::plan
    G5 --> P5
    P5 --> O51["5.1 Clicar em 'Criar Tópico' ou atalho Ctrl+Enter"]:::op
    P5 --> O52["5.2 Confirmar redirecionamento para o tópico criado"]:::op
```

**Figura 1** — Diagrama HTA da tarefa de criação e publicação de tópico de dúvida com tags e Markdown no Fórum Diolinux Plus.  
_Fonte: Elaborada por [Vinicius Silva Araruna](https://github.com/ViniciusA05), 2026._

Conforme representado na Figura 1, o objetivo 0 se desdobra em cinco subobjetivos sequenciais rigorosos governados pelo Plano 0.

A Tabela 2 apresenta a legenda dos elementos constitutivos da notação HTA utilizada no diagrama.

**Tabela 2** — Legenda da notação gráfica HTA empregada

| Elemento Gráfico | Notação HTA Canônica | Descrição e Papel na Modelagem |
| :---: | :---: | :--- |
| **Retângulo Escuro com Borda Ciano** | Objetivo Nível 0 | Meta de alto nível que representa o estado final desejado pelo usuário na interação. |
| **Retângulo com Borda Cinza** | Subobjetivo (Nível 1) | Decomposição funcional de uma etapa necessária e obrigatória da tarefa. |
| **Retângulo Escuro com Borda Azul** | Operação (Nível 2) | Comportamento físico ou perceptual indivisível executado diretamente na interface. |
| **Retângulo com Borda Âmbar** | Plano de Execução | Regra lógica condicional ou sequencial que dita a ordem de execução dos subobjetivos subordinados. |

_Fonte: Elaborada por [Vinicius Silva Araruna](https://github.com/ViniciusA05), 2026._

A Tabela 3 complementa o diagrama hierárquico ao apresentar a decomposição tabular completa, com o mapeamento detalhado dos objetivos, operações, planos, problemas de usabilidade detectados na interface e recomendações ergonômicas de melhoria.

**Tabela 3** — Decomposição hierárquica tabular da Tarefa 1 (Criação e Publicação de Tópico)

| Identificador | Nome do Objetivo / Operação | Relação / Plano | Problemas de Usabilidade Detectados | Recomendações de Melhoria na Interface |
| :--- | :--- | :--- | :--- | :--- |
| **0** | **Publicar Tópico de Dúvida Técnica no Fórum Diolinux Plus** | **Plano 0**: Executar 1, 2, 3, 4 e 5 em sequência ordenada. | Usuários inexperientes tendem a redigir o corpo sem antes definir tags ou verificar duplicatas. | Adicionar indicador progressivo de preenchimento (checklist contextual). |
| **1** | **Acionar Mecanismo de Criação de Tópico** | **Plano 1**: Executar 1.1 ou 1.2. | O atalho `c` só funciona se o foco não estiver em um campo de texto ativo. | Sinalizar o atalho no tooltip do botão "+ Novo Tópico". |
| 1.1 | Clicar no botão "+ Novo Tópico" | Operação física | Botão bem posicionado no canto superior direito. | Manter padrão de contraste alto. |
| 1.2 | Pressionar tecla de atalho `c` | Operação de teclado | Desconhecido pela esmagadora maioria dos novatos. | Exibir dica de atalho de teclado no primeiro login. |
| **2** | **Definir Título e Avaliar Desduplicação** | **Plano 2**: Executar 2.1, 2.2 e, se aplicável, 2.3. | Se o título for muito curto (menos de 15 caracteres), o Discourse bloqueia a publicação sem feedback em tempo real. | Exibir contador regressivo de caracteres mínimos diretamente no campo. |
| 2.1 | Clicar no campo de título e digitar descrição | Operação motora e cognitiva | Títulos genéricos (ex: "Socorro me ajudem") prejudicam buscas futuras. | Inserir placeholder instrucional ("Ex: Como configurar placa NVIDIA no Pop!_OS"). |
| 2.2 | Inspecionar painel de tópicos semelhantes | Operação visual/cognitiva | O painel lateral ocupa espaço considerável e pode distrair telas menores. | Permitir colapsar o painel de sugestões com um clique sem perder a busca. |
| 2.3 | Ajustar termos do título se houver tópico correlato | Operação cognitiva | Usuário pode abandonar o fluxo se achar que a dúvida já foi respondida. | Permitir vincular como tópico derivado ou réplica com um clique. |
| **3** | **Categorizar e Classificar por Tags** | **Plano 3**: Executar 3.1 e 3.2. | Excesso de categorias causa indecisão e dúvida de enquadramento. | Limitar a seleção primária às 5 categorias mais utilizadas. |
| 3.1 | Selecionar categoria adequada no dropdown | Operação de seleção | O seletor exibe muitas opções sem uma hierarquia visual nítida. | Agrupar categorias por tema (Hardware, Software, Distribuições). |
| 3.2 | Inserir uma ou mais tags representativas | Operação de digitação | Algumas tags possuem sinônimos não unificados no sistema. | Autocompletar inteligente com tags consolidadas e populares. |
| **4** | **Redigir e Formatar Conteúdo da Mensagem** | **Plano 4**: Executar 4.1 e 4.2 monitorando 4.3 iterativamente. | Usuários frequentemente colam logs de erro longos sem formatação de código. | Detecção automática de saídas de terminal com inserção automática de crases. |
| 4.1 | Redigir texto explicativo do problema | Operação motora/cognitiva | Ausência de roteiro para o usuário informar versão de distro e hardware. | Disponibilizar template padrão de abertura de chamado técnico. |
| 4.2 | Inserir blocos de código com Markdown (três crases) | Operação de formatação | O botão de formatação de código da barra insere apenas indentação de 4 espaços por padrão. | Alterar o comportamento padrão da barra para inserir blocos de código cercados (```` ``` ````). |
| 4.3 | Monitorar renderizador em tempo real na aba dividida | Operação perceptiva | Em telas compactas de notebooks, o editor divide a tela tornando o espaço restrito. | Adicionar opção de alternância rápida entre abas "Editar" e "Pré-visualizar". |
| **5** | **Revisar e Confirmar Publicação** | **Plano 5**: Executar 5.1 e confirmar em 5.2. | O botão "Criar Tópico" fica desabilitado sem aviso caso falte categoria obrigatória. | Exibir tooltip explicativo em vermelho sobre o botão desabilitado indicando a pendência. |
| 5.1 | Clicar em "Criar Tópico" ou atalho Ctrl+Enter | Operação física/motora | Operação rápida e responsiva. | Manter atalho de submissão rápida universal. |
| 5.2 | Confirmar redirecionamento para o tópico criado | Operação de validação | Transição de página é rápida. | Apresentar confirmação sutil com opção de edição imediata nos primeiros 5 minutos. |

_Fonte: Elaborada por [Vinicius Silva Araruna](https://github.com/ViniciusA05), 2026._

Conforme evidenciado na Tabela 3, a análise hierárquica revela que as principais oportunidades de ganho ergonômico residem na orientação contextual do editor e na simplificação da escolha de taxonomia de categorias e tags.

---

### 2. Modelagem GOMS / KLM (Keystroke-Level Model)

O Modelo de Nível de Teclas (KLM) de Card, Moran e Newell (1983) destina-se a quantificar o tempo gasto por um **usuário especialista** executando uma tarefa rotineira no sistema sem cometer erros (*Barbosa & Silva, 2021, p. 187*).

#### Operadores Canônicos e Tempos Padronizados

A Tabela 4 define os valores temporais empíricos padrão da literatura adotados no cálculo.

**Tabela 4** — Valores padrão dos operadores do modelo KLM

| Operador | Denominação | Descrição Operacional | Tempo Canônico Adotado | Referência na Literatura |
| :---: | :--- | :--- | :---: | :--- |
| **$K$** | *Keystroke* (Tecla) | Pressionar e soltar uma tecla comum de caractere no teclado físico (usuário bom digitador: 40 a 60 ppm). | **0,20 s** | Card, Moran e Newell (1983); Barbosa e Silva (2021). |
| **$P$** | *Pointing* (Apontar) | Mover o cursor do mouse até um alvo gráfico na tela utilizando a Lei de Fitts. | **1,10 s** | Card, Moran e Newell (1983). |
| **$B$** | *Button Click* (Botão) | Pressionar e soltar o botão primário do mouse (clique). | **0,20 s** | Card, Moran e Newell (1983). |
| **$H$** | *Homing* (Mover Mãos) | Mover as mãos entre o teclado físico e o dispositivo apontador (mouse ou touchpad). | **0,40 s** | Card, Moran e Newell (1983). |
| **$M$** | *Mental Preparation* | Preparação mental e planejamento cognitivo prévio antes de iniciar uma sub-rotina ou bloco de ações. | **1,35 s** | Card, Moran e Newell (1983); Barbosa e Silva (2021). |
| **$R$** | *System Response* | Tempo de resposta e renderização do sistema computacional durante a interação. | **0,50 s** (média Discourse) | Medição empírica na plataforma Diolinux Plus. |

_Fonte: Elaborada por [Vinicius Silva Araruna](https://github.com/ViniciusA05) com base em Card, Moran e Newell (1983), 2026._

A Tabela 4 sintetiza as constantes de engenharia utilizadas para calcular o tempo total da tarefa.

#### Roteiro Operacional da Tarefa no KLM

Considera-se o cenário onde o usuário especialista Lucas Mendonça (Persona Primária) já se encontra na página inicial do fórum autenticado e deseja postar sua dúvida técnica.
- Título conciso: *"Erro Docker no Fedora"* (22 caracteres);
- Categoria: "Desenvolvimento";
- Tag: `docker`;
- Corpo textual conciso com bloco de código de 3 linhas de terminal (total: 85 caracteres digitados/colados);
- Método de execução eficiente empregado por usuário especialista.

A Tabela 5 detalha a decomposição passo a passo da tarefa segundo o KLM.

**Tabela 5** — Decomposição quantitativa das operações KLM para a Tarefa 1

| Passo | Descrição da Ação Operacional | Operadores KLM Envolvidos | Tempo Parcial (s) |
| :---: | :--- | :---: | :---: |
| 1 | Preparação mental para abrir o compositor de tópico | $M$ | 1,35 s |
| 2 | Mover as mãos para o teclado e acionar atalho de criação de tópico (`c`) | $H + K$ | 0,40 + 0,20 = 0,60 s |
| 3 | Tempo de renderização da janela do editor pelo Discourse | $R$ | 0,50 s |
| 4 | Preparação mental para formulação do título | $M$ | 1,35 s |
| 5 | Digitar o título do tópico (22 caracteres) | $22 \times K$ | $22 \times 0,20 = 4,40\text{ s}$ |
| 6 | Mover a mão para o mouse para selecionar categoria | $H$ | 0,40 s |
| 7 | Apontar o cursor para o seletor suspenso de categoria | $P$ | 1,10 s |
| 8 | Clicar para abrir a listagem de categorias | $B$ | 0,20 s |
| 9 | Tempo de exibição da lista suspensa | $R$ | 0,20 s |
| 10 | Preparação mental e busca visual da categoria "Desenvolvimento" | $M$ | 1,35 s |
| 11 | Apontar para o item "Desenvolvimento" e clicar | $P + B$ | 1,10 + 0,20 = 1,30 s |
| 12 | Apontar para o campo de tags e clicar | $P + B$ | 1,10 + 0,20 = 1,30 s |
| 13 | Mover as mãos de volta para o teclado | $H$ | 0,40 s |
| 14 | Digitar a tag `docker` (6 caracteres) e confirmar com Enter | $7 \times K$ | $7 \times 0,20 = 1,40\text{ s}$ |
| 15 | Mover foco para a área de texto do corpo da mensagem (`Tab` ou clique) | $K$ | 0,20 s |
| 16 | Preparação mental para organizar a estrutura do texto e bloco de código | $M$ | 1,35 s |
| 17 | Digitar corpo do texto e comandos Markdown com crases (85 caracteres) | $85 \times K$ | $85 \times 0,20 = 17,00\text{ s}$ |
| 18 | Olhar de verificação na pré-visualização ao lado | $M$ | 1,35 s |
| 19 | Acionar atalho de envio direto (`Ctrl+Enter`) | $2 \times K$ | $2 \times 0,20 = 0,40\text{ s}$ |
| 20 | Tempo de envio e resposta do servidor Discourse | $R$ | 0,80 s |
| **TOTAL** | **Tempo Previsto de Execução pelo Modelo KLM** | **$5M + 3H + 4P + 3B + 117K + 3R$** | **36,15 s** |

_Fonte: Elaborada por [Vinicius Silva Araruna](https://github.com/ViniciusA05), 2026._

#### Análise e Interpretação dos Resultados do KLM

A análise quantitativa dos tempos da Tabela 5 conduz a conclusões ergonômicas reveladoras:

1. **Predomínio da Digitação Motora ($K$)**: A digitação responde por aproximadamente $23,6\text{ s}$ dos $36,15\text{ s}$ totais ($65,3\%$). Isso confirma que o desempenho na tarefa está intrinsecamente ligado à agilidade do teclado e à eficiência dos atalhos de Markdown.
2. **Custo das Transições Teclado-Mouse ($H$)**: As constantes trocas de modo entre digitar texto e apontar campos suspensos com o mouse consomem $1,2\text{ s}$ apenas em movimentos de braço ($3 \times H$) e outros $4,8\text{ s}$ em apontamentos e cliques ($P + B$). Se o editor permitisse autocompletar tags e categorias inline via teclado (e.g., digitando `#desenvolvimento`), o tempo de tarefa cairia cerca de $5\text{ segundos}$ ($14\%$ de ganho de eficiência).
3. **Carga Cognitiva Preparatória ($M$)**: As pausas mentais representam $6,75\text{ s}$ ($18,7\%$). Elas ocorrem nos momentos críticos de transição: antes de titular a dúvida, ao inspecionar seletor de categorias e ao verificar o renderizador de Markdown. A automação da detecção de duplicatas e a presença de templates contextuais reduzem diretamente a duração dessas pausas cognitivas.

---

## Tarefa 2: Criação de Eventos Presenciais (Gustavo Antonio)

- **Autor Principal**: [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant)
- **Revisor**: [Vinicius Silva Araruna](https://github.com/ViniciusA05)
- **Técnicas Adotadas**: HTA (Análise Hierárquica de Tarefas) e CTT (Árvores de Tarefas Concorrentes)
- **Objeto de Análise**: Fluxo sociotécnico de planejamento, validação comunitária e agendamento de eventos presenciais (workshops, meetups e encontros de software livre) na plataforma Discourse do Fórum Diolinux Plus. O fluxo abrange desde a sondagem de interesse e horários por enquete até a publicação do evento com restrição de quórum mínimo e gestão automatizada de ingressos/confirmação.

### 1. Especificação da Aplicação da Funcionalidade na Interface do Diolinux Plus

A funcionalidade **Criação de Eventos Presenciais (CF02)** integra-se ao ecossistema Discourse por meio de três pontos de contato de interface:

1. **Acesso e Navegação:**
   - Adição do item **"Eventos e Encontros"** no menu de navegação da barra lateral (*Sidebar Navigation*) e no cabeçalho superior do fórum, permitindo filtrar eventos por região geográfica e status (*"Em Votação"*, *"Confirmados"*, *"Inscrições Abertas"*).
   - Botão de ação primária **"+ Criar Evento"** disponibilizado na página da categoria ou acessível pelo compositor padrão via seletor de tipo de postagem (*Tópico Padrão* vs. *Evento Presencial*).

2. **Mecanismo de Enquete de Horários e Local (Sondagem Prévia):**
   - Para evitar eventos vazios ou datas inviáveis, o organizador pode abrir um tópico em modo **"Sondagem Coletiva"**.
   - Integração com um componente interativo de **Grid de Disponibilidade/Enquete (Poll)** permitindo que os membros votem em múltiplos turnos, dias e polos sugeridos. O sistema processa os votos e oferece a opção de consolidar automaticamente a opção vencedora no formulário oficial do evento.

3. **Formulário de Configuração, Quórum Mínimo e Gestão de Ingressos:**
   - O organizador formaliza a data, horário, local (com integração a mapas) e limite de participantes (*Lotação Máxima*).
   - **Regra de Negócio de Quórum Mínimo:** Definição obrigatória de um número mínimo de inscrições para viabilizar o evento (ex.: mínimo 10, máximo 30).
   - **Controle de Estados e Visibilidade:**
     - *Pendente de Quórum:* O evento aceita inscrições exibindo indicador de progresso (*"8 de 12 inscritos até o deadline"*).
     - *Confirmado:* Quórum atingido antes do prazo limite; os ingressos definitivos (com QR Code) são emitidos e as cobranças (se evento pago com rateio) são debitadas.
     - *Cancelado por Falta de Quórum:* Se o deadline expirar sem atingir a meta mínima, os inscritos são notificados, valores retidos são estornados e o tópico é atualizado automaticamente.

---

### 2. Modelagem HTA (Análise Hierárquica de Tarefas)

A Figura 4 apresenta o diagrama hierárquico da Tarefa 2 elaborado na notação canônica de Annett e Duncan (1967) e Barbosa e Silva (2021).

```mermaid
graph TD
    classDef goal fill:#1E293B,stroke:#0EA5E9,stroke-width:2px,color:#F8FAFC;
    classDef sub fill:#334155,stroke:#94A3B8,stroke-width:1.5px,color:#F8FAFC;
    classDef op fill:#0F172A,stroke:#38BDF8,stroke-width:1px,color:#E2E8F0;
    classDef plan fill:#475569,stroke:#F59E0B,stroke-width:1.5px,color:#FEF3C7;

    G0["0. Organizar e Publicar Evento Presencial da Comunidade"]:::goal
    P0["Plano 0: 1 opcionalmente, depois 2, depois 3; se quórum atingido executar 4; senão executar 5"]:::plan

    G0 --> P0
    P0 --> G1["1. Sondar Interesse, Data e Local com a Comunidade"]:::sub
    P0 --> G2["2. Configurar e Publicar a Página do Evento"]:::sub
    P0 --> G3["3. Monitorar Inscrições e Adesão de Quórum"]:::sub
    P0 --> G4["4. Confirmar Evento e Emitir Ingressos"]:::sub
    P0 --> G5["5. Cancelar Evento por Falta de Quórum"]:::sub

    P1["Plano 1: 1.1 > 1.2 > 1.3 > 1.4"]:::plan
    G1 --> P1
    P1 --> O11["1.1 Criar tópico de sondagem de evento na categoria regional"]:::op
    P1 --> O12["1.2 Inserir enquete com opções de dias, turnos e locais"]:::op
    P1 --> O13["1.3 Publicar enquete e aguardar votação dos interessados"]:::op
    P1 --> O14["1.4 Avaliar opção vencedora na matriz de votos"]:::op

    P2["Plano 2: 2.1 > 2.2 > 2.3 > 2.4 > 2.5"]:::plan
    G2 --> P2
    P2 --> O21["2.1 Informar título, ementa técnica e palestrantes"]:::op
    P2 --> O22["2.2 Definir data, horário e endereço/mapa (ou importar da enquete)"]:::op
    P2 --> O23["2.3 Definir quórum mínimo e lotação máxima de participantes"]:::op
    P2 --> O24["2.4 Configurar modalidade de ingressos e taxa de rateio de custos"]:::op
    P2 --> O25["2.5 Submeter e publicar evento oficial no fórum"]:::op

    P3["Plano 3: Repetir 3.1 até a data limite; se inscritos < mínimo, executar 3.2"]:::plan
    G3 --> P3
    P3 --> O31["3.1 Acompanhar contador de inscritos em tempo real no dashboard"]:::op
    P3 --> O32["3.2 Disparar lembrete de proximidade do prazo no tópico do fórum"]:::op

    P4["Plano 4: 4.1 > 4.2 > 4.3"]:::plan
    G4 --> P4
    P4 --> O41["4.1 Alterar status do evento para 'Confirmado'"]:::op
    P4 --> O42["4.2 Disparar ingressos com QR Code e confirmação por e-mail"]:::op
    P4 --> O43["4.3 Abrir tópico/chat de alinhamento logístico entre confirmados"]:::op

    P5["Plano 5: 5.1 > 5.2 > 5.3"]:::plan
    G5 --> P5
    P5 --> O51["5.1 Notificar automaticamente participantes sobre a insuficiência de quórum"]:::op
    P5 --> O52["5.2 Estornar valores pré-autorizados ou taxa de inscrição"]:::op
    P5 --> O53["5.3 Encerrar inscrições e arquivar tópico com justificativa"]:::op
```

**Figura 4** — Diagrama HTA da tarefa de Criação de Eventos Presenciais com Enquete e Quórum Mínimo.  
_Fonte: Elaborada por [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant), 2026._

A Tabela 6 apresenta a decomposição hierárquica tabular da Tarefa 2 estritamente no **formato canônico da Tabela 8.4 de Barbosa & Silva (2021, p. 165–166)**, contendo as duas colunas estruturais (*objetivos / operações* com a tupla de ⟨*input*, *ação*, *feedback*, *plano*⟩ e *problemas e recomendações* de IHC).

**Tabela 6** — Decomposição tabular da Tarefa 2: Criação de Eventos Presenciais (Formato Canônico: Tabela 8.4 de Barbosa & Silva)

| Objetivos / Operações | Problemas e Recomendações de IHC |
| :--- | :--- |
| **0. Organizar e Publicar Evento Presencial da Comunidade** `(1)>2>3>(4/5)`<br>**input**: interesse da comunidade em promover workshop/meetup local de Linux e dados preliminares da atividade.<br>**feedback**: evento publicado na categoria regional do Discourse e notificação final aos participantes com ingressos confirmados ou aviso de cancelamento.<br>**plano**: realizar sondagem prévia (opcional), configurar e publicar a página do evento, monitorar quórum até o prazo limite; se o quórum mínimo for atingido, confirmar evento e emitir ingressos; caso contrário, cancelar evento por falta de quórum. | **problema**: organizadores publicarem eventos arbitrários sem validação prévia de público, gerando alto índice de cancelamentos e frustração coletiva.<br>**recomendação**: o sistema deve sugerir proativamente a execução da sondagem de horários e locais antes de abrir o formulário definitivo de publicação. |
| **1. Sondar Interesse, Data e Local com a Comunidade** `1>2>3>4`<br>**input**: proposta de tema do encontro e opções preliminares de datas, horários e polos da cidade.<br>**feedback**: matriz consolidada de votos dos membros apontando a data/turno de maior convergência.<br>**plano**: criar tópico de sondagem, inserir componente de enquete de calendário, publicar tópico e aguardar votação, avaliar opção vencedora. | **problema**: enquetes informais em texto corrido dificultam a tabulação e geram dispersão de comentários.<br>**recomendação**: disponibilizar componente visual estruturado de enquete de disponibilidade (grid de datas e turnos). |
| **1.1 Criar tópico de sondagem regional**<br>**ação**: redigir contextualização do encontro e selecionar a subcategoria regional correspondente no fórum. | **problema**: dúvida sobre qual categoria regional do Discourse enquadrar o tópico.<br>**recomendação**: interface com seletor guiado por estado/cidade no momento de abertura do tópico. |
| **1.2 Inserir componente de enquete com opções de dias, turnos e locais**<br>**ação**: configurar opções de múltipla escolha com limites de datas no modal de enquete. | **problema**: sintaxe de BBCode/Markdown (`[poll]`) do Discourse complexa e propensa a erros de formatação para usuários iniciantes.<br>**recomendação**: fornecer construtor visual de enquetes interativo (*GUI*) com calendário gráfico integrado. |
| **1.3 Publicar enquete e aguardar votação dos interessados**<br>**ação**: submeter o tópico e manter período aberto para participação dos membros. | **problema**: baixa visibilidade inicial de tópicos de sondagem na listagem geral do fórum.<br>**recomendação**: fixação automática temporária (*pin*) do tópico na categoria regional durante o período de votação. |
| **1.4 Avaliar opção vencedora na matriz de votos**<br>**ação**: examinar o gráfico de distribuição de votos e identificar o horário com maior quórum potencial. | **problema**: organizador ter que cruzar manualmente disponibilidades conflitantes.<br>**recomendação**: o sistema deve destacar com badge a combinação vencedora e oferecer o botão "Importar para Novo Evento". |
| **2. Configurar e Publicar a Página do Evento** `1>2>3>4>5`<br>**input**: dados de título, ementa, horário/local consolidados e regras de quórum.<br>**feedback**: tópico oficial de evento criado com selo de status *"Pendente de Quórum"* e formulário de inscrição ativo.<br>**plano**: informar dados descritivos, definir data/local (ou importar da sondagem), estipular quórum mínimo e lotação máxima, configurar modalidade de ingressos, submeter e publicar evento. | **problema**: formulário monolítico muito extenso gerando sobrecarga cognitiva e abandono de preenchimento.<br>**recomendação**: estruturar o formulário em etapas progressivas (*wizard/stepper*) com salvamento automático de rascunhos. |
| **2.1 Informar título, ementa técnica e palestrantes**<br>**ação**: preencher os campos de descrição, objetivos do workshop e pré-requisitos dos participantes. | **problema**: descrições vagas sem explicitação do nível de conhecimento prévio exigido.<br>**recomendação**: campos dedicados para "Público-alvo" e "Materiais necessários" (ex.: trazer notebook). |
| **2.2 Definir data, horário e endereço/mapa**<br>**ação**: inserir endereço físico do local do evento ou validar os dados importados da enquete. | **problema**: endereços informados de forma ambígua que dificultam a localização no dia do evento.<br>**recomendação**: campo com autocompletar integrado a mapas (*OpenStreetMap/Google Maps*) e pré-visualização visual de rotas. |
| **2.3 Definir quórum mínimo e lotação máxima de participantes**<br>**ação**: especificar a quantidade mínima de inscritos para viabilidade do evento e a capacidade máxima do espaço físico. | **problema**: organizador não compreender o impacto do quórum mínimo na gestão do evento.<br>**recomendação**: inserir *tooltip* e aviso explicativo contextual: *"O evento será cancelado automaticamente caso o número mínimo não seja alcançado até a data limite"*. |
| **2.4 Configurar modalidade de ingressos e taxa de rateio de custos**<br>**ação**: selecionar evento gratuito ou definir valor de contribuição para rateio (coffee break, reserva de sala). | **problema**: insegurança dos participantes quanto à devolução de valores em eventos não confirmados.<br>**recomendação**: garantia explícita visível: *"Em caso de cancelamento por falta de quórum, o valor é estornado automaticamente sem taxas adicionais"*. |
| **2.5 Submeter e publicar evento oficial no fórum**<br>**ação**: revisar o resumo das informações e confirmar a publicação pública. | **problema**: publicação acidental de dados incorretos sem revisão prévia.<br>**recomendação**: exibir modal de confirmação (*review summary*) com os parâmetros críticos antes do disparo. |
| **3. Monitorar Inscrições e Adesão de Quórum** `1 (se < mínimo > 2)`<br>**input**: fluxo contínuo de inscrições de usuários da comunidade.<br>**feedback**: barra de progresso de quórum atualizada em tempo real no topo da página do evento.<br>**plano**: acompanhar contador de inscritos até a data limite estipulada; se o contingente for inferior ao quórum mínimo, disparar lembrete de proximidade do prazo. | **problema**: organizador ficar no escuro quanto ao ritmo de inscrições e proximidade do prazo limite.<br>**recomendação**: dashboard do evento com contagem regressiva visual e taxa de preenchimento de vagas. |
| **3.1 Acompanhar contador de inscritos em tempo real no dashboard**<br>**ação**: visualizar métricas de inscritos, vagas restantes e prazo limite. | **problema**: necessidade de recarregar a página continuamente para acompanhar novas inscrições.<br>**recomendação**: atualização assíncrona automática via WebSockets (*live reload*) do contador de inscritos. |
| **3.2 Disparar lembrete de proximidade do prazo no tópico do fórum**<br>**ação**: emitir aviso público aos seguidores do tópico alertando sobre as últimas vagas e a proximidade do encerramento. | **problema**: falta de canal direto para reengajar os usuários que votaram na enquete mas ainda não formalizaram a inscrição.<br>**recomendação**: recurso de "Notificar interessados da enquete" com um único clique no painel do organizador. |
| **4. Confirmar Evento e Emitir Ingressos** `1>2>3`<br>**input**: atingimento da meta de quórum mínimo antes do encerramento do prazo limite.<br>**feedback**: transição automática do status do evento para *"Confirmado"* e emissão dos comprovantes de acesso.<br>**plano**: atualizar status oficial, disparar ingressos eletrônicos com QR Code e abrir tópico exclusivo para logística dos participantes. | **problema**: participantes esquecerem ou não localizarem seus dados de acesso no dia da atividade.<br>**recomendação 1**: emissão com canal duplo (notificação no fórum com QR Code acessível offline + envio de PDF por e-mail).<br>**recomendação 2**: inclusão de código alfanumérico curto para conferência caso haja falha na leitura óptica do QR Code. |
| **4.1 Alterar status do evento para 'Confirmado'**<br>**ação**: disparar gatilho sistêmico que encerra a fase de incerteza de quórum. | **problema**: atrasos na confirmação gerando desistência de participantes.<br>**recomendação**: automação imediata da transição no exato instante em que o último ingresso do quórum mínimo for preenchido. |
| **4.2 Disparar ingressos com QR Code e confirmação por e-mail**<br>**ação**: gerar credencial nominal única criptografada para cada participante inscrito. | **problema**: indisponibilidade de conexão móvel no local do evento para abrir o e-mail.<br>**recomendação**: integração com armazenamento local na aplicação web (PWA) e possibilidade de download direto da imagem da credencial. |
| **4.3 Abrir tópico/chat de alinhamento logístico entre confirmados**<br>**ação**: criar espaço restrito aos inscritos para combinação de caronas, dúvidas sobre rotas e materiais. | **problema**: tópicos públicos ficarem poluídos com conversas operacionais particulares de participantes locais.<br>**recomendação**: criação automática de uma mensagem em grupo no Discourse restrita aos membros com presença confirmada. |
| **5. Cancelar Evento por Falta de Quórum** `1>2>3`<br>**input**: expiração da data limite sem que o quórum mínimo de inscritos tenha sido alcançado.<br>**feedback**: evento sinalizado como *"Cancelado por Quórum"* com envio de esclarecimentos empáticos e liberação de valores retidos.<br>**plano**: notificar participantes inscritos, executar estorno integral de taxas pré-autorizadas e arquivar tópico de inscrições. | **problema**: sensação de frustração, insegurança financeira e desestímulo à participação em futuros eventos da comunidade.<br>**recomendação 1**: mensagem transparente e humanizada explicando que o cancelamento protegeu a viabilidade da atividade coletiva.<br>**recomendação 2**: processo financeiro 100% automatizado por pré-autorização bancária (liberação sem retenção em fatura). |
| **5.1 Notificar automaticamente participantes sobre a insuficiência de quórum**<br>**ação**: envio de notificação interna e e-mail informando o cancelamento com justificativa clara. | **problema**: e-mails de cancelamento caírem na caixa de spam do usuário.<br>**recomendação**: exibir notificação tipo *banner* destacado no cabeçalho do fórum no próximo login do usuário. |
| **5.2 Estornar valores pré-autorizados ou taxa de inscrição**<br>**ação**: comando automático à intermediadora de pagamento liberando os limites retidos. | **problema**: demora no estorno de compras por cartão de crédito gerando reclamações e atritos.<br>**recomendação**: utilizar pré-autorização (captura tardia), de forma que o dinheiro só saia da conta do usuário se o quórum for atingido. |
| **5.3 Encerrar inscrições e arquivar tópico com justificativa**<br>**ação**: bloquear novos registros de participantes e atualizar o título com tag `[CANCELADO]`. | **problema**: usuários continuarem tentando se inscrever ou comentar em eventos já cancelados.<br>**recomendação**: congelamento automático dos botões de ação e arquivamento do tópico para consulta histórica. |

_Fonte: Elaborada por [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant), 2026. Estruturada segundo o modelo canônico da Tabela 8.4 de Barbosa & Silva (2021)._

---

### 3. Modelagem CTT (Árvores de Tarefas Concorrentes)

O CTT (*Concurrent Task Trees*), formalizado por Paternò (2000), é utilizado para modelar as relações temporais, concorrências e papéis dos atores na tarefa de Criação de Eventos Presenciais.

```mermaid
graph TD
    classDef abstract fill:#f0f0f0,stroke:#333,stroke-width:2px;
    classDef interaction fill:#d1e8ff,stroke:#0055aa,stroke-width:1.5px;
    classDef user fill:#ffefd5,stroke:#aa5500,stroke-width:1.5px;
    classDef system fill:#e0ffe0,stroke:#00aa00,stroke-width:1.5px;
    classDef choice fill:#ffe0e0,stroke:#aa0000,stroke-width:1.5px;

    %% Tarefa Raiz
    T0["T0: Gerenciar Ciclo de Vida do Evento Presencial"]:::abstract

    %% Subtarefas Nivel 1
    T1["T1: Sondar Viabilidade e Horários"]:::abstract
    T2["T2: Configurar e Publicar Evento"]:::abstract
    T3["T3: Controlar Inscrições e Quórum"]:::abstract
    T4["T4: Desfecho do Evento"]:::choice

    T0 --> T1
    T0 --> T2
    T0 --> T3
    T0 --> T4

    %% Decomposicao T1
    T1a["T1a: Propor opções de datas e locais"]:::interaction
    T1b["T1b: Votar em opções de disponibilidade"]:::user
    T1c["T1c: Apurar e consolidar votos da enquete"]:::system
    T1 --> T1a
    T1 --> T1b
    T1 --> T1c

    %% Decomposicao T2
    T2a["T2a: Informar dados básicos e mapa"]:::interaction
    T2b["T2b: Definir quórum mínimo e lotação"]:::user
    T2c["T2c: Configurar ingressos e rateio"]:::interaction
    T2d["T2d: Validar formulário e publicar página"]:::system
    T2 --> T2a
    T2 --> T2b
    T2 --> T2c
    T2 --> T2d

    %% Decomposicao T3
    T3a["T3a: Efetuar inscrição no evento"]:::interaction
    T3b["T3b: Contabilizar quórum em tempo real"]:::system
    T3c["T3c: Monitorar meta no painel"]:::user
    T3 --> T3a
    T3 --> T3b
    T3 --> T3c

    %% Decomposicao T4 (Escolha / Condicional)
    T4a["T4a: Quórum Atingido: Emitir Ingressos e Confirmar"]:::system
    T4b["T4b: Quórum Não Atingido: Cancelar e Estornar"]:::system
    T4 -->|"Quórum OK"| T4a
    T4 -->|"Prazo expirado sem quórum"| T4b
```

#### 3.1 Interpretação do Modelo CTT da Tarefa 2:
- **T1 `[]>>` T2 (Sondagem com Habilitação Opcional):** A sondagem comunitária via enquete habilita o organizador a importar horários e locais consensuais diretamente para o formulário oficial de publicação.
- **T2 `>>` T3 (Publicação Habilita Inscrição):** Uma vez publicado o evento, inicia-se a concorrência temporal (`|||`) entre as inscrições dos usuários (T3a), a contabilização em segundo plano pelo sistema (T3b) e o monitoramento pelo organizador (T3c).
- **T4 (Ponto de Escolha e Alternância de Estados):**
  - Se o limiar de **quórum mínimo** for satisfeito antes da data limite, dispara-se o ramo **T4a** (emissão de ingressos com QR Code, cobrança/confirmação e abertura de canal de interação para os confirmados).
  - Caso o prazo expire sem atingir o contingente mínimo estipulado, o sistema aciona compulsoriamente o ramo **T4b** (notificação de cancelamento com justificativa clara e estorno integral de taxas pré-autorizadas).
---

## Tarefa 3: Busca Avançada e Filtros de Categoria (Edvaldo Soares)

- **Autor Principal**: [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev)
- **Revisor**: [Vinicius Silva Araruna](https://github.com/ViniciusA05)
- **Técnicas Adotadas**: HTA (Análise Hierárquica de Tarefas) e GOMS / CMN-GOMS

- **Cenário de uso**: Uma pessoa acessa o fórum para encontrar informações sobre um problema de Wi-Fi no Linux Mint. Antes de criar uma publicação, pesquisa discussões existentes, examina os resultados e avalia se alguma resposta atende à necessidade.
- **Status da modelagem**: Proposta analítica inicial; confirmar os passos na interface e validar com participantes antes de caracterizar resultados como empíricos.

#### 1. Modelagem HTA — Análise Hierárquica de Tarefas

A HTA parte dos objetivos do usuário e os decompõe em subobjetivos, operações e planos. A estrutura abaixo segue Barbosa e Silva (2010, p. 192–196). A Figura 3 apresenta o diagrama hierárquico da decomposição da tarefa.

```mermaid
graph TD
    classDef goal fill:#1E293B,stroke:#0EA5E9,stroke-width:2px,color:#F8FAFC;
    classDef sub fill:#334155,stroke:#94A3B8,stroke-width:1.5px,color:#F8FAFC;
    classDef op fill:#0F172A,stroke:#38BDF8,stroke-width:1px,color:#E2E8F0;
    classDef plan fill:#475569,stroke:#F59E0B,stroke-width:1.5px,color:#FEF3C7;

    G0["0. Encontrar uma discussão útil sobre o problema de Wi-Fi no Linux Mint"]:::goal
    P0["Plano 0: executar 1, 2, 3 e 4; sem resultado útil, executar 5"]:::plan
    G0 --> P0
    P0 --> G1["1. Acessar a busca do fórum"]:::sub
    P0 --> G2["2. Formular e executar a consulta"]:::sub
    P0 --> G3["3. Examinar os resultados"]:::sub
    P0 --> G4["4. Avaliar uma discussão candidata"]:::sub
    P0 --> G5["5. Reformular a busca ou encerrar"]:::sub
    G1 --> O11["1.1 Localizar e acionar o campo de busca"]:::op
    G2 --> O21["2.1 Digitar termos relacionados ao problema"]:::op
    G2 --> O22["2.2 Aplicar filtros de categoria e tag, se disponíveis"]:::op
    G2 --> O23["2.3 Executar a consulta"]:::op
    G3 --> O31["3.1 Examinar títulos e trechos dos resultados"]:::op
    G3 --> O32["3.2 Comparar categoria, tag e data, quando exibidas"]:::op
    G3 --> O33["3.3 Selecionar um resultado potencialmente relevante"]:::op
    G4 --> O41["4.1 Abrir a discussão selecionada"]:::op
    G4 --> O42["4.2 Comparar o problema com a necessidade atual"]:::op
    G4 --> O43["4.3 Verificar as respostas e uma solução aplicável"]:::op
    G5 --> O51["5.1 Alterar termos ou rever/remover filtros"]:::op
    G5 --> O52["5.2 Executar novamente ou encerrar sem resultado"]:::op
```

**Figura 3** — Diagrama HTA da busca de discussão sobre Wi-Fi no Linux Mint.  
_Fonte: Elaborada por [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev), 2026._

**Plano 0:** acessar a busca, formular e executar a consulta, examinar resultados e avaliar uma discussão candidata. Se nenhum resultado for útil, reformular os termos ou rever os filtros; repetir até encontrar conteúdo aplicável ou encerrar.

#### 2. Modelagem GOMS e estimativa KLM

GOMS descreve objetivos, operadores, métodos e regras de seleção. KLM estima o tempo de uma sequência de operadores para um usuário competente que já domina a tarefa e não comete erros. O cálculo abaixo é uma estimativa teórica, não uma medição com participantes (BARBOSA; SILVA, 2010, p. 196–199).

**Objetivo G0:** localizar uma discussão que possa responder a uma necessidade sobre Wi-Fi no Linux Mint.

**Método M1 — busca direta com filtros na consulta:**

1. Formular consulta com termos relacionados ao problema.
2. Incluir filtros de categoria e tag, se forem conhecidos e aceitos pela interface.
3. Executar a busca.
4. Examinar os resultados e selecionar um candidato.
5. Abrir a discussão e avaliar a compatibilidade do conteúdo.
6. Se nenhum resultado for útil, alterar os termos ou rever os filtros e repetir.

**Regras de seleção:**

- Se o usuário conhece o nome da distribuição ou do componente, inclui esse termo na consulta.
- Se os resultados forem numerosos ou pouco relacionados, acrescenta um filtro pertinente, desde que compreenda seu efeito.
- Se não houver resultado útil, remove ou altera um filtro e tenta termos mais amplos.
- Se encontrar uma discussão compatível, abre o tópico e avalia as respostas.
- Se nenhuma discussão for aplicável após a reformulação, encerra a busca ou segue para a tarefa de criação de tópico, modelada separadamente.

A Tabela 7 adota os tempos de referência de Barbosa e Silva (2010, p. 199): K = 0,20 s para digitador mediano; P = 1,10 s; B = 0,10 s por pressionar ou soltar o botão; H = 0,40 s; M = 1,20 s. O tempo de resposta do sistema varia.

**Tabela 7** — Operadores KLM e tempos de referência adotados

| Operador | Significado | Tempo adotado |
| :---: | :--- | :---: |
| **K** | Pressionar e soltar uma tecla | 0,20 s |
| **P** | Apontar o cursor para um alvo na tela | 1,10 s |
| **B** | Pressionar ou soltar o botão do mouse | 0,10 s |
| **H** | Mover a mão entre teclado e mouse | 0,40 s |
| **M** | Preparação mental para uma ação ou sequência relacionada | 1,20 s |
| **T(n)** | Digitar cadeia de n caracteres | n × K |
| **R** | Aguardar a resposta do sistema | Variável; medir na observação |

_Fonte: Barbosa e Silva (2010, p. 199), aplicada à tarefa._

Para uma conta reproduzível, considera-se a consulta `wifi Linux Mint categories:linux tags:linux-mint`, com 48 caracteres, digitada no campo de busca. A sintaxe de filtros `categories:` e `tags:` é documentada pelo Discourse (DISCOURSE, s.d.); a categoria, a tag e a compatibilidade dessa consulta precisam ser confirmadas na instância do fórum antes de usar o cálculo como resultado final. A Tabela 8 apresenta a sequência de operadores KLM calculada.

**Tabela 8** — Sequência KLM ilustrativa para a busca

| Ordem | Operador | Ação modelada | Tempo |
| :---: | :---: | :--- | :---: |
| 1 | M | Preparar a consulta e decidir os filtros | 1,20 s |
| 2 | H | Mover a mão do teclado para o mouse | 0,40 s |
| 3 | P | Apontar para o controle de busca | 1,10 s |
| 4 | B + B | Pressionar e soltar para ativar a busca | 0,20 s |
| 5 | H | Mover a mão para o teclado | 0,40 s |
| 6 | T(48) | Digitar a consulta: 48 × 0,20 s | 9,60 s |
| 7 | K | Pressionar Enter | 0,20 s |
| 8 | R₁ | Aguardar a apresentação dos resultados | Variável |
| 9 | M | Examinar resultados e escolher um candidato | 1,20 s |
| 10 | H | Mover a mão do teclado para o mouse | 0,40 s |
| 11 | P | Apontar para o resultado | 1,10 s |
| 12 | B + B | Pressionar e soltar para abrir o resultado | 0,20 s |
| 13 | R₂ | Aguardar a abertura da discussão | Variável |
| 14 | M | Comparar a discussão com a necessidade | 1,20 s |
|  |  | **Subtotal, sem R₁, R₂ e leitura detalhada** | **17,20 s** |

_Fonte: Elaborada por [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev), 2026, com tempos de referência de Barbosa e Silva (2010, p. 199)._

O subtotal de **17,20 segundos** cobre somente os operadores modelados. Não inclui tempo de resposta, leitura detalhada, reformulação da consulta ou diferenças individuais de digitação. Se a interface permitir aplicar filtros por controles gráficos em vez de digitar sintaxe, deve-se modelar esse método e comparar as sequências após observação.

#### Limites e validação necessária

1. Confirmar na interface como acessar a busca e quais filtros estão disponíveis.
2. Verificar se categoria, tag, ordenação e eventual indicação de solução aceita podem ser usados na busca da instância atual.
3. Conduzir a tarefa com participantes e registrar consultas, filtros, reformulações, erros e critério de sucesso.
4. Revisar HTA e GOMS com base nas estratégias observadas.
5. Recalcular o KLM para o método efetivamente usado; apresentar separadamente tempo de espera e leitura.
6. Submeter a análise à revisão de Vinicius.

---

## Histórico de Versão

A Tabela 9 documenta o histórico de versões deste artefato.

**Tabela 9** — Histórico de versão do documento

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 26/09/2026 | Estruturação metodológica e modelagem da Tarefa 1 por Vinicius Silva Araruna | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) |
| `1.1` | 26/09/2026 | Inclusão do rascunho de HTA e GOMS/KLM para busca avançada; validação empírica pendente | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev), com apoio de IA generativa | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| `1.2` | 22/10/2026 | Modelagem integral da Tarefa 2: Criação de Eventos Presenciais (HTA com diagrama Mermaid, tabela de decomposição e CTT) incorporando enquete prévia de horários e regras de quórum mínimo/lotação (#104) | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |

_Fonte: Elaborada pelos autores, 2026._

---

## Referências Bibliográficas

[1] ANNETT, John; DUNCAN, Keith D. *Task analysis and training design*. Journal of Occupational Psychology, v. 41, n. 4, p. 211-221, 1967.

[2] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier, 2010.

[3] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[4] CARD, Stuart K.; MORAN, Thomas P.; NEWELL, Allen. *The Psychology of Human-Computer Interaction*. Hillsdale: Lawrence Erlbaum Associates, 1983.

[5] PATERNÒ, Fabio. *Model-Based Design and Evaluation of Interactive Applications*. London: Springer-Verlag, 2000.

[6] DISCOURSE. *Searching for content effectively*. Discourse Meta. Disponível em: <https://meta.discourse.org/t/searching-for-content-effectively/273328>. Acesso em: 26 set. 2026.

---

## Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Durante a preparação deste artefato, foi utilizado suporte de Inteligência Artificial Generativa para estruturar o rascunho preliminar da Tarefa 3 e auxiliar na formatação Markdown do diagrama e das tabelas. A modelagem proposta deve ser revisada pelo autor e validada na interface e com participantes; ela não é apresentada como resultado empírico. A contribuição da Tarefa 1 é atribuída a Vinicius Silva Araruna.

## 3. Modelagem CTT – Busca Avançada e Filtros de Categoria

### 3.1 Visão geral
A **Árvore de Tarefas Concorrentes (CTT)** modela as interações paralelas entre usuário, sistema e componentes de UI. Para a Tarefa 3, o fluxo principal consiste em: acessar a busca, formular a consulta, aplicar filtros, examinar resultados, avaliar discussões e, se necessário, reformular a busca. As decisões de escolha são representadas por nós de tipo **Choice** (`[]`), enquanto as operações simultâneas são marcadas como **Concurrent** (`|||`).

### 3.2 Diagrama CTT (Mermaid)
```mermaid
graph TD
    %% Níveis de abstração
    T0["T0 – Encontrar discussão útil sobre Wi‑Fi no Linux Mint"]:::abstract
    
    %% Etapa 1 – Acessar busca
    T1["T1 – Acessar a busca do fórum"]:::interaction
    T0 --> T1
    
    %% Etapa 2 – Formular e executar consulta (concurrente)
    T2a["T2a – Digitar termos da consulta"]:::user
    T2b["T2b – Aplicar filtros de categoria/tag"]:::user
    T2c["T2c – Submeter a consulta"]:::system
    T1 --> T2a & T2b & T2c
    
    %% Etapa 3 – Examinar resultados (paralelo ao carregamento)
    T3a["T3a – Esperar carregamento dos resultados"]:::system
    T3b["T3b – Percorrer títulos e trechos"]:::user
    T2c --> T3a & T3b
    
    %% Etapa 4 – Avaliar discussão candidata (choice)
    T4["T4 – Avaliar discussão candidata"]:::interaction
    T3b --> T4
    
    T4 -->|"Útil"| T5["T5 – Abrir discussão selecionada"]:::interaction
    T4 -->|"Não útil"| T6["T6 – Reformular busca ou encerrar"]:::choice
    
    %% Etapa 5 – Verificar solução (concurrente)
    T5a["T5a – Ler respostas da discussão"]:::user
    T5b["T5b – Comparar com necessidade"]:::user
    T5 --> T5a & T5b
    
    %% Finalização
    T5a --> T7["T7 – Decisão final: usar solução ou buscar outra"]:::choice
    T5b --> T7
    T6 --> T0  %% reinício do ciclo caso reformule
    
    classDef abstract fill:#f0f0f0,stroke:#333,stroke-width:2px
    classDef interaction fill:#d1e8ff,stroke:#0055aa,stroke-width:1.5px
    classDef user fill:#ffefd5,stroke:#aa5500,stroke-width:1.5px
    classDef system fill:#e0ffe0,stroke:#00aa00,stroke-width:1.5px
    classDef choice fill:#ffe0e0,stroke:#aa0000,stroke-width:1.5px
```

### 3.3 Interpretação
- **T0** representa o objetivo de alto nível.
- **T1** é a ação de abrir o campo de busca (interação).
- **T2a**, **T2b** e **T2c** ocorrem de forma **concorrente**: o usuário digita a consulta, escolhe filtros e, ao pressionar *Enter*, o sistema submete a busca.
- **T3a** (carregamento) e **T3b** (percorrer resultados) são simultâneos – o usuário pode começar a olhar os títulos enquanto o sistema ainda está respondendo.
- **T4** é um ponto de **escolha** (`[]`): o usuário decide se o primeiro resultado é útil.
- Caso **útil**, segue para **T5** (abrir a discussão) e então **T5a/b** (ler respostas e comparar). A decisão final (**T7**) pode conduzir ao uso da solução ou a iniciar um novo ciclo.
- Caso **não útil**, **T6** conduz à reformulação da consulta ou ao encerramento, retornando ao objetivo **T0**.

Esta modelagem CTT completa a documentação da Tarefa 3, complementando a HTA já existente.

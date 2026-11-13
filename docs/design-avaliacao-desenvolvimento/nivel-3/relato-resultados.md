# Relato dos Resultados da Prototipação de Alta Fidelidade — Tarefa 1

## Tabela de Contribuição e Declaração Ética de IA Generativa

A Tabela 1 apresenta a matriz de governança, responsabilidade autoral e declaração ética de uso de inteligência artificial generativa na execução empírica e redação definitiva deste relatório de resultados.

**Tabela 1** — Matriz de Contribuição do Relato de Resultados de Alta Fidelidade (Tarefa 1)

| Integrante | Atribuição no Artefato | Data | Horário | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :---: | :---: | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Autor Principal / Facilitador**: Condução presencial e gravação das três sessões empíricas (P1, P2 e P3), cronometragem frente ao modelo KLM, apuração dos escores SUS, análise qualitativa do protocolo *Think-Aloud*, classificação de severidade de Nielsen, definição das diretrizes de reprojeto e redação completa do relato. | 12/11/2026 | 17:30 - 20:00 | Claude Design (Anthropic) e Claude (LLM) | Desenvolvimento do protótipo computacional de alta fidelidade da Tarefa 1 avaliado nas sessões e apoio na estruturação sintática das tabelas analíticas em Markdown. |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Revisor por Par**: Auditoria dos cálculos matemáticos da escala SUS, conferência da consistência metodológica com o planejamento e revisão textual. | 12/11/2026 | 20:10 - 20:30 | — | Revisão humana por pares e checagem cruzada. |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Revisor por Par**: Verificação do anonimato dos participantes (LGPD), conferência dos registros audiovisuais e auditoria de conformidade acadêmica. | 12/11/2026 | 20:30 - 20:50 | — | Revisão humana por pares e validação bioética. |

_Fonte: Elaborada por Vinicius Silva Araruna, Gustavo Antonio Rodrigues e Silva e Edvaldo Soares Brasileiro Filho, 2026._

---

## 1. Introdução, Objetivos e Enquadramento no Ciclo de Mayhew

_Autor do Item Teórico: [Vinicius Silva Araruna](https://github.com/ViniciusA05)_

Este documento consolida o **Relatório Oficial dos Resultados da Avaliação Empírica de Alta Fidelidade** referente à **Tarefa 1 (`CF01`)**:  
> *Criação e Publicação de Tópico de Dúvida com Tags, Formatação Markdown em Modo Split-View e Intervenção de IA Semântica de Pré-Envio* no [Fórum Diolinux Plus](https://plus.diolinux.com.br).

No **Ciclo de Vida da Engenharia de Usabilidade de Deborah Mayhew (1999)**, o **Nível 3 (Design Detalhado e Prototipação Computacional de Alta Fidelidade)** representa a transição definitiva das simulações táteis em papel com "Computador Humano" (*Snyder, 2003; Rettig, 1994*) para um ambiente digital interativo em alta resolução. O protótipo computacional avaliado foi integralmente concebido e desenvolvido no ambiente **Claude Design (Anthropic)** com assistência direta do modelo Claude, incorporando os tokens visuais do [Guia de Estilo](../../analise-requisitos/guia-de-estilo.md) e as correções originadas no Nível 2 (`PROB-PP-01` a `PROB-PP-05`).

Em estrita consonância com a estrutura analítica de **9 seções canônicas preconizada por Barbosa e Silva (2021, p. 280–282)** e **Rubin e Chisnell (2008)**, os objetivos da avaliação empírica consistiram em:
1. **Aferir a Eficácia e a Eficiência Temporal Real:** Verificar se usuários reais conseguem concluir a publicação completa do tópico de dúvida sem barreiras bloqueantes e confrontar o tempo médio cronometrado com o baseline preditivo do **modelo KLM (135,3 segundos)** e com a meta ergonômica (**≤ 90,0 segundos**);
2. **Avaliar a Satisfação Subjetiva Padronizada:** Mensurar a usabilidade percebida por meio da **System Usability Scale (SUS — Brooke, 1996)** visando atingir escore médio igual ou superior a **80,0 pontos**;
3. **Investigar Percepções Cognitivas e Pontos de Atrito:** Analisar as reações dos voluntários frente à divisão *split-view* do editor, ao botão dedicado de terminal `</> Bash`, à seleção de tags assistida e à intervenção do modal da IA Semântica de Pré-Envio, respondendo às oito perguntas investigativas (`PAF01` a `PAF08`).

---

## 2. Metodologia Experimental, Setup Tecnológico e Resguardo Bioético

A condução empírica combinou quatro instrumentos metodológicos complementares para garantir triangulação quantitativa e qualitativa:
- **Teste de Usabilidade Empírico Presencial (Rubin & Chisnell, 2008):** Observação direta de usuários representativos executando uma tarefa autêntica em ambiente silencioso e controlado, atuando o avaliador exclusivamente como **Facilitador** sem substituir o motor interativo do protótipo;
- **Protocolo *Think-Aloud* Concorrente (Ericsson & Simon, 1993):** Os participantes foram orientados a verbalizar continuamente em voz alta seus pensamentos, expectativas e impressões durante a navegação nas telas, permitindo identificar falhas de modelo mental no instante exato em que ocorriam;
- **Entrevista Semiestruturada Pós-Teste:** Aplicação imediata de 6 perguntas investigativas abertas após o término da tarefa para aprofundar a compreensão sobre contrastes visuais, *split-view*, botão de terminal e percepção de controle na janela da IA;
- **Avaliação Psicométrica SUS (Brooke, 1996):** Preenchimento dos 10 enunciados padronizados em escala Likert de 1 a 5 imediatamente ao encerramento da entrevista.

### 2.1 Setup Tecnológico e Resguardo Bioético (LGPD e CNS nº 510/2016)
As sessões individuais foram realizadas em notebook com tela Full HD (`1920×1080`) exibindo o protótipo interativo do Claude Design em tela cheia, com captura audiovisual contínua de tela e áudio de voz.

Em total observância aos **quatro princípios bioéticos de Beauchamp e Childress (2013)** (Autonomia, Beneficência, Não-Maleficência e Justiça/Equidade), à **Resolução CNS nº 510/2016** e à **Lei Geral de Proteção de Dados (Lei nº 13.709/2018)**:
- Nos primeiros 60 segundos gravados de cada vídeo, o facilitador realizou a leitura oral literal do **Termo de Consentimento Livre e Esclarecido (TCLE)**, registrando a concordância verbal expressa e voluntária de cada participante antes de qualquer interação;
- As identidades civis dos voluntários foram integralmente preservadas por meio dos códigos neutros **P1**, **P2** e **P3**;
- Foi reiterado expressamente a todos os participantes que o objeto sob avaliação era unicamente o protótipo da interface, e jamais sua habilidade técnica individual.

> **Script Oral Literal do TCLE Lido nos Primeiros 60 Segundos das Sessões (P1, P2 e P3):**  
> *"Olá! Meu nome é Vinicius Silva Araruna, estudante de Engenharia de Software da Universidade de Brasília, e estou conduzindo esta avaliação presencial na disciplina de Interação Humano-Computador, ministrada pelo Prof. Dr. André Barros de Sales. O objetivo é avaliar o protótipo de alta fidelidade desenvolvido para o Fórum Diolinux Plus. Ressalto que estamos avaliando unicamente a interface proposta e jamais você ou suas habilidades técnicas. Sua participação é totalmente voluntária, podendo pausar ou encerrar a qualquer momento sem prejuízo. O áudio e a tela estão sendo gravados estritamente para fins acadêmicos, sob anonimização total conforme a LGPD e a Resolução CNS nº 510/2016. Você compreende e concorda voluntariamente em participar?"*
> — Resposta registrada em áudio/vídeo nos Vídeos 1, 2 e 3: *"Sim, compreendo e concordo."*

---

## 3. Caracterização da Amostra e Justificativa Científica (n = 3)

### 3.1 Fundamentação Científica do Tamanho da Amostra
A decisão de conduzir o ciclo empírico com **3 participantes voluntários anônimos (P1, P2 e P3)** fundamenta-se na convergência de dois referenciais canônicos da Engenharia de Usabilidade:
1. **Princípio de Ciclos Enxutos de Steve Krug (2014):** Em *Don't Make Me Think, Revisited* e *Rocket Surgery Made Easy*, Krug demonstra que **3 usuários por rodada de avaliação** constituem o número ótimo para detectar os problemas de usabilidade mais graves e recorrentes, evitando o desperdício de recursos com sessões repetitivas e viabilizando intervenções rápidas de reprojeto;
2. **Modelo Binomial de Descoberta de Problemas de Nielsen e Landauer (1993):** A proporção esperada de problemas revelados em função do número `n` de avaliadores é dada pela curva assintótica `1 − (1 − L)ⁿ`. Adotando a taxa empírica média `L = 0,31` (31% dos problemas identificados por usuário único), uma amostra de `n = 3` participantes alcança:
   `1 − (1 − 0,31)³ = 1 − (0,69)³ = 1 − 0,3285 = 67,15%` de cobertura dos problemas de usabilidade existentes na interface avaliada.

### 3.2 Perfil Anonimizado dos Participantes
A Tabela 2 sintetiza a caracterização demográfica dos três voluntários recrutados para a avaliação da Tarefa 1, todos aderentes à faixa etária universitária e ao perfil da persona primária **Lucas Mendonça** (Estudante / Usuário Aprendiz em Linux).

**Tabela 2** — Caracterização Anonimizada dos Participantes da Avaliação (LGPD)

| Identificador | Idade | Perfil Acadêmico / Aderência à Persona | Familiaridade com Linux e Fóruns | Local / Modalidade |
| :---: | :---: | :--- | :--- | :--- |
| **Participante 1 (P1)** | 20 anos | Estudante universitário em tecnologia — perfil aderente à persona *Lucas Mendonça* | Usuário aprendiz em Linux e fóruns técnicos | Sessão individual gravada (Áudio e Tela) |
| **Participante 2 (P2)** | 20 anos | Estudante universitário em tecnologia — perfil aderente à persona *Lucas Mendonça* | Usuário aprendiz em Linux e fóruns técnicos | Sessão individual gravada (Áudio e Tela) |
| **Participante 3 (P3)** | 20 anos | Estudante universitário em tecnologia — perfil aderente à persona *Lucas Mendonça* | Usuário aprendiz em Linux e fóruns técnicos | Sessão individual gravada (Áudio e Tela) |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

## 4. Cenário Autêntico e Percurso Executado no Protótipo

Todos os participantes foram submetidos exatamente ao mesmo cenário autêntico de dor técnica na Tarefa 1:

> *"Você é um estudante de tecnologia utilizando o Linux Mint. Ao tentar instalar o pacote `build-essential` pelo terminal, ocorreu o erro bloqueante `E: Could not get lock /var/lib/dpkg/lock-frontend - open (11: Resource temporarily unavailable)`. Acesse o Fórum Diolinux Plus para criar e publicar um tópico de dúvida formatado, avaliando as sugestões do sistema."*

O percurso interativo no protótipo do **Claude Design** atravessou os estados mapeados na especificação visual:
1. **`T1_F01 · Home Feed`:** Visualização da tela inicial do fórum em Dark Mode e localização do botão primário `+ Novo Tópico`;
2. **`T1_F02 · Composer Split-View`:** Preenchimento de título, uso do editor em tela dividida (código Markdown à esquerda e prévia renderizada em tempo real à direita) e acionamento da ferramenta `</> Bash` na barra de ferramentas;
3. **`T1_OV02 · Dropdown de Categoria`:** Seleção da categoria `Iniciantes`;
4. **`T1_OV03 · Dropdown de Tags com IA`:** Visualização e adição das tags recomendadas;
5. **`T1_OV01 · Modal IA Semântica de Pré-Envio`:** Revisão das recomendações automáticas de pré-envio, sugestões de tags faltantes, links de tópicos semelhantes e escolha entre aplicar as sugestões e publicar ou ignorar e publicar diretamente;
6. **`T1_F03 · Tópico Publicado`:** Confirmação visual do tópico publicado na comunidade com tags e bloco de terminal formatado.

---

## 5. Métricas Quantitativas de Desempenho e Confronto com o KLM

A Tabela 3 apresenta os registros exatos de cronometragem extraídos dos vídeos das três sessões empíricas, confrontando os tempos individuais e a média global da amostra com o **baseline analítico preditivo do modelo KLM (`135,3 segundos`)** e com a **meta ergonômica ideal (`≤ 90,0 segundos`)**.

**Tabela 3** — Desempenho Temporal Empírico Frente ao Baseline KLM (Tarefa 1)

| Participante | Início da Tarefa (Vídeo) | Fim da Tarefa (Vídeo) | Tempo Real de Execução | Diferença frente ao Baseline KLM (`135,3 s`) | Redução Percentual vs. KLM | Taxa de Conclusão | Meta Ergonômica (`≤ 90,0 s`) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **P1** | `02:57` | `04:40` | **`103,0 s`** *(1 min 43 s)* | `-32,3 s` | **-23,9%** | **100%** | `+13,0 s` *(atribuído à mediação pontual e Think-Aloud)* |
| **P2** | `02:50` | `04:28` | **`98,0 s`** *(1 min 38 s)* | `-37,3 s` | **-27,6%** | **100%** | `+8,0 s` *(atribuído à leitura detalhada dos modais e Think-Aloud)* |
| **P3** | `02:31` | `03:44` | **`73,0 s`** *(1 min 13 s)* | `-62,3 s` | **-46,0%** | **100%** | **Superada com folga (`-17,0 s`)** |
| **Média Global** | — | — | **`91,3 s`** *(1 min 31 s)* | **`-44,0 s`** | **`-32,5%`** | **`100%`** | **`+1,3 s` da meta** *(com protocolo Think-Aloud ativo)* |

_Fonte: Elaborada por Vinicius Silva Araruna com base nos registros cronometrados em vídeo e em Card, Moran e Newell (1983), 2026._

### Análise dos Indicadores Temporais
1. **Comprovação do Ganho Ergonômico frente ao KLM (`-32,5%`):** Todos os três participantes completaram a jornada significativamente abaixo dos **`135,3 segundos`** previstos pelo modelo KLM tradicional da interface original, registrando uma **economia média de 44 segundos por postagem**;
2. **Impacto Metodológico do *Think-Aloud* sobre a Meta de 90s:** Conforme documentado por Ericsson e Simon (1993) e Rubin e Chisnell (2008), a verbalização concorrente em voz alta durante a leitura do modal da IA e conferência do editor adiciona latência cognitiva verbal natural à ação motora. Mesmo com essa sobrecarga experimental e com a mediação pontual exigida em P1 (no botão Bash) e P3 (no funcionamento inicial do protótipo), a média global ficou a apenas **1,3 segundo** da meta ideal de 90s, com P3 concluindo o fluxo completo em **73 segundos**;
3. **Eficácia Total (100%):** Todos os participantes atingiram o estado final de tópico publicado sem falhas fatais nem abandono da tarefa.

---

## 6. Avaliação Psicométrica pela Escala SUS (Brooke, 1996)

Imediatamente ao término da execução e das perguntas qualitativas, cada participante respondeu aos 10 itens padronizados da *System Usability Scale* (SUS) na escala Likert de 1 (*Discordo Totalmente*) a 5 (*Concordo Totalmente*).

Conforme a formulação matemática de John Brooke (1996), para questões de ordem ímpar (Q1, Q3, Q5, Q7, Q9) calcula-se `(Resposta − 1)`, e para questões de ordem par (Q2, Q4, Q6, Q8, Q10) calcula-se `(5 − Resposta)`. O somatório das 10 contribuições é multiplicado por `2,5`, resultando no escore global de 0 a 100 pontos. A Tabela 4 detalha as notas individuais e o escore médio apurado.

**Tabela 4** — Apuração Matemática da Escala de Usabilidade do Sistema (SUS — P1, P2 e P3)

| Participante | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 | Somatório Ponderado | **Escore SUS (0–100)** | Classificação (Bangor et al., 2009) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **P1** | 4 | 1 | 5 | 2 | 5 | 1 | 4 | 1 | 5 | 4 | `34` | **`85,0`** | **Grau A — Excelente** |
| **P2** | 4 | 2 | 5 | 1 | 4 | 1 | 3 | 1 | 5 | 1 | `35` | **`87,5`** | **Grau A — Excelente** |
| **P3** | 5 | 1 | 5 | 1 | 1 | 1 | 4 | 1 | 4 | 5 | `30` | **`75,0`** | **Grau B — Bom** |
| **Média Global** | `4,3` | `1,3` | `5,0` | `1,3` | `3,3` | `1,0` | `3,7` | `1,0` | `4,7` | `3,3` | `33,0` | **`82,5`** | **Grau A — Excelente** |

_Fonte: Elaborada por Vinicius Silva Araruna com base em Brooke (1996) e Bangor, Kortum e Miller (2009), 2026._

### Interpretação Psicométrica dos Resultados
- **Superação da Meta do Projeto e da Média Global da Indústria:** O escore médio consolidado de **`82,5 pontos`** supera em **14,5 pontos** o benchmark internacional da escala SUS (`68,0 pontos` segundo Bangor, Kortum & Miller, 2009) e atinge o limiar da meta de qualidade projetada para o Grupo 08 (**≥ 80,0 pontos** — Grau A / Excelente);
- **Coerência Diagnóstica nos Itens Individuais:** As pontuações unânimes em **Q3** (`5,0` — facilidade de uso), **Q6** (`1,0` — ausência de inconsistência visual) e **Q8** (`1,0` — sistema não incômodo) demonstram alta solidez visual e estrutural do protótipo no Claude Design. Por outro lado, o contraste registrado em **Q5 = 1** (integração das funções) e **Q10 = 5** (necessidade de aprendizado prévio) no participante **P3** (`75,0 pontos`), somado a **Q10 = 4** no participante **P1**, revela com precisão matemática a fricção gerada pela publicação imediata pós-IA sem tela de revisão e pela nomenclatura técnica do botão `</> Bash`.

---

## 7. Análise Qualitativa: Verbalizações (*Think-Aloud*) e Perguntas Investigativas

### 7.1 Síntese das Sessões e Verbalizações por Participante
A Tabela 5 consolida as observações comportamentais em tela e os relatos literais colhidos na entrevista semiestruturada de cada participante.

**Tabela 5** — Matriz Qualitativa de Observações (*Think-Aloud*) e Entrevista Semiestruturada

| Participante | Comportamento Durante a Tarefa (*Think-Aloud*) | Respostas às 6 Perguntas Subjetivas Pós-Teste |
| :---: | :--- | :--- |
| **P1** | Identificou de imediato o botão `+ Novo Tópico` e percebeu que já estava autenticado. Notou que o protótipo trazia dados pré-preenchidos, percebendo-os como enviesados para o cenário. Apreciou a seleção de categoria e questionou se era obrigatório selecionar as tags recomendadas, prosseguindo normalmente. Elogiou as validações de salvamento automático e o pré-render. Clicou em sugestão da IA, gostou da aplicação e publicou; notou que precisaria aguardar resposta da comunidade e **não encontrou os tópicos resolvidos parecidos** dentro da recomendação da IA, retornando à página inicial. | **P01:** Nota 10; achou ótimo o botão no topo.<br>**P02:** Split-view não gerou sobrecarga e funciona muito melhor, mas temeu que iniciantes tenham dificuldade com Markdown.<br>**P03:** Precisou de orientação do facilitador para notar/entender o botão `</> Bash`; achou interessante colar o terminal, mas confuso o funcionamento simulado.<br>**P04:** Achou o assistente de pré-envio bem útil para construir o tópico.<br>**P05:** Sentiu que manteve controle sobre a publicação.<br>**P06:** Achou ótimo; pediu opção de alternar entre tema escuro e tema claro. |
| **P2** | Reconheceu a página inicial do fórum com tópicos, barra de pesquisa, filtros, perfil e botão de novo tópico. No Composer, explorou título, categoria, tags, editor e pré-visualização em tempo real, além das ferramentas de escrita e do botão de sugestões de IA. Refletiu sobre a recomendação da IA, mas **não identificou claramente que os itens recomendados poderiam ser tópicos resolvidos que sanavam sua dúvida**. Optou por aplicar as sugestões da IA em vez de ignorá-las; notou e **achou confuso que o clique em aplicar já publicou o tópico imediatamente**. Conferiu o tópico final postado e deu a tarefa por encerrada. | **P01:** Botão bem destacado, fácil de achar e com ótimo contraste de cor.<br>**P02:** Preview ajudou muito a compreender a estruturação do tópico, valorizando as ferramentas de apoio.<br>**P03:** Achou o botão `</> Bash` fácil de usar, facilitando cenários com múltiplos erros.<br>**P04:** Achou o pré-envio bem útil, porém **ficou confuso sobre quais eram os tópicos semelhantes identificados**, sugerindo melhorar essa exposição.<br>**P05:** Sentiu que manteve o controle sobre a publicação.<br>**P06:** Achou muito completo; sugeriu que clicar em aplicar sugestões atualize os dados na tela e aguarde confirmação do usuário antes de publicar. |
| **P3** | Analisou rapidamente a organização do fórum (tópicos, categorias, filtros e novo tópico) e clicou com agilidade no botão principal. Necessitou de breve orientação inicial sobre o funcionamento do protótipo. Considerou o editor claro e o preview interessante; avaliou tags e explorou as sugestões da IA, **compreendendo positivamente os tópicos similares sugeridos como tentativa de resolução prévia** sem precisar postar. Ao aplicar as tags, **achou estranho que o tópico já tenha sido enviado de imediato sem confirmação prévia**, embora tenha verificado todas as informações finais e concluído o objetivo. | **P01:** Achou intuitiva a cor e a estruturação do botão principal.<br>**P02:** Achou ótimo e afirmou já estar acostumado com a visualização dividida.<br>**P03:** Declarou **preferir um botão genérico de código** por ser mais intuitivo para quem não possui tanto conhecimento técnico.<br>**P04:** Achou o assistente útil, mas pontuou que foi rápido demais e deveria exibir um preview/confirmação antes de enviar.<br>**P05:** Afirmou que **não sentiu ter mantido o controle sobre a publicação** após clicar em aplicar.<br>**P06:** Sugeriu incluir botão explícito de "Cancelar", maior clareza no fluxo final e pré-visualização de como o tópico ficaria após as alterações da IA. |

_Fonte: Elaborada por Vinicius Silva Araruna com base nos dados empíricos gravados em campo, 2026._

### 7.2 Respostas Consolidadas às Perguntas Investigativas (`PAF01` a `PAF08`)
Articulando os dados da Tabela 5 com as perguntas estabelecidas no [Planejamento da Avaliação](planejamento-avaliacao.md), a Tabela 6 sintetiza os veredictos investigativos da Tarefa 1.

**Tabela 6** — Veredito das Perguntas Investigativas (`PAF01` a `PAF08`)

| Código | Questão Investigada | Veredito Empírico Consolidado (n = 3) |
| :---: | :--- | :--- |
| **`PAF01`** | Descoberta e affordance do botão `+ Novo Tópico` | **Confirmado (3/3):** Todos localizaram o CTA azul no topo de forma imediata, elogiando contraste, posicionamento e intuição visual. |
| **`PAF02`** | Hierarquia do formulário e eficácia do *Split-View* | **Confirmado com ressalvas:** O *live preview* em tela dividida foi unanimemente elogiado pela ausência de sobrecarga visual, mas P1 apontou percepção de viés no pré-preenchimento estático. |
| **`PAF03`** | Assistência de código pelo botão `</> Bash` | **Parcialmente confirmado:** P2 achou excelente e prático, porém P1 necessitou de mediação e achou confusa a simulação, enquanto P3 preferiu um botão genérico de código (`</>`) para usuários iniciantes. |
| **`PAF04`** | Transparência da IA para prevenção de duplicidade | **Atrito identificado:** Apenas P3 compreendeu de imediato o papel preventivo dos tópicos similares; P1 não os encontrou na tela e P2 ficou confuso sobre quais eram esses tópicos. |
| **`PAF05`** | Eficiência da adição de tags assistida pela IA | **Confirmado (3/3):** Todos aplicaram as tags sugeridas pela IA com fluidez (P1 apenas questionou inicialmente se o aceite das tags recomendadas era obrigatório). |
| **`PAF06`** | Clareza de rótulos e controle no Modal da IA | **Ponto crítico identificado:** Embora P1 e P2 tenham relatado percepção de controle, P2 criticou o disparo imediato da publicação sem revisão e P3 afirmou explicitamente ter perdido o controle ao clicar em aplicar. |
| **`PAF07`** | Segurança de dados e persistência de rascunho | **Confirmado:** P1 valorizou explicitamente o mecanismo de salvamento automático (*Draft salvo*) e as validações de pré-renderização como redutores de ansiedade. |
| **`PAF08`** | Confirmação de publicação e satisfação final | **Confirmado (3/3):** Todos reconheceram o tópico publicado no estado final com satisfação elevada (SUS médio de `82,5` — Grau A). |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

## 8. Catálogo de Problemas (Severidade de Nielsen) e Diretrizes de Reprojeto

A partir da triangulação entre os bloqueios verbais (*Think-Aloud*), os apontamentos das entrevistas e os desvios nos itens da escala SUS, a Tabela 7 cataloga os **5 problemas de usabilidade identificados**, graduados na **Escala de Severidade de Jakob Nielsen (1994)** (de `0` = sem relevância a `4` = catastrófico), acompanhados de suas respectivas **diretrizes prescritivas de reprojeto** para o protótipo de alta fidelidade.

**Tabela 7** — Catálogo de Problemas de Usabilidade e Diretrizes Prescritivas de Reprojeto (Tarefa 1)

| ID | Tela / Componente no Claude Design | Evidência Empírica Diagnosticada | Ocorrência | Severidade (Nielsen 0–4) | Diretriz Prescritiva de Reprojeto |
| :---: | :--- | :--- | :---: | :---: | :--- |
| **`PROB-AF-01`** | *Overlay `T1_OV01` — Botão "Aplicar sugestões e publicar"* | Clicar em aplicar as sugestões da IA realiza a postagem imediata sem exibir prévia de como o tópico ficou modificado e sem passo intermediário de confirmação ou botão de cancelar, gerando sensação de perda de controle e estranheza. | P2, P3 | **3 — Problema Grave** | Desacoplar a ação em dois momentos claros: **1)** Botão *"Aplicar sugestões no rascunho"* retorna ao editor Split-View destacando as tags e ajustes inseridos; **2)** Novo botão explícito *"Confirmar Publicação"* e botão *"Cancelar"* no modal para devolver 100% da autonomia decisória ao usuário. |
| **`PROB-AF-02`** | *Overlay `T1_OV01` — Seção de Tópicos Similares* | P1 não percebeu a lista de tópicos similares já resolvidos na janela da IA; P2 ficou confuso sobre quais tópicos estavam sendo referenciados como semelhantes. | P1, P2 | **2 — Problema Simples** | Elevar a saliência visual do bloco de prevenção de duplicidade utilizando cards contrastados com selo verde `[Resolvido]`, título completo clicável e prévia resumida da solução encontrada antes do bloco de tags. |
| **`PROB-AF-03`** | *Composer `T1_F02` — Botão `</> Bash` na Barra de Ferramentas* | P1 precisou de auxílio verbal do facilitador para identificar o botão e achou confuso o comportamento de simulação; P3 afirmou que um botão genérico de código seria mais intuitivo para leigos que desconhecem o termo "Bash". | P1, P3 | **2 — Problema Simples** | Substituir o rótulo técnico restrito por um ícone universal acompanhado de texto acessível (`</> Inserir Código / Terminal`), exibindo microdica explicativa fixa sob o campo para orientar usuários sem domínio prévio de Markdown. |
| **`PROB-AF-04`** | *Composer `T1_F02` — Campos Pré-preenchidos do Protótipo* | P1 notou que os dados já surgiam pré-populados de acordo com o cenário e os percebeu como enviesados; P3 precisou de instrução inicial pontual sobre a natureza simulada das entradas. | P1, P3 | **1 — Problema Cosmético** | Em testes finais com protótipo funcional ou implementação em código real, disponibilizar caixas de texto vazias 100% editáveis com *placeholders* orientativos, eliminando textos estáticos pré-inseridos. |
| **`PROB-AF-05`** | *Home Feed `T1_F01` — Cabeçalho Global (Tema Visual)* | Apesar da aprovação estética geral do Dark Mode, P1 apontou como única condicionante a ausência de alternância para tema claro (Light Mode). | P1 | **1 — Problema Cosmético** | Incluir componente de alternância de tema (`Sol / Lua` — Claro / Escuro) no cabeçalho global superior do fórum, em conformidade com as paletas definidas no Guia de Estilo. |

_Fonte: Elaborada por Vinicius Silva Araruna com base em Nielsen (1994), 2026._

---

## 9. Registros Audiovisuais e Cláusula de Isolamento do Teste-Piloto

### 9.1 Metadados e Players das 3 Sessões Empíricas
A Tabela 8 consolida os metadados oficiais das três gravações realizadas em campo e incorporadas no repositório sob modalidade **"Não Listado"** no YouTube. Os registros completos de áudio, tela e consentimento verbal nos primeiros 60 segundos estão disponíveis nos respectivos players expansíveis apresentados nos **Vídeos 1, 2 e 3**.

**Tabela 8** — Metadados das Gravações Empíricas de Alta Fidelidade (Tarefa 1)

| Vídeo / Sessão | Participante | Duração Total da Gravação | Janela da Tarefa 1 | Duração da Tarefa | TCLE Oral (< 60s) | Link Oficial (YouTube Não Listado) |
| :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Vídeo 1** | **P1** (20 anos) | `10 min 11 s` | `02:57` → `04:40` | `103,0 s` | Sim (Gravado) | [Assistir Sessão P1 (https://youtu.be/GNMJ7WGaaDE)](https://youtu.be/GNMJ7WGaaDE) |
| **Vídeo 2** | **P2** (20 anos) | `09 min 11 s` | `02:50` → `04:28` | `98,0 s` | Sim (Gravado) | [Assistir Sessão P2 (https://youtu.be/-9L9zKd19d0)](https://youtu.be/-9L9zKd19d0) |
| **Vídeo 3** | **P3** (20 anos) | `07 min 28 s` | `02:31` → `03:44` | `73,0 s` | Sim (Gravado) | [Assistir Sessão P3 (https://youtu.be/32IMt6ExSoE)](https://youtu.be/32IMt6ExSoE) |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

<details class="video-card-details">
    <summary class="video-card-summary">
        <div class="video-card-title">
            <span style="font-size: 1.25rem;">🎬</span>
            <span><strong>Vídeo 1</strong> — Avaliação Empírica de Alta Fidelidade: Participante 1 (P1) — Duração 10:11</span>
        </div>
        <span class="video-card-toggle">Assistir ao Vídeo 1</span>
    </summary>
    <div class="video-card-body">
        <div class="video-card-frame">
            <iframe src="https://www.youtube-nocookie.com/embed/GNMJ7WGaaDE" title="Avaliação de Alta Fidelidade — Tarefa 1 — Participante 1 (P1) | Grupo 08 — IHC 2026.2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-card-footer">
            <span class="video-card-caption"><strong>Vídeo 1</strong> — Sessão presencial gravada com o Participante 1 (P1) com TCLE oral e protocolo Think-Aloud (Tarefa executada de 02:57 a 04:40). <em>Fonte: Vinicius Silva Araruna, 2026.</em></span>
            <a href="https://youtu.be/GNMJ7WGaaDE" target="_blank" rel="noopener noreferrer" class="video-card-btn">
                <span>Assistir no YouTube</span> ↗
            </a>
        </div>
    </div>
</details>

<details class="video-card-details">
    <summary class="video-card-summary">
        <div class="video-card-title">
            <span style="font-size: 1.25rem;">🎬</span>
            <span><strong>Vídeo 2</strong> — Avaliação Empírica de Alta Fidelidade: Participante 2 (P2) — Duração 09:11</span>
        </div>
        <span class="video-card-toggle">Assistir ao Vídeo 2</span>
    </summary>
    <div class="video-card-body">
        <div class="video-card-frame">
            <iframe src="https://www.youtube-nocookie.com/embed/-9L9zKd19d0" title="Avaliação de Alta Fidelidade — Tarefa 1 — Participante 2 (P2) | Grupo 08 — IHC 2026.2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-card-footer">
            <span class="video-card-caption"><strong>Vídeo 2</strong> — Sessão presencial gravada com o Participante 2 (P2) com TCLE oral e protocolo Think-Aloud (Tarefa executada de 02:50 a 04:28). <em>Fonte: Vinicius Silva Araruna, 2026.</em></span>
            <a href="https://youtu.be/-9L9zKd19d0" target="_blank" rel="noopener noreferrer" class="video-card-btn">
                <span>Assistir no YouTube</span> ↗
            </a>
        </div>
    </div>
</details>

<details class="video-card-details">
    <summary class="video-card-summary">
        <div class="video-card-title">
            <span style="font-size: 1.25rem;">🎬</span>
            <span><strong>Vídeo 3</strong> — Avaliação Empírica de Alta Fidelidade: Participante 3 (P3) — Duração 07:28</span>
        </div>
        <span class="video-card-toggle">Assistir ao Vídeo 3</span>
    </summary>
    <div class="video-card-body">
        <div class="video-card-frame">
            <iframe src="https://www.youtube-nocookie.com/embed/32IMt6ExSoE" title="Avaliação de Alta Fidelidade — Tarefa 1 — Participante 3 (P3) | Grupo 08 — IHC 2026.2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-card-footer">
            <span class="video-card-caption"><strong>Vídeo 3</strong> — Sessão presencial gravada com o Participante 3 (P3) com TCLE oral e protocolo Think-Aloud (Tarefa executada de 02:31 a 03:44). <em>Fonte: Vinicius Silva Araruna, 2026.</em></span>
            <a href="https://youtu.be/32IMt6ExSoE" target="_blank" rel="noopener noreferrer" class="video-card-btn">
                <span>Assistir no YouTube</span> ↗
            </a>
        </div>
    </div>
</details>

### 9.2 Cláusula de Isolamento Metodológico do Teste-Piloto

!!! warning "Ratificação de Exclusão dos Dados do Teste-Piloto"
    Em absoluta observância às diretrizes metodológicas de **Barbosa e Silva (2021, p. 276)** e **Rubin e Chisnell (2008)**, ratifica-se formalmente que os tempos, verbalizações e validações técnicas gerados durante o **Teste-Piloto Instrumental de Nível 3** (documentado em [teste-piloto.md](teste-piloto.md) — gravação `https://youtu.be/r7vN1XWerE4`) serviram exclusivamente para calibrar o protótipo no Claude Design e a leitura oral do TCLE. **Nenhum dado do ensaio piloto foi computado nas médias temporais, nos escores da escala SUS ou nas tabelas de problemas deste relatório.**

---

## 10. Lista de Verificação da Técnica — Relato de Avaliação de Alta Fidelidade

A Tabela 9 apresenta a auditoria de conformidade metodológica e normativa aplicada sobre os resultados consolidados neste relato.

**Tabela 9** — Lista de Verificação da Técnica: Relato de Avaliação de Alta Fidelidade

| Item / Critério Avaliado | Fonte Normativa | Conforme? | Resposta Autoexplicativa e Evidência no Relato |
| :--- | :--- | :---: | :--- |
| **1. Estrutura Canônica em 9 Seções:** O relatório contempla todos os tópicos analíticos essenciais exigidos pela literatura? | Barbosa & Silva (2021, p. 280–282) | **Sim** | O documento estrutura objetivos, método, participantes, cenário, métricas, perguntas investigativas, severidade, reprojeto e registros audiovisuais. |
| **2. Justificativa Científica da Amostra (`n = 3`):** O tamanho da amostra de 3 participantes está fundamentado teoricamente? | Steve Krug (2014); Nielsen & Landauer (1993) | **Sim** | Seção 3 fundamenta a amostra de 3 voluntários no modelo formativo de Krug e comprova a cobertura matemática de 67,15% dos problemas (`1 − 0,69³`). |
| **3. Confronto Empírico com o Modelo KLM:** Os tempos reais cronometrados em vídeo foram comparados ao baseline da Análise de Tarefas? | Card, Moran & Newell (1983); Rubin & Chisnell (2008) | **Sim** | Tabela 3 confronta P1 (103s), P2 (98s) e P3 (73s) com o baseline KLM de `135,3 s`, demonstrando redução média de `32,5%`. |
| **4. Apuração Matemática da Escala SUS:** Os 10 itens Likert (Brooke, 1996) foram calculados corretamente? | Brooke (1996); Bangor, Kortum & Miller (2009) | **Sim** | Tabela 4 apura individualmente os escores de P1 (`85,0`), P2 (`87,5`) e P3 (`75,0`), resultando na média global de `82,5 pontos` (Grau A). |
| **5. Coleta Concorrente (*Think-Aloud*):** As verbalizações dos voluntários durante a navegação foram capturadas e sintetizadas? | Ericsson & Simon (1993) | **Sim** | Seção 7 (Tabelas 5 e 6) articula as falas em tempo real de P1, P2 e P3 com as perguntas investigativas `PAF01` a `PAF08`. |
| **6. Classificação Formal de Severidade:** Os atritos detectados foram graduados pela escala de Nielsen (0 a 4)? | Nielsen (1994) | **Sim** | Tabela 7 cataloga `PROB-AF-01` (Severidade 3), `PROB-AF-02/03` (Severidade 2) e `PROB-AF-04/05` (Severidade 1). |
| **7. Diretrizes Concretas de Reprojeto:** Para cada problema catalogado há uma ação prescritiva de design? | Mayhew (1999); Barbosa & Silva (2021) | **Sim** | A coluna final da Tabela 7 detalha ajustes objetivos (desacoplamento de publicação pós-IA, destaque de tópicos resolvidos, rótulo universal e tema claro). |
| **8. Resguardo Bioético e Anonimização LGPD:** Os voluntários são protegidos sob código neutro e consentimento oral gravado? | CNS nº 510/2016; LGPD; Beauchamp & Childress (2013) | **Sim** | Voluntários identificados unicamente como P1, P2 e P3, com TCLE oral registrado nos primeiros 60 segundos dos 3 vídeos (Tabela 8). |
| **9. Isolamento Estrito do Teste-Piloto:** O teste-piloto instrumental foi excluído das estatísticas finais? | Rubin & Chisnell (2008); Barbosa & Silva (2021) | **Sim** | Subseção 9.2 formaliza a exclusão integral do ensaio piloto (`https://youtu.be/r7vN1XWerE4`) do cômputo da amostra empírica. |
| **10. Chamadas Textuais e Integridade de Links:** Todas as tabelas e vídeos possuem chamadas no corpo do texto e links funcionais? | Diretrizes Pedagógicas FGA/UnB (*Sales, 2026*) | **Sim** | Todas as Tabelas (1 a 10) e Vídeos (1 a 3) são referenciados textualmente antes de sua apresentação. |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

## 11. Histórico de Versão

A Tabela 10 registra o histórico evolutivo deste artefato no repositório.

**Tabela 10** — Histórico de Versão do Documento

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 09/11/2026 | Estruturação formal preliminar do relato de alta fidelidade da Tarefa 1 com as 9 seções canônicas de Barbosa & Silva e nota metodológica de agendamento em campo. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| `1.1` | 10/11/2026 | Atualização da contextualização tecnológica para o protótipo de alta fidelidade desenvolvido no Claude Design e alinhamento da declaração ética de uso de IA. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| `2.0` | 12/11/2026 | Retirada da quarentena e consolidação empírica definitiva com amostra de 3 participantes anônimos (P1, P2 e P3 — Krug & Nielsen), tabulação dos tempos reais frente ao KLM (média `91,3 s` vs `135,3 s`), apuração matemática da escala SUS (média `82,5`), análise das perguntas `PAF01`–`PAF08`, catálogo de severidade (`PROB-AF-01` a `05`) e incorporação dos 3 vídeos gravados no YouTube. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

## 12. Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[2] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[3] KRUG, Steve. *Não Me Faça Pensar: Atualizado (Don't Make Me Think, Revisited)*. 3. ed. Rio de Janeiro: Alta Books, 2014.

[4] NIELSEN, Jakob; LANDAUER, Thomas K. A mathematical model of the finding of usability problems. In: *Proceedings of the INTERACT '93 and CHI '93 Conference on Human Factors in Computing Systems*. New York: ACM, 1993. p. 206–213.

[5] BROOKE, John. *SUS: A 'Quick and Dirty' Usability Scale*. In: JORDAN, P. W. et al. (Eds.). Usability Evaluation in Industry. London: Taylor & Francis, 1996. p. 189–194.

[6] BANGOR, Aaron; KORTUM, Philip; MILLER, James. Determining What Individual SUS Scores Mean: Adding an Adjective Ratings Scale. *Journal of Usability Studies*, v. 4, n. 3, p. 114–123, 2009.

[7] RUBIN, Jeffrey; CHISNELL, Dana. *Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests*. 2. ed. Indianapolis: Wiley, 2008.

[8] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1994.

[9] CARD, Stuart K.; MORAN, Thomas P.; NEWELL, Allen. *The Psychology of Human-Computer Interaction*. Hillsdale: Lawrence Erlbaum Associates, 1983.

[10] ERICSSON, K. Anders; SIMON, Herbert A. *Protocol Analysis: Verbal Reports as Data*. rev. ed. Cambridge: MIT Press, 1993.

[11] BEAUCHAMP, Tom L.; CHILDRESS, James F. *Principles of Biomedical Ethics*. 7. ed. New York: Oxford University Press, 2013.

[12] BRASIL. Conselho Nacional de Saúde. *Resolução nº 510, de 07 de abril de 2016* (Normas aplicáveis a pesquisas em Ciências Humanas e Sociais) e *Lei nº 13.709, de 14 de agosto de 2018* (Lei Geral de Proteção de Dados Pessoais — LGPD). Brasília: Diário Oficial da União, 2016–2018.

[13] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama, 2026.

---

## Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Em observância ao compromisso acadêmico de transparência ética da disciplina, declara-se que o protótipo computacional de alta fidelidade avaliado nas sessões foi concebido e desenvolvido por Vinicius Silva Araruna no ambiente **Claude Design (Anthropic)** com assistência direta do modelo **Claude**. A estruturação sintática das matrizes analíticas em Markdown e a formatação de tabelas comparativas contaram com apoio de ferramentas de inteligência artificial generativa. Toda a condução presencial das três entrevistas, a cronometragem nos registros em vídeo, a coleta dos escores psicométricos e a curadoria crítica dos problemas e diretrizes de reprojeto foram integralmente executadas pelo autor humano com supervisão e revisão cruzada da equipe.

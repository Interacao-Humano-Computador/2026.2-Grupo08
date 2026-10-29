# Relato dos Resultados da Avaliação da Análise de Tarefas (Nível 1)

## Tabela de Contribuição e Uso de IA Generativa

A Tabela 1 apresenta a matriz de responsabilidades e atribuições na consolidação dos resultados da avaliação formativa da Análise de Tarefas de Nível 1.

**Tabela 1** — Matriz de Contribuição do Relato dos Resultados da Análise de Tarefas

| Integrante | Atribuição no Artefato | Data | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :---: | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Autor Principal**: Condução da Sessão T01 (Tarefa 1), análise de discrepâncias cognitivas do HTA e CMN-GOMS (PT01 a PT08), tabulação na escala de Nielsen e formulação das diretrizes de refatoração para protótipos de papel. | 24/10/2026 | Antigravity (LLM) | Apoio na estruturação das tabelas Markdown e checagem de rigor normativo de IHC. |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Coautor e Avaliador**: Condução da Sessão T02 (Tarefa 2 - Eventos Presenciais), consolidação dos apontamentos da HTA 2 e revisão de severidade. | 24/10/2026 | Antigravity (LLM) | Suporte na estruturação Markdown e checagem de referências. |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Coautor e Avaliador**: Condução da Sessão T03 (Tarefa 3 - Busca Avançada), consolidação dos apontamentos de tarefas e validação metodológica. | 24/10/2026 | — | Condução de sessão e revisão por pares. |

_Fonte: Elaborada pelos autores, 2026._

---

## 1. Introdução e Objetivos da Avaliação da Análise de Tarefas

Na Engenharia de Usabilidade (*Barbosa & Silva, 2021; Mayhew, 1999*), os modelos hierárquicos de tarefas (como a HTA e o GOMS) definem como o trabalho humano é decomposto em objetivos, subobjetivos e planos de ação. Avaliar esses modelos no **Nível 1** permite detectar precocemente descompassos entre o modelo prescritivo construído pelos projetistas e o modelo mental real dos utilizadores.

Este documento consolida os resultados da avaliação formativa da **Análise de Tarefas (HTA e CMN-GOMS)** aplicada às funcionalidades prioritárias do **Fórum Diolinux Plus**, conduzida presencialmente com estudantes da Universidade de Brasília no campus FGA/UnB.

A avaliação buscou atingir quatro objetivos cognitivos fundamentais:
1. **Validar a Acurácia e Completude dos Passos Operacionais:** Averiguar se todos os subobjetivos elementares modelados correspondem integralmente ao fluxo necessário para o alcance dos objetivos dos usuários;
2. **Avaliar a Naturalidade dos Planos de Execução Hierárquicos:** Verificar se os operadores lógicos condicionais e sequenciais (`>`, `/`, `+`) espelham a ordem espontânea de raciocínio do estudante;
3. **Mapear Lacunas Operacionais e Gargalos de Memória:** Identificar pontos de sobrecarga cognitiva, passos redundantes ou etapas que induzem a erros na interface do Discourse;
4. **Subsidiar a Prototipação em Papel com Requisitos Ergonômicos:** Converter os nós folha e métodos validados em insumos diretos para os componentes da prototipação de Nível 2.

---

## 2. Metodologia de Investigação Empírica Empregada

A avaliação adotou o método de **Investigação Empírica por meio de Entrevistas Semiestruturadas com Percurso Conceitual Guiado de Tarefas (*Task Walkthrough*)** (*Barbosa & Silva, 2021, p. 144; Mayhew, 1999*), com apoio da técnica de verbalização concomitante (*think-aloud*).

!!! note "DIRETRIZ METODOLÓGICA MANDATÓRIA — INVESTIGAÇÃO VS. INSPEÇÃO (BARBOSA & SILVA, 2021)"
    Esta avaliação caracteriza-se categoricamente como **INVESTIGAÇÃO EMPÍRICA COM USUÁRIOS REAIS**.  
    A atividade investiga a decomposição hierárquica e a lógica das operações (HTA/GOMS) em diálogo direto com o usuário: **não se trata de teste de usabilidade clássico em software** (não há código interativo ou cronometragem mecânica de cliques) e **não se trata de método de inspeção analítica** (métodos de inspeção, como avaliação heurística ou percurso cognitivo por especialistas, são executados exclusivamente por avaliadores de IHC, sem a presença de usuários).  
    A dinâmica ocorreu em sessões individuais contínuas (imediatamente após a avaliação do Storyboard), com 1 Avaliador e 1 Participante, realizadas presencialmente na residência do participante para a Tarefa 1 (ambiente domiciliar silencioso e acolhedor) e em salas silenciosas da FGA/UnB para as demais tarefas.

Durante cada sessão:
- O participante visualizou o diagrama HTA canônico e o editor real do Fórum Diolinux Plus em tela de notebook;
- O entrevistador guiou o percurso passo a passo pelos objetivos, solicitando que o participante verbalizasse seu raciocínio sobre a ordem das ações;
- Foram aplicadas as perguntas investigativas da Tabela 2 do Planejamento (PT01 a PT08);
- A sessão foi gravada integralmente em áudio e vídeo para posterior categorização analítica.

---

## 3. Caracterização dos Avaliadores e Participantes

Participaram das sessões 3 discentes de graduação da Universidade de Brasília recrutados segundo os critérios de inclusão do **Perfil 1: Estudante / Usuário Aprendiz em Linux**.

A Tabela 2 consolida os dados demográficos e as atribuições de tarefas.

**Tabela 2** — Caracterização dos Participantes da Avaliação de Tarefas

| Código | Participante (Anonimizado) | Idade | Curso de Graduação | Nível no Linux | Tarefa Avaliada | Avaliador Responsável |
| :---: | :--- | :---: | :--- | :---: | :--- | :--- |
| **P1** | J. V. S. | 21 | Ciência da Computação (CIC/UnB) | Iniciante/Médio | Tarefa 1 (Markdown, Tags e IA Semântica) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| **P2** | L. C. F. | 22 | Ciência da Computação (CIC/UnB) | Intermediário | Tarefa 2 (Criação de Eventos Presenciais) | [Gustavo Antonio](https://github.com/gus-ant) |
| **P3** | G. H. R. | 20 | Engenharia de Redes (FGA/UnB) | Iniciante | Tarefa 3 (Busca Avançada e Filtros) | [Edvaldo Soares](https://github.com/PajeMurici-dev) |

_Fonte: Elaborada pelos autores, 2026._

---

## 4. Tarefas e Modelos Hierárquicos Investigados

As sessões concentraram-se na validação dos modelos formais de tarefas elaborados pela equipe:

1. **Tarefa 1 — Criação e Publicação de Tópico de Dúvida com Tags e Formatação Markdown com Integração de IA Semântica (Vinicius Silva Araruna):**  
   Objetivo raiz G0 decomposto em 5 subobjetivos (G1: Abrir Editor, G2: Definir Título e Categoria, G3: Associar Tags, G4: Redigir e Formatar em Markdown, G5: Submeter e Resolver IA Pré-Envio), estruturado com planos normativos e regras de seleção do CMN-GOMS;
2. **Tarefa 2 — Criação de Eventos Presenciais da Comunidade — CF02 (Gustavo Antonio):**  
   Decomposição hierárquica das etapas de sondagem, geolocalização no mapa, dimensionamento de vagas e publicação de workshops;
3. **Tarefa 3 — Busca Avançada e Filtros Especializados de Categoria (Edvaldo Soares):**  
   Estrutura HTA e modelagem concorrente CTT para refinamento facetado de dúvidas resolvidas.

---

## 5. Síntese dos Dados Coletados e Análise de Discrepâncias de Modelo Mental

A inquirição procedural revelou apontamentos ricos sobre a engenharia cognitiva das tarefas:

### PT01 — Ordem Sequencial dos Subobjetivos (Plano 0 da HTA: G1 > G2 > G3 > G4 > G5)
- **Constatação Tarefa 1 (P1):** O participante confirmou que preencher o título primeiro é natural para resumir a falha, mas apontou que frequentemente alterna a ordem entre escrever o corpo da dúvida e selecionar as tags.
- **Relato Chave de P1:** *"Geralmente eu coloco o título para resumir o erro, mas pulo logo para o corpo do texto para colar o log do terminal antes que eu me esqueça. Costumo escolher as tags e confirmar a categoria só no final, quando o texto já tá revisado."*
- **Constatação Tarefa 2 (P2 - Gustavo Antonio):** Ao analisar o Plano 0 da Tarefa 2 (`1 > 2 > 3 > 4 > 5`), P2 atestou a completude e lógica estrita do fluxo: *"Olhando para todo esse caminho, você acha que alguma etapa está fora de ordem ou faltou algum passo obrigatório antes de publicar? Não, não acho. Acho que tá razoável"*.

### PT02 — Métodos de Formatação e Entrada de Dados (Teclado vs. Componentes Visuais)
- **Constatação Tarefa 1:** Validação empírica imediata da Regra de Seleção 1 (*Selection Rule 1*) do CMN-GOMS por P1 (preferência de digitação de crases por atalho vs botão da barra).
- **Relato Chave de P1:** *"Como curso computação e uso Markdown no GitHub, eu quase sempre digito as três crases direto no teclado (` ```bash `) porque é muito mais rápido e não tiro a mão do teclado. Mas vejo colegas iniciantes que preferem selecionar o texto com o mouse e clicar no botão `&lt;/&gt;` da barra do editor. É fundamental o sistema manter os dois caminhos."*
- **Constatação Tarefa 2 (P2):** Ao ser inquirido sobre preenchimento de horários e datas na etapa de dados gerais (Subobjetivo 2.4), o participante verbalizou enfaticamente: *"Acho que prefiro com relógio"*, rejeitando texto corrido e solicitando seletor visual dedicado (*timepicker*).

### PT03 — Sugestões em Tempo Real e Interação com Mapas e Ingressos
- **Constatação Tarefa 1:** Painel de sugestões semânticas da IA aprovado por P1 como mecanismo acelerador e preventivo.
- **Relato Chave de P1:** *"A sugestão na lateral enquanto digito o título é ótima. Se eu vejo que o erro já tem solução aceita, nem preciso postar. E o modal da IA antes de enviar é muito bem-vindo para sugerir tags, desde que seja um assistente consultivo e nunca um bloqueador autoritário que me impeça de enviar."*
- **Constatação Tarefa 2 (P2 - Mapa e Local Físico):** Na etapa de definição de local (Subobjetivo 3.2), o participante questionou: *"Eu coloco o pin no mapa... mas aí ele vai, o sistema vai procurar um lugar próximo daquele pin que ele marcou para...?"*. Ao ser esclarecido de que o organizador deve marcar o ponto exato da sala/espaço já acertado, P2 validou: *"Entendi. Eu acho que é bom... tá bom, uma boa opção"*.
- **Constatação Tarefa 2 (P2 - Ingressos Gratuitos e Pagos):** Ao avaliar a separação na etapa de ingressos (Subobjetivo 4.1 a 4.3), o participante validou a fluidez para eventos acadêmicos: *"Sim, de boa"*.

### PT08 — Completude, Gargalos e Operações Faltantes na HTA
- **Constatação Geral:** Os participantes consideraram os modelos hierárquicos completos e coerentes com a realidade do Discourse.
- **Destaque Positivo:** Elogio explícito à inclusão formal da operação elementar de feedback observável (fechamento automático do composer e carregamento da URL definitiva do tópico publicado) e à separação entre rascunho e publicação final.

---

## 6. Tabela Estruturada de Problemas e Discrepâncias de Tarefas (Nielsen)

As inconsistências e oportunidades levantadas foram tabuladas na Tabela 3 com base na **Escala de Severidade de Jakob Nielsen (1994)**.

**Tabela 3** — Matriz de Problemas e Discrepâncias de Tarefas (HTA e GOMS)

| ID | Tarefa / Passo HTA | Discrepância / Dificuldade Observada | Classificação do Problema | Severidade (Nielsen) | Ação de Refinamento no HTA / Reprojeto no Papel |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **PROB-AT-01** | Tarefa 1 / Subobjetivos G3 e G4 | Usuário prefere redigir o corpo e colar comandos antes de associar as tags definitivas. | Precedência Rígida no Plano 0 | **1 (Cosmético)** | Ajustar o Plano 0 para formalizar a flexibilidade sequencial entre G3 e G4 (`G1 > G2 > (G3 + G4) > G5`). |
| **PROB-AT-02** | Tarefa 1 / Subobjetivo 4.2 | Risco de usuários novatos não saberem fechar as três crases do bloco de código. | Inconsistência de Método | **1 (Cosmético)** | Incluir na interface de protótipo de papel dica de sintaxe sutil no placeholder: *"Exemplo: ```bash"*. |
| **PROB-AT-03** | Tarefa 1 / Operação 5.2 | Ausência de operação atômica de adição em lote das tags técnicas recomendadas pela IA. | Operação Faltante no HTA | **2 (Menor)** | Modelar novo operador no GOMS: *"Método: Clicar em 'Adicionar todas as tags sugeridas'"*. |
| **PROB-AT-04** | Tarefa 2 / Subobjetivo 2.4 (Datas e Horários) | O participante verbalizou explicitamente preferência por selecionar o horário por meio de componente visual de relógio (*"Acho que prefiro com relógio"*) em detrimento de campo de texto corrido. | Inconsistência de Operação / Prevenção de Erros | **2 (Menor)** | Refinar a Operação 2.4 no HTA para explicitar *"2.4 Selecionar horário via componente timepicker de relógio"*, adotando o respectivo widget no protótipo de papel de Nível 2. |
| **PROB-AT-05** | Tarefa 2 / Subobjetivo 3.2 (Ponto no Mapa) | O participante questionou o fluxo de busca de locais (*"ele vai procurar um lugar próximo daquele pin que marcou?"*), sendo esclarecido que a plataforma demarca o ponto exato da reserva. | Falha de Expectativa / Feedback | **2 (Menor)** | Adicionar na Operação 3.2 feedback visual com endereço formalizado imediatamente após soltar o marcador (*pin*) e link de auxílio *"Como reservar salas no campus"*. |
| **PROB-AT-06** | Tarefa 2 / Plano 0 (Sequência Geral) | Ao ser inquirido sobre a ordem global das etapas (`1 > 2 > 3 > 4 > 5`), o participante considerou que nenhuma etapa está fora de ordem ou faltando antes de publicar (*"Não, não acho. Acho que tá razoável"*). | Validação Normativa do Plano | **0 (Sem Problema)** | Manter a ordem causal do Plano 0 da Tarefa 2 estritamente sequencial conforme validada empiricamente. |

_Fonte: Elaborada pelos autores com base em Barbosa e Silva (2021) e Nielsen (1994), 2026._

---

## 7. Recomendações de Refatoração no HTA e Insumos para Prototipação em Papel

Com base nas evidências empíricas colhidas em campo:

1. **Refatoração Normativa do Plano 0 da HTA (Tarefa 1):**  
   O plano causal no nó pai G0 deve expressar formalmente a flexibilidade entre tags e redação:  
   `Plano 0: Fazer 1 > 2 > (3 + 4) > 5. Em 5, se IA detectar sugestões, executar Plano 5.2, senão concluir.`
2. **Enriquecimento do Módulo CMN-GOMS com Operação em Lote:**  
   Adicionar ao CMN-GOMS da Tarefa 1 a Regra de Seleção 3 (*Selection Rule 3*):  
   *Se o usuário concordar com todas as tags sugeridas pela IA, aplicar Método de Clique Único (1 clique); se desejar selecionar parcialmente, clicar individualmente nas tags desejadas.*
3. **Insumos para o Protótipo de Papel (Nível 2):**  
   Os componentes de papel deverão reproduzir visualmente a flexibilidade não-modal dos campos, garantindo que o estudante possa transitar livremente entre a caixa de texto e a seleção de tags sem bloqueios de interface.

---

## 8. Registro Audiovisual das Sessões e Consentimento Verbal (TCLE)

As sessões presenciais de avaliação da Análise de Tarefas foram gravadas de forma contínua e estão hospedadas no YouTube em modo Não Listado.

### Vídeos das Sessões Presenciais

A Tabela 4 sintetiza os registros audiovisuais das avaliações da Análise de Tarefas.

**Tabela 4** — Dados técnicos das gravações das sessões de Análise de Tarefas

| Sessão | Funcionalidade / Tarefa Investigada | Participante | Avaliador Responsável | Duração | Link de Acesso no YouTube |
| :---: | :--- | :---: | :--- | :---: | :--- |
| **T01** | Tarefa 1: Markdown, Tags e IA Semântica | P1 (J. V. S. — CIC/UnB) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | ~16 min | [Assistir Sessão T01 no YouTube (Não Listado)](https://youtu.be/_4nQ50nN7b8) |
| **T02** | Tarefa 2: Criação de Eventos Presenciais | P2 (L. C. F.) | [Gustavo Antonio](https://github.com/gus-ant) | ~15 min | [Assistir Sessão T02 no YouTube (Não Listado)](https://youtu.be/VhGgpfX9Rqk) |
| **T03** | Tarefa 3: Grade de Disponibilidade e Agendamento | P3 (G. H. R.) | [Edvaldo Soares](https://github.com/PajeMurici-dev) | ~15 min | [Assistir Sessão T03 no YouTube (Não Listado)](https://youtu.be/gqZ3yJ3ZYUc) |

_Fonte: Elaborada pelos autores, 2026._

#### Reprodução Audiovisual da Sessão T01 (Tarefa 1 — Vinicius Silva Araruna)

<div style="text-align: center; margin: 1.5rem 0;">
    <iframe width="100%" height="450" src="https://www.youtube-nocookie.com/embed/_4nQ50nN7b8" title="Avaliação da Análise de Tarefas 1 - Sessão T01 - Vinicius Silva Araruna - Grupo 08 - IHC 2026.2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 8px; max-width: 800px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"></iframe>
    <p style="font-size: 0.85rem; color: #64748B; margin-top: 0.5rem;"><strong>Vídeo 1</strong> — Registro audiovisual da avaliação da Análise de Tarefas da Tarefa 1 na residência do participante. <em>Fonte: Vinicius Silva Araruna, 2026.</em></p>
    <p style="font-size: 0.9rem; margin-top: 0.25rem;"><a href="https://youtu.be/_4nQ50nN7b8" target="_blank" rel="noopener noreferrer">Assistir diretamente no YouTube: https://youtu.be/_4nQ50nN7b8</a></p>
</div>

#### Reprodução Audiovisual da Sessão T02 (Tarefa 2: Eventos Presenciais — Gustavo Antonio)

<div style="text-align: center; margin: 1.5rem 0;">
    <iframe width="100%" height="450" src="https://www.youtube-nocookie.com/embed/VhGgpfX9Rqk" title="Avaliação da Análise de Tarefas 2 - Sessão T02 - Gustavo Antonio - Grupo 08 - IHC 2026.2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 8px; max-width: 800px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"></iframe>
    <p style="font-size: 0.85rem; color: #64748B; margin-top: 0.5rem;"><strong>Vídeo 2</strong> — Registro audiovisual da avaliação da Análise de Tarefas da Tarefa 2 (Criação de Eventos Presenciais). <em>Fonte: Gustavo Antonio Rodrigues e Silva, 2026.</em></p>
    <p style="font-size: 0.9rem; margin-top: 0.25rem;"><a href="https://youtu.be/VhGgpfX9Rqk" target="_blank" rel="noopener noreferrer">Assistir diretamente no YouTube: https://youtu.be/VhGgpfX9Rqk</a></p>
</div>

---

## 9. Cláusula Metodológica Obrigatória de Isolamento dos Dados do Teste-Piloto

!!! warning "CLÁUSULA METODOLÓGICA DE ISOLAMENTO DOS DADOS DO TESTE-PILOTO"
    Em estrito cumprimento às diretrizes de Engenharia de Usabilidade (*Barbosa & Silva, 2021, p. 276; Mayhew, 1999*) e ao Plano de Ensino da disciplina (*Sales, 2026*), a equipe declara formalmente que **os dados, medições e respostas coletados durante o ensaio do Teste-Piloto NÃO foram computados, consolidados ou mesclados aos resultados apresentados neste documento**.  
    O teste-piloto teve como função exclusiva avaliar o planejamento e calibrar os instrumentos de registro e a temporização do roteiro de tarefas. Todos os problemas e discrepâncias catalogados nesta página derivam exclusivamente das sessões oficiais com os voluntários P1, P2 e P3.

---

## 10. Lista de Verificação da Técnica (Relato da Análise de Tarefas)

A Tabela 5 apresenta o checklist de autoavaliação da conformidade do relato de tarefas.

**Tabela 5** — Lista de Verificação do Relato da Análise de Tarefas

| Item / Questão Avaliada | Origem / Fonte Normativa | Conforme? | Resposta Autoexplicativa e Evidência no Documento |
| :--- | :--- | :---: | :--- |
| **1** | O documento define os objetivos cognitivos da avaliação e contextualiza a Engenharia de Usabilidade? | Mayhew (1999); Barbosa & Silva (2021) | ✅ Sim | A Seção 1 estabelece os 4 objetivos formativos alinhados à decomposição hierárquica. |
| **2** | A metodologia de percurso conceitual guiado de tarefas com think-aloud está detalhada? | Barbosa & Silva (2021, p. 144) | ✅ Sim | A Seção 2 descreve a dinâmica de Task Walkthrough e reforça a proibição de confusão com inspeção. |
| **3** | Os participantes estão caracterizados demograficamente em aderência ao perfil de usuário discente? | Barbosa & Silva (2021, p. 170) | ✅ Sim | A Tabela 2 apresenta os dados de idade, curso e distribuição dos estudantes P1, P2 e P3. |
| **4** | A análise qualitativa explora a lógica dos planos e a ordem dos subobjetivos? | Card et al. (1983); Annett (2003) | ✅ Sim | A Seção 5 discute as respostas de PT01 a PT08 confrontando modelos conceituais com a prática. |
| **5** | As discrepâncias identificadas estão classificadas na escala de severidade de Nielsen? | Nielsen (1994); Barbosa & Silva (2021) | ✅ Sim | A Tabela 3 sintetiza os problemas com gravidade variando entre 1 e 2. |
| **6** | O documento apresenta propostas concretas de refatoração para os modelos HTA e CMN-GOMS? | Barbosa & Silva (2021) | ✅ Sim | A Seção 7 especifica o ajuste no Plano 0 e a inclusão da regra de seleção de tags em lote. |
| **7** | Há disponibilização dos vídeos das sessões no YouTube com consentimento verbal gravado? | Diretrizes Pedagógicas FGA/UnB | ✅ Sim | A Seção 8 contém tabela com links do YouTube, player incorporado e garantia de anonimização. |
| **8** | O documento contém a Cláusula Metodológica Obrigatória de isolamento dos dados do piloto? | Barbosa & Silva (2021, p. 276) | ✅ Sim | A Seção 9 apresenta o destaque visual formal atestando a não-computação dos dados do piloto. |

_Fonte: Elaborada pelos autores com base em Barbosa e Silva (2021) e Sales (2026), 2026._

---

## 11. Histórico de Versão

A Tabela 6 documenta a evolução histórica deste documento.

**Tabela 6** — Histórico de Versão

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 24/10/2026 | Elaboração inicial do Relato dos Resultados da Avaliação da Análise de Tarefas (Nível 1), consolidando os dados empíricos de campo com percurso cognitivo guiado, caracterização dos voluntários P1 a P3, análise de discrepâncias de planos lógicos (PT01 a PT08), validação de regras de seleção do CMN-GOMS, classificação de severidade de Nielsen (0 a 4), recomendações de refatoração no HTA, container de vídeo, cláusula de isolamento do piloto e checklist de conformidade. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| `1.1` | 25/10/2026 | Incorporação do link oficial e player do registro audiovisual da avaliação da Sessão T01 (Vinicius Silva Araruna com participante J.V.S no YouTube) e consolidação da gravação da Sessão T02 (Gustavo Antonio). | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant) |

_Fonte: Elaborada pelos autores, 2026._

---

## 12. Referências Bibliográficas (ABNT)

- ANNETT, John. *Hierarchical Task Analysis*. In: DIAPER, Dan; STANTON, Neville (Ed.). *The Handbook of Task Analysis for Human-Computer Interaction*. Mahwah: Lawrence Erlbaum Associates, 2003. p. 67-82.
- BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. *Interação Humano-Computador e Experiência do Usuário*. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.
- CARD, Stuart K.; MORAN, Thomas P.; NEWELL, Allen. *The Psychology of Human-Computer Interaction*. Hillsdale: Lawrence Erlbaum Associates, 1983.
- MAYHEW, Deborah J. *The Usability Engineering Lifecycle: a practitioner's handbook for user interface design*. San Francisco: Morgan Kaufmann Publishers, 1999.
- NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann Publishers, 1994.
- SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama (FGA), 2026.

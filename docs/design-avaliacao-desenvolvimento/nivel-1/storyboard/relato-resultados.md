# Relato dos Resultados da Avaliação do Storyboard (Nível 1)

## Tabela de Contribuição e Uso de IA Generativa

A Tabela 1 apresenta a matriz de responsabilidades e atribuições na consolidação dos resultados da avaliação formativa dos Storyboards de Nível 1.

**Tabela 1** — Matriz de Contribuição do Relato dos Resultados do Storyboard

| Integrante | Atribuição no Artefato | Data | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :---: | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Autor Principal**: Condução da Sessão 01 (Tarefa 1), transcrição e análise qualitativa de conteúdo (P01 a P08), tabulação na escala de Nielsen e elaboração das recomendações de reprojeto para Nível 2. | 24/10/2026 | Google Gemini (LLM) | Apoio na estruturação das tabelas Markdown e checagem de rigor normativo de IHC. |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Coautor e Avaliador**: Condução da Sessão 02 (Tarefa 2 - Eventos Presenciais), consolidação dos apontamentos do Storyboard 2 e revisão cruzada de severidade. | 24/10/2026 | Google Gemini (LLM) | Suporte na estruturação Markdown e checagem de hiperligações. |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Coautor e Avaliador**: Condução da Sessão 03 (Tarefa 3 - Busca Avançada), consolidação dos apontamentos do Storyboard 3 e validação metodológica. | 24/10/2026 | — | Condução de sessão e revisão por pares. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 1. Introdução e Objetivos da Avaliação

No âmbito do **Ciclo de Vida de Deborah Mayhew (1999)** e da Engenharia de Usabilidade (*Barbosa & Silva, 2021*), a avaliação formativa realizada no **Nível 1 (Modelagem Conceitual e Prototipação de Baixa Fidelidade)** tem como meta diagnosticar falhas de apropriação, barreiras cognitivas e inconsistências de fluxo antes de qualquer esforço de implementação em software.

Este documento consolida os resultados empíricos da avaliação dos **Storyboards** das três funcionalidades prioritárias do **Fórum Diolinux Plus**, executada com discentes universitários convidados na modalidade presencial no campus da Faculdade UnB Gama (FGA/UnB).

A avaliação orientou-se por quatro objetivos formativos centrais:
1. **Apropriação e Verossimilhança:** Averiguar se a dor contextualizada (falha de driver, erro de terminal e busca técnica) reflete situações autênticas vivenciadas por estudantes no Linux;
2. **Clareza da Estrutura Narrativa:** Avaliar se a sequência dos quadros desenhados à mão é compreendida sem rupturas lógicas ou necessidade de intervenções externas do avaliador;
3. **Plausibilidade do Modelo Mental:** Confrontar a solução retratada na narrativa com as expectativas do usuário frente à interface do Discourse (Markdown, tags, eventos presenciais e IA semântica);
4. **Elicitação de Oportunidades de Design:** Coletar recomendações espontâneas para subsidiar a prototipação em papel de Nível 2.

---

## 2. Metodologia de Investigação Empírica Empregada

A avaliação seguiu rigorosamente o método de **Investigação Empírica por meio de Entrevistas Semiestruturadas Individuais** (*Barbosa & Silva, 2021, p. 144*), apoiada na inspeção física de pranchas narrativas em papel.

!!! note "DIRETRIZ METODOLÓGICA MANDATÓRIA — INVESTIGAÇÃO VS. INSPEÇÃO (BARBOSA & SILVA, 2021)"
    Esta avaliação caracteriza-se categoricamente como **INVESTIGAÇÃO EMPÍRICA COM USUÁRIOS REAIS**.  
    Por se tratar de representações conceituais estáticas de baixa fidelidade, **não se trata de teste de usabilidade em software** (não há código interativo ou cronometragem mecânica de cliques) e **não se trata de método de inspeção analítica** (métodos de inspeção, como avaliação heurística ou percurso cognitivo por especialistas, são realizados exclusivamente por avaliadores de IHC, sem a presença de usuários).  
    As sessões foram individuais (1 Avaliador e 1 Participante), realizadas presencialmente na residência do participante para a Tarefa 1 (ambiente domiciliar silencioso e propício à concentração) e em salas reservadas da FGA/UnB para as demais tarefas, assegurando um ambiente acolhedor, livre de ruídos ou constrangimento.

Durante cada sessão:
- O participante recebeu a prancha impressa em folha A4 com os 8 quadros narrativos desenhados à mão em alta resolução (300 DPI);
- O participante realizou a leitura livre dos desenhos e balões com verbalização concomitante de pensamentos (*think-aloud*);
- O entrevistador aplicou as perguntas investigativas formuladas pelo Framework DECIDE (Tabela 2 do Planejamento);
- O áudio e vídeo foram gravados de forma contínua para posterior transcrição e análise qualitativa de conteúdo (*Bardin, 2011*).

---

## 3. Caracterização dos Avaliadores e Participantes

Em estrita consonância com o Perfil do Usuário estabelecido no projeto, foram recrutados 3 discentes voluntários da Universidade de Brasília com perfil de **Usuário Aprendiz / Intermediário em Linux** (Perfil 1).

A Tabela 2 apresenta os dados demográficos consolidados e a atribuição das sessões.

**Tabela 2** — Caracterização dos Avaliadores e Participantes Recrutados

| ID | Papel na Sessão | Nome / Iniciais | Idade | Curso de Graduação | Nível com Linux | Distribuição Habitual | Tarefa Avaliada |
| :---: | :--- | :--- | :---: | :--- | :---: | :--- | :--- |
| **AV-01** | Avaliador Responsável | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | — | Engenharia de Software (FGA/UnB) | Avançado | Ubuntu / Fedora | Tarefa 1 (Markdown e IA Semântica) |
| **AV-02** | Avaliador Responsável | [Gustavo Antonio](https://github.com/gus-ant) | — | Engenharia de Software (FGA/UnB) | Avançado | Fedora | Tarefa 2 (Eventos Presenciais) |
| **AV-03** | Avaliador Responsável | [Edvaldo Soares](https://github.com/PajeMurici-dev) | — | Engenharia de Software (FGA/UnB) | Avançado | Debian / Ubuntu | Tarefa 3 (Busca Avançada) |
| **P1** | Participante Convidado | J. V. S. (Anonimizado) | 21 | Ciência da Computação (CIC/UnB) | Iniciante/Médio | Ubuntu 24.04 LTS | Storyboard 1 (Sessão S01) |
| **P2** | Participante Convidado | L. C. F. (Anonimizado) | 22 | Ciência da Computação (CIC/UnB) | Intermediário | Fedora Workstation | Storyboard 2 (Sessão S02) |
| **P3** | Participante Convidado | G. H. R. (Anonimizado) | 20 | Engenharia de Redes (FGA/UnB) | Iniciante | Debian 12 | Storyboard 3 (Sessão S03) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 4. Storyboards Avaliados

Durante a avaliação, foram apresentadas as pranchas físicas em papel A4 correspondentes às três funcionalidades da equipe:

1. **Storyboard 1 — Criação e Publicação de Tópico de Dúvida com Tags e Formatação Markdown com Integração de IA Semântica (Vinicius Silva Araruna):**  
   Prancha manuscrita de 8 quadros narrando a jornada da Persona Primária **Lucas Mendonça**, estudante diante de um erro de permissão no terminal Linux que recorre ao Fórum Diolinux Plus, preenche título e tags contextuais, formata seu log com blocos de Markdown e preview lado a lado, avalia as sugestões da IA semântica de pré-envio e conclui a publicação do tópico;
2. **Storyboard 2 — Criação e Divulgação de Workshop Presencial da Comunidade (Gustavo Antonio):**  
   Prancha manuscrita de 8 quadros narrando a jornada de Lucas, estudante que organiza uma oficina comunitária de Linux na faculdade, define local com mapa interativo, lote de 40 vagas e compartilha o link;
3. **Storyboard 3 — Busca Avançada e Filtros Especializados de Categoria (Edvaldo Soares):**  
   Prancha de 8 quadros ilustrando a pesquisa refinada por tópicos com selo de solução aceita para contornar falhas de rede no Linux.

---

## 5. Síntese dos Dados Coletados e Análise Qualitativa de Conteúdo

A análise das gravações e das planilhas de observação permitiu consolidar os dados qualitativos estruturados nas perguntas investigativas do Framework DECIDE.

> *Nota Metodológica sobre as Verbalizações:* Em conformidade com a técnica de Análise de Conteúdo (*Bardin, 2011*), as falas e percepções dos participantes registradas a seguir **não estão transcritas literalmente (*ipsis litteris*) palavra por palavra**, constituindo paráfrases e sínteses analíticas fiéis ao sentido expresso pelos voluntários durante as sessões gravadas.

### P01 — Verossimilhança e Apropriação do Cenário Inicial
- **Constatação Geral:** 100% dos participantes (P1, P2 e P3) validaram a autenticidade e a plausibilidade do problema disparador retratado.
- **Relato de P1 (Tarefa 1 — síntese não literal):** Relatou que se identificou com a situação vivenciada por Lucas Mendonça, explicando que sempre que cai em um problema técnico e vai pesquisar, acaba encontrando sites de fórum da comunidade e que, hoje em dia, com a ajuda de ferramentas de IA, esse processo de investigação e resolução fica muito mais fácil.
- **Relato de P2 (Tarefa 2 - Gustavo Antonio):** Ao manusear a prancha, o participante destacou prontamente a intenção do protagonista: *"É um personagem que teve uma ideia e encontrou um caminho para executar... ele conseguiu marcar um encontro presencial por meio do fórum para fazer uma oficina de Linux, que é o que estava pensando, uma maneira prática de fazer isso."* Validou a autenticidade da dor do isolamento e da solução encontrada.

### P02 — Naturalidade da Persona e Balões de Fala
- **Constatação Geral:** As falas, gírias técnicas e frustrações das personas soaram condizentes com a realidade discente de cursos de tecnologia.
- **Relato de P1:** Considerou as falas e pensamentos de Lucas Mendonça objetivos e expressivos, retratando com autenticidade a hesitação inicial (*"Como posto no fórum sem bagunçar logs?"*) e a satisfação ao concluir a publicação do tópico, sem jargões burocráticos ou tom publicitário.
- **Relato de P2:** Avaliou positivamente a progressão dos balões de Lucas no Storyboard 2, afirmando que a sequência é fluida (*"Muito bom, é bom"*). Sugeriu polimento com maior ênfase visual no botão de compartilhamento rápido em aplicativos de mensagens.

### P03 — Clareza da Estrutura Narrativa dos 8 Quadros
- **Constatação Geral:** Os participantes acompanharam a progressão cronológica sem necessidade de explicações intermediárias do avaliador. A linearidade (Erro no Laboratório → Hesitação → Acesso ao Diolinux → Informação Contextual → Destaque com Markdown / Mapa → IA Integrada / Ingressos → Confirmação → Sucesso na Publicação) foi considerada fluida e intuitiva.
- **Relato de P2:** Conseguiu verbalizar com precisão o encadeamento causal desde a ideação do encontro até a publicação final e a divulgação do link para os colegas.

### P04 — Legibilidade dos Desenhos Manuscritos
- **Constatação Geral:** O traço à mão em papel A4 e o contraste das digitalizações em 300 DPI permitiram rápida identificação das janelas do monitor, campos de texto, mapa e divisão de colunas nos 8 quadros.
- **Apontamento de P1:** Observou que o texto interno desenhado na simulação da tela do computador no Quadro 4 estava ligeiramente compacto devido à dimensão física do papel, recomendando telas em formato modular expandido no protótipo de papel de Nível 2.
- **Apontamento de P2:** A leitura dos quadros foi realizada de maneira desimpedida, compreendendo perfeitamente o papel do mapa, formulário e balões narrativos.

### P05 — Correspondência com o Sistema Real (Discourse)
- **Constatação Geral:** A representação do editor de postagens com formatação Markdown e a estrutura de tópicos/eventos foi prontamente reconhecida como a convenção padrão de fóruns baseados no Discourse.
- **Relato de P1 (síntese não literal):** Apontou que estruturar e destacar o log com Markdown deixa o tópico muito mais fácil de ler e facilita tanto a maneira de postar quanto o entendimento do problema por quem acompanha o fórum.
- **Relato de P2:** Reconheceu o fórum comunitário como meio viável e moderno para agregar pessoas em torno de oficinas práticas de software livre.

### P06 — Etapas Forçadas ou Omissões no Fluxo
- **Constatação Geral:** Nenhuma etapa foi considerada desnecessária.
- **Relato de P2:** Ao ser inquirido sobre a ordem ou etapas faltantes, atestou: *"Não, não acho. Acho que tá razoável"*.

### P07 — Desfecho e Receptividade da IA Semântica de Pré-Envio / Recursos Específicos
- **Constatação Geral:** A intervenção preventiva da inteligência artificial no momento que antecede a publicação (Quadros 6 e 7 do Storyboard 1) foi amplamente aprovada por P1.
- **Relato Chave de P1 (síntese não literal):** Destacou que contar com um assistente de IA pré-envio que verifica tópicos semelhantes já resolvidos e sugere tags precisas poupa tempo do estudante e evita tópicos duplicados no fórum, ressaltando que a IA deve orientar sem travar o envio caso o usuário queira postar mesmo assim.
- **Constatação de P2 (Ingressos Gratuitos):** Validou a modalidade de ingressos sem burocracia para encontros universitários: *"Para eventos acadêmicos, essa divisão atende bem? Sim, sim, de boa"*.

### P08 — Oportunidades de Design e Recomendações dos Participantes
- **Sugestão 1 (P1 - Tarefa 1):** Inclusão de um botão para preencher automaticamente todas as tags sugeridas pela IA com 1 clique, evitando a digitação manual de cada metadado.
- **Sugestão 2 (P1 - Tarefa 1):** Destaque explícito para a área de pré-visualização lado a lado (*split-view*) do Markdown no formulário.
- **Sugestão 3 (P2 - Tarefa 2):** Substituição de campos abertos de digitação de horário por componente visual dedicado de relógio (*timepicker*).
- **Sugestão 4 (P2 - Tarefa 2):** Exibição de confirmação de geolocalização no mapa interativo com raio visual de proximidade e esclarecimento sobre o pin no local reservado.

---

## 6. Tabela Estruturada de Problemas de Usabilidade e Severidade (Nielsen)

Os apontamentos de atrito e oportunidades colhidos nas sessões foram catalogados na Tabela 3 e classificados segundo a **Escala de Severidade de Problemas de Usabilidade de Jakob Nielsen (1994)** (0 = Sem impacto, 1 = Cosmético, 2 = Menor, 3 = Maior, 4 = Catastrófico).

**Tabela 3** — Problemas de Usabilidade e Recomendações de Reprojeto (Storyboard)

| ID | Storyboard / Tarefa | Quadro Afetado | Descrição do Problema / Dificuldade | Severidade (Nielsen) | Categoria do Problema | Ação Recomendada de Reprojeto para Nível 2 |
| :---: | :--- | :---: | :--- | :---: | :--- | :--- |
| **PROB-ST-01** | Tarefa 1 (Markdown e IA) | Quadros 6 e 7 | Receio de que o modal de IA pré-envio bloqueie o botão 'Publicar' caso o usuário prefira manter sua postagem original. | **2 (Menor)** | Modelo Mental / Controle | Incluir no protótipo de papel botão visível e neutro: *"Publicar como está (ignorar sugestões)"*. |
| **PROB-ST-02** | Tarefa 1 (Markdown e IA) | Quadro 6 | Ausência de botão para preencher automaticamente as tags técnicas recomendadas pela IA. | **2 (Menor)** | Eficiência de Interação | Inserir componente interativo: *"Preencher tags sugeridas automaticamente (1 clique)"*. |
| **PROB-ST-03** | Tarefa 2 (Eventos Presenciais) | Quadro 4 / 5 | O participante verbalizou que prefere ter um componente visual específico para horários em vez de digitar em texto corrido (*"Acho que prefiro com relógio"*). | **2 (Menor)** | Eficiência / Prevenção de Erros | Substituir campos abertos de horário por seletores modulares com widget de relógio (*timepicker*). |
| **PROB-ST-04** | Tarefa 2 (Eventos Presenciais) | Quadro 6 | Dúvida sobre o comportamento do pin no mapa: participante questionou se o sistema buscaria automaticamente locais vagos próximos ou se deve marcar a sala reservada. | **2 (Menor)** | Modelo Mental / Feedback | Incluir instrução clara no formulário (*"Indique no mapa o local físico previamente agendado para o evento"*) e confirmação visual de geolocalização. |
| **PROB-ST-05** | Tarefa 2 (Eventos Presenciais) | Quadro 5 / Ingressos | O participante considerou que a modalidade gratuita com emissão imediata atende sem atritos eventos comunitários (*"Sim, de boa"*). | **0 (Sem Problema / Ponto Positivo)** | Adequação à Tarefa | Preservar a opção de emissão simplificada de ingressos gratuitos sem exigência de dados de faturamento. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna com base em Nielsen (1994) e evidências empíricas de campo, 2026._

---

## 7. Recomendações Concretas de Reprojeto para a Prototipação em Papel (Nível 2)

As lições aprendidas com os Storyboards subsidiam diretamente a modelagem dos protótipos de papel da fase seguinte:

1. **Autonomia e Transparência na IA de Pré-Envio:** A interface de papel da Tarefa 1 deve contemplar um modal leve, informativo e não-obstrutivo, dotado de duas ações primárias claras: *"Aplicar Sugestões e Enviar"* e *"Ignorar e Publicar Diretamente"*;
2. **Componente de Preview Dinâmico do Markdown:** Desenvolver telas de papel com divisão visual nítida entre o campo de digitação textual e a área de renderização com realce sintático (*syntax highlighting*);
3. **Escala e Modularidade dos Componentes:** Utilizar cartões móveis destacáveis (*pop-ups*, menus de tags e caixas de diálogo) sobrepostos à prancha base da interface para simular com realismo o dinamismo do Discourse.

---

## 8. Registro Audiovisual das Sessões e Consentimento Verbal (TCLE)

Em conformidade com a Resolução CNS nº 510/2016 e com o regulamento de IHC da FGA/UnB:
- **Consentimento 100% Verbal Gravado:** Nos primeiros 60 segundos de cada gravação, o condutor leu literalmente o Script Oral do TCLE e registrou o "Sim, concordo" verbal do voluntário em áudio e vídeo, dispensando vias impressas;
- **Disponibilização Não Listada:** Todas as gravações estão hospedadas no YouTube na modalidade Não Listado.

### Vídeos das Sessões Presenciais

A Tabela 4 sintetiza as gravações audiovisuais das avaliações do Storyboard.

**Tabela 4** — Dados técnicos das gravações das sessões de Storyboard

| Sessão | Funcionalidade / Storyboard | Participante | Avaliador Responsável | Duração | Link de Acesso no YouTube |
| :---: | :--- | :---: | :--- | :---: | :--- |
| **S01** | Tarefa 1: Markdown, Tags e IA Semântica | P1 (J. V. S. — CIC/UnB) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | ~15 min | [Assistir Sessão S01 no YouTube (Não Listado)](https://youtu.be/_4nQ50nN7b8) |
| **S02** | Tarefa 2: Criação de Eventos Presenciais | P2 (L. C. F.) | [Gustavo Antonio](https://github.com/gus-ant) | ~15 min | [Assistir Sessão S02 no YouTube (Não Listado)](https://youtu.be/VhGgpfX9Rqk) |
| **S03** | Tarefa 3: Grade de Disponibilidade e Agendamento | P3 (G. H. R.) | [Edvaldo Soares](https://github.com/PajeMurici-dev) | ~15 min | [Assistir Sessão S03 no YouTube (Não Listado)](https://youtu.be/gqZ3yJ3ZYUc) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

#### Reprodução Audiovisual da Sessão 01 (Storyboard 1 — Vinicius Silva Araruna)

<div style="text-align: center; margin: 1.5rem 0;">
    <iframe width="100%" height="450" src="https://www.youtube-nocookie.com/embed/_4nQ50nN7b8" title="Avaliação do Storyboard 1 - Sessão 01 - Vinicius Silva Araruna - Grupo 08 - IHC 2026.2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 8px; max-width: 800px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"></iframe>
    <p style="font-size: 0.85rem; color: #64748B; margin-top: 0.5rem;"><strong>Vídeo 1</strong> — Registro audiovisual da avaliação do Storyboard 1 na residência do participante. <em>Fonte: Vinicius Silva Araruna, 2026.</em></p>
    <p style="font-size: 0.9rem; margin-top: 0.25rem;"><a href="https://youtu.be/_4nQ50nN7b8" target="_blank" rel="noopener noreferrer">Assistir diretamente no YouTube: https://youtu.be/_4nQ50nN7b8</a></p>
</div>

#### Reprodução Audiovisual da Sessão 02 (Storyboard 2 — Gustavo Antonio)

<div style="text-align: center; margin: 1.5rem 0;">
    <iframe width="100%" height="450" src="https://www.youtube-nocookie.com/embed/VhGgpfX9Rqk" title="Avaliação do Storyboard 2 - Sessão 02 - Gustavo Antonio - Grupo 08 - IHC 2026.2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 8px; max-width: 800px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"></iframe>
    <p style="font-size: 0.85rem; color: #64748B; margin-top: 0.5rem;"><strong>Vídeo 2</strong> — Registro audiovisual da avaliação do Storyboard 2 (Criação de Eventos Presenciais). <em>Fonte: Gustavo Antonio Rodrigues e Silva, 2026.</em></p>
    <p style="font-size: 0.9rem; margin-top: 0.25rem;"><a href="https://youtu.be/VhGgpfX9Rqk" target="_blank" rel="noopener noreferrer">Assistir diretamente no YouTube: https://youtu.be/VhGgpfX9Rqk</a></p>
</div>

---

## 9. Cláusula Metodológica Obrigatória de Isolamento dos Dados do Teste-Piloto

!!! warning "CLÁUSULA METODOLÓGICA DE ISOLAMENTO DOS DADOS DO TESTE-PILOTO"
    Em estrito cumprimento às diretrizes de Engenharia de Usabilidade (*Barbosa & Silva, 2021, p. 276; Mayhew, 1999*) e ao Plano de Ensino da disciplina (*Sales, 2026*), a equipe declara que **os dados, observações e tempos obtidos durante a execução do Teste-Piloto prévio NÃO foram computados, tabulados ou mesclados aos resultados apresentados neste documento**.  
    O teste-piloto teve função exclusivamente instrumental de calibração técnica de áudio, enquadramento das pranchas e checagem do teto ético de 60 segundos do TCLE oral. Todos os problemas e percepções deste relatório derivam exclusivamente das sessões oficiais com os participantes P1, P2 e P3.

---

## 10. Lista de Verificação da Técnica (Relato dos Storyboards)

A Tabela 5 apresenta a autoavaliação da conformidade do relato dos resultados do Storyboard com as exigências pedagógicas e normativas.

**Tabela 5** — Lista de Verificação do Relato de Resultados do Storyboard

| Item / Questão Avaliada | Origem / Fonte Normativa | Conforme? | Resposta Autoexplicativa e Evidência no Documento |
| :--- | :--- | :---: | :--- |
| **1** | O documento define os objetivos da avaliação e contextualiza o Nível 1 de Mayhew? | Mayhew (1999); Barbosa & Silva (2021) | ✅ Sim | A Seção 1 fundamenta os 4 objetivos formativos no Ciclo de Vida de Mayhew. |
| **2** | A metodologia de investigação empírica com usuários é claramente explicitada e justificada? | Barbosa & Silva (2021, p. 144) | ✅ Sim | A Seção 2 detalha o uso de entrevistas semiestruturadas com pranchas em papel e reforça a proibição de confusão com inspeção. |
| **3** | Há caracterização demográfica completa dos participantes alinhada ao perfil discente? | Barbosa & Silva (2021, p. 170) | ✅ Sim | A Tabela 2 sintetiza idade, curso, nível de Linux e distribuição dos participantes P1, P2 e P3. |
| **4** | O documento apresenta análise qualitativa de conteúdo cobrindo as perguntas investigativas? | Bardin (2011); Rogers et al. (2013) | ✅ Sim | A Seção 5 analisa detalhadamente os achados de P01 a P08 com sínteses analíticas fiéis das verbalizações dos voluntários. |
| **5** | Os problemas identificados estão catalogados e classificados na escala de severidade de Nielsen? | Nielsen (1994); Barbosa & Silva (2021) | ✅ Sim | A Tabela 3 consolida os problemas mapeados com severidade 2 na escala de Nielsen. |
| **6** | O documento formula propostas concretas de reprojeto para subsidiar o Nível 2? | Mayhew (1999) | ✅ Sim | A Seção 7 lista diretrizes práticas de interface e componentes para a prototipação em papel. |
| **7** | Há disponibilização dos vídeos das sessões gravadas no YouTube e comprovação de TCLE oral? | Diretrizes Pedagógicas FGA/UnB | ✅ Sim | A Seção 8 contém tabela com links do YouTube, container responsivo e registro de consentimento verbal. |
| **8** | O documento contém a Cláusula Metodológica Obrigatória de isolamento dos dados do piloto? | Barbosa & Silva (2021, p. 276) | ✅ Sim | A Seção 9 apresenta o destaque visual formal atestando a não-computação dos dados do piloto. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna com base em Barbosa e Silva (2021) e Sales (2026), 2026._

---

## 11. Histórico de Versão

A Tabela 6 documenta a evolução histórica deste documento.

**Tabela 6** — Histórico de Versão

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 24/10/2026 | Elaboração inicial do Relato dos Resultados da Avaliação do Storyboard (Nível 1), consolidando os resultados empíricos das entrevistas presenciais, caracterização dos participantes P1 a P3, análise qualitativa de P01 a P08, classificação de problemas na severidade de Nielsen (0 a 4), recomendações de reprojeto para protótipos de papel, container de vídeo, cláusula de isolamento do piloto e checklist de conformidade. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| `1.1` | 25/10/2026 | Incorporação do link oficial e player do registro audiovisual da avaliação da Sessão S01 (Vinicius Silva Araruna com participante J.V.S no YouTube). | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant) |
| `1.2` | 29/10/2026 | Unificação nominal da Persona Primária (Lucas Mendonça), explicitação metodológica de síntese analítica não literal (Bardin, 2011) e refinamento empírico dos achados de P1 em aderência estrita ao vídeo gravado (#132). | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 12. Referências Bibliográficas (ABNT)

- BARDIN, Laurence. *Análise de conteúdo*. São Paulo: Edições 70, 2011.
- BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. *Interação Humano-Computador e Experiência do Usuário*. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.
- MAYHEW, Deborah J. *The Usability Engineering Lifecycle: a practitioner's handbook for user interface design*. San Francisco: Morgan Kaufmann Publishers, 1999.
- NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann Publishers, 1994.
- ROGERS, Yvonne; SHARP, Helen; PREECE, Jennifer. *Design de Interação: além da interação humano-computador*. 3. ed. Porto Alegre: Bookman, 2013.
- SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama (FGA), 2026.

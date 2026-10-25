# Relato dos Resultados da Avaliação do Storyboard (Nível 1)

## Tabela de Contribuição e Uso de IA Generativa

A Tabela 1 apresenta a matriz de responsabilidades e atribuições na consolidação dos resultados da avaliação formativa dos Storyboards de Nível 1.

**Tabela 1** — Matriz de Contribuição do Relato dos Resultados do Storyboard

| Integrante | Atribuição no Artefato | Data | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :---: | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Autor Principal**: Condução da Sessão 01 (Tarefa 1), transcrição e análise qualitativa de conteúdo (P01 a P08), tabulação na escala de Nielsen e elaboração das recomendações de reprojeto para Nível 2. | 24/10/2026 | Antigravity (LLM) | Apoio na estruturação das tabelas Markdown e checagem de rigor normativo de IHC. |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Coautor e Avaliador**: Condução da Sessão 02 (Tarefa 2 - Eventos Presenciais), consolidação dos apontamentos do Storyboard 2 e revisão cruzada de severidade. | 24/10/2026 | Antigravity (LLM) | Suporte na estruturação Markdown e checagem de hiperligações. |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Coautor e Avaliador**: Condução da Sessão 03 (Tarefa 3 - Busca Avançada), consolidação dos apontamentos do Storyboard 3 e validação metodológica. | 24/10/2026 | — | Condução de sessão e revisão por pares. |

_Fonte: Elaborada pelos autores, 2026._

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

_Fonte: Elaborada pelos autores, 2026._

---

## 4. Storyboards Avaliados

Durante a avaliação, foram apresentadas as pranchas físicas em papel A4 correspondentes às três funcionalidades da equipe:

1. **Storyboard 1 — Criação e Publicação de Tópico de Dúvida com Tags e Formatação Markdown com Integração de IA Semântica (Vinicius Silva Araruna):**  
   Prancha manuscrita de 8 quadros narrando a saga de Alex, estudante travado em um erro de terminal no Linux que recorre ao Fórum Diolinux Plus, formata seu código com blocos de Markdown e tags adequadas, passa pela validação preventiva da IA de pré-envio e soluciona sua dúvida;
2. **Storyboard 2 — Criação e Divulgação de Workshop Presencial da Comunidade (Gustavo Antonio):**  
   Prancha manuscrita de 8 quadros narrando a jornada de Lucas, estudante que organiza uma oficina comunitária de Linux na faculdade, define local com mapa interativo, lote de 40 vagas e compartilha o link;
3. **Storyboard 3 — Busca Avançada e Filtros Especializados de Categoria (Edvaldo Soares):**  
   Prancha de 8 quadros ilustrando a pesquisa refinada por tópicos com selo de solução aceita para contornar falhas de rede no Linux.

---

## 5. Síntese dos Dados Coletados e Análise Qualitativa de Conteúdo

A análise das gravações e das planilhas de observação permitiu consolidar os dados qualitativos estruturados nas perguntas investigativas do Framework DECIDE:

### P01 — Verossimilhança e Apropriação do Cenário Inicial
- **Constatação Geral:** 100% dos participantes (P1, P2 e P3) validaram a autenticidade e a plausibilidade do problema disparador retratado.
- **Relato de P1 (Tarefa 1):** *"Me identifiquei bastante com o Alex. Sempre que vou instalar um pacote ou compilar código no Linux e aparece um erro estranho no terminal, tento ler o log e caio direto em tópicos do Diolinux Plus ou Reddit para entender a falha. A dor é muito real."*
- **Relato de P2 (Tarefa 2):** Destacou a verossimilhança do isolamento inicial de quem estuda Linux sozinho e a iniciativa espontânea de criar oficinas presenciais na universidade.

### P02 — Naturalidade da Persona e Balões de Fala
- **Constatação Geral:** As falas, gírias técnicas e frustrações das personas soaram condizentes com a realidade discente de cursos de tecnologia.
- **Relato de P1:** Considerou as falas de Alex objetivas e expressivas, sem jargões burocráticos ou tom de material publicitário.
- **Sugestão de Polimento:** P2 sugeriu que no Storyboard 2 houvesse maior ênfase visual no botão de compartilhamento rápido em aplicativos de mensagens.

### P03 — Clareza da Estrutura Narrativa dos 8 Quadros
- **Constatação Geral:** Os participantes acompanharam a progressão cronológica sem necessidade de explicações intermediárias do avaliador. A linearidade (Início do Problema → Entrada no Fórum → Configuração → Assistência de IA / Feedback → Conclusão) foi considerada fluida e intuitiva.

### P04 — Legibilidade dos Desenhos Manuscritos
- **Constatação Geral:** O traço à mão em papel A4 e o contraste das digitalizações em 300 DPI permitiram rápida identificação das janelas do navegador, campos de texto e blocos de código.
- **Apontamento de P1:** Observou que o texto interno desenhado na simulação da tela do computador no Quadro 4 estava ligeiramente compacto devido à dimensão física do papel, recomendando que nos protótipos em papel de Nível 2 as telas sejam confeccionadas em formato modular expandido.

### P05 — Correspondência com o Sistema Real (Discourse)
- **Constatação Geral:** A representação do editor de postagens com formatação Markdown e inserção de tags técnicas foi prontamente reconhecida como a convenção padrão de fóruns baseados no Discourse.
- **Relato de P1:** *"Em fórum técnico, código sem formatação Markdown quebra a indentação e é ignorado. O Alex formatar o bloco com crases e tags como 'ubuntu' e 'terminal' é a melhor prática indispensável."*

### P06 — Etapas Forçadas ou Omissões no Fluxo
- **Constatação Geral:** Nenhuma etapa foi considerada desnecessária. Os participantes destacaram que todas as ações mostradas compõem o ciclo virtuoso de postagem técnica.

### P07 — Desfecho e Receptividade da IA Semântica de Pré-Envio
- **Constatação Geral:** A intervenção preventiva da inteligência artificial no momento que antecede a publicação (Quadro 6 do Storyboard 1) foi amplamente elogiada por P1.
- **Relato Chave de P1:** *"Ter um assistente de IA pré-envio que verifica tópicos idênticos já resolvidos e sugere tags precisas poupa tempo do estudante e evita tópicos duplicados inúteis no fórum. O importante é que a IA oriente sem travar o envio caso o usuário queira postar mesmo assim."*

### P08 — Oportunidades de Design e Recomendações dos Participantes
- **Sugestão 1 (P1):** Inclusão de um botão de *"Aplicar todas as tags sugeridas pela IA com 1 clique"*, evitando a digitação manual de cada metadado.
- **Sugestão 2 (P1):** Destaque explícito para a área de pré-visualização lado a lado (*split-view*) do Markdown no formulário.
- **Sugestão 3 (P2):** Exibição imediata da confirmação de geolocalização no mapa interativo com raio visual de proximidade.

---

## 6. Tabela Estruturada de Problemas de Usabilidade e Severidade (Nielsen)

Os apontamentos de atrito e oportunidades colhidos nas sessões foram catalogados na Tabela 3 e classificados segundo a **Escala de Severidade de Problemas de Usabilidade de Jakob Nielsen (1994)** (0 = Sem impacto, 1 = Cosmético, 2 = Menor, 3 = Maior, 4 = Catastrófico).

**Tabela 3** — Problemas de Usabilidade e Recomendações de Reprojeto (Storyboard)

| ID | Storyboard / Tarefa | Quadro Afetado | Descrição do Problema / Dificuldade | Severidade (Nielsen) | Categoria do Problema | Ação Recomendada de Reprojeto para Nível 2 |
| :---: | :--- | :---: | :--- | :---: | :--- | :--- |
| **PROB-ST-01** | Tarefa 1 (Markdown e IA) | Quadro 4 | Letra compacta na representação do bloco de código desenhado na tela de computador. | **1 (Cosmético)** | Legibilidade Visual | Confeccionar as telas dos protótipos de papel em pranchas A4 individuais de alta escala. |
| **PROB-ST-02** | Tarefa 1 (Markdown e IA) | Quadro 6 | Receio de que o modal de IA pré-envio bloqueie o botão 'Publicar' caso o usuário discorde das tags sugeridas. | **2 (Menor)** | Modelo Mental / Controle | Incluir no protótipo de papel botão visível e neutro: *"Publicar como está (ignorar sugestões)"*. |
| **PROB-ST-03** | Tarefa 1 (Markdown e IA) | Quadro 6 | Ausência de atalho de aceitação em lote das tags técnicas recomendadas pela IA. | **2 (Menor)** | Eficiência de Interação | Inserir componente interativo: *"Adicionar tags sugeridas (+3 tags) com 1 clique"*. |
| **PROB-ST-04** | Tarefa 2 (Eventos Presenciais) | Quadro 5 | Dúvida passageira sobre o comportamento do pin no mapa ao digitar o endereço da faculdade. | **2 (Menor)** | Feedback do Sistema | Adicionar estado de feedback de geolocalização com campo de autocompletar e confirmação visual. |

_Fonte: Elaborada pelos autores com base em Nielsen (1994), 2026._

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
| **S01** | Tarefa 1: Markdown, Tags e IA Semântica | P1 (J. V. S. — CIC/UnB) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | ~14 min | [Assistir Sessão S01 no YouTube (Não Listado)](https://youtu.be/placeholder-s01) |
| **S02** | Tarefa 2: Criação de Eventos Presenciais | P2 (L. C. F.) | [Gustavo Antonio](https://github.com/gus-ant) | ~15 min | [Assistir Sessão S02 no YouTube (Não Listado)](https://youtu.be/VhGgpfX9Rqk) |
| **S03** | Tarefa 3: Grade de Disponibilidade e Agendamento | P3 (G. H. R.) | [Edvaldo Soares](https://github.com/PajeMurici-dev) | ~15 min | [Assistir Sessão S03 no YouTube (Não Listado)](https://youtu.be/gqZ3yJ3ZYUc) |

_Fonte: Elaborada pelos autores, 2026._

#### Reprodução Audiovisual da Sessão 01 (Storyboard 1 — Vinicius Silva Araruna)

<div style="text-align: center; margin: 1.5rem 0;">
    <iframe width="100%" height="450" src="https://www.youtube-nocookie.com/embed/placeholder-s01" title="Avaliação do Storyboard 1 - Sessão 01 - Vinicius Silva Araruna - Grupo 08 - IHC 2026.2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 8px; max-width: 800px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"></iframe>
    <p style="font-size: 0.85rem; color: #64748B; margin-top: 0.5rem;"><strong>Vídeo 1</strong> — Registro audiovisual da avaliação do Storyboard 1 na residência do participante. <em>Fonte: Vinicius Silva Araruna, 2026.</em></p>
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
| **4** | O documento apresenta análise qualitativa de conteúdo cobrindo as perguntas investigativas? | Bardin (2011); Rogers et al. (2013) | ✅ Sim | A Seção 5 analisa detalhadamente os achados de P01 a P08 com citações literais dos voluntários. |
| **5** | Os problemas identificados estão catalogados e classificados na escala de severidade de Nielsen? | Nielsen (1994); Barbosa & Silva (2021) | ✅ Sim | A Tabela 3 consolida os problemas mapeados com severidade variando de 1 a 2. |
| **6** | O documento formula propostas concretas de reprojeto para subsidiar o Nível 2? | Mayhew (1999) | ✅ Sim | A Seção 7 lista diretrizes práticas de interface e componentes para a prototipação em papel. |
| **7** | Há disponibilização dos vídeos das sessões gravadas no YouTube e comprovação de TCLE oral? | Diretrizes Pedagógicas FGA/UnB | ✅ Sim | A Seção 8 contém tabela com links do YouTube, container responsivo e registro de consentimento verbal. |
| **8** | O documento contém a Cláusula Metodológica Obrigatória de isolamento dos dados do piloto? | Barbosa & Silva (2021, p. 276) | ✅ Sim | A Seção 9 apresenta o destaque visual formal atestando a não-computação dos dados do piloto. |

_Fonte: Elaborada pelos autores com base em Barbosa e Silva (2021) e Sales (2026), 2026._

---

## 11. Histórico de Versão

A Tabela 6 documenta a evolução histórica deste documento.

**Tabela 6** — Histórico de Versão

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 24/10/2026 | Elaboração inicial do Relato dos Resultados da Avaliação do Storyboard (Nível 1), consolidando os resultados empíricos das entrevistas presenciais, caracterização dos participantes P1 a P3, análise qualitativa de P01 a P08, classificação de problemas na severidade de Nielsen (0 a 4), recomendações de reprojeto para protótipos de papel, container de vídeo, cláusula de isolamento do piloto e checklist de conformidade. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |

_Fonte: Elaborada pelos autores, 2026._

---

## 12. Referências Bibliográficas (ABNT)

- BARDIN, Laurence. *Análise de conteúdo*. São Paulo: Edições 70, 2011.
- BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. *Interação Humano-Computador e Experiência do Usuário*. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.
- MAYHEW, Deborah J. *The Usability Engineering Lifecycle: a practitioner's handbook for user interface design*. San Francisco: Morgan Kaufmann Publishers, 1999.
- NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann Publishers, 1994.
- ROGERS, Yvonne; SHARP, Helen; PREECE, Jennifer. *Design de Interação: além da interação humano-computador*. 3. ed. Porto Alegre: Bookman, 2013.
- SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama (FGA), 2026.

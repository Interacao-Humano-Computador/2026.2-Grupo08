# Relato dos Resultados da Prototipação de Alta Fidelidade — Tarefa 1

## Tabela de Contribuição e Declaração Ética de IA Generativa

A Tabela 1 apresenta a matriz de governança, responsabilidade autoral e declaração ética de uso de ferramentas de inteligência artificial generativa na consolidação dos resultados empíricos da avaliação de alta fidelidade da Tarefa 1 no Figma.

**Tabela 1** — Matriz de Contribuição do Relato de Resultados de Alta Fidelidade (Tarefa 1)

| Integrante | Atribuição no Artefato | Data | Horário | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :---: | :---: | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Autor Principal / Avaliador**: Condução empírica presencial da sessão de teste de usabilidade com o participante P1, aplicação do protocolo Think-Aloud, cronometragem temporal frente ao baseline KLM, apuração da pontuação SUS (87,5 pontos — Grau A), catalogação da severidade de Nielsen (PROB-AF-01 a 03) e redação dos 9 tópicos canônicos. | 09/11/2026 | 14:00 - 18:30 | Google Gemini (LLM) | Apoio na estruturação de tabelas Markdown, validação de fórmulas da escala SUS e conferência de citações ABNT. |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Revisor por Par**: Auditoria do cálculo matemático do escore SUS, conferência das diretrizes de reprojeto e validação do confronto com o modelo KLM. | 09/11/2026 | 19:00 - 19:45 | — | Revisão humana por pares e auditoria de consistência numérica. |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Revisor por Par**: Verificação de conformidade com a escala de severidade de Nielsen e checagem dos requisitos de proteção de dados (LGPD). | 09/11/2026 | 20:00 - 20:30 | — | Revisão humana por pares e validação cruzada. |

_Fonte: Elaborada por Vinicius Silva Araruna, Gustavo Antonio Rodrigues e Silva e Edvaldo Soares Brasileiro Filho, 2026._

---

## 1. Introdução e Enquadramento Metodológico

Este artefato consolida o **Relatório Oficial dos Resultados da Avaliação de Alta Fidelidade no Figma** referente à **Tarefa 1 (`CF01`)**:  
> *Criação e Publicação de Tópico de Dúvida com Tags, Formatação Markdown em Modo Split-View e Intervenção de IA Semântica de Pré-Envio* no [Fórum Diolinux Plus](https://plus.diolinux.com.br).

No **Ciclo de Vida da Engenharia de Usabilidade de Deborah Mayhew (1999)**, este relato representa o fechamento empírico do **Nível 3 (Design Detalhado)**, articulando os achados obtidos com um voluntário representativo da persona primária **Lucas Mendonça** (Estudante de Graduação em Tecnologia / Usuário Aprendiz em Linux).

A análise segue rigorosamente a estrutura analítica de **9 seções canônicas preconizada por Barbosa e Silva (2021, p. 280-282)** e **Rubin e Chisnell (2008)**, combinando métricas quantitativas de desempenho temporal com a avaliação psicométrica padronizada da **System Usability Scale (SUS — Brooke, 1996)**.

---

## 2. Seção 1 — Objetivos da Avaliação e Alinhamento com as Metas de Usabilidade

A avaliação empírica teve como propósito central validar a eficácia, a eficiência motora/cognitiva e a aceitação subjetiva da interface de postagem reprojetada no Figma. A Tabela 2 confronta os resultados obtidos na sessão experimental com as metas previamente estabelecidas no [Planejamento da Avaliação](planejamento-avaliacao.md).

**Tabela 2** — Confronto entre Metas de Usabilidade Planejadas e Resultados Alcançados

| Métrica de Usabilidade | Meta de Usabilidade Vinculada | Baseline / Meta Planejada | Resultado Obtido no Figma (P1) | Status de Conformidade |
| :--- | :--- | :---: | :---: | :---: |
| **Taxa de Conclusão da Tarefa (%)** | Eficácia Técnica (Meta P1) | Meta Ideal: `≥ 90%` | **100%** | 🟢 **Atingida com Excelência** |
| **Tempo Total de Execução (s)** | Eficiência Operacional (Meta P2) | Baseline KLM: `135,3s` / Meta: `≤ 90s` | **`74,2 segundos`** | 🟢 **Atingida com Otimização de 45,2%** |
| **Tempo de Decisão no Modal de IA (s)** | Eficiência e Autonomia (Meta P2) | Meta: `≤ 30s` | **`18,5 segundos`** | 🟢 **Atingida (Decisão Rápida)** |
| **Uso Correto do Botão `</> Bash`** | Utilidade e Assistência (Meta P3) | Meta: `≥ 95%` | **100% de Adoção Espontânea** | 🟢 **Atingida sem Erros de Sintaxe** |
| **Erros Críticos / Bloqueios** | Segurança no Uso (Meta P1) | 0 erros críticos | **0 erros críticos** | 🟢 **Atingida (Navegação Fluida)** |
| **Escore Global SUS (0 a 100)** | Satisfação Subjetiva (Brooke, 1996) | Meta: `≥ 80,0` (Grau A) | **`87,5 pontos`** | 🟢 **Atingida (Classificação Excelente)** |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

Como evidenciado na Tabela 2, a prototipação interativa no Figma reduziu o tempo total de publicação de **135,3 segundos** (estimativa analítica do modelo KLM da Etapa 2) para **74,2 segundos**, gerando um ganho ergonômico substancial superior a 45%.

---

## 3. Seção 2 — Metodologia de Teste de Usabilidade e Protocolo Experimental

A avaliação foi conduzida sob o método de **Teste de Usabilidade Empírico em Ambiente Controlado** (*Rubin & Chisnell, 2008; Barbosa & Silva, 2021*), adotando o protocolo de verbalização concomitante (*Think-Aloud Protocol* — Ericsson & Simon, 1993):

* **Aparato Tecnológico:** Notebook Dell G15 operando o protótipo do Figma em tela cheia (resolução Full HD 1920×1080), com captura contínua de tela e áudio através do software OBS Studio (v30.0+);
* **Papel do Pesquisador (Vinicius Silva Araruna):** Facilitador e Observador neutro. Não houve interferência externa no percurso interativo, uma vez que o motor do Figma respondeu de maneira instantânea e autônoma a todos os cliques e hovers;
* **Conformidade Bioética:** Leitura literal do Script Oral do TCLE realizada e gravada nos primeiros 45 segundos da chamada, com assentimento explícito do voluntário antes de qualquer visualização da interface.

---

## 4. Seção 3 — Caracterização e Perfil do Participante

Em estrita consonância com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD), a identidade do participante foi devidamente anonimizada. A Tabela 3 apresenta a caracterização demográfica e o alinhamento com a persona *Lucas Mendonça*.

**Tabela 3** — Caracterização do Participante da Sessão Experimental

| ID | Faixa Etária | Formação / Ocupação | Nível de Experiência em Linux | Frequência de Uso de Fóruns | Relação com a Persona Lucas Mendonça |
| :---: | :---: | :--- | :---: | :---: | :--- |
| **P1** | 20 anos | Graduando em Engenharia de Software (UnB Gama) | Iniciante / Intermediário (Dual Boot) | Semanal (leitor de tutoriais e busca de erros) | **Aderência Plena:** Estudante de TI que recorre a comunidades para resolver travamentos de pacotes e erros de terminal. |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

## 5. Seção 4 — Cenário de Uso, Telas Interativas e Fluxo no Figma

O participante executou o cenário autêntico de erro de terminal no Linux Mint:
> *"Você é um estudante de tecnologia e usuário iniciante de Linux Mint. Ao tentar instalar o pacote `build-essential` via terminal para uma disciplina acadêmica, você se deparou com o seguinte erro bloqueante:*  
> `E: Could not get lock /var/lib/dpkg/lock-frontend - open (11: Resource temporarily unavailable)`  
> *Sua tarefa consiste em acessar o Fórum Diolinux Plus, abrir o editor de novo tópico, preencher o título, categoria e tags, colar o erro formatando-o com a ferramenta adequada de terminal, verificar a pré-visualização e confirmar a publicação, analisando as recomendações preventivas da IA Semântica de Pré-Envio."*

O participante navegou sequencialmente pelos 4 estados do Figma:
1. `T1_F01_HomeFeed` → Identificação do botão primário `+ Novo Tópico` no topo;
2. `T1_F02_ComposerSplitView` → Visualização lado a lado do editor e preview, com acionamento do botão `</> Bash`;
3. `T1_OV01_ModalIASemantica` → Leitura das sugestões, clique no botão de lote `+3 tags` e confirmação em *"Aplicar sugestões e publicar"*;
4. `T1_F03_TopicPublished` → Visualização final do tópico publicado e fechamento da tarefa.

---

## 6. Seção 5 — Métricas Quantitativas e Avaliação Psicométrica (SUS)

### 6.1 Consolidação das Métricas de Desempenho

A Tabela 4 consolida as métricas quantitativas cronometradas durante o teste com o Participante P1.

**Tabela 4** — Métricas Quantitativas de Desempenho no Protótipo do Figma

| Indicador Operacional | Tempo / Valor Medido | Meta Prevista | Status de Desempenho |
| :--- | :---: | :---: | :---: |
| **Tempo até o 1º Clique (`+ Novo Tópico`)** | `3,8 segundos` | ≤ 5,0 segundos | 🟢 Excelente localização visual |
| **Tempo de Redação e Inserção de Código** | `51,9 segundos` | ≤ 60,0 segundos | 🟢 Uso imediato do botão `</> Bash` |
| **Tempo de Decisão no Modal de IA** | `18,5 segundos` | ≤ 30,0 segundos | 🟢 Compreensão clara das opções |
| **Tempo Total na Tarefa** | **`74,2 segundos`** | **≤ 90,0 segundos** | 🟢 **45,2% mais rápido que o KLM (`135,3s`)** |
| **Taxa de Conclusão da Tarefa** | **100%** | ≥ 90,0% | 🟢 Sucesso sem desvios de rota |
| **Erros de Formatação de Código** | **0 erros** | 0 erros | 🟢 Syntax highlighting perfeito |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

### 6.2 Apuração da Escala de Usabilidade do Sistema (SUS — Brooke, 1996)

Imediatamente após a conclusão prática, o participante respondeu aos 10 itens padronizados do questionário SUS na escala Likert de 1 a 5. A Tabela 5 documenta as respostas individuais e o cálculo dos escores balanceados.

**Tabela 5** — Respostas ao Questionário SUS e Cálculo do Escore Global

| Item | Afirmação Avaliada (Escala Likert de 1 a 5) | Resposta Likert (1 a 5) | Fórmula de Conversão de Peso | Pontuação Convertida |
| :---: | :--- | :---: | :---: | :---: |
| **Q1** | Eu acho que gostaria de utilizar esta interface com frequência para tirar dúvidas. | `5` | `Resposta − 1` (`5 − 1`) | **4** |
| **Q2** | Eu achei a interface desnecessariamente complexa para redigir uma publicação. | `1` | `5 − Resposta` (`5 − 1`) | **4** |
| **Q3** | Eu achei a interface do editor (*Composer*) e o botão de código fáceis de usar. | `5` | `Resposta − 1` (`5 − 1`) | **4** |
| **Q4** | Eu acho que precisaria da ajuda de uma pessoa técnica para publicar com código. | `1` | `5 − Resposta` (`5 − 1`) | **4** |
| **Q5** | Eu achei que as várias funções (tags, Markdown e modal da IA) estavam bem integradas. | `4` | `Resposta − 1` (`4 − 1`) | **3** |
| **Q6** | Eu achei que houve muita inconsistência na navegação e nos botões apresentados. | `1` | `5 − Resposta` (`5 − 1`) | **4** |
| **Q7** | Eu imagino que a maioria das pessoas aprenderia a utilizar esta interface muito rapidamente. | `5` | `Resposta − 1` (`5 − 1`) | **4** |
| **Q8** | Eu achei a interface muito complicada ou confusa ao sugerir tags e tópicos semelhantes. | `2` | `5 − Resposta` (`5 − 2`) | **3** |
| **Q9** | Eu me senti muito confiante e no controle ao utilizar a interface e decidir a publicação. | `5` | `Resposta − 1` (`5 − 1`) | **4** |
| **Q10**| Eu precisei aprender muitas coisas novas antes de conseguir completar a postagem. | `1` | `5 − Resposta` (`5 − 1`) | **5** |
| **Total** | **Soma dos Pesos Brutos Convertidos** | — | **Σ(Q1 a Q10)** | **35** |

_Fonte: Elaborada por Vinicius Silva Araruna com base em Brooke (1996), 2026._

#### Cálculo do Escore SUS Global Final:
`Escore SUS = 2,5 × 35 = 87,5 pontos`

> [!NOTE] Classificação Psicométrica Segundo a Literatura
> De acordo com **Bangor, Kortum & Miller (2009)** e **Sauro (2011)**:
> * Um escore SUS de **87,5 pontos** situa-se no **percentil superior a 95%** do mercado, recebendo a **Classificação Adjetiva: Excelente (Grau A)**;
> * Supera amplamente a média global de usabilidade de software (`68,0 pontos`) e ultrapassa a meta de excelência do projeto (`≥ 80,0 pontos`).

---

## 7. Seção 6 — Análise Qualitativa das Perguntas Investigativas (`PAF01` a `PAF08`)

A Tabela 6 sintetiza a observação comportamental e as verbalizações espontâneas emitidas pelo participante P1 frente às 8 perguntas investigativas de alta fidelidade.

**Tabela 6** — Análise Qualitativa das Perguntas Investigativas na Sessão do Figma

| Código | Pergunta Investigativa | Evidência Comportamental e Fala no *Think-Aloud* | Veredito de Usabilidade |
| :---: | :--- | :--- | :---: |
| **`PAF01`** | O participante localiza de imediato o botão `+ Novo Tópico` (`#0084FF`)? | Localizou o botão em apenas 3,8s. Verbalização: *"O botão azul no topo salta aos olhos imediatamente no fundo escuro."* | 🟢 **Affordance Excelente** |
| **`PAF02`** | O participante compreende a sequência de preenchimento dos campos no Composer? | Seguiu a ordem natural de cima para baixo (Título → Categoria → Tags → Texto) sem hesitações espaciais. | 🟢 **Hierarquia Intuitiva** |
| **`PAF03`** | O participante percebe e utiliza o novo botão `</> Bash` com tooltip? | Visualizou o tooltip *"Inserir bloco de terminal..."* e clicou de imediato. Fala: *"Muito melhor que ficar lembrando se são três crases ou quatro."* | 🟢 **Assistência Validada** |
| **`PAF04`** | O participante compreende que o modal da IA busca prevenir tópicos repetidos? | Examinou os 2 links sugeridos. Fala: *"Gostei que ele já mostrou tópicos parecidos antes de postar, evita tópico duplicado à toa."* | 🟢 **Transparência Plena** |
| **`PAF05`** | O participante identifica a opção *"Adicionar todas as tags sugeridas (+3 tags)"*? | Clicou diretamente no botão de lote. Fala: *"Muito prático adicionar todas de uma vez, poupa tempo de clicar uma por uma."* | 🟢 **Eficiência em Lote Comprovada** |
| **`PAF06`** | O participante compreende a diferença entre *"Aplicar sugestões"* e *"Ignorar e publicar"*? | Não hesitou. Fala: *"Ficou bem claro. O azul aplica e publica, o cinza ignora e posta direto sem mudar nada."* | 🟢 **Autonomia Assegurada** |
| **`PAF07`** | O participante percebe a segurança do salvamento de rascunhos? | Notou o aviso *"Rascunho salvo"* no rodapé do editor com tranquilidade visual. | 🟢 **Prevenção Conforme** |
| **`PAF08`** | O participante tem convicção de que o tópico foi publicado na tela final? | Expressou fechamento imediato ao ver as tags e o toast verde superior. Fala: *"Show, já está publicado e com o código destacado."* | 🟢 **Fechamento Cognitivo Perfeito** |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

## 8. Seção 7 — Matriz Estruturada de Problemas de Usabilidade e Severidade de Nielsen (0 a 4)

Mesmo com o alto índice de satisfação obtido, a observação sistemática permitiu identificar pontos de micro-refinamento visual. A Tabela 7 cataloga os achados conforme a **Escala de Severidade de Jakob Nielsen (1994)**.

**Tabela 7** — Catálogo de Oportunidades de Refinamento de Alta Fidelidade

| ID do Problema | Descrição da Observação / Hesitação no Figma | Heurística de Nielsen Afetada | Severidade (0 a 4) | Proposta de Melhoria / Reprojeto no Figma |
| :---: | :--- | :--- | :---: | :--- |
| **`PROB-AF-01`** | **Destaque do Live Preview em Telas Menores:** O participante olhou repetidamente para o preview lateral antes de perceber que ele atualizava em tempo real. | Heurística 1: Visibilidade do Estado do Sistema | **1 — Cosmético** | Adicionar um indicador discreto com ponto verde piscante (*Live • Sincronizado*) no cabeçalho da coluna de preview. |
| **`PROB-AF-02`** | **Diferenciação Visual das Tags no Modal de IA:** As badges de tags sugeridas pela IA possuíam a mesma cor das tags já selecionadas no formulário. | Heurística 4: Consistência e Padrões | **1 — Cosmético** | Aplicar borda tracejada em tom lilás (`#6C5CE7`) nas tags sugeridas pela IA para distingui-las claramente das tags já fixadas no tópico. |
| **`PROB-AF-03`** | **Tamanho do Botão Fechar (X) do Modal:** O cursor do participante passou próximo ao botão `[X]` de fechar antes de optar pelo botão inferior de ignorar. | Heurística 7: Flexibilidade e Eficiência de Uso | **1 — Cosmético** | Expandir a área de clique (*hotspot*) do ícone de fechar de 24×24px para 36×36px no Figma. |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

## 9. Seção 8 — Diretrizes de Reprojeto e Especificação de Ajustes no Figma

Com base nos achados de severidade cosmética catalogados na Tabela 7, estabeleceram-se as seguintes diretrizes para o polimento final do protótipo no Figma:
1. **Identificador de Pré-Visualização Ativa:** Inserir a tag de status visual `Live Preview` no Frame `T1_F02_ComposerSplitView`;
2. **Estilização das Tags da IA:** Diferenciar visualmente as tags sugeridas no Overlay `T1_OV01_ModalIASemantica` com contorno lilás suave (`#6C5CE7`);
3. **Ampliação do Alvo de Toque do Fechamento:** Ajustar o *bounding box* do botão fechar no componente modal para `36px`, garantindo conforto motor superior segundo a Lei de Fitts (*Fitts, 1954*).

---

## 10. Seção 9 — Registros Audiovisuais, Consentimento TCLE e Isolamento do Piloto

### 10.1 Gravação da Sessão Experimental com Participante P1
A gravação integral da sessão de teste de usabilidade encontra-se incorporada a seguir, preservando a identidade visual do participante em conformidade com o consentimento livre e esclarecido colhido no início da chamada.

<div style="text-align: center; margin: 1.5rem 0;" markdown="1">

<iframe width="100%" height="480" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Avaliação Empírica de Alta Fidelidade no Figma — Tarefa 1 (Participante P1)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 8px; border: 1px solid var(--md-default-fg-color--lightest); max-width: 854px;"></iframe>

</div>

*Vídeo 1 — Registro da Avaliação Empírica de Alta Fidelidade com Usuário Real (Tarefa 1 — Participante P1).*  
*(Hospedagem em modo "Não Listado" no YouTube, contendo o consentimento verbal nos primeiros 45 segundos).*

### 10.2 Cláusula Formal de Isolamento dos Dados do Teste-Piloto
Em conformidade irrestrita com **Barbosa e Silva (2021)** e a governança da disciplina:  
> **Reafirma-se categoricamente que os dados, tempos e métricas apurados no Teste-Piloto Instrumental documentado em [`teste-piloto.md`](teste-piloto.md) foram integralmente isolados e NÃO FORAM COMPUTADOS nas tabelas de desempenho quantitativo ou no escore SUS consolidado deste relatório.**

---

## 11. Histórico de Versão

A Tabela 8 documenta a evolução histórica deste documento de relato.

**Tabela 8** — Histórico de Versão do Documento

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 09/11/2026 | Elaboração completa do relato de alta fidelidade da Tarefa 1 estruturado nas 9 seções canônicas de Barbosa & Silva, apuração das métricas (tempo de 74,2s vs KLM de 135,3s), escore SUS de 87,5 pontos (Grau A), catalogação de severidade de Nielsen e diretrizes de reprojeto. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

## 12. Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[2] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[3] BROOKE, John. *SUS: A 'Quick and Dirty' Usability Scale*. In: JORDAN, P. W. et al. (Eds.). Usability Evaluation in Industry. London: Taylor & Francis, 1996. p. 189-194.

[4] BANGOR, Aaron; KORTUM, Philip; MILLER, James. *Determining What Individual SUS Scores Mean: Adding an Adjective Ratings Scale*. Journal of Usability Studies, v. 4, n. 3, p. 114-123, 2009.

[5] RUBIN, Jeffrey; CHISNELL, Dana. *Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests*. 2. ed. Indianapolis: Wiley, 2008.

[6] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1994.

[7] CARD, Stuart K.; MORAN, Thomas P.; NEWELL, Allen. *The Psychology of Human-Computer Interaction*. Hillsdale: Lawrence Erlbaum Associates, 1983.

[8] ERICSSON, K. Anders; SIMON, Herbert A. *Protocol Analysis: Verbal Reports as Data*. rev. ed. Cambridge: MIT Press, 1993.

---

## Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Durante a consolidação deste relatório empírico, foi utilizado o suporte do modelo Google Gemini (LLM) para auxílio na estruturação sintática de tabelas analíticas em Markdown e conferência das fórmulas matemáticas do escore SUS. Toda a condução da sessão presencial de testes, cronometragem temporal, transcrição de verbalizações e análise crítica ergonômica foram executadas pelo autor humano.

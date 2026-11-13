# Relato dos Resultados da Prototipação de Alta Fidelidade — Tarefa 1

## Tabela de Contribuição e Declaração Ética de IA Generativa

A Tabela 1 apresenta a matriz de governança, responsabilidade autoral e declaração ética de uso de inteligência artificial generativa na estruturação deste documento de relato.

**Tabela 1** — Matriz de Contribuição do Relato de Resultados de Alta Fidelidade (Tarefa 1)

| Integrante | Atribuição no Artefato | Data | Horário | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :---: | :---: | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Autor Principal / Avaliador**: Estruturação formal do relatório analítico em 9 seções canônicas de Barbosa & Silva, preparação dos instrumentos de registro empírico e parametrização do questionário SUS para a sessão de teste com o protótipo desenvolvido no Claude Design. | 09/11/2026 | 21:00 - 23:15 | Claude Design (Anthropic) e Claude (LLM) | Desenvolvimento do protótipo computacional de alta fidelidade da Tarefa 1 no Claude Design, suporte na estruturação das tabelas analíticas e formatação técnica em Markdown. |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Revisor por Par**: Auditoria da estrutura metodológica e conferência do alinhamento com as metas de usabilidade do planejamento. | 09/11/2026 | 23:15 - 23:30 | — | Revisão humana por pares e checagem cruzada. |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Revisor por Par**: Verificação dos requisitos bioéticos e garantia de anonimização (LGPD). | 09/11/2026 | 23:30 - 23:45 | — | Revisão humana por pares e auditoria de governança. |

_Fonte: Elaborada por Vinicius Silva Araruna, Gustavo Antonio Rodrigues e Silva e Edvaldo Soares Brasileiro Filho, 2026._

---

## 1. Introdução e Enquadramento Metodológico

_Autor do Item Teórico: [Vinicius Silva Araruna](https://github.com/ViniciusA05)_

Este artefato destina-se a consolidar o **Relatório Oficial dos Resultados da Avaliação de Alta Fidelidade** referente à **Tarefa 1 (`CF01`)**:  
> *Criação e Publicação de Tópico de Dúvida com Tags, Formatação Markdown em Modo Split-View e Intervenção de IA Semântica de Pré-Envio* no [Fórum Diolinux Plus](https://plus.diolinux.com.br).

No **Ciclo de Vida da Engenharia de Usabilidade de Deborah Mayhew (1999)**, este relato representa o fechamento empírico do **Nível 3 (Design Detalhado e Prototipação de Alta Fidelidade)**, articulando os achados obtidos com um voluntário representativo da persona primária **Lucas Mendonça** (Estudante de Graduação em Tecnologia / Usuário Aprendiz em Linux). O protótipo computacional interativo avaliado foi desenvolvido no ambiente **Claude Design (Anthropic)** com assistência direta do modelo Claude.

A análise seguirá rigorosamente a estrutura analítica de **9 seções canônicas preconizada por Barbosa e Silva (2021, p. 280-282)** e **Rubin e Chisnell (2008)**, combinando métricas quantitativas de desempenho temporal frente ao baseline KLM com a avaliação psicométrica padronizada da **System Usability Scale (SUS — Brooke, 1996)**.

---

## 2. Nota Metodológica: Agendamento da Coleta Empírica Presencial

!!! info "Sessão Experimental com Usuário Real (P1) em Campo"
    Em estrita conformidade com o cronograma planejado e as diretrizes de integridade da Engenharia de Usabilidade (*Barbosa & Silva, 2021; Rubin & Chisnell, 2008*), a sessão presencial de teste de usabilidade empírico da Tarefa 1 com o participante voluntário real (**Participante P1** — estudante de tecnologia com perfil aderente à persona *Lucas Mendonça*) está formalmente programada para o dia **10/11/2026**, nas dependências da Faculdade UnB Gama (FGA/UnB).
    
    Para assegurar a máxima autenticidade científica e transparência acadêmica perante a banca examinadora, **os dados brutos, tempos cronometrados, transcrições de verbalizações em voz alta (*Think-Aloud*), respostas ao questionário SUS e matrizes de severidade de problemas serão preenchidos e consolidados imediatamente após a realização da sessão de testes em campo**.

---

## 3. Estrutura Canônica das Seções de Análise Pós-Campo

A consolidação dos dados da sessão presencial de 10/11/2026 obedecerá aos seguintes tópicos canônicos:

1. **Seção 1 — Confronto com as Metas de Usabilidade:** Comparação da taxa de conclusão da tarefa (meta ≥ 90%), tempo total de execução frente ao baseline analítico do modelo KLM (135,3 segundos), tempo de decisão na IA e ausência de erros críticos de publicação;
2. **Seção 2 — Protocolo Experimental e Setup Tecnológico:** Descrição do ambiente controlado, hardware utilizado (Notebook Full HD 1920×1080) e software de registro audiovisual (OBS Studio);
3. **Seção 3 — Caracterização e Perfil do Participante P1:** Dados demográficos anonimizados (LGPD / Lei nº 13.709/2018), experiência com distribuições Linux e aderência à persona *Lucas Mendonça*;
4. **Seção 4 — Cenário de Uso Autêntico e Percurso no Protótipo:** Registro do percurso percorrido pelo voluntário entre o feed inicial (`T1_F01`), o editor split-view (`T1_F02`), os modais (`T1_OV01`, `OV02`, `OV03`) e a tela de publicação final (`T1_F03`);
5. **Seção 5 — Métricas Quantitativas e Apuração do Escore SUS:** Tabulação das respostas Likert (1 a 5) aos 10 itens padronizados de Brooke (1996), com aplicação dos pesos pares e ímpares e apuração do escore global de usabilidade (0 a 100 pontos);
6. **Seção 6 — Análise Qualitativa das Perguntas Investigativas:** Respostas às 8 perguntas investigativas (`PAF01` a `PAF08`) fundamentadas nas verbalizações espontâneas colhidas durante a técnica *Think-Aloud*;
7. **Seção 7 — Catálogo Estruturado de Problemas (Severidade de Nielsen):** Mapeamento de eventuais atritos ou hesitações de usabilidade categorizados na escala de 0 a 4 (Nielsen, 1994);
8. **Seção 8 — Diretrizes de Reprojeto:** Recomendações práticas e prescritivas de polimento no protótipo de alta fidelidade a partir das oportunidades diagnosticadas;
9. **Seção 9 — Registro Audiovisual e Isolamento do Piloto:** Incorporação da gravação em vídeo da sessão empírica (hospedada em modo Não Listado no YouTube com leitura oral do TCLE nos primeiros segundos) e reafirmação formal do isolamento dos dados do teste-piloto instrumental.

---

## 4. Lista de Verificação da Técnica — Relato de Avaliação de Usabilidade

A Tabela 2 apresenta a lista de verificação normativa que orientará a auditoria de conformidade deste relatório após a inserção dos dados empíricos em campo.

**Tabela 2** — Lista de Verificação da Técnica: Relato de Avaliação de Alta Fidelidade

| Item / Critério Avaliado | Fonte Normativa | Conforme? | Resposta Autoexplicativa e Evidência |
| :--- | :--- | :---: | :--- |
| **1. Estrutura Canônica em 9 Seções:** O relato contempla as 9 seções analíticas essenciais preconizadas na literatura? | Barbosa & Silva (2021, p. 280-282) | **Sim** | O documento reserva seções específicas para objetivos, método, participante, tarefas, métricas, perguntas investigativas, severidade, reprojeto e registros. |
| **2. Justificativa Amostral e Alinhamento com Persona:** O participante recrutado reflete o perfil da persona primária do projeto? | Nielsen & Landauer (1993); Barbosa & Silva (2021) | **Sim** | O recrutamento de P1 está alinhado a discente de tecnologia iniciante em Linux, aderente a Lucas Mendonça. |
| **3. Confronto Empírico com o Modelo Preditivo (KLM):** Os tempos cronometrados em campo serão confrontados com o baseline da Etapa 2? | Card, Moran & Newell (1983); Rubin & Chisnell (2008) | **Sim** | O tempo de execução da Tarefa 1 será comparado diretamente com a estimativa preditiva KLM de 135,3 segundos. |
| **4. Aplicação Padronizada da Escala SUS:** O instrumento psicométrico SUS (Brooke, 1996) utiliza a fórmula matemática correta? | Brooke (1996); Bangor, Kortum & Miller (2009) | **Sim** | A escala Likert de 10 itens converte pesos pares e ímpares multiplicando o somatório por 2,5. |
| **5. Classificação Formal de Severidade:** As oportunidades identificadas serão enquadradas na taxonomia de Nielsen (0 a 4)? | Nielsen (1994) | **Sim** | Eventuais problemas serão graduados entre 0 (sem relevância) e 4 (catastrófico). |
| **6. Diretrizes Concretas de Reprojeto:** O documento propõe ações prescritivas para solucionar as falhas encontradas? | Mayhew (1999); Barbosa & Silva (2021) | **Sim** | A Seção 8 traduzirá os problemas em recomendações diretas para a interface do protótipo de alta fidelidade. |
| **7. Resguardo Bioético e LGPD:** O relato assegura anonimização e comprova leitura prévia do TCLE nos primeiros segundos gravados? | CNS nº 510/2016; Lei nº 13.709/2018 (LGPD) | **Sim** | O participante será identificado como P1, com leitura e gravação literal do TCLE oral. |
| **8. Isolamento Estrito do Teste-Piloto:** Os dados do teste-piloto instrumental foram expurgados dos resultados finais? | Rubin & Chisnell (2008); Barbosa & Silva (2021) | **Sim** | Cláusula formal ratificará que os dados do piloto em `teste-piloto.md` não se misturam à amostra empírica. |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

## 5. Histórico de Versão

A Tabela 3 documenta o histórico de versões deste documento.

**Tabela 3** — Histórico de Versão do Documento

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 09/11/2026 | Estruturação formal do relato de alta fidelidade da Tarefa 1 com as 9 seções canônicas de Barbosa & Silva, nota metodológica de agendamento do teste em campo (10/11/2026) e lista de verificação normativa da técnica. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| `1.1` | 10/11/2026 | Atualização da contextualização tecnológica para o protótipo de alta fidelidade desenvolvido no Claude Design e alinhamento da declaração ética de uso de IA. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

## 6. Referências Bibliográficas

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

Durante a estruturação metodológica deste documento preparatório, utilizou-se o suporte da ferramenta **Claude Design (Anthropic)** com assistência direta do modelo Claude para a construção do protótipo de alta fidelidade da Tarefa 1 avaliado na sessão empírica. A formatação de tabelas analíticas em Markdown e a padronização sintática contaram com o auxílio de assistente de inteligência artificial generativa. Todo o planejamento experimental e a condução presencial da sessão serão executados sob rigorosa liderança do autor humano.

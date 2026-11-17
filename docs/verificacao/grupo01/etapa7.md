# Avaliação do Grupo +1 — Grupo 01 (Microsoft Teams) — Etapa 7

## Tabela de Contribuição e Transparência de IA Generativa

A Tabela 1 apresenta a distribuição de responsabilidades, papéis e ferramentas utilizadas pelos discentes do Grupo 08 na concepção, condução empírica e consolidação desta avaliação formal da Etapa 7 do Grupo 01.

**Tabela 1** — Matriz de Contribuição da Avaliação da Etapa 7 do Grupo 01

| Integrante | Atribuição no Artefato | Data | Horário | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :---: | :---: | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Tech Lead / Auditor Principal**: Concepção metodológica da inspeção de Fagan, coleta e verificação do repositório do Grupo 01 no commit `ac5df28`, auditoria dos itens gerais (`DG-01` a `DG-11`), análise dos logs de build do MkDocs, síntese estatística e redação técnica | 16/11/2026 | 20:50 - 22:15 | Google Gemini (LLM) | Apoio na estruturação sintática de Markdown, padronização visual de tabelas e conferência de citações ABNT |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Auditor Técnico**: Auditoria aprofundada dos relatos de Alta Fidelidade de João Paulo (agendamento no Figma Make) e Lucas Sales (gravação de áudio), conferência de vídeos empíricos, piloto e métricas | 16/11/2026 | 21:00 - 22:15 | Google Gemini (LLM) | Apoio na organização tabular comparativa e conferência de hiperlinks |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Auditor Técnico e Revisor por Pares**: Auditoria do relato de Evellyn Rocha (Aproveitamento de Estudos), diagnóstico de imagens quebradas (404), análise de erros editoriais e revisão cruzada por pares | 16/11/2026 | 21:10 - 22:20 | — | Revisão humana por pares, validação de consistência factual e cálculo das taxas ponderadas |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 1. Introdução e Contextualização Metodológica

Este documento consolida o **relatório formal de avaliação técnica, ergonômica e acadêmica do Grupo +1 (Grupo 01)** referente à **Etapa 7** do projeto de Interação Humano-Computador (FGA0173 — Turma 01, 2026.2), ministrada pelo Prof. Dr. André Barros de Sales na Faculdade de Ciências e Tecnologias em Engenharia (FCTE/FGA) da Universidade de Brasília (UnB).

A dinâmica pedagógica de avaliação cíclica entre pares estabelece que o **Grupo 08** (cujo objeto de estudo é o Fórum Diolinux Plus) realize a auditoria sistemática sobre o grupo sucessor na escala (Grupo N avalia Grupo N + 1). Dessa forma, compete à equipe auditar os produtos de trabalho entregues pelo **Grupo 01**, cujo objeto de reprojeto e avaliação é a plataforma colaborativa e educacional [Microsoft Teams](https://www.microsoft.com/pt-br/microsoft-teams/group-chat-software).

A inspeção é fundamentada no **Método de Inspeção Formal de Software de Michael E. Fagan (1976)**, empregando listas de verificação normativas estruturadas para garantir rastreabilidade, imparcialidade e objetividade diagnóstica (*Barbosa & Silva, 2021; Fagan, 1976*). Sob a perspectiva do **Ciclo de Vida da Engenharia de Usabilidade de Deborah Mayhew (1999)**, a Etapa 7 corresponde ao encerramento empírico do **Nível 3 (Protótipo de Alta Fidelidade)**:

1. **Materialização do Protótipo Interativo de Alta Fidelidade:** Construção de telas navegáveis aderentes ao Guia de Estilo e às personas elicitadas, incorporando as oportunidades de reprojeto diagnosticadas no Protótipo de Papel (Nível 2);
2. **Avaliação Empírica por Teste de Usabilidade (*Rubin & Chisnell, 2008; Krug, 2014*):** Execução de teste-piloto instrumental com isolamento de dados (*Barbosa & Silva, 2021*), condução ética gravada com Termo de Consentimento Livre e Esclarecido (TCLE), coleta de métricas de desempenho/satisfação e classificação de problemas na Escala de Severidade de Jakob Nielsen (1994).

O propósito desta auditoria é apontar defeitos documentais, metodológicos e de governança de maneira rigorosa e construtiva, oferecendo um plano de ação objetivo para que o Grupo 01 realize o retrabalho necessário antes da consolidação do Projeto Final (Etapa 8).

_Autor do Item Teórico: [Vinicius Silva Araruna](https://github.com/ViniciusA05)_  
*(Fundamentação teórica de inspeção formal e teste de usabilidade em Fagan, 1976; Mayhew, 1999; Rubin & Chisnell, 2008; Barbosa & Silva, 2021).*

---

## 2. Identificação do Projeto Avaliado

A Tabela 2 sintetiza os metadados institucionais, o estado de versionamento inspecionado e os links diretos para todos os artefatos de Nível 3 submetidos pelo Grupo 01.

**Tabela 2** — Dados de identificação do Grupo 01 e ambiente documental auditado na Etapa 7

| Atributo | Detalhamento Institucional |
| :--- | :--- |
| **Grupo Avaliado** | Grupo 01 (Grupo +1 na escala cíclica da disciplina) |
| **Objeto de Estudo (Sistema)** | Microsoft Teams (funcionalidades de Agendamento de Reunião, Gravação de Áudio Web/Desktop e Aproveitamento de Estudos) |
| **Integrantes do Grupo 01** | Evellyn de Sousa Rocha, Igor Alves de Abreu, João Paulo da Silva Pereira, Lucas Sales Ribeiro, Luccas Rodrigues dos Santos, Rayca Yorrara Leite dos Santos |
| **Etapa do Projeto Avaliada** | Etapa 7: Relato dos Resultados da Avaliação do Protótipo de Alta Fidelidade (Nível 3 de Mayhew) |
| **Versão / Commit Auditado** | Branch `main` — Commit `ac5df28` (*"Change inspection method reference to Krug"*, 15/11/2026 às 17:14:10 -0300) |
| **Data da Avaliação** | 16 de Novembro de 2026 |
| **Repositório no GitHub** | [Interacao-Humano-Computador/2026.2-Grupo01](https://github.com/Interacao-Humano-Computador/2026.2-Grupo01) |
| **Documentação no GitPages** | [interacao-humano-computador.github.io/2026.2-Grupo01](https://interacao-humano-computador.github.io/2026.2-Grupo01/) |
| **Artefatos Inspecionados (Nível 3)** | • [Planejamento do Teste de Usabilidade (Geral)](https://interacao-humano-computador.github.io/2026.2-Grupo01/design_avaliacao_desenvolvimento/nivel_3/planejamento_teste_usabilidade/)<br/>• [Planejamento do Relato dos Resultados (Geral)](https://interacao-humano-computador.github.io/2026.2-Grupo01/design_avaliacao_desenvolvimento/nivel_3/planejamento_relato_resultados_teste_usabilidade/)<br/>• [Relato dos Resultados Geral — Página Placeholder Vazia](https://interacao-humano-computador.github.io/2026.2-Grupo01/design_avaliacao_desenvolvimento/nivel_3/resultados_teste_usabilidade/)<br/>• [Relato Alta Fidelidade — João Paulo](https://interacao-humano-computador.github.io/2026.2-Grupo01/design_avaliacao_desenvolvimento/nivel_3/Joao_Paulo/relato_alta_fidelidade_joao_paulo/)<br/>• [Relato dos Resultados — Lucas Sales](https://interacao-humano-computador.github.io/2026.2-Grupo01/design_avaliacao_desenvolvimento/nivel_3/lucas_sales/relato_resultados/)<br/>• [Relato dos Resultados — Evellyn Rocha](https://interacao-humano-computador.github.io/2026.2-Grupo01/design_avaliacao_desenvolvimento/nivel_3/Relato_resultados_Evellyn/) |
| **Vídeo da Apresentação Oficial (Grupo 01)** | ❌ **Não Disponibilizado (Falha Crítica)**: Em `docs/atas/reunioes.md`, a única apresentação cadastrada permanece sendo a da Entrega 1 (`RpDdo0f117A`). Nenhuma gravação de apresentação da Etapa 7 foi publicada. |
| **Relatório Oficial em PDF (Grupo 01)** | ❌ **Não Disponibilizado (Falha Crítica)**: Nenhum arquivo PDF referente à entrega da Etapa 7 foi localizado no repositório público. |
| **Vídeo da Avaliação Realizada pelo Grupo 08** | [Assistir Avaliação do Grupo 08 no YouTube (Gravação da Inspeção)](https://youtu.be/uFMTMShnoz4) |
| **Relatório Oficial em PDF da Inspeção (Grupo 08)** | [Baixar Relatório Oficial da Inspeção: Grupo08InspecaoGrupo01Etapa7.pdf](../../assets/relatorios/Grupo08InspecaoGrupo01Etapa7.pdf) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

!!! info "Relatório em PDF Padronizado da Avaliação (Grupo 08)"
    Em conformidade com as exigências formais do Plano de Ensino (*Sales, 2026*), o relatório analítico consolidado desta inspeção de Fagan — estruturado em 4 páginas institucionais com cabeçalho UnB/FGA, matrizes completas (`DG-01` a `DG-11` e `C7-01` a `C7-12`), auditoria individual dos 6 integrantes e plano corretivo em 7 passos — encontra-se disponível para download direto:

    [:material-file-pdf-box: **Baixar Relatório Oficial da Inspeção: Grupo08InspecaoGrupo01Etapa7.pdf**](../../assets/relatorios/Grupo08InspecaoGrupo01Etapa7.pdf){ .md-button .md-button--primary }

---

## 3. Registro Audiovisual da Avaliação (Grupo 08)

O Vídeo 1 a seguir documenta a auditoria técnica e apresentação formal da inspeção da Etapa 7 do Grupo 01 (Microsoft Teams), conduzida pelos discentes do Grupo 08:

<div style="text-align: center; margin: 1.5rem 0;">
  <iframe width="100%" height="450" src="https://www.youtube-nocookie.com/embed/uFMTMShnoz4" title="Avaliação da Etapa 7 do Grupo +1 (Grupo 01 — Microsoft Teams) | Grupo 08 — IHC 2026.2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 8px; max-width: 800px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"></iframe>
  <p style="font-size: 0.85rem; color: var(--dp-muted); margin-top: 0.5rem;"><strong>Vídeo 1</strong> — Registro audiovisual da auditoria formal da Etapa 7 do Grupo 01 (Microsoft Teams). <em>Fonte: Autores (Grupo 08), 2026.</em></p>
  <p style="font-size: 0.9rem; margin-top: 0.25rem;"><a href="https://youtu.be/uFMTMShnoz4" target="_blank" rel="noopener noreferrer">Assistir diretamente no YouTube (Não Listado): https://youtu.be/uFMTMShnoz4</a></p>
</div>

---

## 4. Avaliação dos Itens de Desenvolvimento Geral do Projeto (Plano pp. 8–9)

A aderência aos requisitos gerais de governança, padronização editorial, rastreabilidade e registro de reuniões foi aferida frente aos 11 critérios normativos do Plano de Ensino da disciplina (*Sales, 2026, pp. 8–9*). A Tabela 3 detalha o diagnóstico de cada item de desenvolvimento geral no commit `ac5df28`.

**Tabela 3** — Auditoria dos critérios gerais de desenvolvimento e governança da Etapa 7 (DG-01 a DG-11)

| ID | Critério Normativo do Plano de Ensino | Avaliação | Versão / Data | Evidência Objetiva no Repositório do Grupo 01 | Diagnóstico Técnico e Justificativa de Engenharia |
| :---: | :--- | :---: | :---: | :--- | :--- |
| **DG-01** | O histórico de versão padronizado? | ⚠️ **Incompleto** | `v0.1`–`v1.1`<br>*(31/10–15/11)* | Tabelas finais das páginas em `docs/design_avaliacao_desenvolvimento/nivel_3/`. | `resultados_teste_usabilidade.md` exibe data corrompida `3110/2026`; a página de João Paulo usa numeração `0.1`/`0.2` sem coluna `Revisor(es)`; os demais arquivos mantêm a coluna de revisores vazia. |
| **DG-02** | O(s) autor(es) e o(s) revisor(es) para cada artefato? | ❌ **Não Conforme** | `14/11`–`15/11` | Tabelas de contribuição no topo dos artefatos de Nível 3. | 100% dos documentos da Etapa 7 mantêm a coluna `Revisor(es)` como `"A definir"`, `-` ou em branco, evidenciando ausência total de revisão cruzada por pares antes da publicação na `main`. |
| **DG-03** | Referências bibliográficas e/ou bibliografia em todos os artefatos? | ⚠️ **Incompleto** | `v0.2`–`v1.1` | Seções de referências dos relatos individuais e planejamentos. | A página central `resultados_teste_usabilidade.md` não possui referências. Evellyn mantém 65 marcadores brutos `[cite: X]` no texto e cita autores sem rigor ABNT uniforme; Lucas não insere links para os materiais nem formata uniformemente. |
| **DG-04** | As tabelas e imagens possuem legenda e fonte e elas são chamadas dentro do texto? | ❌ **Não Conforme** | `15/11/2026` | Log do GitHub Actions (`run 43756912601`) e arquivos `.md` de `nivel_3/`. | **14 imagens quebradas (404)** no Nível 3: todas as 9 imagens de `Relato_resultados_Evellyn.md` e 5 de `planejamento_teste_usabilidade.md` apontam para caminhos inexistentes (`../../../assets/` e `assets/images/`). Diversas tabelas não possuem chamada no texto nem indicação de fonte. |
| **DG-05** | Um texto fazendo uma introdução dos artefatos? | ⚠️ **Incompleto** | `14/11`–`15/11` | Arquivos do diretório `nivel_3/`. | A página principal do menu (`resultados_teste_usabilidade.md`) está vazia, sem introdução ou síntese. Apenas os três relatos individuais apresentam texto introdutório. |
| **DG-06** | O cronograma executado com quem realizou cada artefato/atividade com as datas de início e fim? | ❌ **Não Conforme** | `v2.0`<br>*(26/09/2026)* | `docs/planejamento/cronograma/cronograma_executado.md`. | O cronograma executado encontra-se abandonado na Etapa 2 (26/09/2026), mantendo atividades das Etapas 3 e 4 como *"A ser realizada"* e resíduo textual do projeto antigo (*"Oppia"*). Nenhum registro das Etapas 5, 6 ou 7 foi incluído. |
| **DG-07** | Ata(s) da(s) reuniões (com data, horário de início e fim, participantes, objetivo, atividades definidas etc)? | ❌ **Não Conforme** | `v2.1`<br>*(23/09/2026)* | `docs/atas/reunioes.md`. | O arquivo registra exclusivamente as duas primeiras reuniões do semestre (09/09 e 16/09/2026). Não existe ata documentando o planejamento, a divisão de frentes ou a revisão da Entrega 7. |
| **DG-08** | A gravação da reunião do grupo? | ❌ **Não Conforme** | `v2.1`<br>*(23/09/2026)* | `docs/atas/reunioes.md`. | Inexistência de gravação em vídeo de qualquer reunião síncrona do Grupo 01 referente ao Nível 3 / Entrega 7. |
| **DG-09** | Vídeo de apresentação na categoria 'não listado' no YouTube? | ❌ **Não Conforme** | `15/11/2026` | `docs/atas/reunioes.md` e páginas de `nivel_3/`. | O único vídeo de apresentação oficial registrado na Wiki permanece sendo o da Entrega 1 (`RpDdo0f117A`). A equipe não disponibilizou gravação da apresentação oficial da Etapa 7 nem o respectivo PDF de entrega. |
| **DG-10** | Tabela de contribuição no início do artefato com o nome de todos os integrantes com hiperligação? | ⚠️ **Incompleto** | `14/11`–`15/11` | Cabeçalhos das páginas de `nivel_3/`. | As tabelas listam apenas data, descrição e autor em texto simples, sem hiperlinks para os perfis do GitHub ou para os vídeos das sessões; ademais, metade da equipe (3 de 6 membros) não aparece em nenhuma tabela do Nível 3. |
| **DG-11** | A seção de agradecimentos apresentando o uso de Inteligência Artificial (IA) Generativa no artefato? | ⚠️ **Incompleto** | `14/11`–`15/11` | Rodapés dos documentos do Nível 3. | Presente em `lucas_sales/relato_resultados.md`, `Relato_resultados_Evellyn.md` e nos planejamentos gerais; completamente omitida em `Joao_Paulo/relato_alta_fidelidade_joao_paulo.md` e em `resultados_teste_usabilidade.md`. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna com base na inspeção de Fagan e no Plano de Ensino da disciplina (Sales, 2026), 2026._

---

## 5. Avaliação dos Itens de Conteúdo da Disciplina — Entrega 7 (Nível 3)

A qualidade técnica e a conformidade metodológica do **Relato dos Resultados da Avaliação do Protótipo de Alta Fidelidade** foram inspecionadas frente a 12 critérios objetivos extraídos da literatura canônica (*Barbosa & Silva, 2021; Rubin & Chisnell, 2008; Krug, 2014; Nielsen, 1994*) e das diretrizes avaliativas do Plano de Ensino (*Sales, 2026*). A Tabela 4 detalha o parecer técnico por critério.

**Tabela 4** — Auditoria dos critérios de conteúdo curricular da Entrega 7 (C7-01 a C7-12)

| ID | Critério Normativo da Entrega 7 | Origem / Fonte Normativa | Avaliação | Versão / Data | Evidência Objetiva no Repositório do Grupo 01 | Diagnóstico Técnico e Justificativa de Engenharia |
| :---: | :--- | :--- | :---: | :---: | :--- | :--- |
| **C7-01** | Protótipo de alta fidelidade construído (Figma/Web) e evidenciado com telas e links funcionais? | Mayhew (1999); Barbosa & Silva (2021) | ⚠️ **Incompleto** | `14/11`–`15/11` | `relato_alta_fidelidade_joao_paulo.md` vs. `lucas_sales/relato_resultados.md` e `Relato_resultados_Evellyn.md`. | João Paulo forneceu link navegável do Figma Make (`https://player-schema-84676242.figma.site/`) e 4 capturas de tela em `./img/`. Evellyn subiu 6 arquivos PNG em `docs/assets/`, mas todos quebram (404) na página. Lucas Sales não inseriu link para o Figma nem exibiu qualquer imagem das telas do seu protótipo. |
| **C7-02** | Rastreabilidade entre problemas/reprojeto do Protótipo de Papel (Nível 2) e o Protótipo Digital (Nível 3)? | Mayhew (1999); Snyder (2003) | ⚠️ **Incompleto** | `14/11`–`15/11` | Tabela 2 de `relato_alta_fidelidade_joao_paulo.md`. | Apenas João Paulo apresentou tabela de rastreabilidade Nível 2 → Nível 3 (`VAL-AG01` a `03` mantidos, porém `OPO-AG01` / `REP-01` não implementado). Lucas e Evellyn não documentam como os achados do protótipo de papel informaram o Nível 3. |
| **C7-03** | Execução e gravação do Teste-Piloto de Alta Fidelidade antes das sessões com usuários reais? | Barbosa & Silva (2021, p. 276) | ⚠️ **Incompleto** | `11/11/2026` | Seção 4 de João Paulo (`https://youtu.be/BnJXBjhV1T4`, `2min02s`). | Somente João Paulo executou e vinculou vídeo de Teste-Piloto. Lucas Sales não incluiu seção nem gravação de piloto. Evellyn cita *"1 piloto descartado"* na Tabela de Protótipo, mas não apresenta seção, data nem vídeo comprobatório. |
| **C7-04** | Cláusula explícita de isolamento e descarte dos dados do Teste-Piloto da amostra final? | Plano de Ensino (*Sales, 2026*); Barbosa & Silva (2021) | ⚠️ **Incompleto** | `14/11`–`15/11` | Linha 106 de `relato_alta_fidelidade_joao_paulo.md`. | João Paulo declara expressamente que *"Os dados do piloto foram descartados, conforme Barbosa e Silva (2021)"*. A cláusula é omitida nos relatos de Lucas Sales e Evellyn Rocha. |
| **C7-05** | Fundamentação do método (Teste de Usabilidade / Think-Aloud) e justificativa da amostra na literatura? | Rubin & Chisnell (2008); Krug (2014); Moraes & Santa Rosa (2010) | ✅ **Conforme** | `14/11`–`15/11` | Seções metodológicas dos 3 relatos individuais e planejamentos gerais. | Todos os três relatos ativos justificam o método de observação por teste de usabilidade (*Barbosa & Silva, 2021; Rubin & Chisnell, 2008*) e fundamentam a escolha de 3 a 4 participantes em Krug e Moraes & Santa Rosa (2010, p. 157). |
| **C7-06** | Termo de Consentimento Livre e Esclarecido (TCLE) gravado ou assinado e anonimização (LGPD)? | Resolução CNS nº 510/2016; LGPD | ⚠️ **Incompleto** | `12/11`–`15/11` | Seção 5.1 de João Paulo vs. Lucas Sales e Evellyn Rocha. | Todos anonimizam participantes (`A, B, C`, `P1–P3`, `Usuário 1–2`). Contudo, apenas João Paulo registra TCLE verbal em vídeo; Lucas e Evellyn não mencionam o TCLE nem comprovam o consentimento no relato. |
| **C7-07** | Condução e gravação de sessões empíricas com usuários reais aderentes ao Perfil 1 (mínimo 3)? | Krug (2014); Rubin & Chisnell (2008) | ⚠️ **Incompleto** | `12/11`–`15/11` | João Paulo (`6` vídeos), Lucas (`3` vídeos) e Evellyn (`1` vídeo). | João Paulo e Lucas testaram 3 participantes com vídeos publicados. Evellyn conduziu apenas 2 sessões (abaixo do mínimo de 3 preconizado por Krug), publicou apenas o vídeo do Usuário 1 (`z046kgnc4fE`), deixou o campo `Usuário 2:` vazio e manteve placeholders na Tabela 5. |
| **C7-08** | Estrutura íntegra do relato (objetivos, método, tarefas, resultados e limitações) sem erros editoriais? | Barbosa & Silva (2021, p. 306–309) | ❌ **Não Conforme** | `15/11/2026` | `resultados_teste_usabilidade.md` e `Relato_resultados_Evellyn.md`. | **Dupla falha crítica**: (a) a página geral `resultados_teste_usabilidade.md` no menu está vazia; (b) `Relato_resultados_Evellyn.md` mistura Aproveitamento de Estudos com texto colado de gravação de áudio (Lucas Sales), cita um inexistente *"participante P3"* e vaza 65 marcações `[cite: X]`. |
| **C7-09** | Coleta de métricas quantitativas de desempenho (conclusão, tempo, erros) e/ou satisfação (SUS)? | Rubin & Chisnell (2008); Nielsen (1994) | ⚠️ **Incompleto** | `14/11`–`15/11` | Seção 5.3 de João Paulo vs. tabelas de Lucas e Evellyn. | João Paulo cronometrou os tempos da Tarefa 1 (`1min10s`, `1min38s`, `1min02s`), conclusão e desvios (porém omitiu a Tarefa 2 prevista e não aplicou SUS). Lucas apresentou apenas tabela binária (`Sim/Não`) sem tempos ou SUS; Evellyn colou os resultados do fluxo de áudio. |
| **C7-10** | Catalogação dos problemas pela escala de severidade de Nielsen (0 a 4) com heurística violada? | Nielsen (1994); Barbosa & Silva (2021) | ⚠️ **Incompleto** | `14/11`–`15/11` | Tabela 10 de João Paulo vs. Lucas Sales e Evellyn Rocha. | Apenas João Paulo aplicou a escala 0–4 e as heurísticas (`PRO-AG01` Sev. 2, `PRO-AG02` Sev. 2, `SUG-AG01` Sev. 1). Lucas descreveu gravidade de modo informal (*"baixa a moderada"*) sem código numérico nem heurística; Evellyn afirmou zero problemas contradizendo o trecho colado. |
| **C7-11** | Diretrizes concretas de reprojeto e autoinspeção (checklist da técnica) antes da entrega? | Mayhew (1999); Fagan (1976) | ⚠️ **Incompleto** | `14/11`–`15/11` | Sugestões de solução em Lucas; Tabela 3 em João Paulo. | Lucas propôs soluções para botões de gravação e transcrição opcional, mas sem checklist; João Paulo inseriu autoinspeção (Tabela 3 citando Nielsen 1993 apesar da Tabela 1 citar Krug), mas não elaborou cronograma/plano de reprojeto pós-teste; Evellyn deixou a seção sem problemas. |
| **C7-12** | Participação efetiva de todos os integrantes ativos da equipe no desenvolvimento e apresentação? | Plano de Ensino (*Sales, 2026, p. 2*) | ❌ **Não Conforme** | `15/11/2026` | Histórico de commits (`75383a8` a `ac5df28`) e `mkdocs.yml`. | Apenas 3 dos 6 discentes cadastrados contribuíram na Etapa 7 (João Paulo, Lucas Sales e Evellyn Rocha). Igor Alves, Luccas Rodrigues e Rayca Yorrara não possuem nenhuma contribuição ou artefato de Nível 3. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna com base nas Listas de Verificação da disciplina e na literatura canônica de IHC, 2026._

---

## 6. Auditoria Individual de Participação e Entregas dos Membros

Em observância ao Plano de Ensino (*Sales, 2026, p. 2*), que estabelece a avaliação individualizada de autoria e entrega para cada membro da equipe, a Tabela 5 apresenta a auditoria detalhada dos seis integrantes do Grupo 01 na Entrega 7.

**Tabela 5** — Auditoria individual de responsabilidades, protótipos, sessões e diagnóstico dos membros do Grupo 01

| Integrante | Funcionalidade / Escopo | Protótipo e Evidências Visuais | Teste-Piloto e Sessões Reais | Diagnóstico Técnico e Avaliação de Engenharia |
| :--- | :--- | :---: | :--- | :--- |
| **João Paulo da Silva Pereira** | Agendamento de reunião com o coordenador do curso (Perfil 1) | ✅ Link Figma Make (`player-schema-84676242.figma.site`) + 4 telas em `./img/` | • **Piloto:** `11/11/2026` (`2min02s`, `BnJXBjhV1T4`), descartado.<br/>• **Sessões (`n = 3`):** A (`1min10s`), B (`1min38s`), C (`1min02s`) — 6 vídeos (reação + tela) e transcrições. | **Melhor entrega da equipe.** Aplicou TCLE gravado, cronometragem, escala de severidade 0–4 (`PRO-AG01`, `PRO-AG02`, `SUG-AG01`) e rastreabilidade Nível 2→3. **Pendências:** `OPO-AG01` não implementada; Tarefa 2 prevista (recusa de horário) não testada; inconsistência entre Tabela 1 (`krug`) e Tabela 3 (`Nielsen, 1993`); ausência de agradecimento de IA e revisor. |
| **Lucas Sales Ribeiro** | Gravação e envio de áudio (Web e Desktop) | ❌ Sem link do Figma e sem capturas de tela do protótipo | • **Piloto:** Ausente.<br/>• **Sessões (`n = 3`):** P1 (`paTQ3ld71bw`), P2 (`Z6JvDPy-4v4`), P3 (`SjRPN0pwb2k`). | **Entrega Parcial / Incompleta.** Gravou 3 sessões e levantou achado válido sobre ambiguidade nos botões de pausar/encerrar (P3) com boas sugestões. **Pendências:** omitiu o link e telas do protótipo, não realizou/documentou piloto nem TCLE, não cronometrou tempos, não aplicou escala numérica 0–4 de Nielsen e deixou `resultados_teste_usabilidade.md` vazio. |
| **Evellyn de Sousa Rocha** | Aproveitamento de Estudos e Dispensa de Disciplinas | ⚠️ 6 PNGs enviados em `docs/assets/`, mas **9/9 imagens quebradas (404)** | • **Piloto:** Citado na tabela, sem seção ou vídeo.<br/>• **Sessões (`n = 2`):** Apenas Usuário 1 (`z046kgnc4fE`); Usuário 2 em branco; Tabela 5 com placeholder. | **Falha Crítica Editorial e Metodológica.** Copiou e colou o relato de gravação de áudio de Lucas Sales nas seções de *Objetivos*, *Performance* e *Opinião*, citando um *"participante P3"* inexistente em estudo com 2 usuários e contradizendo os próprios achados; manteve 65 tags `[cite: X]` e 100% das 9 imagens quebradas (404). |
| **Igor Alves de Abreu** | Não atribuído no Nível 3 | ❌ Ausente | Sem registros de piloto ou sessões. | **Omisso na Entrega 7.** Nenhum commit, página ou participação registrada no Nível 3. |
| **Luccas Rodrigues dos Santos** | Não atribuído no Nível 3 | ❌ Ausente | Sem registros de piloto ou sessões. | **Omisso na Entrega 7.** Nenhum commit ou página no Nível 3; última atuação registrada no cronograma executado data de 26/09/2026. |
| **Rayca Yorrara Leite dos Santos** | Não atribuído no Nível 3 | ❌ Ausente | Sem registros de piloto ou sessões. | **Omisso na Entrega 7.** Nenhum commit, página ou participação registrada no Nível 3. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna com base nos artefatos do repositório 2026.2-Grupo01, 2026._

---

## 7. Síntese Quantitativa e Métricas Estatísticas de Conformidade

A Tabela 6 e a Figura 1 sintetizam o resultado quantitativo consolidado da auditoria de Fagan (1976) aplicada sobre os 23 critérios da Entrega 7 do Grupo 01.

**Tabela 6** — Síntese estatística dos resultados da inspeção da Entrega 7 (Grupo 01)

| Dimensão Inspecionada | Total de Itens | Conformes (✅) | Incompletos (⚠️) | Não Conformes (❌) | Índice de Conformidade Plena | Taxa Ponderada de Conformidade\* |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Itens de Desenvolvimento Geral (DG)** | 11 | 0 | 5 | 6 | 0,0% | 22,7% |
| **Itens de Conteúdo da Disciplina (C7)** | 12 | 1 | 9 | 2 | 8,3% | 45,8% |
| **TOTAL CONSOLIDADO DA ENTREGA 7** | **23** | **1** | **14** | **8** | **4,3%** | **34,8%** |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._  
*\*Nota Metodológica de Ponderação: Conforme = 1,0 ponto; Incompleto = 0,5 ponto; Não Conforme = 0,0 ponto.*

Para propiciar visualização gerencial imediata da distribuição dos 23 critérios avaliados, a Figura 1 apresenta o painel proporcional de atendimento obtido pelo Grupo 01 na Etapa 7.

<div class="dp-checklist-summary">
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">✅ Atendido Plenamente</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-ok" style="width:4.3%">1 / 23 (4,3%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">⚠️ Atendido Parcialmente</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-warn" style="width:60.9%">14 / 23 (60,9%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">❌ Não Atendido / Omissão</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-fail" style="width:34.8%">8 / 23 (34,8%)</div></div>
  </div>
</div>

<p style="font-size: 0.85rem; color: var(--dp-muted); text-align: center;"><strong>Figura 1</strong> — Distribuição percentual da conformidade dos 23 critérios da Etapa 7 do Grupo 01. <em>Fonte: Autores (Grupo 08), 2026.</em></p>

### Cálculo da Taxa Ponderada de Conformidade Técnica

!!! note "Memória de Cálculo da Taxa Ponderada e Veredito Técnico"
    Aplicando os pesos padronizados pela equipe de auditoria (**1,0** para itens atendidos plenamente, **0,5** para parciais/incompletos e **0,0** para não conformidades ou omissões):

    **Taxa Ponderada (DG)** = [(0 × 1,0) + (5 × 0,5) + (6 × 0,0)] ÷ 11 = 2,5 ÷ 11 = **22,7%**  
    **Taxa Ponderada (C7)** = [(1 × 1,0) + (9 × 0,5) + (2 × 0,0)] ÷ 12 = 5,5 ÷ 12 = **45,8%**  
    **Taxa Ponderada Global (Etapa 7)** = [(1 × 1,0) + (14 × 0,5) + (8 × 0,0)] ÷ 23 = 8,0 ÷ 23 = **34,8%**

    **Veredito Técnico da Auditoria:** **NECESSITA DE RETRABALHO CRÍTICO** antes da consolidação do Projeto Final (Etapa 8).

---

## 8. Análise Aprofundada dos Problemas Críticos Encontrados

### 8.1 Colagem Indevida de Fluxo Concorrente e Marcadores `[cite: X]` em `Relato_resultados_Evellyn.md` (C7-08 e DG-03)
Ao inspecionar o artefato de **Aproveitamento de Estudos e Dispensa de Componentes Curriculares** (`Relato_resultados_Evellyn.md`), constatou-se uma grave inconsistência redacional: embora o escopo, o passo a passo e as 6 imagens refiram-se ao aproveitamento de disciplinas na UnB, as seções *Objetivos da Avaliação*, *Performance dos Participantes* e *Opinião dos Participantes* contêm texto copiado literalmente do relato de **gravação de áudio de Lucas Sales**. O documento declara que os dois participantes realizaram o *"fluxo de gravação e envio de áudio sem dificuldades"* e atribui a um **"participante P3"** (inexistente em uma amostra declarada de 2 participantes) críticas aos *"botões de pausar e encerrar a gravação"* e à *"transcrição do áudio de visualização única"*. Logo abaixo, contradiz o próprio texto afirmando *"Os usuários não apresentaram problemas de usabilidade"*. Somam-se a isso **65 ocorrências brutas de `[cite: 1]` a `[cite: 11]`**, evidenciando texto gerado/copiado sem revisão humana.

### 8.2 Quebra Generalizada de Imagens (14 Erros 404 no Build do MkDocs — DG-04)
A análise dos logs oficiais de compilação do GitHub Actions do Grupo 01 (`run 43756912601`, commit `ac5df28`) e dos caminhos relativos no Markdown revelou **14 imagens quebradas (HTTP 404)** no Nível 3:
- Em `Relato_resultados_Evellyn.md` (localizado em `docs/design_avaliacao_desenvolvimento/nivel_3/`), **todas as 9 imagens falham**: as 6 telas do protótipo usam `../../../assets/prototipo-tela-1.png` a `6.png` (que sobem três níveis e escapam da pasta `docs/`, quando o correto seria `../../assets/`), e as 3 figuras teóricas (`figura-1-teste-usabilidade.png`, `figura-2-coleta-dados.png` e `figura-4-relato-resultados.png`) referenciam uma pasta inexistente `assets/images/`;
- Em `planejamento_teste_usabilidade.md`, **5 de 7 figuras** (`objetivos_perguntas_1.png`, `objetivos_perguntas_2.png`, `TCLE_v2.png`, `principios_1.png` e `principios_2.png`) também falham pelo uso incorreto de `../../../assets/`.

### 8.3 Página Principal do Menu Vazia, Vídeo Ausente e PDF Ausente (DG-05, DG-09 e C7-08)
No menu de navegação do `mkdocs.yml` em `Nível 3 -> Teste de usabilidade`, a opção principal `Relato dos resultados` direciona para `resultados_teste_usabilidade.md`, uma página **totalmente vazia** contendo apenas a Tabela de Contribuição de criação (31/10/2026) e um histórico de versão com data malformada (`3110/2026`). Além disso, repetindo o padrão já diagnosticado nas Etapas 3 e 5, o Grupo 01 não publicou o **vídeo de apresentação oficial da Entrega 7** nem disponibilizou o arquivo **PDF padronizado da entrega**.

### 8.4 Lacunas Metodológicas em `lucas_sales/relato_resultados.md` e em `relato_alta_fidelidade_joao_paulo.md` (C7-01 a C7-04, C7-09 e C7-10)
- **Frente Lucas Sales (Áudio):** Apesar de possuir 3 sessões gravadas no YouTube, o relato não disponibiliza o link para o protótipo interativo no Figma nem capturas das telas prototipadas, omite totalmente o Teste-Piloto e o registro do TCLE, não cronometra os tempos de tarefa nem aplica SUS, e não classifica o Problema 1 na escala numérica de severidade de Nielsen (0 a 4);
- **Frente João Paulo (Agendamento):** Apresenta a estrutura empírica mais madura da equipe, mas não implementou a oportunidade `OPO-AG01` (`REP-01`) herdada do papel, não executou a Tarefa 2 prevista no planejamento (visualizar status recusado e propor outro horário), possui inconsistência interna entre a Tabela 1 (autoinspeção *"baseada em krug"*) e a Tabela 3 (*"Nielsen, 1993"*), e omitiu as seções de Agradecimentos/IA e a coluna de Revisor no histórico.

### 8.5 Omissão de 50% da Equipe e Ausência Crítica de Governança (DG-02, DG-06, DG-07 e C7-12)
Apenas três dos seis integrantes listados na página inicial atuaram no Nível 3. Igor Alves, Luccas Rodrigues e Rayca Yorrara não possuem commits ou entregas na Etapa 7. Paralelamente, 100% dos artefatos de Nível 3 têm `Revisor(es)` como `"A definir"` ou vazio, as atas de reunião pararam em 16/09/2026 e o `cronograma_executado.md` está congelado na Etapa 2 (26/09/2026), mantendo referências obsoletas ao projeto *Oppia*.

---

## 9. Pontos Fortes e Destaques Metodológicos da Entrega

Em consonância com a postura construtiva da inspeção formal (*Fagan, 1976*), destacam-se os avanços relevantes observados na Entrega 7 do Grupo 01:

1. **Qualidade do Protótipo e Execução Empírica de João Paulo:** Desenvolvimento de protótipo navegável no Figma Make (`https://player-schema-84676242.figma.site/`) aderente ao tema escuro e identidade visual do Microsoft Teams (`#5b5fc7`), com rastreabilidade explícita do Nível 2 para o Nível 3 (`VAL-AG01` a `03`);
2. **Rigor de Gravação em Duplo Ângulo e TCLE (João Paulo):** Execução de Teste-Piloto isolado (`BnJXBjhV1T4`, `2min02s`) com descarte explícito dos dados, além de três sessões presenciais registradas simultaneamente com câmera de reação do participante e captura da tela do protótipo, TCLE verbal e cronometragem real de tarefa (`1min10s`, `1min38s`, `1min02s`);
3. **Coleta Empírica Real em Áudio (Lucas Sales):** Realização e publicação de três sessões de teste de usabilidade com estudantes da FCTE/UnB (`P1`, `P2`, `P3`), diagnosticando fricção real entre os ícones de pausar e encerrar gravação e propondo melhorias objetivas de affordance e feedback;
4. **Confecção Visual de Telas de Aproveitamento de Estudos (Evellyn Rocha):** Produção de 6 telas de interface detalhando o fluxo de Aproveitamento de Estudos e Dispensa no ambiente do Teams (`docs/assets/prototipo-tela-1.png` a `6.png`), cuja visualização na Wiki depende apenas da correção do caminho relativo;
5. **Alinhamento Bibliográfico de Base:** Consolidação coerente dos fundamentos do método de Teste de Usabilidade (*Barbosa & Silva, 2021; Rubin & Chisnell, 2008*) e justificativa amostral em Krug e Moraes & Santa Rosa (2010).

---

## 10. Recomendações de Ação Corretiva em 7 Passos para o Grupo 01

Para subsidiar o retrabalho imediato antes da avaliação final da disciplina (Etapa 8), a Tabela 7 sintetiza as sete ações corretivas prioritárias recomendadas ao Grupo 01.

**Tabela 7** — Recomendações prioritárias de ação corretiva para o Grupo 01

| Prioridade / Eixo de Intervenção | Recomendações Técnicas e Metodológicas para o Grupo 01 |
| :--- | :--- |
| **1. Corrigir colagem indevida e tags `[cite: X]` (Evellyn)** | Reescrever as seções de *Objetivos*, *Performance* e *Opinião* em `Relato_resultados_Evellyn.md` com os dados reais de Aproveitamento de Estudos, remover os 65 marcadores `[cite: X]`, completar o teste com ao menos 3 usuários e incluir os links dos vídeos faltantes na Tabela 5. |
| **2. Reparar as 14 imagens quebradas (Erro 404)** | Corrigir os caminhos relativos em `Relato_resultados_Evellyn.md` (9 imagens: trocar `../../../assets/` por `../../assets/` e adicionar as 3 imagens teóricas corretas) e em `planejamento_teste_usabilidade.md` (5 imagens). |
| **3. Preencher a página principal do Nível 3** | Substituir o placeholder vazio em `resultados_teste_usabilidade.md` por uma síntese geral integrando as três funcionalidades avaliadas, métricas consolidadas e matriz de problemas do grupo, corrigindo a data `3110/2026`. |
| **4. Publicar Apresentação Oficial em Vídeo e PDF** | Gravar a apresentação da equipe sobre os resultados da Etapa 7 (20 a 30 min, YouTube Não Listado), incorporar na Wiki e disponibilizar o PDF padronizado da entrega. |
| **5. Completar Protótipo, Piloto e TCLE (Lucas e Evellyn)** | Inserir o link do Figma e capturas de tela em `lucas_sales/relato_resultados.md`, executar e gravar os Testes-Piloto com cláusula explícita de isolamento de dados e documentar o TCLE nos relatos. |
| **6. Padronizar Métricas, Severidade de Nielsen e Tarefa 2** | Cronometrar tempos de execução na frente de áudio, aplicar a escala numérica de severidade de Nielsen (0 a 4) e heurísticas em todos os relatos, executar a Tarefa 2 pendente de João Paulo e estruturar o plano de reprojeto pós-Nível 3. |
| **7. Regularizar Governança, Revisores e Cronograma** | Efetuar revisão cruzada real preenchendo a coluna `Revisor(es)`, registrar as atas/vídeos das reuniões recentes em `atas/reunioes.md`, atualizar `cronograma_executado.md` (removendo menções ao *Oppia*) e esclarecer o status dos 3 membros omissos. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna com base na inspeção de Fagan da Entrega 7, 2026._

---

## 11. Lista de Verificação da Técnica (Inspeção Formal de Software)

A Tabela 8 apresenta a autoavaliação metodológica da técnica de **Inspeção Formal de Software (Fagan, 1976)** aplicada pelo Grupo 08 na produção deste relatório de auditoria da Etapa 7.

**Tabela 8** — Lista de Verificação da Técnica de Inspeção Formal de Software (Fagan, 1976)

| ID | Questão / Critério Metodológico Avaliado | Origem / Fonte Normativa | Conforme? | Resposta Autoexplicativa e Evidência no Documento |
| :---: | :--- | :--- | :---: | :--- |
| **LVT-01** | A inspeção foi orientada por lista de verificação (*checklist*) previamente definida e desacoplada dos achados empíricos? | Fagan (1976); Sommerville (2011) | ✅ **Sim** | Os critérios normativos derivam do Plano de Ensino (*Sales, 2026*) e das matrizes neutras documentadas em [`docs/verificacao/lista-verificacao.md`](../lista-verificacao.md). |
| **LVT-02** | O relatório identifica formalmente a versão, data, commit exato e ambiente documental do sistema inspecionado? | Fagan (1976); Pressman (2014) | ✅ **Sim** | A Tabela 2 registra o commit exato (`ac5df28`), branch (`main`), data (`15/11/2026`), links das páginas inspecionadas e data da auditoria (`16/11/2026`). |
| **LVT-03** | A inspeção discrimina de forma independente os critérios gerais de governança dos critérios de conteúdo de IHC? | Sales (2026); Mayhew (1999) | ✅ **Sim** | A auditoria separa a Tabela 3 (critérios gerais `DG-01` a `DG-11`) da Tabela 4 (critérios de conteúdo da Entrega 7 `C7-01` a `C7-12`). |
| **LVT-04** | A auditoria individual avalia a participação e entregas de cada membro da equipe auditada? | Plano de Ensino da Disciplina (*Sales, 2026, p. 2*) | ✅ **Sim** | A Tabela 5 audita individualmente cada um dos seis integrantes cadastrados no Grupo 01 (João Paulo, Lucas Sales, Evellyn Rocha, Igor Alves, Luccas Rodrigues e Rayca Yorrara). |
| **LVT-05** | O relatório quantifica os resultados por meio de métricas estatísticas objetivas e índices de conformidade? | Fagan (1976); Nielsen (1994) | ✅ **Sim** | A Tabela 6, a Figura 1 e o bloco de cálculo apresentam percentuais absolutos e taxas ponderadas (`22,7%` DG, `45,8%` C7 e `34,8%` global). |
| **LVT-06** | A inspeção prescreve recomendações concretas de ação corretiva para orientar o retrabalho da equipe? | Fagan (1976); Barbosa & Silva (2021) | ✅ **Sim** | A Tabela 7 especifica um plano corretivo objetivo em 7 frentes prioritárias com identificação dos arquivos e problemas a corrigir. |
| **LVT-07** | A auditoria foi verificada frente às evidências técnicas de compilação e integridade do repositório auditado? | Fagan (1976); Sommerville (2011) | ✅ **Sim** | Além da leitura integral do código-fonte Markdown, a inspeção cruzou os logs oficiais do GitHub Actions (`run 43756912601`) para comprovar as 14 imagens quebradas (404). |
| **LVT-08** | Foi disponibilizado relatório formal consolidado em formato PDF padronizado para download? | Instruções Oficiais de Entrega (*Sales, 2026*) | ✅ **Sim** | O arquivo `Grupo08InspecaoGrupo01Etapa7.pdf` encontra-se disponível para download direto na Seção 2 e na pasta `docs/assets/relatorios/`. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna com base nos preceitos de Inspeção Formal de Software (Fagan, 1976), 2026._

---

## 12. Histórico de Versão

A Tabela 9 documenta o histórico evolutivo deste relatório formal de auditoria da Etapa 7 do Grupo 01.

**Tabela 9** — Histórico de versão do documento

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 16/11/2026 | Coleta integral de dados no commit `ac5df28` do Grupo 01, elaboração do relatório formal de inspeção da Etapa 7 (Tabelas 1 a 8, Figura 1 e análise em 5 eixos), incorporação da gravação em vídeo (`https://youtu.be/uFMTMShnoz4`), checklist da técnica e disponibilização do relatório institucional em PDF. | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) | [Edvaldo Soares](https://github.com/PajeMurici-dev), [Vinicius Silva Araruna](https://github.com/ViniciusA05) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 13. Referências Bibliográficas (ABNT NBR 6023)

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. *Interação Humano-Computador e Experiência do Usuário*. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.

[2] BRASIL. Ministério da Saúde. Conselho Nacional de Saúde. *Resolução nº 510, de 7 de abril de 2016*. Diretrizes éticas para pesquisas em ciências humanas e sociais. Brasília: Diário Oficial da União, 2016.

[3] BRASIL. *Lei nº 13.709, de 14 de agosto de 2018*. Lei Geral de Proteção de Dados Pessoais (LGPD). Brasília: Diário Oficial da União, 2018.

[4] FAGAN, Michael E. Design and code inspections to reduce errors in program development. *IBM Systems Journal*, v. 15, n. 3, p. 182-211, 1976.

[5] KRUG, Steve. *Não me faça pensar (revisitado): uma abordagem de bom senso à usabilidade na web e no celular*. 3. ed. Rio de Janeiro: Alta Books, 2014.

[6] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[7] MORAES, Anamaria de; SANTA ROSA, José Guilherme. *Avaliação e projeto no design de interfaces*. Rio de Janeiro: 2AB, 2010.

[8] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann Publishers, 1994.

[9] PRESSMAN, Roger S. *Engenharia de Software: Uma Abordagem Profissional*. 7. ed. Porto Alegre: AMGH, 2014.

[10] RUBIN, Jeffrey; CHISNELL, Dana. *Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests*. 2. ed. Indianapolis: Wiley, 2008.

[11] SALES, André Barros de. *Plano de Ensino FIHC 022026 — Turma 01*. Brasília: Faculdade de Ciências e Tecnologias em Engenharia (FCTE), Universidade de Brasília (UnB), 2026.

[12] SNYDER, Carolyn. *Paper Prototyping: The Fast and Easy Way to Design and Refine User Interfaces*. San Francisco: Morgan Kaufmann Publishers, 2003.

[13] SOMMERVILLE, Ian. *Engenharia de Software*. 9. ed. São Paulo: Pearson Prentice Hall, 2011.

---

## 14. Agradecimentos e Declaração de Uso de IA Generativa

Em cumprimento às diretrizes éticas da Sociedade Brasileira de Computação (SBC, 2023) e às normas da disciplina (*Sales, 2026*), registra-se que recursos supervisionados de Inteligência Artificial Generativa (Google Gemini) foram empregados exclusivamente para apoio na formatação sintática de Markdown, padronização de matrizes tabulares e organização textual das referências ABNT. Toda a coleta empírica no repositório do Grupo 01, verificação de logs de build, conferência das gravações audiovisuais, cálculo das métricas ponderadas e julgamento técnico foram concebidos, executados e validados integralmente pelos discentes autores do Grupo 08.

# Avaliação do Grupo +1 — Grupo 01 (Microsoft Teams) — Etapa 5

<div class="dp-page-nav" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin: 1.2rem 0 1.8rem 0; padding: 0.8rem 1rem; background: var(--dp-card); border: 1px solid var(--dp-border); border-radius: 8px;" markdown="1">

[:material-hub: **Hub Central (Visão Geral)**](index.md){ .md-button }
[:material-rocket-launch: **Etapa 5 (Relatos Nível 1 e Protótipo de Papel)**](etapa5.md){ .md-button .md-button--primary }
[:material-clipboard-check: **Etapa 3 (Princípios, Metas e Guia de Estilo)**](etapa3.md){ .md-button }

</div>

## Tabela de Contribuição e Transparência de IA Generativa

A Tabela 1 apresenta a distribuição de responsabilidades, papéis e ferramentas utilizadas pelos discentes do Grupo 08 na realização desta avaliação analítica.

**Tabela 1** — Matriz de Contribuição da Avaliação da Etapa 5 do Grupo 01

| Integrante | Atribuição no Artefato | Data | Horário | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :---: | :---: | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Tech Lead / Auditor Principal**: Concepção metodológica, auditoria de governança, levantamento das inconsistências críticas (vídeo ausente, PDF ausente e YouTube Shorts no teste-piloto), elaboração da matriz analítica e redação técnica | 26/10/2026 | 21:15 - 22:30 | Google Gemini (LLM) | Apoio na estruturação Markdown, padronização tabular e alinhamento de referências ABNT |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Auditor Técnico**: Auditoria dos Relatos de Resultados de Nível 1 (Storyboard e HTA), validação de roteiros, análise das entrevistas empíricas e conferência dos dados tabulados | 26/10/2026 | 21:30 - 22:45 | Google Gemini (LLM) | Apoio na formatação visual de gráficos em HTML/CSS e checagem de links |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Auditor Técnico**: Auditoria dos artefatos de Nível 2 (Planejamento da Avaliação e do Relato do Protótipo de Papel), verificação da dinâmica do Computador Humano (Snyder, 2003) e revisão cruzada por pares | 26/10/2026 | 21:45 - 23:00 | — | Auditoria humana cruzada, validação de consistência e cálculo de métricas |

_Fonte: Elaborada pelos autores (Grupo 08), 2026._

---

## 1. Introdução e Contextualização Metodológica

Este documento consolida o **relatório formal de avaliação técnica, ergonômica e acadêmica do Grupo +1 (Grupo 01)** referente à **Etapa 5** do projeto de Interação Humano-Computador (FGA0173 — Turma 01, 2026.2), ministrada pelo Prof. Dr. André Barros de Sales na Faculdade de Ciências e Tecnologias em Engenharia (FCTE/FGA) da Universidade de Brasília (UnB).

A dinâmica pedagógica de avaliação por pares estabelece que o **Grupo 08** realize a auditoria sistemática sobre o grupo sucessor na escala cíclica (Grupo N + 1, onde Grupo 08 inspeciona o Grupo 01), cujo objeto de estudo é o ecossistema colaborativo e educacional do **Microsoft Teams**.

A inspeção é fundamentada no consagrado **Método de Inspeção Formal de Software de Michael E. Fagan (1976)**, aplicando listas de verificação estruturadas (*checklists*) para assegurar reprodutibilidade, imparcialidade e rigor investigativo (*Barbosa & Silva, 2021; Fagan, 1976*). Sob a ótica do **Ciclo de Vida de Deborah Mayhew (1999)**, a Etapa 5 possui natureza híbrida e estratégica:
1. **Conclusão Formativa do Nível 1 (Modelagem Conceitual):** Consolidação dos relatos empíricos da avaliação dos **Storyboards** (*Klemmer; Barbosa & Silva, 2021*) e da **Análise Hierárquica de Tarefas (HTA)** (*Annett, 2003*), mensurando problemas de usabilidade pela Escala de Severidade de Jakob Nielsen (1994);
2. **Preparação para o Nível 2 (Prototipação em Papel):** Formulação dos planos de avaliação e de relato para os testes de baixa e média fidelidade física (*Snyder, 2003; Rettig, 1994*), estruturados pelo framework DECIDE (*Preece, Rogers & Sharp, 2002*).

O objetivo desta auditoria é apontar vulnerabilidades e inconsistências de forma construtiva e fundamentada, fornecendo subsídios práticos para orientar o ciclo de retrabalho e refatoração do Grupo 01 antes do avanço para a alta fidelidade (Nível 3).

_Autor do Item Teórico: [Vinicius Silva Araruna](https://github.com/ViniciusA05)_  
*(Fundamentação teórica de inspeção formal em Fagan, 1976, Barbosa & Silva, 2021 e Mayhew, 1999).*

---

## 2. Identificação do Projeto Avaliado

A Tabela 2 sintetiza as informações cadastrais, o ambiente de versionamento e os acessos diretos aos artefatos inspecionados do Grupo 01.

**Tabela 2** — Dados de identificação do Grupo 01 e ambiente documental

| Atributo | Detalhamento Institucional |
| :--- | :--- |
| **Grupo Avaliado** | Grupo 01 (Grupo +1 na escala cíclica da disciplina) |
| **Objeto de Estudo (Sistema)** | Microsoft Teams (ambiente de comunicação, canais, chat e serviços acadêmicos) |
| **Etapa do Projeto Avaliada** | Etapa 5: Relato dos Resultados do Storyboard e da Análise de Tarefas (Nível 1) e Planejamento da Avaliação e do Relato do Protótipo de Papel (Nível 2) |
| **Versão / Commit Avaliado** | Commit `10a7c3d` (*"Atualiza planejamento do protótipo de papel"*, branch `main`, 25/10/2026) |
| **Data da Avaliação** | 26/10/2026 |
| **Repositório no GitHub** | [Interacao-Humano-Computador/2026.2-Grupo01](https://github.com/Interacao-Humano-Computador/2026.2-Grupo01) |
| **Documentação no GitPages** | [interacao-humano-computador.github.io/2026.2-Grupo01](https://interacao-humano-computador.github.io/2026.2-Grupo01/) |
| **Artefatos Inspecionados** | • [Relato do Storyboard (Lucas/João)](https://interacao-humano-computador.github.io/2026.2-Grupo01/design_avaliacao_desenvolvimento/nivel_1/storyboard/relato_resultados_storyboard/)<br/>• [Relato do Storyboard (Evellyn)](https://interacao-humano-computador.github.io/2026.2-Grupo01/design_avaliacao_desenvolvimento/nivel_1/storyboard/relato_resultado_storyboard_evellyn/)<br/>• [Relato da Análise de Tarefas (Lucas/João)](https://interacao-humano-computador.github.io/2026.2-Grupo01/design_avaliacao_desenvolvimento/nivel_1/analise_tarefas/relato_resultados_analise_tarefas/)<br/>• [Relato da Análise de Tarefas (Evellyn)](https://interacao-humano-computador.github.io/2026.2-Grupo01/design_avaliacao_desenvolvimento/nivel_1/analise_tarefas/relato-resultado-evellyn/)<br/>• [Planejamento do Protótipo de Papel](https://interacao-humano-computador.github.io/2026.2-Grupo01/design_avaliacao_desenvolvimento/nivel_2/prototipo_papel/planejamento_prototipo_papel/)<br/>• [Planejamento do Relato do Protótipo de Papel](https://interacao-humano-computador.github.io/2026.2-Grupo01/design_avaliacao_desenvolvimento/nivel_2/prototipo_papel/planejamento_relato_prototipo_papel/)<br/>• [Resultados do Protótipo de Papel (Placeholder)](https://interacao-humano-computador.github.io/2026.2-Grupo01/design_avaliacao_desenvolvimento/nivel_2/prototipo_papel/resultados_prototipo_papel/) |
| **Vídeo da Apresentação Oficial (Grupo 01)** | ❌ **Não Disponibilizado (Falha Crítica)**: Inexistência de gravação audiovisual da equipe apresentando a Etapa 5. A página `atas/reunioes.md` contém apenas a gravação da Entrega 1 e duas reuniões de setembro de 2026. |
| **Relatório Oficial em PDF (Grupo 01)** | ❌ **Não Disponibilizado (Falha Crítica)**: Nenhum arquivo em PDF denominado `PlajRelatoStoryBoarProtPapeldTeams.pdf` ou similar foi localizado no repositório público. |
| **Vídeo da Avaliação Realizada pelo Grupo 08** | [Assistir Avaliação do Grupo 08 no YouTube (Gravação da Inspeção)](https://youtu.be/QjAnF0_ooT8) |

_Fonte: Elaborada pelos autores (Grupo 08), 2026._

!!! info "Relatório em PDF Padronizado da Avaliação (Grupo 08)"
    Em estrito atendimento às exigências pedagógicas do Plano de Ensino da disciplina (*Sales, 2026*) e do enunciado oficial da tarefa no Teams (*"PlajRelatoStoryBoarProtPapeldNomedoSite.pdf"*), o relatório analítico consolidado desta inspeção formal — contendo cabeçalho institucional UnB/FGA, matriz tabular completa, percentuais e assinaturas — encontra-se disponível para download direto:
    
    [:material-file-pdf-box: **Baixar Relatório Oficial da Inspeção: PlajRelatoStoryBoarProtPapeldMicrosoftTeams.pdf**](../../assets/relatorios/PlajRelatoStoryBoarProtPapeldMicrosoftTeams.pdf){ .md-button .md-button--primary }

---

## 3. Registro Audiovisual da Avaliação (Grupo 08)

O Vídeo 1 a seguir documenta a auditoria técnica da Etapa 5 do Grupo 01, conduzida pelos discentes do Grupo 08:

<div style="text-align: center; margin: 1.5rem 0;">
  <iframe width="100%" height="450" src="https://www.youtube-nocookie.com/embed/QjAnF0_ooT8" title="Avaliação da Etapa 5 do Grupo +1 (Grupo 01 — Microsoft Teams) | Grupo 08 — IHC 2026.2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 8px; max-width: 800px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"></iframe>
  <p style="font-size: 0.85rem; color: var(--dp-muted); margin-top: 0.5rem;"><strong>Vídeo 1</strong> — Registro audiovisual da auditoria formal da Etapa 5 do Grupo 01 (Microsoft Teams). <em>Fonte: Autores (Grupo 08), 2026.</em></p>
  <p style="font-size: 0.9rem; margin-top: 0.25rem;"><a href="https://youtu.be/QjAnF0_ooT8" target="_blank" rel="noopener noreferrer">Assistir diretamente no YouTube (Não Listado): https://youtu.be/QjAnF0_ooT8</a></p>
</div>

---

## 4. Matriz Geral de Inspeção da Etapa 5 (15 Critérios da Disciplina)

A conformidade técnica dos produtos de trabalho entregues pelo Grupo 01 foi auditada frente aos 15 critérios objetivos que compõem a lista de verificação normativa da Etapa 5 ([`Listas de Verificação`](../lista-verificacao.md)). A Tabela 3 detalha a situação de cada item, sua evidência no repositório e a justificativa técnica correspondente.

**Tabela 3** — Auditoria dos critérios de conteúdo, metodologia e governança da Etapa 5 (Grupo 01)

| ID | Critério Oficial de Inspeção | Origem Normativa | Avaliação | Evidência Factual no Repositório do Grupo 01 | Diagnóstico Técnico e Justificativa de Engenharia |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **01** | **Vídeo de Apresentação Oficial da Etapa 5** | Plano de Ensino (*Sales, 2026*); Tarefa no Teams | ❌ **Não** | Em `docs/atas/reunioes.md`, o último vídeo cadastrado é da Entrega 1 (`RpDdo0f117A`). Não há registro de vídeo para a Etapa 5. | **Falha Crítica**. O Plano de Ensino e o enunciado da entrega exigem vídeo de apresentação gravado pela equipe (20 a 30 min) publicado no YouTube como Não Listado. O grupo não produziu nem disponibilizou a gravação da Etapa 5. |
| **02** | **Arquivo PDF Padronizado da Entrega 5** | Instruções de Entrega do Teams (*PlajRelatoStoryBoarProtPapeldNomedoSite.pdf*) | ❌ **Não** | Nenhum PDF correspondente foi encontrado nas pastas `docs/assets/`, `docs/` ou raiz do repositório do Grupo 01. | **Falha Crítica**. A submissão da entrega exige formalmente um PDF único consolidado no padrão estipulado. A ausência impede a conferência institucional no Aprender 3. |
| **03** | **Relato do Storyboard: Investigação Empírica** | Barbosa & Silva (2021, p. 275); Klemmer | ⚠️ **Incompleto** | Relatos desmembrados em `relato_resultados_storyboard.md` (Lucas/João) e `relato_resultado_storyboard_evellyn.md` (Evellyn). | Houve entrevistas com discentes (João Lima e Participante A), mas os relatos estão divididos em arquivos concorrentes sem síntese ou consolidação dos achados para a equipe. |
| **04** | **Relato do Storyboard: Roteiro e Termo Ético (TCLE)** | Resolução CNS nº 510/2016; Beauchamp & Childress | ⚠️ **Incompleto** | Perguntas de roteiro presentes, mas ausência do Script Oral Literal do TCLE para leitura padronizada nos primeiros 60 segundos gravados. | O consentimento verbal não foi uniformizado por meio de um script literal transcrito, fragilizando a garantia de autonomia plena e a proteção bioética dos voluntários. |
| **05** | **Relato da Análise de Tarefas: Validação da HTA** | Annett (2003); Barbosa & Silva (2021, p. 192) | ⚠️ **Incompleto** | Relatos divididos em dois arquivos (`relato_resultados_analise_tarefas.md` e `relato-resultado-evellyn.md`). | O artefato de Evellyn relata a validação de objetivos e planos do HTA com precisão, enquanto o artefato de Lucas e João limita-se a anotações informais sem matriz de discrepâncias de planos lógicos. |
| **06** | **Severidade de Problemas e Sugestões de Reprojeto** | Nielsen (1994); Barbosa & Silva (2021) | ⚠️ **Incompleto** | Problemas identificados, mas a classificação de severidade (0 a 4) é aplicada de maneira assistemática e assimétrica entre os autores. | Não foi gerada uma matriz integrada do grupo relacionando: *Problema*, *Heurística Violada*, *Severidade de Nielsen (0 a 4)*, *Frequência* e *Diretriz de Reprojeto para Nível 2*. |
| **07** | **Planejamento do Protótipo de Papel: Framework DECIDE** | Preece et al. (2002); Barbosa & Silva (2021) | ✅ **Sim** | Presente em `planejamento_prototipo_papel.md`, estruturado nas 6 dimensões clássicas: D-E-C-I-D-E. | Plenamente atendido. O documento delineia objetivos, perguntas exploratórias, cronograma e considerações sobre a prototipação rápida em papel. |
| **08** | **Papéis no Protótipo de Papel (Snyder, 2003)** | Snyder (2003); Rettig (1994) | ⚠️ **Incompleto** | O texto menciona os papéis de facilitador e avaliador, mas sem delimitação operacional rigorosa da dinâmica tátil. | Falta detalhar o protocolo de atuação do "Computador Humano" (proibição de dar dicas verbais, manipulação ágil e silenciosa de cartões de papel e tempo de resposta simulado). |
| **09** | **Teste-Piloto do Protótipo de Papel** | Barbosa & Silva (2021, p. 300); Snyder (2003) | ❌ **Não** | O texto afirma que a sessão durou **23 min e 15 s**, mas os links fornecidos (`bpovdN-4HrQ` e `Qcpn9fD_NHw`) são **YouTube Shorts** de 50 segundos. | **Discrepância Metodológica Crítica**. Vídeos verticais de 50 segundos não comprovam a simulação do percurso de tarefas em papel nem a calibração do tempo de teste. |
| **10** | **Planejamento do Relato do Protótipo de Papel** | Barbosa & Silva (2021, Cap. 11); Mayhew (1999) | ⚠️ **Incompleto** | Presente em `planejamento_relato_prototipo_papel.md`, porém desmembrado em três subseções concorrentes por autor. | O grupo não unificou a estrutura de relato em um padrão único da equipe, gerando três formatos divergentes de documentação para o mesmo artefato. |
| **11** | **Integridade Documental (Zero Placeholders no Menu)** | Padrão de Engenharia de Software e MkDocs | ❌ **Não** | O arquivo `resultados_prototipo_papel.md` está ativo no menu de navegação do GitPages com o texto `# Nada a ver aqui, por enquanto.`. | **Não Conforme**. Não é permitida a inclusão de páginas em branco, rascunhos informais ou avisos de "em construção" na navegação da versão de entrega oficial. |
| **12** | **Revisão por Pares nas Tabelas de Contribuição** | Fagan (1976); Modelo de Governança da Disciplina | ❌ **Não** | A coluna de `Revisor(es)` consta como `"A definir"` ou está vazia em 100% dos artefatos da Etapa 5. | Inexistência de revisão cruzada por pares formalmente documentada antes da liberação dos artefatos na branch `main`. |
| **13** | **Chamadas de Tabelas e Figuras no Texto** | ABNT NBR 10719; Manual de Publicações | ⚠️ **Incompleto** | Figuras e tabelas possuem títulos manuais (`<p align="center">`), mas diversas não são chamadas ou contextualizadas no texto antecedente. | Descumprimento da regra de redação técnica que veda elementos visuais órfãos na documentação de IHC. |
| **14** | **Cronograma Executado da Etapa 5** | Plano de Ensino (*Sales, 2026*); Governança | ❌ **Não** | O arquivo `cronograma_executado.md` não foi atualizado para contemplar a Etapa 5 e mantém pendências em aberto desde a Etapa 3. | Falta de comprovação das datas reais de desenvolvimento, alocação de esforço e prazos de entrega dos artefatos de Nível 1 e 2. |
| **15** | **Declaração Transparente de Uso de IA Generativa** | Diretrizes da SBC (2023); Plano de Ensino | ⚠️ **Incompleto** | Declaração pontual na Tabela 1 de `planejamento_prototipo_papel.md` citando o Claude, mas ausente nos demais artefatos da Etapa 5. | O grupo deve estender a declaração de transparência a todos os documentos da entrega, delimitando o escopo estritamente de formatação sintática. |

_Fonte: Elaborada pelos autores (Grupo 08), 2026._

---

## 5. Avaliação Qualitativa Aprofundada por Artefato

### 5.1 Relatos de Resultados de Nível 1 (Storyboard e Tarefas)
- **Descentralização Não-Integrada**: Observa-se que a discente Evellyn de Sousa Rocha produziu artefatos ricos e bem embasados (`relato_resultado_storyboard_evellyn.md` e `relato-resultado-evellyn.md`), contendo inclusive teste-piloto gravado com isolamento de dados e transcrição rastreável. Paralelamente, os discentes Lucas Sales e João Paulo elaboraram outros arquivos concorrentes. Essa fragmentação enfraquece a visão sistêmica da interface do Microsoft Teams, pois a equipe não consolidou uma síntese única de problemas e prioridades.
- **Roteiro e Aspectos Éticos**: Embora tenham colhido consentimento verbal em vídeo, não foi adotado um **Script Oral Literal** de leitura obrigatória nos primeiros 60 segundos da chamada, o que permitiria garantir padronização rigorosa nos avisos sobre gravação, anonimização e liberdade de interrupção a qualquer tempo sem penalidades.

### 5.2 Planejamentos de Nível 2 (Protótipo de Papel e seu Relato)
- **Estruturação DECIDE**: O artefato `planejamento_prototipo_papel.md` demonstra domínio satisfatório do framework DECIDE, definindo com clareza as perguntas a serem respondidas para as tarefas de aproveitamento de estudos, comunicação e agendamento com coordenador.
- **Fragilidade no Teste-Piloto de Papel**: A vinculação de **YouTube Shorts de 50 segundos** como evidência de um teste-piloto que o texto afirma ter durado 23 minutos e 15 segundos compromete a credibilidade técnica da validação instrumental. Um teste-piloto de protótipo de papel deve registrar a dinâmica física de substituição de cartões, o tempo de reação do simulador e a fluidez do roteiro de tarefas (*Snyder, 2003*).
- **Template Fragmentado de Relato**: Em vez de estruturar um modelo coeso de consolidação dos futuros resultados do protótipo de papel, `planejamento_relato_prototipo_papel.md` replica três propostas isoladas de autores individuais, demandando harmonização prévia antes do início dos testes de campo da Etapa 6.

### 5.3 Governança do Repositório e Higiene Técnica
- **Página Placeholder em Produção**: O artefato `resultados_prototipo_papel.md` publicado com o conteúdo `# Nada a ver aqui, por enquanto.` denota descuido na curadoria do menu do MkDocs Material. Documentos incompletos ou previstos para etapas futuras jamais devem ser indexados na árvore pública de navegação.
- **Vazio nas Revisões por Pares**: A ausência total de preenchimento do campo `Revisor(es)` nas tabelas de contribuição e históricos de versão evidencia que os artefatos foram integrados na branch `main` sem passar por auditoria cruzada prévia de outros membros da equipe.

---

## 6. Resumo e Métricas de Conformidade

A Tabela 4 e a Figura 1 sintetizam o panorama geral de atendimento aos critérios da Etapa 5 pelo Grupo 01.

**Tabela 4** — Resumo dos resultados da avaliação da Etapa 5 (Grupo 01)

| Status de Aferição | Quantidade de Itens | Porcentagem | Itens Correspondentes |
| :--- | :---: | :---: | :--- |
| ✅ **Conforme (Atendido Plenamente)** | 1 | 6,7% | 07 |
| ⚠️ **Incompleto (Atendido Parcialmente)** | 7 | 46,7% | 03, 04, 05, 06, 08, 10, 13 |
| ❌ **Não Conforme (Omissão / Descumprimento)** | 7 | 46,7% | 01, 02, 09, 11, 12, 14, 15 |
| **TOTAL GERAL** | **15** | **100,0%** | **Taxa Ponderada de Conformidade*: 30,0%** |

_Fonte: Elaborada pelos autores (Grupo 08), 2026._  
*\*Critério Ponderado: Conforme = 1,0 ponto; Incompleto = 0,5 ponto; Não Conforme = 0,0 ponto.*

### Distribuição Visual dos 15 Critérios da Etapa 5

<div class="dp-checklist-summary">
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">✅ Atendido Plenamente</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-ok" style="width:6.7%">1 / 15 (6,7%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">⚠️ Atendido Parcialmente</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-warn" style="width:46.7%">7 / 15 (46,7%)</div></div>
  </div>
  <div class="dp-bar-wrap">
    <div class="dp-bar-label">❌ Não Atendido / Omissão</div>
    <div class="dp-bar-track"><div class="dp-bar-fill dp-bar-fail" style="width:46.7%">7 / 15 (46,7%)</div></div>
  </div>
</div>

<p style="font-size: 0.85rem; color: var(--dp-muted); text-align: center;"><strong>Figura 1</strong> — Distribuição percentual da conformidade da Etapa 5 do Grupo 01. <em>Fonte: Autores (Grupo 08), 2026.</em></p>

### Cálculo da Taxa Ponderada de Conformidade Técnica:

!!! note "Cálculo da Taxa Ponderada de Conformidade Técnica"
    Adotando a ponderação acadêmica de **1,0** para critérios atendidos plenamente (*Sim*), **0,5** para critérios com lacunas (*Incompleto*) e **0,0** para critérios desatendidos (*Não*):

    **Taxa Ponderada** = [(1 × 1,0) + (7 × 0,5) + (7 × 0,0)] ÷ 15 = 4,5 ÷ 15 = **30,0%**

---

## 7. Inconsistências Relevantes e Riscos de Engenharia de IHC

1. **Inexistência de Registro Audiovisual Oficial da Equipe na Etapa 5**: Impede a banca docente de aferir o alinhamento conceitual síncrono dos discentes e o domínio dos resultados de Nível 1.
2. **Ausência do Arquivo em PDF Padronizado**: Inviabiliza a validação direta da entrega acadêmica nos termos solicitados na plataforma institucional.
3. **Incongruência Temporal no Teste-Piloto de Papel**: Afirmação de uma sessão de 23 minutos ilustrada por vídeos curtos de 50 segundos no formato YouTube Shorts.
4. **Página de Rascunho (`resultados_prototipo_papel.md`) Publicada em Produção**: Quebra de acabamento e profissionalismo na Wiki pública.
5. **Falta de Padronização na Matriz de Severidade**: Dificulta a priorização objetiva dos problemas de usabilidade que devem guiar o reprojeto físico do protótipo de papel e a transição para a alta fidelidade (Nível 3).

---

## 8. Recomendações Prioritárias para Ajustes Pós-Feedback

O Grupo 08 recomenda que o Grupo 01 execute os seguintes ajustes com máxima prioridade:

1. **Gravação Imediata da Apresentação Oficial da Etapa 5**: Reunir os integrantes da equipe para gravar a defesa síncrona dos artefatos da Etapa 5 (20 a 30 minutos) e incorporá-la na Wiki pública;
2. **Geração e Anexo do Relatório em PDF Padronizado**: Compilar o relatório da Etapa 5 e salvá-lo no repositório com a nomenclatura `PlajRelatoStoryBoarProtPapeldTeams.pdf` ou `PlajRelatoStoryBoarProtPapeldMicrosoftTeams.pdf`;
3. **Refilmar o Teste-Piloto Completo do Protótipo de Papel**: Gravar uma sessão integral (formato horizontal, demonstrando o Facilitador, o Computador Humano e a troca de componentes de papel) comprovando a viabilidade do percurso;
4. **Remover a Página Placeholder do Menu**: Retirar `resultados_prototipo_papel.md` da configuração do `mkdocs.yml` até que os testes reais da Etapa 6 sejam conduzidos e relatados;
5. **Unificar os Relatos de Nível 1 e o Template de Relato de Nível 2**: Consolidar os arquivos concorrentes de Evellyn, Lucas e João em documentos únicos e coesos da equipe, padronizando a classificação de severidade de Nielsen (0 a 4);
6. **Preencher os Revisores Reais e Atualizar o Cronograma Executado**: Designar os revisores nas tabelas de contribuição e registrar as datas reais de execução em `cronograma_executado.md`.

---

## 9. Histórico de Versão

A Tabela 5 documenta o histórico de versões e auditorias deste artefato técnico.

**Tabela 5** — Histórico de Versão do Documento

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 26/10/2026 | Elaboração inicial da auditoria formal da Etapa 5 do Grupo 01 (Microsoft Teams), matriz de 15 critérios objetivos, diagnóstico de falhas críticas, resumo gráfico e geração do PDF padronizado. | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |

_Fonte: Elaborada pelos autores (Grupo 08), 2026._

---

## 10. Referências Bibliográficas (ABNT)

[1] ANNETT, John. Hierarchical Task Analysis. In: HOLLNAGEL, Erik (Ed.). *Handbook of Cognitive Task Design*. Mahwah: Lawrence Erlbaum Associates, 2003. p. 17-35.

[2] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. Rio de Janeiro: Elsevier, 2010.

[3] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. *Interação Humano-Computador e Experiência do Usuário*. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.

[4] FAGAN, Michael E. Design and code inspections to reduce errors in program development. *IBM Systems Journal*, v. 15, n. 3, p. 182-211, 1976.

[5] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[6] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann Publishers, 1994.

[7] PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. *Interaction Design: Beyond Human-Computer Interaction*. New York: John Wiley & Sons, 2002.

[8] RETTIG, Marc. Prototyping for tiny fingers. *Communications of the ACM*, v. 37, n. 4, p. 21-27, 1994.

[9] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano-Computador*. Faculdade UnB Gama (FGA), Universidade de Brasília (UnB), 2026.

[10] SNYDER, Carolyn. *Paper Prototyping: The Fast and Easy Way to Design and Refine User Interfaces*. San Francisco: Morgan Kaufmann Publishers, 2003.

---

## Agradecimentos e Declaração de Uso de IA Generativa

Em cumprimento às diretrizes éticas da Sociedade Brasileira de Computação (SBC) e às normas da disciplina (*Sales, 2026*), declara-se que durante a elaboração deste artefato foram utilizados recursos supervisionados de Inteligência Artificial Generativa exclusivamente para auxílio na formatação sintática de tabelas e geração de diagramas em HTML/CSS. Toda a conferência empírica das URLs, análise crítica dos documentos-fonte do Grupo 01, diagnóstico técnico e redação das recomendações foram concebidos, auditados e validados integralmente pelos discentes autores do Grupo 08.

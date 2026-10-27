# Avaliação do Grupo +1 — Grupo 01 (Microsoft Teams)

## Tabela de Contribuição e Transparência de IA Generativa

A Tabela 1 apresenta a distribuição de responsabilidades e as ferramentas utilizadas pelos discentes do Grupo 08 na concepção e manutenção deste Hub Central de Verificação do Grupo 01.

**Tabela 1** — Matriz de Contribuição do Hub Central de Verificação do Grupo 01

| Integrante | Atribuição no Artefato | Data | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :---: | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Tech Lead / Auditor Principal**: Concepção metodológica, estruturação da arquitetura modularizada (ADR-07), consolidação comparativa das Etapas 3 e 5 e redação técnica | 26/10/2026 | Antigravity (LLM) | Apoio na estruturação Markdown e alinhamento de referências ABNT |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Auditor Técnico**: Auditoria de governança, repositório, cronograma e Nível 1; co-apresentador das inspeções em vídeo | 26/10/2026 | Antigravity (LLM) | Apoio na checagem tabular e links funcionais |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Auditor Técnico**: Revisão técnica consolidada das auditorias, verificação dos artefatos de Nível 2 e cálculo das métricas ponderadas | 26/10/2026 | — | Auditoria humana cruzada e validação de consistência |

_Fonte: Elaborada pelos autores (Grupo 08), 2026._

---

## 1. Introdução e Contextualização Metodológica

Este documento constitui o **Hub Central de Verificação e Auditoria Técnica do Grupo +1 (Grupo 01 — Microsoft Teams)**, conduzida pelos discentes do **Grupo 08** na disciplina de Interação Humano-Computador (FGA0173 — Turma 01), ministrada pelo Prof. Dr. André Barros de Sales na Faculdade de Ciências e Tecnologias em Engenharia (FCTE/FGA) da Universidade de Brasília (UnB).

A sistemática pedagógica da disciplina estabelece uma avaliação cíclica entre pares, na qual cada equipe audita formalmente o grupo sucessor na escala (Grupo N avalia Grupo N + 1). Dessa forma, cabe ao Grupo 08 a responsabilidade de auditar minuciosamente os artefatos produzidos pelo **Grupo 01**, cujo objeto de estudo é a plataforma [Microsoft Teams](https://www.microsoft.com/pt-br/microsoft-teams/group-chat-software).

As inspeções são norteadas pelo método formal de inspeção por listas de verificação (*Checklists* Normativos) fundamentado na técnica clássica de **Michael E. Fagan (1976)**, combinando critérios estritos de governança e padronização acadêmica extraídos do Plano de Ensino da disciplina (*Sales, 2026*) com o rigor conceitual da literatura canônica de IHC (*Barbosa et al., 2021; Mayhew, 1999; Nielsen, 1994; Snyder, 2003*). O objetivo central desta iniciativa é fornecer um diagnóstico técnico rigoroso, transparente e construtivo que subsidie as correções e o aprimoramento contínuo do projeto do Grupo 01 ao longo de todo o semestre letivo.

_Autor do Item Teórico: [Vinicius Silva Araruna](https://github.com/ViniciusA05)_  
*(Fundamentação teórica de inspeção formal em Fagan, 1976 e Barbosa & Silva, 2021).*

---

## 2. Síntese das Auditorias Realizadas

A Tabela 2 apresenta o panorama cronológico e consolidado de todas as etapas do Grupo 01 avaliadas pelo Grupo 08, reunindo as versões avaliadas, as métricas de conformidade obtidas e os acessos diretos aos relatórios detalhados, vídeos de apresentação e arquivos em PDF padronizados.

**Tabela 2** — Matriz consolidada das auditorias do Grupo 01 (Grupo +1)

| Etapa Avaliada | Data da Avaliação | Versão / Commit Avaliado | Conformidade Geral | Relatório Completo | Apresentação em Vídeo | Relatório Oficial em PDF |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Etapa 3**<br>*(Princípios, Metas, Guia de Estilo e Características)* | 10/10/2026 | Commit `f0c8a2f`<br>*(06/10/2026)* | **16,7% Pleno**<br>44,4% Parcial<br>38,9% Não Conforme<br>*(Taxa Ponderada: 38,9%)* | [Acessar Relatório da Etapa 3](grupo01-etapa3.md) | [:material-youtube: Assistir (lttsLbInYaM)](https://youtu.be/lttsLbInYaM) | [:material-file-pdf-box: Baixar PDF](../assets/relatorios/InspecçãoGrupomais1Projeto PrincGeraisMetasUsabGuiaEstiloSite.pdf) |
| **Etapa 5**<br>*(Relatos de Nível 1 e Planejamento do Protótipo de Papel)* | 26/10/2026 | Commit `10a7c3d`<br>*(25/10/2026)* | **6,7% Pleno**<br>46,7% Parcial<br>46,7% Não Conforme<br>*(Taxa Ponderada: 30,0%)* | [Acessar Relatório da Etapa 5](grupo01-etapa5.md) | [:material-youtube: Assistir (QjAnF0_ooT8)](https://youtu.be/QjAnF0_ooT8) | [:material-file-pdf-box: Baixar PDF](../assets/relatorios/PlajRelatoStoryBoarProtPapeldMicrosoftTeams.pdf) |

_Fonte: Elaborada pelos autores (Grupo 08), 2026._

---

## 3. Navegação Rápida pelos Relatórios de Inspeção

Para facilitar a consulta dos avaliadores, do professor e dos próprios integrantes do Grupo 01, os relatórios de cada etapa estão estruturados em páginas dedicadas com riqueza analítica, gráficos e planos de ação.

### 3.1 Etapa 3 — Análise de Requisitos (Princípios, Metas de Usabilidade e Guia de Estilo)

A auditoria da Etapa 3 examinou 18 critérios do Plano de Ensino da disciplina, abrangendo os artefatos de características da plataforma, princípios gerais de projeto, metas de usabilidade e guia de estilo de Mayhew (1999).

- **Status Geral**: 3 itens Conformes (16,7%), 8 Incompletos (44,4%) e 7 Não Conformes (38,9%), atingindo **Taxa Ponderada de 38,9%**.
- **Principais Destaques Positivos**:
    - Guia de Estilo de altíssima qualidade técnica, com paleta testada na WCAG 2.2 e grid modular de 4 px;
    - Matriz de metas de usabilidade com faixas numéricas de aceitação bem fundamentadas e ancoradas no SUS.
- **Problemas Críticos Identificados**:
    - Ausência do vídeo oficial da apresentação da Etapa 3 e inexistência de atas de reunião da etapa;
    - Cronograma executado abandonado mantendo pendências e resíduos do projeto Oppia;
    - Omissão completa das Metas de Experiência do Usuário (UX) de Rogers, Sharp & Preece (2013);
    - Ausência de revisão por pares registrada em 100% dos artefatos.

[:material-arrow-right-circle: **Consultar o Relatório Completo da Etapa 3**](grupo01-etapa3.md){ .md-button .md-button--primary }

---

### 3.2 Etapa 5 — Relatos de Resultados de Nível 1 e Planejamento do Protótipo de Papel (Nível 2)

A auditoria da Etapa 5 examinou 15 critérios pedagógicos e metodológicos, abrangendo a conclusão formativa de baixa fidelidade (Storyboards e HTA) e a esteira de prototipação em papel.

- **Status Geral**: 1 item Conforme (6,7%), 7 Incompletos (46,7%) e 7 Não Conformes (46,7%), atingindo **Taxa Ponderada de 30,0%**.
- **Principais Destaques Positivos**:
    - Estruturação completa do planejamento do protótipo de papel pelo framework DECIDE de Barbosa e Silva (2021);
    - Teste-piloto de HTA conduzido por Evellyn Rocha com declaração explícita de isolamento dos dados e transcrição síncrona.
- **Problemas Críticos Identificados**:
    - **Ausência do Vídeo da Apresentação Oficial da Etapa 5**: O grupo não gravou nem publicou a apresentação da equipe;
    - **Inexistência do Relatório em PDF Padronizado** (`PlajRelatoStoryBoarProtPapeldTeams.pdf`);
    - **Discrepância Temporal no Teste-Piloto de Papel**: O texto alega sessão de 23m15s, mas os links disponibilizados são YouTube Shorts de 50 segundos;
    - **Fragmentação da Equipe**: Relatos desmembrados em arquivos concorrentes sem síntese ou priorização integrada;
    - **Página de Rascunho no Menu Público**: `resultados_prototipo_papel.md` publicada com `# Nada a ver aqui, por enquanto.`;
    - **Ausência Total de Revisão por Pares**: Coluna de revisor vazia em todos os documentos da etapa.

[:material-arrow-right-circle: **Consultar o Relatório Completo da Etapa 5**](grupo01-etapa5.md){ .md-button .md-button--primary }

---

## 4. Histórico de Versão

A Tabela 3 documenta o histórico de manutenção e modularização deste Hub Central.

**Tabela 3** — Histórico de Versão do Documento

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 10/10/2026 | Elaboração inicial da auditoria da Etapa 3 do Grupo 01 e publicação do relatório. | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) | [Gustavo Antonio](https://github.com/gus-ant) |
| `2.0` | 26/10/2026 | Modularização arquitetural do Hub Central de Verificação do Grupo 01 (ADR-07): segregação da Etapa 3 para página própria, incorporação da síntese da Etapa 5 e atualização da matriz de conformidade. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |

_Fonte: Elaborada pelos autores (Grupo 08), 2026._

---

## 5. Referências Bibliográficas (ABNT)

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. *Interação Humano-Computador e Experiência do Usuário*. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.

[2] FAGAN, Michael E. Design and code inspections to reduce errors in program development. *IBM Systems Journal*, v. 15, n. 3, p. 182-211, 1976.

[3] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[4] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann Publishers, 1994.

[5] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano-Computador*. Faculdade UnB Gama (FGA), Universidade de Brasília (UnB), 2026.

[6] SNYDER, Carolyn. *Paper Prototyping: The Fast and Easy Way to Design and Refine User Interfaces*. San Francisco: Morgan Kaufmann Publishers, 2003.

---

## Agradecimentos e Declaração de Uso de IA Generativa

O processo de estruturação deste Hub Central contou com apoio supervisionado de Inteligência Artificial Generativa exclusivamente para auxílio na formatação sintática de Markdown. Todas as análises críticas, métricas consolidadas e deliberações técnicas foram elaboradas, verificadas e validadas integralmente pelos discentes do Grupo 08.

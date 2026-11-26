# Relatório de Inspeção e Autoavaliação: Grupo 08

## Tabela de Contribuição e Transparência de IA Generativa

A **Tabela 0** apresenta a distribuição nominal de responsabilidades, hiperligações e declaração de uso de Inteligência Artificial Generativa na estruturação modular e condução formal da autoavaliação do Grupo 08, em conformidade com o Plano de Ensino (*Sales, 2026, pp. 3, 9, Itens 10 e 11*) e o Código de Conduta da SBC.

**Tabela 0:** Matriz de Contribuição do Hub Central de Autoavaliação do Grupo 08

| Integrante | Contribuição no Artefato | Data | Horário | Ferramenta de IA e Propósito de Uso | Hiperligação |
| :--- | :--- | :---: | :---: | :--- | :---: |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Modularização arquitetural da autoavaliação, formalização dos papéis de autoinspeção e das 6 fases de Fagan (1976), síntese da Tarefa 1 (`CF01`) + Bloco Geral e catálogo de 16 listas (`414` itens) | 22–24/11/2026 | 17:30 - 23:30 | Google Gemini (LLM): apoio na estruturação tabular e modularização Markdown sob curadoria discente. | [Seção 2](#2-aplicacao-das-6-fases-e-papeis-da-inspecao-de-fagan-1976) / [Tarefa 1](tarefa-1-vinicius.md) |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | Auditoria rigorosa dos 87 arquivos Markdown (`134` critérios E1–E8), execução dos retrabalhos `RW-01` a `RW-12`, síntese da Tarefa 2 (`CF02`) e revisão cruzada | 19–24/11/2026 | 14:00 - 18:30 | Google Gemini e Antigravity: apoio na varredura sintática, diagramação de tabelas e barras HTML/CSS. | [Entregas 1–8](entregas-1-a-8.md) / [Tarefa 2](tarefa-2-gustavo.md) |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Autoria da Lista 15 (Verificação, Validação e Fagan), conferência da Tarefa 3 (`CF03`) e revisão cruzada por pares | 19–24/11/2026 | 19:00 - 21:00 | OpenAI Codex e ChatGPT: apoio na revisão ortográfica e verificação estrutural. | [Auditoria 414 Itens](auditoria-414-itens.md) / [Tarefa 3](tarefa-3-edvaldo.md) |

_Legenda de siglas: `IA` (Inteligência Artificial), `SBC` (Sociedade Brasileira de Computação), `LLM` (Large Language Model / Modelo de Linguagem de Grande Porte), `CF01` (Caso/Fluxo Funcional 01), `CF02` (Caso/Fluxo Funcional 02), `CF03` (Caso/Fluxo Funcional 03), `E1–E8` (Entregas 1 a 8), `RW` (Rework / Retrabalho), `HTML` (HyperText Markup Language) e `CSS` (Cascading Style Sheets)._  
_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 1. Introdução e Arquitetura Modular

Este portal constitui o **Hub Central de Inspeção e Autoavaliação Formal do Grupo 08** (*Redesign do Fórum Diolinux Plus*), organizado em arquitetura modular por escopo e tarefa. A autoavaliação combina dois níveis complementares de verificação sobre os **87 arquivos Markdown** e **8 entregas** do repositório:

1. **Auditoria Histórica por Entregas (E1 a E8):** verificação dos **134 critérios** do Plano de Ensino (*Sales, 2026*), consolidando os **12 retrabalhos executados (`RW-01` a `RW-12`)** e os **6 defeitos transparentes (`DEF-01` a `DEF-06`)** em [Entregas 1 a 8](entregas-1-a-8.md);
2. **Auditoria Multi-Escopo pelas 16 Listas de Verificação por Artefato:** aplicação dos **414 itens** (`394` critérios normativos + `20` questões teóricas DECIDE) das [16 Listas de Verificação](../listas/index.md) sobre a branch `main` (`commit a4d176d`), segmentando o **Bloco Geral** e cada uma das **3 Tarefas Individuais** (`CF01` Vinicius, `CF02` Gustavo, `CF03` Edvaldo) em [Auditoria Global (414 Itens)](auditoria-414-itens.md) e nas páginas individuais dedicadas.

!!! info "Relatório Oficial em PDF da Autoinspeção Global da Etapa 8 (Grupo 08)"
    O relatório analítico consolidado em PDF desta autoinspeção contém a versão explícita das **16 Listas de Verificação (`v1.0` a `v2.2`, Catálogo `v1.2/v1.3` em `a4d176d`)**, o comparativo entre o **Bloco Geral** e as **Tarefas 1, 2 e 3** e o plano de ação até o Projeto Final (`30/11/2026`), disponível para download direto:

    [:material-file-pdf-box: **Baixar Relatório Oficial: Grupo08VerificacaoArtefatosEtapa8DiolinuxPlus.pdf**](../../assets/relatorios/Grupo08VerificacaoArtefatosEtapa8DiolinuxPlus.pdf){ .md-button .md-button--primary }

---

## 2. Aplicação das 6 Fases e Papéis da Inspeção de Fagan (1976)

A inspeção interna do Grupo 08 segue formalmente o método de **Inspeção de Software de Michael E. Fagan (1976)**, com definição explícita dos **4 papéis canônicos** (Autor, Moderador, Leitor e Inspetor) e rastreabilidade integral de cada uma das **6 fases sequenciais**.

### 2.1 Matriz de Papéis de Fagan: Autoinspeção Individual por Tarefa

A **Tabela 1** explicita a atribuição nominal dos papéis de Fagan na modalidade de autoinspeção individual estruturada por tarefa.

**Tabela 1:** Matriz de papéis de Fagan (1976) aplicados à autoinspeção do Grupo 08

| Escopo Inspecionado (Grupo 08) | Autor | Moderador | Leitor | Inspetor | Modalidade |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Bloco Geral + Tarefa 1 (`CF01`)** | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Autoinspeção Estruturada (Tarefa 1) |
| **Tarefa 2 (`CF02`)** | [Gustavo Antonio](https://github.com/gus-ant) | [Gustavo Antonio](https://github.com/gus-ant) | [Gustavo Antonio](https://github.com/gus-ant) | [Gustavo Antonio](https://github.com/gus-ant) | Autoinspeção Estruturada (Tarefa 2) |
| **Tarefa 3 (`CF03`)** | [Edvaldo Soares](https://github.com/PajeMurici-dev) | [Edvaldo Soares](https://github.com/PajeMurici-dev) | [Edvaldo Soares](https://github.com/PajeMurici-dev) | [Edvaldo Soares](https://github.com/PajeMurici-dev) | Autoinspeção Estruturada (Tarefa 3) |

_Legenda de siglas: `CF01` (Caso/Fluxo Funcional 01: Tópico com Markdown, Tags e IA Semântica), `CF02` (Caso/Fluxo Funcional 02: Eventos Presenciais da Comunidade) e `CF03` (Caso/Fluxo Funcional 03: Grade de Disponibilidade e Agendamento)._  
_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna com base em Fagan (1976), 2026._

!!! note "Nota Metodológica: Adaptação de Fagan (1976) para Autoinspeção Individual e Salvaguardas contra Viés"
    Na formulação original de **Fagan (1976)**, os quatro papéis são segregados entre pessoas distintas para evitar viés de confirmação (*confirmation bias*). No escopo interno do Grupo 08, devido à partição autoral por funcionalidade (`CF01`, `CF02`, `CF03`) e à exigência de gravação individual da inspeção por integrante, cada autor assume os quatro papéis sobre a própria frente de trabalho. Para preservar o rigor científico e garantir independência objetiva na detecção de falhas, a equipe aplica **três salvaguardas explícitas**:

    1. **Critérios Normativos Fechados:** a avaliação é vinculada item a item às 16 listas (`414` critérios) e aos `134` critérios do Plano de Ensino, exigindo evidência factual explícita publicada no GitHub Pages (zero aprovação subjetiva);
    2. **Separação Temporal Estrita (Fase 4 ≠ Fase 5):** todos os defeitos remanescentes (`DEF-02` a `DEF-05`, `PR-01`) são primeiramente expostos e gravados em vídeo sobre a versão *pré-rework* na Fase 4, e somente corrigidos após a gravação na etapa de retrabalho da Fase 5;
    3. **Acompanhamento Determinístico (Fase 6):** o fechamento exige validação automatizada com `python -m mkdocs build --strict` (código 0), conferência objetiva *Pré vs. Pós-Rework* e verificação nas auditorias inter-grupos ([Grupo 07](../grupo07/index.md) e [Grupo 01](../grupo01/index.md)), onde a segregação de papéis é plena por se tratarem de autores externos ao Grupo 08.

### 2.2 Mapeamento das 6 Fases de Fagan (1976)

A **Tabela 2** detalha onde e de que forma cada uma das 6 fases canônicas de Fagan (1976) é executada no ciclo de verificação do Grupo 08.

**Tabela 2:** Execução detalhada das 6 fases da Inspeção Formal de Fagan (1976) no Grupo 08

| # | Fase de Fagan (1976) | Como foi / será aplicada no Grupo 08 | Responsáveis | Status Atual | Evidência Rastreável |
| :-: | :--- | :--- | :--- | :---: | :--- |
| **1** | **Planejamento (*Planning*)** | Seleção dos 87 artefatos-alvo na `main`, congelamento do Catálogo de 16 Listas (`v1.0` a `v2.2`, `414` itens), definição dos critérios de entrada/saída e alocação nominal dos papéis. | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) | ✅ **Concluída** *(22/11)* | [Catálogo de Listas](../listas/index.md) e [Cronograma Planejado](../../planejamento/cronograma-planejado.md) |
| **2** | **Visão Geral (*Overview*)** | Alinhamento síncrono da equipe sobre a arquitetura do repositório, partição modular (`CF01`–`CF03`) e protocolo de navegação ao vivo no GitHub Pages durante as inspeções. | Equipe Grupo 08 | ✅ **Concluída** *(19–24/11)* | [Ata 8](../../atas/ata8.md) e plano de divisão por tarefa |
| **3** | **Preparação (*Preparation*)** | Leitura individual prévia dos artefatos publicados no GitPages frente às 16 listas normativas, levantando o estado real de cada critério (`✅`/`⚠️`/`❌`), versões e defeitos antes das gravações. | Cada integrante na sua frente | ✅ **Concluída** *(22–24/11)* | [Auditoria 414 Itens](auditoria-414-itens.md) e páginas individuais (`tarefa-1..3.md`) |
| **4** | **Reunião de Inspeção (*Inspection Meeting*)** | Sessões individuais gravadas percorrendo os artefatos reais no GitPages (**versão pré-rework**), lendo e registrando os defeitos constatados sem corrigi-los durante a inspeção. | Vinicius (T1), Gustavo (T2), Edvaldo (T3) | 🔄 **Em andamento** *(25–27/11)* | 3 vídeos individuais (YouTube Não Listado) e marcações de tempo em `tarefa-1..3.md` |
| **5** | **Retrabalho (*Rework*)** | Correção dos defeitos apontados na Fase 4 pelos respectivos autores em branches dedicadas, com incremento da versão semântica no Histórico de cada artefato alterado. | Vinicius (Geral/T1), Edvaldo (T3), Gustavo (`RW-01..12` concluídos) | ⏳ **Aguardando Fase 4** | Pull Requests de saneamento integrados na `develop` e `RW-01..12` em [Entregas 1–8](entregas-1-a-8.md) |
| **6** | **Acompanhamento (*Follow-up*)** | Conferência final do fechamento dos defeitos, compilação limpa via `python -m mkdocs build --strict`, atualização das métricas *Pré vs. Pós-Rework*, regeração do PDF oficial e retroalimentação dos vídeos. | Equipe Grupo 08 | ⏳ **Aguardando Fase 5** | Tabela *Pré vs. Pós-Rework*, validação de build e PDF oficial atualizado |

_Legenda de siglas: `CF01–CF03` (Casos/Fluxos Funcionais 01 a 03), `T1–T3` (Tarefas Individuais 1 a 3), `RW` (Rework / Retrabalho) e `PDF` (Portable Document Format)._  
_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna com base em Fagan (1976), 2026._

---

## 3. Navegação Modular pelos Relatórios do Grupo 08

A **Tabela 3** indexa as subpáginas que compõem a autoavaliação modular do Grupo 08.

**Tabela 3:** Mapa de navegação modular da autoavaliação do Grupo 08

| Módulo | Escopo e Conteúdo | Acesso Direto |
| :--- | :--- | :---: |
| **Entregas 1 a 8 e Retrabalhos** | Auditoria histórica dos `134` critérios do Plano de Ensino, registro dos retrabalhos `RW-01..12`, defeitos `DEF-01..06`, gráficos por entrega (`70,1% → 84,3%`) e Matriz de IA | [:material-file-document-outline: Acessar Entregas 1–8](entregas-1-a-8.md) |
| **Auditoria Global (414 Itens)** | Aplicação exaustiva das 16 Listas de Verificação (`00` a `15`) na branch `main` (`a4d176d`) comparando `Geral × T1 × T2 × T3` + autovalidação `DG-01..11` | [:material-format-list-checks: Acessar 414 Itens](auditoria-414-itens.md) |
| **Tarefa 1: Vinicius (`CF01` + Geral)** | Visão dedicada à Tarefa 1 (*Tópico Markdown, Tags e IA*) e Bloco Geral (`93,1%` / `96,4%`), defeitos abertos para retrabalho e registro audiovisual | [:material-account-check: Acessar Tarefa 1](tarefa-1-vinicius.md) |
| **Tarefa 2: Gustavo (`CF02`)** | Visão dedicada à Tarefa 2 (*Eventos Presenciais*, `92,2%` / `96,0%`), retrabalhos `RW-01..12`, lacunas remanescentes e registro audiovisual | [:material-account-check: Acessar Tarefa 2](tarefa-2-gustavo.md) |
| **Tarefa 3: Edvaldo (`CF03`)** | Visão dedicada à Tarefa 3 (*Grade de Agendamento*, `89,2%` / `93,9%`), defeitos abertos (`DEF-02`, imagens N2, resíduos N1) e registro audiovisual | [:material-account-check: Acessar Tarefa 3](tarefa-3-edvaldo.md) |

_Legenda de siglas: `RW` (Rework / Retrabalho), `DEF` (Defeito Aberto), `IA` (Inteligência Artificial), `T1–T3` (Tarefas 1 a 3), `DG` (Desenvolvimento e Governança Geral), `CF01–CF03` (Casos/Fluxos Funcionais 01 a 03), `N1` (Nível 1 de Mayhew) e `N2` (Nível 2 de Mayhew)._  
_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 4. Quadro-Síntese Comparativo e Versões das 16 Listas

A **Tabela 4** consolida as métricas globais da auditoria na branch `main` (`commit a4d176d`), enquanto a **Tabela 5** discrimina o desempenho e a versão semântica de cada uma das **16 Listas de Verificação por Artefato** aplicadas (`Catálogo v1.2/v1.3`).

**Tabela 4:** Síntese estatística por escopo auditado no Grupo 08 (`main` @ `a4d176d`)

| Escopo Auditado (`Grupo 08` @ `a4d176d`) | Total de Itens | Aplicáveis | ✅ Conforme | ⚠️ Incompleto | ❌ Não Conforme | ➖ N/A | Taxa Estrita (`Sim / Aplic.`) | Taxa Ponderada (`(Sim + 0,5×Inc) / Aplic.`) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Bloco Geral / Coletivo do Repositório** | 414 | 400 | **371** | 28 | 1 | 14 | 92.8% | **96.2%** |
| **[Tarefa 01 (`CF01`: Vinicius Silva Araruna)](tarefa-1-vinicius.md)** | 414 | 390 | **363** | 26 | 1 | 24 | 93.1% | **96.4%** |
| **[Tarefa 02 (`CF02`: Gustavo Antonio Rodrigues e Silva)](tarefa-2-gustavo.md)** | 414 | 400 | **369** | 30 | 1 | 14 | 92.2% | **96.0%** |
| **[Tarefa 03 (`CF03`: Edvaldo Soares Brasileiro Filho)](tarefa-3-edvaldo.md)** | 414 | 400 | **357** | 37 | 6 | 14 | 89.2% | **93.9%** |

_Legenda de siglas: `CF01–CF03` (Casos/Fluxos Funcionais 01 a 03), `N/A` (Não Aplicável), `Aplic.` (Total de Itens Aplicáveis) e `Inc` (Incompleto)._  
_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

**Tabela 5:** Desempenho detalhado e versão de cada Lista de Verificação (`00` a `15`)

| Lista de Verificação e Versão | Itens | Geral (Estrita / Pond.) | Tarefa 1: Vinicius (`CF01`) | Tarefa 2: Gustavo (`CF02`) | Tarefa 3: Edvaldo (`CF03`) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **[Lista 00](../listas/00-plano-ensino-geral.md)** (`00-plano-ensino-geral.md`, **`v1.0`**) | 22 | 19/22 (86.4% / **93.2%**) | 19/22 (86.4% / **93.2%**) | 19/22 (86.4% / **93.2%**) | 19/22 (86.4% / **93.2%**) |
| **[Lista 01](../listas/01-storyboard.md)** (`01-storyboard.md`, **`v2.0`**) | 24 | 23/24 (95.8% / **97.9%**) | 23/24 (95.8% / **97.9%**) | 23/24 (95.8% / **97.9%**) | 21/24 (87.5% / **93.8%**) |
| **[Lista 02](../listas/02-cenarios.md)** (`02-cenarios.md`, **`v2.1`**) | 20 | 15/20 (75.0% / **87.5%**) | 15/20 (75.0% / **87.5%**) | 14/20 (70.0% / **85.0%**) | 14/20 (70.0% / **85.0%**) |
| **[Lista 03](../listas/03-perfil-usuario.md)** (`03-perfil-usuario.md`, **`v2.2`**) | 98 | 84/90 (93.3% / **96.7%**) | 84/90 (93.3% / **96.7%**) | 84/90 (93.3% / **96.7%**) | 84/90 (93.3% / **96.7%**) |
| **[Lista 04](../listas/04-planejamento-decide.md)** (`04-planejamento-decide.md`, **`v2.2`**) | 55 | 53/55 (96.4% / **98.2%**) | 54/55 (98.2% / **99.1%**) | 52/55 (94.5% / **97.3%**) | 49/55 (89.1% / **91.8%**) |
| **[Lista 05](../listas/05-swebok.md)** (`05-swebok.md`, **`v2.1`**) | 10 | 10/10 (100.0% / **100.0%**) | 10/10 (100.0% / **100.0%**) | 10/10 (100.0% / **100.0%**) | 10/10 (100.0% / **100.0%**) |
| **[Lista 06](../listas/06-resultado-avaliacao.md)** (`06-resultado-avaliacao.md`, **`v1.1`**) | 11 | 10/11 (90.9% / **95.5%**) | 10/11 (90.9% / **95.5%**) | 9/11 (81.8% / **90.9%**) | 6/11 (54.5% / **77.3%**) |
| **[Lista 07](../listas/07-metodos-avaliacao.md)** (`07-metodos-avaliacao.md`, **`v2.1`**) | 22 | 16/16 (100.0% / **100.0%**) | 16/16 (100.0% / **100.0%**) | 16/16 (100.0% / **100.0%**) | 16/16 (100.0% / **100.0%**) |
| **[Lista 08](../listas/08-elenco-personas.md)** (`08-elenco-personas.md`, **`v2.0`**) | 7 | 6/7 (85.7% / **92.9%**) | 6/7 (85.7% / **92.9%**) | 6/7 (85.7% / **92.9%**) | 6/7 (85.7% / **92.9%**) |
| **[Lista 09](../listas/09-personas.md)** (`09-personas.md`, **`v2.0`**) | 14 | 10/14 (71.4% / **85.7%**) | 10/14 (71.4% / **85.7%**) | 10/14 (71.4% / **85.7%**) | 10/14 (71.4% / **85.7%**) |
| **[Lista 10](../listas/10-hta.md)** (`10-hta.md`, **`v2.1`**) | 13 | 13/13 (100.0% / **100.0%**) | 13/13 (100.0% / **100.0%**) | 13/13 (100.0% / **100.0%**) | 13/13 (100.0% / **100.0%**) |
| **[Lista 11](../listas/11-ctt.md)** (`11-ctt.md`, **`v2.0`**) | 10 | 10/10 (100.0% / **100.0%**) | 0/0 (100.0% / **100.0%**) | 10/10 (100.0% / **100.0%**) | 10/10 (100.0% / **100.0%**) |
| **[Lista 12](../listas/12-prototipo-papel.md)** (`12-prototipo-papel.md`, **`v2.2`**) | 32 | 30/32 (93.8% / **96.9%**) | 30/32 (93.8% / **96.9%**) | 30/32 (93.8% / **96.9%**) | 29/32 (90.6% / **95.3%**) |
| **[Lista 13](../listas/13-requisitos-plataforma-guia.md)** (`13-requisitos-plataforma-guia.md`, **`v2.0`**) | 41 | 38/41 (92.7% / **95.1%**) | 38/41 (92.7% / **95.1%**) | 38/41 (92.7% / **95.1%**) | 38/41 (92.7% / **95.1%**) |
| **[Lista 14](../listas/14-alta-fidelidade.md)** (`14-alta-fidelidade.md`, **`v2.0`**) | 22 | 21/22 (95.5% / **97.7%**) | 22/22 (100.0% / **100.0%**) | 22/22 (100.0% / **100.0%**) | 19/22 (86.4% / **88.6%**) |
| **[Lista 15](../listas/15-fundamentos-vv-fagan.md)** (`15-fundamentos-vv-fagan.md`, **`v1.0`**) | 13 | 13/13 (100.0% / **100.0%**) | 13/13 (100.0% / **100.0%**) | 13/13 (100.0% / **100.0%**) | 13/13 (100.0% / **100.0%**) |
| **TOTAL (16 LISTAS, Catálogo `v1.2/v1.3`)** | **414** | **371/400 (92.8% / 96.2%)** | **363/390 (93.1% / 96.4%)** | **369/400 (92.2% / 96.0%)** | **357/400 (89.2% / 93.9%)** |

_Legenda de siglas: `Pond.` (Taxa Ponderada), `CF01–CF03` (Casos/Fluxos Funcionais 01 a 03), `SWEBOK` (Software Engineering Body of Knowledge), `DECIDE` (Determinar objetivos, Explorar perguntas, Conhecer métodos, Identificar questões práticas, Decidir questões éticas, Avaliar/interpretar dados), `IHC` (Interação Humano-Computador), `HTA` (Hierarchical Task Analysis / Análise Hierárquica de Tarefas), `CTT` (ConcurTaskTrees / Árvores de Tarefas Concorrentes) e `V&V` (Verificação e Validação)._  
_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 5. Registro Audiovisual das Inspeções Individuais (Fase 4 de Fagan)

A **Tabela 6** centraliza os registros audiovisuais das sessões de autoinspeção (Fase 4 de Fagan) divididas por integrante/tarefa sobre a versão pré-rework no GitHub Pages.

**Tabela 6:** Registros audiovisuais de autoinspeção do Grupo 08

| Integrante / Inspetor | Escopo da Inspeção no G08 | Data / Horário | Status | Link do Vídeo (YouTube Não Listado) |
| :--- | :--- | :---: | :---: | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Bloco Geral + Tarefa 1 (`CF01`: Tópico Markdown, Tags e IA) | *A gravar (Fase 4)* | 🔄 **Em preparação** | *A vincular após gravação da Fase 4* |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | Tarefa 2 (`CF02`: Eventos Presenciais) | *A gravar (Fase 4)* | 🔄 **Em preparação** | *A vincular após gravação da Fase 4* |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Tarefa 3 (`CF03`: Grade de Disponibilidade e Agendamento) | *A gravar (Fase 4)* | 🔄 **Em preparação** | *A vincular após gravação da Fase 4* |

_Legenda de siglas: `G08` (Grupo 08), `CF01–CF03` (Casos/Fluxos Funcionais 01 a 03) e `IA` (Inteligência Artificial)._  
_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 6. Histórico de Versão

A **Tabela 7** documenta o histórico evolutivo deste Hub Central de Autoavaliação do Grupo 08.

**Tabela 7:** Histórico de versão do documento

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0`–`6.0` | 13/09–22/11/2026 | Evolução histórica consolidada em `grupo08.md` (Entregas 1 a 8, retrabalhos `RW-01..12` e Auditoria Global de 414 itens em `a4d176d`). | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) | Revisão Circular 360º |
| `7.0` | 24/11/2026 | Modularização da autoavaliação em `docs/verificacao/grupo08/`, separando Entregas 1–8, Auditoria de 414 Itens e páginas individuais por tarefa (`CF01`–`CF03`), e formalização da Matriz de Papéis e das 6 Fases de Fagan (1976). | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |

_Legenda de siglas: `RW` (Rework / Retrabalho) e `CF01–CF03` (Casos/Fluxos Funcionais 01 a 03)._  
_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 7. Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier, 2010.

[2] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[3] FAGAN, Michael E. Design and code inspections to reduce errors in program development. *IBM Systems Journal*, v. 15, n. 3, p. 182-211, 1976.

[4] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[5] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1994.

[6] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador (FGA0173)*. Brasília: Universidade de Brasília, Faculdade UnB Gama (FGA), 2026.

[7] SOCIEDADE BRASILEIRA DE COMPUTAÇÃO (SBC). *Código de Conduta para Pessoas Autoras de Publicações da SBC: Parte II, Art. 2º, §III (Uso de IA Generativa)*. Porto Alegre: SBC, 2023.

[8] WIEGERS, Karl E. *Peer Reviews in Software: A Practical Guide*. Boston: Addison-Wesley, 2002.

---

## 8. Agradecimentos e Declaração de Uso de IA Generativa

Em estrita observância ao Código de Conduta da Sociedade Brasileira de Computação (SBC, Art. 2º, §III) e às normas do Plano de Ensino (*Sales, 2026*), declara-se que durante a modularização estrutural em Markdown e diagramação das tabelas deste Hub utilizou-se apoio computacional de Inteligência Artificial Generativa (Google Gemini / LLM). Toda a definição metodológica dos papéis de autoinspeção, o mapeamento das 6 fases de Fagan (1976), a extração dos quantitativos e a validação integral são de inteira responsabilidade dos autores humanos identificados neste relatório.

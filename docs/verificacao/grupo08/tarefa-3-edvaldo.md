# Autoinspeção da Tarefa 3 (`CF03`): Edvaldo Soares Brasileiro Filho

## Tabela de Contribuição e Transparência de IA Generativa

A **Tabela 0** registra as responsabilidades autorais e o uso supervisionado de Inteligência Artificial Generativa no recorte da **Tarefa 3 (`CF03`)** da autoavaliação do Grupo 08.

**Tabela 0:** Matriz de Contribuição do Recorte da Tarefa 3 (`CF03`)

| Integrante | Contribuição no Artefato | Data | Horário | Ferramenta de IA e Propósito de Uso | Hiperligação |
| :--- | :--- | :---: | :---: | :--- | :---: |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Extração modular do recorte da Tarefa 3 (`CF03`), alinhamento com a Matriz de Papéis e 6 Fases de Fagan e mapeamento de defeitos pré-rework | 24/11/2026 | 17:30 - 18:30 | Google Gemini (LLM): apoio na formatação tabular Markdown sob supervisão humana. | [Seção 3](#3-diagnostico-fatico-pre-rework-e-defeitos-abertos) |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Autoria dos artefatos da Tarefa 3 (`CF03`), preparação da autoinspeção em vídeo e execução do retrabalho na Fase 5 | 22–24/11/2026 | 19:00 - 21:00 | OpenAI Codex e ChatGPT: apoio na revisão textual e organização estrutural. | [Seção 1](#1-papeis-de-fagan-e-escopo-da-autoinspecao) |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | Revisão cruzada por pares e levantamento inicial das pendências na `main` (`a4d176d`) | 24/11/2026 | 18:30 - 19:00 | Nenhuma | [Hub Grupo 08](index.md) |

_Legenda de siglas: `CF03` (Caso/Fluxo Funcional 03), `IA` (Inteligência Artificial) e `LLM` (Large Language Model / Modelo de Linguagem de Grande Porte)._  
_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 1. Papéis de Fagan e Escopo da Autoinspeção

Esta página isola o escopo auditado sob responsabilidade de **Edvaldo Soares Brasileiro Filho** para execução da **Fase 4 (Reunião de Inspeção em vídeo)** antes da execução do retrabalho na **Fase 5**:

- **Autor, Moderador, Leitor e Inspetor (Fagan, 1976):** [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) *(conforme Nota Metodológica de Autoinspeção Estruturada no [Hub Grupo 08](index.md#21-matriz-de-papeis-de-fagan-autoinspecao-individual-por-tarefa))*.
- **Escopo Funcional (`CF03`):** *Grade de Disponibilidade e Agendamento de Horários para Dúvidas e Mentorias com Autores de Tópicos* (Persona: Mariana Costa).
- **Desempenho Atual (Pré-Rework na `main` @ `a4d176d`):** `357` Conformes, `37` Incompletos, `6` Não Conformes e `14` N/A em `400` aplicáveis (**`89,2%` estrita / `93,9%` ponderada**).

---

## 2. Mapa de Artefatos Auditados (Tarefa 3: `CF03`)

A **Tabela 1** reúne os principais artefatos da Tarefa 3 (`CF03`) percorridos durante a inspeção no GitHub Pages.

**Tabela 1:** Artefatos principais da Tarefa 3 (`CF03`) no Grupo 08

| Etapa / Nível | Artefato | Acesso no Portal |
| :--- | :--- | :--- |
| **E1: Planejamento** | Ferramentas e Sites Avaliados | [Ferramentas](../../planejamento/ferramentas.md) · [Sites Avaliados](../../planejamento/sites-avaliados.md) |
| **E2: Requisitos** | Brainstorming, Análise Documental, Perfil 3, Persona 3, Cenário 3, Entrevista P2 e HTA/CTT T3 | [Brainstorming](../../analise-requisitos/brainstorming.md) · [Análise Documental](../../analise-requisitos/analise-documental.md) · [Perfil](../../analise-requisitos/perfil-usuario.md) · [Personas](../../analise-requisitos/personas.md) · [Cenários](../../analise-requisitos/cenarios.md) · [Entrevistas](../../analise-requisitos/entrevistas.md) · [Análise de Tarefas](../../analise-requisitos/analise-tarefas.md) |
| **E3: Requisitos** | Guia de Estilo | [Guia de Estilo](../../analise-requisitos/guia-de-estilo.md) |
| **E4–E5: Nível 1** | Métodos de Avaliação, Storyboard 3 e Relatos N1 | [Métodos de Avaliação](../../design-avaliacao-desenvolvimento/item-teorico-metodos-avaliacao.md) · [Storyboards](../../design-avaliacao-desenvolvimento/storyboards.md) · [Relato Storyboard](../../design-avaliacao-desenvolvimento/nivel-1/storyboard/relato-resultados.md) · [Relato Tarefas](../../design-avaliacao-desenvolvimento/nivel-1/analise-tarefas/relato-resultados.md) |
| **E5–E6: Nível 2** | Planejamento e Relato do Protótipo de Papel T3 (Agendamento) | [Plan. Papel T3](../../design-avaliacao-desenvolvimento/nivel-2/prototipo-papel/planejamento-avaliacao-agendamento.md) · [Relato Papel T3](../../design-avaliacao-desenvolvimento/nivel-2/prototipo-papel/relato-resultados-agendamento.md) |
| **E7: Nível 3** | Protótipo de Alta Fidelidade T3 e Relato AF T3 | [Protótipo AF T3](../../design-avaliacao-desenvolvimento/nivel-3/prototipo-alta-fidelidade-tarefa3.md) · [Relato AF T3](../../design-avaliacao-desenvolvimento/nivel-3/relato-resultados-tarefa3.md) |

_Legenda de siglas: `E1–E7` (Etapas/Entregas 1 a 7), `CF03` (Caso/Fluxo Funcional 03), `P2` (Participante 2), `HTA` (Hierarchical Task Analysis / Análise Hierárquica de Tarefas), `CTT` (ConcurTaskTrees / Árvores de Tarefas Concorrentes), `T3` (Tarefa 3), `N1` (Nível 1 de Mayhew), `AF` (Alta Fidelidade) e `Plan.` (Planejamento)._  
_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 3. Diagnóstico Fático (Pré-Rework) e Defeitos Abertos

### 3.1 Pontos Fortes Verificados
- Modelagem completa em **HTA Canônica** (`Figura 5a/5b`, `Tabela 7`) e **CTT Canônico** (`Figura 6`) em [analise-tarefas.md](../../analise-requisitos/analise-tarefas.md).
- Storyboard 3 com 8 quadros e vídeos de Piloto (`1F409M-E850`) e Avaliação (`gqZ3yJ3ZYUc`), Protótipo de Papel com Piloto (`EJp9UOi7vvo`) e `n = 3` sessões oficiais (`9bIvD6fS8NU`, `A2332bwnapc`, `DVX80C-Fvlc`), e Protótipo de Alta Fidelidade (`T3_F01..T3_F05`) com `n = 3` sessões oficiais (`oq8vuAjaCUM`, `5T8QY_QbhzA`, `byOn3DBegCE`) e SUS médio de `87,5` pontos.

### 3.2 Defeitos e Incompletudes para Gravação na Fase 4 e Correção na Fase 5

A **Tabela 2** lista os defeitos reais presentes na `main` para demonstração na gravação da inspeção (Fase 4) e correção na etapa de retrabalho (Fase 5).

**Tabela 2:** Defeitos e incompletudes abertos na Tarefa 3 (`CF03`)

| ID / Critério | Status Atual | Localização Exata | Defeito Constatado (Pré-Rework) | Encaminhamento (Fase 5: Retrabalho) |
| :--- | :---: | :--- | :--- | :--- |
| **`DEF-02`** (`PE-E4-11`, `DEC-09`, `DEC-E07`, `AF-03`) | ❌ Não Conforme | [relato-resultados-tarefa3.md](../../design-avaliacao-desenvolvimento/nivel-3/relato-resultados-tarefa3.md) (L62, L77, L81, L235) | Link e `<iframe>` do vídeo do Teste-Piloto de Alta Fidelidade apontam para `PILOTO_TAREFA3_PLACEHOLDER`. | Substituir pelo link e player reais do Teste-Piloto de Nível 3 no YouTube. |
| **`DEF-01` (P2)** e **`DEF-06`** | ❌ / ⚠️ | [entrevistas.md](../../analise-requisitos/entrevistas.md) e [cenarios.md](../../analise-requisitos/cenarios.md) | Link `placeholder-entrevista-p2` pendente e Cenário 3 mantendo rótulos `"hipótese a validar"` e revisor `"Pendente"` na `v1.1`. | Vincular vídeo real P2 e atualizar status e revisão do Cenário 3. |
| **`DG-04`, `PP-03`, `PP-E01`, `PP-E02`** | ⚠️ Incompleto | [relato-resultados-agendamento.md](../../design-avaliacao-desenvolvimento/nivel-2/prototipo-papel/relato-resultados-agendamento.md) (L70, L79, L88, L97, L106) | As 5 tags `<img>` sobem apenas 2 níveis (`../../assets/prototipo-papel/`) em vez de 3 (`../../../assets/prototipo-papel/`), além de não haver página isolada `prototipo-papel-tarefa3.md`. | Corrigir caminho relativo das 5 imagens (`../../../assets/prototipo-papel/`) e vincular bancada física T3. |
| **`RA-04`, `RA-06`, `RA-08`, `SB-11`, `STB-08`** | ⚠️ Incompleto | [N1 Análise de Tarefas](../../design-avaliacao-desenvolvimento/nivel-1/analise-tarefas/relato-resultados.md) e [N1 Storyboard](../../design-avaliacao-desenvolvimento/nivel-1/storyboard/relato-resultados.md) | Texto consolidado ainda menciona a antiga Tarefa 3 (*Busca Avançada*), enquanto a tabela de vídeos lista *Grade de Disponibilidade e Agendamento* (`gqZ3yJ3ZYUc`) sem `<iframe>`. | Substituir texto residual da antiga Tarefa 3 e incorporar o `<iframe>` da Sessão 03. |
| **`DEC-07`, `DEC-G03`, `AF-08`** | ⚠️ Incompleto | [N3 Planejamento](../../design-avaliacao-desenvolvimento/nivel-3/planejamento-avaliacao.md) | Tarefa 3 possui objetivos (`Seção 3.3`), mas não possui subseção própria na `Seção 6.2` nem roteiro/cenário na `Seção 8`. | Completar arquitetura de telas (`Seção 6.2`) e roteiro/cenário (`Seção 8`) da T3. |

_Legenda de siglas: `DEF` (Defeito Aberto), `PE-E4` (Plano de Ensino: Etapa 4), `DEC` (Framework DECIDE), `DEC-E` (DECIDE: Critérios da Equipe), `DEC-G` (DECIDE: Critérios Gerais), `AF` (Alta Fidelidade), `P2` (Participante 2), `DG` (Desenvolvimento e Governança Geral), `PP` (Protótipo de Papel), `PP-E` (Protótipo de Papel: Critérios da Equipe), `RA` (Relato da Avaliação), `SB` (Storyboard), `STB` (Storyboard: Critérios Complementares), `N1` (Nível 1 de Mayhew), `N3` (Nível 3 de Mayhew), `T3` (Tarefa 3), `CF03` (Caso/Fluxo Funcional 03) e `L` (Linha do arquivo)._  
_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 4. Registro Audiovisual da Autoinspeção (Fase 4 de Fagan)

A **Tabela 3** registra a sessão gravada da Fase 4 de Fagan para a Tarefa 3 (`CF03`).

**Tabela 3:** Registro audiovisual da autoinspeção da Tarefa 3 (`CF03`)

| Inspetor | Escopo | Data / Horário | Status | Link do Vídeo (YouTube Não Listado) | Marcações de Tempo |
| :--- | :--- | :---: | :---: | :--- | :--- |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Tarefa 3 (`CF03`: Grade de Disponibilidade e Agendamento) | *A preencher pós-gravação* | 🔄 **Em preparação (Fase 4)** | *A vincular após gravação da Fase 4* | *A preencher pós-gravação* |

_Legenda de siglas: `CF03` (Caso/Fluxo Funcional 03)._  
_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, 2026._

---

## 5. Referência Completa de Critérios

Para consultar todos os 414 itens detalhados, acesse a [Auditoria Global (414 Itens)](auditoria-414-itens.md) ou retorne ao [Hub Central do Grupo 08](index.md).

---

## 6. Histórico de Versão

A **Tabela 4** documenta o histórico de versões desta página modular.

**Tabela 4:** Histórico de versão do documento

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 24/11/2026 | Criação da página modular dedicada à autoinspeção da Tarefa 3 (`CF03`: Edvaldo Soares), consolidando papéis de Fagan, artefatos e defeitos pré-rework. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Edvaldo Soares](https://github.com/PajeMurici-dev), [Gustavo Antonio](https://github.com/gus-ant) |

_Legenda de siglas: `CF03` (Caso/Fluxo Funcional 03)._  
_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 7. Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[2] FAGAN, Michael E. Design and code inspections to reduce errors in program development. *IBM Systems Journal*, v. 15, n. 3, p. 182-211, 1976.

[3] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador (FGA0173)*. Brasília: Universidade de Brasília, Faculdade UnB Gama (FGA), 2026.

---

## 8. Agradecimentos e Declaração de Uso de IA Generativa

Em estrita observância ao Código de Conduta da SBC (Art. 2º, §III) e às normas do Plano de Ensino (*Sales, 2026*), declara-se que o uso supervisionado de Google Gemini (LLM) restringiu-se exclusivamente à formatação Markdown e organização tabular deste recorte, permanecendo integralmente sob responsabilidade humana o julgamento técnico e a condução da inspeção.

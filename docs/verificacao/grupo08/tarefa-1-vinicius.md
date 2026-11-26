# Autoinspeção da Tarefa 1 (`CF01`) e Bloco Geral: Vinicius Silva Araruna

## Tabela de Contribuição e Transparência de IA Generativa

A **Tabela 0** registra as responsabilidades autorais e o uso supervisionado de Inteligência Artificial Generativa no recorte da **Tarefa 1 (`CF01`) e Bloco Geral** da autoavaliação do Grupo 08.

**Tabela 0:** Matriz de Contribuição do Recorte da Tarefa 1 (`CF01`) e Bloco Geral

| Integrante | Contribuição no Artefato | Data | Horário | Ferramenta de IA e Propósito de Uso | Hiperligação |
| :--- | :--- | :---: | :---: | :--- | :---: |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Estruturação do recorte da Tarefa 1 (`CF01`) e Bloco Geral, consolidação das métricas pré-rework (`93,1%` / `96,4%`), mapeamento de artefatos e levantamento de defeitos para as Fases 4 e 5 | 24/11/2026 | 17:30 - 18:30 | Google Gemini (LLM): apoio na estruturação tabular e formatação Markdown sob supervisão autoral. | [Seção 3](#3-diagnostico-fatico-pre-rework-e-defeitos-abertos) |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | Revisão cruzada de consistência e verificação de métricas da `main` (`a4d176d`) | 24/11/2026 | 18:30 - 19:00 | Nenhuma | [Hub Grupo 08](index.md) |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Conferência estrutural e alinhamento com o Plano de Ensino (*Sales, 2026*) | 24/11/2026 | 19:00 - 19:30 | Nenhuma | [Histórico de Versão](#6-historico-de-versao) |

_Legenda de siglas: `CF01` (Caso/Fluxo Funcional 01), `IA` (Inteligência Artificial) e `LLM` (Large Language Model / Modelo de Linguagem de Grande Porte)._  
_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 1. Papéis de Fagan e Escopo da Autoinspeção

Esta página isola o escopo auditado sob responsabilidade de **Vinicius Silva Araruna** para execução da **Fase 4 (Reunião de Inspeção em vídeo)** antes da execução do retrabalho na **Fase 5**:

- **Autor, Moderador, Leitor e Inspetor (Fagan, 1976):** [Vinicius Silva Araruna](https://github.com/ViniciusA05) *(conforme Nota Metodológica de Autoinspeção Estruturada no [Hub Grupo 08](index.md#21-matriz-de-papeis-de-fagan-autoinspecao-individual-por-tarefa))*.
- **Escopo Funcional (`CF01`):** *Criação e Publicação de Tópico de Dúvida Técnica com Formatação Markdown, Categorização, Tags e Integração de IA Semântica Pré-Envio* (Persona Primária: Lucas Mendonça) + **Bloco Geral / Governança Coletiva**.
- **Desempenho Atual (Pré-Rework na `main` @ `a4d176d`):**
  - **Tarefa 1 (`CF01`):** `363` Conformes, `26` Incompletos, `1` Não Conforme e `24` N/A em `390` aplicáveis (**`93,1%` estrita / `96,4%` ponderada**);
  - **Bloco Geral:** `371` Conformes, `28` Incompletos, `1` Não Conforme e `14` N/A em `400` aplicáveis (**`92,8%` estrita / `96,2%` ponderada**).

---

## 2. Mapa de Artefatos Auditados (Bloco Geral e Tarefa 1)

A **Tabela 1** reúne os artefatos principais do Bloco Geral e da Tarefa 1 (`CF01`) percorridos durante a inspeção. *(Na próxima etapa de detalhamento das inspeções, esta tabela receberá a coluna com a versão semântica exata de cada artefato e os links diretos do GitHub Pages.)*

**Tabela 1:** Artefatos principais do Bloco Geral e da Tarefa 1 (`CF01`) no Grupo 08

| Etapa / Nível | Artefato | Escopo | Acesso no Portal |
| :--- | :--- | :---: | :--- |
| **E1: Planejamento** | Equipe, Cronogramas, Sites Avaliados e Processo de Design | Geral / T1 | [Equipe](../../planejamento/equipe.md) · [Cronograma Planejado](../../planejamento/cronograma-planejado.md) · [Cronograma Executado](../../planejamento/cronograma-executado.md) · [Sites Avaliados](../../planejamento/sites-avaliados.md) · [Processo de Design](../../planejamento/processo-de-design.md) |
| **E1–E8: Atas** | Índice de Atas e Atas 1 a 8 | Geral | [Índice de Atas](../../atas/index.md) · [Ata 3](../../atas/ata3.md) · [Ata 4](../../atas/ata4.md) · [Ata 8](../../atas/ata8.md) |
| **E2: Requisitos** | Aspectos Éticos e TCLE, Perfil 1, Persona 1, Cenário 1 e HTA/GOMS T1 | T1 / Geral | [Aspectos Éticos](../../analise-requisitos/aspectos-eticos.md) · [Perfil](../../analise-requisitos/perfil-usuario.md) · [Personas](../../analise-requisitos/personas.md) · [Cenários](../../analise-requisitos/cenarios.md) · [Análise de Tarefas](../../analise-requisitos/analise-tarefas.md) |
| **E3: Requisitos** | Metas de Usabilidade e Guia de Estilo | T1 / Geral | [Metas de Usabilidade](../../analise-requisitos/metas-de-usabilidade.md) · [Guia de Estilo](../../analise-requisitos/guia-de-estilo.md) |
| **E4–E5: Nível 1** | Planejamentos DECIDE, Storyboard 1, Piloto N1 e Relatos T1 | T1 | [Plan. Storyboard](../../design-avaliacao-desenvolvimento/nivel-1/storyboard/planejamento-avaliacao.md) · [Storyboard T1](../../design-avaliacao-desenvolvimento/nivel-1/storyboard/storyboard-topico-markdown.md) · [Plan. Tarefas](../../design-avaliacao-desenvolvimento/nivel-1/analise-tarefas/planejamento-avaliacao.md) · [Piloto N1](../../design-avaliacao-desenvolvimento/nivel-1/teste-piloto.md) · [Relato Storyboard](../../design-avaliacao-desenvolvimento/nivel-1/storyboard/relato-resultados.md) · [Relato Tarefas](../../design-avaliacao-desenvolvimento/nivel-1/analise-tarefas/relato-resultados.md) |
| **E5–E6: Nível 2** | Planejamento Papel, Piloto N2, Bancada Física T1 e Relato Papel T1 | T1 | [Plan. Papel](../../design-avaliacao-desenvolvimento/nivel-2/prototipo-papel/planejamento-avaliacao.md) · [Piloto N2](../../design-avaliacao-desenvolvimento/nivel-2/prototipo-papel/teste-piloto.md) · [Bancada T1](../../design-avaliacao-desenvolvimento/nivel-2/prototipo-papel/prototipo-papel-tarefa1.md) · [Relato Papel T1](../../design-avaliacao-desenvolvimento/nivel-2/prototipo-papel/relato-resultados.md) |
| **E6–E7: Nível 3** | Planejamento AF, Protótipo Claude Design T1, Piloto N3 e Relato AF T1 | T1 | [Plan. N3](../../design-avaliacao-desenvolvimento/nivel-3/planejamento-avaliacao.md) · [Protótipo AF T1](../../design-avaliacao-desenvolvimento/nivel-3/prototipo-alta-fidelidade.md) · [Piloto N3](../../design-avaliacao-desenvolvimento/nivel-3/teste-piloto.md) · [Relato AF T1](../../design-avaliacao-desenvolvimento/nivel-3/relato-resultados.md) |
| **E8: Verificação** | Catálogo de 16 Listas e Checklists Normativos | Geral / T1 | [Catálogo 16 Listas](../listas/index.md) · [Checklists](../lista-verificacao.md) · [Entrega 8](../../entregas/entrega8.md) |

_Legenda de siglas: `E1–E8` (Etapas/Entregas 1 a 8), `T1` (Tarefa 1), `CF01` (Caso/Fluxo Funcional 01), `TCLE` (Termo de Consentimento Livre e Esclarecido), `HTA` (Hierarchical Task Analysis / Análise Hierárquica de Tarefas), `GOMS` (Goals, Operators, Methods, and Selection Rules), `DECIDE` (Determinar objetivos, Explorar perguntas, Conhecer métodos, Identificar questões práticas, Decidir questões éticas, Avaliar/interpretar dados), `N1–N3` (Níveis 1 a 3 do Ciclo de Mayhew), `AF` (Alta Fidelidade) e `Plan.` (Planejamento)._  
_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 3. Diagnóstico Fático (Pré-Rework) e Defeitos Abertos

### 3.1 Pontos Fortes Verificados
- Rastreabilidade integral de ponta a ponta desde o `Cenário 1` e `Persona 1 (Lucas Mendonça)` até `HTA + CMN-GOMS`, `Storyboard 1` (Opção B manuscrita, Piloto `e4annKBJd3I` e Oficial `_4nQ50nN7b8`), `Protótipo de Papel T1` (5 fotos reais e `n = 3` sessões: `GD2mPFl0kWI`, `283JsFGJHas`, `fGElUs-N9CM`) e `Protótipo de Alta Fidelidade T1` (7 pranchas em Claude Design, Piloto `r7vN1XWerE4` e `n = 3` sessões: `GNMJ7WGaaDE`, `-9L9zKd19d0`, `32IMt6ExSoE`, redução de `32,5%` frente ao KLM e SUS médio de `82,5`).
- `CTT-01..10` classificados como `➖ N/A` para T1 por adoção da dupla **HTA + CMN-GOMS** (cumprindo `PE-E2-11`, que exige ao menos 2 técnicas de análise de tarefas).

### 3.2 Defeitos e Incompletudes para Gravação na Fase 4 e Correção na Fase 5

A **Tabela 2** lista os defeitos reais presentes na `main` que devem ser demonstrados na gravação da inspeção (Fase 4) antes da execução do retrabalho (Fase 5).

**Tabela 2:** Defeitos e incompletudes abertos no Bloco Geral e Tarefa 1

| ID / Critério | Status Atual | Localização Exata | Defeito Constatado (Pré-Rework) | Encaminhamento (Fase 5: Retrabalho) |
| :--- | :---: | :--- | :--- | :--- |
| **`DEF-03`** (`PG-09`, `DG-08`) | ⚠️ Incompleto | [docs/atas/ata3.md](../../atas/ata3.md) (L102) | Link de gravação da Reunião Extraordinária (Ata 3) aponta para `placeholder_ata3_grupo08`. | Substituir pelo link real ou nota formal de ausência de gravação em vídeo. |
| **`DEF-04`** (`DG-01..03`, `DG-10`, `DG-11`) | ❌ Não Conforme | [observacao-avaliador.md](../../design-avaliacao-desenvolvimento/observacao-avaliador.md) e [planejamento-relato-tarefas.md](../../design-avaliacao-desenvolvimento/planejamento-relato-tarefas.md) | `observacao-avaliador.md` sem Tabela de Contribuição, Histórico, IA ou ABNT; `planejamento-relato-tarefas.md` sem ABNT. | Inserir blocos completos de governança e referências ABNT. |
| **`DEF-05`** (`DG-04`, `IE3-08`, `IE3-13`) | ⚠️ Incompleto | 23 arquivos em `docs/` (incluindo `sites-avaliados.md`, `metodologia.md`, `aspectos-eticos.md`, `metas-de-usabilidade.md`, `entrega4..6.md`) | Permanência de `_Fonte: Elaborada pelos autores, 2026._` em lugar de créditos nominais. | Substituir todas as ocorrências por fontes nominais explícitas. |
| **`PR-01`** | ⚠️ Incompleto | [docs/analise-requisitos/personas.md](../../analise-requisitos/personas.md) | Fichas das 3 personas sem fotografia realista embutida. | Inserir fotografias realistas em `docs/assets/personas/` com legenda e fonte. |
| **`PP-09` / `PP-E09`** | ⚠️ Incompleto | [prototipo-papel-tarefa1.md](../../design-avaliacao-desenvolvimento/nivel-2/prototipo-papel/prototipo-papel-tarefa1.md) | Condução solo documentada onde o facilitador operou as peças móveis. | Registrar limitação metodológica com transparência (sem alteração retroativa dos vídeos de campo). |

_Legenda de siglas: `DEF` (Defeito Aberto), `PG` (Planejamento Geral), `DG` (Desenvolvimento e Governança Geral), `IE3` (Itens da Entrega 3), `PR` (Personas), `PP` (Protótipo de Papel), `PP-E` (Protótipo de Papel: Critérios da Equipe), `IA` (Inteligência Artificial), `ABNT` (Associação Brasileira de Normas Técnicas) e `L102` (Linha 102)._  
_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

> **Nota Factual sobre `GE-G10`:** Diferente do apontado inicialmente na síntese automática anterior, [guia-de-estilo.md](../../analise-requisitos/guia-de-estilo.md) já disponibiliza no topo o botão de download para `GuiaDeEstiloDiolinuxPlusGrupo08.pdf` (`docs/assets/relatorios/GuiaDeEstiloDiolinuxPlusGrupo08.pdf` presente no repositório), devendo o critério ser reclassificado como `✅ Conforme` na próxima atualização consolidada.

---

## 4. Registro Audiovisual da Autoinspeção (Fase 4 de Fagan)

A **Tabela 3** registra a sessão gravada da Fase 4 de Fagan para a Tarefa 1 e o Bloco Geral.

**Tabela 3:** Registro audiovisual da autoinspeção da Tarefa 1 (`CF01`) e Bloco Geral

| Inspetor | Escopo | Data / Horário | Status | Link do Vídeo (YouTube Não Listado) | Marcações de Tempo |
| :--- | :--- | :---: | :---: | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Bloco Geral + Tarefa 1 (`CF01`) | *A preencher pós-gravação* | 🔄 **Em preparação (Fase 4)** | *A vincular após gravação da Fase 4* | *A preencher pós-gravação* |

_Legenda de siglas: `CF01` (Caso/Fluxo Funcional 01)._  
_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

## 5. Referência Completa de Critérios

Para consultar os 414 itens detalhados um a um, acesse a [Auditoria Global (414 Itens)](auditoria-414-itens.md) ou retorne ao [Hub Central do Grupo 08](index.md).

---

## 6. Histórico de Versão

A **Tabela 4** documenta o histórico de versões desta página modular.

**Tabela 4:** Histórico de versão do documento

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 24/11/2026 | Criação da página modular dedicada à autoinspeção da Tarefa 1 (`CF01`) e Bloco Geral, estruturando papéis de Fagan, artefatos auditados e defeitos pré-rework. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |

_Legenda de siglas: `CF01` (Caso/Fluxo Funcional 01)._  
_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 7. Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[2] FAGAN, Michael E. Design and code inspections to reduce errors in program development. *IBM Systems Journal*, v. 15, n. 3, p. 182-211, 1976.

[3] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador (FGA0173)*. Brasília: Universidade de Brasília, Faculdade UnB Gama (FGA), 2026.

---

## 8. Agradecimentos e Declaração de Uso de IA Generativa

Em estrita observância ao Código de Conduta da SBC (Art. 2º, §III) e às normas do Plano de Ensino (*Sales, 2026*), declara-se o uso supervisionado de Google Gemini (LLM) exclusivamente para formatação Markdown e organização tabular deste recorte, permanecendo integralmente sob responsabilidade humana o julgamento técnico e a condução da inspeção.

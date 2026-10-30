# GUIA MESTRE OPERACIONAL E GOVERNANÇA DE DOCUMENTAÇÃO (GEMINI.MD)
## Disciplina: Interação Humano-Computador (FGA0173 — Turma 01 | 2026.2)
### Docente: Prof. Dr. André Barros de Sales | Faculdade UnB Gama (FGA/FCTE — UnB)
### Equipe: Grupo 08 | Objeto de Estudo: Fórum Diolinux Plus

---

> **PROPÓSITO DESTE DOCUMENTO**  
> Este arquivo constitui o **Guia Mestre de Instruções de Sistema (*System Instructions*) e Governança Documental** para qualquer Agente de Inteligência Artificial Generativa (LLM), desenvolvedor de software ou pesquisador atuando no repositório do **Grupo 08**.  
> Qualquer modificação, criação de artefato Markdown, diagramação, prototipagem ou inspeção de código e documentação neste repositório **DEVE OBEDECER RIGOROSAMENTE** às diretrizes e checklists aqui estipulados, em estrito alinhamento com o **Plano de Ensino oficial da disciplina**, com o **Código de Conduta da Sociedade Brasileira de Computação (SBC)** e com a literatura científica canônica de IHC (*Barbosa & Silva, 2010; Barbosa et al., 2021; Mayhew, 1999; Nielsen, 1994; Fagan, 1976*).

---

## 1. VISÃO GERAL E ESCOPO DO PROJETO

### 1.1 Contexto Acadêmico e Institucional
- **Instituição:** Universidade de Brasília (UnB) — Campus UnB Gama (Faculdade de Ciências e Tecnologias em Engenharia / FGA).
- **Curso:** Engenharia de Software.
- **Disciplina:** Interação Humano-Computador (IHC) — Código: `FGA0173` — Turma 01 — Semestre: 2026.2.
- **Carga Horária:** 60 horas (04 créditos).
- **Docente Responsável:** Prof. Dr. André Barros de Sales.
- **Repositório Oficial:** [github.com/Interacao-Humano-Computador/2026.2-Grupo08](https://github.com/Interacao-Humano-Computador/2026.2-Grupo08).
- **Documentação Pública (GitHub Pages):** [interacao-humano-computador.github.io/2026.2-Grupo08](https://interacao-humano-computador.github.io/2026.2-Grupo08/).

### 1.2 Objeto de Estudo: Fórum Diolinux Plus
- **Plataforma Analisada:** Fórum Diolinux Plus ([plus.diolinux.com.br](https://plus.diolinux.com.br)).
- **Ecossistema Tecnológico:** Aplicação comunitária baseada na plataforma open source *Discourse*.
- **Propósito do Sistema:** Comunidade de discussão técnica, aprendizado colaborativo e suporte mútuo sobre sistemas operacionais Linux, software livre, open source, automação, hardware e engenharia.
- **Nota Histórica de Mudança de Escopo (*Pivot* da Etapa 1 para Etapa 2):**  
  Inicialmente, o grupo selecionou o *Portal Domínio Público (MEC)*. Contudo, após apontamento pedagógico da banca examinadora (Prof. Dr. André Barros de Sales) quanto à baixa densidade de fluxos interativos daquele portal para um projeto robusto de IHC, o grupo deliberou colegiadamente na [Ata da Reunião 3](docs/atas/ata3.md) (14/09/2026) pela migração formal para o **Fórum Diolinux Plus**. O fórum oferece múltiplos fluxos interativos densos (editor com pré-visualização Markdown em tempo real, parametrização granular de notificações, taxonomia avançada de categorias e tags, moderação por reputação e atribuição formal de solução de tópicos), provendo substrato ideal para modelagem de tarefas, prototipação e testes empíricos de usabilidade.

### 1.3 Ciclo de Vida Adotado: Engenharia de Usabilidade de Deborah Mayhew (1999)
O projeto é norteado pelo **Ciclo de Vida de Mayhew**, estruturado em três fases fundamentais:
1. **Fase 1 — Análise de Requisitos:** Metas de usabilidade, perfil dos usuários, guia de estilo de interface e modelagem de tarefas.
2. **Fase 2 — Design, Avaliação e Desenvolvimento:**
   - **Nível 1:** Design conceitual, storyboards, análise hierárquica de tarefas e avaliação formativa com Framework DECIDE;
   - **Nível 2:** Padrões de design de interface, protótipos de papel (baixa fidelidade) e testes formativos;
   - **Nível 3:** Design detalhado, protótipo de alta fidelidade no Figma e testes de usabilidade somativos/formativos.
3. **Fase 3 — Instalação e Avaliação de Fechamento:** Verificação dos artefatos (inspeção formal) e consolidação dos resultados alcançados.

### 1.4 Personas-Alvo e Elenco de Personas
A equipe modelou um **Elenco Consolidado de Personas** composto por 3 personas representativas e 1 antipersona:
- **Persona Primária — Lucas Mendonça (23 anos):** Estudante de Engenharia de Software e Estagiário de DevOps. Usuário avançado de Linux/terminal/Docker. Busca publicar e resolver discussões técnicas com formatação rica em Markdown e tags precisas.
- **Persona Secundária — Carlos Eduardo (19 anos):** Graduando iniciante em transição do Windows para Linux (Ubuntu/Mint). Busca guias de instalação, suporte amigável e eventos de integração presencial/remota da comunidade.
- **Persona Secundária — Mariana Ribeiro (31 anos):** Pesquisadora acadêmica e desenvolvedora autônoma. Utiliza busca avançada booleana por tópicos solucionados para diagnosticar falhas de compatibilidade de pacotes.
- **Antipersona — Robô Spammer / Divulgador Malicioso:** Perfil automatizado de propaganda não solicitada e links suspeitos, delimitando comportamentos que a interface deve coibir ativamente.

### 1.5 Tarefas Centrais Mapeadas no Projeto
1. **Tarefa 1 (CF01):** Criação e Publicação de Tópico de Dúvida com Tags e Formatação Markdown (*Autor: Vinicius Silva Araruna* | Técnicas: HTA Canônica e CMN-GOMS com prevenção de duplicidade).
2. **Tarefa 2 (CF02):** Criação de Eventos Presenciais da Comunidade com Enquete e Quórum Mínimo (*Autor: Gustavo Antonio Rodrigues e Silva* | Técnicas: HTA Canônica e Árvores de Tarefas Concorrentes - CTT).
3. **Tarefa 3 (CF03):** Busca Avançada e Filtros Parametrizados por Categoria/Status (*Autor: Edvaldo Soares Brasileiro Filho* | Técnicas: HTA Canônica e GOMS/KLM).

---

## 2. CRONOGRAMA OFICIAL E MATRIZ DE ENTREGAS

A Tabela 1 mapeia o cronograma completo da disciplina, detalhando os produtos de trabalho, as datas limites oficiais de envio, as datas de inspeção cruzada do **Grupo +1 (Grupo 01)**, o status atual do projeto e os critérios de aceitação canônicos.

**Tabela 1** — Mapeamento Cronológico de Entregas e Critérios de Aceitação

| Etapa | Data Entrega | Data Inspeção (+1) | Foco / Entregáveis do Plano de Ensino | Status no Projeto | Critérios de Aceitação Obrigatórios |
| :---: | :---: | :---: | :--- | :---: | :--- |
| **Etapa 1** | 06/09/2026 | 07/09/2026 | Planejamento do Projeto, Equipe com fotos (sem matrícula), Heatmap de disponibilidade, Sites avaliados, Site selecionado, Ferramentas, Processo de Design (Mayhew) e Cronograma planejado/executado. | **Concluída** | Presença dos 11 itens canônicos; gravação 20-30min no YouTube (não listado); atas de reunião vinculadas; matriz de decisão e justificativa teórica com foto do livro. |
| **Etapa 2** | 27/09/2026 | 28/09/2026 | Perfil do Usuário (dados demográficos, experiência, atitudes, tarefas), Aspectos Éticos (4 princípios bioéticos, minuta do TCLE, LGPD) e Análise de Tarefas (mínimo 1 tarefa individual por membro com 2 técnicas formais: HTA + GOMS/CTT). | **Concluída** | Uso de ao menos 2 técnicas de coleta; representação gráfica e tabular do HTA; modelagem GOMS/CTT; ata de reunião e vídeo gravado por membro. |
| **Etapa 3** | 06/10/2026 | 07/10/2026 | Princípios Gerais de Projeto (8 tópicos canônicos), Metas de Usabilidade e UX, Características da Plataforma e Guia de Estilo de IHC completo (Discourse/Diolinux Plus). | **Concluída** | Guia de estilo estruturado em 6 seções canônicas; cores com testes de contraste WCAG; alinhamento aos princípios ergonômicos; gravação e inspeção cruzada. |
| **Etapa 4** | 13/10/2026 | 14/10/2026 | Planejamento da Avaliação do Storyboard e Planejamento do Relato; Planejamento da Avaliação da Análise de Tarefas e Planejamento do Relato (Fase de Design Nível 1). | **Concluída** | Adoção estrita do Framework DECIDE; protocolo de teste-piloto com regra mandatória de descarte; scripts literais do TCLE; roteiro e questões práticas. |
| **Etapa 5** | **25/10/2026** *(Hoje)* | 26/10/2026 | Relato dos Resultados da Avaliação do Storyboard e da Análise de Tarefas; Planejamento da Avaliação do Protótipo de Papel e Planejamento do seu Relato (Nível 2). | **Entrega Hoje** | Apresentação dos problemas encontrados em campo categorizados pela Severidade de Nielsen (0 a 4); propostas de reprojeto; DECIDE completo para Protótipo de Papel. |
| **Etapa 6** | 03/11/2026 | 04/11/2026 | Relato dos Resultados da Avaliação do Protótipo de Papel; Planejamento da Avaliação do Protótipo de Alta Fidelidade e Planejamento do Relato da Alta Fidelidade. | **Futura** | Catálogo de inconsistências corrigidas/não corrigidas no papel; roteiro de testes de usabilidade para modelo funcional em Figma; definição de métricas de desempenho. |
| **Etapa 7** | 15/11/2026 | 16/11/2026 | Relato dos Resultados da Avaliação do Protótipo de Alta Fidelidade (Testes empíricos somativos/formativos com usuários voluntários). | **Futura** | Execução de testes de usabilidade com gravação; análise de tempos, taxa de sucesso e erros; recomendações de intervenção ergonômica final. |
| **Etapa 8** | 22/11/2026 | 23/11/2026 | Verificação dos Artefatos de Todo o Projeto (Auditoria de conformidade interna do Grupo 08 e inspeção formal dos artefatos do Grupo +1 — Grupo 01). | **Futura** | Checklists normativos baseados em Fagan (1976); relatório estatístico de conformidade; plano de retrabalho e gravação em vídeo das verificações. |
| **Fechamento** | 30/11/2026 | — | Entrega da Apresentação do Projeto Final e Consolidação do Relatório Final da Wiki. | **Futura** | Compilação integral das 14 tabelas sintetizadoras exigidas na p. 7 do Plano de Ensino; consolidação de repositório; gravação do vídeo executivo (20-30min). |
| **Banca** | 01, 03 e 08/12 | — | Avaliação Presencial do Projeto Final em modelo de Seminário perante o Professor e a Turma. | **Futura** | Domínio individual de cada membro sobre os artefatos produzidos; arguição técnica sobre escolhas ergonômicas e processo de design. |
| **Notas** | 10/12/2026 | — | Divulgação do resultado da Avaliação do Projeto Final e encerramento oficial do semestre letivo. | **Futura** | Nota Final: $NF = 0{,}25 \times NAA + 0{,}75 \times NP \ge 5{,}0$ e Frequência $\ge 75\%$. |

_Fonte: Compilada a partir do Plano de Ensino da Disciplina (Sales, 2026, pp. 4–6) e cronogramas do Grupo 08, 2026._

---

## 3. PADRÃO MANDATÓRIO DE VERSIONAMENTO E HISTÓRICO DE VERSÕES

Todo e qualquer documento Markdown (`.md`) publicado na Wiki ou no repositório **DEVE OBRIGATORIAMENTE** encerrar com uma seção formal de **Histórico de Versão**.

### 3.1 Regras de Governança de Versionamento
1. **Regra de Revisão Cruzada Obrigatória (*Peer Review*):** Quem escreve/atualiza uma versão do artefato **JAMAIS PODE SER O SEU PRÓPRIO REVISOR**. O revisor deve ser outro integrante ativo da equipe.
2. **Identificação com Hiperlinks:** Autores e revisores devem ter seus nomes vinculados aos seus respectivos perfis no GitHub.
3. **Numeração Semântica:**
   - Versões `0.x`: Estruturas preliminares ou rascunhos em branch de trabalho.
   - Versão `1.0`: Primeira versão completa, homologada e entregue na etapa correspondente.
   - Versões `1.x`: Correções pós-feedback da banca, inspeções de verificação ou expansões de conteúdo.
   - Versão `2.0`: Grandes reformulações metodológicas (como o pivot de escopo na Etapa 2).
4. **Descrição Autoexplicativa:** O campo descrição deve expressar detalhadamente o que foi criado, modificado ou corrigido, mencionando números de issues, critérios do plano de ensino ou feedback endereçado.

### 3.2 Template Canônico de Tabela de Histórico de Versão

```markdown
## Histórico de Versão

A Tabela X documenta o histórico de modificações e revisões deste artefato.

**Tabela X** — Histórico de versão do documento

| Versão | Data | Descrição Detalhada da Alteração | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | DD/MM/AAAA | Criação inicial do artefato contendo [descrever escopo completo]. | [Nome do Autor](https://github.com/usuario) | [Nome do Revisor](https://github.com/usuario-revisor) |
| `1.1` | DD/MM/AAAA | Atualização e saneamento pós-inspeção: inclusão de fotos com grifo e ajuste de legendas. | [Nome do Autor](https://github.com/usuario) | [Nome do Revisor](https://github.com/usuario-revisor) |

_Fonte: Elaborada por [Nome(s) Completo(s) de Todos que Elaboraram/Revisaram], 2026._
```

### 3.3 Regra Mandatória de Fontes Nominais Explícitas (Proibição Terminante de Termos Coletivos Genéricos)
> [!CAUTION]
> **PROIBIÇÃO EXPRESSA DA BANCA EXAMINADORA (Prof. Dr. André Barros de Sales):**  
> É **terminantemente proibido** utilizar expressões genéricas nas fontes de tabelas, figuras, cronogramas ou quadros, tais como:  
> - ❌ `_Fonte: Elaborada pelos autores, 2026._`  
> - ❌ `_Fonte: Autores, 2026._`  
> - ❌ `_Fonte: Grupo 08, 2026._`  
> - ❌ `Toda a Equipe` ou `Toda a Equipe do Grupo 08` (inclusive nas colunas de "Responsável" de cronogramas).  
>
> **REGRA DE CONFORMIDADE OBRIGATÓRIA:**  
> **100% das fontes e atribuições devem conter nominalmente os NOMES COMPLETOS DE TODOS os integrantes que participaram da elaboração/revisão do item:**  
> 1. **Elaboração Coletiva pelos 3 Membros Ativos:**  
>    `_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._`  
> 2. **Elaboração Conjunta por 2 Membros:**  
>    `_Fonte: Elaborada por [Nome Completo 1] e [Nome Completo 2], 2026._`  
> 3. **Elaboração Individual:**  
>    `_Fonte: Elaborada por [Nome Completo do Discente], 2026._`  
> 4. **Cronogramas e Tabelas de Atividades:**  
>    Na coluna *Responsável*, quando a tarefa for conjunta, listar explicitamente:  
>    `Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna` (nunca escrever "Toda a Equipe").


---

## 4. TRANSPARÊNCIA E MATRIZ DE IA GENERATIVA (SBC & PLANO DE ENSINO)

A disciplina de IHC adota expressamente o **Código de Conduta para Pessoas Autoras da Sociedade Brasileira de Computação (SBC - Parte II, Art. 2º, § III)** e as normas regimentais do Prof. Dr. André Barros de Sales (*Plano de Ensino, p. 3 e p. 7*).

### 4.1 Diretrizes Mandatórias de Uso de IA
1. **Vedação de Autoria a Algoritmos:** Ferramentas de Inteligência Artificial Generativa (como Gemini, Claude, ChatGPT, Antigravity ou GitHub Copilot) **NÃO SÃO PESSOAS E NÃO PODEM, SOB NENHUMA HIPÓTESE, SER LISTADAS COMO AUTORES OU REVISORES** de qualquer artefato ou commit.
2. **Declaração Obrigatória e Explícita:** Todo artefato que utilizar suporte de IA generativa para geração de conteúdo, apoio à escrita, formulação de tabelas, síntese ou formatação Markdown **DEVE CONTER UMA DECLARAÇÃO EXPLÍCITA** descrevendo exatamente:
   - A ferramenta de IA empregada (ex: *Gemini 1.5 Pro*, *Antigravity Agentic Assistant*);
   - A finalidade/etapa de apoio (ex: formatação sintática de tabelas Markdown, sugestão de estrutura de tópicos, conversão de dados brutos para tabelas);
   - A confirmação de que os autores humanos revisaram, auditaram e validaram todo o resultado técnico.
3. **Responsabilidade Intransferível contra Plágio e Alucinação:** O uso de IA não atenua a responsabilidade dos autores humanos. Qualquer alucinação conceitual, citação forjada, dado bibliográfico incorreto ou plágio gerado pela IA implicará **atribuição de NOTA ZERO** aos estudantes envolvidos.
4. **Tabela Sintética Final de IA Generativa:** Conforme o Item 14 do Projeto Final (*Plano de Ensino, p. 7*), o projeto deve compilar ao final uma tabela consolidada com as ferramentas de IA utilizadas, suas vantagens, desvantagens, facilidades e dificuldades encontradas.

### 4.2 Template da Matriz de Uso de IA na Tabela de Contribuição
No cabeçalho de cada artefato, a coluna de apoio de IA deve ser preenchida obrigatoriamente:

| Integrante | Atribuição no Artefato | Data | Ferramenta de IA Utilizada | Propósito do Apoio de IA |
| :--- | :--- | :---: | :--- | :--- |
| [Nome do Aluno](https://github.com/...) | Redação e modelagem da análise de tarefas | DD/MM/AAAA | Gemini (LLM) | Apoio na estruturação da sintaxe Mermaid e formatação Markdown; conteúdo técnico concebido e auditado pelo discente. |
| [Nome do Aluno](https://github.com/...) | Inspeção e revisão de conformidade | DD/MM/AAAA | Nenhuma | Auditoria puramente humana por pares. |

---

## 5. TABELA DE CONTRIBUIÇÃO DOS MEMBROS DA EQUIPE

O Plano de Ensino da disciplina estabelece de forma categórica (*Plano de Ensino, p. 9, Item 10*):  
> *"Tabela de contribuição no início do artefato com o nome de todos os integrantes com a contribuição de cada integrante com hiperligação atividade e da gravação, se houver."*

### 5.1 Composição Oficial da Equipe (Grupo 08)
- **Integrantes Ativos (Etapas 2 em diante):**
  - **Edvaldo Soares Brasileiro Filho:** [@PajeMurici-dev](https://github.com/PajeMurici-dev)
  - **Gustavo Antonio Rodrigues e Silva:** [@gus-ant](https://github.com/gus-ant)
  - **Vinicius Silva Araruna:** [@ViniciusA05](https://github.com/ViniciusA05)
- **Membros Anteriores com Preservação Histórica (Etapa 1):**
  - **Jonathan Lourenço Carpaneda:** [@Jonathan-Carpaneda](https://github.com/Jonathan-Carpaneda) *(trancamento formal em 25/09/2026)*
  - **Pedro Paulo Almeida Araujo:** [@Pedrop06](https://github.com/Pedrop06) *(trancamento formal em 25/09/2026)*

> **Diretriz Ética de Governança:**  
> Nenhuma contribuição ou autoria histórica dos membros da Etapa 1 foi desconsiderada. Conforme preconizam os aspectos éticos de pesquisa (*Barbosa & Silva, 2010*), seus créditos permanecem preservados nos históricos de versão dos artefatos da primeira etapa.

### 5.2 Template Canônico de Cabeçalho de Contribuição
Todo artefato Markdown criado **DEVE INICIAR IMEDIATAMENTE APÓS O TÍTULO** com este bloco padronizado:

```markdown
## Tabela de Contribuição e Transparência de IA Generativa

A Tabela 0 sintetiza as atribuições de cada membro da equipe na elaboração deste artefato e as ferramentas de apoio utilizadas.

**Tabela 0** — Matriz de Contribuição e Apoio Tecnológico

| Integrante | Atribuição no Artefato | Data | Horário | Ferramenta de IA | Propósito do Uso de IA | Hiperligação / Gravação |
| :--- | :--- | :---: | :---: | :--- | :--- | :---: |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | [Descrição detalhada da tarefa realizada] | DD/MM/AAAA | HH:MM - HH:MM | [Nome da IA ou Nenhuma] | [Propósito exato ou —] | [Link Seção / Vídeo](...) |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Descrição detalhada da tarefa realizada] | DD/MM/AAAA | HH:MM - HH:MM | [Nome da IA ou Nenhuma] | [Propósito exato ou —] | [Link Seção / Vídeo](...) |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Descrição detalhada da tarefa realizada] | DD/MM/AAAA | HH:MM - HH:MM | [Nome da IA ou Nenhuma] | [Propósito exato ou —] | [Link Seção / Vídeo](...) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---
```

---

## 6. NORMAS DE REFERÊNCIAS BIBLIOGRÁFICAS E EVIDÊNCIAS TEÓRICAS

A documentação do repositório deve manter rigor acadêmico exemplar em conformidade com as normas da **ABNT NBR 6023 (Referências)** e **ABNT NBR 10520 (Citações)**.

### 6.1 Regra Especial de Comprovação de Itens Teóricos do Plano de Ensino
Conforme exigência expressa do Prof. Dr. André Barros de Sales (*Plano de Ensino, p. 2, p. 8 e p. 9*):
> *"Se a atividade avaliativa for resolver uma lista de exercício, para cada resposta deve ser colocado a referência da resposta (nome do livro, número do capítulo, número da página e a versão do livro e uma foto do texto da reposta)."*  
> *"Todos os integrantes da equipe devem elaborar itens de conteúdo da disciplina com referência bibliográfica da fonte e foto do texto da referência e o nome do autor do item."*

Para cumprir esta exigência mandatória, qualquer item de fundamentação teórica, lista avaliativa ou resposta conceitual elaborado no projeto deve apresentar:
1. **Identificação Nominal do Autor do Item:** Nome e link do discente responsável;
2. **Citação Textual Canônica:** Trecho literal do autor clássico devidamente referenciado;
3. **Mapeamento Bibliográfico Completo:** Nome exato da obra, edição, capítulo, seção e número da página;
4. **Recorte Imagético em Alta Resolução (Evidência com Grifos):** Imagem da página original do livro com o trecho canônico **grifado em amarelo**, inserida como figura com legenda e fonte formal.

### 6.2 Obras de Referência Obrigatórias da Disciplina

```text
[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. Interação Humano-Computador. 1. ed. Rio de Janeiro: Elsevier / Campus, 2010. ISBN 978-85-352-3418-3.

[2] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. Interação Humano-Computador e Experiência do Usuário. 1. ed. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1. Disponível em: <https://leanpub.com/ihc-ux>.

[3] BENYON, David. Interação Humano-Computador. 2. ed. São Paulo: Pearson Prentice Hall, 2011. ISBN 978-85-7936-109-8.

[4] FAGAN, Michael E. Design and code inspections to reduce errors in program development. IBM Systems Journal, v. 15, n. 3, pp. 182–211, 1976.

[5] MAYHEW, Deborah J. The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design. San Francisco: Morgan Kaufmann, 1999. ISBN 978-1-55860-561-9.

[6] NIELSEN, Jakob. Usability Engineering. San Francisco: Morgan Kaufmann Publishers, 1993/1994. ISBN 978-0-12-518406-9.

[7] PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. Design de Interação: Além da interação homem-computador. 1. ed. São Paulo: Editora Érica, 2005.

[8] SALES, André Barros de. Plano de Ensino da Disciplina de Interação Humano Computador (FGA0173). Brasília: Universidade de Brasília, Faculdade UnB Gama, 2026.

[9] SNYDER, Carolyn. Paper Prototyping: The Fast and Easy Way to Design and Refine User Interfaces. San Francisco: Morgan Kaufmann, 2003. ISBN 978-1558608702.
```

---

## 7. AGRADECIMENTOS E DECLARAÇÕES FORMAIS OBRIGATÓRIAS

Para manter a consistência textual nos artefatos da Wiki, devem ser utilizados os seguintes modelos oficiais:

### Modelo A: Declaração de Uso de IA Generativa (Padrão SBC)
```markdown
## Agradecimentos e Declaração de Uso de IA Generativa

Em cumprimento às diretrizes éticas da Sociedade Brasileira de Computação (SBC) e às normas do Plano de Ensino da disciplina (Sales, 2026), declara-se que durante a elaboração deste artefato foram utilizados recursos de Inteligência Artificial Generativa ([especificar ferramentas, ex: Gemini 1.5 Pro / Antigravity]) para [descrever o escopo do apoio, ex: estruturação e validação sintática das tabelas em Markdown e conversão de diagramas textuais]. Todo o embasamento teórico, formulação conceitual, critérios ergonômicos e análises críticas foram concebidos, auditados e validados integralmente pelos autores humanos listados no Histórico de Versão.
```

### Modelo B: Declaração de Não Utilização de IA Generativa
```markdown
## Agradecimentos e Declaração de Autoria

Este artefato foi concebido, redigido e validado de forma integral e exclusiva pelos autores listados no Histórico de Versão, sem qualquer emprego de ferramentas de Inteligência Artificial Generativa, amparando-se nas fontes canônicas de literatura técnica devidamente referenciadas.
```

### Modelo C: Cláusula Metodológica Obrigatória de Teste-Piloto
```markdown
> **Cláusula Metodológica Obrigatória do Teste-Piloto:**  
> A realização do teste-piloto tem como finalidade exclusiva avaliar o planejamento, verificar a linguagem das instruções, calibrar os tempos de execução e testar os equipamentos de registro. Em cumprimento estrito à regra canônica da Engenharia de Usabilidade (*Barbosa et al., 2021, p. 260*), **os dados coletados na sessão piloto são terminantemente descartados**, não sendo computados na amostra dos resultados oficiais da avaliação de usabilidade.
```

### Modelo D: Cláusula de Resguardo Ético do Usuário e TCLE
```markdown
> **Instrução Ética Mandatória ao Participante:**  
> O facilitador deve esclarecer expressamente ao participante voluntário, antes de iniciar qualquer interação, que **é o protótipo / sistema que está sob avaliação, e de maneira alguma as capacidades cognitivas, intelectuais ou a agilidade do voluntário**. É garantido o direito de interrupção ou desistência a qualquer momento sem qualquer tipo de ônus ou constrangimento.
```

---

## 8. CHECKLIST DE CONFORMIDADE COM O PLANO DE ENSINO (PRÉ-FINALIZAÇÃO E PR)

Antes de aprovar qualquer Pull Request, commitar alterações na branch `develop`/`main` ou postar entregas no ambiente Aprender3/Moodle, o agente de IA ou desenvolvedor **DEVE AUDITAR E VALIDAR** os 15 critérios objetivos abaixo:

### Matriz de Auditoria Preliminar de Qualidade (Checklist de Governança)

- [ ] **Critério 01 — Resguardo de Privacidade e LGPD (Sem Matrículas):** A apresentação dos membros da equipe e de voluntários contém fotografias, nomes completos e links de GitHub, mas **NÃO divulga números de matrícula acadêmica** nem documentos pessoais.
- [ ] **Critério 02 — Tabela de Contribuição no Topo:** O artefato inicia com a Tabela de Contribuição completa imediatamente após o título, com atribuições, datas e menção transparente ao uso de IA.
- [ ] **Critério 03 — Introdução Metodológica Contextualizada:** O documento possui introdução de ao menos dois parágrafos contextualizando o artefato, fundamentando-o na literatura de IHC e vinculando-o ao escopo do **Fórum Diolinux Plus**.
- [ ] **Critério 04 — Chamada Prévia de Figuras e Tabelas no Texto:** **Nenhuma** tabela ou figura aparece "órfã" no documento. Toda tabela é antecipada no texto (*"A Tabela X apresenta..."*) e toda figura é contextualizada antes de sua renderização (*"A Figura Y ilustra..."*).
- [ ] **Critério 05 — Padronização Estrita de Legendas e Fontes Nominais (Sem Termos Coletivos):**
  - Tabelas: Título numerado no topo em negrito (`**Tabela X** — Descrição da Tabela`) e fonte no rodapé citando nominalmente **TODOS** os participantes que a elaboraram (ex: `_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._` ou o nome do autor específico). **Proibido terminantemente o uso de `Elaborada pelos autores`, `Autores` ou `Toda a Equipe`**.
  - Figuras: Imagem seguida de legenda numerada em negrito (`**Figura Y** — Legenda descritiva da imagem.`) e fonte formal com citação bibliográfica completa ou nome do autor discente (`_Fonte: Elaborada por [Nome Completo], 2026._` ou `_Fonte: Autor / Obra (Ano, p. Z)._`).
- [ ] **Critério 06 — Histórico de Versão e Revisão por Pares Cruzada:** A tabela de histórico de versão está completa e o **Autor é rigorosamente diferente do Revisor** designado.
- [ ] **Critério 07 — Referências Bibliográficas em Formato ABNT:** Todas as obras mencionadas no texto possuem entrada completa e numerada na seção final de Referências Bibliográficas em conformidade com a ABNT NBR 6023.
- [ ] **Critério 08 — Comprovação Imagética com Grifos em Amarelo para Itens Teóricos:** Para qualquer item de conteúdo da disciplina, resposta a exercícios ou listas avaliativas, há a indicação exata de autor, obra, capítulo e página, acompanhada de foto/print de alta resolução com os trechos canônicos grifados em amarelo.
- [ ] **Critério 09 — Alinhamento ao Framework DECIDE:** Todos os planejamentos de avaliação (Storyboards, Análise de Tarefas, Protótipo de Papel e Protótipo de Alta Fidelidade) seguem as seis fases canônicas: `D` (Objetivos), `E` (Perguntas), `C` (Métodos), `I` (Questões práticas), `D` (Questões éticas) e `E` (Avaliação e relato dos dados).
- [ ] **Critério 10 — Regra Mandatória de Descarte de Dados do Teste-Piloto:** Há cláusula explícita assegurando que dados de teste-piloto não foram e não serão computados nos resultados oficiais.
- [ ] **Critério 11 — Escala Canônica de Severidade de Problemas de Nielsen:** Nos relatos de avaliação com usuários, os problemas de usabilidade encontrados são classificados na escala de 0 a 4 (0: falso problema; 1: problema cosmético; 2: problema simples; 3: problema grave; 4: catástrofe de usabilidade).
- [ ] **Critério 12 — Vídeo de Apresentação e Tempo Regulamentar:** O vídeo de apresentação da etapa foi gravado, dura estritamente entre **20 e 30 minutos** (tempo mínimo e máximo), encontra-se na categoria **"não listado" no YouTube** e conta com a participação de todos os autores apresentando os artefatos que produziram.
- [ ] **Critério 13 — Atas de Reunião com Acesso Audiovisual:** Toda etapa conta com a respectiva ata formal de reunião documentando data, horários de início e término, participantes, objetivos, deliberações e hiperlink para a gravação da reunião.
- [ ] **Critério 14 — Suporte a Modos de Cor e Alto Contraste:** O tema do MkDocs Material foi validado nos modos claro, escuro e modo de alto contraste para conformidade com a acessibilidade web (WCAG 2.1).
- [ ] **Critério 15 — Inspeção e Heteroavaliação do Grupo +1 (Grupo 01):** A avaliação do grupo sucessor foi executada utilizando o checklist normativo, gerando relatório de auditoria e gravação em vídeo.

---

## 9. DIRETRIZES DE FLUXO DE TRABALHO GIT E REGRAS OPERACIONAIS

1. **Branches de Trabalho:**
   - `main`: Branch de produção estável, contendo apenas versões oficiais entregues.
   - `develop`: Branch de integração contínua onde os artefatos em desenvolvimento são agrupados.
   - `feature/<nome-do-artefato>`: Branches individuais para elaboração de cada atividade por discente.
2. **Commits Semânticos Identificáveis:**
   - Todo commit deve permitir a identificação imediata do discente (conforme exigido na p. 3 do Plano de Ensino: *"Usem nomes identificáveis"*).
   - Seguir padrão Conventional Commits: `docs: adiciona planejamento do prototipo de papel (#104)` ou `fix: corrige legenda e fonte da figura 3`.
3. **Deploy e Validação Local:**
   - Antes de submeter alterações, execute `mkdocs build --strict` ou `mkdocs serve` para certificar-se de que não existem links quebrados, falhas de sintaxe Markdown ou imagens ausentes.

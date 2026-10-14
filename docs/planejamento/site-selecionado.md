# Site Selecionado: Fórum Diolinux Plus

## Tabela de Contribuição

A distribuição de responsabilidades entre os membros ativos do Grupo 08 na concepção, estruturação e atualizações evolutivas deste artefato de planejamento encontra-se detalhada a seguir.

| Integrante | Atribuição no Artefato | Data | Ferramenta de IA e Contribuição |
| :--- | :--- | :---: | :--- |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Avaliação dos critérios de escolha, oportunidades de análise da busca avançada e revisão técnica geral | 10/10/2026 | Suporte na formatação Markdown e padronização tabular sob supervisão dos discentes |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | Documentação da plataforma Discourse, mapeamento da jornada de onboarding com Discobot e revisão cruzada | 10/10/2026 | Suporte na formatação Markdown e padronização tabular sob supervisão dos discentes |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Justificativa do pivot, detalhamento da funcionalidade de tópicos em Markdown, alinhamento 1:1 com a HTA e coordenação | 10/10/2026 | Suporte na formatação Markdown e padronização tabular sob supervisão dos discentes |

---

## Introdução

Este artefato formaliza a seleção do **Fórum Diolinux Plus** como o sítio eletrônico oficial de estudo e avaliação de Interação Humano-Computador (IHC) do Grupo 08 na disciplina ministrada pelo Prof. Dr. André Barros de Sales (Faculdade UnB Gama — FGA/UnB, semestre letivo 2026.2).

O objetivo deste documento é apresentar as características operacionais da plataforma, contextualizar transparentemente a mudança de escopo (*pivot*) realizada após o feedback da Etapa 1, delimitar as três funcionalidades nucleares que norteiam as atividades analíticas da equipe e elencar os problemas preliminares de usabilidade observados na interface.

---

## Justificativa da Mudança de Escopo (Pivot)

Na fase inicial de planejamento (Etapa 1), a equipe havia selecionado originalmente o *Portal Domínio Público (MEC)*. Contudo, durante a arguição presencial de apresentação da primeira etapa, a banca examinadora destacou uma inconsistência de densidade pedagógica: o portal possui **baixa complexidade interativa**, operando essencialmente como um repositório básico para consultas pontuais e download direto de arquivos em formato PDF.

Para uma equipe de Engenharia de Software, um sistema restrito a formulários simples de busca limitaria severamente a profundidade das investigações exigidas ao longo do semestre letivo, em especial:

1. A modelagem individual de tarefas na Entrega 2, onde cada estudante é responsável pela modelagem formal de uma tarefa distinta e não-trivial empregando **HTA** (Análise Hierárquica de Tarefas) e **GOMS/KLM** (*Barbosa & Silva, 2021*);
2. A identificação e categorização de problemas com base nas heurísticas de Nielsen (1994) e nas diretrizes ergonômicas de Mayhew (1999);
3. O projeto de Storyboards e protótipos de baixa, média e alta fidelidade nas etapas posteriores.

Diante desse diagnóstico, o grupo realizou uma reunião extraordinária, registrada na [Ata 3](../atas/ata3.md), deliberando de forma unânime pelo reposicionamento (*pivot*) do projeto para o **Fórum Diolinux Plus**. Essa decisão assegurou riqueza de interações colaborativas, pluralidade de perfis e estrita consonância com a rubrica avaliativa da disciplina.

---

## Visão Geral do Fórum Diolinux Plus

O **Fórum Diolinux Plus** é uma das maiores e mais ativas comunidades de suporte técnico colaborativo sobre tecnologia, distribuições Linux e software livre da América Latina. O ambiente é sustentado pelo motor de código aberto *Discourse*, concebido especificamente para viabilizar discussões estruturadas e ricas em recursos modernos de interação social.

A plataforma atende a um público amplo que engloba desde estudantes universitários iniciantes em sistemas operacionais até desenvolvedores e administradores de infraestrutura — perfil diretamente acessível na Faculdade UnB Gama, simplificando os processos de pesquisa de campo, entrevistas e testes de usabilidade.

A Figura 1 ilustra a interface pública principal do Fórum Diolinux Plus.

![Interface da página inicial do Fórum Diolinux Plus](../assets/images_prints/diolinux_plus_print.png)

**Figura 1** — Interface principal da plataforma comunitária Diolinux Plus.  
_Fonte: Fórum Diolinux Plus (plus.diolinux.com.br), 2026._

Conforme ilustrado na Figura 1, o sítio eletrônico dispõe de uma interface densa e contemporânea, com múltiplos fluxos de navegação por categorias, listagem cronológica de tópicos recentes e painéis dinâmicos de interação.

---

## Escopo e Funcionalidades Avaliadas

Em conformidade com a reestruturação da equipe para três integrantes ativos ([Ata 4](../atas/ata4.md)), o escopo de análise foi calibrado em torno de **três funcionalidades nucleares**. Essas funcionalidades sincronizam-se perfeitamente com as tarefas modeladas em [Análise de Tarefas](../analise-requisitos/analise-tarefas.md), garantindo cobertura integral das principais jornadas do usuário:

### 1. F01: Criação e Edição de Tópicos com Tags e Markdown

Permite ao usuário redigir e publicar dúvidas técnicas, tutoriais ou notícias. O fluxo interativo abrange o acionamento do editor, preenchimento de título com verificação de desduplicação em tempo real, seleção de categorias e etiquetas taxonômicas, escrita de texto com suporte à sintaxe Markdown (com ênfase na inclusão de trechos de código e logs de erro do terminal via crases) e inspeção do painel de pré-visualização antes da submissão final.

### 2. F02: Cadastro e Onboarding do Novo Usuário com Discobot

Permite ao novo usuário criar sua conta na comunidade e realizar a jornada inicial de acolhimento e aprendizagem de regras. O fluxo compreende o preenchimento de formulário ou autenticação social, confirmação de correio eletrônico, recebimento de mensagem privada de boas-vindas do assistente automatizado (*Discobot*), execução do tutorial guiado de formatação/atalhos e compreensão das travas de segurança dos níveis de confiança (*Trust Level 0 para Trust Level 1*).

### 3. F03: Busca Avançada e Filtros de Categoria

Permite aos usuários localizar soluções prévias para problemas técnicos e configurações de hardware. O fluxo envolve o acionamento da barra de pesquisa, uso de operadores avançados de filtragem (por categoria, autor, etiquetas e status de resolução aceita), navegação pelas sugestões dinâmicas e refinamento de termos para evitar a execução de comandos obsoletos.

A Tabela 1 sintetiza a correspondência formal entre as funcionalidades nucleares selecionadas, o nível de complexidade técnica, o potencial analítico em IHC e a distribuição de responsabilidades individuais entre os discentes, sincronizada em proporção 1:1 com os fluxos modelados em [Análise de Tarefas](../analise-requisitos/analise-tarefas.md).

**Tabela 1** — Relação das funcionalidades nucleares e potencial analítico de IHC

| ID | Funcionalidade Nuclear do Sistema | Nível de Complexidade | Oportunidade Analítica em IHC e Dores Observadas | Técnicas de IHC Associadas | Integrante Responsável pela Modelagem |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **F01** | Criação e Edição de Tópicos com Tags e Markdown | Alta | Sobrecarga de comandos no editor; hesitação na seleção de tags adequadas; erros frequentes na formatação de blocos de código de terminal por novatos. | HTA (Diagrama + Tabela) + GOMS/KLM | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| **F02** | Cadastro e Onboarding do Novo Usuário com Discobot | Alta | Barreiras de acolhimento; atrito com limitações antispam do Trust Level 0 (TL0); evasão do tutorial do Discobot por falta de clareza visual. | HTA (Diagrama + Tabela) + GOMS | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) |
| **F03** | Busca Avançada e Filtros de Categoria | Alta | Dificuldade de filtrar por distribuições específicas (ex: Linux Mint vs. Ubuntu); risco de comandos obsoletos em tópicos antigos; modais de busca densos. | HTA (Diagrama + Tabela) + GOMS/CMN-GOMS | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) |

_Fonte: Elaborada pelos autores, 2026._

Conforme demonstrado na Tabela 1, a divisão assegura equidade analítica rigorosa, garantindo que cada discente seja titular de um fluxo de alta densidade cognitiva devidamente conectado às demais fases do ciclo de usabilidade.

---

## Problemas Preliminares de Usabilidade Identificados

A inspeção exploratória preliminar conduzida pela equipe sobre a interface do Fórum Diolinux Plus evidenciou oportunidades substanciais de aprimoramento de IHC:

1. **Curva de Aprendizagem Íngreme no Editor de Markdown:** Usuários novatos que desconhecem a sintaxe Markdown frequentemente cometem falhas ao colar mensagens de erro de terminal, poluindo as discussões devido à ausência de assistentes visuais dedicados a logs;
2. **Fricção Inicial por Travas de Confiança (Trust Level 0):** Estudantes recém-cadastrados que tentam enviar imagens de falhas de *boot* têm seu conteúdo bloqueado pelo sistema antispam, sem que a interface forneça orientação clara sobre como desbloquear permissões;
3. **Complexidade Excessiva na Busca Avançada:** Para localizar tópicos com filtros combinados (categoria + tag + solução aceita), a interface exige a abertura de modais densos com terminologias abstratas, sobrecarregando a memória de trabalho do usuário;
4. **Visibilidade Reduzida do Status de Moderação e Soluções:** Em discussões técnicas extensas, nem sempre a solução homologada pelo autor é destacada de forma inequívoca no topo da visualização móvel.

---

## Lista de Verificação do Planejamento de Escopo

A Tabela 2 apresenta a autoavaliação da conformidade metodológica do planejamento de escopo frente às exigências do Plano de Ensino da disciplina (*Sales, 2026*) e às decisões registradas nas atas de reunião.

**Tabela 2** — Lista de verificação de conformidade do planejamento de escopo

| Item | Questão Avaliada | Origem / Fonte Normativa | Conforme? | Resposta Autoexplicativa e Evidência no Artefato |
| :---: | :--- | :--- | :---: | :--- |
| **1** | A escolha do Fórum Diolinux Plus possui justificativa explícita e fundamentada no rigor acadêmico de IHC? | Plano de Ensino da Disciplina; Mayhew (1999) | ✅ Sim | O texto detalha o pivot a partir do Portal Domínio Público devido à baixa densidade interativa do repositório anterior. |
| **2** | O escopo está dimensionado equitativamente para os 3 discentes ativos da equipe? | Diretrizes de Reestruturação ([Ata 4](../atas/ata4.md)) | ✅ Sim | O escopo delimita exatamente 3 funcionalidades de alta complexidade (F01, F02 e F03) atribuídas individualmente na Tabela 1. |
| **3** | Há sincronização 1:1 rigorosa entre a Tabela 1 e os fluxos modelados em Análise de Tarefas? | Critério de Coerência Transversal | ✅ Sim | F01 corresponde à Tarefa 1 de Vinicius; F02 corresponde à Tarefa 2 de Gustavo; F03 corresponde à Tarefa 3 de Edvaldo em `analise-tarefas.md`. |
| **4** | Foram expurgadas todas as propostas legadas obsoletas (ex: "Eventos Presenciais")? | Princípio de Fidelidade Operacional | ✅ Sim | Toda menção a eventos ou venda de ingressos foi removida, consolidando o Onboarding com Discobot na F02. |
| **5** | A Tabela de Contribuição e o corpo do texto estão alinhados com a composição ativa da equipe? | Diretrizes de Reestruturação da Equipe; [Ata 4](../atas/ata4.md) | ✅ Sim | A Tabela de Contribuição lista unicamente Vinicius Araruna, Gustavo Antonio e Edvaldo Soares, preservando os créditos históricos nas versões 1.0 a 1.2 da Tabela 3. |
| **6** | Todas as tabelas e figuras possuem chamada formal antecedente no texto, numeração e indicação de fonte? | Padrão Editorial da FGA/UnB | ✅ Sim | A Figura 1 e as Tabelas 1, 2 e 3 possuem chamadas textuais explícitas, títulos e legendas padronizadas. |

_Fonte: Elaborada pelos autores, 2026._

Conforme evidenciado na Tabela 2, todas as decisões de escopo atendem plenamente aos critérios da disciplina e às orientações metodológicas da docência.

---

## Histórico de Versão

A Tabela 3 documenta o histórico evolutivo de versões deste artefato, acompanhando as decisões de planejamento e reestruturação da equipe.

**Tabela 3** — Histórico de versão do documento

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 04/09/2026 | Criação inicial da página de site selecionado (Portal Domínio Público) | [Gustavo Antonio](https://github.com/gus-ant) | [Pedro Paulo](https://github.com/Pedrop06) |
| `1.1` | 05/09/2026 | Inclusão da tabela de contribuição no topo e padronização com ABNT | [Jonathan Lourenço Carpaneda](https://github.com/Jonathan-Carpaneda) | [Gustavo Antonio](https://github.com/gus-ant) |
| `1.2` | 18/09/2026 | Reestruturação integral para o Fórum Diolinux Plus, documentação do pivot e detalhamento das funcionalidades preliminares | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Pedro Paulo](https://github.com/Pedrop06) |
| `1.3` | 25/09/2026 | Atualização preliminar de escopo e registro da redução da equipe ([Ata 4](../atas/ata4.md)) | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| `1.4` | 10/10/2026 | Sincronização 1:1 da Tabela 1 com as tarefas oficiais de HTA/GOMS, expurgo integral de propostas legadas ("Eventos Presenciais"), higienização de membros inativos e inclusão de lista de verificação analítica com 6 itens (Issue #53) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) |

_Fonte: Elaborada pelos autores, 2026._

---

## Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier / Campus, 2010.

[2] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[3] DIOLINUX PLUS. *Fórum da Comunidade Diolinux*. Plataforma Discourse, 2026. Disponível em: <https://plus.diolinux.com.br>. Acesso em: 18 set. 2026.

[4] DISCOURSE. *Discourse: Civilized Discussion Software*. Plataforma open source, 2026. Disponível em: <https://www.discourse.org>. Acesso em: 18 set. 2026.

[5] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[6] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1994.

[7] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama, 2026.

---

## Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Durante a organização sintática e formatação deste artefato em Markdown, foi utilizado o suporte de Inteligência Artificial Generativa (LLM). Todo o embasamento metodológico, delimitação de escopo, alinhamento de tarefas e decisões de engenharia foram concebidos, verificados e aprovados pelos discentes ativos do Grupo 08.

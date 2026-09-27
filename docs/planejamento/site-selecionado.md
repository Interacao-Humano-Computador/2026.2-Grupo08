# Site Selecionado: Fórum Diolinux Plus

## Tabela de Contribuição

| Integrante | Contribuição | Data |
| :--- | :--- | :---: |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | [Avaliação dos critérios de escolha e impacto nos prazos de desenvolvimento](#justificativa-da-mudanca-de-escopo-pivot) | 14/09/2026 |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Elaboração da documentação da plataforma Discourse e mapeamento dos fluxos interativos](#visao-geral-do-forum-diolinux-plus) | 14/09/2026 |
| [Jonathan Lourenço Carpaneda](https://github.com/Jonathan-Carpaneda) | [Padronização das referências bibliográficas em ABNT e conformidade documental](#referencias-bibliograficas) | 18/09/2026 |
| [Pedro Paulo Almeida Araujo](https://github.com/Pedrop06) | [Validação dos problemas preliminares de usabilidade e revisão geral](#problemas-preliminares-de-usabilidade-identificados) | 18/09/2026 |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Detalhamento das 5 funcionalidades centrais, análise de complexidade e justificativa de pivot](#escopo-e-funcionalidades-avaliadas) | 18/09/2026 |

---

## Introdução

Este artefato formaliza a seleção do **Fórum Diolinux Plus** como o objeto oficial de estudo e avaliação de Interação Humano-Computador (IHC) do Grupo 08 na disciplina ministrada pelo Prof. Dr. André Barros de Sales (Faculdade UnB Gama — FGA/UnB, semestre 2026.2).

O objetivo deste documento é apresentar as características da plataforma, contextualizar transparentemente a mudança de escopo (pivot) realizada após a apresentação da Etapa 1, delimitar as cinco funcionalidades centrais que nortearão as próximas fases do projeto e elencar os problemas preliminares de usabilidade identificados na interface.

---

## Justificativa da Mudança de Escopo (Pivot)

Na fase inicial de planejamento (Etapa 1), o grupo selecionou o *Portal Domínio Público (MEC)*. Contudo, durante o feedback presencial da apresentação da primeira etapa, a banca examinadora destacou uma inconsistência de escopo pedagógico: o portal possui **baixa densidade interativa**, operando essencialmente como um repositório para consultas pontuais e download de arquivos em formato PDF.

Para uma equipe composta por cinco discentes de Engenharia de Software, um sistema restrito a formulários básicos de busca limitaria drasticamente a profundidade das análises exigidas ao longo do semestre letivo, em especial:
- A modelagem individual de tarefas na Entrega 2, onde cada integrante precisa modelar formalmente uma tarefa distinta e não trivial em **HTA** (Análise Hierárquica de Tarefas) e **GOMS/KLM**;
- A identificação e categorização de problemas com base nas heurísticas de Nielsen e diretrizes de Mayhew;
- O projeto de Storyboards e protótipos de baixa, média e alta fidelidade nas entregas seguintes.

Diante desse cenário, a equipe realizou uma reunião extraordinária, registrada na [Ata 3](../atas/ata3.md), deliberando de forma unânime pelo reposicionamento do projeto para o **Fórum Diolinux Plus**. Essa decisão garante maior rigor acadêmico, riqueza de interações e pleno alinhamento com a rubrica oficial da disciplina.

---

## Visão Geral do Fórum Diolinux Plus

O **Fórum Diolinux Plus** é um dos maiores e mais influentes ambientes de discussão e suporte colaborativo sobre tecnologia, software livre e sistemas operacionais de código aberto no Brasil. A comunidade é sustentada pela plataforma de software livre *Discourse*, concebida especificamente para viabilizar discussões civilizadas e ricas em recursos modernos de interação.

A plataforma atende a um público amplo que engloba desde usuários iniciantes no mundo Linux até desenvolvedores, administradores de sistemas e entusiastas de tecnologia — perfil diretamente acessível na Faculdade UnB Gama, simplificando os processos de pesquisa de campo, questionários e entrevistas semiestruturadas.

A Figura 1 ilustra a interface principal da comunidade do Fórum Diolinux Plus.

![Imagem da página inicial do Fórum Diolinux Plus](../assets/images_prints/diolinux_plus_print.png)
<div align="center">
<p><strong>Figura 1</strong> — Página inicial da plataforma comunitária Diolinux Plus. (Fonte: plus.diolinux.com.br, 2026).</p>
</div>

Conforme ilustrado na Figura 1, o sítio eletrônico dispõe de uma interface densa e contemporânea, com múltiplos fluxos de navegação por categorias, tópicos recentes e painéis dinâmicos de interação.

---

## Escopo e Funcionalidades Avaliadas

Para assegurar uma divisão de trabalho justa, equitativa e focada na equipe atual composta por três integrantes, o escopo de análise foi estruturado em torno de **três funcionalidades nucleares**, englobando fluxos existentes e uma nova proposta de intervenção:

### 1. Criação e Edição de Tópicos com Formatação Rica
Permite ao usuário publicar dúvidas, notícias ou tutoriais técnicos. O fluxo envolve a seleção de categorias e tags, preenchimento de título, editor de texto com suporte a Markdown, atalhos de formatação de blocos de código e upload de imagens ou logs do sistema operacional.

### 2. Criação de Eventos Presenciais (Proposta de Nova Funcionalidade)
Permite a organização de encontros locais, workshops e meetups para a comunidade. O fluxo interativo abrange a definição do evento (data, hora, local físico/mapa), configuração de lotação máxima, opções de pagamento de ingressos (gratuito ou pago) e emissão de ingressos, suprindo a necessidade de interação no mundo real.

### 3. Interação Social e Concessão de Solução Aceita (Mark as Solution)
Em tópicos de suporte técnico e resolução de erros, o autor do tópico ou um moderador pode selecionar uma resposta específica como a solução oficial da dúvida. Isso insere um resumo no post inicial, destaca a mensagem no corpo da discussão e atualiza a reputação dos participantes.

A Tabela 1 detalha a relação entre as funcionalidades avaliadas, a complexidade estimada e a oportunidade de análise em IHC para os modelos HTA e GOMS.

**Tabela 1** — Relação das funcionalidades avaliadas e potencial analítico de IHC

| ID | Funcionalidade Nuclear | Nível de Complexidade | Oportunidade Analítica na Disciplina | Integrante Responsável pela Modelagem HTA/GOMS |
| :---: | :--- | :---: | :--- | :--- |
| **F01** | Criação e Edição de Tópicos em Markdown | Alta | Sobrecarga de comandos no editor; curva de aprendizado para formatação de código. | Edvaldo Soares |
| **F02** | Criação de Eventos Presenciais (Novo) | Alta | Mapeamento de um fluxo inédito complexo envolvendo agendamento, formulários e integração de pagamento. | Gustavo Antonio |
| **F03** | Interação e Marcação de Solução Aceita | Média | Visibilidade restrita da confirmação e atalhos pouco intuitivos em telas reduzidas. | Vinicius Araruna |

_Fonte: Elaborada pelos autores, 2026._

Conforme sistematizado na Tabela 1, cada funcionalidade selecionada provê complexidade satisfatória para a modelagem detalhada na Entrega 2, garantindo que os três estudantes executem tarefas robustas e complementares.

---

## Problemas Preliminares de Usabilidade Identificados

A inspeção exploratória preliminar executada pelos membros do grupo sobre a interface do Discourse revelou oportunidades significativas de aprimoramento de IHC:

1. **Curva de Aprendizagem Íngreme no Editor de Publicação:** Usuários novatos que não dominam a sintaxe de formatação Markdown frequentemente cometem falhas na inclusão de trechos de código e logs de erro de terminal, poluindo as discussões por falta de botões intuitivos e assistentes visuais.
2. **Sobrecarga Cognitiva no Painel de Notificações:** O sistema oferece dezenas de categorias de alertas com terminologias abstratas ("Rastreando", "Observando o primeiro post"), dificultando a compreensão do usuário sobre a real frequência de mensagens que receberá.
3. **Complexidade Excessiva na Busca Avançada:** Para realizar buscas com mais de um filtro, a interface exige abertura de modais densos com campos pouco tolerantes a termos aproximados, violando a heurística de reconhecimento em vez de memorização (Nielsen, 1994).
4. **Visibilidade Reduzida do Status de Moderação:** Ao reportar um conteúdo impróprio, o participante recebe pouco ou nenhum feedback sobre o andamento de sua denúncia, gerando insegurança quanto à efetividade da ação.

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 04/09/2026 | Criação inicial da página de site selecionado (Portal Domínio Público) | [Gustavo Antonio](https://github.com/gus-ant) | [Pedro Paulo](https://github.com/Pedrop06) |
| `1.1` | 05/09/2026 | Inclusão da tabela de contribuição no topo e padronização com ABNT | [Jonathan Lourenço Carpaneda](https://github.com/Jonathan-Carpaneda) | [Gustavo Antonio](https://github.com/gus-ant) |
| `1.2` | 18/09/2026 | Reestruturação integral para o Fórum Diolinux Plus, documentação do pivot, detalhamento das 5 funcionalidades e problemas de usabilidade | [Vinicius Araruna](https://github.com/ViniciusA05) | [Pedro Paulo](https://github.com/Pedrop06) |
| `1.3` | 25/09/2026 | Atualização das funcionalidades para refletir a nova composição (3 membros) e proposta da funcionalidade de Criação de Eventos Presenciais | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |

---

## Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier, 2010.

[2] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[3] DIOLINUX PLUS. *Fórum da Comunidade Diolinux*. Plataforma Discourse, 2026. Disponível em: <https://plus.diolinux.com.br>. Acesso em: 18 set. 2026.

[4] DISCOURSE. *Discourse: Civilized Discussion Software*. Plataforma open source, 2026. Disponível em: <https://www.discourse.org>. Acesso em: 18 set. 2026.

[5] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[6] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1994.

[7] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama, 2026.

---

## Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Durante a organização sintática e estruturação deste artefato em Markdown, foi utilizado o suporte de Inteligência Artificial Generativa (LLM). Todo o embasamento teórico, mapeamento de funcionalidades, delimitação de problemas heurísticos e deliberações foram concebidos, verificados e validados pelos integrantes do Grupo 08.

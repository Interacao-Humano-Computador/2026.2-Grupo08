# Perfil do Usuário

## Tabela de Contribuição

| Integrante | Contribuição no Artefato | Data | Ferramenta de IA e Contribuição |
| :--- | :--- | :---: | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Estruturação metodológica e autoria do Perfil 1 (Usuário Comum / Membro da Comunidade). | 05/10/2026 | Suporte na estruturação Markdown e formatação de tabelas. |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | Autoria individual do Perfil 2 (Moderador / Guardião da Comunidade). | 05/10/2026 | Gemini: apoio na estruturação dos atributos e síntese teórica. |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Elaboração do Perfil 3 (Administrador / Gestor do Sistema). | 05/10/2026 | LLM: apoio à estruturação e à formatação de matrizes de privilégios. |

---

## Introdução

Este artefato apresenta a caracterização detalhada dos perfis de usuário do **Fórum Diolinux Plus**, no âmbito da disciplina de Interação Humano-Computador (FGA0173), ministrada pelo Prof. Dr. André Barros de Sales, na Faculdade UnB Gama (FGA/UnB).

A definição de perfis de usuário apoia a análise de requisitos e decisões de design. Barbosa e Silva (2010, p. 134–136; p. 174–176) discutem a importância de compreender os usuários, suas atividades e seu contexto de uso. Sem dados sobre o público, projetistas podem acabar tomando suas próprias experiências como referência para representar usuários diferentes.

Após feedback metodológico e análise aprofundada da plataforma (baseada no ecossistema Discourse), o grupo refinou o escopo dos perfis para abranger a **complexidade hierárquica** da plataforma. Em vez de focar apenas no consumidor de conteúdo, os perfis agora representam os três diferentes níveis de privilégio e fluxos de interação: **Usuário Comum**, **Moderador** e **Administrador**.

---

## Metodologia de Elicitação e Definição

O Grupo 08 adota uma abordagem qualitativa e empírica para caracterizar os usuários do fórum:

1. **Brainstorming da equipe e Análise do Discourse:** Levantamento inicial de hipóteses sobre os papéis hierárquicos do fórum e suas permissões.
2. **Entrevistas semiestruturadas:** Conversas orientadas por um roteiro flexível, focadas na jornada de consumo (usuários) e na gestão (administradores/moderadores). A participação ocorre mediante consentimento (TCLE).
3. **Análise documental e observação do fórum:** Observação de informações públicas do Diolinux Plus, categorias de moderação, badges de confiança (Trust Levels) e tópicos fixados.

As Figuras 2 e 3 comprovam a definição bibliográfica destas técnicas de coleta de dados e elicitação no livro de Barbosa e Silva (2010), atendendo aos critérios de verificação do projeto.

![Print do livro de IHC de Barbosa e Silva detalhando a técnica de entrevistas](../assets/referencias/tecnicas_entrevistas_pg131.png)

**Figura 2** — Trecho do livro de Barbosa e Silva detalhando a técnica de Entrevistas.

![Print do livro de IHC de Barbosa e Silva detalhando as técnicas de grupos de foco e questionários](../assets/referencias/tecnicas_foco_questionario_pg138.png)

**Figura 3** — Trecho do livro de Barbosa e Silva detalhando as técnicas de Grupos de Foco e Questionários.

---

## Grupos de Atributos

Com base na caracterização de usuários discutida por Barbosa e Silva (2010, p. 134–136; p. 174–176) e apoiado nos conceitos de Hackos e Redish (1998), os perfis deste documento consideram os seguintes grupos de atributos:

- **Dados demográficos e contexto:** idade, ocupação, escolaridade e infraestrutura de acesso.
- **Experiência tecnológica e no domínio:** experiência com Linux, sistemas web e ferramentas de gestão/moderação.
- **Atitudes e estratégias:** motivação de uso, tolerância a falhas do sistema e engajamento com a comunidade.
- **Tarefas e objetivos primários:** ações cotidianas realizadas na plataforma.

![Print do livro de IHC de Barbosa e Silva detalhando os grupos de atributos de um perfil de usuário](../assets/referencias/perfil_usuario_atributos_pg162.png)

**Figura 1** — Trecho do livro de Barbosa e Silva detalhando os grupos de atributos de um perfil de usuário.

---

## Caracterização dos Perfis de Usuário (Baseada em Nível de Privilégio)

Cada perfil tem um integrante responsável por sua elaboração, garantindo a autoria individual exigida pelo plano de ensino.

### Perfil 1 — Usuário Comum (Membro da Comunidade)

- **Autor principal:** [Vinicius Silva Araruna](https://github.com/ViniciusA05)
- **Revisor:** [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant)

Este perfil representa a vasta maioria da plataforma: o membro focado em consumir tutoriais, criar tópicos de dúvida ou compartilhar soluções. Seu nível de confiança (Trust Level do Discourse) costuma variar de 0 (Novo) a 3 (Membro Frequente).

**Tabela 1** — Caracterização do Perfil 1: Usuário Comum

| Dimensão de análise | Atributo investigado | Caracterização / Hipótese |
| :--- | :--- | :--- |
| **Dados demográficos** | Faixa etária, ocupação e escolaridade | 15 a 50+ anos. Estudantes de TI, desenvolvedores, curiosos ou profissionais migrando para Linux. |
| **Experiência tecnológica** | Conhecimento em Linux | Variável (do iniciante absoluto ao usuário avançado de terminal). |
| | Familiaridade com fóruns | Geralmente tem familiaridade com buscas orgânicas (Google) que os direcionam ao fórum. |
| **Atitudes e estratégias** | Motivação | Consumir conteúdo técnico de qualidade, obter ajuda para um erro específico (ex: falha de áudio no Ubuntu) ou ajudar terceiros. |
| | Tolerância a problemas técnicos | Baixa. Busca soluções rápidas e respostas diretas. Se a interface de postagem for confusa, tende a abandonar o fórum. |
| **Tarefas primárias** | Busca e Consumo | Pesquisar por palavras-chave, ler tópicos antigos e testar comandos sugeridos. |
| | Interação | Criar novos tópicos de suporte, responder tópicos existentes, curtir (like) e formatar textos com Markdown/BBCode. |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

### Perfil 2 — Moderador (Guardião da Comunidade)

- **Autor principal:** [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant)
- **Revisor:** [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev)

O Moderador atua como a linha de frente da organização do fórum. São usuários de altíssima confiança (Trust Level 4) ou voluntários oficiais. Sua interface possui botões e menus de contexto ocultos para usuários comuns.

**Tabela 2** — Caracterização do Perfil 2: Moderador

| Dimensão de análise | Atributo investigado | Caracterização / Hipótese |
| :--- | :--- | :--- |
| **Dados demográficos** | Faixa etária, ocupação e escolaridade | Usuários maduros e de alta assiduidade. Profissionais de TI, *sysadmins* ou entusiastas fervorosos do Open Source. |
| **Experiência tecnológica** | Experiência com a plataforma | Alta proficiência. Conhecem as regras, diretrizes de conduta e atalhos do Discourse profundamente. |
| **Atitudes e estratégias** | Motivação | Manter o ecossistema saudável, livre de spam, brigas e tópicos repetidos. Sentimento de pertencimento e responsabilidade. |
| | Reação a infrações | Age com pragmatismo e neutralidade, baseando-se no Código de Conduta do Diolinux Plus. |
| **Tarefas primárias** | Triagem e Organização | Fechar tópicos duplicados, mover postagens para as categorias corretas, mesclar (*merge*) ou dividir (*split*) tópicos longos. |
| | Curadoria e Punição | Analisar denúncias (*flags*) da comunidade, ocultar postagens ofensivas, emitir advertências e silenciar contas provisoriamente. |

_Fonte: Elaborada por Gustavo Antonio Rodrigues e Silva, 2026._

---

### Perfil 3 — Administrador (Gestor do Sistema)

- **Autor principal:** [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev)
- **Revisor:** [Vinicius Silva Araruna](https://github.com/ViniciusA05)

O Administrador é o mantenedor absoluto. Membro oficial do Diolinux (Staff), ele lida muito pouco com a leitura de tópicos e foca quase integralmente no *Dashboard Admin*, uma interface densa, voltada a gráficos, logs de servidor e segurança web.

**Tabela 3** — Caracterização do Perfil 3: Administrador

| Dimensão de análise | Atributo investigado | Caracterização / Hipótese |
| :--- | :--- | :--- |
| **Dados demográficos** | Faixa etária e Ocupação | Profissionais sêniores, membros contratados ou líderes fundadores do projeto Diolinux. |
| **Experiência tecnológica** | Conhecimento de Infraestrutura web | Especialista. Lida com servidores, bancos de dados PostgreSQL/Redis e conteinerização (Docker), que sustentam o Discourse. |
| **Atitudes e estratégias** | Motivação | Garantir a estabilidade da plataforma (uptime), velocidade de carregamento e adequação da ferramenta aos objetivos de negócio da marca. |
| | Preocupação central | Segurança da informação, conformidade técnica e escalabilidade frente a picos de acesso. |
| **Tarefas primárias** | Gestão de Software | Instalar e atualizar plugins, modificar o CSS global da plataforma, alterar domínios e gerenciar backups rotineiros. |
| | Governança Global | Definir as regras de gamificação (pontos para subir de nível), aprovar novos moderadores, banir ranges de IP maliciosos e analisar métricas de engajamento do fórum. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, 2026._

---

## Matriz Comparativa e Síntese dos Perfis

A Tabela 4 resume o foco de cada perfil. Ela evidencia como uma mesma aplicação web apresenta desafios de IHC diametralmente opostos dependendo da permissão do usuário conectado.

**Tabela 4** — Matriz comparativa dos perfis hierárquicos do Fórum Diolinux Plus

| Critério de comparação | Perfil 1 — Usuário Comum | Perfil 2 — Moderador | Perfil 3 — Administrador |
| :--- | :--- | :--- | :--- |
| **Autor responsável** | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant) | [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Interface Principal** | *Front-end* do fórum (leitura e edição). | *Front-end* acrescido de menus flutuantes e painel de denúncias. | *Dashboard Admin* (*Back-end* visual e formulários de infraestrutura). |
| **Foco de uso** | Resolver problemas técnicos e interagir. | Manter a ordem, a ética e a categorização do fórum. | Manter o servidor no ar, gerenciar plugins e métricas globais. |
| **Principais Tarefas** | Criar tópico, pesquisar, curtir e formatar texto. | Fechar tópicos, punir usuários e moderar denúncias. | Atualizar o Discourse, banir IPs, alterar CSS/temas e gerenciar backups. |
| **Desafios de Usabilidade** | Encontrar respostas facilmente, não se perder na busca e facilidade no editor de texto. | Lidar com ações destrutivas em lote (ex: apagar 50 posts de spam de uma vez sem errar). | Lidar com sobrecarga de informações (*dashboard* com muitas variáveis e configurações vitais). |

_Fonte: Elaborada pelos autores, 2026._

---

## Histórico de Versões

**Tabela 5** — Histórico de versões

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 26/09/2026 | Estruturação metodológica e elaboração preliminar dos perfis focados em usuários comuns. | [Vinicius S.](https://github.com/ViniciusA05), [Edvaldo S.](https://github.com/PajeMurici-dev) | Equipe |
| `2.0` | 05/10/2026 | **Refatoração estrutural** mediante feedback: mudança de escopo para Usuário, Moderador e Administrador. Atualização das tabelas de atributos e da matriz comparativa. | [Vinicius S.](https://github.com/ViniciusA05), [Gustavo A.](https://github.com/gus-ant), [Edvaldo S.](https://github.com/PajeMurici-dev) | Revisão por Pares |

---

## Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier, 2010.

[2] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[3] COURAGE, Catherine; BAXTER, Kathy. *Understanding your users: A practical guide to user requirements methods, tools, and techniques*. San Francisco: Morgan Kaufmann Publishers, 2005.

[4] HACKOS, JoAnn T.; REDISH, Janice C. *User and task analysis for interface design*. New York: John Wiley & Sons, 1998.

[5] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano-Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama, 2026.

---

## Agradecimentos e Uso de Inteligência Artificial Generativa

Durante a preparação e a refatoração deste artefato, foram utilizados recursos de Inteligência Artificial Generativa para apoio analítico, readequação metodológica para o escopo de permissões hierárquicas (Usuário/Mod/Admin) e formatação Markdown avançada em matrizes comparativas. A autoria integral, revisão cruzada e validação pragmática continuam sendo de total responsabilidade dos estudantes que assinam cada perfil.

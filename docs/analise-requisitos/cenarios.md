# Cenários de Interação

## Tabela de Contribuição

| Integrante | Contribuição no Artefato | Data | Ferramenta de IA e Contribuição |
| :--- | :--- | :---: | :--- |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | [Autoria individual do Cenário 3](#cenario-3-pesquisa-avancada-por-filtros-e-solucao-aceita) | 26/09/2026 | *A ser desenvolvido pelo discente em sua branch de trabalho* |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Autoria individual do Cenário 2](#cenario-2-cadastro-onboarding-e-primeira-duvida-de-iniciante) | 26/09/2026 | *A ser desenvolvido pelo discente em sua branch de trabalho* |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Estruturação metodológica, fundamentação em Carroll e autoria individual do Cenário 1](#cenario-1-postagem-e-formatacao-de-duvida-tecnica-com-markdown-e-tags) | 26/09/2026 | Suporte na estruturação Markdown e tabelas |

---

## Introdução

Este artefato apresenta os **Cenários de Interação** desenvolvidos para o **Fórum Diolinux Plus**, no âmbito da disciplina de Interação Humano-Computador (FGA0173), ministrada pelo Prof. Dr. André Barros de Sales (Faculdade UnB Gama — FGA/UnB).

A técnica de cenários, fundamentada inicialmente por Carroll (2000) e Rosson e Carroll (2002) e consolidada em língua portuguesa por Barbosa e Silva (2021, p. 176-180), consiste em narrativas ricas, concretas e contextuais sobre o comportamento de pessoas reais ao realizarem atividades para atingir objetivos específicos em um determinado domínio de aplicação. Diferente de uma especificação puramente abstrata de casos de uso funcionais, o cenário descreve a experiência humana vivenciada pelo usuário: suas motivações psicológicas, o ambiente operacional, as informações manipuladas, as estratégias cognitivas de planejamento, as ações executadas e as reações do sistema interativo (*Barbosa & Silva, 2021*).

---

## Metodologia e Elementos Constitutivos de um Cenário

Conforme estabelecido por Barbosa e Silva (2021, p. 177-179), um cenário rigoroso de IHC deve articular explicitamente sete elementos constitutivos indispensáveis para assegurar a rastreabilidade do design com os perfis de usuários e personas levantados.

A Tabela 1 apresenta a definição conceitual de cada um dos elementos constitutivos adotados na modelagem dos cenários da equipe.

**Tabela 1** — Elementos constitutivos de um cenário de interação

| Elemento | Definição Teórica segundo Barbosa e Silva (2021) | Aplicação Prática no Fórum Diolinux Plus |
| :--- | :--- | :--- |
| **Contexto** | Situação inicial, ambiente físico e temporal, equipamentos e pressões operacionais. | Descreve a distribuição Linux utilizada, o hardware, o local de acesso e o nível de urgência do usuário. |
| **Atores** | Pessoas que interagem no cenário, personificando as personas previamente caracterizadas. | Lucas Mendonça (Persona Primária) e demais personas individuais da equipe. |
| **Objetivos** | Estado final desejado que motiva as ações do ator na plataforma interativa. | Sanar uma falha de contêineres Docker, ambientar-se no sistema ou localizar comandos testados. |
| **Planejamento** | Processo cognitivo de decomposição mental do objetivo em estratégias e hipóteses de ação. | Decisão de pesquisar antes de postar, escolha de palavras-chave, seleção de tags e organização do texto da dúvida. |
| **Ações** | Comportamentos observáveis e passos operacionais executados na interface do sistema. | Digitação na barra de busca, clique em filtros, preenchimento de campos do editor, aplicação de sintaxe Markdown. |
| **Eventos** | Acontecimentos externos ou respostas geradas pelo sistema interativo. | Sugestão automática de tópicos semelhantes pelo Discourse, retorno de resultados da busca, publicação da postagem. |
| **Resultados e Avaliação** | Consequências cognitivas e práticas das ações; interpretação do sucesso pelo ator. | Redução do tempo de parada de máquina, satisfação com o acolhimento da comunidade, solução aceita confirmada. |

_Fonte: Elaborada pelos autores com base em Barbosa e Silva (2021, p. 177-179), 2026._

Conforme detalhado na Tabela 1, a explicitação desses componentes impede que o cenário se torne uma descrição genérica e despersonalizada de software.

---

## Mapeamento entre Cenários, Personas e Tarefas

Para garantir a coesão integral entre os artefatos de análise de requisitos da Entrega 2, cada cenário é concebido a partir de uma persona específica e mapeado diretamente para o seu respectivo fluxo de tarefas (objeto de decomposição HTA e GOMS).

A Tabela 2 apresenta o mapeamento de rastreabilidade entre os cenários, personas e tarefas da equipe.

**Tabela 2** — Mapeamento de rastreabilidade entre cenários, personas e tarefas

| Identificador do Cenário | Cenário de Interação | Persona Vinculada | Fluxo de Tarefas (HTA / GOMS) | Autor Responsável | Revisor |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **Cenário 1** | Postagem e Formatação de Dúvida Técnica com Markdown e Tags | [Lucas Mendonça (Primária)](personas.md#persona-1-lucas-o-entusiasta-devops-persona-primaria) | Criação e Publicação de Tópico de Dúvida com Tags e Markdown | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant) |
| **Cenário 2** | *A ser definido pelo autor* | Persona 2 (Iniciante) | Cadastro e Onboarding do Novo Usuário | [Gustavo Antonio](https://github.com/gus-ant) | [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Cenário 3** | *A ser definido pelo autor* | Persona 3 (Pesquisador) | Busca Avançada e Filtros por Categoria | [Edvaldo Soares](https://github.com/PajeMurici-dev) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |

_Fonte: Elaborada pelos autores, 2026._

A Tabela 2 demonstra a distribuição de escopo entre os três membros ativos da equipe.

---

## Cenário 1: Postagem e Formatação de Dúvida Técnica com Markdown e Tags

- **Autor Principal**: [Vinicius Silva Araruna](https://github.com/ViniciusA05)
- **Revisor**: [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant)
- **Persona Envolvida**: Lucas Mendonça (Persona Primária)

### Narrativa Textual do Cenário

É noite de quinta-feira. Lucas está em sua mesa de estudos no quarto, trabalhando em seu notebook com distribuição Fedora Silverblue 40. Durante a configuração de um ambiente de desenvolvimento de microsserviços em Go utilizando Docker rootless e Podman, ele se depara com um erro recorrente de negação de acesso do SELinux (`AVC denial: { bind } for port=8080`) ao tentar vincular uma porta de rede não privilegiada dentro de um contêiner.

Após rodar o comando `audit2why` no terminal e analisar a documentação oficial da Red Hat por cerca de 40 minutos, Lucas percebe que se trata de uma interação complexa entre as políticas de segurança do Fedora imutável e a versão mais recente do runtime de contêineres. Sabendo que o Fórum Diolinux Plus possui uma comunidade ativa de usuários de distribuições Linux avançadas, Lucas decide recorrer à plataforma para compartilhar os detalhes técnicos do seu problema e pedir orientações.

Lucas abre seu navegador Firefox e acessa a página inicial do Fórum Diolinux Plus. Como já está autenticado em sua conta nível 2 de confiança, ele pressiona o atalho de teclado `c` (ou clica no botão "+ Novo Tópico" situado no canto superior direito). Uma janela de composição de tópicos se expande no terço inferior da tela.

Lucas digita um título descritivo: *"SELinux bloqueando bind de porta não privilegiada em contêiner rootless no Fedora Silverblue 40"*. Imediatamente, o motor inteligente do Discourse processa as palavras-chave do título e exibe, no painel lateral de sugestões, uma lista com três tópicos existentes. Lucas lê rapidamente os três títulos sugeridos para garantir que sua dúvida não é uma duplicata exata. Constatando que os tópicos tratam de Fedora Workstation tradicional e não da arquitetura imutável Silverblue, ele decide prosseguir com a criação.

No campo de seleção de categorias, Lucas clica e seleciona a categoria *"Desenvolvimento"*. Em seguida, clica no campo de tags e digita `fedora`, `docker` e `selinux`, associando a taxonomia exata para que especialistas no assunto encontrem seu tópico com facilidade.

No corpo do texto, Lucas redige uma explicação clara do contexto e do hardware. Para documentar os logs de auditoria e o arquivo `Containerfile`, Lucas utiliza a sintaxe de blocos de código com cercas triplas de crase (```` ```bash ```` e ```` ```dockerfile ````), garantindo que as linhas de erro não sejam corrompidas e mantenham o realce sintático. Ele confere o painel de pré-visualização em tempo real à direita para assegurar que a formatação está perfeitamente legível. Satisfeito com a estrutura do tópico, Lucas pressiona `Ctrl+Enter` (ou clica em "Criar Tópico").

O sistema publica a mensagem instantaneamente e redireciona Lucas para a página do tópico recém-criado, exibindo a notificação de publicação bem-sucedida. Sentindo-se seguro de que apresentou todas as evidências necessárias de maneira limpa e profissional, Lucas fecha a aba e retorna às suas leituras teóricas enquanto aguarda as respostas da comunidade.

### Detalhamento Estruturado dos Elementos

A Tabela 3 detalha a decomposição estruturada do Cenário 1 conforme os parâmetros canônicos de Barbosa e Silva (2021).

**Tabela 3** — Detalhamento estruturado dos elementos constitutivos do Cenário 1

| Elemento Constitutivo | Detalhamento Empírico no Fórum Diolinux Plus |
| :--- | :--- |
| **Contexto** | Mesa de estudos residencial; horário noturno; notebook executando Fedora Silverblue 40; necessidade técnica urgente de destravar um ambiente de desenvolvimento de contêineres. |
| **Ator** | Lucas Mendonça; 23 anos; estudante de Engenharia de Software e estagiário DevOps; usuário avançado de Linux e familiarizado com atalhos de teclado e Markdown. |
| **Objetivos** | Publicar uma dúvida técnica estruturada, legível e categorizada para obter orientações de outros administradores de sistemas sobre políticas de segurança do SELinux. |
| **Planejamento** | • Formular um título técnico inequívoco para acionar o filtro de desduplicação do fórum.<br>• Avaliar os tópicos sugeridos para evitar abertura de tópicos redundantes.<br>• Escolher categoria e tags de alta especificidade (`fedora`, `docker`, `selinux`).<br>• Isolar blocos de código e logs de erro do terminal utilizando formatação Markdown adequada.<br>• Validar visualmente o resultado no painel de pré-visualização antes da submissão final. |
| **Ações** | 1. Acessar a home page do fórum.<br>2. Clicar no botão "+ Novo Tópico" (ou acionar tecla de atalho `c`).<br>3. Digitar o título do tópico no campo de texto.<br>4. Inspecionar o painel flutuante de tópicos semelhantes sugeridos.<br>5. Selecionar a categoria "Desenvolvimento" no seletor suspenso.<br>6. Inserir as tags `fedora`, `docker` e `selinux`.<br>7. Digitar a narrativa da dúvida e colar os blocos de código com crases triplas.<br>8. Conferir o renderizador em tempo real na metade direita do editor.<br>9. Clicar no botão "Criar Tópico" (ou atalho `Ctrl+Enter`). |
| **Eventos** | • Abertura suave do painel de composição em tela dividida.<br>• Atualização assíncrona do painel de tópicos similares durante a digitação do título.<br>• Renderização em tempo real do Markdown com sintaxe colorida.<br>• Redirecionamento instantâneo para a URL canônica do novo tópico com notificação de confirmação. |
| **Resultados e Avaliação** | O tópico foi publicado com formatação técnica impecável; Lucas sente-se confiante de que a comunidade terá todas as informações necessárias para auxiliá-lo sem necessidade de retrabalho ou atritos de comunicação. |

_Fonte: Elaborada por [Vinicius Silva Araruna](https://github.com/ViniciusA05), 2026._

Conforme evidenciado na Tabela 3, a experiência de Lucas depende diretamente da eficiência do editor com suporte a Markdown, da resposta instantânea da pré-visualização e da acurácia do mecanismo de tags do Discourse.

---

## Cenário 2: Cadastro, Onboarding e Primeira Dúvida de Iniciante

- **Autor Principal**: [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant)
- **Revisor**: [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev)

!!! info "Espaço Reservado para Desenvolvimento Individual (Gustavo Antonio)"
    Este cenário é de responsabilidade autoral exclusiva do discente **Gustavo Antonio Rodrigues e Silva**, sendo desenvolvido diretamente em sua respectiva branch temática (`feat/...`) para posterior submissão via Pull Request e revisão por Edvaldo Soares.

---

## Cenário 3: Pesquisa Avançada por Filtros e Solução Aceita

- **Autor Principal**: [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev)
- **Revisor**: [Vinicius Silva Araruna](https://github.com/ViniciusA05)

!!! info "Espaço Reservado para Desenvolvimento Individual (Edvaldo Soares)"
    Este cenário é de responsabilidade autoral exclusiva do discente **Edvaldo Soares Brasileiro Filho**, sendo desenvolvido diretamente em sua respectiva branch temática (`feat/...`) para posterior submissão via Pull Request e revisão por Vinicius Silva Araruna.

---

## Histórico de Versão

A Tabela 4 documenta o histórico de versões deste artefato.

**Tabela 4** — Histórico de versão do documento

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 26/09/2026 | Estruturação metodológica, fundamentação em Carroll e elaboração do Cenário 1 por Vinicius Silva Araruna | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Revisão Circular 360º](https://github.com/Interacao-Humano-Computador/2026.2-Grupo08) |

_Fonte: Elaborada pelos autores, 2026._

---

## Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier, 2010.

[2] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[3] CARROLL, John M. *Making Use: Scenario-Based Design of Human-Computer Interactions*. Cambridge: MIT Press, 2000.

[4] ROSSON, Mary Beth; CARROLL, John M. *Usability Engineering: Scenario-Based Development of Human-Computer Interaction*. San Francisco: Morgan Kaufmann, 2002.

---

## Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Durante a organização do layout em Markdown e estruturação das tabelas deste artefato, foi utilizado suporte supervisionado de Inteligência Artificial Generativa (LLM). A narrativa do Cenário 1, decomposição dos elementos e fundamentação foram concebidas, redigidas e validadas por Vinicius Silva Araruna.

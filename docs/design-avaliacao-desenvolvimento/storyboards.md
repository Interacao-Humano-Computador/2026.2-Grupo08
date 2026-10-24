# Storyboards da Equipe

## Tabela de Contribuição e Transparência de IA Generativa

A Tabela 1 documenta a participação dos membros da equipe no desenvolvimento dos storyboards do projeto, evidenciando as tarefas modeladas e as ferramentas de IA utilizadas.

**Tabela 1** — Tabela de Contribuição e Uso de IA Generativa nos Storyboards

| Integrante | Atribuição no Artefato | Data | Revisor | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :---: | :---: | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Elaboração do Storyboard 1 (Criação de Tópico com Tags e Markdown com Integração de IA Semântica — CF01) com ilustração manual em papel (Opção B a 300 DPI) e documentação integral | 24/10/2026 | [Gustavo Antonio](https://github.com/gus-ant) | Antigravity (LLM) | Apoio na estruturação sintática de tabelas e alinhamento de rastreabilidade HTA. |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | Elaboração do Storyboard 2 (Criação de Eventos Presenciais — CF02) fundamentado no Guia OCR e Barbosa & Silva (2021) | 22/10/2026 | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Gemini | Suporte na estruturação e formatação tabular do roteiro de cenas em Markdown. |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Elaboração do Storyboard 3 (Busca Avançada e Filtros de Categoria por Estudante) | 13/10/2026 | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | — | Elaboração e validação de conteúdo. |

_Fonte: Elaborada pelos autores, 2026._

Este documento reúne os storyboards desenvolvidos pelo Grupo 08 para a representação contextual e visual dos fluxos de interação dos usuários no Fórum Diolinux Plus, integrando o Nível 1 do Ciclo de Vida de Mayhew (1999).

---

## Storyboard 1 – Criação e Publicação de Tópico de Dúvida com Tags e Formatação Markdown com Integração de IA Semântica (Vinicius Silva Araruna)

- **Autor**: [Vinicius Silva Araruna](https://github.com/ViniciusA05)
- **Revisor**: [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant)
- **Funcionalidade Mapeada**: `CF01` / `F01` — Criação e Publicação de Tópico com Tags, Markdown e Verificação Semântica por IA Pré-Envio
- **Persona Representada**: Lucas Mendonça (Estudante de Engenharia de Software e Estagiário DevOps)
- **Metodologia de Referência**: Buxton (2007), Scott Klemmer (2012) e Barbosa & Silva (2021)
- **Formato**: Opção B (Ilustração manual em papel A4 a 300 DPI e digitalização fotográfica tratada)
- **Documentação Aprofundada**: [Artefato Completo do Storyboard da Tarefa 1](nivel-1/storyboard/storyboard-topico-markdown.md)

### Contexto e Motivação
> *Lucas Mendonça, estudante de Engenharia de Software e estagiário DevOps, depara-se tarde da noite com uma falha de permissão ao montar volumes no Podman rootless no Fedora 40. Após exaurir tentativas locais, decide recorrer à comunidade técnica do Fórum Diolinux Plus para relatar a dúvida com logs formatados em Markdown e tags precisas, beneficiando-se da verificação inteligente de tópicos similares pré-envio para não gerar duplicatas.*

### Por que o estudante utiliza essa funcionalidade?

**Story 1 – Resolução de Gargalos Técnicos Acadêmicos e Profissionais**
> *Como estudante e estagiário, preciso submeter logs de terminal e comandos de configuração sem perda de indentação ou quebra de sintaxe, para que desenvolvedores experientes consigam diagnosticar meu problema com precisão.*

**Story 2 – Prevenção de Redundâncias e Desduplicação Inteligente**
> *Como membro consciente da comunidade, quero que a interface me alerte caso outra pessoa já tenha publicado uma dúvida idêntica com solução aceita, poupando meu tempo e evitando poluir o fórum.*

**Story 3 – Retribuição Colaborativa e Registro de Solução**
> *Como usuário beneficiado pelo apoio comunitário, faço questão de validar a solução no terminal e marcar o selo oficial de Solução Aceita na postagem, auxiliando futuros estudantes que pesquisarem a mesma falha.*

### Visão Geral da Prancha Física (Opção B)

A Figura 1 apresenta a prancha desenhada à mão em folha de papel sulfite A4 por Vinicius Silva Araruna, contendo a sequência cronológica completa dos 8 quadros da Tarefa 1.

<div style="text-align: center; margin: 1.5rem 0;">
    <img src="assets/storyboards/storyboard_Vinicius_Araruna.jpeg" alt="Prancha física do Storyboard 1 de autoria de Vinicius Silva Araruna" style="max-width: 85%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); border: 1px solid #CBD5E1;" />
    <p style="font-size: 0.85rem; color: #64748B; margin-top: 0.5rem;"><strong>Figura 1</strong> — Prancha original manuscrita do Storyboard 1 (Opção B). <em>Fonte: Vinicius Silva Araruna, 2026.</em></p>
</div>

### Roteiro dos 8 Quadros Sequenciais

A Tabela 2 apresenta o roteiro quadro a quadro do Storyboard 1, articulando a ambientação no mundo real, a ação do usuário e a resposta da interface Discourse com verificação semântica de IA.

**Tabela 2** — Roteiro quadro a quadro do Storyboard 1 (Criação de Tópico em Markdown com Integração de IA Semântica)

| # | Cena / Enquadramento | Descrição da Cena (Visual e Ação) | Fala / Balão de Pensamento | Conteúdo da Tela & Interação | Comentários Ergonômicos (IHC) |
|:---:|:---|:---|:---|:---|:---|
| **1** | **Dilema no Terminal** *(Plano Médio / Quarto)* | Lucas em sua mesa de estudos com terminal Linux exibindo erro em vermelho de montagem no Podman. | *"O Podman rootless está travando ao montar volume no Fedora 40... Já revisei o Containerfile e o erro persiste."* | **Ambiente Real:** Quarto com luminária acesa e tela de terminal com falha `operation not permitted`. | Contextualização da necessidade humana genuína antes do acesso à interface web. |
| **2** | **Decisão de Acessar o Fórum** *(Plano Médio / Navegador)* | Lucas abre o navegador e acessa o endereço do Diolinux Plus. | *"Vou postar no Diolinux Plus. A comunidade técnica lá domina Linux a fundo e responde rápido."* | **Tela:** Navegador carregando feed de tópicos recentes e barra de navegação com botão de novo tópico. | Formação da intenção e transição fluida do terminal para a plataforma colaborativa. |
| **3** | **Acionamento e Desduplicação por IA** *(Primeiro Plano / Composer)* | Lucas clica em `+ Novo Tópico` e digita o título da dúvida técnica. | *"Deixa eu ver se o fórum já tem tópico com esse erro resolvido..."* | **Tela:** Gaveta inferior do editor abre e painel lateral projeta sugestões de tópicos similares por IA pré-envio. | Heurística de Prevenção de Erros: redução de duplicidades e otimização do tempo do usuário. |
| **4** | **Categorização e Tags** *(Close-up / Dropdowns)* | Lucas seleciona a categoria `Desenvolvimento` e insere tags temáticas. | *"Categorizar certo e usar as tags podman e fedora faz a notificação chegar a quem entende."* | **Tela:** Dropdown taxonômico selecionado e chips coloridos de tags fixados no rascunho. | Minimização da sobrecarga de escolha via taxonomia estruturada. |
| **5** | **Markdown e Live Preview** *(Split-Screen / Editor)* | Lucas insere comandos delimitados por cercas triplas ```` ```bash ````. | *"Excelente! No live preview o bloco de código manteve as quebras de linha e a indentação perfeita."* | **Tela:** Editor dividido com código-fonte à esquerda e pré-visualização renderizada com destaque de sintaxe à direita. | Visibilidade do Estado do Sistema: conferência em tempo real sem surpresas pós-envio. |
| **6** | **Revisão e Publicação** *(Plano Médio / Submissão)* | Lucas faz a conferência final e aciona o botão primário de criação. | *"Tudo limpo e formatado. Publicar!"* | **Tela:** Clique em `Criar Tópico` (ou `Ctrl+Enter`) e redirecionamento suave para a thread criada. | Feedback observável imediato de conclusão de submissão. |
| **7** | **Notificação Comunitária** *(Plano Médio / Resposta)* | Lucas recebe alerta no sino superior com sugestão resolutiva de membro experiente. | *"Notificação nova! Sugeriram ajustar a flag :z do SELinux e rodar setsebool."* | **Tela:** Notificação expandida com a citação e comando recomendado formatado em Markdown. | Comunicação bidirecional e senso de pertencimento comunitário. |
| **8** | **Desfecho e Solução Aceita** *(Plano Aberto / Celebração)* | Lucas comemora o comando funcionando no terminal e marca a solução no fórum. | *"Funcionou de primeira! Marquei como solução aceita pra ajudar outros estudantes."* | **Tela:** Marcação do selo verde `✔ Solução Aceita` no post de resposta e curtida registrada. | Encerramento do ciclo de valor e reforço positivo de colaboração. |

_Fonte: Elaborada por [Vinicius Silva Araruna](https://github.com/ViniciusA05), 2026._

---

## Storyboard 2 – Criação e Publicação de Eventos Presenciais da Comunidade (Gustavo Antonio)

- **Autor**: [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant)
- **Revisor**: [Vinicius Silva Araruna](https://github.com/ViniciusA05)
- **Funcionalidade Mapeada**: `CF02` / `F02` — Criação de Eventos Presenciais
- **Metodologia de Referência**: *The OCR Guide to Storyboards (Skills Guide Version 2)* e Barbosa & Silva (2021).
- **Formato**: Roteiro pré-produção para confecção manual em papel (300 DPI).

### Contexto e Motivação
> *Durante uma aula no laboratório da universidade, Gustavo percebe o grande interesse dos colegas em distribuições Linux e DevOps, mas nota a carência de espaços presenciais para troca de experiências práticas e networking. Motivado a aproximar a comunidade técnica no mundo real, ele decide organizar o "1º Workshop Prático de Linux & DevOps de Brasília", utilizando a plataforma da comunidade para publicar a programação, geolocalizar o auditório com mapa, gerenciar a cota de ingressos e emitir credenciais com QR Code.*

### Por que o usuário utiliza essa funcionalidade?

**Story 1 – Mobilização Comunitária e Conexão no Mundo Real**
> *Como organizador e entusiasta de software livre, quero promover encontros presenciais locais para aproximar estudantes e profissionais que já interagem virtualmente, criando um ambiente de aprendizado colaborativo e prático.*

**Story 2 – Gestão Transparente de Local e Vagas**
> *Como organizador de workshops técnicos, preciso definir claramente o endereço físico com mapa interativo e estipular o limite de assentos da sala, garantindo que o evento não ultrapasse a capacidade física do auditório.*

**Story 3 – Facilidade no Credenciamento e Divulgação**
> *Como responsável pelo evento, preciso emitir ingressos com QR Code de check-in e link público de divulgação imediata, simplificando o controle de entrada no dia da atividade sem burocracias em papel.*

### Visão Geral do Storyboard (Roteiro dos 8 Quadros)

A Tabela 3 apresenta a decomposição sequencial quadro a quadro do Storyboard 2.

**Tabela 3** — Roteiro quadro a quadro do Storyboard 2 (Criação de Eventos Presenciais)

| # | Cena / Enquadramento | Descrição da Cena (Visual e Ação) | Fala / Balão de Pensamento | Conteúdo da Tela & Interação (*OCR Guide*) | Comentários de Design & Ergonomia (IHC) |
|:---:|:---|:---|:---|:---|:---|
| **1** | **Motivação na Sala de Aula** *(Plano Geral / Contexto Real)* | Durante uma aula no laboratório da faculdade, Gustavo observa colegas tirando dúvidas sobre Linux e tem a ideia de reunir as pessoas em um encontro presencial. | *"Será que tem mais gente aqui que gosta de Linux? E se a gente fizesse um encontro?"* | **Ambiente Real:** Laboratório universitário com computadores e lousa com referências a Linux.<br>**Interação:** Reflexão pessoal e observação do ambiente presencial. | Representação da necessidade humana no mundo real antes de qualquer contato com o sistema interativo. |
| **2** | **Reflexão no Transporte (Ônibus)** *(Plano Médio / Trajeto)* | No caminho de volta para casa dentro do ônibus, olhando pela janela, Gustavo amadurece a ideia e se pergunta como organizar um encontro presencial com a comunidade. | *"No caminho pra casa... Como será que eu consigo organizar uma oficina presencial com a galera?"* | **Ambiente Real:** Interior do ônibus urbano em movimento, Gustavo pensativo na janela.<br>**Interação:** Processamento cognitivo e formulação da meta no trajeto. | Aprofunda o arco contextual humano no mundo real, evidenciando a formação do objetivo antes do uso de qualquer tecnologia. |
| **3** | **Pesquisa no Computador e Descoberta** *(Over the Shoulder / Residência)* | Chegando em casa, Gustavo senta ao computador para pesquisar formas de viabilizar a oficina e descobre a área de eventos do portal da comunidade. | *"Cheguei em casa, vou pesquisar... Olha só! Tem uma área no Diolinux Plus para criar eventos!"* | **Tela do Computador:** Busca no navegador e portal do Diolinux Plus exibindo a seção do Hub de Eventos.<br>**Interação:** Digitação da pesquisa, clique e descoberta do recurso. | Transição fluida entre a intenção formulada no trajeto e o primeiro contato interativo com a interface. |
| **4** | **Ponto de Entrada e Formulário Inicial** *(Plano Médio / Ação Inicial)* | Já autenticado em sua conta, Gustavo clica no botão primário `+ Criar Evento` e insere o título "1º Workshop Prático de Linux & DevOps" com tags temáticas. | *(Concentrado no início do cadastro)* | **Tela:** Cabeçalho com botão `+ Criar Evento` e abertura do formulário com campos de título (`47/100`) e tags (*Linux*, *DevOps*).<br>**Interação:** Clique no botão de criação e digitação do título e tags. | Botão de destaque com alto contraste (`#0084FF`) e campos com placeholders claros para orientar o preenchimento. |
| **5** | **Cronograma e Programação Modular** *(Close-up na Interface / Editor)* | Gustavo estrutura os horários e atividades da oficina adicionando blocos modulares de programação sem depender de texto puro. | *(Adicionando atividades e palestras)* | **Tela:** Painel com blocos visuais de cronograma (`14:00 - Abertura`, `15:00 - Hands-on`) e upload de banner.<br>**Interação:** Clique em `+ Adicionar Atividade` e ajuste dos blocos de horário. | Redução da carga cognitiva através de componentes estruturados em vez de depender de sintaxe Markdown pura. |
| **6** | **Local & Geolocalização** *(Visão Dividida / Split Screen)* | Gustavo digita o endereço do auditório e o sistema carrega o mapa interativo, ajustando o marcador no local exato do encontro. | *"O mapa achou o auditório certinho!"* | **Tela:** Campo de busca de logradouro na esquerda com mapa interativo à direita exibindo o marcador (*pin*) posicionado.<br>**Interação:** Seleção de endereço sugerido por autocomplete. | Redução da carga cognitiva e prevenção de erros de digitação via integração com API de mapas. |
| **7** | **Capacidade e Prévia Responsiva** *(Enquadramento Médio / Multi-dispositivo)* | Gustavo define a modalidade gratuita com cota de 40 vagas (máx. 2 por pessoa) e abre o modo de pré-visualização responsiva (desktop e smartphone). | *(Análise cuidadosa do layout)* | **Tela:** Controles de ingresso (`Gratuito`), limite de 40 vagas e tela dividida com mockup mobile e desktop.<br>**Interação:** Alternância no toggle de ingressos e visualização da prévia. | Heurística de Controle e Liberdade do usuário: conferência visual prévia antes de qualquer disparo definitivo. |
| **8** | **Desfecho de Sucesso & QR Code** *(Plano Aberto / Celebração)* | Com o evento publicado, a tela apresenta a mensagem de confirmação, o link curto gerado e o QR Code oficial de check-in. Gustavo comemora animado. | *"Tudo pronto para o sábado!"* | **Tela do Monitor:** Card de celebração *"Evento Publicado!"*, QR Code para credenciamento e botão `Copiar Link Curto`.<br>**Interação:** Gustavo ergue os braços comemorando o sucesso da publicação. | Feedback imediato e gratificante de objetivo atingido, gerando sensação de empoderamento e conclusão. |

_Fonte: Elaborada por [Gustavo Antonio](https://github.com/gus-ant), 2026._

---

## Storyboard 3 – Busca Avançada e Filtros de Categoria por Estudante (Edvaldo Soares)

- **Autor**: [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev)
- **Revisor**: [Vinicius Silva Araruna](https://github.com/ViniciusA05)
- **Funcionalidade Mapeada**: Busca Avançada com Filtros de Categoria

### Problema
> *Maria, estudante de mestrado, precisa escrever a revisão de literatura da sua dissertação sobre detecção de objetos. A busca simples do portal devolve milhares de tópicos, muitos fora do escopo. Ela precisa refinar a busca para encontrar apenas trabalhos relevantes na área de Visão Computacional dentro da Inteligência Artificial.*

### Por que o estudante usa essa funcionalidade?

**Story 1 – Preparação de trabalho acadêmico**
> *Como estudante de mestrado, preciso encontrar artigos recentes sobre "deep learning para detecção de objetos" para embasar o capítulo de revisão de literatura da minha dissertação. Quero refinar a busca por área de estudo (Inteligência Artificial → Visão Computacional) para garantir que os resultados sejam altamente relevantes.*

**Story 2 – Projeto de laboratório**
> *Como integrante de um laboratório de pesquisa, devo coletar rapidamente fontes de dados de diferentes categorias para treinar um modelo. A busca avançada com filtros me permite isolar artigos que contenham datasets públicos e código aberto.*

**Story 3 – Avaliação de competência**
> *Como estudante de graduação em avaliação de usabilidade, preciso demonstrar que consigo usar ferramentas de busca avançada como parte de um estudo de caso. Preciso registrar a sequência de passos para gerar evidências no relatório.*

### Visão geral do storyboard (sequência de quadros)

A Tabela 4 resume as cenas do Storyboard 3.

**Tabela 4** — Cenas do Storyboard 3 (Busca Avançada com Filtros)

| # | Cena (descrição) | Comentários de design |
|---|------------------|-----------------------|
| **1** | **Abertura da página de busca** – Maria vê a caixa de busca central e o menu lateral com opções de filtro. | Layout limpo; foco visual na caixa de texto. |
| **2** | **Digitando a consulta** – O cursor pisca; o texto “deep learning para detecção de objetos” aparece. | Fonte legível (Segoe UI 12 pt). |
| **3** | **Abrindo o painel de filtros** – Clica no ícone “Filtros”. O painel desliza da esquerda com categorias em árvore. | Animação “slide-in” indica ação. |
| **4** | **Selecionando categorias** – Marca “Inteligência Artificial” → “Visão Computacional”. As caixas ficam com check-mark verde. | Realce visual ao selecionar (border 2 px #4CAF50). |
| **5** | **Aplicando filtros** – Clica no botão “Aplicar”. Um spinner circular aparece por 0,8 s. | Feedback de carregamento claro. |
| **6** | **Resultados carregados** – Lista de 10 resultados com título, resumo e tags. O primeiro resultado destaca-se (highlight). | Layout em cards, espaçamento de 8 px. |
| **7** | **Interagindo com um resultado** – Maria clica no título do primeiro item. A página do artigo abre em nova aba. | Indicação de “link externo” no canto superior direito. |
| **8** | **Feedback de sucesso** – Toast “Pesquisa concluída com 10 resultados” aparece no canto inferior. | Mensagem curta, desaparece após 3 s. |

_Fonte: Elaborada por [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev), 2026._

A Figura 2 ilustra a representação visual do Storyboard 3.

<div style="text-align: center; margin: 1.5rem 0;">
    <img src="assets/storyboards/storyboard_busca_avancada.png" alt="Storyboard de Busca Avançada" style="max-width: 85%; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);" />
    <p style="font-size: 0.85rem; color: #64748B; margin-top: 0.5rem;"><strong>Figura 2</strong> — Storyboard de Busca Avançada com Filtros de Categoria. <em>Fonte: Edvaldo Soares, 2026.</em></p>
</div>

---

## Histórico de Versão

A Tabela 5 documenta o histórico evolutivo dos storyboards da equipe.

**Tabela 5** — Histórico de Versão

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 13/10/2026 | Inclusão do Storyboard 3 (Busca Avançada e Filtros de Categoria por Estudante). | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| `1.1` | 22/10/2026 | Inclusão do roteiro canônico do Storyboard 2 (Criação e Publicação de Eventos Presenciais da Comunidade — CF02) baseado no Guia OCR e Barbosa & Silva. | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| `1.2` | 24/10/2026 | Inclusão do Storyboard 1 (Criação de Tópico de Dúvida com Tags e Formatação Markdown com Integração de IA Semântica — CF01) de Vinicius Silva Araruna, contendo prancha manuscrita original (Opção B), roteiro de 8 quadros com IA pré-envio e link para o artefato aprofundado. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant) |

_Fonte: Elaborada pelos autores, 2026._

---

## Referências Bibliográficas (ABNT)

- BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier / Campus, 2010.
- BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.
- BUXTON, Bill. *Sketching User Experiences: getting the design right and the right design*. San Francisco: Morgan Kaufmann, 2007.
- KLEMMER, Scott. *Storyboard: setting, sequence, satisfaction*. Stanford: Stanford University / Coursera, 2012.
- MAYHEW, Deborah J. *The Usability Engineering Lifecycle: a practitioner's handbook for user interface design*. San Francisco: Morgan Kaufmann, 1999.
- OCR. *The OCR Guide to Storyboards (Skills Guide Version 2)*. Cambridge: Oxford Cambridge and RSA Examinations, 2020.

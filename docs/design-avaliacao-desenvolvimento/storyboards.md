# Storyboards da Equipe

Este documento reúne os storyboards desenvolvidos pelo Grupo 08 para a representação contextual e visual dos fluxos de interação dos usuários no sistema.

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

A Tabela 1 apresenta a decomposição sequencial quadro a quadro, detalhando o contexto prévio ao uso do computador (desencadeamento no mundo real), o conteúdo das telas, as interações do usuário e os comentários ergonômicos de design baseados no Guia OCR e na literatura de IHC.

**Tabela 1** — Roteiro quadro a quadro do Storyboard 2 (Criação de Eventos Presenciais)

| # | Cena / Enquadramento | Descrição da Cena (Visual e Ação) | Fala / Balão de Pensamento | Conteúdo da Tela & Interação (*OCR Guide*) | Comentários de Design & Ergonomia (IHC) |
|:---:|:---|:---|:---|:---|:---|
| **1** | **Motivação na Sala de Aula** *(Plano Geral / Contexto Real)* | Durante uma aula no laboratório da faculdade, Gustavo observa colegas tirando dúvidas sobre Linux e tem a ideia de reunir as pessoas em um encontro presencial. | *"Será que tem mais gente aqui que gosta de Linux? E se a gente fizesse um encontro?"* | **Ambiente Real:** Laboratório universitário com computadores e lousa com pinguim do Linux.<br>**Interação:** Reflexão pessoal e observação do ambiente presencial. | Representação da necessidade humana no mundo real antes de qualquer contato com o sistema interativo. |
| **2** | **Ideia e Pesquisa** *(Plano Médio / Residência)* | Em sua mesa de estudos em casa, Gustavo amadurece a proposta de realizar uma oficina prática e pesquisa na internet maneiras de organizar e mobilizar a comunidade. | *"E se fizermos uma oficina para ver qual é o melhor Linux? Como organizar isso?"* | **Tela do Navegador:** Busca no Google sobre organização de encontros técnicos locais.<br>**Interação:** Digitação na pesquisa e rolagem de páginas. | Delineamento do processo cognitivo de busca por soluções viáveis para atingir seu objetivo. |
| **3** | **Descoberta da Plataforma** *(Over the Shoulder / Descoberta)* | Gustavo acessa o portal da comunidade e descobre a funcionalidade dedicada de Criação de Eventos no Hub da comunidade. | *"Achei! O Diolinux Plus tem uma área para criar eventos!"* | **Tela do Portal:** Página do Hub de Eventos da comunidade exibindo eventos em destaque e calendário.<br>**Interação:** Leitura e navegação pela página inicial. | Visibilidade do estado do sistema e clareza da proposta de valor na navegação. |
| **4** | **Ponto de Entrada** *(Plano Médio / Ação Inicial)* | Já autenticado em sua conta, Gustavo localiza o botão de ação primária e inicia o fluxo de criação do novo evento. | *(Ação física de clique)* | **Tela:** Cabeçalho do Hub de Eventos com destaque visual para o botão `+ Criar Evento` no canto superior.<br>**Interação:** Clique com mouse no botão `+ Criar Evento`. | Botão primário com alto contraste (`#0084FF`) e affordance evidente para disparar a intenção. |
| **5** | **Detalhes do Evento** *(Close-up na Interface / Formulário)* | Gustavo insere o título "1º Workshop Prático de Linux & DevOps de Brasília", seleciona as tags temáticas (*Linux*, *DevOps*) e estrutura a programação modular da oficina. | *(Preenchimento concentrado)* | **Tela:** Formulário de cadastro com contador de caracteres (`47/100`), seleção de tags e editor de cronograma em blocos.<br>**Interação:** Digitação de texto e seleção de botões de tags. | Prevenção de erros através de contadores e blocos visuais, evitando sobrecarga em Markdown puro. |
| **6** | **Local & Geolocalização** *(Visão Dividida / Split Screen)* | Gustavo digita o endereço do auditório e o sistema carrega o mapa interativo, ajustando o marcador no local exato do encontro. | *"O mapa achou o auditório certinho!"* | **Tela:** Campo de busca de logradouro na esquerda com mapa interativo à direita exibindo o marcador (*pin*) posicionado.<br>**Interação:** Seleção de endereço sugerido por autocomplete. | Redução da carga cognitiva e prevenção de erros de digitação via integração com API de mapas. |
| **7** | **Capacidade e Prévia** *(Enquadramento Médio / Multi-dispositivo)* | Gustavo define a modalidade gratuita com cota de 40 vagas (máx. 2 por pessoa) e abre o modo de pré-visualização responsiva (desktop e smartphone). | *(Análise cuidadosa do layout)* | **Tela:** Controles de ingresso (`Gratuito`), limite de 40 vagas e tela dividida com mockup mobile e desktop.<br>**Interação:** Alternância no toggle de ingressos e visualização da prévia. | Heurística de Controle e Liberdade do usuário: conferência visual prévia antes de qualquer disparo definitivo. |
| **8** | **Desfecho de Sucesso** *(Plano Aberto / Celebração)* | Com o evento publicado, a tela apresenta a mensagem de confirmação, o link curto gerado e o QR Code oficial de check-in. Gustavo comemora animado. | *"Tudo pronto para o sábado!"* | **Tela do Monitor:** Card de celebração *"Evento Publicado!"*, QR Code para credenciamento e botão `Copiar Link Curto`.<br>**Interação:** Gustavo ergue os braços comemorando o sucesso da publicação. | Feedback imediato e gratificante de objetivo atingido, gerando sensação de empoderamento e conclusão. |

> **Nota Metodológica**: Este roteiro é a especificação canônica do Storyboard 2. A versão gráfica final será confeccionada manualmente em papel a 300 DPI conforme as diretrizes pedagógicas da disciplina e digitalizada para incorporação neste documento.

---

## Storyboard 3 – Busca Avançada e Filtros de Categoria por Estudante

### Problema
> *Maria, estudante de mestrado, precisa escrever a revisão de literatura da sua dissertação sobre detecção de objetos. A busca simples do portal devolve milhares de artigos, muitos fora do escopo. Ela precisa refinar a busca para encontrar apenas trabalhos relevantes na área de Visão Computacional dentro da Inteligência Artificial.*

### Por que o estudante usa essa funcionalidade?

**Story 1 – Preparação de trabalho acadêmico**
> *Como estudante de mestrado, preciso encontrar artigos recentes sobre "deep learning para detecção de objetos" para embasar o capítulo de revisão de literatura da minha dissertação. Quero refinar a busca por área de estudo (Inteligência Artificial → Visão Computacional) para garantir que os resultados sejam altamente relevantes.*

**Story 2 – Projeto de laboratório**
> *Como integrante de um laboratório de pesquisa, devo coletar rapidamente fontes de dados de diferentes categorias para treinar um modelo. A busca avançada com filtros me permite isolar artigos que contenham datasets públicos e código aberto.*

**Story 3 – Avaliação de competência**
> *Como estudante de graduação em avaliação de usabilidade, preciso demonstrar que consigo usar ferramentas de busca avançada como parte de um estudo de caso. Preciso registrar a sequência de passos para gerar evidências no relatório.*

### Visão geral do storyboard (sequência de quadros)
| # | Cena (descrição) | Comentários de design |
|---|------------------|-----------------------|
| **1** | **Abertura da página de busca** – Maria vê a caixa de busca central e o menu lateral com opções de filtro. | Layout limpo; foco visual na caixa de texto. |
| **2** | **Digitando a consulta** – O cursor pisca; o texto “deep learning para detecção de objetos” aparece. | Fonte legível (Segoe UI 12 pt). |
| **3** | **Abrindo o painel de filtros** – Clica no ícone “Filtros”. O painel desliza da esquerda com categorias em árvore. | Animação “slide‑in” indica ação. |
| **4** | **Selecionando categorias** – Marca “Inteligência Artificial” → “Visão Computacional”. As caixas ficam com check‑mark verde. | Realce visual ao selecionar (border 2 px #4CAF50). |
| **5** | **Aplicando filtros** – Clica no botão “Aplicar”. Um spinner circular aparece por 0,8 s. | Feedback de carregamento claro. |
| **6** | **Resultados carregados** – Lista de 10 resultados com título, resumo e tags. O primeiro resultado destaca‑se (highlight). | Layout em cards, espaçamento de 8 px. |
| **7** | **Interagindo com um resultado** – Maria clica no título do primeiro item. A página do artigo abre em nova aba. | Indicação de “link externo” no canto superior direito. |
| **8** | **Feedback de sucesso** – Toast “Pesquisa concluída com 10 resultados” aparece no canto inferior. | Mensagem curta, desaparece após 3 s. |

> **Legenda**: Representa a sequência de quadros da tarefa de busca avançada com filtros de categoria, conforme descrita na Issue #64.

![Storyboard (300 DPI)](assets/storyboards/storyboard_busca_avancada.png)

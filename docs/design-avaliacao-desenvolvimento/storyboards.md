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

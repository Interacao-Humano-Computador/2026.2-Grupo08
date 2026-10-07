# Características da Plataforma: Diolinux Plus

## Tabela de Contribuição e Uso de IA Generativa

| Integrante | Contribuição | Revisor | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :--- | :--- | :--- |
| [Gustavo Antonio](https://github.com/gus-ant) | Elaboração inicial do documento | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Gemini | Apoio à estruturação inicial e à formatação Markdown. |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Revisão das características e consolidação das evidências da interface | Pendente | Codex (OpenAI) | Pesquisa e apoio à redação; revisão humana antes da entrega. |

---

## Introdução

Este documento caracteriza a plataforma usada pelo **Fórum Diolinux Plus**, com foco no que pode ser observado por uma pessoa visitante e nas consequências para as tarefas de leitura, busca e navegação. A análise serve de insumo para a Entrega 3 de IHC.

As conclusões distinguem observações da interface do que a documentação oficial descreve sobre o Discourse. A configuração interna, a hospedagem, os plugins instalados, os dados de infraestrutura e os fluxos que exigem autenticação não foram inspecionados; portanto, não são tratados como fatos sobre esta instância.

## Método e escopo

A inspeção foi realizada em **5 de outubro de 2026**, na interface pública do [Diolinux Plus](https://plus.diolinux.com.br/), em telas de desktop e sem autenticação. Foram observadas a navegação inicial, a busca com sugestões, a leitura de um tópico e a janela de atalhos. As capturas abaixo documentam as observações.

O recorte não inclui teste em celular ou tablet, comparação entre navegadores, criação/publicação de tópico, uso de conta autenticada ou inspeção do servidor. Quando uma propriedade não foi testada, ela aparece como limite da análise em vez de ser presumida.

## Características observadas

| Aspecto | Observação e implicação para IHC | Evidência |
| :--- | :--- | :--- |
| Organização da informação | A página inicial agrupa discussões por tópicos, categorias e etiquetas. A navegação lateral reúne links como Início, Sobre, Regras e outras áreas do fórum. Essa organização oferece caminhos de navegação além da lista cronológica. | [Figura 1](#figura-busca) |
| Busca | Ao digitar “Ubuntu”, a busca apresenta a opção de pesquisar em tópicos e publicações e sugestões de etiquetas. Isso ajuda a reconhecer termos disponíveis antes de abrir a lista completa de resultados. | [Figura 1](#figura-busca) |
| Leitura de tópicos | A página de tópico mantém título, categoria, etiquetas e autoria visíveis. Uma linha do tempo lateral mostra a posição na discussão e permite acompanhar a leitura do tópico. | [Figura 2](#figura-topico) |
| Navegação por teclado | A janela de atalhos mostra combinações para ir a áreas do fórum, mover a seleção e abrir tópicos. As combinações visíveis incluem `G` seguido de `H` para Início e `G` seguido de `C` para Categorias. | [Figura 3](#figura-atalhos) |
| Tema visual | As capturas registram a interface no tema escuro, com contraste entre fundo, texto, links e controles. A existência de outros temas ou a sua conformidade de contraste não foi medida nesta inspeção. | Figuras 1–3 |

## Recursos e limites da plataforma

O site se apresenta como um fórum e a documentação pública do Discourse descreve o produto como uma aplicação JavaScript executada no navegador. A documentação também informa que o Discourse oferece layout móvel e lista os navegadores suportados pela versão atual. Essas informações descrevem o produto em geral; não substituem testes específicos nesta instância.

| Recurso ou restrição | O que a fonte permite afirmar | Limite para este projeto |
| :--- | :--- | :--- |
| Aplicação web | O Discourse é uma aplicação JavaScript executada no navegador e usa o framework Ember.js. | Não foram inspecionados o código-fonte nem a configuração técnica do Diolinux Plus; a arquitetura do servidor desta instância permanece fora do escopo. |
| Navegadores | A documentação do Discourse declara suporte às versões estáveis mais recentes de Edge, Chrome, Firefox e Safari (Safari no iOS 16.4 ou superior, segundo a FAQ consultada). | Não houve teste comparativo de navegadores. A lista do fabricante não é resultado de compatibilidade verificada pelo grupo. |
| Dispositivos móveis | O Discourse descreve seu produto como utilizável em navegador de laptop, tablet e telefone e informa que há um layout móvel. | Não há captura nem teste móvel nesta análise; dimensões, adaptação de conteúdo e operação por toque devem ser verificadas antes de conclusões sobre o Diolinux Plus. |
| API | A documentação do Discourse disponibiliza uma API para interagir com recursos da plataforma. | Nenhuma chamada de API foi realizada. Não se afirma quais integrações, plugins ou endpoints estão habilitados nesta comunidade. |
| Infraestrutura e atualização | A documentação do Discourse publica requisitos e opções gerais de implantação do produto. | Plano de hospedagem, capacidade, versão instalada, banco de dados, cache, notificações e serviços de infraestrutura do fórum não foram verificados. |

Esses limites corrigem afirmações que não podiam ser sustentadas pela inspeção anterior: compatibilidade “plena” com uma lista ampliada de navegadores, adoção de estratégia *mobile-first*, presença de alto contraste, uso específico de WebSocket e notificações *push* não foram confirmados para a instância e, por isso, não são apresentados como características observadas.

## Evidências visuais

### Figura 1 — Busca e navegação na página inicial {#figura-busca}

![Captura do Diolinux Plus com busca por Ubuntu e sugestões de etiquetas.](../assets/images_prints/diolinux_busca_sugestoes.png)

*Fonte: captura da interface pública do Diolinux Plus, registrada em 05/10/2026. A captura também é usada na avaliação de princípios gerais.*

### Figura 2 — Tópico e linha do tempo {#figura-topico}

![Captura de um tópico do Diolinux Plus, mostrando categoria, etiquetas, autoria e linha do tempo lateral.](../assets/images_prints/diolinux_topico_detalhe.png)

*Fonte: captura da interface pública do Diolinux Plus, registrada em 05/10/2026.*

### Figura 3 — Janela de atalhos do teclado {#figura-atalhos}

![Captura da janela de atalhos do teclado do Diolinux Plus.](../assets/images_prints/diolinux_atalhos_teclado.png)

*Fonte: captura da interface pública do Diolinux Plus, registrada em 05/10/2026.*

## Relação com a análise de requisitos

As evidências registram recursos concretos que podem orientar os próximos artefatos: categorias e etiquetas para classificação, busca com sugestões, navegação lateral e por teclado, e linha do tempo para localizar publicações. A inspeção não comprova que esses recursos sejam suficientes para todos os perfis de usuário; essa questão deve ser confrontada com entrevistas, questionários e avaliação de usabilidade.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 25/09/2026 | Criação inicial do documento com fundamentação do livro-texto | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| `2.0` | 05/10/2026 | Revisão das afirmações técnicas, inclusão de capturas da interface pública e registro do escopo e dos limites da inspeção | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Pendente |

## Referências

- BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier, 2010. Cap. 6, análise das características da plataforma no ciclo de vida de Mayhew, p. 105–106.
- DISCOURSE. [FAQ: What is Discourse?](https://www.discourse.org/faq). Consulta em 05 out. 2026.
- DISCOURSE. [Features](https://www.discourse.org/features). Consulta em 05 out. 2026.
- DIOLINUX PLUS. [Fórum da comunidade](https://plus.diolinux.com.br/). Capturas de interface consultadas em 05 out. 2026.

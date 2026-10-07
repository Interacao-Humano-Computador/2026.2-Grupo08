# Princípios Gerais de Projeto e Avaliação Heurística

## Tabela de Contribuição e Uso de IA Generativa

| Integrante | Contribuição | Revisor | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :--- | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) e [Gustavo Antonio](https://github.com/gus-ant) | Elaboração da fundamentação teórica, captura de evidências via agente web, avaliação heurística e classificação (Atende / Viola / Atende Parcialmente) | [Gustavo Antonio](https://github.com/gus-ant) | Gemini & Browser Subagent | Extração de páginas do livro-texto com destaques digitais e navegação automatizada para capturas de tela. |

---

## Introdução

Este artefato apresenta a avaliação dos **Princípios Gerais de Projeto** e das **Heurísticas de Usabilidade de Nielsen (1994)** aplicadas ao **Fórum Diolinux Plus** (baseado na plataforma *Discourse*). O objetivo é correlacionar a teoria clássica de Interação Humano-Computador (IHC) com a prática real de interface do fórum, classificando cada diretriz visual e interativa como **Atende**, **Viola** ou **Atende Parcialmente**, suportado por fundamentação teórica extraída da literatura e evidências visuais capturadas em tempo real.

---

## Metodologia e Fundamentação Teórica

A análise fundamenta-se nos princípios e diretrizes de design consolidados por **Barbosa e Silva (2010 / 2021, Cap. 10)** e nas 10 Heurísticas de Usabilidade formuladas por **Jakob Nielsen (1994)**. Segundo Barbosa et al. (2021, p. 221-232), os princípios de design orientam o projetista na tomada de decisões que respeitem os limites cognitivos, antecipem necessidades e minimizem o esforço de memória e a ocorrência de erros.

Abaixo estão apresentados os trechos originais da literatura de referência (*Barbosa & Silva, 2021*) recortados e destacados com **marca-texto digital amarelo** conforme os padrões de fundamentação:

### 1. Correspondência com as Expectativas dos Usuários (Nielsen H2)
O sistema deve falar a linguagem do usuário, empregando palavras, conceitos e metáforas familiares à sua cultura e modelo mental.

> **Figura 1:** Trecho do livro destacando a linguagem do usuário, convenções do mundo real e uso de metáforas.
>
> ![Livro - Correspondência com Expectativas](../assets/images_prints/pagina_principios_gerais/crop_correspondencia.png)
>
> *Fonte: BARBOSA et al. (2021, p. 223).*

### 2. Simplicidade nas Estruturas das Tarefas (Nielsen H8 / Barbosa)
Reduzir o número de opções e decisões que o usuário precisa tomar a cada instante, explorando o poder das restrições e dividindo tarefas em passos simples.

> **Figura 2:** Trecho do livro destacando a simplicidade da estrutura de tarefas e restrições.
>
> ![Livro - Simplicidade nas Estruturas](../assets/images_prints/pagina_principios_gerais/crop_simplicidade.png)
>
> *Fonte: BARBOSA et al. (2021, p. 224).*

### 3. Equilíbrio entre Controle e Liberdade do Usuário (Nielsen H3)
Deixar o usuário no comando do ambiente de trabalho e fornecer capacidade de desfazer/refazer ações potencialmente perigosas.

> **Figura 3:** Trecho do livro destacando o controle do usuário e a reversibilidade de ações.
>
> ![Livro - Controle e Liberdade](../assets/images_prints/pagina_principios_gerais/crop_controle_liberdade.png)
>
> *Fonte: BARBOSA et al. (2021, p. 225).*

### 4. Consistência e Padronização (Nielsen H4)
Padronizar ações, resultados de ações, layouts de diálogos e terminologias para que o usuário não duvide do significado das palavras ou botões.

> **Figura 4:** Trecho do livro destacando a consistência e padronização.
>
> ![Livro - Consistência e Padronização](../assets/images_prints/pagina_principios_gerais/crop_consistencia.png)
>
> *Fonte: BARBOSA et al. (2021, p. 226).*

### 5. Promover a Eficiência e Antecipação (Nielsen H7)
Fornecer atalhos e aceleradores para usuários experientes e antecipar as necessidades do usuário disponibilizando os recursos adequados.

> **Figura 5:** Trecho do livro destacando eficiência, aceleradores de uso e antecipação de necessidades.
>
> ![Livro - Eficiência e Aceleradores](../assets/images_prints/pagina_principios_gerais/crop_eficiencia.png)
>
> *Fonte: BARBOSA et al. (2021, p. 227).*

### 6. Visibilidade do Status do Sistema e Reconhecimento (Nielsen H1 e H6)
Manter o usuário informado sobre o que ocorreu através de feedback adequado no tempo certo e visibilidade de opções.

> **Figura 6:** Trecho do livro destacando a visibilidade e o feedback do sistema.
>
> ![Livro - Visibilidade e Reconhecimento](../assets/images_prints/pagina_principios_gerais/crop_visibilidade.png)
>
> *Fonte: BARBOSA et al. (2021, p. 228).*

### 7. Conteúdo Relevante e Expressão Adequada (Nielsen H8)
Apresentar apenas as informações necessárias para a tarefa atual, evitando poluição visual e dados irrelevantes.

> **Figura 7:** Trecho do livro destacando a relevância de conteúdo e clareza de expressão.
>
> ![Livro - Conteúdo Relevante](../assets/images_prints/pagina_principios_gerais/crop_conteudo_relevante.png)
>
> *Fonte: BARBOSA et al. (2021, p. 229).*

---

## Evidências Visuais da Interface Real (Diolinux Plus)

Para fundamentar empiricamente a avaliação, utilizou-se o agente de navegação web autônomo para capturar telas reais da interface do Diolinux Plus ([https://plus.diolinux.com.br](https://plus.diolinux.com.br)):

### Evidência 1: Busca Dinâmica com Sugestão Autônoma de Tags e Tópicos
A barra de pesquisa antecipa termos e classifica dinamicamente por etiquetas como `#ubuntu`, `#ubuntu-2004` e resultados prévios, reduzindo o esforço do usuário ao buscar soluções repetidas.

> **Figura 8:** Captura real da barra de busca do Diolinux Plus com autocomplete e tags.
>
> ![Diolinux Plus - Busca e Sugestões](../assets/images_prints/diolinux_busca_sugestoes.png)
>
> *Fonte: Captura realizada via agente web no fórum Diolinux Plus.*

### Evidência 2: Estrutura Visual de Tópico Técnico (Breadcrumbs, Status e Perfil)
Visualização de um tópico indicando categoria (`Diolinux Feed`), tags associadas (`ubuntu`, `kernel`, `kernel-linux`), selo distintivo do autor (`Criador de Conteúdo`) e linha do tempo lateral para navegação rápida de posts.

> **Figura 9:** Captura real de um tópico técnico no Diolinux Plus.
>
> ![Diolinux Plus - Detalhe do Tópico](../assets/images_prints/diolinux_topico_detalhe.png)
>
> *Fonte: Captura realizada via agente web no fórum Diolinux Plus.*

### Evidência 3: Aceleradores de Produtividade (Modal de Atalhos do Teclado)
Modal completo de atalhos ativado pela tecla `?`, fornecendo comandos diretos para navegação (`G`+`H` para início, `G`+`C` para categorias) e edição, atendendo plenamente a usuários avançados.

> **Figura 10:** Modal de atalhos de teclado do Discourse no Diolinux Plus.
>
> ![Diolinux Plus - Atalhos do Teclado](../assets/images_prints/diolinux_atalhos_teclado.png)
>
> *Fonte: Captura realizada via agente web no fórum Diolinux Plus.*

---

## Avaliação Prática e Classificação dos Princípios / Heurísticas

Abaixo é apresentada a matriz de avaliação heurística detalhada da interface real do Diolinux Plus:

| # | Princípio / Heurística (Nielsen / Barbosa) | Classificação | Análise Crítica e Justificativa na Interface Real | Evidência Visual / Recurso |
| :-: | :--- | :---: | :--- | :--- |
| **1** | **Visibilidade do Status do Sistema** *(Nielsen H1)* | **Atende** | O fórum informa claramente o estado atual por meio de indicadores visuais de progresso, leitura de tópicos (ex: *1/1*, data de última resposta), notificações em tempo real na barra superior e badges de tópico resolvido/fechado. | [Figura 9](#evidencia-2-estrutura-visual-de-topico-tecnico-breadcrumbs-status-e-perfil) |
| **2** | **Correspondência com o Mundo Real** *(Nielsen H2 / Barbosa 1)* | **Atende** | Utiliza terminologias padrão da comunidade de Tecnologia e Open Source (*Kernel*, *Distro*, *Terminal*, *Hardware*, *Flatpak*). As categorias e tags espelham a linguagem natural dos usuários. | [Figura 8](#evidencia-1-busca-dinamica-com-sugestao-autonoma-de-tags-e-topicos) |
| **3** | **Controle e Liberdade do Usuário** *(Nielsen H3 / Barbosa 3)* | **Atende** | O usuário pode editar suas postagens após o envio, descartar rascunhos, excluir respostas recentes e fechar modais com saídas visuais claras (`X` ou tecla `Esc`). Rascunhos são salvos automaticamente no rodapé. | [Figura 10](#evidencia-3-aceleradores-de-produtividade-modal-de-atalhos-do-teclado) |
| **4** | **Consistência e Padronização** *(Nielsen H4 / Barbosa 4)* | **Atende** | Toda a interface segue rigorosamente o design system do Discourse. Elementos como botões primários azuis, tags cinzas e estrutura de cards mantêm comportamento e padrão visual idênticos em todas as páginas. | [Figura 8](#evidencia-1-busca-dinamica-com-sugestao-autonoma-de-tags-e-topicos) |
| **5** | **Prevenção de Erros** *(Nielsen H5 / Barbosa 8)* | **Atende Parcialmente** | O fórum valida campos obrigatórios (título curto demais, falta de categoria) antes da publicação. Porém, permite postagens repetidas se o título for ligeiramente modificado e falta confirmação explícita ao clicar em links externos que saem do fórum. | Validação em formulário de criação de tópico. |
| **6** | **Reconhecimento em vez de Memorização** *(Nielsen H6 / Barbosa 6)* | **Atende** | A busca apresenta sugestões automáticas (*autocomplete*) e etiquetas sugeridas. Os botões possuem ícones acompanhados de rótulos visuais explícitos. | [Figura 8](#evidencia-1-busca-dinamica-com-sugestao-autonoma-de-tags-e-topicos) |
| **7** | **Eficiência e Flexibilidade de Uso** *(Nielsen H7 / Barbosa 4)* | **Atende** | Amplo suporte a atalhos de teclado (tecla `?`, `c` para criar tópico, `/` para buscar), suporte a leitores de tela e modos visualmente flexíveis (Modo Escuro / Claro / Alto Contraste). | [Figura 10](#evidencia-3-aceleradores-de-produtividade-modal-de-atalhos-do-teclado) |
| **8** | **Estética e Design Minimalista** *(Nielsen H8 / Barbosa 7)* | **Atende** | Layout chumbo/escuro limpo, sem banners de publicidade poluentes. A hierarquia tipográfica destaca o conteúdo das dúvidas e o realce de código (*syntax highlighting*). | [Figura 9](#evidencia-2-estrutura-visual-de-topico-tecnico-breadcrumbs-status-e-perfil) |
| **9** | **Ajuda aos Usuários no Reconhecimento de Erros** *(Nielsen H9 / Barbosa 8)* | **Atende** | Mensagens de erro são apresentadas em balões vermelhos com explicação objetiva sobre o motivo da falha (ex: *"O corpo da mensagem deve conter pelo menos 20 caracteres"*). | Balão de erro em inputs inválidos. |
| **10** | **Ajuda e Documentação** *(Nielsen H10)* | **Atende Parcialmente** | Existe uma categoria dedicada a *"Manuais do Fórum"* e tópicos fixados com regras da comunidade. No entanto, a documentação de atalhos e recursos avançados é pouco visível para novos usuários que não conhecem o atalho `?`. | Categoria "Manuais do Fórum" e Guia de Regras. |

---

## Síntese dos Resultados da Avaliação Heurística

```mermaid
pie title Distribuição da Avaliação dos Princípios e Heurísticas
    "Atende (80%)" : 8
    "Atende Parcialmente (20%)" : 2
    "Viola (0%)" : 0
```

### Principais Pontos Fortes:
- **Consistência e Atalhos**: A integração nativa do Discourse garante navegabilidade exemplar por teclado e consistência visual rigorosa.
- **Linguagem e Domínio**: A estruturação em categorias e tags específicas (*Linux, Kernel, Distros*) conecta-se diretamente com o modelo mental do público-alvo.

### Oportunidades de Melhoria:
- **Visibilidade da Ajuda de Atalhos**: Adicionar um botão discreto com ícone de teclado no cabeçalho para que usuários leigos descubram a central de atalhos `?`.
- **Confirmação de Links Externos**: Implementar um modal de aviso ao clicar em links externos para prevenir saída não intencional do fórum.

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 25/09/2026 | Criação inicial do documento com os 8 princípios gerais | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| `2.0` | 05/10/2026 | Atualização completa com marcações do livro-texto, evidências visuais do fórum real via agente web, 10 Heurísticas de Nielsen e matriz classificatória (Atende/Viola/Atende Parcialmente) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant) |

---

## Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier, 2010. Cap. 8: Princípios e Diretrizes para o Design de IHC, p. 203–218.

[2] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021. Cap. 10: Princípios e Diretrizes para o Design de IHC, p. 221–232.

[3] NIELSEN, Jakob. *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group, 1994. Disponível em: <https://www.nngroup.com/articles/ten-usability-heuristics/>. Acesso em: 05 out. 2026.

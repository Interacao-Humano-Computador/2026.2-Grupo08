# Guia de Estilo: Elementos de Interface, Tipografia e Cores — Diolinux Plus

## Tabela de Contribuição e Uso de IA Generativa

| Integrante | Contribuição | Revisor | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :--- | :--- | :--- |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Elaboração e estruturação do Guia de Estilo | [Gustavo Antonio](https://github.com/gus-ant), [Vinicius Araruna](https://github.com/ViniciusA05) | Gemini | Formatação de tabelas, adequação sintática em Markdown e suporte de estilo. |

---

## Introdução

Este guia consolida as diretrizes visuais e ergonômicas da interface do fórum **Diolinux Plus** (baseado na plataforma Discourse). O objetivo é padronizar os artefatos de UI, garantir conformidade com as diretrizes de acessibilidade (WCAG 2.1) e manter a consistência visual e funcional da marca Diolinux.

Fundamentado nos conceitos da disciplina de Interação Humano-Computador (Barbosa e Silva, 2010; Barbosa et al., 2021), este artefato atua como um sistema de referência centralizado para desenvolvedores e designers de interface.

---

## 1. Paleta de Cores Oficial

A interface do Diolinux Plus utiliza como base visual o modo escuro (*Dark Mode* nativo/personalizado do ecossistema Discourse), combinando o cinza-chumbo da marca ao azul de destaque (*accent*).

### 1.1 Cores Principais e de Superfície

| Token de Design | Código Hex | Descrição de Uso | Razão de Contraste (WCAG) | Nível WCAG |
| :--- | :--- | :--- | :--- | :--- |
| `--primary` / Text High | `#F5F6F8` | Texto principal, títulos e ícones de alto destaque | 13.8:1 (sobre `#1E1F24`) | AAA |
| `--primary-medium` / Text Muted | `#A0A5B1` | Metadados, datas, contadores e subtítulos | 5.8:1 (sobre `#1E1F24`) | AA |
| `--tertiary` / Accent Primary | `#0084FF` / `#1E90FF` | Links ativos, botões primários e foco interativo | 5.1:1 (sobre `#1E1F24`) / 4.6:1 (c/ branco) | AA |
| `--secondary` / BG Base | `#16171B` | Fundo principal da página | — | Base |
| `--header_background` / BG Card | `#1E1F24` | Superfície do cabeçalho, cards e modais | — | Superfície |
| `--border-color` | `#2D2F36` | Divisores, bordas de tabela e inputs | 3.2:1 (contraste UI) | AA (UI) |

### 1.2 Cores de Feedback e Semântica

| Categoria | Token / Hex | Finalidade de Uso |
| :--- | :--- | :--- |
| **Sucesso** | `#2ECC71` | Tópico resolvido (*solved*), ações concluídas, badges de aprovação |
| **Atenção / Alerta** | `#E67E22` / `#F39C12` | Avisos de moderação, notificações pendentes, tópicos arquivados |
| **Erro / Perigo** | `#E74C3C` | Mensagens de exclusão, campos inválidos, denúncias (*flags*) |
| **Informativo / Staff** | `#3498DB` | Pinos globais, avisos institucionais da equipe Diolinux |

---

## 2. Escala Tipográfica

A tipografia do Diolinux Plus prioriza legibilidade em longas leituras e integração nativa com sistemas operacionais (Linux, Windows, macOS, Android).

### 2.1 Famílias Tipográficas (*Font Stack*)
* **Interface e Texto Corrido:**  
  `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
* **Blocos de Código e Terminal:**  
  `ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`

### 2.2 Escala de Tamanhos e Pesos

| Nível / Elemento | Tamanho | Altura da Linha (*Line Height*) | Peso (*Font Weight*) | Exemplo de Aplicação |
| :--- | :--- | :--- | :--- | :--- |
| **H1** | 24px (`1.5rem`) | 32px (`1.33`) | Bold (700) | Título do tópico aberto |
| **H2** | 20px (`1.25rem`) | 28px (`1.40`) | Semi-Bold (600) | Títulos de seções no corpo do post |
| **H3** | 17px (`1.06rem`) | 24px (`1.41`) | Semi-Bold (600) | Nomes de categorias, cabeçalhos de modais |
| **Body (P)** | 15px (`0.9375rem`)| 22px (`1.46`) | Regular (400) | Mensagens dos tópicos e posts |
| **Small / Metadata** | 13px (`0.8125rem`)| 18px (`1.38`) | Regular (400) / Medium (500) | Tags, contadores, timestamps |
| **Code Block** | 13px (`0.8125rem`)| 19px (`1.45`) | Regular (400) | Trechos em `pre`, `code` e comandos |

---

## 3. Catálogo de Componentes UI

### 3.1 Botões (`.btn`)
* **Botão Primário (`.btn-primary`):**  
  * *Background:* `#0084FF` | *Texto:* `#FFFFFF` (Bold 600)  
  * *Hover:* `#006ED4` | *Radius:* `4px` | *Padding:* `8px 16px`  
  * *Uso:* "Criar Tópico", "Responder", "Salvar Alterações".
* **Botão Secundário / Ghost (`.btn-default`):**  
  * *Background:* `#2D2F36` | *Texto:* `#F5F6F8`  
  * *Hover:* `#3A3D46` | *Border:* `1px solid transparent`  
  * *Uso:* "Cancelar", ações secundárias em formulários.
* **Botão de Ação Destrutiva / Perigo (`.btn-danger`):**  
  * *Background:* `#E74C3C` | *Texto:* `#FFFFFF`  
  * *Hover:* `#C0392B`  
  * *Uso:* "Excluir Post", "Suspender Usuário".

### 3.2 Caixa de Busca (`.search-bar`)
* **Estrutura:** Campo de entrada com ícone de lupa (*Magnifying Glass*) integrado à direita ou esquerda.
* **Dimensões e Estilo:** Altura mínima de `38px`, borda em `#2D2F36`, fundo `#16171B`, raio de curvatura de `6px`.
* **Estados:**
  * *Default:* Borda cinza suave (`#2D2F36`), placeholder `#A0A5B1`.
  * *Focus:* Anel de foco externo (`outline: 2px solid #0084FF`) com fundo levemente clareado (`#1E1F24`).

### 3.3 Alertas e Notificações (`.alert-box`)
* **Formato:** Barra horizontal com cantos de `4px`, padding de `12px 16px`, ícone representativo e botão de fechar quando dismissível.
* **Variações:**
  * *Informação:* Fundo `#1B2A3D` com borda esquerda `#3498DB` (`3px solid`).
  * *Aviso:* Fundo `#2D2619` com borda esquerda `#E67E22`.
  * *Erro:* Fundo `#301A1B` com borda esquerda `#E74C3C`.

### 3.4 Badges e Tags (`.badge-category` / `.discourse-tag`)
* **Badges de Categoria:**  
  * Utilizam cor primária da categoria (ex.: Verde para *Linux*, Roxo para *Design*, Laranja para *Hardware*).  
  * Formato quadrado com `border-radius: 2px` ou pílula (`pill`).
* **Tags de Identificação:**  
  * Fundo `#23252C`, texto `#A0A5B1`, tipografia `12px`, padding `2px 8px`, formato arredondado (`border-radius: 4px`).

### 3.5 Iconografia
* **Biblioteca Padrão:** **Font Awesome Free** (integrado nativamente ao core do Discourse).
* **Grid de Ícones:** `16x16px` para ações inline e metadados; `20x20px` para barra de navegação/ações principais de cabeçalho.
* **Ícones Frequentes:**
  * Busca: `fa-search` / `magnifying-glass`
  * Notificações: `fa-bell`
  * Curtir/Like: `fa-heart`
  * Tópico Resolvido: `fa-check-circle`
  * Menu Mobile/Drawer: `fa-bars`

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 05/10/2026 | Criação do documento do Guia de Estilo com paleta de cores, tipografia e catálogo de componentes UI do Diolinux Plus | [Edvaldo Soares](https://github.com/PajeMurici-dev) | [Gustavo Antonio](https://github.com/gus-ant), [Vinicius Araruna](https://github.com/ViniciusA05) |

---

## Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier, 2010.

[2] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021. Cap. 10: Princípios e Diretrizes para o Design de IHC.

[3] W3C. *Web Content Accessibility Guidelines (WCAG) 2.1*. Disponível em: <https://www.w3.org/TR/WCAG21/>. Acesso em: 05 de outubro de 2026.

---

## Agradecimentos e Uso de Inteligência Artificial Generativa

Este documento contou com suporte de Inteligência Artificial Generativa para auxílio no cálculo e validação das razões de contraste WCAG 2.1, além da formatação padronizada em tabelas Markdown. O conteúdo visual, componentes e especificações do Diolinux Plus foram extraídos e validados diretamente da interface da plataforma.

# Protótipo Interativo de Alta Fidelidade (Tarefa 2 — Eventos Presenciais)

## Tabela de Contribuição e Transparência no Uso de Inteligência Artificial Generativa

A Tabela 1 apresenta a matriz de governança, responsabilidade autoral e declaração ética de uso de inteligência artificial generativa na concepção e documentação deste protótipo de alta fidelidade.

**Tabela 1** — Matriz de Contribuição do Protótipo de Alta Fidelidade da Tarefa 2

| Integrante | Atribuição no Artefato | Data | Horário | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :---: | :---: | :--- | :--- |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | Concepção, desenvolvimento frontend (HTML5/CSS3/Vanilla JS) e documentação do protótipo interativo web de alta fidelidade da Tarefa 2 (Hub, Wizard 3 etapas, mapa FGA e ingressos). | 11/11/2026 | 14:00 - 18:30 | Google Gemini (LLM) | Apoio na estruturação da sintaxe de componentes modais e estilização em conformidade com o Guia de Estilo. |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Revisão por pares, verificação da conformidade com o Guia de Estilo (Dark Mode e tokens Discourse) e validação dos fluxos interativos. | 11/11/2026 | 19:00 - 19:40 | — | Revisão humana por pares. |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Verificação metodológica de alinhamento com a análise de tarefas (HTA/CTT) e teste de integridade na Wiki. | 11/11/2026 | 20:00 - 20:30 | — | Revisão humana por pares. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 1. Visão Geral e Arquitetura do Protótipo

No **Ciclo de Vida da Engenharia de Usabilidade de Deborah Mayhew (1999)**, a transição para o **Nível 3** requer a materialização da interface em alta fidelidade com plena capacidade interativa, dispensando o papel de "Computador Humano" (*Snyder, 2003*).

Para a **Tarefa 2 (`CF02` — Criação e Gestão de Eventos Presenciais da Comunidade)**, a equipe optou por construir uma **aplicação web interativa executável (HTML5, CSS3 e JavaScript Vanilla)** diretamente integrada ao repositório do projeto. Esta abordagem confere fidelidade operacional superior às ferramentas de telas estáticas, permitindo:
- **Digitação e Validação Nativa em Tempo Real:** Validações de campos obrigatórios, bloqueios de avanço sem dados válidos e persistência de rascunho;
- **Relógio Analógico Interativo 24h:** Seletor de horário com mostrador concêntrico duplo (00-11 externo / 12-23 interno), sem as ambiguidades de notação AM/PM apontadas na avaliação do protótipo de papel;
- **Planta Interativa do Campus UnB Gama (FGA):** Mapa vetorial navegável com suporte a clique direto, atalhos de pontos de referência (Bloco UAC, Sala I-04, Bloco UED, Estacionamento) e pin georreferenciado;
- **Cálculo Dinâmico de Quórum e Lotação:** Parametrização prioritária do *Quórum Mínimo de Viabilidade* antes da lotação máxima, evitando o cancelamento de encontros comunitários;
- **Emissão Determinística de Credencial e QR Code SVG:** Geração dinâmica do ingresso público e integração com calendário (.ics).

---

## 2. Acesso Direto e Demonstração Interativa

Você pode interagir com o protótipo diretamente pelo componente incorporado abaixo ou abri-lo em uma nova guia para experimentação em tela cheia com responsividade completa:

<div style="text-align: center; margin: 24px 0;">
  <a href="../prototipo-tarefa2/index.html" target="_blank" rel="noopener noreferrer" style="background-color: #0084FF; color: #ffffff; padding: 12px 24px; border-radius: 6px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(0, 132, 255, 0.35);">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
    Abrir Protótipo em Nova Guia (Tela Cheia)
  </a>
</div>

<div style="border: 2px solid #2D2F36; border-radius: 8px; overflow: hidden; background: #16171B; box-shadow: 0 8px 24px rgba(0,0,0,0.45);">
  <iframe src="../prototipo-tarefa2/index.html" style="width: 100%; height: 780px; border: none;" title="Protótipo Interativo da Tarefa 2 — Fórum Diolinux Plus"></iframe>
</div>

---

## 3. Estrutura de Telas e Componentes Implementados

A Tabela 2 relaciona as telas, views e componentes desenvolvidos na aplicação web de alta fidelidade e suas correspondências com o modelo conceitual.

**Tabela 2** — Mapeamento Estrutural das Views do Protótipo Web

| Identificador | Nome do Componente / View | Descrição Funcional e Ações Disponíveis | Correspondência no Nível 2 |
| :---: | :--- | :--- | :---: |
| **`PB-01`** | **Hub de Eventos da Comunidade (`#view-hub`)** | Página principal com listagem em grid de eventos abertos, filtros dinâmicos por categoria/data e gatilho de criação `+ Criar Novo Evento`. | Tela Base de Acesso |
| **`PB-02 (E1)`** | **Assistente: Informações Gerais (`#view-wizard` - Etapa 1)** | Definição de título, seleção de categoria temática e editor descritivo com formatação básica. | Prancha P2-01 |
| **`PB-02 (E2)`** | **Assistente: Data, Horário e Local (`#view-wizard` - Etapa 2)** | Acionamento do seletor de horário nativo 24h e integração com a planta interativa do campus FGA. | Prancha P2-02 |
| **`PB-02 (E3)`** | **Assistente: Quórum e Ingressos (`#view-wizard` - Etapa 3)** | Configuração do quórum de viabilidade comunitária, limite de vagas gratuitas e confirmação de publicação. | Prancha P2-03 |
| **`PM-01`** | **Modal de Cancelamento com Confirmação (`#modal-cancel-confirm`)** | Prevenção de perda de dados ao acionar o descarte do assistente com salvamento prévio em rascunho. | Peça Móvel PM-01 |
| **`PM-02`** | **Seletor de Horário Analógico 24h (`#modal-timepicker`)** | Interface em relógio com seletor angular concêntrico para definição precisa de início e fim. | Reprojeto de Usabilidade |
| **`PM-03`** | **Planta Interativa do Campus UnB Gama (`#modal-map-picker`)** | Mapa vetorial com pin arrastável, geocodificação visual e atalhos para os Blocos UAC e UED. | Peça Móvel PM-03 |
| **`PB-03`** | **Página do Evento Publicado (`#view-published`)** | Visão pública completa com mapa expandido 16:9, quórum em tempo real, download de credencial SVG com QR Code e arquivo `.ics`. | Prancha P2-04 |

_Fonte: Elaborada por Gustavo Antonio Rodrigues e Silva, 2026._

---

## 4. Conformidade com o Guia de Estilo (Tokens Discourse)

O protótipo web reproduz fielmente as diretrizes estéticas e ergonômicas estabelecidas no [Guia de Estilo](../../analise-requisitos/guia-de-estilo.md) do Fórum Diolinux Plus:
- **Cores Oficiais do Dark Mode:** Fundo principal `#16171B` (`--secondary`), superfície de cartões `#1E1F24` (`--header_background`), bordas sutis `#2D2F36` e cor primária de destaque `#0084FF` (`--tertiary`);
- **Tipografia:** Fontes de sistema `Inter` para legibilidade da interface e `IBM Plex Mono` para coordenadas geográficas, códigos e seletores temporais;
- **Acessibilidade e Contraste:** Relação de contraste em conformidade com as diretrizes WCAG 2.1 AA em todos os estados de foco, hover e botões ativos.

---

## 5. Histórico de Versão

A Tabela 3 documenta o histórico de versões deste artefato.

**Tabela 3** — Histórico de Versão do Protótipo de Alta Fidelidade (Tarefa 2)

| Versão | Data | Descrição da Alteração | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 11/11/2026 | Publicação da página de documentação do protótipo interativo web da Tarefa 2, incluindo iframe embarcado, botão de tela cheia, mapeamento de componentes e conformidade com o Guia de Estilo (#125). | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._
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

_Autor do Item Teórico: [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant)_

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
| **`PM-02`** | **Seletor de Horário Analógico 24h (`#modal-time`)** | Interface em relógio com seletor angular concêntrico para definição precisa de início e fim. | Reprojeto de Usabilidade |
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

## 5. Lista de Verificação da Técnica (Protótipo de Alta Fidelidade)

A Tabela 3 formaliza a auditoria técnica e metodológica do protótipo interativo web de alta fidelidade da Tarefa 2, em conformidade com os critérios da Engenharia de Usabilidade (*Mayhew, 1999; Barbosa et al., 2021; Nielsen, 1994; Sales, 2026*).

**Tabela 3** — Lista de Verificação do Protótipo de Alta Fidelidade (Tarefa 2 — Eventos Presenciais)

| ID | Critério Normativo Avaliado | Origem / Literatura | Conforme? | Resposta Autoexplicativa e Evidência no Artefato |
| :---: | :--- | :--- | :---: | :--- |
| **`PAF-T2-V01`** | **Autonomia Interativa sem "Computador Humano":** O protótipo responde de forma autônoma a cliques, digitação, arraste e validações de formulário? | Rubin & Chisnell (2008); Barbosa et al. (2021, p. 252) | Sim | A aplicação web executável em HTML5/CSS3/JS Vanilla processa em tempo real transições entre views (`#view-hub`, `#view-wizard`, `#view-published`), validações de campos e modais sem mediação humana. |
| **`PAF-T2-V02`** | **Fidelidade Visual e Conformidade com o Guia de Estilo:** O protótipo aplica os tokens cromáticos, tipográficos e de contraste WCAG 2.1 definidos na Etapa 3? | Mayhew (1999); Guia de Estilo (Grupo 08) | Sim | Implementa os tokens oficiais (`#16171B`, `#1E1F24`, `#0084FF`), tipografia `Inter` / `IBM Plex Mono` e alternância nativa entre Dark Mode, Light Mode e Alto Contraste. |
| **`PAF-T2-V03`** | **Rastreabilidade de Reprojeto do Nível 2 → Nível 3:** As falhas diagnosticadas no protótipo de papel (como ambiguidade AM/PM e quórum) foram sanadas? | Mayhew (1999); Snyder (2003) | Sim | O seletor 24h analógico concêntrico (`#modal-time`) elimina notação AM/PM e a Etapa 3 do Wizard prioriza o Quórum Mínimo antes da lotação máxima, apenas com eventos gratuitos da comunidade. |
| **`PAF-T2-V04`** | **Prevenção de Erros e Diálogos de Confirmação:** A interface previne descarte acidental de dados e valida intervalos inconsistentes? | Nielsen (1994, Heurística 5) | Sim | O modal `#modal-cancel-confirm` exige dupla confirmação antes de descartar rascunhos e o seletor `#modal-time` bloqueia horários de término anteriores ao início. |
| **`PAF-T2-V05`** | **Manipulação Direta e Feedback Visível do Sistema:** Componentes espaciais e ações de conclusão fornecem feedback imediato ao usuário? | Nielsen (1994, Heurística 1) | Sim | A planta interativa da UnB Gama (`#modal-map-picker`) permite arraste direto de pin e atalhos de blocos, enquanto `#view-published` gera ingresso com QR Code SVG e arquivo `.ics`. |
| **`PAF-T2-V06`** | **Acessibilidade Operacional e Navegação por Teclado:** Há suporte a atalhos de teclado, atributos ARIA e foco visível? | W3C WCAG 2.1; Barbosa et al. (2021) | Sim | Modais possuem `role="dialog"`, `aria-modal="true"`, fechamento via `Esc`, atalhos globais (`/`, `E`, `N`, `?`) e foco visível com `outline: 2px solid var(--tertiary)`. |

_Fonte: Elaborada por Gustavo Antonio Rodrigues e Silva com base em Mayhew (1999), Nielsen (1994), Snyder (2003), Rubin e Chisnell (2008) e Barbosa et al. (2021), 2026._

---

## 6. Agradecimentos e Declaração de Uso de IA Generativa

Em cumprimento às diretrizes éticas da Sociedade Brasileira de Computação (SBC) e às normas do Plano de Ensino da disciplina (Sales, 2026), declara-se que durante a elaboração deste artefato foram utilizados recursos de Inteligência Artificial Generativa (Google Gemini / LLM e Antigravity) para apoio na estruturação sintática de componentes HTML5/CSS3/JS Vanilla, validação de tabelas em Markdown e adequação normativa. Todo o embasamento teórico, formulação conceitual, decisões ergonômicas e validações foram concebidos, auditados e validados integralmente pelos autores humanos listados no Histórico de Versão.

---

## 7. Histórico de Versão

A Tabela 4 documenta o histórico de versões deste artefato.

**Tabela 4** — Histórico de Versão do Protótipo de Alta Fidelidade (Tarefa 2)

| Versão | Data | Descrição da Alteração | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.1` | 13/11/2026 | Inclusão da identificação nominal de autoria teórica, Lista de Verificação da Técnica (Tabela 3), seção padronizada de Agradecimentos e Uso de IA Generativa, Referências Bibliográficas (ABNT) e remoção da modalidade monetária via PIX do protótipo (#125, #150). | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| `1.0` | 11/11/2026 | Publicação da página de documentação do protótipo interativo web da Tarefa 2, incluindo iframe embarcado, botão de tela cheia, mapeamento de componentes e conformidade com o Guia de Estilo (#125). | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 8. Referências Bibliográficas

- **BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira.** *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.
- **MAYHEW, Deborah J.** *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999. ISBN 978-1-55860-561-9.
- **NIELSEN, Jakob.** *Usability Engineering*. San Francisco: Morgan Kaufmann Publishers, 1994. ISBN 978-0-12-518406-9.
- **RUBIN, Jeffrey; CHISNELL, Dana.** *Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests*. 2. ed. Indianapolis: Wiley, 2008.
- **SALES, André Barros de.** *Plano de Ensino da Disciplina de Interação Humano Computador (FGA0173)*. Brasília: Universidade de Brasília, Faculdade UnB Gama, 2026.
- **SNYDER, Carolyn.** *Paper Prototyping: The Fast and Easy Way to Design and Refine User Interfaces*. San Francisco: Morgan Kaufmann, 2003. ISBN 978-1558608702.
# Entrega 7: Relato dos Resultados da Avaliação do Protótipo de Alta Fidelidade (Nível 3)

## Tabela de Contribuição e Transparência no Uso de IA Generativa

A Tabela 1 apresenta a matriz de governança, divisão de atribuições e declaração ética de uso de ferramentas de inteligência artificial generativa na estruturação desta síntese da Entrega 7.

**Tabela 1** — Matriz de Contribuição e Uso de IA Generativa da Entrega 7

| Integrante | Atribuição no Artefato | Data | Horário | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :---: | :---: | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Tech Lead / PO / Autor da Tarefa 1**: Estruturação geral da síntese da Entrega 7, matriz de rastreabilidade de Nível 3, consolidação dos resultados empíricos da amostra de 3 participantes na Tarefa 1 (tempo médio de `91,3 s` vs. `135,3 s` KLM e escore SUS médio de `82,5 pontos`), autoavaliação de Fagan e incorporação dos registros audiovisuais no YouTube. | 12/11/2026 | 19:15 - 20:30 | Claude Design (Anthropic) e Claude (LLM) | Construção do protótipo computacional de alta fidelidade da Tarefa 1 no Claude Design, apoio na formatação sintática de tabelas Markdown e verificação de consistência terminológica. |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Autor da Tarefa 2 / Coautor da Entrega 7**: Concepção e desenvolvimento frontend da aplicação web interativa em alta fidelidade da Tarefa 2 (`prototipo-tarefa2/`), documentação e galeria em `prototipo-alta-fidelidade-tarefa2.md`, execução do teste-piloto e das 3 sessões empíricas com usuários (`relato-resultados-tarefa2.md`), modelagem do cenário e perguntas investigativas (`PAF-T2-01` a `07`) e revisão por pares. | 11/11/2026 a 15/11/2026 | 14:00 - 18:30 | Google Gemini (LLM) e Antigravity | Apoio na codificação de componentes dinâmicos (relógio 24h, mapa FGA e QR Code SVG), formatação de tabelas Markdown e validação da matriz de rastreabilidade. |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Coautor e Revisor Metodológico (Tarefa 3)**: Conferência de conformidade com os critérios de inspeção de Fagan, checagem da anonimização LGPD e auditoria dos links integrados. | 12/11/2026 | 20:50 - 21:10 | — | Revisão humana por pares e conferência normativa. |

_Fonte: Elaborada por Vinicius Silva Araruna, Gustavo Antonio Rodrigues e Silva e Edvaldo Soares Brasileiro Filho, 2026._

---

## 1. Introdução e Enquadramento no Ciclo de Mayhew

Esta página consolida a documentação técnica oficial e os resultados produzidos pelo **Grupo 08** na **Entrega 7** da disciplina de Interação Humano-Computador (FGA0173 — Turma 01), ministrada pelo Prof. Dr. André Barros de Sales na Faculdade de Ciências e Tecnologias em Engenharia (FCTE/FGA) da Universidade de Brasília (UnB).

No **Ciclo de Vida da Engenharia de Usabilidade de Deborah Mayhew (1999)**, a Entrega 7 cumpre a etapa culminante do **Nível 3 (Design Detalhado e Prototipação Computacional de Alta Fidelidade)**:

1. **Materialização Digital de Alta Fidelidade:**  
   O projeto substitui as simulações táteis artesanais em papel por ambientes digitais interativos de alta resolução — com a **Tarefa 1 (`CF01`)** concebida e prototipada no **Claude Design (Anthropic)**, a **Tarefa 2 (`CF02`)** desenvolvida como uma **aplicação web interativa executável em HTML5, CSS3 e JavaScript Vanilla** (com mapa interativo do campus da FGA, seletor de horário 24h e emissão de ingressos com QR Code SVG) e a **Tarefa 3 (`CF03`)** estruturada no ambiente **Figma Education** — aplicando integralmente os tokens do [Guia de Estilo](../analise-requisitos/guia-de-estilo.md) em Dark Mode e eliminando a figura do "Computador Humano" (*Snyder, 2003; Rettig, 1994*);
2. **Avaliação Formativa e Somativa com Amostra Baseada em Krug (2014) e Nielsen & Landauer (1993):**  
   Condução empírica presencial de testes de usabilidade com **3 participantes voluntários anônimos (P1, P2 e P3)** aderentes ao perfil da persona primária **Lucas Mendonça** (alcançando cobertura teórica de **67,15%** dos problemas de interface), avaliando tempos cronometrados de execução frente ao baseline preditivo do **KLM (Keystroke-Level Model)** e mensurando a satisfação psicométrica padronizada através da **System Usability Scale (SUS — Brooke, 1996)**;
3. **Direcionamento do Reprojeto Final:**  
   Catalogação das oportunidades de melhoria segundo a Escala de Severidade de Jakob Nielsen (1994), preparando a interface do [Fórum Diolinux Plus](https://plus.diolinux.com.br) para a consolidação final do projeto na Etapa 8.

---

## 2. Matriz de Rastreabilidade dos Artefatos de Nível 3

A Tabela 2 apresenta a matriz de rastreabilidade completa da Entrega 7, articulando cada requisito da disciplina aos artefatos desenvolvidos no repositório.

**Tabela 2** — Matriz de Rastreabilidade dos Artefatos da Entrega 7

| Nível / Fase | Artefato Metodológico | Descrição do Conteúdo Técnico | Autor Principal | Revisor(es) |
| :--- | :--- | :--- | :--- | :--- |
| **Nível 3 — Hub** | [Hub de Alta Fidelidade](../design-avaliacao-desenvolvimento/nivel-3/index.md) | Introdução conceitual ao Nível 3 de Mayhew, fundamentação teórica de Rubin & Chisnell (2008) e tripartição das três tarefas da equipe. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Nível 3 — Planejamento** | [Planejamento da Avaliação de Alta Fidelidade](../design-avaliacao-desenvolvimento/nivel-3/planejamento-avaliacao.md) | Framework DECIDE completo, perguntas investigativas (`PAF01` a `PAF08` da T1 e `PAF-T2-01` a `PAF-T2-07` da T2), roteiros de tarefas, métricas KLM e SUS, orçamento custo zero e TCLE oral de 60s. | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Gustavo Antonio](https://github.com/gus-ant) | [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Nível 3 — Planejamento** | [Planejamento do Relato de Resultados](../design-avaliacao-desenvolvimento/nivel-3/planejamento-relato-resultados.md) | Estrutura dos 9 tópicos canônicos de Barbosa & Silva (2021), modelos de métricas/SUS (Tabela 2 para T1 e Tabela 2b para T2) e matrizes de severidade de Nielsen (Tabela 3 e Tabela 3b — `PROB-AF-T2-01` a `05`). | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Gustavo Antonio](https://github.com/gus-ant) | [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Nível 3 — Protótipo (T1)** | [Especificação do Protótipo no Claude Design (Tarefa 1)](../design-avaliacao-desenvolvimento/nivel-3/prototipo-alta-fidelidade.md) | Mapeamento das 7 pranchas canônicas (`T1_F01` a `T1_F03b` e Overlays `T1_OV01` a `OV03`), tokens Dark Mode, resolução de `PROB-PP-01` a `05` e checklist de 8 itens. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Nível 3 — Piloto (T1)** | [Protocolo e Relato do Teste-Piloto (Tarefa 1)](../design-avaliacao-desenvolvimento/nivel-3/teste-piloto.md) | Ensaio instrumental no OBS Studio (1080p 60fps), validação do TCLE oral em 48s, vídeo incorporado (`https://youtu.be/r7vN1XWerE4`) e cláusula estrita de isolamento de dados. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Nível 3 — Relato (T1)** | [Relato dos Resultados de Alta Fidelidade (Tarefa 1)](../design-avaliacao-desenvolvimento/nivel-3/relato-resultados.md) | Consolidação empírica com amostra de 3 participantes (Krug, 2014; Nielsen & Landauer, 1993), redução temporal média de 32,5% frente ao KLM (`91,3 s` vs. `135,3 s`), escore SUS médio de `82,5 pontos` (Grau A), 3 vídeos incorporados e matriz de severidade (`PROB-AF-01` a `05`). | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Nível 3 — Protótipo (T2)** | [Protótipo Interativo Web (Tarefa 2)](../design-avaliacao-desenvolvimento/nivel-3/prototipo-alta-fidelidade-tarefa2.md) | Especificação técnica e galeria com 6 telas em alta resolução (`T2_PB01` a `T2_PB03`, `T2_PM02`, `T2_PM03`), tokens Discourse e Lista de Verificação (`PAF-T2-V01` a `V06`). | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Nível 3 — Executável (T2)** | [Aplicação Web Interativa (Tarefa 2)](../design-avaliacao-desenvolvimento/nivel-3/prototipo-tarefa2/index.html) | Aplicação web executável em HTML5/CSS3/Vanilla JS: Hub de Eventos, Wizard em 3 etapas, relógio analógico 24h, mapa vetorial da FGA com pin arrastável, quórum comunitário e ingresso QR Code SVG. | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Nível 3 — Piloto e Relato (T2)** | [Teste-Piloto e Relato dos Resultados (Tarefa 2)](../design-avaliacao-desenvolvimento/nivel-3/relato-resultados-tarefa2.md) | Registro audiovisual do teste-piloto (`https://youtu.be/SzvR4D9lKaw`) e das três sessões empíricas (`P1`, `P2` e `P3`) no Protótipo Interativo Web, com estrutura dos 9 tópicos canônicos, perguntas `PAF-T2-01` a `07`, SUS/SEQ e severidade de Nielsen. | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Nível 3 — Protótipo (T3)** | [Protótipo de Alta Fidelidade (Tarefa 3)](../design-avaliacao-desenvolvimento/nivel-3/prototipo-alta-fidelidade-tarefa3.md) | Especificação das 4 telas canônicas no Claude Design para Agendamento de Horários com Autores de Tópicos, tokens Dark Mode, rastreabilidade do papel e proposta de reprojeto de fontes (`T3_F05`). | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) |
| **Nível 3 — Piloto e Relato (T3)** | [Teste-Piloto e Relato dos Resultados (Tarefa 3)](../design-avaliacao-desenvolvimento/nivel-3/relato-resultados-tarefa3.md) | Registro audiovisual e relato empírico da avaliação com 3 participantes no Claude Design (sessões de `05:20`, `04:20` e `05:40`), tempo médio da tarefa de `45,0 s`, escore SUS médio de `87,5 pontos` (Grau A), análise das 8 perguntas e catálogo de severidade (`PROB-AF3-01` — aumento de fontes sugerido por P3). | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) |
| **Governança — Atas** | [Atas de Reunião da Equipe](../atas/index.md) | Registros formais de alinhamento, decisões de projeto e planejamento das entregas. | [Edvaldo Soares](https://github.com/PajeMurici-dev) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |

_Fonte: Elaborada por Vinicius Silva Araruna, Gustavo Antonio Rodrigues e Silva e Edvaldo Soares Brasileiro Filho, 2026._

---

## 3. Registros Audiovisuais da Entrega 7

Em atendimento às normas regimentais da disciplina (*Sales, 2026*), esta seção organiza de forma atômica os registros em vídeo associados à Entrega 7, hospedados no YouTube sob regime **"Não Listado"**.

### 3.1 Apresentação Oficial da Entrega 7 (Tarefa 1)

A Tabela 3 apresenta os dados cadastrais da gravação da apresentação individual oficial da **Entrega 7** referente à **Tarefa 1 (`CF01`)**, estruturada com foco prático nas telas do protótipo no **Claude Design**, nos resultados cronometrados frente ao KLM e nos achados psicométricos da escala SUS.

**Tabela 3** — Metadados da Apresentação Oficial da Entrega 7 (Tarefa 1)

| Atributo | Detalhamento |
| :--- | :--- |
| **Link do Vídeo no YouTube** | [Assistir Apresentação no YouTube (Não Listado): https://youtu.be/kZtajVn5fIQ](https://youtu.be/kZtajVn5fIQ) |
| **Integrante Participante** | [Vinicius Silva Araruna](https://github.com/ViniciusA05) (PO / Tech Lead — Autor da Tarefa 1) |
| **Objeto de Apresentação** | Protótipo de Alta Fidelidade no Claude Design (`T1_F01` a `T1_F03b` e Overlays), Teste-Piloto Instrumental, Amostra Empírica (`n = 3`), Confronto KLM (`91,3 s` vs. `135,3 s`), Escore SUS (`82,5 pontos`), Severidade de Nielsen (`PROB-AF-01` a `05`) e Reprojeto |
| **Data da Gravação** | 13/11/2026 |
| **Formato** | Apresentação prática direta nos artefatos documentados, sem aula teórica expositiva (*Sales, 2026*) |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

<details class="video-card-details" open>
    <summary class="video-card-summary">
        <div class="video-card-title">
            <span style="font-size: 1.25rem;">🎬</span>
            <span><strong>Vídeo Principal</strong> — Apresentação Oficial da Entrega 7: Tarefa 1 (Vinicius Silva — IHC 2026.2)</span>
        </div>
        <span class="video-card-toggle">Assistir à Apresentação</span>
    </summary>
    <div class="video-card-body">
        <div class="video-card-frame">
            <iframe src="https://www.youtube-nocookie.com/embed/kZtajVn5fIQ" title="Apresentação Oficial da Entrega 7 (Tarefa 1) - Grupo 08 - IHC 2026.2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-card-footer">
            <span class="video-card-caption"><strong>Vídeo Principal</strong> — Apresentação prática dos resultados da Tarefa 1 no Nível 3 de alta fidelidade (Entrega 7). <em>Fonte: Vinicius Silva Araruna / Grupo 08, 2026.</em></span>
            <a href="https://youtu.be/kZtajVn5fIQ" target="_blank" rel="noopener noreferrer" class="video-card-btn">
                <span>Assistir no YouTube</span> ↗
            </a>
        </div>
    </div>
</details>

### 3.1.2 Apresentação Oficial da Entrega 7 (Tarefa 2)

A Tabela 3b apresenta os dados cadastrais da gravação da apresentação individual oficial da **Entrega 7** referente à **Tarefa 2 (`CF02`)**, demonstrando na prática o protótipo web interativo em HTML5/CSS3/Vanilla JS, o teste-piloto, as sessões empíricas (`P1`, `P2` e `P3`), as métricas SUS/SEQ e a matriz de severidade.

**Tabela 3b** — Metadados da Apresentação Oficial da Entrega 7 (Tarefa 2)

| Atributo | Detalhamento |
| :--- | :--- |
| **Link do Vídeo no YouTube** | [Assistir Apresentação no YouTube (Não Listado): https://youtu.be/5bei648S9VE](https://youtu.be/5bei648S9VE) |
| **Integrante Participante** | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) (Autor da Tarefa 2) |
| **Objeto de Apresentação** | Protótipo Interativo Web (`prototipo-tarefa2/`), Especificação e Galeria (`prototipo-alta-fidelidade-tarefa2.md`), Teste-Piloto, Amostra Empírica (`n = 3`), Escores SUS/SEQ, Severidade de Nielsen e Reprojeto |
| **Data da Gravação** | 15/11/2026 |
| **Formato** | Apresentação prática direta nos artefatos documentados, sem aula teórica expositiva (*Sales, 2026*) |

_Fonte: Elaborada por Gustavo Antonio Rodrigues e Silva, 2026._

<details class="video-card-details" open>
    <summary class="video-card-summary">
        <div class="video-card-title">
            <span style="font-size: 1.25rem;">🎬</span>
            <span><strong>Vídeo Principal</strong> — Apresentação Oficial da Entrega 7: Tarefa 2 (Gustavo Antonio — IHC 2026.2)</span>
        </div>
        <span class="video-card-toggle">Assistir à Apresentação</span>
    </summary>
    <div class="video-card-body">
        <div class="video-card-frame">
            <iframe src="https://www.youtube-nocookie.com/embed/5bei648S9VE" title="Apresentação Oficial da Entrega 7 (Tarefa 2) - Grupo 08 - IHC 2026.2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-card-footer">
            <span class="video-card-caption"><strong>Vídeo Principal</strong> — Apresentação prática dos resultados da Tarefa 2 no Nível 3 de alta fidelidade (Entrega 7). <em>Fonte: Gustavo Antonio Rodrigues e Silva / Grupo 08, 2026.</em></span>
            <a href="https://youtu.be/5bei648S9VE" target="_blank" rel="noopener noreferrer" class="video-card-btn">
                <span>Assistir no YouTube</span> ↗
            </a>
        </div>
    </div>
</details>

### 3.2 Registros das Sessões de Avaliação da Tarefa 1 (Nível 3 — Vinicius Silva)

Para manter a navegação atômica e ágil desta página de síntese, os players completos com as gravações das sessões presenciais empíricas (contendo o TCLE oral nos primeiros 60 segundos e o protocolo *Think-Aloud*) e do teste-piloto encontram-se incorporados diretamente em [Relato dos Resultados de Alta Fidelidade (Seção 9)](../design-avaliacao-desenvolvimento/nivel-3/relato-resultados.md#9-registros-audiovisuais-e-clausula-de-isolamento-do-teste-piloto) e em [Protocolo e Relato do Teste-Piloto](../design-avaliacao-desenvolvimento/nivel-3/teste-piloto.md#2-registro-audiovisual-do-teste-piloto), acessíveis também pelos links diretos abaixo:

- **Participante 1 (P1 — 20 anos, 103,0 s, SUS 85,0):** [Assistir no YouTube: https://youtu.be/GNMJ7WGaaDE](https://youtu.be/GNMJ7WGaaDE)
- **Participante 2 (P2 — 20 anos, 98,0 s, SUS 87,5):** [Assistir no YouTube: https://youtu.be/-9L9zKd19d0](https://youtu.be/-9L9zKd19d0)
- **Participante 3 (P3 — 20 anos, 73,0 s, SUS 75,0):** [Assistir no YouTube: https://youtu.be/32IMt6ExSoE](https://youtu.be/32IMt6ExSoE)
- **Teste-Piloto de Nível 3 (Isolado da amostra empírica):** [Assistir no YouTube: https://youtu.be/r7vN1XWerE4](https://youtu.be/r7vN1XWerE4)

### 3.3 Registros das Sessões de Avaliação da Tarefa 2 (Nível 3 — Gustavo Antonio)

Os players completos com as gravações do teste-piloto e das três sessões empíricas da **Tarefa 2 (`CF02` — Eventos Presenciais)** no Protótipo Interativo Web encontram-se incorporados na página dedicada [Teste-Piloto e Relato dos Resultados (Tarefa 2)](../design-avaliacao-desenvolvimento/nivel-3/relato-resultados-tarefa2.md), acessíveis também pelos links diretos abaixo:

- **Teste-Piloto de Nível 3 (Isolado da amostra empírica):** [Assistir no YouTube: https://youtu.be/SzvR4D9lKaw](https://youtu.be/SzvR4D9lKaw)
- **Participante 1 (P1):** [Assistir no YouTube: https://youtu.be/Lwa7sELcy0o](https://youtu.be/Lwa7sELcy0o)
- **Participante 2 (P2):** [Assistir no YouTube: https://youtu.be/W8rWj6q8bT8](https://youtu.be/W8rWj6q8bT8)
- **Participante 3 (P3):** [Assistir no YouTube: https://youtu.be/6H0K1DV6WRE](https://youtu.be/6H0K1DV6WRE)

### 3.4 Registros das Sessões de Avaliação da Tarefa 3 (Nível 3 — Edvaldo Soares)

Os players completos com as gravações das três sessões empíricas da **Tarefa 3 (`CF03` — Agendamento de Horários com Autores de Tópicos)** no Protótipo de Alta Fidelidade (Claude Design) encontram-se incorporados na página dedicada [Teste-Piloto e Relato dos Resultados (Tarefa 3)](../design-avaliacao-desenvolvimento/nivel-3/relato-resultados-tarefa3.md), acessíveis também pelos links diretos abaixo:

- **Participante 1 (P1 — Duração: 05:20, SUS 85,0):** [Assistir no YouTube: https://youtu.be/oq8vuAjaCUM](https://youtu.be/oq8vuAjaCUM)
- **Participante 2 (P2 — Duração: 04:20, SUS 90,0):** [Assistir no YouTube: https://youtu.be/5T8QY_QbhzA](https://youtu.be/5T8QY_QbhzA)
- **Participante 3 (P3 — Duração: 05:40, SUS 87,5):** [Assistir no YouTube: https://youtu.be/byOn3DBegCE](https://youtu.be/byOn3DBegCE)

---

## 4. Síntese dos Resultados Empíricos da Tarefa 1 (`n = 3`)

A Tabela 4 consolida o resumo executivo dos indicadores de qualidade obtidos nos três testes de usabilidade da Tarefa 1 no protótipo do Claude Design.

**Tabela 4** — Síntese dos Indicadores de Desempenho e Satisfação (Tarefa 1 — P1, P2 e P3)

| Dimensão de IHC | Indicador / Métrica | Baseline de Referência | Resultado Consolidado (P1, P2, P3) | Impacto Ergonômico Obtido |
| :--- | :--- | :---: | :---: | :--- |
| **Cobertura Amostral** | Participantes Anônimos | Krug (2014) / Nielsen (1993) | **3 voluntários (`P1`, `P2`, `P3`)** | **67,15% de cobertura teórica** de problemas críticos (`1 − 0,69³`). |
| **Eficácia** | Taxa de Conclusão da Postagem | 100% esperado | **100% (3/3)** | Conclusão integral da tarefa por toda a amostra sem abandono. |
| **Eficiência** | Tempo Total de Publicação | Modelo KLM: `135,3 s` | **Média: `91,3 s`** *(P1: `103s` \| P2: `98s` \| P3: `73s`)* | **Redução média de 32,5% no tempo de interação** frente ao KLM (P3 atingiu `73s`, superando a meta de `≤ 90s`). |
| **Controle / IA** | Autonomia no Modal de IA | Controle pleno do usuário | **2/3 controle pleno; 1/3 perda de controle** | Diagnosticada necessidade crítica de confirmar antes da postagem (`PROB-AF-01`, Severidade 3). |
| **Satisfação** | Escore Psicométrico SUS | Média global: `68,0 pontos` | **Média: `82,5 pontos`** *(P1: `85,0` \| P2: `87,5` \| P3: `75,0`)* | **Classificação Excelente (Grau A)** segundo Bangor et al. (2009), superando a meta (`≥ 80,0`). |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

## 5. Autoavaliação de Conformidade com a Rubrica da Disciplina (Fagan)

A Tabela 5 apresenta a autoavaliação da Entrega 7 frente aos critérios normativos estabelecidos no Plano de Ensino da disciplina (*Sales, 2026*).

**Tabela 5** — Autoavaliação de Conformidade da Entrega 7

| Código | Critério Avaliativo da Rubrica | Conforme? | Evidência Documental no Repositório |
| :---: | :--- | :---: | :--- |
| **E7-01** | O protótipo de alta fidelidade foi desenvolvido com base no guia de estilo e personas? | **Sim** | Demonstração detalhada em `prototipo-alta-fidelidade.md` (Claude Design), aplicando os tokens Dark Mode do guia de estilo para a persona Lucas Mendonça. |
| **E7-02** | O teste-piloto foi realizado e documentado com vídeo incorporado antes das avaliações? | **Sim** | Registrado em `teste-piloto.md` com vídeo de ensaio instrumental (`https://youtu.be/r7vN1XWerE4`) e leitura oral de TCLE em 48s. |
| **E7-03** | Os dados do teste-piloto foram rigorosamente isolados da amostra de resultados finais? | **Sim** | Cláusula formal declarada em `teste-piloto.md` e reafirmada em `relato-resultados.md` (Subseção 9.2). |
| **E7-04** | O Termo de Consentimento Livre e Esclarecido (TCLE) foi gravado nos primeiros 60 segundos? | **Sim** | TCLE oral literal gravado nos primeiros 60 segundos dos Vídeos 1, 2 e 3 com concordância explícita de P1, P2 e P3. |
| **E7-05** | O relato dos resultados seguiu a estrutura dos 9 tópicos canônicos de Barbosa & Silva? | **Sim** | Documentado integralmente em `relato-resultados.md` com justificação amostral por Krug (2014) e Nielsen & Landauer (1993). |
| **E7-06** | Foram coletadas métricas quantitativas de desempenho e confrontadas com o modelo KLM? | **Sim** | Média real de `91,3 s` (P1: 103s, P2: 98s, P3: 73s) confrontada diretamente com o baseline preditivo do modelo KLM de `135,3 s` (-32,5%). |
| **E7-07** | Foi aplicado instrumento padronizado de satisfação (SUS) com apuração matemática do escore? | **Sim** | Aplicação do questionário de 10 perguntas de Brooke (1996) aos 3 voluntários, resultando na média de `82,5 pontos` (Grau A / Excelente). |
| **E7-08** | Os problemas identificados foram catalogados pela escala de severidade de Nielsen (0 a 4)? | **Sim** | Matriz catalogada na Tabela 7 de `relato-resultados.md` sob os IDs `PROB-AF-01` a `PROB-AF-05` (severidades 1 a 3). |
| **E7-09** | Foram definidas diretrizes claras e viáveis de reprojeto para a fase final? | **Sim** | Diretrizes prescritivas detalhadas na Tabela 7 de `relato-resultados.md` (desacoplamento pós-IA, destaque de similares resolvidos, rótulo universal e tema claro). |
| **E7-10** | Os registros audiovisuais da etapa estão incorporados sem aulas teóricas expositivas? | **Sim** | Os vídeos das Apresentações Oficiais da Entrega 7 encontram-se incorporados na Seção 3 (Tarefa 1 em `https://youtu.be/kZtajVn5fIQ` e Tarefa 2 em `https://youtu.be/5bei648S9VE`), e os vídeos empíricos e pilotos das Tarefas 1, 2 e 3 constam atomicamente em seus respectivos relatos. |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

## 6. Histórico de Versão

A Tabela 6 documenta a evolução histórica da síntese da Entrega 7.

**Tabela 6** — Histórico de Versão do Documento

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 09/11/2026 | Estruturação preliminar da síntese da Entrega 7, contextualização de Nível 3 no Ciclo de Mayhew e matriz de rastreabilidade. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| `1.1` | 12/11/2026 | Atualização definitiva dos resultados empíricos da Tarefa 1 (amostra `n = 3` com Krug & Nielsen, tempo médio `91,3 s` vs `135,3 s` KLM, SUS médio `82,5 pontos`), correção de autoria tecnológica para Claude Design (Anthropic), remoção de placeholders de vídeo e linkagem atômica das 3 gravações empíricas e do teste-piloto no padrão arquitetural das entregas. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| `1.2` | 13/11/2026 | Incorporação do vídeo oficial da Apresentação Individual da Entrega 7 — Tarefa 1 (`https://youtu.be/kZtajVn5fIQ`) com metadados e player embutido na Seção 3.1, renumeração de tabelas (Tabelas 3 a 6) e fechamento do critério `E7-10` como conforme (`Sim`). | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| `1.3` | 14/11/2026 | Inclusão da Tarefa 2 (`relato-resultados-tarefa2.md` e `prototipo-alta-fidelidade-tarefa2.md`) na Matriz de Rastreabilidade e linkagem dos 4 registros audiovisuais da Tarefa 2 (Teste-Piloto, P1, P2 e P3) na Seção 3.3. | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| `1.4` | 15/11/2026 | Inclusão da Tarefa 3 (protótipo e relato de resultados) e linkagem dos 3 registros audiovisuais das avaliações empíricas (P1, P2 e P3) na Seção 3.4. | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) |
| `1.5` | 15/11/2026 | Incorporação do vídeo oficial da Apresentação Individual da Entrega 7 — Tarefa 2 (`https://youtu.be/5bei648S9VE`) na Seção 3.1.2, detalhamento da Tarefa 2 na Tabela 1 e Matriz de Rastreabilidade (Tabela 2) e atualização do critério `E7-10`. | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |

_Fonte: Elaborada por Vinicius Silva Araruna, Gustavo Antonio Rodrigues e Silva e Edvaldo Soares Brasileiro Filho, 2026._

---

## 7. Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[2] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[3] KRUG, Steve. *Não Me Faça Pensar: Atualizado (Don't Make Me Think, Revisited)*. 3. ed. Rio de Janeiro: Alta Books, 2014.

[4] NIELSEN, Jakob; LANDAUER, Thomas K. A mathematical model of the finding of usability problems. In: *Proceedings of the INTERACT '93 and CHI '93 Conference on Human Factors in Computing Systems*. New York: ACM, 1993. p. 206–213.

[5] BROOKE, John. *SUS: A 'Quick and Dirty' Usability Scale*. In: JORDAN, P. W. et al. (Eds.). Usability Evaluation in Industry. London: Taylor & Francis, 1996. p. 189–194.

[6] BANGOR, Aaron; KORTUM, Philip; MILLER, James. Determining What Individual SUS Scores Mean: Adding an Adjective Ratings Scale. *Journal of Usability Studies*, v. 4, n. 3, p. 114–123, 2009.

[7] RUBIN, Jeffrey; CHISNELL, Dana. *Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests*. 2. ed. Indianapolis: Wiley, 2008.

[8] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1994.

[9] FAGAN, Michael E. *Design and Code Inspections to Reduce Errors in Program Development*. IBM Systems Journal, v. 15, n. 3, p. 182–211, 1976.

[10] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama, 2026.

---

## Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Durante a estruturação da síntese da Entrega 7, utilizou-se o ambiente **Claude Design (Anthropic)** com assistência direta do modelo **Claude** para a construção do protótipo de alta fidelidade da Tarefa 1 e ferramentas de Inteligência Artificial Generativa para apoio na formatação de tabelas analíticas em Markdown, verificação de caminhos relativos e conferência bibliográfica no padrão ABNT. Toda a condução das sessões empíricas com usuários reais, apuração matemática de métricas e autoavaliação crítica de conformidade foram integralmente executadas e validadas pelo autor humano.

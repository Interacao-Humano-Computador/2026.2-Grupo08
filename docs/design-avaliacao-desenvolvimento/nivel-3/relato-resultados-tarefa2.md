# Teste-Piloto e Relato dos Resultados da Avaliação de Alta Fidelidade (Tarefa 2 — Eventos Presenciais)

## Tabela de Contribuição e Transparência no Uso de Inteligência Artificial Generativa

A **Tabela 1** apresenta a matriz de governança, divisão de responsabilidades e declaração ética de uso de ferramentas de inteligência artificial generativa na estruturação do teste-piloto e na consolidação do relato dos resultados da avaliação do Protótipo Interativo Web de Alta Fidelidade da Tarefa 2 (`CF02`).

**Tabela 1** — Matriz de Contribuição do Teste-Piloto e Relato de Alta Fidelidade (Tarefa 2)

| Integrante | Atribuição no Artefato | Data | Horário | Ferramenta de IA Utilizada | Propósito do Uso de IA | Hiperligação / Gravação |
| :--- | :--- | :---: | :---: | :--- | :--- | :---: |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Autor Principal / Avaliador**: Condução do teste-piloto instrumental, aplicação do TCLE oral nos primeiros 60 segundos, condução das três sessões empíricas com participantes voluntários (P1, P2 e P3) no Protótipo Interativo Web, publicação dos vídeos no YouTube (Não Listado) e redação técnica do relato segundo os 9 tópicos canônicos. | 14/11/2026 | 20:30 - 21:30 | Google Gemini (LLM) / Antigravity | Apoio na estruturação sintática das matrizes Markdown, verificação de conformidade com o planejamento e incorporação dos players de vídeo; condução empírica e validação técnica executadas integralmente pelo autor. | [Seção 2.1](#21-teste-piloto-instrumental-e-clausula-de-isolamento) / [Seção 8](#8-registro-audiovisual-das-sessoes-empiricas-e-tcle-oral) |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Revisor por Par Designado**: Auditoria de conformidade metodológica com o Framework DECIDE, verificação das métricas e validação cruzada com o padrão de Nível 3. | 14/11/2026 | 21:30 - 21:50 | — | Revisão humana por pares. | [Histórico](#10-historico-de-versao) |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Revisor Metodológico**: Checagem de conformidade com o Plano de Ensino (Sales, 2026), anonimização LGPD e integridade dos links na Wiki. | 14/11/2026 | 21:50 - 22:10 | — | Revisão humana por pares. | [Histórico](#10-historico-de-versao) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 1. Objetivos da Avaliação e Alinhamento com as Metas de Usabilidade

_Autor do Item Teórico: [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant)_

No **Ciclo de Vida da Engenharia de Usabilidade de Deborah Mayhew (1999)** e na metodologia formalizada por **Barbosa e Silva (2021, p. 280–282)**, o relato dos resultados de alta fidelidade consolida as evidências empíricas obtidas quando usuários representativos operam o protótipo digital interativo sem a mediação mecânica de um "Computador Humano" (*Snyder, 2003; Rubin & Chisnell, 2008*).

Este artefato documenta integralmente a etapa de avaliação em **Nível 3 (Alta Fidelidade)** da **Tarefa 2 (`CF02` — Criação e Gestão de Eventos Presenciais da Comunidade com Enquete e Quórum Mínimo)** no [Fórum Diolinux Plus](https://plus.diolinux.com.br), conduzida sobre o **[Protótipo Interativo Web (HTML5, CSS3 e JavaScript Vanilla)](prototipo-tarefa2/index.html)** documentado em [prototipo-alta-fidelidade-tarefa2.md](prototipo-alta-fidelidade-tarefa2.md).

Em estrito alinhamento com o [Planejamento da Avaliação](planejamento-avaliacao.md) e o [Planejamento do Relato de Resultados](planejamento-relato-resultados.md), os objetivos desta avaliação foram:

1. **Avaliar a Descoberta do Hub de Eventos:** Verificar se o participante localiza rapidamente a aba `Eventos` e o gatilho primário `+ Criar Novo Evento` (`#0084FF`);
2. **Validar o Seletor de Horário 24h (`PM-02`):** Aferir se o mostrador circular concêntrico 24h elimina as ambiguidades de notação AM/PM identificadas no protótipo de papel;
3. **Validar a Geolocalização no Mapa Interativo da FGA (`PM-03`):** Avaliar a precisão e fluidez no posicionamento do marcador (*pin*) sobre o Campus UnB Gama (Bloco UAC / Sala I-04);
4. **Verificar a Hierarquia de Quórum Mínimo, Lotação e Ingressos:** Testar a compreensão da prioridade do quórum de viabilidade comunitária e da emissão da credencial com QR Code SVG;
5. **Mensurar Eficiência e Satisfação Padronizada:** Confrontar o tempo de execução com a meta de usabilidade (`≤ 120,0 s`), coletar a **Single Ease Question (SEQ)** e apurar o escore global da **System Usability Scale (SUS — Brooke, 1996)** com meta `≥ 80,0 pontos` (Grau A).

---

## 2. Metodologia Experimental e Teste-Piloto Instrumental

A coleta empírica empregou o **Teste de Usabilidade em Ambiente Controlado** (*Rubin & Chisnell, 2008; Barbosa & Silva, 2021, Cap. 11*), combinado ao protocolo de **Verbalização Concomitante (*Think-Aloud Protocol* — Ericsson & Simon, 1993)** e à aplicação pós-teste dos instrumentos **SUS** e **SEQ**.

O participante operou diretamente a aplicação web no navegador (mouse e teclado), enquanto o facilitador ([Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant)) manteve postura neutra, registrando tempos, cliques, hesitações e verbalizações sem induzir respostas.

### 2.1 Teste-Piloto Instrumental e Cláusula de Isolamento

Antes das sessões com os participantes oficiais, foi conduzido um **Teste-Piloto Instrumental** para calibrar exclusivamente o aparato de gravação (áudio e tela), a leitura oral do Termo de Consentimento Livre e Esclarecido (TCLE) dentro do teto de 60 segundos, a estabilidade dos fluxos do Protótipo Web e a clareza do cenário da Tarefa 2.

A **Tabela 2** sintetiza os metadados da gravação do teste-piloto e o **Vídeo 1** disponibiliza o registro completo em modo **"Não Listado"** no YouTube.

**Tabela 2** — Metadados da Gravação do Teste-Piloto (Tarefa 2)

| Atributo | Detalhamento |
| :--- | :--- |
| **Link do Vídeo no YouTube** | [Assistir Teste-Piloto no YouTube (Não Listado): https://youtu.be/SzvR4D9lKaw](https://youtu.be/SzvR4D9lKaw) |
| **Avaliador e Condutor** | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) |
| **Objeto de Avaliação** | Calibração instrumental do Protótipo Interativo Web da Tarefa 2 (`CF02`) e roteiro de avaliação |
| **Data da Gravação** | 14/11/2026 |
| **Duração do Vídeo** | `03 min 11 s` (`191 s`) |
| **Duração do TCLE Oral** | `~50 s` *(estimado dentro do teto < 60 s)* |
| **Diagnóstico da Calibração** | Protótipo web estável, áudio e captura de tela validados, e roteiro de cenário compreendido sem ambiguidades. |

_Fonte: Elaborada por Gustavo Antonio Rodrigues e Silva, 2026._

<details class="video-card-details">
    <summary class="video-card-summary">
        <div class="video-card-title">
            <span style="font-size: 1.25rem;">🎬</span>
            <span><strong>Vídeo 1 (Piloto)</strong> — Teste-Piloto de Alta Fidelidade (Tarefa 2 — Gustavo Antonio)</span>
        </div>
        <span class="video-card-toggle">Assistir ao Teste-Piloto</span>
    </summary>
    <div class="video-card-body">
        <div class="video-card-frame">
            <iframe src="https://www.youtube-nocookie.com/embed/SzvR4D9lKaw" title="Teste-Piloto de Alta Fidelidade — Tarefa 2 (Gustavo Antonio Rodrigues e Silva) | Grupo 08 — IHC 2026.2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-card-footer">
            <span class="video-card-caption"><strong>Vídeo 1 (Piloto)</strong> — Registro audiovisual do ensaio instrumental pré-campo da Tarefa 2 (Protótipo Interativo Web). <em>Fonte: Gustavo Antonio Rodrigues e Silva, 2026.</em></span>
            <a href="https://youtu.be/SzvR4D9lKaw" target="_blank" rel="noopener noreferrer" class="video-card-btn">
                <span>Assistir no YouTube</span> ↗
            </a>
        </div>
    </div>
</details>

!!! warning "Cláusula Pétrea de Isolamento Metodológico dos Dados do Teste-Piloto"
    Em estrita observância à literatura canônica (**Barbosa & Silva, 2021, p. 276; Rubin & Chisnell, 2008**) e ao regimento da disciplina (*Sales, 2026*), declara-se formalmente que o **Teste-Piloto (`https://youtu.be/SzvR4D9lKaw`) avaliou exclusivamente o planejamento, o roteiro e a infraestrutura técnica**. **Nenhum tempo, escore SUS ou dado observado no teste-piloto foi computado nas médias estatísticas finais da amostra empírica.**

---

## 3. Caracterização dos Participantes e Justificativa Amostral (`n = 3`)

A amostra empírica oficial foi composta por **3 participantes voluntários anônimos (`P1`, `P2` e `P3`)**, com perfil aderente à persona secundária **Carlos Eduardo** (estudantes universitários em tecnologia interessados em organizar ou participar de encontros da comunidade Linux).

### 3.1 Fundamentação Matemática da Amostra

Conforme o modelo binomial de descoberta de problemas formulado por **Jakob Nielsen e Thomas K. Landauer (1993)** e a abordagem iterativa enxuta de **Steve Krug (2014)**:

<div style="text-align: center; margin: 1rem 0; font-family: monospace; font-size: 1.05rem; background: rgba(0,0,0,0.03); padding: 0.75rem; border-radius: 6px;">
    <strong>P(n) = 1 − (1 − L)ⁿ &nbsp;|&nbsp; Para n = 3 e L = 0,31: &nbsp; P(3) = 1 − (0,69)³ = 1 − 0,3285 = 0,6715 (67,15%)</strong>
</div>

Com `n = 3` participantes dedicados à Tarefa 2, a avaliação formativa atinge cobertura teórica de **67,15%** dos problemas de interface da jornada de criação de eventos presenciais, capturando prioritariamente as barreiras de maior severidade (*Virzi, 1992*).

### 3.2 Perfil Anonimizado dos Voluntários (LGPD)

Em conformidade com a **Lei Geral de Proteção de Dados (Lei nº 13.709/2018)** e a **Resolução CNS nº 510/2016**, as identidades civis foram substituídas pelos códigos neutros `P1`, `P2` e `P3`. A **Tabela 3** apresenta a caracterização dos participantes.

**Tabela 3** — Caracterização Anonimizada da Amostra Empírica (Tarefa 2)

| Código | Faixa Etária / Idade | Perfil Acadêmico / Aderência à Persona | Experiência Prévia em Linux / Eventos | Modalidade da Sessão |
| :---: | :---: | :--- | :--- | :--- |
| **P1** | `20 anos` | Estudante de Engenharia de Software (UnB) — perfil aderente à persona *Carlos Eduardo* | Boa experiência prática com sistemas Linux | Sessão individual gravada (Áudio e Tela) |
| **P2** | `20 anos` | Estudante de Engenharia de Software (UnB) — perfil aderente à persona *Carlos Eduardo* | Experiência muito boa, com longo tempo de prática em Linux | Sessão individual gravada (Áudio e Tela) |
| **P3** | `20 anos` | Estudante de Engenharia de Software (UnB) — perfil aderente à persona *Carlos Eduardo* | Experiência inicial (pouca prática avançada, mas já instalou algumas distribuições) | Sessão individual gravada (Áudio e Tela) |

_Fonte: Elaborada por Gustavo Antonio Rodrigues e Silva, 2026._

---

## 4. Cenário de Uso e Roteiro Executado no Protótipo Web

Todos os três participantes executaram o cenário padronizado documentado na Seção 8.4 do [Planejamento da Avaliação](planejamento-avaliacao.md#84-cenario-de-uso-da-tarefa-2-persona-carlos-eduardo-gustavo-antonio):

> *"Você é um estudante de tecnologia e usuário iniciante de sistemas Linux que decide organizar um encontro presencial colaborativo intitulado **'Workshop Linux e Docker'**, na UnB Gama (Bloco UAC, Sala I-04), das 14:00 às 18:00, com quórum mínimo de 10 participantes e limite de 30 vagas gratuitas."*

O percurso completo exigiu a operação autônoma de seis passos no protótipo web (`PB-01` → `PB-02 E1` → `PB-02 E2` com `PM-02` e `PM-03` → `PB-02 E3` → `PB-03`):
1. Acessar a aba `Eventos` no Hub (`#view-hub`) e clicar em `+ Criar Novo Evento`;
2. Preencher título, categoria e descrição na Etapa 1 do assistente (`#view-wizard`);
3. Configurar o horário de `14:00` às `18:00` no seletor analógico 24h (`#modal-time`);
4. Posicionar o marcador no `Bloco UAC (Sala I-04)` usando a planta interativa do campus FGA (`#modal-map-picker`);
5. Definir `Quórum Mínimo = 10`, `Lotação Máxima = 30` e ingressos gratuitos com QR Code;
6. Publicar o evento e validar o mapa expandido 16:9 e o download do ingresso na tela publicada (`#view-published`).

---

## 5. Consolidação das Métricas Quantitativas, Escore SUS e SEQ

A **Tabela 4** consolida os registros cronometrados nas gravações de `P1`, `P2` e `P3`, confrontando o desempenho real com a **meta ergonômica planejada (`≤ 120,0 segundos`)**, além dos escores pós-teste da **Single Ease Question (SEQ)** e da **System Usability Scale (SUS — Brooke, 1996)**.

**Tabela 4** — Consolidação de Métricas Quantitativas, SEQ e Escore SUS (Tarefa 2)

| Participante | Janela da Tarefa | Tempo Total no Percurso | Meta (`≤ 120,0 s`) | Interação Fluida com Mapa e Pin | Taxa de Conclusão (%) | SEQ (`1–7`) | Escore SUS (`0–100`) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **P1** | `01:15 → 03:20` | `125 s` | Próximo da meta | **Sim** | `100%` | `6` | `85,0` *(Grau A)* |
| **P2** | `01:10 → 02:50` | `100 s` | **Sim** | **Sim** | `100%` | `7` | `87,5` *(Grau A)* |
| **P3** | `01:15 → 04:15` | `180 s` | Não *(hesitação no mapa)* | Parcial (`PROB-AF-T2-01`) | `100%` | `5` | `77,5` *(Grau B)* |
| **Média Global (`n = 3`)** | — | **`135,0 s`** | **1/3 dentro da meta** | **2/3 sem atritos** | **`100%`** | **`6,0`** | **`83,3` *(Grau A)*** |

_Fonte: Elaborada por Gustavo Antonio Rodrigues e Silva com base em Brooke (1996) e Bangor, Kortum e Miller (2009), 2026._

---

## 6. Análise Qualitativa das Perguntas Investigativas (`PAF-T2-01` a `PAF-T2-07`)

A **Tabela 5** sintetiza as observações qualitativas e as verbalizações do protocolo *Think-Aloud* em resposta às sete perguntas investigativas estabelecidas na `Tabela 2b` do [Planejamento da Avaliação](planejamento-avaliacao.md#4-e-explorar-as-perguntas-investigativas).

**Tabela 5** — Síntese Qualitativa por Pergunta Investigativa (Tarefa 2)

| Código | Dimensão Avaliada | Pergunta Investigativa | Achado Empírico Consolidado (`P1`, `P2`, `P3`) |
| :---: | :--- | :--- | :--- |
| **`PAF-T2-01`** | Descoberta do Ponto de Entrada | O participante localiza imediatamente a aba `Eventos` e o botão `+ Criar Novo Evento`? | **Positivo:** Os três participantes compreenderam o fluxo de entrada no Hub de Eventos e avaliaram a usabilidade geral como muito boa. |
| **`PAF-T2-02`** | Seletor 24h e Temporalidade | O interagente ajusta início e término no seletor 24h sem hesitações AM/PM? | **Positivo com ressalva estética na data:** Os parâmetros de seleção de horário (relógio 24h) e de dia foram elogiados pela boa usabilidade; contudo, sugeriu-se que o seletor de dia tenha estilo visual mais integrado ao restante da página (`PROB-AF-T2-02`). |
| **`PAF-T2-03`** | Hierarquia de Quórum e Lotação | A prioridade do *Quórum Mínimo* antes da *Lotação Máxima* transmite clareza lógica? | **Positivo:** Os participantes avaliaram positivamente a organização dos parâmetros de criação de eventos e destacaram forte potencial de adesão da comunidade. |
| **`PAF-T2-04`** | Geolocalização no Mapa Digital | O participante posiciona o marcador sobre o bloco desejado na planta da FGA com facilidade? | **Parcial (Ressalva de P3):** Enquanto P1 e P2 avançaram sem atritos, P3 apontou que o mapa da FGA não deixa suficientemente claro visualmente onde cada bloco/local está posicionado (`PROB-AF-T2-01`). |
| **`PAF-T2-05`** | Densidade e Carga Cognitiva | O assistente em 3 etapas (*wizard*) reduz a sobrecarga visual frente ao formulário único? | **Positivo:** Os três participantes consideraram a experiência fluida e de fácil compreensão ao longo das etapas. |
| **`PAF-T2-06`** | Visibilidade do Mapa Final | Na tela publicada (`PB-03`), o mapa 16:9 permite identificar claramente o local do encontro? | **Positivo com oportunidade de clareza visual:** O fluxo de fechamento foi concluído com sucesso pelos três participantes, herdando a recomendação de maior detalhamento visual dos pontos no mapa (`PROB-AF-T2-01`). |
| **`PAF-T2-07`** | Confirmação e Ingressos | O participante compreende o resumo de ingressos gratuitos e o uso do QR Code? | **Positivo:** Os três participantes validaram a proposta e destacaram que a comunidade pode aderir muito bem ao recurso de eventos. |

_Fonte: Elaborada por Gustavo Antonio Rodrigues e Silva, 2026._

---

## 7. Matriz de Problemas de Usabilidade (Severidade de Nielsen) e Reprojeto

Os atritos, hesitações e oportunidades de melhoria observados durante os ensaios empíricos no protótipo web são catalogados na **Tabela 6** segundo a **Escala de Severidade de Jakob Nielsen (1994)** (`0 = Não é problema`, `1 = Cosmético`, `2 = Menor`, `3 = Maior`, `4 = Catastrófico`), acompanhados das respectivas diretrizes de refinamento no código HTML5/CSS3/JS.

**Tabela 6** — Matriz de Problemas de Usabilidade e Diretrizes de Reprojeto Web (Tarefa 2)

| ID | View / Componente Web Afetado | Evidência Observada nos Testes (`P1`–`P3`) | Dimensão Ergonômica | Severidade de Nielsen (0–4) | Diretriz Concreta de Reprojeto no Código Web |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **`PROB-AF-T2-01`** | *Planta Interativa do Campus FGA (`#modal-map-picker` / `PM-03`)* | **Participante P3** relatou que o mapa não deixa suficientemente claro visualmente onde cada bloco e dependência do campus está localizado. | Visibilidade, Reconhecimento e Clareza Espacial | **2 (Menor)** | Reforçar os rótulos, contrastes e legenda visual dos blocos (UAC, UED, salas e vias de referência) diretamente no SVG da planta interativa. |
| **`PROB-AF-T2-02`** | *Seletor de Data (`#view-wizard` — Etapa 2)* | Participantes apontaram que, apesar de funcional e de boa usabilidade, o seletor de dia destoa visualmente do restante da página. | Consistência e Padrões Estéticos (Guia de Estilo) | **1 (Cosmético)** | Substituir ou customizar o componente de seleção de data para seguir integralmente a paleta Dark Mode, tipografia e bordas do protótipo. |

_Fonte: Elaborada por Gustavo Antonio Rodrigues e Silva com base em Nielsen (1994), 2026._

---

## 8. Registro Audiovisual das Sessões Empíricas e TCLE Oral

Em estrita observância aos **quatro princípios bioéticos de Beauchamp e Childress (2013)**, à **Resolução CNS nº 510/2016** e à **LGPD**, nos primeiros 60 segundos de cada gravação o facilitador realizou a leitura oral do **Termo de Consentimento Livre e Esclarecido (TCLE)**, registrando a concordância verbal explícita de cada voluntário antes de qualquer interação.

A **Tabela 7** consolida os metadados das três sessões empíricas oficiais da Tarefa 2, e os **Vídeos 2, 3 e 4** disponibilizam os players expansíveis no YouTube em modalidade **"Não Listado"**.

**Tabela 7** — Metadados das Gravações Empíricas de Alta Fidelidade (Tarefa 2)

| Vídeo / Sessão | Participante | Duração Total da Gravação | Janela da Tarefa 2 (Estimada) | Duração da Tarefa (Estimada) | TCLE Oral (< 60s) | Link Oficial (YouTube Não Listado) |
| :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Vídeo 2** | **P1** (20 anos) | `04 min 15 s` | `~01:15 → 03:20` | `~125 s` | Sim (Gravado) | [Assistir Sessão P1 (https://youtu.be/Lwa7sELcy0o)](https://youtu.be/Lwa7sELcy0o) |
| **Vídeo 3** | **P2** (20 anos) | `03 min 42 s` | `~01:10 → 02:50` | `~100 s` | Sim (Gravado) | [Assistir Sessão P2 (https://youtu.be/W8rWj6q8bT8)](https://youtu.be/W8rWj6q8bT8) |
| **Vídeo 4** | **P3** (20 anos) | `05 min 54 s` | `~01:15 → 04:15` | `~180 s` | Sim (Gravado) | [Assistir Sessão P3 (https://youtu.be/6H0K1DV6WRE)](https://youtu.be/6H0K1DV6WRE) |

_Fonte: Elaborada por Gustavo Antonio Rodrigues e Silva, 2026._

<details class="video-card-details">
    <summary class="video-card-summary">
        <div class="video-card-title">
            <span style="font-size: 1.25rem;">🎬</span>
            <span><strong>Vídeo 2</strong> — Avaliação Empírica de Alta Fidelidade (Tarefa 2): Participante 1 (P1)</span>
        </div>
        <span class="video-card-toggle">Assistir ao Vídeo 2</span>
    </summary>
    <div class="video-card-body">
        <div class="video-card-frame">
            <iframe src="https://www.youtube-nocookie.com/embed/Lwa7sELcy0o" title="Avaliação de Alta Fidelidade — Tarefa 2 — Participante 1 (P1) | Grupo 08 — IHC 2026.2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-card-footer">
            <span class="video-card-caption"><strong>Vídeo 2</strong> — Sessão gravada da Tarefa 2 com o Participante 1 (P1), contendo TCLE oral nos primeiros 60s e protocolo Think-Aloud. <em>Fonte: Gustavo Antonio Rodrigues e Silva, 2026.</em></span>
            <a href="https://youtu.be/Lwa7sELcy0o" target="_blank" rel="noopener noreferrer" class="video-card-btn">
                <span>Assistir no YouTube</span> ↗
            </a>
        </div>
    </div>
</details>

<details class="video-card-details">
    <summary class="video-card-summary">
        <div class="video-card-title">
            <span style="font-size: 1.25rem;">🎬</span>
            <span><strong>Vídeo 3</strong> — Avaliação Empírica de Alta Fidelidade (Tarefa 2): Participante 2 (P2)</span>
        </div>
        <span class="video-card-toggle">Assistir ao Vídeo 3</span>
    </summary>
    <div class="video-card-body">
        <div class="video-card-frame">
            <iframe src="https://www.youtube-nocookie.com/embed/W8rWj6q8bT8" title="Avaliação de Alta Fidelidade — Tarefa 2 — Participante 2 (P2) | Grupo 08 — IHC 2026.2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-card-footer">
            <span class="video-card-caption"><strong>Vídeo 3</strong> — Sessão gravada da Tarefa 2 com o Participante 2 (P2), contendo TCLE oral nos primeiros 60s e protocolo Think-Aloud. <em>Fonte: Gustavo Antonio Rodrigues e Silva, 2026.</em></span>
            <a href="https://youtu.be/W8rWj6q8bT8" target="_blank" rel="noopener noreferrer" class="video-card-btn">
                <span>Assistir no YouTube</span> ↗
            </a>
        </div>
    </div>
</details>

<details class="video-card-details">
    <summary class="video-card-summary">
        <div class="video-card-title">
            <span style="font-size: 1.25rem;">🎬</span>
            <span><strong>Vídeo 4</strong> — Avaliação Empírica de Alta Fidelidade (Tarefa 2): Participante 3 (P3)</span>
        </div>
        <span class="video-card-toggle">Assistir ao Vídeo 4</span>
    </summary>
    <div class="video-card-body">
        <div class="video-card-frame">
            <iframe src="https://www.youtube-nocookie.com/embed/6H0K1DV6WRE" title="Avaliação de Alta Fidelidade — Tarefa 2 — Participante 3 (P3) | Grupo 08 — IHC 2026.2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-card-footer">
            <span class="video-card-caption"><strong>Vídeo 4</strong> — Sessão gravada da Tarefa 2 com o Participante 3 (P3), contendo TCLE oral nos primeiros 60s e protocolo Think-Aloud. <em>Fonte: Gustavo Antonio Rodrigues e Silva, 2026.</em></span>
            <a href="https://youtu.be/6H0K1DV6WRE" target="_blank" rel="noopener noreferrer" class="video-card-btn">
                <span>Assistir no YouTube</span> ↗
            </a>
        </div>
    </div>
</details>

---

## 9. Lista de Verificação da Técnica — Relato de Alta Fidelidade (Tarefa 2)

A **Tabela 8** apresenta a auditoria de conformidade metodológica e normativa aplicada sobre este relato, em alinhamento com os 9 critérios do [Planejamento do Relato](planejamento-relato-resultados.md#5-lista-de-verificacao-da-tecnica-planejamento-do-relato-de-alta-fidelidade).

**Tabela 8** — Lista de Verificação da Técnica (Tarefa 2)

| Critério Avaliado | Fonte Normativa | Conforme? | Evidência no Artefato |
| :--- | :--- | :---: | :--- |
| **1. Estrutura dos 9 Tópicos Canônicos** | Barbosa & Silva (2021, p. 280–282) | **Sim** | Seções 1 a 8 cobrem objetivos, metodologia, participantes, cenário, métricas/SUS, análise qualitativa, severidade de Nielsen, reprojeto e vídeos. |
| **2. Justificativa Amostral (`n = 3`)** | Krug (2014); Nielsen & Landauer (1993) | **Sim** | Seção 3 fundamenta `P(3) = 67,15%` com foco na captura de falhas críticas (*Virzi, 1992*). |
| **3. Teste-Piloto com Isolamento Estrito** | Barbosa & Silva (2021, p. 276); Rubin & Chisnell (2008) | **Sim** | Subseção 2.1 incorpora o vídeo do piloto (`https://youtu.be/SzvR4D9lKaw`) e formaliza sua exclusão das médias finais. |
| **4. TCLE Oral (< 60s) e Anonimização LGPD** | CNS nº 510/2016; LGPD; Beauchamp & Childress (2013) | **Sim** | Participantes identificados apenas como `P1`, `P2` e `P3`, com TCLE gravado nos vídeos (Seção 8). |
| **5. Métricas Quantitativas, SUS e SEQ** | Brooke (1996); Bangor et al. (2009) | **Sim** | Seção 5 estrutura tempos vs. meta (`≤ 120s`), SEQ e cálculo do escore global SUS (`0–100`). |
| **6. Severidade de Nielsen e Reprojeto Web** | Nielsen (1994); Mayhew (1999) | **Sim** | Seção 7 classifica problemas de `0` a `4` (`PROB-AF-T2-XX`) com ações diretas no código do protótipo. |
| **7. Chamadas Textuais e Fontes Nominais** | Diretrizes Pedagógicas (*Sales, 2026*) | **Sim** | Todas as tabelas (1 a 8) e vídeos (1 a 4) têm chamada prévia e fonte nominal explícita. |

_Fonte: Elaborada por Gustavo Antonio Rodrigues e Silva, 2026._

---

## 10. Histórico de Versão

A **Tabela 9** documenta o histórico de versões e revisões cruzadas deste artefato.

**Tabela 9** — Histórico de Versão do Relato de Alta Fidelidade (Tarefa 2)

| Versão | Data | Descrição Detalhada da Alteração | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 14/11/2026 | Criação da página dedicada ao Teste-Piloto e Relato dos Resultados da Avaliação de Alta Fidelidade da Tarefa 2 (`CF02`) na aba Nível 3, estruturada segundo os 9 tópicos canônicos de Barbosa & Silva (2021), perguntas investigativas `PAF-T2-01` a `07`, matriz de métricas/SUS/SEQ, severidade de Nielsen e incorporação dos 4 vídeos no YouTube (`SzvR4D9lKaw`, `Lwa7sELcy0o`, `W8rWj6q8bT8` e `6H0K1DV6WRE`). | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |

_Fonte: Elaborada por Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## Declaração de Uso de IA Generativa (Padrão SBC)

Em cumprimento às diretrizes éticas da Sociedade Brasileira de Computação (SBC) e às normas do Plano de Ensino da disciplina (Sales, 2026), declara-se que durante a elaboração deste artefato foram utilizados recursos de Inteligência Artificial Generativa (Google Gemini / Antigravity) para apoio na estruturação sintática das tabelas em Markdown, validação de conformidade com o planejamento prévio e formatação dos blocos HTML dos players de vídeo. Toda a condução das sessões com participantes, a análise crítica dos resultados e a validação técnica do conteúdo foram realizadas e auditadas integralmente pelos autores humanos listados no Histórico de Versão.

---

## Referências Bibliográficas

[1] BANGOR, Aaron; KORTUM, Philip; MILLER, James. Determining What Individual SUS Scores Mean: Adding an Adjective Rating Scale. *Journal of Usability Studies*, v. 4, n. 3, p. 114–123, 2009.

[2] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.

[3] BROOKE, John. SUS: A "quick and dirty" usability scale. In: JORDAN, Patrick W. et al. (ed.). *Usability Evaluation in Industry*. London: Taylor & Francis, 1996. p. 189–194.

[4] ERICSSON, K. Anders; SIMON, Herbert A. *Protocol Analysis: Verbal Reports as Data*. 2. ed. Cambridge: MIT Press, 1993.

[5] KRUG, Steve. *Não me faça pensar: atualizado*. 3. ed. Rio de Janeiro: Alta Books, 2014.

[6] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[7] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1994.

[8] NIELSEN, Jakob; LANDAUER, Thomas K. A mathematical model of the finding of usability problems. In: *Proceedings of the INTERACT '93 and CHI '93 Conference on Human Factors in Computing Systems*. New York: ACM, 1993. p. 206–213.

[9] RUBIN, Jeffrey; CHISNELL, Dana. *Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests*. 2. ed. Indianapolis: Wiley, 2008.

[10] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador (FGA0173)*. Brasília: Universidade de Brasília, Faculdade UnB Gama, 2026.

[11] SNYDER, Carolyn. *Paper Prototyping: The Fast and Easy Way to Design and Refine User Interfaces*. San Francisco: Morgan Kaufmann, 2003.

[12] VIRZI, Robert A. Refining the test phase of usability evaluation: How many subjects is enough? *Human Factors*, v. 34, n. 4, p. 457–468, 1992.

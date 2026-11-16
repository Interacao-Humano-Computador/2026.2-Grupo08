# Teste-Piloto e Relato dos Resultados da Avaliação de Alta Fidelidade (Tarefa 3 — Agendamento de Horários)

## Tabela de Contribuição e Transparência no Uso de Inteligência Artificial Generativa

A Tabela 1 apresenta a matriz de governança, responsabilidade autoral e declaração ética de uso de inteligência artificial generativa na estruturação do teste-piloto e na consolidação do relato de resultados da avaliação empírica do Protótipo de Alta Fidelidade da Tarefa 3 (`CF03`).

**Tabela 1** — Matriz de Contribuição do Teste-Piloto e Relato de Alta Fidelidade (Tarefa 3)

| Integrante | Atribuição no Artefato | Data | Horário | Ferramenta de IA Utilizada | Propósito do Uso de IA | Hiperligação / Gravação |
| :--- | :--- | :---: | :---: | :--- | :--- | :---: |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Autor Principal / Avaliador**: Condução e gravação do teste-piloto instrumental, aplicação do TCLE oral nos primeiros 60 segundos, condução empírica das três sessões com participantes voluntários (P1: 05:20, P2: 04:20 e P3: 05:40) no protótipo desenvolvido no **Claude Design**, tabulação dos dados, apuração das métricas SUS e análise do feedback do participante 3 sobre o tamanho das fontes. | 15/11/2026 | 14:00 - 18:30 | Claude Design (Anthropic) e Claude (LLM) | Desenvolvimento do protótipo computacional de 4 telas no Claude Design e apoio na estruturação sintática das tabelas em Markdown. | [Seção 2.1](#21-teste-piloto-instrumental-e-clausula-de-isolamento) / [Seção 9](#9-registros-audiovisuais-das-sessoes-empiricas-e-tcle-oral) |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Revisor por Par**: Auditoria de consistência com o Planejamento da Avaliação de Nível 3, verificação dos cálculos do escore SUS e validação metodológica. | 15/11/2026 | 18:40 - 19:15 | — | Revisão humana por pares. | [Histórico](#11-historico-de-versao) |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Revisor Metodológico**: Checagem de conformidade com o Plano de Ensino da disciplina, conferência de anonimização bioética (LGPD) e integridade dos hiperlinks. | 15/11/2026 | 19:20 - 19:50 | — | Revisão humana por pares. | [Histórico](#11-historico-de-versao) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 1. Objetivos da Avaliação e Alinhamento com as Metas de Usabilidade

_Autor do Item Teórico: [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev)_

No **Ciclo de Vida da Engenharia de Usabilidade de Deborah Mayhew (1999)** e na metodologia consolidada de **Barbosa e Silva (2021, p. 280–282)**, o relato dos resultados de alta fidelidade sintetiza as evidências empíricas coletadas no momento em que usuários reais interagem autonomamente com a interface digital, sem qualquer intervenção de "Computador Humano" (*Snyder, 2003; Rubin & Chisnell, 2008*).

Este artefato consolida os resultados da avaliação do **Protótipo de Alta Fidelidade no Claude Design** referente à **Tarefa 3 (`CF03` — Grade de Disponibilidade e Agendamento de Horários com Autores de Tópicos)** no [Fórum Diolinux Plus](https://plus.diolinux.com.br), documentado em [prototipo-alta-fidelidade-tarefa3.md](prototipo-alta-fidelidade-tarefa3.md).

Em consonância com o [Planejamento da Avaliação](planejamento-avaliacao.md) e o [Planejamento do Relato](planejamento-relato-resultados.md), os objetivos da avaliação foram:

1. **Aferir a Descoberta do Ponto de Entrada (`T3_F01`):** Verificar se os participantes identificam com rapidez o botão *"Agendar Reunião com o Autor"* posicionado no cabeçalho/resposta do tópico técnico;
2. **Avaliar a Clareza Cognitiva da Grade Semanal (`T3_F02`):** Verificar se a inclusão da legenda permanente e do fuso horário de Brasília (*GMT-3*) solucionou as hesitações observadas no protótipo de papel;
3. **Validar a Confirmação do Agendamento (`T3_F03`):** Avaliar a percepção de segurança da tela de confirmação, o entendimento do resumo da mentoria e o uso dos botões de adicionar à agenda;
4. **Validar o Lembrete da Reunião no Dia (`T3_F04`):** Verificar a clareza da notificação no sino do cabeçalho e da tela de lembrete com acesso direto à sala virtual (*"Entrar na Sala Agora"*);
5. **Mensurar Eficiência e Satisfação Padronizada:** Confrontar o tempo real de execução com a meta ergonômica (`≤ 60,0 segundos`), apurar a taxa de conclusão de tarefas e mensurar a usabilidade global por meio da **System Usability Scale (SUS — Brooke, 1996)**, visando escore `≥ 80,0 pontos` (Grau A de Excelência).

---

## 2. Metodologia Experimental e Teste-Piloto Instrumental

A investigação adotou o método de **Teste de Usabilidade em Ambiente Controlado** (*Rubin & Chisnell, 2008; Barbosa & Silva, 2021*), complementado pelo protocolo de **Verbalização Concomitante (*Think-Aloud Protocol* — Ericsson & Simon, 1993)** e pela aplicação pós-tarefa da escala psicométrica **SUS** e do questionário semiestruturado.

As sessões foram conduzidas individualmente com gravação contínua de áudio e tela. O avaliador ([Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev)) atuou exclusivamente como **Facilitador**, mantendo postura estritamente neutra e abstendo-se de induzir cliques ou corrigir percursos.

### 2.1 Teste-Piloto Instrumental e Cláusula de Isolamento

Previamente às sessões oficiais com os voluntários, realizou-se o **Teste-Piloto Instrumental** com as seguintes finalidades técnicas:
- Verificar o enquadramento da gravação e a nitidez dos detalhes visuais no Claude Design;
- Cronometrar a leitura oral do Termo de Consentimento Livre e Esclarecido (TCLE) para assegurar sua conclusão em menos de 60 segundos;
- Validar a fluidez da navegação entre as 4 telas canônicas `T3_F01` a `T3_F04`;
- Testar a clareza e dicção na leitura do roteiro das 8 perguntas investigativas.

A Tabela 2 apresenta os metadados do ensaio instrumental.

**Tabela 2** — Metadados da Gravação do Teste-Piloto (Tarefa 3)

| Atributo | Detalhamento |
| :--- | :--- |
| **Avaliador e Condutor** | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) |
| **Objeto de Avaliação** | Calibração técnica do Protótipo no Claude Design da Tarefa 3 (`CF03`) e roteiro de inquirição |
| **Data da Gravação** | 14/11/2026 |
| **Duração do Vídeo** | `~03 min 20 s` |
| **Tempo do TCLE Oral** | `46 segundos` *(dentro do teto ético < 60 s)* |
| **Link do Vídeo no YouTube** | [Assistir Teste-Piloto no YouTube (Não Listado): https://youtu.be/PILOTO_TAREFA3_PLACEHOLDER](https://youtu.be/PILOTO_TAREFA3_PLACEHOLDER) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, 2026._

<details class="video-card-details">
    <summary class="video-card-summary">
        <div class="video-card-title">
            <span style="font-size: 1.25rem;">🎬</span>
            <span><strong>Vídeo 1 (Piloto)</strong> — Teste-Piloto de Alta Fidelidade (Tarefa 3 — Edvaldo Soares)</span>
        </div>
        <span class="video-card-toggle">Assistir ao Teste-Piloto</span>
    </summary>
    <div class="video-card-body">
        <div class="video-card-frame">
            <!-- SUBST_LINK_YOUTUBE_PILOTO -->
            <iframe src="https://www.youtube-nocookie.com/embed/PILOTO_TAREFA3_PLACEHOLDER" title="Teste-Piloto de Alta Fidelidade — Tarefa 3 (Edvaldo Soares Brasileiro Filho) | Grupo 08 — IHC 2026.2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-card-footer">
            <span class="video-card-caption"><strong>Vídeo 1 (Piloto)</strong> — Registro audiovisual do ensaio instrumental de calibração da Tarefa 3 (Protótipo de Alta Fidelidade no Claude Design). <em>Fonte: Edvaldo Soares Brasileiro Filho, 2026.</em></span>
            <a href="https://youtu.be/PILOTO_TAREFA3_PLACEHOLDER" target="_blank" rel="noopener noreferrer" class="video-card-btn">
                <span>Assistir no YouTube</span> ↗
            </a>
        </div>
    </div>
</details>

!!! warning "Cláusula Pétrea de Isolamento Metodológico dos Dados do Teste-Piloto"
    Em estrito cumprimento à literatura científica canônica (**Barbosa & Silva, 2021, p. 276; Rubin & Chisnell, 2008**) e às normas do Plano de Ensino da disciplina (*Sales, 2026*), declara-se expressamente que o **Teste-Piloto avaliou exclusivamente o aparato técnico, a dicção do roteiro e a estabilidade do protótipo no Claude Design**. **Nenhum dado, tempo, resposta ou observação colhida durante o teste-piloto foi computado, mesclado ou incorporado às médias estatísticas finais da amostra empírica.**

---

## 3. Caracterização dos Participantes e Justificativa Amostral (`n = 3`)

A amostra empírica oficial da avaliação de alta fidelidade da Tarefa 3 foi composta por **3 participantes voluntários anônimos (`P1`, `P2` e `P3`)**, recrutados em conformidade com os perfis de usuários do Fórum Diolinux Plus (desde usuários iniciantes em busca de suporte até estudantes e pesquisadores de tecnologia).

### 3.1 Fundamentação Científica do Tamanho Amostral

A definição do tamanho amostral em **`n = 3` participantes** alinha-se ao modelo matemático de descoberta binomial de problemas formulado por **Jakob Nielsen e Thomas K. Landauer (1993)** e à metodologia ágil de **Steve Krug (2014)**:

<div style="text-align: center; margin: 1rem 0; font-family: monospace; font-size: 1.05rem; background: rgba(0,0,0,0.03); padding: 0.75rem; border-radius: 6px;">
    <strong>P(n) = 1 − (1 − L)ⁿ &nbsp;|&nbsp; Para n = 3 e L = 0,31: &nbsp; P(3) = 1 − (0,69)³ = 1 − 0,3285 = 0,6715 (67,15%)</strong>
</div>

Pesquisas empíricas de **Virzi (1992)** comprovam adicionalmente que os primeiros 3 participantes revelam aproximadamente **85% das falhas ergonômicas de maior gravidade (severidades 3 e 4)**, tornando o ciclo de testes altamente custo-eficiente para orientar o reprojeto final.

A Tabela 3 detalha a caracterização demográfica dos participantes avaliados e a duração total de cada sessão gravada.

**Tabela 3** — Caracterização Demográfica e Duração das Sessões Gravadas (Tarefa 3)

| Código | Idade | Gênero | Formação / Ocupação | Nível de Experiência em Fóruns | Dispositivo Utilizado | Duração da Sessão Gravada |
| :---: | :---: | :---: | :--- | :--- | :--- | :---: |
| **`P1`** | 21 anos | Feminino | Graduanda em Psicologia (CEUB) | Usuária Iniciante / Uso esporádico | Desktop / Mouse e Teclado | **`05 min 20 s`** (`320 s`) |
| **`P2`** | 20 anos | Masculino | Estudante Universitário | Usuário Intermediário / Consulta a tutoriais | Notebook / Touchpad | **`04 min 20 s`** (`260 s`) |
| **`P3`** | 22 anos | Masculino | Graduando em Eng. de Software (UnB Gama) | Usuário Avançado / Participante ativo de fóruns | Desktop Full HD / Monitor 24" | **`05 min 40 s`** (`340 s`) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, 2026._

---

## 4. Cenário de Tarefas e Dinâmica de Interação

Cada sessão orientou-se pelo seguinte cenário autêntico de uso:

> *"Você é um estudante com dificuldades para configurar aceleração gráfica no Ubuntu e encontrou no Fórum Diolinux Plus um post técnico de um especialista da comunidade que disponibilizou horários de mentoria ao vivo.*  
> *Sua tarefa é:*  
> *1. Localizar o botão de agendamento na resposta do autor (`T3_F01`);*  
> *2. Consultar a grade semanal e escolher um horário compatível (`T3_F02`);*  
> *3. Confirmar a solicitação com o resumo dos dados da mentoria (`T3_F03`);*  
> *4. Checar a notificação e a tela de lembrete com o link da sala virtual no dia da reunião (`T3_F04`)."*

---

## 5. Resultados Empíricos e Métricas Quantitativas

### 5.1 Eficiência Temporal e Taxa de Sucesso

Todos os três participantes concluíram com êxito integral o percurso pelas 4 telas sem desvios de rota, alcançando **Taxa de Sucesso de 100% (Eficácia = 1,0)**. 

A Tabela 4 sintetiza os tempos cronometrados estritos de execução da tarefa frente à meta de usabilidade estabelecida (`≤ 60,0 segundos`).

**Tabela 4** — Métricas Quantitativas de Desempenho e Eficiência da Tarefa (Tarefa 3)

| Participante | Duração Total da Sessão | Tempo Específico da Tarefa (s) | Meta de Usabilidade | Desvio Relativo | Taxa de Conclusão | Nível de Auxílio |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **`P1`** | `05 min 20 s` | `52,4 s` | `≤ 60,0 s` | `-12,7%` (Mais rápido que a meta) | 100% (Sucesso) | Nenhum (Autônomo) |
| **`P2`** | `04 min 20 s` | `44,1 s` | `≤ 60,0 s` | `-26,5%` (Mais rápido que a meta) | 100% (Sucesso) | Nenhum (Autônomo) |
| **`P3`** | `05 min 40 s` | `38,6 s` | `≤ 60,0 s` | `-35,7%` (Mais rápido que a meta) | 100% (Sucesso) | Nenhum (Autônomo) |
| **MÉDIA GERAL** | **`05 min 07 s`** | **`45,0 s`** | **`≤ 60,0 s`** | **`-25,0%`** | **`100%`** | **`0 intervenções`** |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, 2026._

> O tempo médio de execução da tarefa (**45,0 segundos**) superou a meta ergonômica em 25%, demonstrando a eficiência do fluxo de 4 telas no Claude Design.

### 5.2 Satisfação Psicométrica Padronizada (Escala SUS)

Ao término do teste, os voluntários responderam aos 10 itens da **System Usability Scale (SUS — Brooke, 1996)** em escala Likert de 1 a 5. A apuração dos escores seguiu o algoritmo canônico de cálculo:
- Para itens ímpares (positivos): pontuação individual = nota atribuída − 1;
- Para itens pares (negativos): pontuação individual = 5 − nota atribuída;
- Escore global SUS = soma das pontuações dos 10 itens multiplicada por 2,5.

A Tabela 5 consolida os escores apurados por participante.

**Tabela 5** — Consolidação dos Escores da Escala SUS (Tarefa 3)

| Participante | Escore Apurado (0 a 100) | Classificação Adjetiva (Bangor et al., 2009) | Grau de Usabilidade |
| :---: | :---: | :---: | :---: |
| **`P1`** | `85,0 pontos` | *Excelente (Best Imaginable)* | **Grau A** |
| **`P2`** | `90,0 pontos` | *Excelente (Best Imaginable)* | **Grau A+** |
| **`P3`** | `87,5 pontos` | *Excelente (Best Imaginable)* | **Grau A** |
| **MÉDIA GLOBAL SUS** | **`87,5 pontos`** | **Excelente (*Best Imaginable*)** | **Grau A de Excelência** |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, 2026._

> A média global de **87,5 pontos** posiciona o protótipo de alta fidelidade da Tarefa 3 na faixa de excelência máxima da literatura (*Brooke, 1996; Bangor et al., 2009*), amplamente superior à nota de corte de 68 pontos considerada média da indústria.

---

## 6. Análise Qualitativa das 8 Perguntas Investigativas

A inquirição pós-teste estruturou-se sobre as 8 perguntas investigativas padronizadas:

* **Pergunta 1 (Ponto de Acesso no Tópico):** Os três participantes localizaram o botão *"Agendar Reunião com o Autor"* imediatamente após a leitura do post. P1 comentou: *"O botão azul se destaca muito bem e faz todo sentido estar logo abaixo do post de quem deu a solução"*;
* **Pergunta 2 (Clareza da Grade e Fuso Horário):** A presença da legenda gráfica fixa no topo e a indicação explícita *"Horário de Brasília (GMT-3)"* sanaram por completo as dúvidas do protótipo de papel. P2 observou: *"Ficou claro que o verde é livre e o cinza é reservado, não tive dúvida nenhuma"*;
* **Pergunta 3 (Seleção do Bloco de Horário):** O clique no slot foi considerado natural e intuitivo por todos;
* **Pergunta 4 (Formulário e Motivo da Dúvida):** P2 e P3 elogiaram a presença do contador de caracteres (limite de 200), pontuando que delimita o escopo e evita textos longos demais;
* **Pergunta 5 (Controle e Liberdade do Usuário):** As opções de cancelar, fechar e voltar estavam visíveis e equilibradas;
* **Pergunta 6 (Feedback de Confirmação):** A tela conclusiva com resumo completo e link da reunião transmitiu segurança unânime de que o agendamento foi registrado;
* **Pergunta 7 (Lembretes e Gestão Futura):** Os participantes compreenderam com clareza o aviso de recebimento do link por e-mail e as opções integradas de adicionar ao Google Agenda ou copiar o link;
* **Pergunta 8 (Oportunidades de Reprojeto / Ponto Crítico de Feedback):**  
  **O Participante 3 (P3)** fez um apontamento ergonômico relevante: sugeriu **aumentar o tamanho de algumas fontes secundárias e legendas de horários na grade**, argumentando que em monitores de alta resolução (`1080p` ou superior) algumas legendas menores exigem esforço visual extra e que fontes ligeiramente maiores ampliariam a legibilidade e o conforto visual de leitura. P1 e P2 consideraram a interface agradável e não relataram outras necessidades de intervenção.

---

## 7. Catálogo de Problemas de Usabilidade e Severidade de Nielsen (0 a 4)

Conforme a **Escala de Severidade de Problemas de Usabilidade de Jakob Nielsen (1994)** (onde 0 = Sem efeito, 1 = Cosmético, 2 = Menor, 3 = Maior e 4 = Catastrófico), os apontamentos colhidos na avaliação foram catalogados.

A Tabela 6 sintetiza o único problema/sugestão identificado nas sessões.

**Tabela 6** — Matriz de Severidade de Nielsen e Ações de Reprojeto (Tarefa 3)

| ID do Problema | Componente Afetado | Descrição da Ocorrência e Evidência Empírica | Heurística / Princípio | Severidade (Nielsen) | Ação Recomendada de Reprojeto |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **`PROB-AF3-01`** | Grade de Horários (`T3_F02`) e Confirmação (`T3_F03`) | Tamanho reduzido de algumas fontes secundárias e rótulos de horários dos slots, dificultando a leitura rápida e exigindo aproximação visual em telas de alta densidade (apontado pelo **Participante 3**). | Flexibilidade e Eficiência / Legibilidade Ergonômica | **1 (Cosmético) a 2 (Menor)** | Ampliar a escala tipográfica das legendas de `13px` para `15px` (`caption/regular` ➔ `body/regular`) e o texto dos slots de `12px` para `14px`, aumentando a área útil de clique do slot para `48px`. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho com base em Nielsen (1994), 2026._

> [!NOTE]
> Ressalta-se que **não foram identificados problemas de severidade 3 (Maior) ou 4 (Catastrófico)**, evidenciando a robustez e estabilidade da interface desenvolvida no Claude Design após o ciclo prévio de refinamento em papel.

---

## 8. Recomendações Concretas de Reprojeto

A partir do feedback do Participante 3 e da matriz de usabilidade, estabelece-se a seguinte diretriz de intervenção para a consolidação final do projeto:

1. **Ajuste na Escala Tipográfica da Grade (`T3_F05`):** Elevação das legendas secundárias para no mínimo `14px` e reforço no contraste do peso tipográfico (Medium 500), garantindo conformidade com a WCAG 2.1 e otimizando a legibilidade para usuários com telas maiores ou diferentes acuidades visuais;
2. **Ampliação da Área de Toque dos Slots:** Ajuste nas dimensões do componente de slot de `72×44px` para `78×48px`, garantindo target touch superior ao mínimo ergonômico de 44px;
3. **Persistência de Rascunho no Formulário:** Implementação de salvamento local automático do motivo digitado para o caso de fechamento acidental da tela modal.

---

## 9. Registros Audiovisuais das Sessões Empíricas e TCLE Oral

Em cumprimento rigoroso à **Resolução CNS nº 510/2016**, às diretrizes éticas da UnB e ao Plano de Ensino da disciplina (*Sales, 2026*):
- O consentimento oral (TCLE) foi lido nos primeiros 60 segundos de cada vídeo gravado;
- Os vídeos encontram-se hospedados no YouTube na modalidade **"Não Listado"**;
- A Tabela 7 relaciona os metadados de todas as gravações oficiais.

**Tabela 7** — Relação das Sessões Empíricas Gravadas da Tarefa 3

| Identificador | Participante / Ensaio | Data da Sessão | Duração do Vídeo | Consentimento TCLE Oral | Link de Acesso no YouTube |
| :---: | :--- | :---: | :---: | :---: | :--- |
| **`Piloto`** | Ensaio Instrumental Técnico | 14/11/2026 | `~03:20` | Validado (46s) | [Assistir Teste-Piloto no YouTube](https://youtu.be/PILOTO_TAREFA3_PLACEHOLDER) |
| **`S01`** | Participante 1 (`P1`) | 15/11/2026 | **`05:20`** | Colhido nos primeiros 60s | [Assistir Sessão P1 no YouTube: https://youtu.be/oq8vuAjaCUM](https://youtu.be/oq8vuAjaCUM) |
| **`S02`** | Participante 2 (`P2`) | 15/11/2026 | **`04:20`** | Colhido nos primeiros 60s | [Assistir Sessão P2 no YouTube: https://youtu.be/5T8QY_QbhzA](https://youtu.be/5T8QY_QbhzA) |
| **`S03`** | Participante 3 (`P3`) | 15/11/2026 | **`05:40`** | Colhido nos primeiros 60s | [Assistir Sessão P3 no YouTube: https://youtu.be/byOn3DBegCE](https://youtu.be/byOn3DBegCE) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, 2026._

### 9.1 Reprodução dos Registros das Avaliações Oficiais

<details class="video-card-details">
    <summary class="video-card-summary">
        <div class="video-card-title">
            <span style="font-size: 1.25rem;">🎬</span>
            <span><strong>Vídeo 2</strong> — Avaliação Empírica de Alta Fidelidade (Tarefa 3): Participante 1 (P1) · Duração: 05 min 20 s</span>
        </div>
        <span class="video-card-toggle">Assistir ao Vídeo 2</span>
    </summary>
    <div class="video-card-body">
        <div class="video-card-frame">
            <iframe src="https://www.youtube-nocookie.com/embed/oq8vuAjaCUM" title="Avaliação de Alta Fidelidade — Tarefa 3 — Participante 1 (P1) | Grupo 08 — IHC 2026.2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-card-footer">
            <span class="video-card-caption"><strong>Vídeo 2</strong> — Sessão gravada da Tarefa 3 com a Participante 1 (P1), contendo TCLE oral nos primeiros 60s, percurso nas 4 telas e protocolo Think-Aloud (Duração: 05:20). <em>Fonte: Edvaldo Soares Brasileiro Filho, 2026.</em></span>
            <a href="https://youtu.be/oq8vuAjaCUM" target="_blank" rel="noopener noreferrer" class="video-card-btn">
                <span>Assistir no YouTube</span> ↗
            </a>
        </div>
    </div>
</details>

<details class="video-card-details">
    <summary class="video-card-summary">
        <div class="video-card-title">
            <span style="font-size: 1.25rem;">🎬</span>
            <span><strong>Vídeo 3</strong> — Avaliação Empírica de Alta Fidelidade (Tarefa 3): Participante 2 (P2) · Duração: 04 min 20 s</span>
        </div>
        <span class="video-card-toggle">Assistir ao Vídeo 3</span>
    </summary>
    <div class="video-card-body">
        <div class="video-card-frame">
            <iframe src="https://www.youtube-nocookie.com/embed/5T8QY_QbhzA" title="Avaliação de Alta Fidelidade — Tarefa 3 — Participante 2 (P2) | Grupo 08 — IHC 2026.2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-card-footer">
            <span class="video-card-caption"><strong>Vídeo 3</strong> — Sessão gravada da Tarefa 3 com o Participante 2 (P2), contendo TCLE oral nos primeiros 60s, percurso nas 4 telas e protocolo Think-Aloud (Duração: 04:20). <em>Fonte: Edvaldo Soares Brasileiro Filho, 2026.</em></span>
            <a href="https://youtu.be/5T8QY_QbhzA" target="_blank" rel="noopener noreferrer" class="video-card-btn">
                <span>Assistir no YouTube</span> ↗
            </a>
        </div>
    </div>
</details>

<details class="video-card-details">
    <summary class="video-card-summary">
        <div class="video-card-title">
            <span style="font-size: 1.25rem;">🎬</span>
            <span><strong>Vídeo 4</strong> — Avaliação Empírica de Alta Fidelidade (Tarefa 3): Participante 3 (P3) · Duração: 05 min 40 s</span>
        </div>
        <span class="video-card-toggle">Assistir ao Vídeo 4</span>
    </summary>
    <div class="video-card-body">
        <div class="video-card-frame">
            <iframe src="https://www.youtube-nocookie.com/embed/byOn3DBegCE" title="Avaliação de Alta Fidelidade — Tarefa 3 — Participante 3 (P3) | Grupo 08 — IHC 2026.2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-card-footer">
            <span class="video-card-caption"><strong>Vídeo 4</strong> — Sessão gravada da Tarefa 3 com o Participante 3 (P3), contendo TCLE oral nos primeiros 60s, percurso nas 4 telas, protocolo Think-Aloud e feedback sobre aumento das fontes (Duração: 05:40). <em>Fonte: Edvaldo Soares Brasileiro Filho, 2026.</em></span>
            <a href="https://youtu.be/byOn3DBegCE" target="_blank" rel="noopener noreferrer" class="video-card-btn">
                <span>Assistir no YouTube</span> ↗
            </a>
        </div>
    </div>
</details>

---

## 10. Lista de Verificação da Técnica — Relato de Alta Fidelidade (Tarefa 3)

A Tabela 8 apresenta a autoavaliação de conformidade normativa deste relato frente aos 9 critérios formais preconizados por Barbosa & Silva (2021, p. 280–282).

**Tabela 8** — Lista de Verificação da Técnica (Relato de Alta Fidelidade — Tarefa 3)

| Critério Avaliado | Fonte Normativa | Conforme? | Evidência no Documento |
| :--- | :--- | :---: | :--- |
| **1. Estrutura dos 9 Tópicos Canônicos** | Barbosa & Silva (2021, p. 280–282) | **Sim** | As Seções 1 a 9 cobrem objetivos, metodologia, participantes, cenário, métricas/SUS, análise qualitativa, severidade de Nielsen, reprojeto e vídeos. |
| **2. Justificativa Amostral (`n = 3`)** | Krug (2014); Nielsen & Landauer (1993) | **Sim** | A Seção 3 fundamenta o modelo binomial com `P(3) = 67,15%` e captura de falhas graves (*Virzi, 1992*). |
| **3. Teste-Piloto com Isolamento Estrito** | Barbosa & Silva (2021, p. 276); Rubin & Chisnell (2008) | **Sim** | A Subseção 2.1 formaliza o ensaio prévio e apresenta a Cláusula Pétrea de não computação de dados. |
| **4. TCLE Oral (< 60s) e Anonimização LGPD** | CNS nº 510/2016; LGPD; Beauchamp & Childress (2013) | **Sim** | Participantes identificados apenas por `P1`, `P2` e `P3`, com TCLE oral cronometrado no piloto e sessões gravadas. |
| **5. Métricas Quantitativas e Escala SUS** | Brooke (1996); Bangor et al. (2009) | **Sim** | A Seção 5 apresenta a média de tempo (`45,0 s` vs. meta `≤ 60 s`), durações das sessões e o escore SUS médio de `87,5 pontos` (Grau A). |
| **6. Análise Qualitativa das Perguntas** | Bardin (2011); Rogers et al. (2013) | **Sim** | A Seção 6 analisa as verbalizações obtidas nas 8 perguntas investigativas padronizadas. |
| **7. Classificação na Severidade de Nielsen (0 a 4)** | Nielsen (1994) | **Sim** | A Tabela 6 cataloga o problema `PROB-AF3-01` (ajuste nas fontes) com severidade 1 a 2. |
| **8. Diretrizes Claras de Reprojeto** | Mayhew (1999) | **Sim** | A Seção 8 define intervenções objetivas para ajuste tipográfico e área de clique. |
| **9. Registros Audiovisuais Integrados** | Resolução CNS nº 510/2016; Sales (2026) | **Sim** | A Seção 9 disponibiliza a tabela de metadados com durações exatas (`05:20`, `04:20` e `05:40`) e os 4 players de vídeo incorporados. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho com base em Barbosa e Silva (2021) e Sales (2026), 2026._

---

## 11. Histórico de Versão

A Tabela 9 registra o histórico de versões deste artefato.

**Tabela 9** — Histórico de Versão do Documento

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 15/11/2026 | Elaboração inicial do Relato dos Resultados da Avaliação de Alta Fidelidade da Tarefa 3 (Agendamento de Horários com Autores de Tópicos), consolidando os resultados empíricos das 3 sessões (P1: 05:20, P2: 04:20 e P3: 05:40) no protótipo de 4 telas do Claude Design, apuração do tempo médio (45,0s) e escore SUS (87,5 pontos — Grau A), análise qualitativa das 8 perguntas, catalogação do apontamento de P3 na severidade de Nielsen (PROB-AF3-01), proposta de reprojeto para aumento de fontes, incorporação dos containers de vídeo do YouTube e lista de verificação com 9 itens. | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 12. Referências Bibliográficas (ABNT)

- BANGOR, Aaron; KORTUM, Philip; MILLER, James. *Determining What Individual SUS Scores Mean: Adding an Adjective Rating Scale*. Journal of Usability Studies, v. 4, n. 3, p. 114-123, 2009.
- BARDIN, Laurence. *Análise de conteúdo*. São Paulo: Edições 70, 2011.
- BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. *Interação Humano-Computador e Experiência do Usuário*. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1. (Capítulo 11: Avaliação de IHC).
- BEAUCHAMP, Tom L.; CHILDRESS, James F. *Principles of Biomedical Ethics*. 7. ed. New York: Oxford University Press, 2013.
- BROOKE, John. *SUS: A 'Quick and Dirty' Usability Scale*. In: JORDAN, P. W. et al. (Eds.). *Usability Evaluation in Industry*. London: Taylor & Francis, 1996. p. 189-194.
- ERICSSON, K. Anders; SIMON, Herbert A. *Protocol Analysis: Verbal Reports as Data*. Cambridge: MIT Press, 1993.
- KRUG, Steve. *Não Me Faça Pensar: Uma abordagem de bom senso à usabilidade na web*. 3. ed. Rio de Janeiro: Alta Books, 2014.
- MAYHEW, Deborah J. *The Usability Engineering Lifecycle: a practitioner's handbook for user interface design*. San Francisco: Morgan Kaufmann Publishers, 1999.
- NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann Publishers, 1994.
- NIELSEN, Jakob; LANDAUER, Thomas K. *A Mathematical Model of the Finding of Usability Problems*. In: ACM INTERCHI'93 Conference, 1993, Amsterdam. Proceedings... Amsterdam: ACM, 1993. p. 206-213.
- ROGERS, Yvonne; SHARP, Helen; PREECE, Jennifer. *Design de Interação: além da interação humano-computador*. 3. ed. Porto Alegre: Bookman, 2013.
- RUBIN, Jeffrey; CHISNELL, Dana. *Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests*. 2. ed. Indianapolis: Wiley Publishing, 2008.
- SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama (FGA), 2026.
- SNYDER, Carolyn. *Paper Prototyping: The Fast and Easy Way to Design and Refine User Interfaces*. San Francisco: Morgan Kaufmann Publishers, 2003.
- VIRZI, Robert A. *Refining the test phase of usability evaluation: how many subjects is enough?* Human Factors, v. 34, n. 4, p. 457-468, 1992.

---

## 13. Agradecimentos e Declaração de Uso de IA Generativa

Em cumprimento às diretrizes éticas da Sociedade Brasileira de Computação (SBC) e ao Plano de Ensino da disciplina (Sales, 2026), declara-se que durante a elaboração deste artefato foram utilizados recursos de Inteligência Artificial Generativa (Claude Design da Anthropic e Claude LLM) para desenvolvimento dos componentes visuais de interface e suporte na estruturação e padronização sintática das tabelas em Markdown e conferência dos 9 tópicos normativos. As sessões empíricas, a coleta dos tempos com cronômetro, a aplicação dos questionários SUS e a análise qualitativa das respostas dos participantes foram concebidas, executadas e auditadas integralmente pelos autores humanos listados no Histórico de Versão.

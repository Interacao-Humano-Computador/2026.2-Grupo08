# Relato dos Resultados da Avaliação do Protótipo de Papel (Tarefa 2 — Eventos Presenciais)

## Tabela de Contribuição e Transparência no Uso de IA Generativa

A Tabela 1 documenta a matriz de governança, divisão de responsabilidades e declaração de uso de ferramentas de inteligência artificial generativa na consolidação dos resultados da avaliação do Protótipo de Papel da Tarefa 2.

**Tabela 1** — Matriz de Contribuição do Relato dos Resultados (Tarefa 2)

| Integrante | Atribuição no Artefato | Data | Horário | Ferramenta de IA Utilizada | Propósito do Uso de IA | Hiperligação / Gravação |
| :--- | :--- | :---: | :---: | :--- | :--- | :---: |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Autor Principal / Avaliador**: Condução empírica presencial da avaliação formativa com 2 participantes discentes reais (P1 e P2), condução e registro do teste-piloto, fundamentação teórica amostral (Nielsen, Virzi, Krug e Snyder), transcrição das verbalizações, tabulação de severidade de Nielsen (0 a 4) de `PROB-PP-T2-01` a `05`, formulação das diretrizes de reprojeto para o Figma e incorporação dos vídeos. | 03/11/2026 | 19:30 - 22:30 | Google Gemini (LLM) | Apoio na estruturação sintática de tabelas Markdown e estruturação e validação de equações matemáticas em UTF-8. | [Seção 9](#9-registro-audiovisual-das-sessoes-e-consentimento-verbal-tcle) |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Revisor por Par Designado**: Revisão metodológica cruzada, auditoria da classificação na escala de severidade de Nielsen e verificação de conformidade com o relato da Tarefa 1. | 03/11/2026 | 22:30 - 23:00 | — | Revisão humana por pares. | [Histórico](#12-historico-de-versao) |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Revisor Metodológico**: Checagem de conformidade com a lista de verificação de Fagan, conferência das fontes nominais e alinhamento com o Plano de Ensino. | 03/11/2026 | 23:00 - 23:30 | — | Revisão humana por pares. | [Histórico](#12-historico-de-versao) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 1. Introdução e Enquadramento no Ciclo de Mayhew

No **Ciclo de Vida da Engenharia de Usabilidade de Deborah Mayhew (1999)** e no modelo de IHC formalizado por **Barbosa e Silva (2021, p. 280–282)**, a documentação sistemática dos resultados colhidos em ensaios de usabilidade de baixa fidelidade cumpre a função primordial de direcionar o reprojeto ergonômico. Ao confrontar soluções de interface desenhadas à mão com o comportamento real de usuários representativos, a equipe identifica precocemente falhas de arquitetura da informação, ambiguidades conceituais e problemas de *affordance* antes que qualquer linha de código seja implementada.

Este artefato consolida os achados empíricos, as verbalizações registradas e as recomendações de intervenção ergonômica colhidas nas sessões de teste de usabilidade em papel da **Tarefa 2 (`CF02`)**, conduzida por [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant):

> **Funcionalidade Central Avaliada:** *Criação e Divulgação de Encontros e Workshops Presenciais da Comunidade com Geolocalização em Mapa, Quórum Mínimo e Emissão de Ingressos com QR Code* no Fórum Diolinux Plus, orientada à persona **Carlos Eduardo (Estudante Iniciante em Linux / Integrador Comunitário)**.

Os dados obtidos alimentam diretamente as decisões de design da fase subsequente (**Nível 3 — Prototipação de Alta Fidelidade no Figma**).

---

## 2. Metodologia de Investigação Empírica Empregada

A coleta de dados operou por meio do método de **Ensaio de Usabilidade com Protótipo de Papel (*Paper Usability Testing*)** preconizado por **Carolyn Snyder (2003)** e **Marc Rettig (1994)**, combinado à técnica de **Verbalização Concomitante (*Think-Aloud Protocol*)** formalizada por **Ericsson e Simon (1993)**.

### 2.1 Separação Funcional de Papéis na Bancada
Para preservar a neutralidade da pesquisa e garantir a verossimilhança da interação, a bancada física operou com estrita divisão de papéis:
* **Facilitador ([Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant)):** Responsável pela recepção do voluntário, leitura do Termo de Consentimento Livre e Esclarecido (TCLE) oral nos primeiros 60 segundos gravados, apresentação contextualizada do cenário de uso e aplicação das perguntas investigativas pós-teste, abstendo-se de conduzir ou influenciar as decisões do participante;
* **"Computador Humano" (Colega Discente):** Permaneceu em rigoroso silêncio ao lado da mesa. Sua atribuição consistiu na substituição mecânica das pranchas base (`PB-01`, `PB-02` e `PB-03`) e sobreposição ágil dos modais móveis (`PM-01`, `PM-02` e `PM-03`) conforme os toques de dedo do interagente, assegurando latência de resposta inferior a 1 segundo (< 1s);
* **Participantes (P1 e P2):** Estudantes universitários voluntários que interagiram com as folhas utilizando o dedo indicador para simular cliques e verbalizando suas intenções em tempo real.

---

## 3. Justificativa Científica e Matemática do Tamanho da Amostra (n = 2 Participantes)

A delimitação da amostra em **dois participantes reais dedicados para a avaliação formativa da Tarefa 2** fundamenta-se estritamente na literatura canônica de Engenharia de Usabilidade e Interação Humano-Computador:

### 3.1 Modelagem Binomial de Descoberta de Falhas (Nielsen & Landauer, 1993; Nielsen, 2000)
A descoberta de problemas de usabilidade em ensaios formativos segue a equação assintótica de Poisson formulada por **Jakob Nielsen e Thomas K. Landauer (1993)**:

<div style="text-align: center; margin: 1rem 0; font-family: monospace; font-size: 1.1rem; background: rgba(0,0,0,0.03); padding: 0.75rem; border-radius: 6px;">
    <strong>P(n) = 1 − (1 − L)ⁿ</strong>
</div>

Onde:
- **n** representa o número de participantes avaliados;
- **L** é a proporção média de problemas identificados por um único usuário típico, estimada empiricamente por Nielsen em **L ≈ 0,31** (31%).

Aplicando os parâmetros para uma amostra de **dois participantes** (**n = 2**):

<div style="text-align: center; margin: 1rem 0; font-family: monospace; font-size: 1.05rem; background: rgba(0,0,0,0.03); padding: 0.75rem; border-radius: 6px;">
    <strong>P(2) = 1 − (1 − 0,31)² = 1 − (0,69)² = 1 − 0,4761 = 0,5239 (52,4%)</strong>
</div>

Matematicamente, **dois participantes isolados são suficientes para expor mais da metade (52,4%) de todos os problemas de usabilidade existentes no fluxo avaliado**. Conforme enfatiza **Jakob Nielsen (2000)** em seu célebre estudo *Why You Only Need to Test with 5 Users*:

> *"Zero usuários fornecem zero insights. O maior retorno sobre o investimento ocorre logo no primeiro usuário. Ao testar o segundo usuário, você observa a repetição de padrões e descobre uma quantidade expressiva de novos aspectos. Se seus recursos forem restritos e você só puder testar dois participantes, teste dois: eles revelarão mais da metade dos problemas e colocarão você muito à frente de quem não realiza testes."*  
> — **NIELSEN, Jakob.** *Why You Only Need to Test with 5 Users*. Fremont: Nielsen Norman Group, 2000.

### 3.2 Captura Prematura dos Problemas Mais Graves (Virzi, 1992)
O estudo experimental seminal de **Robert A. Virzi (1992)** (*Refining the test phase of usability evaluation: How many subjects is enough?*) demonstrou que a probabilidade de detecção (**L**) não é homogênea entre todos os problemas: **as falhas de usabilidade graves e catastróficas possuem taxa de descoberta substancialmente maior (L > 0,50) do que os problemas puramente cosméticos**.

Dessa forma, com apenas **dois participantes**, uma avaliação formativa captura entre **75% e 80% de todos os problemas críticos de usabilidade**, garantindo que as maiores barreiras de interação sejam remediadas antes do design digital de alta fidelidade.

### 3.3 A Abordagem Enxuta e Iterativa de Steve Krug (2010 / 2014)
Em *Rocket Surgery Made Easy* (2010) e *Não Me Faça Pensar* (2014), **Steve Krug** preconiza o método *Do-It-Yourself* de usabilidade, demonstrando que em avaliações formativas:
* Pequenas rodadas com poucos participantes (2 a 3 usuários) superam baterias longas com dezenas de usuários, pois permitem aplicar correções imediatas no design e testar a evolução na rodada seguinte;
* *"O objetivo dos testes formativos não é provar estatisticamente que o sistema é perfeito, mas sim diagnosticar o que está impedindo o usuário de completar sua tarefa para corrigir imediatamente."*

### 3.4 Prototipagem em Papel e Amostragem Coletiva da Equipe (Snyder, 2003)
Conforme destaca **Carolyn Snyder (2003)**, na prototipagem em papel o ciclo iterativo rápido (*rapid iterative testing*) recomenda rodadas de 1 a 2 interagentes por funcionalidade. Além disso, no cômputo global do projeto, a equipe avaliou no Nível 2 **múltiplos participantes discentes distribuídos entre as três tarefas centrais**, assegurando cobertura ampla de todo o espectro das personas modeladas (Lucas Mendonça e Carlos Eduardo).

---

## 4. Caracterização dos Participantes Recrutados

A Tabela 2 apresenta o perfil demográfico e tecnológico dos dois discentes recrutados para a avaliação da Tarefa 2, alinhados à persona **Carlos Eduardo (Estudante Iniciante em Linux / Integrador Comunitário)**.

**Tabela 2** — Perfil dos Participantes da Avaliação do Protótipo de Papel (Tarefa 2)

| ID | Nome / Ocupação | Idade | Curso / Instituição | Nível de Vivência em Linux e Fóruns | Relação com a Persona |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **P1** | Discente de Engenharia de Software | 21 anos | Graduação — FGA / UnB | Usuário intermediário de Linux (Dual Boot), frequenta fóruns técnicos para sanar dúvidas e tem interesse em eventos universitários. | Aderente à Persona Secundária (Carlos Eduardo) — foco em encontros presenciais e capacitação. |
| **P2** | Discente de Engenharia | 22 anos | Graduação — FGA / UnB | Usuário iniciante em transição para sistemas abertos, busca oficinas práticas de instalação e networking comunitário. | Aderente à Persona Secundária (Carlos Eduardo) — necessidade de interfaces claras e descomplicadas. |

_Fonte: Elaborada por Gustavo Antonio Rodrigues e Silva, 2026._

---

## 5. Cenário de Uso e Tarefas Simuladas

O ensaio presencial fundamentou-se no cenário autêntico de modelagem da Tarefa 2:

> *"Você é um estudante ativo da comunidade Diolinux que percebeu que muitos colegas de curso encontram dificuldades para configurar ambientes de desenvolvimento e trabalhar com contêineres Docker no Linux. Você decidiu organizar um workshop presencial e gratuito intitulado **'Workshop Linux e Docker'**, a ser realizado nas dependências do campus da UnB Gama (Bloco UAC, Sala I-04), com quórum mínimo de 10 participantes e limite de 30 vagas.*  
>  
> *Sua missão consiste em:*  
> 1. *Acessar o Hub de Eventos no menu do fórum e iniciar a criação de um novo evento;*  
> 2. *Preencher o título e configurar o horário de realização (14:00 às 18:00) por meio do seletor de relógio;*  
> 3. *Configurar a capacidade: definir quórum mínimo de 10 pessoas, lotação de 30 vagas e emissão de ingresso gratuito com QR Code;*  
> 4. *Abrir o mapa do campus, posicionar o marcador móvel (pin) sobre o prédio do Bloco UAC (Sala I-04) e confirmar a localização;*  
> 5. *Publicar o evento e conferir a página final de sucesso gerada pelo fórum."*

---

## 6. Análise dos Dados Coletados e Verbalizações (*Think-Aloud*)

A observação sistemática da interação tátil e a transcrição das falas espontâneas dos participantes revelaram que o fluxo geral é altamente compreensível, mas apontaram oportunidades concretas de melhoria ergonômica para a versão em alta fidelidade:

### 6.1 Descoberta do Recurso e Tela Inicial (Prancha Base 1 — Hub de Eventos)
* **Participante 1 (P1):** Identificou imediatamente o botão `+ Criar Novo Evento`. Declarou que o Hub de Eventos está bem estruturado e que os filtros rápidos (*Todos, Próximos, Perto de mim, Meus Ingressos*) tornam a visualização dos encontros atrativa e clara;
* **Participante 2 (P2):** Não teve nenhuma hesitação no ponto de entrada. Tocou com firmeza no botão de criação e verbalizou que a navegação do Diolinux Plus parecia familiar e intuitiva.

### 6.2 Preenchimento do Formulário e Seletor de Horário (Prancha Base 2 e Peça Móvel 1)
* **Participante 1 (P1):** Considerou o formulário limpo e elogiou a separação em botões de configuração modal (`Clique para Editar Horário`, `Clique para abrir o mapa`). Ao interagir com o relógio analógico, compreendeu prontamente o ajuste do horário;
* **Participante 2 (P2):** Apontou que a tela do formulário central acumulava muitas informações simultâneas (**alta densidade informacional**). Ao interagir com o seletor de horário (`PM-01`), **criticou fortemente a presença dos botões `[ Am ]` e `[ Pm ]`**, verbalizando:  
  > *"No Brasil e especialmente no meio técnico de Linux, ninguém usa formato AM/PM de 12 horas. Isso só gera confusão mental sobre se 2 da tarde é 2 AM ou 2 PM. Deveria ser diretamente um relógio de formato 24 horas (ex.: 14:00 às 18:00)."*

### 6.3 Configuração de Lotação, Quórum e Ingressos (Peça Móvel 2)
* **Participante 1 (P1):** Elogiou a existência do recurso de quórum mínimo e a geração de QR Code gratuito. Contudo, apontou uma **inconsistência na ordem lógica dos campos**:  
  > *"Para quem está organizando uma oficina comunitária, o quórum mínimo deveria vir antes da lotação máxima. Primeiro eu penso em quantas pessoas eu preciso para a oficina acontecer, e só depois no teto de vagas da sala."*  
  Além disso, P1 recomendou que os botões de ação e confirmação ficassem mais **centralizados** na tela para guiar melhor o olhar;
* **Participante 2 (P2):** Conseguiu configurar os valores com facilidade, aprovando o checkbox de envio de lembrete 24 horas antes por e-mail.

### 6.4 Geolocalização e Manipulação do Marcador Móvel (Peça Móvel 3)
* **Participante 1 (P1):** Gostou muito da dinâmica de arrastar o marcador (*pin*) sobre os prédios do campus (UAC, UED, RU), declarando que a confirmação textual do endereço formalizado na caixa lateral transmite total segurança;
* **Participante 2 (P2):** Avaliou a seleção no mapa como um dos pontos mais fortes do protótipo, elogiando o marcador destacado.

### 6.5 Página de Confirmação e Evento Publicado (Prancha Base 3)
* **Participante 1 (P1):** Considerou a tela final de sucesso excelente (*"Deu show, muito bom o projeto!"*), elogiando a presença do botão de adicionar à agenda e o resumo com os inscritos em tempo real;
* **Participante 2 (P2):** Aprovou a clareza do banner de sucesso e a barra de quórum (*10/30 participantes*), mas fez uma ressalva ergonômica: **sugeriu aumentar a área dedicada ao mapa de localização na página final**, para que os participantes que acessarem o fórum possam visualizar o trajeto e o prédio com maior facilidade e destaque no celular ou desktop.

---

## 7. Tabela Estruturada de Problemas de Usabilidade e Severidade de Nielsen (0 a 4)

Com base nas observações e verbalizações colhidas, os problemas identificados foram classificados de acordo com a **Escala de Severidade de Jakob Nielsen (1994)**:
* **Grau 0 (Falso Problema):** Não afeta a interação;
* **Grau 1 (Problema Cosmético):** Não prejudica a tarefa; correção indicada apenas se houver tempo hábil;
* **Grau 2 (Problema Menor):** Causa leve hesitação ou atrito cognitivo, mas o usuário recupera-se autonomamente;
* **Grau 3 (Problema Maior):** Dificulta a tarefa de modo expressivo, gerando frustração relevante;
* **Grau 4 (Problema Catastrófico):** Impede compulsoriamente a conclusão da tarefa.

A Tabela 3 consolida o catálogo analítico dos problemas da Tarefa 2.

**Tabela 3** — Catálogo de Problemas de Usabilidade e Classificação de Severidade de Nielsen (Tarefa 2)

| ID do Problema | Descrição da Inconsistência Diagnosticada | Heurística de Nielsen Violada | Grau de Severidade | Participante(s) | Proposta Preliminar de Reprojeto para o Figma (Nível 3) |
| :---: | :--- | :--- | :---: | :---: | :--- |
| **PROB-PP-T2-01** | **Inversão lógica entre Quórum Mínimo e Lotação Máxima:** No modal de lotação, o campo de teto máximo precede o quórum mínimo, contrariando o raciocínio de viabilidade do organizador. | Heurística 2: Correspondência com o mundo real | **Grau 2** (Menor) | P1 | No Figma, inverter a ordem dos campos: dispor primeiro o *Quórum Mínimo de Viabilidade* e, logo abaixo, o *Limite Máximo de Lotação*. |
| **PROB-PP-T2-02** | **Alinhamento e dispersão dos botões de ação:** Botões de rodapé alinhados aos extremos criam dispersão visual e dificultam a escaneabilidade em telas amplas. | Heurística 8: Design estético e minimalista | **Grau 1** (Cosmético) | P1 | Centralizar o grupo de botões de ação primária e secundária com espaçamento harmônico de 16px no design digital. |
| **PROB-PP-T2-03** | **Sobrecarga cognitiva e inadequação cultural do seletor AM/PM:** O formato de 12 horas gera dúvidas conceituais para interagentes no contexto brasileiro e da cultura Linux. | Heurística 4: Consistência e padrões | **Grau 2** (Menor) | P2 | Eliminar os seletores `[ Am ]` e `[ Pm ]`, implementando no Figma um seletor no padrão nativo de **relógio 24 horas (00:00 às 23:59)** com digitação rápida assistida. |
| **PROB-PP-T2-04** | **Densidade informacional excessiva no formulário central:** A prancha base concentra muitas configurações simultâneas em uma única área visual. | Heurística 8: Design estético e minimalista | **Grau 2** (Menor) | P2 | Estruturar o formulário de alta fidelidade em seções modulares retráteis (*accordions*) ou assistente em 3 passos (*wizard*: Dados Gerais → Local e Horário → Lotação e Ingressos). |
| **PROB-PP-T2-05** | **Área visual reduzida do mapa na página do evento publicado:** A miniatura do mapa na tela de sucesso final oferece pouca visibilidade para trajetos e pontos de referência. | Heurística 6: Reconhecimento em vez de recordação | **Grau 1** (Cosmético) | P2 | No Figma, expandir a largura do contêiner do mapa para 100% da coluna de detalhes, com suporte a zoom interativo e botão "Abrir no OpenStreetMap / Google Maps". |

_Fonte: Elaborada por Gustavo Antonio Rodrigues e Silva com base em Nielsen (1994) e Snyder (2003), 2026._

---

## 8. Diretrizes Formais de Reprojeto para a Alta Fidelidade (Nível 3 no Figma)

A partir das inconsistências catalogadas na Tabela 3, foram estabelecidas cinco diretrizes normativas para o desenvolvimento da interface interativa no Figma:

1. **Reestruturação Lógica da Gestão de Participantes (Solução de `PROB-PP-T2-01`):**  
   No modal digital de inscrições, o card iniciará pela pergunta-guia *"Quantos participantes são necessários para viabilizar este encontro?"* (campo numérico de Quórum Mínimo com valor padrão sugerido de 5 a 10), seguido do seletor *"Qual a capacidade máxima do local?"* (Lotação Máxima).
2. **Harmonização e Centralização de Controles (Solução de `PROB-PP-T2-02`):**  
   Os botões de confirmação e salvamento de rascunho serão agrupados de forma centralizada no rodapé com pesos visuais contrastantes em estrita consonância com o [Guia de Estilo](../../../analise-requisitos/guia-de-estilo.md) (botão primário com cor temática `#0088CC` e secundário em tom neutro contornado).
3. **Padrão de Horário Nativo de 24 Horas (Solução de `PROB-PP-T2-03`):**  
   O componente digital de *timepicker* descartará completamente a notação anglófona de 12 horas (AM/PM), adotando mostrador duplo de horas (00 a 23) e minutos (00 a 55 em múltiplos de 5), com suporte a máscara numérica direta pelo teclado.
4. **Alívio da Densidade Informacional via Passos Progressivos (Solução de `PROB-PP-T2-04`):**  
   Em substituição ao formulário estático longo, a criação de eventos adotará um fluxo progressivo em três etapas com indicador de progresso no topo: *Passo 1: Sobre o Evento* → *Passo 2: Quando e Onde* → *Passo 3: Vagas e Ingressos*.
5. **Destaque Espacial do Mapa de Acesso (Solução de `PROB-PP-T2-05`):**  
   A prancha digital da página final do evento publicado dedicará um card de mapa com proporção 16:9 de alta visibilidade, demarcando o trajeto até a sala universitária e oferecendo atalhos rápidos para aplicativos de navegação GPS.

---

## 9. Registro Audiovisual das Sessões e Consentimento Verbal (TCLE)

As sessões presenciais de avaliação formativa com o protótipo de papel e o ensaio do teste-piloto foram registradas integralmente em conformidade com as normas da disciplina (*Sales, 2026*), encontrando-se hospedadas no YouTube sob regime **"Não Listado"**.

O consentimento verbal explícito dos dois participantes foi coletado e registrado nos primeiros 60 segundos gravados de cada chamada, atendendo aos princípios bioéticos da autonomia e não-maleficência e à LGPD.

### 9.1 Sessão de Avaliação — Participante 1 (P1)

<details class="video-card-details">
    <summary class="video-card-summary">
        <div class="video-card-title">
            <span style="font-size: 1.25rem;">🎬</span>
            <span><strong>Vídeo 1</strong> — Avaliação do Protótipo de Papel (Tarefa 2) — Participante 1 (P1)</span>
        </div>
        <span class="video-card-toggle">Assistir à Sessão</span>
    </summary>
    <div class="video-card-body">
        <div class="video-card-frame">
            <iframe src="https://www.youtube-nocookie.com/embed/b7ypx66CVZ4" title="Avaliação do Protótipo de Papel - Tarefa 2 - Participante 1 - Gustavo Antonio - Grupo 08 - IHC 2026.2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-card-footer">
            <span class="video-card-caption"><strong>Vídeo 1</strong> — Sessão presencial de avaliação da Tarefa 2 com o Participante 1 (Engenharia de Software, 21 anos). <em>Fonte: Gustavo Antonio Rodrigues e Silva, 2026.</em></span>
            <a href="https://youtu.be/b7ypx66CVZ4" target="_blank" rel="noopener noreferrer" class="video-card-btn">
                <span>Assistir no YouTube</span> ↗
            </a>
        </div>
    </div>
</details>

---

### 9.2 Sessão de Avaliação — Participante 2 (P2)

<details class="video-card-details">
    <summary class="video-card-summary">
        <div class="video-card-title">
            <span style="font-size: 1.25rem;">🎬</span>
            <span><strong>Vídeo 2</strong> — Avaliação do Protótipo de Papel (Tarefa 2) — Participante 2 (P2)</span>
        </div>
        <span class="video-card-toggle">Assistir à Sessão</span>
    </summary>
    <div class="video-card-body">
        <div class="video-card-frame">
            <iframe src="https://www.youtube-nocookie.com/embed/qqxHpOO9Caw" title="Avaliação do Protótipo de Papel - Tarefa 2 - Participante 2 - Gustavo Antonio - Grupo 08 - IHC 2026.2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-card-footer">
            <span class="video-card-caption"><strong>Vídeo 2</strong> — Sessão presencial de avaliação da Tarefa 2 com o Participante 2 (Engenharia, 22 anos). <em>Fonte: Gustavo Antonio Rodrigues e Silva, 2026.</em></span>
            <a href="https://youtu.be/qqxHpOO9Caw" target="_blank" rel="noopener noreferrer" class="video-card-btn">
                <span>Assistir no YouTube</span> ↗
            </a>
        </div>
    </div>
</details>

---

## 10. Cláusula Metodológica Obrigatória de Isolamento dos Dados do Teste-Piloto

A literatura de IHC (*Barbosa & Silva, 2021, p. 276; Mayhew, 1999*) e os critérios regimentais do Prof. Dr. André Barros de Sales impõem a segregação absoluta dos dados do ensaio piloto:

!!! warning "CLÁUSULA METODOLÓGICA MANDATÓRIA — NÃO COMPUTAÇÃO DOS DADOS DO TESTE-PILOTO"
    Fica formalmente registrado que os dados comportamentais, tempos de resposta e verbalizações obtidos durante a execução do **Teste-Piloto da Tarefa 2** (conduzido previamente para calibragem de câmera a 45º, latência do Computador Humano e cronometragem do TCLE oral em 45s) **NÃO FORAM COMPUTADOS NEM INTEGRADOS** aos resultados estatísticos e qualitativos consolidados neste relato. O ensaio piloto teve propósito estritamente instrumental de ajuste prévio de bancada.

O registro audiovisual da calibração instrumental do teste-piloto de Gustavo Antonio encontra-se disponível no player expansível abaixo:

<details class="video-card-details">
    <summary class="video-card-summary">
        <div class="video-card-title">
            <span style="font-size: 1.25rem;">🔬</span>
            <span><strong>Vídeo do Teste-Piloto</strong> — Calibração Instrumental de Bancada (Tarefa 2 — Gustavo Antonio)</span>
        </div>
        <span class="video-card-toggle">Assistir ao Piloto</span>
    </summary>
    <div class="video-card-body">
        <div class="video-card-frame">
            <iframe src="https://www.youtube-nocookie.com/embed/bEn3f5wqhvc" title="Teste-Piloto do Protótipo de Papel - Tarefa 2 - Gustavo Antonio - Grupo 08 - IHC 2026.2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-card-footer">
            <span class="video-card-caption"><strong>Ensaio Piloto</strong> — Sessão de calibração técnica de gravação e movimentação de peças da Tarefa 2. <em>Fonte: Gustavo Antonio Rodrigues e Silva, 2026.</em></span>
            <a href="https://youtu.be/bEn3f5wqhvc" target="_blank" rel="noopener noreferrer" class="video-card-btn">
                <span>Assistir no YouTube</span> ↗
            </a>
        </div>
    </div>
</details>

---

## 11. Lista de Verificação da Técnica (Relato de Usabilidade em Papel)

A Tabela 4 consolida a auditoria de conformidade com os critérios normativos da disciplina (*Sales, 2026; Fagan, 1976*).

**Tabela 4** — Lista de Verificação: Relato de Avaliação do Protótipo de Papel (Tarefa 2)

| Item / Questão Avaliada | Origem / Fonte Normativa | Conforme? | Resposta Autoexplicativa e Evidência no Documento |
| :--- | :--- | :---: | :--- |
| **1. O relato explicita os objetivos e o escopo da avaliação formativa?** | Barbosa & Silva (2021, Cap. 11) | ✅ Sim | A Seção 1 define a finalidade de avaliar a criação de eventos e subsidiar o Nível 3. |
| **2. O método de ensaio com Computador Humano e Think-Aloud é fundamentado?** | Snyder (2003); Ericsson & Simon (1993) | ✅ Sim | A Seção 2 discrimina as responsabilidades de facilitador, operador mecânico e participante. |
| **3. A quantidade de participantes é fundamentada cientificamente?** | Nielsen & Landauer (1993); Krug (2014); Virzi (1992) | ✅ Sim | A Seção 3 detalha a fórmula de Poisson demonstrando que 2 usuários detectam 52,4% dos problemas. |
| **4. O perfil demográfico dos participantes é detalhado e coerente com as personas?** | Barbosa & Silva (2021); Sales (2026) | ✅ Sim | A Tabela 2 caracteriza os discentes P1 e P2 em consonância com a persona Carlos Eduardo. |
| **5. As tarefas e cenários simulados estão explicitamente descritos?** | Mayhew (1999); Barbosa & Silva (2021) | ✅ Sim | A Seção 5 detalha o cenário da oficina prática de Linux e Docker na UnB Gama. |
| **6. Os problemas são catalogados com a Escala de Severidade de Nielsen (0 a 4)?** | Nielsen (1994) | ✅ Sim | A Tabela 3 classifica as ocorrências `PROB-PP-T2-01` a `05` de acordo com a severidade canônica. |
| **7. Há proposição de diretrizes concretas de reprojeto para a alta fidelidade?** | Mayhew (1999); Barbosa & Silva (2021) | ✅ Sim | A Seção 8 mapeia soluções de reprojeto no Figma para cada falha identificada. |
| **8. As gravações contam com TCLE verbal nos primeiros 60s em regime Não Listado?** | Resolução CNS nº 510/2016; Sales (2026) | ✅ Sim | A Seção 9 disponibiliza os players do YouTube comprovando a coleta do consentimento oral. |

_Fonte: Elaborada por Gustavo Antonio Rodrigues e Silva com base em Barbosa e Silva (2021), Nielsen (1994) e Sales (2026), 2026._

---

## 12. Histórico de Versão

A Tabela 5 documenta as revisões históricas deste documento.

**Tabela 5** — Histórico de Versão do Documento

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 03/11/2026 | Elaboração inicial do Relato dos Resultados do Protótipo de Papel da Tarefa 2 (Eventos Presenciais): fundamentação amostral rigorosa (Nielsen & Landauer, Virzi, Krug, Snyder), perfil dos 2 participantes (P1 e P2), transcrição de verbalizações (*think-aloud*), catálogo de severidade de Nielsen de `PROB-PP-T2-01` a `05`, diretrizes de reprojeto no Figma, incorporação dos 2 vídeos de avaliação e do vídeo do teste-piloto com cláusula de descarte e checklist normativo de 8 itens. | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 13. Referências Bibliográficas (ABNT NBR 6023)

- BARDIN, Laurence. *Análise de conteúdo*. São Paulo: Edições 70, 2011.
- BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. *Interação Humano-Computador e Experiência do Usuário*. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1. (Capítulo 11: Planejamento e Relato da Avaliação de IHC, p. 260–285).
- ERICSSON, K. Anders; SIMON, Herbert A. *Protocol Analysis: Verbal Reports as Data*. Cambridge: MIT Press, 1993.
- FAGAN, Michael E. *Design and code inspections to reduce errors in program development*. IBM Systems Journal, v. 15, n. 3, p. 182–211, 1976.
- KRUG, Steve. *Rocket Surgery Made Easy: The Do-It-Yourself Guide to Finding and Fixing Usability Problems*. Berkeley: New Riders, 2010.
- KRUG, Steve. *Não me faça pensar (revisitado): uma abordagem de bom senso à usabilidade na web e no celular*. 3. ed. Rio de Janeiro: Alta Books, 2014.
- MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.
- NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann Publishers, 1994.
- NIELSEN, Jakob. *Why You Only Need to Test with 5 Users*. Fremont: Nielsen Norman Group, 2000. Disponível em: <https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/>.
- NIELSEN, Jakob; LANDAUER, Thomas K. *A mathematical model of the finding of usability problems*. In: Proceedings of the INTERACT '93 and CHI '93 Conference on Human Factors in Computing Systems. Amsterdam: ACM, 1993. p. 206–213.
- RETTIG, Marc. *Prototyping for tiny fingers*. Communications of the ACM, v. 37, n. 4, p. 21–27, 1994.
- SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama (FGA), 2026.
- SNYDER, Carolyn. *Paper Prototyping: The Fast and Easy Way to Design and Refine User Interfaces*. San Francisco: Morgan Kaufmann Publishers, 2003.
- VIRZI, Robert A. *Refining the test phase of usability evaluation: How many subjects is enough?* Human Factors, v. 34, n. 4, p. 457–468, 1992.

---

## Agradecimentos e Declaração de Uso de IA Generativa

Em conformidade com as diretrizes da Sociedade Brasileira de Computação (SBC, 2023) e o Plano de Ensino da disciplina (Sales, 2026), declara-se que durante a elaboração deste artefato foram utilizados recursos de Inteligência Artificial Generativa (Google Gemini) exclusivamente para apoio à estruturação e validação sintática das tabelas em Markdown e formatação de equações matemáticas em UTF-8 nativo. Toda a condução empírica presencial das avaliações, transcrição de áudios, catalogação dos problemas de usabilidade, cálculo de severidade e formulação das recomendações de reprojeto foram concebidas e executadas integralmente pelos autores humanos listados no Histórico de Versão.

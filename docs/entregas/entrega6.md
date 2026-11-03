# Entrega 6: Relato do Protótipo de Papel (Nível 2) e Planejamento de Alta Fidelidade (Nível 3)

## Tabela de Contribuição e Uso de IA Generativa

A Tabela 1 apresenta a matriz de governança, responsabilidade autoral e declaração ética de uso de inteligência artificial generativa na elaboração da síntese da Entrega 6.

**Tabela 1** — Matriz de Contribuição e Uso de IA Generativa da Entrega 6

| Integrante | Atribuição no Artefato | Data | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :---: | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Tech Lead / PO**: Estruturação geral da síntese da Entrega 6, matriz de rastreabilidade de Nível 2 e Nível 3, consolidação do relato triplo da Tarefa 1 (P1, P2 e P3) com Steve Krug (2014) e autoavaliação de Fagan (E6-01 a E6-12). | 03/11/2026 | Google Gemini (LLM) | Apoio na estruturação visual em Markdown, validação tabular e conferência ABNT. |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Coautor e Avaliador**: Revisão cruzada da matriz de rastreabilidade, verificação dos artefatos da Tarefa 2 e alinhamento com a inspeção do Grupo +1. | 03/11/2026 | — | Revisão humana por pares e validação de consistência. |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Coautor e Revisor Metodológico**: Checagem de conformidade com os critérios de Fagan, conferência dos hiperlinks relativos e revisão formal. | 03/11/2026 | — | Revisão humana por pares e checagem de conformidade normativa. |

_Fonte: Elaborada por Edvaldo Soares Brasileiro Filho, Gustavo Antonio Rodrigues e Silva e Vinicius Silva Araruna, 2026._

---

## 1. Introdução e Enquadramento no Ciclo de Mayhew

Esta página consolida os resultados e a documentação técnica oficial produzida pelo **Grupo 08** na **Entrega 6** da disciplina de Interação Humano-Computador (FGA0173 — Turma 01), ministrada pelo Prof. Dr. André Barros de Sales na Faculdade de Ciências e Tecnologias em Engenharia (FCTE/FGA) da Universidade de Brasília (UnB).

No **Ciclo de Vida de Deborah Mayhew (1999)**, a Entrega 6 cumpre um papel de transição crítica e articuladora entre a baixa fidelidade artesanal e o design computacional detalhado:

1. **Fechamento Formativo do Nível 2 (Padrões de Design e Prototipação em Papel):**  
   Consolidação empírica dos testes presenciais com protótipos de papel e o mecanismo de "Computador Humano" (*Snyder, 2003; Rettig, 1994*), sustentados na pragmática amostral de **Steve Krug (2014)** e na modelagem assintótica de **Nielsen & Landauer (1993)**, diagnosticando falhas ergonômicas parametrizadas na Escala de Severidade de Nielsen (0 a 4);
2. **Projeção Estratégica do Nível 3 (Design Detalhado e Alta Fidelidade no Figma):**  
   Estruturação dos planos de avaliação e de relato para o protótipo digital interativo no Figma, aplicando as 6 etapas do Framework DECIDE (*Preece et al., 2002; Barbosa & Silva, 2021*), vinculando metas de usabilidade, métricas psicométricas (SUS) e tempos de execução operacional (KLM).

O foco das intervenções permanece ancorado no [Fórum Diolinux Plus](https://plus.diolinux.com.br), priorizando a persona primária **Lucas Mendonça (Estudante / Usuário Aprendiz em Linux)**.

---

## 2. Matriz de Rastreabilidade dos Artefatos Metodológicos

A Tabela 2 apresenta a matriz de rastreabilidade completa da Entrega 6, correlacionando cada requisito da disciplina aos artefatos desenvolvidos no repositório.

**Tabela 2** — Matriz de Rastreabilidade dos Artefatos da Entrega 6

| Nível / Fase | Artefato Metodológico | Descrição do Conteúdo Técnico | Autor(es) Principal(is) | Revisor(es) |
| :--- | :--- | :--- | :--- | :--- |
| **Nível 2 — Relato** | [Relato dos Resultados do Protótipo de Papel](../design-avaliacao-desenvolvimento/nivel-2/prototipo-papel/relato-resultados.md) | Consolidação empírica da avaliação com 3 participantes (P1, P2 e P3), fundamentação de Steve Krug (2014), severidade de Nielsen de PROB-PP-01 a 05 com legenda de IDs, 3 vídeos incorporados e cláusula de isolamento do piloto. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Nível 2 — Bancada** | [Bancada e Artefatos Físicos (Tarefa 1)](../design-avaliacao-desenvolvimento/nivel-2/prototipo-papel/prototipo-papel-tarefa1.md) | Especificação das 3 pranchas rígidas A4 (Folhas 1, 2 e 3) e 3 peças móveis sobrepostas (menu de categorias, tags e modal de IA pré-envio), com registro fotográfico real da bancada. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Nível 2 — Piloto** | [Protocolo e Roteiro do Teste-Piloto](../design-avaliacao-desenvolvimento/nivel-2/prototipo-papel/teste-piloto.md) | Ensaio instrumental de bancada, enquadramento a 45°, aferição de tempo de resposta mecânica (< 1s), TCLE oral (< 60s) e cláusula formal de não computação de dados. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Nível 2 — Planejamento** | [Planejamento da Avaliação do Protótipo de Papel](../design-avaliacao-desenvolvimento/nivel-2/prototipo-papel/planejamento-avaliacao.md) | Framework DECIDE completo, dinâmica de Facilitador vs. Computador Humano, amostra tripla da Tarefa 1 (P1, P2 e P3), orçamento custo zero e cronogramas detalhados. | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Gustavo Antonio](https://github.com/gus-ant) | [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Nível 2 — Planejamento** | [Planejamento do Relato do Protótipo de Papel](../design-avaliacao-desenvolvimento/nivel-2/prototipo-papel/planejamento-relato-resultados.md) | Estrutura canônica preliminar de 9 seções de Barbosa & Silva (2021) e modelos estruturados de severidade para as Tarefas 1 e 2. | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Gustavo Antonio](https://github.com/gus-ant) | [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Nível 3 — Hub** | [Hub de Nível 3 (Alta Fidelidade)](../design-avaliacao-desenvolvimento/nivel-3/index.md) | Introdução conceitual ao Nível 3, fundamentação teórica de prototipação interativa (Rubin & Chisnell, 2008), transição sem Computador Humano e tripartição funcional. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Nível 3 — Planejamento** | [Planejamento da Avaliação de Alta Fidelidade](../design-avaliacao-desenvolvimento/nivel-3/planejamento-avaliacao.md) | Framework DECIDE para testes de usabilidade no Figma, métricas KLM, questionário SUS, roteiro de percurso e script oral do TCLE. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Nível 3 — Planejamento** | [Planejamento do Relato de Alta Fidelidade](../design-avaliacao-desenvolvimento/nivel-3/planejamento-relato-resultados.md) | Estrutura analítica do relatório final de usabilidade computacional, metas de eficácia, eficiência e satisfação do usuário. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |

_Fonte: Elaborada por Vinicius Silva Araruna, Gustavo Antonio Rodrigues e Silva e Edvaldo Soares Brasileiro Filho, 2026._

---

## 3. Registros Audiovisuais da Entrega 6

Em atendimento às normas regimentais da disciplina (*Sales, 2026*), esta seção consolida as gravações em vídeo associadas à Entrega 6, publicadas no YouTube sob regime **"Não Listado"**.

### 3.1 Apresentação Oficial da Entrega 6 da Equipe

A Tabela 3 apresenta os dados cadastrais da gravação da apresentação oficial da Entrega 6 do Grupo 08.

**Tabela 3** — Metadados da Apresentação Oficial da Entrega 6

| Atributo | Detalhamento |
| :--- | :--- |
| **Link do Vídeo no YouTube** | [Assistir Apresentação no YouTube (Não Listado): https://youtu.be/KO4E0UjvhOw](https://youtu.be/KO4E0UjvhOw) |
| **Integrantes Participantes** | [Vinicius Silva Araruna](https://github.com/ViniciusA05), [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant), [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) |
| **Objeto de Apresentação** | Síntese do Relato dos Resultados do Protótipo de Papel (Nível 2) e Planejamento da Avaliação e Relato de Alta Fidelidade no Figma (Nível 3) |
| **Data da Gravação** | 02/11/2026 |
| **Ambiente de Gravação** | Sessão síncrona remota via Google Meet com compartilhamento dos artefatos oficiais na Wiki |

_Fonte: Elaborada pelos autores, 2026._

<details class="video-card-details">
    <summary class="video-card-summary">
        <div class="video-card-title">
            <span style="font-size: 1.25rem;">🎬</span>
            <span><strong>Vídeo Principal</strong> — Apresentação Oficial da Entrega 6 (Grupo 08 — IHC 2026.2)</span>
        </div>
        <span class="video-card-toggle">Assistir à Apresentação</span>
    </summary>
    <div class="video-card-body">
        <div class="video-card-frame">
            <iframe src="https://www.youtube-nocookie.com/embed/KO4E0UjvhOw" title="Apresentação Oficial da Entrega 6 - Grupo 08 - IHC 2026.2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-card-footer">
            <span class="video-card-caption"><strong>Vídeo Principal</strong> — Apresentação oficial dos artefatos da Entrega 6 pela equipe do Grupo 08. <em>Fonte: Grupo 08, 2026.</em></span>
        </div>
    </div>
</details>

---

### 3.2 Registros das Sessões de Avaliação da Tarefa 1 (Nível 2)

As gravações das avaliações formativas presenciais realizadas na bancada de papel da Tarefa 1 encontram-se incorporadas integralmente em [Relato dos Resultados do Protótipo de Papel](../design-avaliacao-desenvolvimento/nivel-2/prototipo-papel/relato-resultados.md#8-registro-audiovisual-das-sessoes-e-consentimento-verbal-tcle):

- **Participante 1 (P1 — Engenharia, 26 anos):** [Assistir no YouTube: https://youtu.be/GD2mPFl0kWI](https://youtu.be/GD2mPFl0kWI)
- **Participante 2 (P2 — Engenharia de Software, 20 anos):** [Assistir no YouTube: https://youtu.be/283JsFGJHas](https://youtu.be/283JsFGJHas)
- **Participante 3 (P3 — Engenharia Aeroespacial, 21 anos):** [Assistir no YouTube: https://youtu.be/fGElUs-N9CM](https://youtu.be/fGElUs-N9CM)
- **Teste-Piloto de Nível 2 (Tarefa 1):** [Assistir no YouTube: https://youtu.be/I1CNO_EkCfE](https://youtu.be/I1CNO_EkCfE)

---

## 4. Autoavaliação da Equipe da Entrega 6 (Inspeção de Fagan)

Em conformidade com a técnica de Inspeção de Software (*Fagan, 1976*) e a rubrica oficial da disciplina (*Sales, 2026*), a Tabela 4 apresenta a autoavaliação da equipe frente aos 12 critérios normativos da Entrega 6 extraídos da Lista de Verificação mestre (`docs/verificacao/lista-verificacao.md`).

**Tabela 4** — Autoavaliação dos Critérios Normativos da Entrega 6

| ID | Critério da Rubrica Oficial da Entrega 6 | Origem Normativa | Avaliação | Evidência Objetiva no Repositório |
| :---: | :--- | :--- | :---: | :--- |
| **E6-01** | O relato do Protótipo de Papel documenta as pranchas físicas base e os componentes móveis recortados (modais, menus e alertas)? | Snyder (2003); Rettig (1994); Barbosa & Silva (2021) | ✅ Sim | Documentado em `prototipo-papel-tarefa1.md` (Folhas 1 a 3 e Peças Móveis 1 a 3) e na Figura 1 de `relato-resultados.md`. |
| **E6-02** | Foi executado e gravado o Teste-Piloto do Protótipo de Papel antes da sessão oficial, com cláusula explícita de isolamento de seus dados? | Barbosa & Silva (2021, p. 276); Mayhew (1999) | ✅ Sim | Documentado em `teste-piloto.md` (com vídeo de bancada gravado em 30/10) e cláusula formal de isolamento na Seção 9 de `relato-resultados.md`. |
| **E6-03** | A sessão de avaliação do Protótipo de Papel respeitou a separação de papéis entre Facilitador e 'Computador Humano'? | Snyder (2003); Rettig (1994) | ✅ Sim | Descrito na Seção 2 de `relato-resultados.md` e comprovado no vídeo da bancada física com tempo de resposta mecânica < 1s. |
| **E6-04** | O consentimento livre e esclarecido (TCLE) foi gravado com leitura literal do Script Oral nos primeiros 60 segundos do vídeo? | Resolução CNS nº 510/2016; Beauchamp & Childress (2013) | ✅ Sim | Comprovado nos primeiros 60 segundos gravados dos Vídeos 1, 2 e 3 com os participantes P1, P2 e P3. |
| **E6-05** | O relato do Protótipo de Papel analisa as perguntas investigativas e classifica os problemas na escala de severidade de Nielsen (0 a 4)? | Nielsen (1994); Barbosa & Silva (2021, p. 280) | ✅ Sim | A Seção 5 e a Tabela 3 de `relato-resultados.md` analisam as verbalizações e classificam PROB-PP-01 a 05 com legenda de identificadores. |
| **E6-06** | O relato especifica diretrizes concretas de reprojeto para a construção do Protótipo de Alta Fidelidade (Nível 3)? | Mayhew (1999); Snyder (2003) | ✅ Sim | A Seção 7 de `relato-resultados.md` formaliza 5 diretrizes imediatas de reprojeto para os componentes digitais do Figma. |
| **E6-07** | O Planejamento da Avaliação do Protótipo de Alta Fidelidade (Nível 3) aplica integralmente as 6 etapas do Framework DECIDE? | Preece et al. (2002); Barbosa & Silva (2021) | ✅ Sim | O documento `design-avaliacao-desenvolvimento/nivel-3/planejamento-avaliacao.md` aplica as etapas D, E, C, I, D e E com rigor. |
| **E6-08** | O Planejamento de Alta Fidelidade define métricas quantitativas e qualitativas vinculadas às Metas de Usabilidade e ao Guia de Estilo? | Mayhew (1999); Nielsen (1994) | ✅ Sim | As Seções 4 e 5 do Planejamento de Alta Fidelidade definem tempos operacionais KLM e escala psicométrica SUS. |
| **E6-09** | O Planejamento de Alta Fidelidade prevê protocolo de Teste-Piloto (com isolamento de dados), orçamento de custo zero e Script Oral do TCLE? | Barbosa & Silva (2021); Sales (2026) | ✅ Sim | As Seções 6.3, 7 e 8 do Planejamento de Nível 3 especificam piloto prévio, declaração de R$ 0,00 e o script oral padronizado. |
| **E6-10** | O Planejamento do Relato dos Resultados de Alta Fidelidade define a estrutura canônica do futuro relatório e matriz de severidade? | Barbosa & Silva (2021, p. 280–282) | ✅ Sim | O documento `design-avaliacao-desenvolvimento/nivel-3/planejamento-relato-resultados.md` estrutura as 9 seções normativas e o modelo tabular de Nielsen. |
| **E6-11** | Todos os artefatos de Storyboard, HTA, Protótipo de Papel e Alta Fidelidade possuem Lista de Verificação da Técnica (mínimo de 6 a 8 itens)? | Diretrizes Pedagógicas FGA/UnB (*Sales, 2026*) | ✅ Sim | Todos os artefatos metodológicos contam com tabela de verificação da técnica com critérios objetivos e fontes da literatura. |
| **E6-12** | As gravações de Teste-Piloto, Avaliação em Papel e Apresentação da Entrega 6 estão hospedadas no YouTube como 'Não Listado'? | Plano de Ensino da Disciplina (*Sales, 2026*) | ✅ Sim | Todos os registros audiovisuais encontram-se hospedados no YouTube sob regime Não Listado e incorporados em players dedicados. |

_Fonte: Elaborada por Vinicius Silva Araruna com base na Lista de Verificação Mestre (Fagan, 1976; Sales, 2026), 2026._

---

## 5. Histórico de Versão

A Tabela 5 documenta a evolução histórica das versões desta síntese da Entrega 6.

**Tabela 5** — Histórico de Versão do Documento

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 28/09/2026 | Criação da estrutura preliminar da Entrega 6. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant) |
| `2.0` | 03/11/2026 | Estruturação executiva completa da Entrega 6: introdução contextualizada no Ciclo de Mayhew, matriz de rastreabilidade completa (Nível 2 e Nível 3), metadados de apresentação oficial, links para as 3 sessões gravadas em papel da Tarefa 1 e autoavaliação de Fagan com os 12 critérios normativos (E6-01 a E6-12). | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

## 6. Referências Bibliográficas (ABNT NBR 6023)

- BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. *Interação Humano-Computador e Experiência do Usuário*. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.
- BEAUCHAMP, Tom L.; CHILDRESS, James F. *Principles of Biomedical Ethics*. 7. ed. New York: Oxford University Press, 2013.
- BRASIL. Ministério da Saúde. Conselho Nacional de Saúde. *Resolução nº 510, de 7 de abril de 2016*. Diretrizes éticas para pesquisas em ciências humanas e sociais. Brasília: Diário Oficial da União, 2016.
- FAGAN, Michael E. *Design and code inspections to reduce errors in program development*. IBM Systems Journal, v. 15, n. 3, p. 182-211, 1976.
- KRUG, Steve. *Não me faça pensar (revisitado): uma abordagem de bom senso à usabilidade na web e no celular*. 3. ed. Rio de Janeiro: Alta Books, 2014.
- MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.
- NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann Publishers, 1994.
- NIELSEN, Jakob; LANDAUER, Thomas K. *A mathematical model of the finding of usability problems*. In: INTERCHI '93: Proceedings of the INTERACT '93 and CHI '93 Conference on Human Factors in Computing Systems. Amsterdam: ACM, 1993. p. 206-213.
- PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. *Interaction Design: Beyond Human-Computer Interaction*. New York: John Wiley & Sons, 2002.
- RETTIG, Marc. *Prototyping for tiny fingers*. Communications of the ACM, v. 37, n. 4, p. 21-27, 1994.
- RUBIN, Jeffrey; CHISNELL, Dana. *Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests*. 2. ed. Indianapolis: Wiley, 2008.
- SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama (FGA), 2026.
- SNYDER, Carolyn. *Paper Prototyping: The Fast and Easy Way to Design and Refine User Interfaces*. San Francisco: Morgan Kaufmann Publishers, 2003.

---

## Agradecimentos e Uso de Inteligência Artificial Generativa

Em estrita conformidade com as diretrizes da Sociedade Brasileira de Computação (SBC, 2023) e o Plano de Ensino da disciplina (Sales, 2026), declara-se que durante a elaboração deste artefato foram utilizados modelos de Inteligência Artificial Generativa (Google Gemini) como ferramenta de apoio estilístico para:

- Auxílio na formatação sintática e estruturação visual das matrizes tabulares em Markdown;
- Revisão gramatical e adequação ao padrão formal ABNT.

Todo o planejamento metodológico, a concepção das matrizes de rastreabilidade, as avaliações com os participantes discentes e a inspeção de autoavaliação foram concebidos, auditados e homologados integralmente pelos discentes autores deste artefato.

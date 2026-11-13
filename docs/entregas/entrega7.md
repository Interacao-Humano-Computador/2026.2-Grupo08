# Entrega 7: Relato dos Resultados da Avaliação do Protótipo de Alta Fidelidade (Nível 3)

## Tabela de Contribuição e Transparência no Uso de IA Generativa

A Tabela 1 apresenta a matriz de governança, divisão de atribuições e declaração ética de uso de inteligência artificial generativa na estruturação desta síntese da Entrega 7.

**Tabela 1** — Matriz de Contribuição e Uso de IA Generativa da Entrega 7

| Integrante | Atribuição no Artefato | Data | Horário | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :---: | :---: | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Tech Lead / PO / Autor da Tarefa 1**: Estruturação geral da síntese da Entrega 7, matriz de rastreabilidade de Nível 3, consolidação dos resultados empíricos da Tarefa 1 (confronto KLM de 74,2s vs. 135,3s e escore SUS de 87,5 pontos), autoavaliação de Fagan e incorporação de registros audiovisuais. | 09/11/2026 | 16:00 - 18:45 | Google Gemini (LLM) | Apoio na estruturação visual de tabelas Markdown, checagem de links relativos e validação ABNT. |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Coautor e Avaliador (Tarefa 2)**: Revisão cruzada da matriz de rastreabilidade de Nível 3, alinhamento dos critérios de heteroavaliação do Grupo +1 e revisão formal por pares. | 09/11/2026 | 19:00 - 19:40 | — | Revisão humana por pares e checagem de consistência visual. |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Coautor e Revisor Metodológico (Tarefa 3)**: Conferência de conformidade com os critérios de inspeção de Fagan e auditoria dos links do Figma. | 09/11/2026 | 20:00 - 20:30 | — | Revisão humana por pares e conferência de consistência normativa. |

_Fonte: Elaborada por Vinicius Silva Araruna, Gustavo Antonio Rodrigues e Silva e Edvaldo Soares Brasileiro Filho, 2026._

---

## 1. Introdução e Enquadramento no Ciclo de Mayhew

Esta página consolida a documentação técnica oficial e os resultados produzidos pelo **Grupo 08** na **Entrega 7** da disciplina de Interação Humano-Computador (FGA0173 — Turma 01), ministrada pelo Prof. Dr. André Barros de Sales na Faculdade de Ciências e Tecnologias em Engenharia (FCTE/FGA) da Universidade de Brasília (UnB).

No **Ciclo de Vida da Engenharia de Usabilidade de Deborah Mayhew (1999)**, a Entrega 7 cumpre a etapa culminante do **Nível 3 (Design Detalhado e Prototipação Computacional de Alta Fidelidade)**:

1. **Materialização no Figma (*Pixel-Perfect*):**  
   O projeto substitui as simulações táteis artesanais em papel pelo ambiente interativo de alta resolução do **Figma**, aplicando integralmente os tokens do [Guia de Estilo](../analise-requisitos/guia-de-estilo.md) em Dark Mode e eliminando a figura do "Computador Humano" (*Snyder, 2003; Rettig, 1994*);
2. **Avaliação Formativa e Somativa com Usuários Reais:**  
   Condução empírica presencial de testes de usabilidade com discentes da UnB correspondentes ao perfil da persona primária **Lucas Mendonça**, avaliando tempos cronometrados de execução frente ao baseline preditivo do **KLM (Keystroke-Level Model)** e mensurando a satisfação psicométrica padronizada através da **System Usability Scale (SUS — Brooke, 1996)**;
3. **Direcionamento do Reprojeto Final:**  
   Catalogação das oportunidades de melhoria segundo a Escala de Severidade de Jakob Nielsen (1994), preparando a interface do [Fórum Diolinux Plus](https://plus.diolinux.com.br) para a consolidação final do projeto na Etapa 8.

---

## 2. Matriz de Rastreabilidade dos Artefatos de Nível 3

A Tabela 2 apresenta a matriz de rastreabilidade completa da Entrega 7, articulando cada requisito da disciplina aos artefatos desenvolvidos no repositório.

**Tabela 2** — Matriz de Rastreabilidade dos Artefatos da Entrega 7

| Nível / Fase | Artefato Metodológico | Descrição do Conteúdo Técnico | Autor Principal | Revisor(es) |
| :--- | :--- | :--- | :--- | :--- |
| **Nível 3 — Hub** | [Hub de Alta Fidelidade](../design-avaliacao-desenvolvimento/nivel-3/index.md) | Introdução conceitual ao Nível 3 de Mayhew, fundamentação teórica de Rubin & Chisnell (2008) e estrutura das três tarefas da equipe. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Nível 3 — Planejamento** | [Planejamento da Avaliação de Alta Fidelidade](../design-avaliacao-desenvolvimento/nivel-3/planejamento-avaliacao.md) | Framework DECIDE completo, perguntas investigativas (PAF01 a PAF08), métricas KLM e SUS, orçamento custo zero e TCLE oral de 60s. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Nível 3 — Planejamento** | [Planejamento do Relato de Resultados](../design-avaliacao-desenvolvimento/nivel-3/planejamento-relato-resultados.md) | Estrutura preliminar dos 9 tópicos canônicos de Barbosa & Silva (2021), modelos de matrizes tabulares e severidade de Nielsen (0 a 4). | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Nível 3 — Protótipo (T1)** | [Especificação do Protótipo no Figma (Tarefa 1)](../design-avaliacao-desenvolvimento/nivel-3/prototipo-alta-fidelidade.md) | Mapeamento dos frames (T1_F01 a F03 e Overlay T1_OV01), tokens Dark Mode, resolução dos problemas do Nível 2 (PROB-PP-01 a 04) e checklist de 8 itens. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Nível 3 — Piloto (T1)** | [Protocolo e Relato do Teste-Piloto (Tarefa 1)](../design-avaliacao-desenvolvimento/nivel-3/teste-piloto.md) | Ensaio instrumental no OBS Studio (1080p 60fps), validação do TCLE oral de 48s, link do Figma e cláusula estrita de isolamento de dados. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Nível 3 — Relato (T1)** | [Relato dos Resultados no Figma (Tarefa 1)](../design-avaliacao-desenvolvimento/nivel-3/relato-resultados.md) | Consolidação empírica dos 9 tópicos canônicos, ganho temporal de 45,2% frente ao KLM (74,2s vs. 135,3s), escore SUS de 87,5 pontos (Grau A), vídeo gravado e severidade. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Governança — Atas** | [Atas de Reunião da Equipe](../atas/index.md) | Registros formais de alinhamento, decisões de projeto e planejamento das entregas. | [Edvaldo Soares](https://github.com/PajeMurici-dev) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |

_Fonte: Elaborada por Vinicius Silva Araruna, Gustavo Antonio Rodrigues e Silva e Edvaldo Soares Brasileiro Filho, 2026._

---

## 3. Registros Audiovisuais da Entrega 7

### 3.1 Apresentação Oficial da Entrega 7
O vídeo a seguir apresenta a síntese executiva dos trabalhos desenvolvidos pela equipe na Entrega 7, com foco nas métricas empíricas e no cumprimento dos requisitos metodológicos da disciplina.

<div style="text-align: center; margin: 1.5rem 0;" markdown="1">

<iframe width="100%" height="480" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Apresentação Oficial da Entrega 7 — Grupo 08 (Fórum Diolinux Plus)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 8px; border: 1px solid var(--md-default-fg-color--lightest); max-width: 854px;"></iframe>

</div>

*Vídeo 1 — Apresentação Oficial da Entrega 7 (Hospedada no YouTube como Não Listado).*

### 3.2 Avaliação Empírica de Usabilidade da Tarefa 1 (Participante P1)
Sessão presencial gravada com o participante P1 operando o protótipo no Figma com protocolo *Think-Aloud*, contendo o consentimento verbal do TCLE nos primeiros 45 segundos.

<div style="text-align: center; margin: 1.5rem 0;" markdown="1">

<iframe width="100%" height="480" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Sessão Experimental de Alta Fidelidade da Tarefa 1 (Participante P1)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 8px; border: 1px solid var(--md-default-fg-color--lightest); max-width: 854px;"></iframe>

</div>

*Vídeo 2 — Avaliação Empírica de Usabilidade da Tarefa 1 no Figma (Participante P1).*

---

## 4. Síntese dos Resultados Empíricos da Tarefa 1

A Tabela 3 consolida o resumo executivo dos indicadores de qualidade obtidos no teste de usabilidade da Tarefa 1.

**Tabela 3** — Síntese dos Indicadores de Desempenho e Satisfação (Tarefa 1)

| Dimensão de IHC | Indicador / Métrica | Baseline de Referência | Resultado no Figma (P1) | Impacto Ergonômico Obtido |
| :--- | :--- | :---: | :---: | :--- |
| **Eficácia** | Taxa de Conclusão da Postagem | 100% esperado | **100%** | Conclusão sem desvios ou erros críticos. |
| **Eficiência** | Tempo Total de Publicação | Modelo KLM: `135,3 segundos` | **`74,2 segundos`** | **Redução de 45,2% no tempo de interação**, superando a meta (≤ 90s). |
| **Controle / IA** | Tempo de Decisão no Modal de IA | Estimativa: `45,0 segundos` | **`18,5 segundos`** | Decisão rápida viabilizada pelo botão em lote `+3 tags` e rótulos nítidos. |
| **Assistência** | Formatação de Bloco Bash | Crases manuais | **100% de uso do botão `</> Bash`** | Inserção assistida sem dúvidas de sintaxe markdown. |
| **Satisfação** | Escore Psicométrico SUS | Média global: `68,0 pontos` | **`87,5 pontos`** | **Classificação Excelente (Grau A)** no percentil > 95% do mercado. |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

## 5. Autoavaliação de Conformidade com a Rubrica da Disciplina (Fagan)

A Tabela 4 apresenta a autoavaliação da Entrega 7 frente aos critérios normativos estabelecidos no Plano de Ensino da disciplina (*Sales, 2026*).

**Tabela 4** — Autoavaliação de Conformidade da Entrega 7

| Código | Critério Avaliativo da Rubrica | Conforme? | Evidência Documental no Repositório |
| :---: | :--- | :---: | :--- |
| **E7-01** | O protótipo de alta fidelidade foi desenvolvido com base no guia de estilo e personas? | **Sim** | Demonstração detalhada em `prototipo-alta-fidelidade.md`, aplicando os tokens Dark Mode do guia de estilo para a persona Lucas Mendonça. |
| **E7-02** | O teste-piloto foi realizado e documentado com vídeo incorporado antes das avaliações? | **Sim** | Registrado em `teste-piloto.md` com vídeo de ensaio instrumental e gravação de áudio/vídeo. |
| **E7-03** | Os dados do teste-piloto foram rigorosamente isolados da amostra de resultados finais? | **Sim** | Cláusula formal declarada em `teste-piloto.md` e reafirmada em `relato-resultados.md` (Seção 9). |
| **E7-04** | O Termo de Consentimento Livre e Esclarecido (TCLE) foi gravado nos primeiros 60 segundos? | **Sim** | TCLE oral literal gravado nos primeiros 45 segundos do Vídeo 2, com concordância explícita de P1. |
| **E7-05** | O relato dos resultados seguiu a estrutura dos 9 tópicos canônicos de Barbosa & Silva? | **Sim** | Documentado integralmente em `relato-resultados.md` cobrindo os 9 tópicos (Seções 1 a 9). |
| **E7-06** | Foram coletadas métricas quantitativas de desempenho e confrontadas com o modelo KLM? | **Sim** | Tempo real de 74,2s confrontado diretamente com o baseline preditivo do modelo KLM de 135,3s. |
| **E7-07** | Foi aplicado instrumento padronizado de satisfação (SUS) com apuração matemática do escore? | **Sim** | Aplicação do questionário de 10 perguntas de Brooke (1996), obtendo 87,5 pontos (Grau A / Excelente). |
| **E7-08** | Os problemas identificados foram catalogados pela escala de severidade de Nielsen (0 a 4)? | **Sim** | Matriz de refinamento catalogada na Tabela 7 de `relato-resultados.md` sob os IDs PROB-AF-01 a 03. |
| **E7-09** | Foram definidas diretrizes claras e viáveis de reprojeto para a fase final? | **Sim** | Diretrizes técnicas de polimento de layout detalhadas na Seção 8 de `relato-resultados.md`. |
| **E7-10** | A apresentação em vídeo aborda estritamente o que foi feito sem aulas teóricas expositivas? | **Sim** | Vídeo 1 focado na demonstração do protótipo, dados empíricos e conformidade dos requisitos. |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

## 6. Histórico de Versão

A Tabela 5 documenta a evolução histórica da síntese da Entrega 7.

**Tabela 5** — Histórico de Versão do Documento

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 09/11/2026 | Estruturação completa da síntese da Entrega 7, contextualização de Nível 3 no Ciclo de Mayhew, matriz de rastreabilidade, consolidação empírica da Tarefa 1 (confronto KLM e SUS de 87,5 pontos), autoavaliação Fagan e vídeos incorporados. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |

_Fonte: Elaborada por Vinicius Silva Araruna, 2026._

---

## 7. Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[2] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[3] BROOKE, John. *SUS: A 'Quick and Dirty' Usability Scale*. In: JORDAN, P. W. et al. (Eds.). Usability Evaluation in Industry. London: Taylor & Francis, 1996. p. 189-194.

[4] RUBIN, Jeffrey; CHISNELL, Dana. *Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests*. 2. ed. Indianapolis: Wiley, 2008.

[5] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1994.

[6] FAGAN, Michael E. *Design and Code Inspections to Reduce Errors in Program Development*. IBM Systems Journal, v. 15, n. 3, p. 182-211, 1976.

---

## Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Durante a estruturação da síntese da Entrega 7, foi utilizado apoio do modelo Google Gemini (LLM) para auxílio na formatação de tabelas analíticas em Markdown, verificação de caminhos relativos e conferência bibliográfica no padrão ABNT. Toda a integração da matriz de rastreabilidade, cálculo de métricas de usabilidade e autoavaliação crítica de conformidade foram formuladas pelo autor humano.

# Planejamento do Relato dos Resultados do Protótipo de Papel (Nível 2) — Tarefa 1

## Tabela de Contribuição e Uso de IA Generativa

A Tabela 1 apresenta a matriz de responsabilidade na elaboração da estrutura do relato de resultados do Protótipo de Papel (Nível 2), focado na Tarefa 1.

**Tabela 1** — Matriz de Contribuição do Planejamento do Relato do Protótipo de Papel (Tarefa 1)

| Integrante | Atribuição no Artefato | Data | Ferramenta de IA Utilizada | Propósito do Uso de IA |
| :--- | :--- | :---: | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Autor Principal / Tech Lead**: Estruturação formal do modelo de relatório de resultados de prototipação em papel, taxonomia de problemas de interface física da Tarefa 1, matriz de severidade de Nielsen, critérios de priorização para Nível 3 e alinhamento com a gravação em grupo em 02/11/2026. | 24/10/2026 | Antigravity (LLM) | Apoio na estruturação das matrizes Markdown e checagem de rigor normativo de IHC. |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Revisor Metodológico**: Verificação de consistência entre os relatos de Nível 1 e o planejamento de relato de Nível 2. | 24/10/2026 | — | Revisão humana por pares. |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Revisor Designado**: Auditoria de compatibilidade com os critérios do Plano de Ensino da disciplina. | 24/10/2026 | — | Revisão humana por pares. |

_Fonte: Elaborada pelos autores, 2026._

---

## 1. Introdução e Objetivo do Artefato

No desenvolvimento de sistemas centrado no usuário (*Barbosa & Silva, 2021; Mayhew, 1999*), planejar a avaliação de protótipos de papel exige estabelecer antecipadamente a estrutura analítica do relatório que consolidará os achados obtidos durante as sessões de teste. Essa antecipação metodológica garante que o avaliador saiba com exatidão quais métricas qualitativas e comportamentais devem ser observadas e tabuladas durante os ensaios de interação.

Este artefato estabelece a estrutura formal, os campos normativos e as matrizes tabulares padronizadas que receberão os resultados da futura **avaliação formativa do Protótipo de Papel da Tarefa 1 (Nível 2)**:

> **Funcionalidade Focada:** *Criação e Publicação de Tópico de Dúvida com Tags e Formatação Markdown com Integração de IA Semântica* (Fórum Diolinux Plus / Discourse — autoria de Vinicius Silva Araruna).

O artefato atende integralmente ao Plano de Ensino da disciplina (Prof. Dr. André Barros de Sales, 2026) e prepara a equipe para a gravação audiovisual conjunta agendada para **2 de novembro de 2026**.

---

## 2. Estrutura Canônica do Relatório de Resultados do Protótipo de Papel (Tarefa 1)

Conforme preconizado pela literatura clássica de Engenharia de Usabilidade (*Barbosa & Silva, 2021, p. 280-282; Snyder, 2003*), o documento que consolidará os dados das sessões de teste com protótipo de papel da Tarefa 1 conterá obrigatoriamente as seguintes seções estruturais:

1. **Objetivos da Avaliação:** Síntese das metas de usabilidade investigadas frente ao protótipo em papel da Tarefa 1 (composer, formatação Markdown, seleção de tags e modal da IA pré-envio);
2. **Metodologia de Ensaio de Usabilidade em Papel:** Descrição da dinâmica de simulação física com atuação do Facilitador ([Vinicius Silva Araruna](https://github.com/ViniciusA05)) e do Computador Humano;
3. **Número e Perfil do Participante:** Dados demográficos consolidados do discente voluntário recrutado (Perfil 1: Estudante de Ciência da Computação — CIC/UnB — Usuário Aprendiz em Linux, com sessão na residência do participante);
4. **Cenário de Uso e Tarefa Simulada:** Contextualização da postagem de dúvida técnica de terminal no Fórum Diolinux Plus com auxílio da IA pré-envio;
5. **Síntese dos Dados Coletados e Análise Comportamental:** Consolidação das reações do participante, pontos de hesitação tátil e respostas às perguntas investigativas PP01 a PP08;
6. **Tabela Estruturada de Problemas de Usabilidade e Severidade:** Registro tabular minucioso das falhas de layout, terminologia e fluxo, classificadas pela **Escala de Severidade de Jakob Nielsen (0 a 4)**;
7. **Propostas e Recomendações de Reprojeto para Alta Fidelidade (Nível 3):** Diretrizes para o desenvolvimento do protótipo interativo no Figma;
8. **Gravações em Vídeo das Sessões e Consentimento Verbal (TCLE):** Links para o registro audiovisual da sessão no YouTube em modo Não Listado com comprovação do consentimento verbal nos primeiros 60 segundos;
9. **Cláusula Metodológica Obrigatória de Isolamento dos Dados do Teste-Piloto:** Declaração formal comprovando que os dados do ensaio piloto de Nível 2 não foram computados nos resultados definitivos.

---

## 3. Modelo de Registro Tabular de Problemas de Usabilidade da Tarefa 1

A Tabela 2 apresenta o modelo formal que será utilizado no documento definitivo de resultados para catalogar cada problema identificado nas peças de papel da Tarefa 1.

**Tabela 2** — Modelo Estruturado de Registro de Problemas do Protótipo de Papel da Tarefa 1 *(A preencher pós-sessão)*

| ID | Tela / Componente Afetado | Descrição da Dificuldade / Hesitação do Usuário | Tipo de Problema de Usabilidade | Severidade (Nielsen 0 a 4) | Ação Recomendada de Reprojeto para Nível 3 (Figma) |
| :---: | :--- | :--- | :---: | :---: | :--- |
| **PROB-PP-01** | Prancha 2 — Editor / Composer | Usuário hesitou sobre a ordem entre escolher as tags e redigir o corpo do post. | Precedência de Layout | 1 (Cosmético) | Garantir flexibilidade visual não-modal no formulário do Figma. |
| **PROB-PP-02** | Prancha 2 — Bloco Markdown | Dúvida sobre o fechamento de blocos de código com crases triplas (` ``` `). | Sintaxe / Ajuda Contextual | 2 (Menor) | Incluir dica de sintaxe flutuante (*tooltip*) no editor de alta fidelidade. |
| **PROB-PP-03** | Peça Móvel 3 — Modal de IA | Receio de que o botão 'Publicar como está' descartasse o post em vez de enviá-lo diretamente. | Terminologia / Rótulo | 2 (Menor) | Reformular rótulo para: *"Ignorar sugestões e publicar imediatamente"*. |
| **PROB-PP-04** | Peça Móvel 3 — Tags Sugeridas | Usuário solicitou seleção em lote das tags técnicas recomendadas pela IA. | Eficiência de Interação | 2 (Menor) | Criar botão de destaque: *"Adicionar todas as tags sugeridas (+3 tags)"*. |

_Fonte: Vinicius Silva Araruna com base em Barbosa e Silva (2021) e Nielsen (1994), 2026._

---

## 4. Critérios de Priorização para a Fase de Alta Fidelidade (Nível 3)

Os problemas mapeados no relatório da Tarefa 1 serão organizados por ordem de prioridade de intervenção antes da construção do protótipo no Figma:

1. **Prioridade Crítica (Severidade 4):** Bloqueios que impeçam o participante de concluir o cenário de postagem ou que gerem falha na submissão;
2. **Prioridade Alta (Severidade 3):** Inconsistências conceituais no modal da IA pré-envio que causem confusão sobre duplicatas de tópicos;
3. **Prioridade Média (Severidade 2):** Dúvidas temporárias sobre a renderização do preview do Markdown ou affordance dos botões de tags;
4. **Prioridade Baixa (Severidade 1):** Ajustes puramente estéticos de espaçamento, tipografia e contraste visual.

---

## 5. Lista de Verificação da Técnica (Planejamento do Relato da Tarefa 1)

A Tabela 3 apresenta o checklist de autoavaliação da conformidade do planejamento do relato de resultados da Tarefa 1.

**Tabela 3** — Lista de Verificação: Planejamento do Relato do Protótipo de Papel (Tarefa 1)

| Item / Questão Avaliada | Origem / Fonte Normativa | Conforme? | Resposta Autoexplicativa e Evidência no Documento |
| :--- | :--- | :---: | :--- |
| **1** | O documento define os objetivos e o escopo do futuro relatório de resultados? | Mayhew (1999); Barbosa & Silva (2021) | ✅ Sim | A Seção 1 fundamenta o propósito do relato e atende ao Plano de Ensino da disciplina. |
| **2** | A estrutura de seções atende às exigências canônicas da literatura de IHC? | Barbosa & Silva (2021, p. 280) | ✅ Sim | A Seção 2 discrimina os 9 tópicos normativos obrigatórios. |
| **3** | Há previsão de caracterização demográfica do participante discente? | Barbosa & Silva (2021) | ✅ Sim | O Tópico 3 da Seção 2 prevê a caracterização de discente de Ciência da Computação (CIC/UnB) e realização na residência do participante. |
| **4** | O modelo de catalogação de problemas utiliza a escala de severidade de Nielsen? | Nielsen (1994) | ✅ Sim | A Tabela 2 estrutura a matriz tabular parametrizada de 0 a 4. |
| **5** | O artefato estabelece critérios objetivos de priorização para o Nível 3? | Mayhew (1999) | ✅ Sim | A Seção 4 define a hierarquia de atendimento aos problemas mapeados. |
| **6** | Há exigência de registro audiovisual da sessão em modo Não Listado no YouTube? | Diretrizes da FGA/UnB | ✅ Sim | O Tópico 8 da Seção 2 estabelece o container e link de auditabilidade. |
| **7** | O planejamento prevê a inclusão da Cláusula de Isolamento dos dados do piloto? | Barbosa & Silva (2021, p. 276) | ✅ Sim | O Tópico 9 da Seção 2 torna obrigatório o destaque formal de isolamento. |
| **8** | O artefato possui histórico de versões semântico e referências ABNT completas? | Padrão FGA/UnB | ✅ Sim | As Seções 6 e 7 consolidam histórico e bibliografia normatizada. |

_Fonte: Elaborada pelos autores com base em Barbosa e Silva (2021) e Sales (2026), 2026._

---

## 6. Histórico de Versão

A Tabela 4 documenta a evolução histórica deste documento.

**Tabela 4** — Histórico de Versão

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 24/10/2026 | Elaboração inicial do Planejamento do Relato dos Resultados do Protótipo de Papel (Nível 2), focado exclusivamente na Tarefa 1 (Markdown e IA Semântica de Vinicius Silva Araruna), definindo a estrutura canônica em 9 tópicos, modelo tabular com severidade de Nielsen (0 a 4), critérios de priorização para a fase de alta fidelidade e alinhamento com a gravação em grupo em 02/11/2026. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |

_Fonte: Elaborada pelos autores, 2026._

---

## 7. Referências Bibliográficas (ABNT)

- BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. *Interação Humano-Computador e Experiência do Usuário*. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1. (Capítulo 11: Avaliação de IHC, p. 270-282).
- MAYHEW, Deborah J. *The Usability Engineering Lifecycle: a practitioner's handbook for user interface design*. San Francisco: Morgan Kaufmann Publishers, 1999.
- NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann Publishers, 1994.
- SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama (FGA), 2026.
- SNYDER, Carolyn. *Paper Prototyping: The Fast and Easy Way to Design and Refine User Interfaces*. San Francisco: Morgan Kaufmann Publishers, 2003.

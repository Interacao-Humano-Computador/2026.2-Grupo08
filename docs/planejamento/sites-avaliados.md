# Sites Avaliados

## Tabela de Contribuição

| Integrante | Contribuição | Data |
| :--- | :--- | :---: |
| Edvaldo Soares Brasileiro Filho | [Avaliação individual do site Enade (INEP)](#3-enade-inep) | 04/09/2026 |
| Gustavo Antonio Rodrigues e Silva | [Estruturação da matriz de decisão e avaliação conjunta](#introducao) | 04/09/2026 |
| Jonathan Lourenço Carpaneda | [Avaliação individual do Portal Domínio Público e consolidação das notas](#4-portal-dominio-publico-mec-sistema-selecionado) | 04/09/2026 |
| Pedro Paulo Almeida Araujo | [Avaliação individual do site do Ministério Público Militar (MPM)](#1-ministerio-publico-militar-mpm) | 04/09/2026 |
| Vinicius Silva Araruna | [Avaliação individual do site InfoSaúde DF](#2-infosaude-df) | 04/09/2026 |

---

## Introdução

Durante a fase inicial do projeto da disciplina de Interação Humano-Computador (IHC), cada integrante da equipe realizou uma avaliação prévia individual de candidatos a sítios ou sistemas interativos de acesso público. O objetivo foi mapear plataformas com potencial pedagógico relevante, que apresentassem problemas palpáveis de usabilidade e interface, e cujo público-alvo permitisse recrutamento facilitado para entrevistas e testes de usuário.

Para orientar a decisão técnica do grupo de forma criteriosa e transparente, foram estabelecidos quatro critérios objetivos de pontuação (com notas atribuídas de 1 a 5 para cada quesito):

- **C1 - Facilidade de Acesso a Usuários:** Grau de facilidade para encontrar, recrutar e entrevistar usuários reais do sistema ao longo do semestre acadêmico.
- **C2 - Problemas de Usabilidade e Acessibilidade:** Quantidade e gravidade de falhas heurísticas, problemas ergonômicos e barreiras de acesso que oferecem oportunidades reais de redesign.
- **C3 - Escopo Adequado:** Avaliação da extensão da plataforma e presença de fluxos de tarefas delimitados, passíveis de análise e redesenho sem subestimar nem extrapolar o tempo da disciplina.
- **C4 - Relevância Prática:** O impacto social, educacional ou governamental da ferramenta para a comunidade usuária.

A Tabela 1 consolida a matriz de decisão resultante do consenso dos membros após a reunião de avaliação comparativa.

<div align="center">

**Tabela 1** - Matriz de decisão e pontuação dos sites candidatos

| Site Avaliado | C1: Acesso a Usuários | C2: Problemas de Usabilidade | C3: Escopo Adequado | C4: Relevância Prática | Nota Final | Situação |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Ministério Público Militar (MPM)** | 1 | 3 | 3 | 3 | 10 | Descartado |
| **InfoSaúde DF** | 4 | 3 | 3 | 5 | 15 | Descartado |
| **Enade (INEP)** | 4 | 4 | 4 | 4 | 16 | Descartado |
| **Portal Domínio Público (MEC)** | **5** | **5** | **5** | **5** | **20** | **Selecionado** |

_Fonte: Autores, 2026._

</div>

---

## Avaliação Individual dos Candidatos

### 1. Ministério Público Militar (MPM)
* **Avaliador Individual:** Pedro Paulo Almeida Araujo
* **Endereço Eletrônico:** `https://www.mpm.mp.br`
* **Descrição:** Portal institucional do Ministério Público Militar da União, voltado à divulgação de notícias institucionais, processos, concursos e legislação militar.
* **Parecer Técnico de IHC:** Embora seja um portal governamental de grande seriedade, apresenta um limitador crítico para os propósitos da disciplina: o público-alvo (procuradores, servidores militares e advogados que atuam na justiça militar) é extremamente restrito e de difícil acesso no meio acadêmico da UnB, o que inviabilizaria a aplicação de questionários com amostragem adequada e a realização de testes de usabilidade presenciais com usuários autênticos.

<div align="center">

**Figura 1** - Visão geral da página do portal MPM

| Característica do Site | Observação do Avaliador |
| :--- | :--- |
| **Público-Alvo:** | Operadores de direito militar e procuradores da União |
| **Dificuldade Central:** | Recrutamento de usuários inviável para o semestre letivo |
| **Decisão:** | Descartado pelo critério C1 (nota 1) |

_Fonte: Pedro Paulo Almeida Araujo, 2026._

</div>

---

### 2. InfoSaúde DF
* **Avaliador Individual:** Vinicius Silva Araruna
* **Endereço Eletrônico:** `https://info.saude.df.gov.br`
* **Descrição:** Plataforma da Secretaria de Saúde do Distrito Federal destinada a apresentar indicadores de saúde pública, leitos hospitalares, vacinação e dados epidemiológicos.
* **Parecer Técnico de IHC:** O portal possui imensa relevância social para a população do Distrito Federal e fácil acesso aos usuários. Todavia, a arquitetura da plataforma apoia-se predominantemente em painéis de *business intelligence* (dashboards integrados em ferramentas de terceiros como PowerBI). Esse padrão de aplicação limita significativamente a diversidade de fluxos interativos de tarefas (como preenchimento de formulários complexos, transações de dados e navegação hierárquica rica), reduzindo as possibilidades de intervenções profundas exigidas nas etapas de prototipação.

<div align="center">

**Figura 2** - Visão geral da plataforma InfoSaúde DF

| Característica do Site | Observação do Avaliador |
| :--- | :--- |
| **Público-Alvo:** | Cidadãos do DF, pesquisadores e gestores de saúde |
| **Dificuldade Central:** | Sistema focado em visualização passiva de gráficos (dashboards prontos) |
| **Decisão:** | Descartado pelo critério C3 (escopo de tarefas interativas restrito) |

_Fonte: Vinicius Silva Araruna, 2026._

</div>

---

### 3. Enade (INEP)
* **Avaliador Individual:** Edvaldo Soares Brasileiro Filho
* **Endereço Eletrônico:** `https://enade.inep.gov.br`
* **Descrição:** Sistema do Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira voltado à inscrição, acompanhamento e consulta de provas do Exame Nacional de Desempenho dos Estudantes.
* **Parecer Técnico de IHC:** Apresenta excelente escopo e público universitário acessível. No entanto, o sistema sofre de alta sazonalidade de uso: só é utilizado ativamente pelos estudantes nos meses imediatamente anteriores e posteriores à realização da prova do Enade. Fora desse período letivo, a maioria das funcionalidades de interação (como preenchimento do questionário do estudante e visualização de local de prova) fica bloqueada ou indisponível, impedindo testes de usabilidade com fluxos completos em tempo real durante a disciplina.

<div align="center">

**Figura 3** - Visão geral da plataforma Enade (INEP)

| Característica do Site | Observação do Avaliador |
| :--- | :--- |
| **Público-Alvo:** | Estudantes universitários concluintes |
| **Dificuldade Central:** | Extrema sazonalidade de uso; funcionalidades bloqueadas fora do período de exame |
| **Decisão:** | Descartado devido à indisponibilidade de tarefas ao longo do semestre |

_Fonte: Edvaldo Soares Brasileiro Filho, 2026._

</div>

---

### 4. Portal Domínio Público (MEC) - Sistema Selecionado
* **Avaliadores:** Jonathan Lourenço Carpaneda e Gustavo Antonio Rodrigues e Silva
* **Endereço Eletrônico:** `http://www.dominiopublico.gov.br`
* **Descrição:** Biblioteca digital oficial do Ministério da Educação criada em 2004 para promover o amplo acesso a obras literárias, científicas e artísticas em domínio público ou devidamente autorizadas.
* **Parecer Técnico de IHC:** Obteve nota máxima (20 pontos) em todos os critérios. Seu público é amplamente composto por estudantes e pesquisadores universitários de facílimo contato no campus; o sistema está permanentemente disponível para navegação; possui tarefas claras (pesquisa avançada, download de mídias, filtragem por categoria); e apresenta defasagem estética e ergonômica severa, constituindo o candidato perfeito para aplicação das técnicas de IHC.

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 04/09/2026 | Criação da página de sites avaliados com critérios e matriz de decisão | [Gustavo Antonio](https://github.com/gus-ant) | [Pedro Paulo](https://github.com/Pedrop06) |
| `1.1` | 05/09/2026 | Inclusão dos avaliadores individuais de cada site, padronização de tabelas e fontes conforme rubrica | [Jonathan Carpaneda](https://github.com/Jonathan-Carpaneda) | [Vinicius Araruna](https://github.com/ViniciusA05) |

---

## Bibliografia

[1] BARBOSA, Simone D. J.; SILVA, Bruno S. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier, 2010.

[2] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1993.

---

## Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Durante a consolidação das avaliações e formatação deste artefato, utilizou-se o apoio de Inteligência Artificial Generativa (LLM) para organizar os critérios avaliativos em tabelas e estruturar as justificativas em Markdown, tendo todas as notas e julgamentos técnicos sido deliberados e aprovados pelos membros da equipe.

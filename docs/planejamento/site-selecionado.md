# Site Selecionado

## Tabela de Contribuição

| Integrante | Contribuição | Data |
| :--- | :--- | :---: |
| Edvaldo Soares Brasileiro Filho | [Revisão dos apontamentos ergonômicos e heurísticos](#problemas-criticos-identificados) | 05/09/2026 |
| Gustavo Antonio Rodrigues e Silva | [Estruturação inicial da justificativa de seleção do site](#o-portal-dominio-publico) | 04/09/2026 |
| Jonathan Lourenço Carpaneda | [Detalhamento técnico das falhas de usabilidade, busca e responsividade](#problemas-criticos-identificados) | 05/09/2026 |
| Pedro Paulo Almeida Araujo | [Análise de acessibilidade e enquadramento nas diretrizes do MEC](#criterios-de-selecao) | 05/09/2026 |
| Vinicius Silva Araruna | [Elaboração das referências normativas e chamada dos elementos no texto](#bibliografia) | 05/09/2026 |

---

## Introdução

Este artefato formaliza a escolha definitiva do sistema interativo que será objeto de estudo, avaliação heurística, pesquisa com usuários, análise de tarefas e reprojeto ao longo de todo o semestre na disciplina de Interação Humano-Computador (IHC): o **Portal Domínio Público**.

A decisão decorreu de debates estruturados entre os integrantes da equipe a partir das avaliações individuais documentadas no artefato [Lista de Sites Avaliados](sites-avaliados.md), culminando na seleção de uma plataforma de utilidade pública de alto impacto, rica em desafios ergonômicos e plenamente acessível para testes empíricos.

---

## Critérios de Seleção

Para assegurar o atendimento rigoroso às diretrizes didáticas da disciplina, a escolha pautou-se nos seguintes critérios:

1. **Ineditismo Recente:** O website não foi explorado em semestres recentes imediatos de IHC, garantindo originalidade na condução dos estudos.
2. **Defasagem Ergonômica Relevante:** Apresenta problemas graves de usabilidade, navegabilidade e acessibilidade, proporcionando vasto campo para proposição de melhorias substanciais.
3. **Domínio Governamental e Aberto:** Pertence ao Ministério da Educação (MEC), com finalidade educacional e livre circulação de acervos sob domínio público.
4. **Disponibilidade e Acesso a Usuários:** O público consumidor é formado majoritariamente por estudantes, professores e pesquisadores acadêmicos, permitindo recrutamento facilitado para aplicação de questionários, entrevistas e testes de usabilidade no ambiente universitário da UnB.

---

## O Portal Domínio Público

Lançado oficialmente em novembro de 2004 pelo Ministério da Educação (MEC), o **Portal Domínio Público** (`http://www.dominiopublico.gov.br`) constitui um dos maiores acervos digitais abertos da América Latina, disponibilizando gratuitamente obras literárias clássicas, teses, dissertações acadêmicas, arquivos de som e imagens de autores cujos direitos autorais expiraram ou foram expressamente autorizados.

A despeito da sua imensa importância cultural e pedagógica, o sítio eletrônico manteve praticamente a mesma estrutura tecnológica e visual concebida na década de 2000, tornando-se anacrônico perante os padrões contemporâneos da web.

<div align="center">

**Figura 1** - Identificação do Portal Domínio Público (MEC)

| Atributo | Descrição Oficial |
| :--- | :--- |
| **Nome da Plataforma:** | Portal Domínio Público |
| **Órgão Responsável:** | Ministério da Educação (MEC) - Governo Federal do Brasil |
| **Endereço Eletrônico:** | `http://www.dominiopublico.gov.br` |
| **Ano de Criação:** | 2004 |
| **Finalidade:** | Promoção do acesso amplo e universal a obras culturais e científicas livres |

_Fonte: Autores, 2026._

</div>

---

## Problemas Críticos Identificados

A inspeção inicial conduzida pela equipe revelou falhas que violam princípios clássicos de usabilidade e diretrizes ergonômicas internacionais:

### 1. Interface Visual Defasada e Arquitetura de Informação Confusa
A interface visual do portal utiliza tabelas estáticas de layout herdadas das primeiras gerações da web, com contraste inadequado, tipografia de legibilidade reduzida e menu lateral com dezenas de hiperligações desorganizadas. A sobrecarga cognitiva gerada nos usuários iniciantes dificulta a descoberta das seções mais acessadas.

<div align="center">

**Figura 2** - Falhas na arquitetura de informação e apresentação visual

| Aspecto Analisado | Diagnóstico Ergonômico |
| :--- | :--- |
| **Heurística Afetada:** | Reconhecimento em vez de lembrança (Nielsen, 1994) e Estética e Design Minimalista |
| **Sintoma Observado:** | Menu lateral extenso sem categorização semântica intuitiva e excesso de poluição visual |
| **Impacto no Usuário:** | Desorientação espacial e alta taxa de abandono na navegação exploratória |

_Fonte: Jonathan Carpaneda, 2026._

</div>

### 2. Ausência Completa de Responsividade em Dispositivos Móveis
O portal não adota folhas de estilo responsivas (`media queries`) nem tag `viewport` configurada. Ao ser acessado através de smartphones ou tablets — dispositivos que hoje representam a maioria do tráfego de navegação na internet brasileira —, o portal renderiza a versão de desktop minificada, obrigando o usuário a aplicar zoom horizontal constante para leitura e tornando os botões e links minúsculos e inacessíveis ao toque (*touch targets* inadequados).

<div align="center">

**Figura 3** - Falta de adaptação para dispositivos móveis (Mobile)

| Aspecto Analisado | Diagnóstico Ergonômico |
| :--- | :--- |
| **Heurística Afetada:** | Flexibilidade e Eficiência de Uso; Acessibilidade Mobile (WCAG 2.1) |
| **Sintoma Observado:** | Layout estático em largura fixa (table layout) que quebra em telas menores que 1024px |
| **Impacto no Usuário:** | Impossibilidade prática de leitura e download de obras em dispositivos móveis |

_Fonte: Jonathan Carpaneda, 2026._

</div>

### 3. Formulário de Busca Avançada Punitivo e Sem Recuperação de Erros
A principal tarefa do portal consiste na localização de livros e artigos. Contudo, o formulário de pesquisa exige a seleção manual e obrigatória de múltiplos filtros correlatos (Tipo de Mídia, Categoria, Idioma) sem fornecer autopreenchimento (*autocomplete*) ou sugestões de digitação. Caso o usuário insira um caractere imprevisto ou selecione filtros incompatíveis, a busca falha sem informar com clareza o motivo da incompatibilidade.

<div align="center">

**Figura 4** - Mecanismo de busca e tratamento de erros

| Aspecto Analisado | Diagnóstico Ergonômico |
| :--- | :--- |
| **Heurística Afetada:** | Prevenção de Erros; Ajuda aos usuários no reconhecimento e recuperação de erros |
| **Sintoma Observado:** | Ausência de tolerância a variações ortográficas e mensagens de retorno genéricas |
| **Impacto no Usuário:** | Sensação de frustração e sensação de inexistência da obra no acervo |

_Fonte: Jonathan Carpaneda, 2026._

</div>

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 04/09/2026 | Criação da página do site selecionado | [Gustavo Antonio](https://github.com/gus-ant) | [Pedro Paulo](https://github.com/Pedrop06) |
| `1.1` | 05/09/2026 | Estruturação dos critérios, fundamentação técnica das heurísticas e padronização de tabelas e fontes | [Jonathan Carpaneda](https://github.com/Jonathan-Carpaneda) | [Vinicius Araruna](https://github.com/ViniciusA05) |

---

## Bibliografia

[1] BARBOSA, Simone D. J.; SILVA, Bruno S. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier, 2010.

[2] BRASIL. Ministério da Educação. *Portal Domínio Público*. Disponível em: <http://www.dominiopublico.gov.br>. Acesso em: 05 set. 2026.

[3] NIELSEN, Jakob. *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group, 1994.

---

## Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Durante a compilação das justificativas ergonômicas e mapeamento das heurísticas violadas pelo portal, foi utilizado o suporte de Inteligência Artificial Generativa (LLM) como ferramenta para organização léxica e formatação de tabelas em Markdown, tendo todos os testes heurísticos e diagnósticos sido realizados e ratificados pelos membros do Grupo 08.

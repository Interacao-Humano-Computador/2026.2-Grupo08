# Personas e Elenco de Personas

## Tabela de Contribuição

| Integrante | Contribuição no Artefato | Data | Revisor | Ferramenta de IA e Contribuição |
| :--- | :--- | :---: | :---: | :--- |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Autoria individual da Persona 2 (Carlos Eduardo) e preenchimento da ficha completa](#persona-2-carlos-eduardo-o-iniciante-em-migracao-persona-secundaria) | 20/10/2026 | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Gemini: apoio na estruturação dos atributos e síntese das tabelas |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | [Autoria individual da Persona 3 (Mariana Ribeiro) e preenchimento da ficha completa](#persona-3-mariana-ribeiro-a-pesquisadora-autonoma-persona-secundaria) | 20/10/2026 | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Gemini: apoio na formatação da ficha e alinhamento ao Perfil 3 |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Estruturação metodológica, elenco consolidado e autoria individual da Persona 1 (Lucas Mendonça)](#persona-1-lucas-o-entusiasta-devops-persona-primaria) | 26/09/2026 | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Suporte na estruturação Markdown e tabelas |

---

## Introdução

Este artefato apresenta a definição do **Elenco de Personas** e a caracterização das **Personas** projetadas para o **Fórum Diolinux Plus**, desenvolvidas no âmbito da disciplina de Interação Humano-Computador (FGA0173), sob docência do Prof. Dr. André Barros de Sales (Faculdade UnB Gama — FGA/UnB).

A técnica de personas, concebida originalmente por Cooper (1999) e consolidada na literatura de IHC por Barbosa e Silva (2021, p. 170-176) e Courage e Baxter (2005), consiste na criação de arquétipos fictícios, porém profundamente fundamentados em dados empíricos de usuários reais (levantados na etapa de Perfil do Usuário por meio de brainstorming, entrevistas e observação direta). As personas corporificam objetivos, motivações, frustrações e modelos mentais concretos, servindo de guia indispensável para orientar as decisões de design de interface e prevenir o fenômeno do "usuário elástico" (aquele cujas características mudam arbitrariamente ao sabor das conveniências dos desenvolvedores).

---

## Elenco de Personas (Consolidado do Grupo)

Em estrito atendimento às diretrizes do professor registradas no quadro de sala de aula (que estabelece a entrega de **1 Elenco de Personas consolidado pelo grupo** e dimensionamento entre 3 a 12 personas conforme Cooper, 1999), a equipe delimitou um elenco coeso composto por três personas de usuários e uma antipersona.

A Tabela 1 apresenta a síntese do elenco de personas do Fórum Diolinux Plus.

**Tabela 1** — Elenco de Personas consolidado do Grupo 08 para o Fórum Diolinux Plus

| Papel de Usuário Mapeado | Nome / Identificador da Persona | Status de Design | Perfil de Usuário Vinculado | Autor Responsável |
| :--- | :--- | :---: | :--- | :--- |
| **Entusiasta / Desenvolvedor** | Lucas Mendonça | **Primária** | [Perfil 1: Entusiasta / Criador](perfil-usuario.md#perfil-1-usuario-entusiasta-criador-de-topicos-tecnicos) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| **Iniciante / Migração** | Carlos Eduardo | **Secundária** | [Perfil 2: Iniciante / Onboarding](perfil-usuario.md#perfil-2-usuario-iniciante-migracao-windowslinux) | [Gustavo Antonio](https://github.com/gus-ant) |
| **Pesquisador / Técnico** | Mariana Ribeiro | **Secundária** | [Perfil 3: Pesquisador / Buscador](perfil-usuario.md#perfil-3-usuario-pesquisador-buscador-autonomo) | [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| **Antiusuário (Antipersona)** | Robô Spammer / Divulgador Malicioso | **Antipersona** | *Perfil fora do escopo de design legítimo* | [Equipe Grupo 08](https://github.com/Interacao-Humano-Computador/2026.2-Grupo08) |

_Fonte: Elaborada pelos autores, 2026._

Conforme detalhado na Tabela 1, o elenco assegura a representação dos três papéis principais da comunidade, complementado pela antipersona para delimitar com precisão o que o sistema não deve incentivar (postagens automatizadas de propaganda e links suspeitos).

---

## Persona 1: Lucas, o Entusiasta DevOps (Persona Primária)

- **Autor Principal**: [Vinicius Silva Araruna](https://github.com/ViniciusA05)
- **Revisor**: [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant)
- **Status**: **Persona Primária**

Lucas representa o foco principal de design para o fluxo de composição de tópicos técnicos complexos e uso intensivo dos recursos de formatação da plataforma.

A Tabela 2 apresenta o detalhamento completo dos atributos da Persona 1, estruturados segundo o modelo canônico de Barbosa e Silva (2021).

**Tabela 2** — Detalhamento da Persona 1: Lucas Mendonça

| Dimensão | Atributos e Detalhamento da Persona |
| :--- | :--- |
| **Identificação** | **Nome**: Lucas Mendonça |
| | **Idade / Ocupação**: 23 anos, Estudante de Engenharia de Software e Estagiário de DevOps. |
| | **Escolaridade / Local**: Ensino superior em andamento (7º semestre), reside em Brasília/DF. |
| **Demografia e Contexto** | Utiliza distribuições Linux (Fedora e Arch Linux) como sistema operacional principal de trabalho há 4 anos; utiliza o computador mais de 10 horas por dia para programar, estudar e gerenciar contêineres Docker/Podman. |
| **Habilidades Técnicas** | Avançadas em terminal (Bash, scripts, Git); domina conceitos de redes, kernel e permissões de diretórios; alta proficiência com formatação Markdown e atalhos de produtividade. |
| **Objetivos no Fórum** | • **Objetivo Pessoal (Visceral)**: Ser reconhecido na comunidade como um usuário técnico colaborativo e competente.<br>• **Objetivo Prático (Comportamental)**: Publicar dúvidas sobre bugs complexos de configuração contendo logs e blocos de código legíveis, e encontrar discussões profundas sobre arquitetura de sistemas.<br>• **Objetivo Corporativo/Comunitário**: Contribuir para a base de conhecimento de software livre em língua portuguesa. |
| **Frustrações e Dores** | • Editores de texto que removem a indentação de código-fonte colado.<br>• Falta de suporte a atalhos de teclado ágeis para formatação rápida.<br>• Categorização confusa que dificulta a indexação de dúvidas avançadas por especialistas. |
| **Citação Representativa** | *"Se um tópico não estiver bem formatado com blocos de código e logs limpos, ninguém vai perder tempo tentando adivinhar qual é o seu problema."* |
| **Relação com o Fórum** | Acessa o Fórum Diolinux Plus diariamente; navega preferencialmente via atalhos de teclado do Discourse (`j/k` para rolagem, `/` para busca); acompanha a categoria de Desenvolvimento e Hardware. |

_Fonte: Elaborada por [Vinicius Silva Araruna](https://github.com/ViniciusA05), 2026._

Conforme detalhado na Tabela 2, Lucas necessita de aceleradores de interface, realce de sintaxe em blocos de código e precisão taxonômica de tags para publicar e localizar discussões técnicas densas.

---

## Persona 2: Carlos Eduardo, o Iniciante em Migração (Persona Secundária)

- **Autor Principal**: [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant)
- **Revisor**: [Vinicius Silva Araruna](https://github.com/ViniciusA05)
- **Status**: **Persona Secundária**

Carlos representa o público em fase de transição de sistemas operacionais proprietários (Windows) para distribuições amigáveis de Linux (Linux Mint), dependendo de orientação clara, vocabulário acessível e processos de onboarding simples.

A Tabela 3 apresenta o detalhamento completo dos atributos da Persona 2, estruturados segundo o modelo de Barbosa e Silva (2021).

**Tabela 3** — Detalhamento da Persona 2: Carlos Eduardo

| Dimensão | Atributos e Detalhamento da Persona |
| :--- | :--- |
| **Identificação** | **Nome**: Carlos Eduardo |
| | **Idade / Ocupação**: 45 anos, Contador autônomo. |
| | **Escolaridade / Local**: Ensino superior completo em Ciências Contábeis, reside em Goiânia/GO. |
| **Demografia e Contexto** | Usuário tradicional de Windows há mais de 20 anos que decidiu migrar seu computador do escritório para Linux Mint em busca de estabilidade e redução de custos com licenças. Utiliza o computador diariamente para planilhas, emissão de notas fiscais e navegação web. |
| **Habilidades Técnicas** | Básicas a intermediárias em ferramentas de escritório (Excel/Calc) e navegadores; iniciante em Linux; desconhece comandos de terminal e receia danificar o sistema operacional ao executar scripts desconhecidos. |
| **Objetivos no Fórum** | • **Objetivo Pessoal (Visceral)**: Sentir segurança e tranquilidade no novo ambiente sem receio de travar o computador de trabalho.<br>• **Objetivo Prático (Comportamental)**: Obter suporte passo a passo para configuração de periféricos (como impressoras e scanners), encontrar alternativas a programas legados do Windows e tirar dúvidas pontuais sem ser julgado por falta de conhecimento técnico.<br>• **Objetivo Corporativo/Comunitário**: Compreender a dinâmica do fórum para manter seu ambiente profissional em pleno funcionamento. |
| **Frustrações e Dores** | • Respostas excessivamente técnicas com jargões ou comandos de terminal sem explicação do que cada parâmetro faz.<br>• Dificuldade em categorizar seu problema no momento de postar uma dúvida.<br>• Processos de cadastro extensos ou confusos quando precisa de uma ajuda rápida para uma tarefa de trabalho. |
| **Citação Representativa** | *"Preciso que meu computador e minha impressora funcionem para eu entregar meus relatórios; se a resposta for simples e sem complicação, consigo resolver na hora."* |
| **Relação com o Fórum** | Acessa o Fórum Diolinux Plus principalmente sob demanda (quando encontra um problema técnico ou incompatibilidade); lê tópicos de boas-vindas e categorias de suporte para iniciantes. |

_Fonte: Elaborada por [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant), 2026._

Conforme detalhado na Tabela 3, Carlos valoriza fluxos de cadastro sem atrito, formulários simplificados de criação de tópicos com sugestões de preenchimento e um ambiente acolhedor da comunidade.

---

## Persona 3: Mariana Ribeiro, a Pesquisadora Autônoma (Persona Secundária) <a id="persona-3-usuario-pesquisador-autonomo-persona-secundaria"></a>

- **Autor Principal**: [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev)
- **Revisor**: [Vinicius Silva Araruna](https://github.com/ViniciusA05)
- **Status**: **Persona Secundária**

Mariana personifica o usuário analítico que utiliza intensamente a pesquisa interna da plataforma para solucionar gargalos técnicos de forma independente, evitando a redundância de postagens.

A Tabela 4 apresenta o detalhamento completo dos atributos da Persona 3, estruturados segundo Barbosa e Silva (2021).

**Tabela 4** — Detalhamento da Persona 3: Mariana Ribeiro

| Dimensão | Atributos e Detalhamento da Persona |
| :--- | :--- |
| **Identificação** | **Nome**: Mariana Ribeiro |
| | **Idade / Ocupação**: 29 anos, Analista de Dados e Pesquisadora Acadêmica. |
| | **Escolaridade / Local**: Mestranda em Ciência da Computação, reside em Belo Horizonte/MG. |
| **Demografia e Contexto** | Utiliza Ubuntu LTS e Debian há 3 anos para desenvolvimento de modelos estatísticos, rotinas em Python e manipulação de bases de dados abertas. Acessa múltiplos fóruns técnicos e repositórios acadêmicos semanalmente. |
| **Habilidades Técnicas** | Intermediárias a avançadas; familiarizada com terminal, manipulação de arquivos, ambientes virtuais e sintaxe de busca avançada; valoriza documentação reprodutível e fontes confiáveis. |
| **Objetivos no Fórum** | • **Objetivo Pessoal (Visceral)**: Resolver problemas técnicos de forma rápida e autônoma, otimizando seu tempo de pesquisa.<br>• **Objetivo Prático (Comportamental)**: Encontrar tópicos consolidados que contenham soluções verificadas (*soluções aceitas*), aplicando filtros por categoria, data e relevância para não perder tempo com tópicos desatualizados.<br>• **Objetivo Corporativo/Comunitário**: Evitar a criação de tópicos duplicados e validar soluções propostas antes de aplicá-las em ambiente de produção/estudo. |
| **Frustrações e Dores** | • Mecanismos de busca interna com filtros pouco intuitivos ou que retornam tópicos antigos de 5 anos atrás no topo sem indicação de obsolescência.<br>• Discussões longas sem marcação clara de qual resposta realmente resolveu a questão.<br>• Falta de filtros refinados por versão de distribuição ou tags específicas. |
| **Citação Representativa** | *"Antes de abrir uma pergunta e esperar horas por uma resposta, prefiro buscar com bons filtros; quase sempre alguém já passou pelo mesmo problema e a solução já foi validada."* |
| **Relação com o Fórum** | Visita o fórum 2 a 3 vezes por semana via desktop; usa intensamente a barra de busca e páginas de tópicos resolvidos; raramente posta novas perguntas, a menos que a pesquisa não traga nenhuma resposta satisfatória. |

_Fonte: Elaborada por [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev), 2026._

Conforme detalhado na Tabela 4, Mariana demanda um mecanismo de busca robusto com filtros rápidos por data, categoria e status de resolução (*solved*), além de sinalizações visuais claras de respostas corretas.

---

## Histórico de Versão

A Tabela 5 documenta o histórico de versões deste artefato.

**Tabela 5** — Histórico de versão do documento

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 26/09/2026 | Estruturação metodológica, consolidação do elenco de personas e autoria individual da Persona 1 (Lucas Mendonça) por Vinicius Silva Araruna | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) |
| `1.1` | 20/10/2026 | Preenchimento completo das fichas da Persona 2 (Carlos Eduardo por Gustavo Antonio) e Persona 3 (Mariana Ribeiro por Edvaldo Soares), remoção de todos os placeholders e alinhamento aos Perfis de Usuário | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| `1.2` | 21/10/2026 | Harmonização da declaração de uso de IA Generativa contemplando as Personas 2 e 3 em atendimento à revisão por pares do PR #95 | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |

_Fonte: Elaborada pelos autores, 2026._

---

## Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier, 2010.

[2] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[3] COOPER, Alan. *The inmates are running the asylum: Why high-tech products drive us crazy and how to restore the sanity*. Indianapolis: Sams Publishing, 1999.

[4] COURAGE, Catherine; BAXTER, Kathy. *Understanding your users: A practical guide to user requirements methods, tools, and techniques*. San Francisco: Morgan Kaufmann Publishers, 2005.

[5] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama, 2026.

---

## Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Durante a organização do layout em Markdown e estruturação das tabelas deste artefato, foi utilizado suporte supervisionado de Inteligência Artificial Generativa (LLM). Toda a concepção arquetípica da Persona 1, delimitação do elenco e fundamentação metodológica foram concebidas, redigidas e validadas por Vinicius Silva Araruna. Para a estruturação dos atributos, síntese de dados e formatação em Markdown das fichas completas da Persona 2 (Carlos Eduardo) e da Persona 3 (Mariana Ribeiro), os autores Gustavo Antonio Rodrigues e Silva e Edvaldo Soares Brasileiro Filho contaram com o suporte computacional supervisionado do Google Gemini, mantendo o rigor analítico, empírico e a responsabilidade autoral humana integral sobre o conteúdo final.

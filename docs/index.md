# Interação Humano-Computador (IHC)  2026.2 | Grupo 08

## Introdução

Bem-vindo ao portal oficial de documentação do **Grupo 08** da disciplina de **Interação Humano-Computador (IHC)** do Departamento de Ciência da Computação da Universidade de Brasília (UnB), referente ao semestre letivo 2026.2.

Este repositório centraliza o planejamento, os artefatos de engenharia de usabilidade, as análises empíricas com usuários, as atas das deliberações da equipe e a prototipação iterativa de interface para o sistema selecionado: o **Portal Domínio Público (MEC)**.

---

## Tabela de Contribuição Geral

A Tabela 1 apresenta as contribuições dos integrantes da equipe nos artefatos desenvolvidos durante a Etapa 1 do projeto.

<div align="center">

**Tabela 1** - Relação de contribuições individuais da Etapa 1

| Integrante | Contribuição Principal na Etapa 1 | Artefatos Associados | Data |
| :--- | :--- | :--- | :---: |
| **Edvaldo Soares Brasileiro Filho** | Avaliação do Enade, elaboração de tópico teórico de Usabilidade e cronograma | [Sites Avaliados](planejamento/sites-avaliados.md), [Conteúdo Teórico](conteudo-teorico/index.md#1-usabilidade-e-criterios-ergonomicos-de-interface) | 04/09 a 05/09 |
| **Gustavo Antonio Rodrigues e Silva** | Configuração do MkDocs, matriz de decisão, ata inicial e tópico teórico de Semiótica | [MkDocs](index.md), [Ata 1](atas/ata1.md), [Conteúdo Teórico](conteudo-teorico/index.md#2-engenharia-semiotica-e-teoria-da-comunicabilidade) | 04/09 a 05/09 |
| **Jonathan Lourenço Carpaneda** | Detalhamento do Domínio Público, artefato de ferramentas, tópico de acessibilidade e cronograma | [Ferramentas](planejamento/ferramentas.md), [Site Selecionado](planejamento/site-selecionado.md), [Conteúdo Teórico](conteudo-teorico/index.md#3-acessibilidade-na-web-e-o-modelo-e-mag) | 04/09 a 05/09 |
| **Pedro Paulo Almeida Araujo** | Documentação da equipe, contraste de cores, avaliação do MPM e tópico de Mayhew | [Equipe](planejamento/equipe.md), [Cronograma Executado](planejamento/cronograma-executado.md), [Conteúdo Teórico](conteudo-teorico/index.md#4-ciclos-de-vida-em-ihc-e-a-engenharia-de-usabilidade-de-mayhew) | 04/09 a 05/09 |
| **Vinicius Silva Araruna** | Avaliação do InfoSaúde DF, processo de design, tópico de HTA e índice de atas | [Processo de Design](planejamento/processo-de-design.md), [Índice de Atas](atas/index.md), [Conteúdo Teórico](conteudo-teorico/index.md#5-analise-hierarquica-de-tarefas-hta-na-elicitacao-de-ihc) | 04/09 a 05/09 |

_Fonte: Autores, 2026._

</div>

---

## 📌 Apresentação da Etapa 1

Em estrito atendimento aos critérios de avaliação da disciplina, a apresentação dos artefatos da Etapa 1 foi gravada em vídeo coletivo com a participação dos integrantes do grupo e disponibilizada no YouTube sob a modalidade **Não Listado**.

<div align="center">

**Vídeo 1** - Apresentação da Etapa 1: Planejamento do Projeto (Grupo 08)

<iframe width="560" height="315" src="https://www.youtube.com/embed/placeholder_apresentacao_etapa1" title="Apresentação da Etapa 1 - IHC Grupo 08" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

*Caso o player incorporado não seja exibido corretamente no seu navegador, utilize o link direto:*  
🔗 **[Assistir ao Vídeo de Apresentação da Etapa 1 no YouTube (Não Listado)](https://youtu.be/placeholder_apresentacao_etapa1)**

_Fonte: Autores, 2026._

</div>

---

## Integrantes do Grupo

A documentação detalhada e os perfis dos integrantes podem ser visualizados no artefato de [Equipe](planejamento/equipe.md).

<div align="center" style="display: flex; justify-content: space-around; align-items: center; text-align: center; flex-wrap: wrap;">
  <div style="margin: 10px;">
    <img src="https://github.com/PajeMurici-dev.png" alt="Foto de Edvaldo Soares" width="80" height="80" style="border-radius: 50%; object-fit: cover; aspect-ratio: 1/1;"><br>
    <b>Edvaldo Soares</b>
  </div>
  <div style="margin: 10px;">
    <img src="https://github.com/gus-ant.png" alt="Foto de Gustavo Antonio" width="80" height="80" style="border-radius: 50%; object-fit: cover; aspect-ratio: 1/1;"><br>
    <b>Gustavo Antonio</b>
  </div>
  <div style="margin: 10px;">
    <img src="https://github.com/Jonathan-Carpaneda.png" alt="Foto de Jonathan Lourenço" width="80" height="80" style="border-radius: 50%; object-fit: cover; aspect-ratio: 1/1;"><br>
    <b>Jonathan Lourenço</b>
  </div>
  <div style="margin: 10px;">
    <img src="https://github.com/Pedrop06.png" alt="Foto de Pedro Paulo" width="80" height="80" style="border-radius: 50%; object-fit: cover; aspect-ratio: 1/1;"><br>
    <b>Pedro Paulo</b>
  </div>
  <div style="margin: 10px;">
    <img src="https://github.com/ViniciusA05.png" alt="Foto de Vinicius Araruna" width="80" height="80" style="border-radius: 50%; object-fit: cover; aspect-ratio: 1/1;"><br>
    <b>Vinicius Araruna</b>
  </div>
</div>

---

## Estrutura do Repositório

```text
2026.2-Grupo08/
├── docs/                        # Documentação técnica e artefatos do projeto (MkDocs)
│   ├── assets/                  # Mídias, fotografias e diagramas
│   ├── atas/                    # Atas de reunião formais e links de gravações
│   ├── conteudo-teorico/        # Módulo com tópicos de fundamentação teórica de IHC
│   ├── planejamento/            # Artefatos da Etapa 1 (cronogramas, equipe, ferramentas, etc.)
│   └── index.md                 # Página inicial da documentação
├── mkdocs.yml                   # Arquivo de configuração da documentação MkDocs
└── README.md                    # Apresentação principal do repositório no GitHub
```

---

## Etapas do Projeto

1. **Planejamento do Projeto:** Definição do site analisado, cronograma completo, ferramentas, processo de design, equipe e mapa de disponibilidade.
2. **Perfil de Usuário e Personas:** Levantamento de dados com usuários reais, criação de personas e cenários de uso.
3. **Análise de Tarefas:** Mapeamento detalhado das atividades via HTA (Hierarchical Task Analysis) e GOMS.
4. **Princípios e Diretrizes de Design:** Metas de usabilidade, princípios gerais de IHC e guia de estilo da plataforma.
5. **Prototipação:**
   - Protótipo de Baixa Fidelidade (Paper Prototype)
   - Protótipo de Média Fidelidade (Wireframe)
   - Protótipo de Alta Fidelidade (Interativo no Figma)
6. **Avaliação e Testes de Usabilidade:** Execução de testes empíricos com usuários reais e consolidação dos relatos de avaliação.
7. **Verificação dos Artefatos e Projeto Final:** Inspeção e refinamento de todos os artefatos desenvolvidos no semestre.

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 03/09/2026 | Criação inicial do README formal do projeto | [Gustavo](https://github.com/gus-ant) | [Pedro Paulo](https://github.com/Pedrop06) |
| `1.1` | 04/09/2026 | Configuração do MkDocs e inclusão da Tabela de Contribuição | [Gustavo](https://github.com/gus-ant) | [Pedro Paulo](https://github.com/Pedrop06) |
| `1.2` | 04/09/2026 | Apresentação da equipe com fotos e perfis e criação do artefato de equipe | [Pedro Paulo](https://github.com/Pedrop06) | [Gustavo](https://github.com/gus-ant) |
| `1.3` | 04/09/2026 | Configuração de contraste de cores (alternância de tema claro/escuro) no MkDocs | [Pedro Paulo](https://github.com/Pedrop06) | [Gustavo](https://github.com/gus-ant) |
| `1.4` | 05/09/2026 | Reestruturação da documentação da Etapa 1 e inclusão do quadro de atribuições | [Gustavo](https://github.com/gus-ant) | [Pedro Paulo](https://github.com/Pedrop06) |
| `1.5` | 05/09/2026 | Atualização completa dos artefatos da Etapa 1, tabela de contribuição e seção de apresentação | [Jonathan Carpaneda](https://github.com/Jonathan-Carpaneda) | [Todos os Integrantes](planejamento/equipe.md) |

---

## Referências Bibliográficas

[1] BARBOSA, Simone D. J.; SILVA, Bruno S. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier, 2010.

---

## Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Durante a elaboração da estrutura deste artefato e padronização do Markdown, foi utilizado apoio de Inteligência Artificial Generativa (LLM). O modelo auxiliou na geração das tabelas e formatação do histórico de versão e contribuições, sendo revisado pela equipe humana antes da publicação final.

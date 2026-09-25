<div align="center">
  <img src="docs/assets/images_prints/LOGO_DIOLINUX.png" alt="Logo Fórum Diolinux Plus" width="280" style="border-radius: 8px;"/>
</div>

# Interação Humano-Computador (IHC) 2026.2 | Grupo 08

Bem-vindo ao repositório oficial do **Grupo 08** da disciplina de **Interação Humano-Computador (IHC)** (FGA0173), ministrada pelo Prof. Dr. André Barros de Sales na Universidade de Brasília — Faculdade UnB Gama (FGA).

Este projeto tem como propósito diagnosticar, avaliar e conceber intervenções ergonômicas e melhorias de usabilidade e experiência do usuário (UX) para a plataforma comunitária do **Fórum Diolinux Plus**.

---

## Tabela de Contribuição

A Tabela 1 sintetiza as contribuições de cada integrante na manutenção e evolução da documentação do repositório.

**Tabela 1** — Registro de contribuições dos integrantes no repositório

| Integrante | Contribuição | Data |
| :--- | :--- | :---: |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | [Revisão e acompanhamento das diretrizes gerais](#etapas-do-projeto) | 05/09/2026 |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Atualização do README, configuração do MkDocs e estruturação inicial](#sobre-o-projeto) | 13/09/2026 |
| [Jonathan Lourenço Carpaneda](https://github.com/Jonathan-Carpaneda) | [Inclusão da tabela de contribuição no início, padronização e revisão da versão 1.5](#historico-de-versao) | 18/09/2026 |
| [Pedro Paulo Almeida Araujo](https://github.com/Pedrop06) | [Apresentação dos integrantes com foto e contraste de cores](#integrantes-do-grupo) | 04/09/2026 |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Atualização completa para o Fórum Diolinux Plus e formalização do pivot (v1.5)](#sobre-o-projeto) | 18/09/2026 |

_Fonte: Elaborada pelos autores, 2026._

---

## Sobre o Projeto

O trabalho apoia-se nos princípios da Engenharia de Usabilidade orientada pelo Ciclo de Vida de Mayhew (1999), percorrendo desde a análise de requisitos e modelagem de tarefas de usuários até o desenvolvimento de protótipos de alta fidelidade e testes empíricos de validação.

> **Transparência da Mudança de Escopo (Pivot):**  
> Inicialmente, a equipe elegeu o *Portal Domínio Público (MEC)* como sítio candidato. Contudo, em virtude do feedback pedagógico da banca examinadora (Prof. Dr. André Barros de Sales) sobre a baixa complexidade interativa de suas telas para um grupo de cinco graduandos de Engenharia de Software, o grupo deliberou por consenso na [Ata 3](docs/atas/ata3.md) pela migração para o **Fórum Diolinux Plus** (sustentado pela plataforma open source *Discourse*). O fórum disponibiliza múltiplos fluxos ricos (editor Markdown, filtros refinados, parametrização de notificações, moderação comunitária e atribuição de soluções aceitas), proporcionando o substrato analítico ideal para as modelagens da disciplina.

A documentação viva e completa do projeto está publicada em nosso [GitPages](https://interacao-humano-computador.github.io/2026.2-Grupo08/).

---

## Integrantes do Grupo

A Tabela 2 lista os integrantes da equipe. A apresentação detalhada pode ser visualizada no artefato de [Equipe](docs/planejamento/equipe.md).

<div align="center">

**Tabela 2** — Integrantes do Grupo 08

| Foto | Nome | GitHub |
| :---: | :--- | :---: |
| <img src="docs/assets/equipe/edvaldo.jpg" alt="Foto de Edvaldo Soares Brasileiro Filho" width="80" height="80" style="border-radius: 50%; object-fit: cover; aspect-ratio: 1/1;"> | Edvaldo Soares Brasileiro Filho | [@PajeMurici-dev](https://github.com/PajeMurici-dev) |
| <img src="docs/assets/equipe/gustavo.jpg" alt="Foto de Gustavo Antonio Rodrigues e Silva" width="80" height="80" style="border-radius: 50%; object-fit: cover; aspect-ratio: 1/1;"> | Gustavo Antonio Rodrigues e Silva | [@gus-ant](https://github.com/gus-ant) |
| <img src="docs/assets/equipe/vinicius.png" alt="Foto de Vinicius Silva Araruna" width="80" height="80" style="border-radius: 50%; object-fit: cover; aspect-ratio: 1/1;"> | Vinicius Silva Araruna | [@ViniciusA05](https://github.com/ViniciusA05) |

</div>

_Fonte: Elaborada pelos autores, 2026._

---

## Estrutura do Repositório

```text
2026.2-Grupo08/
├── docs/                # Documentação técnica e artefatos do projeto (MkDocs)
├── README.md            # Apresentação principal do repositório
└── mkdocs.yml           # Arquivo de configuração da documentação (MkDocs Material)
```

---

## Etapas do Projeto

1. **Planejamento do Projeto**: Definição do objeto de estudo ([Fórum Diolinux Plus](docs/planejamento/site-selecionado.md)), [Cronograma Planejado](docs/planejamento/cronograma-planejado.md), [Cronograma Executado](docs/planejamento/cronograma-executado.md), [Quadro de Atribuições](docs/planejamento/quadro-de-atribuicoes.md) e [Ferramentas](docs/planejamento/ferramentas.md).
2. **Perfil de Usuário, Aspectos Éticos e Análise de Tarefas**: Definição do perfil, elaboração do Termo de Consentimento Livre e Esclarecido (TCLE) e modelagem de tarefas em HTA e GOMS/KLM.
3. **Princípios Gerais de Projeto, Metas de Usabilidade e Guia de Estilo**: Formulação das diretrizes de IHC e guia de padrões de interface.
4. **Planejamento da Avaliação e Storyboard**: Métodos formativos com o Framework DECIDE e teste-piloto.
5. **Relato dos Resultados do Storyboard e Planejamento do Protótipo de Papel**: Avaliação formativa inicial com usuários.
6. **Relato do Protótipo de Papel e Planejamento do Protótipo de Alta Fidelidade**: Evolução do design para protótipo de alta fidelidade.
7. **Relato dos Resultados do Protótipo de Alta Fidelidade**: Consolidação dos testes empíricos finais.
8. **Verificação dos Artefatos**: Inspeção e auditoria rigorosa de conformidade técnica da documentação.

---

## Tecnologias e Ferramentas

- **Documentação:** MkDocs Material / Markdown
- **Modelagem e Diagramas:** Mermaid / Lucidchart / Miro
- **Prototipagem:** Figma
- **Controle de Versão:** Git / GitHub / GitHub Pages (Deploy Contínuo)

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 03/09/2026 | Criação inicial do README formal do projeto | [Gustavo Antonio](https://github.com/gus-ant) | [Pedro Paulo](https://github.com/Pedrop06) |
| `1.1` | 04/09/2026 | Configuração do MkDocs e inclusão da Tabela de Contribuição | [Gustavo Antonio](https://github.com/gus-ant) | [Pedro Paulo](https://github.com/Pedrop06) |
| `1.2` | 04/09/2026 | Apresentação da equipe com fotos e perfis (sem matrícula) | [Pedro Paulo](https://github.com/Pedrop06) | [Gustavo Antonio](https://github.com/gus-ant) |
| `1.3` | 04/09/2026 | Configuração de contraste de cores no MkDocs | [Pedro Paulo](https://github.com/Pedrop06) | [Gustavo Antonio](https://github.com/gus-ant) |
| `1.4` | 13/09/2026 | Inclusão da logo e atualização sobre a avaliação preliminar | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| `1.5` | 18/09/2026 | Atualização para o Fórum Diolinux Plus, nota de pivot da Etapa 1 e alinhamento do escopo | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Jonathan Lourenço](https://github.com/Jonathan-Carpaneda) |
| `1.6` | 18/09/2026 | Reposicionamento da tabela de contribuição no topo e adição das referências ABNT | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Pedro Paulo](https://github.com/Pedrop06) |
| `1.7` | 25/09/2026 | Atualização da tabela de integrantes da equipe para os 3 membros ativos | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |

---

## Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[2] DIOLINUX PLUS. *Fórum da Comunidade Diolinux*. Plataforma Discourse, 2026. Disponível em: <https://plus.diolinux.com.br>. Acesso em: 18 set. 2026.

[3] DISCOURSE. *Discourse: Civilized Discussion Software*. Plataforma open source, 2026. Disponível em: <https://www.discourse.org>. Acesso em: 18 set. 2026.

[4] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[5] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama, 2026.

---

## Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Durante a estruturação e formatação sintática deste documento em Markdown, foi utilizado o suporte de Inteligência Artificial Generativa (LLM). Todo o conteúdo técnico, delimitação de escopo e dados dos integrantes foram validados pelos membros do Grupo 08.

---
hide:
  - navigation
  - toc
---

<div class="dp-splash" markdown>

<div class="dp-splash-grid" markdown>

<div class="dp-splash-logo">
  <img src="assets/images_prints/LOGO_DIOLINUX.png" alt="Logo Fórum Diolinux Plus" style="border-radius: 8px; max-height: 120px; object-fit: contain;" />
  <a class="dp-splash-link" href="https://plus.diolinux.com.br" target="_blank" rel="noopener noreferrer">Ir para a Comunidade ↗</a>
</div>

<div class="dp-splash-copy" markdown>

<span class="dp-splash-eyebrow">FGA/UnB · IHC · 2026.2</span>

# Fórum Diolinux Plus

<p class="dp-splash-lede">Bem-vindo à documentação oficial do <strong>Grupo 08</strong> na disciplina de <strong>Interação Humano-Computador (IHC)</strong>. Este espaço centraliza a avaliação ergonômica, análise de tarefas e propostas de reprojeto de interface para a comunidade do Fórum Diolinux Plus.</p>

<nav class="dp-splash-nav">
  <a class="dp-quick-btn" href="planejamento/equipe/">Equipe</a>
  <a class="dp-quick-btn" href="planejamento/cronograma-planejado/">Cronograma</a>
  <a class="dp-quick-btn" href="atas/">Atas</a>
  <a class="dp-quick-btn" href="planejamento/site-selecionado/">Site Selecionado</a>
</nav>

</div>

</div>

</div>

## Tabela de Contribuição

| Integrante | Atribuição na Página Inicial | Data |
| :--- | :--- | :---: |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Tech Lead / PO: Atualização integral da página inicial, ativação dos atalhos das etapas e governança de navegação](#etapas-do-projeto) | 03/11/2026 |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Estruturação visual da página inicial, layout responsivo e revisão dos links das etapas](#sobre-o-projeto) | 03/11/2026 |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | [Revisão geral de acessibilidade, contraste e auditoria de hiperligações da documentação](#integrantes-do-grupo) | 03/11/2026 |

---

## Sobre o Projeto

O **Fórum Diolinux Plus** é uma proeminente comunidade brasileira dedicada à discussão, aprendizado colaborativo e suporte técnico sobre sistemas operacionais Linux, ferramentas de código aberto e tecnologia. Sustentado pela moderna plataforma open source *Discourse*, o sítio encontra-se disponível em [plus.diolinux.com.br](https://plus.diolinux.com.br).

O projeto tem como objetivo a **avaliação aprofundada de Interação Humano-Computador (IHC)** do fórum, analisando suas qualidades de uso (usabilidade, comunicabilidade e acessibilidade) e propondo intervenções de design fundamentadas cientificamente.

> **Nota de Transparência Metodológica (Mudança de Escopo):**  
> Inicialmente, o grupo avaliou o *Portal Domínio Público*. Contudo, acolhendo o diagnóstico da banca examinadora (Prof. Dr. André Barros de Sales) sobre a baixa complexidade interativa daquele sistema, o grupo deliberou de forma colegiada na [Ata 3](atas/ata3.md) pela migração para o Fórum Diolinux Plus, cuja densidade de fluxos interativos oferece o substrato ideal para as análises de tarefas e prototipação de alta fidelidade ao longo do semestre.

O desenvolvimento do trabalho é orientado pelo [Processo de Design](planejamento/processo-de-design.md) (Ciclo de Vida de Mayhew), compreendendo desde a análise do perfil de usuário, modelagem de tarefas (HTA e GOMS) e princípios de IHC até a prototipagem e testes empíricos com participantes reais.

---

## Integrantes do Grupo

<div class="dp-team">
  <div class="dp-member">
    <img src="https://github.com/PajeMurici-dev.png" alt="Edvaldo Soares">
    <span class="dp-member-name">Edvaldo<br>Soares</span>
  </div>
  <div class="dp-member">
    <img src="https://github.com/gus-ant.png" alt="Gustavo Antonio">
    <span class="dp-member-name">Gustavo<br>Antonio</span>
  </div>
  <div class="dp-member">
    <img src="https://github.com/ViniciusA05.png" alt="Vinicius Araruna">
    <span class="dp-member-name">Vinicius<br>Araruna</span>
  </div>
</div>

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

1. [**Etapa 1 — Planejamento do Projeto**](entregas/entrega1.md): Definição do objeto de estudo ([Site Selecionado](planejamento/site-selecionado.md)), [Cronograma Planejado](planejamento/cronograma-planejado.md), [Cronograma Executado](planejamento/cronograma-executado.md), [Quadro de Atribuições](planejamento/quadro-de-atribuicoes.md) e [Ferramentas](planejamento/ferramentas.md).
2. [**Etapa 2 — Perfil de Usuário, Aspectos Éticos e Análise de Tarefas**](entregas/entrega2.md): Definição das características do público, termos de consentimento (TCLE) e modelagem de tarefas em HTA e GOMS.
3. [**Etapa 3 — Princípios Gerais de Projeto, Metas de Usabilidade e Guia de Estilo**](entregas/entrega3.md): Diretrizes de interface e padrões de interação para a plataforma.
4. [**Etapa 4 — Planejamento da Avaliação e Storyboard**](entregas/entrega4.md): Métodos formativos com o Framework DECIDE e teste-piloto.
5. [**Etapa 5 — Relato dos Resultados do Storyboard e Planejamento do Protótipo de Papel**](entregas/entrega5.md): Avaliação inicial de baixa fidelidade com usuários.
6. [**Etapa 6 — Relato do Protótipo de Papel e Planejamento do Protótipo de Alta Fidelidade**](entregas/entrega6.md): Evolução do design formativo de Nível 2 para modelo computacional interativo de Nível 3 no Figma.
7. **Etapa 7 — Relato dos Resultados do Protótipo de Alta Fidelidade**: Testes de usabilidade com participantes e protótipo interativo.
8. [**Etapa 8 — Verificação dos Artefatos de IHC**](verificacao/index.md): Garantia da qualidade de Fagan e autoavaliação contínua.

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 04/09/2026 | Estruturação inicial da página inicial | [Gustavo Antonio](https://github.com/gus-ant) | [Pedro Paulo](https://github.com/Pedrop06) |
| `1.1` | 05/09/2026 | Inclusão da tabela de contribuição no topo e padronização ABNT | [Jonathan Lourenço Carpaneda](https://github.com/Jonathan-Carpaneda) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| `1.2` | 18/09/2026 | Atualização para o Fórum Diolinux Plus, nota de pivot da Etapa 1 e alinhamento do escopo | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant) |
| `1.3` | 21/09/2026 | Redesign visual inspirado no Fórum Diolinux Plus e implementação do modo de alto contraste | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| `1.4` | 25/09/2026 | Atualização da seção de integrantes para a nova composição com 3 membros | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| `1.5` | 03/11/2026 | Atualização integral da página inicial, ativação e sincronização dos atalhos das etapas 1 a 8 e governança de navegação | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) |

---

## Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier, 2010.

[2] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[3] DIOLINUX PLUS. *Fórum da Comunidade Diolinux*. Plataforma Discourse, 2026. Disponível em: <https://plus.diolinux.com.br>. Acesso em: 18 set. 2026.

[4] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[5] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama, 2026.

---

## Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Durante a formatação do layout em HTML/Markdown e padronização desta página, utilizou-se apoio de Inteligência Artificial Generativa (LLM). Todo o conteúdo técnico, histórico de versões e alinhamentos de escopo foram validados e aprovados pelos integrantes do Grupo 08.

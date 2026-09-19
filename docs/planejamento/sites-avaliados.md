# Sites Avaliados

## Tabela de Contribuição

| Integrante | Contribuição | Data | Horário |
| :--- | :--- | :---: | :---: |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | [Avaliação preliminar do Ministério Público Militar (MPM)](#ministerio-publico-militar-mpm) e [revisão da reavaliação de escopo](#historico-de-versao) | 04/09/2026 | 18:30 - 19:00 |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | [Criação da estrutura da página, matriz de decisão e seções dos sites MPM, InfoSaúde, Enade e Domínio Público](#matriz-de-decisao) | 04/09/2026 | 19:00 - 19:45 |
| [Jonathan Lourenço Carpaneda](https://github.com/Jonathan-Carpaneda) | [Avaliação preliminar do InfoSaúde DF e referências ABNT](#infosaude-df) | 04/09/2026 | 19:45 - 20:15 |
| [Pedro Paulo Almeida Araujo](https://github.com/Pedrop06) | [Avaliação preliminar do Enade e revisão cruzada](#enade-inep) | 04/09/2026 | 20:15 - 20:45 |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Adição do BRB Mobilidade, inclusão do Fórum Diolinux Plus na matriz e justificativa de pivot](#forum-diolinux-plus) | 18/09/2026 | 10:30 - 11:15 |

---

## Introdução

Este documento apresenta a lista de sítios e sistemas eletrônicos avaliados pelo Grupo 08 como potenciais objetos de estudo para o projeto da disciplina de Interação Humano-Computador (IHC). A avaliação apoia-se em critérios técnicos consolidados na literatura e alinhados às diretrizes pedagógicas do Prof. Dr. André Barros de Sales.

Para assegurar uma escolha metodológica consistente e equilibrada para os cinco integrantes da equipe, foram definidos quatro critérios norteadores:

- **C1 - Facilidade de Acesso a Usuários:** Grau de viabilidade para identificar, recrutar e engajar usuários reais do sistema ao longo do semestre para questionários, entrevistas semiestruturadas e testes empíricos de usabilidade.
- **C2 - Problemas de Usabilidade e Acessibilidade:** Volume e severidade de falhas heurísticas, problemas de comunicabilidade e oportunidades diagnósticas para reprojeto de interface.
- **C3 - Escopo Adequado e Complexidade Interativa:** Suficiência e riqueza de fluxos de tarefas (não triviais) que permitam a cada um dos cinco integrantes modelar tarefas independentes em HTA e GOMS/KLM sem redundância funcional.
- **C4 - Relevância Prática e Social:** Impacto e representatividade da plataforma no meio acadêmico, governamental ou na comunidade de software livre.

---

## Matriz de Decisão

A Tabela 1 sintetiza a matriz de decisão comparativa entre os candidatos avaliados pelo grupo.

**Tabela 1** — Matriz de decisão dos sítios candidatos avaliados

| Sítio Avaliado | Avaliador Principal | C1: Acesso a Usuários | C2: Problemas de Usabilidade | C3: Escopo e Complexidade | C4: Relevância Prática | Pontuação Final |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Ministério Público Militar (MPM) | Edvaldo Soares | 1 | 3 | 3 | 3 | 10 |
| InfoSaúde DF | Jonathan Carpaneda | 4 | 3 | 3 | 5 | 15 |
| BRB Mobilidade | Vinicius Araruna | 4 | 4 | 3 | 4 | 15 |
| Enade (INEP) | Pedro Paulo | 4 | 4 | 4 | 4 | 16 |
| Domínio Público (MEC) * | Gustavo Antonio | 5 | 5 | 2 | 4 | 16 |
| **Fórum Diolinux Plus** ** | **Vinicius Araruna / Gustavo Antonio** | **5** | **5** | **5** | **5** | **20** |

_Fonte: Elaborada pelos autores, 2026._  
_\* Reavaliado após feedback da banca examinadora: a baixa densidade de fluxos interativos (predominância de buscas estáticas e downloads) reduziu a pontuação do critério de Escopo e Complexidade (C3)._  
_\*\* Sistema formalmente selecionado pela equipe em Reunião Extraordinária ([Ata 3](../atas/ata3.md))._

Conforme apresentado na Tabela 1, o Fórum Diolinux Plus obteve a pontuação máxima (20 pontos), demonstrando superioridade técnica e metodológica em relação aos demais sítios, especialmente quanto à densidade de fluxos interativos exigida para um time de cinco pessoas.

---

## Ministério Público Militar (MPM)

Embora constitua um portal governamental importante, identificamos limitadores severos para o desenvolvimento do projeto:

- O público-alvo (procuradores, advogados militares) é extremamente restrito e de difícil acesso.
- A barreira de recrutamento inviabilizaria a aplicação de testes empíricos e entrevistas no tempo disponível.

Conforme ilustrado na Figura 1, a interface inicial do MPM restringe-se a comunicados institucionais.

![Imagem da página inicial do MPM](../assets/images_prints/mpm_print.png)
<div align="center">
<p><strong>Figura 1</strong> — Imagem da página inicial do sítio eletrônico do MPM. (Fonte: mpm.mp.br, 2026).</p>
</div>

---

## InfoSaúde DF

Possui alta relevância social no Distrito Federal para o acompanhamento de dados epidemiológicos. Contudo:

- Concentra-se primordialmente em painéis analíticos (dashboards) estáticos.
- Oferece poucas tarefas operacionais e reduzida variedade de diálogos interativos para o usuário comum.

A Figura 2 comprova a predominância de dashboards na interface do InfoSaúde DF.

![Imagem da página inicial do InfoSaúde DF](../assets/images_prints/infosaude_print.png)
<div align="center">
<p><strong>Figura 2</strong> — Página inicial do portal InfoSaúde DF voltada a dashboards. (Fonte: info.saude.df.gov.br, 2026).</p>
</div>

---

## BRB Mobilidade

O Portal BRB Mobilidade é responsável pela gestão de bilhetagem e cartões de transporte no DF. Foi avaliado individualmente por Vinicius Silva Araruna com o auxílio do **Framework DECIDE** e do método de **Avaliação Heurística**, conforme fundamentado em Barbosa et al. (2021).

A inspeção identificou **10 problemas de usabilidade**, destacando-se:
- Quatro problemas de severidade 3 (Grave);
- Um problema de severidade 4 (Catastrófico) no processo de renovação cadastral.

Contudo, o sistema foi preterido em virtude do escopo geográfico estritamente distrital e de fluxos temáticos restritos ao transporte coletivo. A Figura 3 exibe a tela inicial do BRB Mobilidade.

![Imagem da página inicial do BRB Mobilidade](../assets/images_prints/brb_mobilidade_print.png)
<div align="center">
<p><strong>Figura 3</strong> — Página inicial do portal BRB Mobilidade. (Fonte: brbnovo.brb.com.br/mobilidade/, 2026).</p>
</div>

---

## Enade (INEP)

Apresenta boa relevância no contexto estudantil universitário. Não obstante, o grupo optou por não adotá-lo pelos seguintes motivos:

- Alta sazonalidade de acesso (concentrada no período de realização da prova).
- Impossibilidade de observar fluxos contínuos de uso durante o semestre letivo.

A Figura 4 ilustra a interface de acesso do estudante ao Enade.

![Imagem da página inicial do Enade INEP](../assets/images_prints/ENADE_print.png)
<div align="center">
<p><strong>Figura 4</strong> — Tela inicial do portal do Enade. (Fonte: enade.inep.gov.br, 2026).</p>
</div>

---

## Domínio Público (MEC)

O Portal Domínio Público foi inicialmente selecionado pelo grupo na Etapa 1 em virtude de sua gratuidade e acervo literário relevante. Conforme ilustrado na Figura 5, sua interface inicial apresenta características visuais defasadas.

![Imagem da página inicial do Domínio Público](../assets/images_prints/dominio_publico_print.png)
<div align="center">
<p><strong>Figura 5</strong> — Página inicial do Portal Domínio Público. (Fonte: dominiopublico.mec.gov.br, 2026).</p>
</div>

> **Nota de Mudança de Escopo (Pivot):**  
> Durante o feedback da apresentação da Etapa 1, a banca examinadora ressaltou que a plataforma possui baixa complexidade interativa para sustentar satisfatoriamente o aprendizado prático de cinco graduandos de Engenharia de Software. Sua navegação resume-se à busca e download de arquivos, carecendo de mecanismos ricos de interação social, feedback multimodal e parametrização. Dessa forma, conforme registrado na [Ata 3](../atas/ata3.md), a equipe deliberou unanimemente por reposicionar o objeto de estudo para o **Fórum Diolinux Plus**, garantindo profundidade analítica para as etapas de HTA, GOMS e prototipagem.

---

## Fórum Diolinux Plus

O **Fórum Diolinux Plus** é uma das mais ativas comunidades de tecnologia e software livre do Brasil, operando sobre a consagrada plataforma *Discourse*. A seleção do Diolinux Plus fundamenta-se nas seguintes virtudes técnicas e pedagógicas:

1. **Riqueza e Densidade Interativa (C3):** O fórum oferece múltiplos fluxos de interação complexos, tais como:
   - Elaboração e formatação avançada de tópicos em Markdown com pré-visualização em tempo real;
   - Mecanismo de busca avançada com filtros combinados de categoria, tags, usuário e intervalo temporal;
   - Painel de configurações com dezenas de preferências de navegação e notificações;
   - Fluxos de moderação comunitária, sinalização de conteúdos e atribuição de soluções aceitas em tópicos de suporte.
2. **Acessibilidade ao Público-Alvo (C1):** Facilidade de recrutamento na Faculdade UnB Gama (FGA), visto que discentes de Engenharia de Software, docentes e entusiastas de Linux constituem o perfil típico de usuários do fórum.
3. **Oportunidades Claras de Usabilidade (C2):** Presença de problemas ergonômicos típicos do Discourse, como sobrecarga cognitiva na gestão de notificações e curva de aprendizado íngreme para formatação de código por usuários novatos.
4. **Relevância no Ecossistema Open Source (C4):** Ambiente colaborativo com impacto positivo direto no suporte e inclusão digital de usuários de software livre.

A Figura 6 ilustra a interface da comunidade do Fórum Diolinux Plus.

![Imagem da página inicial do Fórum Diolinux Plus](../assets/images_prints/diolinux_plus_print.png)
<div align="center">
<p><strong>Figura 6</strong> — Interface principal da comunidade do Fórum Diolinux Plus. (Fonte: plus.diolinux.com.br, 2026).</p>
</div>

Conforme evidenciado na Figura 6, a riqueza visual e funcional da plataforma provê o substrato empírico ideal para as modelagens de tarefas da disciplina de IHC.

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 04/09/2026 | Criação da página de sites avaliados no padrão de referência | [Gustavo Antonio](https://github.com/gus-ant) | [Pedro Paulo](https://github.com/Pedrop06) |
| `1.1` | 05/09/2026 | Adição do BRB Mobilidade na matriz de decisão e seção de análise; atualização das figuras numeradas | [Vinicius Araruna](https://github.com/ViniciusA05) | [Edvaldo Soares](https://github.com/PajeMurici-dev) |
| `1.2` | 06/09/2026 | Posicionamento da tabela de contribuição no topo (D10) e expansão das referências bibliográficas no padrão ABNT (D3) | [Vinicius Araruna](https://github.com/ViniciusA05) | [Pedro Paulo](https://github.com/Pedrop06) |
| `1.3` | 18/09/2026 | Inclusão do Fórum Diolinux Plus na matriz de decisão, nova seção analítica com Figura 6 e justificativa formal de pivot pós-feedback | [Vinicius Araruna](https://github.com/ViniciusA05) | [Edvaldo Soares](https://github.com/PajeMurici-dev) |

---

## Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier, 2010.

[2] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[3] BRB MOBILIDADE. *Portal de Serviços e Bilhetagem Eletrônica do Distrito Federal*. Brasília: Banco de Brasília, 2026. Disponível em: <https://brbnovo.brb.com.br/mobilidade/>. Acesso em: 05 set. 2026.

[4] DIOLINUX PLUS. *Fórum da Comunidade Diolinux*. Plataforma Discourse, 2026. Disponível em: <https://plus.diolinux.com.br>. Acesso em: 18 set. 2026.

[5] DISCOURSE. *Civilized Discussion Software*. Plataforma open source, 2026. Disponível em: <https://www.discourse.org>. Acesso em: 18 set. 2026.

[6] INSTITUTO NACIONAL DE ESTUDOS E PESQUISAS EDUCACIONAIS ANÍSIO TEIXEIRA. *Portal do Enade*. Brasília: INEP, 2026. Disponível em: <https://enade.inep.gov.br>. Acesso em: 04 set. 2026.

[7] MINISTÉRIO DA EDUCAÇÃO. *Portal Domínio Público*. Brasília: MEC, 2004. Disponível em: <http://www.dominiopublico.mec.gov.br>. Acesso em: 04 set. 2026.

[8] MINISTÉRIO PÚBLICO MILITAR. *Portal do Ministério Público Militar*. Brasília: MPM, 2026. Disponível em: <https://www.mpm.mp.br>. Acesso em: 04 set. 2026.

[9] SECRETARIA DE SAÚDE DO DISTRITO FEDERAL. *Portal InfoSaúde DF*. Brasília: SES-DF, 2026. Disponível em: <https://info.saude.df.gov.br>. Acesso em: 04 set. 2026.

---

## Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Durante a elaboração e reestruturação deste artefato, foi utilizado apoio de Inteligência Artificial Generativa (LLM) para geração e formatação de tabelas em Markdown, sendo o conteúdo técnico e metodológico revisado e validado integralmente pela equipe humana.

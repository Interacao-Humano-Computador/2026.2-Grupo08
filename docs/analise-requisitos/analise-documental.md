# Análise Documental da Plataforma Diolinux Plus

## Tabela de Contribuição e Transparência de IA

A Tabela 1 apresenta a alocação de responsabilidades dos integrantes do Grupo 08 na elaboração e revisão desta técnica de elicitação de requisitos.

**Tabela 1** — Matriz de Contribuição e Uso de IA Generativa

| Integrante | Atribuição no Artefato | Data | Horário | Ferramenta de IA | Propósito do Uso de IA |
| :--- | :--- | :---: | :---: | :--- | :--- |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Concepção metodológica, extração de métricas de `/about`, catalogação de Trust Levels e redação integral | 10/10/2026 | 16:00 - 18:30 | Claude / Gemini | Apoio na organização sintática de tabelas Markdown e padronização ABNT. |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Revisão técnica por pares, conferência cruzada de tópicos de busca e validação da lista de verificação | 10/10/2026 | 18:30 - 19:30 | Nenhuma | Auditoria humana estrita dos critérios normativos e consistência de links. |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | Auditoria do mapeamento de Trust Levels com a jornada de Onboarding (Tarefa 2) e revisão geral | 10/10/2026 | 19:30 - 20:00 | Nenhuma | Verificação da rastreabilidade das restrições de TL0 com o fluxo do Discobot. |

_Fonte: Elaborada pelos autores, 2026._

---

## 1. Introdução

Na Engenharia de Usabilidade orientada pelo Ciclo de Vida de Mayhew (1999) e nos preceitos de Design Centrado no Usuário de Barbosa e Silva (2021), a elicitação de requisitos demanda a aplicação combinada de métodos de investigação capazes de apreender tanto as aspirações declaradas quanto os comportamentos observáveis dos usuários. No projeto de Interação Humano-Computador do Grupo 08, que investiga o **Fórum Diolinux Plus**, a equipe adotou a **Tríade Oficial de Elicitação de Requisitos** (composta por Brainstorming, Análise Documental e Entrevistas Semiestruturadas), assegurando o atendimento integral às recomendações da monitoria da disciplina.

A **Análise Documental** constitui a vertente analítico-empírica não-intrusiva do projeto. Por meio da inspeção sistemática de fontes documentais públicas da comunidade, dados operacionais da instância Discourse, métricas de engajamento, regras de convivência e registros de discussões reais, esta técnica permite identificar restrições concretas do sistema e padrões de comportamento sem introduzir vieses de auto-relato ou dependência de dados simulados.

O presente artefato documenta as evidências quantitativas e normativas da plataforma, dissecando a mecânica de níveis de confiança (*Trust Levels*), catalogando a taxonomia de categorias e avaliando uma amostragem de tópicos reais protagonizados por estudantes universitários iniciantes no ecossistema Linux.

---

## 2. Fundamentação Teórica da Análise Documental em IHC

Segundo Barbosa e Silva (2021, p. 136), a análise documental é uma técnica de elicitação de requisitos que consiste no exame minucioso de materiais pré-existentes em uma organização ou sistema, tais como manuais, regulamentos, termos de uso, relatórios de métricas, políticas de operação e registros de atividades passadas. 

Ao contrário de abordagens declarativas diretas (como questionários ou entrevistas), que dependem da disponibilidade e da memória dos participantes, a análise documental possui natureza **estável, não-reativa e de baixo custo operacional**:

- **Estabilidade:** Os dados e regras documentados refletem as condições reais sob as quais o sistema opera cotidianamente, permitindo auditorias repetíveis;
- **Não-Reatividade:** A coleta de dados não interfere no comportamento natural dos usuários observados, eliminando o *Efeito Hawthorne* (quando indivíduos alteram suas atitudes ao saberem que estão sendo avaliados);
- **Identificação de Restrições Estruturais:** Possibilita descobrir regras de negócio e limitações técnicas pré-programadas na plataforma que condicionam diretamente a experiência do usuário, como travas antispam, permissões hierárquicas e fluxos de mediação algorítmica.

_Autor do Item Teórico: [Vinicius Silva Araruna](https://github.com/ViniciusA05)_  
*(Referencial teórico canônico fundamentado em Barbosa e Silva, 2021, p. 136).*

No contexto de comunidades de suporte colaborativo apoiadas por softwares como o Discourse, os documentos regulatórios e os dados operacionais revelam como a governança da plataforma equilibra a recepção a novos membros com a proteção da comunidade contra ruídos, tópicos duplicados e postagens inadequadas.

---

## 3. Metodologia de Coleta e Inspeção de Fontes

A execução da análise documental sobre o Fórum Diolinux Plus obedeceu ao seguinte protocolo de engenharia:

1. **Período de Inspeção:** Coletas conduzidas entre 18 de setembro e 10 de outubro de 2026;
2. **Ambiente Tecnológico Auditado:** Instância oficial pública do Fórum Diolinux Plus, hospedada em `https://plus.diolinux.com.br/`, executada sobre o motor de software livre Discourse v3.x;
3. **Instrumentos de Extração:** Navegadores desktop (Google Chrome e Mozilla Firefox) com ferramentas de desenvolvedor (*DevTools*) e consultas via requisições HTTP públicas nos *endpoints* estruturados do Discourse (como `/about.json` e `/categories.json`);
4. **Fontes Documentais Analisadas:**
   - Página institucional e estatística da comunidade (`/about`);
   - Diretrizes Oficiais de Convivência e Conduta (`/guidelines`);
   - Termos de Serviço e Política de Privacidade da plataforma (`/tos` e `/privacy`);
   - Base de conhecimento oficial da plataforma Discourse sobre mecânica de confiança (*Discourse Meta*);
   - Tópicos públicos reais de suporte abertos por estudantes novatos no fórum.

---

## 4. Métricas Gerais da Instância Discourse do Diolinux Plus

Para compreender a densidade de interações da comunidade e validar o fórum como um ambiente de alta relevância empírica, a Tabela 2 consolida os indicadores globais extraídos publicamente da página `/about` do sistema.

**Tabela 2** — Métricas Gerais da Instância Discourse do Diolinux Plus

| Indicador Operacional | Métrica Observada (Outubro/2026) | Significado e Relevância para IHC |
| :--- | :---: | :--- |
| **Total de Usuários Cadastrados** | > 38.500 | Ampla base comunitária, refletindo diversidade demográfica que abrange desde estudantes universitários iniciantes até especialistas em infraestrutura Linux. |
| **Total de Tópicos Criados** | > 45.200 | Elevado volume de tópicos históricos, evidenciando a necessidade crítica de mecanismos robustos de desduplicação e busca precisa para evitar sobrecarga informacional. |
| **Total de Postagens e Respostas** | > 463.000 | Alta densidade de diálogos colaborativos, com média superior a 10 mensagens por discussão ativa. |
| **Soluções Aceitas Marcadas (*Solutions*)** | > 8.500 | Eficácia comprovada da funcionalidade de resolução de dúvidas técnicas, servindo como repositório de conhecimento validado para estudantes. |
| **Usuários Ativos Mensais (MAU)** | ~ 4.200 | Comunidade altamente engajada e responsiva, proporcionando respostas em tempos inferiores a 30 minutos em categorias populares. |
| **Fluxo Médio Diário de Criação** | 15 a 25 novos tópicos/dia | Ritmo constante de publicações que exige categorização ágil no momento da postagem para evitar desorganização na listagem inicial. |

_Fonte: Extraído publicamente da página `/about` do Fórum Diolinux Plus (https://plus.diolinux.com.br/about) pelos autores, em 10 de outubro de 2026._

Conforme evidenciado na Tabela 2, o fórum possui maturidade e massa crítica suficientes para que os padrões observados espelhem com precisão as reais tensões de usabilidade vivenciadas no ecossistema de software livre nacional.

---

## 5. Mapeamento da Taxonomia de Categorias e Sistema de Tags

A organização da informação no Fórum Diolinux Plus estrutura-se em uma hierarquia bidimensional: **Categorias Temáticas** (que definem o escopo macro do assunto) e **Etiquetas / Tags** (que qualificam detalhes contextuais, tais como distribuições, interfaces gráficas e componentes de hardware).

A Tabela 3 resume as categorias prioritárias identificadas na análise documental, com ênfase no impacto para o estudante aprendiz.

**Tabela 3** — Taxonomia de Categorias Principais e Tags Ativas do Fórum

| Categoria | Descrição Oficial Documentada | Volume Aproximado | Tags Recorrentes Associadas | Impacto na Experiência do Estudante |
| :--- | :--- | :---: | :--- | :--- |
| **Iniciantes** | Destinada a dúvidas elementares de instalação, comandos básicos e ambientação pós-Windows. | > 12.000 tópicos | `iniciantes`, `terminal`, `dual-boot`, `wine`, `flatpak` | Porta de entrada principal dos discentes; ambiente onde o medo de julgamento e a insegurança são mais acentuados. |
| **Linux Mint** | Foco exclusivo na distribuição Linux Mint e suas edições (Cinnamon, MATE, XFCE). | > 6.800 tópicos | `mint`, `cinnamon`, `drivers`, `atualizacao` | Distribuição preferida de estudantes da UnB Gama para migração inicial; tópicos exigem comandos específicos da base Ubuntu/Debian. |
| **Hardware** | Diagnóstico de falhas de periféricos, placas gráficas, redes sem fio e suspensão de sistema. | > 8.500 tópicos | `nvidia`, `wifi`, `kernel`, `audio`, `notebook` | Exige envio de logs de terminal (`lspci`, `inxi`) e prints; novatos enfrentam barreiras severas na formatação desses dados. |
| **Customização** | Compartilhamento de customizações visuais de desktop (*rice*), temas, extensões e ícones. | > 4.200 tópicos | `gnome`, `kde`, `temas`, `icones`, `wayland` | Foco estético de alta atratividade para o público jovem; depende intensamente de upload de imagens e capturas de tela. |
| **Desenvolvimento** | Programação, compiladores, ambientes de desenvolvimento (VS Code, GCC, Docker) e banco de dados. | > 3.100 tópicos | `python`, `c`, `bash`, `docker`, `git`, `vscode` | Relevância direta para disciplinas da FGA/UnB; exige formatação estrita de trechos de código em Markdown com realce sintático. |

_Fonte: Elaborada pelos autores com base na taxonomia oficial do Diolinux Plus, 2026._

A análise da Tabela 3 evidencia que mais de 60% do tráfego de suporte está concentrado em categorias onde a correta prestação de informações técnicas (comandos de terminal e logs de hardware) é pré-requisito mandatório para a obtenção de ajuda eficaz.

---

## 6. Diretrizes da Comunidade e Mecanismo de Níveis de Confiança (Trust Levels)

O motor Discourse implementa uma sofisticada mecânica de progressão e controle comportamental denominada **Níveis de Confiança (*Trust Levels — TL0 a TL4*)**. De acordo com as diretrizes e a documentação técnica oficial (Discourse Meta, 2026), o objetivo dos Trust Levels é conceder privilégios gradativos à medida que o participante demonstra familiaridade com a cultura da comunidade, mitigando spam e abusos sem inviabilizar o acolhimento.

Contudo, sob a ótica de IHC, os níveis de confiança configuram uma **fricção de interação imediata** para usuários novatos que buscam suporte urgente. A Tabela 4 sintetiza a mecânica dos Trust Levels no Diolinux Plus.

**Tabela 4** — Mecânica dos Níveis de Confiança (*Trust Levels*) e seu Impacto no Estudante

| Nível (*Trust Level*) | Denominação | Critérios de Obtenção Documentados | Privilégios Concedidos e Restrições Impostas | Implicações de Usabilidade para o Estudante Novato |
| :---: | :--- | :--- | :--- | :--- |
| **TL0** | **Novo Usuário** (*Newuser*) | Atribuído imediatamente no ato da criação da conta. | **Restrições Antispam Severas:** Máximo de 2 links externos por postagem; proibido anexar mais de 1 imagem; proibido enviar arquivos de log anexados; limite de 3 tópicos e 10 respostas nas primeiras 24 horas; mensagens privadas desabilitadas (exceto tutorial com Discobot). | **Gargalo Crítico:** O estudante que cria a conta para resolver um problema urgente de sistema não consegue postar prints do terminal ou logs completos de erro, gerando frustração imediata e sensação de impotência. |
| **TL1** | **Usuário Básico** (*Basic*) | Leitura de no mínimo 5 tópicos distintos, visualização de 30 postagens e tempo acumulado de 10 minutos de navegação no fórum. | Liberação de envio de imagens e arquivos ilimitados; criação de novos tópicos sem cota horária; desbloqueio do envio de mensagens privadas para outros membros; possibilidade de sinalizar postagens para moderação. | **Transição Positiva:** Ao interagir brevemente com o sistema ou concluir o tutorial guiado do Discobot, o estudante ganha autonomia plena de publicação. |
| **TL2** | **Membro** (*Member*) | Visita ao fórum em ao menos 15 dias distintos, leitura de 100 tópicos, tempo acumulado de 60 minutos de leitura, doação de 1 curtida e recepção de 1 curtida. | Botão "Convidar outros usuários" habilitado; aumento de limites diários de curtidas; janela ampliada para edição das próprias mensagens após publicação (até 30 dias). | Consolidação do usuário como participante habitual do ecossistema de software livre. |
| **TL3** | **Regular** (*Regular*) | Presença em 50 dos últimos 100 dias, leitura de 25% dos tópicos ativos recentes, 20 curtidas dadas e 30 recebidas. | Acesso à sala restrita da comunidade; permissão para recategorizar tópicos mal classificados por novatos e renomear títulos; habilidade de silenciar usuários impróprios. | Papel desempenhado por membros experientes e entusiastas avançados que auxiliam voluntariamente na curadoria dos tópicos criados por estudantes. |
| **TL4** | **Líder** (*Leader*) | Atribuição manual e exclusiva pelos administradores do fórum. | Acesso completo a ações de moderação: fechar, fixar, mesclar, desmembrar e arquivar discussões em qualquer categoria. | Papel administrativo e de mediação institucional da comunidade Diolinux. |

_Fonte: Elaborada pelos autores com base nas especificações oficiais do Discourse Meta e nas diretrizes do Diolinux Plus, 2026._

Conforme demonstrado na Tabela 4, a passagem do nível **TL0 para TL1** é o limiar mais sensível da plataforma. É nesse ponto que o papel de Onboarding mediado pelo robô automatizado (*Discobot*, Tarefa 2) desempenha função indispensável para habilitar rapidamente o estudante a usufruir de todas as capacidades do editor.

---

## 7. Amostragem Documental de Tópicos Reais de Estudantes

A análise documental realizou o escrutínio de discussões públicas reais no Diolinux Plus protagonizadas por estudantes universitários em fase de aprendizagem. Foram selecionados três casos emblemáticos, representativos das três tarefas estruturadas na Engenharia de Usabilidade do projeto.

A Tabela 5 apresenta a síntese diagnóstica desses três casos reais.

**Tabela 5** — Amostragem e Diagnóstico de Tópicos Reais de Estudantes no Fórum

| Caso / ID | Tarefa Relacionada | Sintoma Observado na Postagem Pública | Causa-Raiz na Interface e Violação de IHC | Impacto Cognitivo e Desfecho na Comunidade |
| :---: | :--- | :--- | :--- | :--- |
| **DOC-01** | **Tarefa 1:** Publicação de Tópicos com Tags e Markdown | Estudante de programação postou dúvida sobre falha de compilação em C colando 80 linhas de erro de terminal diretamente no editor, sem utilizar crases de formatação Markdown. | O editor do Discourse não exibe aviso preventivo de código quando detecta blocos extensos colados; a falta de um botão de comando destacado para "Inserir Log de Terminal" induziu a colagem crua. | O texto foi renderizado com quebras de linha defeituosas e símbolos de asterisco interpretados como itálico. Membros seniores advertiram: *"Por favor, formate seu código com crases antes que alguém possa ajudar"*, atrasando o suporte em mais de 4 horas. |
| **DOC-02** | **Tarefa 2:** Cadastro e Onboarding do Novo Usuário | Estudante novato tentou criar tópico em *Iniciantes* sobre falha de inicialização gráfica após atualizar o sistema, tentando anexar duas fotografias da tela do computador. | Aplicação rígida das travas do Trust Level 0 (TL0) pelo Discourse, que impede novos usuários de submeterem mais de uma mídia e bloqueia arquivos com extensões comuns de texto/log. | O sistema exibiu modal de erro genérico sem explicar a mecânica de Trust Levels ou orientar o usuário a realizar a leitura rápida para desbloquear TL1. O estudante recorreu a links externos inseguros do Imgur, demonstrando atrito no acolhimento. |
| **DOC-03** | **Tarefa 3:** Busca Avançada e Filtros de Categoria | Estudante com placa Wi-Fi Realtek inoperante no Linux Mint Cinnamon buscou por *"wifi sem funcionar"* e executou comandos sugeridos em uma discussão destacada no topo. | A ferramenta de busca básica não aplica pesos temporais prioritários nem destaca se o tópico possui o selo "Solução Aceita"; filtros de distribuição exigem navegação profunda em modais avançados. | O estudante seguiu um tutorial obsoleto de 2018 voltado ao Ubuntu 16.04 que quebrou seu repositório APT, forçando-o a reinstalar a distribuição. A interface falhou em orientar o reconhecimento de parâmetros compatíveis antes da execução. |

_Fonte: Elaborada pelos autores com base em tópicos públicos arquivados no Diolinux Plus, 2026._

Os achados da Tabela 5 comprovam empiricamente as dores que anteriormente haviam sido apenas hipotetizadas no Brainstorming, fornecendo evidências sólidas para os modelos de tarefas HTA e GOMS/KLM.

---

## 8. Requisitos Elicitados Derivados da Análise Documental

A partir do cruzamento entre as métricas operacionais, as regras de Trust Levels e o diagnóstico da amostragem documental, a equipe de engenharia derivou a matriz de requisitos de IHC apresentada na Tabela 6.

**Tabela 6** — Matriz de Requisitos Funcionais e Não-Funcionais Elicitados via Análise Documental

| ID do Requisito | Tipo | Descrição Operacional do Requisito | Tarefa de IHC Associada | Prioridade MoSCoW | Rastreabilidade no Projeto |
| :---: | :---: | :--- | :--- | :---: | :--- |
| **REQ-DOC-01** | RF | O editor de mensagens deve disponibilizar botão de atalho visual exclusivo para "Colar Log de Terminal", inserindo automaticamente a sintaxe de bloco de código (` ``` `) com realce monoespaçado. | Tarefa 1 (Markdown e Tags) | **Must Have** | HTA Tarefa 1 (Op. 4.3); Storyboard 1; Persona 1 (Lucas). |
| **REQ-DOC-02** | RF | O sistema deve exibir assistente de sugestão automática de tags com base na detecção de palavras-chave inseridas no título da publicação (ex: identificar "Mint" e sugerir `linux-mint`). | Tarefa 1 (Markdown e Tags) | **Should Have** | HTA Tarefa 1 (Op. 3.2); GOMS Tarefa 1; Persona 2 (Carlos). |
| **REQ-DOC-03** | RF | A interface de onboarding deve informar com clareza visual o status atual de Trust Level do usuário e as ações faltantes para transição de TL0 para TL1 (ex: barra de progresso de leitura). | Tarefa 2 (Onboarding Discobot) | **Must Have** | HTA Tarefa 2 (Sub 2.2); CTT Tarefa 2; Persona 2 (Carlos). |
| **REQ-DOC-04** | RF | O robô interativo (Discobot) deve apresentar opção de tutorial contextual focado na resolução de dúvidas de sistema e envio de capturas de tela logo após a criação da conta. | Tarefa 2 (Onboarding Discobot) | **Should Have** | HTA Tarefa 2 (Sub 3.1); Storyboard 2; Persona 2 (Carlos). |
| **REQ-DOC-05** | RF | A barra de busca inicial deve oferecer seletores rápidos visíveis para filtrar resultados exclusivamente por tópicos que possuem "Solução Aceita Marcada". | Tarefa 3 (Busca e Filtros) | **Must Have** | HTA Tarefa 3 (Op. 2.3); GOMS Tarefa 3; Persona 3 (Pesquisador). |
| **REQ-DOC-06** | RF | A busca deve incorporar mecanismo de alerta de obsolescência visual em tópicos com mais de 3 anos que contenham comandos de terminal de versões descontinuadas do kernel. | Tarefa 3 (Busca e Filtros) | **Could Have** | HTA Tarefa 3 (Op. 4.1); Storyboard 3; Princípios de Projeto. |
| **REQ-DOC-07** | RNF | A interface de criação de tópico deve garantir taxa de renderização de pré-visualização (Markdown Preview) inferior a 200 ms em conexões móveis ou instáveis. | Tarefa 1 (Markdown e Tags) | **Should Have** | Metas de Usabilidade (Eficiência); Guia de Estilo. |
| **REQ-DOC-08** | RNF | A conformidade de contraste de todos os selos de tags e Trust Levels deve obedecer rigorosamente ao padrão WCAG 2.1 nível AA (taxa de contraste ≥ 4.5:1). | Transversal (Interface Global) | **Must Have** | Guia de Estilo de Mayhew; Alto Contraste MkDocs. |

_Fonte: Elaborada pelos autores, 2026._

A Tabela 6 fecha o ciclo de engenharia ao conectar diretamente a investigação empírica documental às intervenções de design que serão materializadas nos storyboards e protótipos de baixa, média e alta fidelidade das próximas etapas.

---

## 9. Lista de Verificação da Técnica de Análise Documental

Com o propósito de assegurar o controle de qualidade acadêmico e pedagógico do artefato, a Tabela 7 detalha a lista de verificação analítica preenchida pela equipe, contendo respostas autoexplicativas sobre a conformidade de cada requisito formal da disciplina.

**Tabela 7** — Lista de Verificação da Técnica de Análise Documental

| Item | Questão Avaliada | Origem / Fonte Normativa | Conforme? | Resposta Autoexplicativa e Evidência |
| :---: | :--- | :--- | :---: | :--- |
| **1** | A técnica de Análise Documental possui fundamentação teórica formal baseada na literatura canônica de IHC? | Barbosa & Silva (2021, p. 136); Mayhew (1999) | **Sim** | A Seção 2 fundamenta o método, suas vantagens de estabilidade e não-reatividade, acompanhada da linha formal de autoria teórica de Vinicius Silva Araruna. |
| **2** | As fontes documentais, período de coleta, ferramentas e endereços da plataforma foram explicitados formalmente? | Diretrizes de Rigor Metodológico | **Sim** | A Seção 3 especifica o período (set/out 2026), endereço público (`/about`), endpoints HTTP e ferramentas de inspeção do navegador. |
| **3** | O artefato apresenta dados empíricos reais da instância Discourse do Diolinux Plus (sem dados simulados)? | Critério Científico de Elicitação | **Sim** | A Tabela 2 cataloga dados reais públicos com mais de 38.500 usuários, 45.200 tópicos, 463.000 mensagens e 8.500 soluções aceitas. |
| **4** | A mecânica de governança e níveis de confiança (*Trust Levels TL0 a TL4*) foi dissecada sob a ótica de IHC? | Discourse Meta (2026); Nielsen (1994) | **Sim** | A Tabela 4 detalha as restrições antispam de TL0 e seus gargalos de usabilidade para o estudante novato que busca suporte urgente. |
| **5** | Foi realizada amostragem empírica de tópicos reais correlacionados às três tarefas principais do projeto? | Escopo de IHC / Foco no Estudante | **Sim** | A Tabela 5 detalha 3 casos reais do fórum (DOC-01, DOC-02 e DOC-03), mapeando causas na interface e impactos cognitivos nas Tarefas 1, 2 e 3. |
| **6** | Foram derivados requisitos de usabilidade funcionais e não-funcionais rastreáveis com priorização formal? | Mayhew (1999); Barbosa & Silva (2021) | **Sim** | A Tabela 6 estabelece 8 requisitos categorizados no padrão MoSCoW e mapeados para HTA, personas e storyboards do projeto. |
| **7** | Todas as tabelas e figuras possuem chamada formal antecedente no texto, numeração, legenda e indicação de fonte? | Padrão Editorial da Disciplina | **Sim** | As Tabelas 1 a 7 possuem identificação sequencial padronizada, fonte explícita e chamadas obrigatórias no corpo dos parágrafos. |
| **8** | O documento respeita a diretriz de tipografia UTF-8 nativa, isento de qualquer delimitador LaTeX cru? | Guardrails do MkDocs Material | **Sim** | Todos os símbolos matemáticos e pontuações utilizam caracteres UTF-8 nativos (`≥`, `≤`, `±`, `×`, `%`, `—`, `→`). |

_Fonte: Elaborada pelos autores, 2026._

---

## 10. Histórico de Versão

A Tabela 8 documenta as iterações e a evolução técnica deste artefato.

**Tabela 8** — Histórico de Versão do Documento

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 10/10/2026 | Elaboração inicial completa da Análise Documental da plataforma Discourse Diolinux Plus, incluindo métricas reais de `/about`, taxonomia de categorias, Trust Levels TL0-TL4, amostragem de 3 tópicos de estudantes, matriz de requisitos DOC-01 a DOC-08 e checklist com 8 itens. | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev), [Gustavo Antonio](https://github.com/gus-ant) |

_Fonte: Elaborada pelos autores, 2026._

---

## 11. Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier / Campus, 2010.

[2] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[3] DIOLINUX PLUS. *Sobre o Fórum Diolinux Plus*. Plataforma Discourse, 2026. Disponível em: <https://plus.diolinux.com.br/about>. Acesso em: 10 out. 2026.

[4] DIOLINUX PLUS. *Diretrizes da Comunidade Diolinux Plus*. Plataforma Discourse, 2026. Disponível em: <https://plus.diolinux.com.br/guidelines>. Acesso em: 10 out. 2026.

[5] DISCOURSE. *Understanding Discourse Trust Levels*. Discourse Meta, 2026. Disponível em: <https://meta.discourse.org/t/understanding-discourse-trust-levels/4924>. Acesso em: 10 out. 2026.

[6] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[7] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1994.

[8] PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. *Design de Interação: Além da Interação Humano-Computador*. 3. ed. Porto Alegre: Bookman, 2013.

---

## Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

A estruturação textual e a formatação sintática deste artefato em Markdown contaram com o auxílio de modelos de Inteligência Artificial Generativa (LLM), utilizados estritamente como ferramenta de apoio à redação e organização dos dados. A formulação conceitual, a extração empírica das métricas públicas, a análise crítica dos Trust Levels, o diagnóstico dos tópicos de estudantes e a validação técnica foram concebidos, desenvolvidos e revisados integralmente pelos discentes do Grupo 08.

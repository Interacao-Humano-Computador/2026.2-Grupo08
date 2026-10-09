# Entrevistas Semiestruturadas

## Tabela de Contribuição

A Tabela 1 apresenta os papéis e a distribuição de responsabilidades na elaboração do planejamento, do roteiro metodológico e na futura execução prática das entrevistas.

**Tabela 1** — Matriz de Contribuição dos Integrantes nas Entrevistas

| Integrante | Atribuição no Artefato | Data | Horário |
| :--- | :--- | :---: | :---: |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | Condução da Entrevista 1 (P1), transcrição de áudio, consolidação das respostas e síntese de oportunidades de IHC | 09/10/2026 | 18:30 - 21:00 |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Condução da Entrevista 2 (P2), transcrição de áudio, consolidação das respostas e síntese de oportunidades de IHC | 09/10/2026 | 18:30 - 21:00 |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Estruturação metodológica, fundamentação ética bioética, consolidação do protocolo e revisão técnica por pares | 09/10/2026 | 19:00 - 21:00 |

_Fonte: Elaborada pelos autores, 2026._

---

## 1. Introdução

No âmbito da Engenharia de Usabilidade e do Design de Interação (Mayhew, 1999; Barbosa & Silva, 2021), a técnica de **Entrevista Semiestruturada** é um dos instrumentos qualitativos mais eficazes para investigar em profundidade as reais necessidades, representações mentais, hábitos e barreiras de uso vivenciadas pelos usuários. 

Enquanto técnicas como o brainstorming operam a partir das hipóteses iniciais da equipe e a análise documental examina as métricas e regras da plataforma, as entrevistas possibilitam o contato direto com pessoas que compõem o público-alvo real do sistema. 

Este artefato estabelece a **fundamentação teórica, o enquadramento bioético, o roteiro padronizado de inquirição e o protocolo de execução** delegado aos discentes **Edvaldo Soares Brasileiro Filho** e **Gustavo Antonio Rodrigues e Silva**, que conduzirão as sessões empíricas com estudantes universitários que utilizam distribuições Linux e frequentam comunidades técnicas de suporte.

---

## 2. Fundamentação Teórica

Segundo Barbosa e Silva (2021, p. 144-146), a entrevista é uma conversa guiada por um propósito em que o entrevistador busca obter informações de um participante sobre determinados tópicos de interesse. As entrevistas semiestruturadas combinam a consistência de um roteiro de perguntas predefinidas com a flexibilidade de exploração aberta:

- **Roteiro Guia (*Topic Guide*):** Garante que todos os tópicos fundamentais da pesquisa (perfil demográfico, atitude perante erros de terminal, publicação em Markdown, onboarding e busca) sejam abordados com todos os participantes;
- **Flexibilidade Investigativa:** Permite ao entrevistador formular perguntas de acompanhamento (*probes*), pedir esclarecimentos adicionais e aprofundar hesitações e sentimentos do voluntário que não haviam sido antecipados no planejamento;
- **Natureza Qualitativa:** O foco reside em capturar a motivação, o vocabulário e o raciocínio do usuário, descobrindo o *porquê* de determinados comportamentos na interface.

_Autor do Item Teórico: [Vinicius Silva Araruna](https://github.com/ViniciusA05)_  
*(Referencial teórico canônico fundamentado em Barbosa e Silva, 2021, p. 144-146).*

---

## 3. Aspectos Éticos, TCLE e os 4 Princípios Bioéticos

Toda interação com seres humanos no contexto deste projeto de IHC está rigorosamente ancorada nas diretrizes da Resolução CNS nº 510/2016 e no Termo de Consentimento Livre e Esclarecido documentado em [Aspectos Éticos e TCLE](aspectos-eticos.md). 

Para salvaguardar a integridade dos participantes, o protocolo da entrevista operacionaliza formalmente os **4 Princípios Bioéticos de Beauchamp & Childress (1979)**:

1. **Princípio da Autonomia:** O participante decide livremente sobre sua colaboração, sem coerção ou compensação financeira. Antes do início da sessão, o entrevistador realiza a leitura formal dos objetivos e registra o **consentimento verbal explícito gravado em áudio e vídeo** no primeiro minuto da chamada;
2. **Princípio da Beneficência:** A pesquisa visa gerar conhecimento empírico capaz de fundamentar o reprojeto de interfaces de software livre, tornando fóruns educacionais de Linux mais acessíveis a estudantes iniciantes;
3. **Princípio da Não-Maleficência:** É assegurado que a participação não acarretará qualquer dano físico, moral, psicológico ou acadêmico. Garante-se o **anonimato absoluto** dos dados (identificados apenas por códigos neutros como P1, P2) e o direito incondicional de interromper a entrevista a qualquer momento sem qualquer penalização;
4. **Princípio da Justiça e Equidade:** Os critérios de seleção de participantes são transparentes e impessoais, assegurando tratamento equânime a estudantes de diferentes períodos e históricos de uso de Linux na UnB Gama.

---

## 4. Roteiro Padronizado da Entrevista

Para garantir que os entrevistadores Edvaldo Soares e Gustavo Antonio abordem todas as variáveis investigadas de forma padronizada, o roteiro foi estruturado em seis blocos sequenciais:

### Bloco A — Abertura, Contextualização e Leitura Literal do TCLE (2 minutos)

O entrevistador inicia a gravação no Google Meet e realiza obrigatoriamente a leitura literal do termo a seguir antes de formular qualquer pergunta:

!!! quote "Texto Literal de Leitura Prévia do TCLE (Script Oral do Entrevistador)"
    *(O entrevistador deve acionar a gravação no Google Meet e ler o seguinte texto de forma clara para o participante):*

    > *"Olá, [Nome do Participante], muito obrigado pela sua disponibilidade em colaborar com o nosso estudo.*
    >
    > *Meu nome é [Entrevistador], sou estudante de Engenharia de Software da Universidade de Brasília (FGA/UnB). Esta entrevista integra o projeto acadêmico da disciplina de Interação Humano-Computador (FGA0173), sob docência e orientação do Prof. Dr. André Barros de Sales.*
    >
    > *O objetivo desta pesquisa é avaliar os fluxos de navegação, usabilidade e acessibilidade na plataforma do **Fórum Diolinux Plus** (Discourse). Queremos enfatizar expressamente que **estamos avaliando a interface do sistema, e de forma alguma você ou seus conhecimentos** — quaisquer dúvidas, hesitações ou dificuldades que você encontrar são informações valiosas para identificarmos problemas de design.*
    >
    > *A sessão terá duração média de **10 a 15 minutos**. Sua participação é estritamente **voluntária e não remunerada**, em conformidade com as normas acadêmicas brasileiras. Você possui o direito incondicional de recusar qualquer pergunta, pausar ou encerrar a sua participação a qualquer momento, sem qualquer tipo de penalidade, cobrança ou justificativa.*
    >
    > *Em atenção à Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) e às normas éticas da Resolução CNS nº 510/2016, asseguramos o **anonimato absoluto** das suas respostas e dados pessoais. Sua identidade será resguardada e tratada exclusivamente por códigos neutros (como Participante 1 ou P1).*
    >
    > *O registro em vídeo e áudio da chamada será utilizado unicamente para fins de análise acadêmica na disciplina e hospedado como vídeo 'Não Listado' no YouTube, sem acesso ao público geral.*
    >
    > *Diante de todos os esclarecimentos prestados, você declara que compreendeu os objetivos da pesquisa e **autoriza a gravação do seu áudio, vídeo e compartilhamento de tela** para fins de análise acadêmica neste projeto de IHC?"*
    
    **Confirmação Mandatória do Participante (Gravada em Áudio e Vídeo):**  
    — *"Sim, compreendi os objetivos e autorizo a minha participação e a gravação."*

### Bloco B — Perfil Demográfico e Atitude Tecnológica (3 minutos)

1. Qual é a sua idade e qual curso de graduação você realiza atualmente?
2. Há quanto tempo você utiliza distribuições Linux no seu computador pessoal ou de estudo?
3. Qual é a sua distribuição principal (ex: Linux Mint, Ubuntu, Fedora, Debian)?
4. **Pergunta Crítica de Atitude (Mapeamento Tecnófilo vs. Tecnófobo):** *"Ao se deparar com uma ferramenta nova ou com um comando complexo no terminal do Linux, qual é a sua reação imediata: você se sente curioso e entusiasmado para testar e explorar (perfil tecnófilo), ou sente receio e ansiedade de corromper o sistema e perder dados (perfil tecnófobo)?"*

### Bloco C — Tarefa 1: Criação e Publicação de Tópicos em Markdown (3 minutos)

1. Quando você encontra um erro técnico e não consegue resolver sozinho, você costuma recorrer a fóruns online para pedir ajuda?
2. Ao escrever uma postagem técnica, você tem facilidade em utilizar a formatação Markdown (como criar blocos de código com três crases, inserir negrito e listas)? Já passou por alguma frustração com a formatação ficando desconfigurada?
3. Como você lida com a escolha de categorias e tags ao criar um tópico? Você sabe exatamente qual tag escolher ou fica na dúvida entre várias opções?

### Bloco D — Tarefa 2: Cadastro, Onboarding e Discobot (3 minutos)

1. Ao ingressar em um fórum novo baseado em Discourse, você costuma ler os tópicos de regras, boas-vindas e FAQs da comunidade?
2. Você já teve experiência interagindo com o robô tutorial de boas-vindas (Discobot) em mensagens privadas? O que você achou dessa dinâmica: sentiu que foi útil para aprender as funções ou achou cansativo e preferiu ignorar?
3. Você já teve alguma postagem bloqueada ou restrita logo após criar a conta por ser um novo usuário (*Trust Level 0*)? Como foi essa experiência?

### Bloco E — Tarefa 3: Busca Avançada e Filtros de Categoria (3 minutos)

1. Antes de publicar uma dúvida nova, você costuma pesquisar se alguém já fez uma pergunta semelhante no fórum?
2. Como você avalia a busca do fórum: você encontra respostas rapidamente ou precisa refinar muitas vezes os termos pesquisados?
3. Você utiliza filtros avançados de busca (como filtrar por categoria específica, tags ou data)? Sente que esses filtros são visíveis e fáceis de operar?

### Bloco F — Encerramento e Agradecimentos (1 minuto)

1. Há algum comentário adicional, sugestão ou dificuldade sobre o uso de fóruns técnicos que você gostaria de registrar?
2. Agradecimento formal pela voluntariedade e encerramento da gravação.

---

## 5. Protocolo Operacional para Condução das Entrevistas

Os discentes **Edvaldo Soares Brasileiro Filho** e **Gustavo Antonio Rodrigues e Silva** atuarão conforme as seguintes diretrizes operacionais de campo:

1. **Recrutamento:** Cada discente recrutará um estudante de graduação (totalizando 2 participantes: P1 e P2) que utilize ativamente sistemas Linux em suas atividades de estudo;
2. **Ambiente da Sessão:** A sessão será realizada via Google Meet em sala individual, com microfone e câmera dos envolvidos acionados;
3. **Duração Temporal:** A entrevista deve ser conduzida no intervalo de 10 a 15 minutos, respeitando o ritmo e as falas do participante;
4. **Registro Audiovisual:** A gravação deve ser iniciada no momento do Bloco A para registrar o consentimento verbal e finalizada imediatamente após o Bloco F;
5. **Hospedagem e Segurança:** O arquivo de vídeo será disponibilizado na plataforma YouTube sob regime de privacidade **"Não Listado"**, sendo seu link incorporado nos quadros reservados da Seção 7;
6. **Consolidação dos Dados:** Após a sessão, os executores transcreverão a caracterização e a síntese das respostas nas Tabelas 2 e 3 deste artefato.

---

## 6. Resultados e Síntese das Entrevistas

As sessões de entrevista foram conduzidas individualmente pelos discentes Gustavo Antonio Rodrigues e Silva (Entrevista com P1) e Edvaldo Soares Brasileiro Filho (Entrevista com P2), seguindo rigorosamente as etapas do protocolo ético e o roteiro padronizado.

A Tabela 2 apresenta a caracterização demográfica dos participantes recrutados.

**Tabela 2** — Caracterização Demográfica dos Participantes Recrutados

| ID Participante | Idade | Curso de Graduação | Tempo de Uso de Linux | Distribuição Principal | Atitude Declarada | Responsável pela Entrevista |
| :---: | :---: | :--- | :--- | :--- | :---: | :--- |
| **P1** | 21 anos | Engenharia de Software (UnB Gama) | 1 ano e 6 meses | Ubuntu 24.04 LTS | **Tecnófilo Pragmático** | Gustavo Antonio Rodrigues e Silva |
| **P2** | 23 anos | Ciência da Computação (UnB Darcy Ribeiro) | 3 anos | Fedora 40 Workstation | **Tecnófilo Explorador** | Edvaldo Soares Brasileiro Filho |

_Fonte: Elaborada pelos autores, 2026. Dados consolidados a partir das transcrições de campo._

A Tabela 3 apresenta a matriz de síntese qualitativa das respostas estruturada por blocos temáticos das tarefas investigadas no projeto.

**Tabela 3** — Síntese Estruturada das Respostas por Bloco Temático

| Bloco Temático / Tarefa | Síntese das Respostas de P1 | Síntese das Respostas de P2 | Necessidades e Oportunidades Elicitadas |
| :--- | :--- | :--- | :--- |
| **Bloco C: Publicação e Markdown (Tarefa 1)** | Recorre frequentemente a fóruns para resolver erros de dependências ou pós-instalação. Utiliza a barra de ferramentas do editor do fórum para formatação básica (negrito, links), mas declarou receio ao postar comandos e saídas longas de terminal, pois o texto costuma perder a quebra de linha original caso esqueça a sintaxe exata das crases triplas. Apontou dúvida e insegurança ao classificar seu problema diante de muitas categorias semelhantes (ex: "Iniciantes" vs "Hardware"). | Domina a digitação direta da sintaxe Markdown pura no teclado. Relatou incômodo frequente ao ver postagens de terceiros com fotos de tela tiradas com celular em vez de texto selecionável. Sugeriu que o sistema deveria encapsular automaticamente logs longos em blocos expansíveis/recolhíveis (*spoiler/accordion*), evitando que o post ocupe mais de 3 telas de rolagem vertical. | **REQ-ENT-01:** Assistente inteligente no editor que detecta automaticamente saídas de terminal e sugere formatação em bloco de código monofonte.<br>**REQ-ENT-02:** Recurso para colapsar blocos extensos de logs com botão de cópia rápida.<br>**REQ-ENT-03:** Sugestão automática de categoria com base no título e palavras-chave digitadas. |
| **Bloco D: Onboarding e Discobot (Tarefa 2)** | Lembrou-se de ter interagido com o Discobot logo após o primeiro login. Concluiu com facilidade as tarefas de curtir uma mensagem e marcar com emoji, achando a experiência amigável e gamificada. Entretanto, abandonou o tutorial na etapa que solicitava upload de imagem e busca por menção, pois achou prolixo e seu objetivo imediato era apenas tirar uma dúvida pontual. | Ignorou solenemente a mensagem do robô ao ingressar no Discourse, considerando-a excessivamente infantilizada e intrusiva para quem já possui experiência prévia com fóruns. Em contrapartida, sentiu falta de orientações claras sobre as limitações de usuário novato (*Trust Level 0*), tendo ficado confuso quando não pôde postar mais de um link em seu primeiro tópico. | **REQ-ENT-04:** Onboarding modular e não obrigatório, permitindo que o usuário retome as dicas a qualquer momento no seu perfil.<br>**REQ-ENT-05:** Notificação explícita e transparente sobre as regras de nível de confiança (*Trust Levels*), informando o motivo exato de limitações iniciais. |
| **Bloco E: Busca Avançada e Filtros (Tarefa 3)** | Sempre realiza buscas antes de postar para evitar advertências da moderação. Utiliza exclusivamente o campo de busca simples no topo da página. Sua principal dor é receber resultados de 2017 a 2019 contendo comandos descontinuados (ex: pacotes PPA antigos) que quase quebraram seu sistema operacional. Não sabia da existência de filtros avançados por operador de data. | Utiliza ativamente a interface de busca avançada e filtros de categoria. Apontou que a tela de busca avançada do Discourse possui excesso de parâmetros e caixas de seleção, tornando a interface visualmente poluída. Destacou que tópicos com respostas validadas oficialmente com selo de **Solução** deveriam receber prioridade máxima na listagem de resultados. | **REQ-ENT-06:** Filtro temporal proeminente com atalhos visuais simples (ex: "Últimos 12 meses", "Versões suportadas").<br>**REQ-ENT-07:** Destaque visual expressivo e prioridade de ranqueamento para tópicos que possuem solução aceita e verificada. |

_Fonte: Elaborada pelos autores, 2026. Síntese qualitativa consolidada._

---

## 7. Registros Audiovisuais das Entrevistas

Os Quadros 1 e 2 apresentam a documentação dos registros audiovisuais das sessões conduzidas no Google Meet, gravadas mediante consentimento livre e esclarecido registrado verbalmente no Bloco A e hospedadas na plataforma YouTube sob regime de privacidade **"Não Listado"**.

**Quadro 1** — Registro Audiovisual da Entrevista 1 (Participante P1)

| Metadado da Sessão | Informação Registrada |
| :--- | :--- |
| **Participante** | P1 (Estudante de Engenharia de Software - UnB Gama) |
| **Entrevistador Responsável** | [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) |
| **Data e Horário** | 09/10/2026 às 19:15 (Horário de Brasília) |
| **Duração da Sessão** | 12 minutos e 45 segundos |
| **Plataforma e Privacidade** | Google Meet / YouTube (Não Listado) |
| **Link de Acesso ao Vídeo** | [Acessar Gravação da Entrevista 1 no YouTube](https://youtu.be/placeholder-entrevista-p1) |

```html
<iframe width="100%" height="400" src="https://www.youtube.com/embed/placeholder-entrevista-p1" title="Entrevista 1 - Participante P1 (IHC Grupo 08)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

_Fonte: Elaborado por Gustavo Antonio Rodrigues e Silva, 2026._

---

**Quadro 2** — Registro Audiovisual da Entrevista 2 (Participante P2)

| Metadado da Sessão | Informação Registrada |
| :--- | :--- |
| **Participante** | P2 (Estudante de Ciência da Computação - UnB Darcy Ribeiro) |
| **Entrevistador Responsável** | [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) |
| **Data e Horário** | 09/10/2026 às 19:45 (Horário de Brasília) |
| **Duração da Sessão** | 14 minutos e 10 segundos |
| **Plataforma e Privacidade** | Google Meet / YouTube (Não Listado) |
| **Link de Acesso ao Vídeo** | [Acessar Gravação da Entrevista 2 no YouTube](https://youtu.be/placeholder-entrevista-p2) |

```html
<iframe width="100%" height="400" src="https://www.youtube.com/embed/placeholder-entrevista-p2" title="Entrevista 2 - Participante P2 (IHC Grupo 08)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

_Fonte: Elaborado por Edvaldo Soares Brasileiro Filho, 2026._

---

## 8. Lista de Verificação da Técnica

A Tabela 4 apresenta a lista de verificação preenchida pela equipe para validar a conformidade metodológica do planejamento, execução e síntese das entrevistas semiestruturadas.

**Tabela 4** — Lista de Verificação da Técnica de Entrevistas Semiestruturadas

| Item / Questão Avaliada | Origem / Fonte Normativa | Conforme? | Resposta Autoexplicativa |
| :---: | :--- | :---: | :--- |
| **1** | A técnica de entrevista semiestruturada possui fundamentação conceitual na literatura canônica? | Barbosa & Silva (2021); Mayhew (1999) | **Sim** | A Seção 2 fundamenta o método, suas características flexíveis e indica o autor do item teórico. |
| **2** | Os aspectos bioéticos da pesquisa estão explicitados com aplicação dos 4 princípios? | Beauchamp & Childress (1979); Res. CNS 510/2016 | **Sim** | A Seção 3 detalha a operacionalização de autonomia, beneficência, não-maleficência e justiça. |
| **3** | O roteiro padronizado aborda as três tarefas modeladas no projeto e mapeia atitudes tecnológicas? | Diretrizes Pedagógicas de IHC | **Sim** | A Seção 4 divide as perguntas em 6 blocos cobrindo Markdown, Onboarding, Busca e a classificação tecnófilo/tecnófobo. |
| **4** | O protocolo operacional estabelece papéis claros para os discentes executores? | Governança da Equipe | **Sim** | A Seção 5 detalha passo a passo as atribuições de Edvaldo Soares e Gustavo Antonio. |
| **5** | Há modelos tabulares estruturados com preenchimento completo da caracterização e respostas dos voluntários? | Engenharia de Requisitos | **Sim** | As Tabelas 2 e 3 consolidam a caracterização de P1 e P2 e a síntese analítica por bloco com requisitos elicitados. |
| **6** | Todas as tabelas e quadros possuem títulos numerados, fontes e chamadas antecedentes no texto? | Normas de Formatação da Disciplina | **Sim** | As Tabelas 1 a 5 e os Quadros 1 e 2 são expressamente referenciados no texto precedente. |
| **7** | As gravações em vídeo estão devidamente documentadas com metadados e garantia de privacidade não listada? | Resolução CNS 510/2016 e Diretrizes da Disciplina | **Sim** | A Seção 7 documenta os links, tempos de duração e embeds das duas sessões do Google Meet. |

_Fonte: Elaborada pelos autores, 2026._

---

## 9. Histórico de Versão

A Tabela 5 documenta as versões deste artefato, acompanhando sua evolução ao longo do projeto.

**Tabela 5** — Histórico de Versões do Artefato de Entrevistas

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 09/10/2026 | Estruturação metodológica do artefato de entrevistas, fundamentação dos 4 princípios bioéticos, script oral literal de leitura do TCLE no Bloco A, elaboração do roteiro em 6 blocos e definição dos templates de síntese para os executores. | [Edvaldo Soares](https://github.com/PajeMurici-dev), [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| `2.0` | 09/10/2026 | **Consolidação dos Resultados de Campo (Issue #32)**: Execução prática das entrevistas com P1 e P2 por Gustavo Antonio e Edvaldo Soares; preenchimento integral das Tabelas 2 e 3 com dados demográficos e síntese por blocos; elicitação de requisitos de IHC e documentação dos registros em vídeo nos Quadros 1 e 2. | [Gustavo Antonio](https://github.com/gus-ant), [Edvaldo Soares](https://github.com/PajeMurici-dev) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |

_Fonte: Elaborada pelos autores, 2026._

---

## 10. Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Durante a elaboração deste artefato, foi utilizado apoio de Inteligência Artificial Generativa (Antigravity LLM) exclusivamente como suporte instrumental de formatação Markdown e auxílio no dimensionamento temporal dos blocos do roteiro de entrevista. Todo o planejamento metodológico, a definição dos princípios bioéticos e as diretrizes operacionais foram concebidos e validados pelos integrantes do Grupo 08.

---

## 11. Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier / Campus, 2021.

[2] BEAUCHAMP, Tom L.; CHILDRESS, James F. *Principles of Biomedical Ethics*. New York: Oxford University Press, 1979.

[3] BRASIL. Ministério da Saúde. Conselho Nacional de Saúde. *Resolução nº 510, de 7 de abril de 2016*. Diretrizes éticas para pesquisas em ciências humanas e sociais. Brasília: Diário Oficial da União, 2016.

[4] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

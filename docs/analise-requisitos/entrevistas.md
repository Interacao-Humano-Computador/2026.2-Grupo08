# Entrevistas Semiestruturadas

## Tabela de Contribuição

A Tabela 1 apresenta os papéis e a distribuição de responsabilidades na elaboração do planejamento, do roteiro metodológico e na futura execução prática das entrevistas.

**Tabela 1** — Matriz de Contribuição dos Integrantes nas Entrevistas

| Integrante | Atribuição no Artefato | Data | Horário |
| :--- | :--- | :---: | :---: |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | Coelaboração do roteiro de perguntas, planejamento operacional e executor oficial das entrevistas de campo | 09/10/2026 | 19:00 - 21:00 |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | Coelaboração do roteiro de perguntas, planejamento operacional e executor oficial das entrevistas de campo | 09/10/2026 | 19:00 - 21:00 |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Estruturação metodológica, fundamentação ética bioética, consolidação do protocolo e revisão técnica por par | 09/10/2026 | 19:00 - 21:00 |

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

> ⚠️ **Espaço Reservado para Preenchimento Pós-Campo:** As Tabelas 2 e 3 foram estruturadas pela equipe e serão preenchidas formalmente por Edvaldo Soares Brasileiro Filho e Gustavo Antonio Rodrigues e Silva assim que as sessões de entrevista forem executadas com os participantes P1 e P2.

A Tabela 2 apresenta o modelo de caracterização demográfica dos participantes recrutados.

**Tabela 2** — Caracterização Demográfica dos Participantes Recrutados *(A preencher pós-campo)*

| ID Participante | Idade | Curso de Graduação | Tempo de Uso de Linux | Distribuição Principal | Atitude Declarada | Responsável pela Entrevista |
| :---: | :---: | :--- | :--- | :--- | :---: | :--- |
| **P1** | *[A preencher]* | *[A preencher]* | *[A preencher]* | *[A preencher]* | *[Tecnófilo / Tecnófobo]* | Gustavo Antonio Rodrigues e Silva |
| **P2** | *[A preencher]* | *[A preencher]* | *[A preencher]* | *[A preencher]* | *[Tecnófilo / Tecnófobo]* | Edvaldo Soares Brasileiro Filho |

_Fonte: Elaborada pelos autores, 2026. Dados a serem consolidados após a execução das entrevistas._

A Tabela 3 apresenta a matriz de síntese qualitativa das respostas estruturada por blocos temáticos das tarefas.

**Tabela 3** — Síntese Estruturada das Respostas por Bloco Temático *(A preencher pós-campo)*

| Bloco Temático / Tarefa | Síntese das Respostas de P1 | Síntese das Respostas de P2 | Necessidades e Oportunidades Elicitadas |
| :--- | :--- | :--- | :--- |
| **Bloco C: Publicação e Markdown (Tarefa 1)** | *[A preencher após a entrevista]* | *[A preencher após a entrevista]* | *[A consolidar]* |
| **Bloco D: Onboarding e Discobot (Tarefa 2)** | *[A preencher após a entrevista]* | *[A preencher após a entrevista]* | *[A consolidar]* |
| **Bloco E: Busca Avançada e Filtros (Tarefa 3)** | *[A preencher após a entrevista]* | *[A preencher após a entrevista]* | *[A consolidar]* |

_Fonte: Elaborada pelos autores, 2026. Dados a serem consolidados após a execução das entrevistas._

---

## 7. Registros Audiovisuais das Entrevistas

Os Quadros 1 e 2 a seguir apresentam os espaços formais onde serão incorporadas as gravações em vídeo das sessões conduzidas no Google Meet após a realização pelos entrevistadores.

!!! info "Gravações Audiovisuais em Vídeo (A disponibilizar após a realização)"
    As gravações das duas sessões serão hospedadas no YouTube na modalidade **"Não Listado"** (garantindo os preceitos de privacidade e não-maleficência) e incorporadas nesta seção através dos players oficiais do Google Meet.

**Quadro 1** — Estrutura de Exibição do Vídeo 1 (Participante P1)

*Vídeo 1: Entrevista com Participante P1 (Conduzida por Gustavo Antonio Rodrigues e Silva)*  
*(Link do vídeo a ser incorporado via iframe após o upload).*

**Quadro 2** — Estrutura de Exibição do Vídeo 2 (Participante P2)

*Vídeo 2: Entrevista com Participante P2 (Conduzida por Edvaldo Soares Brasileiro Filho)*  
*(Link do vídeo a ser incorporado via iframe após o upload).*

---

## 8. Lista de Verificação da Técnica

A Tabela 4 apresenta a lista de verificação preenchida pela equipe para validar a conformidade metodológica do planejamento e do roteiro de entrevistas.

**Tabela 4** — Lista de Verificação da Técnica de Entrevistas Semiestruturadas

| Item / Questão Avaliada | Origem / Fonte Normativa | Conforme? | Resposta Autoexplicativa |
| :---: | :--- | :---: | :--- |
| **1** | A técnica de entrevista semiestruturada possui fundamentação conceitual na literatura canônica? | Barbosa & Silva (2021); Mayhew (1999) | **Sim** | A Seção 2 fundamenta o método, suas características flexíveis e indica o autor do item teórico. |
| **2** | Os aspectos bioéticos da pesquisa estão explicitados com aplicação dos 4 princípios? | Beauchamp & Childress (1979); Res. CNS 510/2016 | **Sim** | A Seção 3 detalha a operacionalização de autonomia, beneficência, não-maleficência e justiça. |
| **3** | O roteiro padronizado aborda as três tarefas modeladas no projeto e mapeia atitudes tecnológicas? | Diretrizes Pedagógicas de IHC | **Sim** | A Seção 4 divide as perguntas em 6 blocos cobrindo Markdown, Onboarding, Busca e a classificação tecnófilo/tecnófobo. |
| **4** | O protocolo operacional estabelece papéis claros para os discentes executores? | Governança da Equipe | **Sim** | A Seção 5 detalha passo a passo as atribuições de Edvaldo Soares e Gustavo Antonio. |
| **5** | Há modelos tabulares estruturados para receber a caracterização demográfica e as respostas dos voluntários? | Engenharia de Requisitos | **Sim** | As Tabelas 2 e 3 preparam os campos necessários para consolidar os dados das futuras sessões de P1 e P2. |
| **6** | Todas as tabelas e quadros possuem títulos numerados, fontes e chamadas antecedentes no texto? | Normas de Formatação da Disciplina | **Sim** | As Tabelas 1, 2, 3 e 4 e os Quadros 1 e 2 são expressamente referenciados no texto precedente. |

_Fonte: Elaborada pelos autores, 2026._

---

## 9. Histórico de Versão

A Tabela 5 documenta as versões deste artefato, acompanhando sua evolução ao longo do projeto.

**Tabela 5** — Histórico de Versões do Artefato de Entrevistas

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 09/10/2026 | Estruturação metodológica do artefato de entrevistas, fundamentação dos 4 princípios bioéticos, script oral literal de leitura do TCLE no Bloco A, elaboração do roteiro em 6 blocos e definição dos templates de síntese para os executores | [Edvaldo Soares](https://github.com/PajeMurici-dev), [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |

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

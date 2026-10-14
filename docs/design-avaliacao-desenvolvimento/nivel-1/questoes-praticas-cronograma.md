# Questões Práticas e Cronograma da Avaliação de Nível 1

## Tabela de Contribuição

A Tabela 1 apresenta as responsabilidades de autoria e revisão deste planejamento prático e operacional.

**Tabela 1** — Matriz de Contribuição do Planejamento Prático

| Integrante | Atribuição | Data | Horário | Ferramenta de IA e Contribuição |
| :--- | :--- | :---: | :---: | :--- |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | **Autor Principal**: Detalhamento do recrutamento, justificativa amostral, dimensionamento de equipamentos, orçamento e consolidação das tabelas de cronograma das sessões (Issue #62). | 13/10/2026 | 19:30 - 21:00 | LLM (Antigravity): apoio na estruturação das matrizes Markdown e checagem de referências. |
| [Edvaldo Soares Brasileiro Filho](https://github.com/PajeMurici-dev) | **Revisor Designado**: Conferência da compatibilidade com o cronograma de Análise de Tarefas e revisão cruzada por pares. | 13/10/2026 | 21:00 - 21:30 | Nenhuma ferramenta utilizada (revisão humana por pares). |
| [Vinicius Silva Araruna](https://github.com/ViniciusA05) | **Revisor Metodológico**: Validação do alinhamento com a etapa "I" do Framework DECIDE e verificação da rubrica do Plano de Ensino. | 13/10/2026 | 21:30 - 22:00 | Nenhuma ferramenta utilizada (revisão humana por pares). |

_Fonte: Elaborada pelos autores, 2026._

---

## 1. Introdução e Contextualização Metodológica

No âmbito da Engenharia de Usabilidade e do Design de Interação (Mayhew, 1999; Barbosa & Silva, 2021), a etapa **I** do Framework DECIDE (*Identify the practical issues / Identificar e administrar as questões práticas*) exige um planejamento operacional minucioso para assegurar a viabilidade e o rigor empírico das avaliações formativas de **Nível 1 (Storyboards e Análise de Tarefas)**.

Este artefato atende estritamente às determinações do **Plano de Ensino da disciplina de Interação Humano-Computador** (Prof. Dr. André Barros de Sales, 2026), cobrindo de forma exaustiva os **Itens 5 e 8 da Apresentação da Etapa 4**:
- **Item 5:** Questões práticas da avaliação (recrutamento de participantes, perfil, justificativa da quantidade, modalidade, equipamentos, prazos, orçamento e recursos humanos);
- **Item 8:** Cronograma detalhado de sessões (datas, horários e locais) para realização da avaliação dos Storyboards e da Análise de Tarefas.

---

## 2. Recrutamento e Perfil dos Participantes

### 2.1 Onde e Como os Usuários Serão Recrutados

O recrutamento dos voluntários será conduzido nos ambientes acadêmicos da **Universidade de Brasília (UnB)**, contemplando o campus UnB Gama (FGA) e o campus Darcy Ribeiro:
1. **Comunidades e Grupos Universitários:** Divulgação em canais institucionais e grupos de mensagens de cursos de exatas e tecnologia (Engenharia de Software, Ciência da Computação, Engenharia Eletrônica e Engenharia Automotiva);
2. **Abordagem Direta:** Convite formal a discentes que cursam disciplinas com laboratórios de sistemas operacionais baseados em Linux;
3. **Imparcialidade:** É critério mandatório que nenhum dos participantes convidados tenha qualquer participação no desenvolvimento do projeto de IHC do Grupo 08 ou nas decisões prévias de design da equipe.

### 2.2 Perfil dos Participantes

O perfil dos voluntários está estritamente alinhado ao **Perfil 1: Estudante / Usuário Comum em Busca de Suporte** e à persona primária **Lucas Mendonça**, elicitados no projeto:
- **Faixa Etária:** 18 a 28 anos;
- **Escolaridade:** Ensino Superior em andamento;
- **Experiência com Linux:** Usuários iniciantes a intermediários (com tempo de uso entre alguns meses e 2 anos), que utilizam o sistema para estudos, programação ou navegação;
- **Hábito em Fóruns:** Pessoas que já recorreram a fóruns técnicos (como Diolinux Plus, Viva o Linux, Stack Overflow ou fóruns de distribuições) para buscar soluções de erros ou comandos de terminal.

### 2.3 Justificativa Teórica da Quantidade de Participantes

Para as avaliações formativas de Nível 1, a equipe estabeleceu uma amostragem de **3 participantes para a avaliação de Storyboards** e **3 participantes para a avaliação de Análise de Tarefas**, totalizando até 6 sessões empíricas independentes.

Essa quantidade está rigorosamente amparada pela literatura canônica de Usabilidade:

1. **Modelo de Nielsen e Landauer (1993) e Nielsen (2000):** Em testes qualitativos de usabilidade, a curva de descoberta de problemas segue uma função assintótica expressa por $ProblemsFound(i) = N(1 - (1 - \lambda)^i)$. Conforme demonstrado por Jakob Nielsen, **3 a 5 participantes são suficientes para revelar cerca de 80% a 85% dos problemas de usabilidade mais relevantes** de uma interface ou modelo conceitual. A inclusão de um número superior a 5 participantes em ciclos formativos rápidos gera retornos decrescentes de novas informações, aumentando o esforço operacional sem ganhos proporcionais de diagnóstico;
2. **Recomendações de Steve Krug (2010):** Em testes rápidos de baixa fidelidade, testar com 3 a 4 usuários em ciclos iterativos curtos (*"testar cedo e com frequência"*) é muito mais eficaz do que conduzir uma avaliação única com dezenas de voluntários ao final do projeto;
3. **Barbosa e Silva (2021, p. 280):** Enfatizam que, na prototipação de baixa fidelidade, o propósito reside em coletar impressões e identificar falhas estruturais de raciocínio, não sendo necessária uma amostra probabilística volumosa.

---

## 3. Modalidade da Avaliação: Presencial vs. Remota

A equipe optou pela **modalidade remota síncrona** por meio da plataforma **Google Meet**, pelas seguintes justificativas técnicas:

- **Flexibilidade de Agendamento:** Facilita a conciliação de horários entre estudantes universitários com rotinas acadêmicas distintas;
- **Capacidade de Compartilhamento em Alta Resolução:** Permite exibir as pranchas dos storyboards digitalizadas em **300 DPI** diretamente na tela do participante em formato 1080p, permitindo leitura confortável de cada quadrinho;
- **Garantia de Registro Fidedigno:** A gravação audiovisual nativa em nuvem viabiliza o registro fidedigno do consentimento verbal do TCLE (nos primeiros 60 segundos) e a captura detalhada das reações espontâneas dos voluntários para posterior análise de conteúdo.

---

## 4. Equipamentos e Infraestrutura Necessária

A realização das sessões demandará a seguinte infraestrutura:

- **Equipamentos dos Avaliadores e Participantes:**
  - Microcomputador ou notebook com processador capaz de rodar videoconferência;
  - Conexão banda larga estável à Internet (mínimo de 10 Mbps);
  - Microfone e câmera ativados durante toda a sessão;
  - Tela de visualização com resolução mínima de 1920x1080 pixels;
- **Ambiente Físico:** Ambiente silencioso, com iluminação adequada e livre de distrações externas;
- **Softwares e Plataformas:**
  - Navegador web moderno (Google Chrome, Firefox, Brave ou Edge);
  - Google Meet (para transmissão e gravação da chamada);
  - Google Sheets / Documentos (para preenchimento concomitante da planilha de registro pelo observador).

---

## 5. Orçamento e Declaração de Custo Zero

A Tabela 2 apresenta o demonstrativo orçamentário formal do projeto de avaliação.

**Tabela 2** — Demonstrativo Financeiro e Orçamento da Avaliação

| Item / Recurso | Tipo | Custo Unitário | Custo Total | Justificativa |
| :--- | :---: | :---: | :---: | :--- |
| **Plataforma de Videoconferência (Google Meet)** | Software | R$ 0,00 | R$ 0,00 | Conta institucional fornecida pela Universidade de Brasília (UnB). |
| **Armazenamento de Vídeos (YouTube - Não Listado)** | Hospedagem | R$ 0,00 | R$ 0,00 | Plataforma pública gratuita com regime de privacidade restrito. |
| **Equipamentos de Computação e Internet** | Hardware / Rede | R$ 0,00 | R$ 0,00 | Infraestrutura pessoal já de propriedade dos alunos envolvidos. |
| **Remuneração dos Avaliadores e Participantes** | Mão de obra | R$ 0,00 | R$ 0,00 | Atividade estritamente acadêmica de voluntariado e extensão. |
| **Digitalização dos Storyboards** | Serviço | R$ 0,00 | R$ 0,00 | Scanner pessoal em alta definição (300 DPI). |
| **Total Geral** | — | — | **R$ 0,00** | **Declaração Formal de Custo Zero para o Projeto** |

_Fonte: Elaborada pelos autores, 2026._

---

## 6. Recursos Humanos e Papéis da Equipe

Para garantir a confiabilidade da coleta de dados e evitar sobrecarga cognitiva, cada sessão contará com a divisão em **duas funções operacionais distintas** (Barbosa & Silva, 2021):

1. **Entrevistador Principal:**
   - Responsável por recepcionar o voluntário, iniciar a gravação oficial e ler integralmente o **Script Oral do TCLE**;
   - Conduz o roteiro de perguntas abertas, projeta os artefatos na tela e estimula o participante a verbalizar seus pensamentos (*Think-Aloud*);
   - Mantém postura neutra e acolhedora, sem induzir respostas ou justificar eventuais falhas do sistema.
2. **Observador / Anotador:**
   - Permanece com microfone fechado para não intimidar o participante;
   - Preenche em tempo real a **Planilha de Registro de Problemas do Avaliador**, anotando o tempo de hesitação, expressões faciais de dúvida e comentários espontâneos;
   - Cronometra a duração da sessão para não ultrapassar o tempo estipulado de 20 a 30 minutos.

---

## 7. Cronograma Integrado de Sessões de Avaliação

A execução empírica foi dividida em duas etapas consecutivas: a realização obrigatória do **Teste-Piloto** e as **Sessões Oficiais de Avaliação com Usuários**.

### 7.1 Cronograma do Teste-Piloto

Conforme exigido pelo Plano de Ensino da disciplina (Itens 11 e 12), o teste-piloto será realizado previamente para validar os equipamentos, a temporização do TCLE e a clareza do roteiro.

**Tabela 3** — Cronograma do Teste-Piloto de Nível 1

| Tipo de Avaliação | Data | Horário | Entrevistador | Observador | Participante (Piloto) | Local / Link |
| :--- | :---: | :---: | :--- | :--- | :--- | :--- |
| **Teste-Piloto: Storyboard** | 13/10/2026 | 13:00 - 13:30 | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant) | Colega discente de TI | Google Meet |
| **Teste-Piloto: Análise de Tarefas** | 13/10/2026 | 13:30 - 14:00 | [Edvaldo Soares](https://github.com/PajeMurici-dev) | [Gustavo Antonio](https://github.com/gus-ant) | Colega discente de TI | Google Meet |

_Fonte: Elaborada pelos autores, 2026._

> ⚠️ **Cláusula Metodológica Obrigatória:** O teste-piloto tem como função exclusiva avaliar o planejamento e o protocolo. **Os dados coletados no teste-piloto JAMAIS serão computados ou apresentados nos resultados finais da avaliação dos usuários.**

---

### 7.2 Cronograma das Sessões Oficiais de Avaliação do Storyboard

A Tabela 4 detalha as 3 sessões planejadas para a avaliação formativa dos Storyboards com usuários reais.

**Tabela 4** — Cronograma das Sessões de Avaliação do Storyboard

| Sessão | Data | Horário | Storyboard Avaliado | Entrevistador Principal | Observador / Anotador | Participante Recrutado | Local / Plataforma |
| :---: | :---: | :---: | :--- | :--- | :--- | :--- | :--- |
| **S01** | 13/10/2026 | 14:00 - 14:30 | Storyboard 1 (Markdown e Tags) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Gustavo Antonio](https://github.com/gus-ant) | Participante 1 (Graduando UnB) | [Google Meet](https://meet.google.com/placeholder-s01) |
| **S02** | 13/10/2026 | 15:00 - 15:30 | Storyboard 2 (Cadastro e Onboarding) | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Participante 2 (Graduando UnB) | [Google Meet](https://meet.google.com/placeholder-s02) |
| **S03** | 13/10/2026 | 16:00 - 16:30 | Storyboard 3 (Busca Avançada) | [Edvaldo Soares](https://github.com/PajeMurici-dev) | [Gustavo Antonio](https://github.com/gus-ant) | Participante 3 (Graduando UnB) | [Google Meet](https://meet.google.com/placeholder-s03) |

_Fonte: Elaborada pelos autores, 2026._

---

### 7.3 Cronograma das Sessões Oficiais de Avaliação da Análise de Tarefas

A Tabela 5 detalha as 3 sessões planejadas para a avaliação formativa dos modelos de Análise de Tarefas (HTA e CMN-GOMS).

**Tabela 5** — Cronograma das Sessões de Avaliação da Análise de Tarefas

| Sessão | Data | Horário | Tarefa Investigada | Entrevistador Principal | Observador / Anotador | Participante Recrutado | Local / Plataforma |
| :---: | :---: | :---: | :--- | :--- | :--- | :--- | :--- |
| **T01** | 13/10/2026 | 17:00 - 17:30 | Tarefa 1 (Publicação de Tópicos) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | [Edvaldo Soares](https://github.com/PajeMurici-dev) | Participante 4 (Graduando UnB) | [Google Meet](https://meet.google.com/placeholder-t01) |
| **T02** | 13/10/2026 | 18:00 - 18:30 | Tarefa 2 (Cadastro e Onboarding) | [Gustavo Antonio](https://github.com/gus-ant) | [Edvaldo Soares](https://github.com/PajeMurici-dev) | Participante 5 (Graduando UnB) | [Google Meet](https://meet.google.com/placeholder-t02) |
| **T03** | 13/10/2026 | 19:00 - 19:30 | Tarefa 3 (Busca e Filtros) | [Edvaldo Soares](https://github.com/PajeMurici-dev) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | Participante 6 (Graduando UnB) | [Google Meet](https://meet.google.com/placeholder-t03) |

_Fonte: Elaborada pelos autores, 2026._

---

## 8. Lista de Verificação da Técnica (Questões Práticas e Cronograma)

A Tabela 6 apresenta o checklist de conformidade frente aos critérios avaliativos da disciplina.

**Tabela 6** — Lista de Verificação das Questões Práticas e Cronograma

| Item / Critério Avaliado | Fonte Normativa | Conforme? | Resposta Autoexplicativa e Evidência no Documento |
| :---: | :--- | :---: | :--- |
| **1** | O perfil dos usuários recrutados está definido e fundamentado na pesquisa de perfil? | Plano de Ensino (Item 5); Barbosa & Silva (2021) | ✅ Sim | A Seção 2.2 restringe os participantes ao Perfil 1 (Estudantes universitários usuários de Linux). |
| **2** | A quantidade de participantes está declarada e justificada teoricamente? | Plano de Ensino (Item 5); Nielsen (2000) | ✅ Sim | A Seção 2.3 fundamenta a amostra de 3 a 5 participantes na fórmula assintótica de Nielsen e Landauer (1993). |
| **3** | A modalidade (presencial ou remota) está explícita com justificativa de viabilidade? | Plano de Ensino (Item 5) | ✅ Sim | A Seção 3 detalha a opção pelo Google Meet com suporte a vídeo em 1080p e facilidade de agendamento. |
| **4** | Foram especificados todos os equipamentos e recursos necessários para os testes? | Plano de Ensino (Item 5) | ✅ Sim | A Seção 4 discrimina computadores, conexões, softwares e plataformas de registro. |
| **5** | Há declaração orçamentária demonstrando os custos envolvidos? | Plano de Ensino (Item 5) | ✅ Sim | A Tabela 2 apresenta o demonstrativo orçamentário formal comprovando Custo Zero (R$ 0,00). |
| **6** | Os papéis de mão de obra da equipe de avaliação foram claramente divididos? | Barbosa & Silva (2021); DECIDE | ✅ Sim | A Seção 6 divide expressamente as funções entre Entrevistador Principal e Observador/Anotador. |
| **7** | Há cronograma detalhado de datas, horários e locais para Storyboard e Análise de Tarefas? | Plano de Ensino (Item 8) | ✅ Sim | As Tabelas 4 e 5 especificam as sessões completas S01 a S03 e T01 a T03 com links do Google Meet. |

_Fonte: Elaborada pelos autores, 2026._

---

## 9. Histórico de Versão

A Tabela 7 documenta as versões deste artefato.

**Tabela 7** — Histórico de Versão

| Versão | Data | Descrição Detalhada da Modificação | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 13/10/2026 | Elaboração inicial das questões práticas e cronograma consolidado da avaliação de Nível 1 (Issue #62), com perfil de recrutamento, justificativa teórica amostral (Nielsen, 2000), orçamento zero, divisão de papéis e tabelas de cronograma para Storyboard e Análise de Tarefas. | [Gustavo Antonio](https://github.com/gus-ant) | [Edvaldo Soares](https://github.com/PajeMurici-dev), [Vinicius Silva Araruna](https://github.com/ViniciusA05) |

_Fonte: Elaborada pelos autores, 2026._

---

## 10. Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. 1. ed. Rio de Janeiro: Elsevier / Campus, 2010.

[2] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

[3] KRUG, Steve. *Não me faça pensar: uma abordagem de bom senso à usabilidade na web*. 2. ed. Rio de Janeiro: Alta Books, 2010.

[4] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[5] NIELSEN, Jakob; LANDAUER, Thomas K. A mathematical model of the finding of usability problems. In: *Proceedings of the INTERACT'93 and CHI'93 Conference on Human Factors in Computing Systems*. Amsterdam: ACM, 1993. p. 206–213.

[6] NIELSEN, Jakob. *Why You Only Need to Test with 5 Users*. Nielsen Norman Group, 2000. Disponível em: <https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/>. Acesso em: 13 out. 2026.

[7] ROGERS, Yvonne; SHARP, Helen; PREECE, Jennifer. *Design de Interação: além da interação humano-computador*. 3. ed. Porto Alegre: Bookman, 2013.

[8] SALES, André Barros de. *Plano de Ensino da Disciplina de Interação Humano-Computador*. Brasília: Universidade de Brasília, Faculdade UnB Gama, 2026.

---

## Agradecimentos e Uso de Inteligência Artificial (IA) Generativa

Durante a formatação deste documento, foram utilizados recursos de Inteligência Artificial Generativa (Antigravity LLM / Gemini) exclusivamente para o apoio sintático na diagramação das matrizes tabulares em Markdown. A concepção dos critérios de recrutamento, o cálculo da justificativa amostral, a definição das datas das sessões e as diretrizes operacionais foram idealizadas, estruturadas e auditadas pelos membros da equipe.

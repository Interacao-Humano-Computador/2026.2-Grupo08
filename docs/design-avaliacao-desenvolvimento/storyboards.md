## Storyboard 3 – Grade de Disponibilidade e Agendamento de Reuniões no Fórum Diolinux

### Problema

*Carlos, estudante e usuário iniciante de Linux, enfrentou uma falha crítica de inicialização (GRUB/bootloader) após uma atualização do sistema. As respostas em texto no fórum não foram suficientes para diagnosticar o erro em seu hardware específico. Ao encontrar um tópico publicado por um membro experiente da comunidade Diolinux, ele percebe que o autor disponibilizou horários para reuniões. Carlos precisa consultar a grade de disponibilidade, selecionar um horário vago e agendar uma reunião sem conflitos de agenda.*

### Por que o estudante usa essa funcionalidade?

**Story 1 – Suporte técnico por meio de reuniões**

*Como usuário iniciante de distribuições Linux, preciso agendar uma reunião com um membro experiente da comunidade para receber orientações sobre a recuperação do sistema, selecionando um horário disponibilizado pelo autor do tópico.*

**Story 2 – Disponibilização de horários pelo autor do tópico**

*Como membro experiente da comunidade Diolinux, desejo disponibilizar horários para reuniões diretamente no tópico que publiquei, permitindo que outros usuários agendem conversas para esclarecer dúvidas e compartilhar conhecimentos.*

**Story 3 – Organização e confirmação de reuniões**

*Como usuário do fórum, preciso visualizar os horários disponíveis, confirmar o agendamento e receber os detalhes da reunião, garantindo que o horário escolhido seja reservado e não possa ser agendado por outra pessoa.*

### Visão geral do storyboard (sequência de quadros)

| # | Cena (descrição) | Comentários de design |
|---|------------------|-----------------------|
| **1** | **Publicação do tópico e disponibilização de horários** – Mariana publica um tópico no fórum Diolinux para ajudar outros usuários com dúvidas sobre Linux. Na página do tópico, ela acessa a opção "Disponibilizar Horários" e seleciona os períodos em que pode realizar reuniões. | Botão de fácil identificação e formulário simples para cadastrar datas e horários. |
| **2** | **Visualização dos horários disponíveis** – Carlos acessa o tópico de Mariana e encontra a opção "Agendar Reunião". Ao clicar, visualiza a grade com os dias e horários disponibilizados pela autora. | Calendário organizado, legenda clara e diferenciação visual entre horários disponíveis e reservados. |
| **3** | **Seleção de um horário livre** – Carlos consulta a grade e seleciona o horário de quinta-feira, às 19h30. O sistema destaca o bloco selecionado para que ele confira a data e o horário antes de continuar. | Feedback visual imediato, áreas de clique adequadas e prevenção de seleções equivocadas. |
| **4** | **Descrição do motivo da reunião** – O sistema apresenta um formulário para que Carlos informe o assunto da reunião, descrevendo brevemente a falha de inicialização do Linux e as tentativas de solução realizadas. | Campos objetivos, instruções claras e indicação dos campos obrigatórios. |
| **5** | **Revisão dos dados do agendamento** – Carlos visualiza um resumo contendo o título do tópico, o nome da autora, a data, o horário e a descrição da dúvida. Em seguida, clica em "Confirmar Agendamento". | Resumo das informações antes da confirmação e possibilidade de voltar para corrigir os dados. |
| **6** | **Confirmação e reserva do horário** – O sistema verifica se o horário continua disponível e registra o agendamento. O bloco selecionado passa para o estado "Reservado", impedindo que outro usuário marque o mesmo horário. | Prevenção de agendamentos duplicados e feedback imediato sobre o resultado da operação. |
| **7** | **Exibição dos detalhes da reunião** – Carlos recebe uma mensagem de sucesso e visualiza um resumo com a data, o horário, o tópico relacionado e as informações de acesso à reunião, quando disponibilizadas pela autora. | Mensagem de confirmação clara e acesso fácil aos detalhes do agendamento. |
| **8** | **Realização da reunião** – No horário combinado, Carlos e Mariana se encontram na plataforma de comunicação definida para a reunião e discutem a falha de inicialização. Com as orientações recebidas, Carlos consegue avançar na resolução do problema. | Conclusão satisfatória da tarefa, incentivo à colaboração e fortalecimento da comunidade Diolinux. |

**Legenda:** Representa a sequência de quadros da funcionalidade de Grade de Disponibilidade e Agendamento de Reuniões vinculada aos tópicos do fórum Diolinux (Issue #64).

![Storyboard (300 DPI)](assets/storyboards/storyboard_busca_avancada.png)
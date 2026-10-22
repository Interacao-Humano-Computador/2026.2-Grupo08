# Planejamento do Relato dos Resultados da Avaliação da Análise de Tarefas

## Objetivos
- Consolidar os achados da avaliação de usabilidade realizada nas tarefas do HTA.
- Evidenciar os principais problemas encontrados e propor melhorias concretas.
- Fornecer um documento estruturado que sirva de base para a redação do relatório final da entrega 4.

## Perfil dos Participantes / Avaliadores
- **Participantes**: estudantes de graduação em áreas de Computação/Engenharia, com idade entre 18 e 28 anos, usuários habituais de ambientes web.
- **Avaliadores**: membro da equipe de desenvolvimento (Edvaldo Soares Brasileiro Filho) e professor orientador, com experiência em avaliação heurística e análise de tarefas.

## Tarefas HTA Testadas (Tarefa 3 – Grade de Disponibilidade e Agendamento)
| # | Tarefa (HTA) |
|---|--------------|
| 1 | Localizar botão de agendamento no perfil do mentor |
| 2 | Inspecionar matriz semanal e selecionar bloco de horário vago |
| 3 | Preencher formulário de descrição da dúvida técnica e ambiente |
| 4 | Confirmar agendamento e verificar bloqueio do slot na grade |

## Classificação de Severidade (Escala Nielsen 0‑4)
| Severidade | Descrição |
|------------|-----------|
| 0 | Não é um problema (nice‑to‑have)
| 1 | Pequeno incômodo, impacto mínimo
| 2 | Problema moderado, afeta eficiência
| 3 | Problema sério, impede a tarefa ou gera erros frequentes
| 4 | Catástrofe, bloqueia a tarefa completamente

## Propostas de Correção
- **Localização da grade**: destacar botão primário e badge de disponibilidade no perfil (severidade 2).
- **Seleção de horários**: aumentar área de toque dos blocos para atender à Lei de Fitts e indicar status por cor WCAG (severidade 2).
- **Prevenção de conflitos**: aplicar lock temporário de 3 minutos no slot durante o preenchimento do formulário (severidade 3).
- **Confirmação e integração**: exibir toast com link da sala de reunião e exportação para calendário .ics (severidade 1).

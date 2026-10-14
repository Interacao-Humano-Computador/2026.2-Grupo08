# Roteiro de Observação do Avaliador

## Objetivo
Registrar de forma sistemática as ações, hesitações, erros e tempos de execução dos participantes durante a sessão de teste de tarefas.

## Instruções para o Avaliador
- Observe silenciosamente o participante enquanto ele executa a tarefa.
- Anote, a cada ação relevante, o tempo (em segundos) desde o início da tarefa.
- Marque **H** quando houver hesitação perceptível (ex.: o usuário pausa por mais de 2 s sem avançar).
- Marque **E** quando o usuário cometer um erro (ex.: clicar em botão errado, inserir busca inválida).
- Avalie a **severidade** do problema encontrado usando a escala Nielsen 0‑4.
- Priorize correções de acordo com a gravidade e frequência.

## Modelo de Planilha de Registro (CSV)

```
Tarefa,Tempo (s),Hesitação (Y/N),Erro (Y/N),Severidade (0‑4),Prioridade (Alta/Média/Baixa)
"Busca avançada",12,Y,N,2,Alta
"Aplicar filtro",8,N,Y,3,Média
"Navegação resultados",15,Y,Y,4,Alta
```

> Salve a planilha como `observacao-avaliador.csv` e mantenha‑a no diretório `docs/design-avaliacao-desenvolvimento/assets/observacao/`.

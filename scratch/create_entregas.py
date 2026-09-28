import os

base_dir = r"e:\IHC\2026.2-Grupo08\docs\entregas"
os.makedirs(base_dir, exist_ok=True)

entregas = {
    1: "Planejamento do Projeto, Equipe, Sites Avaliados, Site Selecionado, Ferramentas, Processo de Design e Cronogramas.",
    2: "Perfil do Usuário, Aspectos Éticos (TCLE), Cenários e Análise de Tarefas.",
    3: "Princípios Gerais de Projeto, Metas de Usabilidade, Guia de Estilo e Características da Plataforma.",
    4: "Planejamento da Avaliação do Storyboard e Análise de Tarefas, e Planejamento do Relato dos Resultados.",
    5: "Relato dos Resultados do Storyboard e da Análise de Tarefas, e Planejamento da Avaliação do Protótipo de Papel.",
    6: "Relato dos Resultados do Protótipo de Papel e Planejamento da Avaliação do Protótipo de Alta Fidelidade.",
    7: "Relato dos Resultados da Avaliação do Protótipo de Alta Fidelidade.",
    8: "Verificação e Validação dos Artefatos (Resultado Final do Projeto)."
}

for i in range(1, 9):
    content = f"""# Entrega {i}

## Conteúdo da Entrega

A **Entrega {i}** aborda os seguintes tópicos do projeto de Interação Humano-Computador:
- {entregas[i]}

## Artefatos e Links

*(Os links diretos para os artefatos desta entrega devem ser organizados aqui)*

---
### Tabela de Contribuição e Gravação

| Atividade / Gravação | Link de Acesso |
| :--- | :--- |
| **Apresentação em Vídeo (Entrega {i})** | *(Inserir link do YouTube Não Listado)* |
| **Reuniões de Alinhamento** | [Atas de Reunião](../atas/index.md) |
"""
    file_path = os.path.join(base_dir, f"entrega{i}.md")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

print("Arquivos criados com sucesso!")

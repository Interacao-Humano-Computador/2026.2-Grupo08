# Storyboard 2 — Criação e Publicação de Evento Presencial da Comunidade (CF02)

## Tabela de Contribuição

| Integrante | Contribuição no Artefato | Data | Revisor | Ferramenta de IA e Contribuição |
| :--- | :--- | :---: | :---: | :--- |
| [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant) | Roteiro, painéis, anotações por quadro e prompt de referência visual do Storyboard da Tarefa 2 (Criação de Eventos Presenciais) | 22/10/2026 | [Vinicius Silva Araruna](https://github.com/ViniciusA05) | LLM: apoio na estruturação do roteiro e do prompt de inspiração; desenho final feito à mão pelo autor |

---

## 1. Introdução e Fundamentação

Este storyboard traduz a **Tarefa 2 do HTA** ([Análise de Tarefas](../../../analise-requisitos/analise-tarefas.md)) em uma narrativa visual de **8 quadros**, usada como protótipo de papel de baixa fidelidade (Nível 1) para avaliação com usuários.

Seguindo o *OCR Guide to Storyboards* (OCR, 2020):

- **Natureza do produto:** a funcionalidade é um produto **não linear** (interface gráfica com escolhas do usuário). Por isso cada quadro documenta *conteúdo de tela*, *vista inicial*, *interação do usuário* e *layout*, e não câmera ou iluminação, que são campos de produtos lineares como vídeo.
- **Estrutura de cada quadro:** o guia define duas partes: a **sequência de cenas** e a **informação textual de cada cena**. Cada painel abaixo tem desenho e campos de texto.
- **Formato:** o guia considera típico de 1 a 6 painéis por página. Usaremos **2 páginas de 4 quadros**, totalizando 8 quadros e atendendo à faixa de 6 a 8 quadros do planejamento da avaliação, digitalizados em 300 DPI.
- **Desenho:** o guia diz que boa habilidade de desenho não é essencial. Bonecos de palito bastam desde que a história fique clara. Setas indicam movimento e interação.
- **Regra do guia:** o storyboard é documento de *planejamento* e **não deve conter telas do produto final**. Os quadros são croquis e não capturas de interface pronta.
- **Controle de versão:** o guia recomenda manter a versão original intacta e nomear as versões. Os arquivos seguem o padrão `storyboard_eventos_v1`, `v2`, e assim por diante.

---

## 2. Roteiro Narrativo

**Persona:** [Lucas Mendonça](../../../analise-requisitos/personas.md), 23 anos, estudante de Engenharia de Software, usuário Linux avançado e membro ativo da comunidade.

**Problema:** Lucas quer organizar um meetup presencial de Linux no campus, mas não sabe como divulgar, controlar o limite de vagas e emitir ingressos sem planilhas e grupos de mensagem soltos.

**Objetivo (HTA, nó 0):** criar e publicar um evento presencial completo, com programação, local no mapa, lotação, ingressos e link de divulgação.

---

## 3. Modelo de Quadro (Template)

Cada quadro segue o *Example 2* do guia, adaptado a produtos não lineares:

| Campo | Descrição |
| :--- | :--- |
| **Nº / Nome do quadro** | Identificação e título curto |
| **Nó do HTA** | Operação da Tarefa 2 que o quadro representa |
| **Cena** | O que acontece e onde o personagem está |
| **Conteúdo de tela** | Elementos visíveis (primeiro plano, navegação, banners, mapa) |
| **Vista inicial** | O que o usuário vê antes de interagir |
| **Interação** | Botões, campos, arrastar e soltar, alternadores |
| **Feedback do sistema** | Resposta visível à ação |
| **Fala / Pensamento** | Balão de fala ou pensamento do personagem |
| **Seta** | Direção do movimento ou da interação |

---

## 4. Quadros do Storyboard

### Página 1 — Descoberta, dados e local (quadros 1 a 4)

| Campo | Quadro 1 — A ideia | Quadro 2 — Iniciar criação |
| :--- | :--- | :--- |
| **Nó do HTA** | 0 (input) | 1.1 / 1.2 |
| **Cena** | Lucas, no quarto, com o notebook e um adesivo de pinguim (Linux). Pensa em reunir a turma para um meetup. | Lucas acessa a plataforma e procura onde criar o evento. |
| **Conteúdo de tela** | Nenhuma tela ainda. Balão de pensamento com ícone de pessoas e pinguim. | Barra de navegação com a aba **Eventos**. Calendário de eventos e botão destacado **+ Criar Evento**. |
| **Vista inicial** | Quarto, notebook fechado. | Hub de Eventos com lista de próximos encontros. |
| **Interação** | — | Clique em **+ Criar Evento** (ou, alternativamente, menu do avatar e depois *Meus Eventos > Novo*). |
| **Feedback do sistema** | — | Abre o formulário em etapas, com indicador de progresso (1 de 5). |
| **Fala / Pensamento** | *"Preciso de um jeito simples de organizar isso."* | *"Achei o botão logo de cara."* |
| **Seta** | Do balão para o notebook. | Do cursor para o botão **+ Criar Evento**. |

| Campo | Quadro 3 — Dados gerais e programação | Quadro 4 — Local e capacidade |
| :--- | :--- | :--- |
| **Nó do HTA** | 2.1, 2.2, 2.3, 2.4 | 3.1, 3.2, 3.3, 3.4 |
| **Cena** | Lucas preenche o formulário do evento. | Lucas define onde o evento acontece e quantas pessoas cabem. |
| **Conteúdo de tela** | Campos de título (com exemplo "1º Meetup Linux & Kernel de Brasília"), tags, bloco visual **Adicionar Horário/Palestrante**, área de upload do banner (1200x630) e seletor de data, hora e fuso. | Campo de endereço com sugestões automáticas, mapa com pin arrastável, campo "sala/bloco" e campo de lotação máxima com opção de lista de espera. |
| **Vista inicial** | Formulário vazio, etapa 2 de 5 ativa. | Etapa 3 de 5, mapa centralizado na cidade. |
| **Interação** | Digitar, adicionar blocos, enviar imagem, escolher datas. | Digitar endereço, escolher sugestão, arrastar pin, digitar número de vagas. |
| **Feedback do sistema** | Contador de caracteres, prévia do banner e aviso se o término for anterior ao início. Rascunho salvo automaticamente. | Pin posicionado, endereço formatado e rota estimada. Aviso de limite de vagas. |
| **Fala / Pensamento** | *"Dá para montar a programação sem mexer em Markdown."* | *"O mapa já achou o auditório do campus."* |
| **Seta** | Do banner para a prévia ao lado. | Do campo de endereço para o pin no mapa. |

### Página 2 — Ingressos, revisão e divulgação (quadros 5 a 8)

| Campo | Quadro 5 — Ingressos | Quadro 6 — Revisar prévia |
| :--- | :--- | :--- |
| **Nó do HTA** | 4.1, 4.2, 4.3 | 5.1 |
| **Cena** | Lucas escolhe se o evento será gratuito ou pago. | Lucas confere como o evento aparecerá para os participantes. |
| **Conteúdo de tela** | Alternador **Gratuito / Pago**. No modo gratuito, limite de ingressos por pessoa. No modo pago, preço, chave Pix e demonstrativo de taxas. | Prévia lado a lado em celular e desktop, com botão **Voltar e Editar**. |
| **Vista inicial** | Alternador em "Gratuito". | Página do evento montada com banner, mapa e programação. |
| **Interação** | Alternar modalidade, definir limite ou preço. | Rolar a prévia, alternar celular e desktop, voltar para editar. |
| **Feedback do sistema** | Demonstrativo: valor do ingresso, taxa retida e valor líquido por vaga. | Prévia fiel ao resultado final, sem perder os dados preenchidos. |
| **Fala / Pensamento** | *"Vai ser gratuito, com limite de 2 por pessoa."* | *"No celular também ficou bom."* |
| **Seta** | Do alternador para o painel que muda. | Do botão **Voltar e Editar** para a etapa anterior (seta tracejada). |

| Campo | Quadro 7 — Publicar | Quadro 8 — Link e QR Code |
| :--- | :--- | :--- |
| **Nó do HTA** | 5.2 | 5.3 |
| **Cena** | Lucas confirma a publicação. | Lucas recebe os materiais de divulgação e compartilha com a turma. |
| **Conteúdo de tela** | Botão **Publicar Evento Agora** e modal de celebração. | Link curto, botão copiar, QR Code de check-in para baixar e aviso do tópico criado no fórum. |
| **Vista inicial** | Resumo final com todas as etapas marcadas como concluídas. | Modal de sucesso aberto. |
| **Interação** | Um clique em publicar. O botão fica desabilitado após o clique para evitar duplicidade. | Copiar link, baixar QR Code, abrir tópico de discussão. |
| **Feedback do sistema** | Mensagem de sucesso e criação automática do tópico "Discussão Oficial do Evento". | Confirmação "Link copiado" e e-mail com kit de divulgação. |
| **Fala / Pensamento** | *"Publicado! Agora é divulgar."* | *"Já mando o QR Code no grupo da turma."* |
| **Seta** | Do botão para o modal de sucesso. | Do QR Code para um celular de outro personagem. |

---

## 5. Lista de Recursos (Assets) e Materiais

Conforme o guia, o storyboard também serve para listar o que será necessário na produção:

- **Personagens:** Lucas (principal) e um segundo personagem que recebe o QR Code (apenas no quadro 8).
- **Cenários:** quarto/mesa de estudo (quadros 1 e 2) e telas desenhadas como croquis (quadros 2 a 8).
- **Elementos de interface a desenhar:** botão **+ Criar Evento**, indicador de etapas, formulário, área de upload, mapa com pin, alternador Gratuito/Pago, modal de sucesso e QR Code.
- **Cores sugeridas:** lápis preto para contornos e **uma cor de destaque** (azul `#0084FF`, igual ao guia de estilo do projeto) para botões e feedback. Isso mantém coerência com a identidade visual.
- **Materiais:** folha A4 dividida em 4 quadros por página, lápis, caneta fine liner, régua, marcador azul e scanner a 300 DPI.

---

## 6. Rastreabilidade

| Quadro | Nó do HTA | Problema de IHC tratado (Tabela 6 da Análise de Tarefas) |
| :---: | :---: | :--- |
| 2 | 1.1 / 1.2 | Recurso "Eventos" escondido na navegação |
| 3 | 2.2 / 2.3 / 2.4 | Formatação de cronograma, peso do banner e validação de datas |
| 4 | 3.1 a 3.4 | Erros de geocodificação e falta de clareza ao esgotar vagas |
| 5 | 4.1 a 4.3 | Falta de transparência sobre taxas |
| 6 | 5.1 | Erros percebidos apenas após publicar |
| 7 | 5.2 | Duplo clique gerando publicações duplicadas |
| 8 | 5.3 | Organizador não salvar link e QR Code |

---

## 7. Prancha Visual do Storyboard 2

A Figura 1 apresenta a prancha visual com a sequência narrativa completa dos 8 quadros do Storyboard 2 desenhada manualmente por Gustavo Antonio Rodrigues e Silva.

<div style="text-align: center; margin: 1.5rem 0;">
    <img src="../../../assets/storyboards/storyboard_Gustavo_Antonio.png" alt="Prancha do Storyboard 2 desenhada à mão por Gustavo Antonio" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 1px solid #CBD5E1;" />
    <p style="font-size: 0.85rem; color: #64748B; margin-top: 0.5rem;"><strong>Figura 1</strong> — Prancha original do Storyboard 2 desenhada manualmente em papel por Gustavo Antonio Rodrigues e Silva (8 quadros, 300 DPI). <em>Fonte: Gustavo Antonio Rodrigues e Silva, 2026.</em></p>
</div>

---

## 8. Registros Audiovisuais (Teste-Piloto e Avaliação Oficial)

A Tabela 7 consolida os registros audiovisuais em vídeo das sessões práticas de validação do Storyboard 2 conduzidas por Gustavo Antonio, hospedadas no YouTube em modalidade Não Listado.

**Tabela 7** — Registros audiovisuais do Storyboard 2 (Teste-Piloto e Avaliação com Usuário)

| Etapa | Objetivo / Atividade | Responsável | Participante | Data | Vídeo no YouTube |
| :---: | :--- | :--- | :---: | :---: | :--- |
| **Teste-Piloto** | Calibração instrumental de enquadramento, áudio e temporização do script oral do TCLE (< 60s) | [Gustavo Antonio](https://github.com/gus-ant) | Simulação Solo | 22/10/2026 | [Assistir no YouTube (K5jVAyq4hAY)](https://youtu.be/K5jVAyq4hAY) |
| **Avaliação Oficial** | Sessão de avaliação formativa presencial do Storyboard 2 via entrevista semiestruturada | [Gustavo Antonio](https://github.com/gus-ant) | Participante P2 | 23/10/2026 | [Assistir no YouTube (VhGgpfX9Rqk)](https://youtu.be/VhGgpfX9Rqk) |

_Fonte: Elaborada por [Gustavo Antonio Rodrigues e Silva](https://github.com/gus-ant), 2026._

### Vídeo 1 — Gravação do Teste-Piloto do Storyboard 2 (Gustavo Antonio)

<div style="text-align: center; margin: 1.5rem 0;">
    <iframe width="100%" height="450" src="https://www.youtube-nocookie.com/embed/K5jVAyq4hAY" title="Teste-Piloto Storyboard 2 - Gustavo Antonio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 8px; max-width: 800px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"></iframe>
    <p style="font-size: 0.85rem; color: #64748B; margin-top: 0.5rem;"><strong>Vídeo 1</strong> — Registro em vídeo do Teste-Piloto do Storyboard 2. <em>Fonte: Gustavo Antonio Rodrigues e Silva, 2026.</em></p>
</div>

### Vídeo 2 — Gravação da Avaliação do Storyboard 2 (Gustavo Antonio)

<div style="text-align: center; margin: 1.5rem 0;">
    <iframe width="100%" height="450" src="https://www.youtube-nocookie.com/embed/VhGgpfX9Rqk" title="Avaliação do Storyboard 2 - Gustavo Antonio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 8px; max-width: 800px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"></iframe>
    <p style="font-size: 0.85rem; color: #64748B; margin-top: 0.5rem;"><strong>Vídeo 2</strong> — Registro em vídeo da Avaliação Formativa com Participante do Storyboard 2. <em>Fonte: Gustavo Antonio Rodrigues e Silva, 2026.</em></p>
</div>

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 22/10/2026 | Criação do roteiro de 8 quadros, modelo de quadro, rastreabilidade com o HTA e prompt de inspiração visual (#104) | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |
| `1.1` | 23/10/2026 | Inclusão dos registros audiovisuais do Teste-Piloto e da Avaliação com Usuário do Storyboard 2 no YouTube. | [Gustavo Antonio](https://github.com/gus-ant) | [Vinicius Silva Araruna](https://github.com/ViniciusA05) |

---

## Referências Bibliográficas

[1] OCR. *The OCR Guide to Storyboards: Skills Guide, Version 2*. Cambridge: Oxford Cambridge and RSA Examinations, 2020.

[2] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Rio de Janeiro: Autopublicação, 2021.

---

## Agradecimentos e Uso de Inteligência Artificial Generativa

Foi utilizado apoio de LLM na estruturação do roteiro, das tabelas e do prompt de referência visual. O desenho final dos quadros, as falas e a validação do fluxo com o HTA são de autoria do integrante responsável. Imagens geradas por IA servem apenas como inspiração e não fazem parte do artefato entregue.

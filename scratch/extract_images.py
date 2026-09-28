import fitz
import os

pdf_path = r"e:\IHC\LIVROS IHC\pdfcoffee.com_interaao-humano-computador-5-pdf-free.pdf"
out_dir = r"e:\IHC\2026.2-Grupo08\docs\assets\referencias"

targets = [
    {
        "name": "aspectos_eticos_principios",
        "queries": ["princípio da autonomia", "princípio da beneficência", "princípio da não maleficência", "princípio da justiça"],
        "pages": range(130, 150)
    },
    {
        "name": "aspectos_eticos_tcle",
        "queries": ["termo de consentimento livre e esclarecido", "permissão para gravar a voz ou imagem", "Antes de iniciar uma avaliação"],
        "pages": range(130, 150)
    },
    {
        "name": "perfil_usuario_atributos",
        "queries": ["idade (criança", "experiência (leigo", "atitudes (tecnófilos", "tarefas primárias", "perfil de usuário", "dados demográficos"],
        "pages": range(160, 180)
    },
    {
        "name": "cenarios_elementos",
        "queries": ["ambiente ou contexto", "atores", "objetivos", "planejamento", "ações", "eventos", "avaliação"],
        "pages": range(170, 200)
    },
    {
        "name": "analise_tarefas_hta",
        "queries": ["Análise Hierárquica de Tarefas", "Hierarchical Task Analysis", "HTA", "objetivo", "subobjetivo", "plano"],
        "pages": range(170, 210)
    },
    {
        "name": "analise_tarefas_goms",
        "queries": ["GOMS", "Goals, Operators, Methods, and Selection rules", "Keystroke", "KLM"],
        "pages": range(180, 220)
    }
]

def extract_and_highlight():
    doc = fitz.open(pdf_path)
    for target in targets:
        saved = False
        for p in target["pages"]:
            if saved: break
            page = doc.load_page(p)
            text = page.get_text("text").lower()
            
            # Check if any query is on this page
            found = False
            for q in target["queries"]:
                if q.lower() in text:
                    found = True
                    break
                    
            if found:
                # Highlight all found queries on this page
                for q in target["queries"]:
                    instances = page.search_for(q)
                    for inst in instances:
                        annot = page.add_highlight_annot(inst)
                        annot.update()
                
                # Save page as image
                pix = page.get_pixmap(matrix=fitz.Matrix(2, 2)) # higher res
                out_path = os.path.join(out_dir, f"{target['name']}_pg{p}.png")
                pix.save(out_path)
                print(f"Saved {out_path}")
                saved = True

if __name__ == "__main__":
    extract_and_highlight()

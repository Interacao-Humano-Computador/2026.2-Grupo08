import fitz
import sys

def search_pdf(pdf_path, queries):
    try:
        doc = fitz.open(pdf_path)
    except Exception as e:
        print(f"Error opening PDF: {e}")
        return

    results = {q: [] for q in queries}
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        text = page.get_text("text")
        text_lower = text.lower()
        for q in queries:
            if q.lower() in text_lower:
                results[q].append((page_num, text[:200].replace('\n', ' ')))

    for q, res in results.items():
        print(f"--- Matches for '{q}' ---")
        for p, preview in res:
            print(f"Page {p+1}: {preview}...")
        print()

if __name__ == "__main__":
    pdf = r"e:\IHC\LIVROS IHC\pdfcoffee.com_interaao-humano-computador-5-pdf-free.pdf"
    queries = [
        "atributos de um perfil",
        "idade (criança, jovem",
        "aspectos éticos",
        "beneficência",
        "gravar a voz ou imagem",
        "termo de consentimento",
        "elementos constitutivos",
        "análise hierárquica",
        "GOMS",
        "Keystroke"
    ]
    search_pdf(pdf, queries)

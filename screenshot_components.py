from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto('https://plus.diolinux.com.br/')
        # Accept cookies or wait
        page.wait_for_timeout(3000)
        
        # 1. Botão Criar Tópico
        criar_btn = page.locator('#create-topic')
        if criar_btn.count() > 0:
            criar_btn.first.screenshot(path='docs/assets/images_prints/btn_criar_topico.png')
            
        # 2. Badges de categoria
        badge = page.locator('.badge-category.clear-badge').first
        if badge.count() > 0:
            badge.screenshot(path='docs/assets/images_prints/badges_categoria.png')
            
        # 3. Banner de moderação / banner
        banner = page.locator('#banner').first
        if banner.count() > 0:
            banner.screenshot(path='docs/assets/images_prints/banner_moderacao.png')
            
        # 4. Barra lateral de tópicos (sidebar)
        sidebar = page.locator('.sidebar-wrapper').first
        if sidebar.count() > 0:
            sidebar.screenshot(path='docs/assets/images_prints/barra_lateral.png')
            
        browser.close()

if __name__ == '__main__':
    run()

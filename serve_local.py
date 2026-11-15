import html.parser
import mkdocs.structure.pages

class SafeHandler(html.parser.HTMLParser):
    def __init__(self):
        super().__init__()
        self.present_anchor_ids = set()
    def handle_starttag(self, tag, attrs):
        for k, v in attrs:
            if k == 'id' or (k == 'name' and tag == 'a'):
                self.present_anchor_ids.add(v)

mkdocs.structure.pages._HTMLHandler = SafeHandler

from mkdocs.__main__ import cli
cli(["serve", "-a", "127.0.0.1:8000"])

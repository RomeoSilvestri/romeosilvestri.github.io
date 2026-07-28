# Romeo Silvestri — Portfolio

Source for [romeosilvestri.github.io](https://romeosilvestri.github.io), built with Jekyll and the al-folio theme.

## Content structure

- `_pages/`: site pages
- `_projects/`: portfolio entries
- `_posts/`: blog posts
- `_news/`: announcements
- `_data/` and `_bibliography/`: structured profile and publication data
- `assets/`: public images, documents, fonts, styles and scripts

The repository keeps only the source needed to publish the website plus the deployment workflow and build dependencies.

## Preview locale con Docker

1. Avvia Docker Desktop.
2. Dalla cartella della repository, esegui `docker compose up --build`.
3. Apri `http://127.0.0.1:4000/` nel browser.

Per fermare la preview, premi `Ctrl+C`. Alle esecuzioni successive basta `docker compose up`.

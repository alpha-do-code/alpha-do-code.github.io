# assets

Fichiers statiques du portfolio.

## CV

- **`cv-mamadou-alpha-balde.pdf`** : le CV téléchargeable. Le bouton « Télécharger le CV »
  du hero pointe dessus. Tant que le fichier est absent, `script.js` masque le bouton.
- **`cv-source.html`** : la source du PDF. Généré avec Chrome :

  ```
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
    --headless=new --no-pdf-header-footer --virtual-time-budget=6000 \
    --print-to-pdf="assets/cv-mamadou-alpha-balde.pdf" \
    "file://$(pwd)/assets/cv-source.html"
  ```

  Contenu tiré de `~/jarvis-starter-kit/carriere/cv.md`, sans les notes ni la mention.

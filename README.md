# Mini Lavka

Static restaurant website with Russian, Latvian and English content, menu categories and an animated photo gallery. No installation or build step is required.

## Project structure

- `index.html` — page structure and content containers.
- `assets/css/styles.css` — site, gallery and logo heading styles.
- `assets/js/main.js` — translations, menu data, ordering dialog and site interactions.
- `assets/js/gallery.js` — slideshow, controls, touch gestures and motion preferences.
- `assets/images/` — optimized gallery photos and existing website images.
- `.nojekyll` — tells GitHub Pages to serve the static files directly.

Image filenames use content hashes to avoid duplicate files. Gallery image paths are in `index.html`; menu and favourites image paths are in the `IMG` object in `assets/js/main.js`.

## Preview

Open `index.html` in your browser. Keep the `assets` folder alongside it. You can also run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

Google Fonts requires an internet connection; the site uses fallback fonts offline.

## Publish to GitHub Pages

Copy this folder's **contents** into the root of the `lukdymek/MiniLavka` checkout. Keep the checkout's existing `.git` directory. Upload the HTML and all assets together:

```bash
git add index.html assets README.md .nojekyll
git commit -m "Separate website styles, scripts and images"
git push origin HEAD
```

GitHub Pages should use the repository branch and `/ (root)` as its publishing source.

## Add or replace photos

Place optimized images in `assets/images/` and update the gallery's `<img>` paths in `index.html`. Existing gallery photos have smaller and larger variants in `srcset`. Update both `src` and `srcset` when replacing a photo. The JavaScript automatically picks up the slide elements; add or remove the matching dot button in `.gallery-dots` as needed.

Keep high-resolution original photos outside the published website. WebP images around 640–1200 pixels wide are sufficient for the current gallery layout.

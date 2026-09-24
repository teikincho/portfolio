# Zhang Dijin — Portfolio

Static portfolio website with Chinese and English language switching.

## Preview locally

Open `index.html` in a browser, or serve this directory with:

```sh
python3 -m http.server 8000
```

## Publish with GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys the site to GitHub Pages whenever a commit is pushed to `main`. In the repository's **Settings → Pages**, set the build and deployment source to **GitHub Actions** if GitHub Pages has not been enabled yet.

## Image delivery and project content

- Pages use WebP previews, responsive detail images, and lazy loading; original PNG files remain available for full-size links.
- To regenerate display images, run `python3 scripts/optimize-images.py` with Pillow installed.
- Home title glyphs are marked `translate="no"`; use the built-in EN / 中文 control for the page language.
- `assets/experience.js` contains bilingual UX reading guides based on the screens shown in each project. Add research findings and outcome measurements only after confirming the source.
- To show the Calvin Klein All in one live-product panel, add the official mini program QR image and set `qrSrc` in `assets/project-links.js`. An empty value keeps the panel hidden.

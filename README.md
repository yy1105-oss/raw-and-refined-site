# Raw and Refined — Website

A self-hosted rebuild of the [Raw and Refined](https://sites.google.com/view/rawandrefined/home) Google Site, as plain HTML/CSS/JS so it can be hosted on GitHub Pages (or any static host) and customized freely.

## Structure

```
site/
├── index.html                     Home
├── about.html                     About
├── contact.html                   Contact / designer bio
├── projects/
│   ├── index.html                 Residential Projects overview
│   ├── villa-mariposa.html
│   ├── anderson-residence.html
│   ├── camila-mcconaughey.html
│   ├── casa-bella.html
│   └── catalogue-set-design.html
├── assets/
│   ├── css/style.css               All styling (one file, uses CSS variables)
│   ├── js/main.js                  Nav + dropdown behavior
│   └── img/                        All photos, organized by page/project
├── CNAME                           Custom domain: rawandrefinedco.com
└── .nojekyll                       Tells GitHub Pages to skip Jekyll processing
```

No build step — it's plain static HTML. Edit any `.html` file directly, or edit `assets/css/style.css` for site-wide styling (colors and fonts are defined as CSS variables at the top of the file).

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `rawandrefined-site`).
2. From inside this `site/` folder:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
4. **Settings → Pages → Custom domain**: enter `rawandrefinedco.com` and save (this matches the `CNAME` file already in the repo). Check "Enforce HTTPS" once the certificate is issued (can take up to ~24h).

## Point your domain at GitHub Pages

At your domain registrar / DNS provider for `rawandrefinedco.com`, add these records (replace `<your-username>` with your GitHub username):

**Apex domain (`rawandrefinedco.com`)** — add four `A` records pointing to GitHub Pages' IPs:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**`www` subdomain** (optional, if you want `www.rawandrefinedco.com` to work too) — add a `CNAME` record:
```
www.rawandrefinedco.com  →  <your-username>.github.io
```

DNS changes can take a few minutes to a few hours to propagate.

## Notes on the conversion

- All photography was pulled from the original Google Site and re-hosted locally under `assets/img/`.
- Copy (headlines, bios, project descriptions) was carried over as-is from the original pages.
- Generic social icons (LinkedIn, Instagram, email) were rebuilt as inline SVG rather than re-downloaded, since Google's icon assets aren't proprietary to the site.
- The "Residential Projects" dropdown now also links to a `projects/index.html` overview page, which the original Google Site didn't have — a small usability addition, easy to remove if you'd rather keep it dropdown-only.

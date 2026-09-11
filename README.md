# sushiwush1.github.io

Personal site of Kanishka Yadav, HR and People Operations. Live at https://sushiwush1.github.io.

Built with Vite, React 19, TypeScript and CSS Modules. Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Editing content

All visible text lives in `src/content/`:

| File | What it holds |
|---|---|
| `site.ts` | Name, contact links, page titles, SEO description and keywords, footer text |
| `home.ts` | Hero, info cards, how I work, numbers, testimonials |
| `experience.ts` | Jobs and degrees |
| `about.ts` | About paragraphs, tools, capabilities, outside of work |
| `work.ts` | Work write-ups shown on `/work` |
| `notes.ts` | Notes shown on `/notes` |
| `contact.ts` | Contact page, FAQ, 404 text |

Testimonials stay hidden until real quotes are added to the `testimonials` array in `home.ts`.

## Commands

```bash
npm install
npm run dev        # local development
npm run build      # type check, build, per-page SEO HTML, sitemap, llms.txt
npm run preview    # serve the production build
npm run lint
npm run optimize-images   # regenerate headshots from assets-src/headshot.png
npm run og-image          # regenerate the social share image
```

`scripts/seo-build.mjs` runs after every build. It writes a real HTML file for each route with its own title, description, canonical link and structured data, and generates `sitemap.xml`, `llms.txt` and `llms-full.txt` from `src/content`, so adding a work item or note updates all of them automatically.

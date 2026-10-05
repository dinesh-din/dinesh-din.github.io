# Portfolio

A fast, static personal portfolio built with [Astro](https://astro.build).

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Make it yours

1. **`src/site.ts`**: your name, tagline, about text, email, links and skills. This feeds the whole site.
2. **`src/content/projects/*.md`**: one file per project. Front matter controls the card (title, summary, status, stack, optional `repo` and `demo` links). The body is the case study.
3. **`astro.config.mjs`**: set `site` to your real URL before deploying.
4. **`src/styles/global.css`**: colors and fonts are CSS variables at the top.

## Deploy

Any static host works. Easiest options: Vercel, Netlify, Cloudflare Pages, or GitHub Pages. Point the host at this repo with build command `npm run build` and output directory `dist`.

## Adding a project

Create `src/content/projects/my-project.md`:

```md
---
title: My Project
summary: One sentence on what it does.
status: shipped        # shipped | in-progress | planned
order: 4
stack: [TypeScript, React]
repo: https://github.com/you/my-project
demo: https://my-project.example.com
---

Write the case study here.
```

## Adding photos and more content

Everything in the `public/` folder is served from the site root. Drop files in, then point to them.

- **Profile photo:** copy `profile.jpg` into `public/`, then in `src/site.ts` set `photo: '/profile.jpg'`. A square image works best.
- **Resume:** copy `resume.pdf` into `public/`, then set `resume: '/resume.pdf'`. A Resume button appears in the hero.
- **Project screenshots:** copy images into `public/images/projects/`. In a project's front matter add:

  ```yaml
  image: /images/projects/rag-cover.png      # shown on the card and top of the page
  gallery: [/images/projects/rag-1.png, /images/projects/rag-2.png]   # grid at the bottom
  ```

- **Experience:** add jobs to the `experience` list in `src/site.ts`. The section and nav link appear once it has entries.
- **More writing:** project pages are Markdown, so you can add headings, lists, code blocks, and images with `![alt text](/images/projects/diagram.png)`.

Keep images under about 500 KB each (resize or compress them first) so the site stays fast.

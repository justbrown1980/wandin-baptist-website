# Wandin Baptist Church

Astro site with [Keystatic](https://keystatic.com/) CMS and Tailwind CSS v4.

Live domain: `wandinbaptistchurch.com.au`

**Editing content?** See [EDITING.md](EDITING.md) for a step-by-step guide for church staff.

## Local development

```bash
npm install
npm run dev
```

- Site: http://127.0.0.1:4321
- Keystatic admin (local file storage): http://127.0.0.1:4321/keystatic

## Content model

Editable in Keystatic under `src/content/`:

| Type | Keystatic name | Purpose |
| --- | --- | --- |
| Singleton | Site Settings | Address, phone, email, Giving/YouTube/Maps URLs, logo |
| Singleton | Home / Pastor / Contact / Safe Church / Child Safe / Privacy | Page content |
| Collection | Beliefs | Statement of faith items |
| Collection | History Events | Timeline entries |
| Collection | Ministries | Shared ministries section |

- **Local mode** during `npm run dev` (writes to disk)
- **GitHub mode** in production on Vercel (commits to the repo)

Copy `.env.example` to `.env` for production GitHub auth values.

## Deploy on Vercel

1. Push this repository to GitHub (e.g. `wandinbaptistchurch/wandinbaptistchurch.github.io`).
2. Import the repo in [Vercel](https://vercel.com). Framework preset: **Astro**. Build command `npm run build` (Node 22+).
3. Add environment variables from `.env.example`:
   - `PUBLIC_KEYSTATIC_GITHUB_REPO`
   - `KEYSTATIC_GITHUB_CLIENT_ID`
   - `KEYSTATIC_GITHUB_CLIENT_SECRET`
   - `KEYSTATIC_SECRET`
   - `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`
4. Connect Keystatic to GitHub (Keystatic Cloud or a GitHub OAuth app) and grant the repo to that app.
5. Give editors **write** access on the GitHub repo so they can sign in at `/keystatic`.
6. Confirm the edit loop: change content in `/keystatic` → GitHub commit → Vercel rebuild → live page updates.
7. Add the custom domain `wandinbaptistchurch.com.au` in the Vercel project settings and point DNS there (replace the previous GitHub Pages `CNAME` setup).
8. Soft-launch on the Vercel preview URL, then cut over DNS.

Legacy `*.html` URLs redirect to clean paths via `vercel.json`.

## QA checklist (cutover)

- [ ] All routes render: `/`, `/our-beliefs`, `/wandin-baptist-history`, `/meet-the-pastor`, `/contact-us`, `/safe-church`, `/child-safe-policy`, `/privacy`
- [ ] Ministries section appears on each page
- [ ] PDFs open from Safe Church links
- [ ] Giving, YouTube, Maps, and OAIC privacy links work
- [ ] Contact email shows `wandinbaptist@gmail.com` (no obfuscation script)
- [ ] Google verification file present: `/google1aad7b13f9170355.html`
- [ ] Sitemap generated (`/sitemap-index.xml`)
- [ ] Mobile nav opens/closes; history timeline animates on scroll
- [ ] `/keystatic` works locally; GitHub login works on Vercel after env vars are set
- [ ] Old `*.html` URLs 301 to clean paths

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start local Astro + Keystatic |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |

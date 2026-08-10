# How to edit the Wandin Baptist Church website

Content is managed in **Keystatic**, a simple admin panel. You do not need to edit HTML or code for normal updates.

---

## Two ways to edit

### 1. On the live site (recommended for most people)

1. Open: `https://wandinbaptistchurch.com.au/keystatic`  
   (Use your real site URL if it differs.)
2. Sign in with **GitHub** when prompted.
3. You must be invited as a **collaborator with write access** on the church’s GitHub repository.
4. Edit content, then **Save**.
5. Keystatic creates a commit in GitHub. **Vercel rebuilds the site** automatically (usually a few minutes).
6. Refresh the public page to see your changes.

### 2. On a computer (for developers)

```bash
npm install
npm run dev
```

Then open http://127.0.0.1:4321/keystatic  

Changes save to files on your computer. Someone still needs to commit and push them to GitHub for the live site to update.

---

## What you can edit

In the Keystatic sidebar you will see **singletons** (one page each) and **collections** (lists of items).

### Site Settings

Use this for details shared across the whole site:

| Field | What it controls |
| --- | --- |
| Church name | Name in the header and footer |
| Service time | e.g. Sundays 10am |
| Address lines | Street address in the footer / contact |
| Phone / Email / Postal address | Contact details |
| Maps / Giving / YouTube URLs | External links |
| Copyright years | Footer copyright |
| Logo | Header logo image |

Tip: Update the **copyright end year** each January.

### Home Page

| Field | What it controls |
| --- | --- |
| Hero headline / subline | Large text on the first screen |
| Primary CTA label & href | Main button (e.g. link to Beliefs) |
| YouTube CTA label | YouTube button text |
| Hero image | Full-bleed background photo |
| Gallery images + alt text | Photos below the welcome text |
| Intro content | Welcome paragraphs |

### Meet the Pastor

- Page title, name, photo, photo alt text  
- Biography (rich text)

### Contact Page

- Page title and short intro  
- Phone, email, postal address, and maps still come from **Site Settings**

### Safe Church

- Page title and body text  
- Labels and paths for the two PDF downloads  
- Keep PDF paths like `/2020 Wandin Baptist Safe Church And Child Safe Policy with logo.pdf` unless you also replace the file in `public/`

### Child Safe Policy / Privacy Policy

- Page title, heading, and full policy body text

---

## Collections (lists)

### Beliefs

Each belief has:

- **Title** — e.g. “The Holy Spirit”
- **Order** — lower numbers appear first (1, 2, 3…)
- **Body** — the paragraph text

To add a belief: create a new entry, fill title/body/order, save.  
To remove one: delete that entry in Keystatic.

### History Events

Each timeline entry has:

- **Title** — internal name (can match the year)
- **Date label** — what visitors see (e.g. `1988` or `1995—2005`)
- **Order** — chronological order (1 = oldest)
- **Body** — the story for that period

### Ministries

Shown at the bottom of every page:

- **Title** — e.g. Ladies’ Bible Study  
- **Schedule** — when it meets  
- **Order** — display order  
- **Description** — longer explanation  

---

## Editing tips

### Saving and publishing

1. Make your edits in Keystatic.  
2. Click **Save** (and create/commit the change if GitHub asks).  
3. Wait for Vercel to finish deploying.  
4. Check the live page in a private/incognito window if you still see old content (browser cache).

### Images

- Prefer clear photos of the church, people, or ministries.  
- Fill in **alt text** for gallery/pastor photos (short description for accessibility).  
- Very large images slow the site down; aim for under ~1–2 MB when you can.

### Rich text (Markdoc)

Longer fields support simple formatting:

- Paragraphs  
- Headings  
- Bullet lists  
- Links  

Keep formatting simple so pages stay easy to read.

### Links that are *not* in Keystatic

These are set in the site code / Site Settings, not as separate pages:

- Main menu items (Home, Beliefs, History, etc.)  
- Footer “Quick navigation”  
- **Giving** button → Site Settings → Giveway URL  
- **YouTube** → Site Settings → YouTube URL  

If you need a new menu item, ask whoever maintains the site code.

### PDFs (Safe Church)

1. Upload/replace the PDF in the project’s `public/` folder (or ask a developer).  
2. Update the PDF label/path fields on the **Safe Church** page in Keystatic so the link matches the filename.  
3. Keep the old filename if possible so existing bookmarks still work.

---

## Common tasks

| Task | Where to edit |
| --- | --- |
| Change Sunday service time | Site Settings → Service time (and Home hero subline if needed) |
| Update phone or email | Site Settings |
| Change pastor bio or photo | Meet the Pastor |
| Add a new ministry | Ministries → Create entry |
| Add a history year | History Events → Create entry (set Order carefully) |
| Fix a belief paragraph | Beliefs → open that entry |
| Update privacy wording | Privacy Policy |
| Change Giving link | Site Settings → Giving / Giveway URL |
| Replace homepage hero photo | Home Page → Hero image |

---

## Who can edit?

Anyone with:

1. Access to `/keystatic` on the live site, and  
2. **Write** permission on the GitHub repository used by Keystatic.

To add an editor: invite them to the GitHub repo with write access. They sign in with that GitHub account.

---

## If something goes wrong

| Problem | What to try |
| --- | --- |
| Can’t sign in | Confirm you have GitHub write access; try another browser |
| Saved but site unchanged | Wait a few minutes for Vercel; hard-refresh the page |
| Broken image | Re-upload the image in Keystatic; check the field is filled |
| Broken PDF link | Check the path on Safe Church matches the file name in `public/` |
| Accidental bad change | Ask a maintainer to revert the latest GitHub commit, or restore from an earlier version |

For technical setup (Vercel, GitHub, environment variables), see [README.md](README.md).

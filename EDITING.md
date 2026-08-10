# Complete guide: editing the website with Keystatic

This guide explains how church staff and volunteers can update the Wandin Baptist Church website using **Keystatic** — without writing code.

**Repository:** [justbrown1980/wandin-baptist-website](https://github.com/justbrown1980/wandin-baptist-website)

---

## 1. How editing works (simple picture)

```text
You edit in Keystatic  →  Save  →  GitHub stores the change
                                      ↓
                              Vercel rebuilds the site
                                      ↓
                              Visitors see the update
```

- Keystatic is the **admin panel** (forms for text, images, lists).
- Content is stored as files in the GitHub repo (not a separate database).
- After you save on the live site, the public pages usually update within a few minutes.

You do **not** need to know Git, Astro, or HTML for normal updates.

---

## 2. Before you start: get access

Editors need two things:

1. A **GitHub account** (free): [https://github.com/signup](https://github.com/signup)
2. **Write access** to the church website repository:  
   `justbrown1980/wandin-baptist-website`

### How an admin invites a new editor

1. Open the repo: [https://github.com/justbrown1980/wandin-baptist-website](https://github.com/justbrown1980/wandin-baptist-website)
2. Go to **Settings → Collaborators** (or **Manage access**).
3. Click **Add people**.
4. Enter their GitHub username or email.
5. Give them **Write** permission (not just Read).
6. They accept the invite from their email or GitHub notifications.

Until they accept and have Write access, they will not be able to save changes in Keystatic on the live site.

---

## 3. Open Keystatic (live site)

1. Go to:

   `https://wandinbaptistchurch.com.au/keystatic`

   If the custom domain is not live yet, use your Vercel URL instead, for example:

   `https://your-project.vercel.app/keystatic`

2. Click to **sign in with GitHub**.
3. Approve access if GitHub asks.
4. You should land on the Keystatic dashboard with a list of content areas in the sidebar.

**Tip:** Bookmark the `/keystatic` address.

---

## 4. Tour of the dashboard

In the left sidebar you will see two kinds of content:

### Singletons (one record each)

Use these for whole pages or global settings:

| Sidebar label | What it is |
| --- | --- |
| **Site Settings** | Church-wide details (phone, email, address, Giving link, logo…) |
| **Home Page** | Homepage hero, welcome text, gallery photos |
| **Meet the Pastor** | Pastor page |
| **Contact Page** | Contact page intro text |
| **Safe Church** | Safe Church hub page + PDF link labels/paths |
| **Child Safe Policy** | Full child safe policy page |
| **Privacy Policy** | Privacy page |

### Collections (many items)

| Sidebar label | What it is |
| --- | --- |
| **Beliefs** | Each belief statement (list on `/our-beliefs`) |
| **History Events** | Each timeline entry (list on `/wandin-baptist-history`) |
| **Ministries** | Each ministry (shown at the bottom of every page) |

Click a sidebar item to open it and edit.

---

## 5. Basic editing workflow (every change)

Follow this every time:

1. Open `/keystatic` and sign in.
2. Click the content you want (e.g. **Home Page** or **Ministries**).
3. Change the fields (text, images, order numbers, etc.).
4. Click **Save** (wording may be “Create”, “Update”, or “Commit” depending on context).
5. If GitHub mode asks you to confirm a commit / branch, accept/save so the change is written to the repo.
6. Wait for Vercel to deploy (often 1–3 minutes).
7. Open the public page and refresh.  
   If it still looks old, try a private/incognito window or a hard refresh (`Cmd+Shift+R` on Mac, `Ctrl+Shift+R` on Windows).

### Good habits

- Make **one clear change at a time** when you are learning (easier to undo).
- After saving, **check the live page** before doing more edits.
- Prefer plain language; keep formatting simple.
- Do not delete content unless you are sure — prefer editing existing items.

---

## 6. Editing each content type

### 6.1 Site Settings

**Use for:** anything shared across many pages.

| Field | Controls |
| --- | --- |
| Church name | Header and footer name |
| Service time | e.g. `Sundays 10am` |
| Address line 1 / 2 / 3 | Street address in the footer |
| Phone | Footer + Contact page |
| Email | Contact page email link |
| Postal address | Contact page postal details |
| Maps directions URL | “Map directions” links |
| Giving / Giveway URL | Header **Giving** button |
| YouTube URL | Homepage YouTube button |
| Copyright start / end year | Footer copyright |
| Logo | Header logo image |

**Example:** To change the phone number, edit **Site Settings → Phone → Save**. Both the footer and Contact page update after deploy.

**Year tip:** Update **Copyright end year** each January.

---

### 6.2 Home Page

**Public URL:** `/`

| Field | Controls |
| --- | --- |
| Hero headline | Large title over the hero photo |
| Hero subline | Line under the title (often the service time) |
| Primary CTA label | Main button text |
| Primary CTA href | Where that button goes (e.g. `/our-beliefs`) |
| YouTube CTA label | YouTube button text |
| Hero image | Full-bleed background photo |
| Gallery image 1–3 | Photos in the welcome section |
| Gallery image 1–3 alt | Short descriptions for accessibility |
| Intro content | Welcome paragraphs (rich text) |

**Example:** Replace the hero photo → **Home Page → Hero image** → upload → Save.

If you change service times, update both:

- **Site Settings → Service time**
- **Home Page → Hero subline** (if it also shows the time)

---

### 6.3 Meet the Pastor

**Public URL:** `/meet-the-pastor`

| Field | Controls |
| --- | --- |
| Page title | Banner title |
| Name | Display name under/near the photo |
| Photo | Portrait image |
| Photo alt text | Description of the photo |
| Biography | Life story / bio (rich text) |

---

### 6.4 Contact Page

**Public URL:** `/contact-us`

| Field | Controls |
| --- | --- |
| Page title | Banner title |
| Intro | Short intro text |

Phone, email, postal address, and maps come from **Site Settings**, not from this page alone.

---

### 6.5 Safe Church

**Public URL:** `/safe-church`

| Field | Controls |
| --- | --- |
| Page title | Banner title |
| Body | Main explanation text |
| Policy PDF label | Link text for the policy PDF |
| Policy PDF path | URL path to the file (usually starts with `/`) |
| Procedure PDF label | Link text for the procedures PDF |
| Procedure PDF path | URL path to the file |

There is also a fixed link on this page to the **Child Safe Policy** web page (`/child-safe-policy`).

#### Updating a PDF

1. Replace the PDF file in the project `public/` folder (a developer may need to do this), **or** upload via your normal GitHub/Vercel workflow.
2. Keep the filename the same if possible, so old links still work.
3. If the filename changes, update **Policy PDF path** / **Procedure PDF path** in Keystatic to match, for example:

   `/2020 Wandin Baptist Safe Church And Child Safe Policy with logo.pdf`

---

### 6.6 Child Safe Policy

**Public URL:** `/child-safe-policy`

| Field | Controls |
| --- | --- |
| Page title | Browser tab / page title |
| Heading | Main heading on the page |
| Body | Full policy text (rich text) |

---

### 6.7 Privacy Policy

**Public URL:** `/privacy`

| Field | Controls |
| --- | --- |
| Page title | Browser tab / page title |
| Heading | Main heading |
| Body | Privacy wording (rich text), including external links if needed |

---

## 7. Collections: add, edit, reorder, delete

Collections are lists. Each item is a separate entry.

### 7.1 Beliefs

**Public URL:** `/our-beliefs`

Each entry has:

| Field | Meaning |
| --- | --- |
| Title | Belief name (e.g. “The Holy Spirit”) |
| Order | Sort position — **1** first, then 2, 3… |
| Body | The paragraph text |

**Add a belief**

1. Open **Beliefs**.
2. Create a new entry.
3. Enter Title, Order, Body.
4. Save.

**Edit a belief**

1. Open **Beliefs**.
2. Click the existing entry.
3. Edit and Save.

**Reorder beliefs**

Change the **Order** numbers, then Save each affected entry.  
Example: to move an item to the top, set its Order to `1` and bump others as needed.

**Delete a belief**

Open the entry and delete it in Keystatic. Only do this if you intend to remove it from the public page.

---

### 7.2 History Events

**Public URL:** `/wandin-baptist-history`

Each entry has:

| Field | Meaning |
| --- | --- |
| Title (internal) | Name used in the CMS/filename (can match the year) |
| Date label | What visitors see (e.g. `1988`, `1995—2005`, `early 1900's`) |
| Order | Timeline order — **1** = oldest |
| Body | Story for that period |

**Add a new year / period**

1. Open **History Events** → create entry.
2. Set Date label (visitor-facing).
3. Set Order to the correct place in the timeline.
4. Write the Body.
5. Save.

---

### 7.3 Ministries

Shown in the **Ministries** section near the bottom of every page.

Each entry has:

| Field | Meaning |
| --- | --- |
| Title | Ministry name |
| Schedule | When it meets |
| Order | Display order |
| Description | Longer explanation |

**Add a ministry**

1. Open **Ministries** → create entry.
2. Fill Title, Schedule, Order, Description.
3. Save.

Because ministries appear site-wide, a change here updates every page after deploy.

---

## 8. Working with images

Used on Home, Pastor, and Site Settings (logo).

### Upload / replace

1. Open the relevant page in Keystatic.
2. Find the image field (Hero image, Photo, Logo, Gallery image…).
3. Upload the new file (or replace the existing one).
4. Fill **alt text** where the field exists (short, factual description).
5. Save.

### Image tips

- Use clear, well-lit photos of the church, people, or ministries.
- Prefer landscape photos for the hero/banner.
- Keep files reasonably small (about **under 1–2 MB** when possible) so pages load quickly.
- Do not upload private or sensitive documents as “images”.

---

## 9. Rich text formatting (Markdoc fields)

Longer fields (intro, bio, bodies, descriptions) support simple formatting, such as:

- Paragraphs
- Headings
- Bold / emphasis (depending on toolbar)
- Bullet or numbered lists
- Links

### Recommendations

- Keep styles simple and consistent.
- Use headings only when the page is long (policies).
- When adding a link, check it opens the correct page after deploy.
- Avoid pasting messy content from Word — paste as plain text first if formatting looks wrong, then re-apply lightly.

---

## 10. Common tasks (cheat sheet)

| I want to… | Go to… |
| --- | --- |
| Change Sunday service time | **Site Settings** → Service time (+ **Home Page** hero subline if needed) |
| Update phone or email | **Site Settings** |
| Update postal address | **Site Settings** |
| Change Giving button link | **Site Settings** → Giving / Giveway URL |
| Change YouTube link | **Site Settings** → YouTube URL |
| Replace logo | **Site Settings** → Logo |
| Change homepage welcome text | **Home Page** → Intro content |
| Replace homepage hero photo | **Home Page** → Hero image |
| Update pastor bio/photo | **Meet the Pastor** |
| Add or edit a ministry | **Ministries** |
| Add a history timeline entry | **History Events** |
| Fix a belief statement | **Beliefs** |
| Update Safe Church wording | **Safe Church** |
| Update Child Safe Policy text | **Child Safe Policy** |
| Update Privacy Policy | **Privacy Policy** |

---

## 11. What you cannot change in Keystatic

These need a developer / code change:

- Adding or renaming main menu items (Home, Beliefs, History, etc.)
- Changing the overall page design, colours, or fonts
- Adding brand-new page types (e.g. a blog or events calendar)
- Complex forms (contact form backend, online payments beyond the Giving link)
- DNS / domain / Vercel hosting settings

If you need one of these, ask the site maintainer.

---

## 12. Troubleshooting

| Problem | What to try |
| --- | --- |
| “Can’t sign in” / login loop | Confirm you accepted the GitHub invite and have **Write** access. Try another browser or private window. |
| “I can view but not save” | You likely have Read-only access. Ask an admin for Write. |
| Saved, but website looks the same | Wait a few minutes for Vercel. Hard-refresh or use an incognito window. |
| Image missing / broken | Re-upload in Keystatic and Save again. Confirm the image field is not empty. |
| PDF link 404 | Check Safe Church PDF path matches the real filename in `public/`. |
| Formatting looks odd | Simplify the rich text; remove fancy pasted styles. |
| I made a mistake | Ask a maintainer to revert the latest GitHub commit, or restore an earlier version of that content file. |
| Two people editing at once | Avoid this. Last save can overwrite the other person’s work. Coordinate edits. |

---

## 13. Admin notes: turning on live editing (one-time setup)

Editors only need Section 2–12. This section is for whoever sets up hosting.

For Keystatic to work on the **live** Vercel site with GitHub login:

1. Deploy [justbrown1980/wandin-baptist-website](https://github.com/justbrown1980/wandin-baptist-website) to Vercel.
2. Connect Keystatic to GitHub (Keystatic Cloud or a GitHub OAuth App).
3. Add these environment variables in Vercel (see also `.env.example`):

   - `PUBLIC_KEYSTATIC_GITHUB_REPO=justbrown1980/wandin-baptist-website`
   - `KEYSTATIC_GITHUB_CLIENT_ID`
   - `KEYSTATIC_GITHUB_CLIENT_SECRET`
   - `KEYSTATIC_SECRET`
   - `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`

4. Redeploy Vercel after adding variables.
5. Invite editors as GitHub collaborators with Write access.
6. Test: sign in at `/keystatic`, change a harmless field, Save, confirm the live page updates.

Until this setup is finished, editors can still use **local editing** (next section) with a developer’s help.

Official Keystatic docs: [https://keystatic.com/docs](https://keystatic.com/docs)

---

## 14. Local editing (developers / advanced)

Use this when the live `/keystatic` GitHub login is not set up yet, or for technical work.

```bash
git clone git@github.com:justbrown1980/wandin-baptist-website.git
cd wandin-baptist-website
npm install
npm run dev
```

Then open: [http://127.0.0.1:4321/keystatic](http://127.0.0.1:4321/keystatic)

- Saves write to your local files.
- To publish: commit and push to GitHub, then Vercel rebuilds.

```bash
git add .
git commit -m "Update website content"
git push
```

---

## 15. Quick first exercise (recommended)

To gain confidence, try this once:

1. Sign in to `/keystatic`.
2. Open **Site Settings**.
3. Change nothing important — or temporarily tweak **Copyright end year**.
4. Save.
5. Wait for deploy.
6. Check the footer on the live site.
7. Change it back if it was only a test.

Once that works end-to-end, you are ready for real content updates.

---

## Need more help?

- Editing questions → start with this guide’s troubleshooting table.
- Access / invites → repo admin on GitHub.
- Hosting / Keystatic login setup → see [README.md](README.md) and Section 13 above.

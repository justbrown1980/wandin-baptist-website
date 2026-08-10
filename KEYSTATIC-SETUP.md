# Fix Keystatic login on Vercel (HTTP 500)

The public site works.  
`/api/keystatic/github/login` returns **500** because Vercel is missing the GitHub App credentials Keystatic needs.

You only need to do this once.

---

## Step 1 — Create a GitHub App

1. Open: [https://github.com/settings/apps/new](https://github.com/settings/apps/new)
2. Fill in:

| Field | Value |
| --- | --- |
| **GitHub App name** | something unique, e.g. `wandin-baptist-keystatic` |
| **Homepage URL** | `https://wandin-baptist-website.vercel.app` |
| **Callback URL** | `https://wandin-baptist-website.vercel.app/api/keystatic/github/oauth/callback` |
| **Webhook** | **Uncheck** “Active” (disable webhooks) |

3. **Permissions → Repository permissions:**
   - **Contents:** Read and write  
   - **Metadata:** Read-only  
   - **Pull requests:** Read and write  

4. **Where can this GitHub App be installed?**  
   - Only on this account  

5. Click **Create GitHub App**.

---

## Step 2 — Generate a client secret + install the app

On the app page that opens:

1. Note the **App ID** (optional) and the **slug** in the URL:  
   `https://github.com/settings/apps/YOUR-APP-SLUG`  
   → `YOUR-APP-SLUG` is `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`
2. Under **Client secrets**, click **Generate a new client secret**.  
   Copy it immediately (shown once) → `KEYSTATIC_GITHUB_CLIENT_SECRET`
3. Copy **Client ID** → `KEYSTATIC_GITHUB_CLIENT_ID`
4. In the left sidebar, click **Install App** → Install on your account → only the repo  
   **`justbrown1980/wandin-baptist-website`** → Save.

---

## Step 3 — Add environment variables in Vercel

Vercel project → **Settings → Environment Variables** → add these for **Production** (and Preview if you want):

| Name | Value |
| --- | --- |
| `PUBLIC_KEYSTATIC_GITHUB_REPO` | `justbrown1980/wandin-baptist-website` |
| `KEYSTATIC_GITHUB_CLIENT_ID` | *(from GitHub App)* |
| `KEYSTATIC_GITHUB_CLIENT_SECRET` | *(from GitHub App)* |
| `KEYSTATIC_SECRET` | *(random string — see below)* |
| `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` | *(app slug from the URL)* |

Generate `KEYSTATIC_SECRET` locally with:

```bash
openssl rand -base64 32
```

---

## Step 4 — Redeploy

After saving env vars:

1. Vercel → **Deployments** → open the latest → **Redeploy**  
   (or push any small commit)
2. Wait for the deploy to finish.

---

## Step 5 — Sign in

1. Open: https://wandin-baptist-website.vercel.app/keystatic  
2. Click **Log in with GitHub**  
3. Use an account with **Write** access to `justbrown1980/wandin-baptist-website`

If GitHub says the redirect URI is wrong, edit the GitHub App → **Callback URL** and ensure it is exactly:

```text
https://wandin-baptist-website.vercel.app/api/keystatic/github/oauth/callback
```

When you add the custom domain later, add a second callback:

```text
https://wandinbaptistchurch.com.au/api/keystatic/github/oauth/callback
```

---

## Quick check

| URL | Expected |
| --- | --- |
| `/` | Works (public site) |
| `/keystatic` | Login screen |
| `/api/keystatic/github/login` | Redirects to GitHub (not HTTP 500) |

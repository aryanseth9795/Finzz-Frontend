# Finzz website

The public site for the Finzz Android app: one landing page plus the privacy, terms and delete-account pages. Next.js 16 (app router, all static), React 19, Tailwind CSS 4, lucide-react. Hosted on Netlify, which deploys `main`.

## Run it

```powershell
npm ci
npm run dev        # http://localhost:3000
npm run lint
npm test           # unit tests: data, metadata, redirects, assets, claims guard
npm run build
npm start          # serve the production build on :3000
npm run smoke      # checks a running site; set SMOKE_URL for another host
```

In a git worktree, give the worktree its own `npm ci`. A junction to another checkout's `node_modules` breaks Turbopack.

## Where things live

| What | Where |
|---|---|
| Domain, Play link, support email, badge switch | `app/lib/site.ts` |
| All page copy: features, videos, privacy cards, FAQ | `app/lib/content.ts` |
| Page order | `app/page.tsx` |
| Sections | `app/components/sections/*` |
| Shared parts (logo, Play button, phone frame, reveal, headings) | `app/components/ui/*` |
| Colours, fonts, animations | `app/globals.css` (`@theme` tokens) |
| Title, description, share card | `app/lib/metadata.ts`, `app/opengraph-image.tsx` |
| `/download` → Play, video cache header | `next.config.ts` |

## Rules this site keeps

- **One download target:** the Google Play listing (`PLAY_STORE_URL`). `/download` is a 307 to it; use `https://<site>/download` in captions and posters.
- **No unproven claims:** no ratings, user counts, "best" or "#1". `tests/content.test.ts` fails the build's tests if any appear.
- **The App depends on these URLs, so keep them:** `/privacy`, `/terms`, `/delete-account`, and every file in `public/videos/` under its exact name. The videos stream with range requests and `Cache-Control: public, max-age=86400`. On Netlify that header comes from `netlify.toml`, because Netlify serves `public/` files from its CDN and ignores `next.config.ts` `headers()` for them. Keep both rules in step.
- Videos use `preload="none"`, so nothing downloads until someone taps play.
- Content never relies on JavaScript to become visible (`Reveal` only hides things after the page loads).

## To do when things change

- **New domain live:** once `https://finzz.aryanseth.in` serves this site over HTTPS, set `SITE_URL` in `app/lib/site.ts` to it and redeploy. aryantechie.in expires in December 2026.
- **Official Google Play badge:** put Google's badge file in `public/` and set `PLAY_BADGE_SRC` in `app/lib/site.ts` to its path. Until then the site uses its own "Get Finzz on Google Play" button.

## Assets

- **Screenshots:** `public/screens/*.png` are phone-only crops of the Play screenshots in the App repo (`store/screenshots/out`), all 716×1590.
  - `01-chats`, `02-ledger` and `04-expenses` (two-line caption): `crop=716:1590:182:260`.
  - `03-report` and `05`–`08` (one-line caption): `crop=752:1670:164:180,scale=716:1590`.
- **Video posters:** `public/videos/posters/*.jpg`, from the App's `assets/onboarding/video-*.jpg`, scaled to 360×640. The page only sets them when the videos section is near the screen, so they never compete with the hero image. The videos come from the promo kit (`Agent/promo`).
- **QR code:** `public/qr-play.svg` encodes the Play URL. To regenerate it, run `npx qrcode@1.5.4 -t svg -o qr-play.svg "<Play URL>"` (not a dependency).
- **Icons:** from logo A (`public/logo-a.svg`). `app/favicon.ico` holds RGBA PNGs at 16, 32 and 48 px, because Next can't decode ffmpeg's ICO output.

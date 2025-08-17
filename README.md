This Next.js project is a single-page presentation site tailored for Agape — Personality Development School.

Key points

- Single one-page scroll layout with stacked sections (hero, posters, UI, quiz, about, contact).
- TailwindCSS for styling and layout.
- Framer Motion for animations and smooth fades/slides.
- Built with the Next.js App Router and optimized for Vercel.

Replacing images

Create the following folders under `public` and add images with the exact filenames below (or update `app/page.tsx` to point to your filenames):

- `public/posters/poster1.jpg` (poster 1)
- `public/posters/poster2.jpg` (poster 2)
- `public/ui/ui1.png`, `public/ui/ui2.png`, `public/ui/ui3.png` (UI screenshots)
- `public/quiz/quiz-screenshot.png` (quiz app screenshot)

Best practices for images:
- Use optimized web formats: WebP or compressed JPG/PNG.
- Prefer export sizes matching their largest display dimensions (e.g., 1200px wide for hero images).
- Keep filenames stable and update `app/page.tsx` if you choose different names.

Run locally

Open PowerShell in the project root and run:

```powershell
npm install
npm run dev
```

Deployment

Push to a Git repository and import the project in Vercel for automatic deployment.

Notes

- Tailwind directives are declared in `app/globals.css`. If you see "Unknown at rule @tailwind" in your editor, ensure Tailwind is installed and your editor/PostCSS plugin recognizes Tailwind.
- Framer Motion is listed in `package.json`. Run `npm install` to fetch it.


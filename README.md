# Allaa Boumediene – Portfolio

Personal portfolio built with Remix, React, Three.js and Framer Motion.
The design is based on the open-source [portfolio by Hamish Williams](https://github.com/HamishMW/portfolio) (MIT, see `LICENSE`), with my own content, an Experience / Education section, a Skills section and an EmailJS contact form.

## Run locally

```bash
npm install
npm run dev      # http://localhost:7777
npm run build
```

Requires Node 18+ (Node 20 recommended).

## Where to edit things

| What | File |
| --- | --- |
| Name, role, email, GitHub / LinkedIn, EmailJS keys | `app/config.json` |
| Featured projects (3D laptops) and page order | `app/routes/home/home.jsx` |
| "More projects" cards (add a `href` to make one a link) | `app/routes/home/more-projects.jsx` |
| Experience and Education | `app/routes/home/experience.jsx` |
| Skills and tools (icons live in `public/skills/`) | `app/routes/home/skills.jsx` |
| About text and photo | `app/routes/home/profile.jsx`, `app/assets/profile*.jpg` |
| Nav links and social icons | `app/layouts/navbar/nav-data.js` |
| Contact form | `app/routes/contact/contact.jsx` |
| Project PDFs | `public/docs/` |

### Changing a project screenshot

Each featured project needs three images in `app/assets/`: `name.jpg` (800×500), `name-large.jpg` (1920×1200) and `name-placeholder.jpg` (~64×40), all 16:10.

## Contact form (EmailJS)

The form sends through EmailJS from the browser, using the service/template IDs in `app/config.json`.
Your EmailJS template should use the variables `name`, `email`, `subject` and `message`.

## Deploy on Vercel

1. Push this project to GitHub.
2. Import the repo on [vercel.com](https://vercel.com/new). The Remix framework preset is detected automatically.
3. (Optional) add an environment variable `SESSION_SECRET` with any long random string. It signs the light/dark theme cookie.

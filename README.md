# `<the_developer/>`

**Personal portfolio of Muhammad Noman, a frontend developer from Pakistan.**

Built with React 19, Tailwind CSS v4, GSAP and Lenis. Dark terminal-inspired design, fully responsive.

[**Live site**](https://thedevelopernoman-portfolio.vercel.app/) · [GitHub](https://github.com/workpc194) · [Email](mailto:nomitool1419@gmail.com)

</div>

---

## Table of contents

- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Sections](#sections)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Customizing the content](#customizing-the-content)
- [Design system](#design-system)
- [SEO](#seo)
- [Performance and accessibility](#performance-and-accessibility)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Credits](#credits)
- [Contact](#contact)

## About

This portfolio shows what I know and how I learned it: from HTML, CSS and JavaScript fundamentals, through React and Redux Toolkit, to GSAP animation. Every project listed here is a real repository on my GitHub, and the learning timeline reflects my actual path.

I'm currently learning **Next.js**, and after that **System Design**.

## Features

- Terminal / code-editor inspired dark theme with a green accent
- Smooth scrolling with **Lenis**, synced with **GSAP ScrollTrigger**
- Custom animated cursor (desktop with a mouse only)
- Interactive **Folder** component for the projects showcase (from React Bits)
- Live Pakistan-time clock in the contact section
- Content-driven: all text, skills, projects and links live in one Redux slice
- Contact via link cards (email, WhatsApp, GitHub, LinkedIn), no form or backend needed
- Responsive layouts for desktop, laptop, tablet and mobile
- SEO-ready: meta tags, Open Graph / Twitter cards, JSON-LD, `robots.txt`, `sitemap.xml`

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | React 19 |
| Build tool | Vite |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| State / data | Redux Toolkit, React-Redux |
| Animation | GSAP, `@gsap/react`, ScrollTrigger |
| Smooth scroll | Lenis |
| Icons | lucide-react, react-icons |
| UI component | React Bits `Folder` |
| Hosting | Vercel |

## Sections

| Section | What it shows |
| --- | --- |
| **Hero** | Introduction, role and quick stats |
| **GitHub data** | Repository counts and learning highlights |
| **Skills** | Core, React, style and motion, tooling |
| **Projects** | Six projects as interactive folders, with source links |
| **Journey** | A `git log`-style timeline of how I learned |
| **Contact** | Link cards, location, local time, availability |
| **Footer** | Navigation, project links, social links |

## Project structure

```text
Portfolio_2/
├── public/                 # Files served as-is at the site root
│   ├── og-image.png        # Social preview image (1200x630)
│   ├── favicon.svg         # Browser tab icon
│   ├── robots.txt          # Rules for search engine crawlers
│   └── sitemap.xml         # List of pages for search engines
├── src/
│   ├── assets/             # Images and fonts processed by Vite
│   ├── components/         # CustomCursor, Navbar, ProjectCard, SkillCard, ContactCard, ...
│   ├── sections/           # Hero, GithubData, Skills, Projects, LearnJourney, Contact, Footer
│   ├── redux/              # store.js and features/dataSlice.js (all site content)
│   ├── reactbit/           # Vendored React Bits Folder component
│   ├── LenisFile.jsx       # Smooth-scroll wrapper
│   ├── App.jsx             # Page composition
│   ├── main.jsx            # Entry point and Redux Provider
│   └── index.css           # Tailwind import, fonts, theme, selection colors
├── index.html              # HTML shell with SEO meta tags
├── vite.config.js
└── package.json
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer
- npm (comes with Node)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/workpc194/Portfolio_2.git

# 2. Move into the folder
cd Portfolio_2

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates an optimized production build in `dist/` |
| `npm run preview` | Serves the production build locally for testing |
| `npm run lint` | Runs ESLint over the project |

## Customizing the content

Almost everything you read on the site comes from `src/redux/features/dataSlice.js`:

| Key | Controls |
| --- | --- |
| `githubData` | The stat counters |
| `skillsData` | Skill groups and tags |
| `projectsData` | Project name, description, tags, source link, accent color |
| `learningData` | Journey timeline entries |
| `contactData` | Contact cards (email, WhatsApp, GitHub, LinkedIn) |

To add a project, add one object to `projectsData`:

```js
{
  id: 7,
  category: 'React • API',
  name: 'My New Project',
  description: 'One or two sentences about what it does.',
  tags: ['React', 'Tailwind CSS'],
  features: ['Feature one', 'Feature two'],
  points: ['Key point one', 'Key point two'],
  source: 'https://github.com/workpc194/my-new-project',
  color: '#7EE787'
}
```

## Design system

**Colors**

| Role | Hex |
| --- | --- |
| Page background | `#0E1116` |
| Card / surface | `#151A21` |
| Alt section background | `#11151B` |
| Border | `#252C36` / `#3A4552` |
| Primary text | `#E6EDF3` |
| Muted text | `#9AA6B2` |
| Accent (green) | `#7EE787` |
| Highlight (yellow) | `#FFD866` |
| Text selection | background `#7EE787`, text `#0E1116` |

**Fonts**

- **JetBrains Mono** for labels, code-style text and headings in cards
- **IBM Plex Sans** for body text and large headings

## SEO

- Title, description, canonical URL, Open Graph and Twitter Card tags in `index.html`
- JSON-LD structured data (`WebSite`, `Person`)
- `public/robots.txt` tells crawlers they may index the site and where the sitemap is
- `public/sitemap.xml` lists the site's URL for search engines
- `public/og-image.png` is the preview image shown when the link is shared

After deploying, submit the sitemap in [Google Search Console](https://search.google.com/search-console).

## Performance and accessibility

- Production build is minified and code-split by Vite
- The custom cursor is enabled only on devices with a mouse (`hover: hover`)
- Semantic landmarks and a single `<h1>`
- Planned: reduced-motion support and visible keyboard focus styles

## Deployment

The site is deployed on **Vercel**. Every push to `main` triggers a new deployment.

To deploy your own copy:

1. Push the repo to GitHub
2. Import it at [vercel.com/new](https://vercel.com/new)
3. Keep the defaults (Framework: Vite, Build: `npm run build`, Output: `dist`)

## Roadmap

- [ ] Add real LinkedIn URL
- [ ] Add live demo buttons to every project card
- [ ] Reduced-motion support for GSAP and Lenis
- [ ] Rebuild in Next.js
- [ ] Blog / notes section

## Credits

- [React Bits](https://reactbits.dev/) for the `Folder` component
- [GSAP](https://gsap.com/) and [Lenis](https://lenis.darkroom.engineering/) for animation and smooth scroll
- [Lucide](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/) for icons

## Contact

| | |
| --- | --- |
| Email | [nomitool1419@gmail.com](mailto:nomitool1419@gmail.com) |
| WhatsApp | [+92 318 3815505](https://wa.me/923183815505) |
| GitHub | [@workpc194](https://github.com/workpc194) |

I'm open to collaborating on projects, and advice on learning System Design is just as welcome as work.

---

Designed and built by **Muhammad Noman**
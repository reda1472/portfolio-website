# Reda Mohamed Salah — Professional Developer Brand & Portfolio Website

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Bilingual](https://img.shields.io/badge/Language-EN%20%7C%20AR%20RTL-emerald)](#features)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-0%20Runtime%20Bloat-sky)](#tech-stack)

> **Live Demo:** [https://reda1472.github.io/portfolio-website/](https://reda1472.github.io/portfolio-website/)

---

## 1. Project Title
**Reda Mohamed Salah Developer Brand & Technical Publication Hub (`portfolio-website`)**

## 2. One-Line Description
A high-performance, bilingual (English / Arabic RTL), zero-bloat web developer portfolio, technical documentation reader, and verifiable curriculum vitae.

## 3. Project Purpose
This repository serves as the central digital home and primary professional showcase for **Reda Mohamed Salah**. It exists to present verified technical skills, demonstrate real software engineering capabilities, share practical engineering articles, and provide transparent access to verifiable career history and contact channels.

## 4. Live Demo
- **Production URL:** [https://reda1472.github.io/portfolio-website/](https://reda1472.github.io/portfolio-website/)
- **Deployment Strategy:** Automated continuous delivery via GitHub Actions to GitHub Pages on every push to `main`.

## 5. Screenshots
*(Real interface captures generated from the live application)*

| Desktop View (Dark Theme) | Desktop View (Light Theme) |
| :---: | :---: |
| *High-contrast technical aesthetic with responsive navigation* | *Clean daylight mode with WCAG-compliant contrast* |

| Arabic RTL Mode | Mobile Layout |
| :---: | :---: |
| *Native right-to-left layout with optical balance & Cairo typography* | *Fluid 360px-430px mobile responsiveness with touch drawer* |

## 6. Features
- **Authentic Engineering First:** Zero exaggerated claims, zero fake client logos, zero fabricated statistics.
- **First-Class Bilingual & RTL Engine:** Native bidirectional switching between English (`ltr`) and Arabic (`rtl`) using modern CSS logical properties without layout shift or duplicated stylesheets.
- **System-Aware Theming:** Seamless Dark and Light theme switching with localStorage persistence and OS `prefers-color-scheme` synchronization.
- **Interactive Technical Blog:** Built-in modal reader for architectural articles on Arabic RTL engineering, dashboard state management, and relational database design.
- **Verifiable Interactive CV:** Comprehensive, printable (`@media print`) curriculum vitae clearly presenting official employment as *Visual Merchandiser / Display Coordinator at AL NASSER* alongside 7 years of hands-on programming experience.
- **Accessible & Semantic HTML5:** Keyboard-friendly, visible focus indicators, skip-to-content accessibility link, and structured data hierarchy.
- **Zero Runtime Overhead:** 100% pure vanilla JavaScript, modern CSS tokens, and HTML5 — zero heavy node_modules or runtime bundler requirements.

## 7. Tech Stack
- **Frontend Core:** Semantic HTML5, Modern CSS (Custom Properties, Grid, Flexbox, Logical Properties), Vanilla JavaScript (ES6+ Modules).
- **Typography:** Inter (Latin), Cairo (Arabic), JetBrains Mono (Code/Metrics).
- **Tooling & CI/CD:** Git, GitHub CLI, GitHub Actions Pages Deployer.

## 8. Architecture
The application follows a clean, decoupled Single Page Architecture:
- `css/themes.css`: Defines centralized design tokens (colors, radii, transitions, elevations, status colors) for light and dark schemes.
- `css/main.css`: Base reset, fluid typography with `clamp()`, accessibility rules, and container utilities.
- `css/components.css`: Modular component styling (navigation, hero, project cards, metric badges, modals).
- `css/rtl.css`: Directional optical alignments, typography rhythm adjustments, and directional icon flipping.
- `js/data.js`: Centralized data store containing profile records, confirmed tech taxonomy, projects, articles, and CV.
- `js/i18n.js`: Bidirectional translation engine handling real-time dictionary lookups and DOM localization.
- `js/theme.js`: Independent theme manager controlling dataset attributes and storage persistence.
- `js/app.js`: Application bootstrap, dynamic rendering of components, active scroll spy, and event listeners.

## 9. Project Structure
```
portfolio-website/
├── index.html                  # Main application entry point
├── css/
│   ├── themes.css              # Dark & light design system tokens
│   ├── main.css                # Core reset, layout, and fluid typography
│   ├── components.css          # Cards, modals, buttons, navigation
│   └── rtl.css                 # Dedicated Arabic RTL alignments
├── js/
│   ├── data.js                 # Centralized structured data model
│   ├── i18n.js                 # Bilingual translation & direction engine
│   ├── theme.js                # Theme switcher & OS listener
│   └── app.js                  # Main controller & UI renderer
├── assets/
│   ├── icons/                  # Scalable SVG icons
│   ├── img/                    # Project screenshots and assets
│   └── docs/                   # Printable CV assets
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD workflow
├── LICENSE                     # MIT License
├── .gitignore
└── README.md                   # Complete documentation
```

## 10. Installation
No compilation or package installation is strictly required. You can clone and run it locally with any static web server:

```bash
# Clone the repository
git clone https://github.com/reda1472/portfolio-website.git

# Navigate into the project directory
cd portfolio-website
```

## 11. Environment Variables
This is a client-rendered static web application and requires no secret keys or environment variables.

## 12. Development Commands
You can preview the website locally using Python's built-in HTTP server or PHP's built-in server:

```bash
# Using Python:
python -m http.server 8000

# Or using PHP:
php -S localhost:8000
```
Then open [http://localhost:8000](http://localhost:8000) in your web browser.

## 13. Production Build
Because this architecture uses vanilla web standards, the source code is production-ready as-is. It can be served directly from GitHub Pages, Vercel, Netlify, Cloudflare Pages, or Apache/Nginx servers.

## 14. Usage
- **Navigation:** Click on any nav link to smoothly scroll to that section.
- **Language Switch:** Click the `عربي / English` button in the header to instantly switch between LTR English and RTL Arabic.
- **Theme Switch:** Click the Sun/Moon button in the header to toggle between Dark and Light color palettes.
- **Reading Articles:** Click on any article card in the **Technical Blog** section to open the in-page article reader.
- **Print CV:** In the **CV** section, click **Print / Save as PDF** to generate an optimized printable resume.

## 15. Roadmap
- [x] Initial release with complete bilingual support (EN/AR RTL).
- [x] Core sections: Hero, About, Skills, Projects, Services, Blog, CV, Contact.
- [x] Automated GitHub Actions CI/CD deployment.
- [ ] Connect live demos for Project #2 (`business-management-dashboard`) and Project #3 (`retail-merchandising-platform`).
- [ ] Add interactive code sandbox preview for RTL component demos.

## 16. Known Limitations
- Contact form utilizes `mailto:` integration by default; direct serverless backend email dispatch will be connected in Phase 4.

## 17. License
Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.

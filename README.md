# Productive Apps Market

A small React + Vite demo application that showcases a marketplace for productivity apps. Built to follow the provided Figma screenshots and challenge requirements.

Description
- A multi-page React app with Home, All Apps, App Details, Installation and Not Found pages.
- App data provided via a local JSON file.
- Supports install/uninstall saved in localStorage.
- Search, sort by downloads, and responsive layout.
- Recharts used for the rating chart on App Details page.

Technologies
- React 18
- Vite
- React Router
- Recharts

How to run
1. Install dependencies

```powershell
npm install
```

2. Start the dev server

```powershell
npm run dev
```

Open the URL printed by Vite (for example http://localhost:5174/) in your browser.

Quick git tips
- To view commit count: `git rev-list --count HEAD`
- To view recent commits: `git log --oneline -n 20`


Deployment
- This project can be deployed to Netlify, Vercel or Cloudflare Pages.
- Add a redirect rule or _redirects file when needed to ensure SPA routing works.


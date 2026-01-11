# DesignArena Agent Experience

DesignArena Agent is an AI partner built for product teams who live across design and engineering. This repository contains a Next.js marketing site that outlines the agent\'s capabilities, VS Code integration workflow, and enterprise rollout options.

## Project Layout

- `designarena-agent/` &mdash; Next.js (App Router) web experience with Tailwind CSS.
- `designarena-agent/src/app/page.tsx` &mdash; Primary landing page content and layout.
- `designarena-agent/src/app/globals.css` &mdash; Global Tailwind and theme configuration.

## Local Development

```bash
cd designarena-agent
npm install
npm run dev
```

Visit `http://localhost:3000` to explore the site. Edit files inside `src/app` to iterate; the dev server supports hot reload.

## Production Build

```bash
cd designarena-agent
npm run build
npm run start
```

## Deployment

The project is configured for Vercel. Use the provided token and run `vercel deploy --prod` from inside `designarena-agent/` to publish updates.

## License

All rights reserved. Contact `team@designarena.app` for partnership or licensing inquiries.

# Nexus Signal Documentation

Official developer documentation for [Nexus Signal](https://nexussignal.dev) — built with [Fumadocs](https://fumadocs.dev).

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001).

| Locale | Docs entry |
|--------|------------|
| English (default) | `/docs/platform` |
| Español | `/es/docs/platform` |

Use the language switcher in the docs navbar to change locale.

## Build

```bash
npm run build
npm start
```

## Structure

```
content/docs/
  $/              Shared meta.json (sidebar structure)
  en/             English MDX pages
  es/             Spanish MDX pages (fallback to en when missing)
app/[lang]/       Next.js App Router + Fumadocs layouts
lib/i18n.ts       Locale config (en, es)
lib/source.ts     Content loader
source.config.ts  Fumadocs MDX config
middleware.ts     Locale routing + /docs → /docs/platform redirect
```

## Deploy

Deploy as a standard Next.js app (Vercel, Docker, etc.). Set production URL to match `https://docs.nexussignal.dev`.

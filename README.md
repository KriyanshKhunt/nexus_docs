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

Use the language switcher in the docs navbar to change locale. All 39 pages are available in both languages.

## Build

```bash
npm run build
npm start
```

## Structure

```
content/docs/
  $/              Shared meta.json (sidebar page order)
  en/             English MDX pages (39 pages)
  es/             Spanish MDX pages (39 pages)
app/[lang]/       Next.js App Router + Fumadocs layouts
lib/
  i18n.ts         Locale config (en, es)
  i18n-path.ts    Locale-aware href helpers
  ui-copy.ts      Home page translations
  docs-tabs.tsx   Sidebar section switcher labels
  source.ts       Content loader
proxy.ts          Locale routing (Next.js 16)
source.config.ts  Fumadocs MDX config
```

## Deploy

Deploy as a standard Next.js app (Vercel, Docker, etc.). Set production URL to match `https://docs.nexussignal.dev`.

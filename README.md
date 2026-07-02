# Nexus Signal Documentation

Official developer documentation for [Nexus Signal](https://nexussignal.dev) — built with [Fumadocs](https://fumadocs.dev).

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) — docs live at `/docs`.

## Build

```bash
npm run build
npm start
```

## Structure

```
content/docs/     MDX documentation pages
app/              Next.js App Router + Fumadocs layouts
lib/source.ts     Content loader
source.config.ts  Fumadocs MDX config
```

## Deploy

Deploy as a standard Next.js app (Vercel, Docker, etc.). Set production URL to match `https://docs.nexussignal.dev`.

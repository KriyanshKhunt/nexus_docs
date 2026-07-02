import Link from 'next/link';
import { localizeHref } from '@/lib/i18n-path';

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const docsHref = localizeHref('/docs/platform', lang);
  const quickstartHref = localizeHref('/docs/platform/getting-started/quickstart', lang);

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <p className="rounded-full border border-fd-border bg-fd-muted px-3 py-1 text-xs font-medium text-fd-muted-foreground">
        {lang === 'es' ? 'Documentación para desarrolladores' : 'Developer documentation'}
      </p>
      <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
        {lang === 'es' ? 'Documentación de Nexus Signal' : 'Nexus Signal docs'}
      </h1>
      <p className="max-w-xl text-lg text-fd-muted-foreground">
        {lang === 'es'
          ? 'Orquestación de notificaciones BYOP — flujos de trabajo, SDKs, APIs y cada función que reduce costos y mejora el engagement.'
          : 'BYOP notification orchestration — workflows, SDKs, APIs, and every feature that cuts cost and lifts engagement.'}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href={docsHref}
          className="rounded-lg border border-fd-border bg-fd-foreground px-5 py-2.5 text-sm font-medium text-fd-background"
        >
          {lang === 'es' ? 'Abrir documentación' : 'Open documentation'}
        </Link>
        <Link
          href={quickstartHref}
          className="rounded-lg border border-fd-border px-5 py-2.5 text-sm font-medium text-fd-foreground hover:bg-fd-muted"
        >
          {lang === 'es' ? 'Inicio rápido' : 'Quickstart'}
        </Link>
      </div>
      <div className="mt-4 grid max-w-lg grid-cols-3 gap-4 text-center text-sm">
        <div className="rounded-xl border border-fd-border p-3">
          <p className="font-semibold">{lang === 'es' ? 'Plataforma' : 'Platform'}</p>
          <p className="text-fd-muted-foreground">
            {lang === 'es' ? 'Flujos y funciones' : 'Workflows & features'}
          </p>
        </div>
        <div className="rounded-xl border border-fd-border p-3">
          <p className="font-semibold">SDKs</p>
          <p className="text-fd-muted-foreground">Node + React</p>
        </div>
        <div className="rounded-xl border border-fd-border p-3">
          <p className="font-semibold">API</p>
          <p className="text-fd-muted-foreground">
            {lang === 'es' ? 'Referencia REST' : 'REST reference'}
          </p>
        </div>
      </div>
    </main>
  );
}

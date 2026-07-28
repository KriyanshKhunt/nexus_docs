import Link from 'next/link';
import type { Metadata } from 'next';
import { localizeHref } from '@/lib/i18n-path';
import { t } from '@/lib/ui-copy';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: t(lang, 'home.title'),
    description: t(lang, 'home.subtitle'),
  };
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <p className="inline-flex items-center rounded-full border badge-theme px-3 py-1 text-xs font-semibold uppercase tracking-wider">
        {t(lang, 'home.badge')}
      </p>
      <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
        {t(lang, 'home.title')}
      </h1>
      <p className="max-w-xl text-lg text-fd-muted-foreground">{t(lang, 'home.subtitle')}</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href={localizeHref('/docs/platform', lang)}
          className="rounded-lg bg-fd-primary text-fd-primary-foreground hover:opacity-90 px-5 py-2.5 text-sm font-medium transition-opacity"
        >
          {t(lang, 'home.openDocs')}
        </Link>
        <Link
          href={localizeHref('/docs/platform/getting-started/quickstart', lang)}
          className="rounded-lg border border-fd-border px-5 py-2.5 text-sm font-medium text-fd-foreground hover:bg-fd-muted"
        >
          {t(lang, 'home.quickstart')}
        </Link>
      </div>
      <div className="mt-4 grid max-w-xl grid-cols-1 sm:grid-cols-2 gap-4 text-center text-sm">
        <Link
          href={localizeHref('/docs/platform', lang)}
          className="rounded-xl border border-fd-border py-4 px-3 hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors cursor-pointer"
        >
          <p className="font-semibold">{t(lang, 'home.platform')}</p>
          <p className="text-fd-muted-foreground mt-1.5">{t(lang, 'home.platformDesc')}</p>
        </Link>
        <Link
          href={localizeHref('/docs/sdk', lang)}
          className="rounded-xl border border-fd-border py-4 px-3 hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors cursor-pointer"
        >
          <p className="font-semibold">{t(lang, 'home.sdks')}</p>
          <p className="text-fd-muted-foreground mt-1.5">Node · React · Angular · JS</p>
        </Link>
        <Link
          href={localizeHref('/docs/sdk/devtools/cli', lang)}
          className="rounded-xl border border-fd-border py-4 px-3 hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors cursor-pointer"
        >
          <p className="font-semibold">{t(lang, 'home.cliMcp')}</p>
          <p className="text-fd-muted-foreground mt-1.5">{t(lang, 'home.cliMcpDesc')}</p>
        </Link>
        <Link
          href={localizeHref('/docs/api', lang)}
          className="rounded-xl border border-fd-border py-4 px-3 hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors cursor-pointer"
        >
          <p className="font-semibold">{t(lang, 'home.api')}</p>
          <p className="text-fd-muted-foreground mt-1.5">{t(lang, 'home.apiDesc')}</p>
        </Link>
      </div>
    </main>
  );
}

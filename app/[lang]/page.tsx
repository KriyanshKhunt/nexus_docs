import Link from 'next/link';
import { localizeHref } from '@/lib/i18n-path';
import { t } from '@/lib/ui-copy';

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <p className="rounded-full border border-fd-border bg-fd-muted px-3 py-1 text-xs font-medium text-fd-muted-foreground">
        {t(lang, 'home.badge')}
      </p>
      <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
        {t(lang, 'home.title')}
      </h1>
      <p className="max-w-xl text-lg text-fd-muted-foreground">{t(lang, 'home.subtitle')}</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href={localizeHref('/docs/platform', lang)}
          className="rounded-lg border border-fd-border bg-fd-foreground px-5 py-2.5 text-sm font-medium text-fd-background"
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
      <div className="mt-4 grid max-w-lg grid-cols-3 gap-4 text-center text-sm">
        <div className="rounded-xl border border-fd-border p-3">
          <p className="font-semibold">{t(lang, 'home.platform')}</p>
          <p className="text-fd-muted-foreground">{t(lang, 'home.platformDesc')}</p>
        </div>
        <div className="rounded-xl border border-fd-border p-3">
          <p className="font-semibold">{t(lang, 'home.sdks')}</p>
          <p className="text-fd-muted-foreground">Node + React</p>
        </div>
        <div className="rounded-xl border border-fd-border p-3">
          <p className="font-semibold">{t(lang, 'home.api')}</p>
          <p className="text-fd-muted-foreground">{t(lang, 'home.apiDesc')}</p>
        </div>
      </div>
    </main>
  );
}

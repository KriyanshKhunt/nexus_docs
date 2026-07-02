import { i18n, i18nConfig } from '@/lib/i18n';
import { defineI18nUI } from 'fumadocs-ui/i18n';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const { provider: i18nProvider, ...i18nUIConfig } = defineI18nUI(i18n, {
  en: {
    displayName: 'English',
    search: 'Search documentation…',
  },
  es: {
    displayName: 'Español',
    search: 'Buscar en la documentación…',
  },
});

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n: i18nConfig,
    nav: {
      title: (
        <span className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="inline-flex size-7 items-center justify-center rounded-lg border border-fd-border bg-fd-muted text-xs font-bold text-fd-foreground">
            N
          </span>
          <span>
            Nexus Signal
            <span className="ml-2 hidden text-xs font-normal text-fd-muted-foreground sm:inline">
              Docs
            </span>
          </span>
        </span>
      ),
      url: locale === 'en' ? '/docs/platform' : `/${locale}/docs/platform`,
    },
    links: [
      {
        text: 'Dashboard',
        url: 'https://app.nexussignal.dev',
        external: true,
      },
      {
        text: 'Pricing',
        url: 'https://nexussignal.dev/pricing',
        external: true,
      },
    ],
    githubUrl: 'https://github.com/nexussignal',
  };
}

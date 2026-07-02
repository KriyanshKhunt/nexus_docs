import { i18nProvider } from '@/lib/layout.shared';
import { i18n } from '@/lib/i18n';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';

export default async function LangLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  return (
    <RootProvider theme={{ enabled: true, defaultTheme: 'dark' }} i18n={i18nProvider(lang)}>
      {children}
    </RootProvider>
  );
}

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}

import { NexusRootProvider } from '@/components/nexus-root-provider';
import { i18n } from '@/lib/i18n';
import type { ReactNode } from 'react';

export default async function LangLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  return <NexusRootProvider lang={lang}>{children}</NexusRootProvider>;
}

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}

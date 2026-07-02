'use client';

import { stripLocalePrefix, localizeHref } from '@/lib/i18n-path';
import { i18nProvider } from '@/lib/layout.shared';
import { usePathname, useRouter } from 'next/navigation';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';

type NexusRootProviderProps = {
  lang: string;
  children: ReactNode;
};

export function NexusRootProvider({ lang, children }: NexusRootProviderProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <RootProvider
      theme={{ enabled: false }}
      i18n={{
        ...i18nProvider(lang),
        onLocaleChange: (nextLocale) => {
          router.push(localizeHref(stripLocalePrefix(pathname), nextLocale));
        },
      }}
    >
      {children}
    </RootProvider>
  );
}

import { i18nConfig } from '@/lib/i18n';
import { cookies } from 'next/headers';
import type { ReactNode } from 'react';
import './global.css';

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const locale = cookieStore.get('FD_LOCALE')?.value ?? i18nConfig.defaultLanguage;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

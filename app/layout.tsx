import { i18nConfig } from '@/lib/i18n';
import { cookies } from 'next/headers';
import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { Geist, Geist_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
  title: 'Nexus Signal Docs',
  description: 'Documentation for Nexus Signal platform',
};

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const locale = cookieStore.get('FD_LOCALE')?.value ?? i18nConfig.defaultLanguage;

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <svg
            width="0"
            height="0"
            style={{ position: 'absolute', pointerEvents: 'none' }}
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="nexus_global_paint0"
                x1="326"
                y1="38"
                x2="516"
                y2="158"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DA5454" />
                <stop offset={1} stopColor="#581313" />
              </linearGradient>
              <linearGradient
                id="nexus_global_paint1"
                x1="326"
                y1="38"
                x2="516"
                y2="158"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DA5454" />
                <stop offset={1} stopColor="#581313" />
              </linearGradient>
            </defs>
          </svg>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

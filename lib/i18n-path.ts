import { i18n } from '@/lib/i18n';

export function localizeHref(href: string, locale: string): string {
  const hide = i18n.hideLocale ?? 'never';
  if (hide === 'default-locale' && locale === i18n.defaultLanguage) return href;
  if (hide === 'always') return href;
  return `/${locale}${href}`;
}

export function stripLocalePrefix(pathname: string): string {
  for (const lang of i18n.languages) {
    if (lang === i18n.defaultLanguage) continue;
    const prefix = `/${lang}`;
    if (pathname === prefix) return '/';
    if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  }
  return pathname;
}

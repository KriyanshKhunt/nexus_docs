import { defineI18n } from 'fumadocs-core/i18n';

export const i18nConfig = {
  defaultLanguage: 'en' as const,
  languages: ['en', 'es'] as ['en', 'es'],
  parser: 'dir' as const,
  hideLocale: 'default-locale' as const,
  fallbackLanguage: 'en' as const,
};

export type Locale = (typeof i18nConfig.languages)[number];

export const i18n = defineI18n(i18nConfig);

export function isLocale(value: string): value is Locale {
  return i18nConfig.languages.includes(value as Locale);
}

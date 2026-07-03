import type { Locale } from '@/lib/i18n';

type CopyKey =
  | 'home.badge'
  | 'home.title'
  | 'home.subtitle'
  | 'home.openDocs'
  | 'home.quickstart'
  | 'home.platform'
  | 'home.platformDesc'
  | 'home.sdks'
  | 'home.api'
  | 'home.apiDesc';

const copy: Record<Locale, Record<CopyKey, string>> = {
  en: {
    'home.badge': 'Developer documentation',
    'home.title': 'Nexus Signal docs',
    'home.subtitle':
      'BYOP notification orchestration — workflows, SDKs, APIs, and every feature that cuts cost and lifts engagement.',
    'home.openDocs': 'Open documentation',
    'home.quickstart': 'Quickstart',
    'home.platform': 'Platform',
    'home.platformDesc': 'Workflows & features',
    'home.sdks': 'SDKs',
    'home.api': 'API',
    'home.apiDesc': 'REST reference',
  },
  es: {
    'home.badge': 'Documentación para desarrolladores',
    'home.title': 'Documentación de Nexus Signal',
    'home.subtitle':
      'Orquestación de notificaciones BYOP — flujos de trabajo, SDKs, APIs y cada función que reduce costos y mejora el engagement.',
    'home.openDocs': 'Abrir documentación',
    'home.quickstart': 'Inicio rápido',
    'home.platform': 'Plataforma',
    'home.platformDesc': 'Flujos y funciones',
    'home.sdks': 'SDKs',
    'home.api': 'API',
    'home.apiDesc': 'Referencia REST',
  },
  pt: {
    'home.badge': 'Documentação para desenvolvedores',
    'home.title': 'Documentação do Nexus Signal',
    'home.subtitle':
      'Orquestração de notificações BYOP — fluxos de trabalho, SDKs, APIs e cada recurso que reduz custos e aumenta o engajamento.',
    'home.openDocs': 'Abrir documentação',
    'home.quickstart': 'Início rápido',
    'home.platform': 'Plataforma',
    'home.platformDesc': 'Fluxos e recursos',
    'home.sdks': 'SDKs',
    'home.api': 'API',
    'home.apiDesc': 'Referência REST',
  },
};

export function t(locale: string, key: CopyKey): string {
  const lang = locale in copy ? (locale as Locale) : 'en';
  return copy[lang][key];
}

import { Code, Layers, Webhook } from 'lucide-react';
import type { ReactNode } from 'react';
import { i18nConfig, type Locale } from '@/lib/i18n';

type TabDef = {
  url: string;
  Icon: typeof Layers;
  labels: Record<Locale, { title: string; description: string }>;
};

const TAB_DEFS: TabDef[] = [
  {
    url: '/docs/platform',
    Icon: Layers,
    labels: {
      en: {
        title: 'Platform',
        description: 'Workflows, features, integrations, guides',
      },
      es: {
        title: 'Plataforma',
        description: 'Flujos, funciones, integraciones y guías',
      },
      pt: {
        title: 'Plataforma',
        description: 'Fluxos de trabalho, recursos, integrações, guias',
      },
    },
  },
  {
    url: '/docs/sdk',
    Icon: Code,
    labels: {
      en: { title: 'SDKs', description: 'Node.js and React packages' },
      es: { title: 'SDKs', description: 'Paquetes Node.js y React' },
      pt: { title: 'SDKs', description: 'Pacotes Node.js e React' },
    },
  },
  {
    url: '/docs/api',
    Icon: Webhook,
    labels: {
      en: { title: 'API Reference', description: 'REST endpoints and auth' },
      es: { title: 'Referencia API', description: 'Endpoints REST y autenticación' },
      pt: { title: 'Referência da API', description: 'Endpoints REST e autenticação' },
    },
  },
];

function tabIcon(Icon: typeof Layers): ReactNode {
  return (
    <div className="size-full [&_svg]:size-full">
      <Icon />
    </div>
  );
}

export type DocsTab = {
  title: string;
  description: string;
  url: string;
  icon: ReactNode;
};

export function getDocsTabs(locale: string): DocsTab[] {
  const lang: Locale = i18nConfig.languages.includes(locale as Locale) ? (locale as Locale) : 'en';
  return TAB_DEFS.map(({ url, Icon, labels }) => ({
    url,
    title: labels[lang].title,
    description: labels[lang].description,
    icon: tabIcon(Icon),
  }));
}

import { Code, Layers, Webhook } from 'lucide-react';
import type { ReactNode } from 'react';

export type DocsTab = {
  title: string;
  description: string;
  url: string;
  icon: ReactNode;
};

function tabIcon(Icon: typeof Layers) {
  return (
    <div className="size-full [&_svg]:size-full">
      <Icon />
    </div>
  );
}

export const docsTabs: DocsTab[] = [
  {
    title: 'Platform',
    description: 'Workflows, features, integrations, guides',
    url: '/docs/platform',
    icon: tabIcon(Layers),
  },
  {
    title: 'SDKs',
    description: 'Node.js and React packages',
    url: '/docs/sdk',
    icon: tabIcon(Code),
  },
  {
    title: 'API Reference',
    description: 'REST endpoints and auth',
    url: '/docs/api',
    icon: tabIcon(Webhook),
  },
];

export const docsTabsEs: DocsTab[] = [
  {
    title: 'Plataforma',
    description: 'Flujos, funciones, integraciones y guías',
    url: '/docs/platform',
    icon: tabIcon(Layers),
  },
  {
    title: 'SDKs',
    description: 'Paquetes Node.js y React',
    url: '/docs/sdk',
    icon: tabIcon(Code),
  },
  {
    title: 'Referencia API',
    description: 'Endpoints REST y autenticación',
    url: '/docs/api',
    icon: tabIcon(Webhook),
  },
];

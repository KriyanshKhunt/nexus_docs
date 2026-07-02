import { BookOpen, Code, Layers, Webhook } from 'lucide-react';
import type { ReactNode } from 'react';

export type DocsTab = {
  title: string;
  description: string;
  url: string;
  icon: ReactNode;
};

function tabIcon(Icon: typeof BookOpen) {
  return (
    <div className="size-full [&_svg]:size-full">
      <Icon />
    </div>
  );
}

export const docsTabs: DocsTab[] = [
  {
    title: 'Introduction',
    description: 'Overview, quick links, and stack',
    url: '/docs',
    icon: tabIcon(BookOpen),
  },
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

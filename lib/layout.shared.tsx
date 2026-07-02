import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2 font-semibold">
          <span className="inline-flex size-6 items-center justify-center rounded-md bg-fd-primary text-[11px] font-bold text-fd-primary-foreground">
            N
          </span>
          Nexus Signal
        </span>
      ),
      url: '/docs',
    },
    links: [
      {
        text: 'Dashboard',
        url: 'https://app.nexussignal.dev',
        external: true,
      },
      {
        text: 'GitHub',
        url: 'https://github.com/nexussignal',
        external: true,
      },
    ],
    githubUrl: 'https://github.com/nexussignal',
  };
}

import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="inline-flex size-7 items-center justify-center rounded-lg bg-fd-primary text-xs font-bold text-fd-primary-foreground shadow-sm">
            N
          </span>
          <span>
            Nexus Signal
            <span className="ml-2 hidden text-xs font-normal text-fd-muted-foreground sm:inline">
              Docs
            </span>
          </span>
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
        text: 'Pricing',
        url: 'https://nexussignal.dev/pricing',
        external: true,
      },
    ],
    githubUrl: 'https://github.com/nexussignal',
  };
}

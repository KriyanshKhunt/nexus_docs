import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { DocsTabSwitcher } from '@/components/docs-tab-switcher';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      tabs={false}
      sidebar={{
        banner: <DocsTabSwitcher />,
      }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}

'use client';

import { docsTabs } from '@/lib/docs-tabs';
import { cn } from '@/lib/cn';
import Link from 'fumadocs-core/link';
import { usePathname } from 'fumadocs-core/framework';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from 'fumadocs-ui/components/ui/popover';
import { useMemo, useState } from 'react';

function isTabActive(tabUrl: string, pathname: string) {
  if (tabUrl === '/docs') return pathname === '/docs';
  return pathname === tabUrl || pathname.startsWith(`${tabUrl}/`);
}

export function DocsTabSwitcher() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const selected = useMemo(
    () => docsTabs.findLast((tab) => isTabActive(tab.url, pathname)),
    [pathname],
  );

  const current = selected ?? docsTabs[0];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={cn(
          'flex w-full items-center gap-2 rounded-lg border border-fd-border bg-fd-secondary/50 p-2 text-start',
          'text-fd-foreground transition-colors hover:bg-fd-muted/80',
          'data-[state=open]:bg-fd-muted data-[state=open]:text-fd-foreground',
        )}
      >
        <div className="size-5 shrink-0 text-fd-muted-foreground">{current.icon}</div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">{current.title}</p>
          <p className="truncate text-xs text-fd-muted-foreground md:hidden">
            {current.description}
          </p>
        </div>
        <ChevronsUpDown className="size-4 shrink-0 text-fd-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="flex w-(--radix-popover-trigger-width) flex-col gap-0.5 p-1"
      >
        {docsTabs.map((tab) => {
          const active = isTabActive(tab.url, pathname);
          return (
            <Link
              key={tab.url}
              href={tab.url}
              onClick={() => setOpen(false)}
              className={cn(
                'flex items-center gap-2 rounded-md p-2 transition-colors',
                'hover:bg-fd-muted hover:text-fd-foreground',
                active && 'bg-fd-muted/60',
              )}
            >
              <div className="size-5 shrink-0 text-fd-muted-foreground">{tab.icon}</div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium leading-none">{tab.title}</p>
                <p className="mt-1 text-xs text-fd-muted-foreground">{tab.description}</p>
              </div>
              <Check
                className={cn('size-3.5 shrink-0 text-fd-foreground', !active && 'invisible')}
              />
            </Link>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}

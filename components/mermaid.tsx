'use client';

import { useEffect, useId, useState } from 'react';
import { Loader2 } from 'lucide-react';

export function Mermaid({ chart }: { chart: string }) {
  const id = useId().replace(/:/g, '');
  const [svg, setSvg] = useState<string>('');

  useEffect(() => {
    let cancelled = false;

    void import('mermaid')
      .then(({ default: mermaid }) => {
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          securityLevel: 'strict',
          fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        });
        return mermaid.render(`mermaid-${id}`, chart);
      })
      .then((result) => {
        if (!cancelled && result?.svg) {
          const cleanSvg = result.svg
            .replace(/<script\b[\s\S]*?<\/script>/gi, '')
            .replace(/<script\b[\s\S]*?\/>/gi, '')
            .replace(/<script\b[\s\S]*?>/gi, '');
          setSvg(cleanSvg);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  if (!svg) {
    return (
      <div className="my-6 flex h-40 w-full flex-col items-center justify-center gap-2.5 rounded-xl border border-fd-border bg-fd-card/50 text-fd-muted-foreground">
        <Loader2 className="size-5 animate-spin text-fd-primary" />
        <span className="text-xs font-medium tracking-tight">Loading diagram…</span>
      </div>
    );
  }

  return (
    <div
      className="my-6 overflow-x-auto rounded-xl border border-fd-border bg-fd-card p-4 [&_svg]:mx-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

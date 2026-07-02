'use client';

import { useEffect, useRef, useState } from 'react';

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');

  useEffect(() => {
    let cancelled = false;

    void import('mermaid').then(({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
        securityLevel: 'loose',
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      });

      const id = `mermaid-${Math.random().toString(36).slice(2)}`;
      return mermaid.render(id, chart);
    }).then((result) => {
      if (!cancelled && result?.svg) setSvg(result.svg);
    });

    return () => {
      cancelled = true;
    };
  }, [chart]);

  if (!svg) {
    return (
      <div className="my-4 rounded-xl border border-fd-border bg-fd-card p-4 text-sm text-fd-muted-foreground">
        Loading diagram…
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="my-6 overflow-x-auto rounded-xl border border-fd-border bg-fd-card p-4 [&_svg]:mx-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

'use client';

import { useEffect, useId, useState } from 'react';

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
        if (!cancelled && result?.svg) setSvg(result.svg);
      });

    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  if (!svg) {
    return (
      <div className="my-4 rounded-xl border border-fd-border bg-fd-card p-4 text-sm text-fd-muted-foreground">
        Loading diagram…
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

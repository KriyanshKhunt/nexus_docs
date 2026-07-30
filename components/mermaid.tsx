'use client';

import { useEffect, useId, useState, useRef } from 'react';
import { Loader2, Maximize2, X, ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useI18n } from 'fumadocs-ui/contexts/i18n';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const loadingTexts: Record<string, string> = {
  en: 'Loading diagram…',
  es: 'Cargando diagrama…',
  pt: 'Carregando diagrama…',
  ja: 'ダイアグラムを読み込み中…',
};

export function Mermaid({ chart }: { chart: string }) {
  const id = useId().replace(/:/g, '');
  const [svg, setSvg] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const scaleRef = useRef<HTMLSpanElement>(null);
  const { resolvedTheme } = useTheme();
  const { locale = 'en' } = useI18n();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    let cancelled = false;
    const isDark = resolvedTheme === 'dark';
    const themeVars = getMermaidThemeVariables(isDark);

    void import('mermaid')
      .then(({ default: mermaid }) => {
        mermaid.initialize({
          startOnLoad: false,
          theme: 'base',
          themeVariables: themeVars,
          securityLevel: 'strict',
          fontFamily: 'var(--font-sans), ui-sans-serif, system-ui, sans-serif',
          flowchart: {
            subGraphTitleMargin: { top: 15, bottom: 10 },
          },
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
  }, [chart, id, resolvedTheme]);

  if (!svg) {
    return (
      <div className="my-6 flex h-40 w-full flex-col items-center justify-center gap-2.5 rounded-xl border border-fd-border bg-fd-card/50 text-fd-muted-foreground">
        <Loader2 className="size-5 animate-spin text-fd-primary" />
        <span className="text-xs font-medium tracking-tight">
          {loadingTexts[locale] || loadingTexts.en}
        </span>
      </div>
    );
  }

  return (
    <>
      <div
        className="group relative my-6 overflow-x-auto rounded-xl border border-fd-border bg-fd-card p-4 transition-all hover:bg-fd-card/85 cursor-zoom-in [&_svg]:mx-auto"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity bg-fd-muted p-1.5 rounded-lg border border-fd-border text-fd-muted-foreground hover:text-fd-foreground">
          <Maximize2 className="size-4" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: svg }} />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="fixed right-4 top-4 z-[101] rounded-lg bg-fd-card/85 backdrop-blur-md p-2 border border-fd-border text-fd-muted-foreground hover:bg-fd-muted hover:text-fd-foreground shadow-lg transition-all"
            onClick={() => setIsOpen(false)}
          >
            <X className="size-5" />
          </button>

          <div
            className="relative w-full max-w-5xl h-[80vh] overflow-hidden rounded-xl border border-fd-border bg-fd-card shadow-2xl transition-all"
            style={{
              backgroundImage:
                'radial-gradient(circle, color-mix(in srgb, var(--color-fd-foreground) 15%, transparent) 1.5px, transparent 1.5px)',
              backgroundSize: '20px 20px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <TransformWrapper
              initialScale={1}
              initialPositionX={0}
              initialPositionY={0}
              centerOnInit={true}
              minScale={0.2}
              maxScale={4}
              smooth={false}
              wheel={{
                step: 0.25,
              }}
              onTransform={(ref, state) => {
                if (scaleRef.current) {
                  scaleRef.current.innerText = `${Math.round(state.scale * 100)}%`;
                }
              }}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[102] flex items-center gap-2 rounded-full border border-fd-border bg-fd-popover/90 backdrop-blur-md px-4 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)] select-none">
                    <button
                      onClick={() => zoomOut()}
                      className="p-1.5 hover:bg-fd-muted text-fd-muted-foreground hover:text-fd-foreground rounded-full transition-colors"
                      title="Zoom Out"
                    >
                      <ZoomOut className="size-4" />
                    </button>
                    <span
                      ref={scaleRef}
                      className="text-xs font-mono font-medium min-w-[3.5rem] text-center text-fd-foreground"
                    >
                      100%
                    </span>
                    <button
                      onClick={() => zoomIn()}
                      className="p-1.5 hover:bg-fd-muted text-fd-muted-foreground hover:text-fd-foreground rounded-full transition-colors"
                      title="Zoom In"
                    >
                      <ZoomIn className="size-4" />
                    </button>
                    <div className="w-[1px] h-4 bg-fd-border mx-1" />
                    <button
                      onClick={() => resetTransform()}
                      className="p-1.5 hover:bg-fd-muted text-fd-muted-foreground hover:text-fd-foreground rounded-full transition-colors"
                      title="Reset View"
                    >
                      <RefreshCw className="size-4" />
                    </button>
                  </div>

                  <TransformComponent
                    wrapperClass="!w-full !h-full cursor-grab active:cursor-grabbing"
                    contentClass="!w-full !h-full flex items-center justify-center"
                  >
                    <div
                      className="w-full h-full flex items-center justify-center p-12 [&_svg]:!max-w-full [&_svg]:!h-auto [&_svg]:mx-auto select-none"
                      dangerouslySetInnerHTML={{ __html: svg }}
                    />
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
          </div>
        </div>
      )}
    </>
  );
}

function getMermaidThemeVariables(isDark: boolean) {
  return isDark
    ? {
        // General variables
        primaryColor: 'hsl(0, 0%, 6%)',
        textColor: 'hsl(0, 0%, 96%)',
        primaryTextColor: 'hsl(0, 0%, 96%)',
        lineColor: 'hsl(0, 0%, 70%)',

        // Flowcharts & Nodes
        mainBkg: 'hsl(0, 0%, 8%)',
        nodeBorder: '#f56e6e',
        nodeTextColor: 'hsl(0, 0%, 96%)',

        // Subgraphs/Clusters (Containers)
        clusterBorder: 'hsl(0, 0%, 16%)',

        // Sequence diagram actors
        actorBkg: 'hsl(0, 0%, 6%)',
        actorBorder: '#f56e6e',
        actorTextColor: 'hsl(0, 0%, 96%)',
        actorLineColor: 'hsl(0, 0%, 16%)',

        // Signals & Labels
        signalColor: 'hsl(0, 0%, 70%)',
        signalTextColor: 'hsl(0, 0%, 70%)',
        labelBoxBkgColor: 'hsl(0, 0%, 6%)',
        labelBoxBorderColor: 'hsl(0, 0%, 16%)',
        labelTextTextColor: 'hsl(0, 0%, 70%)',
        labelTextColor: 'hsl(0, 0%, 70%)',
        labelColor: 'hsl(0, 0%, 96%)',

        // Notes & Loops
        noteBkgColor: 'hsl(0, 0%, 6%)',
        noteBorderColor: 'hsl(0, 0%, 16%)',
        noteTextColor: 'hsl(0, 0%, 70%)',
        loopTextColor: 'hsl(0, 0%, 70%)',
      }
    : {
        // General variables
        primaryColor: 'hsl(0, 0%, 100%)',
        textColor: 'hsl(0, 0%, 9%)',
        primaryTextColor: 'hsl(0, 0%, 9%)',
        lineColor: 'hsl(0, 0%, 30%)',

        // Flowcharts & Nodes
        mainBkg: 'hsl(0, 0%, 100%)',
        nodeBorder: '#eb5b5b',
        nodeTextColor: 'hsl(0, 0%, 9%)',

        // Subgraphs/Clusters (Containers)
        clusterBorder: 'hsl(0, 0%, 90%)',

        // Sequence diagram actors
        actorBkg: 'hsl(0, 0%, 100%)',
        actorBorder: '#eb5b5b',
        actorTextColor: 'hsl(0, 0%, 9%)',
        actorLineColor: 'hsl(0, 0%, 90%)',

        // Signals & Labels
        signalColor: 'hsl(0, 0%, 30%)',
        signalTextColor: 'hsl(0, 0%, 30%)',
        labelBoxBkgColor: 'hsl(0, 0%, 100%)',
        labelBoxBorderColor: 'hsl(0, 0%, 90%)',
        labelTextTextColor: 'hsl(0, 0%, 30%)',
        labelTextColor: 'hsl(0, 0%, 30%)',
        labelColor: 'hsl(0, 0%, 9%)',

        // Notes & Loops
        noteBkgColor: 'hsl(0, 0%, 100%)',
        noteBorderColor: 'hsl(0, 0%, 90%)',
        noteTextColor: 'hsl(0, 0%, 30%)',
        loopTextColor: 'hsl(0, 0%, 30%)',
      };
}

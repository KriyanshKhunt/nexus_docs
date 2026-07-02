"use client";

import { useEffect, useId, useState } from "react";
import { Loader2, Maximize2, X } from "lucide-react";
import { useTheme } from "next-themes";

export function Mermaid({ chart }: { chart: string }) {
  const id = useId().replace(/:/g, "");
  const [svg, setSvg] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    let cancelled = false;
    const isDark = resolvedTheme === "dark";
    const themeVars = getMermaidThemeVariables(isDark);

    void import("mermaid")
      .then(({ default: mermaid }) => {
        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          themeVariables: themeVars,
          securityLevel: "strict",
          fontFamily: "var(--font-sans), ui-sans-serif, system-ui, sans-serif",
          flowchart: {
            subGraphTitleMargin: { top: 15, bottom: 10 },
          },
        });
        return mermaid.render(`mermaid-${id}`, chart);
      })
      .then((result) => {
        if (!cancelled && result?.svg) {
          const cleanSvg = result.svg
            .replace(/<script\b[\s\S]*?<\/script>/gi, "")
            .replace(/<script\b[\s\S]*?\/>/gi, "")
            .replace(/<script\b[\s\S]*?>/gi, "");
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
          Loading diagram…
        </span>
      </div>
    );
  }

  return (
    <>
      <div
        className="group relative my-6 overflow-x-auto rounded-xl border border-fd-border bg-fd-card p-4 transition-all hover:bg-fd-card/85 cursor-zoom-in [&_svg]:mx-auto"
        onClick={() => setIsOpen(true)}
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
            className="relative w-full max-w-5xl max-h-[85vh] overflow-auto rounded-xl border border-fd-border bg-fd-card p-6 shadow-2xl transition-all [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-fd-muted-foreground/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-fd-muted-foreground/45 [&::-webkit-scrollbar-track]:bg-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="mt-2 w-full flex items-center justify-center [&_svg]:!w-full [&_svg]:!h-auto [&_svg]:!max-w-full"
              dangerouslySetInnerHTML={{ __html: svg }}
            />
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
        primaryColor: "hsl(0, 0%, 6%)",
        textColor: "hsl(0, 0%, 96%)",
        lineColor: "hsl(0, 0%, 70%)",

        // Flowcharts & Nodes
        mainBkg: "hsl(0, 0%, 8%)",
        nodeBorder: "#a9ceff",
        nodeTextColor: "hsl(0, 0%, 96%)",

        // Subgraphs/Clusters (Containers)
        clusterBorder: "hsl(0, 0%, 16%)",

        // Sequence diagram actors
        actorBkg: "hsl(0, 0%, 6%)",
        actorBorder: "#a9ceff",
        actorTextColor: "hsl(0, 0%, 96%)",
        actorLineColor: "hsl(0, 0%, 16%)",

        // Signals & Labels
        signalColor: "hsl(0, 0%, 70%)",
        signalTextColor: "hsl(0, 0%, 70%)",
        labelBoxBkgColor: "hsl(0, 0%, 6%)",
        labelBoxBorderColor: "hsl(0, 0%, 16%)",
        labelTextTextColor: "hsl(0, 0%, 70%)",
        labelTextColor: "hsl(0, 0%, 70%)",

        // Notes & Loops
        noteBkgColor: "hsl(0, 0%, 6%)",
        noteBorderColor: "hsl(0, 0%, 16%)",
        noteTextColor: "hsl(0, 0%, 70%)",
        loopTextColor: "hsl(0, 0%, 70%)",
      }
    : {
        // General variables
        primaryColor: "hsl(0, 0%, 100%)",
        textColor: "hsl(0, 0%, 9%)",
        lineColor: "hsl(0, 0%, 30%)",

        // Flowcharts & Nodes
        mainBkg: "hsl(0, 0%, 100%)",
        nodeBorder: "#297bff",
        nodeTextColor: "hsl(0, 0%, 9%)",

        // Subgraphs/Clusters (Containers)
        clusterBorder: "hsl(0, 0%, 90%)",

        // Sequence diagram actors
        actorBkg: "hsl(0, 0%, 100%)",
        actorBorder: "#297bff",
        actorTextColor: "hsl(0, 0%, 9%)",
        actorLineColor: "hsl(0, 0%, 90%)",

        // Signals & Labels
        signalColor: "hsl(0, 0%, 30%)",
        signalTextColor: "hsl(0, 0%, 30%)",
        labelBoxBkgColor: "hsl(0, 0%, 100%)",
        labelBoxBorderColor: "hsl(0, 0%, 90%)",
        labelTextTextColor: "hsl(0, 0%, 30%)",
        labelTextColor: "hsl(0, 0%, 30%)",

        // Notes & Loops
        noteBkgColor: "hsl(0, 0%, 100%)",
        noteBorderColor: "hsl(0, 0%, 90%)",
        noteTextColor: "hsl(0, 0%, 30%)",
        loopTextColor: "hsl(0, 0%, 30%)",
      };
}

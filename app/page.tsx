import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <p className="rounded-full border border-fd-border bg-fd-accent/30 px-3 py-1 text-xs font-medium text-fd-accent-foreground">
        Developer documentation
      </p>
      <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
        Nexus Signal docs
      </h1>
      <p className="max-w-xl text-lg text-fd-muted-foreground">
        BYOP notification orchestration — workflows, SDKs, APIs, and every feature that cuts cost
        and lifts engagement.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/docs"
          className="rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground shadow-sm"
        >
          Open documentation
        </Link>
        <Link
          href="/docs/platform/getting-started/quickstart"
          className="rounded-lg border border-fd-border px-5 py-2.5 text-sm font-medium hover:bg-fd-accent/40"
        >
          Quickstart
        </Link>
      </div>
      <div className="mt-4 grid max-w-lg grid-cols-3 gap-4 text-center text-sm">
        <div className="rounded-xl border border-fd-border p-3">
          <p className="font-semibold text-fd-primary">Platform</p>
          <p className="text-fd-muted-foreground">Workflows & features</p>
        </div>
        <div className="rounded-xl border border-fd-border p-3">
          <p className="font-semibold text-fd-primary">SDKs</p>
          <p className="text-fd-muted-foreground">Node + React</p>
        </div>
        <div className="rounded-xl border border-fd-border p-3">
          <p className="font-semibold text-fd-primary">API</p>
          <p className="text-fd-muted-foreground">REST reference</p>
        </div>
      </div>
    </main>
  );
}

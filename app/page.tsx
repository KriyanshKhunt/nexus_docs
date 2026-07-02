import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <p className="text-sm font-medium uppercase tracking-wider text-fd-muted-foreground">
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
          className="rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground"
        >
          Open documentation
        </Link>
        <Link
          href="/docs/getting-started/quickstart"
          className="rounded-lg border border-fd-border px-5 py-2.5 text-sm font-medium"
        >
          Quickstart
        </Link>
      </div>
    </main>
  );
}

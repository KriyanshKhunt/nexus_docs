import { Callout } from 'fumadocs-ui/components/callout';
import type { ReactNode } from 'react';

type AuthCalloutProps = {
  children?: ReactNode;
};

export function SecretKeyAuth({ children }: AuthCalloutProps) {
  return (
    <Callout type="warn">
      {children ??
        'Requires `Authorization: Bearer sk_*` — your environment secret key. Never expose secret keys in browser code.'}
    </Callout>
  );
}

export function PublicKeyAuth({ children }: AuthCalloutProps) {
  return (
    <Callout type="info">
      {children ??
        'Browser SDK routes use `x-nexus-public-key: pk_*` plus HMAC subscriber verification — not secret keys.'}
    </Callout>
  );
}

export function DashboardAuth({ children }: AuthCalloutProps) {
  return (
    <Callout type="info">
      {children ??
        'Dashboard routes require a JWT session cookie or Bearer token from `/v1/auth/login`.'}
    </Callout>
  );
}

export function ManagementAuth({ children }: AuthCalloutProps) {
  return (
    <Callout type="warn">
      {children ??
        'Management API routes use the same `sk_*` secret key as workflow triggers. Intended for CLI, MCP, and CI/CD — not browser apps.'}
    </Callout>
  );
}

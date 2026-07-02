import { createI18nMiddleware } from 'fumadocs-core/i18n/middleware';
import { i18n } from '@/lib/i18n';
import { NextRequest, NextResponse } from 'next/server';
import type { NextFetchEvent } from 'next/server';

const i18nProxy = createI18nMiddleware(i18n);

const DOC_ROOT_REDIRECTS: Record<string, string> = {
  '/docs': '/docs/platform',
  '/docs/': '/docs/platform',
  '/es/docs': '/es/docs/platform',
  '/es/docs/': '/es/docs/platform',
};

export function proxy(request: NextRequest, event: NextFetchEvent) {
  const target = DOC_ROOT_REDIRECTS[request.nextUrl.pathname];
  if (target) {
    return NextResponse.redirect(new URL(target, request.url));
  }

  return i18nProxy(request, event);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

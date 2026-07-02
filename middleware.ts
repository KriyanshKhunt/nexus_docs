import { createI18nMiddleware } from 'fumadocs-core/i18n/middleware';
import { i18n } from '@/lib/i18n';
import { NextRequest, NextResponse } from 'next/server';
import type { NextFetchEvent } from 'next/server';

const i18nMiddleware = createI18nMiddleware(i18n);

export default function middleware(request: NextRequest, event: NextFetchEvent) {
  const { pathname } = request.nextUrl;

  if (pathname === '/docs' || pathname === '/docs/') {
    const url = request.nextUrl.clone();
    url.pathname = '/docs/platform';
    return NextResponse.redirect(url);
  }

  const esDocs = pathname === '/es/docs' || pathname === '/es/docs/';
  if (esDocs) {
    const url = request.nextUrl.clone();
    url.pathname = '/es/docs/platform';
    return NextResponse.redirect(url);
  }

  return i18nMiddleware(request, event);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

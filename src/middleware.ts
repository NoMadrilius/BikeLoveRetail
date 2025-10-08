// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PRIMARY_HOST = "bikelove.com.ua";
const FORCE_HTTPS_HEADER = "x-forwarded-proto"; // Vercel sets this

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host") || "";
  const proto = req.headers.get(FORCE_HTTPS_HEADER) || "";

  let changed = false;

  // Match trailing /page-0 or /page-1
  if (url.pathname.match(/\/page-(0|1)(\/)?$/)) {
    // Remove /page-0 or /page-1 from the path
    url.pathname = url.pathname.replace(/\/page-(0|1)(\/)?$/, '/')
    changed = true;
  }

  // 1) Если www — убрать
  if (host.startsWith("www.")) {
    url.hostname = PRIMARY_HOST;
    changed = true;
  }

  // 2) Если протокол не https — принудительно на https
  // (на Vercel x-forwarded-proto = 'https' для https requests)
  if (proto !== "https" && url.protocol !== "https:") {
    url.protocol = "https:";
    url.hostname = PRIMARY_HOST; // гарантируем основной хост
    changed = true;
  }

  // 3) Убрать конечный слеш (кроме корня)
  const pathname = url.pathname;
  if (pathname.length > 1 && pathname.endsWith("/")) {
    url.pathname = pathname.replace(/\/+$/, "");
    changed = true;
  }

  if (changed) {
    // Используем 301 - permanent
    return NextResponse.redirect(url, 301);
  }

  // Не менять — продолжить обработку
  return NextResponse.next();
}

// Apply only to routes you need
export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
}
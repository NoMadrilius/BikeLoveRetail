import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PRIMARY_HOST = "bikelove.com.ua";
const PROTO_HEADER = "x-forwarded-proto";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const rawHost = req.headers.get("host") || "";
  // normalize host: remove port if present
  const host = rawHost.split(":")[0].toLowerCase();
  const proto = (req.headers.get(PROTO_HEADER) || "").toLowerCase();

  let changed = false;
  let reasons: string[] = [];

  // 1) Remove page-0 or page-1 suffix -> replace with root slash (you had this)
  if (url.pathname.match(/\/page-(0|1)(\/)?$/)) {
    url.pathname = url.pathname.replace(/\/page-(0|1)(\/)?$/, "/");
    changed = true;
    reasons.push("strip-page-N");
  }

  // 2) If host starts with www. -> change to primary host
  if (host.startsWith("www.")) {
    url.hostname = PRIMARY_HOST;
    changed = true;
    reasons.push("remove-www");
  }

  // 3) Force https if not https (use x-forwarded-proto)
  if (proto !== "https" && url.protocol !== "https:") {
    url.protocol = "https:";
    // also ensure primary host (optional, but safe)
    url.hostname = PRIMARY_HOST;
    changed = true;
    reasons.push("force-https");
  }

  // 4) Remove trailing slash (except for root)
  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.replace(/\/+$/, "");
    changed = true;
    reasons.push("remove-trailing-slash");
  }

  if (changed) {
    const res = NextResponse.redirect(url, 301);
    res.headers.set("X-Redirect-Reason", reasons.join(","));
    return res;
  }

  // No redirect — continue, but set canonical header for visibility
  const canonical = `https://${host}${url.pathname === "/" ? "/" : url.pathname}${url.search || ""}`;
  const res = NextResponse.next();
  res.headers.set("Link", `<${canonical}>; rel="canonical"`);
  res.headers.set("X-Canonical", canonical);
  return res;
}

export const config = {
  matcher: "/:path*",
};
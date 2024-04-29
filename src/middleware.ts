import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import qs from 'query-string'

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
    // Clone the request headers and set a new header `x-hello-from-middleware1`

    //const url = req.nextUrl.clone();
    //url.pathname += `/query.${JSON.stringify(qs.parse(req.nextUrl.search, { arrayFormat: 'bracket' }))}`;

    //return NextResponse.rewrite(url);
}
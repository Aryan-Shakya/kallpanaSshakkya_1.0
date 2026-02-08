import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const hostname = request.headers.get('host') || '';
    const { pathname, search } = request.nextUrl;

    // Check if the hostname is the blogs subdomain
    if (hostname.includes('blogs.kallpanasshakkya.in')) {
        // If we are at the root of the subdomain, redirect to /blogs
        if (pathname === '/') {
            return NextResponse.redirect(new URL('/blogs', request.url));
        }

        // If we are visiting a specific path (e.g. /my-post), redirect to /blogs/my-post
        // Avoid double /blogs if it's already there (though unlikely from root)
        if (!pathname.startsWith('/blogs')) {
            return NextResponse.redirect(new URL(`/blogs${pathname}${search}`, request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};

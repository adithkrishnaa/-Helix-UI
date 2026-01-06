import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const isProduction = process.env.NODE_ENV === 'production';
    const allowedHosts = process.env.HELIX_ALLOWED_HOSTS?.split(',') || [];

    if (isProduction && allowedHosts.length > 0) {
        const host = request.headers.get('host');
        if (host && !allowedHosts.includes(host)) {
            return new NextResponse('Forbidden: Unauthorized Domain', { status: 403 });
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

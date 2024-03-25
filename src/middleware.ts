import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com;
    style-src 'self' 'unsafe-inline';
    connect-src 'self' *.google-analytics.com;
    img-src 'self' blob: data:;
    font-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
`;
    // Replace newline characters and spaces
    const contentSecurityPolicyHeaderValue = cspHeader
        .replace(/\s{2,}/g, " ")
        .trim();

    const response = NextResponse.next();

    response.headers.set(
        "Content-Security-Policy",
        contentSecurityPolicyHeaderValue,
    );

    const allowedOrigin: string =
        process.env.NODE_ENV === "development"
            ? "*"
            : process.env.NEXT_PUBLIC_APP_URL ?? "*";

    // add the CORS headers to the response
    response.headers.append("Access-Control-Allow-Credentials", "true");
    response.headers.append(
        "Access-Control-Allow-Origin",
        `${allowedOrigin}, https://www.googletagmanager.com`,
    );
    response.headers.append(
        "Access-Control-Allow-Methods",
        "GET,DELETE,PATCH,POST,PUT,OPTIONS",
    );
    response.headers.append(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-Type, Date",
    );

    return response;
}

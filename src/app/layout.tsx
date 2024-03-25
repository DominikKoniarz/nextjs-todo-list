import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import Header from "./_components/Header";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: false,
});

export const metadata: Metadata = {
    title: "Todo List - Next.js - Dominik Koniarz",
    description: "Simple Todo List application built with Next.js",
    keywords: [
        "todo",
        "list",
        "next.js",
        "NextJS",
        "Dominik Koniarz",
        "simple",
        "manage your tasks",
        "side project",
        "ssr",
        "server side rendering",
        "isr",
        "incremental static regeneration",
        "react",
        "typescript",
        "aplikacja",
        "lista zadań",
    ],
    robots: "index, follow",
    authors: [{ name: "Dominik Koniarz" }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const gaId = process.env.GA_ID ?? "";

    return (
        <html lang="en">
            <body
                className={`${instrumentSans.className} flex flex-col bg-slate-800 text-white`}
            >
                <Header />
                {children}
                <Toaster
                    position="bottom-right"
                    toastOptions={{ duration: 4000 }}
                />
            </body>
            <GoogleAnalytics gaId={gaId} />
        </html>
    );
}

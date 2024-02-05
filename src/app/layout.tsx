import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import Header from "./_components/Header";
import "./globals.css";

const instrumentSans = Instrument_Sans({
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: false,
});

export const metadata: Metadata = {
    title: "Todo List",
    description: "Todo List application built with Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${instrumentSans.className} flex flex-col bg-slate-800 text-white`}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}

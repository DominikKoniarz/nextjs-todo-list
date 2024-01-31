import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

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
				className={`${instrumentSans.className} bg-slate-800 text-white flex flex-col`}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}

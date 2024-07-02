import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/utils/providers/query-provider";

const poppins = Poppins({ weight: ["500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Frontend Mentor | Shortly URL shortening API Challenge",
	description: "Frontend Mentor Challenge",
	openGraph: {
		title: "Caxala URL Shortener",
		description: "A simple and quick way to short your links",
		images: "/images/og-image.png",
		type: "website",
		url: "https://url-shortening-api-master-steel.vercel.app/",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<link
				rel="shortcut icon"
				href="/images/favicon.png"
				type="image/png"
				sizes="32x32"
			/>
			<body className={poppins.className}>
				<ReactQueryProvider>{children}</ReactQueryProvider>
			</body>
		</html>
	);
}

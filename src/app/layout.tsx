import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/utils/Providers";
import Nav from "@/components/Nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Anticapital",
    description: "Current stock prices",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Nav />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

// My custom components
import { cn } from "@/lib/utils";
import Providers from "@/app/ui-providers";
import Navbar from "@/components/shared/Navbar";
// import Footer from "@/components/shared/Footer";

import "./globals.css";

const fontSans = FontSans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Impermanent Loss Calculator",
    description: "And app to calculate your impermanent loss",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <body
                    className={cn(
                        'min-h-screen font-sans antialiased',
                        fontSans.variable
                    )}
                >
                    <Providers>
                        <Navbar />
                        {children}
                        {/* <Footer /> */}
                    </Providers>
                </body>
            </html>
        </ClerkProvider>
    );
}

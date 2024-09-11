"use client"

import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "next-themes"

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <ThemeProvider
                enableSystem
                attribute="class"
                defaultTheme="system"
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </ClerkProvider>
    )
}


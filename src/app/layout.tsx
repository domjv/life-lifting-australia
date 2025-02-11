import type {Metadata} from "next";
import {Lato} from "next/font/google";
import {ThemeProvider} from "next-themes";
import "./globals.css";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";
import {getFatFooter, getNavbar, getSlimFooter, getTopHeaderBar,} from "@/lib/contentful";
import React, {ReactNode} from "react";

const lato = Lato({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-lato",
    weight: ["100", "300", "400", "700"],
});

export const metadata: Metadata = {
    title: "Life Lifting Australia",
    description: "CMS website for life lifting australia",
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: ReactNode;
}>) {
    const topHeaderBar = await getTopHeaderBar();
    const slimFooter = await getSlimFooter();
    const fatFooter = await getFatFooter();
    const navbar = await getNavbar();

    if (!topHeaderBar || !navbar || !slimFooter || !fatFooter) {
        return <></>;
    }

    return (
        <html lang="en" suppressHydrationWarning>
        <body className={lato.className}>
        <ThemeProvider attribute="class" defaultTheme={"light"}>
            <Navbar topHeaderBar={topHeaderBar} navbar={navbar}/>
            <div>{children}</div>
            <Footer slimFooter={slimFooter} fatFooter={fatFooter}/>
        </ThemeProvider>
        </body>
        </html>
    );
}

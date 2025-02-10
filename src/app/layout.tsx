import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import {ThemeProvider} from "next-themes";
import "./globals.css";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";
import {getFatFooter, getNavbar, getSlimFooter, getTopHeaderBar,} from "@/lib/contentful";
import React, {ReactNode} from "react";

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
        <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme={"light"}>
            <Navbar topHeaderBar={topHeaderBar} navbar={navbar}/>
            <div>{children}</div>
            <Footer slimFooter={slimFooter} fatFooter={fatFooter}/>
        </ThemeProvider>
        </body>
        </html>
    );
}

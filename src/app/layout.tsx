import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PageFooter } from "@/shared/components/Page/Footer/Footer";
// import { NavigationBar } from "@/shared/components/Page/NavBar/NavBar";
import { ThemeProvider } from "@/layout/Theme/ThemeContext";
import { Main } from "@/shared/components/Page/Main/Main";
import { SideBar } from "@/shared/components/Page/SideBar/Sidebar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Coreo Mongo GUI",
    description: "Web-based modern GUI for MongoDB",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`min-h-screen grid grid-rows-[1fr_auto] ${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider>
                    <div className="flex min-h-screen flex-col">
                        <div className="flex flex-1">
                            <SideBar />
                            <Main>{children}</Main>
                        </div>
                        <PageFooter />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}

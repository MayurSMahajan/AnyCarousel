import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
});

export const metadata: Metadata = {
    title: "AnyCarousel Docs",
    description: "Documentation for React Any Carousel",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
                <div className="flex min-h-screen">
                    {/* Sidebar */}
                    <aside className="w-64 border-r border-sidebar-border bg-sidebar text-sidebar-foreground fixed h-full overflow-y-auto hidden md:block">
                        <div className="p-6 border-b border-sidebar-border">
                            <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
                                Running Docs
                            </Link>
                        </div>
                        <nav className="p-4 space-y-1">
                            <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Getting Started
                            </div>
                            <Link
                                href="/"
                                className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                            >
                                Introduction
                            </Link>
                            <div className="mt-6 px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Demos
                            </div>
                            <Link
                                href="/playground"
                                className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                            >
                                Playground
                            </Link>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 md:ml-64 min-h-screen flex flex-col bg-background text-foreground">
                        {/* Mobile Header Placeholder (could be added later for responsiveness) */}
                        <div className="flex-1">
                            {children}
                        </div>
                    </main>
                </div>
            </body>
        </html>
    );
}

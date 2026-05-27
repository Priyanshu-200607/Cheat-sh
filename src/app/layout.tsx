import type { Metadata } from "next";
import "./globals.css";
import "./components.css";
import { SidebarWrapper } from "@/components/SidebarWrapper";

export const metadata: Metadata = {
  title: {
    default: "cheat.sh — Developer Cheat Sheets",
    template: "%s | cheat.sh",
  },
  description:
    "Fast, beautiful developer cheat sheets for Python, C, C++, Java, NumPy, SQL, Data Structures, Algorithms, OS, System Design, Cryptography and more.",
  keywords: [
    "cheat sheet",
    "developer",
    "programming",
    "python",
    "java",
    "c++",
    "sql",
    "data structures",
    "algorithms",
    "system design",
    "cryptography",
    "numpy",
    "interview prep",
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "cheat.sh",
  },
  icons: {
    shortcut: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0d1117" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="cheat.sh" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <SidebarWrapper>{children}</SidebarWrapper>
      </body>
    </html>
  );
}

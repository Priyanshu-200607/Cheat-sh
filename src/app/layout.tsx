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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
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

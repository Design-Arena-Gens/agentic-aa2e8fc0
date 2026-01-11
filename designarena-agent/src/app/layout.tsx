import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DesignArena Agent | VS Code & Cloud IDE Copilot",
  description:
    "Integrate DesignArena Agent directly into VS Code or use the DesignArena Cloud IDE to ship polished product experiences faster.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "DesignArena Agent",
    description:
      "Context-aware AI partner for product teams. Integrates with VS Code and the DesignArena Cloud IDE.",
    url: "https://agentic-aa2e8fc0.vercel.app",
    siteName: "DesignArena Agent",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DesignArena Agent",
    description:
      "Bring DesignArena\u2019s AI partner into VS Code or work from the cloud IDE with shared context.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

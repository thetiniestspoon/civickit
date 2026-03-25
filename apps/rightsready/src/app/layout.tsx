import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppShell } from "@civickit/ui";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RightsReady — Know your rights, navigate the process",
  description:
    "Free, private, no account needed. Legal information in plain language for workplace rights, housing rights, and step-by-step legal processes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppShell
          appName="RightsReady"
          appColor="#10b981"
          appIcon="&#9878;&#65039;"
          tagline="Legal navigation for everyone"
          navItems={[
            { label: "Rights Library", href: "/" },
            { label: "Process Navigator", href: "/process" },
          ]}
        >
          {children}
        </AppShell>
      </body>
    </html>
  );
}

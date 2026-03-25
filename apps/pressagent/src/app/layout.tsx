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
  title: "PressAgent - The Newsroom-in-a-Box",
  description:
    "Independent journalism infrastructure. Document intelligence, story leads, and archive tools for journalists.",
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
          appName="PressAgent"
          appColor="#f43f5e"
          appIcon="&#x1F4F0;"
          tagline="Independent journalism infrastructure"
          navItems={[
            { label: "Dashboard", href: "/" },
            { label: "Documents", href: "/documents" },
            { label: "Story Leads", href: "/leads" },
          ]}
        >
          {children}
        </AppShell>
      </body>
    </html>
  );
}

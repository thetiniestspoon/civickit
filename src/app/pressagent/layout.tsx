import type { Metadata } from "next";
import { AppShell } from "@civickit/ui";

export const metadata: Metadata = {
  title: "PressAgent - The Newsroom-in-a-Box",
  description:
    "Independent journalism infrastructure. Document intelligence, story leads, and archive tools for journalists.",
};

export default function PressAgentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppShell
      appName="PressAgent"
      appColor="#f43f5e"
      appIcon="&#x1F4F0;"
      tagline="Independent journalism infrastructure"
      navItems={[
        { label: "Dashboard", href: "/pressagent" },
        { label: "Documents", href: "/pressagent/documents" },
        { label: "Story Leads", href: "/pressagent/leads" },
      ]}
    >
      {children}
    </AppShell>
  );
}

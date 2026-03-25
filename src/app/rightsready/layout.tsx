import type { Metadata } from "next";
import { AppShell } from "@civickit/ui";

export const metadata: Metadata = {
  title: "RightsReady — Know your rights, navigate the process",
  description:
    "Free, private, no account needed. Legal information in plain language for workplace rights, housing rights, and step-by-step legal processes.",
};

export default function RightsReadyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppShell
      appName="RightsReady"
      appColor="#10b981"
      appIcon="&#9878;&#65039;"
      tagline="Legal navigation for everyone"
      navItems={[
        { label: "Rights Library", href: "/rightsready" },
        { label: "Process Navigator", href: "/rightsready/process" },
      ]}
    >
      {children}
    </AppShell>
  );
}

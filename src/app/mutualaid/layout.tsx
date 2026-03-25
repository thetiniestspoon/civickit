import type { Metadata } from "next";
import { AppShell } from "@civickit/ui";

export const metadata: Metadata = {
  title: "MutualAid OS — Community support coordination",
  description:
    "Connect people who need help with communities who can provide it. Find food, shelter, legal aid, medical care, and more in your area.",
};

const navItems = [
  { label: "Find Resources", href: "/mutualaid" },
  { label: "Volunteer", href: "/mutualaid/volunteer" },
  { label: "About", href: "/mutualaid/about" },
];

export default function MutualaidLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell
      appName="MutualAid OS"
      appColor="#f59e0b"
      appIcon="🤝"
      tagline="Community support coordination"
      navItems={navItems}
    >
      {children}
    </AppShell>
  );
}

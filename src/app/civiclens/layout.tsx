import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CivicLens — Government Transparency in Plain Language",
  description: "What did your government do this week? Track legislation, executive orders, votes, and campaign promises in plain language.",
};

export default function CivicLensLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BallotKit - Understand Your Ballot",
  description:
    "Enter your address, understand your ballot. A nonpartisan voter guide with plain-language explanations for every race and measure.",
};

export default function BallotKitLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

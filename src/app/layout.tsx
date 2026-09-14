import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Kumia Labs | Find what works together",
  description: "Research that helps you choose products that work well together for the way you plan to use them.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kumia Labs | Find what works together",
    description: "Research that helps you choose products that work well together for the way you plan to use them.",
    url: "/",
    siteName: "Kumia Labs",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${geist.variable} ${geistMono.variable}`}><body>{children}</body></html>;
}

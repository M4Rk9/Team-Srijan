import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://teamsrijan.bitmesra.ac.in"),
  title: {
    default: "Team Srijan | Formula Student Team of BIT Mesra",
    template: "%s | Team Srijan"
  },
  description:
    "Team Srijan is BIT Mesra's Formula Student team, engineering high-performance open-wheel race cars for national and international competitions.",
  keywords: [
    "Team Srijan",
    "BIT Mesra",
    "Formula Student India",
    "Formula Bharat",
    "SUPRA SAEINDIA",
    "motorsport engineering"
  ],
  openGraph: {
    title: "Team Srijan | Engineering Speed. Forging Innovation.",
    description:
      "A globally competitive student motorsport organization designing and manufacturing Formula Student race cars.",
    url: "https://teamsrijan.bitmesra.ac.in",
    siteName: "Team Srijan",
    images: [{ url: "/images/srijan-hero.png", width: 1536, height: 1024, alt: "Team Srijan Formula Student race car" }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Srijan | Formula Student Team of BIT Mesra",
    description: "Engineering Speed. Forging Innovation. Racing the Future.",
    images: ["/images/srijan-hero.png"]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

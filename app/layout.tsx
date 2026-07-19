import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teamsrijan.bitmesra.ac.in"),
  title: {
    default:
      "Team Srijan | Formula Student at Birla Institute of Technology, Mesra",
    template: "%s | Team Srijan",
  },
  description:
    "Team Srijan designs, builds, and races Formula Student cars at Birla Institute of Technology, Mesra.",
  keywords: [
    "Team Srijan",
    "Birla Institute of Technology, Mesra",
    "Formula Student India",
    "Formula Bharat",
    "SUPRA SAEINDIA",
    "motorsport engineering",
  ],
  openGraph: {
    title: "Team Srijan | Our Hearts Don't Beat. They Revv!",
    description:
      "The student-run Formula Student team of Birla Institute of Technology, Mesra.",
    url: "https://teamsrijan.bitmesra.ac.in",
    siteName: "Team Srijan",
    images: [
      {
        url: "/images/srijan-hero.png",
        width: 1536,
        height: 1024,
        alt: "Team Srijan Formula Student race car",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Team Srijan | Formula Student at Birla Institute of Technology, Mesra",
    description: "Our Hearts Don't Beat. They Revv!",
    images: ["/images/srijan-hero.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${barlowCondensed.variable}`}>
        {children}
      </body>
    </html>
  );
}

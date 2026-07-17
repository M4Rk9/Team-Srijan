import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact-page-content";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Team Srijan for sponsorship, collaboration, recruitment, media, or workshop visits at BIT Mesra."
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <SiteNav />
      <ContactPageContent />
    </main>
  );
}

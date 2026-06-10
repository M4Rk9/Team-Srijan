import type { Metadata } from "next";
import { TeamPageClient } from "@/components/team-page-client";

export const metadata: Metadata = {
  title: "The Team | Team Srijan",
  description:
    "Meet the engineers, designers, strategists, and innovators behind Team Srijan, the Formula Student team of BIT Mesra.",
  openGraph: {
    title: "The Team | Team Srijan",
    description:
      "A premium look at the multidisciplinary Team Srijan race program, leadership, subsystems, culture, and members.",
    images: ["/images/TSI-25.png"]
  }
};

export default function TeamPage() {
  return <TeamPageClient />;
}

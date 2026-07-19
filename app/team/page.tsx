import type { Metadata } from "next";
import { TeamPageClient } from "@/components/team-page-client";

export const metadata: Metadata = {
  title: "The Team | Team Srijan",
  description:
    "Meet the engineers, designers, strategists, and innovators behind Team Srijan, the Formula Student team of Birla Institute of Technology, Mesra.",
  openGraph: {
    title: "The Team | Team Srijan",
    description:
      "Meet the current K23, K24, and K25 members of Team Srijan across every engineering and management subteam.",
    images: ["/images/TSI-25.png"],
  },
};

export default function TeamPage() {
  return <TeamPageClient />;
}

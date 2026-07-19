import type { Metadata } from "next";
import { JoinApplicationForm } from "@/components/join-application-form";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Join Team Srijan",
  description:
    "Apply to join a Team Srijan technical or management subteam at Birla Institute of Technology, Mesra.",
};

export default function JoinPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white">
      <SiteNav />
      <section className="carbon relative px-4 pb-16 pt-28 sm:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(217,4,41,0.2),transparent_30rem),radial-gradient(circle_at_82%_28%,rgba(59,130,246,0.14),transparent_30rem)]" />
        <div className="telemetry-grid absolute inset-0 opacity-35" />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <JoinApplicationForm />
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Bell, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Join Team Srijan",
  description: "Recruitment updates and opportunities to join Team Srijan, the Formula Student team of BIT Mesra."
};

export default function JoinPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white">
      <section className="carbon relative grid min-h-screen place-items-center px-4 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(217,4,41,0.22),transparent_30rem),radial-gradient(circle_at_76%_34%,rgba(255,84,0,0.12),transparent_26rem)]" />
        <div className="telemetry-grid absolute inset-0 opacity-40" />

        <div className="relative z-10 w-full max-w-4xl rounded-[8px] border border-white/10 bg-black/62 p-7 text-center shadow-2xl shadow-black/50 backdrop-blur-xl md:p-12">
          <div className="mx-auto mb-9 flex w-fit items-center gap-4">
            <Image src="/images/team-srijan-logo.png" alt="Team Srijan logo" width={76} height={76} className="h-16 w-16 object-contain" />
            <span className="h-10 w-px bg-white/12" />
            <Image src="/images/bit-mesra-logo.png" alt="BIT Mesra logo" width={58} height={58} className="h-12 w-12 object-contain" />
          </div>

          <span className="mx-auto grid size-16 place-items-center rounded-[8px] border border-[#ff5400]/35 bg-[#d90429]/12 text-[#ff5400]">
            <Users size={30} />
          </span>
          <p className="font-telemetry mt-7 text-xs font-bold uppercase tracking-[0.34em] text-[#ff5400]">Recruitment Status</p>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,5.6rem)] font-bold uppercase leading-none">
            Applications Are Currently Closed
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/66 md:text-lg">
            Team Srijan is not currently recruiting new members. Stay tuned to our website and social media channels for future recruitment announcements and application updates.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.045] p-4 text-sm text-white/58">
            <Bell className="shrink-0 text-[#ff5400]" size={19} />
            Recruitment details will be published here when the next intake opens.
          </div>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/team">
                <ArrowLeft size={18} />
                Back to The Team
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="https://www.instagram.com/team_srijan" target="_blank" rel="noopener noreferrer">
                Follow Recruitment Updates
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

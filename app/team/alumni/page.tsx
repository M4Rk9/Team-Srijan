import type { Metadata } from "next";
import Image from "next/image";
import { AlumniDirectory } from "@/components/alumni-directory";
import { SiteNav } from "@/components/site-nav";
import { TeamSectionTabs } from "@/components/team-section-tabs";
import { alumni } from "@/lib/alumni";

export const metadata: Metadata = {
  title: "Team Alumni",
  description: "Meet the Team Srijan alumni who helped design, build, manage, and race BIT Mesra's Formula Student cars."
};

export default function AlumniPage() {
  const oldestYear = Math.min(...alumni.map((member) => member.year));
  const latestYear = Math.max(...alumni.map((member) => member.year));

  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white">
      <SiteNav />
      <section className="relative overflow-hidden pb-14 pt-32 sm:pt-36">
        <Image src="/images/team_pic.png" alt="Team Srijan Formula Student team" fill priority sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#070707_0%,rgba(7,7,7,0.82)_55%,rgba(7,7,7,0.7)_100%),linear-gradient(0deg,#070707,transparent)]" />
        <div className="telemetry-grid absolute inset-0 opacity-40" />
        <div className="container relative z-10">
          <TeamSectionTabs active="alumni" />
          <p className="font-telemetry mt-10 text-xs font-bold uppercase tracking-[0.34em] text-[#ff5400]">The people who built the legacy</p>
          <h1 className="mt-4 max-w-5xl font-display text-[clamp(3rem,8vw,8rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em]">Team<br /><span className="text-white/42">Alumni</span></h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/66 md:text-lg">
            Every generation leaves the car—and the team—stronger than they found it. Meet the alumni whose work continues to shape Team Srijan.
          </p>
          <div className="mt-8 flex gap-8 border-t border-white/10 pt-6">
            <div><p className="font-display text-3xl font-bold">{alumni.length}</p><p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/42">Profiles</p></div>
            <div><p className="font-display text-3xl font-bold">{oldestYear}–{latestYear}</p><p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/42">Passing years</p></div>
          </div>
        </div>
      </section>

      <section className="section-pad carbon pt-12">
        <div className="container">
          <AlumniDirectory />
        </div>
      </section>
    </main>
  );
}

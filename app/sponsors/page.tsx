import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Sponsors 2026 | Team Srijan",
  description:
    "Meet the 2026 season sponsors supporting Team Srijan, the Formula Student team of BIT Mesra."
};

const sponsors = [
  {
    tier: "Platinum Sponsor",
    name: "PVUNL",
    href: "https://www.pvunl.co.in/",
    logo: "/images/PVUNL.png",
    featured: true
  },
  {
    tier: "Gold Sponsor",
    name: "TVS Motor Company",
    href: "https://www.tvsmotor.com/",
    logo: "/images/TVS.png"
  },
  {
    tier: "Gold Sponsor",
    name: "Dassault Systemes",
    href: "https://www.3ds.com/",
    logo: "/images/Dassault Systemes.png"
  },
  {
    tier: "Gold Sponsor",
    name: "Ansys",
    href: "https://www.ansys.com/en-in",
    logo: "/images/Ansys.png"
  },
  {
    tier: "Silver Sponsor",
    name: "Kundan Lal & Sons",
    href: "https://kundanlalandsons.com/",
    logo: "/images/KundanLal.png"
  },
  {
    tier: "Silver Sponsor",
    name: "Magod Laser",
    href: "https://www.magodlaser.in/",
    logo: "/images/Magod Lazer.png"
  },
  {
    tier: "Silver Sponsor",
    name: "Realis Simulation",
    href: "https://www.realis-simulation.com/",
    logo: "/images/Realis.png"
  }
];

const sponsorGroups = [
  {
    title: "Platinum Sponsor",
    sponsors: sponsors.filter((sponsor) => sponsor.tier === "Platinum Sponsor"),
    grid: "lg:grid-cols-1",
    logoClass: "max-h-56 md:max-h-64",
    tileClass: "min-h-80 md:min-h-96"
  },
  {
    title: "Gold Sponsors",
    sponsors: sponsors.filter((sponsor) => sponsor.tier === "Gold Sponsor"),
    grid: "lg:grid-cols-3",
    logoClass: "max-h-44 md:max-h-52",
    tileClass: "min-h-64 md:min-h-72"
  },
  {
    title: "Silver Sponsors",
    sponsors: sponsors.filter((sponsor) => sponsor.tier === "Silver Sponsor"),
    grid: "lg:grid-cols-3",
    logoClass: "max-h-40 md:max-h-48",
    tileClass: "min-h-60 md:min-h-68"
  }
] as const;

export default function SponsorsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative min-h-screen bg-black py-8">
        <div className="telemetry-grid absolute inset-0 opacity-20" />
        <div className="container relative z-10">
          <nav className="flex items-center justify-between py-5">
            <Link href="/" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/68 transition hover:text-white">
              <ArrowLeft size={18} />
              Back Home
            </Link>
            <div className="flex items-center gap-3">
              <Image src="/images/team-srijan-logo.png" alt="Team Srijan logo" width={54} height={54} className="h-12 w-12 object-contain" />
              <Image src="/images/bit-mesra-logo.png" alt="BIT Mesra logo" width={42} height={42} className="h-10 w-10 object-contain" />
            </div>
          </nav>

          <div className="mx-auto max-w-4xl py-12 text-center">
            <p className="font-telemetry mb-4 text-xs font-bold uppercase tracking-[0.34em] text-[#ff5400]">Current Season 2026</p>
            <h1 className="font-display text-[clamp(2.8rem,7vw,6.8rem)] font-bold uppercase leading-none tracking-[0.05em] text-white">
              Our Sponsors
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/64">
                Team Srijan is backed by organizations that believe in student engineering, manufacturing discipline,
                simulation-led development, and the future of Indian Formula Student motorsport.
            </p>
            <div className="mt-8 grid gap-3 border-y border-white/10 py-6 sm:grid-cols-3">
              {[
                ["1", "Platinum Partner"],
                ["3", "Gold Partners"],
                ["3", "Silver Partners"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-[8px] border border-white/10 bg-black p-5">
                  <p className="font-display text-4xl font-bold">{value}</p>
                  <p className="font-telemetry mt-2 text-xs uppercase tracking-[0.22em] text-white/45">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-16">
            {sponsorGroups.map((group) => (
              <section key={group.title} aria-labelledby={`${group.title.replace(/\s+/g, "-").toLowerCase()}-heading`}>
                <div className="mb-7 flex items-center justify-center gap-4 text-center">
                  <span className="hidden h-px w-24 bg-gradient-to-r from-transparent to-white/18 sm:block" />
                  <h2 id={`${group.title.replace(/\s+/g, "-").toLowerCase()}-heading`} className="font-display text-2xl font-bold uppercase tracking-[0.08em] text-white md:text-3xl">
                    {group.title}
                  </h2>
                  <span className="hidden h-px w-24 bg-gradient-to-l from-transparent to-white/18 sm:block" />
                </div>
                <div className={`grid gap-6 sm:grid-cols-2 ${group.grid}`}>
                  {group.sponsors.map((sponsor) => (
                    <Link
                      key={sponsor.name}
                      href={sponsor.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${sponsor.name} website`}
                      className={`group relative grid ${group.tileClass} place-items-center overflow-hidden rounded-[8px] border border-white/12 bg-black p-8 transition hover:-translate-y-1 hover:border-[#ff5400]/70 hover:shadow-[0_22px_80px_rgba(217,4,41,0.18)]`}
                    >
                      <Image
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        width={sponsor.featured ? 520 : 430}
                        height={260}
                        className={`${group.logoClass} w-auto object-contain transition duration-300 group-hover:scale-[1.04]`}
                      />
                      <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-[6px] border border-white/10 bg-white/[0.035] text-white/50 transition group-hover:border-[#ff5400]/70 group-hover:text-[#ff5400]">
                        <ExternalLink size={17} />
                      </span>
                      <span className="font-telemetry absolute bottom-4 left-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/42 transition group-hover:text-[#ff5400]">
                        <Trophy size={13} />
                        {sponsor.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 py-8 text-sm text-white/48 md:flex-row">
            <p>Team Srijan, Formula Student team of BIT Mesra.</p>
            <Link href="/#contact" className="font-bold uppercase tracking-[0.18em] text-white/70 transition hover:text-white">
              Become a sponsor
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

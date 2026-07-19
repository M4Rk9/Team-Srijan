import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cpu, ExternalLink, Trophy } from "lucide-react";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Sponsors 2026 | Team Srijan",
  description:
    "Meet the 2026 season sponsors supporting Team Srijan, the Formula Student team of Birla Institute of Technology, Mesra.",
};

const sponsors = [
  {
    category: "Platinum Sponsor",
    name: "PVUNL",
    href: "https://www.pvunl.co.in/",
    logo: "/images/PVUNL.png",
    featured: true,
  },
  {
    category: "Gold Sponsor",
    name: "TVS Motor Company",
    href: "https://www.tvsmotor.com/",
    logo: "/images/TVS.png",
  },
  {
    category: "Silver Sponsor",
    name: "Kundan Lal & Sons",
    href: "https://kundanlalandsons.com/",
    logo: "/images/KundanLal.png",
  },
  {
    category: "Silver Sponsor",
    name: "Magod Laser",
    href: "https://www.magodlaser.in/",
    logo: "/images/Magod Lazer.png",
  },
  {
    category: "Software Sponsor",
    name: "Dassault Systèmes",
    href: "https://www.3ds.com/",
    logo: "/images/Dassault Systemes.png",
  },
  {
    category: "Software Sponsor",
    name: "Ansys",
    href: "https://www.ansys.com/en-in",
    logo: "/images/Ansys.png",
  },
  {
    category: "Software Sponsor",
    name: "Realis Simulation",
    href: "https://www.realis-simulation.com/",
    logo: "/images/Realis.png",
  },
] as const;

const sponsorGroups = [
  {
    title: "Platinum Sponsor",
    category: "Platinum Sponsor",
    description:
      "Principal support for Team Srijan's 2026 Formula Student programme.",
    grid: "lg:grid-cols-1",
    logoClass: "max-h-56 md:max-h-64",
    tileClass: "min-h-80 md:min-h-96",
    icon: Trophy,
  },
  {
    title: "Gold Sponsor",
    category: "Gold Sponsor",
    description:
      "Major support for our vehicle development and competition season.",
    grid: "lg:grid-cols-1",
    logoClass: "max-h-44 md:max-h-52",
    tileClass: "min-h-64 md:min-h-72",
    icon: Trophy,
  },
  {
    title: "Silver Sponsors",
    category: "Silver Sponsor",
    description:
      "Manufacturing and programme partners who help turn designs into a running car.",
    grid: "lg:grid-cols-2",
    logoClass: "max-h-40 md:max-h-48",
    tileClass: "min-h-60 md:min-h-68",
    icon: Trophy,
  },
  {
    title: "Software Sponsors",
    category: "Software Sponsor",
    description:
      "Design, simulation, and validation tools used throughout the development of our Formula Student cars.",
    grid: "lg:grid-cols-3",
    logoClass: "max-h-36 md:max-h-44",
    tileClass: "min-h-60 md:min-h-68",
    icon: Cpu,
  },
] as const;

export default function SponsorsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <SiteNav />
      <section className="relative min-h-screen bg-black pb-8 pt-32">
        <div className="telemetry-grid absolute inset-0 opacity-20" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl pb-14 text-center">
            <p className="font-telemetry mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#ff5400]">
              Current Season 2026
            </p>
            <h1 className="font-display text-[clamp(2.8rem,6vw,5.8rem)] font-bold uppercase leading-[0.96] tracking-[-0.01em] text-white">
              Our Sponsors
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/64">
              Every Team Srijan car is made possible by partners who support our
              students, our workshop, and our competition season.
            </p>
          </div>

          <div className="grid gap-16">
            {sponsorGroups.map((group) => {
              const GroupIcon = group.icon;
              const groupSponsors = sponsors.filter(
                (sponsor) => sponsor.category === group.category,
              );
              return (
                <section
                  key={group.title}
                  aria-labelledby={`${group.title.replace(/\s+/g, "-").toLowerCase()}-heading`}
                >
                  <div className="mb-7 text-center">
                    <div className="flex items-center justify-center gap-4">
                      <span className="hidden h-px w-24 bg-gradient-to-r from-transparent to-white/18 sm:block" />
                      <h2
                        id={`${group.title.replace(/\s+/g, "-").toLowerCase()}-heading`}
                        className="font-display text-2xl font-bold uppercase tracking-[0.02em] text-white md:text-3xl"
                      >
                        {group.title}
                      </h2>
                      <span className="hidden h-px w-24 bg-gradient-to-l from-transparent to-white/18 sm:block" />
                    </div>
                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/52">
                      {group.description}
                    </p>
                  </div>

                  <div className={`grid gap-6 sm:grid-cols-2 ${group.grid}`}>
                    {groupSponsors.map((sponsor) => (
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
                        <span className="font-telemetry absolute bottom-4 left-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/42 transition group-hover:text-[#ff5400]">
                          <GroupIcon size={13} />
                          {sponsor.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 py-8 text-sm text-white/48 md:flex-row">
            <p>
              Team Srijan, Formula Student team of Birla Institute of
              Technology, Mesra.
            </p>
            <Link
              href="/contact"
              className="font-bold uppercase tracking-[0.1em] text-white/70 transition hover:text-white"
            >
              Become a sponsor
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

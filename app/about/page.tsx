import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cog, Flag, Globe2, Trophy, Users, Wrench } from "lucide-react";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover Team Srijan's history since 2007, from BIT Mesra to Formula Student competitions in the United Kingdom, Italy, and India."
};

const stats = [
  { value: "40+", label: "Student Engineers", copy: "Across design, manufacturing, electronics, and business", icon: Users },
  { value: "12+", label: "Competitions", copy: "National and international Formula Student events", icon: Trophy },
  { value: "12", label: "Cars Built", copy: "Driven by continuous engineering evolution", icon: Flag }
] as const;

const timeline = [
  { year: "2007", title: "The beginning", copy: "Team Srijan was established at BIT Mesra and entered Formula Student UK at the Silverstone Circuit, securing 5th place in Class II." },
  { year: "2013", title: "India to Italy", copy: "At Formula Student Italy, held at the Riccardo Paletti Circuit, Team Srijan emerged as the second-best Indian team in the Engineering Design Event." },
  { year: "2018", title: "Business excellence", copy: "The team won the Business Plan Presentation at Formula Bharat, demonstrating that our race program is built on engineering and commercial discipline." },
  { year: "2022", title: "A national podium", copy: "Team Srijan finished second overall at Formula Green and secured first place in the Cost Presentation event." },
  { year: "Today", title: "The legacy continues", copy: "Every new generation inherits two decades of learning and pushes the car forward through simulation, manufacturing, testing, and competition." }
] as const;

const achievements = [
  ["2007", "Formula Student UK · 5th in Class II events"],
  ["2011", "SUPRA SAE · Team Srijan was reformed"],
  ["2012", "SUPRA SAE · Built the second-lightest car"],
  ["2013", "Formula Student Italy · Second-best Indian team in the Engineering Design Event"],
  ["2015", "Formula Design Challenge · Seventh overall"],
  ["2016", "Formula Student India · Only Royal Enfield-powered car to clear technical inspection"],
  ["2017", "Formula Bharat · Sixth in static events and twelfth overall"],
  ["2018", "Formula Bharat · First in Business Plan, sixth in Design, and eleventh overall"],
  ["2019", "Formula Bharat · Eighth in Business Plan and sixteenth overall"],
  ["2022", "Formula Green · First in Cost Presentation and second overall"],
  ["2024", "PIEV · Second in FMEA and seventh overall"]
] as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white">
      <SiteNav />

      <section className="relative flex min-h-[88vh] items-end overflow-hidden pb-16 pt-32">
        <Image
          src="/images/team_pic.png"
          alt="Team Srijan members and their Formula Student car"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.96)_0%,rgba(5,5,5,0.78)_48%,rgba(5,5,5,0.35)_100%),linear-gradient(0deg,#070707_0%,transparent_45%)]" />
        <div className="telemetry-grid absolute inset-0 opacity-45" />
        <div className="container relative z-10">
          <p className="font-telemetry text-xs font-bold uppercase tracking-[0.34em] text-[#ff5400]">Established 2007 · BIT Mesra</p>
          <h1 className="mt-5 max-w-5xl font-display text-[clamp(2.4rem,5.5vw,5.4rem)] font-bold uppercase leading-[1.02] tracking-[-0.03em]">
            About<br /><span className="text-white/48">Team Srijan</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            We are BIT Mesra&apos;s student-run Formula Student team. Together, we design, manufacture, and race single-seater cars from the ground up.
          </p>
        </div>
      </section>

      <section className="section-pad carbon relative overflow-hidden">
        <div className="absolute right-0 top-0 h-64 w-64 bg-[#d90429]/16 blur-[110px]" />
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="font-telemetry text-xs font-bold uppercase tracking-[0.3em] text-[#ff5400]">Who we are</p>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,4.1rem)] font-bold leading-[1.04]">More than a race car.</h2>
              <div className="mt-7 space-y-5 text-base leading-8 text-white/66 md:text-lg">
                <p>
                  Team Srijan is BIT Mesra&apos;s student-run Formula SAE program. Established in 2007, we are one of the institute&apos;s oldest and most established technical clubs.
                </p>
                <p>
                  Students from diverse engineering disciplines work together to design, analyse, manufacture, test, and race a formula-style car. Every subsystem is developed under real constraints of performance, reliability, cost, and time.
                </p>
                <p>
                  We exist to do more than build a race car. Team Srijan gives students room to become engineers and leaders while carrying BIT Mesra&apos;s name onto national and international grids.
                </p>
              </div>
            </div>

            <div className="relative min-h-[520px] overflow-hidden rounded-[12px] border border-white/10">
              <Image src="/images/srijan-hero.png" alt="Team Srijan Formula Student engineering" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="font-telemetry text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff5400]">Design · Build · Validate · Race</p>
                <p className="mt-3 font-display text-3xl font-bold">Engineering beyond the classroom.</p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {stats.map(({ value, label, copy, icon: Icon }) => (
              <article key={label} className="group rounded-[10px] border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-[#ff5400]/55">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-display text-5xl font-bold text-white">{value}</p>
                  <span className="grid size-12 place-items-center rounded-[7px] bg-[#d90429]/15 text-[#ff5400]"><Icon /></span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-white/52">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#080808]">
        <div className="container">
          <div className="max-w-4xl">
            <p className="font-telemetry text-xs font-bold uppercase tracking-[0.3em] text-[#ff5400]">Our history</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.2vw,4.2rem)] font-bold leading-[1.04]">A legacy on the global stage.</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/62 md:text-lg">
              Since 2007, Team Srijan has been a proud part of BIT Mesra&apos;s technical and motorsport legacy, combining innovation with engineering excellence across generations.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <HistoryImage image="/images/TSI-07.png" eyebrow="Formula Student UK" title="Silverstone Circuit · 2007" copy="5th place in Class II during Team Srijan's first international chapter." />
            <HistoryImage image="/images/TSI-13.png" eyebrow="Formula Student Italy" title="Riccardo Paletti Circuit · 2013" copy="Second-best Indian team in the Engineering Design Event." />
          </div>

          <div className="relative mt-16 border-l border-[#d90429]/55 pl-7 md:ml-8 md:pl-12">
            {timeline.map((item) => (
              <article key={item.year} className="relative grid gap-3 border-b border-white/10 py-7 first:pt-0 last:border-0 md:grid-cols-[130px_1fr] md:gap-8">
                <span className="absolute -left-[34px] top-9 size-3 rounded-full bg-[#ff5400] shadow-[0_0_24px_rgba(255,84,0,0.7)] first:top-2 md:-left-[54px]" />
                <p className="font-telemetry text-sm font-bold uppercase tracking-[0.2em] text-[#ff5400]">{item.year}</p>
                <div>
                  <h3 className="font-display text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-white/58 md:text-base">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 border-t border-white/10 pt-14">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <span className="grid size-14 place-items-center rounded-[8px] bg-[#d90429]/15 text-[#ff5400]"><Trophy size={30} /></span>
                <p className="font-telemetry mt-6 text-xs font-bold uppercase tracking-[0.3em] text-[#ff5400]">Achievements</p>
                <h3 className="mt-4 font-display text-[clamp(1.8rem,3.2vw,3.3rem)] font-bold leading-[1.06]">Milestones earned along the way.</h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/58">
                  Our history is measured not only by trophies, but by the seasons when a team learned to design better, communicate clearly, and arrive more prepared than before.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {achievements.map(([year, achievement]) => (
                  <article key={`${year}-${achievement}`} className="rounded-[9px] border border-white/10 bg-white/[0.035] p-5 transition hover:border-[#ff5400]/50">
                    <p className="font-telemetry text-xs font-bold uppercase tracking-[0.22em] text-[#ff5400]">{year}</p>
                    <p className="mt-3 text-sm leading-7 text-white/68">{achievement}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad carbon">
        <div className="container">
          <div className="grid overflow-hidden rounded-[12px] border border-white/10 bg-[#111216] lg:grid-cols-[1fr_0.9fr]">
            <div className="p-7 sm:p-10 lg:p-14">
              <p className="font-telemetry text-xs font-bold uppercase tracking-[0.3em] text-[#ff5400]">The next chapter</p>
              <h2 className="mt-4 font-display text-[clamp(2rem,3.8vw,3.9rem)] font-bold leading-[1.05]">Built by students. Carried by generations.</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/62">
                Our legacy is not stored in trophies alone. It lives in every drawing reviewed, tube welded, lap tested, sponsor earned, and lesson passed from one batch to the next.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/join" className="inline-flex h-13 items-center justify-center gap-2 rounded-[6px] bg-[#d90429] px-6 text-sm font-bold uppercase tracking-[0.14em] transition hover:bg-[#ff173c]">
                  Join the Team <ArrowRight size={18} />
                </Link>
                <Link href="/cars" className="inline-flex h-13 items-center justify-center gap-2 rounded-[6px] border border-white/20 px-6 text-sm font-bold uppercase tracking-[0.14em] transition hover:border-[#ff5400]">
                  Explore Our Cars
                </Link>
              </div>
            </div>
            <div className="grid min-h-72 grid-cols-2 gap-px bg-white/10">
              {[Wrench, Cog, Globe2, Flag].map((Icon, index) => (
                <div key={index} className="grid place-items-center bg-[#0b0b0c] text-white/42 transition hover:text-[#ff5400]">
                  <Icon size={54} strokeWidth={1.35} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function HistoryImage({ image, eyebrow, title, copy }: { image: string; eyebrow: string; title: string; copy: string }) {
  return (
    <article className="group relative min-h-[430px] overflow-hidden rounded-[12px] border border-white/10">
      <Image src={image} alt={`${eyebrow} ${title}`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7">
        <p className="font-telemetry text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff5400]">{eyebrow}</p>
        <h3 className="mt-3 font-display text-3xl font-bold">{title}</h3>
        <p className="mt-3 max-w-lg text-sm leading-7 text-white/62">{copy}</p>
      </div>
    </article>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bolt,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  Cpu,
  Download,
  ExternalLink,
  Facebook,
  Gauge,
  Instagram,
  Linkedin,
  Sparkles,
  Users,
  Wrench,
  Youtube
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { navItems, SiteNav } from "@/components/site-nav";
import { subteams } from "@/lib/subteams";

const teamLogo = "/images/team-srijan-logo.png";
const instituteLogo = "/images/bit-mesra-logo.png";

const subsystemIcons = {
  aerodynamics: Sparkles,
  brakes: Gauge,
  chassis: Wrench,
  electrical: Cpu,
  powertrain: Bolt,
  "vehicle-dynamics": Gauge,
  "management-media": BriefcaseBusiness
} as const;

const sponsorReasons = [
  ["Brand Exposure", "Car livery, apparel, launch campaigns, social media and event presence.", Building2],
  ["Engineering R&D", "Prototype validation, manufacturing collaboration and technical storytelling.", Cpu],
  ["Student Innovation", "Support future engineers working on real constraints and real hardware.", Sparkles],
  ["Talent Pipeline", "Meet disciplined engineers trained through motorsport-grade execution.", Users],
  ["CSR Impact", "Back hands-on STEM culture and Indian student motorsport growth.", BadgeCheck]
] as const;


const competitionLinks = [
  ["Supra SAE", "https://www.suprasaeindia.org/"],
  ["Formula Bharat", "https://formulabharat.com/"],
  ["Formula Student UK", "https://www.imeche.org/events/formula-student"],
  ["Formula Student Italy", "https://www.formula-ata.it/formula-sae-italy/"],
  ["Formula Student Germany", "https://www.formulastudent.de/teams/fse/details/tid/1132/"]
] as const;

const newsletters = [
  {
    period: "May - June 2026",
    issue: "Issue 03",
    title: "First Test. Next Chapter.",
    summary: "TSI-26 completes its maiden test as the team prepares for Formula Bharat 2027 and advances final manufacturing work.",
    cover: "/images/newsletters/revving-passions-may-jun-2026.jpg",
    pdf: "/newsletters/revving-passions-may-jun-2026.pdf"
  },
  {
    period: "March - April 2026",
    issue: "Issue 02",
    title: "TSI-26 Takes Shape.",
    summary: "The chassis is completed, machined parts arrive, composite moulds progress, and the workshop prepares for final assembly.",
    cover: "/images/newsletters/revving-passions-mar-apr-2026.jpg",
    pdf: "/newsletters/revving-passions-mar-apr-2026.pdf"
  },
  {
    period: "January - February 2026",
    issue: "Issue 01",
    title: "From Design to Manufacturing.",
    summary: "The TSI-26 design reaches completion, procurement begins, and the team welcomes PVUNL as its platinum sponsor.",
    cover: "/images/newsletters/revving-passions-jan-feb-2026.jpg",
    pdf: "/newsletters/revving-passions-jan-feb-2026.pdf"
  }
] as const;

function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let frame = 0;
    const total = 54;
    const tick = () => {
      frame += 1;
      setCount(Math.round((value * frame) / total));
      if (frame < total) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [value]);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 160]);
  const opacity = useTransform(scrollY, [0, 650], [1, 0.28]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Image src="/images/TSI-25.png" alt="Team Srijan TSI-25 Formula Student race car" fill priority sizes="100vw" className="object-cover" />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/TSI-25.png"
          aria-hidden="true"
          tabIndex={-1}
          className="hero-background-video absolute inset-0 h-full w-full object-cover brightness-[1.08] contrast-[1.04] saturate-[1.08]"
        >
          <source src="/videos/team-srijan-hero.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.82)_0%,rgba(5,5,5,0.58)_32%,rgba(5,5,5,0.12)_60%,rgba(5,5,5,0.08)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.48)_0%,transparent_28%,transparent_68%,rgba(5,5,5,0.72)_100%)]" />
      <div className="telemetry-grid absolute inset-0 opacity-25" />
      <div className="container relative z-10 flex min-h-screen items-end pb-24 pt-32 md:items-center md:pb-0">
        <div className="max-w-[680px]">
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="font-telemetry mb-4 text-[10px] font-bold uppercase tracking-[0.32em] text-[#ff5400] md:text-xs">
            Formula Student Team of BIT Mesra
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="font-display text-[clamp(2.1rem,3.25vw,3.5rem)] font-bold leading-[1.06] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]"
          >
            Engineering Speed. Forging Innovation. Racing the Future.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.22 }} className="mt-5 max-w-xl text-sm leading-7 text-white/76 md:text-base">
            Team Srijan is the official Formula Student team of BIT Mesra, designing and manufacturing high-performance open-wheel race cars for national and international competitions.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.34 }} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/sponsors">Sponsor Us <ArrowRight size={18} /></Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/cars">Explore Our Cars</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/team">Meet The Team</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.a href="#formula-student" aria-label="Scroll to Formula Student introduction" className="absolute bottom-8 left-1/2 z-10 grid -translate-x-1/2 place-items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/55" animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
        <ChevronDown />
      </motion.a>
    </section>
  );
}

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <Reveal className="mb-12 max-w-3xl">
      <p className="font-telemetry mb-3 text-xs font-bold uppercase tracking-[0.32em] text-[#ff5400]">{eyebrow}</p>
      <h2 className="font-display text-[clamp(1.75rem,3.4vw,3.4rem)] font-bold leading-[1.08]">{title}</h2>
      {copy && <p className="mt-5 text-base leading-8 text-white/62 md:text-lg">{copy}</p>}
    </Reveal>
  );
}

function FormulaStudent() {
  const competitionStages = [
    ["Static Events", "The team explains its engineering choices, costs, and business thinking."],
    ["Dynamic Events", "The car is tested through acceleration, skidpad, autocross, and endurance runs."],
    ["One Complete Team", "Design, manufacturing, driving, logistics, and presentation all matter on competition day."]
  ] as const;

  return (
    <section id="formula-student" className="section-pad relative overflow-hidden bg-[#080808]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_32%,rgba(255,84,0,0.14),transparent_30rem)]" />
      <div className="container relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-[#111]">
            <Image
              src="/images/TSE-22.png"
              alt="Team Srijan car taking part in a Formula Student track event"
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-transparent" />
            <p className="font-telemetry absolute bottom-5 left-5 right-5 text-[10px] font-bold uppercase tracking-[0.24em] text-white/76">
              Ideas are judged on paper, then proven on track
            </p>
          </div>
        </Reveal>

        <div>
          <SectionTitle
            eyebrow="The Competition"
            title="What is Formula Student?"
            copy="Formula Student is a global university competition where students take a race car from the first sketch to the finish line. Teams are judged on their design decisions, cost and business thinking, then put the car through demanding track events. The quickest lap matters, but so do safety, reliability, preparation, and how well the team works together."
          />
          <div className="-mt-5 grid gap-3">
            {competitionStages.map(([title, copy], index) => (
              <Reveal key={title} delay={index * 0.06}>
                <div className="grid grid-cols-[auto_1fr] gap-4 border-t border-white/10 py-4">
                  <span className="font-display text-sm font-bold text-[#ff5400]">0{index + 1}</span>
                  <div>
                    <h3 className="font-display text-sm font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/58">{copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-5">
            <Button asChild variant="outline" size="lg">
              <Link href="https://www.imeche.org/events/formula-student" target="_blank" rel="noopener noreferrer">
                Explore Formula Student <ExternalLink size={17} />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="section-pad carbon relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(217,4,41,0.18),transparent_34rem)]" />
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <SectionTitle eyebrow="Our Story" title="Where classroom ideas become race cars." copy="Team Srijan began in 2007 with students who wanted to learn engineering by building something real. Today, every batch comes together in the workshop to solve problems, share skills, and prepare a car they are proud to put on the grid." />
            <Reveal className="-mt-6 mb-10">
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Read About Us <ArrowRight size={18} /></Link>
              </Button>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["2007", "A small group of BIT Mesra students came together to build the institute's first Formula Student car."],
                ["Design", "Ideas move from sketches and simulations to parts the team can actually make and trust."],
                ["Build", "Members spend the season cutting, welding, wiring, testing, and learning from every mistake."],
                ["Race", "Competition shows us what worked, what did not, and what the next team can improve."]
              ].map(([year, text], index) => (
                <Reveal key={year} delay={index * 0.08}>
                  <Card className="h-full">
                    <CardContent>
                      <p className="font-display text-xl font-bold text-[#d90429]">{year}</p>
                      <p className="mt-3 text-sm leading-7 text-white/65">{text}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.2}>
            <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-[#111] p-4">
              <Image src="/images/srijan-hero.png" alt="Formula Student workshop atmosphere" width={900} height={700} sizes="(max-width: 1024px) 100vw, 42vw" className="aspect-[4/5] w-full rounded-[6px] object-cover" />
              <div className="absolute left-8 top-8 flex items-center gap-3 rounded-[6px] border border-white/10 bg-black/58 p-3 backdrop-blur">
                <span className="grid size-11 place-items-center overflow-hidden rounded-[6px] bg-white">
                  <Image src={instituteLogo} alt="BIT Mesra logo" width={40} height={40} className="h-9 w-9 object-contain" />
                </span>
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[#ff5400]">Institution</span>
                  <span className="block text-sm font-bold">BIT Mesra</span>
                </span>
              </div>
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  [2007, "Founded", ""],
                  [19, "Years", "+"],
                  [12, "Cars Built", ""],
                  [5, "Competition Formats", "+"]
                ].map(([value, label, suffix]) => (
                  <div key={label} className="border border-white/10 bg-black/55 p-3 backdrop-blur">
                    <p className="font-display text-2xl font-bold"><Counter value={Number(value)} suffix={String(suffix)} /></p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/55">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function News() {
  return (
    <section id="news" className="section-pad relative overflow-hidden bg-[#f2efe9] text-[#0a0a0a]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#d90429] via-[#ff5400] to-[#d90429]" />
      <div className="container relative">
        <Reveal>
          <div className="mb-12 max-w-4xl">
            <p className="font-telemetry mb-3 text-xs font-bold uppercase tracking-[0.32em] text-[#d90429]">News / Revving Passions</p>
            <h2 className="font-display text-[clamp(2rem,4.2vw,4.4rem)] font-bold leading-[1.04]">Follow the road to TSI-26.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-black/62 md:text-lg">
              Revving Passions is the official Team Srijan newsletter, documenting the design, manufacturing, testing, and people behind our newest Formula Student car.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {newsletters.map((newsletter, index) => (
            <Reveal key={newsletter.period} delay={index * 0.07}>
              <article className="group flex h-full flex-col">
                <Link
                  href={newsletter.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read the ${newsletter.period} edition of Revving Passions`}
                  className="relative block overflow-hidden rounded-[10px] bg-black shadow-[0_20px_55px_rgba(0,0,0,0.18)]"
                >
                  <Image
                    src={newsletter.cover}
                    alt={`Revving Passions ${newsletter.period} newsletter cover`}
                    width={1200}
                    height={1697}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="aspect-[4/5] w-full object-cover object-top transition duration-500 group-hover:scale-[1.025]"
                  />
                  <span className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#b00018]/90 to-transparent" />
                  <span className="font-telemetry absolute bottom-4 left-4 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.17em] text-white backdrop-blur">
                    {newsletter.issue}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col pt-6">
                  <p className="font-telemetry text-[10px] font-bold uppercase tracking-[0.2em] text-[#d90429]">{newsletter.period}</p>
                  <h3 className="mt-3 font-display text-2xl font-bold leading-tight">{newsletter.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-black/62">{newsletter.summary}</p>
                  <Link
                    href={newsletter.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-[6px] border-2 border-[#d90429] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#a6001c] transition hover:bg-[#d90429] hover:text-white"
                  >
                    Read Newsletter <ExternalLink size={16} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="section-pad carbon">
      <div className="container">
        <SectionTitle eyebrow="Team Structure" title="A race program, organized by subsystem." copy="Team Srijan mirrors professional motorsport workflows: subsystem accountability, design reviews, manufacturing gates, and competition operations." />
        <Reveal className="mb-8">
          <Button asChild variant="outline" size="lg">
            <Link href="/team" target="_blank" rel="noopener noreferrer">
              View Complete Team <ExternalLink size={18} />
            </Link>
          </Button>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {subteams.map((subteam, index) => {
            const Icon = subsystemIcons[subteam.slug as keyof typeof subsystemIcons];

            return (
              <Reveal key={subteam.slug} delay={(index % 5) * 0.04}>
                <Card className="group h-full transition hover:-translate-y-1 hover:border-[#ff5400]/50">
                  <CardContent>
                  <Link
                    href={`/team/${subteam.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${subteam.title} subteam members in a new tab`}
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5400]"
                  >
                  <Icon className="mb-5 text-[#d90429]" />
                  <span className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-sm font-bold leading-6">{subteam.title}</h3>
                    <ExternalLink className="opacity-0 transition group-hover:opacity-100" size={15} />
                  </span>
                  <p className="mt-3 text-sm leading-6 text-white/58">{subteam.summary}</p>
                  <p className="font-telemetry mt-5 text-[10px] uppercase tracking-[0.2em] text-[#ff5400]">View Members</p>
                  </Link>
                </CardContent>
              </Card>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Sponsorship() {
  return (
    <section id="sponsorship" className="section-pad relative overflow-hidden bg-[#090909]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(217,4,41,0.2),transparent_34rem),radial-gradient(circle_at_80%_35%,rgba(255,84,0,0.13),transparent_28rem)]" />
      <div className="container relative">
        <SectionTitle eyebrow="Sponsorship" title="Put your brand on a moving engineering laboratory." copy="Partnership with Team Srijan connects your organization to high-skill engineering, young talent, campus visibility, national motorsport media, and tangible innovation outcomes." />
        <div className="grid gap-4 md:grid-cols-5">
          {sponsorReasons.map(([title, copy, Icon], index) => (
            <Reveal key={title} delay={index * 0.05}>
              <Card className="h-full">
                <CardContent>
                  <Icon className="mb-5 text-[#ff5400]" />
                  <h3 className="font-display text-sm font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">{copy}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="my-12 grid gap-4 border-y border-white/10 py-7 md:grid-cols-4">
          {[
            [2, "campus reach", "K+"],
            [7, "subsystems", ""],
            [19, "years legacy", "+"],
            [17, "Events", "+"]
          ].map(([value, label, suffix]) => (
            <div key={label} className="text-center">
              <p className="font-display text-4xl font-bold text-white"><Counter value={Number(value)} suffix={String(suffix)} /></p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/48">{label}</p>
            </div>
          ))}
        </div>
        <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/Team-Srijan-Sponsorship-Brochure.pdf"><Download size={18} /> Download Brochure</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Sponsorship Team</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center overflow-hidden rounded-[6px] bg-white">
                <Image src={teamLogo} alt="Team Srijan logo" width={44} height={44} className="h-10 w-10 object-contain" />
              </span>
              <div>
                <p className="font-display font-bold tracking-[0.22em]">TEAM SRIJAN</p>
                <p className="text-xs uppercase tracking-[0.22em] text-white/45">Formula Student BIT Mesra</p>
              </div>
            </div>
            <div className="mt-5 flex w-fit items-center gap-3 rounded-[6px] border border-white/10 bg-white/[0.045] p-3">
              <span className="grid size-10 place-items-center overflow-hidden rounded-[6px] bg-white">
                <Image src={instituteLogo} alt="BIT Mesra logo" width={36} height={36} className="h-9 w-9 object-contain" />
              </span>
              <span className="text-xs uppercase leading-5 tracking-[0.2em] text-white/52">Official Formula Student team<br />of BIT Mesra</span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/55">Engineering Speed. Forging Innovation. Racing the Future.</p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-white/45">Quick links</p>
            <div className="grid grid-cols-2 gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/62 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-white/45">Competitions</p>
            <div className="grid gap-2">
              {competitionLinks.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 items-center justify-between rounded-[6px] border border-white/10 bg-white/[0.04] px-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white/50 transition hover:border-[#ff5400]/60 hover:text-white"
                >
                  {label}
                  <ExternalLink size={14} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/42 md:flex-row">
          <p>Copyright 2026 Team Srijan, BIT Mesra. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/team_srijan" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></Link>
            <Link href="https://www.linkedin.com/company/teamsrijan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></Link>
            <Link href="https://www.youtube.com/@TEAMSRIJAN" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={18} /></Link>
            <Link href="https://www.facebook.com/TeamSrijan/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={18} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LoadingIntro() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = window.setTimeout(() => setShow(false), 950);
    return () => window.clearTimeout(timer);
  }, []);
  if (!show) return null;
  return (
    <motion.div className="fixed inset-0 z-[90] grid place-items-center bg-[#0a0a0a]" exit={{ opacity: 0 }}>
      <div className="text-center">
        <motion.div className="mx-auto mb-5 h-1 w-64 overflow-hidden rounded-full bg-white/10">
          <motion.span className="block h-full bg-[#d90429]" initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ duration: 0.9, ease: "easeInOut" }} />
        </motion.div>
        <p className="font-telemetry text-sm font-bold tracking-[0.32em]">INITIALIZING RACE SYSTEMS</p>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const particles = useMemo(() => Array.from({ length: 22 }, (_, index) => ({ id: index, left: `${(index * 37) % 100}%`, delay: (index % 7) * 0.45 })), []);
  return (
    <main>
      <LoadingIntro />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute top-full h-12 w-px bg-gradient-to-t from-[#ff5400]/0 via-[#ff5400]/45 to-[#ff5400]/0"
            style={{ left: particle.left }}
            animate={{ y: ["0vh", "-120vh"], opacity: [0, 1, 0] }}
            transition={{ duration: 8, delay: particle.delay, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>
      <SiteNav />
      <Hero />
      <FormulaStudent />
      <Story />
      <News />
      <Team />
      <Sponsorship />
      <Footer />
    </main>
  );
}

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
  Mail,
  MapPin,
  Menu,
  Play,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  Wrench,
  X,
  Youtube
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const navItems = [
  ["Story", "#story"],
  ["Garage", "#garage"],
  ["Team", "#team"],
  ["Sponsors", "#sponsorship"],
  ["Achievements", "#achievements"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"]
] as const;

const teamLogo = "/images/team-srijan-logo.png";
const instituteLogo = "/images/bit-mesra-logo.png";

const cars = [
  {
    name: "TSI-07",
    year: "2007",
    image: "/images/TSI-07.png",
    chassis: "First-generation Formula Student frame",
    powertrain: "Combustion prototype platform",
    aerodynamics: "Foundational bodywork package",
    suspension: "Independent race suspension",
    electronics: "Baseline vehicle wiring",
    weight: "Legacy development platform"
  },
  {
    name: "TSI-11",
    year: "2011",
    image: "/images/TSI-11.png",
    chassis: "Evolved tubular architecture",
    powertrain: "Combustion race package",
    aerodynamics: "Compact bodywork refinement",
    suspension: "Double wishbone geometry",
    electronics: "Improved harness reliability",
    weight: "Weight-reduction development"
  },
  {
    name: "TSI-12",
    year: "2012",
    image: "/images/TSI-12.png",
    chassis: "Stiffness-focused frame",
    powertrain: "Responsive combustion setup",
    aerodynamics: "Low-drag bodywork",
    suspension: "Track-focused tuning",
    electronics: "Competition-ready electricals",
    weight: "Optimized legacy platform"
  },
  {
    name: "TSI-13",
    year: "2013",
    image: "/images/TSI-13.png",
    chassis: "Refined space frame",
    powertrain: "Improved intake and exhaust",
    aerodynamics: "Cooling and drag balance",
    suspension: "Adjustable setup window",
    electronics: "Robust data channels",
    weight: "Iterative mass reduction"
  },
  {
    name: "TSI-15",
    year: "2015",
    image: "/images/TSI-15.png",
    chassis: "Manufacturability-led frame",
    powertrain: "Race-calibrated combustion",
    aerodynamics: "Bodywork packaging study",
    suspension: "Driver confidence geometry",
    electronics: "Serviceable harness layout",
    weight: "Legacy race weight target"
  },
  {
    name: "TSI-16",
    year: "2016",
    image: "/images/TSI-16.png",
    chassis: "High-reliability frame",
    powertrain: "Torque delivery refinement",
    aerodynamics: "Cooling-optimized package",
    suspension: "Mechanical grip development",
    electronics: "Sensor expansion phase",
    weight: "Reduced subsystem mass"
  },
  {
    name: "TSI-17",
    year: "2017",
    image: "/images/TSI-17.png",
    chassis: "Performance-focused tubular frame",
    powertrain: "Improved drivetrain response",
    aerodynamics: "Initial aero performance studies",
    suspension: "Kinematic redesign",
    electronics: "Data-backed validation",
    weight: "Competitive combustion target"
  },
  {
    name: "TSI-18",
    year: "2018",
    image: "/images/TSI-18.png",
    chassis: "Optimized chromoly frame",
    powertrain: "Refined intake and exhaust",
    aerodynamics: "Underbody and bodywork development",
    suspension: "Adjustable dampers",
    electronics: "Telemetry-ready harness",
    weight: "Approx. 218 kg target"
  },
  {
    name: "TSI-19",
    year: "2019",
    image: "/images/TSI-19.png",
    chassis: "Tubular space frame",
    powertrain: "Single-cylinder IC platform",
    aerodynamics: "Baseline aero package",
    suspension: "Double wishbone",
    electronics: "Custom data acquisition",
    weight: "Approx. 230 kg"
  },
  {
    name: "TSE-22",
    year: "2022",
    image: "/images/TSE-22.png",
    chassis: "Electric-platform architecture",
    powertrain: "Electric vehicle development package",
    aerodynamics: "Packaging-led aero concept",
    suspension: "Kinematic redesign",
    electronics: "High-voltage systems and data acquisition",
    weight: "Electric prototype target"
  },
  {
    name: "TSI-25",
    year: "2025",
    image: "/images/TSI-25.png",
    chassis: "Next-generation lightweight platform",
    powertrain: "Efficiency-focused combustion package",
    aerodynamics: "Full aero development target",
    suspension: "Track-tuned compliance",
    electronics: "Live telemetry architecture",
    weight: "Aggressive lightweight target"
  }
];

const subsystems = [
  ["Faculty Advisors", "Strategic mentorship, compliance, review gates", ShieldCheck],
  ["Team Captain", "Program ownership, execution cadence, competition readiness", Target],
  ["Technical Heads", "Architecture decisions, validation plans, subsystem integration", Gauge],
  ["Aerodynamics", "CFD, wings, diffuser strategy, cooling flow", Sparkles],
  ["Chassis", "Frame design, stiffness, ergonomics, crash structures", Wrench],
  ["Powertrain", "Engine systems, drivetrain, intake, exhaust, calibration", Bolt],
  ["Electronics", "Wiring, ECU, sensors, telemetry, data acquisition", Cpu],
  ["Vehicle Dynamics", "Suspension, steering, brakes, tires, lap-time behavior", Gauge],
  ["Manufacturing", "Fabrication, jigs, composites, machining, QA", Wrench],
  ["Management & Media", "Brand, partnerships, media, sponsor relations", BriefcaseBusiness]
] as const;

const members = [
  ["Pranshu", "Team Captain", "Mechanical Engineering"],
  ["Arnav Sarna", "Technical Head", "Mechanical Engineering"],
  ["Ayush Kumar Keshri", "President", "Vehicle Dynamics"],
  ["Brianson John Lakra", "Powertrain Lead", "Drivetrain Systems"],
  ["Gaurav Sharma", "Chassis Lead", "Chemical Engineering"],
  ["Shaswat Pankaj", "Team Manager", "Chassis & Ergonomics"]
];

const tiers = [
  ["Title Partner", "Flagship identity across car livery, team apparel, media campaigns, paddock presence, and launch assets."],
  ["Platinum", "Premium logo placement, event visibility, technical collaboration access, and recruitment touchpoints."],
  ["Gold", "Strong brand exposure across vehicle panels, digital channels, campus events, and competition reports."],
  ["Silver", "Focused support tier for suppliers, tooling partners, local businesses, and engineering patrons."]
];

const achievements = [
  ["2007", "FS UK - 5th in Class II events"],
  ["2011", "SUPRA SAE - The team was reformed"],
  ["2012", "SUPRA SAE - 2nd lightest car"],
  ["2013", "FS Italy - 2nd best Indian team in the Design Event"],
  ["2015", "Formula Design Challenge - Overall rank: 7th"],
  ["2016", "FS India - Only car to clear TI with RE engine"],
  ["2017", "Formula Bharat - Static rank: 6th, overall rank: 12th"],
  ["2018", "Formula Bharat - Business Plan: 1st, Design Event: 6th, Overall: 11th"],
  ["2019", "Formula Bharat - Business Plan: 8th, Overall: 16th"],
  ["2022", "Formula Green - Cost Presentation: 1st, Overall: 2nd"],
  ["2024", "PIEV - 2nd in FMEA and 7th Overall"]
];

const gallery = [
  ["TSI-07", "First-generation Team Srijan race car", "/images/TSI-07.png"],
  ["TSI-11", "Legacy combustion platform development", "/images/TSI-11.png"],
  ["TSI-12", "Stiffness-focused Formula Student frame", "/images/TSI-12.png"],
  ["TSI-13", "Formula Student build evolution", "/images/TSI-13.png"],
  ["TSI-15", "Manufacturability-led race car platform", "/images/TSI-15.png"],
  ["TSI-16", "Reliability-focused combustion challenger", "/images/TSI-16.png"],
  ["TSI-17", "Race-ready engineering package", "/images/TSI-17.png"],
  ["TSI-18", "Telemetry-ready combustion car", "/images/TSI-18.png"],
  ["TSI-19", "Custom data acquisition race platform", "/images/TSI-19.png"],
  ["TSE-22", "Electric platform development milestone", "/images/TSE-22.png"],
  ["TSI-25", "Latest Team Srijan performance car", "/images/TSI-25.png"]
] as const;

const sponsorReasons = [
  ["Brand Exposure", "Car livery, apparel, launch campaigns, social media and event presence.", Building2],
  ["Engineering R&D", "Prototype validation, manufacturing collaboration and technical storytelling.", Cpu],
  ["Student Innovation", "Support future engineers working on real constraints and real hardware.", Sparkles],
  ["Talent Pipeline", "Meet disciplined engineers trained through motorsport-grade execution.", Users],
  ["CSR Impact", "Back hands-on STEM culture and Indian student motorsport growth.", BadgeCheck]
] as const;

const contactLinks = [
  [MapPin, "BIT Mesra", "Birla Institute of Technology, Mesra, Ranchi, Jharkhand, India", "#"],
  [Mail, "Official Email", "teamsrijan@bitmesra.ac.in", "mailto:teamsrijan@bitmesra.ac.in"],
  [Instagram, "Instagram", "@team_srijan", "https://www.instagram.com/team_srijan"],
  [Linkedin, "LinkedIn", "Team Srijan", "https://www.linkedin.com/company/teamsrijan"],
  [Youtube, "YouTube", "@TEAMSRIJAN", "https://www.youtube.com/@TEAMSRIJAN"],
  [Facebook, "Facebook", "TeamSrijan", "https://www.facebook.com/TeamSrijan/"]
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

function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "border-b border-white/10 bg-[#0a0a0a]/86 shadow-2xl shadow-black/40 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <nav className="container flex h-20 items-center justify-between">
        <Link href="#home" className="flex items-center gap-3" aria-label="Team Srijan home">
          <span className="relative grid size-16 place-items-center overflow-hidden">
            <Image src={teamLogo} alt="Team Srijan logo" width={60} height={60} className="h-14 w-14 object-contain" />
          </span>
          <span>
            <span className="block font-display text-sm font-bold tracking-[0.28em]">TEAM SRIJAN</span>
            <span className="block text-[10px] uppercase tracking-[0.26em] text-white/50">FORMULA STUDENT</span>
          </span>
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="text-xs font-bold uppercase tracking-[0.18em] text-white/66 transition hover:text-white">
              {label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-4 lg:flex">
          <span className="flex items-center gap-2 border-l border-white/10 pl-4">
            <span className="relative grid size-9 place-items-center overflow-hidden">
              <Image src={instituteLogo} alt="BIT Mesra logo" width={34} height={34} className="h-8 w-8 object-contain" />
            </span>
            <span className="text-[10px] font-bold uppercase leading-4 tracking-[0.2em] text-white/52">BIT<br />Mesra</span>
          </span>
          <Button asChild size="sm">
            <Link href="#sponsorship">Sponsor Us</Link>
          </Button>
        </div>
        <button
          className="grid size-11 place-items-center rounded-[6px] border border-white/15 bg-white/5 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-[#0a0a0a]/95 px-4 py-5 backdrop-blur-xl lg:hidden">
          <div className="grid gap-3">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-[6px] px-3 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white/76 hover:bg-white/10">
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
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
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#0a0a0a_0%,rgba(10,10,10,0.88)_28%,rgba(10,10,10,0.38)_68%,rgba(10,10,10,0.9)_100%)]" />
      <div className="telemetry-grid absolute inset-0 opacity-60" />
      <motion.div
        aria-hidden
        className="absolute right-[7vw] top-32 hidden w-72 rounded-[8px] border border-[#ff5400]/30 bg-black/20 p-4 text-xs text-white/60 backdrop-blur md:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mb-3 flex items-center justify-between font-display text-[10px] tracking-[0.22em] text-[#ff5400]">
          <span>LIVE TELEMETRY</span>
          <Gauge size={16} />
        </div>
        {["THROTTLE 94%", "AERO BALANCE +2.4", "BATTERY NOMINAL", "LAP DELTA -0.831"].map((item, index) => (
          <div key={item} className="mb-2 grid grid-cols-[1fr_70px] items-center gap-3">
            <span>{item}</span>
            <span className="h-1 overflow-hidden rounded-full bg-white/10">
              <motion.span className="block h-full bg-[#d90429]" initial={{ width: 0 }} animate={{ width: `${64 + index * 8}%` }} transition={{ duration: 1.5, delay: index * 0.15 }} />
            </span>
          </div>
        ))}
      </motion.div>
      <div className="container relative z-10 flex min-h-screen items-center pt-24">
        <div className="max-w-4xl">
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-5 text-xs font-bold uppercase tracking-[0.36em] text-[#ff5400]">
            Formula Student Team of BIT Mesra
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="font-display text-[clamp(2.55rem,5vw,6.2rem)] font-bold leading-[0.94] text-white"
          >
            Engineering Speed. Forging Innovation. Racing the Future.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.22 }} className="mt-7 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
            Team Srijan is the official Formula Student team of BIT Mesra, designing and manufacturing high-performance open-wheel race cars for national and international competitions.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.34 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#sponsorship">Sponsor Us <ArrowRight size={18} /></Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#garage">Explore Our Cars</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="#team">Meet The Team</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.a href="#story" aria-label="Scroll to story" className="absolute bottom-8 left-1/2 z-10 grid -translate-x-1/2 place-items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/55" animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
        <ChevronDown />
      </motion.a>
    </section>
  );
}

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <Reveal className="mb-12 max-w-3xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-[#ff5400]">{eyebrow}</p>
      <h2 className="font-display text-[clamp(2rem,4.8vw,4.7rem)] font-bold leading-none">{title}</h2>
      {copy && <p className="mt-5 text-base leading-8 text-white/62 md:text-lg">{copy}</p>}
    </Reveal>
  );
}

function Story() {
  return (
    <section id="story" className="section-pad carbon relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(217,4,41,0.18),transparent_34rem)]" />
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <SectionTitle eyebrow="Our Story" title="Built in Ranchi. Engineered for the grid." copy="Since 2007, Team Srijan has operated like a compact race engineering company: concept, simulate, fabricate, test, fail fast, and return sharper." />
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["2007", "Team founded at BIT Mesra with a mission to bring hands-on race engineering to campus."],
                ["Design", "Every subsystem is reviewed through manufacturability, reliability, serviceability, and performance."],
                ["Build", "Members fabricate, wire, test, document, and present the car under global Formula Student rules."],
                ["Race", "Competition output becomes next-season learning: lighter, faster, cleaner, and more robust."]
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
                  <span className="block font-display text-sm font-bold">BIT Mesra</span>
                </span>
              </div>
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  [2007, "Founded", ""],
                  [17, "Years", "+"],
                  [40, "Members", "+"],
                  [4, "Competition formats", "+"]
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

function Garage() {
  const [active, setActive] = useState(0);
  const selected = cars[active];
  return (
    <section id="garage" className="section-pad relative overflow-hidden bg-[#080808]">
      <div className="container">
        <SectionTitle eyebrow="Garage" title="Evolution measured in grams, milliseconds, and reliability." copy="A horizontal launch timeline for Team Srijan race cars, from early combustion platforms to the next Phoenix program." />
        <div className="mb-8 flex gap-3 overflow-x-auto pb-3 no-scrollbar" role="tablist" aria-label="Car timeline">
          {cars.map((car, index) => (
            <button
              key={car.name}
              role="tab"
              aria-selected={active === index}
              onClick={() => setActive(index)}
              className={cn("min-w-44 rounded-[6px] border px-5 py-4 text-left transition", active === index ? "border-[#d90429] bg-[#d90429]/18" : "border-white/10 bg-white/[0.04] hover:border-white/25")}
            >
              <span className="block font-display text-lg font-bold">{car.name}</span>
              <span className="text-xs uppercase tracking-[0.22em] text-white/45">{car.year}</span>
            </button>
          ))}
        </div>
        <div className="grid gap-7 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <div className="relative min-h-[420px] overflow-hidden rounded-[8px] border border-white/10 bg-[radial-gradient(circle_at_50%_36%,rgba(217,4,41,0.24),transparent_25rem),#101010] p-6">
              <div className="absolute inset-0 telemetry-grid opacity-50" />
              <motion.div key={selected.name} initial={{ opacity: 0, scale: 0.94, rotateX: 12 }} animate={{ opacity: 1, scale: 1, rotateX: 0 }} transition={{ duration: 0.55 }} className="relative z-10 flex h-full min-h-[360px] items-center justify-center">
                <div className="relative h-[390px] w-full overflow-hidden rounded-[6px] border border-white/10 bg-black">
                  <Image
                    src={selected.image}
                    alt={`${selected.name} Team Srijan race car`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 54vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.82))]" />
                  <div className="absolute bottom-5 left-5 right-5 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ff5400]">Team Srijan Garage</p>
                      <p className="mt-2 font-display text-4xl font-bold">{selected.name}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {["CAD", "FAB", "RACE"].map((label) => (
                        <span key={label} className="rounded-[6px] border border-white/15 bg-white/10 px-3 py-2 text-[10px] font-bold tracking-[0.2em] text-white/70 backdrop-blur">{label}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <Card className="h-full">
              <CardContent className="p-7">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#ff5400]">Technical sheet</p>
                    <h3 className="mt-2 font-display text-3xl font-bold">{selected.name}</h3>
                  </div>
                  <Gauge className="text-[#d90429]" size={34} />
                </div>
                <div className="grid gap-3">
                  {Object.entries(selected)
                    .filter(([key]) => !["name", "year", "image"].includes(key))
                    .map(([key, value]) => (
                      <details key={key} className="group rounded-[6px] border border-white/10 bg-black/24 p-4 open:border-[#d90429]/50">
                        <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-bold uppercase tracking-[0.16em]">
                          {key}
                          <ChevronDown className="transition group-open:rotate-180" size={16} />
                        </summary>
                        <p className="mt-3 text-sm leading-7 text-white/62">{value}</p>
                      </details>
                    ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {subsystems.map(([title, copy, Icon], index) => (
            <Reveal key={title} delay={(index % 5) * 0.04}>
              <Card className="h-full transition hover:-translate-y-1 hover:border-[#ff5400]/50">
                <CardContent>
                  <Icon className="mb-5 text-[#d90429]" />
                  <h3 className="font-display text-sm font-bold leading-6">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">{copy}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {members.map(([name, role, dept], index) => (
            <Reveal key={name} delay={index * 0.05}>
              <Card className="overflow-hidden">
                <div className="h-36 bg-[linear-gradient(135deg,rgba(217,4,41,0.65),rgba(255,84,0,0.22)),url('/images/srijan-hero.png')] bg-cover bg-center" />
                <CardContent className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold">{name}</h3>
                    <p className="mt-1 text-sm text-[#ff5400]">{role}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">{dept}</p>
                  </div>
                  <Link href="https://www.linkedin.com" aria-label={`${name} LinkedIn`} className="grid size-10 place-items-center rounded-[6px] border border-white/10 hover:border-[#d90429]">
                    <Linkedin size={18} />
                  </Link>
                </CardContent>
              </Card>
            </Reveal>
          ))}
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
            [40, "engineers", "+"],
            [19, "years legacy", "+"],
            [17, "Events", "+"]
          ].map(([value, label, suffix]) => (
            <div key={label} className="text-center">
              <p className="font-display text-4xl font-bold text-white"><Counter value={Number(value)} suffix={String(suffix)} /></p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/48">{label}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-5 lg:grid-cols-4">
          {tiers.map(([title, copy], index) => (
            <Reveal key={title} delay={index * 0.07}>
              <Card className={cn("h-full overflow-hidden transition hover:-translate-y-1", index === 0 && "border-[#d90429]/55 bg-[#d90429]/12")}>
                <CardContent className="p-6">
                  <p className="mb-5 text-xs uppercase tracking-[0.26em] text-[#ff5400]">Tier {index + 1}</p>
                  <h3 className="font-display text-2xl font-bold">{title}</h3>
                  <p className="mt-4 min-h-28 text-sm leading-7 text-white/62">{copy}</p>
                  <div className="my-6 grid h-24 place-items-center rounded-[6px] border border-dashed border-white/20 bg-black/24 p-4">
                    <div className="flex items-center gap-3 opacity-70">
                      <span className="grid size-12 place-items-center overflow-hidden rounded-[6px] bg-white">
                        <Image src={teamLogo} alt="Team Srijan sponsor placement preview" width={42} height={42} className="h-10 w-10 object-contain" />
                      </span>
                      <span className="text-xs uppercase tracking-[0.2em] text-white/42">Partner Logo Placement</span>
                    </div>
                  </div>
                  <ul className="mb-6 grid gap-2 text-sm text-white/62">
                    <li>Priority social visibility</li>
                    <li>Competition report inclusion</li>
                    <li>Campus and launch access</li>
                  </ul>
                  <Button asChild variant={index === 0 ? "default" : "outline"} className="w-full">
                    <Link href="#contact">Discuss Partnership</Link>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/Team-Srijan-Sponsorship-Brochure.pdf"><Download size={18} /> Download Brochure</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Contact Sponsorship Team</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="section-pad carbon">
      <div className="container">
        <SectionTitle eyebrow="Achievements" title="Competition milestones and performance culture." copy="The scoreboard is only one output. Design documentation, endurance readiness, cost discipline, and business presentation strength matter just as much." />
        <div className="relative grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <Card className="p-2">
              <CardContent className="grid gap-5">
                <div className="flex items-center gap-4">
                  <Trophy className="text-[#ff5400]" size={44} />
                  <div>
                    <p className="font-display text-4xl font-bold">Podium Mindset</p>
                    <p className="mt-2 text-white/55">Iterate, validate, document, and race with discipline.</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {["Design", "Cost", "Endurance"].map((label) => (
                    <div key={label} className="rounded-[6px] border border-white/10 bg-black/22 p-4 text-center text-xs uppercase tracking-[0.18em] text-white/62">{label}</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
          <div className="relative border-l border-[#d90429]/45 pl-6">
            {achievements.map(([event, copy], index) => (
              <Reveal key={event} delay={index * 0.06} className="relative mb-6 last:mb-0">
                <span className="absolute -left-[31px] top-5 size-3 rounded-full bg-[#ff5400] shadow-[0_0_24px_rgba(255,84,0,0.8)]" />
                <Card>
                  <CardContent>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#ff5400]">Formula Student</p>
                    <h3 className="mt-2 font-display text-2xl font-bold">{event}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/62">{copy}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [selected, setSelected] = useState<(typeof gallery)[number] | null>(null);
  return (
    <section id="gallery" className="section-pad bg-[#080808]">
      <div className="container">
        <SectionTitle eyebrow="Gallery" title="From CAD screens to paddock lights." copy="A visual system ready for workshop images, CAD renders, race events, paddock shots, fabrication photos, and media-day captures." />
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((item, index) => (
            <Reveal key={item[0]} delay={(index % 3) * 0.05} className="mb-4 break-inside-avoid">
              <button onClick={() => setSelected(item)} className="group relative block w-full overflow-hidden rounded-[8px] border border-white/10 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5400]">
                <Image src={item[2]} alt={item[1]} width={760} height={index % 2 ? 920 : 620} loading="lazy" className={cn("w-full object-cover transition duration-500 group-hover:scale-105", index % 2 ? "aspect-[4/5]" : "aspect-[5/4]")} />
                <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <span className="absolute bottom-4 left-4">
                  <span className="block font-display text-xl font-bold">{item[0]}</span>
                  <span className="mt-1 block text-sm text-white/62">{item[1]}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {selected && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-black/86 p-4 backdrop-blur" role="dialog" aria-modal="true" aria-label={`${selected[0]} preview`}>
          <button onClick={() => setSelected(null)} className="absolute right-5 top-5 grid size-11 place-items-center rounded-[6px] border border-white/15 bg-white/10" aria-label="Close gallery preview">
            <X />
          </button>
          <div className="max-w-5xl overflow-hidden rounded-[8px] border border-white/10 bg-[#101010]">
            <Image src={selected[2]} alt={selected[1]} width={1400} height={900} className="max-h-[78vh] w-full object-cover" />
            <div className="p-5">
              <h3 className="font-display text-2xl font-bold">{selected[0]}</h3>
              <p className="mt-2 text-white/62">{selected[1]}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-pad carbon">
      <div className="container">
        <SectionTitle eyebrow="Contact" title="Talk to the team behind the car." copy="For sponsorship, technical collaboration, media, recruitment, or campus invitations, reach the Team Srijan operations desk." />
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <Card>
              <CardContent className="p-6 md:p-8">
                <form className="grid gap-4" aria-label="Contact inquiry form">
                  {["Name", "Email", "Organization"].map((label) => (
                    <label key={label} className="grid gap-2 text-sm font-bold uppercase tracking-[0.16em] text-white/58">
                      {label}
                      <input required={label !== "Organization"} type={label === "Email" ? "email" : "text"} className="h-12 rounded-[6px] border border-white/10 bg-black/35 px-4 text-base font-normal normal-case tracking-normal text-white outline-none transition focus:border-[#ff5400]" />
                    </label>
                  ))}
                  <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.16em] text-white/58">
                    Message
                    <textarea required rows={6} className="resize-none rounded-[6px] border border-white/10 bg-black/35 p-4 text-base font-normal normal-case tracking-normal text-white outline-none transition focus:border-[#ff5400]" />
                  </label>
                  <Button type="submit" size="lg">Send Inquiry <ArrowRight size={18} /></Button>
                </form>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="grid gap-4">
              {contactLinks.map(([Icon, title, text, href]) => (
                <Link
                  key={title}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-[8px] border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-[#d90429]/55"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-[6px] bg-[#d90429]/16 text-[#ff5400]"><Icon /></span>
                  <span>
                    <span className="block font-display text-sm font-bold">{title}</span>
                    <span className="mt-1 block text-sm leading-6 text-white/58">{text}</span>
                  </span>
                  <ExternalLink className="ml-auto opacity-0 transition group-hover:opacity-100" size={16} />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
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
              {navItems.map(([label, href]) => (
                <Link key={href} href={href} className="text-sm text-white/62 hover:text-white">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-white/45">Sponsor strip</p>
            <div className="grid grid-cols-3 gap-2">
              {["Title", "Platinum", "Gold"].map((label) => (
                <span key={label} className="grid h-12 place-items-center rounded-[6px] border border-white/10 bg-white/[0.04] text-[10px] uppercase tracking-[0.18em] text-white/38">{label}</span>
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
        <p className="font-display text-sm font-bold tracking-[0.32em]">INITIALIZING RACE SYSTEMS</p>
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
      <Nav />
      <Hero />
      <Story />
      <Garage />
      <Team />
      <Sponsorship />
      <Achievements />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}

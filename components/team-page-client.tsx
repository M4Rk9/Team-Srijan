"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Bolt,
  BriefcaseBusiness,
  Cpu,
  ExternalLink,
  Gauge,
  Lightbulb,
  Network,
  Sparkles,
  Target,
  Users,
  Wrench,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { subteams } from "@/lib/subteams";

const heroImage = "/images/team_pic.png";

const stats = [
  [40, "+", "Team Members"],
  [7, "", "Engineering Subsystems"],
  [1, "", "Formula Student Car Every Season"],
  [19, "+", "Years of Legacy"]
] as const;

const subsystemIcons = {
  chassis: Wrench,
  brakes: Gauge,
  powertrain: Bolt,
  "vehicle-dynamics": Target,
  electrical: Cpu,
  aerodynamics: Sparkles,
  "management-media": BriefcaseBusiness
} as const;

const subsystemOrder = ["chassis", "brakes", "powertrain", "vehicle-dynamics", "electrical", "aerodynamics", "management-media"] as const;

const gallery = [
  ["Design Reviews", "Subsystem architecture and validation planning", "/images/TSI-25.png"],
  ["Manufacturing", "Fabrication, machining, composites, and assembly", "/images/TSI-18.png"],
  ["Testing", "Driver feedback, reliability checks, and setup iteration", "/images/TSI-19.png"],
  ["Competitions", "Static events, dynamic runs, and paddock operations", "/images/TSE-22.png"]
] as const;

const culture = [
  ["Engineering", "Design reviews, simulation, fabrication, testing, and documentation create engineers who understand complete systems.", "/images/TSI-15.png", Wrench],
  ["Leadership", "Members own deadlines, coordinate people, defend decisions, and learn to operate under real constraints.", "/images/TSI-13.png", Users],
  ["Innovation", "The team uses every season to improve packaging, reliability, manufacturability, and vehicle performance.", "/images/TSE-22.png", Lightbulb],
  ["Industry Exposure", "Sponsors, suppliers, alumni, and competitions connect students to professional engineering expectations.", "/images/TSI-25.png", Network]
] as const;

function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => setDisplay(latest));
    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.3, ease: "easeOut" });
    return controls.stop;
  }, [count, value]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      {display}
      {suffix}
    </motion.span>
  );
}

export function TeamPageClient() {
  const [selectedImage, setSelectedImage] = useState<(typeof gallery)[number] | null>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 760], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 760], [1, 0.35]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image src={heroImage} alt="Team Srijan race program" fill priority sizes="100vw" className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82),rgba(0,0,0,0.66)_42%,rgba(0,0,0,0.3)_72%,rgba(0,0,0,0.78))]" />
        <div className="absolute inset-0 telemetry-grid opacity-55" />
        <motion.div aria-hidden className="absolute left-0 top-0 h-full w-px bg-[#ff5400]/35" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.2 }} />
        <motion.div aria-hidden className="absolute right-[12vw] top-0 h-full w-px bg-[#ff5400]/20" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.2, delay: 0.2 }} />
        <motion.div aria-hidden className="absolute bottom-20 left-[8vw] h-px w-64 bg-gradient-to-r from-[#ff5400] to-transparent" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.1, delay: 0.35 }} />

        <nav className="container relative z-10 flex items-center justify-between py-7">
          <Link href="/#team" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/72 transition hover:text-white">
            <ArrowLeft size={18} />
            Back Home
          </Link>
          <div className="flex items-center gap-3">
            <Image src="/images/team-srijan-logo.png" alt="Team Srijan logo" width={58} height={58} className="h-12 w-12 object-contain" />
            <Image src="/images/bit-mesra-logo.png" alt="BIT Mesra logo" width={46} height={46} className="h-10 w-10 object-contain" />
          </div>
        </nav>

        <div className="container relative z-10 flex min-h-[calc(100vh-104px)] items-center pb-20">
          <div className="max-w-5xl">
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="font-telemetry mb-5 text-xs font-bold uppercase tracking-[0.38em] text-[#ff5400]">
              Coordinates 23.412 N / 85.440 E
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.1 }} className="font-display text-[clamp(3rem,7vw,7.2rem)] font-bold uppercase leading-[0.9] tracking-[0.02em]">
              The People Behind The Machine
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.22 }} className="mt-7 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              A multidisciplinary team of engineers, designers, strategists, and innovators building Formula Student race cars at Birla Institute of Technology, Mesra.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.34 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#structure">Meet The Team <ArrowRight size={18} /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/join" target="_blank" rel="noopener noreferrer">Join Team Srijan</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black py-7">
        <div className="container grid gap-3 md:grid-cols-4">
          {stats.map(([value, suffix, label], index) => (
            <Reveal key={label} delay={index * 0.06}>
              <div className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5 text-center">
                <p className="font-display text-4xl font-bold"><Counter value={value} suffix={suffix} /></p>
                <p className="font-telemetry mt-2 text-[10px] uppercase tracking-[0.2em] text-white/45">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="structure" className="section-pad carbon">
        <div className="container">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <p className="font-telemetry mb-3 text-xs font-bold uppercase tracking-[0.32em] text-[#ff5400]">Team Structure</p>
              <h2 className="font-display text-[clamp(2rem,4.8vw,4.7rem)] font-bold leading-none">Subsystems operating like a race program.</h2>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {subsystemOrder.map((slug, index) => {
              const subteam = subteams.find((item) => item.slug === slug)!;
              const Icon = subsystemIcons[slug];

              return (
                <Reveal key={slug} delay={(index % 4) * 0.05}>
                  <Link href={`/team/${slug}`} target="_blank" rel="noopener noreferrer" className="group block h-full rounded-[8px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[#ff5400]/60 hover:bg-white/[0.075]">
                    <Icon className="mb-6 text-[#d90429]" size={28} />
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-xl font-bold">{subteam.title === "Electrical" ? "Electronics" : subteam.title}</h3>
                      <ExternalLink className="opacity-0 transition group-hover:opacity-100" size={17} />
                    </div>
                    <p className="mt-4 text-sm leading-7 text-white/58">{subteam.summary}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad carbon">
        <div className="container">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <p className="font-telemetry mb-3 text-xs font-bold uppercase tracking-[0.32em] text-[#ff5400]">Team Gallery</p>
              <h2 className="font-display text-[clamp(2rem,4.8vw,4.7rem)] font-bold leading-none">From reviews to race day pressure.</h2>
            </div>
          </Reveal>
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {gallery.map((item, index) => (
              <Reveal key={item[0]} delay={index * 0.05}>
                <button onClick={() => setSelectedImage(item)} className="group relative block w-full overflow-hidden rounded-[8px] border border-white/10 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5400]">
                  <Image src={item[2]} alt={item[1]} width={760} height={620} loading="lazy" className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105 xl:aspect-[3/4]" />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/10 to-transparent" />
                  <span className="absolute bottom-4 left-4 right-4">
                    <span className="block font-display text-xl font-bold">{item[0]}</span>
                    <span className="mt-1 block text-sm text-white/62">{item[1]}</span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#070707]">
        <div className="container">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <p className="font-telemetry mb-3 text-xs font-bold uppercase tracking-[0.32em] text-[#ff5400]">Culture</p>
              <h2 className="font-display text-[clamp(2.2rem,5vw,5rem)] font-bold leading-none">More Than A Racing Team</h2>
            </div>
          </Reveal>
          <div className="grid gap-10">
            {culture.map(([title, copy, image, Icon], index) => (
              <Reveal key={title}>
                <article className={`grid gap-6 lg:grid-cols-2 lg:items-center ${index % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                  <div className="relative min-h-80 overflow-hidden rounded-[8px] border border-white/10">
                    <Image src={image} alt={`${title} at Team Srijan`} fill sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="p-1 lg:p-8">
                    <Icon className="mb-5 text-[#d90429]" size={34} />
                    <h3 className="font-display text-3xl font-bold">{title}</h3>
                    <p className="mt-5 max-w-xl text-base leading-8 text-white/64">{copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selectedImage ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/88 p-4 backdrop-blur" role="dialog" aria-modal="true" aria-label={`${selectedImage[0]} image preview`}>
          <button onClick={() => setSelectedImage(null)} className="absolute right-5 top-5 grid size-11 place-items-center rounded-[6px] border border-white/10 bg-white/10" aria-label="Close gallery preview">
            <X size={20} />
          </button>
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[8px] border border-white/10">
            <Image src={selectedImage[2]} alt={selectedImage[1]} width={1400} height={900} className="max-h-[82vh] w-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="font-display text-2xl font-bold">{selectedImage[0]}</h3>
              <p className="mt-2 text-sm text-white/62">{selectedImage[1]}</p>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronDown,
  Cpu,
  Download,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Sparkles,
  Users,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { navItems, SiteNav } from "@/components/site-nav";

const instituteLogo = "/images/bit-mesra-logo.png";

const sponsorReasons = [
  [
    "Brand Exposure",
    "Car livery, apparel, launch campaigns, social media and event presence.",
    Building2,
  ],
  [
    "Engineering R&D",
    "Prototype validation, manufacturing collaboration and technical storytelling.",
    Cpu,
  ],
  [
    "Student Innovation",
    "Support future engineers working on real constraints and real hardware.",
    Sparkles,
  ],
  [
    "Talent Pipeline",
    "Meet disciplined engineers trained through motorsport-grade execution.",
    Users,
  ],
  [
    "CSR Impact",
    "Back hands-on STEM culture and Indian student motorsport growth.",
    BadgeCheck,
  ],
] as const;

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
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
        <Image
          src="/images/TSI-25.png"
          alt="Team Srijan TSI-25 Formula Student race car"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
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
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-telemetry mb-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#ff5400] md:text-xs"
          >
            Formula Student Team of Birla Institute of Technology, Mesra
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="font-display text-[clamp(2.8rem,6vw,5.8rem)] font-bold uppercase leading-[0.96] tracking-[-0.01em] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]"
          >
            Our Hearts Don&apos;t Beat.
            <span className="mt-2 block text-white/58">They Revv!</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.22 }}
            className="mt-5 max-w-xl text-sm leading-7 text-white/76 md:text-base"
          >
            Team Srijan is the student-run Formula Student team of Birla
            Institute of Technology, Mesra. Since 2007, we have designed,
            manufactured, and raced our own single-seater cars in India and
            abroad.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.34 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg">
              <Link href="/sponsors">
                Sponsor Us <ArrowRight size={18} />
              </Link>
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
      <motion.a
        href="#formula-student"
        aria-label="Scroll to Formula Student introduction"
        className="absolute bottom-8 left-1/2 z-10 grid -translate-x-1/2 place-items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/55"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <ChevronDown />
      </motion.a>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-3xl">
      <p className="font-telemetry mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#ff5400]">
        {eyebrow}
      </p>
      <h2 className="font-display text-[clamp(1.75rem,3.4vw,3.4rem)] font-bold leading-[1.08]">
        {title}
      </h2>
      {copy && (
        <p className="mt-5 text-base leading-8 text-white/62 md:text-lg">
          {copy}
        </p>
      )}
    </Reveal>
  );
}

function FormulaStudent() {
  const competitionStages = [
    [
      "Static Events",
      "The team explains its engineering choices, costs, and business thinking.",
    ],
    [
      "Dynamic Events",
      "The car is tested through acceleration, skidpad, autocross, and endurance runs.",
    ],
    [
      "One Complete Team",
      "Design, manufacturing, driving, logistics, and presentation all matter on competition day.",
    ],
  ] as const;

  return (
    <section
      id="formula-student"
      className="section-pad relative overflow-hidden bg-[#080808]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_32%,rgba(255,84,0,0.14),transparent_30rem)]" />
      <div className="container relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-[#111]">
            <Image
              src="/images/formula-student-competition.jpg"
              alt="Formula Student teams and cars gathered at the competition track"
              width={2048}
              height={1365}
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="aspect-[3/2] w-full object-cover"
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
            copy="Formula Student challenges university teams to design, build, and race their own formula-style cars. Engineering, cost, and business decisions are judged before the car competes in acceleration, skidpad, autocross, and endurance."
          />
          <div className="-mt-5 grid gap-3">
            {competitionStages.map(([title, copy], index) => (
              <Reveal key={title} delay={index * 0.06}>
                <div className="grid grid-cols-[auto_1fr] gap-4 border-t border-white/10 py-4">
                  <span className="font-display text-sm font-bold text-[#ff5400]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/58">
                      {copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-5">
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://www.imeche.org/events/formula-student"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Formula Student <ExternalLink size={17} />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Institute() {
  return (
    <section
      id="institute"
      className="section-pad relative overflow-hidden bg-[#f2efe9] text-[#0a0a0a]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#d90429] via-[#ff5400] to-[#d90429]" />
      <div className="container relative">
        <div className="grid overflow-hidden rounded-[12px] border border-black/10 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.16)] lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="p-7 sm:p-10 lg:p-14">
            <p className="font-telemetry text-xs font-semibold uppercase tracking-[0.16em] text-[#d90429]">
              Our Institute
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,3.8rem)] font-bold leading-[1.02] tracking-[-0.01em]">
              Where Team Srijan calls home.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-black/66 md:text-lg">
              Established in 1955 by the visionary Industrialist Mr. B.M. Birla,
              Birla Institute of Technology, Mesra is a premier technical
              institute and a deemed university under the governance of the C.K.
              Birla group. 70 years down the line, the zeal to carry forward our
              mission and vision still burns in our hearts. Every BITian works
              with a single agenda of making BIT a globally recognized academic
              institution in consonance with the social, economic, and
              ecological environment, striving continuously for excellence in
              education, research, and technological services to the national
              needs.
            </p>
            <Link
              href="https://www.bitmesra.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-[6px] border-2 border-[#d90429] px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-[#a6001c] transition hover:bg-[#d90429] hover:text-white"
            >
              Visit the Institute <ExternalLink size={16} />
            </Link>
          </Reveal>
          <Reveal delay={0.12} className="min-h-[340px] lg:min-h-full">
            <div
              role="img"
              aria-label="Campus of Birla Institute of Technology, Mesra"
              className="h-full min-h-[340px] bg-cover bg-right"
              style={{
                backgroundImage: "url('/images/bit-mesra-campus.webp')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="section-pad relative overflow-hidden bg-[#0d0d0d]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(217,4,41,0.16),transparent_30rem)]" />
      <div className="container relative grid gap-10 lg:grid-cols-[0.58fr_1fr] lg:gap-16">
        <Reveal>
          <p className="font-telemetry text-xs font-semibold uppercase tracking-[0.16em] text-[#ff5400]">
            Who We Are
          </p>
          <div className="mt-6 overflow-hidden rounded-[8px] border border-white/10 bg-black">
            <Image
              src="/images/team-srijan-heritage-car.webp"
              alt="Team Srijan driver standing beside an early formula-style car"
              width={742}
              height={678}
              sizes="(max-width: 1024px) 100vw, 36vw"
              className="aspect-[742/678] w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="self-start text-base leading-8 text-white/66 md:text-lg lg:mt-10">
          <p>
            Team Srijan is Birla Institute of Technology, Mesra&apos;s student-run
            Formula SAE program. Established in 2007, we are one of the
            institute&apos;s oldest and most established technical clubs. Students
            from diverse engineering disciplines work together to design,
            analyse, manufacture, test, and race a formula-style car. Every
            subsystem is developed under real constraints of performance,
            reliability, cost, and time. We exist to do more than build a race
            car. Team Srijan gives students room to become engineers and leaders
            while carrying Birla Institute of Technology, Mesra&apos;s name onto
            national and international grids.
          </p>
        </Reveal>
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
            <SectionTitle
              eyebrow="Our Story"
              title="Built in Mesra. Proven on track."
              copy="Team Srijan began in 2007 with students who wanted to learn engineering by building something real. Today, every batch comes together in the workshop to solve problems, share skills, and prepare a car they are proud to put on the grid."
            />
            <Reveal className="-mt-6 mb-10">
              <Button asChild variant="outline" size="lg">
                <Link href="/about">
                  Read About Us <ArrowRight size={18} />
                </Link>
              </Button>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                [
                  "2007",
                  "A small group of Birla Institute of Technology, Mesra students came together to build the institute's first Formula Student car.",
                ],
                [
                  "Design",
                  "Ideas move from sketches and simulations to parts the team can actually make and trust.",
                ],
                [
                  "Build",
                  "Members spend the season cutting, welding, wiring, testing, and learning from every mistake.",
                ],
                [
                  "Race",
                  "Competition shows us what worked, what did not, and what the next team can improve.",
                ],
              ].map(([year, text], index) => (
                <Reveal key={year} delay={index * 0.08}>
                  <Card className="h-full">
                    <CardContent>
                      <p className="font-display text-xl font-bold text-[#d90429]">
                        {year}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/65">
                        {text}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.2}>
            <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-[#111] p-4">
              <Image
                src="/images/srijan-hero.png"
                alt="Formula Student workshop atmosphere"
                width={900}
                height={700}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="aspect-[4/5] w-full rounded-[6px] object-cover"
              />
              <div className="absolute left-8 top-8 rounded-[6px] border border-white/10 bg-black/58 px-4 py-3 backdrop-blur">
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[#ff5400]">
                    Workshop
                  </span>
                  <span className="block text-sm font-bold">Mesra, Ranchi</span>
                </span>
              </div>
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  [2007, "Founded", ""],
                  [19, "Years", "+"],
                  [12, "Cars Built", ""],
                  [5, "Competition Formats", "+"],
                ].map(([value, label, suffix]) => (
                  <div
                    key={label}
                    className="border border-white/10 bg-black/55 p-3 backdrop-blur"
                  >
                    <p className="font-display text-2xl font-bold">
                      <Counter value={Number(value)} suffix={String(suffix)} />
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/55">
                      {label}
                    </p>
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

function Sponsorship() {
  return (
    <section
      id="sponsorship"
      className="section-pad relative overflow-hidden bg-[#090909]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(217,4,41,0.2),transparent_34rem),radial-gradient(circle_at_80%_35%,rgba(255,84,0,0.13),transparent_28rem)]" />
      <div className="container relative">
        <SectionTitle
          eyebrow="Sponsorship"
          title="Put your brand on a moving engineering laboratory."
          copy="Partnership with Team Srijan connects your organization to high-skill engineering, young talent, campus visibility, national motorsport media, and tangible innovation outcomes."
        />
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
            [17, "Events", "+"],
          ].map(([value, label, suffix]) => (
            <div key={label} className="text-center">
              <p className="font-display text-4xl font-bold text-white">
                <Counter value={Number(value)} suffix={String(suffix)} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/48">
                {label}
              </p>
            </div>
          ))}
        </div>
        <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/Team-Srijan-Sponsorship-Brochure.pdf">
              <Download size={18} /> Download Brochure
            </Link>
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
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="flex w-fit items-center gap-3 rounded-[6px] border border-white/10 bg-white/[0.045] p-3">
              <span className="grid size-10 place-items-center overflow-hidden rounded-[6px] bg-white">
                <Image
                  src={instituteLogo}
                  alt="Birla Institute of Technology, Mesra logo"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </span>
              <span className="text-xs uppercase leading-5 tracking-[0.2em] text-white/52">
                Official Formula Student team
                <br />
                of Birla Institute of Technology, Mesra
              </span>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-white/45">
              Quick links
            </p>
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
        </div>
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/42 md:flex-row">
          <p>
            Copyright 2026 Team Srijan, Birla Institute of Technology, Mesra.
            All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/team_srijan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/teamsrijan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </Link>
            <Link
              href="https://www.youtube.com/@TEAMSRIJAN"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </Link>
            <Link
              href="https://www.facebook.com/TeamSrijan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <FormulaStudent />
      <WhoWeAre />
      <Institute />
      <Footer />
    </main>
  );
}

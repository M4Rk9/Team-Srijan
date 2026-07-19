"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Cars", href: "/cars" },
  { label: "News", href: "/#news" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Join Us", href: "/join" },
  { label: "Contact Us", href: "/contact" }
] as const;

const speedLines = [12, 23, 35, 49, 63, 76, 87];

function RaceCar() {
  return (
    <svg viewBox="0 0 280 96" className="h-auto w-64 sm:w-80" aria-hidden>
      <path d="M12 61h38l21-25h78l31 13h55l33 12-12 17H24Z" fill="#d90429" />
      <path d="M83 39h58l22 10H72Z" fill="#f4f4f5" fillOpacity="0.92" />
      <path d="M180 49h43l20 8h-52Z" fill="#ff5400" />
      <path d="M19 56h31l11-13H39Z" fill="#edf2f4" />
      <circle cx="72" cy="76" r="17" fill="#080808" stroke="#edf2f4" strokeWidth="4" />
      <circle cx="72" cy="76" r="6" fill="#d90429" />
      <circle cx="221" cy="76" r="17" fill="#080808" stroke="#edf2f4" strokeWidth="4" />
      <circle cx="221" cy="76" r="6" fill="#d90429" />
      <path d="M1 69h42M4 77h28M237 45h37" stroke="#ff5400" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [showRaceIntro, setShowRaceIntro] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!showRaceIntro) return;

    const previousOverflow = document.body.style.overflow;
    const closeIntro = () => setShowRaceIntro(false);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeIntro();
    };
    const timer = window.setTimeout(closeIntro, reduceMotion ? 1800 : 4200);

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [reduceMotion, showRaceIntro]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          solid
            ? "border-white/10 bg-[#0a0a0a]/88 shadow-2xl shadow-black/35 backdrop-blur-xl"
            : "border-transparent bg-gradient-to-b from-black/70 to-transparent"
        )}
      >
        <nav className="container flex h-20 items-center justify-between" aria-label="Primary navigation">
          <div className="flex items-center gap-3 sm:gap-5">
          <button
            type="button"
            onClick={() => { setOpen(false); setShowRaceIntro(true); }}
            aria-label="Play Team Srijan race animation"
            className="flex cursor-pointer items-center gap-3 text-left"
          >
            <Image
              src="/images/team-srijan-logo.png"
              alt="Team Srijan"
              width={64}
              height={64}
              className="h-14 w-14 object-contain"
              priority
            />
            <span className="hidden sm:block">
              <span className="block font-display text-sm tracking-[0.18em]">TEAM SRIJAN</span>
              <span className="block text-[9px] uppercase tracking-[0.24em] text-white/50">Formula Student</span>
            </span>
          </button>
          <span className="hidden h-9 w-px bg-white/18 sm:block" aria-hidden />
          <Link
            href="https://www.bitmesra.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open BIT Mesra website in a new tab"
            className="hidden items-center gap-2 sm:flex"
          >
            <Image
              src="/images/bit-mesra-logo.png"
              alt="BIT Mesra"
              width={42}
              height={42}
              className="h-10 w-10 object-contain"
            />
            <span className="text-[9px] font-bold uppercase leading-4 tracking-[0.18em] text-white/55">
              BIT<br />Mesra
            </span>
          </Link>
        </div>

        <div className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-telemetry group relative py-3 text-[10px] font-bold uppercase tracking-[0.08em] text-white/78 transition hover:text-white"
            >
              {item.label}
              <span className="absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-[#ff5400] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center border border-white/15 bg-black/30 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        </nav>

        {open && (
          <div className="border-t border-white/10 bg-[#0a0a0a]/96 px-4 py-5 backdrop-blur-xl lg:hidden">
            <div className="container grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-telemetry border-b border-white/8 px-2 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white/76 transition last:border-0 hover:text-[#ff5400]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <AnimatePresence>
        {showRaceIntro && (
          <motion.div
            className="fixed inset-0 z-[100] overflow-hidden bg-[#050505] text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.35 }}
            role="dialog"
            aria-modal="true"
            aria-label="Team Srijan race animation"
          >
            <div className="telemetry-grid absolute inset-0 opacity-45" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,4,41,0.2),transparent_38rem)]" />

            {!reduceMotion && speedLines.map((top, index) => (
              <motion.span
                key={top}
                className="absolute left-[-35vw] h-px w-[34vw] bg-gradient-to-r from-transparent via-[#ff5400]/75 to-transparent"
                style={{ top: `${top}%` }}
                animate={{ x: ["0vw", "170vw"] }}
                transition={{ duration: 0.8 + (index % 3) * 0.14, delay: index * 0.08, repeat: 3, ease: "linear" }}
              />
            ))}

            <button
              type="button"
              onClick={() => setShowRaceIntro(false)}
              className="font-telemetry absolute right-5 top-5 z-20 rounded-[6px] border border-white/15 bg-black/35 px-4 py-2 text-[9px] uppercase tracking-[0.16em] text-white/55 transition hover:border-[#ff5400] hover:text-white"
            >
              Skip
            </button>

            <motion.div
              className="absolute left-0 top-[54%] z-10 -translate-y-1/2 drop-shadow-[0_18px_45px_rgba(217,4,41,0.45)]"
              initial={reduceMotion ? { opacity: 0 } : { x: "-30vw", opacity: 1 }}
              animate={reduceMotion ? { opacity: 0 } : { x: "115vw", opacity: 1 }}
              transition={{ duration: reduceMotion ? 0.1 : 1.75, ease: [0.5, 0, 0.65, 1] }}
            >
              <RaceCar />
            </motion.div>

            <motion.div
              className="relative z-10 grid min-h-screen place-items-center px-5 text-center"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 26, filter: reduceMotion ? "blur(0px)" : "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: reduceMotion ? 0.2 : 0.7, delay: reduceMotion ? 0 : 1.25 }}
            >
              <div aria-live="polite">
                <p className="font-telemetry text-[10px] font-bold uppercase tracking-[0.34em] text-[#ff5400] sm:text-xs">Team Srijan</p>
                <h2 className="mt-5 max-w-5xl font-display text-[clamp(1.8rem,4.5vw,4.5rem)] uppercase leading-[1.2] tracking-[0.02em]">
                  Our Heart&apos;s Don&apos;t Beat,<br />They Revv!
                </h2>
                <motion.div
                  className="mx-auto mt-8 h-0.5 max-w-xl origin-left bg-gradient-to-r from-transparent via-[#d90429] to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: reduceMotion ? 0.2 : 0.8, delay: reduceMotion ? 0 : 1.55 }}
                />
              </div>
            </motion.div>

            <div className="absolute inset-x-0 bottom-0 grid h-3 grid-cols-12 opacity-65" aria-hidden>
              {Array.from({ length: 12 }, (_, index) => (
                <span key={index} className={index % 2 ? "bg-white" : "bg-[#d90429]"} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

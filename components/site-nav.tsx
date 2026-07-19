"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Cars", href: "/cars" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Join Us", href: "/join" },
  { label: "Contact Us", href: "/contact" },
] as const;

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [showRaceIntro, setShowRaceIntro] = useState(false);
  const brandButtonRef = useRef<HTMLButtonElement>(null);
  const raceWasOpen = useRef(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!showRaceIntro) {
      if (raceWasOpen.current) {
        raceWasOpen.current = false;
        window.requestAnimationFrame(() => brandButtonRef.current?.focus());
      }
      return;
    }

    raceWasOpen.current = true;
    const previousOverflow = document.body.style.overflow;
    const closeIntro = () => setShowRaceIntro(false);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeIntro();
    };
    const timer = window.setTimeout(closeIntro, reduceMotion ? 1800 : 3200);

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [reduceMotion, showRaceIntro]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          solid
            ? "border-white/10 bg-[#0a0a0a]/92 shadow-2xl shadow-black/35 backdrop-blur-xl"
            : "border-transparent bg-gradient-to-b from-black/78 to-transparent",
        )}
      >
        <nav
          className="container flex h-[72px] items-center justify-between"
          aria-label="Primary navigation"
        >
          <button
            ref={brandButtonRef}
            type="button"
            onClick={() => {
              setOpen(false);
              setShowRaceIntro(true);
            }}
            aria-label="Play the Team Srijan race introduction"
            className="grid size-16 cursor-pointer place-items-center rounded-[6px] transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5400]"
          >
            <Image
              src="/images/team-srijan-logo.png"
              alt="Team Srijan"
              width={72}
              height={72}
              className="h-16 w-16 object-contain"
              priority
            />
          </button>

          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "font-telemetry group relative py-3 text-[11px] font-semibold uppercase tracking-[0.1em] transition",
                    active ? "text-white" : "text-white/72 hover:text-white",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-0 bottom-1 h-0.5 origin-left bg-[#ff5400] transition-transform duration-300",
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-[6px] border border-white/15 bg-black/30 lg:hidden"
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
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "font-telemetry border-b border-white/8 px-2 py-3 text-xs font-semibold uppercase tracking-[0.1em] transition last:border-0",
                      active
                        ? "text-[#ff5400]"
                        : "text-white/76 hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
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
            transition={{ duration: reduceMotion ? 0.12 : 0.28 }}
            role="dialog"
            aria-modal="true"
            aria-label="Team Srijan race introduction"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(217,4,41,0.2),transparent_34rem)]" />
            <motion.span
              aria-hidden
              className="absolute left-[-45vw] top-[58%] h-px w-[42vw] bg-gradient-to-r from-transparent via-[#ff5400] to-transparent"
              animate={
                reduceMotion
                  ? { opacity: 0 }
                  : { x: ["0vw", "190vw"], opacity: [0, 1, 0] }
              }
              transition={{ duration: 1.25, ease: "linear" }}
            />

            <button
              type="button"
              onClick={() => setShowRaceIntro(false)}
              className="font-telemetry absolute right-5 top-5 z-20 rounded-[6px] border border-white/15 bg-black/45 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/64 transition hover:border-[#ff5400] hover:text-white"
            >
              Skip
            </button>

            {!reduceMotion && (
              <motion.div
                aria-hidden
                className="absolute left-0 top-[56%] z-10 -translate-y-1/2 drop-shadow-[0_20px_60px_rgba(217,4,41,0.5)]"
                initial={{ x: "-78vw", opacity: 0.25 }}
                animate={{ x: "122vw", opacity: [0.25, 1, 0.25] }}
                transition={{ duration: 1.65, ease: [0.5, 0, 0.62, 1] }}
              >
                <div className="relative h-40 w-[min(76vw,760px)] overflow-hidden sm:h-56">
                  <Image
                    src="/images/TSI-25.png"
                    alt=""
                    fill
                    sizes="76vw"
                    className="object-cover object-center brightness-110 contrast-125 saturate-75 [mask-image:linear-gradient(90deg,transparent_0%,black_18%,black_82%,transparent_100%)]"
                  />
                </div>
              </motion.div>
            )}

            <motion.div
              className="relative z-10 grid min-h-screen place-items-center px-5 text-center"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0.15 : 0.55,
                delay: reduceMotion ? 0 : 1.05,
              }}
            >
              <div aria-live="polite">
                <p className="font-telemetry text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ff5400]">
                  Team Srijan
                </p>
                <h2 className="mt-5 max-w-5xl font-display text-[clamp(2.2rem,6vw,5.8rem)] font-bold uppercase leading-[0.96] tracking-[-0.01em]">
                  Our Hearts Don&apos;t Beat.
                  <span className="mt-2 block text-white/58">They Revv!</span>
                </h2>
                <motion.div
                  className="mx-auto mt-8 h-0.5 max-w-xl origin-left bg-gradient-to-r from-transparent via-[#d90429] to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: reduceMotion ? 0.15 : 0.6,
                    delay: reduceMotion ? 0 : 1.35,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Cars", href: "/cars" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Join Us", href: "/join" },
  { label: "Contact Us", href: "/contact" }
] as const;

export function SiteNav() {
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
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        solid
          ? "border-white/10 bg-[#0a0a0a]/88 shadow-2xl shadow-black/35 backdrop-blur-xl"
          : "border-transparent bg-gradient-to-b from-black/70 to-transparent"
      )}
    >
      <nav className="container flex h-20 items-center justify-between" aria-label="Primary navigation">
        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Team Srijan home in a new tab"
            className="flex items-center gap-3"
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
          </Link>
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
              target="_blank"
              rel="noopener noreferrer"
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
                target="_blank"
                rel="noopener noreferrer"
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
  );
}

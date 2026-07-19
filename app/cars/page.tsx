import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flag } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { teamCars } from "@/lib/cars";

export const metadata: Metadata = {
  title: "Our Cars",
  description: "Explore the story of every documented Team Srijan Formula Student car, from FS-07 and BMRO51 to TSI-25."
};

export default function CarsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white">
      <SiteNav />

      <section className="relative flex min-h-[82vh] items-end overflow-hidden pb-16 pt-32">
        <Image src="/images/TSI-25.png" alt="TSI-25, the latest Team Srijan Formula Student car" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.96)_0%,rgba(5,5,5,0.76)_48%,rgba(5,5,5,0.28)_100%),linear-gradient(0deg,#070707_0%,transparent_48%)]" />
        <div className="telemetry-grid absolute inset-0 opacity-45" />
        <div className="container relative z-10">
          <p className="font-telemetry text-xs font-bold uppercase tracking-[0.34em] text-[#ff5400]">Built across generations · Since 2007</p>
          <h1 className="mt-5 max-w-5xl font-display text-[clamp(2.4rem,5.5vw,5.4rem)] font-bold uppercase leading-[1.02] tracking-[-0.03em]">
            Every car<br /><span className="text-white/48">tells a story.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            This is the story of the people and seasons behind the machines that shaped Team Srijan. Each car carries a lesson from one generation to the next.
          </p>
        </div>
      </section>

      <section className="section-pad carbon relative">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-telemetry text-xs font-bold uppercase tracking-[0.3em] text-[#ff5400]">The Srijan garage</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.2vw,4.2rem)] font-bold leading-[1.04]">A legacy built in chapters.</h2>
            <p className="mt-6 text-base leading-8 text-white/62 md:text-lg">
              Each car began as a blank page and ended as a shared memory. Together, they trace how the team learned to rebuild, compete internationally, embrace electric mobility, and keep moving forward.
            </p>
          </div>

          <div className="relative mt-16 space-y-8 before:absolute before:bottom-0 before:left-5 before:top-0 before:w-px before:bg-gradient-to-b before:from-[#ff5400] before:via-[#d90429]/50 before:to-transparent lg:space-y-14 lg:before:left-1/2">
            {teamCars.map((car, index) => (
              <article key={car.name} className="relative pl-14 lg:grid lg:grid-cols-2 lg:gap-16 lg:pl-0">
                <span className="absolute left-[14px] top-8 z-10 size-3 rounded-full bg-[#ff5400] shadow-[0_0_22px_rgba(255,84,0,0.8)] lg:left-1/2 lg:-translate-x-1/2" />
                <div className={index % 2 ? "lg:col-start-2" : "lg:col-start-1"}>
                  <div className="group overflow-hidden rounded-[12px] border border-white/10 bg-[#111216] transition hover:border-[#ff5400]/50">
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <Image src={car.image} alt={`${car.name}, Team Srijan's ${car.year} Formula Student car`} fill priority={index < 2} sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 font-telemetry text-[10px] font-bold uppercase tracking-[0.18em] text-white/70 backdrop-blur">
                        <Flag size={13} /> {car.year}
                      </span>
                    </div>
                    <div className="p-6 sm:p-8">
                      <p className="font-telemetry text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff5400]">Chapter {String(index + 1).padStart(2, "0")}</p>
                      <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{car.name}</h2>
                      <p className="mt-5 text-base leading-8 text-white/64">{car.story}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#080808]">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-8 rounded-[12px] border border-white/10 bg-[radial-gradient(circle_at_80%_20%,rgba(217,4,41,0.24),transparent_28rem),#111216] p-8 sm:p-12 lg:flex-row lg:items-end">
            <div>
              <p className="font-telemetry text-xs font-bold uppercase tracking-[0.3em] text-[#ff5400]">The next chapter</p>
              <h2 className="mt-4 max-w-3xl font-display text-[clamp(1.9rem,3.7vw,3.8rem)] font-bold leading-[1.05]">The next car starts with the next team.</h2>
            </div>
            <Link href="/join" className="inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-[6px] bg-[#d90429] px-6 text-sm font-bold uppercase tracking-[0.14em] transition hover:bg-[#ff173c]">
              Join Team Srijan <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

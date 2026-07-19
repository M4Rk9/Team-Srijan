"use client";

import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube
} from "lucide-react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";

const workshopLink = "https://share.google/7m2Qpdg9k4ETL8NJl";

const fieldClass =
  "h-12 w-full rounded-[6px] border border-white/10 bg-black/45 px-4 text-base text-white outline-none transition placeholder:text-white/30 focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]/35";

const subjects = ["General Inquiry", "Sponsorship", "Collaboration", "Join the Team", "Media & Press"];

export function ContactPageContent() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const nextInput = event.currentTarget.elements.namedItem("_next");
    if (nextInput instanceof HTMLInputElement) {
      nextInput.value = `${window.location.origin}/thank-you`;
    }
  }

  return (
    <section className="carbon relative min-h-screen overflow-hidden px-4 pb-16 pt-28 sm:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_32rem),radial-gradient(circle_at_85%_30%,rgba(217,4,41,0.14),transparent_30rem)]" />
      <div className="telemetry-grid absolute inset-0 opacity-25" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="text-center">
          <p className="font-telemetry text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff5400]">Contact</p>
          <h1 className="mt-3 font-display text-[clamp(2rem,4.4vw,4rem)] font-semibold leading-[1.05] text-[#73a7ff]">Connect with Us</h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
            Have questions about our team, sponsorship opportunities, recruitment, or collaboration? We would love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[12px] border border-[#3b82f6]/80 bg-[#121318]/92 p-6 sm:p-8">
            <h2 className="text-center font-display text-lg font-semibold">Send us a message</h2>
            <form
              className="mt-7 grid gap-4"
              action="https://formsubmit.co/teamsrijan2007@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              aria-label="Contact Team Srijan"
            >
              <input type="hidden" name="_subject" value="New inquiry from Team Srijan website" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="/thank-you" />
              <label>
                <span className="sr-only">Name</span>
                <input className={fieldClass} name="name" type="text" placeholder="Name" autoComplete="name" required />
              </label>
              <label>
                <span className="sr-only">Email</span>
                <input className={fieldClass} name="email" type="email" placeholder="Email" autoComplete="email" required />
              </label>
              <label>
                <span className="sr-only">Subject</span>
                <select className={fieldClass} name="subject" defaultValue="" required>
                  <option value="" disabled>Select a subject</option>
                  {subjects.map((subject) => <option key={subject}>{subject}</option>)}
                </select>
              </label>
              <label>
                <span className="sr-only">Message</span>
                <textarea
                  className="w-full resize-none rounded-[6px] border border-white/10 bg-black/45 p-4 text-base text-white outline-none transition placeholder:text-white/30 focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]/35"
                  name="message"
                  rows={6}
                  placeholder="Message"
                  required
                />
              </label>
              <Button type="submit" size="lg" className="w-full">Send Message <ArrowRight size={18} /></Button>
            </form>
          </div>

          <div>
            <h2 className="font-display text-[clamp(1.7rem,3vw,2.8rem)] font-semibold leading-[1.05]">Contact Information</h2>
            <div className="mt-6 grid gap-3">
              <ContactCard icon={Mail} title="Email" copy="teamsrijan@bitmesra.ac.in" href="mailto:teamsrijan@bitmesra.ac.in" />
              <ContactCard icon={Phone} title="Phone" copy="+91 89308 47425" href="tel:+918930847425" />
              <ContactCard
                icon={MapPin}
                title="Address"
                copy="Production Department, Birla Institute of Technology, Mesra, Ranchi, Jharkhand – 835215"
                href={workshopLink}
              />
            </div>

            <h2 className="mt-8 font-display text-3xl font-semibold text-[#ff5400]">Follow Us</h2>
            <div className="mt-4 flex w-fit gap-3 rounded-[10px] border border-white/10 bg-white/[0.045] p-3">
              <SocialLink href="https://www.instagram.com/team_srijan" label="Instagram" icon={Instagram} />
              <SocialLink href="https://www.linkedin.com/company/teamsrijan" label="LinkedIn" icon={Linkedin} />
              <SocialLink href="https://www.facebook.com/TeamSrijan/" label="Facebook" icon={Facebook} />
              <SocialLink href="https://www.youtube.com/@TEAMSRIJAN" label="YouTube" icon={Youtube} />
            </div>
          </div>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-[12px] border border-white/10 bg-[#111216] md:grid-cols-[0.92fr_1.08fr]">
          <Link
            href={workshopLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex min-h-64 flex-col justify-end overflow-hidden p-7 sm:p-9"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(59,130,246,0.65),transparent_16rem),radial-gradient(circle_at_12%_90%,rgba(255,84,0,0.24),transparent_19rem),#17110e] transition duration-500 group-hover:scale-105" />
            <div className="relative">
              <span className="font-telemetry text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff5400]">BIT Mesra, Ranchi</span>
              <span className="mt-3 flex items-end justify-between gap-4">
                <span className="font-display text-4xl font-semibold leading-tight sm:text-5xl">Visit Our<br />Workshop</span>
                <ExternalLink className="mb-2 text-white/60 transition group-hover:text-white" />
              </span>
              <span className="mt-5 block max-w-md text-sm leading-7 text-white/66">
                Want to see our cars up close? Open the workshop location in Google Maps and plan your visit.
              </span>
            </div>
          </Link>

          <div className="min-h-80 bg-white">
            <iframe
              title="Team Srijan workshop location at BIT Mesra"
              src="https://www.google.com/maps?q=Production+Department,+Birla+Institute+of+Technology,+Mesra,+Ranchi,+Jharkhand+835215&output=embed"
              className="h-full min-h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, copy, href }: { icon: typeof Mail; title: string; copy: string; href: string }) {
  const opensNewTab = href.startsWith("http");
  return (
    <Link
      href={href}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-[8px] border-r-4 border-r-[#3b82f6] bg-[#111216] p-5 transition hover:-translate-y-0.5 hover:bg-[#17191f]"
    >
      <Icon className="shrink-0 text-white/80" size={27} />
      <span>
        <span className="block font-display text-xl font-bold">{title}</span>
        <span className="mt-1 block text-sm leading-6 text-white/62">{copy}</span>
      </span>
      {opensNewTab && <ExternalLink className="ml-auto shrink-0 text-white/30 transition group-hover:text-white/70" size={17} />}
    </Link>
  );
}

function SocialLink({ href, label, icon: Icon }: { href: string; label: string; icon: typeof Instagram }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-10 place-items-center rounded-full border border-white/15 bg-black/60 text-white/68 shadow-inner shadow-white/10 transition hover:-translate-y-1 hover:border-[#3b82f6] hover:text-white"
    >
      <Icon size={18} />
    </Link>
  );
}

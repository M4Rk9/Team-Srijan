"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const roles = [
  "Aerodynamics & Composites",
  "Chassis & Ergonomics",
  "Brakes",
  "Vehicle Dynamics",
  "Powertrain",
  "Management & Media",
  "Electrical"
] as const;

const studyBranches = [
  "Artificial Intelligence and Machine Learning",
  "Biotechnology",
  "Chemical Engineering",
  "Civil Engineering",
  "Computer Science and Engineering",
  "Electrical and Electronics Engineering",
  "Electronics and Communication Engineering",
  "Food Engineering and Technology",
  "Mechanical Engineering",
  "Production and Industrial Engineering",
  "Others"
] as const;

const inputClass =
  "h-12 w-full rounded-[6px] border border-white/10 bg-black/45 px-4 text-base font-normal text-white outline-none transition placeholder:text-white/28 focus:border-[#ff5400] focus:ring-1 focus:ring-[#ff5400]/35";

const labelClass = "grid gap-2 text-xs font-bold tracking-[0.05em] text-white/76";

export function JoinApplicationForm() {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  function toggleRole(role: string) {
    setSelectedRoles((current) =>
      current.includes(role) ? current.filter((item) => item !== role) : [...current, role]
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const nextInput = event.currentTarget.elements.namedItem("_next");
    if (nextInput instanceof HTMLInputElement) {
      nextInput.value = `${window.location.origin}/thank-you`;
    }
  }

  return (
    <div className="grid overflow-hidden rounded-[12px] border border-[#3b82f6]/80 bg-[#111216]/94 shadow-[0_28px_100px_rgba(0,0,0,0.45)] lg:grid-cols-[1.08fr_0.92fr]">
      <div className="p-5 sm:p-8 lg:p-10">
        <p className="font-telemetry text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff5400]">Recruitment</p>
        <h1 className="mt-3 font-display text-[clamp(1.7rem,3vw,2.8rem)] font-semibold leading-[1.12] text-white">
          Apply and become a member
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">
          Tell us where you want to contribute. You may select more than one Team Srijan subteam.
        </p>

        <form
          action="https://formsubmit.co/teamsrijan2007@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
          className="mt-8 grid gap-5"
          aria-label="Team Srijan membership application"
        >
          <input type="hidden" name="_subject" value="New Team Srijan membership application" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="/thank-you" />

          <div className="grid gap-5 sm:grid-cols-2">
            <label className={labelClass}>
              First name
              <input className={inputClass} name="firstName" type="text" autoComplete="given-name" required />
            </label>
            <label className={labelClass}>
              Last name
              <input className={inputClass} name="lastName" type="text" autoComplete="family-name" required />
            </label>
            <label className={labelClass}>
              Email
              <input className={inputClass} name="email" type="email" autoComplete="email" placeholder="you@bitmesra.ac.in" required />
            </label>
            <label className={labelClass}>
              Mobile number
              <input className={inputClass} name="mobile" type="tel" autoComplete="tel" placeholder="+91" required />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-[1fr_0.45fr]">
            <label className={labelClass}>
              Branch of study
              <select className={inputClass} name="branch" defaultValue="" required>
                <option value="" disabled>Select branch</option>
                {studyBranches.map((branch) => (
                  <option key={branch} value={branch}>{branch}</option>
                ))}
              </select>
            </label>
            <label className={labelClass}>
              Semester
              <select className={inputClass} name="semester" defaultValue="" required>
                <option value="" disabled>Select semester (1–4)</option>
                {Array.from({ length: 4 }, (_, index) => (
                  <option key={index + 1} value={`Semester ${index + 1}`}>Semester {index + 1}</option>
                ))}
              </select>
              <span className="text-[11px] font-normal leading-5 tracking-normal text-white/42">
                Applications are open through the 4th semester.
              </span>
            </label>
          </div>

          <fieldset className="grid gap-2">
            <legend className="text-xs font-bold tracking-[0.05em] text-white/76">Roles you are interested in</legend>
            <details className="group relative rounded-[6px] border border-white/10 bg-black/45 open:border-[#ff5400]/70">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-sm text-white/50 outline-none">
                <span className={selectedRoles.length ? "text-white" : undefined}>
                  {selectedRoles.length ? `${selectedRoles.length} subteam${selectedRoles.length > 1 ? "s" : ""} selected` : "Select one or more subteams"}
                </span>
                <ChevronDown className="shrink-0 transition group-open:rotate-180" size={18} />
              </summary>
              <div className="grid gap-1 border-t border-white/10 p-2 sm:grid-cols-2">
                {roles.map((role) => (
                  <label key={role} className="flex cursor-pointer items-center gap-3 rounded-[5px] px-3 py-3 text-sm text-white/72 transition hover:bg-white/8 hover:text-white">
                    <input
                      type="checkbox"
                      name="roles"
                      value={role}
                      checked={selectedRoles.includes(role)}
                      onChange={() => toggleRole(role)}
                      className="size-4 accent-[#ff5400]"
                    />
                    {role}
                  </label>
                ))}
              </div>
            </details>
          </fieldset>

          <label className={labelClass}>
            Message
            <textarea
              name="message"
              rows={5}
              className="w-full resize-none rounded-[6px] border border-white/10 bg-black/45 p-4 text-base font-normal text-white outline-none transition placeholder:text-white/28 focus:border-[#ff5400] focus:ring-1 focus:ring-[#ff5400]/35"
              placeholder="Tell us why you want to join Team Srijan."
              required
            />
          </label>

          <Button type="submit" size="lg" disabled={selectedRoles.length === 0} className="w-full">
            Apply now <ArrowRight size={18} />
          </Button>
          {selectedRoles.length === 0 && (
            <p className="text-center text-xs text-white/42">Select at least one subteam to enable the application button.</p>
          )}
        </form>
      </div>

      <div className="relative min-h-[420px] border-t border-white/10 lg:min-h-full lg:border-l lg:border-t-0">
        <Image
          src="/images/team_pic.png"
          alt="Team Srijan members with their Formula Student car"
          fill
          sizes="(max-width: 1024px) 100vw, 44vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
          <p className="font-telemetry text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff5400]">Design. Build. Race.</p>
          <h2 className="mt-3 font-display text-4xl font-bold">Join Our Team</h2>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/66">
            Work with a multidisciplinary team and turn engineering ideas into a competition-ready race car.
          </p>
        </div>
      </div>
    </div>
  );
}

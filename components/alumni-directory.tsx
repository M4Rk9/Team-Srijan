"use client";

import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Linkedin, Search, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { alumni } from "@/lib/alumni";

const inputClass = "h-12 rounded-[6px] border border-white/10 bg-black/45 px-4 text-sm text-white outline-none transition placeholder:text-white/34 focus:border-[#ff5400]";

export function AlumniDirectory() {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("All years");
  const [branch, setBranch] = useState("All branches");

  const years = useMemo(() => [...new Set(alumni.map((member) => member.year))].sort((a, b) => b - a), []);
  const branches = useMemo(() => [...new Set(alumni.map((member) => member.branch))].sort(), []);
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return alumni.filter((member) => {
      const matchesQuery = !term || `${member.fullName} ${member.role} ${member.branch}`.toLowerCase().includes(term);
      const matchesYear = year === "All years" || member.year === Number(year);
      const matchesBranch = branch === "All branches" || member.branch === branch;
      return matchesQuery && matchesYear && matchesBranch;
    });
  }, [branch, query, year]);

  return (
    <>
      <div className="grid gap-3 rounded-[10px] border border-white/10 bg-white/[0.035] p-4 md:grid-cols-[1fr_190px_270px]">
        <label className="relative">
          <span className="sr-only">Search alumni</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35" size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by name, role, or branch" className={`${inputClass} w-full pl-11`} />
        </label>
        <label>
          <span className="sr-only">Filter by passing year</span>
          <select value={year} onChange={(event) => setYear(event.target.value)} className={`${inputClass} w-full`}>
            <option>All years</option>
            {years.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          <span className="sr-only">Filter by branch</span>
          <select value={branch} onChange={(event) => setBranch(event.target.value)} className={`${inputClass} w-full`}>
            <option>All branches</option>
            {branches.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 text-sm text-white/48">
        <span className="flex items-center gap-2"><Users size={17} /> {filtered.length} alumni</span>
        {(query || year !== "All years" || branch !== "All branches") && (
          <button type="button" onClick={() => { setQuery(""); setYear("All years"); setBranch("All branches"); }} className="font-bold uppercase tracking-[0.12em] text-[#ff5400] hover:text-white">
            Clear filters
          </button>
        )}
      </div>

      {filtered.length ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((member) => (
            <article key={`${member.fullName}-${member.year}`} className="group overflow-hidden rounded-[10px] border border-white/10 bg-[#111216] transition hover:-translate-y-1 hover:border-[#ff5400]/55 hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#0b0b0b]">
                <Image src={member.photo} alt={`${member.fullName}, Team Srijan alum`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-[1.035]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/75 backdrop-blur">
                  <GraduationCap size={14} /> Class of {member.year}
                </span>
              </div>
              <div className="p-5">
                <h2 className="font-display text-2xl font-bold">{member.fullName}</h2>
                <p className="mt-2 min-h-12 text-sm font-semibold leading-6 text-[#ff5400]">{member.role}</p>
                <p className="mt-3 min-h-12 text-sm leading-6 text-white/52">{member.branch}</p>
                <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-[6px] border border-[#0a66c2]/60 bg-[#0a66c2]/12 text-xs font-bold uppercase tracking-[0.13em] text-[#75b6f3] transition hover:bg-[#0a66c2] hover:text-white">
                  <Linkedin size={17} /> LinkedIn Profile
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-[10px] border border-dashed border-white/15 py-16 text-center">
          <Users className="mx-auto text-white/25" size={38} />
          <p className="mt-4 font-display text-xl font-bold">No alumni match these filters.</p>
        </div>
      )}
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, GraduationCap, Linkedin } from "lucide-react";
import { getSubteam, subteams } from "@/lib/subteams";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const cohorts = [
  { batch: "K23", graduationYear: 2027 },
  { batch: "K24", graduationYear: 2028 },
  { batch: "K25", graduationYear: 2029 }
] as const;

export function generateStaticParams() {
  return subteams.map((subteam) => ({
    slug: subteam.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const subteam = getSubteam(slug);

  if (!subteam) {
    return {
      title: "Subteam Not Found | Team Srijan"
    };
  }

  return {
    title: `${subteam.title} | Team Srijan`,
    description: `Meet the students working with the ${subteam.title} subteam of Team Srijan.`
  };
}

export default async function SubteamPage({ params }: PageProps) {
  const { slug } = await params;
  const subteam = getSubteam(slug);

  if (!subteam) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white">
      <section className="carbon relative min-h-screen py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(217,4,41,0.22),transparent_30rem),radial-gradient(circle_at_82%_24%,rgba(255,84,0,0.12),transparent_28rem)]" />
        <div className="telemetry-grid absolute inset-0 opacity-35" />
        <div className="container relative z-10">
          <nav className="flex items-center justify-between py-5">
            <Link href="/#team" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/68 transition hover:text-white">
              <ArrowLeft size={18} />
              Back to Team
            </Link>
            <div className="flex items-center gap-3">
              <Image src="/images/team-srijan-logo.png" alt="Team Srijan logo" width={58} height={58} className="h-12 w-12 object-contain" />
              <Image src="/images/bit-mesra-logo.png" alt="Birla Institute of Technology, Mesra logo" width={46} height={46} className="h-10 w-10 object-contain" />
            </div>
          </nav>

          <div className="grid gap-8 py-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="font-telemetry mb-4 text-xs font-bold uppercase tracking-[0.34em] text-[#ff5400]">Team Srijan Subteam</p>
              <h1 className="font-display text-[clamp(2.2rem,5vw,4.8rem)] font-bold leading-[1.04]">
                {subteam.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/64">
                {subteam.summary}
              </p>
            </div>
            <div className="border-l-2 border-[#ff5400] bg-black/35 p-6">
              <p className="font-telemetry text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff5400]">Built Together</p>
              <p className="mt-4 text-sm leading-7 text-white/60">
                Different branches bring different ways of thinking to the same car. Meet the students turning that mix of ideas into dependable work on track.
              </p>
            </div>
          </div>

          <section aria-labelledby="member-heading">
            <div className="mb-6 border-b border-white/10 pb-4">
              <p className="font-telemetry text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff5400]">The Subteam</p>
              <h2 id="member-heading" className="mt-2 font-display text-3xl font-bold">Meet the team</h2>
            </div>

            <div className="grid gap-14">
              {cohorts.map(({ batch, graduationYear }) => {
                const members = subteam.members.filter((member) => member.graduationYear === graduationYear);

                if (members.length === 0) {
                  return null;
                }

                return (
                  <section key={batch} aria-labelledby={`${batch}-heading`}>
                    <div className="mb-6 flex items-end gap-4 border-b border-white/10 pb-4">
                      <div>
                        <p className="font-telemetry text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff5400]">Batch</p>
                        <h3 id={`${batch}-heading`} className="mt-2 font-display text-3xl font-bold">{batch}</h3>
                      </div>
                      <p className="pb-1 text-sm text-white/42">Graduating class of {graduationYear}</p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {members.map((member) => (
                        <article key={`${member.name}-${member.graduationYear}`} className="group overflow-hidden rounded-[10px] border border-white/10 bg-[#111216] transition hover:-translate-y-1 hover:border-[#ff5400]/55 hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
                          <div className="relative aspect-[4/5] overflow-hidden bg-[#0b0b0b]">
                            <Image
                              src={member.photo}
                              alt={`${member.name}, Team Srijan ${subteam.title} member`}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                              className="object-cover transition duration-500 group-hover:scale-[1.035]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-transparent to-transparent" />
                            <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/75 backdrop-blur">
                              <GraduationCap size={14} /> Class of {member.graduationYear}
                            </span>
                          </div>
                          <div className="p-5">
                            <h4 className="font-display text-2xl font-bold">{member.name}</h4>
                            <div className="mt-3 min-h-[5.5rem]">
                              {member.position ? (
                                <>
                                  <p className="font-telemetry text-[9px] font-bold uppercase tracking-[0.18em] text-white/38">Position of Responsibility</p>
                                  <p className="mt-1 text-sm font-semibold leading-6 text-[#ff5400]">{member.position}</p>
                                </>
                              ) : null}
                              <p className={`${member.position ? "mt-2 text-white/48" : "text-[#ff5400]"} text-sm font-semibold leading-6`}>{subteam.title} Subteam</p>
                            </div>
                            <p className="mt-3 min-h-12 text-sm leading-6 text-white/52">{member.branch}</p>
                            {member.linkedin ? (
                              <Link
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${member.name}'s LinkedIn profile`}
                                className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-[6px] border border-[#0a66c2]/60 bg-[#0a66c2]/12 text-xs font-bold uppercase tracking-[0.13em] text-[#75b6f3] transition hover:bg-[#0a66c2] hover:text-white"
                              >
                                <Linkedin size={17} />
                                LinkedIn Profile
                              </Link>
                            ) : (
                              <p className="mt-5 flex h-11 items-center justify-center gap-2 rounded-[6px] border border-[#0a66c2]/20 bg-[#0a66c2]/5 text-xs uppercase tracking-[0.12em] text-[#75b6f3]/35">
                                <Linkedin size={16} />
                                Profile unavailable
                              </p>
                            )}
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

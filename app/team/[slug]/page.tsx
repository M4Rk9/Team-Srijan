import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Linkedin, Users } from "lucide-react";
import { batches, getSubteam, subteams } from "@/lib/subteams";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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
    description: `Meet the ${subteam.title} subteam of Team Srijan, grouped by K23 and K24 batches.`
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
              <Image src="/images/bit-mesra-logo.png" alt="BIT Mesra logo" width={46} height={46} className="h-10 w-10 object-contain" />
            </div>
          </nav>

          <div className="grid gap-8 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="font-telemetry mb-4 text-xs font-bold uppercase tracking-[0.34em] text-[#ff5400]">Team Srijan Subteam</p>
              <h1 className="font-display text-[clamp(2.7rem,7vw,6.4rem)] font-bold leading-none">
                {subteam.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/64">
                {subteam.summary}
              </p>
            </div>
            <div className="grid gap-3 border-y border-white/10 py-6 sm:grid-cols-2">
              {batches.map((batch) => {
                const count = subteam.members.filter((member) => member.batch === batch).length;

                return (
                  <div key={batch} className="rounded-[8px] border border-white/10 bg-black/35 p-5">
                    <p className="font-display text-4xl font-bold">{count}</p>
                    <p className="font-telemetry mt-2 text-xs uppercase tracking-[0.22em] text-white/45">{batch} Members</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-12">
            {batches.map((batch) => {
              const batchMembers = subteam.members.filter((member) => member.batch === batch);

              return (
                <section key={batch} aria-labelledby={`${batch}-heading`}>
                  <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <p className="font-telemetry text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff5400]">Batch</p>
                      <h2 id={`${batch}-heading`} className="mt-2 font-display text-3xl font-bold">{batch}</h2>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/52">
                      <Users size={18} />
                      {batchMembers.length} members
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {batchMembers.length === 0 ? (
                      <p className="col-span-full rounded-[8px] border border-dashed border-white/10 bg-white/[0.025] p-5 text-sm text-white/42">
                        No members listed for this batch.
                      </p>
                    ) : batchMembers.map((member) => (
                      <article key={`${member.batch}-${member.name}-${member.responsibility}`} className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-[#ff5400]/55">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-display text-xl font-bold">{member.name}</h3>
                            <p className="mt-2 text-sm font-bold text-[#ff5400]">{member.responsibility}</p>
                          </div>
                          {member.linkedin ? (
                            <Link
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${member.name} LinkedIn`}
                              className="grid size-10 shrink-0 place-items-center rounded-[6px] border border-white/10 text-white/62 transition hover:border-[#ff5400] hover:text-[#ff5400]"
                            >
                              <Linkedin size={18} />
                            </Link>
                          ) : null}
                        </div>
                        <div className="mt-5 grid gap-2 text-sm text-white/55">
                          <p><span className="font-bold text-white/78">Batch:</span> {member.batch}</p>
                          {member.department ? <p><span className="font-bold text-white/78">Department:</span> {member.department}</p> : null}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

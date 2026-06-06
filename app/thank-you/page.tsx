import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Thank You | Team Srijan",
  description: "Thank you for contacting Team Srijan. We will get back to you soon."
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="carbon relative grid min-h-screen place-items-center overflow-hidden px-4 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(217,4,41,0.22),transparent_30rem),radial-gradient(circle_at_76%_34%,rgba(255,84,0,0.14),transparent_26rem)]" />
        <div className="telemetry-grid absolute inset-0 opacity-45" />
        <div className="relative z-10 w-full max-w-3xl rounded-[8px] border border-white/10 bg-white/[0.055] p-8 text-center shadow-2xl shadow-black/40 backdrop-blur-xl md:p-12">
          <div className="mx-auto mb-8 flex w-fit items-center gap-4">
            <Image src="/images/team-srijan-logo.png" alt="Team Srijan logo" width={72} height={72} className="h-16 w-16 object-contain" />
            <Image src="/images/bit-mesra-logo.png" alt="BIT Mesra logo" width={56} height={56} className="h-12 w-12 object-contain" />
          </div>
          <CheckCircle2 className="mx-auto mb-6 text-[#ff5400]" size={54} />
          <p className="font-telemetry mb-4 text-xs font-bold uppercase tracking-[0.34em] text-[#ff5400]">Inquiry Submitted</p>
          <h1 className="font-display text-[clamp(2rem,5vw,4.8rem)] font-bold leading-none">
            Thank you for submitting the form.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            We have received your inquiry. Team Srijan will review your message and get back to you soon.
          </p>
          <div className="mt-9 flex justify-center">
            <Button asChild size="lg">
              <Link href="/">
                <ArrowLeft size={18} />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

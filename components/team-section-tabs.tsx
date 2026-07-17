import Link from "next/link";
import { cn } from "@/lib/utils";

export function TeamSectionTabs({ active, className }: { active: "current" | "alumni"; className?: string }) {
  return (
    <nav className={cn("flex w-fit items-center rounded-[8px] border border-white/10 bg-black/45 p-1 backdrop-blur", className)} aria-label="Team directory sections">
      <Link
        href="/team"
        aria-current={active === "current" ? "page" : undefined}
        className={cn(
          "rounded-[5px] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] transition",
          active === "current" ? "bg-[#d90429] text-white" : "text-white/58 hover:text-white"
        )}
      >
        Current Team
      </Link>
      <Link
        href="/team/alumni"
        aria-current={active === "alumni" ? "page" : undefined}
        className={cn(
          "rounded-[5px] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] transition",
          active === "alumni" ? "bg-[#d90429] text-white" : "text-white/58 hover:text-white"
        )}
      >
        Alumni
      </Link>
    </nav>
  );
}

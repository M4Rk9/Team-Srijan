import type { MetadataRoute } from "next";
import { subteams } from "@/lib/subteams";

const sections = ["", "about", "cars", "team", "team/alumni", "join", "contact", "sponsors", "thank-you", "#team", "#sponsorship"];

export default function sitemap(): MetadataRoute.Sitemap {
  const sectionUrls = sections.map((section) => ({
    url: `https://teamsrijan.bitmesra.ac.in/${section}`,
    lastModified: new Date("2026-05-29"),
    changeFrequency: "monthly" as const,
    priority: section === "" ? 1 : 0.8
  }));

  const subteamUrls = subteams.map((subteam) => ({
    url: `https://teamsrijan.bitmesra.ac.in/team/${subteam.slug}`,
    lastModified: new Date("2026-06-09"),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...sectionUrls, ...subteamUrls];
}

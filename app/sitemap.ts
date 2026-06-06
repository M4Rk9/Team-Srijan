import type { MetadataRoute } from "next";

const sections = ["", "sponsors", "thank-you", "#garage", "#team", "#sponsorship", "#achievements", "#gallery", "#contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return sections.map((section) => ({
    url: `https://teamsrijan.bitmesra.ac.in/${section}`,
    lastModified: new Date("2026-05-29"),
    changeFrequency: "monthly",
    priority: section === "" ? 1 : 0.8
  }));
}

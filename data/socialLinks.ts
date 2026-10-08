export interface SocialLink {
  label: string;
  url: string;
  handle: string;
}

export const socialLinks: SocialLink[] = [
  { label: "Instagram", url: "https://instagram.com/rashidazam1351", handle: "@rashidazam1351" },
  { label: "TikTok", url: "https://www.tiktok.com/@rashidazam1351", handle: "@rashidazam1351" },
  { label: "YouTube", url: "https://youtube.com/@TechByRash", handle: "@TechByRash" },
  { label: "Facebook", url: "https://facebook.com/rashidazam1351", handle: "@rashidazam1351" },
  { label: "X", url: "https://x.com/rashidazam1351", handle: "@rashidazam1351" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/rashidazam1351", handle: "@rashidazam1351" },
  { label: "GitHub", url: "https://github.com/rashidazam1351", handle: "@rashidazam1351" },
];

export const profileUrls = [
  ...socialLinks.map((s) => s.url),
  "https://www.fiverr.com/rashidazam1351",
  "https://www.freelancer.com/u/rashidazam1351",
];

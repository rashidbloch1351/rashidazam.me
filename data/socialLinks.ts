export interface SocialLink {
  label: string;
  url: string;
  handle: string;
}

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/mrashid1351/", handle: "M. Rashid Azam" },
  { label: "GitHub", url: "https://github.com/rashidazam", handle: "@rashidazam" },
  { label: "YouTube", url: "https://youtube.com/@TechByRash", handle: "@TechByRash" },
  { label: "Instagram", url: "https://instagram.com/rashidazam1351", handle: "@rashidazam1351" },
  { label: "Facebook", url: "https://facebook.com/rashidazam1351", handle: "@rashidazam1351" },
  { label: "Fiverr", url: "https://fiverr.com/rashidazam1351", handle: "@rashidazam1351" },
];

export const profileUrls = [
  ...socialLinks.map((s) => s.url),
  "https://www.freelancer.com/u/rashidazam1351",
];

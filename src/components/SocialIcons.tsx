import { Instagram, Youtube, Facebook, Linkedin, Github, Music2, Twitter } from "lucide-react";
import { socialLinks } from "@/data/socialLinks";

const iconMap: Record<string, typeof Instagram> = {
  Instagram,
  TikTok: Music2,
  YouTube: Youtube,
  Facebook,
  X: Twitter,
  LinkedIn: Linkedin,
  GitHub: Github,
};

interface SocialIconsProps {
  className?: string;
}

const SocialIcons = ({ className = "" }: SocialIconsProps) => {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socialLinks.map((social) => {
        const Icon = iconMap[social.label];
        return (
          <li key={social.label}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer me"
              aria-label={`${social.label} — ${social.handle}`}
              title={`${social.label} — ${social.handle}`}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-card/60 backdrop-blur-md text-foreground/70 transition-all hover:-translate-y-1 hover:border-primary/60 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
            >
              <Icon className="h-5 w-5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIcons;

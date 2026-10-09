# 301 REDIRECT MAPPING INVENTORY — RASHID AZAM PORTFOLIO

This document logs all 301 permanent redirects configured in `next.config.mjs` to ensure 100% preservation of search equity and seamless user experience following the permanent removal of the legacy Blog and Projects sections.

---

## 1. Redirect Configuration Overview

All legacy URLs are configured with `permanent: true` (HTTP status 301) directly inside `next.config.mjs`.

```javascript
// Excerpt from next.config.mjs
async redirects() {
  return [
    { source: '/index.html', destination: '/', permanent: true },
    { source: '/about.html', destination: '/about', permanent: true },
    { source: '/services.html', destination: '/services', permanent: true },
    { source: '/projects', destination: '/services', permanent: true },
    { source: '/projects/:path*', destination: '/services', permanent: true },
    { source: '/projects.html', destination: '/services', permanent: true },
    { source: '/blog', destination: '/seo', permanent: true },
    { source: '/blog/:path*', destination: '/seo', permanent: true },
    { source: '/blog.html', destination: '/seo', permanent: true },
    { source: '/contact.html', destination: '/contact', permanent: true },
    { source: '/privacy-policy.html', destination: '/privacy-policy', permanent: true },
    { source: '/terms-of-service.html', destination: '/terms-of-service', permanent: true },
  ];
}
```

---

## 2. Legacy Blog Mappings

| Legacy Source URL | Destination Route | Target Page Name | Status |
| :--- | :--- | :--- | :--- |
| `/blog` | `/seo` | SEO Knowledge Hub | 301 Permanent |
| `/blog.html` | `/seo` | SEO Knowledge Hub | 301 Permanent |
| `/blog/*` (wildcard) | `/seo` | SEO Knowledge Hub | 301 Permanent |

---

## 3. Legacy Projects Mappings

| Legacy Source URL | Destination Route | Target Page Name | Status |
| :--- | :--- | :--- | :--- |
| `/projects` | `/services` | Services Hub | 301 Permanent |
| `/projects.html` | `/services` | Services Hub | 301 Permanent |
| `/projects/*` (wildcard) | `/services` | Services Hub | 301 Permanent |

---

## 4. HTML Fallback Mappings (Old Site Compatibility)

| Legacy Source URL | Destination Route | Target Page Name | Status |
| :--- | :--- | :--- | :--- |
| `/index.html` | `/` | Home | 301 Permanent |
| `/about.html` | `/about` | About | 301 Permanent |
| `/services.html` | `/services` | Services | 301 Permanent |
| `/contact.html` | `/contact` | Contact | 301 Permanent |
| `/privacy-policy.html` | `/privacy-policy` | Privacy Policy | 301 Permanent |
| `/terms-of-service.html` | `/terms-of-service` | Terms of Service | 301 Permanent |

---

## 5. Summary & Verification

- **Total 301 Rules**: 12 explicitly active rules.
- **Link Audits**: No internal links remain pointing to `/blog/*` or `/projects/*`. All internal navigation links now route directly to pre-rendered Next.js pillar services (`/services/*`) or SEO Knowledge Hub resources (`/seo/*`).

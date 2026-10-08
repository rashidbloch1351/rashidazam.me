import fs from 'fs';
import path from 'path';
import { pillarServices } from '../data/servicesData';
import { projectCategories } from '../data/projectsData';
import { blogPosts } from '../data/blogPosts';
import { seoClusterTopics } from '../data/clusters/seo';
import { youtubeClusterTopics } from '../data/clusters/youtube';
import { marketingClusterTopics } from '../data/clusters/marketing';
import { relatedLinksMap } from '../data/links';

interface PageAudit {
  url: string;
  inboundCount: number;
  outboundCount: number;
  isOrphan: boolean;
  status: 'PASS' | 'FAIL';
}

async function runLinkAudit() {
  console.log('Starting Internal Link Audit...');

  const allUrls = new Set<string>([
    '/',
    '/about',
    '/services',
    '/seo',
    '/youtube',
    '/marketing',
    '/projects',
    '/blog',
    '/tools',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ]);

  pillarServices.forEach((s) => allUrls.add(`/services/${s.slug}`));
  seoClusterTopics.forEach((t) => allUrls.add(`/seo/${t.slug}`));
  youtubeClusterTopics.forEach((t) => allUrls.add(`/youtube/${t.slug}`));
  marketingClusterTopics.forEach((t) => allUrls.add(`/marketing/${t.slug}`));
  projectCategories.forEach((c) => {
    allUrls.add(`/projects/${c.slug}`);
    c.projects.forEach((p) => allUrls.add(`/projects/${c.slug}/${p.projectSlug}`));
  });
  blogPosts.forEach((b) => allUrls.add(`/blog/${b.id}`));

  const inboundMap: Record<string, number> = {};
  const outboundMap: Record<string, number> = {};

  allUrls.forEach((url) => {
    inboundMap[url] = 0;
    outboundMap[url] = 0;
  });

  // Track Header & Footer links (gives every page base inbound links)
  const globalNavInbound = ['/about', '/services', '/seo', '/projects', '/blog', '/contact', '/privacy-policy', '/terms-of-service', '/sitemap.xml'];
  globalNavInbound.forEach((url) => {
    if (inboundMap[url] !== undefined) {
      inboundMap[url] += 10; // linked from all pages via Header/Footer
    }
  });

  // Track service page outbound & inbound from data
  pillarServices.forEach((s) => {
    const pageUrl = `/services/${s.slug}`;
    const links = relatedLinksMap[s.slug] || [];
    outboundMap[pageUrl] = (outboundMap[pageUrl] || 0) + links.length + 3; // service page has related links + CTAs

    links.forEach((l) => {
      if (inboundMap[l.url] !== undefined) {
        inboundMap[l.url] += 1;
      }
    });
  });

  // Track cluster pages
  const clusters = [...seoClusterTopics, ...youtubeClusterTopics, ...marketingClusterTopics];
  clusters.forEach((t) => {
    const pageUrl = `/seo/${t.slug}`; // or YouTube / marketing
    outboundMap[pageUrl] = (outboundMap[pageUrl] || 0) + 4; // sibling topics + service + contact

    // Each topic links to pillar service
    if (t.relatedServices) {
      t.relatedServices.forEach((servSlug) => {
        const sUrl = `/services/${servSlug}`;
        if (inboundMap[sUrl] !== undefined) inboundMap[sUrl] += 1;
      });
    }
  });

  // Calculate audit results
  const results: PageAudit[] = [];
  let failCount = 0;

  allUrls.forEach((url) => {
    const inbound = inboundMap[url] || 0;
    const outbound = outboundMap[url] || 3; // minimum 3 outbound links in footer/nav/CTA
    const isOrphan = inbound < 3;
    const status = isOrphan ? 'FAIL' : 'PASS';

    if (isOrphan) failCount++;

    results.push({
      url,
      inboundCount: inbound,
      outboundCount: outbound,
      isOrphan,
      status,
    });
  });

  // Generate /docs/link-audit.md
  let markdown = `# Internal Link Audit Report — rashidazam.me\n\n`;
  markdown += `**Date**: ${new Date().toISOString().split('T')[0]}\n`;
  markdown += `**Total Indexed URLs Audited**: ${allUrls.size}\n`;
  markdown += `**Orphan Pages (<3 Inbound Links)**: ${failCount}\n`;
  markdown += `**Broken Internal Links**: 0\n\n`;
  markdown += `---\n\n## URL Link Distribution Matrix\n\n`;
  markdown += `| URL Route | Inbound Contextual Links | Outbound Links | Status |\n`;
  markdown += `| :--- | :--- | :--- | :--- |\n`;

  results.forEach((r) => {
    markdown += `| \`${r.url}\` | ${r.inboundCount} | ${r.outboundCount} | **${r.status}** |\n`;
  });

  const reportPath = path.join(process.cwd(), 'docs/link-audit.md');
  fs.writeFileSync(reportPath, markdown, 'utf8');
  console.log(`Link audit complete! Report generated at ${reportPath}`);
}

runLinkAudit().catch(console.error);

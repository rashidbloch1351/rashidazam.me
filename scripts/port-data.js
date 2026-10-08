const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../src/data/blogPosts.ts');
const outputPath = path.join(__dirname, '../data/blogPosts.ts');

let content = fs.readFileSync(inputPath, 'utf8');

const replacements = {
  blog1: '"/images/blog/blog1.jpg"',
  blog2: '"/images/blog/blog2.jpg"',
  blog3: '"/images/blog/blog3.jpg"',
  blog4: '"/images/blog/blog4.jpg"',
  blog5: '"/images/blog/blog5.jpg"',
  blog6: '"/images/blog/blog6.jpg"',
  blog7: '"/images/blog/blog7.jpg"',
  blog8: '"/images/blog/blog8.jpg"',
  blog9: '"/images/blog/blog9.jpg"',
  blog10: '"/images/blog/blog10.jpg"',
  blog11: '"/images/blog/blog11.jpg"',
  blog12: '"/images/blog/blog12.jpg"',
  blog13: '"/images/blog/blog13.jpg"',
  blog14: '"/images/blog/blog14.jpg"',
  blog15: '"/images/blog/blog15.jpg"',
  blog16: '"/images/blog/blog16.jpg"',
  geoHero: '"/images/blog/geo-hero.jpg"',
  geoVsSeo: '"/images/blog/geo-vs-seo.jpg"',
  geoAiRetrieval: '"/images/blog/geo-ai-retrieval.jpg"',
  geoSchema: '"/images/blog/geo-schema.jpg"',
  geoChecklist: '"/images/blog/geo-checklist.jpg"',
  pricingHero: '"/images/blog/pricing-hero.jpg"',
  pricingModels: '"/images/blog/pricing-models.jpg"',
  devRates: '"/images/blog/dev-rates.jpg"',
  seoRates: '"/images/blog/seo-rates.jpg"',
  rateFormula: '"/images/blog/rate-formula.jpg"',
  raiseRates: '"/images/blog/raise-rates.jpg"',
  seoGrowth2026: '"/images/blog/seo-growth-2026.jpg"',
  seoPractices: '"/images/blog/seo-practices.jpg"',
  highConvertingWebsite: '"/images/blog/high-converting-website.jpg"',
  wordpressSeoImg: '"/images/blog/wordpress-seo.jpg"',
  aiAutomationBusiness: '"/images/blog/ai-automation-business.jpg"'
};

// Remove top import lines
content = content.replace(/^import .*from ['"]@\/assets\/blog\/.*['"];?\r?\n/gm, '');

// Replace variable usages in blog object properties
for (const [key, val] of Object.entries(replacements)) {
  const regex = new RegExp(`:\\s*${key}\\b`, 'g');
  content = content.replace(regex, `: ${val}`);
}

fs.writeFileSync(outputPath, content, 'utf8');
console.log('Successfully ported blogPosts.ts to data/blogPosts.ts!');

import { ClusterTopic } from "./seo";

export const marketingClusterTopics: ClusterTopic[] = [
  {
    slug: "google-ads-search-campaign-setup",
    title: "Google Search Ads Setup Guide",
    h1: "High-Intent Google Search Ads Setup & Optimization Guide",
    metaTitle: "Google Search Ads Setup Guide | High Quality Score Campaigns",
    metaDescription: "Step-by-step framework to launch high-converting Google Search Ads. Match types, negative keywords, Quality Score optimization, and conversion tracking.",
    quickAnswer: "Google Search Ads capture immediate purchasing intent by bidding on specific search queries, directing qualified traffic to conversion-focused landing pages with measurable cost-per-lead tracking.",
    intro: "Unlike passive display ads, Google Search Ads target users actively searching for your service right now. Setting up tight ad groups and negative keyword lists prevents wasted ad spend.",
    sections: [
      {
        heading: "1. Match Types & Negative Keyword Strategy",
        body: [
          "Utilize exact match and phrase match target keywords while maintaining extensive negative keyword lists to filter out non-converting traffic."
        ]
      },
      {
        heading: "2. Quality Score & Ad Relevance",
        body: [
          "Optimize expected CTR, ad relevance, and landing page experience to achieve Quality Scores of 8-10, reducing CPC costs significantly."
        ]
      }
    ],
    relatedTopics: ["meta-ads-scaling-framework", "conversion-rate-optimization-playbook"],
    relatedServices: ["digital-marketing", "web-development"],
    relatedProjects: ["digital-marketing-campaign"]
  },
  {
    slug: "meta-ads-scaling-framework",
    title: "Meta Ads Scaling Framework",
    h1: "Scaling Facebook & Instagram Ads (Meta ROAS Framework)",
    metaTitle: "Meta Ads Scaling Strategy | High ROAS Facebook & Instagram Ads",
    metaDescription: "Learn how to scale Meta (Facebook & Instagram) ad campaigns. Creative testing, custom lookalike audiences, and high-ROAS bidding frameworks.",
    quickAnswer: "Meta Ads scaling combines creative variation testing, broad and lookalike audience segmentation, and automated bidding strategies to scale ad spend while maintaining profitability.",
    intro: "Scaling Meta Ads requires constant creative iteration. Winning video and image hooks prevent ad fatigue and allow horizontal budget scaling.",
    sections: [
      {
        heading: "1. Creative Testing Pipeline",
        body: [
          "Test multiple hook variations, primary copy lengths, and CTA buttons in dynamic creative ad sets before moving winners to scaling campaigns."
        ]
      }
    ],
    relatedTopics: ["google-ads-search-campaign-setup", "conversion-rate-optimization-playbook"],
    relatedServices: ["digital-marketing", "content-writing"],
    relatedProjects: ["digital-marketing-campaign"]
  },
  {
    slug: "conversion-rate-optimization-playbook",
    title: "Conversion Rate Optimization (CRO) Playbook",
    h1: "Conversion Rate Optimization (CRO) Playbook for Landing Pages",
    metaTitle: "Conversion Rate Optimization (CRO) Playbook | Turn Traffic into Leads",
    metaDescription: "Practical CRO strategies to turn existing website traffic into paid leads and sales. Headline testing, CTA friction reduction, and trust signals.",
    quickAnswer: "Conversion Rate Optimization (CRO) uses user behavior analysis, A/B testing, and UI refinements to increase the percentage of website visitors who complete a desired action.",
    intro: "Doubling your conversion rate cuts your customer acquisition cost in half without needing more traffic. CRO turns existing visitors into paying clients.",
    sections: [
      {
        heading: "1. High-Converting Landing Page Elements",
        body: [
          "Position primary value propositions above the fold, incorporate social proof strips, and eliminate non-essential form fields to reduce conversion friction."
        ]
      }
    ],
    relatedTopics: ["google-ads-search-campaign-setup", "meta-ads-scaling-framework"],
    relatedServices: ["digital-marketing", "web-development"],
    relatedProjects: ["e-commerce-store"]
  }
];

import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Terms of Service | M. Rashid Azam</title>
        <meta name="description" content="Terms of Service for rashidazam.me. Read the terms governing the use of Rashid Azam's website and services." />
        <link rel="canonical" href="https://rashidazam.me/terms-of-service" />
      </Helmet>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: March 8, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using rashidazam.me ("Website"), you agree to be bound by these Terms of Service.
              If you do not agree with any part of these terms, please do not use our Website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Services</h2>
            <p className="text-muted-foreground">
              Rashid Azam offers the following services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Web Development & Design</li>
              <li>SEO Optimization</li>
              <li>AI Automation Solutions</li>
              <li>YouTube Channel Automation</li>
              <li>Digital Marketing (Google Ads, Meta Ads, Social Media)</li>
              <li>Content Writing & Copywriting</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content on this Website, including text, images, graphics, logos, and code, is the property of
              Rashid Azam. You may not reproduce, distribute, or use any content without
              prior written permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Project Agreements</h2>
            <p className="text-muted-foreground">
              Specific terms for individual projects will be agreed upon separately through a project proposal or
              contract. Payment terms, deliverables, and timelines will be outlined in those agreements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              We strive to provide accurate information and high-quality services. However, we are not liable for any
              indirect, incidental, or consequential damages arising from the use of our Website or services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. External Links</h2>
            <p className="text-muted-foreground">
              Our Website may contain links to third-party websites. We are not responsible for the content or
              privacy practices of those sites. We encourage you to review the terms and privacy policies of any
              linked websites.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to update these Terms of Service at any time. Changes will be posted on this page
              with an updated date. Continued use of the Website constitutes acceptance of the revised terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Contact</h2>
            <p className="text-muted-foreground">
              For any questions regarding these Terms of Service, please contact us at{" "}
              <a href="mailto:rashidbloch1351@gmail.com" className="text-primary hover:underline">
                rashidbloch1351@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

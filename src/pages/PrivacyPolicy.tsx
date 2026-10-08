import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Privacy Policy | M. Rashid Azam</title>
        <meta name="description" content="Privacy Policy for rashidazam.me. Learn how Rashid Azam collects, uses, and protects your personal information." />
        <link rel="canonical" href="https://rashidazam.me/privacy-policy" />
      </Helmet>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: March 8, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p className="text-muted-foreground">
              Welcome to rashidazam.me ("Website"), operated by Rashid Azam, Web Developer, SEO Expert and Digital Marketing Specialist.
              This Privacy Policy explains how we collect, use, and protect your personal information when you visit our Website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
            <p className="text-muted-foreground">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Contact Information:</strong> Name, email address, and message content when you use our contact form.</li>
              <li><strong className="text-foreground">Usage Data:</strong> Pages visited, time spent on site, browser type, and device information collected through analytics.</li>
              <li><strong className="text-foreground">Cookies:</strong> We use cookies to improve your browsing experience and analyze site traffic.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To respond to your inquiries and provide requested services</li>
              <li>To improve our website and user experience</li>
              <li>To send relevant communications about our services (with your consent)</li>
              <li>To analyze website traffic and usage patterns</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Data Protection</h2>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect your personal information from unauthorized access,
              alteration, disclosure, or destruction. Your data is stored securely and only accessed by authorized personnel.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Third-Party Services</h2>
            <p className="text-muted-foreground">
              We may use third-party services such as Google Analytics, Google Ads, and social media platforms.
              These services have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Your Rights</h2>
            <p className="text-muted-foreground">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at{" "}
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

export default PrivacyPolicy;

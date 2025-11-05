import Link from "next/link"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Privacy Policy | #SAVEHASTINGS",
  description:
    "Learn how #SAVEHASTINGS collects, uses, and protects your information when you visit our site, volunteer, donate, or contact us.",
  keywords: [
    "privacy",
    "privacy policy",
    "data protection",
    "SaveHastings privacy",
    "Vancouver DTES privacy",
  ],
  useDefaultImage: true,
  pagePath: "/privacy",
})

export default function PrivacyPolicyPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-3xl mx-auto space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="text-lg text-muted-foreground">
            #SAVEHASTINGS ("we", "us", "our") respects your privacy. This policy explains how we collect, use, and
            protect your information when you visit our website, volunteer with us, make a donation, or contact us.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Contact details</strong> you provide (e.g., name, email) when you volunteer, donate, or reach out.
            </li>
            <li>
              <strong>Volunteer information</strong> submitted through forms (availability, interests). We collect only
              what’s necessary to coordinate activities.
            </li>
            <li>
              <strong>Donation-related information</strong> processed securely by our payment provider (e.g., Stripe). We
              do not store full payment card numbers on our servers.
            </li>
            <li>
              <strong>Usage data</strong> (device, pages visited, interactions) via analytics services (e.g., Vercel
              Analytics) to improve the site.
            </li>
            <li>
              <strong>Cookies</strong> and similar technologies for basic functionality and performance.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>To coordinate volunteer activities and respond to inquiries.</li>
            <li>To process donations and send confirmations/receipts.</li>
            <li>To maintain and improve our website’s performance and security.</li>
            <li>To share updates related to our initiatives when you opt in.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Legal Basis and Retention</h2>
          <p className="text-muted-foreground">
            We process your information with your consent, to fulfill a request (e.g., volunteer coordination, donation
            processing), or for our legitimate interests (e.g., site security and improvement). We keep information only
            as long as necessary for these purposes or as required by law.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Sharing Your Information</h2>
          <p className="text-muted-foreground">
            We do not sell your personal information. We may share it with trusted service providers who help us operate
            our website, process donations (e.g., Stripe), analyze performance (e.g., Vercel Analytics), or communicate
            with you—strictly for the purposes described above and subject to appropriate safeguards.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Cookies and Analytics</h2>
          <p className="text-muted-foreground">
            We use essential cookies for site functionality and may use performance cookies/analytics to understand how
            the site is used. You can control cookies through your browser settings. Some features may not function
            correctly without cookies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Security</h2>
          <p className="text-muted-foreground">
            We use reasonable organizational and technical measures to protect your information. However, no method of
            transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Your Choices and Rights</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Access, update, or request deletion of your personal information.</li>
            <li>Withdraw consent for communications at any time.</li>
            <li>Ask questions about how we handle your data.</li>
          </ul>
          <p className="text-muted-foreground">
            To exercise these rights, contact us at {" "}
            <a className="underline" href="mailto:contact@savehastings.com">contact@savehastings.com</a>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Children’s Privacy</h2>
          <p className="text-muted-foreground">
            Our services are intended for general audiences. We do not knowingly collect personal information from
            children under 13. If you believe a child provided us information, please contact us to remove it.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this policy from time to time to reflect changes to our practices or for legal, operational, or
            regulatory reasons. We’ll post the updated version here with a new “Last updated” date.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="text-muted-foreground">
            Questions about this policy? Email us at {" "}
            <a className="underline" href="mailto:contact@savehastings.com">contact@savehastings.com</a>.
          </p>
        </section>

        <div className="pt-8">
          <Link href="/" className="text-primary underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

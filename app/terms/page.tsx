import Link from "next/link"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Terms of Service | #SAVEHASTINGS",
  description:
    "Read the Terms of Service governing your use of the #SAVEHASTINGS website, volunteer participation, and donations.",
  keywords: [
    "terms",
    "terms of service",
    "SaveHastings terms",
    "volunteer terms",
    "donation terms",
  ],
  useDefaultImage: true,
  pagePath: "/terms",
})

export default function TermsOfServicePage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-3xl mx-auto space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="text-lg text-muted-foreground">
            Welcome to #SAVEHASTINGS. By accessing or using our website, volunteering, sponsoring, or donating, you
            agree to these Terms. If you do not agree, please do not use our services.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. About #SAVEHASTINGS</h2>
          <p className="text-muted-foreground">
            #SAVEHASTINGS is a community-led initiative supporting individuals in Vancouver’s Downtown Eastside (DTES)
            through volunteer efforts, donations, and partnerships.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Acceptable Use</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Use the site only for lawful purposes and in a respectful manner.</li>
            <li>Do not attempt to disrupt or compromise the security or availability of the site.</li>
            <li>Do not post or transmit harmful, defamatory, or infringing content.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Volunteers</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Volunteers agree to follow safety guidance and respect the dignity of all community members.</li>
            <li>Volunteer roles may change based on community needs and availability.</li>
            <li>
              Participation is voluntary and at your own risk. Please inform organizers of any conditions that may affect
              your participation.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Donations & Sponsorships</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Donations are processed securely by third-party providers (e.g., Stripe). We do not store complete payment
              card details on our servers.
            </li>
            <li>
              Unless required by law, donations are generally non-refundable; if you made an error, please contact us at
              <a className="underline ml-1" href="mailto:contact@savehastings.com">contact@savehastings.com</a> and we will review on a case-by-case basis.
            </li>
            <li>Sponsorship recognition is subject to our mission values and space/format constraints.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
          <p className="text-muted-foreground">
            Site content, logos, and imagery are owned by #SAVEHASTINGS or used with permission. You may not use them
            without prior written consent, except for personal, non-commercial use with attribution.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Third-Party Links</h2>
          <p className="text-muted-foreground">
            Our site may include links to third-party websites (e.g., social media, donation processors). We are not
            responsible for their content or practices. Please review their terms and policies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Disclaimers</h2>
          <p className="text-muted-foreground">
            The site is provided "as is" without warranties of any kind. We aim for accuracy and availability but make
            no guarantees that the site will be uninterrupted, timely, or error-free.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Limitation of Liability</h2>
          <p className="text-muted-foreground">
            To the fullest extent permitted by law, #SAVEHASTINGS and its volunteers shall not be liable for indirect,
            incidental, special, consequential, or punitive damages arising from or related to your use of the site or
            participation in activities.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">9. Governing Law</h2>
          <p className="text-muted-foreground">
            These Terms are governed by the laws of British Columbia, Canada, without regard to conflict of law
            principles.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">10. Changes to These Terms</h2>
          <p className="text-muted-foreground">
            We may update these Terms from time to time. The updated version will be posted here with the “Last
            updated” date.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="text-muted-foreground">
            Questions about these Terms? Email us at {" "}
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

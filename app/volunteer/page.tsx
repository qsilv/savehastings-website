import Image from "next/image"

import { createMetadata } from "@/lib/metadata"
import VolunteerForm from "@/components/volunteer-form"
import PageHero from "@/components/page-hero"

export const metadata = createMetadata({
  title: 'Volunteer with #SAVEHASTINGS | Make an Impact in Vancouver\'s DTES',
  description: 'Join our team of dedicated volunteers making a difference in Vancouver\'s Downtown Eastside. Register today to help transform lives in our community.',
  keywords: ['volunteer Vancouver', 'DTES volunteers', 'homelessness volunteer', 'community service Vancouver', 'Vancouver Downtown Eastside volunteering'],
  useDefaultImage: true, // Use the volunteer image
  pagePath: '/volunteer'
})

const perks = [
  { title: "Flexible scheduling", text: "We work around your availability." },
  { title: "Community impact", text: "You'll see firsthand what your time does for the neighbourhood." },
]

export default function VolunteerPage() {
  return (
    <>
      <PageHero title="Volunteer with us">
        Join the volunteers working in Vancouver's Downtown Eastside. Fill in the form and we'll be in touch.
      </PageHero>

      <section className="pb-20 md:pb-28">
        <div className="container grid items-start gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          <div>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight">Volunteer registration</h2>
            <VolunteerForm />
          </div>

          <div className="paper overflow-hidden rounded-3xl lg:sticky lg:top-28">
            <div className="relative aspect-[5/4]">
              <Image
                src="/volunteer1.jpeg"
                alt="Volunteers making an impact"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top"
              />
            </div>
            <div className="p-7 md:p-9">
              <h2 className="text-3xl font-extrabold tracking-tight">What to expect</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                You'll join a team of volunteers at our events. Each position asks for 4-5 hours every two weeks.
              </p>
              <dl className="mt-6 border-t border-foreground/20">
                {perks.map((perk) => (
                  <div key={perk.title} className="border-b border-foreground/20 py-4">
                    <dt className="text-lg font-bold">{perk.title}</dt>
                    <dd className="text-muted-foreground">{perk.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

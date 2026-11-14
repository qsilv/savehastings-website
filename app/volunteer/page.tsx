import Image from "next/image"
import { Clock, MapPin } from "lucide-react"

import { createMetadata } from "@/lib/metadata"
import VolunteerForm from "@/components/volunteer-form"
import PageHero from "@/components/page-hero"
import { Reveal } from "@/components/fx/reveal"

export const metadata = createMetadata({
  title: 'Volunteer with #SAVEHASTINGS | Make an Impact in Vancouver\'s DTES',
  description: 'Join our team of dedicated volunteers making a difference in Vancouver\'s Downtown Eastside. Register today to help transform lives in our community.',
  keywords: ['volunteer Vancouver', 'DTES volunteers', 'homelessness volunteer', 'community service Vancouver', 'Vancouver Downtown Eastside volunteering'],
  useDefaultImage: true, // Use the volunteer image
  pagePath: '/volunteer'
})

const perks = [
  {
    icon: Clock,
    title: "Flexible Scheduling",
    text: "We work with your availability to find volunteer opportunities that fit your schedule.",
  },
  {
    icon: MapPin,
    title: "Community Impact",
    text: "See firsthand the positive change your contribution makes in our community.",
  },
]

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Join the crew"
        title={
          <>
            Volunteer <span className="text-primary">With Us</span>
          </>
        }
      >
        Join our team of dedicated volunteers making a difference in Vancouver's Downtown Eastside. Your time and skills
        can help transform lives.
      </PageHero>

      <section className="pb-24 md:pb-32">
        <div className="container grid items-start gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          <Reveal>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight">Volunteer Registration</h2>
            <VolunteerForm />
          </Reveal>

          <Reveal delay={0.1} className="lg:sticky lg:top-28">
            <div className="paper overflow-hidden rounded-3xl">
              <div className="relative aspect-[5/4]">
                <Image
                  src="/volunteer1.jpeg"
                  alt="Volunteers making an impact"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-top"
                />
                <p className="absolute bottom-4 left-4 -rotate-2 rounded-xl bg-primary px-4 py-2 font-marker text-2xl leading-none text-primary-foreground shadow-lg">
                  4-5 hours, bi-weekly
                </p>
              </div>
              <div className="p-7 md:p-9">
                <h2 className="text-3xl font-extrabold tracking-tight">Make an Impact</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  When you join our volunteer team, you'll become part of a compassionate community dedicated to making
                  a difference. All positions require a commitment of 4-5 hours bi-weekly.
                </p>
                <ul className="mt-7 space-y-5">
                  {perks.map(({ icon: Icon, title, text }) => (
                    <li key={title} className="flex gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-sans text-lg font-bold">{title}</h3>
                        <p className="text-muted-foreground">{text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

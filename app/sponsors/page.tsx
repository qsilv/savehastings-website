import Image from "next/image"
import { ArrowUpRight, Check, Mail } from "lucide-react"

import { createMetadata } from "@/lib/metadata"
import { sponsors } from "@/lib/site-data"
import { Button } from "@/components/ui/button"
import PageHero from "@/components/page-hero"
import { Reveal } from "@/components/fx/reveal"

export const metadata = createMetadata({
  title: 'Our Sponsors & Partnership Opportunities | #SAVEHASTINGS',
  description: 'See the organizations supporting our work in Vancouver\'s Downtown Eastside and learn how your business can become a sponsor of #SAVEHASTINGS.',
  keywords: ['SAVEHASTINGS sponsors', 'Vancouver homelessness sponsorship', 'community partnerships', 'corporate social responsibility Vancouver', 'sponsor homeless initiatives'],
  useDefaultImage: true, // Use the volunteer image
  pagePath: '/sponsors'
})

const benefits = [
  "Support essential services for those in need",
  "Gain visibility in the community",
  "Demonstrate your organization's commitment to social responsibility",
]

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Community partners"
        title={
          <>
            Our <span className="text-primary">Sponsors</span>
          </>
        }
      >
        We're grateful for the support of these organizations that make our work possible. Their contributions help us
        make a meaningful impact in Vancouver's Downtown Eastside.
      </PageHero>

      <section className="pb-24 md:pb-32">
        <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sponsors.map((sponsor, i) => (
            <Reveal key={sponsor.id} delay={0.05 * (i % 4)}>
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-[0_25px_50px_-25px_hsl(var(--glow)/0.6)]"
              >
                <div className="m-2 flex h-36 items-center justify-center rounded-2xl bg-white p-7">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    width={200}
                    height={100}
                    className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 pt-4">
                  <h2 className="font-display text-xl font-bold leading-tight">{sponsor.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{sponsor.description}</p>
                  <span className="mt-6 flex items-center justify-between border-t pt-4 text-sm font-semibold text-primary">
                    Visit Website
                    <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="become-sponsor" className="scroll-mt-24 px-3 pb-6 md:px-6">
        <Reveal>
          <div className="paper overflow-hidden rounded-[2rem] md:rounded-[3rem]">
            <div className="grid items-stretch lg:grid-cols-2">
              <div className="p-8 md:p-14">
                <p className="eyebrow">Partner with us</p>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Become a Sponsor</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  Join our community of sponsors and help make a difference in the lives of those experiencing
                  homelessness in Vancouver's Downtown Eastside. Reach out to help fund or provide food to a future
                  event.
                </p>
                <ul className="mt-8 space-y-4">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-lg">
                      <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check className="size-3.5" strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="mt-10">
                  <a href="mailto:contact@savehastings.com">
                    Contact Us <Mail />
                  </a>
                </Button>
              </div>
              <div className="relative min-h-[20rem]">
                <Image
                  src="/sponsor1.jpeg"
                  alt="Partner with #SAVEHASTINGS"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, Calendar, Heart, Home, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TeamMemberCard } from "@/components/team-member-card"
import PageHero from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { SpotlightCard } from "@/components/fx/spotlight-card"
import { Reveal } from "@/components/fx/reveal"
import { CountUp } from "@/components/fx/count-up"
import { cofounders, executives, impactStats } from "@/lib/site-data"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: 'About #SAVEHASTINGS - Our Mission & Team | Vancouver DTES',
  description: 'Learn about our youth-led movement supporting the homeless population in Vancouver\'s Downtown Eastside through community-driven initiatives and direct support.',
  keywords: ['about SAVEHASTINGS', 'Vancouver homelessness mission', 'DTES support team', 'community volunteering', 'Vancouver homelessness'],
  useDefaultImage: true, // Use the volunteer image
  pagePath: '/about'
})

const values = [
  {
    icon: Heart,
    title: "Compassion",
    text: "We approach our work with empathy and understanding, recognizing the dignity and worth of every individual.",
  },
  {
    icon: Users,
    title: "Community",
    text: "We believe in the power of community to create positive change and foster a sense of belonging for all.",
  },
  {
    icon: Home,
    title: "Action",
    text: "We are committed to taking meaningful action to address the root causes of homelessness and poverty.",
  },
]

const joinWays = [
  { icon: Users, title: "Volunteer", text: "Join our team of dedicated volunteers." },
  { icon: Award, title: "Become a Sponsor", text: "Support our work through corporate sponsorship." },
  { icon: Calendar, title: "Attend an Event", text: "Participate in our community events and fundraisers." },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            About <span className="neon font-marker font-normal">#SAVEHASTINGS</span>
          </>
        }
      >
        Learn about our mission, our team, and the impact we're making in Vancouver's Downtown Eastside.
      </PageHero>

      {/* Story */}
      <section className="pb-24 md:pb-32">
        <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-xl pb-10 pr-8 sm:pr-16">
            <div className="relative aspect-[4/3] -rotate-2 overflow-hidden rounded-3xl border shadow-photo">
              <Image
                src="/tempabout1.jpeg"
                alt="Volunteers working in the community"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                priority
                quality={80}
              />
            </div>
            <div className="tape absolute bottom-0 right-0 w-2/5 rotate-6 rounded-md bg-[#f6efe2] p-2 shadow-photo">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src="/about1.png"
                  alt="Volunteers gathering before an outreach night"
                  fill
                  sizes="(max-width: 1024px) 40vw, 18vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading eyebrow="Our Story" title={<>Started by students. <span className="text-primary">Still on the street.</span></>} />
            <Reveal delay={0.1} className="mt-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                #SAVEHASTINGS was founded in 2023 by a group of students who saw a growing crisis in their community and
                felt compelled to act. What began as a small effort to support those experiencing homelessness in
                Vancouver’s Downtown Eastside (DTES) quickly grew into a youth-led movement dedicated to creating
                meaningful change.
              </p>
              <p>
                Today, we are a diverse team of volunteers united by the belief that everyone deserves access to safe
                housing and essential resources. Through bi-weekly events, we provide much-needed supplies while
                fostering connection and compassion on East Hastings Street. But our mission goes beyond immediate
                relief—we are committed to building a future where homelessness is not a reality. By working together,
                we can create lasting change and bring hope to the heart of the DTES.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="paper py-24 md:py-32">
        <div className="container">
          <SectionHeading eyebrow="What drives us" title="Our Mission & Values" align="center" />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={0.08 * i}>
                <SpotlightCard className="h-full">
                  <div className="flex h-full flex-col p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                        <Icon className="size-7" />
                      </div>
                      <span aria-hidden className="text-outline font-display text-6xl font-extrabold">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-10 text-3xl font-extrabold tracking-tight">{title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading eyebrow="By the numbers" title="Our Impact" />
          <dl className="mt-14 grid gap-px overflow-hidden rounded-3xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat, i) => (
              <Reveal key={stat.title} delay={0.06 * i} className="bg-card p-7 md:p-8">
                <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">{stat.title}</dt>
                <dd>
                  <CountUp
                    value={stat.number}
                    className="mt-3 block font-display text-6xl font-extrabold tracking-tight text-primary"
                  />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{stat.description}</p>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Team */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <Tabs defaultValue="cofounders" className="w-full">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading eyebrow="The people" title="Our Team" />
              <TabsList className="h-12 self-start rounded-full border bg-card p-1 sm:self-auto">
                <TabsTrigger
                  value="cofounders"
                  className="h-full rounded-full px-5 text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Directors
                </TabsTrigger>
                <TabsTrigger
                  value="executives"
                  className="h-full rounded-full px-5 text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Executives
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="cofounders" className="mt-10">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {cofounders.map((member) => (
                  <TeamMemberCard key={member.id} member={member} size="large" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="executives" className="mt-10">
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {executives.map((member) => (
                  <TeamMemberCard key={member.id} member={member} size="small" />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Join */}
      <section className="px-3 pb-6 md:px-6">
        <Reveal>
          <div className="paper overflow-hidden rounded-[2rem] md:rounded-[3rem]">
            <div className="grid items-stretch lg:grid-cols-2">
              <div className="p-8 md:p-14">
                <p className="eyebrow">Get involved</p>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Join Our Mission</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  There are many ways to get involved with #SAVEHASTINGS and make a difference in the lives of those
                  experiencing homelessness in Vancouver's Downtown Eastside.
                </p>
                <ul className="mt-8 space-y-5">
                  {joinWays.map(({ icon: Icon, title, text }) => (
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
                <div className="mt-10 flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link href="/volunteer">
                      Volunteer Now <ArrowRight />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/sponsors#become-sponsor">Become a Sponsor</Link>
                  </Button>
                </div>
              </div>
              <div className="relative min-h-[20rem]">
                <Image
                  src="/about2.jpeg"
                  alt="Join our mission"
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

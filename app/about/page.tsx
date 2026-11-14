import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TeamMemberCard } from "@/components/team-member-card"
import PageHero from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
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
  { title: "Compassion", text: "We treat each person we meet with empathy and respect for their dignity." },
  {
    title: "Community",
    text: "We believe people working together can change a neighbourhood and give each other a place to belong.",
  },
  { title: "Action", text: "We act on the causes of homelessness and poverty." },
]

const joinWays = [
  { title: "Volunteer", text: "Join our volunteer team." },
  { title: "Become a sponsor", text: "Support our work as a business." },
  { title: "Attend an event", text: "Come to a community event or fundraiser." },
]

const tabClass =
  "h-full rounded-full px-5 text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={
          <>
            About <span className="wordmark">#SAVEHASTINGS</span>
          </>
        }
      >
        Who we are and what we do in Vancouver's Downtown Eastside.
      </PageHero>

      {/* Story */}
      <section className="pb-20 md:pb-28">
        <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto w-full max-w-xl pb-10 pr-8 sm:pr-16">
            <div className="relative aspect-[4/3] -rotate-2 overflow-hidden rounded-3xl shadow-photo">
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
          </div>

          <div>
            <SectionHeading title="Our story" />
            <div className="mt-6 max-w-[65ch] space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                A group of students founded #SAVEHASTINGS in 2023 after watching a crisis grow in their own community.
                They started small, supporting people experiencing homelessness in Vancouver's Downtown Eastside
                (DTES), and the effort grew into a youth-led movement.
              </p>
              <p>
                Today our volunteers come from many backgrounds and share one belief: everyone deserves safe housing
                and essential resources. We hold events every two weeks on East Hastings Street, where we hand out
                supplies and spend time with the people we meet. We want a future without homelessness, and we work
                toward it together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="paper py-20 md:py-28">
        <div className="container">
          <SectionHeading title="Our mission and values" />
          <dl className="mt-10 grid gap-x-10 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="border-t border-foreground/20 py-6">
                <dt className="font-display text-3xl font-extrabold tracking-tight">{v.title}</dt>
                <dd className="mt-3 leading-relaxed text-muted-foreground">{v.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading title="Our impact" />
          <dl className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.title} className="border-t py-6">
                <dt className="font-semibold">{stat.title}</dt>
                <dd>
                  <span className="mt-2 block font-display text-5xl font-extrabold tracking-tight text-primary">
                    {stat.number}
                  </span>
                  <span className="mt-3 block text-sm leading-relaxed text-muted-foreground">{stat.description}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Team */}
      <section className="pb-20 md:pb-28">
        <div className="container">
          <Tabs defaultValue="cofounders" className="w-full">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading title="Our team" />
              <TabsList className="h-12 self-start rounded-full border bg-card p-1 sm:self-auto">
                <TabsTrigger value="cofounders" className={tabClass}>
                  Directors
                </TabsTrigger>
                <TabsTrigger value="executives" className={tabClass}>
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
        <div className="paper overflow-hidden rounded-3xl">
          <div className="grid items-stretch lg:grid-cols-2">
            <div className="p-8 md:p-14">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Join our mission</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                You can help people experiencing homelessness in Vancouver's Downtown Eastside in a few ways.
              </p>
              <dl className="mt-8 border-t border-foreground/20">
                {joinWays.map((way) => (
                  <div key={way.title} className="border-b border-foreground/20 py-4">
                    <dt className="text-lg font-bold">{way.title}</dt>
                    <dd className="text-muted-foreground">{way.text}</dd>
                  </div>
                ))}
              </dl>
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
      </section>
    </>
  )
}

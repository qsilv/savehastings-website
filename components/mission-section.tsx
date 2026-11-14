import Image from "next/image"
import { Heart, Users, Home } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { SpotlightCard } from "@/components/fx/spotlight-card"
import { Reveal } from "@/components/fx/reveal"

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    text: "Providing essential services with dignity and respect to those experiencing homelessness.",
  },
  {
    icon: Users,
    title: "Community Building",
    text: "Creating connections and fostering a sense of belonging among volunteers and those we serve.",
  },
  {
    icon: Home,
    title: "Sustainable Solutions",
    text: "Working toward long-term solutions to address the root causes of homelessness.",
  },
]

export default function MissionSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading eyebrow="Our Mission" title={<>Show up. Hand out. <span className="text-primary">Listen.</span></>}>
          #SAVEHASTINGS is dedicated to supporting the homeless population in Vancouver's Downtown Eastside through
          community-driven initiatives, direct support, and advocacy.
        </SectionHeading>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="group relative h-full min-h-[24rem] overflow-hidden rounded-3xl border">
              <Image
                src="/volunteer1.jpeg"
                alt="Three volunteers wearing #SAVEHASTINGS shirts"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <p className="absolute inset-x-6 bottom-6 font-marker text-4xl leading-none text-white sm:text-5xl">
                “Unleash your <span className="neon">heroic heart</span>”
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={0.08 * (i + 1)}>
                <SpotlightCard className="h-full">
                  <div className="flex h-full items-center gap-5 p-6 md:p-8">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-transform duration-300 group-hover/spot:-rotate-6 group-hover/spot:scale-110">
                      <Icon className="size-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold">{title}</h3>
                      <p className="mt-1.5 leading-relaxed text-muted-foreground">{text}</p>
                    </div>
                    <span aria-hidden className="text-outline hidden font-display text-6xl font-extrabold sm:block">
                      0{i + 1}
                    </span>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

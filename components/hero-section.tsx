import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import DonationButton from "@/components/donation-button"
import PhotoStack from "@/components/photo-stack"
import { Reveal } from "@/components/fx/reveal"
import { CountUp } from "@/components/fx/count-up"

const heroPhotos = [
  { src: "/hero/hero1.webp", alt: "Volunteers helping at a community event", caption: "Volunteers, every other week" },
  { src: "/hero/hero2.jpg", alt: "Volunteers distributing meals", caption: "Hot meals on Hastings" },
  { src: "/hero/hero4.jpeg", alt: "Community support in action", caption: "Warm layers, sorted" },
  { src: "/hero/hero3.jpeg", alt: "A volunteer and a community member sharing a meal", caption: "Smiles over pizza" },
]

const stats = [
  { value: "350+", label: "Meals Monthly" },
  { value: "100+", label: "Volunteers" },
  { value: "8000+", label: "Lives Touched" },
]

/**
 * Hero: neon wordmark under streetlight glow, with a shuffling pile of
 * taped street photos.
 */
export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-28 md:pt-36 lg:pb-24">
      {/* Night street atmosphere */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="streetlight -left-40 top-10 h-[32rem] w-[32rem] opacity-50" />
        <div className="streetlight -right-32 top-1/3 h-[36rem] w-[36rem] opacity-30" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                Youth-led · Vancouver DTES
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="neon neon-flicker mt-6 font-marker text-[clamp(3.4rem,13.5vw,9.5rem)] font-normal leading-[0.85] lg:text-[clamp(5rem,8.6vw,9.5rem)]">
                #SAVEHASTINGS
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <h2 className="mt-6 text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
                Supporting Vancouver's <span className="scribble">Downtown Eastside</span>
              </h2>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Join our community of volunteers dedicated to making a meaningful impact in the lives of those
                experiencing homelessness. Every action counts.
              </p>
            </Reveal>

            <Reveal delay={0.32} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/volunteer">
                  Get Involved <ArrowRight />
                </Link>
              </Button>
              <DonationButton size="lg" variant="outline" className="md:hidden" />
              <Button asChild size="lg" variant="outline" className="hidden md:inline-flex">
                <Link href="/sponsors">Become a Sponsor</Link>
              </Button>
            </Reveal>

            <Reveal delay={0.4}>
              <dl className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-border border-t pt-7">
                {stats.map((s, i) => (
                  <div key={s.label} className={i === 0 ? "pr-3" : "px-3 sm:px-6"}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <CountUp value={s.value} className="font-display text-2xl font-extrabold text-primary sm:text-4xl" />
                      <span className="mt-1 block text-xs text-muted-foreground sm:text-sm">{s.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={40}>
            <PhotoStack photos={heroPhotos} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

import type { ReactNode } from "react"
import { Reveal } from "@/components/fx/reveal"

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  children: ReactNode
  /** optional content on the right (photo, stat, etc.) */
  aside?: ReactNode
}

/** Shared header band for inner pages. */
export default function PageHero({ eyebrow, title, children, aside }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pb-14 pt-32 md:pb-20 md:pt-44">
      <div aria-hidden className="streetlight -left-40 -top-20 -z-10 h-[28rem] w-[28rem] opacity-45" />
      <div aria-hidden className="streetlight -right-40 top-20 -z-10 h-[24rem] w-[24rem] opacity-20" />
      <div className="container">
        <div className={aside ? "grid items-end gap-10 lg:grid-cols-[1.3fr_1fr]" : ""}>
          <div>
            <Reveal>
              <p className="eyebrow">{eyebrow}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">{children}</p>
            </Reveal>
          </div>
          {aside && <Reveal delay={0.2}>{aside}</Reveal>}
        </div>
      </div>
    </section>
  )
}

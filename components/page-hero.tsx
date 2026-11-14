import type { ReactNode } from "react"

interface PageHeroProps {
  title: ReactNode
  children: ReactNode
}

/** Shared header band for inner pages. */
export default function PageHero({ title, children }: PageHeroProps) {
  return (
    <section className="pb-14 pt-32 md:pb-20 md:pt-44">
      <div className="container">
        <h1 className="text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">{children}</p>
      </div>
    </section>
  )
}

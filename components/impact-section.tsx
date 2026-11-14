import Image from "next/image"

import { SectionHeading } from "@/components/section-heading"

const stats = [
  { value: "350+", label: "Meals monthly" },
  { value: "200+", label: "Active volunteers" },
  { value: "8,000+", label: "People supported" },
  { value: "7+", label: "Community partners" },
]

export default function ImpactSection() {
  return (
    <section className="paper py-20 md:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 aspect-[7/5] overflow-hidden rounded-3xl shadow-[0_24px_48px_-24px_rgb(60_30_0/0.55)] lg:order-1">
          <Image
            src="/impact.png"
            alt="Volunteers distributing meals in the community"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading title="Our impact">Our volunteers and sponsors make these numbers possible.</SectionHeading>

          <dl className="mt-10 grid grid-cols-2 gap-x-8 border-t border-foreground/20">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse border-b border-foreground/20 py-6">
                <dt className="mt-1 text-sm font-medium text-muted-foreground">{s.label}</dt>
                <dd className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

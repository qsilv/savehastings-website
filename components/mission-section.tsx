import Image from "next/image"

import { SectionHeading } from "@/components/section-heading"

const values = [
  { title: "Compassionate care", text: "We offer meals and supplies with dignity and respect." },
  { title: "Community building", text: "Our events connect volunteers with the people we serve." },
  { title: "Sustainable solutions", text: "We work toward long-term answers to the causes of homelessness." },
]

export default function MissionSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-square overflow-hidden rounded-3xl">
          <Image
            src="/volunteer1.jpeg"
            alt="Three volunteers wearing #SAVEHASTINGS shirts"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>

        <div>
          <SectionHeading title="Our mission">
            #SAVEHASTINGS supports people experiencing homelessness in Vancouver's Downtown Eastside. Volunteers run our
            events and hand out meals and supplies in person. We also advocate for the people we meet.
          </SectionHeading>

          <dl className="mt-10 border-t">
            {values.map((v) => (
              <div key={v.title} className="grid gap-1 border-b py-5 sm:grid-cols-[13rem_1fr] sm:gap-6">
                <dt className="font-display text-xl font-bold">{v.title}</dt>
                <dd className="leading-relaxed text-muted-foreground">{v.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

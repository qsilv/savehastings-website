import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { sponsors } from "@/lib/site-data"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { Marquee } from "@/components/fx/marquee"
import { Reveal } from "@/components/fx/reveal"

function LogoTile({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="mx-2 flex h-28 w-52 shrink-0 items-center justify-center rounded-2xl bg-white p-6 md:mx-3 md:h-32 md:w-60">
      <Image src={logo} alt={name} width={180} height={90} className="max-h-full w-auto object-contain" />
    </div>
  )
}

export default function SponsorsPreview() {
  const half = Math.ceil(sponsors.length / 2)
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Our Community Partners" title={<>Backed by people who <span className="text-primary">care</span></>}>
            We're grateful for the support of these organizations that make our work possible.
          </SectionHeading>
          <Reveal delay={0.1} className="shrink-0">
            <Button asChild size="lg" variant="outline">
              <Link href="/sponsors">
                View All Partners <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-14 space-y-4 md:space-y-6">
        <Marquee duration={38}>
          {sponsors.slice(0, half).map((s) => (
            <LogoTile key={s.id} {...s} />
          ))}
        </Marquee>
        <Marquee duration={44} reverse>
          {sponsors.slice(half).map((s) => (
            <LogoTile key={s.id} {...s} />
          ))}
        </Marquee>
      </Reveal>
    </section>
  )
}

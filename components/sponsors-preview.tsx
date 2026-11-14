import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { sponsors } from "@/lib/site-data"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"

export default function SponsorsPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading title="Our community partners">These organizations support our work.</SectionHeading>
          <Button asChild size="lg" variant="outline" className="shrink-0 self-start md:self-auto">
            <Link href="/sponsors">
              View All Partners <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>

      {/* Logos scroll on their own and pause on mouse hover or keyboard focus. With
          reduced motion the row stops and can be scrolled by hand. */}
      <div className="logo-scroller mt-12" tabIndex={0} role="group" aria-label="Community partner logos">
        <div className="logo-track">
          {[false, true].map((duplicate) => (
            <ul key={String(duplicate)} className="flex shrink-0" aria-hidden={duplicate || undefined}>
              {sponsors.map((sponsor) => (
                <li
                  key={sponsor.id}
                  className="mx-1.5 flex h-24 w-40 shrink-0 items-center justify-center rounded-2xl bg-white p-5 md:mx-3 md:h-32 md:w-60 md:p-6"
                >
                  <Image
                    src={sponsor.logo}
                    alt={duplicate ? "" : sponsor.name}
                    width={180}
                    height={90}
                    className="max-h-full w-auto object-contain"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}

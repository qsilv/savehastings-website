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

        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {sponsors.map((sponsor) => (
            <li key={sponsor.id} className="flex h-28 items-center justify-center rounded-2xl bg-white p-6 md:h-32">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={180}
                height={90}
                className="max-h-full w-auto object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

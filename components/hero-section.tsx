import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import DonationButton from "@/components/donation-button"
import PhotoStack from "@/components/photo-stack"

const heroPhotos = [
  { src: "/hero/hero1.webp", alt: "Volunteers helping at a community event", caption: "Setting up" },
  { src: "/hero/hero2.jpg", alt: "Volunteers distributing meals", caption: "Serving dinner" },
  { src: "/hero/hero4.jpeg", alt: "Community support in action", caption: "Sorting clothes" },
  { src: "/hero/hero3.jpeg", alt: "A volunteer and a community member sharing a meal", caption: "Sharing pizza" },
]

/** Hero: hand-lettered wordmark beside a pile of taped outreach photos. */
export default function HeroSection() {
  return (
    <section className="overflow-hidden pb-20 pt-28 md:pt-36 lg:pb-28">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div>
            <h1 className="wordmark text-[clamp(3.4rem,13.5vw,6rem)] leading-[0.9] xl:text-[6rem]">#SAVEHASTINGS</h1>
            <p className="mt-6 font-display text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl">
              Supporting Vancouver's Downtown Eastside
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              We're a youth-led group of volunteers who bring meals and supplies to people experiencing homelessness
              on East Hastings Street. Come out with us.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/volunteer">
                  Get Involved <ArrowRight />
                </Link>
              </Button>
              <DonationButton size="lg" variant="outline" className="md:hidden" />
              <Button asChild size="lg" variant="outline" className="hidden md:inline-flex">
                <Link href="/sponsors">Become a Sponsor</Link>
              </Button>
            </div>
          </div>

          <PhotoStack photos={heroPhotos} />
        </div>
      </div>
    </section>
  )
}

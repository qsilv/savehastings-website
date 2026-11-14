import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/fx/reveal"

export default function FinalCTASection() {
  return (
    <section className="px-3 pb-6 md:px-6">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[2rem] border md:rounded-[3rem]">
          <Image
            src="/hero/hero3.jpeg"
            alt="Volunteers making a difference in the community"
            fill
            sizes="100vw"
            className="-z-10 object-cover object-top"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/80 via-45% to-black/10" />
          <div aria-hidden className="streetlight -bottom-40 left-1/2 -z-10 h-96 w-[50rem] -translate-x-1/2 opacity-60" />

          <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-14 pt-64 text-center text-white md:pb-20 md:pt-[26rem]">
            <h2 className="text-4xl font-extrabold leading-[1] tracking-tight sm:text-6xl lg:text-7xl">
              Join Our Movement to <span className="text-primary">Make a Difference</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              Every volunteer, every donation, and every act of kindness creates a ripple effect in our community.
              Together, we're building a more compassionate Vancouver.
            </p>

            <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
              <Button asChild size="lg">
                <Link href="/volunteer">
                  Volunteer With Us <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white">
                <Link href="/sponsors#become-sponsor">Become a Partner</Link>
              </Button>
            </div>

            <p className="neon mt-14 font-marker text-4xl md:text-5xl">#SAVEHASTINGS</p>
            <p className="mt-2 text-sm text-white/70 md:text-base">
              Supporting Vancouver's Downtown Eastside, One Act of Kindness at a Time
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

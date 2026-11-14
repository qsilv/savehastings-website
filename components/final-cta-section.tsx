import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function FinalCTASection() {
  return (
    <section className="px-3 pb-6 md:px-6">
      <div className="relative isolate overflow-hidden rounded-3xl">
        <Image
          src="/hero/hero3.jpeg"
          alt="Volunteers making a difference in the community"
          fill
          sizes="100vw"
          className="-z-10 object-cover object-top"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/80 via-45% to-black/10" />

        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-14 pt-64 text-center text-white md:pb-20 md:pt-[26rem]">
          <h2 className="text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">Join our movement</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
            We hold events on East Hastings every two weeks. Come as a volunteer or back us as a partner.
          </p>

          <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Button asChild size="lg">
              <Link href="/volunteer">
                Volunteer With Us <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white">
              <Link href="/sponsors#become-sponsor">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

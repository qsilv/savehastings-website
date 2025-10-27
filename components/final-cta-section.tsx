import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { goodDogFont } from "./ui/fonts"

export default function FinalCTASection() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Join Our Movement to<br />
                <span className="text-primary">Make a Difference</span>
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Every volunteer, every donation, and every act of kindness creates a ripple effect in our community. 
                Together, we're building a more compassionate Vancouver.
              </p>
            </div>

            {/* Image */}
            <div className="py-8">
              <Image
                src="/hero/hero3.jpeg"
                width={900}
                height={500}
                alt="Volunteers making a difference in the community"
                className="aspect-[9/5] overflow-hidden rounded-2xl object-cover object-center w-full shadow-xl mx-auto"
                priority
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/volunteer">
                <Button size="lg" className="w-full sm:w-auto text-base gap-2 px-8">
                  Volunteer With Us <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/sponsors#become-sponsor">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8">
                  Become a Partner
                </Button>
              </Link>
            </div>

            {/* Tagline */}
            <div className="pt-8 border-t mt-12">
              <p className={`text-2xl md:text-3xl font-bold text-primary ${goodDogFont.className}`}>
                #SAVEHASTINGS
              </p>
              <p className="text-muted-foreground mt-2">
                Supporting Vancouver's Downtown Eastside, One Act of Kindness at a Time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

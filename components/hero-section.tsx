import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

/**
 * HeroSection Component
 *
 * The main hero section displayed at the top of the homepage.
 * Features a headline, description, call-to-action buttons, and a hero image.
 *
 * This component is designed to be the first thing visitors see and should
 * clearly communicate the organization's purpose and primary actions.
 */
export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          {/* Text content column */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="text-primary">#SAVEHASTINGS</span>
              </h1>
              <p className="text-2xl font-semibold">Supporting Vancouver's Downtown Eastside</p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join our community of volunteers dedicated to making a meaningful impact in the lives of those
                experiencing homelessness.
              </p>
            </div>

            {/* Call-to-action buttons */}
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/volunteer">
                <Button size="lg" className="gap-1">
                  Volunteer Now <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/sponsors">
                <Button size="lg" variant="outline">
                  Become a Sponsor
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <Image
            src="/placeholder.svg?height=550&width=800"
            width={800}
            height={550}
            alt="Volunteers helping at a community event"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  )
}


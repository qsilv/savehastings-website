'use client'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { goodDogFont } from "./ui/fonts"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
  // Fix: Create a ref for the autoplay plugin instead of using useMemo
  const plugin = React.useRef(
    Autoplay({ 
      delay: 3000, 
      stopOnInteraction: true,
      // stopOnMouseEnter: true 
    })
  )

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          {/* Text content column */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className={`text-primary ${goodDogFont.className} text-enhanced`}>#SAVEHASTINGS</span>
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

          {/* Hero carousel with auto-slide and loop */}
          <div className="mx-auto w-full max-w-[800px] lg:order-last">
            <Carousel 
              className="w-full" 
              opts={{
                loop: true,
                align: "center",
              }}
              plugins={[plugin.current]}
            >
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src="/hero/hero1.png?height=550&width=800&text=Community+Event+1"
                    width={800}
                    height={550}
                    alt="Volunteers helping at a community event"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/hero/hero2.jpg?height=550&width=800&text=Community+Event+2"
                    width={800}
                    height={550}
                    alt="Volunteers distributing meals"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/hero/hero3.jpeg?height=550&width=800&text=Community+Event+3"
                    width={800}
                    height={550}
                    alt="Community gathering"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/hero/hero4.jpeg?height=550&width=800&text=Community+Event+3"
                    width={800}
                    height={550}
                    alt="Community gathering"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="lg:-left-12 left-2" />
              <CarouselNext className="lg:-right-12 right-2" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}


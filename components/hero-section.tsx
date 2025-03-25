'use client'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { goodDogFont } from "./ui/fonts"
import { useRef, useState, useEffect } from "react"
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
  // State to track if carousel is ready to be shown
  const [carouselLoaded, setCarouselLoaded] = useState(false);

  // Fix: Create a ref for the autoplay plugin instead of using useMemo
  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true
    })
  )

  // Set carousel to loaded after initial render
  useEffect(() => {
    setCarouselLoaded(true);
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:grid-cols-[0.8fr_1.2fr]">
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
          <div className="mx-auto w-full max-w-[500px] lg:max-w-[600px] xl:max-w-[770px] relative lg:order-last">
            {/* Show single image before carousel is loaded */}
            {!carouselLoaded && (
              <div className="w-full">
                <Image
                  src="/hero/hero1.png"
                  width={800}
                  height={550}
                  alt="Volunteers helping at a community event"
                  priority
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
                  quality={60}
                />
              </div>
            )}

            {/* Show carousel when ready */}
            <div className={` ${carouselLoaded ? 'opacity-100' : 'opacity-0 h-0'}`}>
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
                      src="/hero/hero1.png"
                      width={800}
                      height={550}
                      alt="Volunteers helping at a community event"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
                      quality={80}
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/hero/hero2.jpg"
                      width={800}
                      height={550}   
                      alt="Volunteers distributing meals"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
                      quality={80}
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/hero/hero3.jpeg"
                      width={800}
                      height={550}
                      alt="Community gathering"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
                      quality={80}
                      loading="lazy"
                    // placeholder="blur"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/hero/hero4.jpeg"
                      width={800}
                      height={550}
                      alt="Community gathering"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
                      quality={80}
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className={`lg:-left-10 left-2 z-10 transition-all duration-3000 ${carouselLoaded ? 'opacity-100' : 'opacity-0'}`} />
                <CarouselNext className={`lg:-right-10 right-2 z-10 transition-all duration-3000 ${carouselLoaded ? 'opacity-100' : 'opacity-0'}`} />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
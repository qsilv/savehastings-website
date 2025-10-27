'use client'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { goodDogFont } from "./ui/fonts"
import { useRef, useState, useEffect } from "react"
import Autoplay from "embla-carousel-autoplay"
import DonationButton from "@/components/donation-button"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

/**
 * HeroSection Component - Redesigned
 *
 * Clean, modern hero section with enhanced visual hierarchy
 * Features large imagery, clear messaging, and prominent CTAs
 */
export default function HeroSection() {
  const [carouselLoaded, setCarouselLoaded] = useState(false);

  const plugin = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
      stopOnMouseEnter: true
    })
  )

  useEffect(() => {
    setCarouselLoaded(true);
  }, []);

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 xl:py-40 bg-background/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text content column */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-primary ${goodDogFont.className}`}>
                  #SAVEHASTINGS
                </h1>
                <div className="h-1.5 bg-primary mt-3 rounded-full" />
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Supporting Vancouver's Downtown Eastside
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[600px]">
                Join our community of volunteers dedicated to making a meaningful impact in the lives of those
                experiencing homelessness. Every action counts.
              </p>
            </div>

            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {/* Mobile: Donation + Get Involved (since nav donation is hidden) */}
              <div className="flex-1 block md:hidden">
                <DonationButton className="w-full text-base" size="lg" />
              </div>
              <Link href="/volunteer" className="flex-1 block md:hidden">
                <Button variant="outline" size="lg" className="w-full text-base">
                  Get Involved
                </Button>
              </Link>

              {/* Desktop: Get Involved + Become a Sponsor */}
              <Link href="/volunteer" className="flex-1 hidden md:block">
                <Button size="lg" className="w-full text-base gap-2">
                  Get Involved <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>

              <Link href="/sponsors" className="flex-1 hidden md:block">
                <Button size="lg" variant="outline" className="w-full text-base">
                  Become a Sponsor
                </Button>
              </Link>
            </div>

            {/* Quick stats */}
            <div className="flex gap-6 pt-4 border-t">
              <div>
                <div className="text-3xl font-bold text-primary">750+</div>
                <div className="text-sm text-muted-foreground">Meals Monthly</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Volunteers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">8000+</div>
                <div className="text-sm text-muted-foreground">Lives Touched</div>
              </div>
            </div>
          </div>

          {/* Hero carousel */}
          <div className="w-full lg:order-last">
            {!carouselLoaded && (
              <div className="w-full">
                <Image
                  src="/hero/hero1.webp"
                  width={800}
                  height={600}
                  alt="Volunteers helping at a community event"
                  priority
                  className="aspect-[4/3] overflow-hidden rounded-2xl object-cover object-center w-full shadow-xl"
                  quality={100}
                />
              </div>
            )}

            <div className={`${carouselLoaded ? 'opacity-100' : 'opacity-0 h-0'}`}>
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
                      src="/hero/hero1.webp"
                      width={800}
                      height={600}
                      alt="Volunteers helping at a community event"
                      className="aspect-[4/3] overflow-hidden rounded-2xl object-cover object-center w-full shadow-xl"
                      quality={100}
                      priority
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/hero/hero2.jpg"
                      width={800}
                      height={600}
                      alt="Volunteers distributing meals"
                      className="aspect-[4/3] overflow-hidden rounded-2xl object-cover object-center w-full shadow-xl"
                      quality={90}
                    />
                  </CarouselItem>
                  {/* <CarouselItem>
                    <Image
                      src="/hero/hero3.jpeg"
                      width={800}
                      height={600}
                      alt="Community gathering"
                      className="aspect-[4/3] overflow-hidden rounded-2xl object-cover object-center w-full shadow-xl"
                      quality={90}
                    />
                  </CarouselItem> */}
                  <CarouselItem>
                    <Image
                      src="/hero/hero4.jpeg"
                      width={800}
                      height={600}
                      alt="Community support in action"
                      className="aspect-[4/3] overflow-hidden rounded-2xl object-cover object-center w-full shadow-xl"
                      quality={90}
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="lg:-left-12 left-2" />
                <CarouselNext className="lg:-right-12 right-2" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
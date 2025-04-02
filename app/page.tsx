import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import MissionSection from "@/components/mission-section"
import ImpactSection from "@/components/impact-section"
// import EventsSection from "@/components/events-section"
import SponsorsPreview from "@/components/sponsors-preview"
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: '#SAVEHASTINGS - Supporting Vancouver\'s Downtown Eastside',
  description: 'Join our volunteer movement making a meaningful impact in Vancouver\'s Downtown Eastside. Help provide meals, support, and community for those experiencing homelessness.',
  keywords: ['Vancouver homelessness', 'Downtown Eastside', 'volunteer', 'community support', 'DTES', 'homeless support'],
  useDefaultImage: true, // Use the volunteer image
})

/**
 * HomePage Component
 *
 * The main landing page of the #SAVEHASTINGS website.
 * This page is composed of multiple sections that showcase different aspects
 * of the organization's work and mission.
 *
 * Sections include:
 * - Hero section with main call-to-action
 * - Mission statement and values
 * - Impact statistics and stories
 * - Upcoming events preview
 * - Sponsors showcase
 * - Volunteer call-to-action
 */
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section with main headline and CTA */}
      <HeroSection />

      {/* Mission section explaining organization's purpose */}
      <MissionSection />

      {/* Impact section showing statistics and results */}
      <ImpactSection />

      {/* Events section previewing upcoming opportunities */}
      {/* <EventsSection /> */}

      {/* Sponsors preview section */}
      <SponsorsPreview />

      {/* Final call-to-action section */}
      <section className="w-full py-12 md:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Volunteer Team</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Make a real difference in the lives of those experiencing homelessness in Vancouver's Downtown Eastside.
              </p>
            </div>
            <div className="flex flex-row gap-2 w-full max-w-md">
              <Link href="/volunteer" className="flex-1">
                <Button className="gap-1 w-full text-sm sm:text-base">
                  Register Now <ArrowRight className="h-3 w-3" />
                </Button>
              </Link>
              <Link href="/sponsors" className="flex-1">
                <Button variant="outline" className="w-full text-sm sm:text-base">
                  Learn About Sponsorship
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


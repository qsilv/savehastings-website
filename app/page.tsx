import HeroSection from "@/components/hero-section"
import MissionSection from "@/components/mission-section"
import ImpactSection from "@/components/impact-section"
import WaysToHelpSection from "@/components/ways-to-help-section"
import SponsorsPreview from "@/components/sponsors-preview"
import FinalCTASection from "@/components/final-cta-section"
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: '#SAVEHASTINGS - Supporting Vancouver\'s Downtown Eastside',
  description: 'Join our volunteer movement making a meaningful impact in Vancouver\'s Downtown Eastside. Help provide meals, support, and community for those experiencing homelessness.',
  keywords: ['east hastings', 'volunteer east hastings','Vancouver homelessness', 'Downtown Eastside', 'volunteer', 'community support', 'DTES', 'homeless support'],
  useDefaultImage: true,
})

/**
 * HomePage Component - Redesigned
 *
 * A clean, modern, and visually appealing landing page that:
 * - Follows the site's design philosophy (no gradients, consistent spacing)
 * - Uses fixed placeholder images integrated with components
 * - Provides clear visual hierarchy and intuitive navigation
 * - Ensures all interactive elements function properly
 * - Maintains full responsiveness across devices
 *
 * Sections:
 * - Hero: Large headline, carousel, stats, and primary CTAs
 * - Mission: Three core values with icons
 * - Impact: Statistics with large supporting image
 * - Ways to Help: Four clear action paths
 * - Sponsors: Community partner showcase
 * - Final CTA: Compelling call-to-action with image
 */
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section with carousel and stats */}
      <HeroSection />

      {/* Mission section with three core values */}
      <MissionSection />

      {/* Impact section with statistics */}
      <ImpactSection />

      {/* Ways to help with clear action cards */}
      <WaysToHelpSection />

      {/* Community sponsors showcase */}
      <SponsorsPreview />

      {/* Final compelling call-to-action */}
      <FinalCTASection />
    </div>
  )
}


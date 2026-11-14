import HeroSection from "@/components/hero-section"
import MissionSection from "@/components/mission-section"
import ImpactSection from "@/components/impact-section"
import WaysToHelpSection from "@/components/ways-to-help-section"
import SponsorsPreview from "@/components/sponsors-preview"
import PhotoGallery from "@/components/photo-gallery"
import FinalCTASection from "@/components/final-cta-section"
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: '#SAVEHASTINGS - Supporting Vancouver\'s Downtown Eastside',
  description: 'A youth-led volunteer group bringing meals and supplies to people experiencing homelessness in Vancouver\'s Downtown Eastside. Volunteer, donate or sponsor an event.',
  keywords: ['east hastings', 'volunteer east hastings','Vancouver homelessness', 'Downtown Eastside', 'volunteer', 'community support', 'DTES', 'homeless support'],
  useDefaultImage: true,
})

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ImpactSection />
      <PhotoGallery />
      <WaysToHelpSection />
      <SponsorsPreview />
      <FinalCTASection />
    </>
  )
}

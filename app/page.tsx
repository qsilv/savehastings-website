import HeroSection from "@/components/hero-section"
import MissionSection from "@/components/mission-section"
import ImpactSection from "@/components/impact-section"
import WaysToHelpSection from "@/components/ways-to-help-section"
import SponsorsPreview from "@/components/sponsors-preview"
import PhotoGallery from "@/components/photo-gallery"
import Ticker from "@/components/ticker"
import FinalCTASection from "@/components/final-cta-section"
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: '#SAVEHASTINGS - Supporting Vancouver\'s Downtown Eastside',
  description: 'Join our volunteer movement making a meaningful impact in Vancouver\'s Downtown Eastside. Help provide meals, support, and community for those experiencing homelessness.',
  keywords: ['east hastings', 'volunteer east hastings','Vancouver homelessness', 'Downtown Eastside', 'volunteer', 'community support', 'DTES', 'homeless support'],
  useDefaultImage: true,
})

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Ticker />
      <MissionSection />
      <ImpactSection />
      <PhotoGallery />
      <WaysToHelpSection />
      <SponsorsPreview />
      <FinalCTASection />
    </>
  )
}

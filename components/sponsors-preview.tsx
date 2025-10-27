import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { sponsors } from "@/app/sponsors/page"
import { Button } from "@/components/ui/button"

export default function SponsorsPreview() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background/50">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Our Community Partners</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="max-w-[800px] mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            We're grateful for the support of these organizations that make our work possible.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {sponsors.slice(0, 8).map((sponsor) => (
              <div 
                key={sponsor.id} 
                className="flex items-center justify-center p-8 bg-card/60 backdrop-blur-sm border-2 rounded-xl hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={180}
                  height={90}
                  className="h-16 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center">
            <Link href="/sponsors">
              <Button size="lg" className="gap-2">
                View All Partners <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
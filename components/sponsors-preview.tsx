import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { sponsors } from "@/app/sponsors/page"
import { Button } from "@/components/ui/button"

export default function SponsorsPreview() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Sponsors</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We're grateful for the support of these organizations that make our work possible.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {sponsors.slice(0, 7).map((sponsor) => (
              <div key={sponsor.id} className="flex items-center justify-center p-4 bg-background rounded-lg">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={160}
                  height={80}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
            <div className="flex items-center justify-center p-4 bg-primary/5 rounded-lg border border-dashed border-primary/20">
              <Link href="/sponsors#become-sponsor" className="flex flex-col items-center justify-center gap-1 text-primary">
                <span className="text-sm font-medium">Become a Sponsor</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/sponsors">
            <Button>
              View All Sponsors <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
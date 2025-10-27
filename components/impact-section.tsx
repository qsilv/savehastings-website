import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function ImpactSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <Image
              src="/impact.png"
              width={700}
              height={500}
              alt="Volunteers distributing meals in the community"
              className="aspect-[7/5] overflow-hidden rounded-2xl object-cover object-center w-full shadow-xl"
              priority
            />
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Impact</h2>
              <div className="h-1 w-20 bg-primary rounded-full mb-6" />
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Through the dedication of our volunteers and sponsors, we've made a significant difference in our
                community.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-2 bg-card/60 backdrop-blur-sm">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="text-4xl font-bold text-primary">750+</div>
                  <div className="text-sm font-medium text-muted-foreground">Meals Monthly</div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-card/60 backdrop-blur-sm">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="text-4xl font-bold text-primary">200+</div>
                  <div className="text-sm font-medium text-muted-foreground">Active Volunteers</div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-card/60 backdrop-blur-sm">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="text-4xl font-bold text-primary">8000+</div>
                  <div className="text-sm font-medium text-muted-foreground">People Supported</div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-card/60 backdrop-blur-sm">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="text-4xl font-bold text-primary">7+</div>
                  <div className="text-sm font-medium text-muted-foreground">Community Partners</div>
                </CardContent>
              </Card>
            </div>

            <p className="text-muted-foreground leading-relaxed border-l-4 border-primary pl-4">
              These numbers represent real people whose lives have been positively impacted by our collective efforts.
              Every meal, every care package, and every conversation makes a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


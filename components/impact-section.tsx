import Image from "next/image"

export default function ImpactSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Impact</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Through the dedication of our volunteers and sponsors, we've made a significant difference in our
              community.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
          <Image
            src="/impact.png?height=400&width=600"
            width={600}
            height={400}
            alt="Volunteers distributing meals"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
          />
            <div className="flex flex-col justify-center space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4">
              <div className="text-3xl font-bold text-primary">750+</div>
              <div className="text-sm font-medium text-muted-foreground">Meals Served Monthly</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4">
              <div className="text-3xl font-bold text-primary">200+</div>
              <div className="text-sm font-medium text-muted-foreground">Active Volunteers</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4">
              <div className="text-3xl font-bold text-primary">8000+</div>
              <div className="text-sm font-medium text-muted-foreground">People Supported</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4">
              <div className="text-3xl font-bold text-primary">7+</div>
              <div className="text-sm font-medium text-muted-foreground">Community Partners</div>
              </div>
            </div>
            <p className="text-muted-foreground">
              These numbers represent real people whose lives have been positively impacted by our collective efforts.
              Every meal, every care package, and every conversation makes a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


import { Heart, Users, Home } from "lucide-react"

export default function MissionSection() {
  return (
    <section className="w-full py-10 md:py-22 lg:py-26 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              #SAVEHASTINGS is dedicated to supporting the homeless population in Vancouver's Downtown Eastside through
              community-driven initiatives, direct support, and advocacy.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Compassionate Care</h3>
            <p className="text-center text-muted-foreground">
              Providing essential services with dignity and respect to those experiencing homelessness.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Community Building</h3>
            <p className="text-center text-muted-foreground">
              Creating connections and fostering a sense of belonging among volunteers and those we serve.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Home className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Sustainable Solutions</h3>
            <p className="text-center text-muted-foreground">
              Working toward long-term solutions to address the root causes of homelessness.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


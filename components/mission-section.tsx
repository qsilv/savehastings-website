import { Heart, Users, Home } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function MissionSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Our Mission</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="max-w-[800px] mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            #SAVEHASTINGS is dedicated to supporting the homeless population in Vancouver's Downtown Eastside through
            community-driven initiatives, direct support, and advocacy.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <Card className="border-2 hover:border-primary transition-colors duration-300 bg-card/60 backdrop-blur-sm">
            <CardContent className="pt-12 pb-8 px-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Compassionate Care</h3>
              <p className="text-muted-foreground leading-relaxed">
                Providing essential services with dignity and respect to those experiencing homelessness.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors duration-300 bg-card/60 backdrop-blur-sm">
            <CardContent className="pt-12 pb-8 px-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Community Building</h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating connections and fostering a sense of belonging among volunteers and those we serve.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors duration-300 bg-card/60 backdrop-blur-sm">
            <CardContent className="pt-12 pb-8 px-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Sustainable Solutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Working toward long-term solutions to address the root causes of homelessness.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


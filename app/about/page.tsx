import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart, Users, Home, Award, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Executive Director",
      bio: "Sarah has over 15 years of experience in non-profit management and community development. She founded #SAVEHASTINGS in 2020 after witnessing the growing needs in the Downtown Eastside.",
      image: "/placeholder.svg?height=300&width=300&text=Sarah J.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Volunteer Coordinator",
      bio: "Michael oversees our volunteer program, ensuring that volunteers have meaningful experiences while making a real difference in the community.",
      image: "/placeholder.svg?height=300&width=300&text=Michael C.",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Community Outreach Manager",
      bio: "Priya works directly with community members to understand their needs and develop programs that address the most pressing issues.",
      image: "/placeholder.svg?height=300&width=300&text=Priya P.",
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Development Director",
      bio: "David leads our fundraising efforts and builds relationships with sponsors and donors to ensure the sustainability of our programs.",
      image: "/placeholder.svg?height=300&width=300&text=David W.",
    },
  ]

  const boardMembers = [
    {
      id: 1,
      name: "Dr. Emily Rodriguez",
      role: "Board Chair",
      bio: "Dr. Rodriguez is a public health specialist with a focus on urban health issues and vulnerable populations.",
      image: "/placeholder.svg?height=300&width=300&text=Dr. Emily R.",
    },
    {
      id: 2,
      name: "James Thompson",
      role: "Treasurer",
      bio: "James brings 20 years of financial management experience to help ensure the organization's fiscal responsibility.",
      image: "/placeholder.svg?height=300&width=300&text=James T.",
    },
    {
      id: 3,
      name: "Olivia Kim",
      role: "Secretary",
      bio: "Olivia is a community advocate and social worker with deep ties to Vancouver's Downtown Eastside.",
      image: "/placeholder.svg?height=300&width=300&text=Olivia K.",
    },
    {
      id: 4,
      name: "Robert Blackwood",
      role: "Board Member",
      bio: "Robert is a local business owner committed to giving back to the community through ethical business practices and philanthropy.",
      image: "/placeholder.svg?height=300&width=300&text=Robert B.",
    },
    {
      id: 5,
      name: "Robert Blackwood",
      role: "Board Member",
      bio: "Robert is a local business owner committed to giving back to the community through ethical business practices and philanthropy.",
      image: "/placeholder.svg?height=300&width=300&text=Robert B.",
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description: "Established in response to growing needs in Vancouver's Downtown Eastside during the pandemic.",
    },
    {
      year: "2021",
      title: "First Community Kitchen",
      description: "Launched our community kitchen program, serving 500+ meals in the first month.",
    },
    {
      year: "2022",
      title: "Expanded Outreach",
      description: "Initiated street outreach teams and mobile services to reach more community members.",
    },
    {
      year: "2023",
      title: "Housing Advocacy",
      description: "Began advocacy work for affordable housing solutions and tenant rights.",
    },
    {
      year: "2024",
      title: "Health Services Partnership",
      description: "Partnered with healthcare providers to offer regular health clinics and services.",
    },
    {
      year: "2025",
      title: "Community Center",
      description: "Opened our first dedicated community center to provide a safe space for programs and services.",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mb-10">
        <Link href="/" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">About #SAVEHASTINGS</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Learn about our mission, our team, and the impact we're making in Vancouver's Downtown Eastside.
        </p>
      </div>

      <div className="grid gap-12 md:gap-16">
        <section className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                #SAVEHASTINGS was founded in 2020 in response to the growing challenges faced by residents of
                Vancouver's Downtown Eastside, particularly during the COVID-19 pandemic when vulnerable populations
                were hit hardest.
              </p>
              <p>
                What began as a grassroots effort by a small group of concerned citizens has grown into a
                community-driven organization with hundreds of volunteers and supporters dedicated to making a positive
                impact in the lives of those experiencing homelessness and poverty.
              </p>
              <p>
                Our name, #SAVEHASTINGS, reflects both our geographic focus on the Hastings Street corridor—the heart of
                the Downtown Eastside—and our mission to preserve the community, dignity, and well-being of all who call
                this neighborhood home.
              </p>
            </div>
          </div>
          <Image
            src="/placeholder.svg?height=400&width=500&text=Our Story"
            width={500}
            height={400}
            alt="Volunteers working in the community"
            className="rounded-lg object-cover mx-auto"
          />
        </section>

        <section className="bg-muted p-6 md:p-10 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Mission & Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-background">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center">Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  We approach our work with empathy and understanding, recognizing the dignity and worth of every
                  individual.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  We believe in the power of community to create positive change and foster a sense of belonging for
                  all.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Home className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center">Action</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  We are committed to taking meaningful action to address the root causes of homelessness and poverty.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Our mission is to support the homeless population in Vancouver's Downtown Eastside through
              community-driven initiatives, direct support, and advocacy, working toward a future where everyone has
              access to safe housing, nutritious food, healthcare, and community connection.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Our Impact</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="text-4xl font-bold text-primary">1,000+</div>
                <CardTitle>Meals Served Monthly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Nutritious meals prepared and served by our volunteers at our community kitchen and mobile food
                  services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="text-4xl font-bold text-primary">200+</div>
                <CardTitle>Active Volunteers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Dedicated community members who donate their time and skills to support our mission.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="text-4xl font-bold text-primary">8000+</div>
                <CardTitle>People Supported</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Individuals who have received assistance through our various programs and services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="text-4xl font-bold text-primary">7+</div>
                <CardTitle>Community Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Organizations and businesses that collaborate with us to maximize our impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Our Team</h2>
          <Tabs defaultValue="staff" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="staff">Staff</TabsTrigger>
              <TabsTrigger value="board">Board of Directors</TabsTrigger>
            </TabsList>

            <TabsContent value="staff" className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {teamMembers.map((member) => (
                  <Card key={member.id} className="overflow-hidden">
                    <div className="aspect-square relative">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="board" className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {boardMembers.map((member) => (
                  <Card key={member.id} className="overflow-hidden">
                    <div className="aspect-square relative">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="bg-primary/10 p-6 md:p-10 rounded-lg">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
              <p className="mb-6 text-muted-foreground">
                There are many ways to get involved with #SAVEHASTINGS and make a difference in the lives of those
                experiencing homelessness in Vancouver's Downtown Eastside.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Volunteer</h3>
                    <p className="text-sm text-muted-foreground">Join our team of dedicated volunteers.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Become a Sponsor</h3>
                    <p className="text-sm text-muted-foreground">Support our work through corporate sponsorship.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Attend an Event</h3>
                    <p className="text-sm text-muted-foreground">
                      Participate in our community events and fundraisers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/volunteer">
                  <Button>Volunteer Now</Button>
                </Link>
                <Link href="/sponsors">
                  <Button variant="outline">Become a Sponsor</Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Join Our Mission"
                width={600}
                height={400}
                alt="Join our mission"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}


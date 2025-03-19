import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SponsorsPage() {
  const sponsors = [
    {
      id: 1,
      name: "Community Foundation",
      logo: "/placeholder.svg?height=100&width=200&text=Community Foundation",
      description: "Supporting local initiatives that create positive change in Vancouver's communities.",
      website: "https://example.com",
    },
    {
      id: 2,
      name: "Pacific Health Services",
      logo: "/placeholder.svg?height=100&width=200&text=Pacific Health",
      description: "Providing healthcare services and resources to underserved populations.",
      website: "https://example.com",
    },
    {
      id: 3,
      name: "Urban Housing Initiative",
      logo: "/placeholder.svg?height=100&width=200&text=Urban Housing",
      description: "Working to create affordable housing solutions for all Vancouver residents.",
      website: "https://example.com",
    },
    {
      id: 4,
      name: "West Coast Credit Union",
      logo: "/placeholder.svg?height=100&width=200&text=West Coast CU",
      description: "Investing in community development and financial education programs.",
      website: "https://example.com",
    },
    {
      id: 5,
      name: "Coastal Grocery Co-op",
      logo: "/placeholder.svg?height=100&width=200&text=Coastal Grocery",
      description: "Providing fresh, affordable food and supporting food security initiatives.",
      website: "https://example.com",
    },
    {
      id: 6,
      name: "Metro Transit Authority",
      logo: "/placeholder.svg?height=100&width=200&text=Metro Transit",
      description: "Helping ensure transportation access for all community members.",
      website: "https://example.com",
    },
    {
      id: 7,
      name: "Pacific Northwest University",
      logo: "/placeholder.svg?height=100&width=200&text=PNW University",
      description: "Engaging students in community service and research to address homelessness.",
      website: "https://example.com",
    },
    {
      id: 8,
      name: "Evergreen Technology",
      logo: "/placeholder.svg?height=100&width=200&text=Evergreen Tech",
      description: "Providing technology solutions and digital literacy programs for underserved communities.",
      website: "https://example.com",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mb-10">
        <Link href="/" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Our Sponsors</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          We're grateful for the support of these organizations that make our work possible. Their contributions help us
          make a meaningful impact in Vancouver's Downtown Eastside.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
        {sponsors.map((sponsor) => (
          <Card key={sponsor.id} className="flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-center h-24 mb-4 bg-muted rounded-md">
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  width={200}
                  height={100}
                  className="h-16 w-auto object-contain"
                />
              </div>
              <CardTitle>{sponsor.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">{sponsor.description}</p>
            </CardContent>
            <CardFooter>
              <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" className="w-full gap-1">
                  Visit Website <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-muted rounded-lg p-6 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Become a Sponsor</h2>
            <p className="mb-4 text-muted-foreground">
              Join our community of sponsors and help make a difference in the lives of those experiencing homelessness
              in Vancouver's Downtown Eastside.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Support essential services for those in need</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Gain visibility in the community</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Demonstrate your organization's commitment to social responsibility</span>
              </li>
            </ul>
            <Button className="gap-1">
              Contact Us <Mail className="h-4 w-4" />
            </Button>
          </div>
          <div className="bg-background rounded-lg p-6 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=300&width=500&text=Partner With Us"
              width={500}
              height={300}
              alt="Partner with #SAVEHASTINGS"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


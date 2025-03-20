import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const sponsors = [
  {
    id: 1,
    name: "Islamic Relief Canada",
    logo: "/partners/islamicrelief.webp",
    description: "Supporting humanitarian aid and development projects to help those in need.",
    website: "https://islamicreliefcanada.org/",
  },
  {
    id: 2,
    name: "IDRF (International Development and Relief Foundation)",
    logo: "/partners/idrf.webp",
    description: "Providing effective humanitarian aid and sustainable development programs.",
    website: "https://idrf.org/",
  },
  {
    id: 3,
    name: "House of Chicken",
    logo: "/partners/house.jpg",
    description: "Specializes in flavorful chicken dishes, including original chicken biryani, chicken karahi, chicken burgers, spicy wings, and wraps.",
    website: "https://www.facebook.com/HouseOfChickenCanada/",
  },
  {
    id: 4,
    name: "Paragon Roofing",
    logo: "/partners/paragon.webp",
    description: "Roofing in BC, offering a large selection of roof repair, inspection, removal, reroof and roofing install services.",
    website: "https://www.paragonroofingbc.ca/",
  },
  {
    id: 5,
    name: "Sabzi",
    logo: "/partners/sabzi.png",
    description: "Family-owned and operated premier grocery store chain in Canada.",
    website: "https://sabzimandicanada.com/",
  },
  {
    id: 6,
    name: "Chicken World",
    logo: "/partners/chickenworld.webp",
    description: "Specialty fried chicken and burgers chain.",
    website: "https://www.chickenworldcanada.com/",
  },
  {
    id: 7,
    name: "Global News",
    logo: "/partners/globalnews.png",
    description: "News and current affairs division of the Canadian Global Television Network.",
    website: "https://globalnews.ca/",
  },
  {
    id: 8,
    name: "Save On Foods",
    logo: "/partners/saveonfoods.png",
    description: "Carrying more than 2,500 locally-made products from more than 2,000 local growers and producers.",
    website: "https://www.saveonfoods.com/",
  }
]
export default function SponsorsPage() {


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
            <Button asChild className="gap-1">
              <a href="mailto:hashtagsavehastings@gmail.com">
                Contact Us <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="bg-background rounded-lg p-6 flex items-center justify-center">
            <Image
              src="/sponsor1.jpeg?height=300&width=500&text=Partner With Us"
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


import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart, Users, Home, Award, Calendar, Linkedin, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// import { LinkedInIcon, InstagramIcon } from '@/components/icons';
// import { SocialLink } from '@/components/social-link';
import { goodDogFont } from "@/components/ui/fonts"
import { TeamMemberCard } from "@/components/team-member-card";
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'About #SAVEHASTINGS - Our Mission & Team | Vancouver DTES',
  description: 'Learn about our youth-led movement supporting the homeless population in Vancouver\'s Downtown Eastside through community-driven initiatives and direct support.',
  keywords: ['about SAVEHASTINGS', 'Vancouver homelessness mission', 'DTES support team', 'community volunteering', 'Vancouver homelessness'],
  useDefaultImage: true, // Use the volunteer image
  pagePath: '/about'
})

export const cofounders = [
  {
    id: 1,
    name: "Sumit Virdi",
    role: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/sumit-s-virdi-a0342720a/",
    instagram: "https://www.instagram.com/s_virdi66",
    image: "/team/sumit.jpg",
  },
  {
    id: 2,
    name: "Cody Zhu",
    role: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/cody-zhu-2193aa217/",
    instagram: "https://www.instagram.com/_z.cody",
    image: "/team/cody.png",
  },
  {
    id: 3,
    name: "Suhaib Al-Nakshabandi",
    role: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/suhaib-al-nakshabandi-7274b21b9/",
    instagram: "https://www.instagram.com/suhaib.nak",
    image: "/team/suhaib.jpg",
  },
  {
    id: 4,
    name: "Faisal Al-Nakshabandi",
    role: "Co-Founder",
    linkedin: "https://www.instagram.com/fasooliah",
    instagram: "https://www.instagram.com/fasooliah",
    image: "/team/faisal.jpg",
  },
];

export const executives = [
  {
    id: 4,
    name: "Gurjaap Deol",
    role: "Social Media",
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/username",
    image: "/team/gurjaap.jpg",
  },
  {
    id: 6,
    name: "William Zhu",
    role: "Fundraising",
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/username",
    image: "/team/william.jpg",
  },
  {
    id: 7,
    name: "Monir Fathalla",
    role: "Web Development",
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/username",
    image: "/team/monir.png",
  },
  {id: 8,
    name: "Mazen Khalil",
    role: "Site Leader",
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/username",
    image: "/team/mazen.jpeg",
  },
  {id: 9,
    name: "Nour M.",
    role: "Digital Content",
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/username",
    image: "/team/nour.png",
  },
];

export const impactStats = [
  {
    number: "750+",
    title: "Meals Served Monthly",
    description: "Nutritious meals prepared and served by our volunteers at our community kitchen and mobile food services."
  },
  {
    number: "200+",
    title: "Active Volunteers",
    description: "Dedicated community members who donate their time and skills to support our mission."
  },
  {
    number: "8000+",
    title: "People Supported",
    description: "Individuals who have received assistance through our various programs and services."
  },
  {
    number: "7+",
    title: "Community Partners",
    description: "Organizations and businesses that collaborate with us to maximize our impact."
  },
];

export default function AboutPage() {
  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description: "Established in response to growing needs in Vancouver's Downtown Eastside during the pandemic.",
    },
    // ...other milestones remain the same
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mb-10">
        <Link href="/" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          About <span className={goodDogFont.className}>#SAVEHASTINGS</span>
        </h1>
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
              #SAVEHASTINGS was founded in 2023 by a group of students who saw a growing crisis in their community and felt compelled to act. What began as a small effort to support those experiencing homelessness in Vancouver’s Downtown Eastside (DTES) quickly grew into a youth-led movement dedicated to creating meaningful change.
              </p>
              <p>
              Today, we are a diverse team of volunteers united by the belief that everyone deserves access to safe housing and essential resources. Through bi-weekly events, we provide much-needed supplies while fostering connection and compassion on East Hastings Street. But our mission goes beyond immediate relief—we are committed to building a future where homelessness is not a reality. By working together, we can create lasting change and bring hope to the heart of the DTES.
              </p>
            </div>
          </div>
          <Image
            src="/tempabout1.jpeg"
            width={500}
            height={400}
            alt="Volunteers working in the community"
            className="rounded-lg object-cover mx-auto"
            priority
            quality={80}
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
            {impactStats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="text-4xl font-bold text-primary">{stat.number}</div>
                  <CardTitle>{stat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Our Team</h2>
          <Tabs defaultValue="cofounders" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="cofounders">Directors</TabsTrigger>
              <TabsTrigger value="executives">Executives</TabsTrigger>
            </TabsList>

            <TabsContent value="cofounders" className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {cofounders.map((member) => (
                  <TeamMemberCard key={member.id} member={member} size="large" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="executives" className="space-y-6">
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
                {executives.map((member) => (
                  <TeamMemberCard key={member.id} member={member} size="small" />
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
          <Link href="/sponsors#become-sponsor">
            <Button variant="outline">Become a Sponsor</Button>
          </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
          src="/about2.jpeg"
          width={420}
          height={280}
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

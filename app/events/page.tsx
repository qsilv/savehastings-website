import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, MapPin, Filter, Search, Users } from "lucide-react"
import { createMetadata } from '@/lib/metadata'


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export const metadata = createMetadata({
  title: 'Events & Volunteer Opportunities | #SAVEHASTINGS Vancouver',
  description: 'Find upcoming events and volunteer opportunities with #SAVEHASTINGS to support Vancouver\'s Downtown Eastside community. Join us in making a difference.',
  keywords: ['Vancouver community events', 'DTES volunteer opportunities', 'homeless support events', 'Vancouver charity events', 'Downtown Eastside activities'],
  useDefaultImage: true, // Use the volunteer image
  pagePath: '/events'
})

/**
 * Event interface defining the structure of event data
 */
interface Event {
  id: number
  title: string
  date: string
  time?: string // Optional for past events
  location: string
  description: string
  category: string
  image: string
  spots?: number // Optional for past events
  isPast?: boolean
}

/**
 * EventsPage Component
 *
 * Displays all events (both upcoming and past) with filtering options.
 * Includes a sidebar for search and filtering, and a grid of event cards.
 */
export default function EventsPage() {
  // Sample upcoming events data
  // In a production environment, this would likely come from an API or database
  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "Community Meal Service",
      date: "March 15, 2025",
      time: "11:00 AM - 2:00 PM",
      location: "Hastings Community Center",
      description: "Join us in preparing and serving meals to those in need in the Downtown Eastside.",
      category: "meal-service",
      image: "/placeholder.svg?height=200&width=400&text=Meal Service",
      spots: 12,
    },
    {
      id: 2,
      title: "Winter Clothing Drive",
      date: "March 20, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Main Street Community Hall",
      description: "Help collect, sort, and distribute warm clothing for the upcoming winter months.",
      category: "donation",
      image: "/placeholder.svg?height=200&width=400&text=Clothing Drive",
      spots: 8,
    },
    {
      id: 3,
      title: "Health & Wellness Fair",
      date: "April 5, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Oppenheimer Park",
      description: "Volunteer at our health fair providing basic health services and resources.",
      category: "health",
      image: "/placeholder.svg?height=200&width=400&text=Health Fair",
      spots: 15,
    },
    {
      id: 4,
      title: "Community Clean-Up Day",
      date: "April 12, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "Hastings Street",
      description: "Join our team to help clean up the neighborhood and create a more welcoming environment.",
      category: "community",
      image: "/placeholder.svg?height=200&width=400&text=Clean-Up Day",
      spots: 20,
    },
    {
      id: 5,
      title: "Volunteer Orientation",
      date: "April 18, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Downtown Community Center",
      description: "New volunteer orientation session. Learn about our mission, programs, and how you can help.",
      category: "training",
      image: "/placeholder.svg?height=200&width=400&text=Orientation",
      spots: 30,
    },
    {
      id: 6,
      title: "Spring Fundraising Gala",
      date: "May 10, 2025",
      time: "6:30 PM - 10:00 PM",
      location: "Vancouver Convention Centre",
      description: "Annual fundraising gala with dinner, silent auction, and entertainment to support our programs.",
      category: "fundraising",
      image: "/placeholder.svg?height=200&width=400&text=Fundraising Gala",
      spots: 5,
    },
    {
      id: 7,
      title: "Mobile Shower Service",
      date: "May 15, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Portable Units on Hastings Street",
      description: "Help provide shower services to those experiencing homelessness in our community.",
      category: "health",
      image: "/placeholder.svg?height=200&width=400&text=Mobile Showers",
      spots: 10,
    },
    {
      id: 8,
      title: "Community Garden Project",
      date: "May 22, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Strathcona Community Garden",
      description: "Help plant and maintain our community garden that provides fresh produce for our meal programs.",
      category: "community",
      image: "/placeholder.svg?height=200&width=400&text=Community Garden",
      spots: 15,
    },
  ]

  // Sample past events data
  const pastEvents: Event[] = [
    {
      id: 101,
      title: "Winter Shelter Support",
      date: "February 10, 2025",
      location: "Downtown Eastside Shelter",
      description: "Volunteers helped set up and staff our winter emergency shelter during cold weather.",
      category: "shelter",
      image: "/placeholder.svg?height=200&width=400&text=Winter Shelter",
    },
    {
      id: 102,
      title: "Holiday Meal Service",
      date: "December 25, 2024",
      location: "Hastings Community Center",
      description: "Special holiday meal service providing warm meals and companionship during the holidays.",
      category: "meal-service",
      image: "/placeholder.svg?height=200&width=400&text=Holiday Meal",
    },
    {
      id: 103,
      title: "Dental Clinic Day",
      date: "November 15, 2024",
      location: "Mobile Dental Unit",
      description: "Free dental services provided to community members in need.",
      category: "health",
      image: "/placeholder.svg?height=200&width=400&text=Dental Clinic",
    },
    {
      id: 104,
      title: "Fall Fundraising Drive",
      date: "October 20, 2024",
      location: "Various Locations",
      description: "Community-wide fundraising effort to support winter programs and services.",
      category: "fundraising",
      image: "/placeholder.svg?height=200&width=400&text=Fundraising Drive",
    },
  ]

  // Combine past and upcoming events into a single array
  // Add isPast flag to differentiate between past and upcoming events
  const allEvents: Event[] = [
    ...upcomingEvents.map((event) => ({ ...event, isPast: false })),
    ...pastEvents.map((event) => ({ ...event, isPast: true, spots: 0 })),
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      {/* Page header */}
      <div className="mb-10">
        <Link href="/" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Events & Volunteer Opportunities
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Find upcoming events and volunteer opportunities to make a difference in Vancouver's Downtown Eastside.
        </p>
      </div>

      {/* Main content with sidebar and event grid */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Sidebar with search and filters */}
        <div className="w-full md:w-64 space-y-4">
          {/* Search box */}
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search events..." className="w-full pl-8" />
          </div>

          {/* Filter panel */}
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-4 w-4" />
              <h3 className="font-medium">Filter Events</h3>
            </div>

            <div className="space-y-4">
              {/* Category filters */}
              <div>
                <h4 className="text-sm font-medium mb-2">Categories</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="category-all" className="rounded text-primary" defaultChecked />
                    <label htmlFor="category-all" className="text-sm">
                      All Events
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="category-meal" className="rounded text-primary" />
                    <label htmlFor="category-meal" className="text-sm">
                      Meal Service
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="category-health" className="rounded text-primary" />
                    <label htmlFor="category-health" className="text-sm">
                      Health & Wellness
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="category-community" className="rounded text-primary" />
                    <label htmlFor="category-community" className="text-sm">
                      Community Events
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="category-fundraising" className="rounded text-primary" />
                    <label htmlFor="category-fundraising" className="text-sm">
                      Fundraising
                    </label>
                  </div>
                </div>
              </div>

              {/* Date range filters */}
              <div>
                <h4 className="text-sm font-medium mb-2">Date Range</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="date-all" name="date-range" className="text-primary" defaultChecked />
                    <label htmlFor="date-all" className="text-sm">
                      All Dates
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="date-week" name="date-range" className="text-primary" />
                    <label htmlFor="date-week" className="text-sm">
                      This Week
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="date-month" name="date-range" className="text-primary" />
                    <label htmlFor="date-month" className="text-sm">
                      This Month
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="date-custom" name="date-range" className="text-primary" />
                    <label htmlFor="date-custom" className="text-sm">
                      Custom Range
                    </label>
                  </div>
                </div>
              </div>

              {/* Apply filters button */}
              <Button className="w-full">Apply Filters</Button>
            </div>
          </div>
        </div>

        {/* Events grid */}
        <div className="flex-1">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">All Events</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {allEvents.map((event) => (
                <Card key={event.id} className="flex flex-col h-full overflow-hidden">
                  {/* Event image with badge */}
                  <div className="relative h-48 w-full">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    {event.isPast ? (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="outline" className="text-white border-white">
                          Past Event
                        </Badge>
                      </div>
                    ) : (
                      <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                        {event.spots} spots left
                      </Badge>
                    )}
                  </div>

                  {/* Event details */}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <div className="text-sm text-muted-foreground mt-2">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{event.date}</span>
                      </span>
                      {!event.isPast && event.time && (
                        <span className="flex items-center gap-2 mt-1">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{event.time}</span>
                        </span>
                      )}
                      <span className="flex items-center gap-2 mt-1">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </span>
                    </div>
                  </CardHeader>

                  {/* Event description */}
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </CardContent>

                  {/* Sign-up button */}
                  <CardFooter>
                    {event.isPast ? (
                      <Button variant="outline" className="w-full" disabled>
                        Event Ended
                      </Button>
                    ) : (
                      <Button className="w-full">Sign Up</Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Host your own event section */}
      <div className="bg-muted rounded-lg p-6 md:p-10 mt-12">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Host Your Own Event</h2>
            <p className="mb-6 text-muted-foreground">
              Interested in organizing your own event to support the Downtown Eastside community? We can help you plan
              and execute a successful fundraiser or volunteer activity.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Event Planning Support</h3>
                  <p className="text-sm text-muted-foreground">Our team can help you plan and organize your event.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Volunteer Recruitment</h3>
                  <p className="text-sm text-muted-foreground">We can help you find volunteers for your event.</p>
                </div>
              </li>
            </ul>
            <Button>Contact Us About Hosting</Button>
          </div>
          <div className="hidden md:block">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Host an Event"
              width={600}
              height={400}
              alt="Host your own event"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


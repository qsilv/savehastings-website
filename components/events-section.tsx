import Link from "next/link"
import { Calendar, MapPin, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * Event data type definition
 */
interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
}

/**
 * EventsSection Component
 *
 * Displays upcoming events on the homepage with details and sign-up buttons.
 * This component shows a preview of events with an option to view all events.
 */
export default function EventsSection() {
  // Sample upcoming events data
  // In a production environment, this would likely come from an API or CMS
  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "Community Meal Service",
      date: "March 15, 2025",
      time: "11:00 AM - 2:00 PM",
      location: "Hastings Community Center",
      description: "Join us in preparing and serving meals to those in need in the Downtown Eastside.",
    },
    {
      id: 2,
      title: "Winter Clothing Drive",
      date: "March 20, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Main Street Community Hall",
      description: "Help collect, sort, and distribute warm clothing for the upcoming winter months.",
    },
    {
      id: 3,
      title: "Health & Wellness Fair",
      date: "April 5, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Oppenheimer Park",
      description: "Volunteer at our health fair providing basic health services and resources.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        {/* Section header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join us at one of our upcoming events and make a direct impact in our community.
            </p>
          </div>
        </div>

        {/* Event cards grid */}
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                {/* Event details with icons */}
                <div className="text-sm text-muted-foreground mt-2">
                  <span className="flex items-center gap-2 mt-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{event.date}</span>
                  </span>
                  <span className="flex items-center gap-2 mt-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{event.time}</span>
                  </span>
                  <span className="flex items-center gap-2 mt-1">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{event.location}</span>
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p>{event.description}</p>
              </CardContent>
              <CardFooter>
                <Link href="/volunteer" className="w-full">
                  <Button className="w-full">Sign Up</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View all events button */}
        <div className="flex justify-center">
          <Link href="/events">
            <Button variant="outline">View All Events</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}


import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, MapPin } from "lucide-react"
import VolunteerForm from "@/components/volunteer-form"

export default function VolunteerPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mb-10">
        <Link href="/" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Volunteer With Us</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Join our team of dedicated volunteers making a difference in Vancouver's Downtown Eastside. Your time and
          skills can help transform lives.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Volunteer Registration</h2>
          <VolunteerForm />
        </div>

        <div className="bg-muted rounded-lg p-6 md:p-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Make an Impact</h2>
            <p className="mb-6 text-muted-foreground">
              When you join our volunteer team, you'll become part of a compassionate community dedicated to making a
              difference. All positions require a commitment of 4-5 hours bi-weekly.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Flexible Scheduling</h3>
                  <p className="text-muted-foreground">
                    We work with your availability to find volunteer opportunities that fit your schedule.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Community Impact</h3>
                  <p className="text-muted-foreground">
                    See firsthand the positive change your contribution makes in our community.
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <Image
                src="/placeholder.svg?height=300&width=500&text=Make an Impact"
                width={500}
                height={300}
                alt="Volunteers making an impact"
                className="rounded-lg object-cover mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


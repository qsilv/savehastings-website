'use client'

import Link from "next/link"
import { HandHeart, DollarSign, Building2, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import DonationModal from "@/components/donation-modal"

const ways = [
  {
    icon: HandHeart,
    title: "Volunteer",
    description: "Join our team of dedicated volunteers. Your time and effort directly impact the lives of those we serve.",
    href: "/volunteer",
    buttonText: "Start Volunteering"
  },
  {
    icon: DollarSign,
    title: "Donate",
    description: "Support our mission financially. Every contribution helps us provide meals and essential services.",
    href: "#donate",
    buttonText: "Make a Donation",
    isModal: true
  },
  {
    icon: Building2,
    title: "Become a Sponsor",
    description: "Partner with us as a corporate sponsor. Help us expand our reach and deepen our community impact.",
    href: "/sponsors#become-sponsor",
    buttonText: "Partner With Us"
  },
  {
    icon: Heart,
    title: "Spread Awareness",
    description: "Share our mission on social media and help raise awareness about homelessness in Vancouver's DTES.",
    href: "https://www.instagram.com/savehastings",
    buttonText: "Follow Us"
  }
]

export default function WaysToHelpSection() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)

  return (
    <>
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">How You Can Help</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            <p className="max-w-[800px] mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
              There are many ways to support our mission. Every action, big or small, makes a difference.
            </p>
          </div>

          {/* Ways Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {ways.map((way, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg bg-card/60 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <way.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{way.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {way.description}
                  </p>
                  {way.isModal ? (
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setIsDonationModalOpen(true)}
                    >
                      {way.buttonText}
                    </Button>
                  ) : (
                    <Link href={way.href} className="pt-2">
                      <Button variant="outline" className="w-full">
                        {way.buttonText}
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <DonationModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)} />
    </>
  )
}

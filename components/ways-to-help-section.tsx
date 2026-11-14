"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowUpRight, Building2, DollarSign, HandHeart, Megaphone } from "lucide-react"

import DonationModal from "@/components/donation-modal"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/fx/reveal"
import { socials } from "@/lib/site-data"

const ways = [
  {
    icon: HandHeart,
    title: "Volunteer",
    description: "Join our team of dedicated volunteers. Your time and effort directly impact the lives of those we serve.",
    href: "/volunteer",
    buttonText: "Start Volunteering",
  },
  {
    icon: DollarSign,
    title: "Donate",
    description: "Support our mission financially. Every contribution helps us provide meals and essential services.",
    buttonText: "Make a Donation",
    isModal: true,
  },
  {
    icon: Building2,
    title: "Become a Sponsor",
    description: "Partner with us as a corporate sponsor. Help us expand our reach and deepen our community impact.",
    href: "/sponsors#become-sponsor",
    buttonText: "Partner With Us",
  },
  {
    icon: Megaphone,
    title: "Spread Awareness",
    description: "Share our mission on social media and help raise awareness about homelessness in Vancouver's DTES.",
    href: socials.instagram,
    external: true,
    buttonText: "Follow Us",
  },
]

const cardClass =
  "group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border bg-card p-7 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-foreground hover:bg-foreground hover:text-background hover:shadow-[0_30px_50px_-25px_rgb(40_20_0/0.7)]"

export default function WaysToHelpSection() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)

  return (
    <section className="paper relative py-24 md:py-32">
      <div className="container">
        <SectionHeading eyebrow="Get involved" title="How You Can Help" align="center">
          There are many ways to support our mission. Every action, big or small, makes a difference.
        </SectionHeading>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map((way, i) => {
            const inner = (
              <>
                <span className="flex items-start justify-between">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <way.icon className="size-7" />
                  </span>
                  <span aria-hidden className="font-display text-sm font-bold opacity-40">
                    0{i + 1}
                  </span>
                </span>
                <span className="mt-10 block font-display text-2xl font-extrabold tracking-tight">{way.title}</span>
                <span className="mt-3 block flex-1 leading-relaxed text-muted-foreground transition-colors group-hover:text-background/70">
                  {way.description}
                </span>
                <span className="mt-8 flex items-center justify-between border-t border-foreground/15 group-hover:border-background/20 pt-5 text-sm font-semibold">
                  {way.buttonText}
                  <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </>
            )
            return (
              <Reveal key={way.title} delay={0.07 * i}>
                {way.isModal ? (
                  <button type="button" onClick={() => setIsDonationModalOpen(true)} className={cardClass}>
                    {inner}
                  </button>
                ) : way.external ? (
                  <a href={way.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                    {inner}
                  </a>
                ) : (
                  <Link href={way.href!} className={cardClass}>
                    {inner}
                  </Link>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>

      <DonationModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)} />
    </section>
  )
}

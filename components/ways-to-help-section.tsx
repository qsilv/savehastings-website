"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

import DonationModal from "@/components/donation-modal"
import { SectionHeading } from "@/components/section-heading"
import { socials } from "@/lib/site-data"

const ways = [
  { title: "Volunteer", description: "Join our volunteer team at a bi-weekly event.", href: "/volunteer" },
  { title: "Donate", description: "Your donation pays for meals and supplies.", isModal: true },
  {
    title: "Become a sponsor",
    description: "Fund an event or provide food as a business partner.",
    href: "/sponsors#become-sponsor",
  },
  {
    title: "Spread awareness",
    description: "Follow and share our posts on Instagram.",
    href: socials.instagram,
    external: true,
  },
]

const rowClass =
  "group grid w-full items-center gap-x-6 gap-y-1 border-b border-foreground/20 py-6 text-left transition-colors hover:text-primary sm:grid-cols-[minmax(0,18rem)_1fr_auto] md:py-8"

export default function WaysToHelpSection() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)

  return (
    <section className="paper py-20 md:py-28">
      <div className="container">
        <SectionHeading title="How you can help" />

        <ul className="mt-10 border-t border-foreground/20">
          {ways.map((way) => {
            const inner = (
              <>
                <span className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{way.title}</span>
                <span className="text-lg text-muted-foreground">{way.description}</span>
                <ArrowUpRight className="hidden size-7 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:block" />
              </>
            )
            return (
              <li key={way.title}>
                {way.isModal ? (
                  <button type="button" onClick={() => setIsDonationModalOpen(true)} className={rowClass}>
                    {inner}
                  </button>
                ) : way.external ? (
                  <a href={way.href} target="_blank" rel="noopener noreferrer" className={rowClass}>
                    {inner}
                  </a>
                ) : (
                  <Link href={way.href!} className={rowClass}>
                    {inner}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </div>

      <DonationModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)} />
    </section>
  )
}

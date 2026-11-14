"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { navLinks } from "@/lib/site-data"
import DonationButton from "@/components/donation-button"
import MobileNav from "@/components/mobile-nav"

/** Navigation pill that gains a solid background once the page scrolls. */
export default function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:pt-4">
      <div
        className={cn(
          "pointer-events-auto mx-auto flex h-14 max-w-5xl items-center gap-2 rounded-full border pl-4 pr-2 transition-all duration-300",
          scrolled
            ? "border-border bg-background shadow-[0_12px_30px_-16px_rgb(0_0_0/0.9)]"
            : "border-transparent bg-transparent",
        )}
      >
        <Link href="/" className="mr-2 flex items-center gap-2.5" aria-label="#SAVEHASTINGS home">
          <Image src="/SaveHastings.png" alt="" width={146} height={186} className="h-8 w-auto" priority />
          <span className="hidden font-marker text-2xl leading-none text-foreground sm:inline-block">
            #SAVEHASTINGS
          </span>
        </Link>

        <nav className="mx-auto hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active ? "text-primary-foreground" : "text-foreground/75 hover:text-foreground",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1 md:ml-0">
          <DonationButton className="hidden md:inline-flex" variant="outline" />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

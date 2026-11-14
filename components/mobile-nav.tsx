"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { navLinks, socials } from "@/lib/site-data"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import DonationButton from "@/components/donation-button"

/** Full-height mobile menu with oversized links. Closes itself on navigation. */
export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="!size-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="flex w-full flex-col border-l-0 bg-background p-6 sm:max-w-md">
        <SheetTitle className="font-marker text-3xl font-normal text-primary">#SAVEHASTINGS</SheetTitle>
        <SheetDescription className="sr-only">Site navigation</SheetDescription>

        <nav className="mt-8 flex flex-col" aria-label="Mobile">
          {navLinks.map((link, i) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "group flex items-baseline justify-between border-b py-5 font-display text-4xl font-extrabold tracking-tight transition-colors",
                  active ? "text-primary" : "text-foreground hover:text-primary",
                )}
              >
                <span>
                  <span className="mr-3 align-middle font-sans text-xs font-medium text-muted-foreground">
                    0{i + 1}
                  </span>
                  {link.label}
                </span>
                <ArrowUpRight className="size-6 opacity-40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            )
          })}
        </nav>

        <div className="mt-auto space-y-4 pt-8">
          <DonationButton className="w-full" size="lg" />
          <p className="text-center text-sm text-muted-foreground">
            <a href={`mailto:${socials.email}`} className="hover:text-foreground">
              {socials.email}
            </a>
          </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}

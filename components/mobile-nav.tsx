"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

import { goodDogFont } from "@/components/ui/fonts"


/**
 * MobileNav Component
 *
 * Provides a responsive mobile navigation menu that slides in from the left side of the screen.
 * This component is only visible on mobile devices and provides access to the main navigation links.
 *
 * Features:
 * - Hamburger menu toggle button
 * - Slide-in navigation panel
 * - Auto-close on link selection
 */
export default function MobileNav() {
  // State to track whether the mobile menu is open or closed
  const [open, setOpen] = useState(false)

  /**
   * Handles click events on navigation links
   * Automatically closes the mobile menu when a link is clicked
   */
  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Hamburger menu button - only visible on mobile */}
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(true)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>

      {/* Slide-in navigation panel */}
      <SheetContent side="left" className="z-50 w-[300px] sm:w-[400px]">
      <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
        <div className="flex flex-col gap-6 py-6">
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl" onClick={handleLinkClick}>
              <span className={goodDogFont.className}>#SAVEHASTINGS</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-lg font-medium transition-colors hover:text-primary py-2 border-b border-border"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium transition-colors hover:text-primary py-2 border-b border-border"
              onClick={handleLinkClick}
            >
              About
            </Link>
            {/* <Link
              href="/events"
              className="text-lg font-medium transition-colors hover:text-primary py-2 border-b border-border"
              onClick={handleLinkClick}
            >
              Events
            </Link> */}
            <Link
              href="/volunteer"
              className="text-lg font-medium transition-colors hover:text-primary py-2 border-b border-border"
              onClick={handleLinkClick}
            >
              Volunteer
            </Link>
            <Link
              href="/sponsors"
              className="text-lg font-medium transition-colors hover:text-primary py-2 border-b border-border"
              onClick={handleLinkClick}
            >
              Sponsors
            </Link>
          </nav>

          {/* Call-to-action button */}
          <div className="mt-6">
            <Link href="/volunteer" className="w-full" onClick={handleLinkClick}>
              <Button className="w-full">Get Involved</Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}


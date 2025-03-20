"use client"

import type React from "react"
// import { Inter } from "next/font/google"
import Link from "next/link"
import { Mountain } from "lucide-react"
import { useEffect } from "react"
import { goodDogFont } from "@/components/ui/fonts"
import { inter } from "@/components/ui/fonts"
import { FacebookIcon, InstagramIcon, LinkedInIcon } from '@/components/icons';
import { SocialLink } from '@/components/social-link';



import MobileNav from "@/components/mobile-nav"
import "./globals.css"

// Load Inter font with Latin subset
// const inter = Inter({ subsets: ["latin"] })
// const goodDogFont = localFont({ src: 'GoodDog.woff2' })


/**
 * ClientLayout Component
 *
 * Provides the main layout structure for the entire application including:
 * - Theme provider for light/dark mode
 * - Header with navigation
 * - Footer with site information
 * - Auto-scroll to top on page navigation
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render within the layout
 */
export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Scroll to top whenever the children (page content) changes
  // This ensures users always start at the top when navigating between pages
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [children])

  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          {/* Header with navigation */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
              {/* Logo and brand */}
              <Link href="/" className="flex items-center gap-2 mr-6">
              <img src="/SaveHastings.png" alt="#SAVEHASTINGS" className="h-7 w-6" />
              <span className={`hidden font-bold text-xl sm:inline-block ${goodDogFont.className}`}>#SAVEHASTINGS</span>
              </Link>

              {/* Desktop navigation - hidden on mobile */}
              <nav className="hidden md:flex gap-6">
                <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                  Home
                </Link>
                <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                  About
                </Link>
                {/* <Link href="/events" className="text-sm font-medium transition-colors hover:text-primary">
                  Events
                </Link> */}
                <Link href="/volunteer" className="text-sm font-medium transition-colors hover:text-primary">
                  Volunteer
                </Link>
                <Link href="/sponsors" className="text-sm font-medium transition-colors hover:text-primary">
                  Sponsors
                </Link>
              </nav>

              {/* CTA button and mobile navigation */}
              <div className="ml-auto flex items-center gap-2">
                <Link
                  href="/volunteer"
                  className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Get Involved
                </Link>
                <MobileNav />
              </div>
            </div>
          </header>

          {/* Main content area */}
          <main className="flex-1">{children}</main>

          {/* Footer with site information */}
          <footer className="border-t bg-muted">
            <div className="container px-4 py-8 md:px-6">
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                {/* Organization information */}
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                    <img src="/SaveHastingsBlack.png" alt="#SAVEHASTINGS" className="h-5 w-4" />
                    <span className={goodDogFont.className}>#SAVEHASTINGS</span>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Supporting the homeless population in Vancouver's Downtown Eastside through community-driven
                    initiatives.
                  </p>
                  {/* Social media links */}
                  <div className="flex space-x-4">
                    {/* <SocialLink href="" label="Facebook">
                      <FacebookIcon />
                    </SocialLink> */}
                    <SocialLink href="https://www.linkedin.com/in/save-hastings-209a46279/" label="LinkedIn">
                      <LinkedInIcon />
                    </SocialLink>
                    <SocialLink href="https://www.instagram.com/savehastings" label="Instagram">
                      <InstagramIcon />
                    </SocialLink>
                  </div>
                </div>

                {/* Quick links navigation */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/" className="text-muted-foreground hover:text-foreground">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-muted-foreground hover:text-foreground">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteer" className="text-muted-foreground hover:text-foreground">
                        Volunteer
                      </Link>
                    </li>
                    <li>
                      <Link href="/sponsors" className="text-muted-foreground hover:text-foreground">
                        Sponsors
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/events" className="text-muted-foreground hover:text-foreground">
                        Events
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                        Contact
                      </Link>
                    </li> */}
                  </ul>
                </div>
                {/* TEMP DIV */}
                  <div></div>
                {/* Resources links */}
                {/* <div>
                  <h3 className="text-lg font-semibold mb-4">Resources</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="#" className="text-muted-foreground hover:text-foreground">
                        Volunteer Handbook
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-muted-foreground hover:text-foreground">
                        Community Resources
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-muted-foreground hover:text-foreground">
                        Donation Guidelines
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-muted-foreground hover:text-foreground">
                        Annual Reports
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-muted-foreground hover:text-foreground">
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div> */}

                {/* Contact information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                  <address className="not-italic text-sm text-muted-foreground space-y-2">
                    <p>399 Carral St</p>
                    <p>Vancouver, BC V6B 2J4</p>
                    <p>Canada</p>
                    <p className="pt-2">
                      <a href="mailto:hashtagsavehastings@gmail.com" className="hover:text-foreground">
                        hashtagsavehastings@gmail.com
                      </a>
                    </p>
                    {/* <p>
                      <a href="tel:+16045551234" className="hover:text-foreground">
                        (604) 555-1234
                      </a>
                    </p> */}
                  </address>
                </div>
              </div>

              {/* Copyright and legal links */}
              <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-xs text-muted-foreground">
                  &copy; {new Date().getFullYear()} #SAVEHASTINGS. All rights reserved.
                </p>
                <div className="flex gap-4 mt-4 sm:mt-0">
                  <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}


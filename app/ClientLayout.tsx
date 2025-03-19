"use client"

import type React from "react"
// import { Inter } from "next/font/google"
import Link from "next/link"
import { Mountain } from "lucide-react"
import { useEffect } from "react"
import { goodDogFont } from "@/components/ui/fonts"
import { inter } from "@/components/ui/fonts"



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
                    <a href="#" className="text-muted-foreground hover:text-foreground" aria-label="Facebook">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground" aria-label="LinkedIn">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground" aria-label="Instagram">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
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


import type React from "react"
import { displayFont, goodDogFont, inter } from "@/components/ui/fonts"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import "./globals.css"

/**
 * ClientLayout
 *
 * Shell shared by every page: floating header, page content, footer.
 */
export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${displayFont.variable} ${goodDogFont.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}

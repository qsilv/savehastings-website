import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { navLinks, socials } from "@/lib/site-data"
import { InstagramIcon, LinkedInIcon } from "@/components/icons"

export default function SiteFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="container pt-16 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/SaveHastings.png" alt="" width={146} height={186} className="h-11 w-auto" />
              <span className="font-marker text-3xl leading-none">#SAVEHASTINGS</span>
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
              A youth-led volunteer group supporting people experiencing homelessness in Vancouver's Downtown
              Eastside.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { href: socials.instagram, label: "Instagram", Icon: InstagramIcon },
                { href: socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-lg text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label === "About" ? "About Us" : link.label}
                    <ArrowUpRight className="size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Contact Us</h3>
            <address className="mt-5 not-italic">
              <a
                href={`mailto:${socials.email}`}
                className="text-lg text-foreground/80 underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary"
              >
                {socials.email}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} #SAVEHASTINGS. All rights reserved.
          </p>
          <div className="flex gap-6">
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
  )
}

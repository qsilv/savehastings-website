"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Expand } from "lucide-react"

import { photos } from "@/lib/site-data"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/fx/reveal"

/** Masonry wall of every street photo, with a keyboard-friendly lightbox. */
export default function PhotoGallery() {
  const [open, setOpen] = useState<number | null>(null)
  const n = photos.length

  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + n) % n)), [n])

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1)
      if (e.key === "ArrowLeft") step(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, step])

  const current = open === null ? null : photos[open]

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="streetlight left-1/2 top-0 h-72 w-[44rem] -translate-x-1/2 opacity-25" />
      <div className="container relative">
        <SectionHeading eyebrow="On the street" title={<>Nights on <span className="font-marker font-normal neon">Hastings</span></>}>
          No stock photos. Just our volunteers, our neighbours, and the block we keep coming back to.
        </SectionHeading>

        <div className="mt-14 columns-2 gap-3 sm:gap-4 lg:columns-3">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={0.04 * (i % 3)} className="mb-3 break-inside-avoid sm:mb-4">
              <button
                type="button"
                onClick={() => setOpen(i)}
                className={`group relative block w-full overflow-hidden rounded-2xl border bg-card ${photo.aspect}`}
                aria-label={`Open photo: ${photo.caption}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-2.5 left-3 right-3 sm:bottom-3 sm:left-4 sm:right-12 text-left font-marker text-lg leading-tight text-white sm:text-2xl">
                  {photo.caption}
                </span>
                <span className="absolute bottom-3 right-3 flex size-8 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Expand className="size-4" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-4xl gap-3 border-white/10 bg-black p-3 sm:p-4">
          {current && (
            <>
              <DialogTitle className="pl-1 pr-10 font-marker text-2xl font-normal text-white">{current.caption}</DialogTitle>
              <DialogDescription className="sr-only">{current.alt}</DialogDescription>
              <div className="relative h-[68vh] overflow-hidden rounded-2xl">
                <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-primary hover:text-primary-foreground"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-primary hover:text-primary-foreground"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
              <p className="text-center text-xs text-white/60">
                {(open ?? 0) + 1} / {n}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

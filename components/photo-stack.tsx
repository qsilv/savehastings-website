"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface StackPhoto {
  src: string
  alt: string
  caption: string
}

// Resting pose for each depth in the pile (0 = top print)
const poses = [
  { rotate: -3, x: 0, y: 0, scale: 1 },
  { rotate: 5, x: 26, y: 14, scale: 0.95 },
  { rotate: -8, x: -24, y: 26, scale: 0.9 },
  { rotate: 9, x: 12, y: 36, scale: 0.86 },
]

/**
 * A pile of taped street prints. The top print shuffles to the back every few
 * seconds; tapping the pile or using the arrows flips through by hand.
 */
export default function PhotoStack({ photos }: { photos: StackPhoto[] }) {
  const [top, setTop] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()
  const n = photos.length

  useEffect(() => {
    if (paused || reduce) return
    const id = setInterval(() => setTop((t) => (t + 1) % n), 4200)
    return () => clearInterval(id)
  }, [paused, reduce, n])

  const next = () => setTop((t) => (t + 1) % n)
  const prev = () => setTop((t) => (t - 1 + n) % n)

  return (
    <div
      className="relative mx-auto w-full max-w-[34rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative aspect-[4/3.5]">
        {photos.map((photo, i) => {
          const depth = (i - top + n) % n
          const pose = poses[Math.min(depth, poses.length - 1)]
          return (
            <motion.figure
              key={photo.src}
              className="tape absolute inset-x-[6%] top-[4%] cursor-pointer rounded-md bg-[#f6efe2] p-2.5 pb-0 shadow-photo sm:p-3 sm:pb-0"
              style={{ zIndex: n - depth }}
              initial={false}
              animate={{ ...pose, opacity: depth > 3 ? 0 : 1 }}
              transition={{ type: "spring", stiffness: 170, damping: 22 }}
              onClick={next}
              aria-hidden={depth !== 0}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-neutral-900">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 85vw, 480px"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
              <figcaption className="flex h-12 items-center justify-center font-marker text-2xl text-neutral-800 sm:h-14 sm:text-3xl">
                {photo.caption}
              </figcaption>
            </motion.figure>
          )
        })}
      </div>

      <div className="mt-2 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous photo"
          className="flex size-11 items-center justify-center rounded-full border border-foreground/15 text-foreground/80 transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex gap-1.5" aria-hidden>
          {photos.map((p, i) => (
            <span
              key={p.src}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === top ? "w-6 bg-primary" : "w-1.5 bg-foreground/25"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next photo"
          className="flex size-11 items-center justify-center rounded-full border border-foreground/15 text-foreground/80 transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  )
}

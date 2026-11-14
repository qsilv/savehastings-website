"use client"

import { animate, useInView, useReducedMotion } from "motion/react"
import { useEffect, useRef } from "react"

/** Animates a stat like "8000+" from zero when it scrolls into view. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" })
  const reduce = useReducedMotion()
  const match = value.match(/^(\d[\d,]*)(.*)$/)
  const target = match ? Number(match[1].replace(/,/g, "")) : 0
  const suffix = match ? match[2] : ""

  useEffect(() => {
    const node = ref.current
    if (!node || !match || !inView || reduce) return
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = Math.round(v).toLocaleString("en-CA") + suffix
      },
    })
    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, target, suffix])

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {match ? target.toLocaleString("en-CA") + suffix : value}
    </span>
  )
}

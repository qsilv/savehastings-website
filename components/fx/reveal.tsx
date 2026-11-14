"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  /** px to travel upward while fading in */
  y?: number
  as?: "div" | "li" | "section" | "span"
}

/** Fades and lifts its children into place the first time they scroll into view. */
export function Reveal({ children, className, delay = 0, y = 28, as = "div" }: RevealProps) {
  const reduce = useReducedMotion()
  const Comp = motion[as] as typeof motion.div
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.6, 0.35, 1] }}
    >
      {children}
    </Comp>
  )
}

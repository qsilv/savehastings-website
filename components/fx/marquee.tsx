import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: ReactNode
  className?: string
  reverse?: boolean
  /** seconds for one full loop */
  duration?: number
}

/** Infinite horizontal ticker. Children are rendered twice for a seamless loop. */
export function Marquee({ children, className, reverse, duration = 40 }: MarqueeProps) {
  return (
    <div className={cn("marquee-wrap overflow-hidden", className)}>
      <div
        className={cn("marquee", reverse && "marquee-reverse")}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}

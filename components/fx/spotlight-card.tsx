"use client"

import type { MouseEvent, ReactNode } from "react"
import { cn } from "@/lib/utils"

/** Card with a streetlight glow that follows the cursor. */
export function SpotlightCard({ children, className }: { children: ReactNode; className?: string }) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`)
  }
  return (
    <div
      onMouseMove={onMove}
      className={cn(
        "group/spot relative overflow-hidden rounded-3xl border bg-card text-card-foreground transition-colors duration-300 hover:border-primary/50",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), hsl(var(--glow) / 0.16), transparent 70%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  )
}

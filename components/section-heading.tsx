import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: ReactNode
  children?: ReactNode
  className?: string
}

export function SectionHeading({ title, children, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{children}</p>}
    </div>
  )
}

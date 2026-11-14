import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/fx/reveal"

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({ eyebrow, title, children, align = "left", className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("eyebrow", align === "center" && "justify-center")}>{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">{title}</h2>
      {children && <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">{children}</p>}
    </Reveal>
  )
}

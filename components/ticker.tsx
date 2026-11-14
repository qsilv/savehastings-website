import Image from "next/image"
import { Marquee } from "@/components/fx/marquee"

const words = ["Hot meals", "Warm clothes", "Real conversations", "Dignity first", "Unleash your heroic heart"]

/** Tilted orange tape that runs across the page between sections. */
export default function Ticker() {
  return (
    <div className="relative z-10 -my-6 overflow-hidden py-6" aria-hidden>
      <div className="-mx-6 -rotate-[1.5deg] bg-primary py-3 text-[hsl(24_30%_7%)] shadow-[0_10px_40px_-10px_hsl(var(--glow)/0.6)]">
        <Marquee duration={36}>
          {words.map((w) => (
            <span key={w} className="flex items-center font-display text-xl font-extrabold uppercase tracking-tight md:text-2xl">
              <span className="px-6">{w}</span>
              <Image src="/SaveHastingsBlack.png" alt="" width={146} height={186} className="h-7 w-auto" />
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

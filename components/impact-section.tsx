"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"

import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/fx/reveal"
import { CountUp } from "@/components/fx/count-up"

const stats = [
  { value: "350+", label: "Meals Monthly" },
  { value: "200+", label: "Active Volunteers" },
  { value: "8000+", label: "People Supported" },
  { value: "7+", label: "Community Partners" },
]

export default function ImpactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-8%", "8%"])

  return (
    <section className="paper relative overflow-hidden py-24 md:py-32">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div ref={ref} className="relative">
              <div className="relative aspect-[7/5] rotate-[-1.5deg] overflow-hidden rounded-3xl shadow-[0_30px_60px_-25px_rgb(60_30_0/0.6)]">
                <motion.div style={{ y }} className="absolute -inset-y-[10%] inset-x-0">
                  <Image
                    src="/impact.png"
                    alt="Volunteers distributing meals in the community"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="absolute -bottom-6 -right-2 rotate-3 rounded-2xl bg-foreground px-5 py-3 text-background shadow-xl sm:-right-6">
                <p className="font-marker text-2xl leading-none sm:text-3xl">every other week</p>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="Our Impact" title={<>Small crew. <span className="text-primary">Big nights.</span></>}>
              Through the dedication of our volunteers and sponsors, we've made a significant difference in our
              community.
            </SectionHeading>

            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border bg-border">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.06 * i} className="bg-card p-6 md:p-7">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <CountUp
                      value={s.value}
                      className="font-display text-5xl font-extrabold tracking-tight text-primary md:text-6xl"
                    />
                    <span className="mt-2 block text-sm font-medium text-muted-foreground">{s.label}</span>
                  </dd>
                </Reveal>
              ))}
            </dl>

            <Reveal delay={0.2}>
              <p className="mt-8 border-l-4 border-primary pl-5 leading-relaxed text-muted-foreground">
                These numbers represent real people whose lives have been positively impacted by our collective
                efforts. Every meal, every care package, and every conversation makes a difference.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

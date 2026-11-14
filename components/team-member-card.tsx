import Image from "next/image"
import { LinkedInIcon, InstagramIcon } from "@/components/icons"
import type { TeamMember } from "@/lib/site-data"

interface TeamMemberCardProps {
  member: TeamMember
  size: "large" | "small"
}

const socialClass =
  "flex size-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"

/** Portrait card: name and role sit on the photo, socials on the corner. */
export function TeamMemberCard({ member, size = "large" }: TeamMemberCardProps) {
  const isLinkedIn = member.linkedin.includes("linkedin.com")
  return (
    <article className="group relative aspect-[4/5] overflow-hidden rounded-3xl border bg-card">
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes={size === "large" ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" : "(max-width: 640px) 50vw, 25vw"}
        quality={70}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

      {(member.linkedin || member.instagram) && (
        <div className="absolute right-3 top-3 flex gap-2">
          {member.linkedin && isLinkedIn && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn`} className={socialClass}>
              <LinkedInIcon className="size-4" />
            </a>
          )}
          {member.instagram && (
            <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s Instagram`} className={socialClass}>
              <InstagramIcon className="size-4" />
            </a>
          )}
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[hsl(40_100%_65%)]">{member.role}</p>
        <h3 className={`mt-1 font-bold leading-tight ${size === "large" ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}>
          {member.name}
        </h3>
      </div>
    </article>
  )
}

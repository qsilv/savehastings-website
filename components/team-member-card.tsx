import Image from "next/image"
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { LinkedInIcon, InstagramIcon } from '@/components/icons'
import { SocialLink } from '@/components/social-link'

interface TeamMember {
  id: number;
  name: string;
  role: string;
  linkedin: string;
  instagram: string;
  image: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  size: "large" | "small";
}

export function TeamMemberCard({ member, size = "large" }: TeamMemberCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="aspect-square relative">
        <Image 
          src={member.image} 
          alt={member.name} 
          fill 
          className="object-cover" 
          sizes={size === "large" ? "(max-width: 768px) 100vw, 25vw" : "(max-width: 768px) 50vw, 16vw"}
          quality={70}
        />
      </div>
      
      {size === "large" ? (
        <>
          <CardHeader className="pb-2 text-center">
            <CardTitle className="text-lg">{member.name}</CardTitle>
            {/* <p className="text-sm text-muted-foreground">{member.role}</p> */}
          </CardHeader>
          <CardFooter className="flex justify-center gap-4 pt-0 pb-4">
            <SocialLink href={member.linkedin} label={`${member.name}'s LinkedIn`}>
              <LinkedInIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={member.instagram} label={`${member.name}'s Instagram`}>
              <InstagramIcon className="h-5 w-5" />
            </SocialLink>
          </CardFooter>
        </>
      ) : (
        <CardHeader className="p-3">
          <CardTitle className="text-sm">{member.name}</CardTitle>
          <p className="text-xs text-muted-foreground">{member.role}</p>
        </CardHeader>
      )}
    </Card>
  );
}
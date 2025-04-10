"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import DonationModal from "@/components/donation-modal"

interface DonationButtonProps {
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

export default function DonationButton({ className, variant = "default", size = "default" }: DonationButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} className={className} variant={variant} size={size}>
        Donate Now
        <Heart className="mr-2 h-4 w-4" />
      </Button>

      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

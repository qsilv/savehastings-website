"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import DonationModal from "@/components/donation-modal"

interface DonationButtonProps {
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  label?: string
}

export default function DonationButton({
  className,
  variant = "default",
  size = "default",
  label = "Donate Now",
}: DonationButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} className={className} variant={variant} size={size}>
        <Heart className="fill-current" />
        {label}
      </Button>

      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

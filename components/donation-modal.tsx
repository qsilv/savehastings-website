"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, Loader2 } from "lucide-react"
import { createCheckoutSession } from "@/app/actions/stripe"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "")

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [step, setStep] = useState<"amount" | "checkout">("amount")
  const [amount, setAmount] = useState<number | "">("")
  const [isCustomAmount, setIsCustomAmount] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [clientSecret, setClientSecret] = useState<string | null>(null)

  const predefinedAmounts = [5, 10, 20]

  const handleAmountSelect = (selectedAmount: number) => {
    setAmount(selectedAmount)
    setIsCustomAmount(false)
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === "") {
      setAmount("")
      return
    }

    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue) && numValue >= 0) {
      setAmount(numValue)
    }
  }

  const handleContinue = async () => {
    if (amount === "" || amount <= 0) return

    setIsLoading(true)
    try {
      const secret = await createCheckoutSession(Number(amount))
      setClientSecret(secret)
      setStep("checkout")
    } catch (error) {
      console.error("Error creating checkout session:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setStep("amount")
    setAmount("")
    setIsCustomAmount(false)
    setClientSecret(null)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
<DialogContent className="sm:max-w-md md:max-w-lg max-h-[90vh] overflow-y-auto">        {step === "amount" ? (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Donate to #SAVEHASTINGS
              </DialogTitle>
              <DialogDescription>
                Your donation helps support the homeless population in Vancouver's Downtown Eastside.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-3 gap-3">
                {predefinedAmounts.map((amt) => (
                  <Button
                    key={amt}
                    variant={amount === amt && !isCustomAmount ? "default" : "outline"}
                    onClick={() => handleAmountSelect(amt)}
                    className="text-lg"
                  >
                    ${amt}
                  </Button>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <Button
                  variant={isCustomAmount ? "default" : "outline"}
                  onClick={() => {
                    setIsCustomAmount(true)
                    setAmount("")
                  }}
                  className="text-lg"
                >
                  Custom Amount
                </Button>

                {isCustomAmount && (
                  <div className="flex items-center mt-2">
                    <span className="text-lg mr-2">$</span>
                    <Input
                      type="number"
                      min="1"
                      step="any"
                      value={amount}
                      onChange={handleCustomAmountChange}
                      placeholder="Enter amount"
                      className="text-lg"
                      autoFocus
                    />
                  </div>
                )}
              </div>
            </div>

            <DialogFooter>
              <Button
                onClick={handleContinue}
                disabled={amount === "" || Number(amount) <= 0 || isLoading}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  `Donate ${amount !== "" ? `$${amount}` : ""}`
                )}
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Complete Your Donation</DialogTitle>
              <DialogDescription>
                Please provide your payment details to complete your donation of ${amount}.
              </DialogDescription>
            </DialogHeader>

            <div className="py-4">
  {clientSecret && (
    <div className="h-[400px] md:h-[500px] ">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )}
</div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

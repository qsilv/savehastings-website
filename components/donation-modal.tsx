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
import { goodDogFont } from "./ui/fonts"

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
                        <DialogTitle className="flex flex-wrap items-center gap-x-2 font-display text-2xl font-extrabold">
                            <Heart className="h-5 w-5 fill-primary text-primary" />
                            Donate to <span className={`${goodDogFont.className} text-3xl font-normal text-primary`}>#SAVEHASTINGS</span>
                        </DialogTitle>
                        <DialogDescription className="text-base">
                            Your donation helps support the homeless population in Vancouver's Downtown Eastside.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-3 py-4">
                        <div className="grid grid-cols-3 gap-3">
                            {predefinedAmounts.map((amt) => {
                                const selected = amount === amt && !isCustomAmount
                                return (
                                    <button
                                        key={amt}
                                        type="button"
                                        aria-pressed={selected}
                                        onClick={() => handleAmountSelect(amt)}
                                        className={`rounded-2xl border py-5 font-display text-3xl font-extrabold transition-all active:scale-95 ${selected
                                            ? "border-primary bg-primary text-primary-foreground shadow-glow"
                                            : "bg-foreground/[0.04] hover:border-primary hover:text-primary"
                                            }`}
                                    >
                                        ${amt}
                                    </button>
                                )
                            })}
                        </div>

                        <button
                            type="button"
                            aria-pressed={isCustomAmount}
                            onClick={() => {
                                setIsCustomAmount(true)
                                setAmount("")
                            }}
                            className={`rounded-2xl border py-3 text-base font-semibold transition-colors ${isCustomAmount
                                ? "border-primary text-primary"
                                : "bg-foreground/[0.04] hover:border-primary hover:text-primary"
                                }`}
                        >
                            Custom Amount
                        </button>

                        {isCustomAmount && (
                            <div className="relative">
                                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-muted-foreground">$</span>
                                <Input
                                    type="number"
                                    min="1"
                                    step="any"
                                    value={amount}
                                    onChange={handleCustomAmountChange}
                                    placeholder="Enter amount"
                                    aria-label="Custom donation amount in dollars"
                                    className="h-14 pl-9 text-lg md:text-lg"
                                    autoFocus
                                />
                            </div>
                        )}
                    </div>

                    <DialogFooter>
                        <Button
                            onClick={handleContinue}
                            disabled={amount === "" || Number(amount) <= 0 || isLoading}
                            className="w-full"
                            size="lg"
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
                            Please provide payment details to complete your donation of ${amount}.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="py-4">
                        {clientSecret && (
                            <div className="h-[60vh] overflow-y-auto rounded-2xl bg-white md:h-[65vh]">
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

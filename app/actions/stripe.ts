"use server"

import { headers } from "next/headers"
import { stripe } from "@/lib/stripe"

export async function createCheckoutSession(amount: number) {
  const headersList = await headers()
  const origin = headersList.get("origin") || "http://localhost:3000"

  // Convert amount to cents for Stripe
  const amountInCents = Math.round(amount * 100)

  // Create Checkout Session
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Donation to #SAVEHASTINGS",
            description: "Supporting Vancouver's Downtown Eastside",
          },
          unit_amount: amountInCents,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    return_url: `${origin}/donation/thank-you?session_id={CHECKOUT_SESSION_ID}`,
    automatic_tax: { enabled: true },
    metadata: {
      source: "donation_popup",
    },
  })

  return session.client_secret
}

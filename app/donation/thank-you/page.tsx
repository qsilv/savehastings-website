import Link from "next/link"
import { redirect } from "next/navigation"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { stripe } from "@/lib/stripe"

export default async function ThankYouPage({ searchParams }: { searchParams: { session_id?: string } }) {
  const { session_id } = searchParams

  if (!session_id) {
    redirect("/")
  }

  // Retrieve the checkout session to get details
  const session = await stripe.checkout.sessions.retrieve(session_id)

  if (session.status !== "complete") {
    redirect("/")
  }

  // Get the amount from the session
  const amount = session.amount_total ? (session.amount_total / 100).toFixed(2) : "0.00"

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mb-10">
        <Link href="/" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="mx-auto max-w-md">
        <Card>
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-primary/10 p-3">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
            </div>
            <CardTitle className="text-center">Thank You for Your Donation!</CardTitle>
            <CardDescription className="text-center">
              Your generous donation of ${amount} will help support the homeless population in Vancouver's Downtown
              Eastside.
            </CardDescription>
          </CardHeader>
          {/* <CardContent className="space-y-4">
            <p className="text-center">
              We've sent a receipt to your email. Your contribution makes a real difference in our community.
            </p>
          </CardContent> */}
          <CardFooter className="flex justify-center">
            <Link href="/">
              <Button>Return to Homepage</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

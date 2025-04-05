"use client"

import { useState, useRef } from "react"
import { CheckCircle2 } from "lucide-react"
import { Turnstile } from "@marsidev/react-turnstile"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { Card } from "@/components/ui/card"

const INTERESTS = [
  "Meal Service",
  "Outreach",
  "Administrative",
  "Events",
  "Fundraising",
  "Other"
]

export default function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [checkedInterests, setCheckedInterests] = useState<Record<string, boolean>>(
    Object.fromEntries(INTERESTS.map((interest) => [interest, false]))
  )

  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = formRef.current
    if (!form) return

    const formData = new FormData(form)
    const token = formData.get("cf-turnstile-response")
    formData.delete("cf-turnstile-response")

    // Add interests as individual values tied to the same entry ID
    INTERESTS.forEach((interest) => {
      if (checkedInterests[interest]) {
        formData.append("entry.314541393", interest)
      }
    })

    const res = await fetch("/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token })
    })

    const result = await res.json()
    if (!result.success) {
      alert("Bot verification failed. Please try again.")
      return
    }

    await fetch("https://docs.google.com/forms/d/e/1FAIpQLSeB3cRpvUmHEJW13r239j8D6jNhfxCHUGs0TWb3QVg7RMmjSA/formResponse", {
      method: "POST",
      body: formData,
      mode: "no-cors"
    })

    setSubmitted(true)
    setShowSuccess(true)
    form.reset()
  }

  if (showSuccess) {
    return (
      <Card className="p-6 text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="rounded-full bg-primary/10 p-3">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-xl font-bold">Thank You for Registering!</h3>
          <p className="text-muted-foreground">
            We've received your volunteer application. A member of our team will contact you within 2-3 business days to
            discuss next steps.
          </p>
          <Button onClick={() => {
            setSubmitted(false)
            setShowSuccess(false)
            setCheckedInterests(Object.fromEntries(INTERESTS.map((interest) => [interest, false])))
            if (formRef.current) formRef.current.reset()
          }} variant="outline">
            Submit Another Application
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-lg border">
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name *</Label>
            <Input id="first-name" name="entry.501052165" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last Name *</Label>
            <Input id="last-name" name="entry.232182972" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="entry.4242891" type="email" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" name="entry.694791215" type="tel" required />
        </div>

        <div className="space-y-2">
          <Label>Preferred Contact Method *</Label>
          <div className="flex flex-col space-y-2">
            {['Email', 'Phone', 'Text Message'].map((method) => (
              <div className="flex items-center space-x-2" key={method}>
                <input
                  type="radio"
                  id={`contact-${method.toLowerCase()}`}
                  name="entry.1749650631"
                  value={method}
                  className="h-4 w-4"
                  defaultChecked={method === 'Email'}
                />
                <Label htmlFor={`contact-${method.toLowerCase()}`}>{method}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Areas of Interest (Select all that apply) *</Label>
          <div className="grid gap-2 sm:grid-cols-2">
            {INTERESTS.map((interest) => (
              <div className="flex items-center space-x-2" key={interest}>
                <input
                  type="checkbox"
                  id={`interest-${interest.toLowerCase().replace(/\s+/g, '-')}`}
                  className="h-4 w-4"
                  checked={checkedInterests[interest]}
                  onChange={(e) => setCheckedInterests({
                    ...checkedInterests,
                    [interest]: e.target.checked
                  })}
                />
                <Label htmlFor={`interest-${interest.toLowerCase().replace(/\s+/g, '-')}`}>{interest}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="skills">Skills & Experience *</Label>
          <Textarea
            id="skills"
            name="entry.1353334588"
            placeholder="Please share any relevant skills, experience, or certifications you have."
            className="min-h-[100px]"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="why-volunteer">Why do you want to volunteer with #SAVEHASTINGS? *</Label>
          <Textarea
            id="why-volunteer"
            name="entry.192662415"
            placeholder="Tell us why you're interested in volunteering with us."
            className="min-h-[100px]"
            required
          />
        </div>
      </div>

      <Turnstile siteKey="0x4AAAAAABD1gf4fPesGc1Yl" />

      <Button type="submit" className="w-full">
        Submit Application
      </Button>
    </form>
  )
}

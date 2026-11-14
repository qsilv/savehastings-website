"use client"

import { useState, useRef, useEffect} from "react"
import { ArrowRight, Check, CheckCircle2 } from "lucide-react"
import { Turnstile } from "@marsidev/react-turnstile"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const INTERESTS = [
  "Meal Service",
  "Outreach",
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
  const successRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (showSuccess) {
      // Scroll to top of page when showing success message
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [showSuccess]);

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

  const chip =
    "flex cursor-pointer select-none items-center gap-2 rounded-full border border-input bg-foreground/[0.04] px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background"

  if (showSuccess) {
    return (
      <div className="rounded-3xl border border-primary/40 bg-card p-10 text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="rounded-full bg-primary/15 p-4">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-3xl font-extrabold tracking-tight">Thank you for registering</h3>
          <p className="max-w-md text-muted-foreground">
            We've received your application. A team member will contact you within 2-3 business days about next
            steps.
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
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 rounded-3xl border bg-card p-6 md:p-9">
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name *</Label>
            <Input id="first-name" name="entry.501052165" autoComplete="given-name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last Name *</Label>
            <Input id="last-name" name="entry.232182972" autoComplete="family-name" required />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="entry.4242891" type="email" autoComplete="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" name="entry.694791215" type="tel" autoComplete="tel" required />
          </div>
        </div>

        <fieldset className="space-y-3">
          <legend className="text-sm font-medium leading-none">Preferred Contact Method *</legend>
          <div className="flex flex-wrap gap-2">
            {['Email', 'Phone', 'Text Message'].map((method) => (
              <div key={method}>
                <input
                  type="radio"
                  id={`contact-${method.toLowerCase()}`}
                  name="entry.1749650631"
                  value={method}
                  className="peer sr-only"
                  defaultChecked={method === 'Email'}
                />
                <label htmlFor={`contact-${method.toLowerCase()}`} className={chip}>{method}</label>
              </div>
            ))}
          </div>
        </fieldset>

        <fieldset className="space-y-3">
          <legend className="text-sm font-medium leading-none">Areas of Interest (Select all that apply)</legend>
          <div className="flex flex-wrap gap-2">
            {INTERESTS.map((interest) => {
              const id = `interest-${interest.toLowerCase().replace(/\s+/g, '-')}`
              return (
                <div key={interest}>
                  <input
                    type="checkbox"
                    id={id}
                    className="peer sr-only"
                    checked={checkedInterests[interest]}
                    onChange={(e) => setCheckedInterests({
                      ...checkedInterests,
                      [interest]: e.target.checked
                    })}
                  />
                  <label htmlFor={id} className={chip}>
                    {checkedInterests[interest] && <Check className="size-4" strokeWidth={3} />}
                    {interest}
                  </label>
                </div>
              )
            })}
          </div>
        </fieldset>

        <div className="space-y-2">
          <Label htmlFor="skills">Skills & Experience *</Label>
          <Textarea
            id="skills"
            name="entry.1353334588"
            placeholder="Relevant skills, experience or certifications."
            className="min-h-[110px]"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="why-volunteer">Why do you want to volunteer with #SAVEHASTINGS? *</Label>
          <Textarea
            id="why-volunteer"
            name="entry.192662415"
            placeholder="Tell us why you'd like to volunteer."
            className="min-h-[110px]"
            required
          />
        </div>
      </div>

      <Turnstile siteKey="0x4AAAAAABD1gf4fPesGc1Yl" options={{ theme: "dark" }} />

      <Button type="submit" size="lg" className="w-full">
        Submit Application <ArrowRight />
      </Button>
    </form>
  )
}

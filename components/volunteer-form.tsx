"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"

/**
 * VolunteerForm Component
 *
 * A comprehensive form for volunteer registration that collects:
 * - Personal information (name, contact details)
 * - Volunteer preferences (areas of interest, availability)
 * - Skills and experience
 * - Motivation for volunteering
 *
 * The form includes validation and a success state after submission.
 */
export default function VolunteerForm() {
  // Track form submission state to show success message
  const [formSubmitted, setFormSubmitted] = useState(false)

  /**
   * Handle form submission
   * In a production environment, this would send data to a server
   *
   * @param {React.FormEvent} e - The form submission event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    // For example: const formData = new FormData(e.target as HTMLFormElement)
    // Then send the data to your backend API

    // For demo purposes, we just set the form as submitted
    setFormSubmitted(true)
  }

  // Show success message after form submission
  if (formSubmitted) {
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
          <Button onClick={() => setFormSubmitted(false)} variant="outline">
            Submit Another Application
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-lg border">
      <div className="space-y-4">
        {/* Personal Information Section */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name *</Label>
            <Input id="first-name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last Name *</Label>
            <Input id="last-name" required />
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" type="tel" required />
        </div>

        {/* Contact Preferences */}
        <div className="space-y-2">
          <Label>Preferred Contact Method *</Label>
          <RadioGroup defaultValue="email">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="email" id="contact-email" />
              <Label htmlFor="contact-email">Email</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="phone" id="contact-phone" />
              <Label htmlFor="contact-phone">Phone</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="text" id="contact-text" />
              <Label htmlFor="contact-text">Text Message</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Volunteer Interests */}
        <div className="space-y-2">
          <Label>Areas of Interest (Select all that apply) *</Label>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="interest-meals" />
              <Label htmlFor="interest-meals">Meal Service</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="interest-outreach" />
              <Label htmlFor="interest-outreach">Outreach</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="interest-admin" />
              <Label htmlFor="interest-admin">Administrative</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="interest-events" />
              <Label htmlFor="interest-events">Events</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="interest-fundraising" />
              <Label htmlFor="interest-fundraising">Fundraising</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="interest-other" />
              <Label htmlFor="interest-other">Other</Label>
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="space-y-2">
          <Label htmlFor="availability">Availability *</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekday-mornings">Weekday Mornings</SelectItem>
              <SelectItem value="weekday-afternoons">Weekday Afternoons</SelectItem>
              <SelectItem value="weekday-evenings">Weekday Evenings</SelectItem>
              <SelectItem value="weekend-mornings">Weekend Mornings</SelectItem>
              <SelectItem value="weekend-afternoons">Weekend Afternoons</SelectItem>
              <SelectItem value="weekend-evenings">Weekend Evenings</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Skills and Experience */}
        <div className="space-y-2">
          <Label htmlFor="skills">Skills & Experience</Label>
          <Textarea
            id="skills"
            placeholder="Please share any relevant skills, experience, or certifications you have."
            className="min-h-[100px]"
          />
        </div>

        {/* Motivation */}
        <div className="space-y-2">
          <Label htmlFor="why-volunteer">Why do you want to volunteer with #SAVEHASTINGS? *</Label>
          <Textarea
            id="why-volunteer"
            placeholder="Tell us why you're interested in volunteering with us."
            className="min-h-[100px]"
            required
          />
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start space-x-2">
          <Checkbox id="terms" required />
          <div className="grid gap-1.5 leading-none">
            <Label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the volunteer terms and conditions *
            </Label>
            <p className="text-sm text-muted-foreground">
              By checking this box, you agree to our{" "}
              <a href="#" className="text-primary underline">
                Volunteer Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary underline">
                Code of Conduct
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full">
        Submit Application
      </Button>
    </form>
  )
}


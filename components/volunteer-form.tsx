"use client"

import { useState, useRef } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"

/**
 * VolunteerForm Component
 *
 * A comprehensive form for volunteer registration that submits directly to Google Forms
 * using the native form submission with an iframe to prevent page reload.
 */
export default function VolunteerForm() {
  // Track form submission state to show success message
  const [submitted, setSubmitted] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  
  // For tracking checkbox states visually only
  const [checkedInterests, setCheckedInterests] = useState({
    mealService: false,
    outreach: false,
    administrative: false,
    events: false,
    fundraising: false,
    other: false
  })
  
  // Reference to the form element
  const formRef = useRef<HTMLFormElement>(null)
  
  // Handle iframe load event to display success message
  const handleIframeLoad = () => {
    if (submitted) {
      setShowSuccess(true)
    }
  }

  // Show success message after form submission
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
            setCheckedInterests({
              mealService: false,
              outreach: false,
              administrative: false,
              events: false,
              fundraising: false,
              other: false
            })
            if (formRef.current) formRef.current.reset()
          }} variant="outline">
            Submit Another Application
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <>
      {/* Hidden iframe for form submission without page reload */}
      <iframe 
        name="hiddenConfirm" 
        style={{ display: "none" }} 
        onLoad={handleIframeLoad}
      />
      
      <form 
        ref={formRef}
        action="https://docs.google.com/forms/d/e/1FAIpQLSeB3cRpvUmHEJW13r239j8D6jNhfxCHUGs0TWb3QVg7RMmjSA/formResponse"
        method="POST"
        target="hiddenConfirm"
        onSubmit={() => setSubmitted(true)}
        className="space-y-6 bg-card p-6 rounded-lg border"
      >
        <div className="space-y-4">
          {/* Personal Information Section */}
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

          {/* Contact Information Section */}
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="entry.4242891" type="email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" name="entry.694791215" type="tel" required />
          </div>

          {/* Contact Preferences */}
          <div className="space-y-2">
            <Label>Preferred Contact Method *</Label>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  id="contact-email" 
                  name="entry.1749650631" 
                  value="Email" 
                  defaultChecked 
                  className="h-4 w-4" 
                />
                <Label htmlFor="contact-email">Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  id="contact-phone" 
                  name="entry.1749650631" 
                  value="Phone" 
                  className="h-4 w-4"
                />
                <Label htmlFor="contact-phone">Phone</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  id="contact-text" 
                  name="entry.1749650631" 
                  value="Text Message" 
                  className="h-4 w-4"
                />
                <Label htmlFor="contact-text">Text Message</Label>
              </div>
            </div>
          </div>

          {/* Volunteer Interests */}
          <div className="space-y-2">
            <Label>Areas of Interest (Select all that apply) *</Label>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="interest-mealService" 
                  name="entry.314541393" 
                  value="Meal Service" 
                  className="h-4 w-4"
                  checked={checkedInterests.mealService}
                  onChange={(e) => setCheckedInterests({
                    ...checkedInterests, 
                    mealService: e.target.checked
                  })}
                />
                <Label htmlFor="interest-mealService">Meal Service</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="interest-outreach" 
                  name="entry.314541393" 
                  value="Outreach" 
                  className="h-4 w-4"
                  checked={checkedInterests.outreach}
                  onChange={(e) => setCheckedInterests({
                    ...checkedInterests, 
                    outreach: e.target.checked
                  })}
                />
                <Label htmlFor="interest-outreach">Outreach</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="interest-admin" 
                  name="entry.314541393" 
                  value="Administrative" 
                  className="h-4 w-4"
                  checked={checkedInterests.administrative}
                  onChange={(e) => setCheckedInterests({
                    ...checkedInterests, 
                    administrative: e.target.checked
                  })}
                />
                <Label htmlFor="interest-admin">Administrative</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="interest-events" 
                  name="entry.314541393" 
                  value="Events" 
                  className="h-4 w-4"
                  checked={checkedInterests.events}
                  onChange={(e) => setCheckedInterests({
                    ...checkedInterests, 
                    events: e.target.checked
                  })}
                />
                <Label htmlFor="interest-events">Events</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="interest-fundraising" 
                  name="entry.314541393" 
                  value="Fundraising" 
                  className="h-4 w-4"
                  checked={checkedInterests.fundraising}
                  onChange={(e) => setCheckedInterests({
                    ...checkedInterests, 
                    fundraising: e.target.checked
                  })}
                />
                <Label htmlFor="interest-fundraising">Fundraising</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="interest-other" 
                  name="entry.314541393" 
                  value="Other" 
                  className="h-4 w-4"
                  checked={checkedInterests.other}
                  onChange={(e) => setCheckedInterests({
                    ...checkedInterests, 
                    other: e.target.checked
                  })}
                />
                <Label htmlFor="interest-other">Other</Label>
              </div>
            </div>
          </div>

          {/* Skills and Experience */}
          <div className="space-y-2">
            <Label htmlFor="skills">Skills & Experience</Label>
            <Textarea
              id="skills"
              name="entry.1353334588"
              placeholder="Please share any relevant skills, experience, or certifications you have."
              className="min-h-[100px]"
            />
          </div>

          {/* Motivation */}
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

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Submit Application
        </Button>
      </form>
    </>
  )
}


import type React from "react"
import ClientLayout from "./ClientLayout"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "#SAVEHASTINGS - Supporting Vancouver's Downtown Eastside",
  description:
    "Join our community of volunteers dedicated to making a meaningful impact in the lives of those experiencing homelessness.",
  keywords: [
    "SAVEHASTINGS",
    "Vancouver",
    "Downtown Eastside",
    "homelessness",
    "volunteers",
    "community support",
    "non-profit",
    "charity"
  ],
  author: "SAVEHASTINGS Team",
  metadataBase: new URL('https://savehastings.com'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}<Analytics /><SpeedInsights /></ClientLayout>
}



import './globals.css'
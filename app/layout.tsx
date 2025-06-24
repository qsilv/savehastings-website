import type React from "react"
import ClientLayout from "./ClientLayout"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "#SAVEHASTINGS - Supporting Vancouver's Downtown Eastside",
  description:
    "Join our community of volunteers dedicated to making a meaningful impact in the lives of those experiencing homelessness. Help us Save Hastings!",
  keywords: [
    "SAVEHASTINGS",
    "save hastings",
    "hastings homeless",
    "east hastings homeless",
    "volunteer downtown eastside",
    "east hastings volunteer",
    "hastings vancouver homeless",
    "save vancouver streets",
    "homeless charity hastings",
    "downtown eastside",
    "homeless support vancouver",
    "dtes volunteer",
    "volunteer hastings"
  ],
  author: "SAVEHASTINGS Team",
  metadataBase: new URL('https://www.savehastings.com'),
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
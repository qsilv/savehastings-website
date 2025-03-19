import type React from "react"
import ClientLayout from "./ClientLayout"

export const metadata = {
  title: "#SAVEHASTINGS - Supporting Vancouver's Downtown Eastside",
  description:
    "Join our community of volunteers dedicated to making a meaningful impact in the lives of those experiencing homelessness.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}



import './globals.css'
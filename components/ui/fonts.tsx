import { Bricolage_Grotesque, Figtree } from "next/font/google"
import localFont from "next/font/local"

// Body text
export const inter = Figtree({ subsets: ["latin"], variable: "--font-sans", display: "swap" })

// Display headings
export const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

// Hand-drawn brand font (used for the #SAVEHASTINGS wordmark)
export const goodDogFont = localFont({
  src: "../../public/fonts/GoodDog.woff2",
  display: "swap",
  variable: "--font-marker",
})

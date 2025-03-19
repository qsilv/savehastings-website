import { Inter } from "next/font/google"
import localFont from 'next/font/local'

// Load Inter font with Latin subset
export const inter = Inter({ subsets: ["latin"] })

// Load GoodDog font from local files
export const goodDogFont = localFont({
    src: '../../public/fonts/GoodDog.woff2',
    display: 'swap',
})

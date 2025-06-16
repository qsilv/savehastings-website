"use client"

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

// Empty component for server-side rendering
const VantaBackgroundClient = () => {
  const vantaRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Only import and initialize Vanta on the client side
    const initVanta = async () => {
      if (!mounted || !vantaRef.current) return
      
      // Dynamically import THREE and Vanta
      const THREE = await import('three')
      // @ts-ignore
      const BIRDS = (await import('vanta/dist/vanta.birds.min')).default
      
      const effect = BIRDS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: false,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xfaf5eb,
        color1: 0xff9500,
        color2: 0xffbf40,
        colorMode: "variance",
        birdSize: 1.50,
        wingSpan: 30.00,
        speedLimit: 5.00,
        separation: 60.00,
        alignment: 50.00,
        cohesion: 30.00
      })
      
      // Clean up effect when component unmounts
      return () => {
        if (effect) effect.destroy()
      }
    }
    
    setMounted(true)
    const cleanup = initVanta()
    
    return () => {
      cleanup?.then(cleanupFn => cleanupFn?.())
    }
  }, [mounted])

  return <div ref={vantaRef} className="fixed inset-0 -z-10 opacity-30" />
}

// Use dynamic import with SSR disabled for the component
const VantaBackground = dynamic(() => Promise.resolve(VantaBackgroundClient), {
  ssr: false
})

export default VantaBackground
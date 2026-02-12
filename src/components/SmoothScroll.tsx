"use client"

import { useEffect, ReactNode } from "react"
import Lenis from "lenis"

type Props = {
  children: ReactNode
}

export default function SmoothScroll({ children }: Props) {
  useEffect(() => {
   const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => 1 - Math.pow(1 - t, 3),
  smoothWheel: true,
  wheelMultiplier: 0.85,
  gestureOrientation: "vertical",
})


    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}

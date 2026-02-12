"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function SmoothScroll({ children }: any) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,       // smoothness speed
      smoothWheel: true,
      smoothTouch: false,  // mobile jank avoid
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return children
}

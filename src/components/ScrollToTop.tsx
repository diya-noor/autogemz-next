'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToTop() {
  const pathname = usePathname()
  useEffect(() => {
    // reset any jarallax-added height before scrolling to top
    document.body.style.height = '';
    document.documentElement.style.height = '';
    window.scrollTo(0, 0);
  }, [pathname])
  return null
}

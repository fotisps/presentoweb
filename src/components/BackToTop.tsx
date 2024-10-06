import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-2 bg-accentRed text-white rounded-full shadow-lg transition-all duration-300 hover:bg-opacity-80 hover:scale-105 focus:outline-none hidden md:block"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  )
}

export default BackToTop
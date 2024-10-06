import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="bg-darkBg bg-opacity-50 text-white h-32 relative z-50 glassmorphism">
        <div className="container mx-auto px-4 py-4 h-full flex justify-between items-center">
          <div className="text-3xl font-bold p-4 text-accentRed logo">Fotis Pastrakis</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-accentRed p-4 relative group">
              Home
              <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-calc(100%-2rem)"></span>
            </a>
            <a href="#" className="hover:text-accentRed p-4 relative group">
              About
              <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-calc(100%-2rem)"></span>
            </a>
            <a href="#" className="hover:text-accentRed p-4 relative group">
              Services
              <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-calc(100%-2rem)"></span>
            </a>
            <a href="#" className="hover:text-accentRed p-4 relative group">
              Contact
              <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-calc(100%-2rem)"></span>
            </a>
          </nav>
          <button
            className="md:hidden p-4 z-50 text-accentRed"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 glassmorphism"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Drawer */}
      <nav 
        className={`fixed top-0 right-0 bottom-0 w-4/5 bg-darkBg bg-opacity-90 p-8 transition-transform duration-300 ease-in-out transform z-50 glassmorphism ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="absolute top-4 right-4 text-accentRed"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={24} />
        </button>
        <div className="flex flex-col space-y-8 mt-16">
          <a href="#" className="text-white hover:text-accentRed p-4 relative group">
            Home
            <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-calc(100%-2rem)"></span>
          </a>
          <a href="#" className="text-white hover:text-accentRed p-4 relative group">
            About
            <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-calc(100%-2rem)"></span>
          </a>
          <a href="#" className="text-white hover:text-accentRed p-4 relative group">
            Services
            <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-calc(100%-2rem)"></span>
          </a>
          <a href="#" className="text-white hover:text-accentRed p-4 relative group">
            Contact
            <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-calc(100%-2rem)"></span>
          </a>
        </div>
      </nav>
    </>
  )
}

export default Header
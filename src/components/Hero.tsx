import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="bg-darkBg bg-opacity-50 text-white py-24 glassmorphism">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Welcome to Our Website</h1>
        <p className="text-xl md:text-2xl mb-12">Discover amazing features and services</p>
        <a href="#" className="bg-accentRed text-white px-8 py-4 rounded-full font-semibold transition duration-300 hover:bg-opacity-80 hover:scale-105">
          Get Started
        </a>
      </div>
    </section>
  )
}

export default Hero
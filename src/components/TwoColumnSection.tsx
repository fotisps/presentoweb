import React from 'react'

const TwoColumnSection: React.FC = () => {
  return (
    <section className="py-24 bg-darkBg bg-opacity-30 glassmorphism">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-16">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
              alt="Fotis Pastrakis" 
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-accentRed">About Me</h2>
            <p className="text-gray-300 mb-8">
              Fotis is a Product Designer working with leading tech companies in Europe, UK and the US, using strategy, research and design to launch products that solve real needs. He has more than 7 years of experience in working with consumer and business facing companies across multiple industries.
            </p>
            <a 
              href="/contact" 
              className="bg-accentRed text-white px-8 py-4 rounded-full font-semibold transition duration-300 hover:bg-opacity-80 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwoColumnSection
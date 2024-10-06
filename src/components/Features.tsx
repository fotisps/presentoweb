import React from 'react'
import { Zap, Shield, Smile } from 'lucide-react'

const Feature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-md">
    <div className="text-accentRed mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-darkBg">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-darkBg">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Feature
            icon={<Zap size={48} />}
            title="Fast Performance"
            description="Lightning-fast load times and smooth interactions for the best user experience."
          />
          <Feature
            icon={<Shield size={48} />}
            title="Secure & Reliable"
            description="Your data is protected with state-of-the-art security measures."
          />
          <Feature
            icon={<Smile size={48} />}
            title="User-Friendly"
            description="Intuitive design and easy-to-use interface for all skill levels."
          />
        </div>
      </div>
    </section>
  )
}

export default Features
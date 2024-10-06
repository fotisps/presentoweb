import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkBg bg-opacity-50 text-white py-16 glassmorphism">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-accentRed">About Us</h3>
            <p className="text-gray-300">We are dedicated to providing the best services and solutions for our customers.</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-accentRed">Quick Links</h3>
            <ul className="text-gray-300">
              <li className="mb-2"><a href="#" className="hover:text-accentRed transition duration-300">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:text-accentRed transition duration-300">About</a></li>
              <li className="mb-2"><a href="#" className="hover:text-accentRed transition duration-300">Services</a></li>
              <li className="mb-2"><a href="#" className="hover:text-accentRed transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-accentRed">Contact Us</h3>
            <p className="text-gray-300">123 Main Street<br />City, State 12345<br />Phone: (123) 456-7890<br />Email: info@example.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold mb-4 text-accentRed">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accentRed transition duration-300">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-accentRed transition duration-300">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-accentRed transition duration-300">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-accentRed transition duration-300">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-300">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
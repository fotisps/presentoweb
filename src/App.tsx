import React from 'react'
import Header from './components/Header'
import TwoColumnSection from './components/TwoColumnSection'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <TwoColumnSection />
        <Features />
        <Hero />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
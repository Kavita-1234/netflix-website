import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Treading from './pages/Treading'
import CardsSection from './pages/CardSection'
import FaqsSection from './pages/FaqsSection'
import EmailSection from './pages/Emailsection'
import Footer from './components/Footer'

export default function App() {
  return(
    <>
    <Navbar />
    <Hero />
    <Treading />
    <CardsSection />
    <FaqsSection />
    <EmailSection />
    <Footer />
    </>
  )
}
  
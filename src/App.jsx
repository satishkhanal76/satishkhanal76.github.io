import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import ProjectsView from './components/ProjectsView.jsx'
import ContactForm from './components/ContactForm.jsx'

function App() {

  return (
      <>
        <Navbar />
        <HeroSection />
        <ProjectsView />
        <ContactForm />
      </>
  )
}

export default App

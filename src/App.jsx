import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import ProjectsView from './components/ProjectsView.jsx'

function App() {

  return (
      <>
        <Navbar />
        <HeroSection />
        <ProjectsView />
      </>
  )
}

export default App

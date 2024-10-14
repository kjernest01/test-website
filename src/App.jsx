import React from "react"
import Navbar from './components/Navbar/Navbar'
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Work from "./components/Work/Work"
import Projects from "./components/Projects/Projects"
import Education from "./components/Education/Education"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

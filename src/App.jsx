import React from "react"
import Body from './components/Body/Body'
import Hero from "./components/Hero/Hero"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <div>
      <Hero />
      {/* <Curtain /> */}
      <Body />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

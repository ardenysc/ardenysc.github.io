import * as React from "react"
import About from "./about"
import Cards from "./Cards"
import Contact from "./contact"
import Footer from "./footer"
import Intro from "./intro"
import Menubar from "./menubar"
import Portfolio from "./portfolio"
import Resume from "./resume"


const IndexPage = () => {
  return (
    <main>
      <Menubar />
      <Intro />
      <About />
      <Resume />
      <Cards />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
   </main>
  )
}

export default IndexPage

export const Head = () => <title>Arden Choi</title>

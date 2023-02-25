import * as React from "react"
import About from "./about"
import Contact from "./contact"
import Footer from "./footer"
import Intro from "./intro"
import Menubar from "./menubar"
import Projects from "./projects"
import Resume from "./resume"


const IndexPage = () => {
  return (
    <main>
      <Menubar />
      <Intro />
      <About />
      <Projects />
      <Resume />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
   </main>
  )
}

export default IndexPage

export const Head = () => <title>Arden Choi</title>

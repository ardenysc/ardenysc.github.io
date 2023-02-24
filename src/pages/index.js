import * as React from "react"
import About from "./about"
import Contact from "./contact"
import Footer from "./footer"
import Header from "./header"
import Intro from "./intro"
import Portfolio from "./portfolio"
import Resume from "./resume"

const IndexPage = () => {
  return (
    // <main style={pageStyles}>
    <main>
      <Header />
      <Intro />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
      {/* <!-- Java Script================================================== -->  */}
      <script src="js/jquery-2.1.3.min.js"></script>
      <script src="js/plugins.js"></script>
      <script src="js/main.js"></script>
   </main>
  )
}

export default IndexPage

export const Head = () => <title>Arden Choi</title>

import * as React from "react"
// import { Link } from "gatsby"
// import { Helmet } from "react-helmet"
// import { withPrefix } from "gatsby"
import About from "./about"
import Contact from "./contact"
import Footer from "./footer"
import Intro from "./intro"
import Menubar from "./menubar"
// import Navbar from "./navbar"
import Portfolio from "./portfolio"
import Resume from "./resume"


const IndexPage = () => {
  return (
    // <main style={pageStyles}>
    <main>
      <Menubar />
      <Intro />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
      {/* <Layout /> */}
      {/* <!-- Java Script================================================== -->  */}
      {/* <script src="js/jquery-2.1.3.min.js"></script>
      <script src="js/plugins.js"></script>
      <script src="js/main.js"></script> */}
      {/* <Helmet>
        <script src={withPrefix('../../static/js/main.js')} />
        <script src={withPrefix('../../static/js/plugins.js')}  />
        <script src={withPrefix('../../static/js/jquery-2.1.3.min.js')}  />
      </Helmet> */}
   </main>
  )
}

export default IndexPage

export const Head = () => <title>Arden Choi</title>

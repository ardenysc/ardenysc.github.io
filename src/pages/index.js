import * as React from "react"
import About from "./about"
import Contact from "./contact"
import Contactcopy from "./contactcopy"
import Footer from "./footer"
import Intro from "./intro"
import Menubar from "./menubar"
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
      <Contactcopy />
      {/* <Contact /> */}
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

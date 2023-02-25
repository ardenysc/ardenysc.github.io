import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
import '../src/js/main';
const Layout = ({ children }) => (
  <>
    <Header />
    <SEO title="Demo" />
    <Footer />
    <Helmet>
        <script src={withPrefix('../src/js/main')} type="text/javascript" />
        <script src={withPrefix('../src/js/plugins.js')} type="text/javascript" />
        {/* <script src={withPrefix('../../scripts/jquery.scrollex.min.js')} type="text/javascript" />
        <script src={withPrefix('../../scripts/jquery.scrolly.min.js')} type="text/javascript" />
        <script src={withPrefix('../../scripts/browser.min.js')} type="text/javascript" />
        <script src={withPrefix('../../scripts/breakpoints.min.js')} type="text/javascript" />
        <script src={withPrefix('../../scripts/util.js')} type="text/javascript" />
        <script src={withPrefix('../../scripts/main.js')} type="text/javascript" /> */}
    </Helmet>
  </>
)
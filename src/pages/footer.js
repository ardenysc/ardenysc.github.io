import React, { Fragment } from 'react';
import '../base.css';
import '../main.css';
import '../fonts.css';
import '../vendor.css';

function Footer() {
    return <Fragment>
        {/* <!-- footer
   ================================================== --> */}
   <footer>
     	<div className="row">

     		<div className="col-six tab-full pull-right social">

     			<ul className="footer-social">        
			      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
			      <li><a href="#"><i className="fa fa-github"></i></a></li>
			      <li><a href="#"><i className="fa fa-envelope"></i></a></li>
			   </ul> 
	        </div>

			<div className="col-six tab-full">
				<div className="copyright">
						<span>© Copyright Kards 2016.</span> 
						<span>Design by <a href="http://www.styleshout.com/">styleshout</a></span>         	
				</div>		                  
			</div>

			<div id="go-top">
				<a className="smoothscroll" title="Back to Top" href="#top"><i className="fa fa-long-arrow-up"></i></a>
			</div>
      	</div> 
        {/* <!-- /row -->     	 */}
    </footer>  

    </Fragment>
}

export default Footer;
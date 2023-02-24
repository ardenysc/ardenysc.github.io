import React, { Fragment } from 'react';
import '../base.css';
import '../main.css';
import '../fonts.css';
import '../vendor.css';

function Intro() {
    return <Fragment>
        	{/* <!-- intro section
   ================================================== --> */}
   <section id="intro">   

<div className="intro-overlay"></div>	

<div className="intro-content">
    <div className="row">

        <div className="col-twelve">

            <h5>Hello,</h5>
            <h1>I'm Arden Choi.</h1>

            <p className="intro-position">
                <span>Computer Science student @ UBC</span>
                <span>Photo by SpaceX</span> 
            </p>

            <a className="button stroke smoothscroll" href="#about" title="">More About Me</a>

        </div>  
        
    </div>   		 		
</div> 
{/* <!-- /intro-content -->  */}

<ul className="intro-social">        
  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
  <li><a href="#"><i className="fa fa-behance"></i></a></li>
  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
  <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
  <li><a href="#"><i className="fa fa-instagram"></i></a></li>
</ul> 
{/* <!-- /intro-social -->      	 */}

</section> 
{/* <!-- /intro --> */}
    </Fragment>
}

export default Intro;
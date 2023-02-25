import React, { Fragment } from 'react';
import { useState } from 'react';
import '../base.css';
import '../main.css';
import '../fonts.css';
import '../vendor.css';


function Menubar() {
	const [toggleClicked, setToggleClicked] = useState(false);
	const [itemClicked, setItemClicked] = useState(false);

	let inputStyle = {
		display: "none"
	  };
	if(toggleClicked == true && itemClicked == false) {
		inputStyle = {
		  display:"block"
		}
	}
	

    return <Fragment>
        
	{/* <!-- header 
   ================================================== --> */}
   <header>   	
   	<div className="row">

   		<div className="top-bar">
   			<a className={toggleClicked ? "menu-toggle is-clicked" : "menu-toggle"} onClick={() => {setToggleClicked(!toggleClicked); setItemClicked(false)}}><span>Menu</span></a>

		   	<nav id="main-nav-wrap">
				<ul className="main-navigation" style={inputStyle} onClick={() => {setItemClicked(!itemClicked); setToggleClicked(!toggleClicked)}}>
					<li><a className="smoothscroll"  href="#intro" title="">Home</a></li>
					<li><a className="smoothscroll"  href="#about" title="">About</a></li>
					<li><a className="smoothscroll"  href="#resume" title="">Resume</a></li>
					<li><a className="smoothscroll"  href="#portfolio" title="">Projects</a></li>					
					<li><a className="smoothscroll"  href="#contact" title="">Contact</a></li>				
				</ul>
			</nav>    		
   		</div> 
        {/* <!-- /top-bar -->  */}
   	</div> 
    {/* <!-- /row --> 		 */}
   </header> 
   {/* <!-- /header --> */}
   </Fragment>
}

export default Menubar;
// import React, { Fragment } from 'react';
// import '../base.css';
// import '../main.css';
// import '../fonts.css';
// import '../vendor.css';
// import $ from 'jquery';

// function Header() {
// 		/*-----------------------------------------------------*/
//   	/* Navigation Menu
//    ------------------------------------------------------ */  
//     var toggleButton = $('.menu-toggle');
//     var nav = $('.main-navigation');

//    // toggle button
//     toggleButton.on('click', function(e) {

// 		e.preventDefault();
// 		toggleButton.toggleClass('is-clicked');
// 		nav.slideToggle();

// 	});

//    // nav items
//   	nav.find('li a').on("click", function() {   

// 		// update the toggle button 		
// 		toggleButton.toggleClass('is-clicked'); 
// 		// fadeout the navigation panel
// 		nav.fadeOut();   		
   	     
//   	});

//     return <Fragment>
        
// 	{/* <!-- header 
//    ================================================== --> */}
//    <header>   	
//    	<div className="row">

//    		<div className="top-bar">
//    			<a className="menu-toggle" href="#"><span>Menu</span></a>

// 		   	<nav id="main-nav-wrap">
// 				<ul className="main-navigation">
// 					<li className="current"><a className="smoothscroll"  href="#intro" title="">Home</a></li>
// 					<li><a className="smoothscroll"  href="#about" title="">About</a></li>
// 					<li><a className="smoothscroll"  href="#resume" title="">Resume</a></li>
// 					<li><a className="smoothscroll"  href="#portfolio" title="">Portfolio</a></li>					
// 					<li><a className="smoothscroll"  href="#contact" title="">Contact</a></li>				
// 				</ul>
// 			</nav>    		
//    		</div> 
//         {/* <!-- /top-bar -->  */}
//    	</div> 
//     {/* <!-- /row --> 		 */}
//    </header> 
//    {/* <!-- /header --> */}
//    </Fragment>
// }

// export default Header;
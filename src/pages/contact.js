import React, { Fragment } from 'react';
import '../base.css';
import '../main.css';
import '../fonts.css';
import '../vendor.css';
import $ from 'jquery';


  	/*---------------------------------------------------- */
	/*	contact form
	------------------------------------------------------ */

	/* local validation */
	// $('#contactForm').validate({

	// 	/* submit via ajax */
	// 	submitHandler: function(form) {

	// 		var sLoader = $('#submit-loader');

	// 		$.ajax({      	

	// 	      type: "POST",
	// 	      url: "inc/sendEmail.php",
	// 	      data: $(form).serialize(),
	// 	      beforeSend: function() { 

	// 	      	sLoader.fadeIn(); 

	// 	      },
	// 	      success: function(msg) {

	//             // Message was sent
	//             if (msg == 'OK') {
	//             	sLoader.fadeOut(); 
	//                $('#message-warning').hide();
	//                $('#contactForm').fadeOut();
	//                $('#message-success').fadeIn();   
	//             }
	//             // There was an error
	//             else {
	//             	sLoader.fadeOut(); 
	//                $('#message-warning').html(msg);
	// 	            $('#message-warning').fadeIn();
	//             }

	// 	      },
	// 	      error: function() {

	// 	      	sLoader.fadeOut(); 
	// 	      	$('#message-warning').html("Something went wrong. Please try again.");
	// 	         $('#message-warning').fadeIn();

	// 	      }

	//       });     		
  	// 	}

	// });


function Contact() {
    return <Fragment>
            {/* <!-- contact
    ================================================== --> */}
        <section id="contact">

            <div className="row section-intro">
                <div className="col-twelve">

                    <h5>Contact</h5>
                    <h1>I'd Love To Hear From You.</h1>

                    <p className="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>

                </div> 
            </div> 
            {/* <!-- /section-intro --> */}

            <div className="row contact-form">

                <div className="col-twelve">

                    {/* <!-- form --> */}
                    <form name="contactForm" id="contactForm" method="post" action="">
                        <fieldset>

                        <div className="form-field">
                                    <input name="contactName" type="text" id="contactName" placeholder="Name" value="" minlength="2" required=""/>
                        </div>
                        <div className="form-field">
                                <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" value="" required=""/>
                        </div>
                        <div className="form-field">
                                    <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value=""/>
                        </div>                       
                        <div className="form-field">
                                <textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50" required=""></textarea>
                        </div>                      
                        <div className="form-field">
                            <button className="submitform">Submit</button>
                            <div id="submit-loader">
                                <div className="text-loader">Sending...</div>                             
                                    <div className="s-loader">
                                            <div className="bounce1"></div>
                                            <div className="bounce2"></div>
                                            <div className="bounce3"></div>
                                    </div>
                            </div>
                        </div>

                        </fieldset>
                    </form> 
                    {/* <!-- Form End --> */}

                    {/* <!-- contact-warning --> */}
                    <div id="message-warning">            	
                    </div>            
                    {/* <!-- contact-success --> */}
                    <div id="message-success">
                    <i className="fa fa-check"></i>Your message was sent, thank you!<br/>
                    </div>

                </div> 
                {/* <!-- /col-twelve --> */}
            
            </div> 
            {/* <!-- /contact-form --> */}

            <div className="row contact-info">

                <div className="col-six tab-full">

                    <div className="icon">
                        <i className="icon-pin"></i>
                    </div>

                    <h5>Where to find me</h5>

                    <p>
                    1600 Amphitheatre Parkway<br/>
                    Mountain View, CA<br/>
                    94043 US
                    </p>

                </div>

                <div className="col-six tab-full collapse">

                    <div className="icon">
                        <i className="icon-mail"></i>
                    </div>

                    <h5>Email Me At</h5>

                    <p>someone@kardswebsite.com<br/>
                        info@kardswebsite.com			     
                    </p>

                </div>
            
            </div> 
            {/* <!-- /contact-info --> */}

        </section> 
    {/* <!-- /contact --> */}
    {/* <script src="js/jquery-2.1.3.min.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script> */}
    </Fragment>
}

export default Contact;
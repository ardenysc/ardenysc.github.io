import React, { Fragment } from 'react';
import '../base.css';
import '../main.css';
import '../fonts.css';
import '../vendor.css';

function Resume() {
    return <Fragment>

   {/* <!-- resume Section================================================== --> */}
	<section id="resume" className="white-section">

        <div className="row section-intro">
            <div className="col-twelve">

                <h5>Resume</h5>
                <h1>More of my credentials.</h1>

                <p className="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>

            </div>   		
        </div> 
        {/* <!-- /section-intro-->  */}

        <div className="row resume-timeline">

            <div className="col-twelve resume-header">

                <h2>Work Experience</h2>

            </div> 
            {/* <!-- /resume-header --> */}

            <div className="col-twelve">

                <div className="timeline-wrap">

                    <div className="timeline-block">

                        <div className="timeline-ico">
                            <i className="fa fa-briefcase"></i>
                        </div>

                        <div className="timeline-header">
                            <h3>UI Designer</h3>
                            <p>July 2015 - Present</p>
                        </div>

                        <div className="timeline-content">
                            <h4>Awesome Studio</h4>
                            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                        </div>

                    </div> 
                    {/* <!-- /timeline-block --> */}

                </div> 
                {/* <!-- /timeline-wrap -->   			 */}

            </div> 
            {/* <!-- /col-twelve --> */}
        
        </div> 
        {/* <!-- /resume-timeline --> */}

        <div className="row resume-timeline">

            <div className="col-twelve resume-header">

                <h2>Education</h2>

            </div> 
            {/* <!-- /resume-header --> */}

            <div className="col-twelve">

                <div className="timeline-wrap">

                    <div className="timeline-block">

                        <div className="timeline-ico">
                            <i className="fa fa-graduation-cap"></i>
                        </div>

                        <div className="timeline-header">
                            <h3>Master Degree</h3>
                            <p>July 2015 - Present</p>
                        </div>

                        <div className="timeline-content">
                            <h4>University of Life</h4>
                            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                        </div>

                    </div> 
                    {/* <!-- /timeline-block --> */}

                    <div className="timeline-block">

                        <div className="timeline-ico">
                            <i className="fa fa-graduation-cap"></i>
                        </div>

                        <div className="timeline-header">
                            <h3>Bachelor Degree</h3>
                            <p>July 2014 - June 2015</p>
                        </div>

                        <div className="timeline-content">
                            <h4>State Design University</h4>
                            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.</p>
                        </div>

                    </div> 
                    {/* <!-- /timeline-block --> */}

                </div> 
                {/* <!-- /timeline-wrap -->   			 */}

            </div> 
            {/* <!-- /col-twelve --> */}
        
        </div> 
        {/* <!-- /resume-timeline --> */}

    </section> 
    {/* <!-- /features --> */}
    </Fragment>
}

export default Resume;
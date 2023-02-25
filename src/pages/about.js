import React, { Fragment } from 'react';
import '../base.css';
import '../main.css';
import '../fonts.css';
import '../vendor.css';
import profile from '../images/profile-pic.jpg';
// import '../profile-pic.jpg';

function About() {
    return <Fragment>
    {/* <!-- about section================================================== --> */}
    <section id="about">  

        <div className="row section-intro">
            <div className="col-twelve">

                <h5>About</h5>
                <h1>Let me introduce myself.</h1>

                <div className="intro-info">

                    <img src={profile} alt="Profile Picture"/>

                    <p className="lead">Lorem ipsum Exercitation culpa qui dolor consequat exercitation fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure sunt id pariatur Duis laboris amet exercitation veniam labore consectetur ea id quis eiusmod.</p>
                </div>   			

            </div>   		
        </div> 
        {/* <!-- /section-intro --> */}

        <div className="row about-content">

            <div className="col-six tab-full">

                <h3>Profile</h3>
                <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>

                <ul className="info-list">
                    <li>
                        <strong>Fullname:</strong>
                        <span>Y.S. Arden Choi</span>
                    </li>
                    <li>
                        <strong>Occupation:</strong>
                        <span>CS student @ UBC</span>
                    </li>
                    <li>
                        <strong>Email:</strong>
                        <span>ayschoi@student.ubc.ca</span>
                    </li>

                </ul> 
            {/* <!-- /info-list --> */}

            </div>

            <div className="col-six tab-full">

                <h3>Skills</h3>
                <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>

                <ul className="skill-bars">
                    <li>
                        <div className="progress percent90"><span>90%</span></div>
                        <strong>Python</strong>
                    </li>
                    <li>
                        <div className="progress percent85"><span>85%</span></div>
                        <strong>Java</strong>
                    </li>
                    <li>
                        <div className="progress percent70"><span>70%</span></div>
                        <strong>JavaScript</strong>
                    </li>
                    <li>
                        <div className="progress percent95"><span>95%</span></div>
                        <strong>HTML/CSS</strong>
                    </li>

                </ul> 
                {/* <!-- /skill-bars -->		 */}

            </div>

        </div>

        <div className="row button-section">
            <div className="col-twelve">
                <a href="#contact" title="Reach Out" className="button stroke smoothscroll">Reach Out</a>
                <a href="#" title="Download Resume" className="button button-primary">Download Resume</a>
            </div>   		
        </div>

    </section> 
    {/* <!-- /process-->     */}
    </Fragment>
}
export default About;
import React, { Fragment } from 'react';
import { useState }  from "react"
import axios from "axios";
import '../base.css';
import '../main.css';
import '../fonts.css';
import '../vendor.css';

function Contactcopy() {

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
      });
      const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
          form.reset();
        }
      };
      const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://getform.io/f/0b793fee-236d-4207-b5e5-60ec8c1680e6",
          data: new FormData(form)
        })
          .then(r => {
            handleServerResponse(true, "Thanks!", form);
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
          });
      };

    return <Fragment>
        <section id="contact">
        <div className="row section-intro">
            <div className="col-twelve">

                <h5>Contact</h5>
                <h1>I'd Love To Hear From You.</h1>

                <p className="lead">Feel free to send me a message if you have any questions, comments,<br/> or just want to say hi.</p>

            </div> 
        </div> 
            {/* <!-- /section-intro --> */}


        <div className="row contact-form">

            <div className="col-twelve">
                <form onSubmit={handleOnSubmit}>
                    {/* <div className="form-group">
                        <label for="exampleInputEmail1" required="required">Email address</label>
                        <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div> 
                    <div className="form-group">
                        <label for="exampleInputName">Name</label>
                        <input type="text" name="name" className="form-control" id="exampleInputName" placeholder="Enter your name" required="required"/>
                    </div> */}
                    <div className="form-field">
                        <input type="email" name="email" placeholder="Email" required/>
                    </div>
                    <div className="form-field">
                        <input type="text" name="name" placeholder="Name" required/>
                    </div>
                    <div className="form-field">
                        <input type="text" name="message" placeholder="Message" required/>
                    </div>
                    <div className="form-field">
                        <button type="submit" className="submitform" disabled={serverState.submitting}>
                            Submit
                        </button>
                        {serverState.status && (
                        <p className={!serverState.status.ok ? "errorMsg" : ""}>
                        {serverState.status.msg}
                        </p>
                    )}
                    </div>
                </form>
            </div>
        </div>
        <div className="row contact-info">

<div className="col-six tab-full">

    <div className="icon">
        <i className="icon-pin"></i>
    </div>

    <h5>Where to find me</h5>

    <p>
    2366 Main Mall<br/>
    Vancouver, BC<br/>
    </p>

</div>

<div className="col-six tab-full collapse">

    <div className="icon">
        <i className="icon-mail"></i>
    </div>

    <h5>Email Me At</h5>

    <p>ayschoi@student.ubc.ca<br/>			     
    </p>

</div>

</div> 
{/* <!-- /contact-info --> */}
        </section>
    </Fragment>
}

export default Contactcopy;
import React from "react";

const ContactForm = () => {
  return (
    <div className="col-md-6 col-12">
      <div className="contact-card card shadow mt-4 mb-5">
        <div className="card-header text-center">Send Me a Message</div>
        <div className="card-body">
          <form
            action="https://formspree.io/mdoylanr"
            method="POST"
            target="_blank"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="name"
              />
              {/* <small id="help" className="form-text text-muted">
                Enter your name.
              </small> */}
            </div>
            <label htmlFor="email">Email</label>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="your.email@example.com"
                name="_replyto"
              />
              {/* <small id="email-help" className="form-text text-muted">
                Enter your email.
              </small> */}
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Message</label>
              <textarea
                placeholder="Write your message here."
                className="form-control"
                id="text-area"
                type="text"
                rows="3"
                name="message"
              />
            </div>
            <div className="form-group">
              <input className="btn btn-primary" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

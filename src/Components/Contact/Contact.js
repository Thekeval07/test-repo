import React from 'react'
import supportImg from '../../assets/images/support.png';
import {  Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
     <div className="container">
  <nav
    aria-label="breadcrumb"
    data-aos="fade-up"
    data-aos-duration={1200}
    className="aos-init aos-animate"
  >
    <ol className="breadcrumb mt-5">
      <li className="breadcrumb-item">
       
        <Link to="/" className="fas fa-home mr-2"> Home</Link>
          
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        Contact us
      </li>
    </ol>
  </nav>
  <div
    className="header mt-3 aos-init aos-animate"
    data-aos="fade-up"
    data-aos-duration={1500}
  >
    <div className="message"></div>
    <h4>
      <b>Contact us</b>
    </h4>
    <hr className="header-hr" />
    <div className="row">
      <div className="col-lg-4">
        <div className="about-img text-center">
        <img src={supportImg} alt="about tech blogs" />
        </div>
      </div>
      <div className="col-lg-8">
        <div className="contact-part">
          <div className="reply-heading">
            <h5>
              <b>
                We love to communicate with our fans!
                <br />
                <br />
                Drop the message for us -
              </b>
            </h5>
          </div>
          <br />
          <div className="contact-form">
            <form method="POST">
              <input
                type="hidden"
                name="csrfmiddlewaretoken"
                defaultValue="70EJu3OskDuglBO1KeIUeWsQxkC9MCxgx22MSDIs6Oaf5yYwqcFJduRf9JL3tHgi"
              />
              <div className="form-group">
                <label htmlFor="name" className="form-control-label mb-3">
                  Name :
                </label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
                  required=""
                />
              </div>
              <div className="form-gorup mt-4">
                <label htmlFor="email" className="form-control-label mb-3">
                  Email Address :
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  required=""
                />
              </div>
              <div className="from-group mt-4">
                <label htmlFor="message " className="form-control-label mb-3">
                  Message :
                </label>
                <br />
                <textarea
                  rows={7}
                  name="message"
                  id="message"
                  className="form-control"
                  required=""
                  defaultValue={""}
                />
              </div>
              <br />
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
              <br />
              <div className="about-text mt-4">
                <h5>Thank you for your support! ❤️</h5>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Contact

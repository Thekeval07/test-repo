import React from 'react'
import { Link } from 'react-router-dom';
import teamImg from '../../assets/images/team.png';
const About = () => {
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
            <Link to="/" className="fas fa-home mr-3"> Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              About us
            </li>
          </ol>
        </nav>
        <div
          className="header mt-3 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration={1500}
        >
          <h4>
            <b>About us page</b>
          </h4>
          <hr className="header-hr" />
          <br />
          <div className="row">
            <div className="col-lg-4">
              <div className="about-img text-center">
              <img src={teamImg} alt="about tech blogs" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="about-text">
                <h3>Who we are?</h3>
                <hr />
                <p>
                  We empower people with web development literacy, so they can read
                  beginner friendly blogs about web development technologies, ask
                  better questions and make better sense of the world. This passion
                  powers our work and our community service.
                </p>
                <br />
                <h5>Thank you for your support! ❤️</h5>
                <br />
              </div>
            </div>
          </div>
          <hr />
          <br />
          <div class="founder">
		<div class="founder-head text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">
			<h4 class="mt-3"><b>Founder of Tech Blogs</b></h4>
			<hr class="body-hr" /><i class="fa fa-star fa-lg"></i><hr class="body-hr" />
		</div>
		
		<div class="founder-det aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">
			<h4><b>Keval Prajapati</b></h4>
			<p>Hello guys, I'm Nikhil Sutariya founder of Tech Blogs. Hope you are good and learn many things from Tech Blogs. Professionally I'm a React.js developer. When I started to dive into web development I face many problems at the beginning. Later on daily practice and actively learning makes me an experienced developer. Once I was a beginner, I was stuck at stages to create web projects, so I decided to make a website that helps beginners and who want to start, learn and ready deep diving into web development.<br /></p><h5>Keep supporting! ❤️</h5>
	
			<div class="details">
				<h5 class="mb-3">Contact me on :</h5>
				
				
				
			</div>
		</div>
	  </div>
        </div>
      </div>
    </div>
  )
}

export default About

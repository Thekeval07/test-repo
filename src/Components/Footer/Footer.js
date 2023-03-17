import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer>
		<div className="container-fluid mt-5">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 col-md-7 col-sm-12 col-12">
						<div className="footer-pt-1 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">
							<h5><b>About Tech Blogs</b></h5>
							<p>We empower people with web development literacy, so they can read beginner friendly blogs about web development technologies, ask better questions and make better sense of the world. This passion powers our work and our community service.</p>
							<h5>Thank you for your support! ❤️</h5>
						</div>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-12 col-12">
						<div className="footer-pt-2 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">
							<div className="site-pages">
								<h5><b>Site pages</b></h5>
								<ul>
                                    <Link to="/about"> About us</Link>
                                    <Link to="/contact"> Contact</Link>
									
								</ul>
							</div>
							<div className="follow">
								<h5><b>Follow us on :</b></h5>
								<i className="fab fa-facebook-square"></i>
								<i className="fab fa-instagram"></i>
								<i className="fab fa-twitter"></i>
								<i className="fab fa-pinterest"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<p>Copyright © 2023 | Tech blogs</p>
			</div>
		</div>
	</footer>
    </div>
  )
}

export default Footer

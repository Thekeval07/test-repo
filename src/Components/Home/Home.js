import React from 'react'
import reactImg from '../../assets/images/react.jpeg';
import {  Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="container">

        <div className="container header mt-15">
          <h4 data-aos="fade-up" data-aos-duration="1000" className="aos-init aos-animate"><b>Welcome to Tech Blogs</b></h4>
          <div className="info-part aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            <p>Hello guys, welcome to <b>Tech blogs.</b> We love to help beginners to learn web development's basic stuff simply and efficiently.</p>
          </div>
          <div className="categories mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            <h6 className="me-3">Categories&nbsp; :&nbsp;</h6>

            <div className="category-link">
              <Link path="/" className="cat-link"> React</Link>
            </div>



          </div>
          <div className="first-part aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            <h4><b>Latest blogs</b></h4>


            <div className="post mt-3">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                  <img src={reactImg} alt="how-to-create-app-in-django" />
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                  
                    <h5><b>let's learn about React</b></h5>
                  
                  <h5>What is React.js?</h5>

                  <p>ReactJS is an open-source JavaScript library that is widely used for building user interfaces for web and mobile applications. It was developed by Facebook and is now maintained by a community of developers.</p>
                  <div className="post-read-part mt-3">
                    <button className="btn btn-primary">Read more..</button>
                    <p className="post-date">Nov. 10, 2022</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="post mt-3">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                  <img src={reactImg} alt="how-to-create-project-in-django" />
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12 col-12">

                  <h5><b>How to create React.js Project</b></h5>

                  <h5>some steps to create react project</h5>

                  <p>
                    1. Install Node.js and npm <br />
                    2. Install Create React App: <br />
                    #  npm install -g create-react-app <br />
                    3. Create a new React project:  <br />
                    #  npx create-react-app my-app <br />
                    4. Run the React app: <br />
                    #  cd my-app <br />
                    npm start <br />
                  </p>
                  <div className="post-read-part mt-3">
                    <button className="btn btn-primary">Read more..</button>
                    <p className="post-date">March. 17, 2023</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home

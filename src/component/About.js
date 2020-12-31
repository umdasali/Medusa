import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  return (
    <div className="landing-card" id="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="about-box">
              <h1 className="display-4" data-aos="fade-up">About us</h1>
              <p className="lead" data-aos="fade-up">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                totam pariatur ex doloribus laboriosam nesciunt numquam soluta,
                quod cum praesentium eius similique ratione, veritatis nulla
                odio fugiat? Deleniti, dolore reprehenderit!
              </p>
              <a href="#" className="btn-white" data-aos="fade-up">
                Know More About Us
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img data-aos="fade-in"
              src="https://pngimage.net/wp-content/uploads/2018/06/marble-statue-png-5.png"
              alt="pngimage"
              className="img-about"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

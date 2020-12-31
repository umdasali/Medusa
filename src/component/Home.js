import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Slidertext from "./Slidertext";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="landing-card">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Navbar />
          </div>
          <div className="col-md-4">
            <div className="text-box">
              <h2 data-aos="fade-up">The Statue Company</h2>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora deserunt saepe labore doloribus error eveniet deleniti
                voluptatibus laborum.
              </p>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <Slider />
          </div>
          <div className="col-md-2 text-center">
            <Slidertext/>
          </div>
          <div className="col-sm-12 col-md-1 text-center">
            <div className="row">
              <div className="col-4 col-sm-4 col-md-12  mt-4 mb-4">
                <i class="fa fa-facebook mt-4 mb-4" aria-hidden="true" data-aos="fade-right"></i>
              </div>
              <div className="col-4 col-sm-4 col-md-12  mt-4 mb-4">
                <i class="fa fa-twitter mt-4 mb-4" aria-hidden="true" data-aos="fade-right"></i>
              </div>
              <div className="col-4 col-sm-4 col-md-12  mt-4 mb-4">
                <i class="fa fa-instagram mt-4 mb-4" aria-hidden="true" data-aos="fade-right"></i>
              </div>
            </div>
          </div>
          <div className=" col-md-6 box-white mt-4">
            <p data-aos="fade-in">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              ducimus deserunt amet quia molestiae modi alias saepe nostrum
              assumenda autem iusto consequatur ipsa perspiciatis.
            </p>
          </div>
          <div className="col-md-6 mt-4">
            <figure>
              <blockquote class="blockquote">
                <p data-aos="fade-in">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
              </blockquote>
              <figcaption class="blockquote-footer text-white">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Clints() {
  return (
    <div className="landing-card" id="client">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center mt-4 mb-4">
            <h2 className="display-4" data-aos="fade-up">Clients</h2>
          </div>
          <div className="col-md-4">
            <div class="card text-white bg-dark mb-3" data-aos="fade-up">
              <img
                src="https://img.freepik.com/free-photo/mand-holding-cup_1258-340.jpg?size=626&ext=jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Peter parker</h5>
                <p class="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  nisi adipisci perspiciatis distinctio optio nihil?
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card text-white bg-dark mb-3" data-aos="fade-down">
              <img
                src="https://umigolankatours.com/assets/images/mbr-3-626x417.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">lylia</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat dolor omnis non ut quas perspiciatis!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card text-white bg-dark mb-3" data-aos="fade-up">
              <img
                src="https://www.childinthecity.org/wp-content/uploads/2019/04/JL-SvenDeVisscher-03_web-626x417.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">John doe</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti inventore animi esse suscipit quam harum?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clints;

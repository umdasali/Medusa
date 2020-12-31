import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="landing-card" id="contact">
      <div className="contaier-fluid">
        <div className="row">
          <div className="col-md-4 mt-4 mb-4 p-4 ">
            <h2 className="text-center" data-aos="fade-up">The Statue Company</h2>
            <p className="text-left mt-4" data-aos="fade-up">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              error debitis fuga sit animi minima quae repellendus impedit?
              Molestias, commodi. Labore delectus ratione molestiae a?
            </p>
          </div>
          <div className="col-md-4 mt-4 mb-4 p-4 text-center">
            <h4 data-aos="fade-up">Follow me on...</h4>
            <ul className="list-group list-group-flush mt-4" >
              <li className="list-group-item" data-aos="fade-up">
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}>
                  <i class="fa fa-facebook" aria-hidden="true"></i> Facebook
                </a>
              </li>
              <li className="list-group-item" data-aos="fade-up">
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}>
                  <i class="fa fa-twitter" aria-hidden="true"></i> Twitter
                </a>
              </li>
              <li className="list-group-item" data-aos="fade-up">
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}>
                  <i class="fa fa-instagram" aria-hidden="true"></i> Instagram
                </a>
              </li>
              <li className="list-group-item" data-aos="fade-up">
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}>
                  <i class="fa fa-codepen" aria-hidden="true"></i> Codepen
                </a>
              </li>
              <li className="list-group-item" data-aos="fade-up">
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}>
                  <i class="fa fa-github" aria-hidden="true"></i> Github
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mt-4 mb-4 p-4 text-center">
            <h4>Get In Touch</h4>
            <form>
              <input type="text" placeholder=" full name" />

              <input type="email" placeholder=" email" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="  type your message..."></textarea>
              <button className="submit">
                Send <i class="fa fa-paper-plane" aria-hidden="true"></i>
              </button>
            </form>
          </div>
          <div className="col-12 mt-4 mb-4 text-center">
            <p>md ali &copy; all right reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

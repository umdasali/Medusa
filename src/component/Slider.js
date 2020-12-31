import React from "react";
import medusa from "../images/medusa.png";
import sta from "../images/sta.png";

function Slider() {
  return (

    <React.Fragment>
      <div className='slider-box'>
        <div
          id='carouselExampleFade'
          className='carousel slide carousel-fade'
          data-bs-ride='carousel'>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src={medusa} className=' d-block w-100 ' alt='medusa' />
            </div>
            <div className='carousel-item'>
              <img src={sta} className=' d-block w-100 ' alt='sta' />
            </div>
          </div>
          <a
            className='carousel-control-prev'
            href='#carouselExampleFade'
            role='button'
            data-bs-slide='prev'>
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
          </a>
          <a
            className='carousel-control-next'
            href='#carouselExampleFade'
            role='button'
            data-bs-slide='next'>
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Slider;

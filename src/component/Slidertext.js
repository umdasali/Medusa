import React from "react";

function Slidertext() {
  return (
    <React.Fragment>
        <div className="slider-text">
        <div
        id='carouselExampleSlidesOnly'
        className='carousel slide'
        data-bs-ride='carousel'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <h2 class='d-block w-100'>Medusa</h2>
          </div>
          <div className='carousel-item'>
            <h2 class='d-block w-100'>Statue</h2>
          </div>
        </div>
      </div>
        </div>
    </React.Fragment>
  );
}

export default Slidertext;

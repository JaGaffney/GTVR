import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    return (
      <div className="SimpleSlider-carousel">
        <Slider {...settings}>
          <div>
            <h3>"Commodo qui labore laborum do officia aliquip dolor magna reprehenderit nulla nostrud in. 
                Commodo qui labore laborum do officia aliquip dolor magna reprehenderit nulla nostrud in.
                Commodo qui labore laborum do officia aliquip dolor magna reprehenderit nulla nostrud in.
                Commodo qui labore laborum do officia aliquip dolor magna reprehenderit nulla nostrud in."
            </h3>
            <p>Jon Snow</p>
          </div>
          <div>
            <h3>"Commodo qui labore laborum do officia aliquip dolor magna reprehenderit nulla nostrud in. 
                     Commodo qui labore laborum do officia aliquip dolor magna reprehenderit nulla nostrud in."</h3>
            <p>Jon Snow</p>
          </div>
          <div>
            <h3>"Commodo qui labore laborum do officia aliquip dolor magna reprehenderit nulla nostrud in."</h3>
            <p>Jon Snow</p>
          </div>
        </Slider>
      </div>
    );
  }
}
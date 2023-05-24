import React from "react";

import img from "./Assests/FMS1.jpg";
import Img from "../../../GDSC/msd-project/src/Shared/Img";

const Carousel = (props) => {
  return (
    <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Img src={img} className="d-block w-100" alt={"This is image1"} />
          </div>
          <div className="carousel-item">
            <Img src={img} className="d-block w-100" alt="This is image2" />
          </div>
          <div className="carousel-item">
            <Img src={img} className="d-block w-100" alt="This is image3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  );
};

export default Carousel;

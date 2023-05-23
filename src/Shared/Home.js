import React from "react";

import Img from "./Img";

const Home = (props) => {
  return (
    <React.Fragment>
      <h1>SecurIn</h1>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Img src="./Assests/FMS1.jpg" className="d-block w-100" alt={"This is image1"} />
          </div>
          <div class="carousel-item">
            <Img src="..." class="d-block w-100" alt="This is image2" />
          </div>
          <div class="carousel-item">
            <Img src="..." class="d-block w-100" alt="This is image3" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <p className="container w-75">
        SecurIn is a file management system where you can store your files on
        cloud. A file management system is used for file maintenance (or
        management) operations. It is is a type of software that manages data
        files in a computer system. A file management system has limited
        capabilities and is designed to manage individual or group files, such
        as special office documents and records. It may display report details,
        like owner, creation date, state of completion and similar features
        useful in an office environment. A file management system is also known
        as a file manager.
      </p>
    </React.Fragment>
  );
};

export default Home;

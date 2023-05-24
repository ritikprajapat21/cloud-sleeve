import React from "react";

import Carousel from "./Carousel";

const Home = (props) => {
  return (
    <React.Fragment>
      <Carousel />
      <h1 className="container ml-5">Cloud Binder</h1>
      <p className="container w-75">
        Cloud Binder is a file management system where you can store your files on
        cloud. A file management system is used for file maintenance (or
        management) operations. It is is a type of software that manages data
        files in a computer system. A file management system has limited
        capabilities and is designed to manage individual or group files, such
        as special office documents and records. It may display report details,
        like owner, creation date, state of completion and similar features
        useful in an office environment. A file management system is also known
        as a file manager.
      </p>
      <h1 className="container ml-5">How to use ?</h1>
      <p className="container w-75">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod fuga dolores est ullam, ea aperiam fugit minima dicta veniam asperiores suscipit ad tempore, voluptates cupiditate natus sunt odit similique hic laudantium cumque non magnam eius aliquid. Optio, veritatis consequatur? Nemo neque deserunt quibusdam dolore?
      </p>
    </React.Fragment>
  );
};

export default Home;

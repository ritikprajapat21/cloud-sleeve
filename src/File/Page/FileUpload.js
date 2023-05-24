import React from "react";
import { NavLink } from "react-router-dom";

const FileUpload = (props) => {
  if (!props.isLogin) {
    return (
      <div className="container">
        <h4>Please Login First....</h4>
        <p>
          <NavLink to="/login">Login</NavLink>
        </p>
      </div>
    );
  }

  const inputHandler = (event) => {
    props.inputHandler(event);
  };

  return (
    <div className="container mx-auto bg-white mt-5 form-control">
      <input
        type="text"
        className="mt-5 form-control d-block container w-25"
        placeholder="Enter file name"
        name="fileName"
        value={props.state.fileName}
        onChange={inputHandler}
      />
      <input type="file" className="my-4 form-control d-block container w-25" />
      <button className="button d-block container mx-auto w-25">Upload</button>
    </div>
  );
};

export default FileUpload;

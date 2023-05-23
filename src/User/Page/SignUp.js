import React from "react";
import { NavLink } from "react-router-dom";

const SignUp = (props) => {
  const inputHandler = (event) => {
    props.inputHandler(event);
  };
  return (
    <React.Fragment>
      <form className="container form-control mt-5">
        <h2 className="container text-center">Register Yourself</h2>
        <input
          className="form-control mx-auto w-50 my-3"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={props.state.name}
          onChange={inputHandler}
        />
        <input
          className="form-control mx-auto w-50 my-3"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={props.state.email}
          onChange={inputHandler}
        />
        <input
          className="form-control mx-auto w-50 my-3"
          type="text"
          name="phoneNumber"
          placeholder="Enter your phone number"
          value={props.state.phoneNumber}
          onChange={inputHandler}
        />
        <input
          className="form-control mx-auto w-50 my-3"
          type="text"
          name="userName"
          placeholder="Enter your user name"
          value={props.state.userName}
          onChange={inputHandler}
        />
        <input
          className="form-control mx-auto w-50 my-3"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={props.state.password}
          onChange={inputHandler}
        />
        <input
          className="form-control mx-auto w-50 my-3"
          type="password"
          name="rpassword"
          placeholder="Re-enter your password"
          value={props.state.rpassword}
          onChange={inputHandler}
        />
        <div className="text-center">
          <button className="button mx-auto w-50" onSubmit={props.addUser}>
            Register
          </button>
        </div>
        <footer className="text-center my-3">
          Already Registered? <NavLink to="/login">Login</NavLink>{" "}
        </footer>
      </form>
    </React.Fragment>
  );
};

export default SignUp;

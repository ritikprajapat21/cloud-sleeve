import React from "react";
import { NavLink } from "react-router-dom";

const Login = (props) => {
  const inputHandler = (event) => {
    props.inputHandler(event);
  };

  const loginHandler = (event) => {
    // props.verify();
    props.loginHandler(event);
  }
  return (
    <form className="form-control container mx-auto mt-5">
      <h2 className="container text-center">LogIn To FMS</h2>
      <input
        className="my-3 mx-auto form-control w-50"
        type="text"
        name="userName"
        placeholder="Enter your username"
        value={props.state.userName}
        onChange={inputHandler}
      />
      <input
        className="my-3 mx-auto form-control w-50"
        type="password"
        name="password"
        placeholder="Enter your password"
        value={props.state.password}
        onChange={inputHandler}
      />
      <div className="text-center">
      <button className="button mx-auto w-50" onClick={loginHandler}>
        Login
      </button>
      </div>
      <footer className="my-3 container text-center">
        <p>
          New User? <NavLink to="/signup">SignUp</NavLink>
        </p>
      </footer>
    </form>
  );
};

export default Login;

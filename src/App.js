import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import SignUp from "./User/Page/SignUp";
import Login from "./User/Page/Login";
import FileList from "./File/Page/FileList";
import FileUpload from "./File/Page/FileUpload";
import Navbar from "./Shared/Navbar";
import Home from "./Shared/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      name: "",
      email: "",
      phoneNumber: "",
      userName: "",
      password: "",
      rpassword: "",
      fileName: "",
    };
  }

  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  isLoginHandler = (event) => {
    event.preventDefault();
    this.setState({
      isLogin: true,
    });
  };

  logoutHandler = () => {
    this.setState({
      isLogin: false,
    });
  };

  fileList = [{ name: "xyz", desc: "StrictMode", date: "12/5/2020" }];

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Navbar isLogin={this.state.isLogin} logout={this.logoutHandler} />
          <Routes>

            <Route
              path="/signup"
              exact
              element={
                <SignUp
                  state={this.state}
                  setState={this.setState}
                  // addUser={this.addUser}
                  // show={this.show}
                  inputHandler={this.inputHandler}
                />
              }
            />

            <Route
              path="/login"
              exact
              element={
                <Login
                  inputHandler={this.inputHandler}
                  loginHandler={this.isLoginHandler}
                  state={this.state}
                />
              }
            />

            <Route
              path="/file-list"
              exact
              isLogin={this.state.isLogin}
              element={
                <FileList
                  isLogin={this.state.isLogin}
                  fileList={this.fileList}
                />
              }
            />

            <Route
              path="/file-upload"
              exact
              isLogin={this.state.isLogin}
              element={<FileUpload isLogin={this.state.isLogin} inputHandler={this.inputHandler} state={this.state} />}
            />

            <Route path="*" exact element={<Home />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;

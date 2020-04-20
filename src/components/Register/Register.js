import React, { Component } from "react";
import { Grid, Link } from "@material-ui/core";
import { RegisterWrap, RegisterHeader } from "./Register.styled";
import RegisterForm from "./RegisterForm";

class Register extends Component {
  render() {
    return (
      <RegisterWrap>
        <Grid container>
          <Grid item lg={6} className="registerImg">
            <h1>Join Community</h1>
          </Grid>
          <Grid item lg={6} className="registerDetails">
            <RegisterHeader>
              <h1>Become a Creator</h1>
              <p>
                Share your skills, Inspire students with your courses, Gain fans
                and become a makeup celebrity
              </p>
            </RegisterHeader>
            <RegisterForm />
            <p className="loginPage">
              Already have an account<Link to="">Login</Link>
            </p>
          </Grid>
        </Grid>
      </RegisterWrap>
    );
  }
}

export default Register;

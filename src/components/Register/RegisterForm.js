import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";
import { FormInput, FormInputLabel, FormSubmitButton } from "./Register.styled";

class RegisterForm extends Component {
  render() {
    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormInputLabel htmlFor="my-input">First Name</FormInputLabel>
            <FormInput required id="standard-required" />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormInputLabel htmlFor="my-input">Last Name</FormInputLabel>
            <FormInput required id="standard-required" />
          </Grid>
          <Grid item lg={12} sm={12} xs={12}>
            <FormInputLabel htmlFor="my-input">Email</FormInputLabel>
            <FormInput required id="standard-required" />
          </Grid>
          <Grid item lg={12} sm={12} xs={12}>
            <FormInputLabel htmlFor="my-input">
              Username <span>(only letters, numbers, and underscores)</span>
            </FormInputLabel>
            <FormInput required id="standard-required" />
          </Grid>
          <Grid item lg={12} sm={12} xs={12}>
            <FormInputLabel htmlFor="my-input">
              Password <span>(min. 6 char)</span>
            </FormInputLabel>
            <FormInput required id="standard-required" />
          </Grid>
          <Grid item lg={12} sm={12} xs={12}>
            <FormSubmitButton>Join The Community</FormSubmitButton>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default RegisterForm;

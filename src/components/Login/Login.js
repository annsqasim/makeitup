import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  FormInput,
  FormInputLabel,
  FormSubmitButton,
  ForgetPassword,
  SignupWrap,
  InputWrap,
  LoginWrap,
} from "./Login.styled";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    outline: "none",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    backgroundColor: "#fcf0f2",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: "4rem",
    borderRadius: 4,
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const { open, handleClose } = props;

  const handleEmailChange = (email) => {
    setemail(email.target.value);
  };

  const handlePasswordChange = (password) => {
    setpassword(password.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { loginAction } = props;

    const creds = {
      email: email,
      password: password,
    };
    loginAction(creds);
  };

  const body = (
    <LoginWrap style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Hey, Welcome</h2>
      <form onSubmit={handleFormSubmit}>
        <InputWrap>
          <FormInputLabel htmlFor="my-input">Email or Username</FormInputLabel>
          <FormInput required id="email" onChange={handleEmailChange} />
        </InputWrap>

        <InputWrap>
          <FormInputLabel htmlFor="my-input">Password</FormInputLabel>
          <FormInput
            required
            id="password"
            type="password"
            onChange={handlePasswordChange}
          />
        </InputWrap>

        <ForgetPassword to="/">Forget Password</ForgetPassword>
        <FormSubmitButton type="submit">Login</FormSubmitButton>
      </form>
      <SignupWrap>
        Don’t have an account? <a href="/">Join free</a>
      </SignupWrap>
    </LoginWrap>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
}

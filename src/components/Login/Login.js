import React from "react";
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
    width: 515,
    backgroundColor: "#fcf0f2",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: "4rem 1rem",
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const { open, handleClose } = props;

  const body = (
    <LoginWrap style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Hey, Welcome</h2>
      <InputWrap>
        <FormInputLabel htmlFor="my-input">Email or Username</FormInputLabel>
        <FormInput required id="standard-required" />
      </InputWrap>

      <InputWrap>
        <FormInputLabel htmlFor="my-input">Password</FormInputLabel>
        <FormInput required id="standard-required" />
      </InputWrap>

      <ForgetPassword to="/">Forget Password</ForgetPassword>
      <FormSubmitButton>Login</FormSubmitButton>
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

import styled from "styled-components";
import { TextField, Button, Link } from "@material-ui/core";

export const FormInputLabel = styled.label`
  font-family: MaisonNeue-Book;
  font-size: 16px;
  color: #000000;
  letter-spacing: -0.09px;
  margin-bottom: 0.5rem;
  display: block;

  span {
    color: #666666;
  }
`;
export const LoginWrap = styled.div`
  h2 {
    font-family: NoeDisplay-Medium;
    font-size: 46px;
    color: #000000;
    letter-spacing: -0.26px;
    margin: 3rem 0rem;
    text-align: center;
  }
`;

export const InputWrap = styled.div`
  margin: 2rem 0rem;
`;

export const FormInput = styled(TextField)`
  width: 100%;

  input {
    background: #fff;
    border: 1px solid #000;
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }
`;

export const FormSubmitButton = styled(Button)`
  background: #ff0283 !important;
  color: #fff !important;
  width: 100%;
  padding: 1rem !important;
  margin: 2rem 0rem !important;
`;

export const ForgetPassword = styled(Link)`
  display: block;
  font-family: MaisonNeue-Book;
  font-size: 14px;
  letter-spacing: 0;
  margin: 1rem 0rem;
  color: #ff0283 !important;
`;

export const SignupWrap = styled.div`
  text-align: center;
  margin: 1rem 0rem;
  a {
    color: #ff0283;
  }
`;

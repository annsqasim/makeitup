import styled from "styled-components";
import RegisterBg from "../../assets/img/RegisterImg.jpg";
import { TextField, Button } from "@material-ui/core";

export const RegisterWrap = styled.section`
  background: #fcf0f2;
  min-height: 100vh;
  display: flex;

  .registerImg {
    background-image: url(${RegisterBg});

    h1 {
      opacity: 0.65;
      font-family: MaisonNeue-Book;
      font-size: 400px;
      color: #ff0283;
      letter-spacing: -2.22px;
      text-align: center;
      line-height: 200px;
      display: none;
    }
  }

  .registerDetails {
    display: flex;
    flex: auto;
    flex-direction: column;
    justify-content: center;
  }

  .loginPage {
    text-align: center;
    margin: 2rem 0rem;

    a {
      color: #ff0283 !important;
      padding: 0rem 0.3rem;

      :hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

export const RegisterHeader = styled.div`
  background: #fcf0f2;
  padding: 0rem 7rem;

  h1 {
    font-family: NoeDisplay-Medium;
    font-size: 46px;
    color: #000000;
    letter-spacing: -0.26px;
    text-align: center;
    margin: 0px 0px 10px 0px;
  }

  p {
    font-family: MaisonNeue-Book;
    font-size: 18px;
    color: #000000;
    letter-spacing: 0;
    text-align: center;
    line-height: 32px;
  }
`;

export const RegisterForm = styled;

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
  margin: 1rem 0rem !important;
`;

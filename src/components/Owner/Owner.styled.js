import styled from "styled-components";
import { device } from "../../common/device";

export const OwnerWrap = styled.section`
  background: #fcf0f2;
`;

export const OwnerDetails = styled.div`
  padding: 4rem 0rem;
  text-align: center;

  img {
    background: #d8d8d8;
    max-width: 80px;
    border-radius: 50%;
  }

  p {
    font-family: MaisonNeue-Medium;
    font-size: 22px;
    color: #000000;
    letter-spacing: -0.12px;
    text-align: center;
  }

  .profile-btn {
    background: #ffffff;
    border: 1px solid #ff0283;
    border-radius: 2px;
    font-family: MaisonNeue-Medium;
    font-size: 16px;
    color: #000000;
    transition: all 0.3s ease-in;
    margin-right: 1rem;
    padding: 0.5rem 3rem;

    @media ${device.mobileS} {
      display: block;
      width: 100%;
      margin-right: 0px;
      margin-bottom: 1rem;
    }

    @media ${device.laptop} {
      display: initial;
      width: auto;
      margin-right: 1rem;
      margin-bottom: 0px;
    }

    @media ${device.laptopL} {
      display: initial;
      width: auto;
      margin-right: 1rem;
      margin-bottom: 0px;
    }

    &:hover {
      color: #ff0283;
      background: #ffffff;
    }
  }

  .contact-btn {
    background: #ff0283;
    border: 1px solid #ff0283;
    border-radius: 2px;
    font-family: MaisonNeue-Medium;
    font-size: 16px;
    color: #ffffff;
    transition: all 0.3s ease-in;
    padding: 0.5rem 6rem;

    @media ${device.mobileS} {
      display: block;
      width: 100%;
      margin-right: 0px;
      margin-bottom: 1rem;
    }

    @media ${device.laptop} {
      display: initial;
      width: auto;
      margin-right: 1rem;
      margin-bottom: 0px;
    }

    @media ${device.laptopL} {
      display: initial;
      width: auto;
      margin-right: 1rem;
      margin-bottom: 0px;
    }

    &:hover {
      color: #ff0283;
      background: #ffffff;
    }
  }
`;

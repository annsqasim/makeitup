import styled from "styled-components";
import { AppBar, TextField, Button } from "@material-ui/core";
import { device } from "../../common/device";

export const NavBar = styled(AppBar)`
  background-color: #fff !important;
  color: #000 !important;
  padding: 0.5rem 0rem;
`;

export const HeroSection = styled.section`
  padding: 4rem 0rem;
  color: #fff;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const HeroHeading = styled.h1`
  font-family: NoeDisplay-Medium;
  font-size: 60px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 68px;

  @media ${device.mobileS} {
    font-size: 30px;
    line-height: 1.1;
  }

  @media ${device.laptop} {
    font-size: 60px;
    line-height: 1.1;
  }

  @media ${device.laptopL} {
    font-size: 60px;
    line-height: 1.1;
  }
`;

export const SearchField = styled(TextField)`
  background: #ffffff;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-family: MaisonNeue-Book;
  font-size: 16px;
  color: #000000;
  letter-spacing: -0.09px;
  border: 2px solid #000000;
`;

export const SectionHeading = styled.h1`
  font-family: NoeDisplay-Medium;
  font-size: 32px;
  color: #ffffff;
  letter-spacing: -0.18px;
`;

export const JoinButton = styled(Button)`
  border: 1px solid #ff0283;
  border-radius: 4px;
  font-family: MaisonNeue-Medium;
  font-size: 16px;
  color: #000000;
  letter-spacing: 1px;
  text-align: center;
  line-height: 1;
  padding: 0.7rem 1rem 0.5rem 1rem;
  margin-left: 1rem;

  &:hover {
    background-color: #ff0283;
    color: #fff;
  }
`;

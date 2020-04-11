import styled from "styled-components";
import { AppBar, TextField } from "@material-ui/core";

export const NavBar = styled(AppBar)`
  background-color: #fff !important;
  color: #000 !important;
`;

export const HeroSection = styled.section`
  padding: 4rem 0rem;
  color: #fff;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeroHeading = styled.h1`
  font-family: NoeDisplay-Medium;
  font-size: 60px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 68px;
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
  padding: 2rem;
`;

export const SectionHeading = styled.h1`
  font-family: NoeDisplay-Medium;
  font-size: 32px;
  color: #ffffff;
  letter-spacing: -0.18px;
`;

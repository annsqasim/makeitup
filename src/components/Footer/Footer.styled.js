import styled from "styled-components";
import { Button } from "@material-ui/core";
import FooterBannerImg from "../../assets/img/FooterBanner.png";

export const FooterSection = styled.section`
  background: #000;
  padding: 2rem 0rem 0rem 0rem;
  color: #fff;

  .footer-bottom {
    padding: 1rem 0rem;
    font-family: MaisonNeue-Medium;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    p {
      display: flex;
      justify-content: flex-end;

      .facebook {
        color: #0073f6;
        margin-right: 15px;
      }

      .insta {
        color: #f0007c;
      }
    }
  }
`;

export const FooterBanner = styled.div`
  margin-bottom: 2rem;
  background-image: url(${FooterBannerImg});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4rem 2rem;
`;

export const LinkBtn = styled(Button)`
  background: #ff0283 !important;
  border-radius: 4px;
  font-family: MaisonNeue-Medium;
  font-size: 16px;
  color: #ffffff !important;
  letter-spacing: 1px;
  text-align: center;
  padding: 1rem 2rem !important;
`;

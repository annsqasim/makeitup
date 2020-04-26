import styled from "styled-components";
import { Button } from "@material-ui/core";
import { device } from "../../common/device";

export const FeaturedSection = styled.section`
  .wrap {
    background: #000;
    align-items: center;
    display: flex;
    img {
      max-width: 100%;
    }

    .featured-info {
      text-align: center;
      color: #fff;
      padding: 0rem 2rem;

      @media ${device.mobileS} {
        padding: 2rem;
      }

      h1 {
        font-family: NoeDisplay-Medium;
        font-size: 60px;
        color: #ffffff;
        line-height: 68px;
        margin: 1rem 0rem;
      }

      p {
        font-family: MaisonNeue-Book;
        font-size: 16px;
        color: #ffffff;
        letter-spacing: 0;
        text-align: center;
        line-height: 24px;
      }
    }
  }
`;

export const LinkBtn = styled(Button)`
  background: #ff0283 !important;
  border: 1px solid #ff0283;
  border-radius: 4px;
  font-family: MaisonNeue-Medium;
  font-size: 16px;
  color: #ffffff !important;
  letter-spacing: 1px;
  text-align: center;
`;

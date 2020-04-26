import styled from "styled-components";
import { device } from "../../common/device";

export const DetailsSection = styled.section`
  background: #000;
  color: #fff;
  padding: 4rem 0rem;

  .details-head {
  }
`;

export const DetailsInfo = styled.div`
  .category {
    font-family: MaisonNeue-Book;
    font-size: 14px;
    color: #ffffff;
  }

  h1 {
    font-family: NoeDisplay-Medium;
    font-size: 32px;
    color: #ffffff;
    letter-spacing: -0.18px;
    line-height: 40px;
  }

  .post-date {
    opacity: 0.6;
    font-family: MaisonNeue-Book;
    font-size: 14px;
    color: #ffffff;
    letter-spacing: -0.08px;
  }

  .post-excerpt {
    font-family: MaisonNeue-Book;
    font-size: 16px;
    color: #ffffff;
    line-height: 24px;
  }

  .post-products {
    font-family: MaisonNeue-Book;
    font-size: 14px;
    color: #ff0283;
  }

  .products-list {
    margin-bottom: 1rem;
    padding-left: 1rem;
    li {
      font-family: MaisonNeue-Book;
      font-size: 16px;
      color: #ffffff;
      line-height: 32px;
    }
  }
`;

export const VideoContainer = styled.div`
  background: #666666;
  padding-top: 50.25%;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  @media ${device.mobileS} {
    position: relative;
    width: 360px;
    height: 200px;
  }

  @media ${device.laptop} {
    position: relative;
  }

  @media ${device.laptopL} {
    position: relative;
  }
`;

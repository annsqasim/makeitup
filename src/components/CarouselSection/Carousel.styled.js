import styled from "styled-components";
import { device } from "../../common/device";

export const CarouselWrap = styled.section`
  background: #fff;
  padding: 4rem 0rem;

  @media ${device.mobileS} {
    padding: 1.5rem 0rem;
  }

  .owl-nav {
    .owl-prev {
      position: absolute;
      top: 28%;
      padding: 22px;
      text-align: center;
      border-radius: 50%;
      left: 0px;
      box-shadow: 5px 10px 50px 0 rgba(0, 0, 0, 0.2);
      background: #fff;
      left: -22px;

      &.disabled {
        display: none;
      }
    }

    .owl-next {
      position: absolute;
      top: 28%;
      padding: 22px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 5px 10px 50px 0 rgba(0, 0, 0, 0.2);
      background: #fff;
      right: -22px;

      &.disabled {
        display: none;
      }
    }
  }
`;

export const SectionHeading = styled.h1`
  font-family: NoeDisplay-Medium;
  font-size: 32px;
  color: #000000;
  letter-spacing: -0.18px;
`;

export const Videos = styled.div`
  border-radius: 4px;
`;

export const VidThumb = styled.div`
  img {
    max-width: 100%;
  }

  :hover {
    img {
      opacity: 0.6;
    }
  }
`;
export const VidInfo = styled.div`
  h2 {
    font-family: MaisonNeue-Medium;
    font-size: 18px;
    color: #000000;
    letter-spacing: -0.1px;
  }

  p {
    opacity: 0.6;
    font-family: MaisonNeue-Book;
    font-size: 16px;
    color: #000000;
    letter-spacing: -0.09px;
  }
`;

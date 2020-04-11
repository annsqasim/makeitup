import styled from "styled-components";

export const CarouselWrap = styled.section`
  background: #fff;
  padding: 4rem 0rem;
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

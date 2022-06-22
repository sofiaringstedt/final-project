import styled from "styled-components";
import { devices } from "styled-components/globalStyles";

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media ${devices.largeMobile} {
    margin-top: 50px;
    justify-content: space-evenly;
  };

  @media ${devices.desktop} {
    margin-top: 100px;
  };
`;

export const Title = styled.h1`
  color: #094739;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OrderedList = styled.ol`
  padding: 0 10px 0 30px;
  width: 300px;

  @media ${devices.largeMobile} {
    width: 400px;
  };

  @media ${devices.desktop} {
    width: 465px;
  };
`;

export const Paragraph = styled.p`
  padding: 0 10px 0 30px;
  width: 300px;
  word-wrap: break-word;

  @media ${devices.largeMobile} {
    width: 400px;
  };

  @media ${devices.desktop} {
    width: 465px;
  };
`;

export const TickImage = styled.img`
  height: 100px;
  width: 300px;
  border-radius: 15px;
  border: ${props => props.border ? "1px solid black" : null};

  @media ${devices.smallTablet} {
    height: 200px;
    max-width: 400px;
  };

  @media ${devices.smallTablet} {
    width: 465px;
  };
`;
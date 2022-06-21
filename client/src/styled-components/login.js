import styled from "styled-components";
import { devices } from "./globalStyles";

export const FormContainer = styled.div`
  margin-top: 50px;

  @media ${devices.tablet} {
    margin-top: 100px;
  }
`;

export const StyledHeading = styled.h1`
  margin-left: 11vw;
  margin-top: 10vh;
  font-weight: 600;
  font-size: 20px;

  @media ${devices.tablet} {
    margin-left: 31vw;
    margin-bottom: 27px;
    font-weight: 600;
    font-size: 33px;
  }
  @media ${devices.desktop} {
    margin-left: 35vw;
  }
`;

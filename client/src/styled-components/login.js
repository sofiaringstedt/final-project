import styled from "styled-components";
import { devices } from "./globalStyles";

export const FormContainer = styled.div`
  margin-top: 50px;

  @media ${devices.tablet}{
    margin-top: 100px;
  }
`;

export const StyledHeading = styled.h1`
  margin-left: 40px;
  font-weight: 600;
  font-size: 20px;

  @media ${devices.tablet}{
    margin-left: 350px;
    font-weight: 600;
    font-size: 33px;
  }
`;

// try to make this button reusable with styling

// export const GoBackButton = styled.button`
//   border: none;
//   background-color: transparent;
//   font-size: 20px;
//   margin-left: 35px;
// `;

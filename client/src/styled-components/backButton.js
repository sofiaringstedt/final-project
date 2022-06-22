import styled from "styled-components";
import { devices } from "./globalStyles";

export const BackButton = styled.button`
  position: absolute;
  top: 25px;
  left: 10px;
  background: none;
  border: none;

  @media ${devices.desktop}{
    &:hover {
      cursor: pointer;
    }
  }
`;

export const BackCross = styled.img`
  width: 20px;
`;

export const BackArrow = styled.img`
  width: 50px;
  transform:scale(1, 1);
  transition: 1s;

  @media ${devices.desktop} {
    &:hover {
      transform:scale(1.1, 1.1);
    }
  }
`;

import React from "react";
import styled from "styled-components";

import Logo from "../assets/markup-cropped.svg";
import { devices } from "styled-components/globalStyles";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo src={Logo} alt="Tick info logo" />
    </StyledHeader>
  );
};
export default Header;

export const StyledHeader = styled.header`
  height: 90px;
  display: flex;
  justify-content: end;
  
  @media ${devices.tablet}{
    height: 120px;
  }
`;

export const StyledLogo =  styled.img`
height: 60px;
width: 140px;
margin: 10px 10px 0 0;

@media ${devices.tablet}{
  height: 120px;
  width: 180px;
  /* margin-left: 20px; */
  }
  @media ${devices.desktop}{
  width: 200px;
  }
`;


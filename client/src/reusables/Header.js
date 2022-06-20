import React from "react";
import styled from "styled-components";

import Logo from "../assets/markup-cropped.svg";

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
  position: relative;
`;

export const StyledLogo =  styled.img`
height: 60px;
width: 130px;
margin-top: 10px;
`;


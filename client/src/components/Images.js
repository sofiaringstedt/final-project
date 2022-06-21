import React from "react";
import styled from "styled-components";

import NavigateBackButton from "reusables/NavigateBackButton";
import Header from "reusables/Header";
import Livingtick from "../assets/livingtick.jpg";
import { devices } from "styled-components/globalStyles";
import { HeaderWrapper } from "styled-components/information";

const Images = () => {
  return (
    <>
      <ImageContainer>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <NavigateBackButton />
        <ImageWrapper>
          <TickImage src={Livingtick} alt=" living tick on a hand" />
        </ImageWrapper>
      </ImageContainer>
    </>
  );
};
export default Images;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export const ImageWrapper = styled.div`
  width: 80%;
  margin-top: 5vh;
  position: absolute;
  top: 15vh;
`;
export const TickImage = styled.img`
  height: 20vh;
  width: 60vw;

  @media ${devices.tablet} {
    height: 30vh;
    width: 60vw;
  }

  @media ${devices.desktop} {
    height: 20vh;
    width: 40vw;
  }
`;

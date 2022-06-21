import styled from "styled-components";
import hero from "../assets/heroimg.svg";
import { devices } from "./globalStyles";

export const Hero = styled.div`
  background-image: url(${hero});
  height: 400px;
  width: 100%;
  background-size: auto;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  position: relative;
  top: -50px;

  @media ${devices.tablet} {
    height: 500px;
    width: 100%;
    background-size: cover;
    top: 25px;
  }
`;

export const HeroTextBox = styled.div`
  color: #fffbfb;
  position: absolute;
  top: 64px;
  margin-left: 18px;
  margin-right: 9px;

  @media ${devices.tablet} {
    top: 80px;
    margin-left: 40px;
    margin-right: 40px;
  }
  @media ${devices.desktop}{
    margin-left: 50px;
    margin-right: 50px;
  }
`;
export const HeroParagraph = styled.p`
  font-weight: 600;
  font-size: medium;

  @media ${devices.tablet} {
    font-weight: 600;
    font-size: larger;
    line-height: 33px;
  }
`;
export const HeroHeading = styled.h1`
  font-weight: 600;
  font-size: medium;
  text-align: center;

  @media ${devices.tablet} {
    font-weight: 600;
    font-size: 30px;
  }
`;
export const ImageListWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: -61px;

  @media ${devices.tablet} {
    top: 80px;
  }
`;

export const ImageList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 380px;
  height: 250px;
  align-items: center;
  margin: 0px;

  @media ${devices.tablet} {
    width: 750px;
    height: 400px;
  }
`;
export const StyledListImg = styled.img`
  height: 100px;
  width: 100px;

  @media ${devices.tablet} {
    height: 170px;
    width: 170px;
  }
`;
export const LogInButton = styled.button`
  background-color: #175c4c;
  color: #ffffff;
  height: 45px;
  width: 160px;
  border: none;
  border-radius: 30px;
  -webkit-box-shadow: 3px 7px 9px -2px rgba(0, 0, 0, 0.84);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Source Serif Pro", serif;
  font-weight: 600;
  font-size: medium;
  margin-top: -20px;
  margin-bottom: 40px;

  @media ${devices.tablet} {
    margin-top: 140px;
    margin-bottom: 80px;
    height: 65px;
    width: 200px;
    font-size: 25px;
  }
`;
export const LogInButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

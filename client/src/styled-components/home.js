import styled from "styled-components";
import hero from "../assets/heroimg.svg"

export const LogInButton = styled.button`
  background-color: #175C4C ;
  color: #FFFFFF;
  height:45px;
  width: 160px;
  border: none;
  border-radius: 30px;
  -webkit-box-shadow: 3px 7px 9px -2px rgba(0,0,0,0.84); 
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  font-family: 'Source Serif Pro', serif;
  font-weight: 600;
  font-size: medium;
`;

export const Hero = styled.div`
  background-image: url(${hero});
  height: 400px;
  width: 100%;
  background-size: auto;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  position: relative;
`;

export const HeroTextBox = styled.div`
  color: #FFFBFB;
  position: absolute;
  top: 64px;
  margin-left: 18px;
  margin-right: 9px;
`;
export const HeroParagraph = styled.p`
  font-weight: 600;
`;

export const ImageList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 200px;
`;
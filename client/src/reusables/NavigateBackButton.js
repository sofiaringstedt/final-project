import React from "react";
import { useNavigate } from "react-router-dom";

import cross from "../assets/x.svg";
import arrow from "../assets/ArrowCircleLeft.svg";

import { BackButton, BackCross, BackArrow } from "styled-components/backButton";

const NavigateBackButton = () => {
  const navigate = useNavigate();
  if (window.screen.width <= 768) {
    return <BackButton onClick={() => navigate("/")}><BackCross src={cross} alt="back icon" /></BackButton>
  // } else if (window.screen.width <= 1024) {
  //   return <BackButton onClick={() => navigate("/")}><BackArrow src={arrow} alt="back icon" /></BackButton>
  // } else {
  //   return <BackButton onClick={() => navigate("/")}><HomeTag>Home</HomeTag></BackButton>
  // }
  } else {
    return <BackButton onClick={() => navigate("/")}><BackArrow src={arrow} alt="back icon" /></BackButton>
  }
};

export default NavigateBackButton;

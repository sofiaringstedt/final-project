import React from "react";
import { useNavigate } from "react-router-dom";

import cross from "../assets/x.svg";
import arrow from "../assets/ArrowCircleLeft.svg";

import { BackButton, BackButtonImage, HomeTag } from "styled-components/backButton";

const NavigateBackButton = () => {
  const navigate = useNavigate();
  if (window.screen.width <= 768) {
    return <BackButton onClick={() => navigate("/")}><BackButtonImage src={cross} alt="back icon" /></BackButton>
  } else if (window.screen.width <= 1024) {
    return <BackButton onClick={() => navigate("/")}><BackButtonImage src={arrow} alt="back icon" /></BackButton>
  } else {
    return <BackButton onClick={() => navigate("/")}><HomeTag>Home</HomeTag></BackButton>
  }
};

export default NavigateBackButton;
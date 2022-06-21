import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import dose from "../assets/dose.svg";
import tick from "../assets/tick.svg";
import profile from "../assets/profile.svg";
import images from "../assets/images.svg";
import map from "../assets/map.svg";
import resources from "../assets/resources.svg";

import Header from "../reusables/Header";

import {
  Hero,
  HeroTextBox,
  HeroParagraph,
  HeroHeading,
  ImageListWrapper,
  ImageList,
  StyledListImg,
  LogInButtonWrapper,
  LogInButton,
} from "../styled-components/home";

const Home = () => {
  const navigate = useNavigate();
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);
  const handleLogin = () => navigate("/login");

  const accessToken = JSON.parse(localStorage.getItem("user"))?.accessToken;

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <>
      <Header />
      <section>
        <Hero>
          <HeroTextBox>
            <HeroHeading>Vaccination against TBE</HeroHeading>
            <HeroParagraph>
              {" "}
              TBE, tick-borne encephalitis is a viral disease that is spread by
              ticks. The virus can cause inflammation in the brain or meninges.
              You should be vaccinated against TBE if you are staying in areas
              where the TBE virus is present.
            </HeroParagraph>
            {isDesktop ? (
              <div>
                <HeroParagraph>
                  In Sweden, TBE is found mainly in southern and central Sweden.
                  Abroad, the virus is found in large parts of Central Europe,
                  in the Baltic countries, in Russia and on Åland.
                </HeroParagraph>
              </div>
            ) : (
              <div>{""}</div>
            )}
          </HeroTextBox>
        </Hero>
      </section>
      <section>
        <p></p>
      </section>
      <ImageListWrapper>
        <ImageList>
          <li
            onClick={() =>
              accessToken !== undefined ? navigate("/card") : navigate("/login")
            }
          >
            {" "}
            <StyledListImg src={dose} alt="syringe icon" />
          </li>
          <li>
            {" "}
            <StyledListImg src={images} alt="images icon" />
          </li>
          <li onClick={() => navigate("/information")}>
            {" "}
            <StyledListImg src={tick} alt="tick icon" />
          </li>
          <li onClick={() => navigate("/map")}>
            {" "}
            <StyledListImg src={map} alt="sign out icon" />
          </li>
          <li onClick={() => navigate("/login")}>
            {" "}
            <StyledListImg src={profile} alt="profile icon" />{" "}
          </li>
          <li onClick={() => navigate("/resources")}>
            {" "}
            <StyledListImg src={resources} alt="resources icon" />
          </li>
        </ImageList>
      </ImageListWrapper>
      <LogInButtonWrapper>
        {accessToken 
          ?
           <LogInButton> Logout </LogInButton>
          : 
          <LogInButton onClick={handleLogin}>Login</LogInButton>
        }
      </LogInButtonWrapper>
    </>
  );
};

export default Home;

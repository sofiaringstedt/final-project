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
  HomeContainer,
  Hero,
  HeroTextBox,
  HeroParagraph,
  HeroHeading,
  ImageListWrapper,
  ImageList,
  ListItem,
  StyledListImg,
  LogInButtonWrapper,
  LogInButton,
  InformationWrapper,
} from "../styled-components/home";

import {
  InfoHeadingThree,
  InfoHeadingFour,
  InfoParagraph,
} from "../styled-components/information";

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
  const handleSignOut = () => {
    const keysToRemove = ["user", "dose", "allDoses"];
    keysToRemove.forEach((key) => localStorage.removeItem(key));
    navigate("/");
  };

  return (
    <>
      <Header />
      <HomeContainer>
        <Hero>
          <HeroTextBox>
            <HeroHeading>Vaccination against TBE</HeroHeading>
            <HeroParagraph>
              {" "}
              TBE, tick-borne encephalitis is a viral disease that is spread by
              ticks. The virus can cause inflammation in the brain or meninges.
              <br/>
              <br/>
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
        {isDesktop ? (
          <InformationWrapper>
            <InfoHeadingFour>
              Ticks are small insects that bite into the skin and suck blood.
              Remove any ticks that you find on your skin. Ticks can sometimes
              spread diseases. If you are bitten, you may need to seek medical
              care.
            </InfoHeadingFour>
            <InfoHeadingThree>Ticks are found in nature</InfoHeadingThree>
            <InfoParagraph>
              Ticks are small insects that are found in nature between March and
              October. High grass is one example of where you might find ticks.
              Ticks suck blood from people and animals. A tick looks like a
              small spider and is 1–4 millimetres long. A tick may grow bigger
              in size once it has sucked blood.
            </InfoParagraph>
            <InfoHeadingThree>Ticks can spread diseases</InfoHeadingThree>
            <InfoParagraph>
              Ticks are not dangerous, but they can spread diseases. One of
              these diseases is TBE, tick-borne encephalitis, which can cause
              inflammation, swelling, of the brain. Another disease is called
              Lyme disease, and this can affect the skin, joints, and nerves.
              You can get vaccinated against TBE, but not against Lyme disease.
              <br />
              There is a greater risk of infection if the tick stays attached to
              the skin for a long time. You should therefore remove the tick as
              quickly as possible.
            </InfoParagraph>
          </InformationWrapper>
        ) : (
          <div>{""}</div>
        )}
        <ImageListWrapper>
          <ImageList>
            <ListItem
              onClick={() =>
                accessToken !== undefined
                  ? navigate("/card")
                  : navigate("/login")
              }
            >
              {" "}
              <StyledListImg src={dose} alt="syringe icon" />
            </ListItem>
            <ListItem onClick={() => navigate("/images")}>
              {" "}
              <StyledListImg src={images} alt="images icon" />
            </ListItem>
            <ListItem onClick={() => navigate("/information")}>
              {" "}
              <StyledListImg src={tick} alt="tick icon" />
            </ListItem>
            <ListItem onClick={() => navigate("/map")}>
              {" "}
              <StyledListImg src={map} alt="sign out icon" />
            </ListItem>
            <ListItem onClick={() => navigate("/login")}>
              {" "}
              <StyledListImg src={profile} alt="profile icon" />{" "}
            </ListItem>
            <ListItem onClick={() => navigate("/resources")}>
              {" "}
              <StyledListImg src={resources} alt="resources icon" />
            </ListItem>
          </ImageList>
        </ImageListWrapper>
        <LogInButtonWrapper>
          {accessToken ? (
            <LogInButton onClick={handleSignOut}>Logout</LogInButton>
          ) : (
            <LogInButton onClick={handleLogin}>Login</LogInButton>
          )}
        </LogInButtonWrapper>
      </HomeContainer>
    </>
  );
};

export default Home;

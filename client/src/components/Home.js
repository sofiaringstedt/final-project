import React from "react";
import { useNavigate } from "react-router-dom";

import dose from "../assets/dose.svg";
import tick from "../assets/tick.svg";
import profile from "../assets/profile.svg";
import images from "../assets/images.svg";
import map from "../assets/map.svg";
import resources from "../assets/resources.svg";
// import hero from "../assets/hero.svg";

import Header from "../reusables/Header";

import { Hero, HeroTextBox, ImageList, LogInButton } from "../styled-components/home"

const Home = () => {
  const navigate = useNavigate();
  const handleLogin = () => navigate("/login");
  
  const accessToken = JSON.parse(localStorage.getItem("user"))?.accessToken;

  return (
    <>
      <Header />
      <section>
        <Hero>
          {/* <Hero src={hero} alt="green background" /> */}
          <HeroTextBox>
            <h1>Vaccination against TBE</h1>
            <p>
              {" "}
              TBE, tick-borne encephalitis is a viral disease that is spread by ticks. 
              The virus can cause inflammation in the brain or meninges. You should be 
              vaccinated against TBE if you are staying in areas where the TBE virus is
              present.
            </p>
          </HeroTextBox>
        </Hero>
      </section>
      <ImageList>
        <ul>
          <li onClick={() => accessToken !== undefined ? navigate("/card") : navigate("/login")}>
            {" "}
            <img src={dose} alt="syringe icon" />
          </li>
          <li>
            {" "}
            <img src={tick} alt="tick icon" />
          </li>
          <li onClick={() => navigate("/login")}>
            {" "}
            <img src={profile} alt="profile icon" />{" "}
          </li>
          <li>
            {" "}
            <img src={images} alt="images icon" />
          </li>
          <li onClick={() => navigate("/map")}>
            {" "}
            <img src={map} alt="sign out icon" />
          </li>
          <li onClick={() => navigate("/resources")}>
            {" "}
            <img src={resources} alt="resources icon" />
          </li>
        </ul>
      </ImageList>
      <LogInButton onClick={handleLogin}>Login</LogInButton>
    </>
  );
};

export default Home;

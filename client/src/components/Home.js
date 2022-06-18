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
            <p>
              A single tick bite can give you TBE, there are currently no medicines that 
              cures TBE, but vaccines protect.
              {" "}
              The basic vaccination against TBE consists of three doses. You usually get 
              two doses every 1-3 months. The third dose can be taken at the earliest after 
              5 months and at most 12 months after dose 2. The third dose should be given 
              within the same tick season, or at least before the start of the following tick season.
              {" "}
              To maintain your protection, you need to take a fourth dose three years after the third 
              dose and then one dose every five years.
            </p>
          </HeroTextBox>
        </Hero>
      </section>
      <ImageList>
        <ul>
          <li onClick={() => navigate("/login")}>
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

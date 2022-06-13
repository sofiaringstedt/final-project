import React from "react";
import { useNavigate } from "react-router-dom";

import tickInfoLogo from "../assets/tick-info-logo.svg";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => navigate("/login");
  
  return (
    <>
      <img src={tickInfoLogo} alt="Tick info logo" />
      <h1>Vaccination against TBE</h1>
      <p> TBE is a viral disease that is spread by ticks. 
      The virus can cause inflammation in the brain 
      or meninges. You should be vaccinated against
      TBE if you are staying in areas where the TBE  
      virus is present.</p>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Home;
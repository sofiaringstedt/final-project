import React from "react";
import { useNavigate } from "react-router-dom";

import tickInfoLogo from "../assets/tick-info-logo.svg";
import house from "../assets/house.svg";
import bell from "../assets/bell.svg";
import clipBoard from "../assets/clipboard.svg";
import dots from "../assets/dots.svg";
import signOut from "../assets/log-out.svg";

const Account = () => {
  const navigate = useNavigate();
  const firstName = JSON.parse(localStorage.getItem("user"))?.firstName;
  
  const handleSignOut = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("dose")
    navigate("/")
  };

  return (
    <>
      <h1>hello {firstName}</h1>
      <img src={tickInfoLogo} alt="Tick info logo" />
      <ul>
        <li onClick={()=> navigate("/")}> <img src={house} alt="home icon"/> Home</li>
        <li > <img src={bell} alt="bell icon" /> Reminder</li>
        <li onClick={()=> navigate("/card")}> <img src={clipBoard} alt="clipboard icon" /> Vaccine card</li>
        <li> <img src={dots} alt="three dots icon"/>Edit profile</li>
        <li onClick={handleSignOut}> <img src={signOut} alt="sign out icon" />sign out</li>
      </ul>
    </>
  )
}

export default Account
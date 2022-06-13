import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import tickInfoLogo from "../assets/tick-info-logo.svg";
import house from "../assets/house.svg";
import bell from "../assets/bell.svg";
import clipBoard from "../assets/clipboard.svg";
import dots from "../assets/dots.svg";
import signOut from "../assets/log-out.svg";

const Account = ({ setMode, setMethod }) => {
  const navigate = useNavigate();

  const accessToken = JSON.parse(localStorage.getItem("user"))?.accessToken;
  const firstName = JSON.parse(localStorage.getItem("user"))?.firstName;
  const lastName = JSON.parse(localStorage.getItem("user"))?.lastName;
  const email = JSON.parse(localStorage.getItem("user"))?.email;
  const userId = JSON.parse(localStorage.getItem("user"))?.userId;
  
  const handleSignOut = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("dose")
    navigate("/")
  };

  const handleEditUser = () =>{
    setMode(`user/${userId}`)
    setMethod("PUT");
    navigate("/register")
  };

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);

  return (
    <>
      <h1>Hello, {firstName}</h1>
      <img src={tickInfoLogo} alt="Tick info logo" />
      <div>
        <p>{firstName} {lastName}</p>
        <p>{email}</p>
        <p>Next dose: xx</p>
      </div>
      <hr />
      <ul>
        <li onClick={()=> navigate("/")}> <img src={house} alt="home icon"/> Home</li>
        <li > <img src={bell} alt="bell icon" /> Reminder</li>
        <li onClick={()=> navigate("/card")}> <img src={clipBoard} alt="clipboard icon" /> Vaccine card</li>
        <li onClick={handleEditUser}> <img src={dots} alt="three dots icon"/>Edit profile</li>
        <li onClick={handleSignOut}> <img src={signOut} alt="sign out icon" />sign out</li>
      </ul>
    </>
  );
};

export default Account;
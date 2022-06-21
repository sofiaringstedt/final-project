import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import tickInfoLogo from "../assets/tick-info-logo.svg";
import house from "../assets/house.svg";
import bell from "../assets/bell.svg";
import clipBoard from "../assets/clipboard.svg";
import dots from "../assets/dots.svg";
import signOut from "../assets/log-out.svg";

import { 
  AccountWrapper, 
  HeaderContainer, 
  Iconimages, 
  LogoImage, 
  IconsContainer, 
  HomeIcon, 
  ReminderIcon, 
  VaccineIcon, 
  EditIcon, 
  SignOutIcon 
} from "../styled-components/account"

const Account = ({ setMode, setMethod, setLoggedIn, totalDoses }) => {
  const navigate = useNavigate();

  const accessToken = JSON.parse(localStorage.getItem("user"))?.accessToken;
  const firstName = JSON.parse(localStorage.getItem("user"))?.firstName;
  const lastName = JSON.parse(localStorage.getItem("user"))?.lastName;
  const email = JSON.parse(localStorage.getItem("user"))?.email;
  const userId = JSON.parse(localStorage.getItem("user"))?.userId;
  
 const handleSignOut = () => {
    const keysToRemove = ["user", "dose", "allDoses"];
    keysToRemove.forEach(key => localStorage.removeItem(key));
    setLoggedIn(false);
    navigate("/");
  };

  const handleEditUser = () => {
    setMode(`user/${userId}`);
    setMethod("PUT");
    navigate("/register");
  };

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);

  return (
    <AccountWrapper>
        <HeaderContainer>
        <h1>Hello, {firstName}</h1>
        <LogoImage src={tickInfoLogo} alt="Tick info logo" />
        <div>
          <p>{firstName} {lastName}</p>
          <p>{email}</p>
          <p>Doses taken: {totalDoses}</p>
        </div>
        </HeaderContainer>
        <><hr /></>
        <IconsContainer>
          <HomeIcon onClick={()=> navigate("/")}> <Iconimages src={house} alt="home icon"></Iconimages> Home</HomeIcon>
          <ReminderIcon onClick={() => navigate("/reminder")}> <Iconimages src={bell} alt="bell icon"></Iconimages> Reminder</ReminderIcon>
          <VaccineIcon onClick={() => navigate("/card")}> <Iconimages src={clipBoard} alt="clipboard icon"></Iconimages> Vaccine card</VaccineIcon>
          <EditIcon onClick={handleEditUser}> <Iconimages src={dots} alt="three dots icon"></Iconimages>Edit profile</EditIcon>
          <SignOutIcon onClick={handleSignOut}> <Iconimages src={signOut} alt="sign out icon"></Iconimages> Sign out</SignOutIcon>
        </IconsContainer>
    </AccountWrapper>
  );
};

export default Account;

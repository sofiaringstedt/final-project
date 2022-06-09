import React from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {

  const navigate = useNavigate();
  const firstName = JSON.parse(localStorage.getItem("user"))?.firstName;

  const handleSignOut = () => {
    localStorage.removeItem("user")
    navigate("/")
  };

  return (
    <>
      <h1>hello {firstName}</h1>
      <button onClick={handleSignOut}>sign out</button>
    </>
  )
}

export default Account
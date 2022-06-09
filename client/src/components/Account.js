import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { API_URL } from "../utils/urls";

const Account = () => {
  const [doses, setDoses] = useState([]);

  const navigate = useNavigate();
  const firstName = JSON.parse(localStorage.getItem("user"))?.firstName;
  const token = JSON.parse(localStorage.getItem("user"))?.accessToken;
  const userId = JSON.parse(localStorage.getItem("user"))?.userId;

  const handleSignOut = () => {
    localStorage.removeItem("user")
    navigate("/")
  };

  //  const options = {
  //     method: "GET",
  //     headers: { Authorization: token },
  //   };

  //   fetch(API_URL(`user/${userId}`), options)
  //     .then((response) => response.json())
  //     .then((doseData) => setDoses(doseData.response.doses))
  //     .catch((error) => console.log(error))

  return (
    <>
      <h1>hello {firstName}</h1>
      {doses && doses?.map((dose) => {
          return (
            <div key={dose._id}>
              <p>{dose.dose}</p>
              <p>{dose.date}</p>
            </div>
          )
      })}
      <button onClick={handleSignOut}>sign out</button>
    </>
  )
}

export default Account
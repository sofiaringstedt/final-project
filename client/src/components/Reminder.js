import React, { useState, useEffect } from "react";

import HomeButton from "../reusables/HomeButton";

import { API_URL } from "../utils/urls";

const Reminder = () => {
  const [nextDose, setNextDose] = useState("");

  const userId = JSON.parse(localStorage.getItem("user"))?.userId;
  const token = JSON.parse(localStorage.getItem("user"))?.accessToken;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: { Authorization: token },
    };

    fetch(API_URL(`user/${userId}`), options)
      .then((response) => response.json())
      .then((doseData) => setNextDose(doseData.response.doses[doseData.response.doses.length - 1].nextDose))
      .catch((error) => console.log(error))
  }, [token, userId]);
 
  const dateOptions = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = new Date(nextDose).toLocaleDateString("en-US", dateOptions);

  return (
    <>
      <HomeButton />
      <h1>Reminders</h1>
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
      <p>{nextDose ? `Next dose on ${formattedDate}` : "There are no doses in your vaccine card."}</p>
    </>
  );
};

export default Reminder;

import React, { useState, useEffect } from "react";
import { API_URL } from "../utils/urls";

import { addDose } from "../actions/cardActions";

const VaccineCard = () => {
  const [dose, setDose] = useState("");
  const [date, setDate] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
   // eslint-disable-next-line
  const [nextDose, setNextDose] = useState("");
  const [doseInfo, setDoseInfo] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [trackNewDose, setTrackNewDose] = useState("");

  const userId = JSON.parse(localStorage.getItem("user"))?.userId;
  const token = JSON.parse(localStorage.getItem("user"))?.accessToken;

  console.log(doseInfo)

  const handleDoseSubmit = (event) =>{
    event.preventDefault();

    if (dose && date) {
      addDose(dose, date, batchNumber, nextDose, setErrorMessage, setTrackNewDose)
      setErrorMessage("");
    } else {
      setErrorMessage("Dose & date is required")
    }
  }

    useEffect(() => {
     const options = {
       method: "GET",
       headers: { Authorization: token },
     };

     fetch(API_URL(`user/${userId}`), options)
       .then((response) => response.json())
       .then((doseData) => setDoseInfo(doseData.response.doses))
       .catch((error) => console.log(error))
   },[token, userId, trackNewDose])

  return (
    <>
      <form onSubmit={handleDoseSubmit}>
        <select onChange={(event) => setDose(event.target.value)}>
          <option>Choose dose...</option>
          <option value="dose 1">Dose 1</option>
          <option value="dose 2">Dose 2</option>
          <option value="dose 3">Dose 3</option>
          <option value="dose 4">Dose 4</option>
        </select>
        <input
          type="date"
          value={date}
          onChange={((event) => setDate(event.target.value))} />
        <input
          type="text"
          value={batchNumber}
          placeholder="Optional"
          onChange={(event) => setBatchNumber(event.target.value)} />
        <button type="submit">Add dose</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {doseInfo?.map((dose) => {
       return <p key={dose._id}>{dose.dose}</p>
      })}
    </>
  );
};

export default VaccineCard;
import React, { useState, useEffect } from "react";
import { API_URL } from "../utils/urls";

import { handleDoseSubmit } from "../actions/userActions";

const VaccineCard = () => {
  const [dose, setDose] = useState("");
  const [date, setDate] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
   // eslint-disable-next-line
  const [nextDose, setNextDose] = useState("");
  const [doseInfo, setDoseInfo] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

   const userId = JSON.parse(localStorage.getItem("user"))?.userId;
  // const doseId = JSON.parse(localStorage.getItem("dose"))?.doseId;
  const token = JSON.parse(localStorage.getItem("user"))?.accessToken;

  //    useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: { Authorization: token },
  //   };

  //   fetch(API_URL(`user/${userId}`), options)
  //     .then((response) => response.json())
  //     .then((doseData) => setDoseInfo(doseData.response.doses))
  //     .catch((error) => console.log(error))
  // },[token, userId])

    const options = {
      method: "GET",
      headers: { Authorization: token },
    };

    fetch(API_URL(`user/${userId}`), options)
      .then((response) => response.json())
      .then((doseData) => setDoseInfo(doseData.response.doses))
      .catch((error) => console.log(error))

  return (
    <>
      <form onSubmit={() => handleDoseSubmit(dose, date, batchNumber, nextDose, setErrorMessage)}>
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
      {doseInfo?.map((dose) => {
       return <p key={dose._id}>{dose.dose}</p>
      })}
    </>
  );
};

export default VaccineCard;
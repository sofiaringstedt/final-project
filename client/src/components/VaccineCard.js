import React, { useState, useEffect } from "react";
import { API_URL } from "../utils/urls";

import { addDose, startCounter } from "../actions/cardActions";

const VaccineCard = () => {
  const [dose, setDose] = useState("");
  const [date, setDate] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  // eslint-disable-next-line
  const [nextDose, setNextDose] = useState("");
  const [doseInfo, setDoseInfo] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [trackNewDose, setTrackNewDose] = useState("");
  const [countDownDay, setCountDownDay] = useState(null);
  const [countDownHour, setCountDownHour] = useState(null);
  const [countDownMinute, setCountDownMinute] = useState(null);
  const [countDownSecond, setCountDownSecond] = useState(null);

  const userId = JSON.parse(localStorage.getItem("user"))?.userId;
  const token = JSON.parse(localStorage.getItem("user"))?.accessToken;

  const lastDoseIndex = doseInfo.length - 1;
  const latestDoseDate = doseInfo[lastDoseIndex]?.date;

  const handleDoseSubmit = (event) => {
    event.preventDefault();

    if (dose && date) {
      addDose(dose, date, batchNumber, nextDose, setErrorMessage, setTrackNewDose)
      setErrorMessage("");
    } else {
      setErrorMessage("Dose & date is required")
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      startCounter(setCountDownDay, setCountDownHour, setCountDownMinute, setCountDownSecond, latestDoseDate)
    }, 1000);
    return () => clearInterval(interval)
  }, [lastDoseIndex, latestDoseDate]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: { Authorization: token },
    };

    fetch(API_URL(`user/${userId}`), options)
      .then((response) => response.json())
      .then((doseData) => setDoseInfo(doseData.response.doses))
      .catch((error) => console.log(error))
  }, [token, userId, trackNewDose]);

  return (
    <>
      {doseInfo.length > 0 && 
        <div>
          <p>{countDownDay}: {countDownHour}: {countDownMinute}: {countDownSecond}</p>
        </div>
      }
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
        return <div key={dose._id}>
          <p >{dose.dose}</p>
          <p>{dose.date}</p>
        </div>
      })}
    </>
  );
};

export default VaccineCard;
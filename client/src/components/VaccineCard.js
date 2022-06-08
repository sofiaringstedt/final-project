import React, { useState } from "react";
import { API_URL } from "../utils/urls";

const VaccineCard = () => {
  const [dose, setDose] = useState("");
  const [date, setDate] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [nextDose, setNextDose] = useState("");
  const [doseInfo, setDoseInfo] = useState({});

  const handleDoseSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dose,
        date,
        batchNumber,
        nextDose
      })
    };

    fetch(API_URL("dose"), options)
      .then((response) => response.json())
      .then((doseData) => {
        if (doseData.success) {
          localStorage.setItem("dose", JSON.stringify({
            dose: doseData.response.dose,
            date: doseData.response.date,
            batchNumber: doseData.response.batchNumber,
            nextDose: doseData.response.nextDose
          }))
        }

        setDoseInfo(JSON.parse(localStorage.getItem("dose")))
      })
      .catch((error) => console.log(error))
  }

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
      <p>{doseInfo.dose}</p>
    </>
  );
};

export default VaccineCard;
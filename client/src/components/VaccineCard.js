import React, { useState } from "react";
import { API_URL } from "../utils/urls";

const VaccineCard = () => {
  const [dose, setDose] = useState("");
  const [date, setDate] = useState();
  const [batchNumber, setBatchNumber] = useState("");
  const [nextDose, setNextDose] = useState("");

  const handleDoseSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dose,
        date: Number(date),
        batchNumber,
        nextDose
      })
    };

    fetch(API_URL("dose"), options)
      .then((response) => response.json())
      .then((doseData) => console.log(doseData))
      .catch((error) => console.log(error))
  }

  return (
    <form onSubmit={handleDoseSubmit}>
      <select onChange={(event) => setDose(event.target.value)}>
        <option>Choose dose...</option>
        <option value="dose 1">Dose 1</option>
        <option value="dose 2">Dose 2</option>
        <option value="dose 3">Dose 3</option>
        <option value="dose 4">Dose 4</option>
      </select>
      <input type="date" value={date} onChange={((event) => setDate(event.target.value))} />
      {/* <select onChange={(event) => setDose(event.target.value)}>
        <option>Add a date...</option>
        <option value="dose 1">Dose 1</option>
        <option value="dose 2">Dose 2</option>
        <option value="dose 3">Dose 3</option>
        <option value="dose 4">Dose 4</option>
      </select> */}
      <button type="submit">Add dose</button>
    </form>
  );
};

export default VaccineCard;
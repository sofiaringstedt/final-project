import React, { useState } from "react";
import { API_URL } from "../utils/urls";

const VaccineCard = () => {
  const [dose, setDose] = useState("");
  const [date, setDate] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
   // eslint-disable-next-line
  const [nextDose, setNextDose] = useState("");
  const [doseInfo, setDoseInfo] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const userId = JSON.parse(localStorage.getItem("user"))?.user.userId;
  const doseId = JSON.parse(localStorage.getItem("dose"))?.doseId;
  const token = JSON.parse(localStorage.getItem("user"))?.user.accessToken;

  console.log("token", token)
  console.log("userId", userId)
  console.log("dose", doseId)

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
            doseId: doseData.response.doseId,
            dose: doseData.response.dose,
            date: doseData.response.date,
            batchNumber: doseData.response.batchNumber,
            nextDose: doseData.response.nextDose
          }))
        } else {
          setErrorMessage(doseData.response);
        };
      })
      .catch((error) => console.log(error));

    if (doseId) {
      const options = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dose,
          date,
          batchNumber,
          nextDose
        })
      };

      fetch(API_URL(`user/${userId}/dose/${doseId}`), options)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
    }
  }

  //useEffect(() => {
    // const options = {
    //   method: "GET",
    //   headers: { Authorization: token },
    // };

    // fetch(API_URL(`user/${userId}`), options)
    //   .then((response) => response.json())
    //   .then((doseData) => setDoseInfo(doseData.response.doses))
    //   .catch((error) => console.log(error))
  //},[])

  console.log(doseInfo)

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
      {doseInfo.map((dose) => {
       return <p key={dose._id}>{dose.dose}</p>
      })}
    </>
  );
};

export default VaccineCard;
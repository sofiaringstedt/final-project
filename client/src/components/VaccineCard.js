import React, { useState, useEffect } from "react";
import { API_URL } from "../utils/urls";
import styled from "styled-components";

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
    return () => clearInterval(interval);
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
      <Header>
        <h1>Vaccination countdown</h1>
        {doseInfo.length > 0 &&
          <CountdownContainer>
            <CountdownWrapper>
              <p>{countDownDay}</p>
              <p>Days</p>
            </CountdownWrapper>
            <CountdownWrapper>
              <p>{countDownHour}</p>
              <p>Hours</p>
            </CountdownWrapper>
            <CountdownWrapper>
              <p>{countDownMinute}</p>
              <p>Minutes</p>
            </CountdownWrapper>
            <CountdownWrapper>
              <p>{countDownSecond}</p>
              <p>Seconds</p>
            </CountdownWrapper>
          </CountdownContainer>
        }
      </Header>
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
      <div>
        <h2>Vaccine Card</h2>
        <HeaderTags>
          <TagParagraph>Dose</TagParagraph>
          <TagParagraph>Date</TagParagraph>
          <TagParagraph>Batch Number</TagParagraph>
        </HeaderTags>
        {errorMessage && <p>{errorMessage}</p>}
        {doseInfo?.map((dose) => {
          return <DoseContainer key={dose._id}>
            <DoseParagraph>{dose.dose}</DoseParagraph>
            <DoseParagraph>{dose.date}</DoseParagraph>
            <DoseParagraph>{dose?.batchNumber}</DoseParagraph>
          </DoseContainer>
        })}
      </div>
    </>
  );
};

const Header = styled.div`
  background: #E2F5FA;
  padding: 10px;
`;

const CountdownContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const CountdownWrapper = styled.div`
  margin-right: 20px;
  background: darkorange;
  padding: 10px;
`;

const DoseContainer = styled.div`
  display: flex;
`;

const DoseParagraph = styled.p`
  margin-right: 30px;
`;

const HeaderTags = styled.div`
  display: flex;
`;

const TagParagraph = styled.p`
  margin-right: 40px;
`;

export default VaccineCard;
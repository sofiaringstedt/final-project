import React, { useState, useEffect } from "react";

import { addDose, startCounter } from "../actions/cardActions";
import { API_URL } from "../utils/urls";

import CardForm from "../reusables/CardForm";

import { Spinner } from "../styled-components/mainStyles";
import { 
  Header, 
  CountdownContainer, 
  CountdownWrapper,
  DoseContainer,
  DoseParagraph,
  HeaderTags,
  TagParagraph 
} from "../styled-components/vaccineCard";

const VaccineCard = () => {
  const [dose, setDose] = useState("");
  const [date, setDate] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  // eslint-disable-next-line
  const [nextDose, setNextDose] = useState("");
  const [dosesArray, setDosesArray] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [trackNewDose, setTrackNewDose] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countDownDay, setCountDownDay] = useState(null);
  const [countDownHour, setCountDownHour] = useState(null);
  const [countDownMinute, setCountDownMinute] = useState(null);
  const [countDownSecond, setCountDownSecond] = useState(null);

  const userId = JSON.parse(localStorage.getItem("user"))?.userId;
  const token = JSON.parse(localStorage.getItem("user"))?.accessToken;

  const lastDoseIndex = dosesArray?.length - 1;
  const latestDoseDate = dosesArray[lastDoseIndex]?.date;

  const onDoseSubmit = (event) => {
    event.preventDefault();

    if (dose !== "" && date !== "") {
      addDose(dose, date, batchNumber, nextDose, setDate, setDose, setBatchNumber, setErrorMessage, setTrackNewDose, setLoading);
      setErrorMessage("");
    } else {
      setErrorMessage("Dose and date is required");
    }
  };

  const handleDoseDelete = (removeDose) => {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    };

    fetch(API_URL(`dose/${removeDose._id}`), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const filteredDoseArray = dosesArray.filter((el) => el._id !== removeDose._id);
          setDosesArray(filteredDoseArray)
        } else {
          setErrorMessage(data.response)
        }
      })
      .catch((error) => console.log(error))
  };

  useEffect(() => {
    const interval = setInterval(() => {
      startCounter(setCountDownDay, setCountDownHour, setCountDownMinute, setCountDownSecond, dosesArray, latestDoseDate)
    }, 1000);
    return () => clearInterval(interval);
  }, [lastDoseIndex, latestDoseDate, dosesArray]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: { Authorization: token },
    };

    setLoading(true);

    fetch(API_URL(`user/${userId}`), options)
      .then((response) => response.json())
      .then((doseData) => setDosesArray(doseData.response.doses))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [token, userId, trackNewDose]);

  if (loading) {
    return <Spinner></Spinner>
  };

  return (
    <>
      <Header>
        <h1>Vaccination countdown</h1>
        {dosesArray.length > 0 &&
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
      <CardForm 
        dose={dose}
        date={date}
        batchNumber={batchNumber}
        setDose={setDose}
        setDate={setDate}
        setBatchNumber={setBatchNumber}
        handleForm={onDoseSubmit}
        dosesArray={dosesArray} 
      />
      <div>
        <h2>Vaccine Card</h2>
        {errorMessage && <p>{errorMessage}</p>}
        <HeaderTags>
          <TagParagraph>Dose</TagParagraph>
          <TagParagraph>Date</TagParagraph>
          <TagParagraph>Batch Number</TagParagraph>
        </HeaderTags>
        {dosesArray?.map((dose) => {
          return <DoseContainer key={dose._id}>
            <DoseParagraph>{dose.dose}</DoseParagraph>
            <DoseParagraph>{dose.date}</DoseParagraph>
            <DoseParagraph>{dose?.batchNumber}</DoseParagraph>
            <button onClick={() => handleDoseDelete(dose)}>Delete</button>
          </DoseContainer>
        })}
      </div>
    </>
  );
};

export default VaccineCard;
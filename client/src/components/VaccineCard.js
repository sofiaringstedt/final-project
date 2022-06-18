import React, { useState, useEffect } from "react";

import { addDose, handleDoseDelete, startCounter } from "../actions/cardActions";
import { API_URL } from "../utils/urls";

import CardForm from "../reusables/CardForm";

import { Spinner } from "../styled-components/mainStyles";
import {
  Header,
  CountdownTitle,
  CountdownContainer,
  CountdownWrapper,
  Time,
  Interval,
  DoseContainer,
  DoseParagraph,
  HeaderTags,
  TagParagraph
} from "../styled-components/vaccineCard";

const VaccineCard = () => {
  const [dose, setDose] = useState("");
  const [date, setDate] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [dosesArray, setDosesArray] = useState([]);
  const [trackNewDose, setTrackNewDose] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countDownYear, setCountDownYear] = useState(null);
  const [countDownMonth, setCountDownMonth] = useState(null);
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
      addDose(dose, date, batchNumber, setDose, setDate, setBatchNumber, setErrorMessage, setTrackNewDose, setLoading);
      setErrorMessage("");
    } else {
      setErrorMessage("Dose and date is required");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      startCounter(
        setCountDownYear,
        setCountDownMonth,
        setCountDownDay,
        setCountDownHour,
        setCountDownMinute,
        setCountDownSecond,
        dosesArray,
        latestDoseDate
      )
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
        <CountdownTitle>Book next dose in</CountdownTitle>
        {dosesArray.length > 0 &&
          <CountdownContainer>
            {countDownYear === 0
              ?
              null
              :
              <CountdownWrapper>
                <Time>{countDownYear < 10 ? `0${countDownYear}` : countDownYear}</Time>
                <Interval>Years</Interval>
              </CountdownWrapper>
            }
            {countDownMonth === 0
              ?
              null
              :
              <CountdownWrapper>
                <Time>{countDownMonth < 10 ? `0${countDownMonth}` : countDownMonth}</Time>
                <Interval>Months</Interval>
              </CountdownWrapper>
            }
            <CountdownWrapper>
              <Time>{countDownDay < 10 ? `0${countDownDay}` : countDownDay}</Time>
              <Interval>Days</Interval>
            </CountdownWrapper>
            <CountdownWrapper>
              <Time>{countDownHour < 10 ? `0${countDownHour}` : countDownHour}</Time>
              <Interval>Hours</Interval>
            </CountdownWrapper>
            {countDownYear && countDownMonth
              ?
              null
              :
              <CountdownWrapper>
                <Time>{countDownMinute < 10 ? `0${countDownMinute}`: countDownMinute}</Time>
                <Interval>Mins</Interval>
              </CountdownWrapper>
            }
            {countDownMonth
              ?
              null
              :
              <CountdownWrapper>
                <Time>{countDownSecond < 10 ? `0${countDownSecond}` : countDownSecond}</Time>
                <Interval>Secs</Interval>
              </CountdownWrapper>
            }
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
            <button onClick={() => handleDoseDelete(dose, dosesArray, setDosesArray, setErrorMessage)}>Delete</button>
          </DoseContainer>
        })}
      </div>
    </>
  );
};

export default VaccineCard;
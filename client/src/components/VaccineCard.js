import React, { useState, useEffect } from "react";

import { addDose, handleDoseDelete, startCounter } from "../actions/cardActions";

import CardForm from "../reusables/CardForm";
import HomeButton from "reusables/HomeButton";

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

const VaccineCard = ({ dosesArray, setDosesArray, setTrackDose }) => {
  const [dose, setDose] = useState("");
  const [date, setDate] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [countDownYear, setCountDownYear] = useState(null);
  const [countDownMonth, setCountDownMonth] = useState(null);
  const [countDownDay, setCountDownDay] = useState(null);
  const [countDownHour, setCountDownHour] = useState(null);
  const [countDownMinute, setCountDownMinute] = useState(null);
  const [countDownSecond, setCountDownSecond] = useState(null);
  const [loading, setLoading] = useState(false);

  const lastDoseIndex = dosesArray?.length - 1;
  const latestDoseDate = dosesArray[lastDoseIndex]?.date;

  const onDoseSubmit = (event) => {
    event.preventDefault();

    if (dose !== "" && date !== "") {
      addDose(dose, date, batchNumber, setDose, setDate, setBatchNumber, setErrorMessage, setTrackDose, setLoading);
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

  if (loading) {
    return <Spinner></Spinner>
  };

  return (
    <>
      <Header>
        <HomeButton />
        <CountdownTitle>Book next dose to</CountdownTitle>
        {dosesArray.length > 0 &&
          <CountdownContainer>
            {countDownYear
              ?
              <CountdownWrapper>
                <Time>{countDownYear < 10 ? `0${countDownYear}` : countDownYear}</Time>
                <Interval>Years</Interval>
              </CountdownWrapper>
              :
              null
            }
            {countDownMonth
              ?
              <CountdownWrapper>
                <Time>{countDownMonth < 10 ? `0${countDownMonth}` : countDownMonth}</Time>
                <Interval>Months</Interval>
              </CountdownWrapper>
              :
              null
            }
            {countDownDay
              ?
              <CountdownWrapper>
                <Time>{countDownDay < 10 ? `0${countDownDay}` : countDownDay}</Time>
                <Interval>Days</Interval>
              </CountdownWrapper>
              :
              <CountdownWrapper>
                <Time>00</Time>
                <Interval>Days</Interval>
              </CountdownWrapper>
            }
            {countDownHour
              ?
              <CountdownWrapper>
                <Time>{countDownHour < 10 ? `0${countDownHour}` : countDownHour}</Time>
                <Interval>Hours</Interval>
              </CountdownWrapper>
              :

              <CountdownWrapper>
                <Time>00</Time>
                <Interval>Hours</Interval>
              </CountdownWrapper>
            }
            {countDownYear && countDownMonth
              ?
              null
              :
              <>
                {countDownMinute
                  ?
                  <CountdownWrapper>
                    <Time>{countDownMinute < 10 ? `0${countDownMinute}` : countDownMinute}</Time>
                    <Interval>Mins</Interval>
                  </CountdownWrapper>
                  :
                  <CountdownWrapper>
                    <Time>00</Time>
                    <Interval>Mins</Interval>
                  </CountdownWrapper>
                }
              </>
            }
            {countDownMonth
              ?
              null
              :
              <>
                {countDownSecond
                  ?
                  <CountdownWrapper>
                    <Time>{countDownSecond < 10 ? `0${countDownSecond}` : countDownSecond}</Time>
                    <Interval>Secs</Interval>
                  </CountdownWrapper>
                  :
                  <CountdownWrapper>
                    <Time>00</Time>
                    <Interval>Secs</Interval>
                  </CountdownWrapper>
                }
              </>
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
          <TagParagraph>Next Dose</TagParagraph>
        </HeaderTags>
        {dosesArray?.map((dose) => {
          return <DoseContainer key={dose._id}>
            <DoseParagraph>{dose.dose}</DoseParagraph>
            <DoseParagraph>{dose.date}</DoseParagraph>
            <DoseParagraph>{dose?.batchNumber}</DoseParagraph>
            <DoseParagraph>{dose.nextDose}</DoseParagraph>
            <button onClick={() => {
              handleDoseDelete(dose, dosesArray, setDosesArray, setTrackDose, setErrorMessage)
            }}>Delete</button>
          </DoseContainer>
        })}
      </div>
    </>
  );
};

export default VaccineCard;
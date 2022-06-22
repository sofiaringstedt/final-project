import React, { useState, useEffect } from "react";

import { addDose, handleDoseDelete, startCounter } from "../actions/cardActions";

import CardForm from "../reusables/CardForm";
import NavigateBackButton from "reusables/NavigateBackButton";
import checkBrowser from "actions/checkBrowser";

import waste from "../assets/waste.png";

import { Spinner } from "../styled-components/globalStyles";
import {
  CardContainer,
  Header,
  CountdownTitle,
  CountdownContainer,
  CountdownWrapper,
  Time,
  Interval,
  CardWrapper,
  CardHeader,
  UserDetailsContainer,
  UserDetailsWrapper,
  UserName,
  NameLabel,
  Table,
  Label,
  IconWrapper,
  TrashIcon,
  TableHeader,
  DoseContainer,
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
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);

  const lastDoseIndex = dosesArray?.length - 1;
  const latestDoseDate = dosesArray[lastDoseIndex]?.date;

  const firstName = JSON.parse(localStorage.getItem("user"))?.firstName;
  const lastName = JSON.parse(localStorage.getItem("user"))?.lastName;

  const onDoseSubmit = (event) => {
    event.preventDefault();

    if (dose !== "" && date !== "") {
      addDose(dose, date, batchNumber, setDose, setDate, setBatchNumber, setErrorMessage, setTrackDose, setLoading);
      setErrorMessage("");
    } else {
      setErrorMessage("Dose and date is required");
    }
  };

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

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
    <CardContainer>
      <Header addTop={dosesArray.length > 0 }>
        <NavigateBackButton />
        {dosesArray.length > 0 && checkBrowser !== "Safari" && isDesktop
          ?
          <CountdownTitle>Take next dose in...</CountdownTitle>
          :
          <CountdownTitle>Take next dose on...</CountdownTitle>
        }
        {dosesArray.length > 0 && checkBrowser !== "Safari" && isDesktop
          ?
            <CountdownContainer>
              {countDownYear > 0
                ?
                <CountdownWrapper>
                  <Time>{countDownYear < 10 ? `0${countDownYear}` : countDownYear}</Time>
                  <Interval>{countDownYear === 1 ? "Year" : "Years"}</Interval>
                </CountdownWrapper>
                :
                null
              }
              {countDownMonth > 0
                ?
                <CountdownWrapper>
                  <Time>{countDownMonth < 10 ? `0${countDownMonth}` : countDownMonth}</Time>
                  <Interval>{countDownMonth === 1 ? "Month" : "Months"}</Interval>
                </CountdownWrapper>
                :
                null
              }
              {countDownDay > 0
                ?
                <CountdownWrapper>
                  <Time>{countDownDay < 10 ? `0${countDownDay}` : countDownDay}</Time>
                  <Interval>{countDownDay === 1 ? "Day" : "Days"}</Interval>
                </CountdownWrapper>
                :
                <CountdownWrapper>
                  <Time>00</Time>
                  <Interval>Days</Interval>
                </CountdownWrapper>
              }
              {countDownHour > 0
                ?
                <CountdownWrapper>
                  <Time>{countDownHour < 10 ? `0${countDownHour}` : countDownHour}</Time>
                  <Interval>{countDownHour === 1 ? "Hour" : "Hours"}</Interval>
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
                  {countDownMinute > 0
                    ?
                    <CountdownWrapper>
                      <Time>{countDownMinute < 10 ? `0${countDownMinute}` : countDownMinute}</Time>
                      <Interval>{countDownMinute === 1 ? "Min" : "Mins"}</Interval>
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
                  {countDownSecond > 0
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
          : 
          <p>{dosesArray[dosesArray.length - 1]?.nextDose}</p>
        }
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
        {errorMessage && <p>{errorMessage}</p>}
      </Header>
      <CardWrapper>
        <CardHeader>Vaccination Record Card</CardHeader>
        <UserDetailsContainer>
          <UserDetailsWrapper>
            <UserName>{lastName}</UserName>
            <hr />
            <NameLabel>Last Name</NameLabel>
          </UserDetailsWrapper>
          <UserDetailsWrapper>
            <UserName>{firstName}</UserName>
            <hr />
            <NameLabel>First Name</NameLabel>
          </UserDetailsWrapper>
        </UserDetailsContainer>
        <Table>
          <tbody>
            <Label>
              <TableHeader>Vaccine</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader hide>
                Name/ Manufacturer
                <br />
                Lot Number
              </TableHeader>
              <th>Next Dose</th>
            </Label>
            {dosesArray?.map((dose) => {
              return <DoseContainer key={dose._id}>
                <TableHeader>{dose.dose}</TableHeader>
                <TableHeader>{dose.date}</TableHeader>
                <TableHeader hide>{dose?.batchNumber}</TableHeader>
                <th>{dose.nextDose}</th>
                <IconWrapper onClick={() => {
                  handleDoseDelete(dose, dosesArray, setDosesArray, setTrackDose, setErrorMessage)
                }}><TrashIcon src={waste}></TrashIcon></IconWrapper>
              </DoseContainer>
            })}
          </tbody>
        </Table>
      </CardWrapper>
    </CardContainer>
  );
};

export default VaccineCard;
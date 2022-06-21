import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";
import VaccineCard from "./components/VaccineCard";
import Map from "./components/Map";
import Reminder from "./components/Reminder";
import NotFound from "./components/NotFound";
import Resources from "components/Resources";
import Information from "components/Information";

import { API_URL } from "utils/urls";

const App = () => {
  const [mode, setMode] = useState("register");
  const [method, setMethod] = useState("POST");
  const [nextDose, setNextDose] = useState("");
  const [totalDoses, setTotalDoses] = useState(0);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [trackDose, setTrackDose] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [editAccount, setEditAccount] = useState(false);
  const [dosesArray, setDosesArray] = useState([]);

  const userId = JSON.parse(localStorage.getItem("user"))?.userId;
  const token = JSON.parse(localStorage.getItem("user"))?.accessToken;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: { Authorization: token },
    };

    setLoading(true);

    userId &&
      fetch(API_URL(`user/${userId}`), options)
        .then((response) => response.json())
        .then((doseData) => {
          setDosesArray(doseData.response.doses);
          setTotalDoses(doseData.response.doses.length);
          setNextDose(
            doseData.response.doses[doseData.response.doses.length - 1]
              ?.nextDose
          );
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
  }, [loggedIn, trackDose, token, userId]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route
          path="/register"
          element={
            <Register 
              mode={mode} 
              method={method} 
              editAccount={editAccount}
              setEditAccount={setEditAccount}
            />}
        />
        <Route
          path="/account"
          element={
            <Account
              setMode={setMode}
              setMethod={setMethod}
              setLoggedIn={setLoggedIn}
              setEditAccount={setEditAccount}
              totalDoses={totalDoses}
            />
          }
        />
        <Route
          path="/card"
          element={
            <VaccineCard
              dosesArray={dosesArray}
              setDosesArray={setDosesArray}
              setTrackDose={setTrackDose}
            />
          }
        />
        <Route path="/reminder" element={<Reminder nextDose={nextDose} />} />
        <Route path="/map" element={<Map />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to={"/404"} replace />} />
        <Route path="/information" element={<Information />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

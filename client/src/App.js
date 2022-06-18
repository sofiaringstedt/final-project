import React, {useState} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";
import VaccineCard from "./components/VaccineCard";
import Map from "./components/Map";
import Reminder from "./components/Reminder"
import NotFound from "./components/NotFound";
import Resources from "components/Resources";

const App = () => {
  const [mode, setMode] = useState("register");
  const [method, setMethod] = useState("POST");
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register mode={mode} method={method} />} />
        <Route path="/account" element={<Account setMode={setMode} setMethod={setMethod} />} />
        <Route path="/card" element={<VaccineCard />} />
        <Route path="/reminder" element={<Reminder />} />
        <Route path="/map" element={<Map />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to={"/404"} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

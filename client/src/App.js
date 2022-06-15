import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";
import VaccineCard from "./components/VaccineCard";
import Map from "./components/Map"

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
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

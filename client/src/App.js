import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";
import VaccineCard from "./components/VaccineCard";
import Button from "./components/Buttons";

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
      </Routes>
        <Button/>
    </BrowserRouter>
  );
};

export default App;

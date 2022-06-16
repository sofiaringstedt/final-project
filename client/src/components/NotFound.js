import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/")}>Home</button>
      <h1>404 Page not found</h1>
    </>
  )
};

export default NotFound;
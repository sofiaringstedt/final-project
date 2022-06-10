import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => navigate("/login");
  
  return (
    <>
      <div>Home</div>
      <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Home
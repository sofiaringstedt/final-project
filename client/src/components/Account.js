import React from "react";
import { useSelector } from "react-redux";

const Account = () => {
  const firstName = useSelector((store) => store.user.firstName);

  return (
    <>
      <h1> hello {firstName}</h1>
      <button>sign out</button>
    </>
  )
}

export default Account
import { API_URL } from "../utils/urls";

export const loginUser = (email, password, navigate) =>{
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  };

  fetch(API_URL("login"), options)
    .then((response) => response.json())
    .then((userData) => {
      if (userData.success) {
        // console.log(userData)
        localStorage.setItem("user", JSON.stringify({
          userId: userData.userId,
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          accessToken: userData.accessToken
        }));
        navigate("/account")     
      } else {
        navigate("/register")
      }
    })
    .catch((error) => console.log(error))
}

export const registerUser = (firstName, lastName, email, password, mode, method, navigate, setErrorMessage ) => {
  const options = {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      firstName, 
      lastName, 
      email, 
      password 
    })
  }
  
  fetch(API_URL(mode), options)
    .then((response) => response.json())
    .then((userData) => {
      console.log(userData)
      if (userData.success) {
        localStorage.setItem("user", JSON.stringify({
          userId: userData.response.userId,
          firstName: userData.response.firstName,
          lastName: userData.response.lastName,
          email: userData.response.email,
          accessToken: userData.response.accessToken
        }));
  
      navigate("/account")
      } else {
        setErrorMessage(userData.response)
      }
    })
  .catch((error) => console.log(error))
}
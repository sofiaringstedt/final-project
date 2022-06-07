import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("user")
  ? {
    userId: JSON.parse(localStorage.getItem("user")).userId,
    firstName: JSON.parse(localStorage.getItem("user")).firstName,
    lastName: JSON.parse(localStorage.getItem("user")).lastName,
    email: JSON.parse(localStorage.getItem("user")).email,
    accessToken: JSON.parse(localStorage.getItem("user")).accessToken,
    error: null
  }
  : {
    userId: null,
    firstName: null,
    lastName: null,
    email: null,
    accessToken: null,
    error: null
  }

  console.log(initialState)

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (store, action) => {
      store.userId = action.payload;
    },
    setFirstName: (store, action) => {
      store.firstName = action.payload;
    },
    setLastName: (store, action) => {
      store.lastName = action.payload;
    },
    setEmail: (store, action) => {
      store.email = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
    signOut: () => {
      return initialState;
    }
  },
});

export default user;

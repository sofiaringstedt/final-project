import React from "react";
import thunkMiddleware from "redux-thunk";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, combineReducers, compose, applyMiddleware  } from "@reduxjs/toolkit";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";

import user from "./reducers/user";
import card from "./reducers/card";

const reducers = combineReducers({
  user: user.reducer,
  card: card.reducer
});

const persistedStateJSON = localStorage.getItem("user");
const persistedState = persistedStateJSON ? JSON.parse(persistedStateJSON) : {};

const composedEnhancers =
  (process.env.NODE_ENV !== "production" &&
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = configureStore(
  { reducer: reducers },
  persistedState,
  composedEnhancers(applyMiddleware(thunkMiddleware)) 
);

store.subscribe(() => {
  localStorage.setItem("user", JSON.stringify(store.getState()));
});

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

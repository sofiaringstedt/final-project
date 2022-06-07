import { createSlice } from "@reduxjs/toolkit";

const card = createSlice({
  name: "card",
  initialState: {
    cards: [],
    error: null
  },
  reducers: {
    setCards: (store, action) => {
      store.cards = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
    deleteCard: (store, action) => {
      store.cards = store.cards.filter((card) => card._id !== action.payload)
    }
  }
});

export default card;
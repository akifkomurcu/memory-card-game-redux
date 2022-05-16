import { createSlice } from "@reduxjs/toolkit";
import cardData from "../cardData.json";
export const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards: cardData,
    compareCards: [],
    correctCards: [],
    result: 0,
    isTrue: false
  },

  reducers: {
    setCards: (state, action) => {
      if (state.compareCards.length < 2) {
        state.compareCards = [...state.compareCards, action.payload]

      }
      if (state.compareCards.length === 2 && state.compareCards[0].value === state.compareCards[1].value) {
        state.result = parseInt(state.result) + 50
        state.correctCards = [...state.correctCards, state.compareCards[0]]
        state.compareCards = []


      }

      if (state.compareCards.length === 2 && state.compareCards[0].value !== state.compareCards[1].value) {
        state.result = parseInt(state.result) - 10
        state.compareCards = []
        // state.compareCards = [];
      }




    },
    setTrue: (state, action) => {
      state.isTrue = action.payload

    }
  }
});
export const { setCards, setTrue } = cardSlice.actions;

export default cardSlice.reducer;

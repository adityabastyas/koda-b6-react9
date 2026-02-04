import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const surveyResultSlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    addData: (state, actions) => {
      state.data.push(actions.payload);
    },
    removeData: (state, actions) => {
      state.data = state.data.fil
    },
  },
});

export const { addData, removeData } = surveyResultSlice.actions;
export default surveyResultSlice.reducer;

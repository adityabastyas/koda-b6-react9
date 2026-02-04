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
    removeData: (state) => {
      state.data = [];
    },
  },
});

export const { addData, removeData } = surveyResultSlice.actions;
export default surveyResultSlice.reducer;

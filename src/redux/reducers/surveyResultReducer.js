import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const surveyResultSlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    removeData: (state, action) => {
      state.data.splice(action.payload, 1);
    },
  },
});

export const { addData, removeData } = surveyResultSlice.actions;
export default surveyResultSlice.reducer;

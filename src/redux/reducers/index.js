import { combineReducers } from "@reduxjs/toolkit";
import surveyReducer from "./surveyResultReducer";

export default combineReducers({
  survey: surveyReducer,
});

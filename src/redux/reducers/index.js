import { combineReducers } from "@reduxjs/toolkit";
import surveyReducer from "./surveyResultReducer";
import authLogin from "./authReducer";

export default combineReducers({
  survey: surveyReducer,
  auth: authLogin,
});

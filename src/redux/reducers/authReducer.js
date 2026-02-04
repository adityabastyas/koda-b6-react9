import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  userValid: {
    email: "koda@mail.com",
    password: "1234",
  },
};

const authSlice = createSlice({
  name: "authLogin",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      if (
        email === state.userValid.email &&
        password === state.userValid.password
      ) {
        state.email = email;
        state.password = password;
      }
    },
    logout: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

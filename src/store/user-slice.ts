import { createSlice } from "@reduxjs/toolkit";

import Profile from "../assets/profile.png";

type initialStateType = {
  username: string;
  password: string;
  profile: string;
};

const initialState: initialStateType = {
  username: "Vito Mohagheghian",
  password: "12341234",
  profile: Profile,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const userActions = userSlice.actions;

export default userSlice;

import { createSlice } from "@reduxjs/toolkit";

type powerModeType = {
  turnedOff: boolean;
  powerMode: string;
};

type initialStateType = {
  isSignedIn: boolean;
  powerMode: {
    turnedOff: boolean;
    powerMode?: string;
  };
};

const initialState: initialStateType = {
  isSignedIn: false,
  powerMode: {
    turnedOff: false,
  },
};

const signInSlice = createSlice({
  name: "SignIn",
  initialState,
  reducers: {
    SignIn: (state) => {
      state.isSignedIn = true;
    },
    SignOut: (state) => {
      state.isSignedIn = false;
    },
    setPowerMode: (state, action) => {
      const power = action.payload;

      const powerModeObject: powerModeType = {
        turnedOff: power.turnedOff,
        powerMode: power.powerMode,
      };

      state.powerMode = powerModeObject;
    },
  },
});

export const signInActions = signInSlice.actions;

export default signInSlice;

import { createSlice } from "@reduxjs/toolkit";
import { ReactElement } from "react";

import { pinnedAppsInTaskbar, pinnedAppsInStartMenu, recommendedAppsInStartMenu } from "../modules/applications";

type appType = {
  icon: string;
  name: string;
  Component: () => ReactElement;
};

type initialStateType = {
  volume: number;
  notifications: string[];
  IsStartMenuVisiable: boolean;
  pinnedTaskbarApps: appType[];
  pinnedStartMenuApps: appType[];
  recommendedAppsinStartMenu: appType[];
};

const initialState: initialStateType = {
  volume: 90,
  notifications: ["2"],
  IsStartMenuVisiable: false,
  pinnedTaskbarApps: [...pinnedAppsInTaskbar],
  pinnedStartMenuApps: [...pinnedAppsInStartMenu],
  recommendedAppsinStartMenu: [...recommendedAppsInStartMenu],
};

const mainSlice = createSlice({
  name: "taskbar",
  initialState,
  reducers: {
    toggleStartMenu: (state, action) => {
      state.IsStartMenuVisiable = action.payload;
    },
  },
});

export const mainActions = mainSlice.actions;

export default mainSlice;

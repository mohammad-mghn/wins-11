import { createSlice } from "@reduxjs/toolkit";
import { ReactElement } from "react";

import { pinnedAppsInTaskbar, pinnedAppsInStartMenu, recommendedAppsInStartMenu } from "../modules/applications";

type appType = {
  icon: string;
  name: string;
  Component: () => ReactElement;
};

type notification = {
  title: string;
  time: string;
  mainheader: string;
  details: string;
};

type initialStateType = {
  volume: number;
  notifications: notification[];
  rightPanel: boolean;
  IsStartMenuVisiable: boolean;
  pinnedTaskbarApps: appType[];
  pinnedStartMenuApps: appType[];
  recommendedAppsinStartMenu: appType[];
};

const initialState: initialStateType = {
  volume: 90,
  notifications: [
    {
      title: "Visual Studio Code",
      time: "5:09 PM",
      mainheader: "New Update",
      details: "New Update is ready to install",
    },
  ],
  rightPanel: false,
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
    toggleRightPanel: (state, action) => {
      if (action.payload !== undefined) {
        state.rightPanel = action.payload;
      } else {
        state.rightPanel = !state.rightPanel;
      }
    },
    clearAllNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const mainActions = mainSlice.actions;

export default mainSlice;

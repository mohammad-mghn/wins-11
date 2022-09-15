import { createSlice } from "@reduxjs/toolkit";
import { ReactElement } from "react";

import {
  pinnedAppsInTaskbar,
  desktopApps,
  pinnedAppsInStartMenu,
  recommendedAppsInStartMenu,
} from "../modules/applications";

type appType = {
  icon: string;
  name: string;
  Component: () => ReactElement;
};

type desktopAppType = {
  icon: string;
  name: string;
  path?: string;
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
  PopUpControlPanel: boolean;
  IsStartMenuVisiable: boolean;
  desktopApps: desktopAppType[];
  pinnedTaskbarApps: appType[];
  pinnedStartMenuApps: appType[];
  recommendedAppsinStartMenu: appType[];
};

const initialState: initialStateType = {
  volume: 75,
  notifications: [
    {
      title: "Visual Studio Code",
      time: "5:09 PM",
      mainheader: "New Update",
      details: "New Update is ready to install",
    },
  ],
  rightPanel: false,
  PopUpControlPanel: false,
  IsStartMenuVisiable: false,
  desktopApps: [...desktopApps],
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
    toggleControlPanel: (state, action) => {
      if (action.payload !== undefined) {
        state.PopUpControlPanel = action.payload;
      } else {
        state.PopUpControlPanel = !state.PopUpControlPanel;
      }
    },
    clearAllNotifications: (state) => {
      state.notifications = [];
    },
    changeVolumeHandler: (state, action) => {
      state.volume = action.payload;
    },
  },
});

export const mainActions = mainSlice.actions;

export default mainSlice;

import { createSlice } from "@reduxjs/toolkit";

type appArrayType = {
  name: string;
  isActivated: boolean;
};

type initialStateType = {
  running: Array<appArrayType>;
  minimized: Array<appArrayType | undefined>;
};

const initialState: initialStateType = {
  running: [],
  minimized: [],
};

const appsSlice = createSlice({
  name: "apps",
  initialState,
  reducers: {
    runApp: (state, action) => {
      const appName: string = action.payload;

      state.running.forEach((item: appArrayType) => {
        item.isActivated = false;
      });

      if (appName) {
        const newRunningApp: any = { name: appName, isActivated: true };

        state.running.push(newRunningApp);
      }
    },
    closeApp: (state, action) => {
      const appName: string = action.payload;

      const appIndex = state.running.findIndex((item) => item.name === appName);

      state.running.splice(appIndex, 1);

      if (state.running[0]) {
        state.running[0].isActivated = true;
      }
    },
    activeApp: (state, action) => {
      const appName = action.payload;

      state.running.forEach((item) => {
        item.isActivated = false;
      });

      const appIndex = state.running.findIndex((item) => item.name === appName);

      state.running[appIndex].isActivated = true;
    },
    minimizeApp: (state, action) => {
      const appName: string = action.payload;

      const runningApp = state.running.find((item) => item.name === appName);

      state.minimized.push(runningApp);

      const runningAppIndex = state.running.findIndex((item) => item.name === appName);

      state.running.splice(runningAppIndex, 1);

      state.running.forEach((item) => {
        item.isActivated = false;
      });

      if (state.running[0]) {
        state.running[0].isActivated = true;
      }
    },
    runMinimizedApp: (state, action) => {
      const appName: string = action.payload;

      state.running.forEach((item) => {
        item.isActivated = false;
      });

      const minimizedApp = state.minimized.find((item) => item?.name === appName);

      if (minimizedApp) {
        const minimizedAppIndex = state.minimized.findIndex((item) => item?.name === appName);

        state.running.push({ name: minimizedApp.name, isActivated: true });

        state.minimized.splice(minimizedAppIndex, 1);
      }
    },
    closeAll: (state) => {
      state.running = [];
      state.minimized = [];
    },
  },
});

export const appsActions = appsSlice.actions;

export default appsSlice;

import { configureStore } from "@reduxjs/toolkit";

import signInSlice from "./signin-slice";
import mainSlice from "./main-slice";
import userSlice from "./user-slice";
import appsSlice from "./apps-slice";
import edgeAppSlice from "./edge-slice";

import fileExplorerSlice from "./fileExplorer";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    signIn: signInSlice.reducer,
    main: mainSlice.reducer,
    apps: appsSlice.reducer,
    edge: edgeAppSlice.reducer,
    fileExplorer: fileExplorerSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production", // disable devTools in production
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

import { configureStore } from "@reduxjs/toolkit";

import signInSlice from "./signin-slice";
import mainSlice from "./main-slice";
import userSlice from "./user-slice";
import appsSlice from "./apps-slice";
import edgeAppSlice from "./edge-slice";
<<<<<<< HEAD
=======
import fileExplorerSlice from "./fileExplorer";
>>>>>>> 67ee87a (remove html file)

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
<<<<<<< HEAD
    signIn: signInSlice.reducer,
    main: mainSlice.reducer,
    apps: appsSlice.reducer,
    edge: edgeAppSlice.reducer,
=======
    main: mainSlice.reducer,
    apps: appsSlice.reducer,
    edge: edgeAppSlice.reducer,
    signIn: signInSlice.reducer,
    fileExplorer: fileExplorerSlice.reducer
>>>>>>> 67ee87a (remove html file)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

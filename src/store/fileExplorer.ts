import { createSlice } from "@reduxjs/toolkit";

import { sidebarArray } from "../modules/sidebar-array";
import { folders } from "../modules/folders";

type directory = {
  name: string;
  path: string;
  header: string;
  icon: undefined | string;
};

type initialStateType = {
  folders: directory[];
  path: string;
  past: string[];
  future: string[];
  sidebar: sidebarType;
};

type sidebarType = {
  header: string;
  icon: string | undefined;
  path: string;
  children: { header: string; path: string; icon: string | undefined }[];
}[];

const initialState: initialStateType = {
  past: [],
  future: [],
  folders: folders,
  path: "This PC:",
  sidebar: sidebarArray,
};

const fileExplorerSlice = createSlice({
  name: "fileExplorer",
  initialState: initialState,
  reducers: {
    changePath: (state, action) => {
      // push to past array for backward feature
      state.past.push(state.path);

      // then change path
      state.path = action.payload;
    },
    forward: (state) => {
      const futureArray = state.future;

      if (futureArray.length !== 0) {
        // check if there's any item in future array
        state.past.push(state.path);

        // the reason is that next paths will push to future array so the first item will be next path
        state.path = futureArray[0];

        // at the end we will remove first item
        state.future.shift();
      }
    },
    backward: (state) => {
      const pastArray = state.past;

      // check if there's any item in past array
      if (pastArray.length !== 0) {
        // then current path will add to beginning of array
        state.future.unshift(state.path);

        // then past the past last item to current path
        state.path = pastArray[pastArray.length - 1];

        // at the end remove past array last item we can do it with pastArray variable because it's relative
        pastArray.pop();
      }
    },
    rootHandler: (state) => {
      // bacause it will change path base may sometimes is desktop, may C drive so we need to make sure we have past array first item
      if (state.past.length !== 0) {
        // to make pastArray not relative to can access to past items after deleting that
        const pastArray = JSON.parse(JSON.stringify(state.past[0]));

        // to remove first item because it will  include base path like C: so ad first click it will go to c:
        state.past.shift();

        // then push current path to make it ready for future array
        state.past.push(state.path);

        state.path = pastArray;

        state.future = state.past;

        state.past = [];
      }
    },
  },
});

export const fileExplorerActions = fileExplorerSlice.actions;

export default fileExplorerSlice;

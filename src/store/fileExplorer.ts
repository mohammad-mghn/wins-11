import { createSlice } from "@reduxjs/toolkit";
import path from "path";

type directory = {
  name: string;
  path: string;
  header: string;
  icon: undefined | string;
};

type initialStateType = {
  folders: directory[];
  path: string;
  past: [];
  future: [];
};

const initialState: initialStateType = {
  past: [],
  future: [],
  folders: [
    {
      name: "words",
      header: "npmgsdfgsdfgsdfg ",
      path: "C:/Desktop/words",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react 34535345",
      path: "C:/Desktop",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm5 ",
      path: "C:/Downloads",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react ",
      path: "C:/Desktop",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react 34535345",
      path: "C:/Desktop",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm5 ",
      path: "C:/Downloads",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react ",
      path: "C:/Desktop",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react 34535345",
      path: "C:/Desktop",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm5 ",
      path: "C:/Downloads",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react ",
      path: "C:/Desktop",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react 34535345",
      path: "C:/Desktop",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm5 ",
      path: "C:/Downloads",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react ",
      path: "C:/Desktop",
      icon: undefined,
    },

    {
      name: "Disk C:",
      header: "C:",
      path: "C:",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm5 ",
      path: "C:/Downloads",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react ",
      path: "C:/Desktop",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react 34535345",
      path: "C:/Desktop",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm5 ",
      path: "C:/Downloads",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react ",
      path: "C:/Desktop",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react 34535345",
      path: "C:/Desktop",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm5 ",
      path: "C:/Downloads",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react ",
      path: "C:/Desktop",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react 34535345",
      path: "C:/Desktop",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm5 ",
      path: "C:/Downloads",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react ",
      path: "C:/Desktop",
      icon: undefined,
    },

    {
      name: "Disk C:",
      header: "C:",
      path: "C:",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm5 ",
      path: "C:/Downloads",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react ",
      path: "C:/Desktop",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react 34535345",
      path: "C:/Desktop",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm5 ",
      path: "C:/Downloads",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react ",
      path: "C:/Desktop",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react 34535345",
      path: "C:/Desktop",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm5 ",
      path: "C:/Downloads",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react ",
      path: "C:/Desktop",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react 34535345",
      path: "C:/Desktop",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm5 ",
      path: "C:/Downloads",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react ",
      path: "C:/Desktop",
      icon: undefined,
    },
    {
      name: "345345234523452345",
      header: "23452345234",
      path: "C:/Desktop/80838745872304985",
      icon: undefined,
    },
    {
      name: "words",
      header: "npm react ",
      path: "C:/Desktop/80838745872304985/fonts",
      icon: undefined,
    },

    {
      name: "Local Disk (C:)",
      header: "C:",
      path: "C:",
      icon: undefined,
    },
  ],
  path: "C:/Desktop",
};

const fileExplorerSlice = createSlice({
  name: "fileExplorer",
  initialState: initialState,
  reducers: {
    changePath: (state, action) => {
      const newPath = action.payload;

      if (newPath) {
        state.path = newPath;
      }
    },
  },
});

export const fileExplorerActions = fileExplorerSlice.actions;

export default fileExplorerSlice;

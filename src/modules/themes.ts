export const DefaultTheme = {
  mainHeader: "#ffffff",
  boxShadow: "#ffffff50",
  iconColor: 1,
  borderColor: "rgba(66, 66, 66, 0.75)",
  darkerBackground: "rgba(19, 19, 19, 0.699)",
  darkBackground: "rgba(63, 63, 63, 0.459)",
  personalizedColor: "rgb(14, 203, 236)",
};
export const darkTheme = {
  mainHeader: "#000000",
  boxShadow: "#00000050",
  iconColor: 0,
  borderColor: "rgba(66, 66, 66, 0.75)",
  darkerBackground: "rgba(19, 19, 19, 0.699)",
  darkBackground: "rgba(63, 63, 63, 0.459)",
  personalizedColor: "rgb(14, 203, 236)",
};

type ThemeType = typeof DefaultTheme;

export type { ThemeType };

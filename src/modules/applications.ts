// Applications components

import Edge from "../components/windowsApps/edge";
import RecycleBinComponent from "../components/windowsApps/recycleBin";
import FileExplorer from "../components/windowsApps/fileExplorer/index";
import VSCode from "../components/windowsApps/VSCode/index";

// Applications images

import Explorer from "../assists/icons/explorer.png";
import Eadge from "../assists/icons/eadge.png";
import Settings from "../assists/icons/settings.png";
import Mail from "../assists/icons/mail.png";
import RecycleBin from "../assists/icons/recycle-bin.png";
import Store from "../assists/icons/store.png";
import Spotify from "../assists/icons/spotify.png";
import Notepad from "../assists/icons/notepad.png";
import Board from "../assists/icons/board.png";
import VSCodeIcon from "../assists/icons/vscode.png";

export const Applications = [
  {
    icon: Explorer,
    Component: FileExplorer,
    name: "Explorer",
  },
  {
    icon: Eadge,
    Component: Edge,
    name: "Edge",
    removeHeader: true,
  },
  {
    icon: Settings,
    Component: FileExplorer,
    name: "Settings",
  },
  {
    icon: Mail,
    Component: FileExplorer,
    name: "Mail",
  },
  {
    icon: RecycleBin,
    Component: RecycleBinComponent,
    name: "Recycle bin",
  },
  {
    icon: Store,
    Component: FileExplorer,
    name: "Microsoft Storeasdfa",
  },
  {
    icon: Spotify,
    Component: FileExplorer,
    name: "Spotiy",
  },
  {
    icon: Notepad,
    Component: FileExplorer,
    name: "Notepad",
  },
  {
    icon: Board,
    Component: FileExplorer,
    name: "White Board",
  },
  {
    icon: VSCodeIcon,
    Component: VSCode,
    name: "VSCode",
  },
];

// pinned applications in start menu
export const pinnedAppsInStartMenu = [
  {
    icon: Explorer,
    Component: FileExplorer,
    name: "Explorer",
  },
  {
    icon: Eadge,
    Component: FileExplorer,
    name: "Edge",
  },
  {
    icon: Settings,
    Component: FileExplorer,
    name: "Settings",
  },
  {
    icon: Mail,
    Component: FileExplorer,
    name: "Mail",
  },
  {
    icon: RecycleBin,
    Component: FileExplorer,
    name: "Recycle bin",
  },
  {
    icon: Store,
    Component: FileExplorer,
    name: "Microsoft Storeasdfa",
  },
  {
    icon: Spotify,
    Component: FileExplorer,
    name: "Spotiy",
  },
  {
    icon: Notepad,
    Component: FileExplorer,
    name: "Notepad",
  },
  {
    icon: Board,
    Component: FileExplorer,
    name: "White Board",
  },
];

// pinned applications in taskbar
export const pinnedAppsInTaskbar = [
  {
    icon: Explorer,
    Component: FileExplorer,
    name: "Explorer",
  },
  {
    icon: Eadge,
    Component: FileExplorer,
    name: "Edge",
  },
  {
    icon: Settings,
    Component: FileExplorer,
    name: "Settings",
  },
  {
    icon: Mail,
    Component: FileExplorer,
    name: "Mail",
  },
  {
    icon: RecycleBin,
    Component: FileExplorer,
    name: "Recycle bin",
  },
  {
    icon: Store,
    Component: FileExplorer,
    name: "Microsoft Storeasdfa",
  },
  {
    icon: Notepad,
    Component: FileExplorer,
    name: "Notepad",
  },
  {
    icon: VSCodeIcon,
    Component: VSCode,
    name: "VSCode",
  },
];

// recommended applications in start menu
export const recommendedAppsInStartMenu = [
  {
    icon: Eadge,
    Component: FileExplorer,
    name: "Edge",
  },
  {
    icon: Settings,
    Component: FileExplorer,
    name: "Settings",
  },
  {
    icon: Mail,
    Component: FileExplorer,
    name: "Mail",
  },
  {
    icon: RecycleBin,
    Component: FileExplorer,
    name: "Recycle bin",
  },
  {
    icon: Store,
    Component: FileExplorer,
    name: "Microsoft Storeasdfa",
  },
  {
    icon: Spotify,
    Component: FileExplorer,
    name: "Spotiy",
  },
];

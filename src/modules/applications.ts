// Applications components

import Edge from "../components/windowsApps/edge";
import RecycleBinComponent from "../components/windowsApps/recycleBin";
import FileExplorer from "../components/windowsApps/fileExplorer/index";
import VSCode from "../components/windowsApps/VSCode/index";
import Notepad from "../components/windowsApps/notepad/index";
import Mail from "../components/windowsApps/mail/index";

// Applications images

import Explorer from "../assets/icons/explorer.png";
import Folder from "../assets/icons/folder-empty.png";
import ThisPC from "../assets/icons/this-pc.png";
import Eadge from "../assets/icons/eadge.png";
import Settings from "../assets/icons/settings.png";
import MailIcon from "../assets/icons/mail.png";
import RecycleBin from "../assets/icons/recycle-bin.png";
import Store from "../assets/icons/store.png";
import Spotify from "../assets/icons/spotify.png";
import NotepadIcon from "../assets/icons/notepad.png";
import Board from "../assets/icons/board.png";
import VSCodeIcon from "../assets/icons/vscode.png";

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
    icon: MailIcon,
    Component: Mail,
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
    icon: NotepadIcon,
    Component: Notepad,
    name: "Notepad",
  },
  {
    icon: VSCodeIcon,
    Component: VSCode,
    name: "Visual Studio Code",
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
    icon: MailIcon,
    Component: Mail,
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
    icon: NotepadIcon,
    Component: Notepad,
    name: "Notepad",
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
    icon: MailIcon,
    Component: Mail,
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
    icon: NotepadIcon,
    Component: Notepad,
    name: "Notepad",
  },
  {
    icon: VSCodeIcon,
    Component: VSCode,
    name: "Visual Studio Code",
  },
];

export const desktopApps = [
  {
    icon: ThisPC,
    path: "This PC:",
    name: "This PC",
  },
  {
    icon: RecycleBin,
    name: "Recycle bin",
  },
  {
    icon: Eadge,
    name: "Edge",
  },
  {
    icon: VSCodeIcon,
    name: "Visual Studio Code",
  },
  {
    icon: NotepadIcon,
    name: "Notepad",
  },
  {
    icon: Folder,
    path: "This PC:/desktop/wins-11-github",
    name: "Wins 11 github",
  },
  {
    icon: Folder,
    path: "This PC:/desktop/portfolio",
    name: "vito-portfolio-main",
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
    icon: MailIcon,
    Component: Mail,
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

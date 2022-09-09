import ThisPC from "../assists/icons/this-pc.png";
import Network from "../assists/icons/netword-pc.png";
import Music from "../assists/icons/music-folder.png";
import Pictures from "../assists/icons/pictures-folder.png";
import Desktop from "../assists/icons/desktop-folder-icon.png";
import Download from "../assists/icons/download-folder.png";
import RecycleBin from "../assists/icons/recycle-bin.png";
import Video from "../assists/icons/video-folder.png";
import OneDrive from "../assists/icons/one-drive.png";
import Docs from "../assists/icons/docs-folder.png";
import DiskWins from "../assists/icons/disk-wins.png";
import Disk from "../assists/icons/disk.png";

export const folders = [
  {
    name: "Local Disk (C:)",
    header: "C:",
    path: "C:",
    icon: Disk,
  },
  {
    name: "Local Disk (C:)",
    header: "Local Disk (C:)",
    path: "This PC:/C",
    icon: DiskWins,
  },
  {
    name: "This PC",
    header: "This PC",
    path: "This PC:",
    icon: ThisPC,
  },
  {
    name: "desktop",
    header: "Desktop",
    path: "This PC:/desktop",
    icon: Desktop,
  },
  {
    name: "downloads",
    header: "Downloads",
    path: "This PC:/downloads",
    icon: Download,
  },
  {
    name: "pictures",
    header: "Pictures",
    path: "This PC:/pictures",
    icon: Pictures,
  },
  {
    name: "music",
    header: "Music",
    path: "This PC:/music",
    icon: Music,
  },
  {
    name: "videos",
    header: "Videos",
    path: "This PC:/videos",
    icon: Video,
  },
  {
    name: "documents",
    header: "Documents",
    path: "This PC:/documents",
    icon: Docs,
  },
  {
    name: "onedrive",
    header: "onedrive",
    path: "onedrive:",
    icon: OneDrive,
  },
  {
    name: "network",
    header: "Network",
    path: "network:",
    icon: Network,
  },
  {
    name: "wins 11 github",
    header: "Wins 11 Github",
    path: "This PC:/desktop/wins-11-github",
    icon: undefined,
  },
  {
    name: "program files(x86)",
    header: "Program Files (x86)",
    path: "C:/Program Files(x86)",
    icon: undefined,
  },
  {
    name: "program files",
    header: "Program Files",
    path: "C:/Program Files",
    icon: undefined,
  },
  {
    name: "DRIVERS",
    header: "DRIVERS",
    path: "C:/DRIVERS",
    icon: undefined,
  },
  {
    name: "config",
    header: "config",
    path: "C:/config",
    icon: undefined,
  },
  {
    name: "programData",
    header: "ProgramData",
    path: "C:/programData",
    icon: undefined,
  },
  {
    name: "users",
    header: "Users",
    path: "C:/users",
    icon: undefined,
  },
  {
    name: "wins32-loader",
    header: "wins32-loader",
    path: "C:/wins32-loader",
    icon: undefined,
  },
  {
    name: "temp",
    header: "Temp",
    path: "C:/Temp",
    icon: undefined,
  },
  {
    name: "perfLogs",
    header: "perfLogs",
    path: "C:/perfLogs",
    icon: undefined,
  },
  {
    name: "recycle bin",
    header: "Recycle bin",
    path: "Recycle bin:",
    icon: RecycleBin,
  },
];

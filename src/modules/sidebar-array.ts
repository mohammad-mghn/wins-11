import Docs from "../assists/icons/docs.png";
import Star from "../assists/icons/star-sm.png";
import ThisPC from "../assists/icons/this-pc.png";
import Pictures from "../assists/icons/pictures.png";
import Download from "../assists/icons/download.png";
import Desktop from "../assists/icons/desktop-folder.png";
import Network from "../assists/icons/netword-pc.png";
import OneDrive from "../assists/icons/one-drive.png";
import Video from "../assists/icons/video.png";
import Music from "../assists/icons/music.png";
import Disk from "../assists/icons/disk.png";

export const sidebarArray = [
  {
    header: "Quick access",
    icon: Star,
    path: "",
    children: [
      {
        header: "Desktop",
        icon: Desktop,
        path: "This PC:/desktop",
      },
      {
        header: "Donwloads",
        icon: Download,
        path: "This PC:/downloads",
      },
      {
        header: "Pictures",
        icon: Pictures,
        path: "This PC:/pistures",
      },
      {
        header: "Music",
        icon: Music,
        path: "This PC:/music",
      },
      {
        header: "Wins 11 Github",
        icon: undefined,
        path: "This PC:/desktop/wins-11-github",
      },
    ],
  },
  {
    header: "OneDrive",
    icon: OneDrive,
    path: "onedrive:",
    children: [],
  },
  {
    header: "This PC",
    icon: ThisPC,
    path: "This PC:",
    children: [
      {
        header: "Desktop",
        icon: Desktop,
        path: "This PC:/desktop",
      },
      {
        header: "Documents",
        icon: Docs,
        path: "This PC:/documents",
      },
      {
        header: "Downloads",
        icon: Download,
        path: "This PC:/downloads",
      },
      {
        header: "Music",
        icon: Music,
        path: "This PC:/music",
      },
      {
        header: "Pictures",
        icon: Pictures,
        path: "This PC:/pistures",
      },
      {
        header: "Videos",
        icon: Video,
        path: "This PC:/videos",
      },
      {
        header: "Local Disk",
        icon: Disk,
        path: "C:",
      },
    ],
  },
  {
    header: "Network",
    icon: Network,
    path: "Network:",
    children: [],
  },
];

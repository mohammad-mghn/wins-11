import Docs from "../assets/icons/docs.png";
import Star from "../assets/icons/star-sm.png";
import ThisPC from "../assets/icons/this-pc.png";
import Pictures from "../assets/icons/pictures.png";
import Download from "../assets/icons/download.png";
import Desktop from "../assets/icons/desktop-folder.png";
import Network from "../assets/icons/netword-pc.png";
import OneDrive from "../assets/icons/one-drive.png";
import Video from "../assets/icons/video.png";
import Music from "../assets/icons/music.png";
import Disk from "../assets/icons/disk.png";

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

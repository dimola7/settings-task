import {
  DashboardIcon,
  DownloadIcon,
  HomeIcon,
  projectsIcon,
  ReportingIcon,
  SettingsIcon,
  SupportIcon,
  TasksIcon,
  UsersIcon,
} from "@/public/svgs";

export const MENUS = [
  { name: "home", path: "/", icon: HomeIcon, id: 1 },
  { name: "dashboard", path: "/", icon: DashboardIcon, id: 2 },
  { name: "projects", path: "/", icon: projectsIcon, id: 3 },
  { name: "tasks", path: "/", icon: TasksIcon, id: 4 },
  { name: "reporting", path: "/", icon: ReportingIcon, id: 5 },
  { name: "users", path: "/", icon: UsersIcon, id: 6 },
  { name: "support", path: "/", icon: SupportIcon, id: 7, margin: true },
  { name: "settings", path: "/", icon: SettingsIcon, id: 8 },
];

export const SETTINGS_TAB = [
  "My details",
  "Profile",
  "Password",
  "Team",
  "Plan",
  "Roles",
  "Notifications",
  "Integrations",
  "API",
];

export const data = [
  {
    id: 1,
    name: "superadmin",
    type: "default",
    dateCreated: "Jan 1, 2023",
    status: "active",
    roleUsers: ["one", "two", "three"],
    download: DownloadIcon,
  },
  {
    id: 2,
    name: "Merchantadmin",
    type: "default",
    dateCreated: "Feb 1, 2023",
    status: "active",
    roleUsers: ["one", "two", "three"],
    download: DownloadIcon,
  },
  {
    id: 3,
    name: "supportadmin",
    type: "default",
    dateCreated: "Jan 1, 2023",
    status: "active",
    roleUsers: ["one", "two", "three"],
    download: DownloadIcon,
  },
  {
    id: 4,
    name: "sales personnel",
    type: "custom",
    dateCreated: "Jan 1, 2023",
    status: "active",
    roleUsers: ["one", "two", "three"],
    download: DownloadIcon,
  },
  {
    id: 5,
    name: "Deputy sales personnel",
    type: "custom",
    dateCreated: "Jan 1, 2023",
    status: "active",
    roleUsers: ["one", "two", "three"],
    download: DownloadIcon,
  },
  {
    id: 6,
    name: "Developeradmin",
    type: "system-custom",
    dateCreated: "Jan 1, 2023",
    status: "in active",
    roleUsers: ["one", "two", "three"],
    download: DownloadIcon,
  },
  {
    id: 7,
    name: "Developer-basic",
    type: "system-custom",
    dateCreated: "Jan 1, 2023",
    status: "in active",
    roleUsers: ["one", "two", "three"],
    download: DownloadIcon,
  },
];

export const headers = ["Name", "Type", "Date created", "Status", "Role users", ""];

export const activeRoles = [
    {
        role: "Superadmin",
        date: "06/2023"
    },
    {
        role: "Developeradmin",
        date: "01/2023"
    },
    {
        role: "Supportadmin",
        date: "10/2023"
    },
]
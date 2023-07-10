import {
    DashboardIcon,
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
    { name: "support", path: "/", icon: SupportIcon, id: 7, margin: true  },
    { name: "settings", path: "/", icon: SettingsIcon, id: 8 },
  ];
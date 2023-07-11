export type sidebarMenuProp = {
  id: number;
  name: string;
  icon: React.ElementType;
  path: string;
  margin?: boolean;
};

export type sidebarProps = {
  menus: sidebarMenuProp[];
  open: boolean;
  setOpen?: (open: boolean) => void;
  showMobile?: boolean;
};

export type NavProps = {
  setOpen: (open: boolean) => void;
  open: boolean;
  setShowMobile: (showMobile: boolean) => void;
  showMobile: boolean;
}

export type TableDataProps = {
  id: number;
  name: string;
  status: string;
  type: string;
  dateCreated: string;
}
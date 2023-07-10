export type sidebarMenuProp = {
  id: number;
  name: string;
  icon: React.ElementType;
  path: string;
  margin?: boolean;
};

export type sidebarProps = {
  menus: sidebarMenuProp[];
  setOpen: (open: boolean) => void;
  open: boolean;
};

export type NavProps = {
  setOpen: (open: boolean) => void;
  open: boolean;
}
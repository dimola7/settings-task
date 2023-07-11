import React from "react";
import { HamburgerMenuIcon, LogoIcon } from "@/public/svgs";
import { NavProps } from "../type";

const Navbar = ({open, setOpen, setShowMobile, showMobile}: NavProps) => {
  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex items-center gap-3">
        <LogoIcon className="flex-shrink-0" onClick={() => setShowMobile(!open )} />
        <h1
          className={`whitespace-pre text-[#101828] font-inter text-base font-medium leading-6`}
        >
          Untitled UI
        </h1>
      </div>
      <HamburgerMenuIcon />
    </div>
  );
};

export default Navbar;

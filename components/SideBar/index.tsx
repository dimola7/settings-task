import React from "react";
import { LogoIcon, LogoutIcon, SearchIcon } from "@/public/svgs";
import Image from "next/image";
import Link from "next/link";
import { sidebarMenuProp, sidebarProps } from "../type";

const SideBar = ({ open, menus, showMobile }: sidebarProps) => {
  return (
    <div
      className={`bg-white min-h-screen ${
        open ? "w-[279px]" : showMobile ? "w-16" : ""
      } duration-500 text-gray-100 px-4 overflow-y-auto h-40`}
    >
      <div className="py-3 flex justify-end">
      </div>
      <div className="flex items-center gap-3">
        <LogoIcon className="flex-shrink-0" />
        <h1
          className={`whitespace-pre text-[#101828] ${
            !open && "opacity-0 translate-x-28 overflow-hidden"
          } font-inter text-base font-medium leading-6`}
        >
          Untitled UI
        </h1>
      </div>
      {open && (
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-white border border-primary-300 shadow-xs text-[#101828]">
          <SearchIcon className="text-sm" />
          <input
            className="text-[16px] ml-4 w-full bg-transparent focus:outline-none"
            placeholder="Search"
          />
        </div>
      )}
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus?.map(
          ({ path, id, icon: Icon, name, margin }: sidebarMenuProp) => (
            <Link
              href={path}
              key={id}
              className={`${
                margin && "mt-5"
              } group flex items-center text-sm text-[#344054] gap-3.5 font-medium p-2 hover:bg-[#F9FAFB] rounded-md capitalize hover:text-[#101828]`}
            >
              <Icon className="flex-shrink-0" />
              <h2
                className={`whitespace-pre ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                } font-inter text-base font-medium leading-6`}
              >
                {name}
              </h2>
            </Link>
          )
        )}
      </div>
      {open && (
        <div className="flex p-5 flex-col items-start gap-4 self-stretch rounded-lg bg-gray-50 mt-10 p-4">
          <h3 className="text-[#101828] font-inter text-sm font-medium leading-5">
            New features available!
          </h3>
          <p className="text-[#667085] font-inter text-sm leading-5">
            Check out the new dashboard view. Pages now load faster.
          </p>
          <Image
            src={"/images/sidebar-image.png"}
            alt=""
            width={215}
            height={136}
            className="rounded-lg"
          />
          <div className="flex gap-4 w-[100%]">
            <p className="text-[#667085] cursor-pointer">Dismiss</p>
            <p className="text-[#6941C6] cursor-pointer">What’s new?</p>
          </div>
        </div>
      )}
      <hr className="border border-gray-300 my-8" />
      {open && (
        <div className="mb-10 flex justify-between items-start">
          <Image
            src={"/images/Olivia-Rhye.png"}
            alt=""
            width={40}
            height={40}
          />
          <div>
            <p className="text-[#101828]">Olivia Rhye</p>
            <p className="text-[#667085]">olivia@untitledui.com</p>
          </div>
          <LogoutIcon className="cursor-pointer" />
        </div>
      )}
      {!open && (
        <div>
          <Image
            src={"/images/Olivia-Rhye.png"}
            alt=""
            width={40}
            height={40}
          />
          <div className="hover:bg-[#F9FAFB] mt-10 rounded-md cursor-pointer">
            <LogoutIcon className="mt-10 flex-shrink-0" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;

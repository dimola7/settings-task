import React, { Fragment, useState } from "react";
import Link from "next/link";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";
import UserRoles from "@/components/UserRoles";
import { MENUS, SETTINGS_TAB } from "@/components/constants";

const SettingsPage = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <section className="sm:flex gap-6 bg-[#F2F4F7]">
        <div className={`sm:hidden block bg-white`}>
          <Navbar open={open} setOpen={setOpen} />
        </div>
        <div className="sm:block hidden">
          <SideBar open={open} setOpen={setOpen} menus={MENUS} />
        </div>
        <div className="m-3 mt-6 text-xl text-gray-900 font-semibold min-h-[100vh] h-[100%] w-[100%]">
          <h2 className="font-inter text-3xl font-medium leading-9 text-[#101828] my-3">
            Settings
          </h2>
          <p className="font-inter text-base font-normal leading-6 text-[#667085]">
            Manage your team and preferences here.
          </p>

          <div className="flex my-4">
            {SETTINGS_TAB.map((tab, index) => (
              <div key={index} className="">
                <Link
                  href={"/"}
                  key={index}
                  className={`px-4 py-1 bg-White ${
                    index === 0 ? "rounded-l-md" : ""
                  } ${
                    index === SETTINGS_TAB.length - 1 ? "rounded-r-md" : ""
                  } hover:bg-[#D0D5DD] font-inter text-sm font-medium leading-5 text-[#344054] border border-solid border-[#D0D5DD]`}
                >
                  {tab}
                </Link>
              </div>
            ))}
          </div>
          <UserRoles />
        </div>
      </section>
    </>
  );
};

export default SettingsPage;

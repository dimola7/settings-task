import React, { useState } from "react";
import SideBar from "@/components/SideBar";
import { MENUS } from "@/components/constants";
import Navbar from "@/components/Navbar";

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
        <div className="m-3 text-xl text-gray-900 font-semibold min-h-[100vh] h-[100%]">Settings</div>
      </section>
    </>
  );
};

export default SettingsPage;

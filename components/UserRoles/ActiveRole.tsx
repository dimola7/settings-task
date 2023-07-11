import { PlusIcon, PurpleCheck, RoleIcon } from "@/public/svgs";
import { CircleIcon } from "@/public/svgs/CircleIcon";
import React, { useState } from "react";
import { activeRoles } from "../constants";

const ActiveRole = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index: any) => {
    setActiveIndex(index);
  };
  return (
    <div className="flex gap-7 items-start lg:flex-row flex-col">
      <div className="font-inter text-sm font-medium leading-5">
        <h3 className="text-[#344054]">Active Role</h3>
        <p className="text-[#667085]  whitespace-nowrap">
          Select active role available to the user.
        </p>
      </div>
      <div className="flex flex-col w-[100%] gap-4">
        {activeRoles.map((item, i) => (
          <div
            className={`rounded-xl border border-solid bg-primary-50 p-4 w-[100%] flex justify-between items-start ${
              activeIndex === i
                ? "border-[#D6BBFB] bg-[#F9F5FF]"
                : "border-primary-300 bg-white cursor-pointer"
            }`}
            key={i}
            onClick={() => handleItemClick(i)}
          >
            <div className="flex gap-4">
              <RoleIcon />
              <div className="font-inter text-base font-medium leading-5">
                <p
                  className={`${
                    activeIndex === i ? "text-[#53389E]" : "text-[#344054]"
                  } pb-1`}
                >
                  {item.role}
                </p>
                <p
                  className={`${
                    activeIndex === i ? "text-[#7F56D9]" : "text-[#70798C]"
                  }`}
                >
                  Last active {item.date}
                </p>
                <div className="flex gap-4 pt-3">
                  <p
                    className={`cursor-pointer ${
                      activeIndex === i ? "text-[#9E77ED]" : "text-[#667085]"
                    }`}
                  >
                    Set as default
                  </p>
                  <p className={`text-[#6941C6] cursor-pointer`}>Edit</p>
                </div>
              </div>
            </div>
            <div>{activeIndex === i ? <PurpleCheck /> : <CircleIcon />}</div>
          </div>
        ))}
        <div className="flex gap-3"><PlusIcon /> <p className="font-inter text-base font-medium leading-5 cursor-pointer">Add  role to user</p></div>
      </div>
    </div>
  );
};

export default ActiveRole;

import { DownloadIcon } from "@/public/svgs";
import React from "react";
import ActiveRole from "./ActiveRole";
import ConnectedEmail from "./ConnectedEmail";
import RolesTable from "./RolesTable";

const UserRoles = ({ rows }: any) => {
  return (
    <div>
      <h3 className="font-inter text-base font-medium leading-7 text-[#101828] mt-7 mb-2">
        User Roles
      </h3>
      <p className="font-inter text-sm font-normal leading-5 text-[#667085]">
        Update your roles details and information.
      </p>
      <hr className="border border-[#EAECF0] my-5" />
      <ConnectedEmail />
      <hr className="border border-[#EAECF0] my-5" />
      <ActiveRole />
      <div className="flex justify-between items-center py-5 flex-wrap gap-4">
        <h2 className="font-inter text-base font-normal font-medium text-gray-900 leading-normal text-[#101828]">
          User Roles
        </h2>
        <button
          type="button"
          className="border border-[#344054] text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2"
        >
          <DownloadIcon className="mr-3" />
          Download all
        </button>
      </div>
      <RolesTable rows={rows} />
    </div>
  );
};

export default UserRoles;

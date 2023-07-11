import { DownloadIcon, MarkIcon } from "@/public/svgs";
import Image from "next/image";
import React from "react";
import { column } from "../constants";

const RolesTable = ({rows}: any) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 bg-[#F9FAFB]">
          <tr className="mb-1 border-b border-solid border-[#D0D5DD]">
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="checkbox-all"
                  className="sr-only cursor-pointer"
                >
                  checkbox
                </label>
              </div>
            </th>
            {column?.map((item: string, i: number) => (
              <th scope="col" className="px-6 py-3" key={i}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map(
            ({
              id,
              name,
              type,
              dateCreated,
              status,
            }: any) => (
              <tr
                className="bg-white hover:bg-[#F9FAFB] mb-1 border-b border-solid border-[#D0D5DD]"
                key={id}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
                    />
                    <label htmlFor="checkbox-table-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap"
                >
                  {name}
                </th>
                <td className="px-6 py-4 uppercase">{type}</td>
                <td className="px-6 py-4">{dateCreated}</td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded-xl capitalize flex w-24 gap-2 items-center justify-center ${
                      status === "active"
                        ? "bg-[#ECFDF3] text-[#027A48]"
                        : "bg-[#F2994A] text-[#F2F2F2]"
                    }`}
                  >
                    {status === "active" ? <MarkIcon /> : null}
                    {status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Image
                    src={"/images/tableImg.png"}
                    alt=""
                    width={124}
                    height={24}
                    className="rounded-lg"
                  />
                </td>
                <td className="px-6 py-4 cursor-pointer">
                  <DownloadIcon />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RolesTable;

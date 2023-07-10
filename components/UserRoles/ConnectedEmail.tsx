import React from "react";

const ConnectedEmail = () => {
  return (
    <div className="flex gap-8 items-start">
      <div className="font-inter text-sm font-medium leading-5">
        <h3 className="text-[#344054]">Connected email</h3>
        <p className="text-[#667085]">Select role account</p>
      </div>
      <ul className="w-48 text-sm font-medium text-gray-900">
        <li className="w-full">
          <div className="flex items-start">
            <input
              id="list-radio-license"
              type="radio"
              value=""
              name="list-radio"
              className="text-purple-600 form-radio "
            />
            <label
              htmlFor="list-radio-license"
              className="w-full mb-2 ml-2 text-sm font-medium text-[#344054]"
            >
              My account email <br />{" "}
              <span className="text-[#667085] mt-2">olivia@untitledui.com</span>
            </label>
          </div>
        </li>
        <li className="w-full">
          <div className="flex items-start">
            <input
              id="list-radio-id"
              type="radio"
              value=""
              name="list-radio"
              className="text-purple-600 form-radio focus:ring-purple-500"
            />
            <div>
              <label
                htmlFor="list-radio-id"
                className="w-full ml-2 text-sm font-medium text-gray-900 text-[#344054]"
              >
                An alternative email
              </label>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ConnectedEmail;

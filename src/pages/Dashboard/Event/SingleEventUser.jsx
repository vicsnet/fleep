/** @format */

import React, { useState } from "react";
const SingleEventUser = ({ delOpt, id, idm, fname, email }) => {
  const [openDel, setOpenDel] = useState(false);

  const showDelButton = () => {
    setOpenDel(true);
  };

  const DelButton = () => {
    return (
      <div className="absolute">
        <button
          onClick={delOpt}
          className="text-[16px] font-normal text-[#000000] py-[14px] px-[22.5px] mt-[8px] ml-[-20px] bg-[#FFFFFF]"
          style={{ boxShadow: "0px 0px 10px 0px rgba(132, 132, 132, 0.15)" }}
        >
          Delete
        </button>
      </div>
    );
  };

  return (
    <>
      <tr key={idm}
      className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
        <td className="w-[20%] text-[14px] leading-[16.8px] font-[300] pt-[20px] py-auto pl-[15px] pb-[8px]">
          {id}
        </td>
        <td className="pt-[20px] pb-[8px]">
          <p className="text-[14px] leading-[16.8px] font-[300]">{fname}</p>
        </td>

        <td className="w-[20%] text-[14px] leading-[16.8px] font-[300] py-auto pt-[20px] pb-[8px]">
          {email}
        </td>
        {!openDel ? (
          <td
            onClick={showDelButton}
            className="w-[20%] text-[20px] leading-[16.8px] font-[300]  py-auto pt-[20px] pb-[8px] cursor-pointer"
          >
            ...
          </td>
        ) : (
          <DelButton />
        )}
      </tr>
    </>
  );
};

export default SingleEventUser;

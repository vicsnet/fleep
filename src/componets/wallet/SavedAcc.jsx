import React from 'react'
import { FiPlus } from "react-icons/fi";
import { BiTrash } from "react-icons/bi";

const SavedAcc = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-[500] leading-[24px] text-[#000000] capitalize">
          My saved accounts
        </h2>
        <div className=" flex items-center gap-2 ">
          <FiPlus />
          <h3 className="text-[16px] font-bold leading-[19.2px] ">Add New</h3>
        </div>
      </div>
      <div className="flex justify-between mt-[40px] items-center border-b-[1px] pb-[30px]">
        <div className="">
          <h2 className="font-bold text-[16px] leading-5 text-[#000000]">
            Zenith Bank
          </h2>
          <p className="text-[16px] font-[400] leading-5 text-[#8B8B8B] mt-[8px]">
            1234567890
          </p>
        </div>
        <div className="">
          <BiTrash size={20} className="text-[#8B8B8B]" />
        </div>
      </div>
      <div className="flex justify-between mt-[40px] items-center border-b-[1px] pb-[30px]">
        <div className="">
          <h2 className="font-bold text-[16px] leading-5 text-[#000000]">
            Zenith Bank
          </h2>
          <p className="text-[16px] font-[400] leading-5 text-[#8B8B8B] mt-[8px]">
            1234567890
          </p>
        </div>
        <div className="">
          <BiTrash size={20} className="text-[#8B8B8B]" />
        </div>
      </div>
    </div>
  );
}

export default SavedAcc
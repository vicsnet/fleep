import React from 'react'
import bum from "../../assets/HBD to bunmi 20190716_003414.jpg";

const PersonalUser = ({ im, fname, tphoto, eventAttended }) => {
  return (
    <>
    <tr className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
              <td className="flex gap-[14px] mt-[11px] items-center ">
                <img
                  src={im}
                  alt=""
                  className="w-[30px] h-[30px] object-cover mb-[14px]"
                />
                <p className="text-[14px] leading-[16.8px] font-[300] py-auto mt-[-10px]">
                {fname}
                </p>
              </td>
              <td className="w-[20%] text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
              {tphoto}
              </td>
              <td className="w-[20%] text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
              {eventAttended}
              </td>
            </tr></>
  )
}

export default PersonalUser
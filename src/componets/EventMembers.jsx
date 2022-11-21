import React from "react";
import bum from "../assets/HBD to bunmi 20190716_003414.jpg";

const EventMembers = () => {
  return (
    <main className="mt-[24px] flex justify-between smDesk:flex-col">
      <section
        className="pl-[14px] rounded-[8px] w-[48%] smDesk:w-[100%]"
        style={{ background: "rgba(255, 255, 255, 1)" }}
      >
        <h2 className="text-[#1A1941] text-[20px] font-semibold leading-[24px] pt-[19px]">
          Latest Members
        </h2>

        {/* <div className="flex flex-col justify-center">
          <p className="text-[20px] font-bold leading-[24px] text-[#8B8B8B] py-[97px] px-[169px]">
            No new members
          </p>
        </div> */}

        <table className="w-[90%] mx-auto mt-[21px] ">
          <thead className="text-left text-[16px] font-[500] leading-[19.2px] bg-[#FAFAFA] ">
            <tr className=" pl-[57px] pr-[]">
              <th className="pt-[12px] pb-[12px] pl-[46px] w-[60%]">Users</th>
              <th className="pt-[12px] pb-[12px] ">Photos</th>
              <th className="pt-[12px] pb-[12px] pr-[27px]">Events</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
              <td className="flex gap-[14px] mt-[11px] items-center ">
                <img
                  src={bum}
                  alt=""
                  className="w-[30px] h-[30px] object-cover mb-[14px]"
                />
                <p className="text-[14px leading-[16.8px] font-[300]">
                  Tejiri Tabor
                </p>
              </td>
              <td className="w-[20%] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
                56
              </td>
              <td className="w-[20%] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
                1961
              </td>
            </tr>
            <tr className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
              <td className="flex gap-[14px] mt-[11px] items-center ">
                <img
                  src={bum}
                  alt=""
                  className="w-[30px] h-[30px] object-cover mb-[14px]"
                />
                <p className="text-[14px leading-[16.8px] font-[300]">
                  Tejiri Tabor
                </p>
              </td>
              <td className="w-[20%] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
                56
              </td>
              <td className="w-[20%] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
                1961
              </td>
            </tr>
            <tr className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
              <td className="flex gap-[14px] mt-[11px] items-center ">
                <img
                  src={bum}
                  alt=""
                  className="w-[30px] h-[30px] object-cover mb-[14px]"
                />
                <p className="text-[14px leading-[16.8px] font-[300]">
                  Tejiri Tabor
                </p>
              </td>
              <td className="w-[20%] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
                56
              </td>
              <td className="w-[20%] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
                1961
              </td>
            </tr>
            <tr className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
              <td className="flex gap-[14px] mt-[11px] items-center ">
                <img
                  src={bum}
                  alt=""
                  className="w-[30px] h-[30px] object-cover mb-[14px]"
                />
                <p className="text-[14px leading-[16.8px] font-[300]">
                  Tejiri Tabor
                </p>
              </td>
              <td className="w-[20%] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
                56
              </td>
              <td className="w-[20%] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
                1961
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section
        className="px-[14px] rounded-[8px]  w-[48%] smDesk:w-[100%] smDesk:mt-[40px]"
        style={{ background: "rgba(255, 255, 255, 1)" }}
      >
        <h2 className="text-[#1A1941] text-[20px] font-semibold leading-[24px] pt-[19px]">
          Latest Events
        </h2>

        {/* <div className="flex flex-col justify-center">
          <p className="text-[20px] font-bold leading-[24px] text-[#8B8B8B] py-[97px] px-[169px]">
            No new event
          </p>
        </div> */}

        <table className="w-[90%] mx-auto mt-[21px]">
          <thead className="text-left text-[16px] font-[500] leading-[19.2px] bg-[#FAFAFA] ">
            <tr className=" ">
              <th className="pt-[12px] pb-[12px] pl-[8px] w-[42%]">Events</th>
              <th className="pt-[12px] pb-[12px] w-[20%]">Photos</th>
              <th className="pt-[12px] pb-[12px] pr-[27px] w-[36%]">
                Registered Users
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
              <td className="flex gap-[14px] pl-[8px] mt-[11px] mb-[11px] items-center w-[100%]">
                <p className="text-[14px leading-[16.8px] font-[300]">
                  Henry’s Wedding
                </p>
              </td>
              <td className="w-[20%] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
                56
              </td>
              <td className="w-[30%] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
                1961
              </td>
            </tr>
            <tr className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
              <td className="flex gap-[14px] pl-[8px] mt-[11px] mb-[11px] items-center w-[100%]">
                <p className="text-[14px leading-[16.8px] font-[300]">
                  Henry’s Wedding
                </p>
              </td>
              <td className="w-[20%] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
                56
              </td>
              <td className="w-[30%] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
                1961
              </td>
            </tr>
            <tr className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
              <td className="flex gap-[14px] pl-[8px] mt-[11px] mb-[11px] items-center w-[100%]">
                <p className="text-[14px leading-[16.8px] font-[300]">
                  Henry’s Wedding
                </p>
              </td>
              <td className="w-[20%] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
                56
              </td>
              <td className="w-[30%] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
                1961
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default EventMembers;

import React from "react";
import SideNav from "../../componets/SideNav";
import { MdOutlinePermMedia } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoMdCalendar } from "react-icons/io";

import { IoImagesOutline } from "react-icons/io5";

import EventMembers from "../../componets/EventMembers";
import CreateEvent from "../../componets/CreateEvent";

const Dashboard = () => {
  return (
    <main className="max-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pb-[180px]">
      <SideNav title="Dashboard" />
      <div className=" ">
        <section className="px-[42px] mt-[48px]">
          <div className="flex justify-between">
            <div className=" flex flex-col gap-[30px]">
              {/* total photos */}
              <div className="flex  gap-[30px]">
                <div className="bg-[#19192E] flex py-[37.24px] pl-[25.8px] gap-[23px] rounded-[10px] pr-[102px]">
                  <div className="bg-[#FFFFFF] rounded-[13px] px-[12px] py-[14px]">
                    <MdOutlinePermMedia
                      size={24}
                      className="text-[#1A1941] bg-[#FFFFFF]"
                    />
                  </div>
                  <div className="text-[white]">
                    <h3 className="text-[30px] font-bold leading-[36px] tracking-[2.14px] text-white ">
                      150
                    </h3>
                    <p className="text-[#EEEEEE] opacity-[70%] text-[14px] font-[500] leading-[16.8px] pt-[4px] w-[153px] ">
                      Total Photo
                    </p>
                  </div>
                </div>

                {/* photo spaces left */}
                <div
                  className=" flex py-[37.24px] pl-[25.8px] gap-[23px] rounded-[10px] pr-[14px]"
                  style={{ background: "rgba(255, 255, 255, 1)" }}
                >
                  <div className="bg-[#19192E] rounded-[13px] px-[12px] py-[14px]">
                    <IoImagesOutline size={24} className=" text-[#FFFFFF]" />
                  </div>
                  <div className="">
                    <h3 className="text-[30px] font-bold leading-[36px] tracking-[2.14px] text-[#191D23] ">
                      14
                    </h3>
                    <p className="text-[#8E99AB] opacity-[70%] text-[14px] font-[500] leading-[16.8px] pt-[4px] w-[153px] ">
                      Photo spaces left
                    </p>
                  </div>
                  <button className="text-[11px] font-semibold px-[10px] h-[20px] rounded border border-[#1A1941] text-[#1A1941] cursor-pointer mt-2">
                    Upgrade
                  </button>
                </div>
              </div>

              <div className="flex  gap-[30px]">
                {/* total Events */}
                <div
                  className=" flex py-[37.24px] pl-[25.8px] gap-[23px] rounded-[10px] pr-[102px]"
                  style={{ background: "rgba(255, 255, 255, 1)" }}
                >
                  <div className="bg-[#19192E] rounded-[13px] px-[12px] py-[14px]">
                    <IoMdCalendar size={24} className=" text-[#FFFFFF]" />
                  </div>
                  <div className="">
                    <h3 className="text-[30px] font-bold leading-[36px] tracking-[2.14px] text-[#191D23] ">
                      45
                    </h3>
                    <p className="text-[#8E99AB] opacity-[70%] text-[14px] font-[500] leading-[16.8px] pt-[4px] w-[153px] ">
                      Total Events
                    </p>
                  </div>
                </div>

                {/* total users */}
                <div
                  className=" flex py-[37.24px] pl-[25.8px] gap-[23px] rounded-[10px] pr-[102px]"
                  style={{ background: "rgba(255, 255, 255, 1)" }}
                >
                  <div className="bg-[#19192E] rounded-[13px] px-[12px] py-[14px]">
                    <HiOutlineUserGroup size={24} className=" text-[#FFFFFF]" />
                  </div>
                  <div className="">
                    <h3 className="text-[30px] font-bold leading-[36px] tracking-[2.14px] text-[#191D23] ">
                      150
                    </h3>
                    <p className="text-[#8E99AB] opacity-[70%] text-[14px] font-[500] leading-[16.8px] pt-[4px] w-[153px] ">
                      Total Users
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <CreateEvent />
          </div>

          {/* event & Members */}
          <EventMembers />
        </section>
      </div>
    </main>
  );
};

export default Dashboard;

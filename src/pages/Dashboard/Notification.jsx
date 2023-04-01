import React from "react";
import SideNav from "../../componets/SideNav";
import { BsCalendarFill, BsImage } from "react-icons/bs";
import NotificationsComp from "../../componets/notification/NotificationsComp";

const Notification = () => {
  return (
    <main className="max-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pb-[180px]">
      <SideNav title="Notification" display={"flex"} />

      <section
        className="mx-[42px] mt-[48px] px-[48px] rounded max-h-screen h-screen"
        style={{ background: "rgba(255, 255, 255, 1)" }}
      >
<NotificationsComp/>

        {/* Another day */}
        {/* <div className="">
          <span className="flex justify-between items-center pt-[44px]">
            <p className="text-[18px] leading-6 font-semibold text-[#666666] ">
              {" "}
              Today{" "}
            </p>
            <p className="text-[14px] leading-[16.8px] font-normal text-[#666666]">
              12/09/2021
            </p>
          </span>
         
          <section className="flex justify-between border-[1px] pt-[10px] pb-4 px-4 mt-[8px] rounded-lg ">
            <div className="flex items-center gap-4">
              <div className="border-[1px] border-[#201E1E] rounded-full w-[40px] h-[40px] bg-[#201E1E]">
                <BsCalendarFill
                  size={16}
                  className="mx-auto flex items-center my-[10px] text-[#FFFFFF]"
                />
              </div>
              <div className="">
                <p className="text-[#333333] text-[16px] leading-6 font-normal ">
                  You created an event
                </p>
                <p className="text-[#999999] text-[13px] leading-[15.6px] mt-[2px] font-normal">
                  3:30pm
                </p>
              </div>
            </div>
          </section>

         
          <section className="flex justify-between border-[1px] pt-[10px] pb-4 px-4 mt-[8px] rounded-lg ">
            <div className="flex items-center gap-4">
              <div className="border-[1px] border-[#201E1E] rounded-full w-[40px] h-[40px] bg-[#201E1E]">
                <BsImage
                  size={16}
                  className="mx-auto flex items-center my-[10px] text-[#FFFFFF]"
                />
              </div>
              <div className="">
                <p className="text-[#333333] text-[16px] leading-6 font-normal ">
                  You used 50 photo spaces
                </p>
                <p className="text-[#999999] text-[13px] leading-[15.6px] mt-[2px] font-normal">
                  3:30pm
                </p>
              </div>
            </div>
          </section>

          
          <section className="flex justify-between border-[1px] pt-[10px] pb-4 px-4 mt-[8px] rounded-lg ">
            <div className="flex items-center gap-4">
              <div className="border-[1px] border-[#201E1E] rounded-full w-[40px] h-[40px] bg-[#201E1E]">
                <BsCalendarFill
                  size={16}
                  className="mx-auto flex items-center my-[10px] text-[#FFFFFF]"
                />
              </div>
              <div className="">
                <p className="text-[#333333] text-[16px] leading-6 font-normal ">
                  You created an event
                </p>
                <p className="text-[#999999] text-[13px] leading-[15.6px] mt-[2px] font-normal">
                  3:30pm
                </p>
              </div>
            </div>
          </section>

          
          <section className="flex justify-between border-[1px] pt-[10px] pb-4 px-4 mt-[8px] rounded-lg ">
            <div className="flex items-center gap-4">
              <div className="border-[1px] border-[#201E1E] rounded-full w-[40px] h-[40px] bg-[#201E1E]">
                <BsImage
                  size={16}
                  className="mx-auto flex items-center my-[10px] text-[#FFFFFF]"
                />
              </div>
              <div className="">
                <p className="text-[#333333] text-[16px] leading-6 font-normal ">
                  You used 50 photo spaces
                </p>
                <p className="text-[#999999] text-[13px] leading-[15.6px] mt-[2px] font-normal">
                  3:30pm
                </p>
              </div>
            </div>
          </section>
        </div> */}
      </section>
    </main>
  );
};

export default Notification;

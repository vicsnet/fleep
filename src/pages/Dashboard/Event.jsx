import React from "react";
import SideNav from "../../componets/SideNav";
import { MdOutlineEvent } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";
import { CiImageOn } from "react-icons/ci";
import eve from "../../assets/IMG-20190708-WA0002.jpg";
import CreateEvent from "../../componets/CreateEvent";
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <main className="max-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pb-[180px]">
      <SideNav title="Event" display={"flex"} />
      {/* calendar */}
      <section>
        
      </section>

      {/* No Event */}

      {/* <section className="mt-[100px]">
        <MdOutlineEvent
          size={100}
          className="text-[#EE2339] mx-auto mb-[42px]"
        />

        <p className="text-[20px] leading-[30px] font-semibold text-[#8B8B8B] text-center">
          No event listed.
        </p>
        <p className="text-[20px] leading-[30px] font-semibold text-[#8B8B8B] text-center">
          Create an event to see a list of events
        </p>

        <button className=" mt-[50px] bg-[#1A1941] text-[#FFFFFF] py-[15px] px-[60px] mx-auto flex justify-center rounded-[8px] font-bold">
          Create Event
        </button>
      </section> */}

      {/* when Event */}
      <section className="px-[40px] flex justify-between mt-8 smDesk:flex-col-reverse ">
        <section className="w-[60%] smDesktop:w-[70%] smDesk:w-[100%]">
          {/* search bar & filter */}
          <div className="flex items-center justify-between">
            {/* search bar  */}
            <div className="bg-[#EFEFEF] flex items-center h-[49px] w-[40%] rounded-[8px]">
              <BiSearch size={16} className="text-[#8A8A8A] w-[10%] pl-[8px]" />
              <input
                type="text"
                placeholder="Search"
                className="w-[90%] h-[100%] text-[14px] pl-[8px] font-normal text-[#8A8A8A] outline-none bg-[#EFEFEF] rounded-[8px]"
              />
            </div>

            {/* filter */}
            <div className="">
              <select
                name="cars"
                id="cars"
                className="outline-none bg-transparent text-[#333333]"
              >
                <option value="volvo">All</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>

          {/* Event card */}
          <div className="mt-[14px]">
            <div
              className="w-[100%] rounded-[16px] mb-[4px]"
              style={{
                background: "rgba(255, 255, 255, 1)",
                boxShadow: "0px 0px 10px 0px rgba(132, 132, 132, 0.15)",
              }}
            >
              <Link to="/created-event">
                <p className="flex justify-end text-[14px] leading-[16.8px] pt-[10px] pr-[16px] text-[#C6C6C6]">
                  View
                </p>
              </Link>
              <div className="flex justify-between items-center">
                <div className="flex gap-[18px]">
                  <img
                    src={eve}
                    alt="event"
                    className="w-[80px] h-[80px] object-cover rounded-[8px] mx-[16px] mb-[16px]"
                  />
                  <div className="mt-[4.03px]">
                    <h2 className="text-[18px] leading-[21.6px] font-semibold">
                      {" "}
                      Henry’s Wedding
                    </h2>
                    <p className="text-[#8A8A8A] text-[13px] font-normal leading-4">
                      September 30th, 2022
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 pr-[66px]">
                  <div className="flex gap-3">
                    <TbUsers size={14} className="text-[#1A1941]" />
                    <p className="text-[14px] leading-4 text-[#14181F] ">500</p>
                  </div>
                  <div className="flex gap-3 ">
                    <CiImageOn size={14} className="text-[#1A1941]" />
                    <p className="text-[14px] leading-4 text-[#14181F] ">50</p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div
              className="w-[100%] rounded-[16px] mb-[4px]"
              style={{
                background: "rgba(255, 255, 255, 1)",
                boxShadow: "0px 0px 10px 0px rgba(132, 132, 132, 0.15)",
              }}
            >
              <p className="flex justify-end text-[14px] leading-[16.8px] pt-[10px] pr-[16px] text-[#C6C6C6]">
                View
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-[18px]">
                  <img
                    src={eve}
                    alt="event"
                    className="w-[80px] h-[80px] object-cover rounded-[8px] mx-[16px] mb-[16px]"
                  />
                  <div className="mt-[4.03px]">
                    <h2 className="text-[18px] leading-[21.6px] font-semibold">
                      {" "}
                      Henry’s Wedding
                    </h2>
                    <p className="text-[#8A8A8A] text-[13px] font-normal leading-4">
                      September 30th, 2022
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 pr-[66px]">
                  <div className="flex gap-3">
                    <TbUsers size={14} className="text-[#1A1941]" />
                    <p className="text-[14px] leading-4 text-[#14181F] ">500</p>
                  </div>
                  <div className="flex gap-3 ">
                    <CiImageOn size={14} className="text-[#1A1941]" />
                    <p className="text-[14px] leading-4 text-[#14181F] ">50</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[100%] rounded-[16px] mb-[4px]"
              style={{
                background: "rgba(255, 255, 255, 1)",
                boxShadow: "0px 0px 10px 0px rgba(132, 132, 132, 0.15)",
              }}
            >
              <p className="flex justify-end text-[14px] leading-[16.8px] pt-[10px] pr-[16px] text-[#C6C6C6]">
                View
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-[18px]">
                  <img
                    src={eve}
                    alt="event"
                    className="w-[80px] h-[80px] object-cover rounded-[8px] mx-[16px] mb-[16px]"
                  />
                  <div className="mt-[4.03px]">
                    <h2 className="text-[18px] leading-[21.6px] font-semibold">
                      {" "}
                      Henry’s Wedding
                    </h2>
                    <p className="text-[#8A8A8A] text-[13px] font-normal leading-4">
                      September 30th, 2022
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 pr-[66px]">
                  <div className="flex gap-3">
                    <TbUsers size={14} className="text-[#1A1941]" />
                    <p className="text-[14px] leading-4 text-[#14181F] ">500</p>
                  </div>
                  <div className="flex gap-3 ">
                    <CiImageOn size={14} className="text-[#1A1941]" />
                    <p className="text-[14px] leading-4 text-[#14181F] ">50</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-[64px] smDesktop:w-[28%] smDesktop:h-[260px] smDesk:w-[50%] smDesk:mb-[100px] smDesk:mx-auto">
          <CreateEvent />
        </div>
      </section>
    </main>
  );
};

export default Event;

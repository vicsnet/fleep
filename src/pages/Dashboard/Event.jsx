import React, { useEffect, useState } from "react";
import SideNav from "../../componets/SideNav";
import { MdOutlineEvent } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";
import { CiImageOn } from "react-icons/ci";
import eve from "../../assets/IMG-20190708-WA0002.jpg";
import CreateEvent from "../../componets/CreateEvent";
import { Link } from "react-router-dom";
import Calender from "../../componets/Calender";
import EVeCal from "../../assets/SVG/Group (1).svg";
import { useDispatch } from "react-redux";
import { openEvent } from "../../Redux/features/createEventSlice";
import useFetchEvent from "./Event/eventhooks/useFetchEvent";
import SingleEvent from "./Event/SingleEvent";
import FadeLoader from "react-spinners/FadeLoader";
import Cal from "../../componets/Cal";
import EventList from "./EventList";

const Event = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const [value, setValue] = useState("all");

  const { data, isLoading } = useFetchEvent();

  const eventData = data?.data;

  const changeEventDateFormart = eventData?.map((obj) => {
    return { ...obj, date: new Date(obj.date) };
  });

  return (
    <main className="max-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pb-[180px]">
      <SideNav title="Event" display={"flex"} />
      {/* calendar */}
      <section>
        <Calender />
        {/* <Cal/> */}
      </section>

      {/* No Event */}
      {/* {
         isLoading || isFetching ?
         <div className="flex justify-center mt-3">
          <FadeLoader color="#19192E" />
         </div>
         : */}

      <div>
        {data == 0 ? (
          <section className="mt-[100px]">
            <img
              src={EVeCal}
              alt=""
              className="w-[100px] h-[100px] mx-auto mb-[42px]"
            />

            <p className="text-[20px] leading-[30px] font-semibold text-[#8B8B8B] text-center">
              No event listed.
            </p>
            <p className="text-[20px] leading-[30px] font-semibold text-[#8B8B8B] text-center">
              Create an event to see a list of events
            </p>

            <button
              onClick={() => dispatch(openEvent())}
              className=" mt-[50px] bg-[#1A1941] text-[#FFFFFF] py-[15px] px-[60px] mx-auto flex justify-center rounded-[8px] font-bold"
            >
              Create Event
            </button>
          </section>
        ) : (
          // {/* when Event */}
          <section className="px-[40px] flex justify-between mt-8 smDesk:flex-col-reverse ">
            <section className="w-[65%] smDesktop:w-[70%] smDesk:w-[100%]">
              {/* search bar & filter */}
              <div className="flex items-center justify-between">
                {/* search bar  */}
                <div className="bg-[#EFEFEF] flex items-center h-[49px] w-[40%] rounded-[8px]">
                  <BiSearch
                    size={16}
                    className="text-[#8A8A8A] w-[10%] pl-[8px]"
                  />
                  <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-[90%] h-[100%] text-[14px] pl-[8px] font-normal text-[#8A8A8A] outline-none bg-[#EFEFEF] rounded-[8px]"
                  />
                </div>

                {/* filter */}
                <div className="">
                  <select
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="outline-none bg-transparent text-[#333333]"
                  >
                    {/* <option value="filter">Filter</option> */}
                    <option value="all">All</option>
                    <option value="recent">Recent</option>
                    <option value="older">Older</option>
                  </select>
                </div>
              </div>
              {/* {
         isFetching ?
         <div className="flex justify-center mt-3">
          <FadeLoader color="#19192E" />
         </div>
         : */}
              <div className="mt-[14px]">
                <EventList
                  data={changeEventDateFormart}
                  isLoading={isLoading}
                  search={search}
                  selectedOrder={value}
                />
              </div>
              {/* } */}

              {/* Event card */}
            </section>
            <div className="mt-[64px] w-[29%]  smDesktop:w-[28%] smDesktop:h-[260px] smDesk:w-[50%] smDesk:mb-[100px] smDesk:mx-auto">
              <CreateEvent />
            </div>
          </section>
        )}
      </div>
      {/* // } */}
    </main>
  );
};

export default Event;

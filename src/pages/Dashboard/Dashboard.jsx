/** @format */

import React from "react";
import SideNav from "../../componets/SideNav";
import { MdOutlinePermMedia } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoMdCalendar } from "react-icons/io";

import { IoImagesOutline } from "react-icons/io5";

import EventMembers from "../../componets/EventMembers";
import CreateEvent from "../../componets/CreateEvent";
import vector from "../../assets/Group 201.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import NewEvent from "./Event/NewEvent";
import { useDispatch, useSelector } from "react-redux";
import { openEvent } from "../../Redux/features/createEventSlice";
import Vector from "../../assets/SVG/Vector.svg";
import Vector1 from "../../assets/SVG/Vector1.svg";
import Vector2 from "../../assets/SVG/Group.svg";
import Vector3 from "../../assets/SVG/Group1.svg";
import ProfileUseFetch from "../profile/hooks/profileUseFetch";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DashboardError from "./Error/DashboardError";

const Dashboard = () => {
  const { data, isLoading, isFetching, error, refetch } = ProfileUseFetch();

  const dispatch = useDispatch();

  return (
    <main className="max-h-screen h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pb-[180px]">
      <SideNav
        title="Dashboard"
        display={"hidden pb-[24px]"}
        padd={"pb-[38px]"}
      />
      <div className=" ">
        <section className="px-[42px] mt-[48px]">
          { error !== null ?
            <div className="mt-[100px] h-[200px]">
              <DashboardError error={error} refetch={refetch} />
            </div>
            :
          <div className="flex justify-between smDesk:flex-col ">
            <div className=" flex flex-col gap-[30px] w-[70%]  smDesktop:w-[78%] smDesk:w-[100%]">
              {/* total photos */}
              <div className="flex  gap-[30px]  smDesktop:gap-[12px]">
                <div className="bg-[#19192E] flex py-[37.24px] pl-[25.8px] gap-[23px] rounded-[10px] w-[50%]">
                  <div className="bg-[#FFFFFF] rounded-[13px] h-[60px] w-[55px] flex items-center">
                    <img
                      src={Vector}
                      alt=""
                      className="w-[24px] h-[24px] mx-auto"
                    />
                  </div>
                  <div className="text-[white]">
                    {isLoading ? (
                      <p className="">
                        <Skeleton />
                      </p>
                    ) : (
                      <h3 className="text-[30px] font-bold leading-[36px] tracking-[2.14px] text-white ">
                        {/* 150  */}
                        {data?.data?.eventsimagescount}
                      </h3>
                    )}
                    <p className="text-[#EEEEEE] opacity-[70%] text-[14px] font-[500] leading-[16.8px] pt-[4px]">
                      Total Photo
                    </p>
                  </div>
                </div>

                {/* photo spaces left */}
                <div
                  className=" flex py-[37.24px] pl-[25.8px] gap-[23px] rounded-[10px] w-[50%]  smDesktop:pr-[8px]"
                  style={{ background: "rgba(255, 255, 255, 1)" }}
                >
                  <div className="bg-[#19192E] rounded-[13px] h-[60px] w-[55px] flex items-center">
                    <img
                      src={Vector1}
                      alt=""
                      className="w-[24px] h-[24px] mx-auto"
                    />
                  </div>
                  <div className="smDesk:w-[45%] tabletAir:w-[60px]  smDesktop:w-[38%]">
                    {isLoading ? (
                      <p className="">
                        <Skeleton />
                      </p>
                    ) : (
                      <h3 className="text-[30px]  font-bold leading-[36px] tracking-[2.14px] text-[#191D23] ">
                        {data?.data?.free_space}
                      </h3>
                    )}
                    <p className="text-[#8E99AB] opacity-[70%] tabletAir:text-[12px] text-[14px] font-[500] leading-[16.8px] pt-[4px] ">
                      Photo spaces left
                    </p>
                  </div>
                  <button className="text-[11px] font-semibold px-[10px] h-[20px] rounded border border-[#1A1941] text-[#1A1941] cursor-pointer mt-2">
                    Upgrade
                  </button>
                </div>
              </div>

              <div className="flex  gap-[30px]  smDesktop:gap-[12px]">
                {/* total Events */}
                <div
                  className=" flex py-[37.24px] pl-[25.8px] gap-[23px] rounded-[10px] w-[50%] "
                  style={{ background: "rgba(255, 255, 255, 1)" }}
                >
                  <div className="bg-[#19192E] rounded-[13px] h-[60px] w-[55px] flex items-center">
                    <img
                      src={Vector2}
                      alt=""
                      className="w-[24px] h-[24px] mx-auto"
                    />
                  </div>
                  <div className="">
                    {isLoading ? (
                      <p className="">
                        <Skeleton />
                      </p>
                    ) : (
                      <h3 className="text-[30px] font-bold leading-[36px] tracking-[2.14px] text-[#191D23] ">
                        {/* 45 */}
                        {data?.data?.eventscount}
                      </h3>
                    )}
                    <p className="text-[#8E99AB] opacity-[70%] text-[14px] font-[500] leading-[16.8px] pt-[4px] ">
                      Total Events
                    </p>
                  </div>
                </div>

                {/* total users */}
                <div
                  className=" flex py-[37.24px] pl-[25.8px] gap-[23px] rounded-[10px] w-[50%]"
                  style={{ background: "rgba(255, 255, 255, 1)" }}
                >
                  <div className="bg-[#19192E] rounded-[13px] h-[60px] w-[55px] flex items-center">
                    <img
                      src={Vector3}
                      alt=""
                      className="w-[24px] h-[24px] mx-auto"
                    />
                  </div>
                  <div className="">
                    {isLoading ? (
                      <p className="">
                        <Skeleton />
                      </p>
                    ) : (
                      <h3 className="text-[30px] font-bold leading-[36px] tracking-[2.14px] text-[#191D23] ">
                        {data?.data?.all_participants}
                      </h3>
                    )}
                    <p className="text-[#8E99AB] opacity-[70%] text-[14px] font-[500] leading-[16.8px] pt-[4px]">
                      Total Users
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[25%]  smDesktop:w-[20%] smDesk:w-[50%] smDesk:mt-4 ">
              {/* <CreateEvent /> */}

              <div
                onClick={() => dispatch(openEvent())}
                className="w-[100%] rounded-[14px] bigDesktop:pt-[10px] semiBigDesktop:pt-[38px] pl-[34px] smDesktop:pl-[20px] smDesk:pl-[34px] relative h-[300px] lgDesktop:h-[300px] smDesktop:h-[230px] smDesk:h-[300px] tabletAir:h-[278.4px] tablet:h-[258px] smDesktop:mt-[45px] smDesk:mt-[0px]"
                style={{ background: "rgba(255, 255, 255, 1)" }}
              >
                <div className="mt-[-18px] bSemiBig:mt-[0px]">
                  <h2 className="text-[20px] leading-[24px] font-[500] text-[#191D23]">
                    Create Event
                  </h2>
                  <p className="text-[#86898D] text-[12px] font-[500] leading-[18px] tracking-[0.3px] mt-[5px]">
                    Lest’s Start.
                  </p>
                  <img
                    src={vector}
                    alt=""
                    className="w-[270px] bSemiBig:w-[248px] relative mt-[12px] bSemismall:mt-[26.3px]  lgDesktop:mt-[42px] smDesk:mt-[0px]"
                  />
                  <BsFillArrowRightCircleFill
                    size={24}
                    className="text-[#E00018] absolute bottom-[44px]"
                  />
                </div>
              </div>
            </div>
          </div>
          }

          {/* event & Members */}
          <EventMembers />
        </section>
      </div>
    </main>
  );
};

export default Dashboard;

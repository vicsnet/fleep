/** @format */

import React, { useEffect, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useSelector } from "react-redux";
import ProfileUseFetch from "../pages/profile/hooks/profileUseFetch";
import { Skeleton, Space } from 'antd';
import DashboardError from "../pages/Dashboard/Error/DashboardError";

const SideNav = ({ title, display, padd }) => {
  const back = useNavigate();

  const { data, isLoading, refetch, isError } = ProfileUseFetch();




  return (
    <section className="flex justify-between border-b-[1px] border-[#C6C6C6]">
      <div className={`${padd}`}>
        <h2 className="text-[28px] font-semibold leading-[38.4px] text-[#1A1941] pl-[42px]">
          {title}
        </h2>
        <div
          className={` ${display} cursor-pointer mt-[14px] pb-[8px] pl-[40px]`}
          onClick={() => back(-1)}
        >
          <MdOutlineKeyboardArrowLeft className="opacity-[50%] text-[#000000]" />
          <p className="text-[14px] font-light leading-[16.8px] text-[#201E1E] opacity-[45%]">
            Back
          </p>
        </div>
      </div>
     
      {
          isError ?
          <div className='pr-[42px]'>

            <DashboardError refetch={refetch}/>
          </div>
          :
<>
           {
            isLoading === true ?
            <div className="mr-[42px]">

              <Space direction="horizontal" >
  
              <Skeleton  active  paragraph={false} title={{width:150}}/> 
              <Skeleton.Avatar active/>
              </Space>
            </div>
              :
      <Link to="/profile">
        <div className="flex items-center gap-[16px] pr-[42px]">
          <div className="">
               <h2 className="text-[16px] font-bold leading-[19.2px]">
                {data?.data?.full_name}
              </h2>
          </div>
           
           
            


          <div className="relative">
            <img
              src={data?.data?.profile_photo}
              alt=""
              className="w-[40px] h-[40px] rounded-[50%] object-cover relative"
            />
            <GoPrimitiveDot
              size={12}
              className="text-[#3AC922] absolute bottom-0 right-0"
            />
          </div>
        </div>
      </Link>
           }
</>
}
    </section>
  );
};

export default SideNav;

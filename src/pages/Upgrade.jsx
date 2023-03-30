
import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { GoPrimitiveDot } from "react-icons/go";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import LOGO from "../assets/LOGO.png";
import Footer from '../componets/Footer';
import UpgradeDetail from '../componets/upgrades/UpgradeDetail';
import ProfileUseFetch from './profile/hooks/profileUseFetch';
import { Skeleton, Space } from 'antd';
import DashboardError from "../pages/Dashboard/Error/DashboardError"

const Upgrade = () => {
  const back = useNavigate()
  const { data, isLoading, isError, error, refetch } = ProfileUseFetch();

  return (
    <main>
      <section className="flex justify-between  pt-[20px]">
        <div className={``}>
          <div className=" pl-[40px] mb-[30px]">
            <Link to="/dashboard">
              <img
                src={LOGO}
                alt=""
                className="w-[126px] h-[41.93px] object-cover cursor-pointer"
              />
            </Link>
          </div>
          <div
            className={` flex cursor-pointer mt-[14px] pb-[8px] pl-[40px]`}
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
            </div> :

        <Link to="/profile">
          <div className="flex items-center gap-[16px] pr-[42px]">
            <h2 className="text-[16px] font-bold leading-[19.2px]">
            {data?.data?.full_name}
            </h2>
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
      <section className="mt-[100px]">
        <h3 className="text-[48px] font-black text-center leading-[100px] text-[#19192E]">
          Our Pricing Plans
        </h3>
        <p className="capitalize text-[20px] text-center text-[#8B8B8B] font-normal">
          Buy more photospaces
        </p>


        <UpgradeDetail/>

      </section>
      <Footer />
    </main>
  );
}

export default Upgrade
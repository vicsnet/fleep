import React from 'react'
import { BsCalendarFill, BsImage } from "react-icons/bs";
import useFetchNotification from './hooks/useFetchNotification';
import DashboardError from '../../pages/Dashboard/Error/DashboardError';
import FadeLoader from 'react-spinners/FadeLoader';

const NotificationsComp = () => {
    const {data, isError, error, refetch, isLoading} = useFetchNotification();
    console.log(data);
  
  return (
  <div className="pt-[20px]">
    {isLoading && <div className="flex justify-center mt-3">
      <FadeLoader color="#19192E" />
     </div>  }
    {isError ? 
    <div className="mt-[100px]">

        <DashboardError error={error} refetch={refetch}/> 
    </div>
        :

    <>
{data?.data?.map((data)=>(

    <div key={data.id} className="">
    {/* <span className="flex justify-between items-center pt-[44px]">
      <p className="text-[18px] leading-6 font-semibold text-[#666666] ">
        {" "}
        Today{" "}
      </p>
      <p className="text-[14px] leading-[16.8px] font-normal text-[#666666]">
        12/09/2021
      </p>
    </span> */}

    {/* friend Request */}
    {/* <section className="flex justify-between border-[1px] pt-[10px] pb-4 px-4 mt-[8px] rounded-lg ">
      <div className="flex items-center ">
        <div className="border-[1px] border-[#201E1E] rounded-full w-[40px] h-[40px] bg-[#201E1E]">
          <BsCalendarFill
            size={16}
            className="mx-auto flex items-center my-[10px] text-[#FFFFFF]"
          />
        </div>

        <div className="w-[88%] ml-4 tabletAir:w-[70%]  ">
          <p className="text-[#333333] text-[16px] leading-6 font-normal ">
            Henry O added you as the photographer to an event
          </p>
          <p className="text-[#999999] text-[13px] leading-[15.6px] mt-[2px] font-normal">
            3:30pm
          </p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <button className="text-[#FFFFFF] bg-[#000000] px-[18px] h-[45px] rounded-[8px] text-[16px] font-bold tracking-[10%] leading-5">
          Accept
        </button>
        <button className="text-[#000000] border-[1px] border-[#000000] px-[18px] h-[45px] rounded-[8px] text-[16px] font-bold tracking-[10%] leading-5">
          Decline
        </button>
      </div>
    </section> */}

    {/* purchase photo */}
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
            {data.body}
          </p>
          <p className="text-[#999999] text-[13px] leading-[15.6px] mt-[2px] font-normal">
            {data.datetime}
          </p>
        </div>
      </div>
    </section>
  </div>
))}
    </>
    }
  </div>
  )
}

export default NotificationsComp
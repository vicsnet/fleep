/** @format */

import React from "react";
import PersonalUser from "../pages/Dashboard/PersonalUser";
import useFetchParticipant from "../pages/Dashboard/User/userhooks/useFetchParticipant";
import useFetchEvent from "../pages/Dashboard/Event/eventhooks/useFetchEvent";
import { Skeleton } from "antd";
import DashboardError from "../pages/Dashboard/Error/DashboardError";

const EventMembers = () => {
  const { data, isLoading:eventLoading, error, refetch } = useFetchParticipant();
  console.log("dashboardparticipant", data);


  const { data: detail, isLoading: detailLoading, error:detailError, refetch:reload } = useFetchEvent();

  console.log("dashboardfetchEv",detail);

  return (

    // {error !==null || detailError !==null ? <DashboardError error={error} refetch={refetch}/> 
    <main className="mt-[24px] flex justify-between smDesk:flex-col">
      

 

    

      <section
        className="pl-[14px] rounded-[8px] w-[48%] smDesk:w-[100%]"
        style={{ background: "rgba(255, 255, 255, 1)" }}
      >
        <h2 className="text-[#1A1941] text-[20px] font-semibold leading-[24px] pt-[19px]">
          Latest Members
        </h2>
        {eventLoading ? (
          <div className="mx-auto mt-3">

            <Skeleton
            active
              paragraph={{ rows: 5, width: ["94%", "94%", "94%", "94%", "94%"] }}
              title={false}
              className="mx-auto"
              
            />
          </div>
        ) : (error !== null) ?
         <div className="mt-[50px]">

           <DashboardError error={error} refetch={refetch}/> 
         </div>
        :  
        <div className="">
        {data?.data.length === 0 ? (
          <div className="flex flex-col justify-center">
            <p className="text-[20px] font-bold leading-[24px] text-[#8B8B8B] py-[97px] px-[169px] lgDesktop:px-[140px] smDesktop:px-[80px] smDesk:px-[220px] tablet:px-[150px] tabletAir:px-[0px]">
              No new members
            </p>
          </div>
        ) : (
          <table className="w-[90%] mx-auto mt-[21px] ">
            <thead className="text-left text-[16px] font-[500] leading-[19.2px] bg-[#FAFAFA] ">
              <tr className=" pl-[57px] pr-[]">
                <th className="pt-[12px] pb-[12px] pl-[46px] w-[60%]">
                  Users
                </th>
                <th className="pt-[12px] pb-[12px] ">Photos</th>
                <th className="pt-[12px] pb-[12px] pr-[27px]">Events</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.slice(0, 5)?.map((data, id) => (
                <PersonalUser
                  key={id}
                  fname={data?.full_name}
                  tphoto={data?.eventsimagescount}
                  eventAttended={data?.eventscount}
                  im={data?.profile_photo}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
          
        }
      </section>


      <section
        className="px-[14px] rounded-[8px]  w-[48%] smDesk:w-[100%] smDesk:mt-[40px]"
        style={{ background: "rgba(255, 255, 255, 1)" }}
      >
        <h2 className="text-[#1A1941] text-[20px] font-semibold leading-[24px] pt-[19px]">
          Latest Events
        </h2>
{
  detailLoading ?
  (

<div className="mx-auto mt-3">
<Skeleton
active
  paragraph={{ rows: 5, width: ["94%", "94%", "94%", "94%", "94%"] }}
  title={false}
  className="mx-auto"
  
/>
</div>
  ):
  
  (detailError !== null) ?
<div className="mt-[50px]">

<DashboardError error={detailError} refetch={reload}/>
</div>

:
(

<div className="">

  {detail?.data?.length == 0 ? (
    <div className="flex flex-col justify-center">
      <p className="text-[20px] font-bold leading-[24px] text-[#8B8B8B] py-[97px] px-[169px]">
        No new event
      </p>
    </div>
  ) : (
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
        {detail?.data.slice(0, 5).map((data) => (
          <tr
            key={data?.id}
            className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]"
          >
            <td className="flex gap-[14px] pl-[8px] mt-[11px] mb-[11px] items-center w-[100%]">
              <p className="text-[14px leading-[16.8px] font-[300]">
                {data?.title}
              </p>
            </td>
            <td className="w-[20%] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
              {data?.imagescount}
            </td>
            <td className="w-[30%] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
              {data?.no_of_all_participants}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>
)

}
      </section>
  
      
    
    </main>
  );
};

export default EventMembers;

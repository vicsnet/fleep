import React from "react";
import SingleEvent from "./Event/SingleEvent";
import formatDate from "../../consts/helper";
import FadeLoader from "react-spinners/FadeLoader";
import DashboardError from "./Error/DashboardError";

export default function EventList({ data, isLoading, search, selectedOrder, isError, refetch, error }) {


  function dataSort(a, b) {
    if (selectedOrder === "all") {
      return data;
    } else if (selectedOrder === "recent") {
      return Number(b.date) - Number(a.date);
    } else {
      return Number(a.date) - Number(b.date);
    }
  }

  function searchEvent(value) {
    if (search === "") {
      return value;
    } else if (value.title.toLowerCase().includes(search.toLowerCase())) {
      return value.title.toLowerCase().includes(search.toLowerCase());
    }
  }

  const newValue = data
    ?.sort((a, b) => dataSort(a, b))
    .filter((value) => searchEvent(value));

  return (
    <>
    {
      isError ?
      <div className="mt-[80px]">

        <DashboardError error={error} refetch={refetch} />
      </div>
:
<>
{
     isLoading ?
     <div className="flex justify-center mt-3">
      <FadeLoader color="#19192E" />
     </div> :(
<>
{newValue?.length > 0 ? (
newValue?.map((data) => (
<div className="" key={data.id}>
  <div className="">
    <SingleEvent
      isLoading={data.isLoading}
      index={data.id}
      singleId={data.id}
      title={data.title}
      coverphoto={data.coverphoto}
      date={formatDate(data.date)}
      // datem={data.date}
      images={data.imagescount}
      participant={data.no_of_all_participants}
    />
  </div>
</div>
))
) : (
<div>
<p className="text-[20px] leading-[24.8px] pt-[10px] pr-[16px] text-[#1A1941]">
  Event Not Found
  </p>
   </div>
)}
</>
     )
    }
</>
    }
    </>
  );
}

import React from "react";
import { Link, useParams } from "react-router-dom";
import { TbUsers } from "react-icons/tb";
import { CiImageOn } from "react-icons/ci";


const SingleEvent = ({ index, title, coverphoto, date, images, singleId }) => {

    const { id } = useParams();
  return (
    <Link key={index} to={`/event/created-event/${singleId}`}>
      <div
        className="w-[100%] rounded-[16px] mb-[4px]"
        style={{
          background: "rgba(255, 255, 255, 1)",
          boxShadow: "0px 0px 10px 0px rgba(132, 132, 132, 0.15)",
        }}
      >
        {/* <Link to="event/created-event"> */}
        <p className="flex justify-end text-[14px] leading-[16.8px] pt-[10px] pr-[16px] text-[#C6C6C6]">
          View
        </p>
        {/* </Link> */}
        <div className="flex justify-between items-center">
          <div className="flex gap-[18px]">
            <img
              src={coverphoto}
              alt="event"
              className="w-[80px] h-[80px] object-cover rounded-[8px] mx-[16px] mb-[16px]"
            />
            <div className="mt-[4.03px]">
              <h2 className="text-[18px] leading-[21.6px] font-semibold">
                {" "}
                {title}
              </h2>
              <p className="text-[#8A8A8A] text-[13px] font-normal leading-4">
                {date}
                {/* September 30th, 2022 */}
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
                          <p className="text-[14px] leading-4 text-[#14181F] ">
                              {images}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleEvent;

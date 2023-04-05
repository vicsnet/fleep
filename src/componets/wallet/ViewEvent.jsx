import React from "react";
import { Link } from "react-router-dom";

const ViewEvent = ({ open, singleId }) => {
  if (!open) return null;
  return (
    <div
      // onClick={onClose}
      className="">
      <Link to={`/event/created-event/${singleId}`} className="mt-[-15px] ml-[20px] absolute">
        <h2
          className="font-[400] text-[14px] leading-[16.8px]  rounded-[4px] bg-[#FFFFFF] cursor-pointer w-[100px] pl-[15px] py-[9px] text-[#000000]"
          style={{
            border: "1px solid rgba(234, 234, 234, 1)",
            boxShadow:
              "linear-gradient(0deg, #EAEAEA, #EAEAEA), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
          }}
        >
          View Event
        </h2>
      </Link>
    </div>
  );
    

};

export default ViewEvent;

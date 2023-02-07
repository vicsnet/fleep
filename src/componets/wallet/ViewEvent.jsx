import React from "react";

const ViewEvent = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      // onClick={onClose}
      className="">
      <div className="mt-[-15px] ml-[20px] absolute">
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
      </div>
    </div>
  );
    

};

export default ViewEvent;

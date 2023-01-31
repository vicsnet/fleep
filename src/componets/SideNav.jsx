import React from "react";
import bum from "../assets/HBD to bunmi 20190716_003414.jpg";
import { GoPrimitiveDot } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useSelector } from "react-redux";

const SideNav = ({ title, display, padd }) => {
  const back = useNavigate();
  const { user, token, userName } = useSelector((state) => state.user);
  console.log(userName);

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

      <Link to="/profile">
        <div className="flex items-center gap-[16px] pr-[42px]">
          <h2 className="text-[16px] font-bold leading-[19.2px]">
            Teejay Teko
          </h2>
          <div className="relative">
            <img
              src={bum}
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
    </section>
  );
};

export default SideNav;

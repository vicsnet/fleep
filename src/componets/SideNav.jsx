import React from "react";
import bum from "../assets/HBD to bunmi 20190716_003414.jpg";
import { GoPrimitiveDot } from "react-icons/go";
import { Link } from "react-router-dom";

const SideNav = ({title}) => {
  return (
    <section className="flex justify-between pb-[39px] border-b-[1px] border-[#C6C6C6]">
      <h2 className="text-[28px] font-semibold leading-[38.4px] text-[#1A1941] pl-[42px]">
        {title}
      </h2>

      <Link to='/profile'>
      <div className="flex items-center gap-[16px] pr-[42px]">
        <h2 className="text-[16px] font-bold leading-[19.2px]">Teejay Teko</h2>
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

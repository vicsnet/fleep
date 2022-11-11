import React from "react";
import { FaTh } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineCalendar, AiOutlineSetting } from "react-icons/ai";
import { FiUsers, FiArrowRightCircle, FiLogOut } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";

import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/LOGO (2).png";
import mainLogo from "../assets/LOGO.png";

const Sidebar = ({ children, title }) => {
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdSpaceDashboard />,
    },
    {
      path: "/event",
      name: "Event",
      icon: <AiOutlineCalendar />,
    },
    {
      path: "/users",
      name: "Users",
      icon: <FiUsers />,
    },

    {
      path: "/history",
      name: "History",
      icon: <BiTimeFive />,
    },
  ];

  const menuItem2 = [
    {
      path: "/settings",
      name: "Settings",
      icon: <AiOutlineSetting />,
    },
    {
      path: "/notification",
      name: "Notification",
      icon: <IoIosNotificationsOutline />,
    },
  ];

  const iconNotActive = "text-[#8B8B8B]";
  const iconActive =
    "text-[#1A1941] bg-[#FFFFFF] px-[5px] py-[5px] rounded-[8px]";
  const nameNotActive = "text-[14px] leading-[18px] text-[#8B8B8B] font-[500]";
  const nameActive = "text-[14px] leading-[18px] text-[#FFFFFF] font-bold";
  return (
    <main className="flex max-h-screen overflow-y-hidden  bg-[#19192E] ">
      <section className="bg-[#19192E] w-[220px] max-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <div className="w-[90%] mx-auto">
          <div className="border-b-[1px] border-[#464646]">
            <img
              src={Logo}
              alt=""
              className="w-[86px] pt-[49px] pb-[34px] pl-[10px]"
            />
          </div>
          <div className="mt-[45px] pl-[10px] border-b-[1px] border-[#4d3b3b]">
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="flex items-center gap-[22px] pb-[46px]"
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? iconActive : iconNotActive
                  }
                >
                  {item.icon}
                </NavLink>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? nameActive : nameNotActive
                  }
                >
                  {item.name}
                </NavLink>
              </NavLink>
            ))}
          </div>
          <div className="mt-[45px] pl-[10px] ">
            {menuItem2.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="flex items-center gap-[22px] pb-[46px]"
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? iconActive : iconNotActive
                  }
                >
                  {item.icon}
                </NavLink>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? nameActive : nameNotActive
                  }
                >
                  {item.name}
                </NavLink>
              </NavLink>
            ))}
          </div>

          {/* upgrade plan */}
          <div className="bg-white mt-[160px] pl-[20px] rounded mb-[82px] pb-[17px]">
            <img src={mainLogo} alt="" className="w-[116px] pt-[18px] " />
            <span className="pt-[16px] flex items-end justify-between pr-[19px]">
              <p className=" w-[80%] text-[16px] font-bold leading-[20px]">
                Upgrade to Get Photos Space!
              </p>
              <FiArrowRightCircle size={20} className="text-[#EE2339]" />
            </span>
          </div>

          <div className=" flex items-center gap-[22px] pl-[10px] pb-[51px]">
            <NavLink
              to="/log"
              className={({ isActive }) =>
                isActive ? iconActive : iconNotActive
              }
            >
              <FiLogOut size={12} />
            </NavLink>
            <NavLink
              to="/log"
              className={({ isActive }) =>
                isActive ? nameActive : nameNotActive
              }
            >
              Logout
            </NavLink>
          </div>
        </div>
      </section>
      <section className="w-[100%] rounded-l-[40px]  pt-[42px] bg-[#FAFAFA] ">
        {children}
      </section>
    </main>
  );
};

export default Sidebar;

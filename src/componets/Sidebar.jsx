import React, { useState } from "react";
import { FaTh } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineCalendar, AiOutlineSetting } from "react-icons/ai";
import { FiUsers, FiArrowRightCircle, FiLogOut } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";

import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/LOGO (2).png";
import mainLogo from "../assets/LOGO.png";
import NewEvent from "../pages/Dashboard/Event/NewEvent";
import AddUser from "../pages/Dashboard/Event/AddUser";
import UsersImage from "../pages/Dashboard/User/UsersImage";
import UploadImage from "./UploadImage";

const Sidebar = ({ children }) => {
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

  const [openAddUser, setOpenAddUser] = useState(false);

  const iconNotActive = "text-[#8B8B8B]";
  const iconActive =
    "text-[#1A1941] bg-[#FFFFFF] px-[5px] py-[5px] rounded-[8px]";
  const nameNotActive = "text-[14px] leading-[18px] text-[#8B8B8B] font-[500]";
  const nameActive = "text-[14px] leading-[18px] text-[#FFFFFF] font-bold";
  return (
    <main className="flex max-h-screen overflow-y-hidden  bg-[#19192E] ">
      <section className="bg-[#19192E] w-[265px] max-h-screen overflow-y-scroll whitespace-nowrap hide scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <div className="w-[90%] mx-auto">
          <div className="border-b-[1px] border-[#464646]">
            <img
              src={Logo}
              alt=""
              className="w-[120px] pt-[49px] pb-[34px] pl-[10px]"
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
            <Link to="/upgrade">
            <img src={mainLogo} alt="" className="w-[116px] pt-[18px] " />
            <span className="pt-[16px] flex items-end justify-between pr-[19px]">
              <span>
                <p className=" w-[80%] text-[16px] font-bold leading-[20px]">
                  Upgrade to
                </p>
                <p className=" text-[16px] font-bold leading-[20px]">
                  Get Photos Space!
                </p>
              </span>
              <FiArrowRightCircle size={20} className="text-[#EE2339]" />
            </span>
            </Link>
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
      <section className="w-[100%] rounded-l-[30px]  pt-[42px] bg-[#FAFAFA] ">
        {children}
      </section>
      
      {/* Add / EdIt Event */}
      <NewEvent />

      {/* Add user */}

      <AddUser />

      <UsersImage />

      <UploadImage />
    </main>
  );
};

export default Sidebar;

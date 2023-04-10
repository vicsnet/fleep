import React, { useState } from "react";
import { FaTh } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineCalendar, AiOutlineSetting } from "react-icons/ai";
import { FiUsers, FiArrowRightCircle, FiLogOut } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";

import { NavLink, Link, Outlet, Navigate } from "react-router-dom";
import Logo from "../assets/LOGO (2).png";
import mainLogo from "../assets/LOGO.png";
import NewEvent from "../pages/Dashboard/Event/NewEvent";
import AddUser from "../pages/Dashboard/Event/AddUser";
import UsersImage from "../pages/Dashboard/User/UsersImage";
import UploadDp from "./UploadDp";
import UploadImages from "./UploadImages";
import icon from "../assets/SVG/Union.svg";
import icon2 from "../assets/SVG/UnionD.svg";
import icon3 from "../assets/SVG/UnionE.svg";
import icon4 from "../assets/SVG/UnionE2.svg";
import icon5 from "../assets/SVG/Icon pack Variants.svg";
import icon6 from "../assets/SVG/UnionU.svg";
import icon7 from "../assets/SVG/UnionT.svg";
import icon8 from "../assets/SVG/UnionTc.svg";
import icon9 from "../assets/SVG/UnionSc.svg";
import icon10 from "../assets/SVG/UnionSc2.svg";
import icon11 from "../assets/SVG/GroupNc1.svg";
import icon12 from "../assets/SVG/GroupNc.svg";
import wallet from "../assets/wallet.png";
import wallet2 from "../assets/wallet2.png";
import UsersDeleteOption from "../pages/Dashboard/User/UsersDeleteOption";
import WithDrawToBank from "./wallet/WithDrawToBank";
import WithDrawSuccesfull from "./wallet/WithdrawSuccesfull";
import {useDispatch, useSelector} from "react-redux"
import { logout } from "../Redux/features/authentication/registrationSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddBankAcct from "./wallet/AddBankAcct";

const Sidebar = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {success} = useSelector((state) =>state.user);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <img src={icon2} alt="" className="w-[13px] h-[13px]" />,
      image: <img src={icon} alt="" className="w-[13px] h-[13px]" />,
    },
    {
      path: "/event",
      name: "Event",
      icon: <img src={icon4} alt="" className="w-[13px] h-[13px]" />,
      image: <img src={icon3} alt="" className="w-[13px] h-[13px]" />,
    },
    {
      path: "/wallet",
      name: "Wallet",
      icon: <img src={wallet2} alt="" className="w-[13px] h-[13px]" />,
      image: <img src={wallet} alt="" className="w-[13px] h-[13px]" />,
    },
    {
      path: "/users",
      name: "Users",
      icon: <img src={icon6} alt="" className="w-[13px] h-[13px]" />,
      image: <img src={icon5} alt="" className="w-[13px] h-[13px]" />,
    },

    {
      path: "/history",
      name: "History",
      icon: <img src={icon8} alt="" className="w-[13px] h-[13px]" />,
      image: <img src={icon7} alt="" className="w-[13px] h-[13px]" />,
    },
  ];

  const menuItem2 = [
    {
      path: "/settings",
      name: "Settings",
      icon: <img src={icon10} alt="" className="w-[13px] h-[13px]" />,
      image: <img src={icon9} alt="" className="w-[13px] h-[13px]" />,
    },
    {
      path: "/notification",
      name: "Notification",
      icon: <img src={icon12} alt="" className="w-[13px] h-[13px]" />,
      image: <img src={icon11} alt="" className="w-[13px] h-[13px]" />,
    },
  ];

  const [openAddUser, setOpenAddUser] = useState(false);

  const iconNotActive = "text-[#8B8B8B]";
  const iconActive =
    "text-[#1A1941] bg-[#FFFFFF] px-[5px] py-[5px] rounded-[4px]";
  const nameNotActive = "text-[14px] leading-[18px] text-[#8B8B8B] font-[500]";
  const nameActive = "text-[14px] leading-[18px] text-[#FFFFFF] font-bold";

  useEffect(()=>{
    if(success){
      Navigate("/login")
    }
  })
  return (
    <main className="flex max-h-screen overflow-y-hidden  bg-[#19192E] ">
      <section className="bg-[#19192E] w-[265px] max-h-screen overflow-y-scroll whitespace-nowrap hide scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <div className="w-[90%] mx-auto">
          <div className="border-b-[1px] border-[#464646]">
            <Link to="/dashboard">
              <img
                src={Logo}
                alt=""
                className="w-[120px] pt-[49px] pb-[34px] pl-[10px]"
              />
            </Link>
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
                  {({ isActive }) =>
                    isActive ? (
                      <div className="">{item.icon}</div>
                    ) : (
                      <div className="">{item.image}</div>
                    )
                  }
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
                  {({ isActive }) =>
                    isActive ? (
                      <div className="">{item.icon}</div>
                    ) : (
                      <div className="">{item.image}</div>
                    )
                  }
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
            to="/login"
              onClick={()=>dispatch(logout())}
              className={({ isActive }) =>
                isActive ? nameActive : nameNotActive
              }
            >
              Logout
            </NavLink>
          </div>
        </div>
      </section>
      <section className="w-[100%] rounded-l-[30px]  pt-[42px] bg-[#FAFAFA] h-[100%]">
        <Outlet />
      </section>

      {/* Add / EdIt Event */}
      <NewEvent />

      {/* Add user */}

      <AddUser />

      <UsersImage />

      <UploadDp />
      <UploadImages />
      {/* <UsersDeleteOption /> */}

      {/* withdraw to bank */}
      <WithDrawToBank />

    
      
      {/* <WithDrawSuccesfull/> */}


      {/* Add Bank Acct */}
      <AddBankAcct/>
    </main>
  );
};

export default Sidebar;

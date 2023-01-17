import React from "react";
import LOGO from "../assets/LOGO.png";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {

  const isActiveStyle =
    "hover:text-[#EE2339] text-[#8B8B8B] hover:border-t-2 hover:border-[#000000]";
  const isNotActiveStyle =
    " text-[#EE2339] border-t-2 border-[#000000] font-bold"

 
  return (
    <section>
      <div className="w-[90%] mx-auto flex justify-between pt-14 pb-6">
        {/* logo */}
        <div className="">
          <Link to="/">
            <img
              src={LOGO}
              alt=""
              className="w-[126px] h-[41.93px] object-cover cursor-pointer"
            />
          </Link>
        </div>

        {/* menu */}
        <ul className="text-[18px]  font-normal leading-5 flex items-center cursor-pointer gap-7 ">
          <NavLink
            to="/pricingPlan"
            className={({ isActive }) =>
              isActive ? isNotActiveStyle : isActiveStyle
            }
          >
            <li>Pricing</li>
          </NavLink>
          <NavLink
            to="/useCases"
            className={({ isActive }) =>
              isActive ? isNotActiveStyle : isActiveStyle
            }
          >
            <li>Use Cases</li>
          </NavLink>
          <NavLink
            to="/contactUs"
            className={({ isActive }) =>
              isActive ? isNotActiveStyle : isActiveStyle
            }
          >
            <li>Contact Us </li>
          </NavLink>
        </ul>

        {/* Auth login / register */}

        <ul className="text-[16px] font-bold leading-5 tracking-[10%] flex items-center gap-5 cursor-pointer">
          <Link to='/login'>
          <li className="">Log In</li>
          </Link>
          <Link to='/registration'>
          <li className="text-[#EE2339] border-[1px] border-[#EE2339] px-[20px] py-[8px] rounded-[6px] ">
            Register
          </li>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;

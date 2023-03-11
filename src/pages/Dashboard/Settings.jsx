import React, { useState } from "react";
import SideNav from "../../componets/SideNav";
import { FaLock } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import {
  IoIosNotificationsOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";
import SavedAcc from "../../componets/wallet/SavedAcc";
import acc1 from "../../assets/Building_04.png";
import acc from "../../assets/Building_05.png";

const Settings = () => {
  const [show, setShow] = useState(false);

  const openPwdDisplay = () => {
    setShow(true);
    setOpenBankAcct(false);
  };
  const [openBankAcct, setOpenBankAcct] = useState(false);

  const closePwdDisplay = () => {
    setShow(false);
  };

  const openCloseAcct = () => {
    setOpenBankAcct(!openBankAcct);
    setShow(false);
  };
  return (
    <main className="max-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pb-[180px]">
      <SideNav title="Settings" display={"flex"} />

      <section className="mx-[42px] mt-[48px] flex gap-12 tabletAir:flex-col">
        <div
          className=" tabletAir:w-[50%] smDesktop:w-[40%] w-[30%] px-[42px] rounded-lg h-[300px]"
          style={{ background: "rgba(255, 255, 255, 1)" }}
        >
          <div
            className="pb-6 border-b-[1px] cursor-pointer "
            onClick={openPwdDisplay}
          >
            <button className="flex items-center gap-2 pt-10 ">
              <FiLock
                size={20}
                className={`text-[#8A8A8A] ${show && "text-[#1A1941]"}`}
              />{" "}
              <p
                className={`text-[16px] font-medium leading-[19.2px] text-[#8A8A8A] ${
                  show && " text-[#1A1941]"
                }  `}
              >
                Change Password
              </p>
            </button>
          </div>

          <div
            className="pb-6 border-b-[1px] cursor-pointer "
            onClick={openCloseAcct}
          >
            <button className="flex items-center gap-2 pt-10 ">
              {!openBankAcct ? (
                <img src={acc} alt="" className="w-[20px] h-[20px]" />
              ) : (
                <img src={acc1} alt="" className="w-[20px] h-[20px]" />
              )}
              {/* <FiLock size={20} className="text-[#1A1941]" /> */}
              <p
                className={`text-[16px] font-medium leading-[19.2px] text-[#8A8A8A] ${
                  openBankAcct && " text-[#1A1941]"
                } `}
              >
                Saved Bank Account
              </p>
            </button>
          </div>
          <div className="flex justify-between items-end pb-[200px]">
            <div className="flex items-center gap-2 pt-10 ">
              <IoIosNotificationsOutline size={20} className="text-[#8A8A8A]" />{" "}
              <p className="text-[16px] font-medium leading-[19.2px] text-[#8A8A8A] ">
                Notification
              </p>
            </div>

            <label
              for="default-toggle"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                id="default-toggle"
                className="sr-only peer"
              />
              <div className="w-[50px] h-[24px] bg-gray-100 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] peer-checked:after:left-[8px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-500 dark:border-gray-600 peer-checked:bg-[#1A1941]"></div>
              {/* */}
            </label>
          </div>
        </div>

        <section
          className={
            !openBankAcct
              ? "hidden"
              : " block  w-[50%] rounded-lg pt-[20px] pb-[58px] tabletAir:w-[70%] tabletAir:ml-[20%]"
          }
          style={{ background: "rgba(255, 255, 255, 1)" }}
        >
          <SavedAcc />
        </section>

        <section
          className={
            !show
              ? "hidden"
              : " block  w-[50%] rounded-lg pt-[20px] pb-[58px] tabletAir:w-[70%] tabletAir:ml-[20%]"
          }
          style={{ background: "rgba(255, 255, 255, 1)" }}
        >
          <IoIosCloseCircleOutline
            onClick={closePwdDisplay}
            size={24}
            className="ml-auto mr-[42px] mb-[20px]"
          />

          <form className="w-[80%] mx-auto">
            <label
              htmlFor=""
              className="text-[16px] leading-[19.2px] font-normal text-[#333333] mb-[4px]"
            >
              Enter Old Password
            </label>
            <br />
            <input
              type="password"
              placeholder="Enter old password"
              className="w-[100%] h-[40px] rounded-[8px] pl-[20px] outline-none border-[1px] border-[#E5E5E5] bg-[#F9F9F9] text-[14px] leading-[16.8px] font-light text-[#999999]"
            />{" "}
            <br />
            <br />
            <label
              htmlFor=""
              className="text-[16px] leading-[19.2px] font-normal text-[#333333] mb-[4px]"
            >
              Enter New Password
            </label>
            <br />
            <input
              type="password"
              placeholder="Enter New Password"
              className="w-[100%] h-[40px] rounded-[8px] pl-[20px] outline-none border-[1px] border-[#E5E5E5] bg-[#F9F9F9] text-[14px] leading-[16.8px] font-light text-[#999999]"
            />
            <br />
            <br />
            <label
              htmlFor=""
              className="text-[16px] leading-[19.2px] font-normal text-[#333333] mb-[4px]"
            >
              Verify New Password
            </label>
            <br />
            <input
              type="password"
              placeholder="Re-type new password"
              className="w-[100%] h-[40px] rounded-[8px] pl-[20px] outline-none border-[1px] border-[#E5E5E5] bg-[#F9F9F9] text-[14px] leading-[16.8px] font-light text-[#999999]"
            />
            <br />
            <br />
            <br />
            <button className="text-[16px] leading-[19.2px] tracking-[10%] font-bold w-[40%] text-center py-[17px] bg-[#1A1941] text-[#FFFFFF] rounded-[8px]">
              Save Changes
            </button>
          </form>
        </section>
      </section>
    </main>
  );
};

export default Settings;

import React, { useContext, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import {
  openAddUser,
  closeAddUser,
} from "../../../Redux/features/addUserSlice";

import useAddUser from "../User/userhooks/useAddUser";

const AddUser = () => {
  const open = useSelector((state) => state.crtAddUser.open);

  const dispatch = useDispatch();

  const [openDel, setOpenDel] = useState(false);
  const [delOption, setDelOption] = useState(false);

  const {} =useAddUser()

  const showDelButton = () => {
    setOpenDel(true);
  };

  const showDelOption = () => {
    setDelOption(true);
  };

  const cancelDelOption = () => {
    setDelOption(false)
    setOpenDel(false)
  }

  const DelButton = () => {
    return (
      <div 
        // onClick={() => setOpenDel(false)}
        className="absolute">
      <button
        onClick={showDelOption}
        className="text-[16px] font-normal text-[#000000] py-[14px] px-[22.5px] mt-[8px] ml-[-20px] bg-[#FFFFFF]"
        style={{ boxShadow: "0px 0px 10px 0px rgba(132, 132, 132, 0.15)" }}
      >
        Delete
      </button>

      </div>
    );
  };

  const DelOption = () => {
    return (
      <div
        className="fixed top-0 w-[100%] h-[100%] max-h-[100%]"
        style={{ background: "rgba(20, 24, 31, 0.25)" }}
      >
        <div
          className="w-[30%] smDesktop:w-[40%] tabletAir:w-[50%] mx-auto pt-[31px] pb-[43px] rounded-lg mt-[140px] "
          style={{ background: "rgba(255, 255, 255, 1)" }}
        >
          <div className="">
            <div className="flex justify-end mb-[13px] ">
              <IoIosCloseCircleOutline
                size={24}
                onClick={cancelDelOption}
                className="text-[#7C7B7B] cursor-pointer mr-[28px] "
              />
            </div>
            <p className="text-[24px] leading-8 font-bold text-[#1A1941] text-center ">
              Are you sure you want to
            </p>
            <p className="text-[24px] leading-8 font-bold text-[#1A1941] text-center mt-2 ">
              delete this user?
            </p>
          </div>
          <div className="w-[80%] mx-auto flex justify-between">
            <button className="bg-[#1A1941] rounded-lg h-[50px] mt-[50px] px-[45px] text-[#FFFFFF] tracking-[10%] text-[16px] leading-5 font-extrabold">
              Delete
            </button>
            <button
              onClick={cancelDelOption}
              className="border-[#1A1941] border-[1px] rounded-lg h-[50px] mt-[50px] px-[45px] text-[#1A1941] tracking-[10%] text-[16px] leading-5 font-extrabold"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (open) return null;

  return (
    <main
      className="fixed top-0 max-h-screen h-screen w-[100%] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
      style={{ background: "rgba(20, 24, 31, 0.25)" }}
    >
      <div
        className="w-[70%] rounded-lg mt-[79px] mx-auto  pb-[60px] mb-[60px]"
        style={{ background: "rgba(255, 255, 255, 1)" }}
      >
        <div className="w-[90%] mx-auto">
          <div className="pt-[54px] flex justify-between">
            <h2 className="text-[24px] font-bold leading-7 text-[#1A1941]">
              Add User
            </h2>
            <IoIosCloseCircleOutline
              size={24}
              className="text-[#7C7B7B] cursor-pointer"
              onClick={() => dispatch(closeAddUser())}
            />
          </div>
          <p className="text-[#959595] text-[14px] font-normal mt-4 ">
            Fill the form to add a user
          </p>

          <form className="mt-[40px]">
            <div className="flex gap-[24px]">
              <div className="w-[50%]">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 text-[#333333] font-normal"
                >
                  Name of User
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter the name of the user"
                  className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#F9F9F9] h-[50px] pl-[20px] w-[100%]"
  try                style={{ border: "1px solid #E5E5E5" }}
                />
              </div>
              <div className="w-[50%]">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 text-[#333333] font-normal"
                >
                  User’s Email
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter the email of the user"
                  className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#F9F9F9] h-[50px] pl-[20px] w-[100%]"
                  style={{ border: "1px solid #E5E5E5" }}
                />
              </div>
            </div>

            {/* button */}
            <button className="bg-[#1A1941] rounded-lg h-[50px] mt-[50px] px-[80px] text-[#FFFFFF] tracking-[10%] text-[16px] leading-5">
              Add User
            </button>
          </form>
          {/* if there is user */}
          <section className="mt-[80px]">
            <h3 className="font-bold text-[24px] leading-[28.8px] text-[#14181F]">
              Users
            </h3>
            <table className="w-[100%]  mt-[20px]  table-fixed">
              <thead className="text-left text-[16px] font-[500] leading-[19.2px] bg-[#EEEEEE] h-[70px] ">
                <tr className=" pl-[57px] ">
                  <th className="pt-[12px] pb-[12px] w-[10%] pl-[15px] rounded-tl-[14px]">
                    S/N
                  </th>
                  <th className="pt-[12px] pb-[12px] ">User's Name</th>
                  <th className="pt-[12px] pb-[12px]">Email</th>

                  <th className="pt-[12px] pb-[12px] pr-[27px] w-[15%] rounded-tr-[14px]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="mt-[20px]">
                <tr className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
                  <td className="w-[20%] text-[14px] leading-[16.8px] font-[300] pt-[20px] py-auto pl-[15px] pb-[8px]">
                    1
                  </td>
                  <td className="pt-[20px] pb-[8px]">
                    <p className="text-[14px] leading-[16.8px] font-[300]">
                      Tejiri Tabor
                    </p>
                  </td>

                  <td className="w-[20%] text-[14px] leading-[16.8px] font-[300] py-auto pt-[20px] pb-[8px]">
                    Example@mail.com
                  </td>
                  {!openDel ? (
                    <td
                      onClick={showDelButton}
                      className="w-[20%] text-[20px] leading-[16.8px] font-[300]  py-auto pt-[20px] pb-[8px] cursor-pointer"
                    >
                      ...
                    </td>
                  ) : (
                    <DelButton />
                  )}
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
      {delOption && <DelOption />}
    </main>
  );
};

export default AddUser;

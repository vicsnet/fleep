import React, { useContext } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import {
  openAddUser,
  closeAddUser,
} from "../../../Redux/features/addUserSlice";

const AddUser = () => {
  const open = useSelector((state) => state.crtAddUser.open);

  const dispatch = useDispatch();

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
                  style={{ border: "1px solid #E5E5E5" }}
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
                <tr className=" pl-[57px]">
                  <th className="pt-[12px] pb-[12px] w-[10%] pl-[15px] ">
                    S/N
                  </th>
                  <th className="pt-[12px] pb-[12px] ">User's Name</th>
                  <th className="pt-[12px] pb-[12px]">Email</th>

                  <th className="pt-[12px] pb-[12px] pr-[27px] w-[15%]">
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

                  <td className="w-[20%] text-[20px] leading-[16.8px] font-[300]  py-auto pt-[20px] pb-[8px]">
                    ...
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AddUser;
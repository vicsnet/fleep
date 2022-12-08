import { useState} from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import { closeDelOption } from '../../../Redux/features/usersSlice';

const UsersDeleteOption = ({ setDelOption, cancelDelOption }) => {

const open = useSelector ((state) =>state.users.delOpen)

    const dispatch = useDispatch()
    if(open) return null
  return (
    <div>
      <div
        className="fixed top-0 w-[100%] h-[100%] max-h-[100%]"
        style={{ background: "rgba(20, 24, 31, 0.25)" }}
      >
        <div
          className=" ml-[20%] smDesktop:ml-[16%] tabletAir:ml-[12%]  w-[30%] smDesktop:w-[40%] tabletAir:w-[50%]  pt-[31px] pb-[43px] rounded-lg mt-[140px] "
          style={{ background: "rgba(255, 255, 255, 1)" }}
        >
          <div className="">
            <div className="flex justify-end mb-[13px] ">
              <IoIosCloseCircleOutline
                size={24}
                onClick={() => dispatch(closeDelOption())}
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
              onClick={() => dispatch(closeDelOption())}
              className="border-[#1A1941] border-[1px] rounded-lg h-[50px] mt-[50px] px-[45px] text-[#1A1941] tracking-[10%] text-[16px] leading-5 font-extrabold"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersDeleteOption
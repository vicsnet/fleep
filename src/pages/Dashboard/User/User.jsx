import { useState } from "react";
import { useDispatch } from "react-redux";
import { openUsersEvent } from "../../../Redux/features/usersEventSlice";
import bum from "../../../assets/HBD to bunmi 20190716_003414.jpg";
import UsersDelete from "./UsersDelete";
import { IoIosCloseCircleOutline } from "react-icons/io";

const User = ({ id, }) => {
  const dispatch = useDispatch();
  const [openDel, setOpenDel] = useState(false);
  // const [delOption, setDelOption] = useState(false);


    
  //  const cancelDelOption = () => {
  //    setDelOption(false);
  //    setOpenDel(false);
  //     };

  const showDelButton = () => {
    setOpenDel(!openDel);
  };

  //  const DelOption = () => {
  //    return (
  //      <div
  //        className="fixed top-0 w-[100%] h-[100%] max-h-[100%]"
  //        style={{ background: "rgba(20, 24, 31, 0.25)" }}
  //      >
  //        <div
  //          className="w-[30%] smDesktop:w-[40%] tabletAir:w-[50%] mx-auto pt-[31px] pb-[43px] rounded-lg mt-[140px] "
  //          style={{ background: "rgba(255, 255, 255, 1)" }}
  //        >
  //          <div className="">
  //            <div className="flex justify-end mb-[13px] ">
  //              <IoIosCloseCircleOutline
  //                size={24}
  //                onClick={cancelDelOption}
  //                className="text-[#7C7B7B] cursor-pointer mr-[28px] "
  //              />
  //            </div>
  //            <p className="text-[24px] leading-8 font-bold text-[#1A1941] text-center ">
  //              Are you sure you want to
  //            </p>
  //            <p className="text-[24px] leading-8 font-bold text-[#1A1941] text-center mt-2 ">
  //              delete this user?
  //            </p>
  //          </div>
  //          <div className="w-[80%] mx-auto flex justify-between">
  //            <button className="bg-[#1A1941] rounded-lg h-[50px] mt-[50px] px-[45px] text-[#FFFFFF] tracking-[10%] text-[16px] leading-5 font-extrabold">
  //              Delete
  //            </button>
  //            <button
  //              onClick={cancelDelOption}
  //              className="border-[#1A1941] border-[1px] rounded-lg h-[50px] mt-[50px] px-[45px] text-[#1A1941] tracking-[10%] text-[16px] leading-5 font-extrabold"
  //            >
  //              Cancel
  //            </button>
  //          </div>
  //        </div>
  //      </div>
  //    );
  // };

    return (
      <>
        <tr key={id} className="relative border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
          <td className="pl-[45px] smDesk:pl-[30px] tabletAir:pl-[20px] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
            {id}
          </td>
          <td
            onClick={() => dispatch(openUsersEvent())}
            className="flex gap-[14px] mt-[11px] items-center cursor-pointer "
          >
            <img
              src={bum}
              alt=""
              className="w-[30px] h-[30px] object-cover mb-[14px]"
            />
            <p className="text-[14px] leading-[16.8px] font-[300]">
              Tejiri Tabor
            </p>
          </td>

          <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
            56
          </td>
          <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
            1961
          </td>

          <td
            onClick={showDelButton}
            className=" text-[24px] leading-[16.8px] font-[700] mt-[11px] py-auto text-[#7C7B7B] cursor-pointer"
          >
            ...
        {openDel && <UsersDelete />}
          </td>
        </tr>

      </>
    );
};

export default User;

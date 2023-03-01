import { useState } from "react";
import { useDispatch } from "react-redux";
import { openUsersEvent } from "../../../Redux/features/usersEventSlice";
import bum from "../../../assets/HBD to bunmi 20190716_003414.jpg";
import UsersDelete from "./UsersDelete";
import { IoIosCloseCircleOutline } from "react-icons/io";

const User = ({ id, fname, tphoto, eventAttended,im }) => {
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
              src={im}
              alt=""
              className="w-[30px] h-[30px] object-cover mb-[14px]"
            />
            <p className="text-[14px] leading-[16.8px] font-[300] mt-[-10px]">
              {fname}
            </p>
          </td>

          <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
            {tphoto}
          </td>
          <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
            {eventAttended}
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

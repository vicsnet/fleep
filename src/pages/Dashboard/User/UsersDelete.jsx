import { useState } from "react";
import UsersDeleteOption from "./UsersDeleteOption";
import { useDispatch } from "react-redux";
import { openDelOption } from "../../../Redux/features/usersSlice";

const UsersDelete = ({}) => {
 

  const dispatch = useDispatch()

  return (
    <>
      {/* <td> */}
        <button
          onClick={()=>dispatch(openDelOption())}
          className=" absolute text-[16px] font-normal text-[#000000] py-[14px] px-[22.5px] right-14 mt-[-44px] ml-[20px] bg-[#FFFFFF]"
          style={{ boxShadow: "0px 0px 10px 0px rgba(132, 132, 132, 0.15)" }}
        >
          Delete
        </button>
      {/* </td> */}
    
    </>
  );
};

export default UsersDelete;

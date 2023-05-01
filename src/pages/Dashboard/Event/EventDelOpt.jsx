import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useEffect } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { baseURL } from '../../../Redux/Api/api';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';

const EventDelOpt = (props) => {
  const { token } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const queryClient = useQueryClient();
  const {mutate, isSuccess, isLoading, isError} = useMutation({
    mutationFn:(id)=>{
      return axios.post(`${baseURL}/user/event/delete/${id}`,{id}, config)
    },
     onSuccess:() =>{
      queryClient.invalidateQueries("SINGLE_EVENT")
    }
  })
  useEffect(()=>{
if(isSuccess){
  toast.success("Event Deleted");
  navigate("/event");
}
if(isError){
  toast.error("Event failed delete try again")
  navigate("/event");
}
  },[isSuccess, isError, navigate])
  // api/user/event/delete/152
  return (
    <div>
      <div
        className="fixed top-0 w-[100%] h-[100%] max-h-[100%]"
        style={{ background: "rgba(20, 24, 31, 0.25)" }}
      >
        <div
          className=" ml-[30%] smDesktop:ml-[16%] tabletAir:ml-[12%]  w-[30%] lgDesktop:w-[35%] smDesktop:w-[40%] tabletAir:w-[50%]  pt-[31px] pb-[43px] rounded-lg mt-[140px] "
          style={{ background: "rgba(255, 255, 255, 1)" }}
        >
          <div className="">
            <div className="flex justify-end mb-[13px] ">
              <IoIosCloseCircleOutline
                size={24}
                onClick={props.closeDelete}
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
          <div className="w-[70%] mx-auto flex justify-between">
          <button
              onClick={props.closeDelete}
              className="border-[#1A1941] border-[1px] rounded-lg h-[50px] mt-[50px] px-[45px] text-[#1A1941] tracking-[10%] text-[16px] leading-5 font-extrabold"
            >
              Cancel
            </button>
            <button  onClick={()=>mutate(props.id)} className="bg-[#1A1941] rounded-lg h-[50px] mt-[50px] px-[45px] text-[#FFFFFF] tracking-[10%] text-[16px] leading-5 font-extrabold">
              {/* Delete */}
              {isLoading ? <ClipLoader color="#FFFFFF" /> : "Delete "}
            </button>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDelOpt
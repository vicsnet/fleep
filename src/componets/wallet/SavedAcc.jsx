/** @format */

import React, { useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { BiTrash } from "react-icons/bi";
import { openAddAcct } from "../../Redux/features/wallet/AddAcctSlice";
import { useDispatch, useSelector } from "react-redux";
import useFetchAcct from "./hooks/useFetchAcct";
import useDeleteAcct from "./hooks/useDeleteAcct";
import axios from "axios";
import { baseURL } from "../../Redux/Api/api";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const SavedAcc = () => {
  const dispatch = useDispatch();

  const { data } = useFetchAcct();

  const { token } = useSelector((state) => state.user);

  // const queryClient = useQueryClient();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  // const Delete_URL = `${baseURL}/user/bank/delete/${id}`

  const mutation = useMutation({
    mutationFn:(id)=>{
      return axios.post(`${baseURL}/user/bank/delete/${id}`,{id}, config)
    },
    //  onSuccess:() =>{
    //   // queryClient.invalidateQueries("")
    // }
  })

  // const deleteBank = () => {
    // e.preventDefault()
    // console.log("clicked");
    // const Delete_URL = `${baseURL}/user/bank/delete/${id}`;
// deleteAcct(id)
    // axios
    //   .post(
    //     Delete_URL,
    //     {
    //       id:id,
    //     },
    //     config
    //   )
    //   .then((res) => {
    //     const data = res.json();
    //     if (!res.ok) {
    //       const error = (data && data.message) || res.status;
    //       return Promise.reject(error);
    //     }
    //     toast.success(res.message);
    //   })
    //   .catch((err) => {
    //     toast.error(err);
    //   });

   
  // };
  useEffect(()=>{
if(mutation.isSuccess){
  toast.success("Account details succesfully deleted")
}
if(mutation.isError){
  toast.error(mutation.error?.response?.data?.message)
}
if(mutation.isLoading){
  toast.warning("deleting",{
    autoClose: 1000
  })
}
  },[mutation.isSuccess,mutation.isError, mutation.isLoading])

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-[500] leading-[24px] text-[#000000] capitalize">
          My saved accounts
        </h2>
        <div
          onClick={() => dispatch(openAddAcct())}
          className=" flex items-center gap-2  cursor-pointer"
        >
          <FiPlus />
          <h3 className="text-[16px] font-bold leading-[19.2px] ">Add New</h3>
        </div>
      </div>

      {data?.data?.length === 0 ? (
        <div className=" mt-[60px]">
          <h2 className="font-[500] text-[24px] leading-5 text-[#000000] text-center">
            No Account Added
          </h2>
          <h2 className="mt-[10px] font-[500] text-[16px] leading-5 text-[#000000] text-center">
            Add New Account
          </h2>
        </div>
      ) : (
        <div className="">
          {data?.data?.map((data, index) => (
            <div
              key={data.id}
              className="flex justify-between mt-[40px] items-center border-b-[1px] pb-[30px]"
            >
              <div className="">
                <h2 className="font-bold text-[16px] leading-5 text-[#000000]">
                  {data.bank_name}
                </h2>
                <p className="text-[16px] font-[400] leading-5 text-[#8B8B8B] mt-[8px]">
                  {data?.account_number}
                </p>
              
              </div>
              <div className="">
               

                <BiTrash
                  size={20}
                  className="text-[#8B8B8B]"
                  onClick={()=>mutation.mutate(data?.id)}
                />
                
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedAcc;

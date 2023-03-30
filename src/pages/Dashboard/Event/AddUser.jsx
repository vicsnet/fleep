/** @format */

import React, { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import {
  // openAddUser,
  closeAddUser,
} from "../../../Redux/features/addUserSlice";
import useAddUser from "../User/userhooks/useAddUser";
import SingleEventUser from "./SingleEventUser";
import useFetchSingleParticipant from "./eventhooks/useFetchSingleParticipant";
import { baseURL } from "../../../Redux/Api/api";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import useDeleteUser from "../User/userhooks/useDeleteUser";

const AddUser = () => {
  const { id } = useParams();
  const open = useSelector((state) => state.crtAddUser.open);

  const { token } = useSelector((state) => state.user);

  // const {id:eventId} = useParams()
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  const dispatch = useDispatch();

  const [openDel, setOpenDel] = useState(false);
  const [delOption, setDelOption] = useState(false);
  const [isEmail, setIsEmail] = useState("");

  const [userDetail, setUserDetail] = useState({
    full_name: "",
    email: "",
  });
  const { mutate, isLoading, isSuccess, isError, error } =
    useAddUser(id);

  const { data, isLoading:singleLoading } = useFetchSingleParticipant(id);

  console.log("em", data?.data);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUserDetail({ ...userDetail, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { ...userDetail };
    mutate(user);
  };

  const showDelOption = (email) => {
    setDelOption(true);
    setIsEmail(email);
  };

  const cancelDelOption = () => {
    setDelOption(false);
    setOpenDel(false);
  };

  const DelOption = ({ isEmail }) => {
    const queryClient = useQueryClient();
    const Delete_URL = `${baseURL}/event/delete/user/from/${id}`;

    const { mutate: deleteUser, isSuccess:deleteSuccess, isError:deleteisError, error:deleteError, isLoading:deleteLoading} = useMutation({
      mutationFn: () => {
        return axios.post(Delete_URL, { email: isEmail }, config);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("Singleparticipant");
      },
    });

    const handleDelete = () => {
    
      deleteUser();
    };

 useEffect(()=>{
  if(deleteSuccess){
    toast.success("User Succesfully deleted");
    cancelDelOption()

  }
  if(deleteisError){
    toast.error(deleteError.response.data.message)
  }
 }, [deleteisError, deleteSuccess, deleteError])

    return (
      <div
        key={id}
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
            <button
              onClick={handleDelete}
              className="bg-[#1A1941] rounded-lg h-[50px] mt-[50px] px-[45px] text-[#FFFFFF] tracking-[10%] text-[16px] leading-5 font-extrabold"
            >
              {deleteLoading ? <ClipLoader color="#FFFFFF" /> : "Delete"}
              
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

  useEffect(() => {
    if (isError) {
      toast.error(error.response.data.message);
    }

    if (isSuccess) {
      toast.success("User Added Succesfully");
      setUserDetail({
        full_name: "",
        email: "",
      });
    }
  }, [isError, isSuccess, error]);

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
                  name="full_name"
                  value={userDetail.full_name}
                  onChange={handleChange}
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
                  name="email"
                  value={userDetail.email}
                  onChange={handleChange}
                  placeholder="Enter the email of the user"
                  className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#F9F9F9] h-[50px] pl-[20px] w-[100%]"
                  style={{ border: "1px solid #E5E5E5" }}
                />
              </div>
            </div>

            {/* button */}
            <button
              onClick={handleSubmit}
              className="bg-[#1A1941] rounded-lg h-[50px] mt-[50px] px-[80px] text-[#FFFFFF] tracking-[10%] text-[16px] leading-5"
            >
              {isLoading ? <ClipLoader color="#FFFFFF" /> : " Add User"}
            </button>
          </form>
          {/* if there is user */}

          <section
            className={`${
              data?.data?.length === 0 && "hidden"
            } mt-[80px] block`}
          >
            <h3 className="font-bold text-[24px] leading-[28.8px] text-[#14181F]">
              Users
            </h3>
            {
              singleLoading ? "loading..." :
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
                {data?.data?.map((data, index) => (
                  <SingleEventUser
                  key={data.id}
                  singleLoading={singleLoading}
                    delOpt={showDelOption}
                    idm={data?.id}
                    id={data?.id}
                    fname={data?.full_name}
                    email={data?.email}
                    imd={data?.id}
                  />
                ))}
              </tbody>
            </table>
            }
          </section>
        </div>
      </div>
      {delOption && <DelOption isEmail={isEmail} />}
    </main>
  );
};

export default AddUser;

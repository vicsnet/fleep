/** @format */

import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";

import {
  closeUsersEvent,
  userEmailEvent,
} from "../../../Redux/features/usersEventSlice";

import useFetchUserEvent from "./userhooks/useFetchUserEvent";

const UsersImage = () => {
  const { open, email } = useSelector((state) => state.crtUsrsEvent);

  const {
    data: getEmail,
    isLoading: getEmailLoading,
    isFetching: getEmailLoadingetching,
  } = useFetchUserEvent(email);

  console.log("dataMailMMM", getEmail);

  const em = "";
  const dispatch = useDispatch();

  if (open) return null;

  return (
    <main
      className="fixed top-0 max-h-screen h-screen w-[100%] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
      style={{ background: "rgba(20, 24, 31, 0.25)" }}
    >
      <div
        className="w-[70%] rounded-lg mt-[160px] mx-auto  pb-[60px] mb-[60px]"
        style={{ background: "rgba(255, 255, 255, 1)" }}
      >
        <div className="w-[90%] mx-auto">
          <div className="pt-[54px] flex justify-between">
            <div className="flex items-center">
              <p className="font-light text-[28px] leading-8 text-[#8B8B8B] ">
                Events Attended by:
              </p>
              {getEmailLoading || getEmailLoadingetching ? (
                "Loading"
              ) : (
                <h2 className="ml-[20px] text-[28px] font-bold leading-7 text-[#1A1941]">
                  {getEmail?.data?.user_details?.full_name}
                </h2>
              )}
            </div>
            <IoIosCloseCircleOutline
              size={24}
              className="text-[#7C7B7B] cursor-pointer"
              onClick={() => {
                dispatch(closeUsersEvent());
                dispatch(userEmailEvent(em));
              }}
            />
          </div>

          <section className="mt-[30px] flex flex-wrap gap-[24px] justify-center">
            {getEmail?.data?.event?.map((data, i) => (
              <div
                key={i}
                className="w-[183px] pl-[16px] pt-[16px] pb-[21px] rounded-lg"
                style={{
                  background: "linear-gradient(0deg, #FFFFFF, #FFFFFF)",
                  border: "1px solid rgba(217, 217, 217, 1)",
                }}
              >
                <img
                  src={data.coverphoto}
                  alt=""
                  className="w-[150px] h-[150px] object-cover rounded-lg"
                />

                <h3 className="font-semibold text-[18px] leading-6 mt-[12px] ">
                  {data.title}
                </h3>
                <p className="font-[400px] text-[13px] leading-4 text-[#8A8A8A] mt-1 ">
                  {data.date}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
};

export default UsersImage;

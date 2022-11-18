import React, { useState } from "react";
import SideNav from "../../componets/SideNav";
import bum from "../../assets/HBD to bunmi 20190716_003414.jpg";
import { GoPrimitiveDot } from "react-icons/go";
import { BiUpload } from "react-icons/bi";

const Profile = () => {
  const [file, setFile] = useState("");

  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const uploadFile = () => {
    document.getElementById("selectFile").click();
  };

  return (
    <main className="max-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pb-[180px]">
      <SideNav title="My Profile" />

      <section
        className="mx-[42px] mt-[38px] pt-[46px] rounded-[8px]"
        style={{ background: "rgba(255, 255, 255, 1)" }}
      >
        <div className="">
          <div className="relative w-[150px] mx-auto">
            <img
              src={bum}
              alt=""
              className="w-[150px] h-[150px] rounded-[50%] object-cover relative mx-auto"
            />
            <GoPrimitiveDot
              size={32}
              className="text-[#3AC922] absolute bottom-0 right-2"
            />
          </div>
          <div className="">
            <input
              type="file"
              id="selectFile"
              name="image"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleChange}
            />

            <button
              onClick={uploadFile}
              className="flex py-[8px] px-[15px] border-[1px] border-[#1A1941] items-center gap-2 rounded-[8px] cursor-pointer mx-auto mt-[30px]"
            >
              <BiUpload size={9} />
              <p className="text-[12px] leading-[18px] font-normal">
                Upload image
              </p>
            </button>

            <p className="text-[12px] text-center text-[#5C5C5C] font-[300] mt-[8px]">
              Max size-5Mb.
            </p>
            <p className="text-[12px] text-center text-[#5C5C5C] font-[300]">
              Jpg, Png
            </p>
          </div>
        </div>

        {/* personal Information */}
        <div className="mt-[40px] ml-[62px] pb-[90px]">
          <h2 className="text-[20px] leading-[24px] font-semibold text-[#1A1941] ">
            Personal Information
          </h2>
          <form>
            <div className="flex gap-6 mt-[30px]">
              <div className="w-[40%]">
                <label
                  htmlFor=""
                  className="text-[16px] leading-[19.2px] font-normal text-[#333333] mb-[4px]"
                >
                  Full Name
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-[100%] h-[40px] rounded-[8px] pl-[20px] outline-none border-[1px] border-[#E5E5E5] bg-[#F9F9F9] text-[14px] leading-[16.8px] font-light text-[#999999]"
                />
              </div>

              <div className="w-[40%]">
                <label
                  htmlFor=""
                  className="text-[16px] leading-[19.2px] font-normal text-[#333333] mb-[4px]"
                >
                  Email
                </label>
                <br />
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-[100%] h-[40px] rounded-[8px] pl-[20px] outline-none border-[1px] border-[#E5E5E5] bg-[#F9F9F9] text-[14px] leading-[16.8px] font-light text-[#999999]"
                />
              </div>
            </div>
            <div className="mt-[24px] w-[40%]">
              <label
                htmlFor=""
                className="text-[16px] leading-[19.2px] font-normal text-[#333333] mb-[4px]"
              >
                Phone Number
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter phone number"
                className="w-[100%] h-[40px] rounded-[8px] pl-[20px] outline-none border-[1px] border-[#E5E5E5] bg-[#F9F9F9] text-[14px] leading-[16.8px] font-light text-[#999999]"
              />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Profile;

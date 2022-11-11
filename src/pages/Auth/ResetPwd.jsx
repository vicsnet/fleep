import React, { useState } from "react";
import Logo from "../../assets/Frame 427319276.png";
import mainLogo from "../../assets/LOGO.png";
import { FaRegEyeSlash } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { Link } from "react-router-dom";
const ResetPwd = () => {
  const [pwdText, setPwdText] = useState("password");
  const [verifyPwdText, setVerifyPwdText] = useState("password");

  const [eye, setEye] = useState(false);
  const [eyeVerify, setEyeVerify] = useState(false);

  const onEye = () => {
    setEye(!eye);
  };
  const onEye2 = () => {
    setEyeVerify(!eyeVerify);
  };

  const changeText = () => {
    setPwdText("text");
  };
  const changeText2 = () => {
    setPwdText("password");
  };

  const showVerifyPwd = () => {
    setVerifyPwdText("text");
  };
  const showVerifyPwd2 = () => {
    setVerifyPwdText("password");
  };

  return (
    <main className="">
      <section className="flex h-screen">
        <div className="bg-[#19192E] max-h-screen w-[50%] flex items-center justify-center ">
          <img
            src={Logo}
            alt=""
            className="flex items-center justify-center mt-[10%] w-[250px]"
          />
        </div>
        <div
          className="w-[50%]  rounded-[20px] ml-[-20px] max-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
          style={{ background: "rgba(255, 255, 255, 1)" }}
        >
          <div className="w-[80%] mx-auto pt-[60px] pb-[117px]">
            <Link to="">
              <div className="flex cursor-pointer">
                <MdOutlineKeyboardArrowLeft className="opacity-[50%] text-[#000000]" />
                <p className="text-[14px] font-light leading-[16.8px] text-[#201E1E] opacity-[45%]">
                  Back
                </p>
              </div>
            </Link>
            <img
              src={mainLogo}
              alt="fleep logo"
              className="w-[126px] mt-[23px]"
            />
            <div className="mt-[56px]">
              <h2 className=" text-[32px] font-bold leading-[36.48px] text-[#1A1941] capitalize ">
                Reset Passoword
              </h2>
              <p className="text-[18px] font-light leading-[21.6px] text-[#666666] mt-[30px] w-[90%]">
                Please entera new password.
              </p>
            </div>
            <form className="mt-[35px]">
              <div className="mt-[24px]">
                <label
                  htmlFor=""
                  className="text-[16px] leading-[19.2px] font-normal text-[#333333] "
                >
                  New Password
                </label>
                <br />
                <div
                  className="flex w-[90%] rounded-[8px] items-center"
                  style={{
                    border: "1px solid rgba(229, 229, 229, 1)",
                    background: "linearGradient(0deg, #E5E5E5, #E5E5E5)",
                  }}
                >
                  <input
                    type={pwdText}
                    placeholder="Enter password"
                    className="h-[40px]  w-[95%] outline-none  pl-[20px] text-[14px] leading-[16.8px] font-light text-[#999999]"
                  />
                  <div className="" onClick={onEye}>
                    {!eye ? (
                      <AiOutlineEye
                        onClick={changeText}
                        className="text-[#7C7B7B]"
                      />
                    ) : (
                      <FaRegEyeSlash
                        onClick={changeText2}
                        className="text-[#7C7B7B]"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-[24px]">
                <label
                  htmlFor=""
                  className="text-[16px] leading-[19.2px] font-normal text-[#333333] "
                >
                  Verify New Password
                </label>
                <br />
                <div
                  className="flex w-[90%] rounded-[8px] items-center"
                  style={{
                    border: "1px solid rgba(229, 229, 229, 1)",
                    background: "linearGradient(0deg, #E5E5E5, #E5E5E5)",
                  }}
                >
                  <input
                    type={verifyPwdText}
                    placeholder="Re-type password"
                    className="h-[40px]  w-[95%] outline-none  pl-[20px] text-[14px] leading-[16.8px] font-light text-[#999999]"
                  />
                  <div className="" onClick={onEye2}>
                    {!eyeVerify ? (
                      <AiOutlineEye
                        onClick={showVerifyPwd}
                        className="text-[#7C7B7B]"
                      />
                    ) : (
                      <FaRegEyeSlash
                        onClick={showVerifyPwd2}
                        className="text-[#7C7B7B]"
                      />
                    )}
                  </div>
                </div>
              </div>
              <button className="font-bold text-[16px] text-ceneter w-[90%] leading-[19.2px]  py-[17.5px] bg-[#19192E] rounded-[8px] text-[#FFFFFF] mt-[40px]">
                Continue
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResetPwd;

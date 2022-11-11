import React, { useState } from "react";
import Logo from "../../assets/Frame 427319276.png";
import mainLogo from "../../assets/LOGO.png";
import { FaRegEyeSlash } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";

import { Link } from "react-router-dom";
const Registration = () => {
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
}
const showVerifyPwd2 = () => {    
    setVerifyPwdText("password");
    }

  return (
    <main className="">
      <section className="flex ">
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
          <div className="w-[80%] mx-auto pt-[60px] pb-[117px] ">
            <img src={mainLogo} alt="fleep logo" className="w-[126px]" />
            <div>
              <p className="mt-[56px] text-[14px] leading-[20%] tracking-[-1%] font-normal text-[#19192E] ">
                Get Started!
              </p>
              <h2 className="mt-[4px] text-[32px] font-bold leading-[36.48px] text-[#1A1941] capitalize ">
                Create an account
              </h2>
            </div>
            <form className="mt-[35px]">
              <div className="">
                <label
                  htmlFor=""
                  className="text-[16px] leading-[19.2px] font-normal text-[#333333] "
                >
                  Full Name
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="h-[40px] w-[90%] outline-none rounded-[8px] pl-[20px] text-[14px] leading-[16.8px] font-light text-[#999999]"
                  style={{
                    border: "1px solid rgba(229, 229, 229, 1)",
                    background: "linearGradient(0deg, #E5E5E5, #E5E5E5)",
                  }}
                />
              </div>
              <div className="mt-[24px]">
                <label
                  htmlFor=""
                  className="text-[16px] leading-[19.2px] font-normal text-[#333333] "
                >
                  Email
                </label>
                <br />
                <input
                  type="email"
                  placeholder="Enter email"
                  className="h-[40px] w-[90%] outline-none rounded-[8px] pl-[20px] text-[14px] leading-[16.8px] font-light text-[#999999]"
                  style={{
                    border: "1px solid rgba(229, 229, 229, 1)",
                    background: "linearGradient(0deg, #E5E5E5, #E5E5E5)",
                  }}
                />
              </div>
              <div className="mt-[24px]">
                <label
                  htmlFor=""
                  className="text-[16px] leading-[19.2px] font-normal text-[#333333] "
                >
                  Phone Number
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="h-[40px] w-[90%] outline-none rounded-[8px] pl-[20px] text-[14px] leading-[16.8px] font-light text-[#999999]"
                  style={{
                    border: "1px solid rgba(229, 229, 229, 1)",
                    background: "linearGradient(0deg, #E5E5E5, #E5E5E5)",
                  }}
                />
              </div>
              <div className="mt-[24px]">
                <label
                  htmlFor=""
                  className="text-[16px] leading-[19.2px] font-normal text-[#333333] "
                >
                  Password
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
                  Verify Password
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
              <button className="font-bold text-[16px] text-ceneter w-[90%] leading-[19.2px]  py-[17.5px] bg-[#EE2339] rounded-[8px] text-[#FFFFFF] mt-[40px]">
                Sign Up
              </button>
            </form>
            <div className="mt-[20px] flex gap-1  justify-center ">
              <p className="text-[14px] leading-[16.8px] text-[#8A8A8A] font-normal">
                Already have an account?
              </p>
              <Link to="/login">
                <p
                  className="text-[14px] leading-[16.8px] font-semibold text-[#000000
]"
                >
                  Log In
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Registration;

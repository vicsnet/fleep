import React, { useState } from "react";
import Logo from "../../assets/Frame 427319276.png";
import mainLogo from "../../assets/LOGO.png";
import { FaRegEyeSlash } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";

import { Link } from "react-router-dom";


const Login = () => {
  const [pwdText, setPwdText] = useState("password");


  const [eye, setEye] = useState(false);
  

  const onEye = () => {
    setEye(!eye);
  };
 

  const changeText = () => {
    setPwdText("text");
  };
  const changeText2 = () => {
    setPwdText("password");
  };

 

  return (
    <main className="h-full">
      <section className="flex h-full">
        <div className="bg-[#19192E] max-h-full w-[50%] flex items-center justify-center ">
          <img
            src={Logo}
            alt=""
            className="flex items-center justify-center mt-[10%] w-[250px]"
          />
        </div>
        <div
          className="w-[50%]  rounded-[20px] ml-[-20px] "
          style={{ background: "rgba(255, 255, 255, 1)" }}
        >
          <div className="w-[80%] mx-auto pt-[60px] pb-[117px]">
            <img src={mainLogo} alt="fleep logo" className="w-[126px]" />
            <div>
              <h2 className="mt-[58px] text-[32px] font-bold leading-[36.48px] text-[#1A1941] capitalize ">
                Welcome back
              </h2>
            </div>
            <form className="mt-[35px]">
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

              <button className="font-bold text-[16px] text-ceneter w-[90%] leading-[19.2px]  py-[17.5px] bg-[#000000] rounded-[8px] text-[#FFFFFF] mt-[40px]">
                Log In
              </button>
            </form>

            <div className="mt-[20px] flex gap-1  justify-center ">
              <Link to="">
                <p className="text-[14px] leading-[16.8px] text-[#000000] font-normal">
                  Forgot password ?
                </p>
              </Link>
            </div>
            <div className="mt-[200px] flex gap-1  justify-center ">
              <p className="text-[14px] leading-[16.8px] text-[#8A8A8A] font-normal">
                Dont have an account?
              </p>
              <Link to="">
                <p
                  className="text-[14px] leading-[16.8px] font-semibold text-[#000000
]"
                >
                  Register
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;

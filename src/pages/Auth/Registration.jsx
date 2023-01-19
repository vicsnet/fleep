import React, { useState, useEffect } from "react";
import Logo from "../../assets/Frame 427319276.png";
import mainLogo from "../../assets/LOGO.png";
import { FaRegEyeSlash } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";

import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
  signUpUser,
  reset,
} from "../../Redux/features/authentication/registrationSlice";

import SuccessModal from "./SuccessModal";

import Spinner from "../../componets/Spinner";

const Registration = () => {
  const { email: emailParam, id } = useParams();
  // console.log(id, emailParam);

  let modalVisible = false;

  if (emailParam !== undefined && id !== undefined) {
    modalVisible = true
  }

  const navigate = useNavigate()

  const [person, setPerson] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
    password: "",
    pasword2: "",
  });

  const handleDetailsChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

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

  const { fullName, email, phoneNo, password, password2 } = person;

  const dispatch = useDispatch();

  const { user, loading, error, message, success, status } = useSelector(
    (state) => state.user
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName)
      if (password !== password2) {
        toast.error("passwords do not match");
      } else {
        // console.log(person.fullName, person.email, person.phoneNo, person.password);
        const person = {
          full_name: fullName,
          email: email,
          phone: phoneNo,
          password: password,
        };
        dispatch(signUpUser(person));
      }
  };

  useEffect(() => {
    if (error) {
      toast.error(message);
    }
    if (success) {
      toast.success(message);
    }
    if (modalVisible) {
      navigate("/login");
    }

    dispatch(reset());
  }, [user, error, success, message, dispatch, status]);

  if (loading) {
    return <Spinner />;
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
                  id="fullName"
                  name="fullName"
                  value={person.fullName}
                  onChange={handleDetailsChange}
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
                  id="email"
                  name="email"
                  value={person.email}
                  onChange={handleDetailsChange}
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
                  name="phoneNo"
                  value={person.phoneNo}
                  onChange={handleDetailsChange}
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
                    name="password"
                    value={person.password}
                    onChange={handleDetailsChange}
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
                    name="password2"
                    value={person.password2}
                    onChange={handleDetailsChange}
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
              <button
                onClick={handleSubmit}
                className="font-bold text-[16px] text-ceneter w-[90%] leading-[19.2px]  py-[17.5px] bg-[#EE2339] rounded-[8px] text-[#FFFFFF] mt-[40px]"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-[20px] flex gap-1  justify-center ">
              <p className="text-[14px] leading-[16.8px] text-[#8A8A8A] font-normal">
                Already have an account?
              </p>
              <Link to="/login">
                <p className="text-[14px] leading-[16.8px] font-semibold text-[#000000]">
                  Log In
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {status === true && <SuccessModal />}
    </main>
  );
};

export default Registration;

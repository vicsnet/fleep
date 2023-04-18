import React, { useEffect, useState } from "react";
import Logo from "../../assets/Frame 427319276.png";
import mainLogo from "../../assets/LOGO.png";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ResetVerification from "./ResetVerification";
import useForgotPassword from "./hooks/useForgotPassword";
import { toast } from "react-toastify";
import { baseURL } from "../../Redux/Api/api";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import Loading from "../../componets/Loading";

const ForgotPwd = () => {
  const back = useNavigate()

  const {search} = useLocation();
  const params = new URLSearchParams(search)
  const Semail = params.get('email');

  const error = params.get("error")


  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const {mutate, isLoading, isSuccess, isError, error:fgError} = useForgotPassword();
  
  const config = {
    headers: {
      "Content-Type": "application/json",
  
    },
  };

  const {mutate: resend,  isSuccess: resendSuccess, isError:resendIsError, error: resendError, isLoading:resendLoading} = useMutation({
    mutationFn:(data)=>{
      return axios.post(`${baseURL}/user/resend_otp/forget_pw`,data, config)
    }
  })


  const handleSubmit = (e) =>{
    e.preventDefault()
  mutate({email:email})
  }
  useEffect(()=>{
    if(isSuccess){
setSuccess(true)
    }
    if(isError){
      toast.error(fgError?.response?.data?.message)
    }
    if(error){
      setSuccess(true)
    }
    if(resendSuccess){
      toast.success("Verification Link has been resent")
    }
    if(resendIsError){
      toast.error(resendError?.response?.data?.message)
    }
  }, [isSuccess, isError, fgError, resendIsError, resendError, error, resendSuccess])



  return (
    <main className="h-full ">
       {isLoading && <div className="mx-auto absolute flex justify-center left-[40%] top-[30%] smDesk:left-[30%] mobile:left-[8%]">

<Loading />
 </div>}
      <section className="flex h-full w-[100%] overflow-y-hidden">
        <div className="bg-[#19192E] h-screen w-[50%] flex items-center justify-center ">
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
            <Link to="">
              <div  onClick={() => back(-1)} className="flex cursor-pointer">
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
            <div>
              <h2 className="mt-[58px] text-[32px] font-bold leading-[36.48px] text-[#1A1941] capitalize ">
                Forgot your password ?
              </h2>
              <p className="text-[18px] font-light leading-[21.6px] text-[#666666] mt-[30px] w-[90%]">
                Please enter your email address & we will send you a verfication
                code.
              </p>
            </div>
            <form className="mt-[30px]">
              <div className="">
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
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="h-[40px] w-[90%] outline-none rounded-[8px] pl-[20px] text-[14px] leading-[16.8px] font-light text-[#999999]"
                  style={{
                    border: "1px solid rgba(229, 229, 229, 1)",
                    background: "linearGradient(0deg, #E5E5E5, #E5E5E5)",
                  }}
                />
              </div>

              <button onClick={handleSubmit} className="font-bold text-[16px] text-ceneter w-[90%] leading-[19.2px]  py-[17.5px] bg-[#19192E] rounded-[8px] text-[#FFFFFF] mt-[40px]">
                Continue
              </button>
            </form>
          </div>
        </div>
      </section>

{
  success &&
      <ResetVerification mutate={resend} email={Semail} loading={resendLoading} />
}
    </main>
  );
};

export default ForgotPwd;

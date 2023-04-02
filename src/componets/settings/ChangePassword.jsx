import React, { useEffect, useState } from 'react'
import useChangePass from './hooks/useChangePass'
import { toast } from 'react-toastify'
import ClipLoader from 'react-spinners/ClipLoader'

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [reEnterNewPassword, setreEnterNewPassword] = useState("")

    const {mutate,  isLoading, isError, error,isSuccess } = useChangePass();

   

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(newPassword !== reEnterNewPassword){
            toast.error("New password and verify New password does not match")
        }
        const pass ={
            old_password: oldPassword,
            new_password: newPassword
        }
        mutate(pass)
    }

     useEffect(()=>{
        if(isError){
            toast.error(error.response.data.message);

        }
        if(isSuccess){
            toast.success("Password Changed Succesfully")
        }
    },[isError, isSuccess, error])
  return (
    <form className="w-[80%] mx-auto">
    <label
      htmlFor=""
      className="text-[16px] leading-[19.2px] font-normal text-[#333333] mb-[4px]"
    >
      Enter Old Password
    </label>
    <br />
    <input
      type="password"
      value={oldPassword}
      onChange={(e) => setOldPassword(e.target.value)}
      placeholder="Enter old password"
      className="w-[100%] h-[40px] rounded-[8px] pl-[20px] outline-none border-[1px] border-[#E5E5E5] bg-[#F9F9F9] text-[14px] leading-[16.8px] font-light text-[#999999]"
    />{" "}
    <br />
    <br />
    <label
      htmlFor=""
      className="text-[16px] leading-[19.2px] font-normal text-[#333333] mb-[4px]"
    >
      Enter New Password
    </label>
    <br />
    <input
      type="password"
      value={newPassword}
      onChange={(e) => setNewPassword(e.target.value)}
      placeholder="Enter New Password"
      className="w-[100%] h-[40px] rounded-[8px] pl-[20px] outline-none border-[1px] border-[#E5E5E5] bg-[#F9F9F9] text-[14px] leading-[16.8px] font-light text-[#999999]"
    />
    <br />
    <br />
    <label
      htmlFor=""
      className="text-[16px] leading-[19.2px] font-normal text-[#333333] mb-[4px]"
    >
      Verify New Password
    </label>
    <br />
    <input
      type="password"
      value={reEnterNewPassword}
      onChange={(e) => setreEnterNewPassword(e.target.value)}
      placeholder="Re-type new password"
      className="w-[100%] h-[40px] rounded-[8px] pl-[20px] outline-none border-[1px] border-[#E5E5E5] bg-[#F9F9F9] text-[14px] leading-[16.8px] font-light text-[#999999]"
    />
    <br />
    <br />
    <br />
    <button onClick={handleSubmit} className="text-[16px] leading-[19.2px] tracking-[10%] font-bold w-[40%] text-center py-[17px] bg-[#1A1941] text-[#FFFFFF] rounded-[8px]">
    {isLoading ? <ClipLoader color="#FFFFFF" size={20} />:
      "Save Changes"
  }
    </button>
  </form>
  )
}

export default ChangePassword
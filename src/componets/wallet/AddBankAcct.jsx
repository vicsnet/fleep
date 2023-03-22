/** @format */

import React, { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { closeAddAcct } from "../../Redux/features/wallet/AddAcctSlice";
import { useDispatch, useSelector } from "react-redux";
import useCreateAcct from "./hooks/useCreateAcct";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const AddBankAcct = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.AddAcc.open);
  const [bankName, setBankName] = useState("");
  const [acctNumber, setAcctNumber] = useState("");
  const [acctName, setAcctName] = useState("");

  const { mutate, isSuccess, isError, error, isLoading } = useCreateAcct();

  const handleSubmit = (e) => {
    e.preventDefault();

    const Acct = {
      bank_name: bankName,
      account_number: acctNumber,
      account_name: acctName,
    };
    if (acctNumber.length < 10 || acctNumber.length > 10) {
      toast.error("Account Number must be equal to 10 digit");
      return;
    } else if (acctName === "" || bankName === "") {
      toast.error("All Fields Required");
      return;
    }
    mutate(Acct);

    console.log(error?.response);
    // console.log(data?.response);
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.response?.data?.message);
    }
    if (isSuccess) {
      setAcctName("");
      setAcctName("");
      setBankName("");
      toast.success("bank created successfull");
    }
  }, [isError, isSuccess]);

  if (open) return null;
  return (
    <main
      className="fixed top-0 max-h-screen h-screen w-[100%] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
      style={{ background: "rgba(20, 24, 31, 0.25)" }}
    >
      <section
        className="w-[40%] smDesktop:w-[50%] smDesk:w-[60%] mx-auto rounded-lg mt-[100px] mb-[100px]"
        style={{ background: "rgba(255, 255, 255, 1)" }}
      >
        <section className="w-[90%] mx-auto pb-[78px]">
          <div className="flex justify-end pt-[32px]">
            <IoIosCloseCircleOutline
              onClick={() => dispatch(closeAddAcct())}
              size={24}
              className="text-[#7C7B7B] cursor-pointer"
            />
          </div>
          <div className="w-[80%] mx-auto">
            <div className="">
              <h2 className="text-[24px] font-bold leading-[28.8px] text-[#1A1941]">
                Add bank account
              </h2>
              <p className="text-[14px] font-[400] leading-[16.8px] text-[#959595] mt-[14px] ">
                Fill the form to add your bank account
              </p>
            </div>

            <form>
              <div className="mt-[24px]">
                <label className="font-[400] text-[16px] leading-5 text-[#333333] ">
                  Account Number
                </label>{" "}
                <br />
                <input
                  type="number"
                  placeholder="Account number"
                  className="text-[14px] text-[#999999] leading-4  font-light h-[50px] pl-[20px] border-[1px] border-[#E5E5E5] bg-[#F9F9F9] rounded-lg outline-[#E5E5E5] w-[100%]"
                  value={acctNumber}
                  onChange={(e) => setAcctNumber(e.target.value)}
                />
              </div>
              <div className="mt-[24px]">
                <label className="font-[400] text-[16px] leading-5 text-[#333333] ">
                  Account Name
                </label>{" "}
                <br />
                <input
                  type="text"
                  placeholder="Account name"
                  className="text-[14px] text-[#999999] leading-4  font-light h-[50px] pl-[20px] border-[1px] border-[#E5E5E5] bg-[#F9F9F9] rounded-lg outline-[#E5E5E5] w-[100%]"
                  value={acctName}
                  onChange={(e) => setAcctName(e.target.value)}
                />
              </div>
              <div className="mt-[24px]">
                <label className="font-[400] text-[16px] leading-5 text-[#333333] ">
                  Bank Name
                </label>{" "}
                <br />
                <input
                  type="text"
                  placeholder="Bank name"
                  className="text-[14px] text-[#999999] leading-4  font-light h-[50px] pl-[20px] border-[1px] border-[#E5E5E5] bg-[#F9F9F9] rounded-lg outline-[#E5E5E5] w-[100%]"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                />
              </div>

              <div
                onClick={() => dispatch(closeAddAcct())}
                className="mt-[40px] flex justify-between w-[90%]"
              >
                <button className="font-bold text-[16px] leading-[19.2px tracking-[10%] border-[1px] border-[#1A1941] text-[#1A1941] h-[49px] w-[45%] rounded-lg">
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="font-bold text-[16px] leading-[19.2px tracking-[10%] border-[1px] bg-[#1A1941] text-[#FFFFFF] h-[49px] w-[45%]  rounded-lg"
                >
                  {isLoading ? <ClipLoader color="#FFFFFF" /> : " Add Account"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </main>
  );
};

export default AddBankAcct;

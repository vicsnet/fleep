import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { closeWithdrawToBank } from "../../Redux/features/wallet/walletSlice";

const WithDrawToBank = () => {
  const open = useSelector((state) => state.wallet.open);
  const dispatch = useDispatch()

  const [openAcct, setOpenAcct] = useState(false);
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
              onClick={() => dispatch(closeWithdrawToBank())}
              size={24}
              className="text-[#7C7B7B] cursor-pointer"
            />
          </div>
          <div className="w-[80%] mx-auto">

          <div className="">
            <h2 className="text-[24px] font-bold leading-[28.8px] text-[#1A1941]">
              Withhdraw to bank
            </h2>
            <p className="text-[14px] font-[400] leading-[16.8px] text-[#959595] mt-[14px] ">
              Fill the form to withdraw to your account
            </p>
          </div>

          <form>
            <div className="mt-[40px]">
              <label className="font-[400] text-[16px] leading-5 text-[#333333] ">
                Amount
              </label>{" "}
              <br />
              <input
                type="text"
                placeholder="Enter amount to withdraw"
                className="text-[14px] text-[#999999] leading-4  font-light h-[50px] pl-[20px] border-[1px] border-[#E5E5E5] bg-[#F9F9F9] rounded-lg outline-[#E5E5E5] w-[100%]"
              />
            </div>

            <div className="mt-[24px]">
              <label className="font-[400] text-[16px] leading-5 text-[#333333] ">
                Saved Account
              </label>{" "}
              <br />
              <div
                onClick={() => setOpenAcct(!openAcct)}
                className="flex items-center justify-between w-[100%] border-[1px] border-[#E5E5E5] px-[20px] h-[50px] rounded-lg bg-[#F9F9F9] "
              >
                <p className="text-[14px] leading-[20.58px] ">Select</p>
                <BiChevronDown className="text-[#C6C6C6] text-[20px]" />
              </div>
              <div className="">

              <ul
                className={`w-[154px] flex flex-col justify-center  rounded-[4px] mt-[-4px] z-[1] cursor-pointer bg-[#FFFFFF] ${
                  openAcct ? "max-h-[166px] absolute" : "max-h-0 hidden"
                }`}
                style={{
                  boxShadow: "0px 0px 10px 0px rgba(132, 132, 132, 0.15)",
                }}
              >
                <li className="font-[400] text-[16px] leading-[20px] mt-[8px] with h-[48px] pt-[4px]">
                  <p className="text-[#181818] pl-[34.5px]">Zenith Bank</p>
                  <p className="text-[#8B8B8B] text-[13px] font-[300] pl-[39px]">
                    1234567890
                  </p>
                </li>
                <li className="font-[400] text-[16px] leading-[20px] mt-[8px] with h-[48px] pt-[4px]">
                  <p className="text-[#181818] pl-[34.5px]">Zenith Bank</p>
                  <p className="text-[#8B8B8B] text-[13px] font-[300] pl-[39px]">
                    1234567890
                  </p>
                </li>

                {/* new Account */}
                <li className="font-[400] text-[16px] leading-[20px] mt-[8px] with h-[48px] pt-[4px] flex items-center gap-[5.86px] pl-[20px]">
                  <FiPlus className="" />
                  <p className="text-[#181818]">New Account</p>
                </li>
              </ul>
              </div>
            </div>
            <div className="mt-[24px]">
              <label className="font-[400] text-[16px] leading-5 text-[#333333] ">
                Account Number
              </label>{" "}
              <br />
              <input
                type="text"
                placeholder="Account number"
                className="text-[14px] text-[#999999] leading-4  font-light h-[50px] pl-[20px] border-[1px] border-[#E5E5E5] bg-[#F9F9F9] rounded-lg outline-[#E5E5E5] w-[100%]"
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
              />
            </div>
            <div className="mt-[40px] flex justify-between w-[90%]">
              <button className="font-bold text-[16px] leading-[19.2px tracking-[10%] border-[1px] border-[#1A1941] text-[#1A1941] h-[49px] w-[45%] rounded-lg">
                Cancel
              </button>
              <button className="font-bold text-[16px] leading-[19.2px tracking-[10%] border-[1px] bg-[#1A1941] text-[#FFFFFF] h-[49px] w-[45%]  rounded-lg">
                Withdraw
              </button>
            </div>
          </form>
          </div>
        </section>
      </section>
    </main>
  );
};

export default WithDrawToBank;

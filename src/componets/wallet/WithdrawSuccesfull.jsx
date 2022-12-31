import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import success from "../../assets/Vector (20).png";
// import { useDispatch, useSelector } from "react-redux";
// import { closeWithdrawToBank } from "../../Redux/features/wallet/walletSlice";

const WithDrawSuccesfull = () => {
//   const open = useSelector((state) => state.wallet.open);
//   const dispatch = useDispatch();

  const [openAcct, setOpenAcct] = useState(false);
//   if (open) return null;
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
              //   onClick={() => dispatch(closeWithdrawToBank())}
              size={24}
              className="text-[#7C7B7B] cursor-pointer"
            />
          </div>
          <div className="">
            <h2 className="text-[24px] font-bold leading-[28.8px] text-[#1A1941] text-center">
              Successful
            </h2>
            <img
              src={success}
              alt="transaction succesful"
              className="w-[80px] h-[80px] mx-auto mt-12"
            />
            <p className="w-[347px] mx-auto mt-12 text-[18px] font-[300] text-center leading-[26.1px] text-[#8B8B8B]">
              Withdrawal request placed successfully. Your account will be
              credited soon.
            </p>
          </div>

          <div className="mt-[40px] flex justify-center  ">
            <button className="font-bold text-[16px] leading-[19.2px tracking-[10%] border-[1px] bg-[#1A1941] text-[#FFFFFF] h-[49px] w-[60%]   rounded-lg">
              Close
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default WithDrawSuccesfull;

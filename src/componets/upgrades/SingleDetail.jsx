/** @format */

import React from "react";
import { Link } from "react-router-dom";
import usePurchasePlan from "./hooks/usePurchasePlan";

const SingleDetail = ({ id, title, description, amount, space }) => {
  const { data: purchaseData, refetch, isSuccess } = usePurchasePlan(id);



  const redirectToPaymentPage = () => {
    // refetch(id);
    if (purchaseData?.data) {
      window.location.assign(purchaseData?.data?.checkout_url);
      
    }
  };

  return (
    <div className="border-r-[1px] border-[#C6C6C6] pt-[47px] pb-[53px] w-[30%]">
      <div className="pb-[30.52px] w-[90%] mx-auto border-b-[1px] border-[#EAEAEA]">
        <p className="text-[20px] leading-[24px] font-normal text-[#8B8B8B] smDesk:text-[18px]">
          {title}
        </p>
        <p className="text-[40px] leading-[48px] font-extrabold text-[#1A1941] mt-[20px]">
          {amount}
        </p>
        <p className="text-[24px] text-[#8B8B8B] font-normal leading-[28.8px] mt-[10px] smDesk:text-[22px]">
          /{space} photo spaces
        </p>
      </div>
      <div className="w-[90%] mx-auto">
        <p className="mt-[20.52px] text-[16px] leading-[24px] text-[#8B8B8B] ">
          {description}
        </p>

        <Link
          onClick={(event) => {refetch(id);
            event.currentTarget.disabled = true;
        }} to={redirectToPaymentPage()} 
          
          className=" mt-[78px] text-[16px] font-bold leading-[19.2px] py-[17.5px] w-[80%] flex justify-center rounded-[8px] mx-auto text-center bg-[#1A1941] text-white cursor-pointer"
        >
          
          Buy
  
        </Link>
      </div>
    </div>
  );
};

export default SingleDetail;

import React from "react";
import UpgradeDetail from "./upgrades/UpgradeDetail";

const Price = () => {
  return (
    <main>
      <section className="mt-[100px]">
        <h3 className="text-[48px] font-extrabold text-center leading-[100px] text-[#19192E]">
          Our Pricing Plans
        </h3>
        <p className="capitalize text-[20px] text-center text-[#8B8B8B] font-normal">
          Buy more photospaces
        </p>
        <UpgradeDetail/>
       
      </section>
    </main>
  );
};

export default Price;

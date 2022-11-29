
import React from 'react'
import Footer from './Footer';
import { useNavigate, Link } from 'react-router-dom';
import bum from "../assets/HBD to bunmi 20190716_003414.jpg";
import { GoPrimitiveDot } from "react-icons/go";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import LOGO from "../assets/LOGO.png";

const Upgrade = () => {
  const back = useNavigate()
  return (
    <main>
      <section className="flex justify-between  pt-[20px]">
        <div className={``}>
          <div className=" pl-[40px] mb-[30px]">
            <Link to="/">
              <img
                src={LOGO}
                alt=""
                className="w-[126px] h-[41.93px] object-cover cursor-pointer"
              />
            </Link>
          </div>
          <div
            className={` flex cursor-pointer mt-[14px] pb-[8px] pl-[40px]`}
            onClick={() => back(-1)}
          >
            <MdOutlineKeyboardArrowLeft className="opacity-[50%] text-[#000000]" />
            <p className="text-[14px] font-light leading-[16.8px] text-[#201E1E] opacity-[45%]">
              Back
            </p>
          </div>
        </div>

        <Link to="/profile">
          <div className="flex items-center gap-[16px] pr-[42px]">
            <h2 className="text-[16px] font-bold leading-[19.2px]">
              Teejay Teko
            </h2>
            <div className="relative">
              <img
                src={bum}
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover relative"
              />
              <GoPrimitiveDot
                size={12}
                className="text-[#3AC922] absolute bottom-0 right-0"
              />
            </div>
          </div>
        </Link>
      </section>
      <section className="mt-[100px]">
        <h3 className="text-[48px] font-black text-center leading-[100px] text-[#19192E]">
          Our Pricing Plans
        </h3>
        <p className="capitalize text-[20px] text-center text-[#8B8B8B] font-normal">
          Buy more photospaces
        </p>
        <section className="w-[90%] mx-auto border-[1px] border-[#D9D9D9] flex mb-[84px] mt-[38px] rounded-[8px] ">
          <div className="border-r-[1px] border-[#C6C6C6] pt-[47px] pb-[53px]">
            <div className="pb-[30.52px] w-[90%] mx-auto border-b-[1px] border-[#EAEAEA]">
              <p className="text-[20px] leading-[24px] font-normal text-[#8B8B8B] smDesk:text-[18px]">
                More Space
              </p>
              <p className="text-[40px] leading-[48px] font-extrabold text-[#1A1941] mt-[20px]">
                N50,000
              </p>
              <p className="text-[24px] text-[#8B8B8B] font-normal leading-[28.8px] mt-[10px] smDesk:text-[22px]">
                /1000 photo spaces
              </p>
            </div>
            <div className="w-[90%] mx-auto">
              <p className="mt-[20.52px] text-[16px] leading-[24px] text-[#8B8B8B] ">
                You can’t go wrong with this plan, with that extra amount of
                space to accommodate your pictures, this is a great plan for
                you.
              </p>

              <button className=" mt-[78px] text-[16px] font-bold leading-[19.2px] py-[17.5px] w-[80%] flex justify-center rounded-[8px] mx-auto text-center bg-[#1A1941] text-white">
                Buy
              </button>
            </div>
          </div>
          <div className="border-r-[1px] border-[#C6C6C6] pt-[47px] pb-[53px]">
            <div className="pb-[30.52px] w-[90%] mx-auto border-b-[1px] border-[#EAEAEA]">
              <p className="text-[20px] leading-[24px] font-normal text-[#8B8B8B] smDesk:text-[18px]">
                Eliteplus
              </p>
              <p className="text-[40px] leading-[48px] font-extrabold text-[#1A1941] mt-[20px]">
                N100,000
              </p>
              <p className="text-[24px] text-[#8B8B8B] font-normal leading-[28.8px] mt-[10px] smDesk:text-[22px]">
                /4000 photo spaces
              </p>
            </div>
            <div className="w-[90%] mx-auto">
              <p className="mt-[20.52px] text-[16px] leading-[24px] text-[#8B8B8B] ">
                You can’t go wrong with this plan, with that extra amount of
                space to accommodate your pictures, this is a great plan for
                you.
              </p>

              <button className=" mt-[78px] text-[16px] font-bold leading-[19.2px] py-[17.5px] w-[80%] flex justify-center rounded-[8px] mx-auto text-center bg-[#1A1941] text-white">
                Buy
              </button>
            </div>
          </div>
          <div className=" pt-[47px] pb-[53px]">
            <div className="pb-[30.52px] w-[90%] mx-auto border-b-[1px] border-[#EAEAEA]">
              <p className="text-[20px] leading-[24px] font-normal text-[#8B8B8B] smDesk:text-[18px]">
                DoubleDelux
              </p>
              <p className="text-[40px] leading-[48px] font-extrabold text-[#1A1941] mt-[20px]">
                N165,000
              </p>
              <p className="text-[24px] text-[#8B8B8B] font-normal leading-[28.8px] mt-[10px] smDesk:text-[22px]">
                /Unlimited Uploads
              </p>
            </div>
            <div className="w-[90%] mx-auto">
              <p className="mt-[20.52px] text-[16px] leading-[24px] text-[#8B8B8B] ">
                You can’t go wrong with this plan, with that extra amount of
                space to accommodate your pictures, this is a great plan for
                you.
              </p>

              <button className=" mt-[78px] text-[16px] font-bold leading-[19.2px] py-[17.5px] w-[80%] flex justify-center rounded-[8px] mx-auto text-center bg-[#1A1941] text-white">
                Buy
              </button>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}

export default Upgrade
import React from "react";
import SideNav from "../../componets/SideNav";
import { BiSearch } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";

import { MdOutlinePermMedia } from "react-icons/md";

import { IoMdImages } from "react-icons/io";

import { IoImagesOutline } from "react-icons/io5";

const History = () => {
  return (
    <main className="max-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pb-[180px]">
      <SideNav title="History" />

      {/*  */}

      <div className=" mt-[50px] px-[42px] mb-[70px]">
        {/* total photos */}
        <div className="flex  gap-[30px] smDesktop:flex-wrap smDesktop:justify-center">
          <div className="bg-[#19192E] flex py-[37.24px] pl-[25.8px] gap-[23px] rounded-[10px] w-[30%] smDesktop:w-[40%] smDesk:w-[45%] tabletAir:w-[60%]">
            <div className="bg-[#FFFFFF] rounded-[13px] px-[12px] py-[14px]">
              <MdOutlinePermMedia
                size={24}
                className="text-[#1A1941] bg-[#FFFFFF]"
              />
            </div>

            <div className="text-[white]">
              <h3 className="text-[30px] font-bold leading-[36px] tracking-[2.14px] text-white ">
                150
              </h3>
              <p className="text-[#EEEEEE] opacity-[70%] text-[14px] font-[500] leading-[16.8px] pt-[4px] ">
                Total Photo spaces bought
              </p>
            </div>
          </div>

          {/*  */}

          <div
            className=" flex py-[37.24px] pl-[25.8px] gap-[23px] rounded-[10px] w-[30%] smDesktop:w-[40%] smDesk:w-[45%] tabletAir:w-[60%]"
            style={{ background: "rgba(255, 255, 255, 1)" }}
          >
            <div className="bg-[#19192E] rounded-[13px] px-[12px] py-[14px]">
              <IoMdImages size={24} className=" text-[#FFFFFF]" />
            </div>
            <div className="">
              <h3 className="text-[30px] font-bold leading-[36px] tracking-[2.14px] text-[#191D23] ">
                150
              </h3>
              <p className="text-[#8E99AB] opacity-[70%] text-[14px] font-[500] leading-[16.8px] pt-[4px] ">
                Photo spaces used
              </p>
            </div>
          </div>

          {/* photo spaces left */}
          <div
            className=" flex py-[37.24px] pl-[25.8px] gap-[23px] rounded-[10px] w-[30%] smDesktop:w-[40%] smDesk:w-[48%] tabletAir:w-[60%]"
            style={{ background: "rgba(255, 255, 255, 1)" }}
          >
            <div className="bg-[#19192E] rounded-[13px] px-[12px] py-[14px]">
              <IoImagesOutline size={24} className=" text-[#FFFFFF]" />
            </div>
            <div className="">
              <h3 className="text-[30px] font-bold leading-[36px] tracking-[2.14px] text-[#191D23] ">
                14
              </h3>
              <p className="text-[#8E99AB] opacity-[70%] text-[14px] font-[500] leading-[16.8px] pt-[4px] ">
                Photo spaces left
              </p>
            </div>
            <button className="text-[11px] font-semibold px-[10px] h-[20px] rounded border border-[#1A1941] text-[#1A1941] cursor-pointer mt-2">
              Upgrade
            </button>
          </div>
        </div>
      </div>

      {/* transaction */}
      <section className="flex justify-between px-[45px]  smDesk:flex-col smDesk:justify-center">
        <section className="w-[52%]  smDesk:w-[90%]">
          {/* search bar & filter */}
          <div className="flex items-center justify-between mt-[29px]">
            {/* search bar  */}
            <div className="bg-[#EFEFEF] flex items-center h-[49px] w-[45%] rounded-[8px]">
              <BiSearch size={16} className="text-[#8A8A8A] w-[10%] pl-[8px]" />
              <input
                type="text"
                placeholder="Search"
                className="w-[90%] h-[100%] text-[14px] pl-[8px] font-normal text-[#8A8A8A] outline-none bg-[#EFEFEF] rounded-[8px]"
              />
            </div>

            {/* filter */}
            <div className="flex items-center gap-[17px]">
              <BsFilter size={16} className="text-[#201E1E] pl-[10px]" />
              <select
                name="cars"
                id="cars"
                className="outline-none bg-transparent text-[#333333]"
              >
                <option value="volvo">Filter By</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>

          <section
            className="px-[14px] rounded-[8px]  mt-[17px] pb-[30px]"
            style={{ background: "rgba(255, 255, 255, 1)" }}
          >
            <h2 className="text-[#1A1941] text-[20px] font-semibold leading-[24px] pt-[19px]">
              Transaction
            </h2>

            {/* <div className="flex flex-col justify-center">
          <p className="text-[20px] font-bold leading-[24px] text-[#8B8B8B] py-[97px] px-[169px]">
            No Transaction
          </p>
        </div> */}

            <table className="w-[98%] mx-auto mt-[21px] table-fixed">
              <thead className="text-left text-[16px] font-[500] leading-[19.2px] bg-[#FAFAFA] ">
                <tr className=" ">
                  <th className="pt-[12px] pb-[12px] pl-[17px] w-[23%]">
                    Date
                  </th>
                  <th className="pt-[12px] pb-[12px] w-[35%]">Description</th>
                  <th className="pt-[12px] pb-[12px] w-[25%]">Spaces Bought</th>
                  <th className="pt-[12px] pb-[12px] pr-[27px] w-[17%]">
                    Used
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto pl-[17px]">
                    24-09-2022
                  </td>
                  <td className="flex gap-[14px] mt-[11px] mb-[11px] items-center ">
                    <p className="text-[14px] leading-[16.8px] font-[300]">
                      Photo spaces bought
                    </p>
                  </td>

                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                    56
                  </td>
                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                    500
                  </td>
                </tr>
                <tr className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto pl-[17px]">
                    24-09-2022
                  </td>
                  <td className="flex gap-[14px] mt-[11px] mb-[11px] items-center ">
                    <p className="text-[14px] leading-[16.8px] font-[300]">
                      Photo spaces bought
                    </p>
                  </td>

                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                    56
                  </td>
                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                    500
                  </td>
                </tr>
                <tr className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto pl-[17px]">
                    24-09-2022
                  </td>
                  <td className="flex gap-[14px] mt-[11px] mb-[11px] items-center ">
                    <p className="text-[14px] leading-[16.8px] font-[300]">
                      Photo spaces bought
                    </p>
                  </td>

                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                    56
                  </td>
                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                    500
                  </td>
                </tr>
                <tr className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto pl-[17px]">
                    24-09-2022
                  </td>
                  <td className="flex gap-[14px] mt-[11px] mb-[11px] items-center ">
                    <p className="text-[14px] leading-[16.8px] font-[300]">
                      Photo spaces bought
                    </p>
                  </td>

                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                    56
                  </td>
                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                    500
                  </td>
                </tr>
                <tr className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto pl-[17px]">
                    24-09-2022
                  </td>
                  <td className="flex gap-[14px] mt-[11px] mb-[11px] items-center ">
                    <p className="text-[14px] leading-[16.8px] font-[300]">
                      Photo spaces bought
                    </p>
                  </td>

                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                    56
                  </td>
                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                    500
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>

        <section className="w-[45%] smDesk:w-[90%]">
          {/* search bar & filter */}
          <div className="flex items-center justify-between mt-[29px]">
            {/* search bar  */}
            <div className="bg-[#EFEFEF] flex items-center h-[49px] w-[50%] rounded-[8px]">
              <BiSearch size={16} className="text-[#8A8A8A] w-[10%] pl-[8px]" />
              <input
                type="text"
                placeholder="Search"
                className="w-[90%] h-[100%] text-[14px] pl-[8px] font-normal text-[#8A8A8A] outline-none bg-[#EFEFEF] rounded-[8px]"
              />
            </div>

            {/* filter */}
            <div className="flex items-center gap-[17px]">
              <BsFilter size={16} className="text-[#201E1E]" />
              <select
                name="cars"
                id="cars"
                className="outline-none bg-transparent text-[#333333]"
              >
                <option value="volvo">Filter By</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>

          <section
            className="px-[14px] rounded-[8px]  mt-[17px] pb-[30px]"
            style={{ background: "rgba(255, 255, 255, 1)" }}
          >
            <h2 className="text-[#1A1941] text-[20px] font-semibold leading-[24px] pt-[19px]">
              Usage
            </h2>

            <table className="w-[98%] mx-auto mt-[21px] table-fixed">
              <thead className="text-left text-[16px] font-[500] leading-[19.2px] bg-[#FAFAFA] ">
                <tr className=" ">
                  <th className="pt-[12px] pb-[12px] pl-[17px] w-[35%]">
                    Description
                  </th>
                  <th className="pt-[12px] pb-[12px] w-[30%]">Date Used</th>
                  <th className="pt-[12px] pb-[12px] w-[25%]">Spaces Used</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
                  <td className="flex gap-[14px] mt-[11px] mb-[11px] items-center pl-[17px]">
                    <p className="text-[14px] leading-[16.8px] font-[300]">
                      Photo spaces bought
                    </p>
                  </td>
                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                    24-09-2022
                  </td>

                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                    56
                  </td>
                </tr>
                <tr className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
                  <td className="flex gap-[14px] mt-[11px] mb-[11px] items-center pl-[17px]">
                    <p className="text-[14px] leading-[16.8px] font-[300]">
                      Photo spaces bought
                    </p>
                  </td>
                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                    24-09-2022
                  </td>

                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                    56
                  </td>
                </tr>
                <tr className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
                  <td className="flex gap-[14px] mt-[11px] mb-[11px] items-center pl-[17px]">
                    <p className="text-[14px] leading-[16.8px] font-[300]">
                      Photo spaces bought
                    </p>
                  </td>
                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                    24-09-2022
                  </td>

                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                    56
                  </td>
                </tr>
                <tr className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
                  <td className="flex gap-[14px] mt-[11px] mb-[11px] items-center pl-[17px]">
                    <p className="text-[14px] leading-[16.8px] font-[300]">
                      Photo spaces bought
                    </p>
                  </td>
                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                    24-09-2022
                  </td>

                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                    56
                  </td>
                </tr>
                <tr className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
                  <td className="flex gap-[14px] mt-[11px] mb-[11px] items-center pl-[17px]">
                    <p className="text-[14px] leading-[16.8px] font-[300]">
                      Photo spaces bought
                    </p>
                  </td>
                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                    24-09-2022
                  </td>

                  <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                    56
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
      </section>
    </main>
  );
};

export default History;

import React from "react";
import SideNav from "../../componets/SideNav";
// import { BiSearch } from "react-icons/bi";
// import { BsFilter } from "react-icons/bs";

// import { MdOutlinePermMedia } from "react-icons/md";

// import { IoMdImages } from "react-icons/io";

// import { IoImagesOutline } from "react-icons/io5";
import Vector1 from "../../assets/SVG/Group2.svg";
import Vector2 from "../../assets/SVG/Group3.svg";
import Vector3 from "../../assets/SVG/Group4.svg";
import Transaction from "./History/Transaction";
import ProfileUseFetch from "../profile/hooks/profileUseFetch";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import DashboardError from "./Error/DashboardError";

const History = () => {
  const {data, isError, isLoading, error, refetch} = ProfileUseFetch();
  
  return (
    <main className="max-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pb-[180px]">
      <SideNav title="History" display={"flex"} />

      {/*  */}

      <div className=" mt-[50px] px-[42px] mb-[70px]">
      { isError ?
            <div className="mt-[100px] h-[200px]">
              <DashboardError error={error} refetch={refetch} />
            </div>
            :
        // {/* total photos */}
        <div className="flex  gap-[30px] smDesktop:flex-wrap smDesktop:justify-center">
          <div className="bg-[#19192E] flex py-[37.24px] pl-[25.8px] gap-[23px] rounded-[10px] w-[30%] smDesktop:w-[40%] smDesk:w-[45%] tabletAir:w-[60%]">
            <div className="bg-[#FFFFFF] rounded-[13px] px-[12px] py-[14px]">
             
              <img src={Vector1} alt="" className="w-[24px] h-[24px] mx-auto" />
            </div>

            <div className="text-[white]">
            {isLoading ? (
                      <p className="">
                        <Skeleton />
                      </p>
                    ) : (
              <h3 className="text-[30px] font-bold leading-[36px] tracking-[2.14px] text-white ">
                {data?.data?.storage_space}
              </h3>
                    )
                    }
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
            
              <img src={Vector2} alt="" className="w-[24px] h-[24px] mx-auto" />
            </div>
            <div className="">
            {isLoading ? (
                      <p className="">
                        <Skeleton />
                      </p>
                    ) : (
              <h3 className="text-[30px] font-bold leading-[36px] tracking-[2.14px] text-[#191D23] ">
                {data?.data?.eventsimagescount}
              </h3>
              )}
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
            
              <img src={Vector3} alt="" className="w-[24px] h-[24px] mx-auto" />
            </div>
            <div className="">
            {isLoading ? (
                      <p className="">
                        <Skeleton />
                      </p>
                    ) : (
              <h3 className="text-[30px] font-bold leading-[36px] tracking-[2.14px] text-[#191D23] ">
                {data?.data?.free_space}
              </h3>
                    )}
              <p className="text-[#8E99AB] opacity-[70%] text-[14px] font-[500] leading-[16.8px] pt-[4px] ">
                Photo spaces left
              </p>
            </div>
            <Link to="/upgrade" className="text-[11px] font-semibold px-[10px] h-[20px] rounded border border-[#1A1941] text-[#1A1941] cursor-pointer mt-2">
              Upgrade
            </Link>
          </div>
        </div>
}
      </div>

      {/* transaction */}
      <section className="flex justify-between px-[45px]  smDesk:flex-col smDesk:justify-center">
        {/* 52% */}
        <section className="w-[100%]  smDesk:w-[90%]">
          <Transaction/>
        </section>

        {/* <section className="w-[45%] smDesk:w-[90%]">
          search bar & filter
          <div className="flex items-center justify-between mt-[29px]">
            search bar 
            <div className="bg-[#EFEFEF] flex items-center h-[49px] w-[50%] rounded-[8px]">
              <BiSearch size={16} className="text-[#8A8A8A] w-[10%] pl-[8px]" />
              <input
                type="text"
                placeholder="Search"
                className="w-[90%] h-[100%] text-[14px] pl-[8px] font-normal text-[#8A8A8A] outline-none bg-[#EFEFEF] rounded-[8px]"
              />
            </div>

            filter
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
        </section> */}
      </section>
    </main>
  );
};

export default History;

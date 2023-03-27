import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import useFetchHistory from './hooks/useFetchHistory';

const Transaction = () => {
    const {data, isLoading, isError, error} = useFetchHistory();

    const [search, setSearch] = useState("");
    console.log(data);

    const searchEvent=()=>{

    }

  return (
    <div>
        {/* search bar & filter */}
        <div className="flex items-center justify-between mt-[29px]">
            {/* search bar  */}
            <div className="bg-[#EFEFEF] flex items-center h-[49px] w-[45%] rounded-[8px]">
              <BiSearch size={16} className="text-[#8A8A8A] w-[10%] pl-[8px]" />
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
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
              Transaction
            </h2>

            <div className="flex flex-col justify-center">
          <p className="text-[20px] font-bold leading-[24px] text-[#8B8B8B] py-[97px] px-[169px]">
            No Transaction
          </p>
        </div>

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

              {/* filter((value)=>{ if(search===""){
                        return value

                    }else if(value.)} ). */}
                {
                    data?.data?.map((data) =>(

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
                    ))
                }


                {/* <tr className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
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
                </tr> */}
              </tbody>
            </table>
          </section>
    </div>
  )
}

export default Transaction
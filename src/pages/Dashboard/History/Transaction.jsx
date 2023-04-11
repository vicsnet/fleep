import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import useFetchHistory from './hooks/useFetchHistory';
import formatDate from '../../../consts/helper';
import { FadeLoader } from 'react-spinners';
import DashboardError from '../Error/DashboardError';

const Transaction = () => {
    const {data, isLoading, isError, error, refetch} = useFetchHistory();
    
    // const changeDateFormat = data?.data?.map((obj)=>{
    //   return {...obj, date: new Date(obj.normal_date)}
    // })
console.log("trans",data);
    // const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

 

    // const searchEvent=()=>{

    // }

    function dataSort(a, b) {
      if (filter === "all") {
        return data;
      } else if (filter === "recent") {
        return new Date(b.normal_date) - new Date(a.normal_date);
      } else {
        return new Date(a.normal_date) - new Date(b.normal_date);
      }
    }

  return (
    <div className=''>
        {/* search bar & filter */}
        <div className="flex items-center justify-end mt-[29px]">
            {/* search bar  */}
            {/* <div className="bg-[#EFEFEF] flex items-center h-[49px] w-[45%] rounded-[8px]">
              <BiSearch size={16} className="text-[#8A8A8A] w-[10%] pl-[8px]" />
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                className="w-[90%] h-[100%] text-[14px] pl-[8px] font-normal text-[#8A8A8A] outline-none bg-[#EFEFEF] rounded-[8px]"
              />
            </div> */}

            {/* filter */}
            <div className="flex items-center gap-[17px]">
              <BsFilter size={16} className="text-[#201E1E]" />
              <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
                className="outline-none bg-transparent text-[#333333]"
              >
                <option value="all">All</option>
                <option value="recent">Recent</option>
                <option value="oldest">Oldest</option>
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
            {isError ? (
          <div className="mt-[100px]">
            <DashboardError error={error} refetch={refetch} />
          </div>
        ) : (
            <>
            {isLoading ?(
              <div className="flex justify-center mt-4">
                <FadeLoader color="#19192E" />
              </div>
            )
            :
            (
              <>
              
              {
                data?.data?.length === 0 ?
              
                          <div className="flex flex-col justify-center">
                        <p className="text-[20px] font-bold leading-[24px] text-[#8B8B8B] py-[97px] px-[169px]">
                          No Transaction
                        </p>
                      </div>
                      :
              
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
                                  data?.data?.sort((a,b) =>dataSort(a,b))?.map((data) =>(
              
                              <tr key={data.id} className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
                                <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto pl-[17px]">
                                  {data.normal_date}
                                </td>
                                <td className="flex gap-[14px] mt-[11px] mb-[11px] items-center ">
                                  <p className="text-[14px] leading-[16.8px] font-[300]">
                                    {data.description}
                                  </p>
                                </td>
              
                                <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                                {data.space_bought}
                                </td>
                                <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
                                  {data.used_space}
                                </td>
                              </tr>
                                  ))
                                }
                                </tbody>
                                </table>
              }
              </>
            )
            }
            </>
        )
          }

          </section>


    </div>
  )
}

export default Transaction
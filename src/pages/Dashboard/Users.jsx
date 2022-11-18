import React, { useEffect, useState } from "react";
import SideNav from "../../componets/SideNav";
import { BiSearch } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { AiOutlineLeftSquare, AiFillLeftSquare } from "react-icons/ai";
import { CgChevronLeftR } from "react-icons/cg";
import bum from "../../assets/HBD to bunmi 20190716_003414.jpg";
import ReactPaginate from "react-paginate";
// import usersCss from './users.css'

const url = "https://jsonplaceholder.typicode.com/albums";

const Users = () => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = user
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <tr
          key={user.id}
          className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]"
        >
          <td className="pl-[45px] smDesk:pl-[30px] tabletAir:pl-[20px] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
            {user.id}
          </td>
          <td className="flex gap-[14px] mt-[11px] items-center ">
            <img
              src={bum}
              alt=""
              className="w-[30px] h-[30px] object-cover mb-[14px]"
            />
            <p className="text-[14px] leading-[16.8px] font-[300]">
              Tejiri Tabor
            </p>
          </td>

          <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
            56
          </td>
          <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
            1961
          </td>
          <td className=" text-[24px] leading-[16.8px] font-[700] mt-[11px] py-auto text-[#7C7B7B]">
            ...
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(user.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <main className="max-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pb-[180px]">
      <SideNav title="Users" />

      <section className="px-[42px]">
        {/* search bar & filter */}
        <div className="flex items-center justify-between mt-[29px]">
          {/* search bar  */}
          <div className="bg-[#EFEFEF] flex items-center h-[49px] w-[30%] rounded-[8px]">
            <BiSearch size={16} className="text-[#8A8A8A] w-[10%]" />
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

        {/* users */}
        <table className="w-[100%]  mt-[21px] table-fixed">
          <thead className="text-left text-[16px] font-[500] leading-[19.2px] bg-[#EEEEEE] h-[70px]">
            <tr className=" pl-[57px]">
              <th className="pt-[12px] pb-[12px] w-[10%] pl-[45px] smDesk:pl-[30px] tabletAir:pl-[20px]">
                S/N
              </th>
              <th className="pt-[12px] pb-[12px] w-[35%]">User's Name</th>
              <th className="pt-[12px] pb-[12px] w-[15%]">Total Photos</th>
              <th className="pt-[12px] pb-[12px]">Total Events Attended</th>
              <th className="pt-[12px] pb-[12px] pr-[27px] w-[15%]">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayUsers}
            {/* {user.map((user) => (
              <tr key={user.id} className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]">
                <td className="w-[20%] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
                  1
                </td>
                <td className="flex gap-[14px] mt-[11px] items-center ">
                  <img
                    src={bum}
                    alt=""
                    className="w-[30px] h-[30px] object-cover mb-[14px]"
                  />
                  <p className="text-[14px leading-[16.8px] font-[300]">
                    Tejiri Tabor
                  </p>
                </td>

                <td className="w-[20%] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
                  56
                </td>
                <td className="w-[20%] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
                  1961
                </td>
                <td className="w-[20%] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
                  ...
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
        <ReactPaginate
          breakLabel="..."
          previousLabel="<"
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={
            "w-[94%] mx-auto flex justify-end mt-[43px]  paginationBttns"
          }
          pageLinkClassName={"p"}
          breakLinkClassName={"font-[700] text-[18px]"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled bg-black"}
          activeClassName={"paginationActive"}
          renderOnZeroPageCount={null}
        />
      </section>
    </main>
  );
};

export default Users;

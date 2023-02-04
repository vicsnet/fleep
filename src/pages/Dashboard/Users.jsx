import React, { useEffect, useState } from "react";
import SideNav from "../../componets/SideNav";
import { BiSearch } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineLeftSquare, AiFillLeftSquare } from "react-icons/ai";
import { CgChevronLeftR } from "react-icons/cg";
import bum from "../../assets/HBD to bunmi 20190716_003414.jpg";
import ReactPaginate from "react-paginate";
// import { useDispatch } from "react-redux";
// import { openUsersEvent } from "../../Redux/features/usersEventSlice";
import UsersDelete from "./User/UsersDelete";
import User from "./User/User";
import UsersDeleteOption from "./User/UsersDeleteOption";
// import usersCss from './users.css'

const url = "https://jsonplaceholder.typicode.com/albums";

const Users = () => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setUser(data);
  };
  // const dispatch = useDispatch();

  useEffect(() => {
    getUser();
  }, []);

  const [pageNumber, setPageNumber] = useState(0);

  const [openDel, setOpenDel] = useState(false);
  // const [delOption, setDelOption] = useState(false);

  // const showDelButton = () => {
  //   setOpenDel(true);
  // };

  // const showDelOption = () => {
  //   setDelOption(true);
  // };

  // const cancelDelOption = () => {
  //   setDelOption(false);
  //   setOpenDel(false);
  // };

  // const DelButton = () => {
  //   return (
  //     <button
  //       onClick={showDelOption}
  //       className="text-[16px] font-normal text-[#000000] py-[14px] px-[22.5px] absolute mt-[8px] ml-[-20px] bg-[#FFFFFF]"
  //       style={{ boxShadow: "0px 0px 10px 0px rgba(132, 132, 132, 0.15)" }}
  //     >
  //       Delete
  //     </button>
  //   );
  // };
  // const DelOption = () => {
  //   return (
  //     <div
  //       className="fixed top-0 w-[100%] h-[100%] max-h-[100%]"
  //       style={{ background: "rgba(20, 24, 31, 0.25)" }}
  //     >
  //       <div
  //         className="w-[30%] smDesktop:w-[40%] tabletAir:w-[50%] mx-auto pt-[31px] pb-[43px] rounded-lg mt-[140px] "
  //         style={{ background: "rgba(255, 255, 255, 1)" }}
  //       >
  //         <div className="">
  //           <div className="flex justify-end mb-[13px] ">
  //             <IoIosCloseCircleOutline
  //               size={24}
  //               onClick={cancelDelOption}
  //               className="text-[#7C7B7B] cursor-pointer mr-[28px] "
  //             />
  //           </div>
  //           <p className="text-[24px] leading-8 font-bold text-[#1A1941] text-center ">
  //             Are you sure you want to
  //           </p>
  //           <p className="text-[24px] leading-8 font-bold text-[#1A1941] text-center mt-2 ">
  //             delete this user?
  //           </p>
  //         </div>
  //         <div className="w-[80%] mx-auto flex justify-between">
  //           <button className="bg-[#1A1941] rounded-lg h-[50px] mt-[50px] px-[45px] text-[#FFFFFF] tracking-[10%] text-[16px] leading-5 font-extrabold">
  //             Delete
  //           </button>
  //           <button
  //             onClick={cancelDelOption}
  //             className="border-[#1A1941] border-[1px] rounded-lg h-[50px] mt-[50px] px-[45px] text-[#1A1941] tracking-[10%] text-[16px] leading-5 font-extrabold"
  //           >
  //             Cancel
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  // const displayUsers = user
  //   .slice(pagesVisited, pagesVisited + usersPerPage)
  //   .map((user) => {
  //     return (
  //       <tr
  //         key={user.id}
  //         className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A]"
  //       >
  //         <td className="pl-[45px] smDesk:pl-[30px] tabletAir:pl-[20px] text-[14px leading-[16.8px] font-[300] mt-[11px] py-auto">
  //           {user.id}
  //         </td>
  //         <td
  //           onClick={() => dispatch(openUsersEvent())}
  //           className="flex gap-[14px] mt-[11px] items-center cursor-pointer "
  //         >
  //           <img
  //             src={bum}
  //             alt=""
  //             className="w-[30px] h-[30px] object-cover mb-[14px]"
  //           />
  //           <p className="text-[14px] leading-[16.8px] font-[300]">
  //             Tejiri Tabor
  //           </p>
  //         </td>

  //         <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
  //           56
  //         </td>
  //         <td className=" text-[14px] leading-[16.8px] font-[300] mt-[11px] py-auto">
  //           1961
  //         </td>
  //         {!openDel ? (
  //           <td
  //             onClick={showDelButton}
  //             className=" text-[24px] leading-[16.8px] font-[700] mt-[11px] py-auto text-[#7C7B7B] cursor-pointer"
  //           >
  //             ...
  //           </td>
  //         ) : (
  //           <UsersDelete />
  //         )}
  //       </tr>
  //     );
  //   });

  const pageCount = Math.ceil(user?.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <main className="max-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pb-[180px]">
      <SideNav title="Users" display={"flex"} />

      <section className="px-[42px]">
        {/* search bar & filter */}
        <div className="flex items-center justify-between mt-[29px]">
          {/* search bar  */}
          <div className="bg-[#EFEFEF] flex items-center h-[49px] w-[30%] rounded-[8px]">
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
              <option value="filter">Filter By</option>
              <option value="recent">All</option>
              <option value="recent">Recent</option>
              <option value="older">Older</option>
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
            {/* {displayUsers} */}

            { user.slice(pagesVisited, pagesVisited + usersPerPage).map(({id}) => (

              <User key={id} id={id}/>
            ))
            }

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
      {/* {delOption && <DelOption />} */}
      <UsersDeleteOption />
    </main>
  );
};

export default Users;

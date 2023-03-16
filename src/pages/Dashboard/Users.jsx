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
import useFetchParticipant from "./User/userhooks/useFetchParticipant";


const Users = () => {
 

 

  const {data, isLoading} = useFetchParticipant();
  console.log(data?.data)
  // const dispatch = useDispatch();

  useEffect(() => {
   
  }, []);

  const [pageNumber, setPageNumber] = useState(0);

  const [openDel, setOpenDel] = useState(false);
 
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

 

  const pageCount = Math.ceil(data?.data?.length / usersPerPage);

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
        <table className="w-[100%]  mt-[21px] table-fixed  bg-white rounded-t-[20px]">
          <thead className="text-left text-[16px] font-[500] leading-[19.2px] bg-[#EEEEEE] rounded-t-[20px] h-[70px]">
            <tr className=" pl-[57px] rounded-t-[20px]">
              <th className="pt-[12px] pb-[12px] w-[10%] pl-[45px] smDesk:pl-[30px] tabletAir:pl-[20px] rounded-tl-[14px]">
                S/N
              </th>
              <th className="pt-[12px] pb-[12px] w-[35%]">User's Name</th>
              <th className="pt-[12px] pb-[12px] w-[15%]">Total Photos</th>
              <th className="pt-[12px] pb-[12px]">Total Events Attended</th>
              <th className="pt-[12px] pb-[12px] pr-[27px] w-[15%] rounded-tr-[14px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {displayUsers} */}

            {data?.data.slice(pagesVisited, pagesVisited + usersPerPage)?.map(( data, id ) => (
                <User key={id} id={id+1} fname={data?.full_name} tphoto={data?.eventsimagescount} eventAttended={data?.eventscount} im={data?.profile_photo} email={data?.email}/>
              ))}
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

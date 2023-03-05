import React, { useState, useEffect } from "react";
import SideNav from "../../../componets/SideNav";
import { HiOutlineCake } from "react-icons/hi";
import { FaGlobeAfrica } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import { IoLayers } from "react-icons/io5";
import { BiUpload } from "react-icons/bi";
import { BsImages } from "react-icons/bs";
import bum from "../../../assets/HBD to bunmi 20190716_003414.jpg";
import { FiCopy, FiArrowRightCircle } from "react-icons/fi";
import copy from "copy-to-clipboard";
import union from "../../../assets/SVG/Union (1).svg";
import union2 from "../../../assets/SVG/Union (2).svg";
import AddUser from "./AddUser";
import { useDispatch } from "react-redux";
import { openEvent } from "../../../Redux/features/createEventSlice";
import { openAddUser } from "../../../Redux/features/addUserSlice";
import EVeimage from "../../../assets/SVG/Vector5.svg";
import { uploadOpenImage } from "../../../Redux/features/uploadDPSlice";
import useFetchSingleEvent from "./eventhooks/useFetchSingleEvent";
import { useParams } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import EventImages from "./EventImages";
import useGetImages from './eventhooks/useGetImages';


const CreatedEvent = () => {

  const {id} = useParams();
  const {data, isLoading, isError} = useFetchSingleEvent(id);

  const {data:images} = useGetImages(id); 

    const dispatch = useDispatch();

    
    const text = data?.data?.copy;
    
    const copyToClipboard = () => {
      copy(text);
      alert(`You have copied "${text}"`);
    };
    
    const handleChange = (e) =>{
      const {name, checked} = e.target;
      // setSelectImage(e.target.value)
    }
   
 

  return (
    <main className="w-[100%] h-screen max-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <SideNav title="Event" display="flex" />
      <section className="mt-[32px] px-[42px]">
        {/*  */}
        <section className="flex justify-between">
          {/* event details */}
          <div className="flex">
            <img
              src={data?.data?.coverphoto}
              alt=""
              className="w-[150px] h-[150px] object-cover rounded-lg smDesk:w-[100px] smDesk:h-[100px]"
            />
            <div className="ml-[35px]">
              <h3 className="text-[30px] font-semibold leading-9 text-[#1A1941] smDesk:text-[24px] ">
                {data?.data?.title}
              </h3>
              {isLoading &&
                       <p className="">
                       <Skeleton/> 
                       </p>

              }
                       
              <p className="text-[#8A8A8A] text-[16px] font-normal leading-5 mt-2 smDesk:text-[14px]">
                
                            {data?.data?.date}
              </p>
              {isLoading &&
                       <p className="">
                       <Skeleton/> 
                       </p>

              }
                  
             
              <div className="">
              {/* {isLoading ?
                       <p className="">
                       <Skeleton/> 
                       </p> : */}
              <div className="flex items-center mt-[27.5px]">
                <img src={union} alt="" className="w-[20px] h-[20px]" />
                <p className="text-[16px] leading-5 font-normal ml-[10px] smDesk:text-[14px]">
                  Wedding Party
                </p>
              </div>
{/* } */}

              </div>
              {isLoading ?
                       <p className="">
                       <Skeleton/> 
                       </p> :
              <div className="flex items-center mt-[17px]">
                <img src={union2} alt="" className="w-[20px] h-[20px]" />
                <p className="text-[16px] leading-5 font-normal ml-[10px] smDesk:text-[14px]">
                  {data?.data?.venue}
                </p>
              </div>
              }
            </div>
          </div>

          {/* event Code and edit */}
          <div className="">
            {/* edit button */}
            <div
              className="flex items-center mb-3 justify-end"
              onClick={() => dispatch(openEvent())}
            >
              <CiEdit size={20} className="text-[#7C7B7B] cursor-pointer" />
              <p className="text-[16px] ml-[10px] cursor-pointer smDesk:text-[14px]">
                Edit
              </p>
            </div>

            {/*  */}
            <div className="flex">
            {isLoading ?
                       <p className="">
                       <Skeleton/> 
                       </p> :null}
                       
              <img
                src={data?.data?.qr}
                alt=""
                className="w-[75px] h-[75px] smDesk:w-[60px] smDesk:h-[60px]"
              />
          

              <div className="flex flex-col ml-[20px]">
                <h2 className="text-[16px] font-bold leading-5 text-[#8B8B8B] smDesk:text-[14px]">
                  Event Code:
                </h2>
                  {isLoading ? <Skeleton/> : 
                <div className="flex items-center">
                  <p className="text-[16px] leading-5 font-normal text-[#19192E] smDesk:text-[14px] ">
                    {data?.data?.code}
                  </p>
                  <FiCopy
                    size={16}
                    className="text-[#EE2339] ml-[10px]"
                    onClick={copyToClipboard}
                  />
                </div>
                  } 
              </div>
            </div>

            <div className="">
              <button
                onClick={() => dispatch(openAddUser())}
                className="text-[16px] flex items-center font-bold leading-5 border-[1px] border-[#1A1941] text-[#1A1941] h-12 px-8 rounded-lg ml-auto mt-[14px] smDesk:text-[14px]"
              >
                <AiOutlinePlus size={20} className="mr-2" /> Add Users
              </button>
            </div>
          </div>
        </section>

        {/*  */}

        <section className="">
          {/* menu */}
          <div className="flex items-center justify-between mt-5">
            <h3 className="text-[#1A1941] text-[24px] leading-7 font-semibold">
              Photos
            </h3>

            {/* if there is photos */}

            <div className={`${images?.data?.length == 0 && "hidden"} flex`}>
              <div className="flex items-center bg-[#FFFFFF] h-[49px] px-6">
                <IoLayers size={16} className="text-[#1A1941]" />
                <select
                  name="cars"
                  id="cars"
                  className="outline-none bg-transparent border-none text-[#1A1941] flex text-[16] font-bold items-center"
                >
                  <option value="volvo">Bulk Action</option>
                  <option value="saab">Delete</option>
                  
                </select>
              </div>
              <div className="">
                <button
                  onClick={() => dispatch(uploadOpenImage())}
                  className="text-[16px] flex items-center font-bold leading-5 border-[1px] bg-[#1A1941] text-white h-12 px-8 rounded-lg ml-[20px]"
                >
                  <BiUpload size={20} className="mr-2" /> Upload Images
                </button>
              </div>
            </div>
          </div>
          {/*  */}
        </section>

      {  
      images?.data?.length == 0 ?
      // no upload yet  
        <section className="mt-[100px] pb-[200px]">

          <img src={EVeimage} alt="" className="h-[70px] w-[70px] mx-auto" />
          <p className="text-[24px] font-normal leading-7 mt-5 text-[#6A6A6A] text-center">
            No photos uploaded
          </p>
          <div className="mt-[50px]">
            <button
              onClick={() => dispatch(uploadOpenImage())}
              className="text-[16px] flex items-center font-bold leading-5 border-[1px] bg-[#1A1941] text-white h-12 px-8 rounded-lg mx-auto"
            >
              <BiUpload size={20} className="mr-2" /> Upload Images
            </button>
          </div>
        </section>
        
        :
        // uploads 
       
        
          <EventImages />
          }
        
      </section>
    </main>
  );
};

export default CreatedEvent;

import React, { useState, useEffect,  } from "react";
import SideNav from "../../../componets/SideNav";
import { HiOutlineCake } from "react-icons/hi";
import { FaGlobeAfrica } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import { IoLayers } from "react-icons/io5";
import { BiUpload } from "react-icons/bi";
import { BsImages } from "react-icons/bs";
import eve from "../../../assets/IMG-20190708-WA0002.jpg";
import bum from "../../../assets/HBD to bunmi 20190716_003414.jpg";
import { FiCopy, FiArrowRightCircle } from "react-icons/fi";
import copy from "copy-to-clipboard";
import QR from "../../../assets/Vector (17).png";
import AddUser from "./AddUser";
import { useDispatch } from 'react-redux'
import { openEvent } from "../../../Redux/features/createEventSlice";
import { openAddUser } from "../../../Redux/features/addUserSlice";
import EVeimage from "../../../assets/SVG/Vector5.svg";
import { uploadOpenImage } from "../../../Redux/features/uploadDPSlice";

const url = "https://jsonplaceholder.typicode.com/albums";


const CreatedEvent = () => {
const dispatch = useDispatch()

  const [images, setImage] = useState([]);
  

  const [show, setShow] = useState(8);
 
  const getImage = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setImage(data);
  
  };

  useEffect(() => {
    getImage();
  }, []);

  const showAll = () => {
    setShow((prevValue) => prevValue + 8);
  };

  const text = "123456GT";

  const copyToClipboard = () => {
    copy(text);
    alert(`You have copied "${text}"`);
  };

  return (
    <main className="w-[100%] h-screen max-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <SideNav title="Event" display="flex" />
      <section className="mt-[32px] px-[42px]">
        {/*  */}
        <section className="flex justify-between">
          {/* event details */}
          <div className="flex">
            <img
              src={eve}
              alt=""
              className="w-[150px] h-[150px] object-cover rounded-lg smDesk:w-[100px] smDesk:h-[100px]"
            />
            <div className="ml-[35px]">
              <h3 className="text-[30px] font-semibold leading-9 text-[#1A1941] smDesk:text-[24px] ">
                Henry’s Wedding
              </h3>
              <p className="text-[#8A8A8A] text-[16px] font-normal leading-5 mt-2 smDesk:text-[14px]">
                September 30th, 2022
              </p>
              <div className="flex items-center mt-[27.5px]">
                <HiOutlineCake size={20} className="text-[#7C7B7B] " />
                <p className="text-[16px] leading-5 font-normal ml-[10px] smDesk:text-[14px]">
                  Wedding Party
                </p>
              </div>
              <div className="flex items-center mt-[17px]">
                <FaGlobeAfrica size={20} className="text-[#7C7B7B] " />
                <p className="text-[16px] leading-5 font-normal ml-[10px] smDesk:text-[14px]">
                  Lekki Lagos, Nigeria
                </p>
              </div>
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
              <img
                src={QR}
                alt=""
                className="w-[75px] h-[75px] smDesk:w-[60px] smDesk:h-[60px]"
              />
              <div className="flex flex-col ml-[20px]">
                <h2 className="text-[16px] font-bold leading-5 text-[#8B8B8B] smDesk:text-[14px]">
                  Event Code:
                </h2>
                <div className="flex items-center">
                  <p className="text-[16px] leading-5 font-normal text-[#19192E] smDesk:text-[14px] ">
                    {text}
                  </p>
                  <FiCopy
                    size={16}
                    className="text-[#EE2339] ml-[10px]"
                    onClick={copyToClipboard}
                  />
                </div>
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

            <div className="flex">
              <div className="flex items-center bg-[#FFFFFF] h-[49px] px-6">
                <IoLayers size={16} className="text-[#1A1941]" />
                <select
                  name="cars"
                  id="cars"
                  className="outline-none bg-transparent border-none text-[#1A1941] flex text-[16] font-bold items-center"
                >
                  <option value="volvo">Bulk Action</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
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

        {/* no upload yet */}
        <section className="mt-[100px] pb-[200px]">
          {/* <BsImages size={70} className="text-[#EE2339] mx-auto" /> */}
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
        {/*  */}

        {/* uploads */}
        <section className="pb-[100px] flex flex-wrap gap-4 relative">
          {images.slice(0, show).map((image) => (
            <div className="relative" key={image.id}>
              <img
                src={bum}
                alt=""
                className={`w-[250px] h-[250px] lgDesktop:w-[220px] lgDesktop:h-[220px] smDesktop:w-[160px] smDesktop:h-[160px] smDesk:w-[142px] smDesk:h-[142px] tablet:w-[226px] tablet:h-[226px] object-cover rounded-lg relative tabletAir:w-[250px] tabletAir:h-[250px]`}
              />

              <input
                id="green-checkbox"
                type="checkbox"
                value=""
                class="w-6 h-6 accent-[#1A1941]  rounded border-[#6A6A6A] border-[0px] absolute top-[16px] right-[16px]"
              />
            </div>
          ))}
          {images.length >= show && (
            <div
              className="h-[250px] w-[250px] lgDesktop:w-[220px] smDesktop:w-[160px] smDesktop:h-[160px] lgDesktop:h-[220px] smDesk:w-[142px] smDesk:h-[142px]  tabletAir:w-[250px] tabletAir:h-[250px] tablet:w-[226px] tablet:h-[226px]  lgDesktop:right-12 smDesktop:right-10 smDesk:right-2 absolute tabletAir:right-4 right-3 bottom-[100px] rounded-lg"
              style={{ background: "rgba(0, 0, 0, 0.4)" }}
            >
              <button
                onClick={showAll}
                className="text-[white] flex items-center text-[20px] leading-[24px] font-bold my-[50%] outline-none justify-center mx-[70px] lgDesktop:mx-[40px] smDesktop:mx-[20px] smDesk:mx-auto smDesk:my-[45%]"
              >
                View all <FiArrowRightCircle className="ml-[18px]" />
              </button>
            </div>
          )}
        </section>
      </section>
    </main>
  );
};

export default CreatedEvent;

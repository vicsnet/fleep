/** @format */

import React, { useState, useRef, useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiUpload, FiPlus } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { useDropzone } from "react-dropzone";
import info from "../../../assets/Union (1).png";
import EventQR from "./EventQR";
import ClipLoader from "react-spinners/ClipLoader";
import useFetchCreatePost from "./eventhooks/useFetchCreatePost";
import { useSelector, useDispatch } from "react-redux";
import {
  openEvent,
  closeEvent,
} from "../../../Redux/features/createEventSlice";
import Arrow from "../../../assets/SVG/Arrow.svg";
import DownArrow from "../../../assets/Arrow.png";
import { toast } from "react-toastify";
import useComponentVisible from "../../../hooks/useComponentVisible";
import useFetchListTypes from "./eventhooks/useFecthListTypes";
import useFetchListCategorieType from "./eventhooks/useFetchListCategorieType";
import useComponentCat from "../../../hooks/useComponentCat";
import useComponentMonetize from "../../../hooks/useComponentMonetize";

const NewEvent = () => {
  const open = useSelector((state) => state.crtEvent.open);

  const dispatch = useDispatch();

  const [showEventQR, setShowEventQR] = useState(false);
  // image Upload
  const [files, setFiles] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);

  const [eventTitle, setEventTitle] = useState("");
  const [eCategory, setECategory] = useState("");
  // const [eType, setEType] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState(0);
  const [venue, setVenue] = useState("");

  const [showMonetize, setShowMonetize] = useState(0);

  const [selected, setSelected] = useState(null);
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedMonetize, setSelectedMonetize] = useState("No")
  

  // To open the click Event
  
  const {ref,isComponentVisible:openEvent, setIsComponentVisible:setOpenEvent} = useComponentVisible(false);

  const {setRef, componentCategory:openCategory, setComponentCategory:setOpenCategory} = useComponentCat(false);

  const {setRefme,openMonetize:openMonetize, setOpenMonetize:setOpenMonetize} = useComponentMonetize(false);

  console.log(openEvent);
  // To show the hover
  const [privateHover, setPrivateHover] = useState(-1);

  const [monetizehover, setMonetizeHover] = useState(false);
  const [type, setType] = useState(0);

  // Error message
  const [message, setMessage] = useState("");

  const handleMonetizeChange = (e) => {
    const getValue = e.target.value;
    setShowMonetize(getValue);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const imagesf = files.map((file) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          alt="preiew"
          className="w-[250px] h-[250px] cover"
        />
      </div>
    </div>
  ));

  // fetching Event Types
  const {typesData, typesLoading, typesError} = useFetchListTypes();



  // Event Category

    const {categoryData, categoryLoading, categoryError} = useFetchListCategorieType();
  

  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const selectedFiles = e.dataTransfer.files;
    const selectedFilesArray = Array.from(selectedFiles);

    setSelectedImage((previousImage) =>
      previousImage.concat(selectedFilesArray)
    );
  };
  const handleChange = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    setSelectedImage((previousImage) =>
      previousImage.concat(selectedFilesArray)
    );
  };
  const uploadImage = (e) => {
    e.preventDefault();
    document.getElementById("selectFile").click();
  };
  console.log(files);

  //
  const { mutate, isLoading, isError, isSuccess } = useFetchCreatePost();
  // To submit the form
  const formSubmit = (e) => {
    e.preventDefault();
    if (
      eventTitle == "" ||
      eCategory == 0 ||
      venue == "" ||
      files == [] ||
      selectedImage == [] ||
      type == "" ||
      date == ""
    ) {
      setMessage("All Field Required");
    } else if (showMonetize == 1 && price == 0) {
      setMessage("Price can not be empty");
    } else {
      const person = {
        status: 1,
        title: eventTitle,
        monetize: showMonetize,
        amount: price,
        date: date,
        venue: venue,
        category_id: eCategory,
        type_id: type,
        cover_photo: selectedImage[0],
        watermark: files[0],
      };
      console.log(person);
      // return person;
      mutate(person);
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      setShowEventQR(true);
      setEventTitle("");
      setShowMonetize("");
      setPrice(0);
      setDate("");
      setVenue("");
      setShowMonetize(0);
      setType(0);
      setSelectedImage([]);
      setFiles([]);
    }
  }, [isSuccess, isError, message]);

  if (open) return null;

  return (
    <section 
      className="fixed top-0 max-h-screen h-screen w-[100%] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
      style={{ background: "rgba(20, 24, 31, 0.25)" }}
    >
      <div
      
        className="w-[70%] rounded-lg mt-[79px] mx-auto  pb-[60px] mb-[60px]"
        style={{ background: "rgba(255, 255, 255, 1)" }}
      >
        <div   className="w-[90%] mx-auto ">
          <div className="pt-[54px] flex justify-between">
            <h2 className="text-[24px] font-bold leading-7 text-[#1A1941]">
              Create Event
            </h2>
            <IoIosCloseCircleOutline
              onClick={() => dispatch(closeEvent())}
              size={24}
              className="text-[#7C7B7B] cursor-pointer"
            />
          </div>
          <p className="text-[#959595] text-[14px] font-normal mt-4 ">
            Fill the form to create an event
          </p>

          <form 
          // ref={ref}
          
           className="mt-[40px]">
          <div 
          setRef={setRef}
          // ref={ref} 
          className="">
            <div 
            // ref={ref} 
            className="flex gap-[24px]">
              <div className="w-[50%]">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 text-[#333333] font-normal"
                >
                  Event Tittle
                </label>
                <br />
                <input
                  type="text"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  placeholder="Enter tittle of the event"
                  className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#F9F9F9] h-[50px] pl-[20px] w-[100%]"
                  style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                />
              </div>

              <div 
              ref={setRef}
              className="w-[50%]">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 text-[#333333] font-normal"
                >
                  Event Category
                </label>
                <br />
                <div
                  onClick={() => setOpenCategory(!openCategory)}
                  className="flex items-center justify-between w-[100%] border-[1px] border-[#E5E5E5] pl-[20px] h-[50px] rounded-lg bg-[#F9F9F9] cursor-pointer"
                >
                  <p className="text-[14px] leading-[20.58px] ">
                    {selectedCat == null ? " select" : selectedCat}
                  </p>
                  <BiChevronDown className="text-[grey] text-[20px]" />
                </div>
                <div onClick={() => setOpenCategory(false)} className="w-[100%]">
                  <ul
                    onClick={() => setOpenCategory(false)}
                    className={`w-[306px] smDesk:w-[180px] flex flex-col justify-center  rounded-[4px] mt-[-4px] z-[1] cursor-pointer bg-[#FFFFFF] ${
                      openCategory ? "max-h-[166px] absolute" : "max-h-0 hidden"
                    }`}
                    style={{
                      boxShadow: "0px 0px 10px 0px rgba(132, 132, 132, 0.15)",
                    }}
                  >
                    {categoryData?.data?.map((event, i) => 
                    (
                      <li
                        key={i}
                        className="font-[400] text-[16px] leading-[20px] mt-[8px]  h-[48px] pt-[4px] relative "
                        onClick={() => {
                          setSelectedCat(event?.name);
                          setECategory(event?.id);
                          setOpenCategory(false);
                        }}
                      >
                        <p
                        onClick={() => setOpenCategory(false)}
                          onMouseEnter={() => setPrivateHover(event?.id)}
                          onMouseLeave={() => setPrivateHover(false)}
                          className="text-[#181818] pl-[34.5px] with hover:py-[8px] hover:text-[black]"
                        >
                          {event?.name}
                        </p>
                      </li>
                    ))}

            
                  </ul>
                </div>
              </div>
              
            </div>
            <div
            ref={ref} 
             className="flex gap-[24px] mt-6">
              <div 
              
              className="w-[50%]">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 text-[#333333] font-normal"
                >
                  Event Type
                </label>
                <br />
                <div
                  onClick={() => setOpenEvent(!openEvent)}
                  className="flex items-center justify-between w-[100%] border-[1px] border-[#E5E5E5] pl-[20px] h-[50px] rounded-lg bg-[#F9F9F9] "
                >
                  <p className="text-[14px] leading-[20.58px] ">
                    {selected == null ? " select" : selected}
                  </p>
                  <BiChevronDown className="text-[grey] text-[20px]" />
                </div>
                <div onClick={() => setOpenEvent(false)} className="w-[100%]">
                  <ul
                    onClick={() => setOpenEvent(false)}
                    className={`w-[306px] smDesk:w-[180px] flex flex-col justify-center  rounded-[4px] mt-[-4px] z-[1] cursor-pointer bg-[#FFFFFF] ${
                      openEvent ? "max-h-[166px] absolute" : "max-h-0 hidden"
                    }`}
                    style={{
                      boxShadow: "0px 0px 10px 0px rgba(132, 132, 132, 0.15)",
                    }}
                  >
                    {typesData?.data?.map((event, i) => 
                    (
                      <li
                        key={i}
                        className="font-[400] text-[16px] leading-[20px] mt-[8px]  h-[48px] pt-[4px] relative "
                        onClick={() => {
                          setOpenEvent(false);
                          setSelected(event?.name);
                          setType(event?.id);
                        }}
                      >
                        <p
                          onMouseEnter={() => setPrivateHover(event?.id)}
                          onMouseLeave={() => setPrivateHover(false)}
                          className="text-[#181818] pl-[34.5px] with hover:py-[8px] hover:text-[black]"
                        >
                          {event?.name}
                        </p>
                       
                        <div
                         className={` ${
                          privateHover === event?.id ? "z-[1] absolute" : " hidden"
                        }`}
                        >
                          <img
                            src={DownArrow}
                            alt=""
                            className="ml-[35.5px] mb-[-1px]"
                          />
                          <div className="w-[100px] bg-white shadow-lg rounded-sm ml-[34.5px] ">
                            <p className="w-[90%] mx-auto py-[6px] text-[10px] font-normal leading-4">
                              {event?.comment}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}

            
                  </ul>
                </div>
              </div>

              <div className="w-[50%]">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 text-[#333333] font-normal"
                >
                  Date
                </label>
                <br />
                <div className="flex items-center bg-[#EDEDED] rounded-lg">
                  <div className="h-[50px]  w-[50px] flex items-center ">
                    <AiOutlineCalendar
                      size={16}
                      className="text-[#7C7B7B] mx-auto"
                    />
                  </div>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Enter tittle of the event"
                    className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-r-lg bg-[#F9F9F9] h-[50px] pl-[20px] w-[100%] pr-5"
                    style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                  />
                </div>
              </div>
            </div>
            <div 
            // ref={ref} 
            className="w-[100%] flex gap-[26px] mt-6 flex-wrap relative">
              {monetizehover && (
                <div className="w-[200px] bg-white py-[6px] rounded-[2px] absolute right-[52%] top-[-46px]">
                  <p className="text-[10px] font-normal leading-[14.5px] w-[90%] mx-auto ">
                    If wish to monetize your photos Select the "Yes" option then
                    input the desired amount.
                  </p>
                  <img
                    src={Arrow}
                    alt=""
                    className="absolute bottom-[-6px] right-2 width-[20px]"
                  />
                </div>
              )}
              <div className="w-[48%] smDesktop:w-[48%] smDesk:w-[47.7%] tabletAir:w-[47%] tablet:w-[47.4%]">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 text-[#333333] font-normal flex justify-between items-center mb-[4px]"
                >
                  Monetize Photos
                  <img
                    src={info}
                    alt="info"
                    onMouseEnter={() => setMonetizeHover(true)}
                    onMouseLeave={() => setMonetizeHover(false)}
                    className="w-[14px] h-[14px]"
                  />
                </label>
                {/* <br /> */}
                <div 
                onClick={() => setOpenMonetize(!openMonetize)}
              ref={setRefme}
              >
               
                <div
                  onClick={() => setOpenMonetize(!openMonetize)}
                  className="flex items-center justify-between w-[100%] border-[1px] border-[#E5E5E5] pl-[20px] h-[50px] rounded-lg bg-[#F9F9F9] cursor-pointer"
                >
                  <p className="text-[14px] leading-[20.58px] ">
                    {selectedMonetize == "No" ? "No" : selectedMonetize}
                  </p>
                  <BiChevronDown className="text-[grey] text-[20px]" />
                </div>
                <div onClick={() => setOpenMonetize(false)} className="w-[100%]">
                  <ul
                    onClick={() => setOpenMonetize(false)}
                    className={`w-[306px] smDesk:w-[180px] flex flex-col justify-center  rounded-[4px] mt-[-4px] z-[1] cursor-pointer bg-[#FFFFFF] ${
                      openMonetize ? "max-h-[166px] absolute" : "max-h-0 hidden"
                    }`}
                    style={{
                      boxShadow: "0px 0px 10px 0px rgba(132, 132, 132, 0.15)",
                    }}
                  >
                      <li
                  
                        className="font-[400] text-[16px] leading-[20px] mt-[8px]  h-[48px] pt-[4px] relative "
                        onClick={() => {
                          setSelectedMonetize("No")
                          setShowMonetize(0)
                          setOpenMonetize(false);
                        }}
                      >
                        <p
                        onClick={() => setOpenMonetize(false)}
                          className="text-[#181818] pl-[34.5px] with hover:py-[8px] hover:text-[black]"
                        >
                          No
                        </p>
                      </li>
                      <li
                  
                  className="font-[400] text-[16px] leading-[20px] mt-[8px]  h-[48px] pt-[4px] relative "
                  onClick={() => {
                    setShowMonetize(1)
                    setSelectedMonetize("Yes")
                    setSelectedCat();
                    setECategory();
                    setOpenCategory(false);
                  }}
                >
                  <p
                  onClick={() => setOpenCategory(false)}
                    className="text-[#181818] pl-[34.5px] with hover:py-[8px] hover:text-[black]"
                  >
                    Yes
                  </p>
                </li>
            

            
                  </ul>
                </div>
              </div>
              </div>
              {showMonetize == 1 && (
                <div className="w-[49%] smDesktop:w-[47.7%] tablet:w-[47%]">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-5 text-[#333333] font-normal"
                  >
                    Price
                  </label>
                  <br />
                  <div className="flex items-center bg-[#EDEDED] rounded-lg">
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Enter Monetize Price"
                      className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#F9F9F9] h-[50px] pl-[20px] w-[100%] pr-5"
                      style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                    />
                  </div>
                </div>
              )}
              <div className="w-[49%] smDesktop:w-[47.7%] tablet:w-[47%]">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 text-[#333333] font-normal"
                >
                  Venue
                </label>
                <br />
                <input
                  type="text"
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  placeholder="Enter the venue of the event"
                  className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#F9F9F9] h-[50px] pl-[20px] w-[100%]"
                  style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                />
              </div>
            </div>

            {/*  input file*/}
            <div 
            // ref={ref}
             className="flex gap-[24px] mt-6">
              <div className="w-[50%]">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 text-[#333333] font-normal"
                >
                  Event Brand Watermark
                </label>
                <br />
                <div
                ref={ref}
                  className="mt-[15px] h-[280px] rounded-lg border-dashed border-[1px] flex justify-center items-center"
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  {imagesf.length === 0 ? (
                    <div className="cursor-pointer">
                      <FiUpload size={20} className="text-[#EE2339] mx-auto" />
                      <p className="text-[16px] font-normal leading-5 text-center text-[#8B8B8B] mt-[12px]">
                        Drag and drop files or click upload
                      </p>
                      <p className="text-[13px] font-normal leading-5 text-center text-[#8A8A8A] mt-[6px]">
                        250X250 px
                      </p>
                    </div>
                  ) : (
                    <>{imagesf}</>
                  )}
                </div>
              </div>

              <div className="w-[50%]">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 text-[#333333] font-normal"
                >
                  Event Custom Cover Photo
                </label>
                <br />

                <div className="mt-[15px]">
                  <input
                    type="file"
                    id="selectFile"
                    ref={fileInputRef}
                    name="image"
                    multiple
                    draggable
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleChange}
                  />
                  {selectedImage.length === 0 ? (
                    <div
                      className=" mt-[15px] h-[280px] border-[1px] border-dashed border-[#E0E0E0] rounded-lg w-[100%] mx-auto pt-[105px] pb-[105px] "
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                      onClick={uploadImage}
                    >
                      <div className="cursor-pointer">
                        <FiUpload
                          size={20}
                          className="text-[#EE2339] mx-auto"
                        />
                        <p className="text-[16px] font-normal leading-5 text-center text-[#8B8B8B] mt-[12px]">
                          Drag and drop files or click upload
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div 
                    // ref={ref}
                     className="w-[100%] h-[280px] mx-auto rounded-lg border-[1px] border-dashed border-[#E0E0E0] py-[12px]">
                      <img
                        src={URL.createObjectURL(
                          selectedImage[selectedImage.length - 1]
                        )}
                        alt=""
                        className="w-[250px] h-[250px] cover mx-auto"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* button */}
            <button
              onClick={formSubmit}
              className="bg-[#1A1941] rounded-lg h-[50px] mt-[50px] px-[40px] text-[#FFFFFF] tracking-[10%] text-[16px] leading-5"
            >
              {isLoading ? <ClipLoader color="#FFFFFF" /> : "Create Event "}
            </button>
</div>
          </form>
        </div>
      </div>
      <EventQR
        showQr={showEventQR}
        onClose={() => {
          setShowEventQR(false);
          dispatch(closeEvent());
        }}
      />
    </section>
  );
};

export default NewEvent;

/** @format */

import React, { useState, useRef, useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiUpload,} from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { useDropzone } from "react-dropzone";
import info from "../../../assets/Union (1).png";
import EventQR from "./EventQR";
import ClipLoader from "react-spinners/ClipLoader";
import useFetchCreatePost from "./eventhooks/useFetchCreatePost";
import { useSelector, useDispatch } from "react-redux";
import {

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
import { useParams } from "react-router-dom";
import useEditEvent from "./eventhooks/useEditEvent";
import useFetchSingleEvent from "./eventhooks/useFetchSingleEvent";
import EventDelOpt from "./EventDelOpt";
// import { useQueryClient } from "@tanstack/react-query";
// import { setQueryData } from "@tanstack/react-query"

const NewEvent = () => {

  const {id} = useParams();
  const open = useSelector((state) => state.crtEvent.open);

  const dispatch = useDispatch();

  const [showEventQR, setShowEventQR] = useState(false);
  // image Upload
  const [files, setFiles] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);

  const [eventTitle, setEventTitle] =  useState("") ;
  const [eCategory, setECategory] = useState("");
  // const [eType, setEType] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState(0);
  const [venue, setVenue] = useState("");

  const [showMonetize, setShowMonetize] = useState(0);

  const [selected, setSelected] = useState(null);
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedMonetize, setSelectedMonetize] = useState("No")
  const[qr, setQr]=useState("");
  const[qrImage, setQrImage] = useState("");
  const [closeDel, setCloseDel] = useState(false);
  
  

  // To open the click Event
  
 const {ref,isComponentVisible:openEvent, setIsComponentVisible:setOpenEvent} = useComponentVisible(false); 

  const {setref, componentCategory:openCategory, setComponentCategory:setOpenCategory} = useComponentCat(false);

  const {setrefme, openMonetize,  setOpenMonetize} = useComponentMonetize(false);

 
  // To show the hover
  const [privateHover, setPrivateHover] = useState(-1);

  const [monetizehover, setMonetizeHover] = useState(false);
  const [type, setType] = useState(0);

  // Error message
  // const [message, setMessage] = useState("");


  // const handleMonetizeChange = (e) => {
  //   const getValue = e.target.value;
  //   setShowMonetize(getValue);
  // };

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
  const {typesData} = useFetchListTypes();



  // Event Category

    const {categoryData} = useFetchListCategorieType();
  

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


  //
  const { mutate:registerNewEvent, isLoading, isError, error,isSuccess, success:comp, data:regData } = useFetchCreatePost();
 

  const{mutate:EditEvent, isError:errordet, isLoading:loading, isSuccess:success} = useEditEvent(id);

  const {data} = useFetchSingleEvent(id);
 
  // To submit the form
  const formSubmit = (e) => {
    e.preventDefault();
    if(!id){
      if (
        eventTitle === "" ||
        eCategory === 0 ||
        venue === "" ||
        files === [] ||
        selectedImage === [] ||
        type === "" ||
        date === ""
      ) {
        toast.error("All Field Required")
       
      } else if (showMonetize === 1 && price === 0) {
        toast.error("Price can not be empty")
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
        registerNewEvent(person )
      }
    }
    else{
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
      EditEvent(person);
    }
  };

  
  
  useEffect(() => {
    if (isError) {
        toast.error(error.response.data.message);
      
    }
    
    if (isSuccess) {
      setQr(regData?.data?.data?.code);
      setQrImage(regData?.data?.data?.qr);
   
      setShowEventQR(true);
      // toast.success(messageDe);
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

  }, [isSuccess, isError, error, comp, regData]);

useEffect(()=>{
  if(id){
    setEventTitle(data?.data?.title);
    setShowMonetize(data?.data?.monetize);
    setDate(data?.data?.date);
    setPrice(data?.data?.amount);
    setVenue(data?.data?.venue);
    setType(data?.data?.type_id );
  }
if(errordet){
  toast.error(error.response.data.message);
}
if(success){
  toast.success("Event Updated")
  dispatch(closeEvent())
  setEventTitle("");
  setShowMonetize("");
  setPrice(0);
  setDate("");
  setVenue("");
  setShowMonetize(0);
  setType(0);
}
}, [dispatch, id , errordet, success, error, data ]);

    


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
              {
                id ? "Edit Event" :
                "Create Event"
              }
            </h2>
            <IoIosCloseCircleOutline
              onClick={() => dispatch(closeEvent())}
              size={24}
              className="text-[#7C7B7B] cursor-pointer"
            />
          </div>
          <p className="text-[#959595] text-[14px] font-normal mt-4 ">
            {id ? "You can make edits to the form" :'Fill the form to create an event'}
          </p>

          <form 
          // ref={ref}
          
           className="mt-[40px]">
          <div 
          setref={setref}
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
                  placeholder={!id ? "Enter tittle of the event" : data?.data?.title}
                  className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#F9F9F9] h-[50px] pl-[20px] w-[100%]"
                  style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                />
              </div>

              <div 
              ref={setref}
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
                      openCategory ? "max-h-[166px] absolute pt-10 overflow-y-scroll scrollbar-thin pb-6 scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full" : "max-h-0 hidden"
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
                    {/* {id ?data?.data?.type 
                    : */}
                    <>
                    {selected == null ? " select" : selected}
                    </>
                    {/* } */}
                    
                  </p>
                  <BiChevronDown className="text-[grey] text-[20px]" />
                </div>
                <div onClick={() => setOpenEvent(false)} className="w-[100%]">
                  <ul
                    onClick={() => setOpenEvent(false)}
                    className={`w-[306px] smDesk:w-[180px] flex flex-col justify-center  rounded-[4px] mt-[-4px] z-[1] cursor-pointer bg-[#FFFFFF] ${
                      openEvent ? "max-h-[166px] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full absolute" : "max-h-0 hidden"
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
                          <div className="w-[200px] bg-white shadow-lg rounded-sm ml-[34.5px] ">
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
                    value={ date }
                    onChange={(e) => setDate(e.target.value)}
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
              ref={setrefme}
              >
               
                <div
                  onClick={() => setOpenMonetize(!openMonetize)}
                  className="flex items-center justify-between w-[100%] border-[1px] border-[#E5E5E5] pl-[20px] h-[50px] rounded-lg bg-[#F9F9F9] cursor-pointer"
                >
                  <p className="text-[14px] leading-[20.58px] ">
                    {selectedMonetize === "No" ? "No" : selectedMonetize}
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
                    // setSelectedCat();
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
              {showMonetize === 1 && (
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
                  placeholder={!id?"Enter the venue of the event": data?.data?.venue}
                  className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#F9F9F9] h-[50px] pl-[20px] w-[100%]"
                  style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                />
              </div>
            </div>

            {/*  input file*/}
            <div 
            // ref={ref}
             className={`  flex gap-[24px] mt-6`}>
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
                  className={`mt-[15px] h-[280px] rounded-lg border-dashed border-[1px] flex justify-center items-center`}
                  {...getRootProps()}
                >
                  <input {...getInputProps()}  />
                
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
                      onDragOver={id ? null : handleDragOver}
                      onDrop={id ? null : handleDrop}
                      onClick={id ? null : uploadImage}
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
                    onDragOver={ handleDragOver}
                    onDrop={ handleDrop}
                    onClick={ uploadImage}
                    // ref={ref}
                     className="w-[100%] h-[280px] mx-auto rounded-lg border-[1px] border-dashed border-[#E0E0E0] py-[12px]">
                      <img
                        src={URL.createObjectURL(
                          selectedImage[selectedImage.length - 1]
                        ) }
                        alt=""
                        className="w-[250px] h-[250px] cover mx-auto"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* button */}

            {
              id ?
              <div className="gap-4 flex">

              <button
              onClick={(e)=>{e.preventDefault(); setCloseDel(true)}}
              className="bg-[#EE2339] rounded-lg h-[50px] mt-[50px] px-[40px] text-[#FFFFFF] tracking-[10%] text-[16px] leading-5"
            >
              
           Delete Event
            </button> 
              <button
              onClick={formSubmit}
              className="bg-[#1A1941] rounded-lg h-[50px] mt-[50px] px-[40px] text-[#FFFFFF] tracking-[10%] text-[16px] leading-5"
            >
              
              {loading ? <ClipLoader color="#FFFFFF" /> : "Save Changes"}
            </button> 
              </div>
            :

            <button
              onClick={formSubmit}
              className="bg-[#1A1941] rounded-lg h-[50px] mt-[50px] px-[40px] text-[#FFFFFF] tracking-[10%] text-[16px] leading-5"
            >
              
              {isLoading ? <ClipLoader color="#FFFFFF" /> : "Create Event "}
            </button>
            }
</div>
          </form>
        </div>
      </div>
      {
closeDel &&
      <EventDelOpt id={data?.data?.id} closeDelete={()=>{setCloseDel(false)}}/>
      }
    
      <EventQR
      loading={isLoading}
      qrImage={qrImage}
      qr={qr}
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
